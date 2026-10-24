import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS KAPSAMLI MEVZUAT HAVUZU — PART 2
 * İş ve Sosyal Güvenlik Hukuku, Vergi Hukuku, Avukatlık Hukuku,
 * MÖHUK / Milletlerarası Hukuk / Hukuk Felsefesi & Tarihi ve Medeni Hukuk Derinlik Kuralları
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART2_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. İŞ VE SOSYAL GÜVENLİK HUKUKU (rule-is-14 .. rule-is-20)
  // =========================================================================
  {
    id: 'rule-is-14',
    branch: 'İş Hukuku',
    subTopic: 'Alt İşverenlik (Taşeronluk) Şartları ve Müteselsil Sorumluluk',
    articleRef: '4857 s.K. M. 2/6-7',
    trueStatement:
      'Bir işverenden, işyerinde yürüttüğü mal veya hizmet üretimine ilişkin yardımcı işlerinde veya asıl işin bir bölümünde işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde iş alan ve bu iş için görevlendirdiği işçilerini sadece bu işyerinde aldığı işte çalıştıran diğer işveren ile iş aldığı işveren arasında kurulan ilişkiye asıl işveren-alt işveren ilişkisi denir; bu ilişkide asıl işveren, alt işverenin işçilerine karşı o işyeri ile ilgili olarak bu Kanundan, iş sözleşmesinden veya alt işverenin taraf olduğu toplu iş sözleşmesinden doğan yükümlülüklerinden alt işveren ile birlikte (müteselsilen) sorumludur.',
    trueHighlight: ['işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde', 'alt işveren ile birlikte (müteselsilen) sorumludur'],
    trueCorrectPhrase: 'asıl işin bir bölümü ancak işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde alt işverene verilebilir; asıl işveren alt işverenle birlikte müteselsilen sorumludur',
    baseExplanation: '4857 s.K. m. 2/6-7 uyarınca yardımcı işler alt işverene serbestçe verilebilirken, asıl işin bir bölümü ancak "işletmenin ve işin gereği İLE teknolojik nedenlerle uzmanlık gerektiren işlerde" birlikte gerçekleşirse verilebilir; muvazaa halinde alt işveren işçileri başlangıçtan itibaren asıl işverenin işçisi sayılır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu ilişkide asıl işveren, alt işverenin işçilerine karşı o işyeri ile ilgili olarak bu Kanundan, iş sözleşmesinden veya alt işverenin taraf olduğu toplu iş sözleşmesinden doğan yükümlülüklerinden alt işveren ile birlikte (müteselsilen) sorumludur',
      wrongPhrase: 'ancak geçerli bir alt işverenlik sözleşmesi kurulduğunda asıl işverenin alt işveren işçilerinin kıdem tazminatı ve ücret alacaklarından herhangi bir hukuki sorumluluğu kalmaz',
      correctPhrase: 'bu ilişkide asıl işveren, alt işverenin işçilerine karşı o işyeri ile ilgili olarak bu Kanundan, iş sözleşmesinden veya alt işverenin taraf olduğu toplu iş sözleşmesinden doğan yükümlülüklerinden alt işveren ile birlikte (müteselsilen) sorumludur',
      explanation: '4857 s.K. m. 2/6 uyarınca alt işverenlik sözleşmesi tamamen hukuka uygun olsa dahi, asıl işveren alt işverenin işçilerine karşı o işyeriyle ilgili İş Kanunundan, iş sözleşmesinden ve TİS’ten doğan borçlardan alt işverenle birlikte müteselsilen sorumludur!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yardımcı işlerinde veya asıl işin bir bölümünde işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde',
      wrongPhrase: 'yardımcı işlerinde veya hiçbir uzmanlık şartı aranmaksızın asıl işin tamamında ya da dilediği herhangi bir bölümünde maliyet düşürmek amacıyla',
      correctPhrase: 'yardımcı işlerinde veya asıl işin bir bölümünde işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde',
      explanation: '4857 s.K. m. 2/7 uyarınca asıl işin bir bölümü ancak işletmenin ve işin gereği ile teknolojik nedenlerle uzmanlık gerektiren işlerde alt işverene verilebilir; aksi halde ilişki muvazaalı sayılır!'
    }
  },
  {
    id: 'rule-is-15',
    branch: 'İş Hukuku',
    subTopic: 'İşyerinin Devri ve Devreden İşverenin Sorumluluk Süresi (2 Yıl)',
    articleRef: '4857 s.K. M. 6',
    trueStatement:
      'İşyeri veya işyerinin bir bölümü hukukî bir işleme dayalı olarak başka birine devredildiğinde, devir tarihinde işyerinde mevcut olan iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer; devirden önce doğmuş olan ve devir tarihinde ödenmesi gereken borçlardan devreden ve devralan işveren birlikte sorumludurlar, ancak devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır.',
    trueHighlight: ['bütün hak ve borçları ile birlikte devralana geçer', 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır'],
    trueCorrectPhrase: 'işyeri devrinde devirden önce doğmuş borçlardan devreden işverenin müteselsil sorumluluğu devir tarihinden itibaren 2 yıl ile sınırlıdır (ancak kıdem tazminatında 1475 s.K. m. 14/2 uyarınca 2 yıllık sınır uygulanmaz, kendi dönemiyle sınırlı olarak devam eder!)',
    baseExplanation: '4857 s.K. m. 6 uyarınca işyerinin devri işçi veya işveren için tek başına haklı fesih sebebi oluşturmaz; devreden işverenin devirden önce doğmuş borçlardan müteselsil sorumluluğu 2 yıl sürer.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır',
      wrongPhrase: 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren beş yıl ile sınırlıdır',
      correctPhrase: 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır',
      explanation: '4857 s.K. m. 6/3 (ve TBK m. 428) uyarınca işyeri devrinde devreden işverenin devirden önce doğmuş borçlardan müteselsil sorumluluğu 5 yıl değil, devir tarihinden itibaren 2 yıl ile sınırlıdır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'devir tarihinde işyerinde mevcut olan iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer',
      wrongPhrase: 'işyerinin devri üzerine mevcut iş sözleşmeleri kendiliğinden sona erer ve işçiler salt devir sebebine dayanarak derhâl haklı nedenle fesih hakkını kullanabilirler',
      correctPhrase: 'devir tarihinde işyerinde mevcut olan iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer',
      explanation: '4857 s.K. m. 6/5 açık hükmü uyarınca devreden veya devralan işveren iş sözleşmesini sırf işyerinin devri nedeniyle feshedemez ve devir işçi yönünden de tek başına haklı fesih sebebi oluşturmaz!'
    }
  },
  {
    id: 'rule-is-16',
    branch: 'İş Hukuku',
    subTopic: 'İşverenin Ücret Ödeme Borcunda Temerrüdü ve İşçinin Çalışmaktan Kaçınma Hakkı (20 Gün)',
    articleRef: '4857 s.K. M. 34',
    trueStatement:
      'Ücreti ödeme gününden itibaren yirmi gün içinde mücbir bir neden dışında ödenmeyen işçi, iş görme borcunu yerine getirmekten kaçınabilir; bu nedenle kişisel kararlarına dayanarak iş görme borcunu yerine getirmemeleri sayısal olarak toplu bir nitelik kazansa dahi grev olarak nitelendirilemez; gününde ödenmeyen ücretler için mevduata uygulanan en yüksek faiz oranı uygulanır.',
    trueHighlight: ['ödeme gününden itibaren yirmi gün içinde mücbir bir neden dışında ödenmeyen işçi, iş görme borcunu yerine getirmekten kaçınabilir', 'grev olarak nitelendirilemez', 'mevduata uygulanan en yüksek faiz oranı uygulanır'],
    trueCorrectPhrase: 'ücreti ödeme gününden itibaren 20 gün içinde mücbir sebep dışında ödenmeyen işçi iş görmekten kaçınabilir (grev sayılmaz ve bu nedenle iş sözleşmesi feshedilemez); gününde ödenmeyen ücrete mevduata uygulanan en yüksek faiz işletilir',
    baseExplanation: '4857 s.K. m. 34 uyarınca 20 günlük süre dolmadan işçi çalışmaktan kaçınamaz; 20 gün geçtikten sonra çalışmaktan kaçınan işçilerin iş sözleşmeleri bu nedenle feshedilemez ve yerlerine yeni işçi alınamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ödeme gününden itibaren yirmi gün içinde mücbir bir neden dışında ödenmeyen işçi, iş görme borcunu yerine getirmekten kaçınabilir',
      wrongPhrase: 'ödeme gününden itibaren on gün içinde ödenmeyen işçi, iş görme borcunu yerine getirmekten kaçınabilir',
      correctPhrase: 'ödeme gününden itibaren yirmi gün içinde mücbir bir neden dışında ödenmeyen işçi, iş görme borcunu yerine getirmekten kaçınabilir',
      explanation: '4857 s.K. m. 34/1 uyarınca işçinin ücret ödenmemesi nedeniyle iş görme borcunu yerine getirmekten kaçınabilmesi için ödeme gününden itibaren 10 gün değil, 20 gün geçmiş olması gerekir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'gününde ödenmeyen ücretler için mevduata uygulanan en yüksek faiz oranı uygulanır',
      wrongPhrase: 'gününde ödenmeyen ücret alacakları için 3095 sayılı Kanuna göre yalnızca adi kanuni faiz oranı uygulanır',
      correctPhrase: 'gününde ödenmeyen ücretler için mevduata uygulanan en yüksek faiz oranı uygulanır',
      explanation: '4857 s.K. m. 34/1 son cümle uyarınca gününde ödenmeyen ücretler için adi yasal faiz değil, mevduata uygulanan en yüksek faiz oranı uygulanır!'
    }
  },
  {
    id: 'rule-is-17',
    branch: 'İş Hukuku',
    subTopic: 'Ücretin Saklı Kısmı (1/4 Haciz Sınırı) ve Ücret Kesme Cezası (En Fazla 2 Gündelik)',
    articleRef: '4857 s.K. M. 35 & 38',
    trueStatement:
      'İşçilerin aylık ücretlerinin dörtte birinden fazlası haczedilemez veya başkasına devir ve temlik olunamaz (ancak işçinin bakmak zorunda olduğu aile üyeleri için hâkim tarafından takdir edilecek nafaka borçları bu sınırlamaya tabi değildir); işveren toplu sözleşme veya iş sözleşmelerinde gösterilmiş olan sebepler dışında işçiye ücret kesme cezası veremez ve yapılacak kesintiler bir ayda iki gündelikten fazla olamaz.',
    trueHighlight: ['aylık ücretlerinin dörtte birinden fazlası haczedilemez veya başkasına devir ve temlik olunamaz', 'nafaka borçları bu sınırlamaya tabi değildir', 'bir ayda iki gündelikten fazla olamaz'],
    trueCorrectPhrase: 'işçi ücretinin en fazla 1/4’ü haczedilebilir (nafaka alacakları hariç); disiplin cezası olarak ücret kesintisi bir ayda 2 gündelikten fazla olamaz ve Çalışma ve Sosyal Güvenlik Bakanlığı hesabına yatırılır',
    baseExplanation: '4857 s.K. m. 35 ve m. 38 uyarınca ücretin 1/4’ünden fazlası haczedilemez; ücret kesme cezası ise bir ayda 2 gündelikten fazla olamaz ve işverene kalmaz, kesildiği tarihten itibaren 1 ay içinde Bakanlık hesabına yatırılır.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'aylık ücretlerinin dörtte birinden fazlası haczedilemez veya başkasına devir ve temlik olunamaz (ancak işçinin bakmak zorunda olduğu aile üyeleri için hâkim tarafından takdir edilecek nafaka borçları bu sınırlamaya tabi değildir); işveren toplu sözleşme veya iş sözleşmelerinde gösterilmiş olan sebepler dışında işçiye ücret kesme cezası veremez ve yapılacak kesintiler bir ayda iki gündelikten fazla olamaz',
      wrongPhrase: 'aylık ücretlerinin üçte birinden fazlası haczedilemez; işverenin işçiye vereceği ücret kesme cezası ise bir ayda beş gündelikten fazla olamaz ve kesilen tutar işverenin kasasına gelir kaydedilir',
      correctPhrase: 'aylık ücretlerinin dörtte birinden fazlası haczedilemez veya başkasına devir ve temlik olunamaz (ancak işçinin bakmak zorunda olduğu aile üyeleri için hâkim tarafından takdir edilecek nafaka borçları bu sınırlamaya tabi değildir); işveren toplu sözleşme veya iş sözleşmelerinde gösterilmiş olan sebepler dışında işçiye ücret kesme cezası veremez ve yapılacak kesintiler bir ayda iki gündelikten fazla olamaz',
      explanation: '4857 s.K. m. 35 ve m. 38 uyarınca ücret haczi sınırı 1/3 değil 1/4’tür; ücret kesme cezası üst sınırı ise bir ayda 2 gündeliktir ve kesilen paralar işverene kalmaz, Çalışma ve Sosyal Güvenlik Bakanlığı hesabına yatırılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak işçinin bakmak zorunda olduğu aile üyeleri için hâkim tarafından takdir edilecek nafaka borçları bu sınırlamaya tabi değildir',
      wrongPhrase: 'hâkim tarafından takdir edilen nafaka borçları da dahil olmak üzere hiçbir alacak için ücretin dörtte birinden fazlası haczedilemez',
      correctPhrase: 'ancak işçinin bakmak zorunda olduğu aile üyeleri için hâkim tarafından takdir edilecek nafaka borçları bu sınırlamaya tabi değildir',
      explanation: '4857 s.K. m. 35 açık hükmü uyarınca hâkim tarafından takdir edilen nafaka borçları 1/4 haciz sınırına tabi değildir!'
    }
  },
  {
    id: 'rule-is-18',
    branch: 'İş Hukuku',
    subTopic: 'Telafi Çalışması Süresi (4 Ay İçinde Günde En Fazla 3 Saat)',
    articleRef: '4857 s.K. M. 64',
    trueStatement:
      'Zorunlu nedenlerle işin durması, ulusal bayram ve genel tatillerden önce veya sonra işyerinin tatil edilmesi veya benzer nedenlerle işyerinde normal çalışma sürelerinin önemli ölçüde altında çalışılması ya da işçinin talebi ile kendisine izin verilmesi hâllerinde, işveren dört ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir; telafi çalışmaları, günlük en çok çalışma süresini (11 saati) aşmamak koşulu ile günde üç saatten fazla olamaz ve tatil günlerinde telafi çalışması yaptırılamaz.',
    trueHighlight: ['dört ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir', 'günlük en çok çalışma süresini (11 saati) aşmamak koşulu ile günde üç saatten fazla olamaz ve tatil günlerinde telafi çalışması yaptırılamaz'],
    trueCorrectPhrase: 'telafi çalışması (7226 s.K. değişikliğiyle 2 aydan 4 aya çıkarılmıştır!) 4 ay içinde, günlük 11 saati aşmamak üzere günde en fazla 3 saat yaptırılabilir; fazla çalışma sayılmaz ve tatil günlerinde yaptırılamaz',
    baseExplanation: '4857 s.K. m. 64 uyarınca telafi çalışması yaptırma süresi 7226 sayılı Kanun ile 2 aydan 4 aya çıkarılmıştır; günde en çok 3 saat yapılabilir, tatil günlerinde yapılamaz ve fazla çalışma veya fazla sürelerle çalışma sayılmaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işveren dört ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir; telafi çalışmaları, günlük en çok çalışma süresini (11 saati) aşmamak koşulu ile günde üç saatten fazla olamaz ve tatil günlerinde telafi çalışması yaptırılamaz',
      wrongPhrase: 'işveren bir ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir; telafi çalışmaları günde beş saate kadar ve hafta tatili günlerinde de yaptırılabilir',
      correctPhrase: 'işveren dört ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir; telafi çalışmaları, günlük en çok çalışma süresini (11 saati) aşmamak koşulu ile günde üç saatten fazla olamaz ve tatil günlerinde telafi çalışması yaptırılamaz',
      explanation: '4857 s.K. m. 64 uyarınca telafi çalışması süresi 4 aydır, günde 3 saatten fazla olamaz ve tatil günlerinde telafi çalışması yaptırılamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'dört ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir',
      wrongPhrase: 'yaptırılan telafi çalışmaları fazla çalışma sayılır ve işçiye yüzde elli zamlı ücret ödenir',
      correctPhrase: 'dört ay içinde çalışılmayan süreler için telafi çalışması yaptırabilir',
      explanation: '4857 s.K. m. 64/2 açık hükmü uyarınca telafi çalışmaları fazla çalışma veya fazla sürelerle çalışma sayılmaz; bu nedenle zamlı ücret ödenmez!'
    }
  },
  {
    id: 'rule-is-19',
    branch: 'İş Hukuku',
    subTopic: 'Denkleştirme Süresi (2 Ay, TİS ile 4 Ay, Turizmde 4/6 Ay) ve Gece Çalışması (7,5 Saat)',
    articleRef: '4857 s.K. M. 63 & 69',
    trueStatement:
      'Tarafların anlaşması ile haftalık normal çalışma süresi, işyerlerinde haftanın çalışılan günlerine, günde onbir saati aşmamak koşulu ile farklı şekilde dağıtılabilir; bu hâlde iki aylık süre içinde (denkleştirme süresi) işçinin haftalık ortalama çalışma süresi normal haftalık çalışma süresini (45 saati) aşamaz ve denkleştirme süresi toplu iş sözleşmeleri ile dört aya kadar artırılabilir (turizm sektöründe dört ay, TİS ile altı aya kadar); çalışma hayatında "gece" en geç saat 20.00’de başlayarak en erken saat 06.00’ya kadar geçen ve her hâlde en fazla onbir saat süren dönemdir ve işçilerin gece çalışmaları yedi buçuk saati geçemez.',
    trueHighlight: ['günde onbir saati aşmamak koşulu ile', 'iki aylık süre içinde (denkleştirme süresi)', 'toplu iş sözleşmeleri ile dört aya kadar artırılabilir', 'işçilerin gece çalışmaları yedi buçuk saati geçemez'],
    trueCorrectPhrase: 'günlük azami çalışma süresi 11 saattir; olağan denkleştirme süresi 2 aydır (TİS ile 4 ay; turizmde 4 ay / TİS ile 6 ay); gece çalışmaları kural olarak 7,5 saati geçemez (turizm, özel güvenlik ve sağlık hizmeti işlerinde işçinin yazılı onayıyla 7,5 saatin üzerinde gece çalışması yapılabilir)',
    baseExplanation: '4857 s.K. m. 63 ve m. 69 uyarınca günlük çalışma üst sınırı 11 saat, gece çalışması üst sınırı 7,5 saattir (ancak turizm, özel güvenlik ve sağlık hizmetlerinde işçinin yazılı onayıyla 7,5 saati aşan gece çalışması yaptırılabilir).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'günde onbir saati aşmamak koşulu ile farklı şekilde dağıtılabilir; bu hâlde iki aylık süre içinde (denkleştirme süresi) işçinin haftalık ortalama çalışma süresi normal haftalık çalışma süresini (45 saati) aşamaz ve denkleştirme süresi toplu iş sözleşmeleri ile dört aya kadar artırılabilir',
      wrongPhrase: 'günde on dört saati aşmamak koşulu ile farklı şekilde dağıtılabilir; bu hâlde altı aylık denkleştirme süresi içinde haftalık ortalama çalışma süresi aşamaz ve bu süre toplu iş sözleşmesiyle bir yıla kadar artırılabilir',
      correctPhrase: 'günde onbir saati aşmamak koşulu ile farklı şekilde dağıtılabilir; bu hâlde iki aylık süre içinde (denkleştirme süresi) işçinin haftalık ortalama çalışma süresi normal haftalık çalışma süresini (45 saati) aşamaz ve denkleştirme süresi toplu iş sözleşmeleri ile dört aya kadar artırılabilir',
      explanation: '4857 s.K. m. 63 uyarınca günlük azami çalışma süresi 11 saat, genel denkleştirme süresi ise 2 aydır (toplu iş sözleşmesi ile 4 aya, turizm sektöründe ise 4 aydan TİS ile 6 aya kadar artırılabilir)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işçilerin gece çalışmaları yedi buçuk saati geçemez',
      wrongPhrase: 'turizm, özel güvenlik ve sağlık hizmeti yürütülen işler de dahil olmak üzere hiçbir sektörde işçinin yazılı onayı bulunsa dahi yedi buçuk saatin üzerinde gece çalışması yaptırılamaz',
      correctPhrase: 'işçilerin gece çalışmaları yedi buçuk saati geçemez',
      explanation: '4857 s.K. m. 69/3 uyarınca gece çalışması kural olarak 7,5 saati geçemez; ANCAK turizm, özel güvenlik ve sağlık hizmeti yürütülen işlerde işçinin yazılı onayının alınması şartıyla yedi buçuk saatin üzerinde gece çalışması yaptırılabilir!'
    }
  },
  {
    id: 'rule-is-20',
    branch: 'İş Hukuku',
    subTopic: 'Kanuni Grev ve Lokavt Kararı Alma ve Uygulama Süreleri (60 Gün & 6 İş Günü)',
    articleRef: '6356 s.K. M. 60',
    trueStatement:
      'Uyuşmazlığın tespiti tutanağının tebliğinden itibaren altmış gün içinde grev kararı alınabilir ve bu süre içerisinde altı iş günü önceden karşı tarafa bildirilecek tarihte uygulamaya konulabilir; bu süre içerisinde grev kararının alınmaması veya uygulanacağı tarihin karşı tarafa bildirilmemesi hâlinde toplu iş sözleşmesi yapma yetkisi düşer; Cumhurbaşkanı, genel sağlığı veya millî güvenliği bozucu nitelikte ise karar verilmiş veya başlanmış olan kanuni bir grevi veya lokavtı altmış gün süre ile erteleyebilir.',
    trueHighlight: ['Uyuşmazlığın tespiti tutanağının tebliğinden itibaren altmış gün içinde grev kararı alınabilir ve bu süre içerisinde altı iş günü önceden karşı tarafa bildirilecek tarihte uygulamaya konulabilir', 'genel sağlığı veya millî güvenliği bozucu nitelikte ise karar verilmiş veya başlanmış olan kanuni bir grevi veya lokavtı altmış gün süre ile erteleyebilir'],
    trueCorrectPhrase: 'arabulucu uyuşmazlık tutanağının tebliğinden itibaren 60 gün içinde grev kararı alınmalı ve 6 iş günü önceden karşı tarafa bildirilerek uygulamaya konulmalıdır; Cumhurbaşkanı yalnız genel sağlık veya milli güvenlik sebebiyle grevi 60 gün erteleyebilir',
    baseExplanation: '6356 s.K. m. 60 ve m. 63 uyarınca 60 gün içinde grev kararı alınmazsa sendikanın yetkisi düşer; erteleme süresi sonunda anlaşma sağlanamazsa Yüksek Hakem Kurulu uyuşmazlığı çözer.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altmış gün içinde grev kararı alınabilir ve bu süre içerisinde altı iş günü önceden karşı tarafa bildirilecek tarihte uygulamaya konulabilir',
      wrongPhrase: 'otuz gün içinde grev kararı alınabilir ve karşı tarafa önceden bildirim yapılmaksızın derhâl uygulamaya konulabilir',
      correctPhrase: 'altmış gün içinde grev kararı alınabilir ve bu süre içerisinde altı iş günü önceden karşı tarafa bildirilecek tarihte uygulamaya konulabilir',
      explanation: '6356 s.K. m. 60/1 uyarınca uyuşmazlık tutanağının tebliğinden itibaren grev kararı alma süresi 30 gün değil 60 gündür ve uygulama tarihi karşı tarafa en az 6 iş günü önceden bildirilmek zorundadır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Cumhurbaşkanı, genel sağlığı veya millî güvenliği bozucu nitelikte ise karar verilmiş veya başlanmış olan kanuni bir grevi veya lokavtı altmış gün süre ile erteleyebilir',
      wrongPhrase: 'Çalışma ve Sosyal Güvenlik Bakanı, ekonomik verimliliği düşürücü nitelikte gördüğü kanuni bir grevi doksan gün süre ile erteleyebilir',
      correctPhrase: 'Cumhurbaşkanı, genel sağlığı veya millî güvenliği bozucu nitelikte ise karar verilmiş veya başlanmış olan kanuni bir grevi veya lokavtı altmış gün süre ile erteleyebilir',
      explanation: '6356 s.K. m. 63 uyarınca grev erteleme yetkisi Çalışma Bakanına değil Cumhurbaşkanına aittir; yalnızca "genel sağlık veya millî güvenlik" sebepleriyle ve 60 gün süreyle ertelenebilir!'
    }
  },

  // =========================================================================
  // 2. VERGİ HUKUKU VE VUK / 6183 EK KURALLARI (rule-vergi-7 .. rule-vergi-12)
  // =========================================================================
  {
    id: 'rule-vergi-7',
    branch: 'Vergi',
    subTopic: 'Vergi Tarh Yöntemleri: Beyannameye Dayanan, İkmalen, Re’sen ve İdarece Tarh',
    articleRef: 'VUK M. 25, 29, 30 & Mükerrer 30',
    trueStatement:
      'Türk vergi sisteminde asıl olan mükellefin beyanı üzerine yapılan tarhiyattır ve beyanname üzerine tarh edilen vergilere karşı kural olarak dava açılamaz (ancak ihtirazi kayıtla verilen beyannameler ile vergi hataları hariçtir); defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak matrah veya matrah farkının tamamen veya kısmen maddi delillerle saptanması hâlinde ikmalen vergi tarhı, vergi matrahının tamamen veya kısmen defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak tespitine imkân bulunmayan hâllerde ise takdir komisyonları veya vergi inceleme elemanlarınca re’sen vergi tarhı yapılır.',
    trueHighlight: ['beyanname üzerine tarh edilen vergilere karşı kural olarak dava açılamaz (ancak ihtirazi kayıtla verilen beyannameler ile vergi hataları hariçtir)', 'maddi delillerle saptanması hâlinde ikmalen vergi tarhı', 'tespitine imkân bulunmayan hâllerde ise takdir komisyonları veya vergi inceleme elemanlarınca re’sen vergi tarhı yapılır'],
    trueCorrectPhrase: 'VUK m. 378/2 uyarınca mükellefler beyan ettikleri matrahlara ve bu matrahlar üzerinden tarh edilen vergilere karşı dava açamazlar (ancak ihtirazi kayıtla beyan ve vergi hataları istisnadır!); defter/belgeye dayalı ek matrah farkı tespitinde ikmalen tarh, defter/belgeden tespit imkânı bulunmayan hallerde ise re’sen tarh yapılır',
    baseExplanation: 'Vergi Hukukunun en klasik sınav sorusu VUK m. 378/2 kuralıdır: Mükellef kendi beyannamesine karşı dava açamaz; ancak beyannameyi "ihtirazi kayıtla" vermişse veya işlemde "vergi hatası" varsa dava açabilir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'beyanname üzerine tarh edilen vergilere karşı kural olarak dava açılamaz (ancak ihtirazi kayıtla verilen beyannameler ile vergi hataları hariçtir)',
      wrongPhrase: 'mükellefler ihtirazi kayıt koymaksızın kendi beyannameleri üzerine tarh ve tahakkuk ettirilen vergilere karşı da otuz gün içinde her zaman vergi mahkemesinde dava açabilirler',
      correctPhrase: 'beyanname üzerine tarh edilen vergilere karşı kural olarak dava açılamaz (ancak ihtirazi kayıtla verilen beyannameler ile vergi hataları hariçtir)',
      explanation: 'VUK m. 378/2 uyarınca mükellefler beyan ettikleri matrahlara ve bu matrahlar üzerinden tarh edilen vergilere karşı dava açamazlar; dava açılabilmesi için beyannamenin ihtirazi kayıtla verilmiş olması veya vergi hatası bulunması gerekir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak matrah veya matrah farkının tamamen veya kısmen maddi delillerle saptanması hâlinde ikmalen vergi tarhı, vergi matrahının tamamen veya kısmen defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak tespitine imkân bulunmayan hâllerde ise takdir komisyonları veya vergi inceleme elemanlarınca re’sen vergi tarhı yapılır',
      wrongPhrase: 'vergi beyannamesinin kanuni süresi geçtiği hâlde verilmemiş olması durumunda yalnızca ikmalen vergi tarhı yapılır ve re’sen tarh yoluna başvurulamaz',
      correctPhrase: 'defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak matrah veya matrah farkının tamamen veya kısmen maddi delillerle saptanması hâlinde ikmalen vergi tarhı, vergi matrahının tamamen veya kısmen defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak tespitine imkân bulunmayan hâllerde ise takdir komisyonları veya vergi inceleme elemanlarınca re’sen vergi tarhı yapılır',
      explanation: 'VUK m. 30/2-1 uyarınca vergi beyannamesinin kanuni süresi geçtiği halde verilmemiş olması re’sen vergi tarhı sebebidir!'
    }
  },
  {
    id: 'rule-vergi-8',
    branch: 'Vergi',
    subTopic: 'Kanuni Temsilcilerin ve Limited Şirket Ortaklarının Vergi/Amme Borcundan Sorumluluğu',
    articleRef: 'VUK M. 10 & 6183 s.K. M. 35, Mük. 35',
    trueStatement:
      'Tüzel kişilerle küçüklerin ve kısıtlıların mükellef veya vergi sorumlusu olmaları hâlinde bunlara düşen ödevler kanuni temsilcileri tarafından yerine getirilir; tüzel kişilerin malvarlığından tamamen veya kısmen alınamayan vergi ve buna bağlı alacaklar, kanuni ödevleri yerine getirmeyen kanuni temsilcilerin varlıklarından alınır; limited şirket ortakları ise şirketten tamamen veya kısmen tahsil edilemeyen veya tahsil edilemeyeceği (anlaşılan) amme alacağından sermaye hisseleri oranında doğrudan doğruya sorumludurlar.',
    trueHighlight: ['tüzel kişilerin malvarlığından tamamen veya kısmen alınamayan vergi ve buna bağlı alacaklar, kanuni ödevleri yerine getirmeyen kanuni temsilcilerin varlıklarından alınır', 'limited şirket ortakları ise şirketten tamamen veya kısmen tahsil edilemeyen veya tahsil edilemeyeceği (anlaşılan) amme alacağından sermaye hisseleri oranında doğrudan doğruya sorumludurlar'],
    trueCorrectPhrase: 'kanuni temsilciler (A.Ş. yönetim kurulu / Ltd. Şti. müdürleri) şirketten tahsil edilemeyen amme alacaklarının tamamından şahsi malvarlıklarıyla sorumludur; limited şirket ortakları ise şirketten tahsil edilemeyen amme alacaklarından sermaye payları oranında sorumludur (anonim şirketlerde ise yönetim kurulu üyesi olmayan adi ortakların kamu borcundan sorumluluğu yoktur!)',
    baseExplanation: 'Vergi ve Ticaret Hukuku kesişimindeki en önemli HMGS farkı: Limited şirket ortakları şirketten tahsil edilemeyen kamu borçlarından sermaye payları oranında sorumludur (6183 s.K. m. 35); Anonim şirket ortakları ise sermaye borcunu ödemişse şirketin kamu borcundan sorumlu değildir!',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'limited şirket ortakları ise şirketten tamamen veya kısmen tahsil edilemeyen veya tahsil edilemeyeceği (anlaşılan) amme alacağından sermaye hisseleri oranında doğrudan doğruya sorumludurlar',
      wrongPhrase: 'hem limited şirket ortakları hem de anonim şirketin yönetim kurulunda yer almayan pay sahipleri şirketin tüm vergi borçlarından sermaye paylarına bakılmaksızın müteselsilen ve sınırsız olarak sorumludurlar',
      correctPhrase: 'limited şirket ortakları ise şirketten tamamen veya kısmen tahsil edilemeyen veya tahsil edilemeyeceği (anlaşılan) amme alacağından sermaye hisseleri oranında doğrudan doğruya sorumludurlar',
      explanation: '6183 s.K. m. 35 uyarınca limited şirket ortakları amme alacağının tamamından değil, yalnız "sermaye hisseleri oranında" sorumludur; anonim şirketin yönetim kurulunda olmayan pay sahiplerinin ise amme borcundan sorumluluğu yoktur!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tüzel kişilerin malvarlığından tamamen veya kısmen alınamayan vergi ve buna bağlı alacaklar, kanuni ödevleri yerine getirmeyen kanuni temsilcilerin varlıklarından alınır',
      wrongPhrase: 'vergi dairesi asıl borçlu tüzel kişi hakkında hiçbir takip yapmaksızın doğrudan doğruya kanuni temsilcinin veya ortakların malvarlığına haciz uygulayabilir',
      correctPhrase: 'tüzel kişilerin malvarlığından tamamen veya kısmen alınamayan vergi ve buna bağlı alacaklar, kanuni ödevleri yerine getirmeyen kanuni temsilcilerin varlıklarından alınır',
      explanation: 'VUK m. 10 ve 6183 s.K. m. 35/Mük. 35 uyarınca kanuni temsilcilerin ve limited şirket ortaklarının sorumluluğu fer’i (ikincil) niteliktedir; önce asıl borçlu şirketten tahsil imkanının kalmadığının (tamamen veya kısmen tahsil edilemediğinin veya edilemeyeceğinin) anlaşılması gerekir!'
    }
  },
  {
    id: 'rule-vergi-9',
    branch: 'Vergi',
    subTopic: 'Vergi Cezalarında Cezalarda İndirim (VUK m. 376) ve Dava Açma ile İlişkisi',
    articleRef: 'VUK M. 376',
    trueStatement:
      'Mükellef veya vergi sorumlusu; ikmalen, re’sen veya idarece tarh edilen vergiyi veya vergi farkını ve vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarının yarısını ihbarnamelerin tebliğ tarihinden itibaren otuz gün içinde ilgili vergi dairesine başvurarak vadesinde veya 6183 sayılı Kanunda belirtilen türden teminat göstererek vadenin bitmesinden itibaren üç ay içinde ödeyeceğini bildirirse kesilen cezanın yarısı indirilir; mükellef aynı ihbarname için hem cezalarda indirim (m. 376) hem de vergi mahkemesinde dava açma yoluna aynı anda başvuramaz.',
    trueHighlight: ['vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarının yarısını ihbarnamelerin tebliğ tarihinden itibaren otuz gün içinde', 'kesilen cezanın yarısı indirilir', 'hem cezalarda indirim (m. 376) hem de vergi mahkemesinde dava açma yoluna aynı anda başvuramaz'],
    trueCorrectPhrase: 'VUK m. 376 (7194 s.K. değişikliği) uyarınca vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarında indirim oranı ilk kez veya tekerrür ayrımı olmaksızın %50’dir (yarısı indirilir); başvuru süresi tebliğden itibaren 30 gündür (uzlaşma sağlanırsa uzlaşılan vergi ziyaı cezasının %75’inin süresinde ödenmesi halinde %25’i daha indirilir)',
    baseExplanation: '7194 sayılı Kanun değişikliğiyle VUK m. 376’daki indirim oranı tüm vergi cezalarında (vergi ziyaı, usulsüzlük, özel usulsüzlük) eşitlenerek 1/2 (%50) yapılmıştır!',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarının yarısını ihbarnamelerin tebliğ tarihinden itibaren otuz gün içinde ilgili vergi dairesine başvurarak vadesinde veya 6183 sayılı Kanunda belirtilen türden teminat göstererek vadenin bitmesinden itibaren üç ay içinde ödeyeceğini bildirirse kesilen cezanın yarısı indirilir',
      wrongPhrase: 'vergi ziyaı cezalarında yalnızca özel usulsüzlük cezalarının üçte biri ihbarnamenin tebliğinden itibaren on beş gün içinde başvurularak ödenirse indirilir, vergi ziyaı cezalarında ise indirim uygulanmaz',
      correctPhrase: 'vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarının yarısını ihbarnamelerin tebliğ tarihinden itibaren otuz gün içinde ilgili vergi dairesine başvurarak vadesinde veya 6183 sayılı Kanunda belirtilen türden teminat göstererek vadenin bitmesinden itibaren üç ay içinde ödeyeceğini bildirirse kesilen cezanın yarısı indirilir',
      explanation: 'VUK m. 376 (7194 s.K. değişikliği) uyarınca vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarının tamamında başvuru süresi 30 gün ve indirim oranı 1/2 (yarısı) olarak uygulanır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mükellef aynı ihbarname için hem cezalarda indirim (m. 376) hem de vergi mahkemesinde dava açma yoluna aynı anda başvuramaz',
      wrongPhrase: 'mükellef cezalarda indirim talebinde bulunarak cezanın yarısını ödedikten sonra aynı vergi ve ceza için vergi mahkemesinde iptal davası da açabilir',
      correctPhrase: 'mükellef aynı ihbarname için hem cezalarda indirim (m. 376) hem de vergi mahkemesinde dava açma yoluna aynı anda başvuramaz',
      explanation: 'Cezalarda indirim (VUK m. 376) idari bir çözüm yolu olup uyuşmazlığı sona erdirir; mükellef dava açarsa indirim hakkından yararlanamaz!'
    }
  },
  {
    id: 'rule-vergi-10',
    branch: 'Vergi',
    subTopic: 'Amme Alacaklarında İhtiyati Haciz ve İhtiyati Tahakkuklara Dava Açma Süresi (15 Gün)',
    articleRef: '6183 s.K. M. 13, 15, 17 & 20',
    trueStatement:
      'İhtiyati haciz, amme alacağının tahsil güvenliğini sağlamak amacıyla alacaklı amme idaresinin mahalli en büyük memurunun (illerde vali, ilçelerde kaymakam veya devredilen vergi dairesi başkanı/defterdarın) kararıyla hiçbir müddetle mukayyet olmaksızın uygulanır; haklarında ihtiyati haciz veya ihtiyati tahakkuk tatbik olunanlar, haczin tatbiki, gıyapta yapılan hacizlerde haczin tebliği veya ihtiyati tahakkuk sebeplerine ve miktarına karşı tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilirler.',
    trueHighlight: ['alacaklı amme idaresinin mahalli en büyük memurunun', 'tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilirler'],
    trueCorrectPhrase: '6183 s.K. m. 15 ve m. 20 uyarınca tıpkı ödeme emrinde (m. 58) olduğu gibi, ihtiyati haciz ve ihtiyati tahakkuk işlemlerine karşı da vergi mahkemesinde dava açma süresi 15 gündür!',
    baseExplanation: '6183 sayılı Kanun’daki üç kritik "15 günlük" özel dava açma süresi (7103 s.K. ile 7 günden 15 güne çıkarılmıştır): 1) İhtiyati hacze dava (m. 15), 2) İhtiyati tahakkuka dava (m. 20), 3) Ödeme emrine dava (m. 58).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilirler',
      wrongPhrase: 'tebliğ tarihinden itibaren altmış gün içinde idare mahkemesi nezdinde dava açabilirler',
      correctPhrase: 'tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilirler',
      explanation: '6183 s.K. m. 15 ve m. 20 uyarınca ihtiyati haciz ve ihtiyati tahakkuka karşı dava açma süresi 60 veya 30 gün değil, 15 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'alacaklı amme idaresinin mahalli en büyük memurunun (illerde vali, ilçelerde kaymakam veya devredilen vergi dairesi başkanı/defterdarın) kararıyla',
      wrongPhrase: 'yalnızca sulh ceza hâkimliğinin veya asliye ticaret mahkemesinin önceden vereceği yargısal kararla',
      correctPhrase: 'alacaklı amme idaresinin mahalli en büyük memurunun (illerde vali, ilçelerde kaymakam veya devredilen vergi dairesi başkanı/defterdarın) kararıyla',
      explanation: 'İcra ve İflas Kanunundaki ihtiyati hacizden (mahkeme kararı gerekir) farklı olarak, 6183 sayılı Kanunda kamu alacakları için ihtiyati haciz kararı mahkeme tarafından değil, idari makam (vali/vergi dairesi başkanı) tarafından verilir!'
    }
  },
  {
    id: 'rule-vergi-11',
    branch: 'Vergi',
    subTopic: 'Vergi Kaçakçılığı Suçu (VUK m. 359) ve Defter/Belgeleri Saklama Süresi (5 Yıl)',
    articleRef: 'VUK M. 253 & 359',
    trueStatement:
      'Vergi Usul Kanununa göre defter tutmak mecburiyetinde olanlar, tuttukları defterlerle üçüncü kısımda yazılı vesikaları, ilgili bulundukları yılı takip eden takvim yılından başlayarak beş yıl süre ile muhafaza etmeye mecburdurlar; vergi kanunlarına göre tutulan veya düzenlenen ve saklanma ve ibraz mecburiyeti bulunan defter ve kayıtlarda hesap ve muhasebe hileleri yapanlar, çift defter tutanlar, defter ve belgeleri gizleyenler (ibraz etmeyenler) veya sahte ya da muhteviyatı itibarıyla yanıltıcı belge düzenleyenler/kullananlar hakkında vergi ziyaı cezasının yanı sıra adli yargıda (asliye ceza mahkemesinde) hapis cezasına hükmolunur.',
    trueHighlight: ['ilgili bulundukları yılı takip eden takvim yılından başlayarak beş yıl süre ile muhafaza etmeye mecburdurlar', 'vergi ziyaı cezasının yanı sıra adli yargıda (asliye ceza mahkemesinde) hapis cezasına hükmolunur'],
    trueCorrectPhrase: 'VUK m. 253 uyarınca vergi hukuku bakımından defter ve belge saklama süresi 5 yıldır (TTK m. 82 uyarınca ticaret hukuku bakımından ise 10 yıldır!); VUK m. 359 kaçakçılık suçlarında hapis cezasına vergi dairesi/vergi mahkemesi değil, adli yargı ceza mahkemesi (Asliye Ceza Mahkemesi) hükmeder',
    baseExplanation: 'ÖSYM’nin çok sevdiği ikili süre karşılaştırması: Defter ve belgeleri saklama süresi VUK m. 253’e göre 5 yıl, TTK m. 82’ye göre 10 yıldır (SGK mevzuatında ise kamu idarelerinde 30 yıl, diğer işyerlerinde 10 yıldır)!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ilgili bulundukları yılı takip eden takvim yılından başlayarak beş yıl süre ile muhafaza etmeye mecburdurlar',
      wrongPhrase: 'Vergi Usul Kanununa göre yalnızca iki yıl süre ile muhafaza etmeye mecburdurlar',
      correctPhrase: 'ilgili bulundukları yılı takip eden takvim yılından başlayarak beş yıl süre ile muhafaza etmeye mecburdurlar',
      explanation: 'VUK m. 253 uyarınca vergi mevzuatı yönünden defter ve belgeleri saklama süresi, ilgili bulundukları yılı takip eden takvim yılından başlayarak 5 yıldır (TTK m. 82’ye göre ise 10 yıldır)!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'adli yargıda (asliye ceza mahkemesinde) hapis cezasına hükmolunur',
      wrongPhrase: 'doğrudan vergi mahkemesi tarafından hem vergi ziyaı cezasına hem de hapis cezasına hükmolunur',
      correctPhrase: 'adli yargıda (asliye ceza mahkemesinde) hapis cezasına hükmolunur',
      explanation: 'Vergi mahkemesi idari yargı merciidir ve hapis cezası veremez; VUK m. 359 kapsamındaki vergi kaçakçılığı suçlarından dolayı hapis cezası kovuşturması mütalaa şartıyla Asliye Ceza Mahkemesinde yapılır!'
    }
  },
  {
    id: 'rule-vergi-12',
    branch: 'Vergi',
    subTopic: 'Vergiyi Doğuran Olay, Kanunilik İlkesi ve Cumhurbaşkanının Yetki Sınırı (AY m. 73)',
    articleRef: 'AY M. 73 & VUK M. 19',
    trueStatement:
      'Vergi, resim, harç ve benzeri malî yükümlülükler kanunla konulur, değiştirilir veya kaldırılır; vergi, resim, harç ve benzeri malî yükümlülüklerin muaflık, istisnalar ve indirimleriyle oranlarına ilişkin hükümlerinde kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi Cumhurbaşkanına verilebilir; vergi alacağı vergi kanunlarının vergiyi bağladıkları olayın vukuu veya hukuki durumun tekemmülü ile doğar ve vergiyi doğuran olayın kanunlarla yasak edilmiş bulunması mükellefiyeti ve vergi sorumluluğunu kaldırmaz.',
    trueHighlight: ['Vergi, resim, harç ve benzeri malî yükümlülükler kanunla konulur, değiştirilir veya kaldırılır', 'kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi Cumhurbaşkanına verilebilir', 'vergiyi doğuran olayın kanunlarla yasak edilmiş bulunması mükellefiyeti ve vergi sorumluluğunu kaldırmaz'],
    trueCorrectPhrase: 'AY m. 73 uyarınca verginin konulması/kaldırılması yalnız kanunla olur, Cumhurbaşkanına sadece kanunun belirttiği alt ve üst sınırlar içinde oran/istisna/indirim değiştirme yetkisi verilebilir; VUK m. 9/2 uyarınca vergiyi doğuran olayın kanunlarla yasak edilmiş olması vergi mükellefiyetini ortadan kaldırmaz',
    baseExplanation: 'AY m. 73/3-4 ve VUK m. 8-9-19 temel ilkeleri: 1) Vergi kanunla konulur, 2) Vergi ödevine ilişkin özel sözleşmeler vergi dairesini bağlamaz (VUK m. 8/3), 3) Vergiyi doğuran olayın yasak olması mükellefiyeti kaldırmaz (VUK m. 9/2).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Vergi, resim, harç ve benzeri malî yükümlülükler kanunla konulur, değiştirilir veya kaldırılır; vergi, resim, harç ve benzeri malî yükümlülüklerin muaflık, istisnalar ve indirimleriyle oranlarına ilişkin hükümlerinde kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi Cumhurbaşkanına verilebilir',
      wrongPhrase: 'Olağan dönemde Cumhurbaşkanlığı kararnamesiyle yeni bir vergi konulabilir veya mevcut bir vergi tamamen kaldırılabilir',
      correctPhrase: 'Vergi, resim, harç ve benzeri malî yükümlülükler kanunla konulur, değiştirilir veya kaldırılır; vergi, resim, harç ve benzeri malî yükümlülüklerin muaflık, istisnalar ve indirimleriyle oranlarına ilişkin hükümlerinde kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi Cumhurbaşkanına verilebilir',
      explanation: 'Anayasa m. 73/3 ve m. 104/17 uyarınca vergi, resim, harç ve benzeri mali yükümlülükler yalnızca KANUNLA konulur, değiştirilir veya kaldırılır; olağan dönem CBK’sı ile yeni vergi konulamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'vergiyi doğuran olayın kanunlarla yasak edilmiş bulunması mükellefiyeti ve vergi sorumluluğunu kaldırmaz',
      wrongPhrase: 'vergiyi doğuran faaliyetin kanunlarla yasak edilmiş olması hâlinde elde edilen kazanç üzerinden vergi tarh edilemez ve tarafların noter onaylı sözleşmeyle vergi mükellefiyetini üçüncü kişiye devretmesi vergi dairesini bağlar',
      correctPhrase: 'vergiyi doğuran olayın kanunlarla yasak edilmiş bulunması mükellefiyeti ve vergi sorumluluğunu kaldırmaz',
      explanation: 'VUK m. 8/3 ve m. 9/2 uyarınca vergiyi doğuran olayın kanunlarla yasak edilmiş olması mükellefiyeti kaldırmaz ve mükellefiyete/vergi sorumluluğuna ilişkin özel sözleşmeler vergi dairelerini bağlamaz!'
    }
  },

  // =========================================================================
  // 3. AVUKATLIK HUKUKU EK KURALLARI (rule-avukatlik-6 .. rule-avukatlik-10)
  // =========================================================================
  {
    id: 'rule-avukatlik-6',
    branch: 'Avukatlık',
    subTopic: 'Avukatın İşi Reddetme Zorunluluğu ve Çekişmeli Hakları Edinme Yasağı',
    articleRef: '1136 s.K. M. 38 & 47',
    trueStatement:
      'Avukat; kendisine yapılan teklifi yolsuz veya haksız görür yahut sonradan yolsuz veya haksız olduğu kanısına varırsa, aynı işte menfaati zıt bir tarafa avukatlık etmiş veya mütalaa vermiş olursa, evvelce hâkim, hakem, Cumhuriyet savcısı, bilirkişi veya memur olarak o işte görev yapmış olursa teklifi reddetmek zorundadır; ayrıca avukat el koyduğu işlere ait çekişmeli hakları edinmekten veya bunların edinilmesine aracılık etmekten yasaklıdır ve bu yasak işin sona ermesinden itibaren bir yıl sürer.',
    trueHighlight: ['aynı işte menfaati zıt bir tarafa avukatlık etmiş veya mütalaa vermiş olursa', 'evvelce hâkim, hakem, Cumhuriyet savcısı, bilirkişi veya memur olarak o işte görev yapmış olursa teklifi reddetmek zorundadır', 'çekişmeli hakları edinmekten veya bunların edinilmesine aracılık etmekten yasaklıdır ve bu yasak işin sona ermesinden itibaren bir yıl sürer'],
    trueCorrectPhrase: '1136 s.K. m. 38 uyarınca avukat yolsuz/haksız teklifi, zıt menfaatli taraf işini ve daha önce hâkim/savcı/hakem/bilirkişi olarak görev yaptığı işi reddetmek ZORUNDADIR; m. 47 uyarınca çekişmeli hakları edinme yasağı işin bitiminden itibaren 1 yıl devam eder',
    baseExplanation: '1136 s.K. m. 37’de avukatın işi sebepsiz reddetme hakkı (ihtiyari ret), m. 38’de ise işi reddetme ZORUNLULUĞU düzenlenmiştir; m. 47’deki çekişmeli hakları edinme yasağı ise işin bitiminden itibaren 1 yıl sürer.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'çekişmeli hakları edinmekten veya bunların edinilmesine aracılık etmekten yasaklıdır ve bu yasak işin sona ermesinden itibaren bir yıl sürer',
      wrongPhrase: 'çekişmeli hakları yalnızca dava devam ederken edinemez; işin sona ermesiyle birlikte aynı gün bu yasak sona erer',
      correctPhrase: 'çekişmeli hakları edinmekten veya bunların edinilmesine aracılık etmekten yasaklıdır ve bu yasak işin sona ermesinden itibaren bir yıl sürer',
      explanation: '1136 s.K. m. 47/1 uyarınca avukatın el koyduğu işlere ait çekişmeli hakları edinme yasağı işin sona ermesiyle hemen bitmez; işin sona ermesinden itibaren 1 yıl daha sürer!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aynı işte menfaati zıt bir tarafa avukatlık etmiş veya mütalaa vermiş olursa, evvelce hâkim, hakem, Cumhuriyet savcısı, bilirkişi veya memur olarak o işte görev yapmış olursa teklifi reddetmek zorundadır',
      wrongPhrase: 'daha önce aynı uyuşmazlıkta bilirkişi veya hakem olarak görev yapmış olsa dahi tarafların yazılı muvafakati varsa o davada vekillik üstlenebilir',
      correctPhrase: 'aynı işte menfaati zıt bir tarafa avukatlık etmiş veya mütalaa vermiş olursa, evvelce hâkim, hakem, Cumhuriyet savcısı, bilirkişi veya memur olarak o işte görev yapmış olursa teklifi reddetmek zorundadır',
      explanation: '1136 s.K. m. 38/1-c uyarınca daha önce hâkim, hakem, savcı, bilirkişi veya memur olarak o işte görev yapmış olan avukatın işi reddetme zorunluluğu kamu düzenine ilişkindir ve ortaklarını da kapsar!'
    }
  },
  {
    id: 'rule-avukatlik-7',
    branch: 'Avukatlık',
    subTopic: 'Baro Kuruluşu (En Az 30 Avukat), Organları ve Seçim Süreleri',
    articleRef: '1136 s.K. M. 77, 79, 90 & 114',
    trueStatement:
      'Bölgesi içinde en az otuz avukat bulunan her il merkezinde bir baro kurulur; avukat sayısı ikibini aşan illerde ise en az ikibin avukat ile yeni bir baro kurulabilir (çoklu baro); baro genel kurulu iki yılda bir Ekim ayının ilk haftası içinde toplanır; baro başkanlığına seçilebilmek için levhada yazılı bulunmak ve avukatlıkta en az beş yıl kıdemli olmak, Türkiye Barolar Birliği (TBB) başkanlığına ve yönetim kuruluna seçilebilmek için ise en az on yıl avukatlık yapmış olmak şarttır.',
    trueHighlight: ['en az otuz avukat bulunan her il merkezinde bir baro kurulur', 'avukat sayısı ikibini aşan illerde ise en az ikibin avukat ile yeni bir baro kurulabilir', 'baro başkanlığına seçilebilmek için levhada yazılı bulunmak ve avukatlıkta en az beş yıl kıdemli olmak, Türkiye Barolar Birliği (TBB) başkanlığına ve yönetim kuruluna seçilebilmek için ise en az on yıl avukatlık yapmış olmak şarttır'],
    trueCorrectPhrase: 'baro kuruluşu için ilde en az 30 avukat gerekir (avukat sayısı 5.000’i aşan illerde en az 2.000 avukatla yeni baro kurulabilir, m. 77/1!); baro başkanı için en az 5 yıl kıdem, TBB başkanı ve yönetim kurulu üyeliği için ise en az 10 yıl kıdem şarttır',
    baseExplanation: '1136 s.K. m. 77 uyarınca bir ilde baro kurulması için en az 30 avukat gerekir; beşbinden fazla avukat bulunan illerde asgari 2.000 avukatla yeni bir baro kurulabilir; baro başkanlığı kıdem şartı 5 yıl (m. 96), TBB yönetim kurulu/başkanlığı kıdem şartı 10 yıldır (m. 117).',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'en az otuz avukat bulunan her il merkezinde bir baro kurulur',
      wrongPhrase: 'en az yüz avukat bulunan her il merkezinde bir baro kurulur',
      correctPhrase: 'en az otuz avukat bulunan her il merkezinde bir baro kurulur',
      explanation: '1136 s.K. m. 77/1 uyarınca bir il merkezinde baro kurulabilmesi için gerekli asgari avukat sayısı 100 değil, 30’dur!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'baro başkanlığına seçilebilmek için levhada yazılı bulunmak ve avukatlıkta en az beş yıl kıdemli olmak, Türkiye Barolar Birliği (TBB) başkanlığına ve yönetim kuruluna seçilebilmek için ise en az on yıl avukatlık yapmış olmak şarttır',
      wrongPhrase: 'hem baro başkanlığına hem de Türkiye Barolar Birliği başkanlığına seçilebilmek için avukatlıkta kıdem şartı aranmaksızın yalnızca baro levhasına kayıtlı olmak yeterlidir',
      correctPhrase: 'baro başkanlığına seçilebilmek için levhada yazılı bulunmak ve avukatlıkta en az beş yıl kıdemli olmak, Türkiye Barolar Birliği (TBB) başkanlığına ve yönetim kuruluna seçilebilmek için ise en az on yıl avukatlık yapmış olmak şarttır',
      explanation: '1136 s.K. m. 96 ve m. 117 uyarınca baro başkanı seçilebilmek için en az 5 yıl, TBB başkanı ve yönetim kurulu üyesi seçilebilmek için ise en az 10 yıl avukatlık kıdemi şarttır!'
    }
  },
  {
    id: 'rule-avukatlik-8',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Disiplin Cezaları ve Sicilden Silinme Süreleri',
    articleRef: '1136 s.K. M. 135, 141 & 160',
    trueStatement:
      'Avukatlık disiplin cezaları; uyarma, kınama, onbin liradan yüzellibin liraya kadar para cezası, işten çıkarma (üç aydan az ve üç yıldan fazla olmamak üzere meslekten geçici uzaklaştırma) ve meslekten çıkarmadır; disiplin cezalarına karşı tebliğden itibaren otuz gün içinde Türkiye Barolar Birliği Yönetim Kuruluna itiraz edilebilir; uyarma, kınama ve para cezalarının uygulanmasından itibaren beş yıl geçtikten sonra avukat, bu cezaların sicilinden silinmesini isteyebilir.',
    trueHighlight: ['uyarma, kınama, onbin liradan yüzellibin liraya kadar para cezası, işten çıkarma (üç aydan az ve üç yıldan fazla olmamak üzere meslekten geçici uzaklaştırma) ve meslekten çıkarmadır', 'tebliğden itibaren otuz gün içinde Türkiye Barolar Birliği Yönetim Kuruluna itiraz edilebilir', 'beş yıl geçtikten sonra avukat, bu cezaların sicilinden silinmesini isteyebilir'],
    trueCorrectPhrase: '1136 s.K. m. 135 uyarınca 5 disiplin cezası vardır: Uyarma, Kınama, Para cezası, İşten çıkarma (3 ay - 3 yıl) ve Meslekten çıkarma; disiplin kurulu kararlarına karşı 30 gün içinde TBB Yönetim Kuruluna itiraz edilir; uyarma, kınama ve para cezaları 5 yıl sonra sicilden silinebilir',
    baseExplanation: '1136 s.K. m. 135, 157 ve 160 uyarınca disiplin cezası Baro Yönetim Kurulunca değil, Baro Disiplin Kurulunca verilir; karara karşı 30 gün içinde TBB Yönetim Kuruluna itiraz edilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işten çıkarma (üç aydan az ve üç yıldan fazla olmamak üzere meslekten geçici uzaklaştırma) ve meslekten çıkarmadır; disiplin cezalarına karşı tebliğden itibaren otuz gün içinde Türkiye Barolar Birliği Yönetim Kuruluna itiraz edilebilir; uyarma, kınama ve para cezalarının uygulanmasından itibaren beş yıl geçtikten sonra',
      wrongPhrase: 'işten çıkarma (bir aydan altı aya kadar uzaklaştırma) ve meslekten çıkarmadır; disiplin cezalarına karşı yedi gün içinde sulh ceza hâkimliğine itiraz edilebilir; uyarma ve kınama cezaları bir yıl geçtikten sonra',
      correctPhrase: 'işten çıkarma (üç aydan az ve üç yıldan fazla olmamak üzere meslekten geçici uzaklaştırma) ve meslekten çıkarmadır; disiplin cezalarına karşı tebliğden itibaren otuz gün içinde Türkiye Barolar Birliği Yönetim Kuruluna itiraz edilebilir; uyarma, kınama ve para cezalarının uygulanmasından itibaren beş yıl geçtikten sonra',
      explanation: '1136 s.K. m. 135, 157 ve 160 uyarınca işten çıkarma süresi 3 ay - 3 yıl arasıdır; disiplin kararlarına itiraz süresi 30 gün (merci TBB Yönetim Kurulu) ve sicilden silinme süresi 5 yıldır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Avukatlık disiplin cezaları; uyarma, kınama, onbin liradan yüzellibin liraya kadar para cezası, işten çıkarma (üç aydan az ve üç yıldan fazla olmamak üzere meslekten geçici uzaklaştırma) ve meslekten çıkarmadır',
      wrongPhrase: 'Avukatlar hakkında tüm disiplin cezaları doğrudan doğruya Baro Başkanı tarafından tek başına verilir ve bu kararlara karşı itiraz yolu kapalıdır',
      correctPhrase: 'Avukatlık disiplin cezaları; uyarma, kınama, onbin liradan yüzellibin liraya kadar para cezası, işten çıkarma (üç aydan az ve üç yıldan fazla olmamak üzere meslekten geçici uzaklaştırma) ve meslekten çıkarmadır',
      explanation: '1136 s.K. m. 141 uyarınca disiplin kovuşturması Baro Yönetim Kurulu tarafından açılır, ancak disiplin cezaları Baro Başkanı tarafından değil Baro Disiplin Kurulu tarafından verilir!'
    }
  },
  {
    id: 'rule-avukatlik-9',
    branch: 'Avukatlık',
    subTopic: 'Avukatların Yüksek Mahkemelerde ve Duruşmalarda Cübbe Giyme Zorunluluğu ve Reklam Yasağı',
    articleRef: '1136 s.K. M. 49 & 55',
    trueStatement:
      'Avukatlar, mahkemelere Türkiye Barolar Birliğinin belirlediği resmi kılıkla (cübbeyle) çıkmak zorundadırlar; avukatların iş elde etmek için, reklam sayılabilecek her türlü teşebbüs ve harekette bulunmaları ve özellikle tabelalarında ve basılı kâğıtlarında avukat unvanı ile akademik unvanlarından başka bir sıfat kullanmaları yasaktır (bu yasak ortak avukatlık bürosu ve avukatlık ortaklığı hakkında da uygulanır).',
    trueHighlight: ['mahkemelere Türkiye Barolar Birliğinin belirlediği resmi kılıkla (cübbeyle) çıkmak zorundadırlar', 'avukat unvanı ile akademik unvanlarından başka bir sıfat kullanmaları yasaktır'],
    trueCorrectPhrase: '1136 s.K. m. 49 ve m. 55 uyarınca avukatlar mahkemelere TBB’nin belirlediği resmi kılıkla çıkmak zorundadır; tabela ve basılı kağıtlarında "avukat" unvanı ve "akademik unvanlar" (Prof., Doç., Dr. vb.) dışında hiçbir sıfat (emekli hâkim, uzman avukat vb.) kullanamazlar',
    baseExplanation: '1136 s.K. m. 55 reklam yasağı HMGS’de çok sık sorulur: Avukat tabelasında ve kartvizitinde yalnızca "Avukat" unvanını ve varsa "Akademik Unvanını" kullanabilir; "Emekli Ağır Ceza Reisi", "Ceza Uzmanı Avukat", "Eski Cumhuriyet Savcısı" gibi sıfatlar kullanılması kesinlikle yasaktır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'avukat unvanı ile akademik unvanlarından başka bir sıfat kullanmaları yasaktır',
      wrongPhrase: 'tabelalarında ve kartvizitlerinde "Emekli Hâkim", "Eski Cumhuriyet Savcısı" veya "Boşanma ve Ceza Hukuku Uzmanı" gibi önceki görev ve uzmanlık sıfatlarını serbestçe kullanabilirler',
      correctPhrase: 'avukat unvanı ile akademik unvanlarından başka bir sıfat kullanmaları yasaktır',
      explanation: '1136 s.K. m. 55/1 açık hükmü uyarınca avukatlar tabela ve basılı kağıtlarında "avukat" unvanı ile "akademik unvanlarından" başka hiçbir sıfat (emekli hâkim/savcı, uzman avukat vb.) kullanamazlar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu yasak ortak avukatlık bürosu ve avukatlık ortaklığı hakkında da uygulanır',
      wrongPhrase: 'ancak tüzel kişiliğe sahip avukatlık ortaklıkları ticaret şirketleri gibi her türlü ticari reklam ve ilan verme serbestisine sahiptir',
      correctPhrase: 'bu yasak ortak avukatlık bürosu ve avukatlık ortaklığı hakkında da uygulanır',
      explanation: '1136 s.K. m. 44/B ve m. 55/2 uyarınca avukatlık ortaklığının çalışmaları meslek çalışması olup ticari sayılmaz ve reklam yasağı avukatlık ortaklıkları hakkında da aynen uygulanır!'
    }
  },
  {
    id: 'rule-avukatlik-10',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Kanunu m. 35/A Uzlaşma Sağlama Yetkisi ve İlam Niteliğinde Belge',
    articleRef: '1136 s.K. M. 35/A & 35/3',
    trueStatement:
      'Avukatlar dava açılmadan veya dava açılmış olup da henüz duruşma başlamadan önce kendilerine intikal eden iş ve davalarda, tarafların kendi iradeleriyle istem sonucu elde edebilecekleri konulara inhisar etmek kaydıyla, müvekkilleriyle birlikte karşı tarafı uzlaşmaya davet edebilirler; uzlaşma sağlanırsa tutulan ve avukatlar ile müvekkilleri tarafından imzalanan uzlaşma tutanağı İcra ve İflas Kanununun 38 inci maddesi anlamında ilâm niteliğindedir; ayrıca esas sermayesi beş kat veya daha fazla olan anonim şirketler ile üye sayısı yüz veya daha fazla olan yapı kooperatifleri sözleşmeli bir avukat bulundurmak zorundadır.',
    trueHighlight: ['dava açılmadan veya dava açılmış olup da henüz duruşma başlamadan önce', 'İcra ve İflas Kanununun 38 inci maddesi anlamında ilâm niteliğindedir', 'esas sermayesi beş kat veya daha fazla olan anonim şirketler ile üye sayısı yüz veya daha fazla olan yapı kooperatifleri sözleşmeli bir avukat bulundurmak zorundadır'],
    trueCorrectPhrase: '1136 s.K. m. 35/A uzlaşma tutanağı dava açılmadan veya duruşma başlamadan önce avukatlar ve müvekkillerce imzalanırsa doğrudan İİK m. 38 anlamında İLAM niteliğinde belgedir; m. 35/3 uyarınca esas sermayesi asgari sermayenin 5 katı (1.250.000 TL) veya daha fazla olan A.Ş.’ler ile üye sayısı 100 veya daha fazla olan yapı kooperatifleri sözleşmeli avukat bulundurmak zorundadır',
    baseExplanation: '1136 s.K. m. 35/A uzlaşma tutanağının iki kritik şartı: 1) Dava açılmadan veya duruşma başlamadan önce düzenlenmeli, 2) Hem taraf avukatları hem de asiller (müvekkiller) tarafından birlikte imzalanmalıdır; bu takdirde mahkeme şerhine gerek olmaksızın doğrudan ilam niteliğindedir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'dava açılmadan veya dava açılmış olup da henüz duruşma başlamadan önce kendilerine intikal eden iş ve davalarda, tarafların kendi iradeleriyle istem sonucu elde edebilecekleri konulara inhisar etmek kaydıyla, müvekkilleriyle birlikte karşı tarafı uzlaşmaya davet edebilirler; uzlaşma sağlanırsa tutulan ve avukatlar ile müvekkilleri tarafından imzalanan uzlaşma tutanağı İcra ve İflas Kanununun 38 inci maddesi anlamında ilâm niteliğindedir',
      wrongPhrase: 'yalnızca istinaf veya temyiz aşamasında düzenlenebilen 35/A uzlaşma tutanağı adi yazılı belge hükmünde olup ilamlı icraya konu edilemez',
      correctPhrase: 'dava açılmadan veya dava açılmış olup da henüz duruşma başlamadan önce kendilerine intikal eden iş ve davalarda, tarafların kendi iradeleriyle istem sonucu elde edebilecekleri konulara inhisar etmek kaydıyla, müvekkilleriyle birlikte karşı tarafı uzlaşmaya davet edebilirler; uzlaşma sağlanırsa tutulan ve avukatlar ile müvekkilleri tarafından imzalanan uzlaşma tutanağı İcra ve İflas Kanununun 38 inci maddesi anlamında ilâm niteliğindedir',
      explanation: '1136 s.K. m. 35/A uyarınca uzlaşma daveti dava açılmadan veya dava açılmış olup da henüz duruşma başlamadan önce yapılabilir ve imzalanan tutanak İİK m. 38 anlamında doğrudan ilam niteliğindedir!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'esas sermayesi beş kat veya daha fazla olan anonim şirketler ile üye sayısı yüz veya daha fazla olan yapı kooperatifleri sözleşmeli bir avukat bulundurmak zorundadır',
      wrongPhrase: 'tüm limited şirketler ile üye sayısı yirmi veya daha fazla olan tüketim kooperatifleri sözleşmeli bir avukat bulundurmak zorundadır',
      correctPhrase: 'esas sermayesi beş kat veya daha fazla olan anonim şirketler ile üye sayısı yüz veya daha fazla olan yapı kooperatifleri sözleşmeli bir avukat bulundurmak zorundadır',
      explanation: '1136 s.K. m. 35/3 uyarınca sözleşmeli avukat bulundurma zorunluluğu limited şirketler için değil, esas sermayesi asgari tutarın 5 katı veya daha fazla olan anonim şirketler ile üye sayısı 100 veya daha fazla olan yapı kooperatifleri için geçerlidir!'
    }
  },

  // =========================================================================
  // 4. MÖHUK, MİLLETLERARASI HUKUK & HUKUK FELSEFESİ/TARİHİ (rule-mohuk-7 .. rule-mohuk-14)
  // =========================================================================
  {
    id: 'rule-mohuk-7',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Haksız Fiillere ve Sebepsiz Zenginleşmeye Uygulanacak Hukuk',
    articleRef: '5718 s.K. M. 34 & 39',
    trueStatement:
      'Haksız fiillerden doğan borçlar haksız fiilin işlendiği ülke hukukuna tabidir; ancak haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır; haksız fiilden doğan borç ilişkisinin başka bir ülke ile daha sıkı ilişkili olması hâlinde bu ülke hukuku uygulanır ve taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler.',
    trueHighlight: ['haksız fiilin işlendiği ülke hukukuna tabidir', 'zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır', 'taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler'],
    trueCorrectPhrase: 'MÖHUK m. 34 uyarınca haksız fiilde sırasıyla: 1) Olaydan SONRA yapılan açık hukuk seçimi, 2) Daha sıkı ilişkili ülke hukuku, 3) Fiil yeri ile zarar yeri farklıysa zararın meydana geldiği ülke hukuku, 4) Haksız fiilin işlendiği yer hukuku (lex loci delicti commissi) uygulanır',
    baseExplanation: 'MÖHUK m. 34’te en sık kurulan tuzak: Haksız fiilde taraflar hukuk seçimini ancak haksız fiilin meydana gelmesinden SONRA ve AÇIK olarak yapabilirler; fiil yeri ile zarar yeri farklı ülkelerde ise zararın meydana geldiği ülke hukuku uygulanır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır; haksız fiilden doğan borç ilişkisinin başka bir ülke ile daha sıkı ilişkili olması hâlinde bu ülke hukuku uygulanır ve taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler',
      wrongPhrase: 'haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde her zaman failin millî hukuku uygulanır ve haksız fiillerde tarafların hukuk seçimi yapması kesinlikle yasaktır',
      correctPhrase: 'ancak haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır; haksız fiilden doğan borç ilişkisinin başka bir ülke ile daha sıkı ilişkili olması hâlinde bu ülke hukuku uygulanır ve taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler',
      explanation: 'MÖHUK m. 34/2 ve m. 34/4 uyarınca fiil yeri ile zarar yeri farklıysa zararın meydana geldiği ülke hukuku uygulanır ve taraflar haksız fiilin meydana gelmesinden SONRA uygulanacak hukuku açık olarak seçebilirler!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Haksız fiillerden doğan borçlar haksız fiilin işlendiği ülke hukukuna tabidir',
      wrongPhrase: 'Haksız fiilin doğrudan doğruya zarar görenin sigortacısına karşı ileri sürülmesi hiçbir koşulda mümkün olmayıp haksız fiilden doğan borçlar yalnızca Türk hukukuna tabidir',
      correctPhrase: 'Haksız fiillerden doğan borçlar haksız fiilin işlendiği ülke hukukuna tabidir',
      explanation: 'MÖHUK m. 34/5 uyarınca haksız fiile veya sigorta sözleşmesine uygulanan hukuk imkân veriyorsa, zarar gören talebini doğrudan doğruya sorumlunun sigortacısına karşı ileri sürebilir!'
    }
  },
  {
    id: 'rule-mohuk-8',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Bireysel İş Sözleşmelerine ve Tüketici Sözleşmelerine Uygulanacak Hukuk',
    articleRef: '5718 s.K. M. 26 & 27',
    trueStatement:
      'İş sözleşmeleri, işçinin mutad işyeri hukukunun emredici hükümleri uyarınca sahip olacağı asgari koruma saklı kalmak kaydıyla, tarafların seçtikleri hukuka tabidir; tarafların hukuk seçimi yapmamış olmaları hâlinde iş sözleşmesine işçinin işini mutad olarak yaptığı işyeri hukuku, işçi işini belirli bir ülkede mutad olarak yapmıyorsa işverenin esas işyerinin bulunduğu ülke hukuku uygulanır; ancak bütün hâllerde iş sözleşmesiyle daha sıkı ilişkili bir hukukun bulunması hâlinde bu hukuk uygulanabilir.',
    trueHighlight: ['işçinin mutad işyeri hukukunun emredici hükümleri uyarınca sahip olacağı asgari koruma saklı kalmak kaydıyla, tarafların seçtikleri hukuka tabidir', 'işçinin işini mutad olarak yaptığı işyeri hukuku'],
    trueCorrectPhrase: 'MÖHUK m. 27 uyarınca iş sözleşmesinde hukuk seçimi yapılabilir ancak işçinin mutad işyeri hukukunun emredici hükümlerinin sağladığı asgari koruma bertaraf edilemez; hukuk seçilmemişse mutad işyeri hukuku (yoksa işverenin esas işyeri hukuku) uygulanır',
    baseExplanation: 'MÖHUK m. 26 (tüketici sözleşmeleri) ve m. 27 (iş sözleşmeleri) zayıf tarafı koruyan bağlama kurallarıdır: Tüketicide tüketicinin mutad meskeni hukuku, işçide ise işçinin mutad işyeri hukuku asgari koruma sınırını oluşturur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işçinin mutad işyeri hukukunun emredici hükümleri uyarınca sahip olacağı asgari koruma saklı kalmak kaydıyla, tarafların seçtikleri hukuka tabidir; tarafların hukuk seçimi yapmamış olmaları hâlinde iş sözleşmesine işçinin işini mutad olarak yaptığı işyeri hukuku',
      wrongPhrase: 'bireysel iş sözleşmelerinde tarafların hukuk seçimi yapması mutlak olarak yasaktır ve her durumda yalnızca işçinin vatandaşı olduğu devletin millî hukuku',
      correctPhrase: 'işçinin mutad işyeri hukukunun emredici hükümleri uyarınca sahip olacağı asgari koruma saklı kalmak kaydıyla, tarafların seçtikleri hukuka tabidir; tarafların hukuk seçimi yapmamış olmaları hâlinde iş sözleşmesine işçinin işini mutad olarak yaptığı işyeri hukuku',
      explanation: 'MÖHUK m. 27/1-2 uyarınca iş sözleşmelerinde hukuk seçimi yasak değildir (mutad işyeri hukukunun asgari koruması saklı kalmak şartıyla geçerlidir); hukuk seçimi yapılmamışsa işçinin milli hukuku değil, mutad işyeri hukuku uygulanır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'bütün hâllerde iş sözleşmesiyle daha sıkı ilişkili bir hukukun bulunması hâlinde bu hukuk uygulanabilir',
      wrongPhrase: 'iş sözleşmelerinden doğan davalarda yetki sözleşmesi yapılması halinde işçinin mutad işyeri mahkemelerinin yetkisi her zaman ortadan kalkar',
      correctPhrase: 'bütün hâllerde iş sözleşmesiyle daha sıkı ilişkili bir hukukun bulunması hâlinde bu hukuk uygulanabilir',
      explanation: 'MÖHUK m. 44 ve m. 47/2 uyarınca iş (ve tüketici ile sigorta) sözleşmelerinde MÖHUK m. 44’te belirlenen Türk mahkemelerinin yetkisi, tarafların yapacağı yabancı mahkeme yetki sözleşmesiyle bertaraf edilemez!'
    }
  },
  {
    id: 'rule-mohuk-9',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Yabancı Hukukun Uygulanması, Atıf (Renvoi) ve Kamu Düzeni',
    articleRef: '5718 s.K. M. 2, 3 & 5',
    trueStatement:
      'Hâkim, Türk kanunlar ihtilâfı kurallarını ve bu kurallara göre yetkili olan yabancı hukuku re’sen uygular; yabancı hukukun olaya ilişkin hükümlerinin tüm araştırmalara rağmen tespit edilememesi hâlinde Türk hukuku uygulanır; uygulanacak yabancı hukukun kanunlar ihtilâfı kurallarının başka bir hukuka atıf yaptığı (renvoi) sadece kişilik ve aile hukukuna ilişkin ihtilâflarda dikkate alınır; yetkili yabancı hukukun belirli bir olaya uygulanan hükmünün Türk kamu düzenine açıkça aykırı olması hâlinde bu hüküm uygulanmaz.',
    trueHighlight: ['Hâkim, Türk kanunlar ihtilâfı kurallarını ve bu kurallara göre yetkili olan yabancı hukuku re’sen uygular', 'sadece kişilik ve aile hukukuna ilişkin ihtilâflarda dikkate alınır', 'Türk kamu düzenine açıkça aykırı olması hâlinde bu hüküm uygulanmaz'],
    trueCorrectPhrase: 'MÖHUK m. 2-5 temel kuralları: 1) Hâkim yabancı hukuku re’sen uygular (tespit edilemezse Türk hukuku uygulanır), 2) Atıf (renvoi) SADECE kişilik ve aile hukukuna ilişkin uyuşmazlıklarda dikkate alınır (borçlar/ticaret/miras/eşyada atıf dikkate alınmaz!), 3) Değişken ihtilaflarda kural olarak dava açıldığı andaki bağlama noktası esas alınır',
    baseExplanation: '5718 sayılı MÖHUK m. 2/3 ile getirilen en önemli yenilik: Atıf (renvoi) artık tüm alanlarda değil, yalnızca "kişilik hukuku ve aile hukukuna" ilişkin uyuşmazlıklarda kabul edilmiştir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'uygulanacak yabancı hukukun kanunlar ihtilâfı kurallarının başka bir hukuka atıf yaptığı (renvoi) sadece kişilik ve aile hukukuna ilişkin ihtilâflarda dikkate alınır',
      wrongPhrase: 'atıf (renvoi) yalnızca sözleşmeden doğan borç ilişkilerinde ve ticari uyuşmazlıklarda dikkate alınır, kişilik ve aile hukukunda ise kesinlikle uygulanmaz',
      correctPhrase: 'uygulanacak yabancı hukukun kanunlar ihtilâfı kurallarının başka bir hukuka atıf yaptığı (renvoi) sadece kişilik ve aile hukukuna ilişkin ihtilâflarda dikkate alınır',
      explanation: 'Tam tersine! MÖHUK m. 2/3 ve m. 2/4 uyarınca atıf (renvoi) SADECE kişilik ve aile hukukuna ilişkin uyuşmazlıklarda dikkate alınır; hukuk seçimi yapılan sözleşmesel borç ilişkilerinde ise atıf kesinlikle dikkate alınmaz!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Hâkim, Türk kanunlar ihtilâfı kurallarını ve bu kurallara göre yetkili olan yabancı hukuku re’sen uygular; yabancı hukukun olaya ilişkin hükümlerinin tüm araştırmalara rağmen tespit edilememesi hâlinde Türk hukuku uygulanır',
      wrongPhrase: 'Hâkim yabancı hukuku ancak taraflardan birinin açıkça talep etmesi ve içeriğini noter onaylı tercümeyle ispatlaması hâlinde uygulayabilir; aksi takdirde davayı usulden reddeder',
      correctPhrase: 'Hâkim, Türk kanunlar ihtilâfı kurallarını ve bu kurallara göre yetkili olan yabancı hukuku re’sen uygular; yabancı hukukun olaya ilişkin hükümlerinin tüm araştırmalara rağmen tespit edilememesi hâlinde Türk hukuku uygulanır',
      explanation: 'MÖHUK m. 2/1-2 uyarınca Türk hâkimi yabancı hukuku re’sen (kendiliğinden) araştırıp uygular; tüm araştırmalara rağmen tespit edilemezse davayı reddetmez, Türk hukukunu (lex fori) uygular!'
    }
  },
  {
    id: 'rule-mohuk-10',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Yabancıların Teminat Gösterme Yükümlülüğü (Cautio Judicatum Solvi) ve Yargı Muafiyeti',
    articleRef: '5718 s.K. M. 48-49',
    trueStatement:
      'Türk mahkemesinde dava açan, davaya katılan veya icra takibinde bulunan yabancı gerçek ve tüzel kişiler, yargılama ve takip giderleriyle karşı tarafın zarar ve ziyanını karşılamak üzere mahkemenin belirleyeceği teminatı göstermek zorundadır; ancak mahkeme dava açanı, davaya katılanı veya icra takibi yapanı karşılıklılık (mütekabiliyet) esasına göre teminattan muaf tutar; ayrıca yabancı devlete, özel hukuk ilişkilerinden doğan hukukî uyuşmazlıklarda (acta jure gestionis) yargı muafiyeti tanınmaz.',
    trueHighlight: ['yabancı gerçek ve tüzel kişiler, yargılama ve takip giderleriyle karşı tarafın zarar ve ziyanını karşılamak üzere mahkemenin belirleyeceği teminatı göstermek zorundadır', 'karşılıklılık (mütekabiliyet) esasına göre teminattan muaf tutar', 'özel hukuk ilişkilerinden doğan hukukî uyuşmazlıklarda (acta jure gestionis) yargı muafiyeti tanınmaz'],
    trueCorrectPhrase: 'MÖHUK m. 48 uyarınca yabancı davacı/takip alacaklısı kural olarak teminat gösterir, ancak karşılıklılık (akdi, kanuni veya fiili mütekabiliyet) varsa teminattan muaf tutulur (HMK m. 84’teki teminat ise Türkiye’de mutad meskeni olmayan Türk vatandaşları içindir!); MÖHUK m. 49 uyarınca yabancı devletin özel hukuk işlemlerinde yargı muafiyeti yoktur',
    baseExplanation: 'MÖHUK m. 48 ile HMK m. 84 ayrımı: MÖHUK m. 48’deki teminat "yabancı" olma şartına bağlıdır ve "karşılıklılık" varsa muafiyet sağlar; HMK m. 84’teki teminat ise "Türkiye’de mutad meskeni bulunmayan Türk vatandaşı" içindir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak mahkeme dava açanı, davaya katılanı veya icra takibi yapanı karşılıklılık (mütekabiliyet) esasına göre teminattan muaf tutar; ayrıca yabancı devlete, özel hukuk ilişkilerinden doğan hukukî uyuşmazlıklarda (acta jure gestionis) yargı muafiyeti tanınmaz',
      wrongPhrase: 'karşılıklılık bulunsa dahi yabancıların teminattan muaf tutulması mümkün değildir; ayrıca yabancı devletlere özel hukuk sözleşmelerinden doğan ticari uyuşmazlıklarda da mutlak yargı muafiyeti tanınır',
      correctPhrase: 'ancak mahkeme dava açanı, davaya katılanı veya icra takibi yapanı karşılıklılık (mütekabiliyet) esasına göre teminattan muaf tutar; ayrıca yabancı devlete, özel hukuk ilişkilerinden doğan hukukî uyuşmazlıklarda (acta jure gestionis) yargı muafiyeti tanınmaz',
      explanation: 'MÖHUK m. 48/2 uyarınca karşılıklılık varsa yabancı teminattan muaf tutulur; MÖHUK m. 49/1 uyarınca ise yabancı devlete yalnız egemenlik tasarruflarında (jure imperii) yargı muafiyeti tanınır, özel hukuk ilişkilerinde (jure gestionis) yargı muafiyeti tanınmaz!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Türk mahkemesinde dava açan, davaya katılan veya icra takibinde bulunan yabancı gerçek ve tüzel kişiler',
      wrongPhrase: 'Türk mahkemesinde kendisine karşı dava açılan yabancı davalılar da savunma yapabilmek için',
      correctPhrase: 'Türk mahkemesinde dava açan, davaya katılan veya icra takibinde bulunan yabancı gerçek ve tüzel kişiler',
      explanation: 'MÖHUK m. 48/1 uyarınca teminat yükümlülüğü davalı olan yabancıya değil; dava açan (davacı), davaya katılan veya icra takibinde bulunan yabancıya aittir!'
    }
  },
  {
    id: 'rule-mohuk-11',
    branch: 'MÖHUK',
    subTopic: 'Milletlerarası Kamu Hukuku: 1969 Viyana Antlaşmalar Hukuku Sözleşmesi ve Jus Cogens',
    articleRef: '1969 Viyana Sözleşmesi M. 19, 46 & 53',
    trueStatement:
      '1969 Viyana Antlaşmalar Hukuku Sözleşmesi uyarınca bir devlet antlaşmayı imzalarken, onaylarken veya katılırken; antlaşma tarafından yasaklanmadıkça ya da antlaşmanın konu ve amacıyla bağdaşmaz olmadıkça çekince (rezerv) koyabilir; genel uluslararası hukukun buyruk kuralı (jus cogens - emredici norm) ile çatışan bir antlaşma hükümsüzdür (mutlak butlanla batıldır); iç hukuk kurallarına aykırılık ise kural olarak antlaşmanın geçersizliği sebebi olarak ileri sürülemez.',
    trueHighlight: ['antlaşmanın konu ve amacıyla bağdaşmaz olmadıkça çekince (rezerv) koyabilir', 'genel uluslararası hukukun buyruk kuralı (jus cogens - emredici norm) ile çatışan bir antlaşma hükümsüzdür', 'iç hukuk kurallarına aykırılık ise kural olarak antlaşmanın geçersizliği sebebi olarak ileri sürülemez'],
    trueCorrectPhrase: 'Milletlerarası Hukukta: 1) Antlaşmanın konu ve amacıyla bağdaşmayan çekince konulamaz, 2) Jus cogens (soygun/kölelik/soykırım/işkence/kuvvet kullanma yasağı gibi emredici normlar) ile çatışan antlaşma mutlak olarak hükümsüzdür, 3) Devlet Bşk., Başbakan ve Dışişleri Bakanı yetki belgesi (tam yetki) aranmaksızın devleti temsil eder',
    baseExplanation: 'HMGS Milletlerarası Kamu Hukuku müfredatının çekirdeği 1969 Viyana Antlaşmalar Hukuku Sözleşmesidir: Devlet Başkanı, Hükümet Başkanı ve Dışişleri Bakanı (m. 7) yetki belgesi göstermeksizin devleti temsil eder; jus cogens’e aykırı antlaşma batıldır (m. 53).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'genel uluslararası hukukun buyruk kuralı (jus cogens - emredici norm) ile çatışan bir antlaşma hükümsüzdür (mutlak butlanla batıldır); iç hukuk kurallarına aykırılık ise kural olarak antlaşmanın geçersizliği sebebi olarak ileri sürülemez',
      wrongPhrase: 'iki devlet kendi aralarında yapacakları ikili bir antlaşmayla jus cogens (buyruk kural) niteliğindeki soykırım ve işkence yasağının uygulanmayacağını geçerli olarak kararlaştırabilirler ve iç hukuktaki herhangi bir yönetmeliğe aykırılık antlaşmayı kendiliğinden iptal eder',
      correctPhrase: 'genel uluslararası hukukun buyruk kuralı (jus cogens - emredici norm) ile çatışan bir antlaşma hükümsüzdür (mutlak butlanla batıldır); iç hukuk kurallarına aykırılık ise kural olarak antlaşmanın geçersizliği sebebi olarak ileri sürülemez',
      explanation: '1969 Viyana Sözleşmesi m. 53 uyarınca jus cogens (buyruk kurallar) hiçbir istisnaya izin vermez ve bunlarla çatışan her antlaşma mutlak olarak hükümsüzdür; ayrıca m. 27 uyarınca bir devlet antlaşmayı icra etmemek için iç hukuk hükümlerine dayanamaz!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: '1969 Viyana Antlaşmalar Hukuku Sözleşmesi uyarınca bir devlet antlaşmayı imzalarken, onaylarken veya katılırken',
      wrongPhrase: '1969 Viyana Sözleşmesi uyarınca yalnızca devlet başkanı değil, tüm bakanlar ve büyükelçiler de hiçbir yetki belgesi (full powers) ibraz etmeksizin her türlü çok taraflı antlaşmayı onaylayabilirler; ayrıca antlaşmayı imzalarken',
      correctPhrase: '1969 Viyana Antlaşmalar Hukuku Sözleşmesi uyarınca bir devlet antlaşmayı imzalarken, onaylarken veya katılırken',
      explanation: '1969 Viyana Sözleşmesi m. 7/2 uyarınca yetki belgesi (full powers) aranmaksızın devleti her aşamada temsil edebilenler yalnızca üç makamdır: Devlet Başkanı, Hükümet Başkanı ve Dışişleri Bakanı (diplomatik misyon şefleri yalnız akredite oldukları devletle metin kabulü aşamasına kadar yetki belgesiz işlem yapabilir)!'
    }
  },
  {
    id: 'rule-mohuk-12',
    branch: 'MÖHUK',
    subTopic: 'Milletlerarası Kamu Hukuku: BM Şartı, UAD (Uluslararası Adalet Divanı) ve Deniz Hukuku Süre/Mesafeleri',
    articleRef: 'BM Şartı M. 2, 27, 51 & BMDHS',
    trueStatement:
      'Birleşmiş Milletler (BM) Güvenlik Konseyi 5’i daimi (ABD, İngiltere, Fransa, Rusya, Çin) olmak üzere 15 üyeden oluşur ve usul dışı konularda 5 daimi üyenin olumlu oyu (veya çekimser kalması) dahil en az 9 üyenin oyuyla karar alır; Uluslararası Adalet Divanında (UAD) yalnızca devletler davacı ve davalı olabilir (BM organları ise sadece danışma görüşü isteyebilir); 1982 BM Deniz Hukuku Sözleşmesi uyarınca karasuları genişliği en çok 12 deniz mili, bitişik bölge en çok 24 deniz mili ve münhasır ekonomik bölge (MEB) ise esas hatlardan itibaren en çok 200 deniz milidir.',
    trueHighlight: ['5’i daimi (ABD, İngiltere, Fransa, Rusya, Çin) olmak üzere 15 üyeden oluşur', 'Uluslararası Adalet Divanında (UAD) yalnızca devletler davacı ve davalı olabilir', 'karasuları genişliği en çok 12 deniz mili, bitişik bölge en çok 24 deniz mili ve münhasır ekonomik bölge (MEB) ise esas hatlardan itibaren en çok 200 deniz milidir'],
    trueCorrectPhrase: 'BM Güvenlik Konseyi 15 üyeli (5 daimi + 10 geçici), karar nisabı 9/15; UAD (Lahey) 15 yargıçlı (9 yıllığına seçilir) ve yalnız devletler davada taraf olabilir; Deniz Hukuku azami sınırları: Karasuları 12 mil, Bitişik Bölge 24 mil, Münhasır Ekonomik Bölge (MEB) 200 mil',
    baseExplanation: 'Milletlerarası Hukukun sayısal sınav bankosu: Karasuları 12 deniz mili, Bitişik Bölge 24 deniz mili, Münhasır Ekonomik Bölge 200 deniz mili; UAD’de (AİHM’den farklı olarak!) bireyler davacı olamaz, yalnızca devletler taraf olabilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Uluslararası Adalet Divanında (UAD) yalnızca devletler davacı ve davalı olabilir (BM organları ise sadece danışma görüşü isteyebilir)',
      wrongPhrase: 'Uluslararası Adalet Divanında (UAD) iç hukuk yollarını tüketen gerçek kişiler ve sivil toplum kuruluşları da devletlere karşı doğrudan bireysel başvuru davası açabilirler',
      correctPhrase: 'Uluslararası Adalet Divanında (UAD) yalnızca devletler davacı ve davalı olabilir (BM organları ise sadece danışma görüşü isteyebilir)',
      explanation: 'UAD Statüsü m. 34/1 uyarınca Divan önündeki çekişmeli davalarda YALNIZCA DEVLETLER taraf olabilir; bireylerin bireysel başvuru hakkı UAD’de değil, AİHM’de (veya İHEB komitelerinde) söz konusudur!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'karasuları genişliği en çok 12 deniz mili, bitişik bölge en çok 24 deniz mili ve münhasır ekonomik bölge (MEB) ise esas hatlardan itibaren en çok 200 deniz milidir',
      wrongPhrase: 'karasuları genişliği en çok 24 deniz mili, bitişik bölge en çok 50 deniz mili ve münhasır ekonomik bölge (MEB) ise en çok 100 deniz milidir',
      correctPhrase: 'karasuları genişliği en çok 12 deniz mili, bitişik bölge en çok 24 deniz mili ve münhasır ekonomik bölge (MEB) ise esas hatlardan itibaren en çok 200 deniz milidir',
      explanation: '1982 BMDHS uyarınca esas hatlardan itibaren azami genişlikler: Karasuları 12 deniz mili, Bitişik Bölge 24 deniz mili ve Münhasır Ekonomik Bölge (MEB) 200 deniz milidir!'
    }
  },
  {
    id: 'rule-mohuk-13',
    branch: 'MÖHUK',
    subTopic: 'Hukuk Felsefesi ve Sosyolojisi: Austin, Dworkin, Fuller, Ehrlich ve Rawls',
    articleRef: 'Hukuk Felsefesi & Sosyolojisi',
    trueStatement:
      'İrade (Buyruk) Kuramının kurucusu John Austin hukuku "egemenin yaptırımla desteklenmiş buyruğu" olarak tanımlarken; Ronald Dworkin pozitivizmi eleştirerek hukukun sadece kurallardan değil yargıca takdir yetkisi bırakmayan "ilkelerden" (principles) oluştuğunu ve her zor davada "tek doğru cevap" (Hercules Yargıç) bulunduğunu savunmuş; Lon Fuller hukukun içsel ahlakını (sekiz yasama ilkesini); Eugen Ehrlich ise devlet hukukundan önce toplumun kendi iç düzenini oluşturan "Yaşayan Hukuk" kavramını ortaya koymuştur.',
    trueHighlight: ['John Austin hukuku "egemenin yaptırımla desteklenmiş buyruğu" olarak tanımlarken', 'Ronald Dworkin pozitivizmi eleştirerek hukukun sadece kurallardan değil yargıca takdir yetkisi bırakmayan "ilkelerden" (principles) oluştuğunu', 'Lon Fuller hukukun içsel ahlakını', 'Eugen Ehrlich ise devlet hukukundan önce toplumun kendi iç düzenini oluşturan "Yaşayan Hukuk" kavramını ortaya koymuştur'],
    trueCorrectPhrase: 'Austin -> Buyruk (İrade) Kuramı; Dworkin -> Kurallar ve İlkeler / Zor Davalar / Hercules Yargıç; Lon Fuller -> Hukukun İçsel Ahlakı (Usuli Doğal Hukuk); Eugen Ehrlich -> Yaşayan Hukuk; John Rawls -> Bilgisizlik Peçesi (Veil of Ignorance) ve Hakkaniyet Olarak Adalet',
    baseExplanation: 'HMGS Hukuk Felsefesi ve Sosyolojisi sorularında ikinci temel düşünür grubu: Austin (Egemenin Buyruğu), Dworkin (İlkeler & Hercules Yargıç), Fuller (Hukukun İçsel Ahlakı - Hart-Fuller tartışması), Ehrlich (Yaşayan Hukuk), Rawls (Bilgisizlik Peçesi).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Ronald Dworkin pozitivizmi eleştirerek hukukun sadece kurallardan değil yargıca takdir yetkisi bırakmayan "ilkelerden" (principles) oluştuğunu ve her zor davada "tek doğru cevap" (Hercules Yargıç) bulunduğunu savunmuş',
      wrongPhrase: 'Ronald Dworkin katı bir hukuki pozitivist olarak zor davalarda hukuki ilkelerin hiçbir rolü olmadığını ve yargıcın tamamen keyfi biçimde yeni kural koyması gerektiğini savunmuş',
      correctPhrase: 'Ronald Dworkin pozitivizmi eleştirerek hukukun sadece kurallardan değil yargıca takdir yetkisi bırakmayan "ilkelerden" (principles) oluştuğunu ve her zor davada "tek doğru cevap" (Hercules Yargıç) bulunduğunu savunmuş',
      explanation: 'Dworkin, H.L.A. Hart’ın pozitivizmini ve "zor davalarda yargıcın takdir yetkisi vardır" görüşünü eleştirmiş; hukukun kuralların yanı sıra "ilkeleri" de kapsadığını ve ideal yargıcın (Hercules) her davada tek doğru cevaba ulaşabileceğini savunmuştur!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Eugen Ehrlich ise devlet hukukundan önce toplumun kendi iç düzenini oluşturan "Yaşayan Hukuk" kavramını ortaya koymuştur',
      wrongPhrase: 'Eugen Ehrlich ise toplumsal gerçekliği tamamen reddederek hukukun yalnızca parlamento tarafından çıkarılan yazılı kanun metinlerinden ibaret olduğunu savunmuştur',
      correctPhrase: 'Eugen Ehrlich ise devlet hukukundan önce toplumun kendi iç düzenini oluşturan "Yaşayan Hukuk" kavramını ortaya koymuştur',
      explanation: 'Hukuk sosyolojisinin kurucularından Eugen Ehrlich, "hukuki gelişmenin ağırlık merkezi yasamada veya mahkeme kararlarında değil, bizzat toplumun kendisindedir" diyerek "Yaşayan Hukuk" (lebendes Recht) kavramını geliştirmiştir!'
    }
  },
  {
    id: 'rule-mohuk-14',
    branch: 'MÖHUK',
    subTopic: 'Türk Hukuk Tarihi: Sened-i İttifak, Tanzimat, Islahat ve 1926 Hukuk Devrimi İktibasları',
    articleRef: 'Türk Hukuk Tarihi',
    trueStatement:
      'Osmanlı anayasal gelişiminde 1808 Sened-i İttifak padişahın yetkilerini ayanlar karşısında ilk kez sınırlayan misak niteliğinde bir belgedir; 1839 Tanzimat Fermanı (Gülhane Hatt-ı Hümayunu) bütün tebaaya can, mal, ırz güvenliği ile vergi ve askerlikte adalet vaat eden bir ferman iken; Cumhuriyet döneminde gerçekleştirilen 1926 Hukuk Devrimi kapsamında Türk Medeni Kanunu ve Borçlar Kanunu İsviçre’den, Türk Ceza Kanunu İtalya’dan (1889 Zanardelli Kanunu), Ceza Muhakemeleri Usulü Kanunu Almanya’dan ve İcra-İflas Kanunu İsviçre’den iktibas edilmiştir.',
    trueHighlight: ['1808 Sened-i İttifak padişahın yetkilerini ayanlar karşısında ilk kez sınırlayan misak niteliğinde bir belgedir', 'Türk Medeni Kanunu ve Borçlar Kanunu İsviçre’den, Türk Ceza Kanunu İtalya’dan (1889 Zanardelli Kanunu), Ceza Muhakemeleri Usulü Kanunu Almanya’dan ve İcra-İflas Kanunu İsviçre’den iktibas edilmiştir'],
    trueCorrectPhrase: 'Cumhuriyet dönemi iktibasları: Medeni Kanun, Borçlar Kanunu, İcra ve İflas Kanunu ve HUMK (Neuchâtel) -> İsviçre’den; 1926 Türk Ceza Kanunu -> İtalya’dan; 1929 CMUK ve Deniz Ticareti -> Almanya’dan; İdari Yargı (Danıştay/Şura-yı Devlet) -> Fransa’dan alınmıştır',
    baseExplanation: 'Türk Hukuk Tarihi sorularında 1926 Cumhuriyet dönemi kanun iktibaslarının kaynak ülkeleri doğrudan sorulur: Medeni/Borçlar/İİK/HUMK -> İsviçre; 765 s. TCK -> İtalya; 1412 s. CMUK -> Almanya; İdare Hukuku -> Fransa.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Türk Medeni Kanunu ve Borçlar Kanunu İsviçre’den, Türk Ceza Kanunu İtalya’dan (1889 Zanardelli Kanunu), Ceza Muhakemeleri Usulü Kanunu Almanya’dan ve İcra-İflas Kanunu İsviçre’den iktibas edilmiştir',
      wrongPhrase: '1926 Türk Medeni Kanunu Fransa’dan (Code Civil), 1926 Türk Ceza Kanunu İngiltere’den ve İcra-İflas Kanunu Avusturya’dan iktibas edilmiştir',
      correctPhrase: 'Türk Medeni Kanunu ve Borçlar Kanunu İsviçre’den, Türk Ceza Kanunu İtalya’dan (1889 Zanardelli Kanunu), Ceza Muhakemeleri Usulü Kanunu Almanya’dan ve İcra-İflas Kanunu İsviçre’den iktibas edilmiştir',
      explanation: '1926 Türk Medeni Kanunu, Borçlar Kanunu ve İcra-İflas Kanunu İsviçre’den; 1926 Türk Ceza Kanunu ise İtalya’dan iktibas edilmiştir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: '1808 Sened-i İttifak padişahın yetkilerini ayanlar karşısında ilk kez sınırlayan misak niteliğinde bir belgedir',
      wrongPhrase: '1808 Sened-i İttifak Osmanlı Devleti’nde çift meclisli parlamentoyu (Meclis-i Mebusan ve Meclis-i Ayan) kuran ilk yazılı anayasadır',
      correctPhrase: '1808 Sened-i İttifak padişahın yetkilerini ayanlar karşısında ilk kez sınırlayan misak niteliğinde bir belgedir',
      explanation: 'Çift meclisli Osmanlı parlamentosunu (Meclis-i Umumi: Heyet-i Ayan ve Heyet-i Mebusan) kuran ilk yazılı anayasa 1808 Sened-i İttifak değil, 1876 Kanun-i Esasi’dir!'
    }
  },

  // =========================================================================
  // 5. MEDENİ HUKUK KAPSAMLI DERİNLİK KURALLARI (rule-medeni-19 .. rule-medeni-32)
  // =========================================================================
  {
    id: 'rule-medeni-19',
    branch: 'Medeni',
    subTopic: 'Dernek Kuruluşu (En Az 7 Kişi), İlk Genel Kurul (6 Ay) ve Olağanüstü Toplantı Nisabı (1/5)',
    articleRef: 'TMK M. 56, 62 & 75',
    trueStatement:
      'Dernekler, gerçek veya tüzel en az yedi kişinin kazanç paylaşma dışında belirli ve ortak bir amacı gerçekleştirmek üzere, bilgi ve çalışmalarını sürekli olarak birleştirmek suretiyle oluşturulmuş, tüzel kişiliğe sahip kişi topluluklarıdır; dernekler kuruluş bildirimini, dernek tüzüğünü ve gerekli belgeleri yerleşim yerinin bulunduğu yerin en büyük mülki amirine verdikleri anda tüzel kişilik kazanırlar; tüzüğün uygun (bulunduğunun) tebliğinden itibaren altı ay içinde ilk genel kurul toplantısını yapmak ve zorunlu organlarını oluşturmakla yükümlüdürler; genel kurul, yönetim veya denetim kurulunun gerekli gördüğü hâllerde ya da dernek üyelerinden beşte birinin yazılı başvurusu üzerine olağanüstü toplanır.',
    trueHighlight: ['gerçek veya tüzel en az yedi kişinin', 'en büyük mülki amirine verdikleri anda tüzel kişilik kazanırlar', 'altı ay içinde ilk genel kurul toplantısını yapmak', 'dernek üyelerinden beşte birinin yazılı başvurusu üzerine olağanüstü toplanır'],
    trueCorrectPhrase: 'dernekler en az 7 gerçek veya tüzel kişiyle izin almaksızın bildirimle (serbest kuruluş sistemi) kurulur; ilk genel kurul 6 ay içinde toplanmak zorundadır (toplanmazsa kendiliğinden sona erer, TMK m. 87!); dernek üyelerinin 1/5’inin yazılı talebiyle genel kurul olağanüstü toplantıya çağrılır',
    baseExplanation: 'TMK m. 56-87 dernekler hukukunun sayısal şifreleri: Kurucu sayısı en az 7, yönetim kurulu en az 5 asıl + 5 yedek, denetim kurulu en az 3 asıl + 3 yedek, ilk genel kurul süresi 6 ay, olağan genel kurul en geç 3 yılda bir, olağanüstü çağrı azınlığı 1/5!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'gerçek veya tüzel en az yedi kişinin kazanç paylaşma dışında belirli ve ortak bir amacı gerçekleştirmek üzere, bilgi ve çalışmalarını sürekli olarak birleştirmek suretiyle oluşturulmuş, tüzel kişiliğe sahip kişi topluluklarıdır; dernekler kuruluş bildirimini, dernek tüzüğünü ve gerekli belgeleri yerleşim yerinin bulunduğu yerin en büyük mülki amirine verdikleri anda tüzel kişilik kazanırlar; tüzüğün uygun (bulunduğunun) tebliğinden itibaren altı ay içinde ilk genel kurul toplantısını yapmak ve zorunlu organlarını oluşturmakla yükümlüdürler; genel kurul, yönetim veya denetim kurulunun gerekli gördüğü hâllerde ya da dernek üyelerinden beşte birinin',
      wrongPhrase: 'yalnızca gerçek kişilerden oluşan en az on beş kişinin İçişleri Bakanlığından ön izin almasıyla kurulur; dernekler kuruluşundan itibaren bir yıl içinde ilk genel kurul toplantısını yapmak zorundadır ve genel kurul üyelerin onda birinin',
      correctPhrase: 'gerçek veya tüzel en az yedi kişinin kazanç paylaşma dışında belirli ve ortak bir amacı gerçekleştirmek üzere, bilgi ve çalışmalarını sürekli olarak birleştirmek suretiyle oluşturulmuş, tüzel kişiliğe sahip kişi topluluklarıdır; dernekler kuruluş bildirimini, dernek tüzüğünü ve gerekli belgeleri yerleşim yerinin bulunduğu yerin en büyük mülki amirine verdikleri anda tüzel kişilik kazanırlar; tüzüğün uygun (bulunduğunun) tebliğinden itibaren altı ay içinde ilk genel kurul toplantısını yapmak ve zorunlu organlarını oluşturmakla yükümlüdürler; genel kurul, yönetim veya denetim kurulunun gerekli gördüğü hâllerde ya da dernek üyelerinden beşte birinin',
      explanation: 'TMK m. 56, 62 ve 75 uyarınca dernekler önceden izin almaksızın en az 7 (gerçek veya tüzel) kişiyle kurulur; ilk genel kurul süresi 6 aydır ve olağanüstü toplantı çağrısı için üye sayısının 1/10’u değil 1/5’i aranır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'en büyük mülki amirine verdikleri anda tüzel kişilik kazanırlar',
      wrongPhrase: 'asliye hukuk mahkemesince tescil kararının verilmesiyle tüzel kişilik kazanırlar',
      correctPhrase: 'en büyük mülki amirine verdikleri anda tüzel kişilik kazanırlar',
      explanation: 'Asliye hukuk mahkemesi nezdinde tutulan sicile tescille tüzel kişilik kazanan topluluk dernek değil, VAKIFTIR (TMK m. 102); dernekler ise kuruluş bildirimi ve tüzüğün en büyük mülki amire verildiği anda tüzel kişilik kazanır (TMK m. 59)!'
    }
  },
  {
    id: 'rule-medeni-20',
    branch: 'Medeni',
    subTopic: 'Genel Kurul Kararlarının İptali Süresi (1 Ay ve 3 Ay) ve Vakıfların Kuruluş Şekli',
    articleRef: 'TMK M. 83 & 102',
    trueStatement:
      'Dernek genel kurul toplantısında hazır bulunan ve kanuna veya tüzüğe aykırı olarak alınan genel kurul kararlarına katılmayan her üye, karar tarihinden başlayarak bir ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde mahkemeye başvurmak suretiyle kararın iptalini isteyebilir; vakıf kurma iradesi ise resmî senetle (noterde) veya ölüme bağlı tasarrufla açıklanır ve vakıf yerleşim yeri mahkemesi (asliye hukuk) nezdinde tutulan sicile tescil ile tüzel kişilik kazanır.',
    trueHighlight: ['toplantısında hazır bulunan ve kanuna veya tüzüğe aykırı olarak alınan genel kurul kararlarına katılmayan her üye, karar tarihinden başlayarak bir ay içinde', 'toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde', 'resmî senetle (noterde) veya ölüme bağlı tasarrufla açıklanır ve vakıf yerleşim yeri mahkemesi (asliye hukuk) nezdinde tutulan sicile tescil ile tüzel kişilik kazanır'],
    trueCorrectPhrase: 'dernek genel kurul kararının iptali davası süresi: Toplantıda hazır bulunup karara katılmayan üye için 1 ay; toplantıda hazır bulunmayan üye için öğrenmeden itibaren 1 ay ve her hâlde karar tarihinden itibaren 3 aydır; vakıflar yalnız resmi senet veya ölüme bağlı tasarrufla kurulur ve mahkeme siciline tescille tüzel kişilik kazanır',
    baseExplanation: 'TMK m. 83 uyarınca yönetim kurulu kararlarına karşı doğrudan iptal davası açılamaz, genel kurul kararlarına karşı 1 ay / 3 ay içinde iptal davası açılır; vakıflarda ise üyelik yoktur ve tek zorunlu organ yönetim organıdır (TMK m. 109).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'karar tarihinden başlayarak bir ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde',
      wrongPhrase: 'karar tarihinden başlayarak üç ay içinde; toplantıda hazır bulunmayan her üye ise her hâlde karar tarihinden başlayarak bir yıl içinde',
      correctPhrase: 'karar tarihinden başlayarak bir ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde',
      explanation: 'TMK m. 83 uyarınca dernek genel kurul kararlarının iptali davası açma süresi hazır bulunan üye için 1 ay, hazır bulunmayan üye için öğrenmeden itibaren 1 ay ve her hâlde karar tarihinden itibaren 3 aydır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'vakıf kurma iradesi ise resmî senetle (noterde) veya ölüme bağlı tasarrufla açıklanır ve vakıf yerleşim yeri mahkemesi (asliye hukuk) nezdinde tutulan sicile tescil ile tüzel kişilik kazanır',
      wrongPhrase: 'vakıflar da tıpkı dernekler gibi adi yazılı sözleşmeyle en az yedi kurucu tarafından valiliğe bildirim verilmesiyle kendiliğinden tüzel kişilik kazanır',
      correctPhrase: 'vakıf kurma iradesi ise resmî senetle (noterde) veya ölüme bağlı tasarrufla açıklanır ve vakıf yerleşim yeri mahkemesi (asliye hukuk) nezdinde tutulan sicile tescil ile tüzel kişilik kazanır',
      explanation: 'TMK m. 101-102 uyarınca vakıflarda 7 kişi şartı yoktur (tek bir gerçek veya tüzel kişi de vakıf kurabilir), adi yazılı şekille kurulamaz (noterde resmi senet veya ölüme bağlı tasarruf şarttır) ve bildirimle değil mahkeme siciline tescille tüzel kişilik kazanır!'
    }
  },
  {
    id: 'rule-medeni-21',
    branch: 'Medeni',
    subTopic: 'Nişanlanmanın Sona Ermesinde Hediyelerin İadesi, Tazminat ve Zamanaşımı (1 Yıl)',
    articleRef: 'TMK M. 120-123',
    trueStatement:
      'Nişanlılardan biri haklı bir sebep olmaksızın nişanı bozduğu veya nişan taraflardan birine yükletilebilen bir sebeple bozulduğu takdirde kusuru olan taraf diğerine uygun bir maddi tazminat ve kişilik hakkı saldırıya uğrayan kusursuz/daha az kusurlu tarafa manevi tazminat ödemekle yükümlüdür; nişanlılığın evlenme dışındaki bir sebeple sona ermesi hâlinde alışılmışın dışındaki (mutat olmayan) hediyeler geri istenebilir; nişanlılığın sona ermesinden doğan dava hakları sona erme tarihinden itibaren bir yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['alışılmışın dışındaki (mutat olmayan) hediyeler geri istenebilir', 'nişanlılığın sona ermesinden doğan dava hakları sona erme tarihinden itibaren bir yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'nişanın bozulmasında alışılmışın dışındaki (mutat olmayan) hediyelerin iadesinde kusur aranmaz; maddi tazminatı nişanlı dışında ana-baba veya onlar gibi davrananlar da isteyebilirken, manevi tazminatı YALNIZCA nişanlının kendisi isteyebilir; tüm dava hakları nişanın sona ermesinden itibaren 1 yılda zamanaşımına uğrar',
    baseExplanation: 'TMK m. 120-123 uyarınca üç altın kural: 1) Manevi tazminatı yalnız nişanlının kendisi isteyebilir (ana-baba isteyemez!), 2) Mutat dışı hediyelerin (takı/altın vb.) iadesinde kusur aranmaz (ancak ölümle sona ermede hediyeler istenemez), 3) Zamanaşımı süresi 1 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'nişanlılığın sona ermesinden doğan dava hakları sona erme tarihinden itibaren bir yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'nişanlılığın sona ermesinden doğan dava hakları sona erme tarihinden itibaren iki yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'nişanlılığın sona ermesinden doğan dava hakları sona erme tarihinden itibaren bir yıl geçmekle zamanaşımına uğrar',
      explanation: 'TMK m. 123 uyarınca nişanlılığın sona ermesinden doğan tüm dava hakları (maddi tazminat, manevi tazminat ve hediyelerin geri verilmesi) sona erme tarihinden itibaren 2 yıl değil, 1 yıl geçmekle zamanaşımına uğrar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'nişanlılığın evlenme dışındaki bir sebeple sona ermesi hâlinde alışılmışın dışındaki (mutat olmayan) hediyeler geri istenebilir',
      wrongPhrase: 'hediyelerin geri istenebilmesi için yalnızca kusursuz olan nişanlının dava açması şart olup nişanlının ana ve babası da nişanın bozulması nedeniyle manevi tazminat talep edebilirler',
      correctPhrase: 'nişanlılığın evlenme dışındaki bir sebeple sona ermesi hâlinde alışılmışın dışındaki (mutat olmayan) hediyeler geri istenebilir',
      explanation: 'TMK m. 121-122 uyarınca nişanlının ana ve babası maddi tazminat ve verdikleri mutat dışı hediyelerin iadesini isteyebilir ancak MANEVİ TAZMİNAT isteyemezler; ayrıca mutat dışı hediyelerin iadesinde kusur şartı aranmaz!'
    }
  },
  {
    id: 'rule-medeni-22',
    branch: 'Medeni',
    subTopic: 'Evlenmenin Mutlak ve Nisbi Butlan Sebepleri ile İddet Müddeti (300 Gün)',
    articleRef: 'TMK M. 132, 145 & 148-152',
    trueStatement:
      'Eşlerden birinin evlenme sırasında evli bulunması, sürekli bir sebeple ayırt etme gücünden yoksun bulunması, akıl hastası olması veya eşler arasında evlenmeye engel derecede hısımlık bulunması mutlak butlan sebepleridir; ayırt etme gücünden geçici yoksunluk, yanılma, aldatma ve korkutma ise nisbi butlan sebepleri olup iptal davası açma hakkı sebebin öğrenildiği veya korkutmanın etkisinin ortadan kalktığı tarihten başlayarak altı ay ve her hâlde evlenmenin üzerinden beş yıl geçmekle düşer; kadın için üçyüz günlük bekleme süresine (iddet müddetine) uyulmaması ise evlenmenin butlanını gerektirmez.',
    trueHighlight: ['mutlak butlan sebepleridir', 'altı ay ve her hâlde evlenmenin üzerinden beş yıl geçmekle düşer', 'kadın için üçyüz günlük bekleme süresine (iddet müddetine) uyulmaması ise evlenmenin butlanını gerektirmez'],
    trueCorrectPhrase: 'mutlak butlan (TMK m. 145: mevcut evlilik, sürekli ayırt etme gücü yoksunluğu, evlenmeye engel akıl hastalığı, yasak hısımlık) savcı ve ilgililerce süreye bağlı olmaksızın açılır; nisbi butlan (TMK m. 148-152) ise eş tarafından 6 ay / 5 yıl içinde açılır; 300 günlük iddet süresine veya evlendirme memuru önünde yapılmayan dini törene uyulmaması evlenmenin iptalini (butlanını) gerektirmez!',
    baseExplanation: 'TMK m. 132 ve m. 154 uyarınca kadının 300 günlük bekleme süresine (iddet müddetine) uymadan evlenmesi kesin olmayan evlenme engelidir; evlenme yapılmışsa geçerlidir ve butlanına karar verilemez!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı ay ve her hâlde evlenmenin üzerinden beş yıl geçmekle düşer; kadın için üçyüz günlük bekleme süresine (iddet müddetine) uyulmaması ise evlenmenin butlanını gerektirmez',
      wrongPhrase: 'bir yıl ve her hâlde evlenmenin üzerinden on yıl geçmekle düşer; kadının üçyüz günlük iddet süresine uymadan evlenmesi ise mutlak butlan sebebidir',
      correctPhrase: 'altı ay ve her hâlde evlenmenin üzerinden beş yıl geçmekle düşer; kadın için üçyüz günlük bekleme süresine (iddet müddetine) uyulmaması ise evlenmenin butlanını gerektirmez',
      explanation: 'TMK m. 152 ve m. 154 uyarınca evlenmenin nisbi butlanında hak düşürücü süre 6 ay ve her hâlde 5 yıldır; kadının 300 günlük bekleme süresine uymaması ise evlenmenin butlanını gerektirmez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Eşlerden birinin evlenme sırasında evli bulunması, sürekli bir sebeple ayırt etme gücünden yoksun bulunması, akıl hastası olması veya eşler arasında evlenmeye engel derecede hısımlık bulunması mutlak butlan sebepleridir',
      wrongPhrase: 'Mutlak butlan veya nisbi butlan kararı verildiği anda evlilik geçmişe etkili (ex tunc) olarak ortadan kalkar ve bu evlilikten doğan çocuklar evlilik dışı çocuk sayılır',
      correctPhrase: 'Eşlerden birinin evlenme sırasında evli bulunması, sürekli bir sebeple ayırt etme gücünden yoksun bulunması, akıl hastası olması veya eşler arasında evlenmeye engel derecede hısımlık bulunması mutlak butlan sebepleridir',
      explanation: 'TMK m. 156 ve m. 157 uyarınca batıl bir evlilik ancak hâkimin kararıyla sona erer, butlan kararı geçmişe etkili olmayıp boşanma gibi ileriye etkili (ex nunc) sonuç doğurur ve çocuklar anne-baba iyiniyetli olmasa bile evlilik içi çocuk sayılır!'
    }
  },
  {
    id: 'rule-medeni-23',
    branch: 'Medeni',
    subTopic: 'Özel Boşanma Sebeplerinde Hak Düşürücü Süreler (6 Ay / 5 Yıl) ve Anlaşmalı Boşanma (1 Yıl)',
    articleRef: 'TMK M. 161, 162, 164 & 166',
    trueStatement:
      'Zina (TMK m. 161) ile hayata kast, pek kötü veya onur kırıcı davranış (TMK m. 162) sebeplerine dayalı boşanma davalarında, davaya hakkı olan eşin boşanma sebebini öğrenmesinden başlayarak altı ay ve her hâlde bu sebebin doğumunun üzerinden beş yıl geçmekle dava hakkı düşer ve affeden tarafın dava hakkı yoktur; terk (TMK m. 164) sebebine dayalı boşanmada terk en az altı ay sürmüş olmalı (dördüncü ayın sonunda ihtar çekilip iki ay beklenir); anlaşmalı boşanmada (TMK m. 166/3) ise evlilik en az bir yıl sürmüş olmalıdır.',
    trueHighlight: ['boşanma sebebini öğrenmesinden başlayarak altı ay ve her hâlde bu sebebin doğumunun üzerinden beş yıl geçmekle dava hakkı düşer ve affeden tarafın dava hakkı yoktur', 'terk (TMK m. 164) sebebine dayalı boşanmada terk en az altı ay sürmüş olmalı', 'anlaşmalı boşanmada (TMK m. 166/3) ise evlilik en az bir yıl sürmüş olmalıdır'],
    trueCorrectPhrase: 'zina ile hayata kast/pek kötü/onur kırıcı davranışta dava açma süresi öğrenmeden itibaren 6 ay ve her hâlde eylemden itibaren 5 yıldır (affedenin dava hakkı yoktur); terkte 4 ay + 2 ay = 6 ay; anlaşmalı boşanmada 1 yıl evlilik süresi; ortak hayatın yeniden kurulamamasında (fiili ayrılık, TMK m. 166/4) ise ret kararının kesinleşmesinden itibaren 3 yıl aranır',
    baseExplanation: 'Aile Hukukunun tüm kritik boşanma süreleri: Zina ve Hayata Kast (6 ay / 5 yıl + af dava hakkını düşürür), Terk (4 ay + ihtardan sonra 2 ay = 6 ay), Anlaşmalı Boşanma (en az 1 yıl evlilik), Fiili Ayrılık (3 yıl), Boşanma sonrası tazminat/nafaka zamanaşımı (boşanma hükmünün kesinleşmesinden itibaren 1 yıl, TMK m. 178).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'boşanma sebebini öğrenmesinden başlayarak altı ay ve her hâlde bu sebebin doğumunun üzerinden beş yıl geçmekle dava hakkı düşer ve affeden tarafın dava hakkı yoktur; terk (TMK m. 164) sebebine dayalı boşanmada terk en az altı ay sürmüş olmalı (dördüncü ayın sonunda ihtar çekilip iki ay beklenir); anlaşmalı boşanmada (TMK m. 166/3) ise evlilik en az bir yıl sürmüş olmalıdır',
      wrongPhrase: 'boşanma sebebini öğrenmesinden başlayarak bir yıl ve her hâlde on yıl geçmekle dava hakkı düşer; terke dayalı boşanmada terk en az üç ay sürmüş olmalı; anlaşmalı boşanmada ise evlilik en az iki yıl sürmüş olmalıdır',
      correctPhrase: 'boşanma sebebini öğrenmesinden başlayarak altı ay ve her hâlde bu sebebin doğumunun üzerinden beş yıl geçmekle dava hakkı düşer ve affeden tarafın dava hakkı yoktur; terk (TMK m. 164) sebebine dayalı boşanmada terk en az altı ay sürmüş olmalı (dördüncü ayın sonunda ihtar çekilip iki ay beklenir); anlaşmalı boşanmada (TMK m. 166/3) ise evlilik en az bir yıl sürmüş olmalıdır',
      explanation: 'TMK m. 161, 162, 164 ve 166/3 uyarınca zina ve hayata kastta hak düşürücü süre 6 ay / 5 yıl, terkte toplam süre 6 ay (4 ay + 2 ay), anlaşmalı boşanmada ise asgari evlilik süresi 1 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'anlaşmalı boşanmada (TMK m. 166/3) ise evlilik en az bir yıl sürmüş olmalıdır',
      wrongPhrase: 'anlaşmalı boşanmada taraf vekillerinin duruşmaya katılıp protokolü onaylaması yeterli olup hâkimin eşleri bizzat dinlemesi şart değildir',
      correctPhrase: 'anlaşmalı boşanmada (TMK m. 166/3) ise evlilik en az bir yıl sürmüş olmalıdır',
      explanation: 'TMK m. 166/3 açık hükmü uyarınca anlaşmalı boşanma kararı verilebilmesi için hâkimin tarafları BİZZAT dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesi zorunludur; yalnız avukatların beyanıyla anlaşmalı boşanma kararı verilemez!'
    }
  },
  {
    id: 'rule-medeni-24',
    branch: 'Medeni',
    subTopic: 'Edinilmiş Mallara Katılma Rejiminde Edinilmiş Mallar ve Kişisel Mallar Ayrımı',
    articleRef: 'TMK M. 219-220 & 236',
    trueStatement:
      'Yasal mal rejimi olan edinilmiş mallara katılma rejiminde; bir eşin çalışmasının karşılığı olan edimler, sosyal güvenlik veya sosyal yardım kurum ve kuruluşlarının yaptığı ödemeler, çalışma gücünün kaybı nedeniyle ödenen tazminatlar ve kişisel mallarının gelirleri edinilmiş maldır; buna karşılık mal rejiminin başlangıcında eşlerden birine ait bulunan veya bir eşin sonradan miras yoluyla ya da herhangi bir şekilde karşılıksız kazanma (bağışlama) yoluyla elde ettiği malvarlığı değerleri ile manevi tazminat alacakları kanuna göre kişisel maldır.',
    trueHighlight: ['kişisel mallarının gelirleri edinilmiş maldır', 'miras yoluyla ya da herhangi bir şekilde karşılıksız kazanma (bağışlama) yoluyla elde ettiği malvarlığı değerleri ile manevi tazminat alacakları kanuna göre kişisel maldır'],
    trueCorrectPhrase: 'TMK m. 219-220 altın ayrımı: Kişisel malların kendisi (miras, bağış, evlilik öncesi mallar, manevi tazminat) KİŞİSEL MALDIR; ancak kişisel malların GELİRLERİ (örneğin miras kalan evin kira geliri) aksine mal rejimi sözleşmesi yapılmamışsa EDİNİLMİŞ MALDIR! Katılma alacağı oranı ise artık değerin yarısıdır (1/2)',
    baseExplanation: 'ÖSYM’nin Medeni Hukukta en çok sorduğu mal rejimi tuzağı: Miras kalan veya bağışlanan taşınmaz kişisel maldır, fakat o taşınmazdan elde edilen kira geliri (kişisel malların gelirleri, TMK m. 219/2-b.4) eşler sözleşmeyle aksini kararlaştırmadıkça EDİNİLMİŞ maldır! Manevi tazminat kişisel mal, çalışma gücü kaybı maddi tazminatı ise edinilmiş maldır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kişisel mallarının gelirleri edinilmiş maldır; buna karşılık mal rejiminin başlangıcında eşlerden birine ait bulunan veya bir eşin sonradan miras yoluyla ya da herhangi bir şekilde karşılıksız kazanma (bağışlama) yoluyla elde ettiği malvarlığı değerleri ile manevi tazminat alacakları kanuna göre kişisel maldır',
      wrongPhrase: 'kişisel malların kira ve faiz gibi gelirleri de kanun gereği kendiliğinden kişisel maldır; buna karşılık eşlerden birine miras yoluyla intikal eden mallar ile manevi tazminat alacakları edinilmiş maldır',
      correctPhrase: 'kişisel mallarının gelirleri edinilmiş maldır; buna karşılık mal rejiminin başlangıcında eşlerden birine ait bulunan veya bir eşin sonradan miras yoluyla ya da herhangi bir şekilde karşılıksız kazanma (bağışlama) yoluyla elde ettiği malvarlığı değerleri ile manevi tazminat alacakları kanuna göre kişisel maldır',
      explanation: 'TMK m. 219/2-b.4 ve m. 220 uyarınca miras yoluyla kazanılan mallar ve manevi tazminat alacakları KİŞİSEL maldır; buna karşılık kişisel malların gelirleri (sözleşmeyle aksi kararlaştırılmamışsa) EDİNİLMİŞ maldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Yasal mal rejimi olan edinilmiş mallara katılma rejiminde',
      wrongPhrase: 'Zina veya hayata kast nedeniyle boşanma hâlinde dahi hâkimin kusurlu eşin artık değerdeki katılma alacağı payını azaltma veya kaldırma yetkisi bulunmayıp edinilmiş mallara katılma rejiminde',
      correctPhrase: 'Yasal mal rejimi olan edinilmiş mallara katılma rejiminde',
      explanation: 'TMK m. 236/2 uyarınca ZİNA veya HAYATA KAST nedeniyle boşanma hâlinde hâkim, kusurlu eşin artık değerdeki pay oranını hakkaniyete uygun olarak azaltılmasına veya tamamen kaldırılmasına karar verebilir!'
    }
  },
  {
    id: 'rule-medeni-25',
    branch: 'Medeni',
    subTopic: 'Babalık Karinesi, Soybağının Reddi (1 Yıl) ve Evlat Edinme Şartları (En Az 30 Yaş / 5 Yıl Evlilik & 18 Yaş Fark)',
    articleRef: 'TMK M. 285, 289, 306-308',
    trueStatement:
      'Evlilik devam ederken veya evliliğin sona ermesinden başlayarak üçyüz gün içinde doğan çocuğun babası kocadır (babalık karinesi); koca, soybağının reddi davasını doğumu ve baba olmadığını veya ananın gebe kaldığı sırada başka bir erkekle cinsel ilişkide bulunduğunu öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır; evlât edinmede ise eşler en az beş yıldan beri evli olmalı veya otuz yaşını doldurmuş bulunmalı (evli olmayan kişi ise otuz yaşını doldurmuş olmalı) ve evlât edinilenin evlât edinenden en az onsekiz yaş küçük olması şarttır.',
    trueHighlight: ['evliliğin sona ermesinden başlayarak üçyüz gün içinde doğan çocuğun babası kocadır', 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır', 'en az beş yıldan beri evli olmalı veya otuz yaşını doldurmuş bulunmalı (evli olmayan kişi ise otuz yaşını doldurmuş olmalı) ve evlât edinilenin evlât edinenden en az onsekiz yaş küçük olması şarttır'],
    trueCorrectPhrase: 'babalık karinesi evlilik içinde veya evliliğin bitiminden itibaren 300 gün içinde doğumu kapsar; soybağının reddi davası öğrenmeden itibaren 1 yıl içinde açılır; evlat edinmede eşler için en az 5 yıl evlilik veya 30 yaş, tek başına evlat edinmede 30 yaş, küçüğün bakımı için en az 1 yıl ve yaş farkı için en az 18 yaş aranır',
    baseExplanation: 'TMK m. 285-289 ve m. 305-308 sayısal kuralları: Babalık karinesi 300 gün, soybağının reddi (ve tanımaya itiraz ile babalık davası) öğrenmeden itibaren 1 yıl; evlat edinmede 5 yıl evlilik veya 30 yaş (diğer eşin çocuğunu evlat edinmede 2 yıl evlilik veya 30 yaş, TMK m. 306/3!) ve en az 18 yaş fark.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'evlât edinmede ise eşler en az beş yıldan beri evli olmalı veya otuz yaşını doldurmuş bulunmalı (evli olmayan kişi ise otuz yaşını doldurmuş olmalı) ve evlât edinilenin evlât edinenden en az onsekiz yaş küçük olması şarttır',
      wrongPhrase: 'evlât edinmede eşler en az on yıldan beri evli olmalı ve kırk yaşını doldurmuş bulunmalı, evlât edinilen ile evlât edinen arasında ise en az yirmi beş yaş fark bulunmalıdır',
      correctPhrase: 'evlât edinmede ise eşler en az beş yıldan beri evli olmalı veya otuz yaşını doldurmuş bulunmalı (evli olmayan kişi ise otuz yaşını doldurmuş olmalı) ve evlât edinilenin evlât edinenden en az onsekiz yaş küçük olması şarttır',
      explanation: 'TMK m. 306-308 uyarınca birlikte evlat edinmede 5 yıl evlilik veya 30 yaş (bekar kişide 30 yaş) ve evlat edinilenle evlat edinen arasında en az 18 yaş fark bulunması şarttır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır',
      wrongPhrase: 'öğrendiği tarihten başlayarak altı ay içinde açmak zorundadır',
      correctPhrase: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır',
      explanation: 'TMK m. 289/1 (AYM iptal kararları sonrasında 5 yıllık üst sınır kaldırılmıştır) uyarınca soybağının reddi davası açma süresi öğrenmeden itibaren 6 ay değil, 1 yıldır!'
    }
  },
  {
    id: 'rule-medeni-26',
    branch: 'Medeni',
    subTopic: 'Vesayeti Gerektiren Haller (1 Yıl veya Daha Fazla Hapis) ve Vasiliğe İtiraz/Kaçınma Süresi (10 Gün)',
    articleRef: 'TMK M. 405, 407 & 422',
    trueStatement:
      'Velâyet altında bulunmayan her küçük vesayet altına alınır; ayrıca akıl hastalığı veya akıl zayıflığı, savurganlık, alkol veya uyuşturucu madde bağımlılığı, kötü yaşama tarzı, kötü yönetim ve bir yıl veya daha uzun süreli özgürlüğü bağlayıcı bir cezaya mahkûmiyet kısıtlama (hacir) sebepleridir; vasiliğe atanan kişi, bu durumu öğrendiği günden başlayarak on gün içinde vasilikten kaçınma hakkını kullanabilir, ilgili herkes de vasinin atandığını öğrendiği günden başlayarak on gün içinde atamanın kanuna aykırı olduğunu ileri sürebilir.',
    trueHighlight: ['bir yıl veya daha uzun süreli özgürlüğü bağlayıcı bir cezaya mahkûmiyet kısıtlama (hacir) sebepleridir', 'vasiliğe atanan kişi, bu durumu öğrendiği günden başlayarak on gün içinde vasilikten kaçınma hakkını kullanabilir, ilgili herkes de vasinin atandığını öğrendiği günden başlayarak on gün içinde atamanın kanuna aykırı olduğunu ileri sürebilir'],
    trueCorrectPhrase: '1 yıl veya daha uzun süreli kesinleşmiş hapis cezası (cezaevine girme/infaz başlangıcıyla, 7499 s.K. değişikliği!) kısıtlama sebebidir; vasilikten kaçınma ve vasinin atanmasına itiraz süresi öğrenmeden itibaren 10 gündür; vasi kural olarak 2 yıl için atanır (TMK m. 456)',
    baseExplanation: 'TMK m. 404-422 ve m. 456 uyarınca vesayet makamı Sulh Hukuk Mahkemesi, denetim makamı ise Asliye Hukuk Mahkemesidir (TMK m. 397); vasi 2 yıl için atanır; vasilikten kaçınma ve itiraz süresi 10 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yıl veya daha uzun süreli özgürlüğü bağlayıcı bir cezaya mahkûmiyet kısıtlama (hacir) sebepleridir; vasiliğe atanan kişi, bu durumu öğrendiği günden başlayarak on gün içinde vasilikten kaçınma hakkını kullanabilir, ilgili herkes de vasinin atandığını öğrendiği günden başlayarak on gün içinde',
      wrongPhrase: 'yalnızca beş yıl veya daha uzun süreli hapis cezasına mahkûmiyet kısıtlama sebebidir; vasiliğe atanan kişi öğrendiği günden başlayarak otuz gün içinde kaçınma hakkını kullanabilir ve ilgililer de otuz gün içinde',
      correctPhrase: 'bir yıl veya daha uzun süreli özgürlüğü bağlayıcı bir cezaya mahkûmiyet kısıtlama (hacir) sebepleridir; vasiliğe atanan kişi, bu durumu öğrendiği günden başlayarak on gün içinde vasilikten kaçınma hakkını kullanabilir, ilgili herkes de vasinin atandığını öğrendiği günden başlayarak on gün içinde',
      explanation: 'TMK m. 407 ve m. 422 uyarınca özgürlüğü bağlayıcı cezada kısıtlama sınırı 1 yıl veya daha uzun süredir; vasilikten kaçınma ve vasiliğe itiraz süresi ise 30 gün değil 10 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Velâyet altında bulunmayan her küçük vesayet altına alınır',
      wrongPhrase: 'Genel vesayette vesayet makamı aile mahkemesi, denetim makamı ise bölge adliye mahkemesi olup velâyet altında bulunmayan her küçük vesayet altına alınır',
      correctPhrase: 'Velâyet altında bulunmayan her küçük vesayet altına alınır',
      explanation: 'TMK m. 397/2 uyarınca kamu vesayetinde vesayet makamı Sulh Hukuk Mahkemesi, denetim makamı ise Asliye Hukuk Mahkemesidir!'
    }
  },
  {
    id: 'rule-medeni-27',
    branch: 'Medeni',
    subTopic: 'Vesayet Altındaki Kişi Adına Yapılması Yasak İşlemler (Kefalet, Vakıf Kurma ve Önemli Bağışlama)',
    articleRef: 'TMK M. 449',
    trueStatement:
      'Vesayet altındaki kişi adına kefil olmak, vakıf kurmak ve önemli bağışlarda bulunmak yasaktır; bu yasak işlemler vesayet veya denetim makamının izni bulunsa dahi yapılamaz ve yapıldığı takdirde kesin olarak hükümsüzdür.',
    trueHighlight: ['Vesayet altındaki kişi adına kefil olmak, vakıf kurmak ve önemli bağışlarda bulunmak yasaktır', 'vesayet veya denetim makamının izni bulunsa dahi yapılamaz'],
    trueCorrectPhrase: 'TMK m. 449 (ve velayet için TMK m. 342/3) uyarınca vesayet/velayet altındaki kişi adına 3 işlem KESİNLİKLE YASAKTIR: 1) Kefil olmak, 2) Vakıf kurmak, 3) Önemli bağışlarda bulunmak (hâkim izniyle dahi yapılamaz!)',
    baseExplanation: 'TMK m. 449 vesayet hukukunun en meşhur "yasak işlemler" maddesidir: Kefil olmak, vakıf kurmak ve önemli bağışlarda bulunmak ne vasi tarafından ne de vesayet/denetim makamının izniyle yapılabilir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu yasak işlemler vesayet veya denetim makamının izni bulunsa dahi yapılamaz ve yapıldığı takdirde kesin olarak hükümsüzdür',
      wrongPhrase: 'ancak hem sulh hukuk mahkemesinin hem de asliye hukuk mahkemesinin izin vermesi hâlinde vasi kısıtlı adına kefalet sözleşmesi imzalayabilir ve vakıf kurabilir',
      correctPhrase: 'bu yasak işlemler vesayet veya denetim makamının izni bulunsa dahi yapılamaz ve yapıldığı takdirde kesin olarak hükümsüzdür',
      explanation: 'TMK m. 449’da sayılan üç işlem (kefil olmak, vakıf kurmak, önemli bağışta bulunmak) mutlak yasak işlemdir; vesayet ve denetim makamlarının izniyle dahi geçerli hale getirilemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Vesayet altındaki kişi adına kefil olmak, vakıf kurmak ve önemli bağışlarda bulunmak yasaktır',
      wrongPhrase: 'Vesayet altındaki kişiye ait taşınmazların alımı ve satımı da hiçbir makamın izniyle yapılamayan mutlak yasak işlemlerden olup ayrıca kefil olmak yasaktır',
      correctPhrase: 'Vesayet altındaki kişi adına kefil olmak, vakıf kurmak ve önemli bağışlarda bulunmak yasaktır',
      explanation: 'Taşınmazların alımı ve satımı mutlak yasak işlem değildir; TMK m. 462/1-1 uyarınca vesayet makamının (Sulh Hukuk Mahkemesi) izniyle yapılabilen işlemlerdir!'
    }
  },
  {
    id: 'rule-medeni-28',
    branch: 'Medeni',
    subTopic: 'Ölüme Bağlı Tasarrufların İptali (1 / 10 / 20 Yıl) ve Tenkis Davası Süreleri (1 / 10 Yıl)',
    articleRef: 'TMK M. 559 & 571',
    trueStatement:
      'Ölüme bağlı tasarrufun iptali davası açma hakkı, davacının tasarrufu, iptal sebebini ve kendisinin hak sahibi olduğunu öğrendiği tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın geçmesi (ölüm) tarihinin üzerinden iyiniyetli davalılara karşı on yıl, iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer; tenkis davası açma hakkı ise mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden on yıl geçmekle düşer.',
    trueHighlight: ['öğrendiği tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın geçmesi (ölüm) tarihinin üzerinden iyiniyetli davalılara karşı on yıl, iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer', 'tenkis davası açma hakkı ise mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden on yıl geçmekle düşer'],
    trueCorrectPhrase: 'ölüme bağlı tasarrufun iptali davası (TMK m. 559) süresi: Öğrenmeden itibaren 1 yıl, her hâlde iyiniyetliye karşı 10 yıl, kötüniyetliye karşı 20 yıl (hükümsüzlük def’i yoluyla her zaman ileri sürülebilir); tenkis davası (TMK m. 571) süresi ise iyiniyet/kötüniyet ayrımı olmaksızın öğrenmeden itibaren 1 yıl ve her hâlde 10 yıldır (tenkis iddiası da def’i yoluyla her zaman ileri sürülebilir!)',
    baseExplanation: 'Miras Hukukunun en ince karşılaştırma sorusu: Ölüme bağlı tasarrufun İPTALİ davasında (m. 559) süre 1 / 10 / 20 yıl iken; TENKİS davasında (m. 571) 20 yıllık kötüniyet süresi YOKTUR, her hâlde 1 ve 10 yıldır! Her iki davada da def’i yoluyla her zaman ileri sürülebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tenkis davası açma hakkı ise mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden on yıl geçmekle düşer',
      wrongPhrase: 'tenkis davası açma hakkı da kötüniyetli davalılara karşı yirmi yıl geçmekle düşer ve tenkis iddiası bu süreler geçtikten sonra def’i yoluyla dahi ileri sürülemez',
      correctPhrase: 'tenkis davası açma hakkı ise mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden on yıl geçmekle düşer',
      explanation: 'TMK m. 571 uyarınca tenkis davasında kötüniyetli davalılar için 20 yıllık ayrı bir süre öngörülmemiştir (süre öğrenmeden itibaren 1 yıl ve her hâlde 10 yıldır); ayrıca TMK m. 571/3 uyarınca tenkis iddiası def’i yoluyla her zaman ileri sürülebilir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın geçmesi (ölüm) tarihinin üzerinden iyiniyetli davalılara karşı on yıl, iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer',
      wrongPhrase: 'vasiyetnamenin düzenlendiği tarihten başlayarak altı ay ve her hâlde beş yıl geçmekle düşer',
      correctPhrase: 'öğrendiği tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın geçmesi (ölüm) tarihinin üzerinden iyiniyetli davalılara karşı on yıl, iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer',
      explanation: 'Ölüme bağlı tasarrufun iptali davası mirasbırakan sağ iken açılamaz; süre vasiyetnamenin düzenlendiği tarihten değil, ölüm sonrası vasiyetnamenin açılması tarihinden (ve öğrenmeden) itibaren 1 / 10 / 20 yıldır!'
    }
  },
  {
    id: 'rule-medeni-29',
    branch: 'Medeni',
    subTopic: 'Miras Sebebiyle İstihkak Davası (1 / 10 / 20 Yıl) ve Mirasçılık Belgesi (Veraset İlamı)',
    articleRef: 'TMK M. 598 & 639',
    trueStatement:
      'Başvurusu üzerine yasal mirasçı oldukları belirlenenlere, sulh mahkemesince veya noterlikçe mirasçılık sıfatlarını gösteren bir belge (mirasçılık belgesi / veraset ilamı) verilir; mirasçı atamaya veya vasiyete ilişkin ölüme bağlı tasarrufa mirasçılar veya başka vasiyet alacaklıları tarafından kendilerine bildirilmesinden başlayarak bir ay içinde itiraz edilmedikçe atanmış mirasçıya da sulh mahkemesince mirasçılık belgesi verilir; miras sebebiyle istihkak davası ise davacının kendisinin mirasçı olduğunu ve iyiniyetli davalının terekeyi elinde bulundurduğunu öğrendiği tarihten başlayarak bir yıl ve her hâlde mirasbırakanın ölümünün veya vasiyetnamenin açılmasının üzerinden on yıl, iyiniyetli olmayanlara karşı ise yirmi yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['sulh mahkemesince veya noterlikçe mirasçılık sıfatlarını gösteren bir belge (mirasçılık belgesi / veraset ilamı) verilir', 'kendilerine bildirilmesinden başlayarak bir ay içinde itiraz edilmedikçe', 'on yıl, iyiniyetli olmayanlara karşı ise yirmi yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'mirasçılık belgesi sulh hukuk mahkemesinden veya noterden alınabilir (ancak yabancılık unsuru veya soybağı/vasiyet incelemesi gerektiren hallerde noter veremez, yalnız sulh hukuk mahkemesi verir); atanmış mirasçıya belge verilmesi için 1 ay itiraz edilmemesi gerekir; miras sebebiyle istihkak davası zamanaşımı 1 / 10 / 20 yıldır',
    baseExplanation: 'TMK m. 598 ve m. 639 uyarınca mirasçılık belgesinin geçersizliği her zaman ileri sürülebilir (kesin hüküm teşkil etmez); miras sebebiyle istihkak davasında ise zamanaşımı süresi 1 / 10 / 20 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kendilerine bildirilmesinden başlayarak bir ay içinde itiraz edilmedikçe atanmış mirasçıya da sulh mahkemesince mirasçılık belgesi verilir; miras sebebiyle istihkak davası ise davacının kendisinin mirasçı olduğunu ve iyiniyetli davalının terekeyi elinde bulundurduğunu öğrendiği tarihten başlayarak bir yıl ve her hâlde mirasbırakanın ölümünün veya vasiyetnamenin açılmasının üzerinden on yıl, iyiniyetli olmayanlara karşı ise yirmi yıl',
      wrongPhrase: 'kendilerine bildirilmesinden başlayarak yedi gün içinde itiraz edilmedikçe atanmış mirasçıya da noterlikçe mirasçılık belgesi verilir; miras sebebiyle istihkak davası ise her durumda ölüm tarihinden itibaren beş yıl',
      correctPhrase: 'kendilerine bildirilmesinden başlayarak bir ay içinde itiraz edilmedikçe atanmış mirasçıya da sulh mahkemesince mirasçılık belgesi verilir; miras sebebiyle istihkak davası ise davacının kendisinin mirasçı olduğunu ve iyiniyetli davalının terekeyi elinde bulundurduğunu öğrendiği tarihten başlayarak bir yıl ve her hâlde mirasbırakanın ölümünün veya vasiyetnamenin açılmasının üzerinden on yıl, iyiniyetli olmayanlara karşı ise yirmi yıl',
      explanation: 'TMK m. 598/2 ve m. 639 uyarınca ölüme bağlı tasarrufa itiraz süresi 7 gün değil 1 aydır; miras sebebiyle istihkak davasında zamanaşımı süresi ise 1 / 10 / 20 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sulh mahkemesince veya noterlikçe mirasçılık sıfatlarını gösteren bir belge (mirasçılık belgesi / veraset ilamı) verilir',
      wrongPhrase: 'verilen mirasçılık belgesi maddi anlamda kesin hüküm teşkil ettiğinden sonradan hiçbir şekilde iptali istenemez',
      correctPhrase: 'sulh mahkemesince veya noterlikçe mirasçılık sıfatlarını gösteren bir belge (mirasçılık belgesi / veraset ilamı) verilir',
      explanation: 'TMK m. 598/3 açık hükmü uyarınca mirasçılık belgesi aksi ispat edilinceye kadar geçerli olan bir karinedir, maddi anlamda kesin hüküm teşkil etmez ve geçersizliği her zaman ileri sürülebilir!'
    }
  },
  {
    id: 'rule-medeni-30',
    branch: 'Medeni',
    subTopic: 'Zilyetlik Davaları (Gasp ve Saldırı) Hak Düşürücü Süreleri (2 Ay ve 1 Yıl)',
    articleRef: 'TMK M. 982-984',
    trueStatement:
      'Başkasının zilyet bulunduğu bir şeyi gasp eden kimse, o şey üzerinde üstün bir hakka sahip olduğunu iddia etse bile onu geri vermekle yükümlüdür; zilyedin dava hakkı, fiili ve failini öğrenmesinden başlayarak iki ay ve her hâlde fiilin üzerinden bir yıl geçmekle düşer.',
    trueHighlight: ['o şey üzerinde üstün bir hakka sahip olduğunu iddia etse bile onu geri vermekle yükümlüdür', 'fiili ve failini öğrenmesinden başlayarak iki ay ve her hâlde fiilin üzerinden bir yıl geçmekle düşer'],
    trueCorrectPhrase: 'zilyetliğin gaspı ve saldırı davalarında (TMK m. 984) hak düşürücü süre fiili ve faili öğrenmeden itibaren 2 ay ve her hâlde fiilin üzerinden 1 yıldır!',
    baseExplanation: 'Eşya Hukukunun en sık sorulan iki zilyetlik davası süresi: Zilyetliğin idari yoldan korunmasında (3091 s.K.) 60 gün / 1 yıl; adli yargıda açılan zilyetlik (gasp/saldırı) davalarında (TMK m. 984) ise öğrenmeden itibaren 2 ay ve her hâlde 1 yıl (taşınır davasında TMK m. 989 ise 5 yıl!).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'fiili ve failini öğrenmesinden başlayarak iki ay ve her hâlde fiilin üzerinden bir yıl geçmekle düşer',
      wrongPhrase: 'fiili ve failini öğrenmesinden başlayarak bir yıl ve her hâlde fiilin üzerinden beş yıl geçmekle düşer',
      correctPhrase: 'fiili ve failini öğrenmesinden başlayarak iki ay ve her hâlde fiilin üzerinden bir yıl geçmekle düşer',
      explanation: 'TMK m. 984 uyarınca zilyetliğin gaspı ve saldırıdan doğan zilyetlik davalarında hak düşürücü süre öğrenmeden itibaren 1 yıl değil 2 ay, her hâlde ise 5 yıl değil 1 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'o şey üzerinde üstün bir hakka sahip olduğunu iddia etse bile onu geri vermekle yükümlüdür',
      wrongPhrase: 'Ancak malı gasp eden kişi o malın gerçek maliki olduğunu tanıkla iddia ederse zilyetlik davasında malı geri vermekten her zaman kaçınabilir',
      correctPhrase: 'o şey üzerinde üstün bir hakka sahip olduğunu iddia etse bile onu geri vermekle yükümlüdür',
      explanation: 'TMK m. 982/2 uyarınca zilyetlik davalarında kural olarak üstün hak iddiası dinlenmez (ancak davalı malı davacıdan kendisinin gasp ettiğini veya kendi üstün hakkını derhâl ispatlarsa geri vermekten kaçınabilir)!'
    }
  },
  {
    id: 'rule-medeni-31',
    branch: 'Medeni',
    subTopic: 'Taşınır Mülkiyetinin İyiniyetle Kazanılması, Çalınan/Kaybolan Eşyada 5 Yıllık Süre ve Para/Hamile Yazılı Senetler',
    articleRef: 'TMK M. 988-990',
    trueStatement:
      'Bir taşınırın emin sıfatıyla zilyedinden o şey üzerinde iyiniyetle mülkiyet veya sınırlı ayni hak edinen kimsenin edinimi, zilyedin bu tür tasarruflarda bulunma yetkisi olmasa bile korunur; taşınır çalınmış, kaybolmuş ya da iradesi dışında başka herhangi bir şekilde elinden çıkmış olan zilyet, o şeyi beş yıl içinde iyiniyetli zilyetten (pazar/açık artırma/benzeri eşya satıcısından alınmışsa ödenen bedeli vererek) geri isteyebilir; buna karşılık para ve hamile yazılı senetler elden rıza dışında çıkmış olsa bile iyiniyetli üçüncü kişiden geri istenemez.',
    trueHighlight: ['emin sıfatıyla zilyedinden o şey üzerinde iyiniyetle mülkiyet veya sınırlı ayni hak edinen kimsenin edinimi, zilyedin bu tür tasarruflarda bulunma yetkisi olmasa bile korunur', 'beş yıl içinde iyiniyetli zilyetten', 'para ve hamile yazılı senetler elden rıza dışında çıkmış olsa bile iyiniyetli üçüncü kişiden geri istenemez'],
    trueCorrectPhrase: 'TMK m. 988-990 üçlü ayrımı: 1) Emin sıfatıyla zilyetten (kiracı, ariyet/vedia alan) iyiniyetli üçüncü kişi mülkiyeti DERHÂL kazanır, 2) Elden rıza dışında çıkan (çalınan/kaybolan) taşınırda eski zilyet 5 yıl içinde taşınır davası açabilir, 3) Para ve hamile yazılı senetler çalınmış olsa dahi iyiniyetli üçüncü kişiden HİÇBİR ZAMAN geri istenemez!',
    baseExplanation: 'Eşya Hukuku vaka sorularının 1 numaralı konusu TMK m. 988-990 ayrımıdır: Emin sıfatıyla zilyetten iyiniyetle kazanan derhâl malik olur; çalınan/kaybolan eşyada 5 yıl taşınır davası açılabilir; para ve hamile yazılı senetlerde ise çalınmış olsa bile iyiniyetli üçüncü kişi derhâl kazanır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'para ve hamile yazılı senetler elden rıza dışında çıkmış olsa bile iyiniyetli üçüncü kişiden geri istenemez',
      wrongPhrase: 'çalınan para ve hamile yazılı senetler de beş yıl içinde iyiniyetli üçüncü kişiden taşınır davasıyla her zaman geri istenebilir',
      correctPhrase: 'para ve hamile yazılı senetler elden rıza dışında çıkmış olsa bile iyiniyetli üçüncü kişiden geri istenemez',
      explanation: 'TMK m. 990 açık hükmü uyarınca zilyedin iradesi dışında elinden çıkmış (çalınmış/kaybolmuş) olsa bile, para ve hamile yazılı senetleri iyiniyetle edinmiş olan kimseye karşı taşınır davası açılamaz!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'o şeyi beş yıl içinde iyiniyetli zilyetten (pazar/açık artırma/benzeri eşya satıcısından alınmışsa ödenen bedeli vererek) geri isteyebilir',
      wrongPhrase: 'o şeyi yalnızca bir yıl içinde iyiniyetli zilyetten geri isteyebilir ve açık artırmadan alan kişiye bedel ödemek zorunda değildir',
      correctPhrase: 'o şeyi beş yıl içinde iyiniyetli zilyetten (pazar/açık artırma/benzeri eşya satıcısından alınmışsa ödenen bedeli vererek) geri isteyebilir',
      explanation: 'TMK m. 989 uyarınca elden rıza dışında çıkan taşınırlarda iyiniyetli zilyede karşı taşınır davası açma süresi 1 yıl değil 5 yıldır ve mal açık artırmadan/pazardan/benzeri eşya satıcısından alınmışsa ödenen bedelin verilmesi şarttır!'
    }
  },
  {
    id: 'rule-medeni-32',
    branch: 'Medeni',
    subTopic: 'Yasal Önalım (Şufa) Hakkı Süreleri (3 Ay ve 2 Yıl) ile Sözleşmeden Doğan Önalım Süresi (10 Yıl)',
    articleRef: 'TMK M. 732-735',
    trueStatement:
      'Paylı mülkiyette bir paydaşın taşınmaz üzerindeki payını tamamen veya kısmen üçüncü kişiye satması hâlinde diğer paydaşlar önalım (şufa) hakkını kullanabilirler; önalım hakkı alıcıya karşı dava açılarak kullanılır ve satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer; tapu kütüğüne şerh verilen sözleşmeden doğan önalım (alım ve geri alım) hakkı ise şerh tarihinden itibaren her hâlde on yıl geçmekle düşer.',
    trueHighlight: ['alıcıya karşı dava açılarak kullanılır', 'satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer', 'şerh tarihinden itibaren her hâlde on yıl geçmekle düşer'],
    trueCorrectPhrase: 'yasal önalım (şufa) hakkı paydaşlar arasındaki satışlarda kullanılamaz, yalnız üçüncü kişiye satışta ALICIYA karşı dava açılarak kullanılır; süresi noter bildiriminden itibaren 3 ay ve her hâlde satıştan itibaren 2 yıldır; şerh verilen sözleşmesel önalım/alım/geri alım hakkının azami süresi ise 10 yıldır',
    baseExplanation: 'TMK m. 732-735 uyarınca önalım hakkı cebri artırmayla satışlarda ve paydaşın diğer paydaşa satışında kullanılamaz; dava satıcıya değil ALICIYA karşı açılır; süresi noter bildiriminden itibaren 3 ay ve her hâlde satıştan itibaren 2 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer; tapu kütüğüne şerh verilen sözleşmeden doğan önalım (alım ve geri alım) hakkı ise şerh tarihinden itibaren her hâlde on yıl geçmekle düşer',
      wrongPhrase: 'satışın herhangi bir yolla öğrenildiği tarihten itibaren bir ay ve her hâlde satışın üzerinden beş yıl geçmekle düşer; şerh verilen sözleşmeden doğan önalım hakkı ise yirmi yıl geçmekle düşer',
      correctPhrase: 'satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer; tapu kütüğüne şerh verilen sözleşmeden doğan önalım (alım ve geri alım) hakkı ise şerh tarihinden itibaren her hâlde on yıl geçmekle düşer',
      explanation: 'TMK m. 733/4 ve m. 735 uyarınca önalım davası süresi haricen öğrenmeyle başlamaz; noter aracılığıyla bildirimden itibaren 3 ay ve her hâlde satıştan itibaren 2 yıldır; şerh süresinin üst sınırı ise 10 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Paylı mülkiyette bir paydaşın taşınmaz üzerindeki payını tamamen veya kısmen üçüncü kişiye satması hâlinde diğer paydaşlar önalım (şufa) hakkını kullanabilirler; önalım hakkı alıcıya karşı dava açılarak kullanılır',
      wrongPhrase: 'Paylı mülkiyette bir paydaşın payını diğer bir paydaşa satması veya cebri icra yoluyla satış yapılması hâlinde de diğer paydaşlar satıcıya karşı noter ihtarıyla önalım hakkını kullanabilirler',
      correctPhrase: 'Paylı mülkiyette bir paydaşın taşınmaz üzerindeki payını tamamen veya kısmen üçüncü kişiye satması hâlinde diğer paydaşlar önalım (şufa) hakkını kullanabilirler; önalım hakkı alıcıya karşı dava açılarak kullanılır',
      explanation: 'TMK m. 732 ve m. 733/1-3 uyarınca paydaşlar kendi aralarındaki satışlarda ve cebri artırmayla satışlarda önalım hakkı kullanılamaz; ayrıca önalım hakkı ihtarla değil, alıcıya karşı DAVA açılarak kullanılır!'
    }
  }
];
