import UIKit
import WebKit
import Capacitor
import CoreSpotlight
import StoreKit

// MARK: - Native StoreKit 2 + StoreKit 1 Multi-Subscription & Legacy Lifetime Manager
private struct SK1FetchOutcome {
    let product: SKProduct?
    let error: Error?
}

@available(iOS 15.0, *)
final class HMGSStoreKitManager: NSObject, SKProductsRequestDelegate, SKPaymentTransactionObserver {
    static let shared = HMGSStoreKitManager()

    static let weeklyProductId = "com.hmgs.tuzakavcisi.sub.weekly"
    static let monthlyProductId = "com.hmgs.tuzakavcisi.sub.monthly"
    static let sixMonthProductId = "com.hmgs.tuzakavcisi.sub.sixmonths"
    static let lifetimeProductId = "com.hmgs.tuzakavcisi.lifetime.pro"

    static let allProductIds: Set<String> = [
        weeklyProductId,
        monthlyProductId,
        sixMonthProductId,
        lifetimeProductId
    ]

    private let storageKey = "hmgs_lifetime_pro_unlocked"
    private var updatesTask: Task<Void, Never>?

    private var cachedProducts: [String: Product] = [:]
    private var cachedSK1Products: [String: SKProduct] = [:]

    private var cachedWeeklyPrice: String = "99,99 ₺"
    private var cachedMonthlyPrice: String = "249,99 ₺"
    private var cachedSixMonthPrice: String = "899,99 ₺"

    private var sk1ProductRequest: SKProductsRequest?
    private var sk1ProductsContinuation: CheckedContinuation<SK1FetchOutcome, Never>?
    private var sk1RequestedProductId: String = sixMonthProductId
    private weak var sk1PurchaseBridge: HMGSBridgeViewController?
    private var sk1RestoreContinuation: CheckedContinuation<Bool, Never>?
    private var sk1PurchaseInFlight = false

    private override init() {
        super.init()
        SKPaymentQueue.default().add(self)
    }

    var isProUnlocked: Bool {
        get { UserDefaults.standard.bool(forKey: storageKey) }
        set { UserDefaults.standard.set(newValue, forKey: storageKey) }
    }

    private func formatSK1Price(_ product: SKProduct) -> String {
        let formatter = NumberFormatter()
        formatter.formatterBehavior = .behavior10_4
        formatter.numberStyle = .currency
        formatter.locale = product.priceLocale
        return formatter.string(from: product.price) ?? "249,99 ₺"
    }

    func startObservingTransactions(bridge: HMGSBridgeViewController?) {
        updatesTask?.cancel()
        updatesTask = Task {
            await refreshEntitlements(bridge: bridge)
            for await result in Transaction.updates {
                if case .verified(let transaction) = result,
                   Self.allProductIds.contains(transaction.productID) {
                    let active = (transaction.revocationDate == nil) &&
                        (transaction.expirationDate == nil || transaction.expirationDate! > Date())
                    await transaction.finish()
                    if active {
                        self.isProUnlocked = true
                        HMGSNativeHapticsEngine.shared.trigger(style: "success")
                        bridge?.notifyProStatus(
                            unlocked: true,
                            status: "purchased",
                            message: "PRO erişiminiz başarıyla aktif edildi!"
                        )
                    } else {
                        await self.refreshEntitlements(bridge: bridge)
                    }
                }
            }
        }
    }

