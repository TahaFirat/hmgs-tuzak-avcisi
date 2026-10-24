import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Kapsamlı Mevzuat Genişletme Paketi — Bölüm 4
 * Kapsam:
 * 1. İdari Yargılama Usulü Kanunu - İYUK (rule-iyuk-16 .. rule-iyuk-24) -> 9 Kural (27 Kart)
 * 2. İdare Hukuku - DMK, Belediye, Kamulaştırma, İhale (rule-idare-15 .. rule-idare-24) -> 10 Kural (30 Kart)
 * 3. Anayasa Hukuku ve Anayasa Yargısı (rule-anayasa-14 .. rule-anayasa-22) -> 9 Kural (27 Kart)
 * Toplam: 28 Kural x 3 Varyant = 84 Yeni Tam Özgün Kanun Kartı
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART4_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. İDARİ YARGILAMA USULÜ KANUNU (İYUK) DERİNLİK KURALLARI (rule-iyuk-16 .. rule-iyuk-24)
  // =========================================================================
  {
    id: 'rule-iyuk-16',
    branch: 'İYUK',
    subTopic: 'Aynı Dilekçe İle Dava Açılabilecek Haller ve İptal ile Tam Yargı Davasının Birlikte Açılması',
    articleRef: 'İYUK M. 5 & M. 12',
    trueStatement:
      'Her idari işlem aleyhine ayrı ayrı dava açılır; ancak aralarında maddi veya hukuki yönden bağlılık ya da sebep-sonuç ilişkisi bulunan birden fazla işleme karşı bir dilekçe ile de dava açılabilir; birden fazla şahsın müşterek dilekçe ile dava açabilmesi için ise davacıların hak veya menfaatlerinde iştirak bulunması ve davaya yol açan maddi olay veya hukuki sebeplerin aynı olması şarttır; ayrıca ilgililer haklarını ihlal eden bir idari işlem dolayısıyla Danıştaya ve idare ve vergi mahkemelerine doğrudan doğruya tam yargı davası veya iptal ve tam yargı davalarını birlikte açabilecekleri gibi, ilk önce iptal davası açarak bu davanın karara bağlanması üzerine kararın tebliği tarihinden itibaren dava açma süresi içinde tam yargı davası da açabilirler.',
    trueHighlight: ['aralarında maddi veya hukuki yönden bağlılık ya da sebep-sonuç ilişkisi bulunan birden fazla işleme karşı bir dilekçe ile de dava açılabilir', 'davacıların hak veya menfaatlerinde iştirak bulunması ve davaya yol açan maddi olay veya hukuki sebeplerin aynı olması şarttır', 'doğrudan doğruya tam yargı davası veya iptal ve tam yargı davalarını birlikte açabilecekleri gibi, ilk önce iptal davası açarak bu davanın karara bağlanması üzerine kararın tebliği tarihinden itibaren dava açma süresi içinde tam yargı davası da açabilirler'],
    trueCorrectPhrase: 'İYUK m. 5 ve m. 12 uyarınca: 1) Maddi/hukuki bağlılık veya sebep-sonuç ilişkisi olan işlemlere tek dilekçeyle dava açılabilir, 2) Müşterek dilekçe için hak/menfaat iştiraki + aynı maddi olay/hukuki sebep şarttır, 3) İdari işlemden doğan zararda iptal ve tam yargı davası birlikte veya önce iptal sonra tam yargı ya da doğrudan tam yargı olarak açılabilir!',
    baseExplanation: 'İYUK m. 5 (dilekçede birleştirme) ve m. 12 (iptal ve tam yargı davalarının ilişkisi) HMGS İdari Yargı sorularında her dönem test edilen temel usul kurallarıdır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'doğrudan doğruya tam yargı davası veya iptal ve tam yargı davalarını birlikte açabilecekleri gibi, ilk önce iptal davası açarak bu davanın karara bağlanması üzerine kararın tebliği tarihinden itibaren dava açma süresi içinde tam yargı davası da açabilirler',
      wrongPhrase: 'idari bir işlemden doğan zararlarda öncelikle iptal davası açılıp işlemin iptali kararı kesinleşmedikçe doğrudan doğruya tam yargı davası veya iptal ve tam yargı davası birlikte kesinlikle açılamaz',
      correctPhrase: 'doğrudan doğruya tam yargı davası veya iptal ve tam yargı davalarını birlikte açabilecekleri gibi, ilk önce iptal davası açarak bu davanın karara bağlanması üzerine kararın tebliği tarihinden itibaren dava açma süresi içinde tam yargı davası da açabilirler',
      explanation: 'İYUK m. 12 uyarınca idari işlemden doğan zararlarda ilgilinin 3 seçimlik hakkı vardır: 1) Doğrudan tam yargı davası açmak, 2) İptal ve tam yargı davasını birlikte açmak, 3) Önce iptal davası açıp, onun karara bağlanması üzerine tam yargı davası açmak!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak aralarında maddi veya hukuki yönden bağlılık ya da sebep-sonuç ilişkisi bulunan birden fazla işleme karşı bir dilekçe ile de dava açılabilir',
      wrongPhrase: 've aralarında maddi veya hukuki bağlılık bulunsa dahi birden fazla idari işleme karşı hiçbir durumda tek dilekçe ile dava açılamaz',
      correctPhrase: 'ancak aralarında maddi veya hukuki yönden bağlılık ya da sebep-sonuç ilişkisi bulunan birden fazla işleme karşı bir dilekçe ile de dava açılabilir',
      explanation: 'İYUK m. 5/1 açık hükmü uyarınca aralarında maddi veya hukuki yönden bağlılık ya da sebep-sonuç ilişkisi bulunan birden fazla işleme karşı bir dilekçe ile dava açılabilir!'
    }
  },
  {
    id: 'rule-iyuk-17',
    branch: 'İYUK',
    subTopic: 'Dilekçe Üzerine İlk İnceleme Sırası ve Dilekçe Ret / Harç Eksikliği Süreleri (30 Gün)',
    articleRef: 'İYUK M. 6, 14 & 15',
    trueStatement:
      'İdari yargıda dilekçeler sırasıyla; görev ve yetki, idari merci tecavüzü, ehliyet, idari davaya konu olacak kesin ve yürütülmesi gereken bir işlem olup olmadığı, süre aşımı, husumet ve İYUK m. 3 ile m. 5’e uygun olup olmadıkları yönlerinden incelenir; İYUK m. 3 ve m. 5’e aykırılık sebebiyle dilekçenin reddedilmesi hâlinde yeni dilekçe verilmesi için otuz günlük süre tanınır ve yeni dilekçede aynı yanlışlıklar yapıldığı takdirde dava reddedilir; harç veya posta ücreti eksikliğinde ise otuz günlük süre verilir, tamamlanmazsa bildirim tekrarlanır ve yine tamamlanmazsa davanın açılmamış sayılmasına karar verilir.',
    trueHighlight: ['görev ve yetki, idari merci tecavüzü, ehliyet, idari davaya konu olacak kesin ve yürütülmesi gereken bir işlem olup olmadığı, süre aşımı, husumet ve İYUK m. 3 ile m. 5’e uygun olup olmadıkları yönlerinden incelenir', 'dilekçenin reddedilmesi hâlinde yeni dilekçe verilmesi için otuz günlük süre tanınır', 'harç veya posta ücreti eksikliğinde ise otuz günlük süre verilir, tamamlanmazsa bildirim tekrarlanır ve yine tamamlanmazsa davanın açılmamış sayılmasına karar verilir'],
    trueCorrectPhrase: 'İYUK m. 14 ilk inceleme sırası: 1-Görev/Yetki, 2-İdari merci tecavüzü, 3-Ehliyet, 4-Kesin ve yürütülebilir işlem, 5-Süre aşımı, 6-Husumet, 7-Dilekçe şekli (m. 3 ve 5); dilekçe reddinde yenileme süresi 30 gündür (harçlar yeniden alınmaz); harç/posta eksikliğinde ise İKİ KEZ 30 günlük süre verilir, tamamlanmazsa dava açılmamış sayılır (İYUK m. 6/4)!',
    baseExplanation: 'İYUK m. 14 ilk inceleme sırası (özellikle süre aşımının husumetten ÖNCE, ehliyetin ise kesin işlemden ÖNCE gelmesi) ve dilekçe reddi (30 gün) / harç eksikliği (iki kez 30 gün) HMGS’nin klasik sorularındandır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'İYUK m. 3 ve m. 5’e aykırılık sebebiyle dilekçenin reddedilmesi hâlinde yeni dilekçe verilmesi için otuz günlük süre tanınır ve yeni dilekçede aynı yanlışlıklar yapıldığı takdirde dava reddedilir',
      wrongPhrase: 'İYUK m. 3 ve m. 5’e aykırılık sebebiyle dilekçenin reddedilmesi hâlinde davacıya yeni dilekçe vermesi için yedi günlük kesin süre tanınır ve yenileme dilekçesinden başvurma harcı tekrar alınır',
      correctPhrase: 'İYUK m. 3 ve m. 5’e aykırılık sebebiyle dilekçenin reddedilmesi hâlinde yeni dilekçe verilmesi için otuz günlük süre tanınır ve yeni dilekçede aynı yanlışlıklar yapıldığı takdirde dava reddedilir',
      explanation: 'İYUK m. 15/1-d ve m. 15/3 uyarınca dilekçenin reddi üzerine yeni dilekçe verme süresi 7 gün değil, tebliğden itibaren 30 gündür ve dilekçenin yenilenmesi halinde ayrıca harç alınmaz!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'husumet ve İYUK m. 3 ile m. 5’e uygun olup olmadıkları yönlerinden incelenir',
      wrongPhrase: 'dava yanlış hasım gösterilerek açılmışsa mahkeme dilekçeyi derhal husumet yokluğundan reddeder ve doğru hasma tebligat yapamaz',
      correctPhrase: 'husumet ve İYUK m. 3 ile m. 5’e uygun olup olmadıkları yönlerinden incelenir',
      explanation: 'İYUK m. 15/1-c uyarınca davanın hasım gösterilmeden veya yanlış hasım gösterilerek açılması halinde mahkeme davayı reddetmez; dava dilekçesinin tespit edilecek gerçek hasma tebliğine re’sen karar verir!'
    }
  },
  {
    id: 'rule-iyuk-18',
    branch: 'İYUK',
    subTopic: 'İdari Makamların Sükûtu (Zımni Ret Süresi: 30 Gün) ve İhtiyari Başvurunun Dava Süresini Durdurması',
    articleRef: 'İYUK M. 10 & M. 11',
    trueStatement:
      'İlgililer, haklarında idari davaya konu olabilecek bir işlem veya eylemin yapılması için idari makamlara başvurabilirler; otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır (zımni ret) ve ilgililer otuz günün bittiği tarihten itibaren dava açma süresi içinde Danıştaya, idare ve vergi mahkemelerine dava açabilirler; otuz günlük süre içinde idarece verilen cevap kesin değilse ilgili bu cevabı istemin reddi sayarak dava açabileceği gibi kesin cevabı da bekleyebilir, ancak bu takdirde bekleme süresi başvuru tarihinden itibaren dört ayı geçemez; İYUK m. 11 uyarınca üst makamlara (üst makam yoksa işlemi yapmış olan makama) yapılan başvuru ise işlemeye başlamış olan idari dava açma süresini durdurur ve otuz gün içinde cevap verilmezse istek reddedilmiş sayılır.',
    trueHighlight: ['otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır (zımni ret)', 'bekleme süresi başvuru tarihinden itibaren dört ayı geçemez', 'işlemeye başlamış olan idari dava açma süresini durdurur ve otuz gün içinde cevap verilmezse istek reddedilmiş sayılır'],
    trueCorrectPhrase: 'İYUK m. 10 ve m. 11’de 7331 s.K. (2021) değişikliğiyle idarenin zımni ret süresi 60 günden 30 GÜNE, kesin olmayan cevapta azami bekleme süresi ise 6 aydan 4 AYA indirilmiştir! İYUK m. 11 başvurusu dava açma süresini kesmez, DURDURUR!',
    baseExplanation: 'Dikkat: 2021 yılında (7331 s.K.) İYUK m. 10, 11 ve 13’teki tüm 60 günlük zımni ret süreleri 30 GÜNE, m. 10’daki 6 aylık kesin cevap bekleme süresi ise 4 AYA indirilmiştir! HMGS’de "60 gün içinde cevap verilmezse..." tuzağına kesinlikle düşmeyin!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır (zımni ret) ve ilgililer otuz günün bittiği tarihten itibaren dava açma süresi içinde Danıştaya, idare ve vergi mahkemelerine dava açabilirler; otuz günlük süre içinde idarece verilen cevap kesin değilse ilgili bu cevabı istemin reddi sayarak dava açabileceği gibi kesin cevabı da bekleyebilir, ancak bu takdirde bekleme süresi başvuru tarihinden itibaren dört ayı geçemez',
      wrongPhrase: 'altmış gün içinde bir cevap verilmezse istek reddedilmiş sayılır ve kesin olmayan cevapta bekleme süresi başvuru tarihinden itibaren altı ayı geçemez',
      correctPhrase: 'otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır (zımni ret) ve ilgililer otuz günün bittiği tarihten itibaren dava açma süresi içinde Danıştaya, idare ve vergi mahkemelerine dava açabilirler; otuz günlük süre içinde idarece verilen cevap kesin değilse ilgili bu cevabı istemin reddi sayarak dava açabileceği gibi kesin cevabı da bekleyebilir, ancak bu takdirde bekleme süresi başvuru tarihinden itibaren dört ayı geçemez',
      explanation: '7331 s.K. değişikliği ile İYUK m. 10 (ve m. 11, m. 13) kapsamındaki zımni ret süresi 60 günden 30 GÜNE, kesin cevap bekleme üst sınırı ise 6 aydan 4 AYA indirilmiştir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işlemeye başlamış olan idari dava açma süresini durdurur ve otuz gün içinde cevap verilmezse istek reddedilmiş sayılır',
      wrongPhrase: 'işlemeye başlamış olan idari dava açma süresini tamamen keser ve ret cevabı üzerine altmış günlük dava açma süresi sıfırdan yeniden işlemeye başlar',
      correctPhrase: 'işlemeye başlamış olan idari dava açma süresini durdurur ve otuz gün içinde cevap verilmezse istek reddedilmiş sayılır',
      explanation: 'İYUK m. 11/1 ve m. 11/3 uyarınca üst makama başvuru dava açma süresini kesmez, DURDURUR; cevap verilmezse 30 günün bittiği tarihten (veya ret cevabının tebliğinden) itibaren dava açma süresi KALDIĞI YERDEN işlemeye başlar ve o tarihe kadar geçmiş olan süre de hesaba katılır!'
    }
  },
  {
    id: 'rule-iyuk-19',
    branch: 'İYUK',
    subTopic: 'İdari Eylemlerden Doğan Doğrudan Tam Yargı Davaları (1 Yıl - 5 Yıl Ön Karar Başvurusu ve 30 Gün Zımni Ret)',
    articleRef: 'İYUK M. 13',
    trueStatement:
      'İdari eylemlerden hakları muhtel olanlar (zarar görenler), idari dava açmadan önce, bu eylemleri yazılı bildirim üzerine veya başka suretle öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir; bu isteklerin kısmen veya tamamen reddi hâlinde bu konudaki işlemin tebliğini izleyen günden itibaren veya istek hakkında otuz gün içinde cevap verilmediği takdirde bu sürenin bittiği tarihten itibaren dava süresi (altmış gün) içinde dava açılabilir.',
    trueHighlight: ['öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir', 'otuz gün içinde cevap verilmediği takdirde bu sürenin bittiği tarihten itibaren dava süresi (altmış gün) içinde dava açılabilir'],
    trueCorrectPhrase: 'İYUK m. 13 (İdari Eylemden Doğan Tam Yargı Davası) süre zinciri: 1) Öğrenmeden itibaren 1 YIL ve her halde eylem tarihinden itibaren 5 YIL içinde idareye ZORUNLU ÖN KARAR başvurusu yapılır, 2) İdare 30 GÜN içinde cevap vermezse zımni ret oluşur, 3) Açık veya zımni redden itibaren 60 GÜN içinde tam yargı davası açılır!',
    baseExplanation: 'İYUK m. 12 (idari işlemden doğan tam yargı) ile İYUK m. 13 (idari eylemden doğan tam yargı) farkı: İdari eylemden doğan tam yargı davasında dava açmadan önce idareye (1 yıl / 5 yıl içinde) başvurarak ön karar almak ZORUNLUDUR (idari merci tecavüzü sebebi)!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu eylemleri yazılı bildirim üzerine veya başka suretle öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir; bu isteklerin kısmen veya tamamen reddi hâlinde bu konudaki işlemin tebliğini izleyen günden itibaren veya istek hakkında otuz gün içinde cevap verilmediği takdirde bu sürenin bittiği tarihten itibaren dava süresi (altmış gün) içinde dava açılabilir',
      wrongPhrase: 'idareye hiçbir ön başvuru yapmaksızın eylem tarihinden itibaren doğrudan altmış gün içinde idare mahkemesinde tam yargı davası açmaları gerekir; idareye başvurulursa zımni ret süresi altmış gündür',
      correctPhrase: 'bu eylemleri yazılı bildirim üzerine veya başka suretle öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir; bu isteklerin kısmen veya tamamen reddi hâlinde bu konudaki işlemin tebliğini izleyen günden itibaren veya istek hakkında otuz gün içinde cevap verilmediği takdirde bu sürenin bittiği tarihten itibaren dava süresi (altmış gün) içinde dava açılabilir',
      explanation: 'İYUK m. 13/1 uyarınca idari eylemlerden doğan tam yargı davalarında dava açmadan önce 1 yıl ve her halde 5 yıl içinde ilgili idareye başvurmak zorunludur (başvurulmadan açılırsa merci tecavüzü nedeniyle dilekçe idareye tevdi edilir) ve zımni ret süresi 30 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir',
      wrongPhrase: 'ilgili idareye başvurulmadan doğrudan dava açılması halinde mahkeme davayı süre aşımı yönünden kesin olarak reddeder',
      correctPhrase: 'ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir',
      explanation: 'İYUK m. 14/3-b ve m. 15/1-e uyarınca İYUK m. 13’teki zorunlu idari başvuru yapılmadan doğrudan tam yargı davası açılması "idari merci tecavüzü" oluşturur ve mahkeme davayı reddetmez, dilekçenin görevli idare merciine TEVDİİNE karar verir!'
    }
  },
  {
    id: 'rule-iyuk-20',
    branch: 'İYUK',
    subTopic: 'İdari Yargıda Duruşma Yapılması Zorunluluğu ve İstinaf/Temyizde Duruşma Takdiri',
    articleRef: 'İYUK M. 17',
    trueStatement:
      'Danıştay ile idare ve vergi mahkemelerinde açılan iptal ve yirmibeş bin Türk Lirasını (güncel parasal sınırı) aşan tam yargı davaları ile tarh edilen vergi, resim ve harçlarla benzeri mali yükümler ve bunların zam ve cezaları toplamı bu tutarı aşan vergi davalarında, taraflardan birinin isteği üzerine duruşma yapılır; temyiz ve istinaflarda ise duruşma yapılması tarafların istemine ve ilgili bölge idare mahkemesi veya Danıştay dairesinin kararına bağlıdır; duruşma talebi dava dilekçesi ile cevap ve savunmalarda yapılabilir ve mahkeme kendiliğinden de duruşma yapılmasına karar verebilir.',
    trueHighlight: ['iptal ve yirmibeş bin Türk Lirasını (güncel parasal sınırı) aşan tam yargı davaları', 'taraflardan birinin isteği üzerine duruşma yapılır; temyiz ve istinaflarda ise duruşma yapılması tarafların istemine ve ilgili bölge idare mahkemesi veya Danıştay dairesinin kararına bağlıdır', 'duruşma talebi dava dilekçesi ile cevap ve savunmalarda yapılabilir ve mahkeme kendiliğinden de duruşma yapılmasına karar verebilir'],
    trueCorrectPhrase: 'İYUK m. 17 uyarınca ilk derece yargılamasında: 1) İPTAL davalarında parasal sınır aranmaksızın taraflardan biri isterse duruşma yapılması ZORUNLUDUR, 2) Tam yargı ve vergi davalarında ise parasal sınırı aşıyorsa talep üzerine duruşma zorunludur, 3) İstinaf ve temyizde ise talep olsa bile duruşma yapılması mahkemenin TAKDİRİNDEDİR, 4) Mahkeme her davada ve her aşamada RE’SEN de duruşma açabilir!',
    baseExplanation: 'İYUK m. 17’de ÖSYM’nin en sevdiği ayrım: İlk derecede iptal davasında (veya sınırı aşan tam yargı/vergi davasında) taraf duruşma talep etmişse mahkeme duruşma yapmak ZORUNDADIR; ancak istinaf ve temyiz aşamasında taraf talep etse bile duruşma yapılması BİM veya Danıştayın TAKDİRİNE bağlıdır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Danıştay ile idare ve vergi mahkemelerinde açılan iptal ve yirmibeş bin Türk Lirasını (güncel parasal sınırı) aşan tam yargı davaları ile tarh edilen vergi, resim ve harçlarla benzeri mali yükümler ve bunların zam ve cezaları toplamı bu tutarı aşan vergi davalarında, taraflardan birinin isteği üzerine duruşma yapılır; temyiz ve istinaflarda ise duruşma yapılması tarafların istemine ve ilgili bölge idare mahkemesi veya Danıştay dairesinin kararına bağlıdır',
      wrongPhrase: 'İptal davalarında duruşma yapılabilmesi için de uyuşmazlık konusunun parasal sınırı aşması şarttır; buna karşılık istinaf ve temyiz aşamasında taraflardan biri duruşma talep ederse bölge idare mahkemesi ve Danıştay duruşma yapmak zorundadır',
      correctPhrase: 'Danıştay ile idare ve vergi mahkemelerinde açılan iptal ve yirmibeş bin Türk Lirasını (güncel parasal sınırı) aşan tam yargı davaları ile tarh edilen vergi, resim ve harçlarla benzeri mali yükümler ve bunların zam ve cezaları toplamı bu tutarı aşan vergi davalarında, taraflardan birinin isteği üzerine duruşma yapılır; temyiz ve istinaflarda ise duruşma yapılması tarafların istemine ve ilgili bölge idare mahkemesi veya Danıştay dairesinin kararına bağlıdır',
      explanation: 'İYUK m. 17/1-2 uyarınca ilk derecede İPTAL davalarında parasal sınır aranmaksızın talep halinde duruşma zorunludur; istinaf ve temyizde ise duruşma yapılması talep olsa dahi mahkemenin takdirine bağlıdır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'duruşma talebi dava dilekçesi ile cevap ve savunmalarda yapılabilir ve mahkeme kendiliğinden de duruşma yapılmasına karar verebilir',
      wrongPhrase: 'taraflardan birinin açık talebi bulunmadıkça idare mahkemesi veya Danıştay hiçbir davada kendiliğinden duruşma yapılmasına karar veremez; duruşma davetiyeleri ise duruşma gününden en az yedi gün önce gönderilir',
      correctPhrase: 'duruşma talebi dava dilekçesi ile cevap ve savunmalarda yapılabilir ve mahkeme kendiliğinden de duruşma yapılmasına karar verebilir',
      explanation: 'İYUK m. 17/4 ve m. 17/5 uyarınca mahkeme yukarıdaki kayıtlarla bağlı olmaksızın KENDİLİĞİNDEN (re’sen) de duruşma yapılmasına karar verebilir ve duruşma davetiyeleri duruşma gününden en az 7 gün değil, en az OTUZ GÜN önce taraflara gönderilir!'
    }
  },
  {
    id: 'rule-iyuk-21',
    branch: 'İYUK',
    subTopic: 'İvedi Yargılama Usulüne Tabi İşlemler (6 Katalog İşlem: 30 Gün Dava, 15 Gün Savunma, İstinaf Kapalı / 15 Gün Doğrudan Temyiz)',
    articleRef: 'İYUK M. 20/A',
    trueStatement:
      'İvedi yargılama usulü; ihaleden yasaklama kararları hariç ihale işlemleri, acele kamulaştırma işlemleri, Özelleştirme Yüksek Kurulu kararları, 2634 sayılı Turizmi Teşvik Kanunu uyarınca yapılan satış, tahsis ve kiralama işlemleri, Çevresel Etki Değerlendirmesi (ÇED) sonucu alınan kararlar ve 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun uyarınca alınan Cumhurbaşkanı kararlarından doğan uyuşmazlıklarda uygulanır; bu usulde dava açma süresi otuz gün, savunma süresi onbeş gündür (bir defaya mahsus en fazla onbeş gün uzatılabilir); yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez; verilen nihai kararlara karşı istinaf yoluna başvurulamaz, tebliğden itibaren onbeş gün içinde doğrudan Danıştayda temyiz yoluna başvurulabilir.',
    trueHighlight: ['ihaleden yasaklama kararları hariç ihale işlemleri, acele kamulaştırma işlemleri, Özelleştirme Yüksek Kurulu kararları, 2634 sayılı Turizmi Teşvik Kanunu uyarınca yapılan satış, tahsis ve kiralama işlemleri, Çevresel Etki Değerlendirmesi (ÇED) sonucu alınan kararlar ve 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun uyarınca alınan Cumhurbaşkanı kararlarından doğan uyuşmazlıklarda uygulanır', 'dava açma süresi otuz gün, savunma süresi onbeş gündür', 'yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez; verilen nihai kararlara karşı istinaf yoluna başvurulamaz, tebliğden itibaren onbeş gün içinde doğrudan Danıştayda temyiz yoluna başvurulabilir'],
    trueCorrectPhrase: 'İYUK m. 20/A İvedi Yargılama Usulü şifresi: 1) 6 Katalog işlem (Dikkat: İhaleden YASAKLAMA kararları HARİÇ ihale işlemleri!), 2) Dava açma süresi: 30 gün, 3) İlk inceleme: 7 gün, Savunma: 15 gün (+15 gün), 4) İYUK m. 11 üst makama başvuru yapılamaz, 5) YD kararlarına İTİRAZ EDİLEMEZ, 6) İSTİNAF KAPALIDIR, 15 GÜN içinde doğrudan Danıştaya TEMYİZ edilir!',
    baseExplanation: 'İYUK m. 20/A HMGS’de hem "Hangisi ivedi yargılama usulüne tabidir/değildir?" (İhaleden yasaklama kararları hariçtir, genel usule tabidir!) hem de süreleriyle (30 gün dava - 15 gün temyiz - YD itirazı kapalı) her sınavda sorulan bir maddedir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ihaleden yasaklama kararları hariç ihale işlemleri, acele kamulaştırma işlemleri',
      wrongPhrase: 'ihaleden yasaklama kararları dâhil her türlü ihale işlemi ile olağan kamulaştırma işlemleri',
      correctPhrase: 'ihaleden yasaklama kararları hariç ihale işlemleri, acele kamulaştırma işlemleri',
      explanation: 'İYUK m. 20/A-1(a) ve (b) uyarınca "ihaleden yasaklama kararları" ivedi yargılama usulü kapsamı DIŞINDADIR (60 günlük genel dava açma süresine tabidir) ve yalnız "acele kamulaştırma" işlemleri ivedi yargılamaya tabidir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu usulde dava açma süresi otuz gün, savunma süresi onbeş gündür (bir defaya mahsus en fazla onbeş gün uzatılabilir); yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez; verilen nihai kararlara karşı istinaf yoluna başvurulamaz, tebliğden itibaren onbeş gün içinde doğrudan Danıştayda temyiz yoluna başvurulabilir',
      wrongPhrase: 'bu usulde dava açma süresi on gün olup yürütmenin durdurulması kararlarına karşı yedi gün içinde bölge idare mahkemesine itiraz edilebilir ve nihai kararlara karşı otuz gün içinde istinaf yoluna başvurulur',
      correctPhrase: 'bu usulde dava açma süresi otuz gün, savunma süresi onbeş gündür (bir defaya mahsus en fazla onbeş gün uzatılabilir); yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez; verilen nihai kararlara karşı istinaf yoluna başvurulamaz, tebliğden itibaren onbeş gün içinde doğrudan Danıştayda temyiz yoluna başvurulabilir',
      explanation: 'İYUK m. 20/A uyarınca ivedi yargılama usulünde dava açma süresi 30 gündür (10 gün merkezi ve ortak sınavlardadır - m. 20/B), YD kararlarına itiraz edilemez ve nihai kararlara karşı istinaf yolu kapalı olup 15 gün içinde doğrudan Danıştaya temyiz edilir!'
    }
  },
  {
    id: 'rule-iyuk-22',
    branch: 'İYUK',
    subTopic: 'Merkezi ve Ortak Sınavlara İlişkin Yargılama Usulü (10 Gün Dava, 3 Gün Savunma, 5 Gün Temyiz)',
    articleRef: 'İYUK M. 20/B',
    trueStatement:
      'Millî Eğitim Bakanlığı ile Ölçme, Seçme ve Yerleştirme Merkezi (ÖSYM) tarafından yapılan merkezi ve ortak sınavlar, bu sınavlara ilişkin iş ve işlemler ile sınav sonuçları hakkında açılan davalarda; dava açma süresi on gün, ilk inceleme süresi yedi gün, savunma süresi tebliğden itibaren üç gündür (bir defaya mahsus en fazla üç gün uzatılabilir); bu davalarda İYUK m. 11 hükmü uygulanmaz, yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez ve verilen nihai kararlara karşı istinaf yoluna başvurulamaz; tebliğden itibaren beş gün içinde Danıştayda temyiz yoluna başvurulabilir.',
    trueHighlight: ['dava açma süresi on gün, ilk inceleme süresi yedi gün, savunma süresi tebliğden itibaren üç gündür', 'yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez ve verilen nihai kararlara karşı istinaf yoluna başvurulamaz; tebliğden itibaren beş gün içinde Danıştayda temyiz yoluna başvurulabilir'],
    trueCorrectPhrase: 'İYUK m. 20/B (Merkezi ve Ortak Sınavlar - MEB/ÖSYM) süre şifresi: Dava açma süresi 10 GÜN, ilk inceleme 7 GÜN, savunma süresi 3 GÜN (+3 gün), dosya tekemmülünden itibaren karar süresi 15 GÜN, Danıştaya doğrudan temyiz süresi 5 GÜN! (İstinaf ve YD itirazı kapalıdır, İYUK m. 11 işlemez!)',
    baseExplanation: 'İYUK m. 20/A (İvedi Yargılama: 30 gün dava - 15 gün savunma - 15 gün temyiz) ile İYUK m. 20/B (Merkezi ve Ortak Sınavlar: 10 gün dava - 3 gün savunma - 5 gün temyiz) sürelerini karşılaştırmalı bilmek HMGS İdari Yargı sorularında tam puan kazandırır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'dava açma süresi on gün, ilk inceleme süresi yedi gün, savunma süresi tebliğden itibaren üç gündür (bir defaya mahsus en fazla üç gün uzatılabilir); bu davalarda İYUK m. 11 hükmü uygulanmaz, yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez ve verilen nihai kararlara karşı istinaf yoluna başvurulamaz; tebliğden itibaren beş gün içinde Danıştayda temyiz yoluna başvurulabilir',
      wrongPhrase: 'dava açma süresi otuz gün, savunma süresi onbeş gün olup verilen nihai kararlara karşı onbeş gün içinde bölge idare mahkemesine istinaf başvurusu yapılabilir',
      correctPhrase: 'dava açma süresi on gün, ilk inceleme süresi yedi gün, savunma süresi tebliğden itibaren üç gündür (bir defaya mahsus en fazla üç gün uzatılabilir); bu davalarda İYUK m. 11 hükmü uygulanmaz, yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez ve verilen nihai kararlara karşı istinaf yoluna başvurulamaz; tebliğden itibaren beş gün içinde Danıştayda temyiz yoluna başvurulabilir',
      explanation: 'İYUK m. 20/B uyarınca merkezi ve ortak sınavlara ilişkin davalarda dava açma süresi 10 gün, savunma süresi 3 gün ve (istinaf yolu kapalı olduğundan) doğrudan Danıştaya temyiz süresi 5 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu davalarda İYUK m. 11 hükmü uygulanmaz, yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez',
      wrongPhrase: 'bu davalarda İYUK m. 11 uyarınca üst makama yapılan başvuru on günlük dava açma süresini durdurur ve yürütmenin durdurulması kararlarına karşı yedi gün içinde itiraz edilebilir',
      correctPhrase: 'bu davalarda İYUK m. 11 hükmü uygulanmaz, yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez',
      explanation: 'Hem İYUK m. 20/A (ivedi yargılama) hem de İYUK m. 20/B (merkezi ve ortak sınavlar) kapsamında İYUK m. 11 başvurusu dava açma süresini durdurmaz ve yürütmenin durdurulması talebine ilişkin kararlara itiraz edilemez!'
    }
  },
  {
    id: 'rule-iyuk-23',
    branch: 'İYUK',
    subTopic: 'İdari Yargı Kararlarının Sonuçları ve İcrası Süresi (30 Gün)',
    articleRef: 'İYUK M. 28',
    trueStatement:
      'Danıştay, bölge idare mahkemeleri, idare ve vergi mahkemelerinin esasa ve yürütmenin durdurulmasına ilişkin kararlarının icaplarına göre idare, gecikmeksizin işlem tesis etmeye veya eylemde bulunmaya mecburdur ve bu süre hiçbir şekilde kararın idareye tebliğinden başlayarak otuz günü geçemez; mahkeme kararlarının süresi içinde kamu görevlilerince yerine getirilmemesi hâlinde tazminat davası ancak ilgili idare aleyhine açılabilir; tam yargı davaları hakkındaki kararlardan belli bir miktarı içerenler genel hükümler dairesinde infaz ve icra olunur (ancak idareye yazılı başvuru yapılıp otuz gün geçmedikçe cebri icra yoluna başvurulamaz).',
    trueHighlight: ['bu süre hiçbir şekilde kararın idareye tebliğinden başlayarak otuz günü geçemez', 'mahkeme kararlarının süresi içinde kamu görevlilerince yerine getirilmemesi hâlinde tazminat davası ancak ilgili idare aleyhine açılabilir', 'idareye yazılı başvuru yapılıp otuz gün geçmedikçe cebri icra yoluna başvurulamaz'],
    trueCorrectPhrase: 'İYUK m. 28 uyarınca: 1) İdare, esasa ve YD’ye ilişkin kararları gecikmeksizin ve en geç idareye tebliğden itibaren 30 GÜN içinde uygulamak zorundadır, 2) Kararın kamu görevlisince uygulanmaması halinde tazminat davası doğrudan kamu görevlisine değil, ancak İLGİLİ İDARE ALEYHİNE açılabilir, 3) Tam yargı ilamının cebri icraya konulabilmesi için önce idareye başvurup 30 GÜN beklemek şarttır!',
    baseExplanation: 'İYUK m. 28’deki üç kritik HMGS kuralı: 1) Uygulama süresi en çok 30 gün, 2) Kararı uygulamayan kamu görevlisi yüzünden açılacak tazminat davası ancak İLGİLİ İDARE aleyhine açılabilir (m. 28/4), 3) Para alacağı için haciz/cebri icradan önce idareye başvurup 30 gün beklemek zorunludur (m. 28/2).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu süre hiçbir şekilde kararın idareye tebliğinden başlayarak otuz günü geçemez; mahkeme kararlarının süresi içinde kamu görevlilerince yerine getirilmemesi hâlinde tazminat davası ancak ilgili idare aleyhine açılabilir',
      wrongPhrase: 'bu süre kararın idareye tebliğinden başlayarak altmış gündür; mahkeme kararlarının süresi içinde kamu görevlilerince kasten yerine getirilmemesi hâlinde tazminat davası yalnızca ilgili kamu görevlisinin şahsı aleyhine açılabilir, idareye dava açılamaz',
      correctPhrase: 'bu süre hiçbir şekilde kararın idareye tebliğinden başlayarak otuz günü geçemez; mahkeme kararlarının süresi içinde kamu görevlilerince yerine getirilmemesi hâlinde tazminat davası ancak ilgili idare aleyhine açılabilir',
      explanation: 'İYUK m. 28/1 ve m. 28/4 (6552 s.K. değişikliği) uyarınca idarenin kararı uygulama üst sınırı 60 gün değil 30 gündür ve kararın kamu görevlilerince yerine getirilmemesi halinde tazminat davası ancak İLGİLİ İDARE aleyhine açılabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak idareye yazılı başvuru yapılıp otuz gün geçmedikçe cebri icra yoluna başvurulamaz',
      wrongPhrase: 'tam yargı davası ilamı tebliğ edilir edilmez idareye herhangi bir başvuru yapılmaksızın aynı gün doğrudan icra dairesinde haciz işlemlerine başlanabilir',
      correctPhrase: 'ancak idareye yazılı başvuru yapılıp otuz gün geçmedikçe cebri icra yoluna başvurulamaz',
      explanation: 'İYUK m. 28/2 uyarınca konusu belli bir miktar paranın ödenmesini gerektiren davalarda hükmedilen miktar idareye yapılacak yazılı bildirim tarihinden itibaren 30 gün içinde ödenir; bu süre geçmedikçe cebri icra yoluna başvurulamaz!'
    }
  },
  {
    id: 'rule-iyuk-24',
    branch: 'İYUK',
    subTopic: 'İdari Yargıda Yargılamanın Yenilenmesi Süreleri (10 Yıl - 1 Yıl - 60 Gün) ve Kanun Yararına Temyiz',
    articleRef: 'İYUK M. 51 & M. 53',
    trueStatement:
      'Danıştay ile bölge idare, idare ve vergi mahkemelerinden verilen kararlar hakkında yargılamanın yenilenmesi süresi; tarafları, konusu ve sebebi aynı olan bir dava hakkında verilen karara aykırı yeni bir kararın verilmesine neden olabilecek kanuni bir dayanak yokken aynı mahkeme yahut başka bir mahkeme tarafından önceki ilamın hükmüne aykırı bir karar verilmiş bulunması sebebiyle (İYUK m. 53/1-h) on yıl, hükmün İnsan Haklarını ve Ana Hürriyetleri Korumaya Dair Sözleşmenin veya eki protokollerin ihlali suretiyle verildiğinin Avrupa İnsan Hakları Mahkemesinin kesinleşmiş kararıyla tespit edilmiş olması veya dostane çözüm/tek taraflı deklarasyon sebebiyle (İYUK m. 53/1-ı) AİHM kararının kesinleştiği tarihten itibaren bir yıl ve diğer sebepler için ise altmış gündür; yargılamanın yenilenmesi isteği esas kararı vermiş olan mahkemeye yapılır.',
    trueHighlight: ['önceki ilamın hükmüne aykırı bir karar verilmiş bulunması sebebiyle (İYUK m. 53/1-h) on yıl', 'AİHM kararının kesinleştiği tarihten itibaren bir yıl ve diğer sebepler için ise altmış gündür', 'yargılamanın yenilenmesi isteği esas kararı vermiş olan mahkemeye yapılır'],
    trueCorrectPhrase: 'İYUK m. 53/3 yargılamanın yenilenmesi süre şifresi: 1) Çelişkili kararlar (m. 53/1-h) için: 10 YIL, 2) AİHM ihlal kararı (m. 53/1-ı) için: Kesinleşmeden itibaren 1 YIL, 3) Diğer tüm sebepler için: 60 GÜN! (HMK m. 377’deki 3 ay - 10 yıl ile karıştırmayın; İYUK’ta genel süre 3 ay değil 60 gündür!)',
    baseExplanation: 'HMK ile İYUK arasındaki en meşhur süre farklarından biri yargılamanın yenilenmesidir: HMK’da genel süre 3 ay (çelişkili kararda 10 yıl) iken, İYUK m. 53/3’te genel süre 60 GÜN, AİHM kararında 1 YIL, çelişkili kararda 10 YILDIR!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'önceki ilamın hükmüne aykırı bir karar verilmiş bulunması sebebiyle (İYUK m. 53/1-h) on yıl, hükmün İnsan Haklarını ve Ana Hürriyetleri Korumaya Dair Sözleşmenin veya eki protokollerin ihlali suretiyle verildiğinin Avrupa İnsan Hakları Mahkemesinin kesinleşmiş kararıyla tespit edilmiş olması veya dostane çözüm/tek taraflı deklarasyon sebebiyle (İYUK m. 53/1-ı) AİHM kararının kesinleştiği tarihten itibaren bir yıl ve diğer sebepler için ise altmış gündür',
      wrongPhrase: 'tüm yargılamanın yenilenmesi sebepleri için ayrım yapılmaksızın kararın tebliğinden itibaren üç aydır ve her hâlükârda bir yıl geçmekle düşer',
      correctPhrase: 'önceki ilamın hükmüne aykırı bir karar verilmiş bulunması sebebiyle (İYUK m. 53/1-h) on yıl, hükmün İnsan Haklarını ve Ana Hürriyetleri Korumaya Dair Sözleşmenin veya eki protokollerin ihlali suretiyle verildiğinin Avrupa İnsan Hakları Mahkemesinin kesinleşmiş kararıyla tespit edilmiş olması veya dostane çözüm/tek taraflı deklarasyon sebebiyle (İYUK m. 53/1-ı) AİHM kararının kesinleştiği tarihten itibaren bir yıl ve diğer sebepler için ise altmış gündür',
      explanation: 'İYUK m. 53/3 uyarınca idari yargıda yargılamanın yenilenmesi süresi çelişkili karar sebebi (m. 53/1-h) için 10 yıl, AİHM ihlal kararı (m. 53/1-ı) için 1 yıl ve diğer sebepler için 60 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yargılamanın yenilenmesi isteği esas kararı vermiş olan mahkemeye yapılır',
      wrongPhrase: 'yargılamanın yenilenmesi isteği her durumda yalnızca Danıştay İdari Dava Daireleri Kuruluna yapılır',
      correctPhrase: 'yargılamanın yenilenmesi isteği esas kararı vermiş olan mahkemeye yapılır',
      explanation: 'İYUK m. 53/2 uyarınca yargılamanın yenilenmesi isteği Danıştay İDDK’ya değil, esas kararı vermiş olan mahkemeye yapılır ve o mahkemece karara bağlanır!'
    }
  },

  // =========================================================================
  // 2. İDARE HUKUKU DERİNLİK KURALLARI (rule-idare-15 .. rule-idare-24)
  // =========================================================================
  {
    id: 'rule-idare-15',
    branch: 'İdare',
    subTopic: 'Devlet Memurluğunda Adaylık Süresi (En Az 1 Yıl - En Çok 2 Yıl) ve Adaylıkta İlişiğin Kesilmesi',
    articleRef: '657 S. DMK M. 54-57',
    trueStatement:
      'Devlet memurluğuna alınanların adaylık (stajyerlik) süresi bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz; adaylık süresi içinde temel ve hazırlayıcı eğitim ve staj devrelerinin her birinde başarısız olanlarla adaylık süresi içinde hâl ve hareketlerinde memuriyetle bağdaşmayacak durumları, göreve devamsızlıkları tespit edilenlerin ve disiplin cezası almış olanların, disiplin amirlerinin teklifi ve atamaya yetkili amirin onayı ile ilişikleri kesilir; adaylık süresi içinde veya sonunda ilişikleri kesilenler (sağlık nedenleri hariç) üç yıl süre ile Devlet memurluğuna alınmazlar.',
    trueHighlight: ['adaylık (stajyerlik) süresi bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz', 'disiplin amirlerinin teklifi ve atamaya yetkili amirin onayı ile ilişikleri kesilir', 'sağlık nedenleri hariç) üç yıl süre ile Devlet memurluğuna alınmazlar'],
    trueCorrectPhrase: '657 s. DMK m. 54-57 aday memurluk kuralları: 1) Adaylık süresi en az 1 YIL, en çok 2 YILDIR, 2) Aday memurun başka kurumlara nakli YAPILAMAZ, 3) Eğitim/stajda başarısız olan veya disiplin cezası alan aday memurun ilişiği kesilir, 4) Sağlık nedenleri hariç ilişiği kesilen aday memur 3 YIL süreyle Devlet memurluğuna alınamaz!',
    baseExplanation: 'İş Kanunu’ndaki deneme süresi (2 ay / TİS ile 4 ay) ile 657 s. DMK’daki aday memurluk süresi (en az 1 yıl, en çok 2 yıl ve ilişik kesilince 3 yıl memuriyete alınmama) birbirinden tamamen farklıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Devlet memurluğuna alınanların adaylık (stajyerlik) süresi bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz',
      wrongPhrase: 'Devlet memurluğuna alınanların adaylık süresi altı aydan az üç yıldan çok olamaz ve aday memur altıncı ayını doldurduktan sonra başka kurumlara nakledilebilir',
      correctPhrase: 'Devlet memurluğuna alınanların adaylık (stajyerlik) süresi bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz',
      explanation: '657 s. DMK m. 54/2 uyarınca adaylık süresi 1 yıldan az, 2 yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'adaylık süresi içinde veya sonunda ilişikleri kesilenler (sağlık nedenleri hariç) üç yıl süre ile Devlet memurluğuna alınmazlar',
      wrongPhrase: 'adaylık süresi içinde eğitimde başarısız olduğu için ilişiği kesilenler ömür boyu bir daha Devlet memurluğuna alınamazlar',
      correctPhrase: 'adaylık süresi içinde veya sonunda ilişikleri kesilenler (sağlık nedenleri hariç) üç yıl süre ile Devlet memurluğuna alınmazlar',
      explanation: '657 s. DMK m. 57/2 uyarınca adaylık süresi içinde veya sonunda (sağlık nedenleri hariç) ilişikleri kesilenler ömür boyu değil, 3 YIL süre ile Devlet memurluğuna alınmazlar!'
    }
  },
  {
    id: 'rule-idare-16',
    branch: 'İdare',
    subTopic: 'Devlet Memurluğundan Çekilme (İstifa), Çekilmiş Sayılma (Müstafi: 10 Gün) ve Yeniden Atanma Bekleme Süreleri',
    articleRef: '657 S. DMK M. 94-97',
    trueStatement:
      'Devlet memuru bağlı olduğu kuruma yazılı olarak müracaat etmek suretiyle memurluktan çekilme (istifa) isteğinde bulunabilir; mezuniyetsiz veya kurumlarınca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın, çekilme isteğinde bulunulmuş (müstafi) sayılır; çekilen memur yerine atanan kimsenin gelişine kadar veya çekilme isteğinin kabulüne kadar görevine devam eder, yerine atanan kimse bir aya kadar gelmediği veya yerine bir vekil atanmadığı takdirde üstüne haber vererek görevini bırakabilir; usulüne uygun olarak çekilenler altı ay, usulüne uymadan (bir ay beklemeden veya kesintisiz 10 gün gelmeyerek müstafi sayılanlar) çekilenler bir yıl, devir-teslim yükümlülüğüne uymadan çekilenler üç yıl, olağanüstü hâl/seferberlik/savaşta yerine atanacak kişi gelip göreve başlamadıkça çekilenler ise hiçbir surette yeniden Devlet memurluğuna alınamazlar; ayrıca memurluktan iki defadan fazla çekilenler (istifa edenler) tekrar memurluğa dönemez.',
    trueHighlight: ['bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın, çekilme isteğinde bulunulmuş (müstafi) sayılır', 'usulüne uygun olarak çekilenler altı ay, usulüne uymadan (bir ay beklemeden veya kesintisiz 10 gün gelmeyerek müstafi sayılanlar) çekilenler bir yıl, devir-teslim yükümlülüğüne uymadan çekilenler üç yıl, olağanüstü hâl/seferberlik/savaşta yerine atanacak kişi gelip göreve başlamadıkça çekilenler ise hiçbir surette yeniden Devlet memurluğuna alınamazlar', 'memurluktan iki defadan fazla çekilenler (istifa edenler) tekrar memurluğa dönemez'],
    trueCorrectPhrase: '657 s. DMK m. 92-97 istifa ve yeniden dönüş tablosu: 1) Kesintisiz 10 gün izinsiz/mazeretsiz gelmeyen MÜSTAFİ (çekilmiş) sayılır (20 gün gelmeyen ise memurluktan çıkarılır - m. 125/E-d!), 2) Bekleme süreleri: Usulüne uygun istifa -> 6 AY; Usulsüz istifa veya müstafi -> 1 YIL; Devir-teslim yapmadan ayrılan -> 3 YIL; OHAL/Savaşta izinsiz bırakan -> HİÇBİR SURETTE dönemez! 3) En fazla 2 defa istifa eden dönebilir (2 defadan fazla çekilen dönemez)!',
    baseExplanation: 'DMK m. 97’deki "6 ay - 1 yıl - 3 yıl - hiçbir surette" sıralaması ve kesintisiz 10 gün (müstafi) ile bir yılda toplam 20 gün (memurluktan çıkarma) farkı İdare Hukukunun en sık sorulan sayısal tablosudur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'usulüne uygun olarak çekilenler altı ay, usulüne uymadan (bir ay beklemeden veya kesintisiz 10 gün gelmeyerek müstafi sayılanlar) çekilenler bir yıl, devir-teslim yükümlülüğüne uymadan çekilenler üç yıl, olağanüstü hâl/seferberlik/savaşta yerine atanacak kişi gelip göreve başlamadıkça çekilenler ise hiçbir surette yeniden Devlet memurluğuna alınamazlar',
      wrongPhrase: 'usulüne uygun olarak çekilenler bir yıl, usulüne uymadan çekilenler üç yıl, devir-teslim yükümlülüğüne uymadan çekilenler beş yıl geçmedikçe yeniden Devlet memurluğuna alınamazlar',
      correctPhrase: 'usulüne uygun olarak çekilenler altı ay, usulüne uymadan (bir ay beklemeden veya kesintisiz 10 gün gelmeyerek müstafi sayılanlar) çekilenler bir yıl, devir-teslim yükümlülüğüne uymadan çekilenler üç yıl, olağanüstü hâl/seferberlik/savaşta yerine atanacak kişi gelip göreve başlamadıkça çekilenler ise hiçbir surette yeniden Devlet memurluğuna alınamazlar',
      explanation: '657 s. DMK m. 97 uyarınca yeniden memurluğa alınma bekleme süreleri: Usulüne uygun çekilenlerde 6 ay, usulsüz çekilen/müstafi sayılanlarda 1 yıl, devir-teslim yapmadan çekilenlerde 3 yıldır (OHAL/seferberlik/savaşta izinsiz bırakanlar ise hiçbir surette alınamaz)!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'mezuniyetsiz veya kurumlarınca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın, çekilme isteğinde bulunulmuş (müstafi) sayılır',
      wrongPhrase: 'mazeretsiz olarak görevin kesintisiz beş gün terk edilmesi hâlinde memur çekilmiş (müstafi) sayılır ve memurluktan üç defadan fazla çekilenler tekrar memurluğa dönemez',
      correctPhrase: 'mezuniyetsiz veya kurumlarınca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın, çekilme isteğinde bulunulmuş (müstafi) sayılır',
      explanation: '657 s. DMK m. 94/1 ve m. 92/1 uyarınca çekilmiş (müstafi) sayılma için görevin kesintisiz 10 GÜN terk edilmesi gerekir ve memurluktan iki defadan fazla (yani 3. kez) çekilenler tekrar Devlet memurluğuna atanamazlar!'
    }
  },
  {
    id: 'rule-idare-17',
    branch: 'İdare',
    subTopic: 'Devlet Memurları Disiplin Cezaları (Uyarma, Kınama, Aylıktan Kesme 1/30-1/8, Kademe İlerlemesinin Durdurulması 1-3 Yıl, Çıkarma)',
    articleRef: '657 S. DMK M. 125',
    trueStatement:
      'Devlet memurlarına verilecek disiplin cezaları şunlardır: Uyarma, Kınama, Aylıktan kesme (memurun brüt aylığından 1/30 ila 1/8 arasında kesinti yapılmasıdır), Kademe ilerlemesinin durdurulması (fiilin ağırlık derecesine göre memurun bulunduğu kademede ilerlemesinin 1 ila 3 yıl durdurulmasıdır) ve Devlet memurluğundan çıkarma (bir daha Devlet memurluğuna atanmamak üzere memurluktan çıkarmaktır); özürsüz olarak bir veya iki gün göreve gelmemek aylıktan kesme, özürsüz ve kesintisiz 3-9 gün göreve gelmemek kademe ilerlemesinin durdurulması, özürsüz olarak bir yılda toplam 20 gün göreve gelmemek veya siyasi partiye girmek ise Devlet memurluğundan çıkarma cezası gerektirir.',
    trueHighlight: ['Aylıktan kesme (memurun brüt aylığından 1/30 ila 1/8 arasında kesinti yapılmasıdır)', 'Kademe ilerlemesinin durdurulması (fiilin ağırlık derecesine göre memurun bulunduğu kademede ilerlemesinin 1 ila 3 yıl durdurulmasıdır)', 'özürsüz olarak bir veya iki gün göreve gelmemek aylıktan kesme, özürsüz ve kesintisiz 3-9 gün göreve gelmemek kademe ilerlemesinin durdurulması, özürsüz olarak bir yılda toplam 20 gün göreve gelmemek veya siyasi partiye girmek ise Devlet memurluğundan çıkarma cezası gerektirir'],
    trueCorrectPhrase: '657 s. DMK m. 125 disiplin cezaları ve devamsızlık cetveli: 1) Aylıktan kesme: Brüt aylığın 1/30 - 1/8 arası; Kademe ilerlemesinin durdurulması: 1 - 3 yıl arası, 2) Özürsüz devamsızlıkta: 1-2 gün -> Aylıktan kesme; Kesintisiz 3-9 gün -> Kademe ilerlemesinin durdurulması; Kesintisiz 10 gün -> Çekilmiş sayılma (m. 94); Bir yılda toplam 20 gün -> Devlet memurluğundan çıkarma!',
    baseExplanation: '657 s. DMK m. 125’te yer alan 5 disiplin cezası (not: "görevden uzaklaştırma" veya "yer değiştirme" DMK m. 125’teki genel disiplin cezalarından değildir!) ve devamsızlık günlerine göre verilen cezalar HMGS İdare Hukuku sorularının vazgeçilmezidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Aylıktan kesme (memurun brüt aylığından 1/30 ila 1/8 arasında kesinti yapılmasıdır), Kademe ilerlemesinin durdurulması (fiilin ağırlık derecesine göre memurun bulunduğu kademede ilerlemesinin 1 ila 3 yıl durdurulmasıdır)',
      wrongPhrase: 'Aylıktan kesme (memurun net aylığından 1/4 ila 1/2 arasında kesinti yapılmasıdır), Kademe ilerlemesinin durdurulması (memurun kademe ilerlemesinin 6 ay ila 5 yıl durdurulmasıdır) ve Görevden uzaklaştırma',
      correctPhrase: 'Aylıktan kesme (memurun brüt aylığından 1/30 ila 1/8 arasında kesinti yapılmasıdır), Kademe ilerlemesinin durdurulması (fiilin ağırlık derecesine göre memurun bulunduğu kademede ilerlemesinin 1 ila 3 yıl durdurulmasıdır)',
      explanation: '657 s. DMK m. 125 uyarınca aylıktan kesme brüt aylıktan 1/30 - 1/8 oranında yapılır, kademe ilerlemesinin durdurulması 1 - 3 yıl arasındadır; "görevden uzaklaştırma" ise bir disiplin cezası değil, ihtiyati bir idari tedbirdir (m. 137)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'özürsüz olarak bir veya iki gün göreve gelmemek aylıktan kesme, özürsüz ve kesintisiz 3-9 gün göreve gelmemek kademe ilerlemesinin durdurulması, özürsüz olarak bir yılda toplam 20 gün göreve gelmemek veya siyasi partiye girmek ise Devlet memurluğundan çıkarma cezası gerektirir',
      wrongPhrase: 'siyasi partiye üye olmak yalnızca kınama cezasını, özürsüz olarak bir yılda toplam yirmi gün göreve gelmemek ise yalnız aylıktan kesme cezasını gerektirir',
      correctPhrase: 'özürsüz olarak bir veya iki gün göreve gelmemek aylıktan kesme, özürsüz ve kesintisiz 3-9 gün göreve gelmemek kademe ilerlemesinin durdurulması, özürsüz olarak bir yılda toplam 20 gün göreve gelmemek veya siyasi partiye girmek ise Devlet memurluğundan çıkarma cezası gerektirir',
      explanation: '657 s. DMK m. 125/E-(c) ve (d) uyarınca siyasi partiye girmek ile özürsüz olarak bir yılda toplam 20 gün göreve gelmemek en ağır ceza olan "Devlet memurluğundan çıkarma" cezasını gerektirir!'
    }
  },
  {
    id: 'rule-idare-18',
    branch: 'İdare',
    subTopic: 'Disiplin Cezası Vermeye Yetkili Amir ve Kurullar ile Disiplin Zamanaşımı Süreleri (1 Ay - 6 Ay - 2 Yıl)',
    articleRef: '657 S. DMK M. 126-127',
    trueStatement:
      'Uyarma, kınama ve aylıktan kesme cezaları disiplin amirleri tarafından; kademe ilerlemesinin durdurulması cezası memurun bağlı olduğu kurumdaki disiplin kurulunun kararı alındıktan sonra atamaya yetkili amirler, il disiplin kurullarının kararlarına dayanan hâllerde valiler tarafından; Devlet memurluğundan çıkarma cezası ise amirlerin bu yoldaki isteği üzerine memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir; disiplin soruşturmasına, fiilin öğrenildiği tarihten itibaren uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde, memurluktan çıkarma cezasında ise altı ay içinde başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; disiplin cezasını gerektiren fiil ve hâllerin işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zamanaşımına uğrar.',
    trueHighlight: ['Uyarma, kınama ve aylıktan kesme cezaları disiplin amirleri tarafından', 'Devlet memurluğundan çıkarma cezası ise amirlerin bu yoldaki isteği üzerine memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir', 'uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde, memurluktan çıkarma cezasında ise altı ay içinde başlanmadığı takdirde', 'işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zamanaşımına uğrar'],
    trueCorrectPhrase: '657 s. DMK m. 126-127 Yetki ve Zamanaşımı Şifresi: 1) Uyarma, Kınama, Aylıktan Kesme -> Disiplin Amiri; Kademe İlerlemesinin Durdurulması -> Disiplin Kurulu kararı + Atamaya Yetkili Amir (veya Vali); Memurluktan Çıkarma -> YÜKSEK DİSİPLİN KURULU! 2) Soruşturmaya başlama zamanaşımı: İlk 4 cezada öğrenmeden itibaren 1 AY, Çıkarma cezasında öğrenmeden itibaren 6 AY! 3) Ceza verme nihai zamanaşımı: Fiilin işlendiği tarihten itibaren 2 YIL!',
    baseExplanation: '657 s. DMK m. 127 disiplin zamanaşımı (1 ay / 6 ay soruşturmaya başlama zamanaşımı ve 2 yıl ceza verme zamanaşımı) ile Devlet memurluğundan çıkarma cezasını Yüksek Disiplin Kurulunun vermesi HMGS’nin banko idare hukuku sorularındandır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'disiplin soruşturmasına, fiilin öğrenildiği tarihten itibaren uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde, memurluktan çıkarma cezasında ise altı ay içinde başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; disiplin cezasını gerektiren fiil ve hâllerin işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zamanaşımına uğrar',
      wrongPhrase: 'tüm disiplin cezalarında soruşturmaya fiilin öğrenildiği tarihten itibaren altı ay içinde başlanması yeterli olup fiilin işlendiği tarihten itibaren beş yıl içinde disiplin cezası verilebilir',
      correctPhrase: 'disiplin soruşturmasına, fiilin öğrenildiği tarihten itibaren uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde, memurluktan çıkarma cezasında ise altı ay içinde başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; disiplin cezasını gerektiren fiil ve hâllerin işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zamanaşımına uğrar',
      explanation: '657 s. DMK m. 127 uyarınca soruşturmaya başlama zamanaşımı ilk 4 cezada öğrenmeden itibaren 1 ay, memurluktan çıkarmada 6 aydır; nihai ceza verme zamanaşımı ise fiilin işlendiği tarihten itibaren 5 yıl değil, 2 YILDIR!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Devlet memurluğundan çıkarma cezası ise amirlerin bu yoldaki isteği üzerine memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir',
      wrongPhrase: 'Devlet memurluğundan çıkarma cezası da doğrudan doğruya memurun birinci sicil ve disiplin amiri tarafından tek başına verilir; yüksek disiplin kurulu ise amirin önerdiği cezadan başka bir disiplin cezası da tayin edebilir',
      correctPhrase: 'Devlet memurluğundan çıkarma cezası ise amirlerin bu yoldaki isteği üzerine memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir',
      explanation: '657 s. DMK m. 126/2 ve m. 126/3 uyarınca Devlet memurluğundan çıkarma cezası disiplin amirince değil Yüksek Disiplin Kurulu kararıyla verilir; ayrıca disiplin kurulu ve yüksek disiplin kurulunun ayrı bir ceza tayinine yetkisi yoktur, cezayı kabul veya reddeder (reddederse atamaya yetkili amir 15 gün içinde başka bir disiplin cezası vermekte serbesttir)!'
    }
  },
  {
    id: 'rule-idare-19',
    branch: 'İdare',
    subTopic: 'Disiplin Soruşturmasında Savunma Hakkı (En Az 7 Gün) ve Disiplin Cezalarına İtiraz Süresi (7 Gün)',
    articleRef: '657 S. DMK M. 130, 135 & 136',
    trueStatement:
      'Devlet memuru hakkında savunması alınmadan disiplin cezası verilemez ve soruşturmayı yapanın veya yetkili disiplin kurulunun yedi günden az olmamak üzere verdiği süre içinde veya belirtilen bir tarihte savunmasını yapmayan memur, savunma hakkından vazgeçmiş sayılır; disiplin amirleri tarafından verilen uyarma, kınama ve aylıktan kesme cezalarına karşı disiplin kuruluna, kademe ilerlemesinin durdurulması cezasına karşı yüksek disiplin kuruluna kararın ilgiliye tebliği tarihten itibaren yedi gün içinde itiraz edilebilir; tüm disiplin cezalarına karşı idari yargı yolu açıktır.',
    trueHighlight: ['savunması alınmadan disiplin cezası verilemez ve soruşturmayı yapanın veya yetkili disiplin kurulunun yedi günden az olmamak üzere verdiği süre içinde', 'kararın ilgiliye tebliği tarihten itibaren yedi gün içinde itiraz edilebilir; tüm disiplin cezalarına karşı idari yargı yolu açıktır'],
    trueCorrectPhrase: '657 s. DMK m. 130 ve 135-136’da çifte "7 GÜN" kuralı: 1) Memura savunma için verilecek süre 7 GÜNDEN AZ OLAMAZ (Anayasa m. 129/2 güvencesi!), 2) Disiplin cezalarına idari itiraz süresi tebliğden itibaren 7 GÜNDÜR (Uyarma/Kınama/Aylıktan kesme -> Disiplin Kuruluna; Kademe ilerlemesinin durdurulması -> Yüksek Disiplin Kuruluna; Memurluktan çıkarmaya idari itiraz yolu yoktur, doğrudan idari yargıda iptal davası açılır!), 3) Uyarma ve kınama dahil TÜM disiplin cezalarına karşı yargı yolu açıktır!',
    baseExplanation: '2010 Anayasa değişikliği sonrasında uyarma ve kınama cezaları dahil tüm disiplin cezalarına karşı idari yargı yolu açılmıştır. Savunma süresi (en az 7 gün) ve itiraz süresi (7 gün) İdare Hukukunun altın sayılarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi günden az olmamak üzere verdiği süre içinde veya belirtilen bir tarihte savunmasını yapmayan memur, savunma hakkından vazgeçmiş sayılır; disiplin amirleri tarafından verilen uyarma, kınama ve aylıktan kesme cezalarına karşı disiplin kuruluna, kademe ilerlemesinin durdurulması cezasına karşı yüksek disiplin kuruluna kararın ilgiliye tebliği tarihten itibaren yedi gün içinde itiraz edilebilir',
      wrongPhrase: 'üç günden az olmamak üzere verdiği süre içinde savunmasını yapmayan memur savunma hakkından vazgeçmiş sayılır ve disiplin cezalarına karşı tebliğden itibaren onbeş gün içinde yalnızca bir üst disiplin amirine itiraz edilebilir',
      correctPhrase: 'yedi günden az olmamak üzere verdiği süre içinde veya belirtilen bir tarihte savunmasını yapmayan memur, savunma hakkından vazgeçmiş sayılır; disiplin amirleri tarafından verilen uyarma, kınama ve aylıktan kesme cezalarına karşı disiplin kuruluna, kademe ilerlemesinin durdurulması cezasına karşı yüksek disiplin kuruluna kararın ilgiliye tebliği tarihten itibaren yedi gün içinde itiraz edilebilir',
      explanation: '657 s. DMK m. 130 ve m. 135-136 uyarınca savunma süresi 7 günden az olamaz ve disiplin cezalarına itiraz süresi 15 gün değil, tebliğden itibaren 7 gündür (itiraz mercii ise üst amir değil, disiplin kurulu / yüksek disiplin kuruludur)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tüm disiplin cezalarına karşı idari yargı yolu açıktır',
      wrongPhrase: 'uyarma ve kınama cezalarına karşı idari itiraz yolu açık olmakla birlikte idari yargıda iptal davası açılması Anayasa gereği yasaktır',
      correctPhrase: 'tüm disiplin cezalarına karşı idari yargı yolu açıktır',
      explanation: 'Anayasa m. 129/3 ve 657 s. DMK m. 135/4 açık hükmü uyarınca uyarma ve kınama cezaları dahil disiplin cezalarının tamamına karşı idari yargı yolu AÇIKTIR!'
    }
  },
  {
    id: 'rule-idare-20',
    branch: 'İdare',
    subTopic: 'Görevden Uzaklaştırma Tedbiri: Yetkililer, 10 Gün İçinde Soruşturmaya Başlama ve 3 Aylık Azami Süre',
    articleRef: '657 S. DMK M. 137-145',
    trueStatement:
      'Görevden uzaklaştırma, Devlet kamu hizmetlerinin gerektirdiği hâllerde, görevi başında kalmasında sakınca görülecek Devlet memurları hakkında alınan ihtiyati bir tedbirdir; görevden uzaklaştırmaya atamaya yetkili amirler, bakanlık ve genel müdürlük müfettişleri, illerde valiler ve ilçelerde kaymakamlar (ilçe idare şube başkanları hakkında valinin muvafakati şarttır) yetkilidir; görevden uzaklaştıran amir memur hakkında derhâl soruşturmaya başlamakla yükümlü olup on gün içinde soruşturmaya başlanmazsa memur görevine başlatılır ve amir hakkında hukuki/mali/cezai sorumluluk doğar; görevden uzaklaştırma bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi (2/3) ödenir.',
    trueHighlight: ['atamaya yetkili amirler, bakanlık ve genel müdürlük müfettişleri, illerde valiler ve ilçelerde kaymakamlar', 'on gün içinde soruşturmaya başlanmazsa memur görevine başlatılır', 'disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi (2/3) ödenir'],
    trueCorrectPhrase: '657 s. DMK m. 137-145 Görevden Uzaklaştırma kuralları: 1) Bir disiplin cezası değil, İHTİYATİ TEDBİRDİR, 2) Yetkililer: Atamaya yetkili amir, bakanlık/genel müdürlük müfettişi, vali, kaymakam, 3) Uzaklaştırmayı izleyen 10 GÜN içinde soruşturmaya başlanması şarttır, 4) Disiplin soruşturması sebebiyle en çok 3 AY sürer (ceza kovuşturması sebebiyle ise her 2 ayda bir incelenir), 5) Bu sürede memura aylığının 2/3’ü ödenir!',
    baseExplanation: 'Görevden uzaklaştırmada "10 gün içinde soruşturmaya başlama", "disiplin yönünden en çok 3 ay sürme", "ceza kovuşturması yönünden 2 ayda bir gözden geçirilme" ve "aylığın 2/3’ünün ödenmesi" HMGS’nin klasik sayısal sorularındandır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on gün içinde soruşturmaya başlanmazsa memur görevine başlatılır ve amir hakkında hukuki/mali/cezai sorumluluk doğar; görevden uzaklaştırma bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi (2/3) ödenir',
      wrongPhrase: 'otuz gün içinde soruşturmaya başlanması yeterli olup disiplin kovuşturması sebebiyle görevden uzaklaştırma en çok bir yıl devam edebilir ve bu sürede memura hiçbir aylık ödenmez',
      correctPhrase: 'on gün içinde soruşturmaya başlanmazsa memur görevine başlatılır ve amir hakkında hukuki/mali/cezai sorumluluk doğar; görevden uzaklaştırma bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi (2/3) ödenir',
      explanation: '657 s. DMK m. 139, 141 ve 145 uyarınca görevden uzaklaştırmayı izleyen 10 gün içinde soruşturmaya başlanması zorunludur, disiplin soruşturması nedeniyle uzaklaştırma en çok 3 ay devam edebilir ve bu sürede memura aylığının 2/3’ü ödenir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'görevden uzaklaştırmaya atamaya yetkili amirler, bakanlık ve genel müdürlük müfettişleri, illerde valiler ve ilçelerde kaymakamlar (ilçe idare şube başkanları hakkında valinin muvafakati şarttır) yetkilidir',
      wrongPhrase: 'görevden uzaklaştırma tedbiri yalnızca memurun bağlı olduğu kurumun yüksek disiplin kurulu veya idare mahkemesi tarafından alınabilir, müfettişlerin ve kaymakamların görevden uzaklaştırma yetkisi yoktur',
      correctPhrase: 'görevden uzaklaştırmaya atamaya yetkili amirler, bakanlık ve genel müdürlük müfettişleri, illerde valiler ve ilçelerde kaymakamlar (ilçe idare şube başkanları hakkında valinin muvafakati şarttır) yetkilidir',
      explanation: '657 s. DMK m. 138 uyarınca görevden uzaklaştırmaya atamaya yetkili amirler, bakanlık ve genel müdürlük müfettişleri, illerde valiler ve ilçelerde kaymakamlar yetkilidir!'
    }
  },
  {
    id: 'rule-idare-21',
    branch: 'İdare',
    subTopic: 'Memurlar ve Diğer Kamu Görevlilerinin Yargılanması (4483 s.K.): Soruşturma İzni Süresi (30+15 Gün) ve İtiraz (10 Gün)',
    articleRef: '4483 S.K. M. 3, 7 & 9',
    trueStatement:
      'Memurlar ve diğer kamu görevlilerinin görevleri sebebiyle işledikleri suçlardan dolayı yargılanabilmeleri için yetkili merciden soruşturma izni alınması şarttır; yetkili merci ön inceleme dahil soruşturma izni konusundaki kararını suçun öğrenilmesinden itibaren otuz gün içinde verir (bu süre zorunlu hâllerde onbeş günü geçmemek üzere bir defa uzatılabilir); yetkili merciin soruşturma izni verilmesine veya verilmemesine ilişkin kararına karşı tebliğden itibaren on gün içinde bölge idare mahkemesine (Cumhurbaşkanı yardımcıları, bakanlar, valiler, yüksek yargı/merkez teşkilatı üst yöneticileri gibi 3. maddenin bazı bentlerinde sayılanlar için Danıştay İkinci Dairesine) itiraz edilebilir ve itiraz üzerine verilen kararlar üç ay içinde sonuçlandırılarak kesinleşir.',
    trueHighlight: ['yetkili merci ön inceleme dahil soruşturma izni konusundaki kararını suçun öğrenilmesinden itibaren otuz gün içinde verir (bu süre zorunlu hâllerde onbeş günü geçmemek üzere bir defa uzatılabilir)', 'tebliğden itibaren on gün içinde bölge idare mahkemesine (Cumhurbaşkanı yardımcıları, bakanlar, valiler, yüksek yargı/merkez teşkilatı üst yöneticileri gibi 3. maddenin bazı bentlerinde sayılanlar için Danıştay İkinci Dairesine) itiraz edilebilir'],
    trueCorrectPhrase: '4483 s.K. m. 7 ve m. 9 süreleri: 1) Soruşturma izni karar süresi: 30 GÜN (+ zorunlu halde 1 defa en çok 15 GÜN uzatma = toplam 45 gün), 2) Soruşturma izni verilmesi/verilmemesi kararına itiraz süresi: Tebliğden itibaren 10 GÜN, 3) İtiraz mercii: Bölge İdare Mahkemesi veya üst düzey görevlilerde Danıştay ilgili dairesi (itiraz 3 ay içinde kesin olarak karara bağlanır)!',
    baseExplanation: '4483 sayılı Kanun hem İdare Hukuku hem de Ceza Muhakemesi Hukuku kesişiminde yer alır: 30+15 gün karar süresi, 10 gün itiraz süresi ve itiraz merciinin adli yargı değil idari yargı (BİM / Danıştay) olması çok önemli bir sınav bilgisidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yetkili merci ön inceleme dahil soruşturma izni konusundaki kararını suçun öğrenilmesinden itibaren otuz gün içinde verir (bu süre zorunlu hâllerde onbeş günü geçmemek üzere bir defa uzatılabilir); yetkili merciin soruşturma izni verilmesine veya verilmemesine ilişkin kararına karşı tebliğden itibaren on gün içinde bölge idare mahkemesine',
      wrongPhrase: 'yetkili merci soruşturma izni kararını altmış gün içinde verir (altmış gün daha uzatılabilir) ve bu karara karşı tebliğden itibaren otuz gün içinde ağır ceza mahkemesine',
      correctPhrase: 'yetkili merci ön inceleme dahil soruşturma izni konusundaki kararını suçun öğrenilmesinden itibaren otuz gün içinde verir (bu süre zorunlu hâllerde onbeş günü geçmemek üzere bir defa uzatılabilir); yetkili merciin soruşturma izni verilmesine veya verilmemesine ilişkin kararına karşı tebliğden itibaren on gün içinde bölge idare mahkemesine',
      explanation: '4483 s.K. m. 7 ve m. 9 uyarınca soruşturma izni karar süresi 30 gün (+15 gün uzatma) olup karara itiraz süresi 10 gündür ve itiraz ağır ceza mahkemesine değil, bölge idare mahkemesine (veya Danıştaya) yapılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Memurlar ve diğer kamu görevlilerinin görevleri sebebiyle işledikleri suçlardan dolayı yargılanabilmeleri için yetkili merciden soruşturma izni alınması şarttır',
      wrongPhrase: 'Ağır cezayı gerektiren suçüstü hâli ile işkence, irtikap, rüşvet ve zimmet suçlarında dahi memurlar hakkında 4483 sayılı Kanun uyarınca mülki idare amirinden ön izin alınmadıkça Cumhuriyet savcısı doğrudan soruşturma yapamaz',
      correctPhrase: 'Memurlar ve diğer kamu görevlilerinin görevleri sebebiyle işledikleri suçlardan dolayı yargılanabilmeleri için yetkili merciden soruşturma izni alınması şarttır',
      explanation: '4483 s.K. m. 2 ve 3628 s.K. m. 17 uyarınca ağır cezayı gerektiren suçüstü hali, işkence/eziyet (TCK m. 94-95) ve 3628 sayılı Kanun kapsamındaki zimmet, irtikap, rüşvet gibi yolsuzluk suçlarında (üst düzey bazı istisnalar hariç) soruşturma izni aranmaksızın Cumhuriyet savcısı doğrudan soruşturma yapar!'
    }
  },
  {
    id: 'rule-idare-22',
    branch: 'İdare',
    subTopic: 'Belediye Başkanının Görevden Uzaklaştırılması (İçişleri Bakanı) ve Başkanlığın/Meclisin Sona Ermesi (Danıştay)',
    articleRef: '5393 S. BELEDİYE K. M. 30, 44 & 47',
    trueStatement:
      'Görevleriyle ilgili bir suç nedeniyle haklarında soruşturma veya kovuşturma açılan belediye organları veya bu organların üyeleri, kesin hükme kadar İçişleri Bakanı tarafından geçici bir tedbir olarak görevden uzaklaştırılabilir ve görevden uzaklaştırma kararı iki ayda bir gözden geçirilir; buna karşılık belediye başkanlığının (mazeretsiz ve kesintisiz yirmi günden fazla görevi terk etmesi, seçilme yeterliliğini kaybetmesi vb. nedenlerle) sona ermesine veya belediye meclisinin (görevini ihmal etmesi ya da siyasi konularda karar alması nedeniyle) feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir.',
    trueHighlight: ['kesin hükme kadar İçişleri Bakanı tarafından geçici bir tedbir olarak görevden uzaklaştırılabilir ve görevden uzaklaştırma kararı iki ayda bir gözden geçirilir', 'belediye başkanlığının (mazeretsiz ve kesintisiz yirmi günden fazla görevi terk etmesi, seçilme yeterliliğini kaybetmesi vb. nedenlerle) sona ermesine veya belediye meclisinin (görevini ihmal etmesi ya da siyasi konularda karar alması nedeniyle) feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir'],
    trueCorrectPhrase: 'Anayasa m. 127/4 ve 5393 s. Belediye K. m. 30, 44, 47 altın kuralı: Seçilmiş yerel yönetim organlarının (belediye başkanı / meclisi) organlık sıfatını KALICI OLARAK kaybetmesine (başkanlıktan düşme / meclisin feshi) yalnız YARGI (DANIŞTAY) karar verebilir; ancak görevleriyle ilgili bir suç nedeniyle GEÇİCİ TEDBİR olarak görevden uzaklaştırmaya İÇİŞLERİ BAKANI yetkilidir (ve karar 2 ayda bir gözden geçirilir)!',
    baseExplanation: 'Anayasa m. 127/4 ve Belediye Kanunu m. 30-44-47 çerçevesinde "Kalıcı düşürme/fesih = Danıştay (Yargı)", "Geçici görevden uzaklaştırma = İçişleri Bakanı (İdari vesayet)" ayrımı HMGS’de hem Anayasa hem İdare Hukukunda sorulur.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'buna karşılık belediye başkanlığının (mazeretsiz ve kesintisiz yirmi günden fazla görevi terk etmesi, seçilme yeterliliğini kaybetmesi vb. nedenlerle) sona ermesine veya belediye meclisinin (görevini ihmal etmesi ya da siyasi konularda karar alması nedeniyle) feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir',
      wrongPhrase: 'ayrıca belediye başkanının başkanlık sıfatının kalıcı olarak sona erdirilmesine ve belediye meclisinin feshine de yargı kararı aranmaksızın doğrudan doğruya İçişleri Bakanı veya vali tarafından karar verilir',
      correctPhrase: 'buna karşılık belediye başkanlığının (mazeretsiz ve kesintisiz yirmi günden fazla görevi terk etmesi, seçilme yeterliliğini kaybetmesi vb. nedenlerle) sona ermesine veya belediye meclisinin (görevini ihmal etmesi ya da siyasi konularda karar alması nedeniyle) feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir',
      explanation: 'Anayasa m. 127/4 ve 5393 s.K. m. 30, 44 uyarınca seçilmiş yerel yönetim organlarının organlık sıfatını kazanmalarına ve kaybetmelerine ilişkin denetim ancak yargı yoluyla (Danıştay kararıyla) olur; İçişleri Bakanı yalnız geçici tedbir olarak görevden uzaklaştırabilir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'mazeretsiz ve kesintisiz yirmi günden fazla görevi terk etmesi',
      wrongPhrase: 'mazeretsiz ve kesintisiz beş günden fazla görevi terk etmesi',
      correctPhrase: 'mazeretsiz ve kesintisiz yirmi günden fazla görevi terk etmesi',
      explanation: '5393 s. Belediye K. m. 44/1-a uyarınca belediye başkanının mazeretsiz ve kesintisiz olarak 20 günden fazla görevini terk etmesi (Devlet memurundaki 10 günlük müstafi süresinden farklıdır!) başkanlıktan düşme sebebidir!'
    }
  },
  {
    id: 'rule-idare-23',
    branch: 'İdare',
    subTopic: 'Kamulaştırma Bedelinin Tespiti ve Tescil Davası (Asliye Hukuk) ile Malikin Geri Alma Hakkı (5 Yıl + 1 Yıl)',
    articleRef: '2942 S. KAMULAŞTIRMA K. M. 10, 14 & 23',
    trueStatement:
      'Kamulaştırmanın satın alma usulü ile yapılamaması hâlinde idare, taşınmazın bulunduğu yer asliye hukuk mahkemesine başvurarak kamulaştırma bedelinin tespiti ve taşınmazın idare adına tesciline karar verilmesini ister; mahkemenin tescil hükmü kesin olup tarafların tespit edilen bedele ilişkin istinaf/temyiz hakları saklıdır; kamulaştırma işlemine karşı taşınmaz malikinin idari yargıda iptal davası açma süresi ise mahkemece yapılan tebligat gününden itibaren otuz gündür; kamulaştırma bedelinin kesinleşmesi tarihinden itibaren beş yıl içinde kamulaştırmayı yapan idarece kamulaştırma ve devir amacına uygun hiçbir işlem veya tesisat yapılmaz veya kamu yararına yönelik bir ihtiyaca tahsis edilmeyerek taşınmaz olduğu gibi bırakılırsa, mal sahibi veya mirasçıları beş yıllık sürenin dolmasından itibaren bir yıl içinde (ve her hâlde yirmi yıl içinde) bedeli faiziyle ödeyerek taşınmazını geri alabilir.',
    trueHighlight: ['taşınmazın bulunduğu yer asliye hukuk mahkemesine başvurarak kamulaştırma bedelinin tespiti ve taşınmazın idare adına tesciline karar verilmesini ister; mahkemenin tescil hükmü kesin olup tarafların tespit edilen bedele ilişkin istinaf/temyiz hakları saklıdır', 'idari yargıda iptal davası açma süresi ise mahkemece yapılan tebligat gününden itibaren otuz gündür', 'beş yıl içinde kamulaştırmayı yapan idarece kamulaştırma ve devir amacına uygun hiçbir işlem veya tesisat yapılmaz', 'beş yıllık sürenin dolmasından itibaren bir yıl içinde'],
    trueCorrectPhrase: '2942 s. Kamulaştırma Kanunu altın kuralları: 1) Kamulaştırma İŞLEMİNİN İPTALİ davası -> İDARE MAHKEMESİNDE (tebliğden itibaren 30 GÜN içinde!) açılır, 2) Kamulaştırma BEDELİNİN TESPİTİ VE TESCİL davası -> İdare tarafından ASLİYE HUKUK MAHKEMESİNDE açılır (Tescil kararı KESİNDİR, bedel kararına karşı kanun yolu açıktır!), 3) Geri alma hakkı (m. 23): Bedelin kesinleşmesinden itibaren 5 YIL içinde hiçbir işlem yapılmazsa, 5 yılın bitiminden itibaren 1 YIL içinde kullanılabilir!',
    baseExplanation: 'Kamulaştırmada adli yargı (bedel tespiti ve tescil - Asliye Hukuk) ile idari yargı (işlemin iptali - İdare Mahkemesi, 30 gün) ayrımı ve "5 yıl + 1 yıl" geri alma süresi İdare Hukukunun en klasik sınav sorusudur.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'taşınmazın bulunduğu yer asliye hukuk mahkemesine başvurarak kamulaştırma bedelinin tespiti ve taşınmazın idare adına tesciline karar verilmesini ister; mahkemenin tescil hükmü kesin olup tarafların tespit edilen bedele ilişkin istinaf/temyiz hakları saklıdır; kamulaştırma işlemine karşı taşınmaz malikinin idari yargıda iptal davası açma süresi ise mahkemece yapılan tebligat gününden itibaren otuz gündür',
      wrongPhrase: 'idare mahkemesine başvurarak hem kamulaştırma bedelinin tespitini hem de taşınmazın tescilini ister; kamulaştırma işlemine karşı malikin iptal davası açma süresi ise altmış gündür ve asliye hukuk mahkemesinin tescil kararına karşı temyiz yolu açıktır',
      correctPhrase: 'taşınmazın bulunduğu yer asliye hukuk mahkemesine başvurarak kamulaştırma bedelinin tespiti ve taşınmazın idare adına tesciline karar verilmesini ister; mahkemenin tescil hükmü kesin olup tarafların tespit edilen bedele ilişkin istinaf/temyiz hakları saklıdır; kamulaştırma işlemine karşı taşınmaz malikinin idari yargıda iptal davası açma süresi ise mahkemece yapılan tebligat gününden itibaren otuz gündür',
      explanation: '2942 s.K. m. 10 ve m. 14 uyarınca bedel tespiti ve tescil davası idare mahkemesinde değil ASLİYE HUKUK mahkemesinde açılır (tescil hükmü kesindir, yalnız bedel yönünden kanun yolu açıktır); kamulaştırma işleminin idari yargıda iptali davası açma süresi ise 60 gün değil 30 gündür!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl içinde kamulaştırmayı yapan idarece kamulaştırma ve devir amacına uygun hiçbir işlem veya tesisat yapılmaz veya kamu yararına yönelik bir ihtiyaca tahsis edilmeyerek taşınmaz olduğu gibi bırakılırsa, mal sahibi veya mirasçıları beş yıllık sürenin dolmasından itibaren bir yıl içinde',
      wrongPhrase: 'iki yıl içinde kamulaştırmayı yapan idarece hiçbir işlem yapılmazsa mal sahibi bu sürenin dolmasından itibaren üç ay içinde',
      correctPhrase: 'beş yıl içinde kamulaştırmayı yapan idarece kamulaştırma ve devir amacına uygun hiçbir işlem veya tesisat yapılmaz veya kamu yararına yönelik bir ihtiyaca tahsis edilmeyerek taşınmaz olduğu gibi bırakılırsa, mal sahibi veya mirasçıları beş yıllık sürenin dolmasından itibaren bir yıl içinde',
      explanation: '2942 s. Kamulaştırma K. m. 23 uyarınca malikin geri alma hakkı için idarenin hareketsiz kalma süresi 5 yıl, bu sürenin dolmasından itibaren geri alma hakkını kullanma süresi ise 1 yıldır!'
    }
  },
  {
    id: 'rule-idare-24',
    branch: 'İdare',
    subTopic: 'Kamu İhalelerinde Zorunlu İdari Başvuru Yolları: İdareye Şikâyet ve Kamu İhale Kurumuna İtirazen Şikâyet',
    articleRef: '4734 S. KİK M. 54-56',
    trueStatement:
      '4734 sayılı Kamu İhale Kanunu kapsamındaki ihale sürecindeki hukuka aykırı işlem veya eylemler nedeniyle bir hak kaybına veya zarara uğradığını iddia eden aday, istekli veya istekli olabilecekler tarafından dava açılmadan önce sırasıyla ihaleyi yapan idareye şikâyet ve Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusunda bulunulması zorunludur (zorunlu idari başvuru yolu); şikâyet başvurusu, ihale sürecindeki işlem veya eylemlerin farkına varıldığı veya farkına varılmış olması gereken tarihi izleyen günden itibaren (ivedi hallerde beş gün, genel kural olarak) on gün içinde ve sözleşmenin imzalanmasından önce idareye yapılır; idare on gün içinde karar verir ve bu karara karşı veya süresinde karar verilmemesi hâlinde on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusunda bulunulabilir.',
    trueHighlight: ['dava açılmadan önce sırasıyla ihaleyi yapan idareye şikâyet ve Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusunda bulunulması zorunludur', 'on gün içinde ve sözleşmenin imzalanmasından önce idareye yapılır; idare on gün içinde karar verir ve bu karara karşı veya süresinde karar verilmemesi hâlinde on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusunda bulunulabilir'],
    trueCorrectPhrase: '4734 s. KİK m. 54-56 uyarınca kamu ihalelerinde dava açmadan önce sırasıyla 1) İhaleyi yapan İDAREYE ŞİKÂYET (kural olarak 10 gün, pazarlık/doğrudan temin bazılarında 5 gün; idare 10 gün içinde karar verir) ve 2) KAMU İHALE KURUMUNA İTİRAZEN ŞİKÂYET (10 gün içinde) başvurusu yapılması ZORUNLUDUR (idari merci tecavüzü kuralı)! KİK kararına karşı ise İYUK m. 20/A uyarınca 30 gün içinde ivedi yargılama usulüyle dava açılır!',
    baseExplanation: '4734 s. KİK’teki iki kademeli zorunlu idari başvuru (1-İdareye şikâyet, 2-KİK’e itirazen şikâyet) tüketilmeden idare mahkemesinde dava açılamaz; açılırsa merci tecavüzü kararı verilir. Sözleşme imzalandıktan sonra ise ihale öncesi işlemlere ilişkin yargısal uyuşmazlıklar hariç özel hukuk (adli yargı) hükümleri devreye girer.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'dava açılmadan önce sırasıyla ihaleyi yapan idareye şikâyet ve Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusunda bulunulması zorunludur (zorunlu idari başvuru yolu)',
      wrongPhrase: 'idareye şikâyet ve Kamu İhale Kurumuna itirazen şikâyet yolları tamamen ihtiyari olup istekliler bu yollara hiç başvurmadan doğrudan idare mahkemesinde iptal davası açabilirler',
      correctPhrase: 'dava açılmadan önce sırasıyla ihaleyi yapan idareye şikâyet ve Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusunda bulunulması zorunludur (zorunlu idari başvuru yolu)',
      explanation: '4734 s. KİK m. 54/2 açık hükmü uyarınca şikâyet ve itirazen şikâyet başvuruları dava açılmadan önce tüketilmesi ZORUNLU idari başvuru yollarıdır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on gün içinde ve sözleşmenin imzalanmasından önce idareye yapılır; idare on gün içinde karar verir ve bu karara karşı veya süresinde karar verilmemesi hâlinde on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusunda bulunulabilir',
      wrongPhrase: 'ihale sözleşmesi imzalandıktan sonra altmış gün içinde idareye şikâyet yapılır ve idarenin altmış günlük zımni ret süresinin ardından Kamu İhale Kurumuna başvurulur',
      correctPhrase: 'on gün içinde ve sözleşmenin imzalanmasından önce idareye yapılır; idare on gün içinde karar verir ve bu karara karşı veya süresinde karar verilmemesi hâlinde on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusunda bulunulabilir',
      explanation: '4734 s. KİK m. 55 uyarınca şikâyet başvurusu sözleşmenin imzalanmasından ÖNCE ve kural olarak 10 gün (bazı acil ihalelerde 5 gün) içinde yapılır; idarenin karar süresi 10 gün ve KİK’e itirazen şikâyet süresi de 10 gündür!'
    }
  },

  // =========================================================================
  // 3. ANAYASA HUKUKU VE ANAYASA YARGISI KURALLARI (rule-anayasa-14 .. rule-anayasa-22)
  // =========================================================================
  {
    id: 'rule-anayasa-14',
    branch: 'Anayasa',
    subTopic: 'Milletvekili Seçilme Yeterliliği (18 Yaş) ve TBMM Ara Seçim Kuralları (30 Ay, %5 Boşalma, Son 1 Yıl)',
    articleRef: 'ANAYASA M. 76 & M. 78',
    trueStatement:
      'Onsekiz yaşını dolduran her Türk milletvekili seçilebilir; en az ilkokul mezunu olmayanlar, kısıtlılar, askerlikle ilişiği olanlar, kamu hizmetinden yasaklılar, taksirli suçlar hariç toplam bir yıl veya daha fazla hapis ile ağır hapis cezasına hüküm giymiş olanlar ve affa uğramış olsalar bile zimmet, irtikap, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, inancı kötüye kullanma, dolanlı iflas gibi yüz kızartıcı suçlar ile terör eylemlerinden mahkûm olanlar milletvekili seçilemezler; TBMM üyeliklerinde boşalma olması hâlinde ara seçime gidilir; ara seçim her seçim döneminde bir defa yapılır ve genel seçimden otuz ay geçmedikçe ara seçime gidilemez; ancak boşalan üyeliklerin sayısı üye tam sayısının yüzde beşini (30 milletvekili) bulduğu hâllerde otuz ay şartı aranmaksızın üç ay içinde ara seçime gidilir; genel seçimlere bir yıl kala ise ara seçimi yapılamaz (ancak bir ilin veya seçim çevresinin TBMM’de hiç üyesi kalmaması hâlinde boşalmayı takip eden doksan günden sonraki ilk Pazar günü ara seçim yapılır).',
    trueHighlight: ['Onsekiz yaşını dolduran her Türk milletvekili seçilebilir; en az ilkokul mezunu olmayanlar', 'taksirli suçlar hariç toplam bir yıl veya daha fazla hapis', 'ara seçim her seçim döneminde bir defa yapılır ve genel seçimden otuz ay geçmedikçe ara seçime gidilemez; ancak boşalan üyeliklerin sayısı üye tam sayısının yüzde beşini (30 milletvekili) bulduğu hâllerde otuz ay şartı aranmaksızın üç ay içinde ara seçime gidilir; genel seçimlere bir yıl kala ise ara seçimi yapılamaz'],
    trueCorrectPhrase: 'Anayasa m. 76 ve m. 78 altın kuralları: 1) Milletvekili seçilme yaşı 18, öğrenim şartı "en az ilkokul mezunu", 2) "Askerlik hizmetini yapmış olmak" değil, "askerlikle İLİŞİĞİ OLMAMAK" (2017 değişikliği!), 3) Ara seçim: Her dönemde 1 defa, genel seçimden 30 AY geçmedikçe yapılamaz (%5 = 30 üyelik boşalırsa 30 ay beklenmez, 3 ay içinde yapılır), genel seçimlere 1 YIL kala ara seçim yapılamaz (ancak bir ilin/seçim çevresinin hiç üyesi kalmazsa son 1 yıl içinde bile boşalmayı izleyen 90 günden sonraki ilk Pazar günü seçim yapılır - m. 78/son)!',
    baseExplanation: 'Anayasa m. 78’in son fıkrası (bir ilin/seçim çevresinin hiç milletvekili kalmazsa son 1 yıl yasağının dahi aşılarak 90 günden sonraki ilk Pazar ara seçim yapılması) ve m. 76’daki "askerlikle ilişiği olmamak" ibaresi ÖSYM’nin en sevdiği Anayasa tuzaklarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ara seçim her seçim döneminde bir defa yapılır ve genel seçimden otuz ay geçmedikçe ara seçime gidilemez; ancak boşalan üyeliklerin sayısı üye tam sayısının yüzde beşini (30 milletvekili) bulduğu hâllerde otuz ay şartı aranmaksızın üç ay içinde ara seçime gidilir; genel seçimlere bir yıl kala ise ara seçimi yapılamaz',
      wrongPhrase: 'ara seçim genel seçimden yirmidört ay geçmedikçe yapılamaz; boşalan üyeliklerin sayısı üye tam sayısının yüzde onunu (60 milletvekili) bulursa genel seçimlere altı ay kalmış olsa dahi derhal ara seçime gidilir',
      correctPhrase: 'ara seçim her seçim döneminde bir defa yapılır ve genel seçimden otuz ay geçmedikçe ara seçime gidilemez; ancak boşalan üyeliklerin sayısı üye tam sayısının yüzde beşini (30 milletvekili) bulduğu hâllerde otuz ay şartı aranmaksızın üç ay içinde ara seçime gidilir; genel seçimlere bir yıl kala ise ara seçimi yapılamaz',
      explanation: 'Anayasa m. 78/3-4 uyarınca ara seçim için geçmesi gereken süre 24 ay değil 30 aydır, zorunlu ara seçim oranı %10 değil %5’tir (30 milletvekili) ve genel seçimlere 1 yıl kala (%5 boşalma olsa bile!) ara seçim yapılamaz (yalnız bir ilin/seçim çevresinin hiç üyesi kalmazsa yapılır)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Onsekiz yaşını dolduran her Türk milletvekili seçilebilir; en az ilkokul mezunu olmayanlar, kısıtlılar, askerlikle ilişiği olanlar, kamu hizmetinden yasaklılar, taksirli suçlar hariç toplam bir yıl veya daha fazla hapis',
      wrongPhrase: 'Yirmibeş yaşını dolduran ve en az yükseköğrenim görmüş olan her Türk milletvekili seçilebilir; taksirli suçlardan dolayı dahi bir yıl hapis cezasına mahkûm olanlar',
      correctPhrase: 'Onsekiz yaşını dolduran her Türk milletvekili seçilebilir; en az ilkokul mezunu olmayanlar, kısıtlılar, askerlikle ilişiği olanlar, kamu hizmetinden yasaklılar, taksirli suçlar hariç toplam bir yıl veya daha fazla hapis',
      explanation: 'Anayasa m. 76 uyarınca milletvekili seçilme yaşı 18, eğitim şartı en az ilkokul mezuniyetidir (yükseköğrenim ve 40 yaş şartı Cumhurbaşkanı seçilme yeterliliğidir - m. 101!) ve taksirli suçlardan verilen hapis cezaları seçilmeye engel değildir!'
    }
  },
  {
    id: 'rule-anayasa-15',
    branch: 'Anayasa',
    subTopic: 'Yasama Dokunulmazlığının Kaldırılması ve Milletvekilliğinin Düşmesine Karşı AYM’ye İptal Başvurusu (7 Gün - 15 Gün)',
    articleRef: 'ANAYASA M. 83-85',
    trueStatement:
      'Yasama dokunulmazlığının kaldırılmasına veya milletvekilliğinin düşmesine Türkiye Büyük Millet Meclisi Genel Kurulunca karar verildiği hâllerde, bu karar tarihinden başlayarak yedi gün içerisinde ilgili milletvekili veya bir diğer milletvekili, kararın Anayasaya, kanuna veya İçtüzüğe aykırılığı iddiasıyla iptali için Anayasa Mahkemesine başvurabilir ve Anayasa Mahkemesi iptal istemini onbeş gün içerisinde kesin karara bağlar; buna karşılık milletvekilliğinden istifa (TBMM Genel Kurulunca basit çoğunlukla karar verilir), kesin hüküm giyme veya kısıtlanma (kesin mahkeme kararının Genel Kurula bildirilmesiyle düşer) ve milletvekilliği ile bağdaşmayan bir görev veya hizmeti sürdürmekte ısrar etme (gizli oyla karar verilir) durumları Anayasa m. 84’te ayrıca düzenlenmiştir.',
    trueHighlight: ['karar tarihinden başlayarak yedi gün içerisinde ilgili milletvekili veya bir diğer milletvekili, kararın Anayasaya, kanuna veya İçtüzüğe aykırılığı iddiasıyla iptali için Anayasa Mahkemesine başvurabilir ve Anayasa Mahkemesi iptal istemini onbeş gün içerisinde kesin karara bağlar', 'kesin hüküm giyme veya kısıtlanma (kesin mahkeme kararının Genel Kurula bildirilmesiyle düşer)'],
    trueCorrectPhrase: 'Anayasa m. 84-85 altın kuralları: 1) Dokunulmazlığın kaldırılması veya TBMM kararıyla üyeliğin düşmesi kararına karşı karar tarihinden itibaren 7 GÜN içinde ilgili milletvekili veya BİR DİĞER MİLLETVEKİLİ AYM’ye başvurabilir; AYM 15 GÜN içinde kesin karar verir, 2) Kesin hüküm giyme veya kısıtlanma halinde TBMM oylama yapmaz, kesin mahkeme kararının Genel Kurula BİLDİRİLMESİYLE üyelik düşer (dolayısıyla ortada bir TBMM kararı olmadığından AYM’ye iptal başvurusu yapılamaz!), 3) Özürsüz/izinsiz 1 ay içinde toplam 5 birleşim günü katılmayan vekilin üyeliğinin düşmesine ise üye tamsayısının SALT ÇOĞUNLUĞUYLA (301) karar verilir!',
    baseExplanation: 'Anayasa m. 84 ve m. 85’te ÖSYM’nin en sık kurduğu tuzak: "Kesin hüküm giyme veya kısıtlanma" halinde üyeliğin düşmesi için TBMM Genel Kurulunda oylama yapılmaz (kararın okunmasıyla düşer) ve bu durumda AYM’ye m. 85 başvurusu yapılamaz!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu karar tarihinden başlayarak yedi gün içerisinde ilgili milletvekili veya bir diğer milletvekili, kararın Anayasaya, kanuna veya İçtüzüğe aykırılığı iddiasıyla iptali için Anayasa Mahkemesine başvurabilir ve Anayasa Mahkemesi iptal istemini onbeş gün içerisinde kesin karara bağlar',
      wrongPhrase: 'bu kararın Resmi Gazete’de yayımlanmasından başlayarak altmış gün içerisinde yalnızca üye tamsayısının beşte biri tutarındaki milletvekilleri Anayasa Mahkemesine başvurabilir ve Anayasa Mahkemesi üç ay içinde karar verir',
      correctPhrase: 'bu karar tarihinden başlayarak yedi gün içerisinde ilgili milletvekili veya bir diğer milletvekili, kararın Anayasaya, kanuna veya İçtüzüğe aykırılığı iddiasıyla iptali için Anayasa Mahkemesine başvurabilir ve Anayasa Mahkemesi iptal istemini onbeş gün içerisinde kesin karara bağlar',
      explanation: 'Anayasa m. 85 uyarınca dokunulmazlığın kaldırılması veya üyeliğin düşmesi kararlarına karşı başvuru süresi karar tarihinden itibaren 7 gündür, tek bir milletvekili dahi (ilgili vekil veya bir diğer vekil) başvurabilir ve AYM 15 gün içinde kesin karar verir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kesin hüküm giyme veya kısıtlanma (kesin mahkeme kararının Genel Kurula bildirilmesiyle düşer)',
      wrongPhrase: 'kesin hüküm giyme veya kısıtlanma hâlinde de milletvekilliğinin düşmesi için TBMM Genel Kurulunun üye tam sayısının salt çoğunluğuyla gizli oyla karar vermesi şarttır',
      correctPhrase: 'kesin hüküm giyme veya kısıtlanma (kesin mahkeme kararının Genel Kurula bildirilmesiyle düşer)',
      explanation: 'Anayasa m. 84/2 uyarınca kesin hüküm giyme veya kısıtlanma halinde TBMM Genel Kurulunda oylama yapılmaz; bu husustaki kesin mahkeme kararının Genel Kurula BİLDİRİLMESİYLE milletvekilliği kendiliğinden düşer!'
    }
  },
  {
    id: 'rule-anayasa-16',
    branch: 'Anayasa',
    subTopic: 'Kanunların Cumhurbaşkanınca Yayımlanması (15 Gün) ve Geri Gönderilen Kanunun Aynen Kabulü Nisabı (Salt Çoğunluk: 301)',
    articleRef: 'ANAYASA M. 89',
    trueStatement:
      'Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları onbeş gün içinde yayımlar veya yayımlanmasını kısmen ya da tamamen uygun bulmadığı kanunları, bir daha görüşülmek üzere, bu hususta gösterdiği gerekçe ile birlikte aynı süre içinde Türkiye Büyük Millet Meclisine geri gönderir; bütçe kanunları bu hükme tabi değildir (geri gönderilemez); Türkiye Büyük Millet Meclisi, geri gönderilen kanunu üye tamsayısının salt çoğunluğu (301 milletvekili) ile aynen kabul ederse, kanun Cumhurbaşkanınca yayımlanır; Meclis, geri gönderilen kanunda yeni bir değişiklik yaparsa, Cumhurbaşkanı değiştirilen kanunu tekrar Meclise geri gönderebilir.',
    trueHighlight: ['onbeş gün içinde yayımlar', 'bütçe kanunları bu hükme tabi değildir (geri gönderilemez); Türkiye Büyük Millet Meclisi, geri gönderilen kanunu üye tamsayısının salt çoğunluğu (301 milletvekili) ile aynen kabul ederse, kanun Cumhurbaşkanınca yayımlanır'],
    trueCorrectPhrase: 'Anayasa m. 89 (2017 Anayasa değişikliği!) kritik kuralı: 1) Cumhurbaşkanının kanunu yayımlama veya geri gönderme süresi 15 GÜNDÜR, 2) BÜTÇE KANUNLARI geri gönderilemez (ancak AYM’de iptal davasına konu edilebilir!), 3) Geri gönderilen kanunun TBMM tarafından aynen kabul edilerek Cumhurbaşkanını yayımlamaya mecbur bırakması için 2017’den beri basit çoğunluk yetmez, ÜYE TAMSAYISININ SALT ÇOĞUNLUĞU (301 milletvekili) şarttır!',
    baseExplanation: '2017 Anayasa değişikliği ile Anayasa m. 89/3’te yapılan değişiklik HMGS’nin favori sorusudur: Eskiden TBMM geri gönderilen kanunu toplantıya katılanların salt çoğunluğuyla (151 ile) aynen kabul edebiliyordu; artık ÜYE TAMSAYISININ SALT ÇOĞUNLUĞU (en az 301 kabul oyu) şarttır!',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'bütçe kanunları bu hükme tabi değildir (geri gönderilemez); Türkiye Büyük Millet Meclisi, geri gönderilen kanunu üye tamsayısının salt çoğunluğu (301 milletvekili) ile aynen kabul ederse, kanun Cumhurbaşkanınca yayımlanır',
      wrongPhrase: 'bütçe kanunları da dahil olmak üzere tüm kanunlar Cumhurbaşkanınca geri gönderilebilir; TBMM geri gönderilen kanunu toplantıya katılanların basit çoğunluğu (en az 151 milletvekili) ile aynen kabul ederse kanun yayımlanır',
      correctPhrase: 'bütçe kanunları bu hükme tabi değildir (geri gönderilemez); Türkiye Büyük Millet Meclisi, geri gönderilen kanunu üye tamsayısının salt çoğunluğu (301 milletvekili) ile aynen kabul ederse, kanun Cumhurbaşkanınca yayımlanır',
      explanation: 'Anayasa m. 89/2-3 uyarınca bütçe kanunları bir daha görüşülmek üzere TBMM’ye geri gönderilemez ve geri gönderilen diğer kanunların TBMM’ce aynen kabul edilebilmesi için toplantıya katılanların değil, ÜYE TAMSAYISININ SALT ÇOĞUNLUĞU (en az 301 milletvekili) gerekir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'onbeş gün içinde yayımlar veya yayımlanmasını kısmen ya da tamamen uygun bulmadığı kanunları, bir daha görüşülmek üzere, bu hususta gösterdiği gerekçe ile birlikte aynı süre içinde Türkiye Büyük Millet Meclisine geri gönderir',
      wrongPhrase: 'otuz gün içinde yayımlar ve kanunları yalnızca tamamen geri gönderebilir, kısmen uygun bulmama gerekçesiyle geri gönderemez',
      correctPhrase: 'onbeş gün içinde yayımlar veya yayımlanmasını kısmen ya da tamamen uygun bulmadığı kanunları, bir daha görüşülmek üzere, bu hususta gösterdiği gerekçe ile birlikte aynı süre içinde Türkiye Büyük Millet Meclisine geri gönderir',
      explanation: 'Anayasa m. 89/1-2 uyarınca Cumhurbaşkanının kanunları yayımlama veya geri gönderme süresi 30 gün değil 15 gündür ve kanunları kısmen veya tamamen uygun bulmayarak geri gönderebilir (kısmen uygun bulmama halinde TBMM yalnız uygun bulunmayan maddeleri görüşebileceği gibi tümünü de görüşebilir)!'
    }
  },
  {
    id: 'rule-anayasa-17',
    branch: 'Anayasa',
    subTopic: 'Milletlerarası Andlaşmaları Uygun Bulma ve Temel Haklara İlişkin Andlaşmaların Kanunlara Üstünlüğü',
    articleRef: 'ANAYASA M. 90',
    trueStatement:
      'Türkiye Cumhuriyeti adına yabancı devletlerle ve milletlerarası kuruluşlarla yapılacak andlaşmaların onaylanması, Türkiye Büyük Millet Meclisinin onaylamayı bir kanunla uygun bulmasına bağlıdır (ekonomik, ticari veya teknik ilişkileri düzenleyen ve süresi bir yılı aşmayan andlaşmalar belirli şartlarla uygun bulma kanunu aranmaksızın yayımlanabilir); usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar kanun hükmündedir ve bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz; usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası andlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası andlaşma hükümleri esas alınır.',
    trueHighlight: ['onaylanması, Türkiye Büyük Millet Meclisinin onaylamayı bir kanunla uygun bulmasına bağlıdır', 'usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar kanun hükmündedir ve bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz', 'temel hak ve özgürlüklere ilişkin milletlerarası andlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası andlaşma hükümleri esas alınır'],
    trueCorrectPhrase: 'Anayasa m. 90 altın kuralları: 1) TBMM milletlerarası andlaşmayı doğrudan onaylamaz, onaylanmasını bir KANUNLA UYGUN BULUR (onaylayan Cumhurbaşkanıdır - m. 104!), 2) Andlaşmanın kendisi hakkında AYM’ye başvurulamaz (ancak "uygun bulma kanunu" hakkında AYM’de iptal davası açılabilir!), 3) TEMEL HAK VE ÖZGÜRLÜKLERE ilişkin usulüne göre yürürlüğe konulmuş andlaşmalar ile kanunlar çatışırsa ANDLAŞMA hükümleri esas alınır!',
    baseExplanation: 'Anayasa m. 90/5’te dikkat: Her türlü milletlerarası andlaşma değil, yalnız "usulüne göre yürürlüğe konulmuş TEMEL HAK VE ÖZGÜRLÜKLERE İLİŞKİN milletlerarası andlaşmalar" kanunlarla çatıştığında kanunların üstünde (esas alınır) konumundadır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar kanun hükmündedir ve bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz; usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası andlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası andlaşma hükümleri esas alınır',
      wrongPhrase: 'usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar hakkında altmış gün içinde Anayasa Mahkemesinde iptal davası açılabilir; ayrıca konusu ne olursa olsun tüm ticari ve teknik milletlerarası andlaşmalar Anayasa hükümlerinin dahi üstündedir',
      correctPhrase: 'usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar kanun hükmündedir ve bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz; usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası andlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası andlaşma hükümleri esas alınır',
      explanation: 'Anayasa m. 90/5 uyarınca usulüne göre yürürlüğe konulmuş milletlerarası andlaşmalar hakkında AYM’ye başvurulamaz ve yalnız "temel hak ve özgürlüklere ilişkin" andlaşmalar kanunlarla (Anayasayla değil!) çatıştığında esas alınır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Türkiye Cumhuriyeti adına yabancı devletlerle ve milletlerarası kuruluşlarla yapılacak andlaşmaların onaylanması, Türkiye Büyük Millet Meclisinin onaylamayı bir kanunla uygun bulmasına bağlıdır',
      wrongPhrase: 'Milletlerarası andlaşmaları onaylamak ve yayımlamak doğrudan doğruya Türkiye Büyük Millet Meclisi Başkanının yetkisindedir',
      correctPhrase: 'Türkiye Cumhuriyeti adına yabancı devletlerle ve milletlerarası kuruluşlarla yapılacak andlaşmaların onaylanması, Türkiye Büyük Millet Meclisinin onaylamayı bir kanunla uygun bulmasına bağlıdır',
      explanation: 'Anayasa m. 90/1 ve m. 104/11 uyarınca TBMM milletlerarası andlaşmaların onaylanmasını bir kanunla UYGUN BULUR; milletlerarası andlaşmaları ONAYLAMAK ve yayımlamak ise Cumhurbaşkanının görev ve yetkisidir!'
    }
  },
  {
    id: 'rule-anayasa-18',
    branch: 'Anayasa',
    subTopic: 'TBMM’nin Bilgi Edinme ve Denetim Yolları (Meclis Araştırması, Genel Görüşme, Meclis Soruşturması ve Yazılı Soru: 15 Gün)',
    articleRef: 'ANAYASA M. 98',
    trueStatement:
      'Türkiye Büyük Millet Meclisi; Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır (2017 Anayasa değişikliği ile gensoru ve sözlü soru kaldırılmıştır); yazılı soru, yazılı olarak en geç onbeş gün içinde cevaplandırılmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir; Meclis araştırması, genel görüşme ve milletvekillerinin genel ve güncel konular hakkında sözlü soru sormaları kesinlikle öngörülmemiş olup araştırma ve genel görüşme önergesinin verilme şekli İçtüzükle düzenlenir.',
    trueHighlight: ['Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır (2017 Anayasa değişikliği ile gensoru ve sözlü soru kaldırılmıştır)', 'yazılı olarak en geç onbeş gün içinde cevaplandırılmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir'],
    trueCorrectPhrase: 'Anayasa m. 98 (2017 değişikliği) bilgi edinme ve denetim araçları 4 tanedir: 1) Meclis Araştırması, 2) Genel Görüşme, 3) Meclis Soruşturması, 4) Yazılı Soru! (Gensoru ve Sözlü Soru KALDIRILMIŞTIR!) Yazılı soru, Cumhurbaşkanına değil, yalnız CUMHURBAŞKANI YARDIMCILARI VE BAKANLARA sorulabilir ve en geç 15 GÜN içinde yazılı cevaplandırılır!',
    baseExplanation: 'Anayasa m. 98’de üç kritik HMGS tuzağı: 1) Gensoru ve sözlü soru 2017’de kaldırıldı, 2) Yazılı soru Cumhurbaşkanına sorulamaz (yalnız CB yardımcıları ve bakanlara sorulur), 3) Yazılı sorunun cevap süresi en geç 15 gündür!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yazılı olarak en geç onbeş gün içinde cevaplandırılmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir',
      wrongPhrase: 'milletvekillerinin doğrudan doğruya Cumhurbaşkanına, Cumhurbaşkanı yardımcılarına ve bakanlara Genel Kurulda sözlü veya yazılı olarak otuz gün içinde cevaplandırılmak üzere soru sormalarından ve gensoru önergesi vermelerinden ibarettir',
      correctPhrase: 'yazılı olarak en geç onbeş gün içinde cevaplandırılmak üzere milletvekillerinin, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak soru sormalarından ibarettir',
      explanation: 'Anayasa m. 98 uyarınca 2017 değişikliğiyle gensoru ve sözlü soru kaldırılmıştır; yazılı soru ise Cumhurbaşkanına yöneltilemez, yalnız Cumhurbaşkanı yardımcıları ve bakanlara sorulabilir ve cevap süresi 30 gün değil en geç 15 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır',
      wrongPhrase: 'Meclis araştırması komisyonu yargı yetkisine de sahip olup devlet sırları ve ticari sırlar dahil her türlü konuda mahkeme kararı olmaksızın arama ve elkoyma kararı verebilir',
      correctPhrase: 'Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır',
      explanation: 'Anayasa m. 98/son uyarınca Devlet sırları ile ticari sırlar Meclis araştırması kapsamı dışındadır ve Meclis araştırması belli bir konuda bilgi edinmek için yapılan incelemeden ibaret olup yargısal yetki içermez!'
    }
  },
  {
    id: 'rule-anayasa-19',
    branch: 'Anayasa',
    subTopic: 'Cumhurbaşkanı, Cumhurbaşkanı Yardımcıları ve Bakanlar Hakkında Meclis Soruşturması Nisapları (301 -> 360 -> 400)',
    articleRef: 'ANAYASA M. 105 & M. 106',
    trueStatement:
      'Cumhurbaşkanı hakkında bir suç işlediği iddiasıyla (Cumhurbaşkanı yardımcıları ve bakanlar hakkında ise görevleriyle ilgili suç işledikleri iddiasıyla) Türkiye Büyük Millet Meclisi üye tamsayısının salt çoğunluğunun (en az 301 milletvekili) vereceği önergeyle soruşturma açılması istenebilir; Meclis, önergeyi en geç bir ay içinde görüşür ve üye tamsayısının beşte üçünün (en az 360 milletvekili) gizli oyuyla soruşturma açılmasına karar verebilir; soruşturma onbeş kişilik bir komisyon tarafından yürütülür ve Genel Kurulda üye tamsayısının üçte ikisinin (en az 400 milletvekili) gizli oyuyla Yüce Divana sevk kararı alınabilir; hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı seçim kararı alamaz ve Yüce Divanda seçilmeye engel bir suçtan mahkûm edilen Cumhurbaşkanının görevi sona erer.',
    trueHighlight: ['üye tamsayısının salt çoğunluğunun (en az 301 milletvekili) vereceği önergeyle soruşturma açılması istenebilir', 'en geç bir ay içinde görüşür ve üye tamsayısının beşte üçünün (en az 360 milletvekili) gizli oyuyla soruşturma açılmasına karar verebilir', 'üye tamsayısının üçte ikisinin (en az 400 milletvekili) gizli oyuyla Yüce Divana sevk kararı alınabilir; hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı seçim kararı alamaz'],
    trueCorrectPhrase: 'Anayasa m. 105 ve m. 106 Meclis Soruşturması 3’lü Nisap Şifresi: 1) Önerge (Teklif): Üye tamsayısının SALT ÇOĞUNLUĞU (301), 2) Soruşturma Açılması Kararı: 1 ay içinde GİZLİ OYLA üye tamsayısının 3/5’i (360), 3) Yüce Divana Sevk Kararı: GİZLİ OYLA üye tamsayısının 2/3’ü (400)! (Hakkında soruşturma açılmasına [360 oyla] karar verilen Cumhurbaşkanı TBMM seçimlerinin yenilenmesine karar VEREMEZ!)',
    baseExplanation: 'Cumhurbaşkanı (her türlü suç), CB yardımcıları ve bakanlar (görevleriyle ilgili suçlar) hakkında Meclis soruşturmasındaki "301 teklif -> 360 soruşturma açılması -> 400 Yüce Divana sevk" kademeli nisapları ve Yüce Divan yargılamasının 3+3=6 ayda tamamlanması Anayasa Hukukunun en önemli sayısal kuralıdır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'Türkiye Büyük Millet Meclisi üye tamsayısının salt çoğunluğunun (en az 301 milletvekili) vereceği önergeyle soruşturma açılması istenebilir; Meclis, önergeyi en geç bir ay içinde görüşür ve üye tamsayısının beşte üçünün (en az 360 milletvekili) gizli oyuyla soruşturma açılmasına karar verebilir; soruşturma onbeş kişilik bir komisyon tarafından yürütülür ve Genel Kurulda üye tamsayısının üçte ikisinin (en az 400 milletvekili) gizli oyuyla Yüce Divana sevk kararı alınabilir',
      wrongPhrase: 'üye tamsayısının onda birinin (60 milletvekili) önergesiyle soruşturma açılması istenebilir, Genel Kurul toplantıya katılanların salt çoğunluğuyla soruşturma açılmasına ve üye tamsayısının salt çoğunluğuyla (301 milletvekili) açık oyla Yüce Divana sevkine karar verebilir',
      correctPhrase: 'Türkiye Büyük Millet Meclisi üye tamsayısının salt çoğunluğunun (en az 301 milletvekili) vereceği önergeyle soruşturma açılması istenebilir; Meclis, önergeyi en geç bir ay içinde görüşür ve üye tamsayısının beşte üçünün (en az 360 milletvekili) gizli oyuyla soruşturma açılmasına karar verebilir; soruşturma onbeş kişilik bir komisyon tarafından yürütülür ve Genel Kurulda üye tamsayısının üçte ikisinin (en az 400 milletvekili) gizli oyuyla Yüce Divana sevk kararı alınabilir',
      explanation: 'Anayasa m. 105 ve m. 106 uyarınca Meclis soruşturması önergesi için üye tamsayısının salt çoğunluğu (301), soruşturma açılması için gizli oyla 3/5 (360) ve Yüce Divana sevk için gizli oyla 2/3 (400) çoğunluk şarttır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı seçim kararı alamaz ve Yüce Divanda seçilmeye engel bir suçtan mahkûm edilen Cumhurbaşkanının görevi sona erer',
      wrongPhrase: 'hakkında Meclis soruşturması açılmasına karar verilen Cumhurbaşkanı derhal TBMM seçimlerinin yenilenmesine karar vererek soruşturmayı düşürebilir ve Yüce Divana sevk kararı alındığı anda mahkûmiyet beklenmeksizin Cumhurbaşkanının görevi kendiliğinden sona erer',
      correctPhrase: 'hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı seçim kararı alamaz ve Yüce Divanda seçilmeye engel bir suçtan mahkûm edilen Cumhurbaşkanının görevi sona erer',
      explanation: 'Anayasa m. 105/5-6 uyarınca hakkında soruşturma açılmasına karar verilen Cumhurbaşkanı seçim kararı ALAMAZ; ayrıca Cumhurbaşkanının görevi Yüce Divana sevk ile değil, Yüce Divanda seçilmeye engel bir suçtan MAHKÛM EDİLMESİYLE sona erer!'
    }
  },
  {
    id: 'rule-anayasa-20',
    branch: 'Anayasa',
    subTopic: 'Olağanüstü Hal (OHAL) İlanı (6 Ay + 4 Ay Uzatma) ve OHAL Cumhurbaşkanlığı Kararnameleri (3 Ay TBMM Onayı)',
    articleRef: 'ANAYASA M. 119',
    trueStatement:
      'Cumhurbaşkanı; savaş, savaşı gerektirecek bir durumun başgöstermesi, seferberlik, ayaklanma, vatan veya Cumhuriyete karşı kuvvetli ve eylemli bir kalkışma, ülkenin ve milletin bölünmezliğini içten veya dıştan tehlikeye düşüren şiddet hareketlerinin yaygınlaşması, anayasal düzeni veya temel hak ve hürriyetleri ortadan kaldırmaya yönelik yaygın şiddet hareketlerinin ortaya çıkması, şiddet olayları nedeniyle kamu düzeninin ciddi şekilde bozulması, tabii afet veya tehlikeli salgın hastalık ya da ağır ekonomik bunalımın ortaya çıkması hâllerinde yurdun tamamında veya bir bölgesinde, süresi altı ayı geçmemek üzere olağanüstü hâl ilan edebilir; olağanüstü hâl ilanı kararı verildiği gün Resmî Gazete’de yayımlanır ve aynı gün Türkiye Büyük Millet Meclisinin onayına sunulur; TBMM, Cumhurbaşkanının talebi üzerine her defasında dört ayı geçmemek üzere süreyi uzatabilir (savaş hâllerinde bu dört aylık süre aranmaz); savaş ve mücbir sebeplerle TBMM’nin toplanamaması hâli hariç olmak üzere olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri üç ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır; aksi hâlde olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnamesi kendiliğinden yürürlükten kalkar.',
    trueHighlight: ['süresi altı ayı geçmemek üzere olağanüstü hâl ilan edebilir', 'TBMM, Cumhurbaşkanının talebi üzerine her defasında dört ayı geçmemek üzere süreyi uzatabilir (savaş hâllerinde bu dört aylık süre aranmaz)', 'olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri üç ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır; aksi hâlde olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnamesi kendiliğinden yürürlükten kalkar'],
    trueCorrectPhrase: 'Anayasa m. 119 OHAL süre şifresi: 1) İlk ilan (Cumhurbaşkanı tek başına ilan eder, MGK görüşü şartı 2017’de kaldırıldı!): En çok 6 AY, 2) Resmi Gazete’de yayım ve TBMM onayına sunma: AYNI GÜN, 3) TBMM tarafından uzatma: Her defasında en çok 4 AY (savaş halinde 4 ay sınırı aranmaz), 4) OHAL CBK’larının TBMM’de görüşülüp karara bağlanma süresi: 3 AY (aksi halde kendiliğinden yürürlükten kalkar!), 5) OHAL CBK’ları hakkında AYM’de dava AÇILAMAZ (Anayasa m. 148/1)!',
    baseExplanation: 'Anayasa m. 119’daki "6 ay ilk ilan - 4 ay uzatma - 3 ay OHAL CBK Meclis onayı" üçlüsü Anayasa Hukukunun en sık sorulan sayısal dizisidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'süresi altı ayı geçmemek üzere olağanüstü hâl ilan edebilir; olağanüstü hâl ilanı kararı verildiği gün Resmî Gazete’de yayımlanır ve aynı gün Türkiye Büyük Millet Meclisinin onayına sunulur; TBMM, Cumhurbaşkanının talebi üzerine her defasında dört ayı geçmemek üzere süreyi uzatabilir (savaş hâllerinde bu dört aylık süre aranmaz); savaş ve mücbir sebeplerle TBMM’nin toplanamaması hâli hariç olmak üzere olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri üç ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır; aksi hâlde olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnamesi kendiliğinden yürürlükten kalkar',
      wrongPhrase: 'süresi üç ayı geçmemek üzere olağanüstü hâl ilan edebilir; TBMM her defasında altı ayı geçmemek üzere süreyi uzatabilir ve olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri bir ay içinde TBMM’de görüşülmezse bile olağanüstü hâl süresince yürürlükte kalmaya devam eder',
      correctPhrase: 'süresi altı ayı geçmemek üzere olağanüstü hâl ilan edebilir; olağanüstü hâl ilanı kararı verildiği gün Resmî Gazete’de yayımlanır ve aynı gün Türkiye Büyük Millet Meclisinin onayına sunulur; TBMM, Cumhurbaşkanının talebi üzerine her defasında dört ayı geçmemek üzere süreyi uzatabilir (savaş hâllerinde bu dört aylık süre aranmaz); savaş ve mücbir sebeplerle TBMM’nin toplanamaması hâli hariç olmak üzere olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri üç ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır; aksi hâlde olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnamesi kendiliğinden yürürlükten kalkar',
      explanation: 'Anayasa m. 119 uyarınca OHAL ilk ilanı en çok 6 ay, TBMM uzatması her defasında en çok 4 ay ve OHAL CBK’larının TBMM’de görüşülüp karara bağlanma süresi 3 aydır (3 ay içinde karara bağlanmazsa kendiliğinden yürürlükten kalkar)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'savaş ve mücbir sebeplerle TBMM’nin toplanamaması hâli hariç olmak üzere olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri üç ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır',
      wrongPhrase: 'olağanüstü hâllerde çıkarılan Cumhurbaşkanlığı kararnameleri hakkında da Resmi Gazete’de yayımlanmalarından itibaren altmış gün içinde Anayasa Mahkemesinde şekil ve esas bakımından iptal davası açılabilir',
      correctPhrase: 'savaş ve mücbir sebeplerle TBMM’nin toplanamaması hâli hariç olmak üzere olağanüstü hâl sırasında çıkarılan Cumhurbaşkanlığı kararnameleri üç ay içinde Türkiye Büyük Millet Meclisinde görüşülür ve karara bağlanır',
      explanation: 'Anayasa m. 148/1 üçüncü cümle açık hükmü uyarınca olağanüstü hâllerde ve savaş hâllerinde çıkarılan Cumhurbaşkanlığı kararnamelerinin şekil ve esas bakımından Anayasaya aykırılığı iddiasıyla Anayasa Mahkemesinde dava AÇILAMAZ (ancak TBMM tarafından kanunla onaylandıktan sonra kanun halini aldığında denetlenebilir)!'
    }
  },
  {
    id: 'rule-anayasa-21',
    branch: 'Anayasa',
    subTopic: 'Anayasa Mahkemesi Üye Yapısı (15 Üye: 12 CB + 3 TBMM; 12 Yıl Görev) ve Nitelikli Karar Nisabı (2/3 Çoğunluk)',
    articleRef: 'ANAYASA M. 146-149',
    trueStatement:
      'Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (iki üyeyi Sayıştay Genel Kurulunun, bir üyeyi ise baro başkanlarının serbest avukatlar arasından gösterecekleri üçer aday içinden) gizli oyla seçer, Cumhurbaşkanı ise oniki üyeyi seçer; Anayasa Mahkemesi üyeleri kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez ve üyeler altmışbeş yaşını doldurunca emekliye ayrılırlar; Anayasa değişikliğinde iptale, siyasi partilerin kapatılmasına ya da Devlet yardımından yoksun bırakılmasına karar verilebilmesi için toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır.',
    trueHighlight: ['Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (iki üyeyi Sayıştay Genel Kurulunun, bir üyeyi ise baro başkanlarının serbest avukatlar arasından gösterecekleri üçer aday içinden) gizli oyla seçer, Cumhurbaşkanı ise oniki üyeyi seçer', 'kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez ve üyeler altmışbeş yaşını doldurunca emekliye ayrılırlar', 'toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır'],
    trueCorrectPhrase: 'Anayasa m. 146-149 AYM Şifresi: 1) Toplam 15 ÜYE (3 TBMM [2 Sayıştay + 1 Baro Başkanları adaylarından] + 12 Cumhurbaşkanı), 2) Seçilme yaşı: 45 yaşını doldurmuş olmak; Görev süresi: 12 YIL (tekrar seçilemez; Başkan ve Başkanvekilleri ise 4 yıl için seçilir, süresi biten yeniden seçilebilir!); Emeklilik: 65 yaş, 3) Genel kurul başkan ve en az 10 üye (toplam 11 kişi) ile toplanır, 4) Anayasa değişikliği iptali ve siyasi parti kapatma/yardımdan yoksun bırakma kararları toplantıya katılanların 2/3 ÇOĞUNLUĞUYLA, diğer kararlar salt çoğunlukla alınır!',
    baseExplanation: 'Anayasa Mahkemesinin 15 üyeli yapısı (12 CB + 3 TBMM), 45 yaş şartı, 12 yıl görev süresi ve 2/3 nitelikli karar çoğunluğu (Anayasa değişikliği iptali + siyasi parti kapatma/hazine yardımından yoksunluk) HMGS Anayasa Yargısının en temel sorusudur.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (iki üyeyi Sayıştay Genel Kurulunun, bir üyeyi ise baro başkanlarının serbest avukatlar arasından gösterecekleri üçer aday içinden) gizli oyla seçer, Cumhurbaşkanı ise oniki üyeyi seçer; Anayasa Mahkemesi üyeleri kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez',
      wrongPhrase: 'Anayasa Mahkemesi onyedi üyeden kurulur; üyelerin yarısını TBMM, diğer yarısını Hâkimler ve Savcılar Kurulu dört yıl için seçer ve süresi biten üye yeniden seçilebilir',
      correctPhrase: 'Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (iki üyeyi Sayıştay Genel Kurulunun, bir üyeyi ise baro başkanlarının serbest avukatlar arasından gösterecekleri üçer aday içinden) gizli oyla seçer, Cumhurbaşkanı ise oniki üyeyi seçer; Anayasa Mahkemesi üyeleri kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez',
      explanation: 'Anayasa m. 146 ve m. 147 uyarınca AYM 15 üyeden oluşur (3 TBMM + 12 Cumhurbaşkanı; HSK AYM’ye üye seçmez!), üyeler 12 yıl için seçilir ve bir kimse iki defa AYM üyesi seçilemez!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'Anayasa değişikliğinde iptale, siyasi partilerin kapatılmasına ya da Devlet yardımından yoksun bırakılmasına karar verilebilmesi için toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır',
      wrongPhrase: 'Kanunların ve Cumhurbaşkanlığı kararnamelerinin iptaline karar verilebilmesi için üye tamsayısının beşte üç (3/5) çoğunluğu, siyasi partilerin kapatılması için ise oybirliği şarttır',
      correctPhrase: 'Anayasa değişikliğinde iptale, siyasi partilerin kapatılmasına ya da Devlet yardımından yoksun bırakılmasına karar verilebilmesi için toplantıya katılan üyelerin üçte iki (2/3) oy çokluğu şarttır',
      explanation: 'Anayasa m. 149/1 uyarınca kanunların ve CBK’ların iptaline toplantıya katılanların SALT ÇOĞUNLUĞUYLA karar verilir; yalnız Anayasa değişikliğinde iptale ve siyasi partilerin kapatılmasına/Devlet yardımından yoksun bırakılmasına karar verilebilmesi için toplantıya katılan üyelerin 2/3 oy çokluğu şarttır!'
    }
  },
  {
    id: 'rule-anayasa-22',
    branch: 'Anayasa',
    subTopic: 'Hâkimler ve Savcılar Kurulu (HSK): 13 Üyeli Yapısı (4 CB + 7 TBMM + Bakan + Bakan Yrd.) ve Kararlarına Yargı Yolu',
    articleRef: 'ANAYASA M. 159',
    trueStatement:
      'Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabiî üyesidir; Kurulun dört üyesi Cumhurbaşkanınca (birinci sınıf adli ve idari yargı hâkim ve savcıları arasından), yedi üyesi ise Türkiye Büyük Millet Meclisince (üç üye Yargıtay üyeleri, bir üye Danıştay üyeleri, üç üye ise yükseköğretim kurumlarının hukuk dallarında görev yapan öğretim üyeleri ile avukatlar arasından) dört yıl için seçilir ve süresi biten üyeler bir kez daha seçilebilir; Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz.',
    trueHighlight: ['Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabiî üyesidir; Kurulun dört üyesi Cumhurbaşkanınca (birinci sınıf adli ve idari yargı hâkim ve savcıları arasından), yedi üyesi ise Türkiye Büyük Millet Meclisince', 'dört yıl için seçilir ve süresi biten üyeler bir kez daha seçilebilir; Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz'],
    trueCorrectPhrase: 'Anayasa m. 159 HSK Şifresi: 1) Toplam 13 ÜYE ve 2 DAİRE (Başkan: Adalet Bakanı + Tabii Üye: Adalet Bakanı Yardımcısı + 4 Üye Cumhurbaşkanı + 7 Üye TBMM = 1+1+4+7 = 13!), 2) Görev süresi: 4 YIL (süresi biten üye BİR KEZ DAHA seçilebilir - AYM’den farklı!), 3) HSK’nın yalnız "MESLEKTEN ÇIKARMA" cezasına ilişkin kararlarına karşı yargı yolu (Danıştayda ilk derece olarak) açıktır; diğer tüm kararlarına karşı yargı yolu KAPALIDIR!',
    baseExplanation: 'AYM (15 üye, 12 yıl, tekrar seçilemez) ile HSK (13 üye, 4 yıl, bir kez daha seçilebilir) karşılaştırması ve HSK’nın yalnız meslekten çıkarma kararlarına karşı yargı yolunun açık olması HMGS’de her dönem sorulan Anayasa-İdare ortak konusudur.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabiî üyesidir; Kurulun dört üyesi Cumhurbaşkanınca (birinci sınıf adli ve idari yargı hâkim ve savcıları arasından), yedi üyesi ise Türkiye Büyük Millet Meclisince (üç üye Yargıtay üyeleri, bir üye Danıştay üyeleri, üç üye ise yükseköğretim kurumlarının hukuk dallarında görev yapan öğretim üyeleri ile avukatlar arasından) dört yıl için seçilir ve süresi biten üyeler bir kez daha seçilebilir',
      wrongPhrase: 'Hâkimler ve Savcılar Kurulu yirmiiki üyeden oluşur ve üç daire hâlinde çalışır; Kurul Başkanı üyeler arasından gizli oyla seçilir ve üyeler oniki yıl için seçilip bir daha seçilemezler',
      correctPhrase: 'Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabiî üyesidir; Kurulun dört üyesi Cumhurbaşkanınca (birinci sınıf adli ve idari yargı hâkim ve savcıları arasından), yedi üyesi ise Türkiye Büyük Millet Meclisince (üç üye Yargıtay üyeleri, bir üye Danıştay üyeleri, üç üye ise yükseköğretim kurumlarının hukuk dallarında görev yapan öğretim üyeleri ile avukatlar arasından) dört yıl için seçilir ve süresi biten üyeler bir kez daha seçilebilir',
      explanation: '2017 Anayasa değişikliği ile HSK üye sayısı 22’den 13’e, daire sayısı 3’ten 2’ye indirilmiştir; Kurul Başkanı Adalet Bakanıdır (4 üye CB + 7 üye TBMM + Bakan + Bakan Yrd. = 13) ve üyeler 4 yıl için seçilip bir kez daha seçilebilirler!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz',
      wrongPhrase: 'Kurulun atama, nakil, kınama ve kademe ilerlemesinin durdurulması dahil tüm disiplin ve özlük kararlarına karşı Danıştayda iptal davası açılabilir',
      correctPhrase: 'Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz',
      explanation: 'Anayasa m. 159/10 açık hükmü uyarınca HSK’nın "meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı" yargı mercilerine başvurulamaz!'
    }
  }
];
