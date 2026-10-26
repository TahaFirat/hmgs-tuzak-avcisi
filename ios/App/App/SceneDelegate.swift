import UIKit
import WebKit
import Capacitor
import CoreSpotlight
import StoreKit

// MARK: - Native Haptics & Feedback Engine
final class HMGSNativeHapticsEngine {
    static let shared = HMGSNativeHapticsEngine()

    private let lightImpact = UIImpactFeedbackGenerator(style: .light)
    private let mediumImpact = UIImpactFeedbackGenerator(style: .medium)
    private let rigidImpact = UIImpactFeedbackGenerator(style: .rigid)
    private let selectionFeedback = UISelectionFeedbackGenerator()
    private let notificationFeedback = UINotificationFeedbackGenerator()

    func prepareGenerators() {
        lightImpact.prepare()
        mediumImpact.prepare()
        selectionFeedback.prepare()
        notificationFeedback.prepare()
    }

    func trigger(style: String) {
        DispatchQueue.main.async {
            switch style {
            case "success":
                self.notificationFeedback.notificationOccurred(.success)
            case "error":
                self.notificationFeedback.notificationOccurred(.error)
            case "warning":
                self.notificationFeedback.notificationOccurred(.warning)
            case "selection":
                self.selectionFeedback.selectionChanged()
            case "rigid":
                self.rigidImpact.impactOccurred()
            case "medium":
                self.mediumImpact.impactOccurred()
            default:
                self.lightImpact.impactOccurred()
            }
        }
    }
}

