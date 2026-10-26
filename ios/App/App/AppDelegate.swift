import UIKit
import Capacitor
import CoreSpotlight
import UserNotifications
import StoreKit
import AudioToolbox

// MARK: - Domain Catalog for Native iOS Spotlight & Quick Actions
struct HMGSLegalTopicItem {
    let identifier: String
    let branchCode: String
    let title: String
    let statutoryReference: String
    let summary: String
    let keywords: [String]
}

final class HMGSSpotlightCatalog {
    static let shared = HMGSSpotlightCatalog()

    let topics: [HMGSLegalTopicItem] = [
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.hmk.istinaf",
            branchCode: "HMK",
            title: "HMK İstinaf ve Temyiz Kanun Yolları",
            statutoryReference: "6100 Sayılı HMK m.341-373",
            summary: "İstinaf ve temyiz başvuru süreleri, kesinlik sınırları, tebliğden itibaren iki haftalık süre tuzakları.",
            keywords: ["HMK", "İstinaf", "Temyiz", "Kanun Yolu", "HMGS", "Hukuk Muhakemeleri"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.hmk.gorev.yetki",
            branchCode: "HMK",
            title: "HMK Görev, Kesin Yetki ve Yetki Sözleşmesi",
            statutoryReference: "6100 Sayılı HMK m.1-23",
            summary: "Asliye hukuk ve sulh hukuk görev ayrımı, tacirler ve kamu tüzel kişileri arasında yetki sözleşmesi şartları.",
            keywords: ["HMK", "Görev", "Kesin Yetki", "Sulh Hukuk", "Asliye Hukuk", "Yetki Sözleşmesi"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.cmk.tutuklama",
            branchCode: "CMK & TCK",
            title: "CMK Tutuklama, Gözaltı ve Adli Kontrol Süreleri",
            statutoryReference: "5271 Sayılı CMK m.90-115",
            summary: "Soruşturma ve kovuşturma evresinde azami tutukluluk süreleri, itiraz mercileri ve zorunlu müdafilik halleri.",
            keywords: ["CMK", "TCK", "Tutuklama", "Gözaltı", "Adli Kontrol", "Ceza Muhakemesi"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.iyuk.dava.sureleri",
            branchCode: "İdare & İYUK",
            title: "İYUK İptal ve Tam Yargı Dava Açma Süreleri",
            statutoryReference: "2577 Sayılı İYUK m.7-13",
            summary: "Danıştay ve idare mahkemelerinde 60 günlük, vergi mahkemelerinde 30 günlük genel dava açma süreleri ve üst makama başvuru.",
            keywords: ["İYUK", "İdare Hukuku", "İptal Davası", "Tam Yargı", "Danıştay", "Vergi Mahkemesi"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.anayasa.bireysel",
            branchCode: "Anayasa",
            title: "Anayasa Yargısı, Soyut Somut Norm Denetimi ve Bireysel Başvuru",
            statutoryReference: "1982 Anayasası m.148-153",
            summary: "Anayasa Mahkemesi iptal davası süreleri, 30 günlük bireysel başvuru süresi ve nitelikli çoğunluk kuralları.",
            keywords: ["Anayasa", "AYM", "Bireysel Başvuru", "Norm Denetimi", "TBMM", "Cumhurbaşkanı Kararnamesi"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.medeni.borclar",
            branchCode: "Medeni & Borçlar",
            title: "TMK ve TBK Ehliyet, Ayni Haklar ve Zamanaşımı Tuzakları",
            statutoryReference: "4721 Sayılı TMK & 6098 Sayılı TBK",
            summary: "Sebepsiz zenginleşme, haksız fiil, aşırı yararlanma (gabin) ve yanılma sürelerinde zamanaşımı ve hak düşürücü süre ayrımları.",
            keywords: ["Medeni Hukuk", "Borçlar Hukuku", "TMK", "TBK", "Zamanaşımı", "Hak Düşürücü Süre"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.ticaret.icra",
            branchCode: "Ticaret & İcra",
            title: "TTK Kıymetli Evrak, Şirketler ve İİK Takip Hukuku",
            statutoryReference: "6102 Sayılı TTK & 2004 Sayılı İİK",
            summary: "Genel haciz yoluyla takip, kambiyo senetlerine özgü takip, itirazın iptali ve itirazın kaldırılması süreleri.",
            keywords: ["TTK", "İİK", "İcra İflas", "Kambiyo", "Bonolar", "Anonim Şirket", "İtirazın İptali"]
        ),
        HMGSLegalTopicItem(
            identifier: "hmgs.topic.is.vergi.avukatlik",
            branchCode: "İş & Vergi & Avukatlık",
            title: "İş Hukuku, Vergi Usul ve 1136 Sayılı Avukatlık Kanunu",
            statutoryReference: "4857 Sayılı İş K., 213 Sayılı VUK, 1136 Sayılı Av. K.",
            summary: "İşe iade arabuluculuk süreleri, vergi cezalarında uzlaşma ve Avukatlık Kanunu disiplin cezaları ile staj hükümleri.",
            keywords: ["İş Hukuku", "Avukatlık Kanunu", "Vergi Hukuku", "İşe İade", "Arabuluculuk", "Baro"]
        )
    ]

    func indexAllTopicsInSpotlight() {
        var searchableItems: [CSSearchableItem] = []
        for topic in topics {
            let attributeSet = CSSearchableItemAttributeSet(itemContentType: "public.content")
            attributeSet.title = topic.title
            attributeSet.contentDescription = "\(topic.statutoryReference) — \(topic.summary)"
            attributeSet.keywords = topic.keywords
            let item = CSSearchableItem(
                uniqueIdentifier: topic.identifier,
                domainIdentifier: "com.hmgs.tuzakavcisi.statutes",
                attributeSet: attributeSet
            )
            item.expirationDate = Date.distantFuture
            searchableItems.append(item)
        }
        CSSearchableIndex.default().indexSearchableItems(searchableItems) { _ in }
    }
}

// MARK: - Home Screen Quick Actions Manager
final class HMGSQuickActionCoordinator {
    static let shared = HMGSQuickActionCoordinator()
    var pendingShortcutType: String?

    func registerDynamicQuickActions(application: UIApplication) {
        let practiceShortcut = UIApplicationShortcutItem(
            type: "com.hmgs.tuzakavcisi.action.practice",
            localizedTitle: "Yeni Soru Antrenmanı",
            localizedSubtitle: "Çözülmemiş kanun tuzaklarını çöz",
            icon: UIApplicationShortcutIcon(systemImageName: "bolt.shield.fill"),
            userInfo: ["targetTab": "antrenman" as NSSecureCoding, "bucket": "unsolved" as NSSecureCoding]
        )

        let wrongsShortcut = UIApplicationShortcutItem(
            type: "com.hmgs.tuzakavcisi.action.wrongs",
            localizedTitle: "Yanlışlar Sepeti",
            localizedSubtitle: "Hata yapılan maddeleri tekrar et",
            icon: UIApplicationShortcutIcon(systemImageName: "exclamationmark.triangle.fill"),
            userInfo: ["targetTab": "antrenman" as NSSecureCoding, "bucket": "wrong" as NSSecureCoding]
        )

        let examShortcut = UIApplicationShortcutItem(
            type: "com.hmgs.tuzakavcisi.action.exam",
            localizedTitle: "Süreli Deneme Sınavı",
            localizedSubtitle: "HMGS sınav simülasyonu başlat",
            icon: UIApplicationShortcutIcon(systemImageName: "timer"),
            userInfo: ["targetTab": "deneme" as NSSecureCoding]
        )

        let vaultShortcut = UIApplicationShortcutItem(
            type: "com.hmgs.tuzakavcisi.action.vault",
            localizedTitle: "Tuzak Defterim",
            localizedSubtitle: "Kaydedilen maddeleri incele",
            icon: UIApplicationShortcutIcon(systemImageName: "bookmark.fill"),
            userInfo: ["targetTab": "defter" as NSSecureCoding]
        )

        application.shortcutItems = [practiceShortcut, wrongsShortcut, examShortcut, vaultShortcut]
    }
}

// MARK: - Local Exam Study Reminder Notification Service
final class HMGSStudyNotificationService: NSObject, UNUserNotificationCenterDelegate {
    static let shared = HMGSStudyNotificationService()

    func configure() {
        UNUserNotificationCenter.current().delegate = self
    }

    func scheduleDailyStudyReminder(hour: Int = 20, minute: Int = 0) {
        let center = UNUserNotificationCenter.current()
        center.requestAuthorization(options: [.alert, .sound, .badge]) { granted, _ in
            guard granted else { return }
            let content = UNMutableNotificationContent()
            content.title = "HMGS Tuzak Avcısı — Günlük Mevzuat Antrenmanı"
            content.body = "Bugünkü kanun maddesi hedefini tamamla, süre ve merci tuzaklarını kaçırma!"
            content.sound = .default

            var dateComponents = DateComponents()
            dateComponents.hour = hour
            dateComponents.minute = minute

            let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: true)
            let request = UNNotificationRequest(
                identifier: "com.hmgs.tuzakavcisi.daily.reminder",
                content: content,
                trigger: trigger
            )
            center.add(request, withCompletionHandler: nil)
        }
    }

    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        willPresent notification: UNNotification,
        withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void
    ) {
        completionHandler([.banner, .sound])
    }
}

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        HMGSSpotlightCatalog.shared.indexAllTopicsInSpotlight()
        HMGSQuickActionCoordinator.shared.registerDynamicQuickActions(application: application)
        HMGSStudyNotificationService.shared.configure()
        return true
    }

    func applicationWillResignActive(_ application: UIApplication) {
    }

    func applicationDidEnterBackground(_ application: UIApplication) {
    }

    func applicationWillEnterForeground(_ application: UIApplication) {
    }

    func applicationDidBecomeActive(_ application: UIApplication) {
    }

    func applicationWillTerminate(_ application: UIApplication) {
    }

    func application(
        _ application: UIApplication,
        configurationForConnecting connectingSceneSession: UISceneSession,
        options: UIScene.ConnectionOptions
    ) -> UISceneConfiguration {
        if let shortcutItem = options.shortcutItem {
            HMGSQuickActionCoordinator.shared.pendingShortcutType = shortcutItem.type
        }
        let config = UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
        config.delegateClass = SceneDelegate.self
        return config
    }
}