    private func fetchSK2ProductsWithRetry(targetId: String, maxAttempts: Int = 3) async -> (Product?, Error?) {
        if let cached = cachedProducts[targetId] {
            return (cached, nil)
        }
        var lastError: Error?
        for attempt in 0..<maxAttempts {
            do {
                let products = try await Product.products(for: Array(Self.allProductIds))
                for p in products {
                    self.cachedProducts[p.id] = p
                    if p.id == Self.weeklyProductId {
                        self.cachedWeeklyPrice = p.displayPrice
                    } else if p.id == Self.monthlyProductId {
                        self.cachedMonthlyPrice = p.displayPrice
                    } else if p.id == Self.sixMonthProductId {
                        self.cachedSixMonthPrice = p.displayPrice
                    }
                }
                if let found = self.cachedProducts[targetId] {
                    return (found, nil)
                }
            } catch {
                lastError = error
            }
            if attempt + 1 < maxAttempts {
                let delayNs: UInt64 = attempt == 0 ? 400_000_000 : 900_000_000
                try? await Task.sleep(nanoseconds: delayNs)
            }
        }
        return (nil, lastError)
    }

    private func fetchSK1Product(targetId: String) async -> SK1FetchOutcome {
        if let cached = cachedSK1Products[targetId] {
            return SK1FetchOutcome(product: cached, error: nil)
        }
        return await withCheckedContinuation { continuation in
            DispatchQueue.main.async {
                self.sk1ProductsContinuation?.resume(returning: SK1FetchOutcome(product: nil, error: nil))
                self.sk1ProductsContinuation = continuation
                self.sk1RequestedProductId = targetId
                self.sk1ProductRequest?.cancel()
                let request = SKProductsRequest(productIdentifiers: Self.allProductIds)
                request.delegate = self
                self.sk1ProductRequest = request
                request.start()
            }
        }
    }

    func fetchLiveProductPrices(bridge: HMGSBridgeViewController?) async {
        _ = await fetchSK2ProductsWithRetry(targetId: Self.sixMonthProductId, maxAttempts: 2)
        if !cachedProducts.isEmpty {
            bridge?.dispatchWebEvent(name: "hmgs:proPrice", payload: [
                "weeklyDisplayPrice": cachedWeeklyPrice,
                "monthlyDisplayPrice": cachedMonthlyPrice,
                "sixMonthDisplayPrice": cachedSixMonthPrice
            ])
            return
        }
        _ = await fetchSK1Product(targetId: Self.sixMonthProductId)
        if !cachedSK1Products.isEmpty {
            if let w = cachedSK1Products[Self.weeklyProductId] {
                cachedWeeklyPrice = formatSK1Price(w)
            }
            if let m = cachedSK1Products[Self.monthlyProductId] {
                cachedMonthlyPrice = formatSK1Price(m)
            }
            if let s = cachedSK1Products[Self.sixMonthProductId] {
                cachedSixMonthPrice = formatSK1Price(s)
            }
            bridge?.dispatchWebEvent(name: "hmgs:proPrice", payload: [
                "weeklyDisplayPrice": cachedWeeklyPrice,
                "monthlyDisplayPrice": cachedMonthlyPrice,
                "sixMonthDisplayPrice": cachedSixMonthPrice
            ])
        }
    }

    func refreshEntitlements(bridge: HMGSBridgeViewController?) async {
        await fetchLiveProductPrices(bridge: bridge)
        var hasActiveEntitlement = false
        for await result in Transaction.currentEntitlements {
            if case .verified(let transaction) = result,
               Self.allProductIds.contains(transaction.productID),
               transaction.revocationDate == nil {
                if let exp = transaction.expirationDate {
                    if exp > Date() { hasActiveEntitlement = true }
                } else {
                    // Legacy non-consumable lifetime entitlement
                    hasActiveEntitlement = true
                }
            }
        }
        // Preserve already-verified entitlement if sandbox sync is transiently empty
        let resolved = hasActiveEntitlement || self.isProUnlocked
        if resolved != self.isProUnlocked {
            self.isProUnlocked = resolved
        }
        bridge?.notifyProStatus(
            unlocked: self.isProUnlocked,
            status: "synced",
            message: "",
            displayPrice: cachedSixMonthPrice
        )
    }

    @MainActor
    private func performSK2Purchase(_ product: Product) async throws -> Product.PurchaseResult {
        return try await product.purchase()
    }

