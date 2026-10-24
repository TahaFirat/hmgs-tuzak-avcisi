import { TrapCard } from '../types/hmgs';
import { buildExpandedHmgsBank } from './hmgsStatuteRepository';

const BASE_HMGS_CARDS: TrapCard[] = [
  // ==================== HMK (HUKUK MUHAKEMELERİ KANUNU) ====================
  {
    id: 'hmgs-hmk-345',
    branch: 'HMK',
    subTopic: 'Süreler ve Kanun Yolları',
    articleRef: 'M. 345',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Hukuk Muhakemeleri Kanunu’na göre, istinaf yoluna başvuru süresi gerekçeli kararın taraflara usulen tebliğinden itibaren on gündür.',
    highlightedKeywords: ['istinaf yoluna başvuru süresi', 'tebliğinden itibaren', 'on gündür'],
    isCorrect: false,
    wrongPhrase: 'on gündür',
    correctPhrase: 'iki haftadır',
    explanation:
      '6100 sayılı HMK m. 345 uyarınca istinaf başvuru süresi kararın usulen tebliğinden itibaren iki haftadır. ÖSYM, eski HUMK dönemindeki gün hesabı ile HMK’daki iki haftalık standart kanun yolu süresini sıkça birbirine karıştırarak çeldirici üretir.'
  },
  {
    id: 'hmgs-hmk-4',
    branch: 'HMK',
    subTopic: 'Görevli Mahkeme',
    articleRef: 'M. 4',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Kira ilişkisinden doğan alacak davaları ile taşınır ve taşınmaz mal veya hakkın paylaştırılmasına ve ortaklığın giderilmesine ilişkin davalarda görevli mahkeme dava değerine bakılmaksızın Asliye Hukuk Mahkemesidir.',
    highlightedKeywords: ['Kira ilişkisinden doğan', 'ortaklığın giderilmesine', 'dava değerine bakılmaksızın', 'Asliye Hukuk Mahkemesidir'],
    isCorrect: false,
    wrongPhrase: 'Asliye Hukuk Mahkemesidir',
    correctPhrase: 'Sulh Hukuk Mahkemesidir',
    explanation:
      'HMK m. 4/1-a ve b bentleri uyarınca kira ilişkisinden doğan tüm uyuşmazlıklar (ilamsız icra tahliyesi hariç) ve ortaklığın giderilmesi (izale-i şüyu) davalarında değer ve miktara bakılmaksızın görevli mahkeme Sulh Hukuk Mahkemesidir.'
  },
  {
    id: 'hmgs-hmk-116',
    branch: 'HMK',
    subTopic: 'İlk İtirazlar',
    articleRef: 'M. 116-117',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Kesin yetki kuralının bulunmadığı hâllerde yetki itirazı ile tahkim itirazı ilk itiraz niteliğindedir ve en geç cevap dilekçesinde ileri sürülmek zorundadır.',
    highlightedKeywords: ['Kesin yetki kuralının bulunmadığı hâllerde', 'ilk itiraz niteliğindedir', 'en geç cevap dilekçesinde'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'ilk itiraz niteliğindedir ve en geç cevap dilekçesinde ileri sürülmelidir',
    explanation:
      'HMK m. 116 ve m. 117 uyarınca kesin olmayan yetki itirazı ve tahkim itirazı ilk itirazdır; cevap dilekçesinde ileri sürülmezse dinlenmez ve hâkim tarafından re’sen gözetilmez.'
  },
  {
    id: 'hmgs-hmk-127',
    branch: 'HMK',
    subTopic: 'Cevap Dilekçesi Süresi',
    articleRef: 'M. 127',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Yazılı yargılama usulünde davaya cevap verme süresi, dava dilekçesinin davalıya tebliğinden itibaren iki haftadır; ancak durum ve koşullara göre mahkeme bu süreyi bir defaya mahsus olmak üzere bir aya kadar uzatabilir.',
    highlightedKeywords: ['davaya cevap verme süresi', 'tebliğinden itibaren iki haftadır', 'bir aya kadar uzatabilir'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'tebliğden itibaren iki haftadır ve bir aya kadar ek süre verilebilir',
    explanation:
      'HMK m. 127 uyarınca yazılı yargılamada cevap süresi dava dilekçesinin tebliğinden itibaren 2 haftadır; cevap dilekçesinin bu sürede hazırlanması çok zor ise davalıya 1 ayı geçmemek üzere bir defalık ek süre verilebilir.'
  },
  {
    id: 'hmgs-hmk-96',
    branch: 'HMK',
    subTopic: 'Eski Hale Getirme',
    articleRef: 'M. 96',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Hukuk Muhakemeleri Kanunu’na göre eski hale getirme talebi, işlemi yapmaya engel olan sebebin ortadan kalkmasından itibaren yedi gün içinde yapılmalıdır.',
    highlightedKeywords: ['eski hale getirme talebi', 'engel olan sebebin ortadan kalkmasından', 'yedi gün içinde'],
    isCorrect: false,
    wrongPhrase: 'yedi gün içinde',
    correctPhrase: 'iki hafta içinde',
    explanation:
      'HMK m. 96/1 uyarınca eski hale getirme talebi, engelin ortadan kalkmasından itibaren iki hafta içinde yapılmalıdır. "Yedi gün" çeldiricisi İcra ve İflas Kanunu’ndaki sürelerle karıştırılması için kullanılır.'
  },
  {
    id: 'hmgs-hmk-397',
    branch: 'HMK',
    subTopic: 'İhtiyati Tedbir',
    articleRef: 'M. 397',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İhtiyati tedbir kararı dava açılmasından önce verilmişse, tedbir talep eden taraf bu kararın uygulanmasını talep ettiği tarihten itibaren on gün içinde esas hakkındaki davasını açmak zorundadır.',
    highlightedKeywords: ['İhtiyati tedbir kararı', 'uygulanmasını talep ettiği tarihten itibaren', 'on gün içinde'],
    isCorrect: false,
    wrongPhrase: 'on gün içinde',
    correctPhrase: 'iki hafta içinde',
    explanation:
      'HMK m. 397/1 uyarınca ihtiyati tedbiri tamamlayan merasim (esas hakkında dava açma) süresi tedbirin uygulanmasını talep ettiği tarihten itibaren iki haftadır. 10 günlük süre İİK’daki ihtiyati haczi tamamlayan merasim süresidir!'
  },
  {
    id: 'hmgs-hmk-150',
    branch: 'HMK',
    subTopic: 'Dosyanın İşlemden Kaldırılması',
    articleRef: 'M. 150',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Usulüne uygun şekilde davet edilmiş olan taraflar duruşmaya gelmedikleri için işlemden kaldırılan dosya, işlemden kaldırıldığı tarihten başlayarak üç ay içinde yenilenmezse davanın açılmamış sayılmasına karar verilir.',
    highlightedKeywords: ['işlemden kaldırılan dosya', 'üç ay içinde yenilenmezse', 'davanın açılmamış sayılmasına'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'üç ay içinde yenilenmezse davanın açılmamış sayılmasına karar verilir',
    explanation:
      'HMK m. 150/4 uyarınca işlemden kaldırıldığı tarihten başlayarak 3 ay içinde yenilenmeyen davalar sürenin dolduğu gün itibarıyla açılmamış sayılır ve mahkemece kendiliğinden karar bağlanır.'
  },
  {
    id: 'hmgs-hmk-362',
    branch: 'HMK',
    subTopic: 'Temyiz Edilemeyen Kararlar',
    articleRef: 'M. 362',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Bölge adliye mahkemelerinin çekişmesiz yargı işlerinde verdikleri kararlar ile geçici hukuki korumalara (ihtiyati tedbir ve ihtiyati haciz) ilişkin verdikleri kararlara karşı Yargıtay’a temyiz yoluna başvurulabilir.',
    highlightedKeywords: ['çekişmesiz yargı işlerinde', 'geçici hukuki korumalara', 'Yargıtay’a temyiz yoluna başvurulabilir'],
    isCorrect: false,
    wrongPhrase: 'Yargıtay’a temyiz yoluna başvurulabilir',
    correctPhrase: 'temyiz yoluna başvurulamaz (bu kararlar kesindir)',
    explanation:
      'HMK m. 362/1-ç ve e bentleri uyarınca Bölge Adliye Mahkemelerinin çekişmesiz yargı işlerinde ve geçici hukuki korumalarda verdikleri kararlar kesindir; temyiz yolu kapalıdır.'
  },

  // ==================== İDARE HUKUKU & İYUK ====================
  {
    id: 'hmgs-iyuk-7',
    branch: 'İYUK',
    subTopic: 'Dava Açma Süreleri',
    articleRef: 'M. 7',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Özel kanunlarında ayrı süre gösterilmeyen hallerde, Danıştayda ve idare mahkemelerinde dava açma süresi yazılı bildirimin yapıldığı tarihi izleyen günden itibaren altmış gündür.',
    highlightedKeywords: ['Danıştayda ve idare mahkemelerinde', 'yazılı bildirimin yapıldığı tarihi izleyen günden', 'altmış gündür'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'altmış gündür (vergi mahkemelerinde otuz gündür)',
    explanation:
      '2577 sayılı İYUK m. 7/1 hükmüne göre genel dava açma süresi Danıştay ve idare mahkemelerinde 60 gün, vergi mahkemelerinde ise 30 gündür.'
  },
  {
    id: 'hmgs-iyuk-24',
    branch: 'İYUK',
    subTopic: 'İlk Derece Görev Ayrımı',
    articleRef: 'M. 24',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Cumhurbaşkanı kararlarına ve bakanlıkların ülke çapında uygulanacak düzenleyici işlemlerine karşı açılacak iptal davalarında ilk derece mahkemesi olarak Ankara İdare Mahkemesi görevlidir.',
    highlightedKeywords: ['Cumhurbaşkanı kararlarına', 'ülke çapında uygulanacak düzenleyici işlemlerine', 'Ankara İdare Mahkemesi görevlidir'],
    isCorrect: false,
    wrongPhrase: 'Ankara İdare Mahkemesi görevlidir',
    correctPhrase: 'Danıştay görevlidir',
    explanation:
      '2575 sayılı Danıştay Kanunu m. 24 uyarınca Cumhurbaşkanı kararları ile bakanlıkların ülke çapında uygulanacak düzenleyici işlemlerine karşı açılacak iptal ve tam yargı davalarına ilk derece mahkemesi olarak Danıştay bakar.'
  },
  {
    id: 'hmgs-iyuk-10',
    branch: 'İYUK',
    subTopic: 'Zımni Ret Süresi',
    articleRef: 'M. 10',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İdari yargıda ilgililerin idari davaya konu olabilecek bir işlem yapılması için idareye yaptıkları başvuruya altmış gün içinde cevap verilmezse istek reddedilmiş (zımni ret) sayılır.',
    highlightedKeywords: ['idareye yaptıkları başvuruya', 'altmış gün içinde cevap verilmezse', 'reddedilmiş (zımni ret) sayılır'],
    isCorrect: false,
    wrongPhrase: 'altmış gün içinde cevap verilmezse',
    correctPhrase: 'otuz gün içinde cevap verilmezse',
    explanation:
      '7331 sayılı Kanun değişikliğiyle İYUK m. 10 ve m. 11’deki idarenin cevap verme (zımni ret) süresi 60 günden 30 güne indirilmiştir! Eski 60 günlük zımni ret süresi ÖSYM’nin en keskin güncel mevzuat tuzağıdır.'
  },
  {
    id: 'hmgs-iyuk-45',
    branch: 'İYUK',
    subTopic: 'İdari Yargıda İstinaf',
    articleRef: 'M. 45',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İdare ve vergi mahkemelerinin kararlarına karşı, başka kanunlarda farklı bir kanun yolu öngörülmüş olsa dahi, kararın tebliğinden itibaren otuz gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir.',
    highlightedKeywords: ['İdare ve vergi mahkemelerinin kararlarına karşı', 'tebliğinden itibaren otuz gün içinde', 'bölge idare mahkemesine istinaf'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'tebliğden itibaren otuz gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir',
    explanation:
      'İYUK m. 45/1 uyarınca idari yargıda hem istinaf hem de temyiz başvuru süresi kararın tebliğinden itibaren 30 gündür (HMK ve CMK’daki 2 haftalık süreyle karıştırılmamalıdır).'
  },
  {
    id: 'hmgs-iyuk-27',
    branch: 'İYUK',
    subTopic: 'Yürütmenin Durdurulmasına İtiraz',
    articleRef: 'M. 27',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İdare ve vergi mahkemelerinin yürütmenin durdurulması istemleri hakkında verdikleri kararlara karşı, kararın tebliğini izleyen günden itibaren on beş gün içinde bölge idare mahkemesine itiraz edilebilir.',
    highlightedKeywords: ['yürütmenin durdurulması istemleri', 'tebliğini izleyen günden itibaren', 'on beş gün içinde'],
    isCorrect: false,
    wrongPhrase: 'on beş gün içinde',
    correctPhrase: 'yedi gün içinde',
    explanation:
      'İYUK m. 27/7 uyarınca yürütmenin durdurulması kararlarına karşı itiraz süresi tebliği izleyen günden itibaren 7 gündür ve itiraz edilen merciin (Bölge İdare Mahkemesi) verdiği karar kesindir.'
  },
  {
    id: 'hmgs-idare-belediye',
    branch: 'İdare',
    subTopic: 'Mahalli İdareler ve Vesayet',
    articleRef: 'Belediye K. M. 44',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Belediye başkanlığının boşalması veya başkanın görevden uzaklaştırılması dışında, belediye başkanının organlık sıfatını kaybetmesine ilişkin karar İçişleri Bakanı tarafından verilir.',
    highlightedKeywords: ['belediye başkanının', 'organlık sıfatını kaybetmesine ilişkin karar', 'İçişleri Bakanı tarafından verilir'],
    isCorrect: false,
    wrongPhrase: 'İçişleri Bakanı tarafından verilir',
    correctPhrase: 'İçişleri Bakanlığının başvurusu üzerine Danıştay tarafından verilir',
    explanation:
      'Anayasa m. 127/4 ve Belediye Kanunu m. 44 uyarınca seçilmiş yerel yönetim organlarının organlık sıfatını kazanmalarına itirazların çözümü ve kaybetmeleri konusundaki denetim yargı yoluyla (Danıştay kararıyla) olur; İçişleri Bakanı yalnızca geçici tedbir olarak görevden uzaklaştırabilir.'
  },
  {
    id: 'hmgs-iyuk-ivedi',
    branch: 'İYUK',
    subTopic: 'İvedi Yargılama Usulü',
    articleRef: 'M. 20/A',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İvedi yargılama usulüne tabi davalarda dava açma süresi otuz gündür ve bu davalarda verilen nihai kararlara karşı istinaf yoluna başvurulamaz; tebliğden itibaren on beş gün içinde doğrudan Danıştay’a temyiz yoluna başvurulur.',
    highlightedKeywords: ['İvedi yargılama usulüne tabi davalarda', 'dava açma süresi otuz gündür', 'istinaf yoluna başvurulamaz', 'on beş gün içinde doğrudan Danıştay’a temyiz'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'dava süresi 30 gün, istinaf kapalı ve 15 gün içinde doğrudan temyiz yolu açıktır',
    explanation:
      'İYUK m. 20/A uyarınca ivedi yargılama usulünde (ihale, acele kamulaştırma, özelleştirme vb.) dava açma süresi 30 gün, temyiz süresi 15 gündür ve istinaf aşaması atlanarak doğrudan Danıştay’a gidilir.'
  },
  {
    id: 'hmgs-idare-kamulastirma',
    branch: 'İdare',
    subTopic: 'Kamulaştırma Hukuku',
    articleRef: '2942 s.K. M. 10',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Kamulaştırma işlemine karşı açılacak iptal davalarında İdare Mahkemesi, kamulaştırma bedelinin tespiti ve taşınmazın idare adına tescili davalarında ise Asliye Hukuk Mahkemesi görevlidir.',
    highlightedKeywords: ['iptal davalarında İdare Mahkemesi', 'bedelinin tespiti ve taşınmazın idare adına tescili davalarında', 'Asliye Hukuk Mahkemesi görevlidir'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'iptal davasında İdare Mahkemesi, bedel tespiti ve tescil davasında Asliye Hukuk Mahkemesi görevlidir',
    explanation:
      '2942 sayılı Kamulaştırma Kanunu m. 10 ve m. 14 uyarınca kamulaştırma idari bir işlem olduğundan iptali İdare Mahkemesinde (30 gün içinde), bedel tespiti ve tescili ise adli yargıda (Asliye Hukuk Mahkemesinde) görülür.'
  },

  // ==================== CMK & TCK (CEZA VE CEZA MUHAKEMESİ HUKUKU) ====================
  {
    id: 'hmgs-cmk-101',
    branch: 'CMK',
    subTopic: 'Koruma Tedbirleri',
    articleRef: 'M. 101',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Soruşturma evresinde şüphelinin tutuklanmasına, gecikmesinde sakınca bulunan hallerde Cumhuriyet savcısı tarafından doğrudan karar verilebilir.',
    highlightedKeywords: ['Soruşturma evresinde', 'tutuklanmasına', 'gecikmesinde sakınca bulunan hallerde Cumhuriyet savcısı'],
    isCorrect: false,
    wrongPhrase: 'gecikmesinde sakınca bulunan hallerde Cumhuriyet savcısı',
    correctPhrase: 'Cumhuriyet savcısının istemi üzerine sulh ceza hâkimi',
    explanation:
      'Anayasa m. 19 ve CMK m. 101 uyarınca tutuklama kararı yalnızca hâkim tarafından verilebilir; gecikmesinde sakınca bulunan hallerde dahi Cumhuriyet savcısının tutuklama kararı verme yetkisi yoktur.'
  },
  {
    id: 'hmgs-cmk-268',
    branch: 'CMK',
    subTopic: 'İtiraz Kanun Yolu Süresi',
    articleRef: 'M. 268',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Ceza Muhakemesi Kanunu uyarınca, hâkim veya mahkeme kararlarına karşı itiraz kanun yoluna başvuru süresi, ilgililerin kararı öğrendiği günden itibaren yedi gündür.',
    highlightedKeywords: ['itiraz kanun yoluna başvuru süresi', 'öğrendiği günden itibaren', 'yedi gündür'],
    isCorrect: false,
    wrongPhrase: 'yedi gündür',
    correctPhrase: 'iki haftadır',
    explanation:
      '7499 sayılı Kanun (8. Yargı Paketi) ile CMK m. 268/1’deki genel itiraz süresi "yedi gün"den "iki hafta"ya çıkarılmıştır. Eski "yedi gün" ibaresi sınavlarda en önemli güncel mevzuat tuzağıdır!'
  },
  {
    id: 'hmgs-cmk-273',
    branch: 'CMK',
    subTopic: 'İstinaf Süresi Başlangıcı',
    articleRef: 'M. 273',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Ceza muhakemesinde istinaf istemi, hükmün sanığın yüzüne karşı açıklanmasından (tefhiminden) itibaren iki hafta içinde hükmü veren mahkemeye bir dilekçe verilmesi suretiyle yapılır.',
    highlightedKeywords: ['istinaf istemi', 'hükmün sanığın yüzüne karşı açıklanmasından (tefhiminden) itibaren', 'iki hafta içinde'],
    isCorrect: false,
    wrongPhrase: 'hükmün sanığın yüzüne karşı açıklanmasından (tefhiminden) itibaren',
    correctPhrase: 'gerekçeli kararın tebliğinden itibaren',
    explanation:
      '7499 sayılı Kanun değişikliğiyle CMK m. 273 ve m. 291’de istinaf ve temyiz sürelerinin tefhimle (hükmün açıklanmasıyla) başlaması kuralı kaldırılmış, HMK ile paralel şekilde "gerekçeli kararın tebliğinden itibaren iki hafta" kuralı getirilmiştir!'
  },
  {
    id: 'hmgs-cmk-231',
    branch: 'CMK',
    subTopic: 'Hükmün Açıklanmasının Geri Bırakılması',
    articleRef: 'M. 231',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Ceza muhakemesinde hükmün açıklanmasının geri bırakılması (HAGB) kararlarına karşı başvurulabilecek olağan kanun yolu, ağır ceza mahkemesine yapılacak itiraz değil, bölge adliye mahkemesine yapılacak istinaf başvurusu olmuştur.',
    highlightedKeywords: ['hükmün açıklanmasının geri bırakılması (HAGB)', 'ağır ceza mahkemesine yapılacak itiraz değil', 'bölge adliye mahkemesine yapılacak istinaf'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'HAGB kararlarına karşı istinaf kanun yoluna başvurulabilir',
    explanation:
      'Anayasa Mahkemesinin iptal kararı sonrasında 7499 sayılı Kanun ile CMK m. 231/12 değiştirilmiş ve 1 Haziran 2024’ten itibaren HAGB kararlarına karşı itiraz yolu yerine genel istinaf kanun yolu açılmıştır.'
  },
  {
    id: 'hmgs-cmk-91',
    branch: 'CMK',
    subTopic: 'Gözaltı Süreleri',
    articleRef: 'M. 91',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Bireysel suçlarda gözaltı süresi yakalama anından itibaren yirmi dört saati geçemez; yakalama yerine en yakın hâkim veya mahkemeye gönderilme için zorunlu yol süresi ise on iki saatten fazla olamaz.',
    highlightedKeywords: ['yakalama anından itibaren yirmi dört saati geçemez', 'zorunlu yol süresi ise on iki saatten fazla olamaz'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'gözaltı süresi 24 saati, zorunlu yol süresi 12 saati geçemez',
    explanation:
      'CMK m. 91/1 uyarınca bireysel suçlarda gözaltı süresi en çok 24 saat, yol süresi en çok 12 saattir. Toplu olarak işlenen suçlarda Cumhuriyet savcısı her defasında 1 günü geçmemek üzere 3 gün süreyle uzatabilir.'
  },
  {
    id: 'hmgs-tck-73',
    branch: 'TCK',
    subTopic: 'Şikâyet Süresi',
    articleRef: 'M. 73',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Soruşturulması ve kovuşturulması şikâyete bağlı olan suç hakkında yetkili kimse, fiili ve failin kim olduğunu bildiği veya öğrendiği günden başlayarak bir yıl içinde şikâyette bulunmadığı takdirde soruşturma ve kovuşturma yapılamaz.',
    highlightedKeywords: ['şikâyete bağlı olan suç', 'fiili ve failin kim olduğunu bildiği veya öğrendiği günden', 'bir yıl içinde'],
    isCorrect: false,
    wrongPhrase: 'bir yıl içinde',
    correctPhrase: 'altı ay içinde',
    explanation:
      'TCK m. 73/1 uyarınca şikâyet süresi, hak sahibinin fiili ve failin kim olduğunu bildiği veya öğrendiği günden itibaren 6 aydır.'
  },
  {
    id: 'hmgs-tck-31',
    branch: 'TCK',
    subTopic: 'Yaş Küçüklüğü ve Ceza Sorumluluğu',
    articleRef: 'M. 31',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Türk Ceza Kanunu’na göre fiili işlediği sırada on iki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur; bu kişiler hakkında ceza kovuşturması yapılamaz, ancak çocuklara özgü güvenlik tedbirleri uygulanabilir.',
    highlightedKeywords: ['on iki yaşını doldurmamış olan çocukların', 'ceza sorumluluğu yoktur', 'güvenlik tedbirleri uygulanabilir'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: '12 yaşını doldurmamış çocukların ceza sorumluluğu yoktur',
    explanation:
      'TCK m. 31/1 uyarınca 12 yaşını doldurmamış çocukların (sağır ve dilsizlerde 15 yaşını doldurmamış olanların) mutlak olarak ceza sorumluluğu yoktur.'
  },
  {
    id: 'hmgs-tck-51',
    branch: 'TCK',
    subTopic: 'Hapis Cezasının Ertelenmesi',
    articleRef: 'M. 51',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İşlediği suçtan dolayı iki yıl veya daha az süreyle hapis cezasına mahkûm edilen kişinin cezası ertelenebilir; ancak fiili işlediği sırada on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş olan kişiler bakımından bu üst sınır beş yıldır.',
    highlightedKeywords: ['iki yıl veya daha az süreyle hapis cezasına', 'on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş', 'bu üst sınır beş yıldır'],
    isCorrect: false,
    wrongPhrase: 'bu üst sınır beş yıldır',
    correctPhrase: 'bu üst sınır üç yıldır',
    explanation:
      'TCK m. 51/1 uyarınca hapis cezasının ertelenmesi sınırı kural olarak 2 yıl veya daha az hapis cezasıdır; 18 yaşını doldurmamış veya 65 yaşını bitirmiş olanlar bakımından ise bu sınır 5 yıl değil, 3 yıldır.'
  },

  // ==================== ANAYASA HUKUKU ====================
  {
    id: 'hmgs-anayasa-96',
    branch: 'Anayasa',
    subTopic: 'TBMM Toplantı ve Karar Yeter Sayısı',
    articleRef: 'M. 96',
    trapCategory: 'Çoğunluk Tuzağı',
    statement:
      'Anayasada başkaca bir hüküm yoksa, Türkiye Büyük Millet Meclisi üye tamsayısının en az üçte biri ile toplanır ve üye tamsayısının salt çoğunluğu ile karar verir.',
    highlightedKeywords: ['üye tamsayısının en az üçte biri ile toplanır', 'üye tamsayısının salt çoğunluğu ile karar verir'],
    isCorrect: false,
    wrongPhrase: 'üye tamsayısının salt çoğunluğu ile karar verir',
    correctPhrase: 'toplantıya katılanların salt çoğunluğu ile karar verir',
    explanation:
      'Anayasa m. 96’ya göre TBMM’de adi karar yeter sayısı "üye tamsayısının salt çoğunluğu" değil, "toplantıya katılanların salt çoğunluğu"dur (ancak karar yeter sayısı üye tamsayısının dörtte birinin bir fazlasından yani 151’den az olamaz).'
  },
  {
    id: 'hmgs-anayasa-148',
    branch: 'Anayasa',
    subTopic: 'Anayasa Yargısı ve Yüce Divan',
    articleRef: 'M. 148',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Anayasa Mahkemesinin Yüce Divan sıfatıyla verdiği kararlara karşı yalnız bir kez olmak üzere yeniden inceleme başvurusu yapılabilir; genel kurulun yeniden inceleme üzerine verdiği kararlar kesindir.',
    highlightedKeywords: ['Yüce Divan sıfatıyla', 'yeniden inceleme başvurusu yapılabilir', 'kesindir'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'yeniden inceleme başvurusu yapılabilir ve bu kararlar kesindir',
    explanation:
      '1982 Anayasası m. 148/7 uyarınca Yüce Divan kararlarına karşı bir kez yeniden inceleme başvurusu yapılabilir; yeniden inceleme üzerine verilen kararlar kesindir.'
  },
  {
    id: 'hmgs-anayasa-87',
    branch: 'Anayasa',
    subTopic: 'Genel ve Özel Af İlanı',
    articleRef: 'M. 87',
    trapCategory: 'Çoğunluk Tuzağı',
    statement:
      'Türkiye Büyük Millet Meclisi, üye tamsayısının salt çoğunluğunun kararı ile genel ve özel af ilanına karar verebilir.',
    highlightedKeywords: ['Türkiye Büyük Millet Meclisi', 'üye tamsayısının salt çoğunluğunun kararı ile', 'genel ve özel af ilanına'],
    isCorrect: false,
    wrongPhrase: 'üye tamsayısının salt çoğunluğunun kararı ile',
    correctPhrase: 'üye tamsayısının beşte üç çoğunluğunun kararı ile',
    explanation:
      'Anayasa m. 87 uyarınca TBMM’nin genel ve özel af ilanına karar verebilmesi için üye tamsayısının en az beşte üç (3/5 — 360 milletvekili) nitelikli çoğunluğunun kararı şarttır.'
  },
  {
    id: 'hmgs-anayasa-151',
    branch: 'Anayasa',
    subTopic: 'Soyut Norm Denetimi Süresi',
    articleRef: 'M. 151',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Anayasa Mahkemesinde doğrudan doğruya kanunların, Cumhurbaşkanlığı kararnamelerinin veya TBMM İçtüzüğünün esas bakımından iptali davası açma hakkı, iptali istenen normun Resmî Gazetede yayımlanmasından başlayarak altmış gün sonra düşer.',
    highlightedKeywords: ['esas bakımından iptali davası açma hakkı', 'Resmî Gazetede yayımlanmasından başlayarak', 'altmış gün sonra düşer'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'Resmî Gazetede yayımlanmasından başlayarak altmış gün (şekil bozukluğunda on gün)',
    explanation:
      'Anayasa m. 151 uyarınca esas bakımından iptal davası açma süresi 60 gündür. Kanunların ve Anayasa değişikliklerinin şekil bozukluğuna dayalı iptal davası açma süresi ise 10 gündür.'
  },
  {
    id: 'hmgs-anayasa-119',
    branch: 'Anayasa',
    subTopic: 'Olağanüstü Hal Yönetimi',
    articleRef: 'M. 119',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Cumhurbaşkanı, kanunla düzenlenen sebeplerin ortaya çıkması halinde yurdun tamamında veya bir bölgesinde süresi altı ayı geçmemek üzere olağanüstü hal ilan edebilir; TBMM ise Cumhurbaşkanının talebiyle bu süreyi her defasında en çok altı ayı geçmemek üzere uzatabilir.',
    highlightedKeywords: ['süresi altı ayı geçmemek üzere olağanüstü hal', 'her defasında en çok altı ayı geçmemek üzere uzatabilir'],
    isCorrect: false,
    wrongPhrase: 'her defasında en çok altı ayı geçmemek üzere uzatabilir',
    correctPhrase: 'her defasında dört ayı geçmemek üzere uzatabilir',
    explanation:
      'Anayasa m. 119 uyarınca ilk OHAL ilanı süresi en çok 6 aydır; ancak TBMM’nin her defasında yapacağı uzatma süresi 6 ay değil, en çok 4 aydır (savaş hallerinde bu dört aylık süre aranmaz).'
  },
  {
    id: 'hmgs-anayasa-146',
    branch: 'Anayasa',
    subTopic: 'Anayasa Mahkemesinin Kuruluşu',
    articleRef: 'M. 146',
    trapCategory: 'Çoğunluk Tuzağı',
    statement:
      'Anayasa Mahkemesi on beş üyeden kurulur; bu üyelerin üçü Türkiye Büyük Millet Meclisi, on ikisi ise Cumhurbaşkanı tarafından seçilir ve üyeler on iki yıl için seçilirler.',
    highlightedKeywords: ['on beş üyeden kurulur', 'üçü Türkiye Büyük Millet Meclisi, on ikisi ise Cumhurbaşkanı', 'on iki yıl için seçilirler'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: '15 üyeden oluşur (3 üye TBMM, 12 üye Cumhurbaşkanı) ve görev süresi 12 yıldır',
    explanation:
      'Anayasa m. 146-147 uyarınca Anayasa Mahkemesi 15 üyeden oluşur (3 TBMM, 12 Cumhurbaşkanı). Üyeler 12 yıl için seçilir, bir kimse iki defa seçilemez ve 65 yaşını doldurunca emekliye ayrılır.'
  },
  {
    id: 'hmgs-anayasa-104',
    branch: 'Anayasa',
    subTopic: 'Cumhurbaşkanlığı Kararnamesi',
    articleRef: 'M. 104',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Cumhurbaşkanlığı kararnamesi ile kanunlarda farklı hükümler bulunması halinde Cumhurbaşkanlığı kararnamesi hükümleri uygulanır.',
    highlightedKeywords: ['Cumhurbaşkanlığı kararnamesi ile kanunlarda farklı hükümler bulunması halinde', 'Cumhurbaşkanlığı kararnamesi hükümleri uygulanır'],
    isCorrect: false,
    wrongPhrase: 'Cumhurbaşkanlığı kararnamesi hükümleri uygulanır',
    correctPhrase: 'kanun hükümleri uygulanır',
    explanation:
      'Anayasa m. 104/17 uyarınca Cumhurbaşkanlığı kararnamesi ile kanunlarda farklı hükümler bulunması halinde kanun hükümleri uygulanır ve TBMM aynı konuda kanun çıkarırsa kararname hükümsüz hale gelir.'
  },
  {
    id: 'hmgs-anayasa-152',
    branch: 'Anayasa',
    subTopic: 'Somut Norm Denetimi (İtiraz Yolu)',
    articleRef: 'M. 152',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Bir davaya bakmakta olan mahkemenin itiraz yoluyla Anayasa Mahkemesine başvurması üzerine, Anayasa Mahkemesinin işin kendisine gelişinden başlamak üzere beş ay içinde karar vermesi gerekir; bu sürede karar verilmezse mahkeme davayı yürürlükteki kanun hükümlerine göre sonuçlandırır.',
    highlightedKeywords: ['itiraz yoluyla Anayasa Mahkemesine', 'beş ay içinde karar vermesi gerekir', 'yürürlükteki kanun hükümlerine göre sonuçlandırır'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'beş ay içinde karar verir ve Anayasa Mahkemesinin esasa ilişkin ret kararından sonra on yıl geçmedikçe aynı kanun hükmü için tekrar başvurulamaz',
    explanation:
      'Anayasa m. 152 uyarınca somut norm denetiminde bekletici sorun süresi 5 aydır; ayrıca AYM’nin işin esasına girerek verdiği ret kararının Resmî Gazetede yayımlanmasından sonra 10 yıl geçmedikçe aynı kanun hükmünün anayasaya aykırılığı iddiasıyla tekrar başvurulamaz.'
  },

  // ==================== MEDENİ HUKUK & BORÇLAR HUKUKU (TMK & TBK) ====================
  {
    id: 'hmgs-tmk-166',
    branch: 'Medeni',
    subTopic: 'Anlaşmalı Boşanma Şartları',
    articleRef: 'TMK M. 166/3',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Türk Medeni Kanunu’na göre eşlerin anlaşmalı olarak boşanabilmeleri için evliliğin en az altı ay sürmüş olması şarttır.',
    highlightedKeywords: ['anlaşmalı olarak boşanabilmeleri için', 'evliliğin en az altı ay sürmüş olması'],
    isCorrect: false,
    wrongPhrase: 'en az altı ay',
    correctPhrase: 'en az bir yıl',
    explanation:
      'TMK m. 166/3 hükmü uyarınca anlaşmalı boşanma davası açılabilmesi için evliliğin en az 1 yıl sürmüş olması zorunludur. ÖSYM "altı ay" çeldiricisini "terk sebebiyle boşanmadaki 6 aylık süre" ile karıştırmanız için kullanır.'
  },
  {
    id: 'hmgs-tbk-27',
    branch: 'Borçlar',
    subTopic: 'Sözleşmelerin Hükümsüzlüğü',
    articleRef: 'TBK M. 27',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Türk Borçlar Kanunu’na göre kanunun emredici hükümlerine, ahlaka, kamu düzenine, kişilik haklarına aykırı veya konusu imkânsız olan sözleşmeler kesin olarak hükümsüzdür ve bu durum hâkim tarafından re’sen dikkate alınır.',
    highlightedKeywords: ['emredici hükümlerine', 'kesin olarak hükümsüzdür', 'hâkim tarafından re’sen dikkate alınır'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'kesin olarak hükümsüzdür (mutlak butlan) ve re’sen dikkate alınır',
    explanation:
      'TBK m. 27 uyarınca emredici hukuk kurallarına aykırılık kesin hükümsüzlük (mutlak butlan) yaptırımına tabidir ve hâkim tarafından taraflar ileri sürmese bile re’sen gözetilir.'
  },
  {
    id: 'hmgs-tmk-32',
    branch: 'Medeni',
    subTopic: 'Gaiplik Kararı Süreleri',
    articleRef: 'TMK M. 32-33',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Ölüm tehlikesi içinde kaybolan bir kimse hakkında gaiplik kararının istenebilmesi için tehlikenin üzerinden en az beş yıl geçmiş olması gerekir.',
    highlightedKeywords: ['Ölüm tehlikesi içinde kaybolan', 'gaiplik kararının istenebilmesi için', 'en az beş yıl geçmiş olması'],
    isCorrect: false,
    wrongPhrase: 'en az beş yıl geçmiş olması',
    correctPhrase: 'en az bir yıl geçmiş olması (uzun zamandan beri haber alınamama halinde beş yıl)',
    explanation:
      'TMK m. 33 uyarınca ölüm tehlikesi içinde kaybolmada bekleme süresi 1 yıl, uzun zamandan beri haber alınamama halinde ise son haber tarihinden itibaren 5 yıldır.'
  },
  {
    id: 'hmgs-tmk-606',
    branch: 'Medeni',
    subTopic: 'Mirasın Reddi Süresi',
    articleRef: 'TMK M. 606',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Yasal ve atanmış mirasçılar mirası üç ay içinde sulh hukuk mahkemesine sözlü veya yazılı beyanla kayıtsız şartsız reddedebilirler.',
    highlightedKeywords: ['mirası üç ay içinde', 'sulh hukuk mahkemesine', 'kayıtsız şartsız reddedebilirler'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'üç ay içinde sulh hukuk mahkemesine kayıtsız şartsız beyanla reddedilebilir',
    explanation:
      'TMK m. 606 ve m. 609 uyarınca mirasın gerçek reddi süresi 3 aydır ve ret beyanı mirasın açıldığı yer Sulh Hukuk Mahkemesine kayıtsız ve şartsız olarak yapılır.'
  },
  {
    id: 'hmgs-tmk-712',
    branch: 'Medeni',
    subTopic: 'Kazandırıcı Zamanaşımı',
    articleRef: 'TMK M. 712',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Geçerli bir hukuki sebep olmaksızın tapu kütüğüne malik olarak yazılan kişi, taşınmaz üzerindeki zilyetliğini davasız ve aralıksız olarak yirmi yıl süreyle ve iyiniyetle sürdürürse olağan zamanaşımı yoluyla mülkiyeti kazanır.',
    highlightedKeywords: ['tapu kütüğüne malik olarak yazılan kişi', 'davasız ve aralıksız olarak', 'yirmi yıl süreyle ve iyiniyetle', 'olağan zamanaşımı'],
    isCorrect: false,
    wrongPhrase: 'yirmi yıl süreyle ve iyiniyetle',
    correctPhrase: 'on yıl süreyle ve iyiniyetle',
    explanation:
      'TMK m. 712 uyarınca tapuda malik görünen iyiniyetli zilyet için olağan kazandırıcı zamanaşımı süresi 10 yıldır. 20 yıllık süre TMK m. 713’teki olağanüstü kazandırıcı zamanaşımı süresidir!'
  },
  {
    id: 'hmgs-tbk-39',
    branch: 'Borçlar',
    subTopic: 'İrade Bozuklukları',
    articleRef: 'TBK M. 39',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Yanılma veya aldatma sebebiyle ya da korkutulma sonucunda sözleşme yapan taraf, yanılma veya aldatmayı öğrendiği ya da korkutmanın etkisinin ortadan kalktığı andan başlayarak bir yıl içinde sözleşme ile bağlı olmadığını bildirmezse sözleşmeyi onamış sayılır.',
    highlightedKeywords: ['Yanılma veya aldatma sebebiyle', 'bir yıl içinde sözleşme ile bağlı olmadığını bildirmezse', 'sözleşmeyi onamış sayılır'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'bir yıllık hak düşürücü süre içinde bildirilmezse sözleşme onanmış sayılır',
    explanation:
      'TBK m. 39 uyarınca irade bozukluğu hallerinde iptal hakkı 1 yıllık hak düşürücü süreye tabidir ve sürenin geçirilmesiyle sözleşme baştan itibaren geçerli hale gelir.'
  },
  {
    id: 'hmgs-tbk-72',
    branch: 'Borçlar',
    subTopic: 'Haksız Fiil Zamanaşımı',
    articleRef: 'TBK M. 72',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Haksız fiilden doğan tazminat istemi, zarar görenin zararı ve tazminat yükümlüsünü öğrendiği tarihten başlayarak bir yılın ve her hâlde fiilin işlendiği tarihten başlayarak on yılın geçmesiyle zamanaşımına uğrar.',
    highlightedKeywords: ['Haksız fiilden doğan tazminat istemi', 'öğrendiği tarihten başlayarak bir yılın', 'her hâlde fiilin işlendiği tarihten başlayarak on yılın'],
    isCorrect: false,
    wrongPhrase: 'öğrendiği tarihten başlayarak bir yılın',
    correctPhrase: 'öğrendiği tarihten başlayarak iki yılın',
    explanation:
      '6098 sayılı TBK m. 72 ve m. 82 ile haksız fiil ve sebepsiz zenginleşmede kısa zamanaşımı süresi (eski Borçlar Kanunu’ndaki 1 yıldan farklı olarak) 2 yıl, uzun zamanaşımı süresi ise 10 yıl olarak düzenlenmiştir.'
  },
  {
    id: 'hmgs-tbk-584',
    branch: 'Borçlar',
    subTopic: 'Kefalet Sözleşmesinde Eşin Rızası',
    articleRef: 'TBK M. 584',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Evli bir kişinin kefil olabilmesi için, mahkemece verilmiş bir ayrılık kararı olmadıkça veya yasal olarak ayrı yaşama hakkı doğmadıkça, diğer eşin yazılı rızası en geç kefalet sözleşmesinin kurulması anında veya sözleşmenin kurulmasından önce alınmalıdır.',
    highlightedKeywords: ['Evli bir kişinin kefil olabilmesi için', 'diğer eşin yazılı rızası', 'en geç kefalet sözleşmesinin kurulması anında'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'diğer eşin yazılı rızası sözleşmenin kurulmasından önce veya en geç kurulması anında alınmalıdır',
    explanation:
      'TBK m. 584/1 uyarınca kefalet sözleşmesinde eşin yazılı rızası en geç sözleşmenin kurulması anında bulunmalıdır; sonradan verilen icazet geçersiz kefaleti geçerli kılmaz (ancak ticari işletme sahibi veya şirket ortağı/yöneticisi sıfatıyla verilen kefaletlerde eş rızası aranmaz).'
  },

  // ==================== TİCARET HUKUKU & İCRA VE İFLAS HUKUKU ====================
  {
    id: 'hmgs-iik-62',
    branch: 'İcra',
    subTopic: 'Genel Haciz Yoluyla Takip',
    articleRef: 'İİK M. 62',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İlamsız genel haciz yoluyla takipte ödeme emrine itiraz etmek isteyen borçlu, ödeme emrinin tebliği tarihinden itibaren yedi gün içinde dilekçe ile veya sözlü olarak icra dairesine itirazını bildirmeye mecburdur.',
    highlightedKeywords: ['ödeme emrine itiraz', 'tebliği tarihinden itibaren yedi gün içinde', 'icra dairesine'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'tebliğden itibaren yedi gün içinde icra dairesine',
    explanation:
      'İİK m. 62 uyarınca genel haciz yoluyla takipte ödeme emrine itiraz süresi tebliğden itibaren 7 gündür ve itiraz icra mahkemesine değil, doğrudan icra dairesine yapılır.'
  },
  {
    id: 'hmgs-iik-168',
    branch: 'İcra',
    subTopic: 'Kambiyo Senetlerine Mahsus Haciz',
    articleRef: 'İİK M. 168',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Kambiyo senetlerine mahsus haciz yoluyla takipte borçlu, borca veya imzaya ilişkin itirazını ödeme emrinin tebliğinden itibaren beş gün içinde icra dairesine bildirmelidir.',
    highlightedKeywords: ['Kambiyo senetlerine mahsus haciz', 'beş gün içinde', 'icra dairesine bildirmelidir'],
    isCorrect: false,
    wrongPhrase: 'icra dairesine bildirmelidir',
    correctPhrase: 'icra mahkemesine dilekçe ile bildirmelidir',
    explanation:
      'Kambiyo senetlerine özgü haciz yoluyla takipte (İİK m. 168-169) itiraz süresi 5 gündür; ancak genel haciz yolundan farklı olarak itiraz icra dairesine değil, dilekçe ile İcra Mahkemesine yapılır.'
  },
  {
    id: 'hmgs-iik-67',
    branch: 'İcra',
    subTopic: 'İtirazın İptali ve Kaldırılması',
    articleRef: 'İİK M. 67-68',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Genel haciz yoluyla takipte borçlunun itirazı üzerine takibi devam ettirmek isteyen alacaklı, itirazın kendisine tebliği tarihinden itibaren altı ay içinde genel mahkemelerde itirazın iptali davası açabilir.',
    highlightedKeywords: ['genel mahkemelerde itirazın iptali davası', 'tebliği tarihinden itibaren', 'altı ay içinde'],
    isCorrect: false,
    wrongPhrase: 'altı ay içinde',
    correctPhrase: 'bir yıl içinde (altı aylık süre icra mahkemesinde itirazın kaldırılması süresidir)',
    explanation:
      'İİK m. 67 uyarınca genel mahkemelerde "itirazın iptali davası" açma süresi 1 yıldır; İİK m. 68 uyarınca İcra Mahkemesinden "itirazın kaldırılması"nı isteme süresi ise 6 aydır. ÖSYM bu iki süreyi çaprazlayarak sorar!'
  },
  {
    id: 'hmgs-iik-264',
    branch: 'İcra',
    subTopic: 'İhtiyati Haczi Tamamlayan Merasim',
    articleRef: 'İİK M. 264',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Dava açılmadan veya icra takibine başlanmadan önce ihtiyati haciz yaptırmış olan alacaklı, haczin tatbikinden (yokluğunda yapılmışsa haciz tutanağının kendisine tebliğinden) itibaren yedi gün içinde takip talebinde bulunmaya veya dava açmaya mecburdur.',
    highlightedKeywords: ['ihtiyati haciz yaptırmış olan alacaklı', 'itibaren yedi gün içinde', 'takip talebinde bulunmaya veya dava açmaya'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'ihtiyati haczi tamamlayan merasim süresi yedi gündür',
    explanation:
      'İİK m. 264/1 uyarınca ihtiyati haczi tamamlayan merasim süresi 7 gündür (HMK m. 397’deki ihtiyati tedbiri tamamlayan merasim süresi olan 2 hafta ile karıştırılmamalıdır).'
  },
  {
    id: 'hmgs-iik-277',
    branch: 'İcra',
    subTopic: 'Tasarrufun İptali Davası',
    articleRef: 'İİK M. 284',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İcra ve İflas Kanunu’na göre tasarrufun iptali davası açma hakkı, batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer.',
    highlightedKeywords: ['tasarrufun iptali davası açma hakkı', 'batıl tasarrufun vukuu (yapıldığı) tarihten itibaren', 'beş yıl geçmekle düşer'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'tasarrufun yapıldığı tarihten itibaren beş yıllık hak düşürücü süreye tabidir',
    explanation:
      'İİK m. 284 uyarınca tasarrufun iptali davası, iptale tabi tasarrufun yapıldığı tarihten itibaren 5 yıllık hak düşürücü süreye tabidir.'
  },
  {
    id: 'hmgs-ttk-21',
    branch: 'Ticaret',
    subTopic: 'Faturaya İtiraz Süresi',
    articleRef: 'TTK M. 21/2',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Bir faturayı alan kişi, aldığı tarihten itibaren sekiz gün içinde faturanın içeriği hakkında bir itirazda bulunmamışsa bu içeriği kabul etmiş sayılır.',
    highlightedKeywords: ['faturayı alan kişi', 'aldığı tarihten itibaren sekiz gün içinde', 'kabul etmiş sayılır'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'aldığı tarihten itibaren sekiz gün içinde',
    explanation:
      '6102 sayılı TTK m. 21/2 uyarınca faturaya ve teyit mektubuna itiraz süresi teslim tarihinden itibaren 8 gündür.'
  },
  {
    id: 'hmgs-ttk-409',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirket Genel Kurulu',
    articleRef: 'TTK M. 409',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Anonim şirketlerde olağan genel kurul toplantısının her faaliyet dönemi sonundan itibaren üç ay içinde yapılması zorunludur; ancak bu süre hak düşürücü nitelikte olup üç ay geçtikten sonra yapılan genel kurul toplantıları batıldır.',
    highlightedKeywords: ['her faaliyet dönemi sonundan itibaren üç ay içinde', 'bu süre hak düşürücü nitelikte olup', 'yapılan genel kurul toplantıları batıldır'],
    isCorrect: false,
    wrongPhrase: 'bu süre hak düşürücü nitelikte olup üç ay geçtikten sonra yapılan genel kurul toplantıları batıldır',
    correctPhrase: 'üç aylık süre düzenleyici nitelikte olup süresinden sonra yapılan toplantılar da geçerlidir',
    explanation:
      'TTK m. 409/1’deki 3 aylık olağan genel kurul toplantı süresi hak düşürücü değil, düzenleyici bir süredir; 3 ay geçtikten sonra yapılan olağan genel kurul toplantısı ve alınan kararlar geçerlidir.'
  },
  {
    id: 'hmgs-ttk-796',
    branch: 'Ticaret',
    subTopic: 'Çekte İbraz Süreleri',
    articleRef: 'TTK M. 796',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Bir çek, düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay içinde muhataba ibraz edilmelidir.',
    highlightedKeywords: ['düzenlendiği yerde ödenecekse on gün', 'başka bir yerde ödenecekse bir ay içinde'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'aynı yerde 10 gün, farklı yerde (aynı kıtada) 1 ay, farklı kıtada 3 ay',
    explanation:
      'TTK m. 796 uyarınca çek ibraz süreleri: düzenlendiği yerde ödenecekse 10 gün, başka bir yerde (veya aynı kıtada) ödenecekse 1 ay, ayrı kıtalarda ödenecekse 3 aydır.'
  },
  {
    id: 'hmgs-ttk-446',
    branch: 'Ticaret',
    subTopic: 'Genel Kurul Kararlarının İptali',
    articleRef: 'TTK M. 445',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Anonim şirket genel kurul kararlarına karşı kanun veya esas sözleşme hükümlerine ve özellikle dürüstlük kuralına aykırılık nedeniyle karar tarihinden itibaren bir ay içinde şirket merkezinin bulunduğu yerdeki asliye hukuk mahkemesinde iptal davası açılabilir.',
    highlightedKeywords: ['genel kurul kararlarına karşı', 'karar tarihinden itibaren bir ay içinde', 'asliye hukuk mahkemesinde iptal davası'],
    isCorrect: false,
    wrongPhrase: 'karar tarihinden itibaren bir ay içinde şirket merkezinin bulunduğu yerdeki asliye hukuk mahkemesinde',
    correctPhrase: 'karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde',
    explanation:
      'TTK m. 445 uyarınca anonim şirket genel kurul kararlarının iptali davası karar tarihinden itibaren 3 ay içinde şirket merkezinin bulunduğu yerdeki Asliye Ticaret Mahkemesinde açılır (1 aylık süre Medeni Kanun’daki dernek genel kurul kararlarının iptali süresidir!).'
  },
  {
    id: 'hmgs-ttk-4',
    branch: 'Ticaret',
    subTopic: 'Ticari Davalarda Arabuluculuk',
    articleRef: 'TTK M. 5/A',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Dava şartı olan ticari uyuşmazlıklarda arabulucu, yapılan başvuruyu görevlendirildiği tarihten itibaren altı hafta içinde sonuçlandırır; bu süre zorunlu hâllerde arabulucu tarafından en fazla iki hafta uzatılabilir.',
    highlightedKeywords: ['ticari uyuşmazlıklarda arabulucu', 'altı hafta içinde sonuçlandırır', 'en fazla iki hafta uzatılabilir'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'ticari arabuluculukta süre 6 hafta + en fazla 2 hafta uzatmadır',
    explanation:
      'TTK m. 5/A-2 uyarınca ticari davalarda dava şartı arabuluculuk süresi 6 haftadır ve zorunlu hallerde en fazla 2 hafta uzatılabilir (İş Mahkemeleri Kanunu’ndaki 3 hafta + 1 hafta süresiyle karıştırılmamalıdır).'
  },

  // ==================== EK ÇEŞİTLİLİK: İŞ HUKUKU, VERGİ, AVUKATLIK, İCRA & USUL ====================
  {
    id: 'hmgs-hmk-19',
    branch: 'HMK',
    subTopic: 'Yetki Sözleşmesi',
    articleRef: 'M. 17-18',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Hukuk Muhakemeleri Kanunu’na göre tacirler veya kamu tüzel kişileri dışında kalan gerçek kişiler de aralarında doğmuş veya doğabilecek uyuşmazlıklar hakkında yazılı yetki sözleşmesi yapabilirler.',
    highlightedKeywords: ['tacirler veya kamu tüzel kişileri dışında kalan gerçek kişiler de', 'yazılı yetki sözleşmesi yapabilirler'],
    isCorrect: false,
    wrongPhrase: 'tacirler veya kamu tüzel kişileri dışında kalan gerçek kişiler de',
    correctPhrase: 'yalnızca tacirler veya kamu tüzel kişileri kendi aralarında',
    explanation:
      'HMK m. 17 uyarınca yalnızca tacirler veya kamu tüzel kişileri aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında yetki sözleşmesi yapabilirler; tacir olmayan adi gerçek kişilerin yaptığı yetki sözleşmesi geçersizdir.'
  },
  {
    id: 'hmgs-cmk-119',
    branch: 'CMK',
    subTopic: 'Arama Kararı Yetkisi',
    articleRef: 'M. 119',
    trapCategory: 'Görev/Yetki Tuzağı',
    statement:
      'Konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda arama, hâkim kararı veya gecikmesinde sakınca bulunan hallerde Cumhuriyet savcısının yazılı emri ile yapılabilir; kolluk amirinin yazılı emriyle bu yerlerde arama yapılamaz.',
    highlightedKeywords: ['Konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda', 'kolluk amirinin yazılı emriyle bu yerlerde arama yapılamaz'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda kolluk amiri emriyle arama yapılamaz',
    explanation:
      'CMK m. 119/1 uyarınca kolluk amirinin yazılı emriyle arama (Cumhuriyet savcısına ulaşılamadığı hallerde) yalnızca kamuya açık alanlarda ve üst/eşya aramalarında mümkündür; konut, işyeri ve kamuya açık olmayan kapalı alanlarda kolluk amiri emriyle arama yapılamaz.'
  },
  {
    id: 'hmgs-cmk-250',
    branch: 'CMK',
    subTopic: 'Seri Muhakeme Usulü',
    articleRef: 'M. 250',
    trapCategory: 'İstisna/Kesinlik Tuzağı',
    statement:
      'Seri muhakeme usulünün uygulanması Cumhuriyet savcısı tarafından şüpheliye teklif edilir; şüphelinin müdafii huzurunda teklifi kabul etmesi hâlinde Cumhuriyet savcısı yaptırımı belirler ve mahkemece kurulan hükme karşı istinaf kanun yoluna başvurulabilir.',
    highlightedKeywords: ['Seri muhakeme usulünün', 'müdafii huzurunda teklifi kabul etmesi', 'mahkemece kurulan hükme karşı istinaf kanun yoluna başvurulabilir'],
    isCorrect: false,
    wrongPhrase: 'mahkemece kurulan hükme karşı istinaf kanun yoluna başvurulabilir',
    correctPhrase: 'mahkemece kurulan hükme karşı yalnızca itiraz kanun yoluna başvurulabilir',
    explanation:
      'CMK m. 250/14 uyarınca seri muhakeme usulünde (ve CMK m. 252 uyarınca basit yargılama usulünde) mahkemece verilen hükümlere karşı istinaf değil, itiraz kanun yoluna başvurulabilir!'
  },
  {
    id: 'hmgs-tck-66',
    branch: 'TCK',
    subTopic: 'Dava Zamanaşımı',
    articleRef: 'M. 66',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Türk Ceza Kanunu’na göre beş yıldan fazla olmamak üzere hapis veya adlî para cezasını gerektiren suçlarda olağan dava zamanaşımı süresi sekiz yıldır.',
    highlightedKeywords: ['beş yıldan fazla olmamak üzere hapis veya adlî para cezasını gerektiren suçlarda', 'olağan dava zamanaşımı süresi sekiz yıldır'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda dava zamanaşımı sekiz yıldır',
    explanation:
      'TCK m. 66/1-e uyarınca 5 yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda olağan dava zamanaşımı süresi 8 yıl, zamanaşımını kesen sebeplerin varlığı halinde (m. 67/4) uzamış dava zamanaşımı süresi 12 yıldır.'
  },
  {
    id: 'hmgs-iyuk-3',
    branch: 'İYUK',
    subTopic: 'Dilekçenin Reddi Üzerine Süre',
    articleRef: 'M. 15',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İdari yargıda dava dilekçesinin İYUK 3. ve 5. maddelere aykırılık nedeniyle reddedilmesi halinde, davacıya hataları gidererek yeniden dava açması için kararın tebliğinden itibaren on beş gün süre verilir.',
    highlightedKeywords: ['dava dilekçesinin İYUK 3. ve 5. maddelere aykırılık nedeniyle reddedilmesi', 'kararın tebliğinden itibaren on beş gün süre verilir'],
    isCorrect: false,
    wrongPhrase: 'on beş gün süre verilir',
    correctPhrase: 'otuz gün süre verilir',
    explanation:
      'İYUK m. 15/1-d uyarınca dilekçenin reddi kararları üzerine yeni dilekçe verilmesi için tanınan süre 15 gün değil, 30 gündür ve aynı yanlışlık ikinci kez yapılırsa dava reddedilir.'
  },
  {
    id: 'hmgs-tmk-182',
    branch: 'Medeni',
    subTopic: 'Boşanmada Zamanaşımı',
    articleRef: 'TMK M. 161-162',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Zina veya hayata kast, pek kötü ya da onur kırıcı davranış sebebiyle boşanma davası açma hakkı, davaya hakkı olan eşin boşanma sebebini öğrenmesinden başlayarak altı ay ve her hâlde bu sebebin doğumunun üzerinden beş yıl geçmekle düşer.',
    highlightedKeywords: ['Zina veya hayata kast', 'öğrenmesinden başlayarak altı ay', 'her hâlde bu sebebin doğumunun üzerinden beş yıl geçmekle düşer'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'öğrenmeden itibaren 6 ay ve her hâlde eylemden itibaren 5 yıllık hak düşürücü süreye tabidir',
    explanation:
      'TMK m. 161/2 ve m. 162/2 uyarınca zina ve hayata kast/pek kötü veya onur kırıcı davranış sebeplerinde dava hakkı öğrenmeden itibaren 6 ay, her hâlde 5 yıl geçmekle düşer ve affeden tarafın dava hakkı yoktur.'
  },
  {
    id: 'hmgs-tbk-347',
    branch: 'Borçlar',
    subTopic: 'Konut ve Çatılı İşyeri Kiraları',
    articleRef: 'TBK M. 347',
    trapCategory: 'Süre Tuzağı',
    statement:
      'Konut ve çatılı işyeri kiralarında kiracı, belirli süreli sözleşmelerin süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça sözleşme aynı koşullarla bir yıl için uzatılmış sayılır; kiraya veren ise sözleşme süresinin bitimine dayanarak beş yıllık uzama süresi sonunda sözleşmeyi sona erdirebilir.',
    highlightedKeywords: ['kiracı, belirli süreli sözleşmelerin süresinin bitiminden en az on beş gün önce', 'kiraya veren ise', 'beş yıllık uzama süresi sonunda'],
    isCorrect: false,
    wrongPhrase: 'beş yıllık uzama süresi sonunda',
    correctPhrase: 'on yıllık uzama süresi sonunda (izleyen her uzama yılının bitiminden en az üç ay önce bildirimde bulunmak koşuluyla)',
    explanation:
      'TBK m. 347/1 uyarınca konut ve çatılı işyeri kiralarında kiraya verenin sebep göstermeksizin fesih hakkı 5 yıllık değil, 10 yıllık uzama süresi sonunda (en erken 1 + 10 + 1 = 12. yılın sonunda) doğar. 5 yıllık süre kira tespit davasındaki emsal/hakkaniyet süresidir!'
  },
  {
    id: 'hmgs-iik-16',
    branch: 'İcra',
    subTopic: 'İcra Müdürünün İşlemlerine Şikâyet',
    articleRef: 'İİK M. 16',
    trapCategory: 'Süre Tuzağı',
    statement:
      'İcra ve iflas dairelerinin yaptığı işlemlerin kanuna veya hadiseye uygun olmaması sebebiyle icra mahkemesine yapılacak şikâyet süresi, işlemin öğrenildiği tarihten itibaren yedi gündür; ancak bir hakkın yerine getirilmemesi veya sebepsiz sürüncemede bırakılması ile kamu düzenine aykırılık hallerinde şikâyet süresizdir.',
    highlightedKeywords: ['icra mahkemesine yapılacak şikâyet süresi', 'öğrenildiği tarihten itibaren yedi gündür', 'kamu düzenine aykırılık hallerinde şikâyet süresizdir'],
    isCorrect: true,
    wrongPhrase: null,
    correctPhrase: 'şikâyet süresi öğrenmeden itibaren yedi gündür; kamu düzenine aykırılıkta ve hakkın sürüncemede bırakılmasında süresizdir',
    explanation:
      'İİK m. 16 uyarınca icra mahkemesine şikâyet süresi öğrenme tarihinden itibaren 7 gündür; ancak kamu düzenine aykırı işlemler ile bir hakkın yerine getirilmemesi/sebepsiz sürüncemede bırakılması her zaman (süresiz) şikâyet konusu yapılabilir.'
  }
];

export const INITIAL_HMGS_CARDS: TrapCard[] = buildExpandedHmgsBank(BASE_HMGS_CARDS);

export const SAMPLE_STATUTE_SNIPPETS = [
  {
    label: 'HMK m. 345 & 361 (İstinaf / Temyiz)',
    branch: 'HMK',
    text: `HMK Madde 345 - (1) İstinaf yoluna başvuru süresi iki haftadır. Bu süre, ilamın usulen taraflardan her birine tebliğiyle işlemeye başlar.
HMK Madde 361 - (1) Bölge adliye mahkemesi hukuk dairelerinden verilen temyizi kabil nihai kararlar ile hakem kararlarının iptali talebi üzerine verilen kararlara karşı tebliğ tarihinden itibaren iki hafta içinde temyiz yoluna başvurulabilir.`
  },
  {
    label: 'İYUK m. 7 & 10 (İdari Dava & Zımni Ret)',
    branch: 'İYUK',
    text: `İYUK Madde 7 - (1) Dava açma süresi, özel kanunlarında ayrı süre gösterilmeyen hallerde Danıştayda ve idare mahkemelerinde altmış ve vergi mahkemelerinde otuz gündür.
İYUK Madde 10 - (2) Otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır. İlgililer otuz günün bittiği tarihten itibaren dava açma süresi içinde Danıştaya, idare ve vergi mahkemelerine dava açabilirler.`
  },
  {
    label: 'CMK m. 91 (Gözaltı Süreleri)',
    branch: 'CMK',
    text: `CMK Madde 91 - (1) Gözaltı süresi, yakalama yerine en yakın hâkim veya mahkemeye gönderilmesi için zorunlu süre hariç, yakalama anından itibaren yirmi dört saati geçemez. Yakalama yerine en yakın hâkim veya mahkemeye gönderilme için zorunlu süre on iki saatten fazla olamaz. Toplu olarak işlenen suçlarda Cumhuriyet savcısı gözaltı süresini her defasında bir günü geçmemek üzere üç gün süreyle uzatabilir.`
  },
  {
    label: 'İİK m. 62 & 66 (Ödeme Emrine İtiraz)',
    branch: 'İcra',
    text: `İİK Madde 62 - (1) İtiraz etmek isteyen borçlu, itirazını, ödeme emrinin tebliği tarihinden itibaren yedi gün içinde dilekçe ile veya sözlü olarak icra dairesine bildirmeye mecburdur.
İİK Madde 66 - (1) Müddeti içinde yapılan itiraz takibi durdurur. İtiraz müddetinde değilse alacaklının talebi üzerine icra memuru takip muamelelerine alacağın tamamı için devam eder.`
  },
  {
    label: 'Anayasa m. 89 & 116 (Kanun Yayımı & Erken Seçim)',
    branch: 'Anayasa',
    text: `Anayasa Madde 89 - Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları on beş gün içinde yayımlar. Türkiye Büyük Millet Meclisi, geri gönderilen kanunu üye tamsayısının salt çoğunluğu ile aynen kabul ederse, kanun Cumhurbaşkanınca yayımlanır.
Anayasa Madde 116 - Türkiye Büyük Millet Meclisi, üye tamsayısının beşte üç çoğunluğuyla seçimlerin yenilenmesine karar verebilir.`
  },
  {
    label: 'TBK m. 72 & 347 (Zamanaşımı & Kira Uzama)',
    branch: 'Borçlar',
    text: `TBK Madde 72 - Tazminat istemi, zarar görenin zararı ve tazminat yükümlüsünü öğrendiği tarihten başlayarak iki yılın ve her hâlde fiilin işlendiği tarihten başlayarak on yılın geçmesiyle zamanaşımına uğrar.
TBK Madde 347 - Konut ve çatılı işyeri kiralarında kiracı, belirli süreli sözleşmelerin süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça, sözleşme aynı koşullarla bir yıl için uzatılmış sayılır.`
  }
];