// MARK: - Custom HMGS Bridge View Controller (iPad Keyboard Shortcuts + Native Message Handler)
class HMGSBridgeViewController: CAPBridgeViewController, WKScriptMessageHandler {

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 9.0/255.0, green: 13.0/255.0, blue: 22.0/255.0, alpha: 1.0)
        HMGSNativeHapticsEngine.shared.prepareGenerators()

        if let webView = self.webView {
            webView.backgroundColor = UIColor(red: 9.0/255.0, green: 13.0/255.0, blue: 22.0/255.0, alpha: 1.0)
            webView.isOpaque = false
            webView.configuration.userContentController.add(self, name: "hmgsNative")
        }
    }

    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }

    // Native iPadOS / iOS Hardware Keyboard Shortcuts for Legal Study
    override var keyCommands: [UIKeyCommand]? {
        let cmdTrue = UIKeyCommand(
            title: "Doğru (Kanunla Uyumlu)",
            action: #selector(handleShortcutTrue),
            input: "1",
            modifierFlags: [.command]
        )
        let cmdTrap = UIKeyCommand(
            title: "Tuzak Var (Çeldirici)",
            action: #selector(handleShortcutTrap),
            input: "2",
            modifierFlags: [.command]
        )
        let cmdNext = UIKeyCommand(
            title: "Sonraki Soru",
            action: #selector(handleShortcutNext),
            input: "n",
            modifierFlags: [.command]
        )
        let cmdBookmark = UIKeyCommand(
            title: "Deftere Kaydet",
            action: #selector(handleShortcutBookmark),
            input: "b",
            modifierFlags: [.command]
        )
        return [cmdTrue, cmdTrap, cmdNext, cmdBookmark]
    }

    @objc private func handleShortcutTrue() {
        HMGSNativeHapticsEngine.shared.trigger(style: "selection")
        dispatchWebEvent(name: "hmgs:keyboardShortcut", payload: ["command": "answer_true"])
    }

    @objc private func handleShortcutTrap() {
        HMGSNativeHapticsEngine.shared.trigger(style: "selection")
        dispatchWebEvent(name: "hmgs:keyboardShortcut", payload: ["command": "answer_trap"])
    }

    @objc private func handleShortcutNext() {
        HMGSNativeHapticsEngine.shared.trigger(style: "light")
        dispatchWebEvent(name: "hmgs:keyboardShortcut", payload: ["command": "next_card"])
    }

    @objc private func handleShortcutBookmark() {
        HMGSNativeHapticsEngine.shared.trigger(style: "medium")
        dispatchWebEvent(name: "hmgs:keyboardShortcut", payload: ["command": "toggle_bookmark"])
    }

    func dispatchWebEvent(name: String, payload: [String: String]) {
        guard let data = try? JSONSerialization.data(withJSONObject: payload, options: []),
              let jsonString = String(data: data, encoding: .utf8) else { return }
        let js = "window.dispatchEvent(new CustomEvent('\(name)', { detail: \(jsonString) }));"
        DispatchQueue.main.async {
            self.webView?.evaluateJavaScript(js, completionHandler: nil)
        }
    }

    // MARK: - WKScriptMessageHandler (Web -> Native iOS Bridge)
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "hmgsNative",
              let body = message.body as? [String: Any],
              let action = body["action"] as? String else { return }

        switch action {
        case "haptic":
            let style = (body["style"] as? String) ?? "light"
            HMGSNativeHapticsEngine.shared.trigger(style: style)

        case "shareCard":
            let text = (body["text"] as? String) ?? "HMGS Tuzak Avcısı — Mevzuat Çalışma Kartı"
            presentNativeShareSheet(text: text)

        case "scheduleReminder":
            let hour = (body["hour"] as? Int) ?? 20
            let minute = (body["minute"] as? Int) ?? 0
            HMGSStudyNotificationService.shared.scheduleDailyStudyReminder(hour: hour, minute: minute)
            HMGSNativeHapticsEngine.shared.trigger(style: "success")

        case "requestReview":
            if let windowScene = view.window?.windowScene {
                SKStoreReviewController.requestReview(in: windowScene)
            }

        default:
            break
        }
    }

    private func presentNativeShareSheet(text: String) {
        DispatchQueue.main.async {
            let activityVC = UIActivityViewController(activityItems: [text], applicationActivities: nil)
            if let popover = activityVC.popoverPresentationController {
                popover.sourceView = self.view
                popover.sourceRect = CGRect(x: self.view.bounds.midX, y: self.view.bounds.midY, width: 0, height: 0)
                popover.permittedArrowDirections = []
            }
            self.present(activityVC, animated: true, completion: nil)
        }
    }
}

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?
    private weak var bridgeController: HMGSBridgeViewController?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        let rootVC = HMGSBridgeViewController()
        self.bridgeController = rootVC

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = rootVC
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)

        if let shortcut = connectionOptions.shortcutItem {
            DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
                self.routeShortcut(shortcut)
            }
        }
    }

    func windowScene(
        _ windowScene: UIWindowScene,
        performActionFor shortcutItem: UIApplicationShortcutItem,
        completionHandler: @escaping (Bool) -> Void
    ) {
        routeShortcut(shortcutItem)
        completionHandler(true)
    }

    private func routeShortcut(_ shortcutItem: UIApplicationShortcutItem) {
        HMGSNativeHapticsEngine.shared.trigger(style: "medium")
        let tab = (shortcutItem.userInfo?["targetTab"] as? String) ?? "antrenman"
        let bucket = (shortcutItem.userInfo?["bucket"] as? String) ?? "unsolved"
        bridgeController?.dispatchWebEvent(
            name: "hmgs:nativeNavigation",
            payload: ["tab": tab, "bucket": bucket, "source": "quick_action"]
        )
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        if userActivity.activityType == CSSearchableItemActionType,
           let uniqueIdentifier = userActivity.userInfo?[CSSearchableItemActivityIdentifier] as? String {
            let topic = HMGSSpotlightCatalog.shared.topics.first { $0.identifier == uniqueIdentifier }
            let branch = topic?.branchCode ?? "ALL"
            HMGSNativeHapticsEngine.shared.trigger(style: "selection")
            bridgeController?.dispatchWebEvent(
                name: "hmgs:nativeNavigation",
                payload: ["tab": "antrenman", "category": branch, "source": "spotlight"]
            )
        }
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}