    func purchasePlan(productId: String, bridge: HMGSBridgeViewController?) {
        let targetId = Self.allProductIds.contains(productId) ? productId : Self.sixMonthProductId
        Task {
            guard AppStore.canMakePayments && SKPaymentQueue.canMakePayments() else {
                bridge?.notifyProStatus(
                    unlocked: self.isProUnlocked,
                    status: "error",
                    message: "Bu cihazda Uygulama İçi Satın Alma kısıtlanmış. Ayarlar > Ekran Süresi bölümünden satın alımlara izin verin."
                )
                return
            }

            // 1. Primary path: StoreKit 2
            let (sk2Product, _) = await fetchSK2ProductsWithRetry(targetId: targetId, maxAttempts: 3)
            if let product = sk2Product {
                do {
                    let result = try await performSK2Purchase(product)
                    switch result {
                    case .success(let verification):
                        switch verification {
                        case .verified(let transaction):
                            self.isProUnlocked = true
                            await transaction.finish()
                            HMGSNativeHapticsEngine.shared.trigger(style: "success")
                            bridge?.notifyProStatus(
                                unlocked: true,
                                status: "purchased",
                                message: "Tebrikler! 33.000+ Hukuk Soru Bankası PRO erişiminiz başarıyla açıldı."
                            )
                        case .unverified:
                            bridge?.notifyProStatus(
                                unlocked: self.isProUnlocked,
                                status: "error",
                                message: "App Store doğrulaması tamamlanamadı. Lütfen Satın Alımları Geri Yükle seçeneğini deneyin."
                            )
                        }
                    case .userCancelled:
                        bridge?.notifyProStatus(
                            unlocked: self.isProUnlocked,
                            status: "cancelled",
                            message: "Satın alma işlemi iptal edildi."
                        )
                    case .pending:
                        bridge?.notifyProStatus(
                            unlocked: self.isProUnlocked,
                            status: "pending",
                            message: "Satın alma onayı bekleniyor."
                        )
                    @unknown default:
                        break
                    }
                } catch {
                    bridge?.notifyProStatus(
                        unlocked: self.isProUnlocked,
                        status: "error",
                        message: "Satın alma tamamlanamadı: \(error.localizedDescription)"
                    )
                }
                return
            }

            // 2. Fallback path: StoreKit 1 (SKProductsRequest + SKPaymentQueue)
            let sk1Outcome = await fetchSK1Product(targetId: targetId)
            if let sk1Product = sk1Outcome.product {
                DispatchQueue.main.async {
                    self.sk1PurchaseBridge = bridge
                    self.sk1PurchaseInFlight = true
                    let payment = SKMutablePayment(product: sk1Product)
                    SKPaymentQueue.default().add(payment)
                }
                return
            }

            bridge?.notifyProStatus(
                unlocked: self.isProUnlocked,
                status: "error",
                message: "App Store abonelik bilgisi şu an alınamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
            )
        }
    }

    func restorePurchases(bridge: HMGSBridgeViewController?) {
        Task {
            var restored = false
            do {
                try await AppStore.sync()
                for await result in Transaction.currentEntitlements {
                    if case .verified(let transaction) = result,
                       Self.allProductIds.contains(transaction.productID),
                       transaction.revocationDate == nil {
                        if let exp = transaction.expirationDate {
                            if exp > Date() { restored = true }
                        } else {
                            restored = true
                        }
                    }
                }
            } catch {
                // Fall through to SK1 restore
            }

            if !restored {
                restored = await withCheckedContinuation { continuation in
                    DispatchQueue.main.async {
                        self.sk1RestoreContinuation?.resume(returning: false)
                        self.sk1RestoreContinuation = continuation
                        SKPaymentQueue.default().restoreCompletedTransactions()
                    }
                }
            }

            if restored || self.isProUnlocked {
                self.isProUnlocked = true
                HMGSNativeHapticsEngine.shared.trigger(style: "success")
                bridge?.notifyProStatus(
                    unlocked: true,
                    status: "restored",
                    message: "PRO aboneliğiniz / satın alımınız başarıyla geri yüklendi!"
                )
            } else {
                HMGSNativeHapticsEngine.shared.trigger(style: "warning")
                bridge?.notifyProStatus(
                    unlocked: false,
                    status: "not_found",
                    message: "Bu Apple Kimliğine ait aktif bir abonelik veya önceki satın alım bulunamadı."
                )
            }
        }
    }

    // MARK: - SKProductsRequestDelegate
    func productsRequest(_ request: SKProductsRequest, didReceive response: SKProductsResponse) {
        for p in response.products {
            self.cachedSK1Products[p.productIdentifier] = p
        }
        let target = self.cachedSK1Products[self.sk1RequestedProductId]
        self.sk1ProductsContinuation?.resume(returning: SK1FetchOutcome(product: target, error: nil))
        self.sk1ProductsContinuation = nil
    }

    func request(_ request: SKRequest, didFailWithError error: Error) {
        self.sk1ProductsContinuation?.resume(returning: SK1FetchOutcome(product: nil, error: error))
        self.sk1ProductsContinuation = nil
    }

    // MARK: - SKPaymentTransactionObserver
    func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
        for tx in transactions {
            switch tx.transactionState {
            case .purchased, .restored:
                if Self.allProductIds.contains(tx.payment.productIdentifier) {
                    self.isProUnlocked = true
                    queue.finishTransaction(tx)
                    if self.sk1PurchaseInFlight {
                        self.sk1PurchaseInFlight = false
                        HMGSNativeHapticsEngine.shared.trigger(style: "success")
                        self.sk1PurchaseBridge?.notifyProStatus(
                            unlocked: true,
                            status: "purchased",
                            message: "Tebrikler! PRO erişiminiz başarıyla açıldı."
                        )
                    }
                } else {
                    queue.finishTransaction(tx)
                }
            case .failed:
                queue.finishTransaction(tx)
                if self.sk1PurchaseInFlight {
                    self.sk1PurchaseInFlight = false
                    let isCancelled = (tx.error as? SKError)?.code == .paymentCancelled
                    self.sk1PurchaseBridge?.notifyProStatus(
                        unlocked: self.isProUnlocked,
                        status: isCancelled ? "cancelled" : "error",
                        message: isCancelled ? "Satın alma işlemi iptal edildi." : (tx.error?.localizedDescription ?? "Satın alma tamamlanamadı.")
                    )
                }
            case .deferred, .purchasing:
                break
            @unknown default:
                break
            }
        }
    }

    func paymentQueueRestoreCompletedTransactionsFinished(_ queue: SKPaymentQueue) {
        self.sk1RestoreContinuation?.resume(returning: self.isProUnlocked)
        self.sk1RestoreContinuation = nil
    }

    func paymentQueue(_ queue: SKPaymentQueue, restoreCompletedTransactionsFailedWithError error: Error) {
        self.sk1RestoreContinuation?.resume(returning: false)
        self.sk1RestoreContinuation = nil
    }
}

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

// MARK: - Custom HMGS Bridge View Controller (StoreKit 2/1 + iPad Keyboard Shortcuts + Native Theme)
class HMGSBridgeViewController: CAPBridgeViewController, WKScriptMessageHandler {

    private var currentThemeIsLight: Bool = true

    override func viewDidLoad() {
        super.viewDidLoad()
        applyNativeChromeTheme(isLight: true)
        HMGSNativeHapticsEngine.shared.prepareGenerators()

        if let webView = self.webView {
            webView.isOpaque = false
            webView.configuration.userContentController.add(self, name: "hmgsNative")
        }

        HMGSStoreKitManager.shared.startObservingTransactions(bridge: self)
    }

    private func applyNativeChromeTheme(isLight: Bool) {
        currentThemeIsLight = isLight
        let bg = isLight
            ? UIColor(red: 246.0/255.0, green: 247.0/255.0, blue: 251.0/255.0, alpha: 1.0)
            : UIColor(red: 9.0/255.0, green: 13.0/255.0, blue: 22.0/255.0, alpha: 1.0)
        DispatchQueue.main.async {
            self.view.backgroundColor = bg
            self.webView?.backgroundColor = bg
            self.webView?.scrollView.backgroundColor = bg
            self.setNeedsStatusBarAppearanceUpdate()
        }
    }

    override var preferredStatusBarStyle: UIStatusBarStyle {
        return currentThemeIsLight ? .darkContent : .lightContent
    }

    override var keyCommands: [UIKeyCommand]? {
        let cmdTrue = UIKeyCommand(title: "Doğru / A Şıkkı", action: #selector(handleShortcutTrue), input: "1", modifierFlags: [.command])
        let cmdTrap = UIKeyCommand(title: "Yanlış / B Şıkkı", action: #selector(handleShortcutTrap), input: "2", modifierFlags: [.command])
        let cmdNext = UIKeyCommand(title: "Sonraki Soru", action: #selector(handleShortcutNext), input: "n", modifierFlags: [.command])
        let cmdBookmark = UIKeyCommand(title: "Deftere Kaydet", action: #selector(handleShortcutBookmark), input: "b", modifierFlags: [.command])
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

    func notifyProStatus(unlocked: Bool, status: String, message: String, displayPrice: String = "899,99 ₺") {
        let payload: [String: String] = [
            "unlocked": unlocked ? "true" : "false",
            "status": status,
            "message": message,
            "displayPrice": displayPrice
        ]
        dispatchWebEvent(name: "hmgs:proStatus", payload: payload)
    }

    func dispatchWebEvent(name: String, payload: [String: String]) {
        guard let data = try? JSONSerialization.data(withJSONObject: payload, options: []),
              let jsonString = String(data: data, encoding: .utf8) else { return }
        let js = "window.dispatchEvent(new CustomEvent('\(name)', { detail: \(jsonString) }));"
        DispatchQueue.main.async {
            self.webView?.evaluateJavaScript(js, completionHandler: nil)
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "hmgsNative",
              let body = message.body as? [String: Any],
              let action = body["action"] as? String else { return }

        switch action {
        case "haptic":
            let style = (body["style"] as? String) ?? "light"
            HMGSNativeHapticsEngine.shared.trigger(style: style)

        case "setTheme":
            let isLight = ((body["theme"] as? String) ?? "light") == "light"
            applyNativeChromeTheme(isLight: isLight)

        case "purchasePlan":
            let productId = (body["productId"] as? String) ?? HMGSStoreKitManager.sixMonthProductId
            HMGSNativeHapticsEngine.shared.trigger(style: "medium")
            HMGSStoreKitManager.shared.purchasePlan(productId: productId, bridge: self)

        case "purchaseLifetimePro":
            HMGSNativeHapticsEngine.shared.trigger(style: "medium")
            HMGSStoreKitManager.shared.purchasePlan(productId: HMGSStoreKitManager.sixMonthProductId, bridge: self)

        case "fetchProPrices":
            Task {
                await HMGSStoreKitManager.shared.fetchLiveProductPrices(bridge: self)
            }

        case "restorePurchases":
            HMGSNativeHapticsEngine.shared.trigger(style: "selection")
            HMGSStoreKitManager.shared.restorePurchases(bridge: self)

        case "checkProStatus":
            Task {
                await HMGSStoreKitManager.shared.refreshEntitlements(bridge: self)
            }

        case "shareCard":
            let text = (body["text"] as? String) ?? "HMGS • İYÖS • Hakimlik Hukuk Soru Bankası"
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
        let tab = (shortcutItem.userInfo?["targetTab"] as? String) ?? "vaka"
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
                payload: ["tab": "vaka", "category": branch, "source": "spotlight"]
            )
        }
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}
