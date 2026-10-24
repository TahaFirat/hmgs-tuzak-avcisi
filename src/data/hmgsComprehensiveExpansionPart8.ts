import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 8 (42 Kural = 126 Yeni Doğrulanmış Kart)
 * Tamamı yürürlükteki güncel Türk mevzuatına (2025/2026 reformları dahil) uygun,
 * çelişkisiz, hatasız ve yüksek öğreticilik değerine sahip statü kuralları havuzu.
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART8_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // TMK (MEDENİ HUKUK - KİŞİLER, AİLE, MİRAS, EŞYA)
  // =========================================================================
  {
    id: 'rule-tmk-sakli-pay-p8',
    branch: 'Medeni',
    subTopic: 'Miras Hukuku: Saklı Pay Oranları',
    articleRef: 'TMK M. 506',
    trueStatement:
      'Mirasbırakanın altsoyu için yasal miras payının yarısı, ana ve babasından her biri için yasal miras payının dörtte biri, sağ kalan eş için altsoy veya ana ve baba zümresiyle birlikte mirasçı olması hâlinde yasal miras payının tamamı saklı paydır; kardeşlerin saklı payı kanunen bulunmamaktadır.',
    trueHighlight: ['yasal miras payının yarısı', 'yasal miras payının dörtte biri', 'sağ kalan eş için', 'kardeşlerin saklı payı kanunen bulunmamaktadır'],
    trueCorrectPhrase: 'altsoyun saklı payı 1/2, ana-babanın 1/4, eşin zümreyle payı tamamıdır; kardeşlerin saklı payı yoktur',
    baseExplanation: 'TMK m. 506 uyarınca: Altsoy 1/2, ana-baba 1/4, sağ kalan eş 1. ve 2. zümre ile mirasçıysa tamamı (1/1), diğer hallerde 3/4 saklı paya sahiptir. 5650 sayılı Kanunla kardeşlerin saklı payı kaldırılmıştır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'altsoyu için yasal miras payının yarısı',
      wrongPhrase: 'altsoyu için yasal miras payının dörtte üçü',
      correctPhrase: 'altsoyu için yasal miras payının yarısı',
      explanation: 'TMK m. 506/1: Altsoy için saklı pay oranı yasal miras payının 3/4’ü değil, yarısıdır (1/2).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kardeşlerin saklı payı kanunen bulunmamaktadır',
      wrongPhrase: 'kardeşler için yasal miras payının sekizde biri saklı paydır',
      correctPhrase: 'kardeşlerin saklı payı kanunen bulunmamaktadır',
      explanation: '5650 sayılı Kanun değişikliği ile kardeşlerin saklı payı TMK m. 506 kapsamından tamamen çıkarılmıştır.'
    }
  },
  {
    id: 'rule-tmk-el-yazili-vasiyet-p8',
    branch: 'Medeni',
    subTopic: 'El Yazılı Vasiyetname Geçerlilik Koşulları',
    articleRef: 'TMK M. 538',
    trueStatement:
      'El yazılı vasiyetnamenin geçerli olması için yapıldığı yıl, ay ve gün gösterilerek başından sonuna kadar mirasbırakanın el yazısıyla yazılmış ve imzalanmış olması zorunludur.',
    trueHighlight: ['yapıldığı yıl, ay ve gün gösterilerek', 'başından sonuna kadar mirasbırakanın el yazısıyla yazılmış ve imzalanmış olması zorunludur'],
    trueCorrectPhrase: 'El yazılı vasiyet baştan sona el yazısı, tarih (gün/ay/yıl) ve mirasbırakanın imzasını taşımalıdır.',
    baseExplanation: 'TMK m. 538: El yazılı vasiyetnamenin baştan sona mirasbırakanın kendi el yazısıyla yazılması, yıl, ay ve günün gösterilmesi ve bizzat imzalanması geçerlilik şartıdır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'başından sonuna kadar mirasbırakanın el yazısıyla yazılmış ve imzalanmış olması zorunludur',
      wrongPhrase: 'bilgisayarla yazılıp yalnızca altının mirasbırakan tarafından el yazısıyla imzalanmış olması yeterlidir',
      correctPhrase: 'başından sonuna kadar mirasbırakanın el yazısıyla yazılmış ve imzalanmış olması zorunludur',
      explanation: 'TMK m. 538: Metnin bilgisayar veya daktilo ile yazılıp sadece imzalanması el yazılı vasiyeti kesin hükümsüz kılar; metnin tamamı el yazısı olmalıdır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yapıldığı yıl, ay ve gün gösterilerek',
      wrongPhrase: 'düzenleme tarihinin gün ve ay gösterilmeksizin sadece yılı belirtilerek',
      correctPhrase: 'yapıldığı yıl, ay ve gün gösterilerek',
      explanation: 'TMK m. 538: El yazılı vasiyetnamede düzenleme tarihinin yıl, ay ve gün olarak açıkça yer alması zorunludur.'
    }
  },
  {
    id: 'rule-tmk-mirasin-reddi-p8',
    branch: 'Medeni',
    subTopic: 'Mirasın Reddi Süresi ve Başlangıcı',
    articleRef: 'TMK M. 606',
    trueStatement:
      'Miras, yasal ve atanmış mirasçılar tarafından üç ay içinde reddolunabilir; bu süre, yasal mirasçılar için mirasbırakanın ölümünü öğrendikleri tarihten işlemeye başlar.',
    trueHighlight: ['üç ay içinde reddolunabilir', 'mirasbırakanın ölümünü öğrendikleri tarihten işlemeye başlar'],
    trueCorrectPhrase: 'Mirasın reddi süresi 3 aydır ve yasal mirasçılar için ölümün öğrenildiği andan başlar.',
    baseExplanation: 'TMK m. 606: Miras 3 ay içinde sulh mahkemesine sözlü veya yazılı beyanla reddedilebilir. Süre, yasal mirasçılar için mirasbırakanın ölümünü öğrendikleri tarihten başlar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç ay içinde reddolunabilir',
      wrongPhrase: 'bir yıl içinde reddolunabilir',
      correctPhrase: 'üç ay içinde reddolunabilir',
      explanation: 'TMK m. 606: Mirasın gerçek reddi süresi 1 yıl değil, 3 aydır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mirasbırakanın ölümünü öğrendikleri tarihten işlemeye başlar',
      wrongPhrase: 'terekenin resmi defterinin tutulmasının tamamlandığı tarihten işlemeye başlar',
      correctPhrase: 'mirasbırakanın ölümünü öğrendikleri tarihten işlemeye başlar',
      explanation: 'TMK m. 606/2: Yasal mirasçılar bakımından süre, mirasbırakanın ölümünü öğrendikleri andan itibaren işlemeye başlar.'
    }
  },
  {
    id: 'rule-tmk-mirascilik-belgesi-p8',
    branch: 'Medeni',
    subTopic: 'Mirasçılık Belgesi Verilmesi ve İtiraz',
    articleRef: 'TMK M. 598',
    trueStatement:
      'Başvurusu üzerine yasal mirasçı oldukları belirlenenlere sulh hukuk mahkemesince veya noterlerce mirasçılık sıfatlarını gösteren bir belge verilir; mirasçılık belgesinin geçersizliği her zaman ileri sürülebilir.',
    trueHighlight: ['sulh hukuk mahkemesince veya noterlerce', 'her zaman ileri sürülebilir'],
    trueCorrectPhrase: 'Mirasçılık belgesi sulh hukuk mahkemesi veya noterden alınır; aksi her zaman ispatlanabilir.',
    baseExplanation: 'TMK m. 598: Mirasçılık belgesi Sulh Hukuk Mahkemesi veya noterlerden alınabilir. Bu belge bir kesin hüküm teşkil etmez; belgenin geçersizliği her zaman dava edilebilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'sulh hukuk mahkemesince veya noterlerce',
      wrongPhrase: 'yalnızca asliye hukuk mahkemesince',
      correctPhrase: 'sulh hukuk mahkemesince veya noterlerce',
      explanation: 'TMK m. 598: Mirasçılık belgesi sulh hukuk mahkemesi veya noterler tarafından verilir, asliye hukuk mahkemesinin görevi değildir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'her zaman ileri sürülebilir',
      wrongPhrase: 'verildiği tarihten itibaren bir yıl geçmekle kesinleşir ve bir daha iptali istenemez',
      correctPhrase: 'her zaman ileri sürülebilir',
      explanation: 'TMK m. 598/3: Mirasçılık belgesinin geçersizliği maddi hukuk bakımından her zaman ileri sürülebilir; 1 yıllık düşürücü süreye tabi değildir.'
    }
  },
  {
    id: 'rule-tmk-fiili-ayrilik-p8',
    branch: 'Medeni',
    subTopic: 'Ortak Hayatın Yeniden Kurulamaması (Fiili Ayrılık)',
    articleRef: 'TMK M. 166/4',
    trueStatement:
      'Boşanma sebeplerinden herhangi biriyle açılmış bulunan davanın reddine karar verilmesi ve bu kararın kesinleştiği tarihten başlayarak üç yıl geçmesi hâlinde, ortak hayat yeniden kurulamamışsa eşlerden birinin istemi üzerine boşanmaya karar verilir.',
    trueHighlight: ['üç yıl geçmesi hâlinde', 'bu kararın kesinleştiği tarihten başlayarak'],
    trueCorrectPhrase: 'Ret kararının kesinleşmesinden itibaren 3 yıl ortak hayat kurulamamışsa talep üzerine boşanmaya karar verilir.',
    baseExplanation: 'TMK m. 166/4: Reddedilen boşanma davasının kesinleşmesinden itibaren 3 yıl geçmesine rağmen ortak hayat kurulamamışsa evlilik birliği temelden sarsılmış sayılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç yıl geçmesi hâlinde',
      wrongPhrase: 'bir yıl geçmesi hâlinde',
      correctPhrase: 'üç yıl geçmesi hâlinde',
      explanation: 'TMK m. 166/4: Fiili ayrılık sebebiyle boşanmada aranan bekleme süresi 1 yıl değil, 3 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu kararın kesinleştiği tarihten başlayarak',
      wrongPhrase: 'ilk boşanma davasının açıldığı tarihten başlayarak',
      correctPhrase: 'bu kararın kesinleştiği tarihten başlayarak',
      explanation: 'TMK m. 166/4: 3 yıllık süre ret kararının verildiği veya davanın açıldığı tarihten değil, ret kararının KESİNLEŞTİĞİ tarihten itibaren işler.'
    }
  },
  {
    id: 'rule-tmk-yoksulluk-nafakasi-p8',
    branch: 'Medeni',
    subTopic: 'Yoksulluk Nafakası Koşulları ve Kusur Durumu',
    articleRef: 'TMK M. 180',
    trueStatement:
      'Boşanma yüzünden yoksulluğa düşecek taraf, kusuru daha ağır olmamak koşuluyla geçimi için diğer taraftan malî gücü oranında süresiz olarak nafaka isteyebilir; nafaka yükümlüsünün kusuru aranmaz.',
    trueHighlight: ['kusuru daha ağır olmamak koşuluyla', 'süresiz olarak nafaka isteyebilir', 'nafaka yükümlüsünün kusuru aranmaz'],
    trueCorrectPhrase: 'Nafaka talep edenin kusuru daha ağır olmamalıdır; yükümlünün kusurlu olması şart değildir.',
    baseExplanation: 'TMK m. 175: Yoksulluk nafakası için talep eden eşin kusuru daha ağır olmamalıdır (eşit kusurlu veya kusursuz olabilir); nafaka borçlusunun ise hiç kusuru olmasa dahi nafaka yükümlülüğü doğabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kusuru daha ağır olmamak koşuluyla',
      wrongPhrase: 'tamamen kusursuz olması ve diğer tarafın tam kusurlu bulunması koşuluyla',
      correctPhrase: 'kusuru daha ağır olmamak koşuluyla',
      explanation: 'TMK m. 175: Yoksulluk nafakası isteyenin tamamen kusursuz olması şart değildir; kusurunun diğer eşten daha ağır olmaması yeterlidir (eşit kusurlu eş de isteyebilir).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'nafaka yükümlüsünün kusuru aranmaz',
      wrongPhrase: 'nafaka yükümlüsünün mutlaka ağır kusurlu bulunması zorunludur',
      correctPhrase: 'nafaka yükümlüsünün kusuru aranmaz',
      explanation: 'TMK m. 175: Yoksulluk nafakasında borçlunun kusuru aranmaz; borçlu tamamen kusursuz olsa dahi nafaka ödemeye mahkûm edilebilir.'
    }
  },
  {
    id: 'rule-tmk-aile-konutu-p8',
    branch: 'Medeni',
    subTopic: 'Aile Konutu Şerhi ve Malik Olmayan Eşin Hakkı',
    articleRef: 'TMK M. 194',
    trueStatement:
      'Eşlerden biri diğer eşin açık rızası bulunmadıkça aile konutunu devredemez veya aile konutu üzerindeki hakları sınırlayamaz; malik olmayan eş, tapu kütüğüne konutla ilgili gerekli şerhin verilmesini tapu müdürlüğünden tek başına talep edebilir.',
    trueHighlight: ['diğer eşin açık rızası bulunmadıkça', 'tapu müdürlüğünden tek başına talep edebilir'],
    trueCorrectPhrase: 'Aile konutu diğer eşin rızası olmadan devredilemez; malik olmayan eş şerhi tek başına isteyebilir.',
    baseExplanation: 'TMK m. 194: Malik olmayan eş, aile konutu şerhinin tapu kütüğüne işlenmesini doğrudan tapu müdürlüğünden isteyebilir. Şerh olmasa dahi diğer eşin açık rızası olmadan yapılan devirler sakattır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'tapu müdürlüğünden tek başına talep edebilir',
      wrongPhrase: 'ancak aile mahkemesinden karar alarak ve diğer eşin yazılı izniyle talep edebilir',
      correctPhrase: 'tapu müdürlüğünden tek başına talep edebilir',
      explanation: 'TMK m. 194/3: Malik olmayan eş aile konutu şerhini mahkeme kararına veya diğer eşin iznine gerek olmaksızın doğrudan tapu müdürlüğünden talep edebilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'diğer eşin açık rızası bulunmadıkça',
      wrongPhrase: 'diğer eşin rızası aranmaksızın olağan tasarruflar kapsamında serbestçe',
      correctPhrase: 'diğer eşin açık rızası bulunmadıkça',
      explanation: 'TMK m. 194/1: Aile konutunun devri veya rehni için diğer eşin açık rızası zorunlu geçerlilik koşuludur.'
    }
  },
  {
    id: 'rule-tmk-tasinmaz-satis-vaadi-p8',
    branch: 'Medeni',
    subTopic: 'Taşınmaz Satış Vaadinin Şekli ve Şerh Süresi',
    articleRef: 'TMK M. 706 & TBK M. 237',
    trueStatement:
      'Taşınmaz satış vaadi sözleşmelerinin geçerli olması noterlerce resen düzenlenmesine bağlıdır; tapu kütüğüne şerh verilen taşınmaz satış vaadi sözleşmesi, şerh tarihinden itibaren beş yıl geçtikten sonra üçüncü kişilere karşı hüküm ifade etmez.',
    trueHighlight: ['noterlerce resen düzenlenmesine bağlıdır', 'beş yıl geçtikten sonra'],
    trueCorrectPhrase: 'Satış vaadi noterde resen düzenlenir; tapuya şerhin etkisi 5 yıl geçmekle düşer.',
    baseExplanation: 'TMK m. 706, TBK m. 237 ve Tapu K. m. 26: Taşınmaz satış vaadi noterde resmi şekilde düzenlenir. Tapu kütüğüne şerh edildiğinde etkisi 5 yıldır; 5 yıl içinde ferağ verilmezse üçüncü kişilere karşı ileri sürülemez.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl geçtikten sonra',
      wrongPhrase: 'on yıl geçtikten sonra',
      correctPhrase: 'beş yıl geçtikten sonra',
      explanation: 'Tapu Kanunu m. 26/6 uyarınca satış vaadi şerhinin üçüncü kişilere karşı ayni etkisi 10 yıl değil, 5 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'noterlerce resen düzenlenmesine bağlıdır',
      wrongPhrase: 'tarafların imzasının noter tarafından onaylanması veya adi yazılı yapılması ile geçerlilik kazanır',
      correctPhrase: 'noterlerce resen düzenlenmesine bağlıdır',
      explanation: 'Noterlik Kanunu m. 60 ve TBK m. 237: Satış vaadinde imza tasdiki yetersizdir; resmi düzenleme şeklinde (resen) yapılması sıhhat şartıdır.'
    }
  },
  {
    id: 'rule-tmk-tasinir-rehni-zilyetlik-p8',
    branch: 'Medeni',
    subTopic: 'Teslime Bağlı Taşınır Rehninde Zilyetlik Şartı',
    articleRef: 'TMK M. 939',
    trueStatement:
      'Taşınır rehni, rehin verenin zilyetliği rehin alana devretmesiyle kurulur; alacaklı, zilyetliği fiilen elde etmedikçe rehin hakkı doğmaz ve taşınırın zilyetliği tamamen rehin verenin tasarrufunda bırakılarak rehin kurulamaz.',
    trueHighlight: ['rehin verenin zilyetliği rehin alana devretmesiyle kurulur', 'taşınırın zilyetliği tamamen rehin verenin tasarrufunda bırakılarak rehin kurulamaz'],
    trueCorrectPhrase: 'Taşınır rehni teslime bağlıdır; zilyetlik rehin verende bırakılarak geçerli rehin kurulamaz.',
    baseExplanation: 'TMK m. 939: Taşınır rehni kural olarak teslime bağlıdır. Zilyetlik tamamen rehin verende bırakılarak taşınır rehni tesis edilemez (hapis hakkı ve özel kanunlardaki sicilli rehinler istisnadır).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'rehin verenin zilyetliği rehin alana devretmesiyle kurulur',
      wrongPhrase: 'rehin sözleşmesinin yazılı yapılmasıyla zilyetlik devredilmeksizin kendiliğinden kurulur',
      correctPhrase: 'rehin verenin zilyetliği rehin alana devretmesiyle kurulur',
      explanation: 'TMK m. 939/1: Teslime bağlı taşınır rehninde zilyetliğin devri rehnin kurucu unsurudur; yalnızca yazılı sözleşme ayni hak doğurmaz.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'taşınırın zilyetliği tamamen rehin verenin tasarrufunda bırakılarak rehin kurulamaz',
      wrongPhrase: 'taraflar anlaşırlarsa taşınırın zilyetliği rehin verenin elinde bırakılarak da serbestçe teslimsiz rehin kurulabilir',
      correctPhrase: 'taşınırın zilyetliği tamamen rehin verenin tasarrufunda bırakılarak rehin kurulamaz',
      explanation: 'TMK m. 939/3: Taşınır rehin verenin fiili hakimiyetinde kaldıkça rehin hakkı doğmaz.'
    }
  },
  {
    id: 'rule-tmk-kotuniyetli-zilyet-p8',
    branch: 'Medeni',
    subTopic: 'Kötüniyetli Zilyedin Ürün ve Zarar Sorumluluğu',
    articleRef: 'TMK M. 995',
    trueStatement:
      'İyiniyetli olmayan zilyet, geri vermekle yükümlü olduğu şeyi haksız alıkoymuş olması yüzünden hak sahibine verdiği zararları ve elde ettiği veya elde etmeyi ihmal eylediği ürünleri tazmin etmekle yükümlüdür.',
    trueHighlight: ['elde ettiği veya elde etmeyi ihmal eylediği ürünleri tazmin etmekle yükümlüdür', 'İyiniyetli olmayan zilyet'],
    trueCorrectPhrase: 'Kötüniyetli zilyet, fiilen elde ettiği ve elde etmeyi ihmal ettiği ürünleri tazmin eder.',
    baseExplanation: 'TMK m. 995: İyiniyetli olmayan zilyet, yalnızca fiilen topladığı ürünleri değil, kusuruyla elde etmeyi ihmal eylediği semereleri de hak sahibine ödemekle yükümlüdür.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'elde ettiği veya elde etmeyi ihmal eylediği ürünleri tazmin etmekle yükümlüdür',
      wrongPhrase: 'yalnızca tüketmeyip elinde hazır bulundurduğu tabii ürünleri aynen iade etmekle yükümlüdür',
      correctPhrase: 'elde ettiği veya elde etmeyi ihmal eylediği ürünleri tazmin etmekle yükümlüdür',
      explanation: 'TMK m. 995/1: Kötüniyetli zilyet elde etmeyi ihmal ettiği ürünlerden de tam olarak sorumludur.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İyiniyetli olmayan zilyet',
      wrongPhrase: 'İyiniyetli zilyet de tıpkı kötüniyetli zilyet gibi',
      correctPhrase: 'İyiniyetli olmayan zilyet',
      explanation: 'TMK m. 993 uyarınca iyiniyetli zilyet elde ettiği ürünleri geri vermek zorunda değildir; ihmal edilen ürünlerden ise asla sorumlu tutulamaz.'
    }
  },

  // =========================================================================
  // TBK (BORÇLAR HUKUKU - GENEL VE ÖZEL HÜKÜMLER)
  // =========================================================================
  {
    id: 'rule-tbk-faiz-sinirlari-p8',
    branch: 'Borçlar',
    subTopic: 'Sözleşmesel ve Temerrüt Faizi Üst Sınırları',
    articleRef: 'TBK M. 88 & 120',
    trueStatement:
      'Sözleşmeyle kararlaştırılacak yıllık faiz oranı, yürürlükteki kanuni faiz oranının yüzde elli fazlasını; yıllık temerrüt faizi oranı ise kararlaştırılmışsa kanuni faiz oranının yüzde yüz fazlasını aşamaz.',
    trueHighlight: ['kanuni faiz oranının yüzde elli fazlasını', 'yüzde yüz fazlasını aşamaz'],
    trueCorrectPhrase: 'Sözleşme faizi üst sınırı kanuni faizin %50 fazlası, temerrüt faizi üst sınırı ise %100 fazlasıdır.',
    baseExplanation: 'TBK m. 88/2 ve m. 120/2: Sözleşmeyle belirlenecek anapara faizi kanuni faizin en fazla %50 fazlası, temerrüt faizi ise en fazla %100 fazlası (iki katı) olabilir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'kanuni faiz oranının yüzde elli fazlasını',
      wrongPhrase: 'kanuni faiz oranının iki katını',
      correctPhrase: 'kanuni faiz oranının yüzde elli fazlasını',
      explanation: 'TBK m. 88/2: Anapara (sözleşme) faizi üst sınırı kanuni faizin iki katı değil, yüzde elli (%50) fazlasıdır.'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'yüzde yüz fazlasını aşamaz',
      wrongPhrase: 'üç katını aşamaz',
      correctPhrase: 'yüzde yüz fazlasını aşamaz',
      explanation: 'TBK m. 120/2: Temerrüt faizinde azami oran kanuni faiz oranının %100 fazlasıdır.'
    }
  },
  {
    id: 'rule-tbk-asiri-ifa-guclugu-p8',
    branch: 'Borçlar',
    subTopic: 'Aşırı İfa Güçlüğü (Uyarlama Davası)',
    articleRef: 'TBK M. 138',
    trueStatement:
      'Sözleşmenin yapıldığı sırada taraflarca öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durum ortaya çıkar ve borçludan kaynaklanmayan bir sebeple ifayı aşırı derecede güçleştirirse, borçlu borcunu ifa etmemiş veya ifanın aşırı ölçüde güçleştiğini ihtirazi kayıtla belirterek ifa etmiş olmak şartıyla hâkimden sözleşmenin yeni koşullara uyarlanmasını isteyebilir.',
    trueHighlight: ['öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durum', 'ihtirazi kayıtla belirterek ifa etmiş olmak şartıyla', 'sözleşmenin yeni koşullara uyarlanmasını isteyebilir'],
    trueCorrectPhrase: 'Öngörülemeyen olağanüstü durumda, borç ifa edilmemiş veya ihtirazi kayıtla ifa edilmişse uyarlama istenebilir.',
    baseExplanation: 'TBK m. 138: Uyarlama talep edebilmek için durumun olağanüstü ve öngörülemez olması, borçludan kaynaklanmaması ve edimin henüz ifa edilmemiş veya ihtirazi kayıtla ifa edilmiş olması zorunludur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ihtirazi kayıtla belirterek ifa etmiş olmak şartıyla',
      wrongPhrase: 'borcunu hiçbir çekince bildirmeksizin tamamen ifa etmiş olsa dahi',
      correctPhrase: 'ihtirazi kayıtla belirterek ifa etmiş olmak şartıyla',
      explanation: 'TBK m. 138: İhtirazi kayıt koymaksızın borcunu ödeyen borçlu sonradan aşırı ifa güçlüğüne dayanarak uyarlama veya fesih isteyemez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durum',
      wrongPhrase: 'sözleşme kurulurken öngörülebilen mutad ekonomik riskler ve olağan enflasyon dalgalanmaları',
      correctPhrase: 'öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durum',
      explanation: 'TBK m. 138: Taraflarca basiretli bir tacir veya makul bir borçlu gibi öngörülebilen olağan piyasa hareketleri uyarlama sebebi sayılamaz.'
    }
  },
  {
    id: 'rule-tbk-ayipli-tasinir-zamani-p8',
    branch: 'Borçlar',
    subTopic: 'Taşınır Satışında Ayıp İhbarı ve Zamanaşımı',
    articleRef: 'TBK M. 223 & 231',
    trueStatement:
      'Alıcı, devraldığı satılanın durumunu işlerin olağan akışına göre imkân bulunur bulunmaz gözden geçirmek ve ayıp görürse satıcıya uygun bir süre içinde bildirmek zorundadır; satılanın ayıbından doğan davalar, daha uzun süre üstlenilmemişse, satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['uygun bir süre içinde bildirmek zorundadır', 'iki yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'Ayıp uygun sürede ihbar edilmeli; taşınır satışında ayıp zamanaşımı süresi devirden itibaren 2 yıldır.',
    baseExplanation: 'TBK m. 223 ve m. 231: Açık ayıplarda gözden geçirme ve uygun sürede ihbar yükümlülüğü vardır. Taşınır satışında zamanaşımı süresi devirden itibaren 2 yıldır (ağır kusurla gizlenmişse zamanaşımı işlemez).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'on yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'iki yıl geçmekle zamanaşımına uğrar',
      explanation: 'TBK m. 231/1: Taşınır satışında ayıp zamanaşımı genel zamanaşımı olan 10 yıl değil, devirden itibaren 2 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'uygun bir süre içinde bildirmek zorundadır',
      wrongPhrase: 'devir tarihinden itibaren en geç yedi gün içinde noter aracılığıyla bildirmek zorundadır',
      correctPhrase: 'uygun bir süre içinde bildirmek zorundadır',
      explanation: 'TBK m. 223: Adi taşınır satışında 7 günlük katı bir süre veya noter şartı yoktur; işin niteliğine göre uygun süre içinde bildirim yeterlidir.'
    }
  },
  {
    id: 'rule-tbk-kira-artis-siniri-p8',
    branch: 'Borçlar',
    subTopic: 'Konut ve Çatılı İşyeri Kiralarında Artış Tavanı',
    articleRef: 'TBK M. 344',
    trueStatement:
      'Tarafların yenilenen kira dönemlerinde uygulanacak kira bedeline ilişkin anlaşmaları, bir önceki kira yılında tüketici fiyat endeksindeki on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla geçerlidir.',
    trueHighlight: ['tüketici fiyat endeksindeki on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla'],
    trueCorrectPhrase: 'Kira artış tavanı bir önceki yılın TÜFE 12 aylık ortalamasıdır.',
    baseExplanation: 'TBK m. 344/1: Konut ve çatılı işyeri kiralarında taraflarca kararlaştırılan artış oranı TÜFE 12 aylık ortalamalarını aşamaz; aşan kısım geçersizdir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tüketici fiyat endeksindeki on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla',
      wrongPhrase: 'yurt içi üretici fiyat endeksindeki yıllık artış oranını geçmemek koşuluyla',
      correctPhrase: 'tüketici fiyat endeksindeki on iki aylık ortalamalara göre değişim oranını geçmemek koşuluyla',
      explanation: 'TBK m. 344: Kanunda üst sınır ÜFE değil, TÜFE’nin on iki aylık ortalamasıdır.'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'on iki aylık ortalamalara göre değişim oranını',
      wrongPhrase: 'en yüksek aylık artış oranını',
      correctPhrase: 'on iki aylık ortalamalara göre değişim oranını',
      explanation: 'TBK m. 344: TÜFE’nin bir önceki ayındaki oranı değil, kanunen 12 aylık ortalamalara göre değişim oranı esas alınır.'
    }
  },
  {
    id: 'rule-tbk-kiraya-veren-gereksinim-tahliye-p8',
    branch: 'Borçlar',
    subTopic: 'Gereksinim Sebebiyle Tahliye Davası Açma Süresi',
    articleRef: 'TBK M. 350',
    trueStatement:
      'Kiraya veren, kendisi veya kanunda sayılan yakınlarının konut veya işyeri gereksinimi sebebiyle belirli süreli sözleşmelerde sürenin sonunda bir ay içinde açacağı dava ile kira sözleşmesini sona erdirebilir.',
    trueHighlight: ['sürenin sonunda bir ay içinde açacağı dava ile', 'konut veya işyeri gereksinimi sebebiyle'],
    trueCorrectPhrase: 'İhtiyaç sebebiyle tahliye davası kira süresinin bitiminden itibaren 1 ay içinde açılmalıdır.',
    baseExplanation: 'TBK m. 350: Belirli süreli kira sözleşmelerinde gereksinim nedeniyle tahliye davası sözleşme süresinin bitiminden itibaren 1 ay içinde Sulh Hukuk Mahkemesinde açılmalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sürenin sonunda bir ay içinde açacağı dava ile',
      wrongPhrase: 'sürenin bitiminden önce altı ay içinde kiracıya çekeceği bir ihtar ile',
      correctPhrase: 'sürenin sonunda bir ay içinde açacağı dava ile',
      explanation: 'TBK m. 350: Tahliye ancak mahkemede açılacak dava ile sağlanabilir ve süre bitiminden itibaren 1 ay içinde açılmalıdır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'açacağı dava ile',
      wrongPhrase: 'belediye zabıtasına başvurarak tahliye ettirmek suretiyle',
      correctPhrase: 'açacağı dava ile',
      explanation: 'TBK m. 350: Tahliye idari yollarla değil, münhasıran Sulh Hukuk Mahkemesinde açılacak tahliye davası ile gerçekleştirilir.'
    }
  },
  {
    id: 'rule-tbk-tahliye-taahhudu-p8',
    branch: 'Borçlar',
    subTopic: 'Yazılı Tahliye Taahhüdünün Geçerliliği ve Takip Süresi',
    articleRef: 'TBK M. 352/1',
    trueStatement:
      'Kiracı, kiralananın teslim edilmesinden sonra kiraya verene karşı kiralananı belli bir tarihte boşaltmayı yazılı olarak üstlendiği hâlde boşaltmamışsa, kiraya veren bu tarihten başlayarak bir ay içinde icraya başvurmak veya dava açmak suretiyle kira sözleşmesini sona erdirebilir.',
    trueHighlight: ['kiralananın teslim edilmesinden sonra', 'bir ay içinde icraya başvurmak veya dava açmak suretiyle'],
    trueCorrectPhrase: 'Tahliye taahhüdü teslimden sonra verilmeli ve taahhüt tarihinden itibaren 1 ay içinde takibe konmalıdır.',
    baseExplanation: 'TBK m. 352/1: Tahliye taahhüdünün geçerli olması için kiralananın tesliminden sonra verilmesi şarttır. Kiraya veren taahhüt edilen tarihten itibaren 1 ay içinde icraya başvurmalı veya dava açmalıdır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kiralananın teslim edilmesinden sonra',
      wrongPhrase: 'kira sözleşmesi imzalanırken veya kiralanan teslim edilmeden önce',
      correctPhrase: 'kiralananın teslim edilmesinden sonra',
      explanation: 'TBK m. 352/1 ve Yargıtay İçtihatları: Kira sözleşmesiyle aynı anda veya teslimden önce alınan tahliye taahhütleri müzayaka altında verildiği karinesiyle geçersizdir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir ay içinde icraya başvurmak veya dava açmak suretiyle',
      wrongPhrase: 'bir yıl içinde yalnızca sulh hukuk mahkemesinde dava açmak suretiyle',
      correctPhrase: 'bir ay içinde icraya başvurmak veya dava açmak suretiyle',
      explanation: 'TBK m. 352/1: Hak düşürücü süre 1 yıldır değil 1 aydır; ayrıca kiraya veren icra takibi (tahliye emri) yoluna da başvurabilir.'
    }
  },
  {
    id: 'rule-tbk-kefalet-sekil-es-rizasi-p8',
    branch: 'Borçlar',
    subTopic: 'Kefalet Sözleşmesinde Şekil ve Eşin Rızası',
    articleRef: 'TBK M. 583 & 584',
    trueStatement:
      'Kefalet sözleşmesinin geçerli olması için kefilin sorumlu olacağı azamî miktarın ve kefalet tarihinin kefilin kendi el yazısıyla belirtilmesi zorunludur; evli kimselerde kural olarak eşin sözleşmeden önce veya en geç imza anında yazılı rızası gerekir.',
    trueHighlight: ['kefilin kendi el yazısıyla belirtilmesi zorunludur', 'en geç imza anında yazılı rızası gerekir'],
    trueCorrectPhrase: 'Kefalette azami miktar ve tarih el yazısıyla yazılmalı; eş rızası en geç imza anında verilmelidir.',
    baseExplanation: 'TBK m. 583 ve m. 584: Kefilin sorumlu olacağı azami miktar ile kefalet tarihi kefilin el yazısıyla yazılmalıdır. Eşin rızası ise en geç sözleşmenin kurulması anına kadar yazılı olarak verilmelidir, sonradan icazet verilemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kefilin kendi el yazısıyla belirtilmesi zorunludur',
      wrongPhrase: 'sözleşme metninde basılı bulunması ve kefilin yalnızca imza atması yeterlidir',
      correctPhrase: 'kefilin kendi el yazısıyla belirtilmesi zorunludur',
      explanation: 'TBK m. 583: Azami miktar ve tarihin basılı/matbu olması sözleşmeyi kesin olarak geçersiz kılar; el yazısıyla yazılması zorunludur.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç imza anında yazılı rızası gerekir',
      wrongPhrase: 'sözleşmenin kurulmasından sonraki bir ay içinde yazılı onay verilmesi yeterlidir',
      correctPhrase: 'en geç imza anında yazılı rızası gerekir',
      explanation: 'TBK m. 584: Eşin rızası sözleşmeden önce veya en geç imza anında verilmelidir; sonradan verilen icazet kefaleti geçerli kılmaz.'
    }
  },
  {
    id: 'rule-tbk-olunceye-kadar-bakma-p8',
    branch: 'Borçlar',
    subTopic: 'Ölünceye Kadar Bakma Sözleşmesinin Şekli',
    articleRef: 'TBK M. 604 & 605',
    trueStatement:
      'Ölünceye kadar bakma sözleşmesi, mirasçı atama sözleşmesi biçiminde yapılmadıkça geçerli olmaz; sözleşmenin resmi memur önünde iki tanığın katılımıyla resmî şekilde düzenlenmesi zorunludur.',
    trueHighlight: ['mirasçı atama sözleşmesi biçiminde yapılmadıkça geçerli olmaz', 'iki tanığın katılımıyla resmî şekilde düzenlenmesi zorunludur'],
    trueCorrectPhrase: 'Ölünceye kadar bakma sözleşmesi resmi memur önünde iki tanıkla resmi şekilde yapılmalıdır.',
    baseExplanation: 'TBK m. 605: Ölünceye kadar bakma sözleşmesi mirasçı atama sözleşmesi şeklinde (resmi vasiyetname usulüyle) yapılmalıdır. Resmi memur ve iki tanık zorunludur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'iki tanığın katılımıyla resmî şekilde düzenlenmesi zorunludur',
      wrongPhrase: 'tarafların ve bir tanığın adi yazılı belgeyi imzalamaları yeterlidir',
      correctPhrase: 'iki tanığın katılımıyla resmî şekilde düzenlenmesi zorunludur',
      explanation: 'TBK m. 605: Ölünceye kadar bakma sözleşmesinde adi yazılı şekil geçerlilik doğurmaz; resmi memur ve iki tanık şarttır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mirasçı atama sözleşmesi biçiminde yapılmadıkça geçerli olmaz',
      wrongPhrase: 'bağışlama vaadi sözleşmesi biçiminde yapılmadıkça geçerli olmaz',
      correctPhrase: 'mirasçı atama sözleşmesi biçiminde yapılmadıkça geçerli olmaz',
      explanation: 'TBK m. 605: Kanun koyucu ölünceye kadar bakma sözleşmesinin mirasçı atama sözleşmesi şeklinde düzenlenmesini emretmiştir.'
    }
  },

  // =========================================================================
  // HMK (MEDENİ USUL HUKUKU - 6100 SAYILI KANUN)
  // =========================================================================
  {
    id: 'rule-hmk-delil-sozlesmesi-p8',
    branch: 'HMK',
    subTopic: 'Delil Sözleşmesi ve Geçersizlik Halleri',
    articleRef: 'HMK M. 193',
    trueStatement:
      'Taraflar, kanunda belirli bir delille ispatı öngörülen hususların başka bir delille de ispat olunabileceğini delil sözleşmesiyle kararlaştırabilirler; ancak taraflardan birinin ispat hakkını kullanımını imkânsız kılan veya fevkalade güçleştiren delil sözleşmeleri hükümsüzdür.',
    trueHighlight: ['delil sözleşmesiyle kararlaştırabilirler', 'fevkalade güçleştiren delil sözleşmeleri hükümsüzdür'],
    trueCorrectPhrase: 'Delil sözleşmesi yapılabilir; ancak ispatı imkânsız kılan veya aşırı güçleştiren şartlar geçersizdir.',
    baseExplanation: 'HMK m. 193: Delil sözleşmesi yazılı veya duruşmada tutanağa geçirilerek yapılır. Ancak bir tarafın ispat hakkını imkansız kılan veya fevkalade güçleştiren delil sözleşmeleri geçersizdir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'fevkalade güçleştiren delil sözleşmeleri hükümsüzdür',
      wrongPhrase: 'fevkalade güçleştiren delil sözleşmeleri dahi sözleşme serbestisi gereğince geçerlidir',
      correctPhrase: 'fevkalade güçleştiren delil sözleşmeleri hükümsüzdür',
      explanation: 'HMK m. 193/2: Taraflardan birinin ispat hakkını imkansız kılan veya fevkalade güçleştiren delil sözleşmesi hükümleri batıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'delil sözleşmesiyle kararlaştırabilirler',
      wrongPhrase: 'sözlü bir mutabakat ile her zaman mahkeme dışında kararlaştırabilirler',
      correctPhrase: 'delil sözleşmesiyle kararlaştırabilirler',
      explanation: 'HMK m. 193/1: Delil sözleşmesinin yazılı yapılması veya duruşmada tutanağa geçirilerek imzalanması zorunludur.'
    }
  },
  {
    id: 'rule-hmk-bilirkisi-raporuna-itiraz-p8',
    branch: 'HMK',
    subTopic: 'Bilirkişi Raporuna İtiraz Süresi ve Ek Süre',
    articleRef: 'HMK M. 281',
    trueStatement:
      'Taraflar, bilirkişi raporunun kendilerine tebliği tarihinden itibaren iki hafta içinde raporda eksik veya belirsiz gördükleri hususların açıklanmasını mahkemeden isteyebilirler; mahkeme zorunlu hâllerde bu süreyi bir defaya mahsus olmak üzere iki haftayı geçmemek üzere uzatabilir.',
    trueHighlight: ['iki hafta içinde', 'bir defaya mahsus olmak üzere iki haftayı geçmemek üzere uzatabilir'],
    trueCorrectPhrase: 'Bilirkişi raporuna itiraz süresi 2 haftadır; mahkeme bir defaya mahsus en fazla 2 hafta uzatabilir.',
    baseExplanation: 'HMK m. 281: Bilirkişi raporuna itiraz tebliğden itibaren 2 haftadır. Mahkeme talep üzerine bir defaya mahsus en çok 2 haftalık ek süre verebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki hafta içinde',
      wrongPhrase: 'on gün içinde',
      correctPhrase: 'iki hafta içinde',
      explanation: 'HMK m. 281/1: Bilirkişi raporuna itiraz süresi 10 gün değil, 2 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir defaya mahsus olmak üzere iki haftayı geçmemek üzere uzatabilir',
      wrongPhrase: 'dilediği kadar ve en fazla üç ay uzatabilir',
      correctPhrase: 'bir defaya mahsus olmak üzere iki haftayı geçmemek üzere uzatabilir',
      explanation: 'HMK m. 281/1: Ek süre bir defaya mahsustur ve 2 haftayı geçemez.'
    }
  },
  {
    id: 'rule-hmk-ihtiyati-tedbir-sureler-p8',
    branch: 'HMK',
    subTopic: 'İhtiyati Tedbirin Uygulanması ve Tamamlayıcı Dava Süresi',
    articleRef: 'HMK M. 393 & 397',
    trueStatement:
      'İhtiyati tedbir kararı alan taraf, bu kararın verildiği tarihten itibaren bir hafta içinde kararın uygulanmasını talep etmek zorundadır; dava açılmasından önce tedbir kararı verilmişse tedbir talep eden taraf iki hafta içinde esas hakkındaki davasını açmak zorundadır.',
    trueHighlight: ['bir hafta içinde kararın uygulanmasını talep etmek zorundadır', 'iki hafta içinde esas hakkındaki davasını açmak zorundadır'],
    trueCorrectPhrase: 'Tedbir kararının uygulanması 1 haftada istenmeli; dava açılmamışsa esas dava 2 haftada açılmalıdır.',
    baseExplanation: 'HMK m. 393 ve m. 397: Tedbir kararının icrası 1 hafta içinde talep edilmelidir. Dava açılmadan önce alınan tedbirlerde 2 hafta içinde esas dava açılmazsa tedbir kendiliğinden kalkar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir hafta içinde kararın uygulanmasını talep etmek zorundadır',
      wrongPhrase: 'otuz gün içinde kararın uygulanmasını talep etmek zorundadır',
      correctPhrase: 'bir hafta içinde kararın uygulanmasını talep etmek zorundadır',
      explanation: 'HMK m. 393/1: Tedbir kararının uygulanmasını talep süresi 30 gün değil, kararın verildiği tarihten itibaren 1 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki hafta içinde esas hakkındaki davasını açmak zorundadır',
      wrongPhrase: 'üç ay içinde esas hakkındaki davasını açmak zorundadır',
      correctPhrase: 'iki hafta içinde esas hakkındaki davasını açmak zorundadır',
      explanation: 'HMK m. 397/1: Dava açılmadan önce alınan ihtiyati tedbirde esas dava açma süresi 3 ay değil, 2 haftadır.'
    }
  },
  {
    id: 'rule-hmk-yargilamanin-iadesi-sureler-p8',
    branch: 'HMK',
    subTopic: 'Yargılamanın İadesi Davasında Hak Düşürücü Süreler',
    articleRef: 'HMK M. 377',
    trueStatement:
      'Yargılamanın iadesi süresi, davanın taraflarınca iade sebebinin öğrenildiği tarihten itibaren üç ay ve her hâlde iadeye konu olan hükmün kesinleşmesinden itibaren on yıldır.',
    trueHighlight: ['üç ay', 'hükmün kesinleşmesinden itibaren on yıldır'],
    trueCorrectPhrase: 'Yargılamanın iadesi süresi öğrenmeden itibaren 3 ay ve hükmün kesinleşmesinden itibaren 10 yıldır.',
    baseExplanation: 'HMK m. 377: Yargılamanın iadesi davası açma süresi kural olarak sebebin öğrenilmesinden itibaren 3 ay ve her halde hükmün kesinleşmesinden itibaren 10 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç ay',
      wrongPhrase: 'bir yıl',
      correctPhrase: 'üç ay',
      explanation: 'HMK m. 377/1: Öğrenmeden itibaren başlayan nispi süre 1 yıl değil, 3 aydır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hükmün kesinleşmesinden itibaren on yıldır',
      wrongPhrase: 'hükmün tebliğinden itibaren yirmi yıldır',
      correctPhrase: 'hükmün kesinleşmesinden itibaren on yıldır',
      explanation: 'HMK m. 377/1: Mutlak üst sınır tebliğden değil kesinleşmeden başlar ve 10 yıldır.'
    }
  },

  // =========================================================================
  // İİK (İCRA VE İFLAS HUKUKU - 2004 SAYILI KANUN)
  // =========================================================================
  {
    id: 'rule-iik-haline-munasip-ev-p8',
    branch: 'İcra',
    subTopic: 'Borçlunun Haline Münasip Evinin Haczedilmezliği',
    articleRef: 'İİK M. 82/1-B.12',
    trueStatement:
      'Borçlunun haline münasip evi haczedilemez; ancak evin değeri borçlunun haline münasip bir ev alması için gereken miktardan fazla ise ev satılarak borçlunun haline münasip ev alabileceği miktar kendisine bırakılır, artanı alacaklılara ödenir.',
    trueHighlight: ['Borçlunun haline münasip evi haczedilemez', 'borçlunun haline münasip ev alabileceği miktar kendisine bırakılır, artanı alacaklılara ödenir'],
    trueCorrectPhrase: 'Haline münasip ev haczedilemez; değer fazlaysa satılıp münasip bedel borçluya verilir.',
    baseExplanation: 'İİK m. 82/1 bent 12 (meskeniyet şikâyeti): Borçlunun haline münasip evi haczedilemez. Değeri yüksekse satılır, münasip ev bedeli borçluya ayrılıp kalan parayla borç ödenir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borçlunun haline münasip ev alabileceği miktar kendisine bırakılır, artanı alacaklılara ödenir',
      wrongPhrase: 'evin tamamı borçlunun mülkiyetinde kalır ve hiçbir surette paraya çevrilemez',
      correctPhrase: 'borçlunun haline münasip ev alabileceği miktar kendisine bırakılır, artanı alacaklılara ödenir',
      explanation: 'İİK m. 82/1-12: Evin lüks olması halinde satış yapılır ve haline münasip bedel borçluya terk edilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Borçlunun haline münasip evi haczedilemez',
      wrongPhrase: 'Borçlunun tek bir evi dahi bulunsa her türlü konut kayıtsız şartsız haczedilir',
      correctPhrase: 'Borçlunun haline münasip evi haczedilemez',
      explanation: 'İİK m. 82/1 bent 12 uyarınca meskeniyet iddiası borçluya tanınmış temel bir haczedilmezlik korumasıdır.'
    }
  },
  {
    id: 'rule-iik-89-ihbarname-sureler-p8',
    branch: 'İcra',
    subTopic: 'Üçüncü Kişilerdeki Alacakların Haczi (İİK 89)',
    articleRef: 'İİK M. 89',
    trueStatement:
      'Üçüncü şahsa gönderilen birinci haciz ihbarnamesine itiraz süresi tebliğden itibaren yedi gündür; üçüncü şahsın süresinde itiraz etmemesi üzerine gönderilen ikinci ihbarnameye de yedi günde itiraz edilmezse üçüncü ihbarname ile üçüncü şahsa on beş gün içinde menfi tespit davası açabileceği bildirilir.',
    trueHighlight: ['tebliğden itibaren yedi gündür', 'on beş gün içinde menfi tespit davası açabileceği bildirilir'],
    trueCorrectPhrase: '1. ve 2. haciz ihbarnamesine itiraz 7 gün; 3. ihbarnamede menfi tespit davası açma süresi 15 gündür.',
    baseExplanation: 'İİK m. 89: 1. ve 2. haciz ihbarnamesine itiraz süresi 7 gündür. İtiraz etmeyen üçüncü şahsa 3. ihbarname tebliğ edilir ve 15 gün içinde menfi tespit davası açma imkânı tanınır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğden itibaren yedi gündür',
      wrongPhrase: 'öğrenme tarihinden itibaren otuz gündür',
      correctPhrase: 'tebliğden itibaren yedi gündür',
      explanation: 'İİK m. 89/2: Haciz ihbarnamesine itiraz süresi 30 gün değil, tebliğden itibaren 7 gündür.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on beş gün içinde menfi tespit davası açabileceği bildirilir',
      wrongPhrase: 'altı ay içinde icra mahkemesine şikâyette bulunabileceği bildirilir',
      correctPhrase: 'on beş gün içinde menfi tespit davası açabileceği bildirilir',
      explanation: 'İİK m. 89/3: 3. haciz ihbarnamesine karşı menfi tespit davası açma süresi 15 gündür.'
    }
  },
  {
    id: 'rule-iik-satis-isteme-1-yil-p8',
    branch: 'İcra',
    subTopic: 'Hacizli Mallarda Satış İsteme Süresi (1 Yıl) ve Haczin Düşmesi',
    articleRef: 'İİK M. 106 & 110',
    trueStatement:
      'Alacaklı veya borçlu, hacizden itibaren bir yıl içinde haczolunan taşınır veya taşınmaz malın satışını isteyebilir; yasal süresi içinde satış istenmez veya gideri yatırılmazsa o mal üzerindeki haciz kalkar.',
    trueHighlight: ['hacizden itibaren bir yıl içinde', 'yasal süresi içinde satış istenmez veya gideri yatırılmazsa o mal üzerindeki haciz kalkar'],
    trueCorrectPhrase: 'Taşınır ve taşınmaz mallarda satış isteme süresi 1 yıldır; istenmezse haciz düşer.',
    baseExplanation: 'İİK m. 106 ve m. 110 (7343 s.K. değişikliği): Taşınır ve taşınmaz mallar için satış isteme süresi 1 yıl olarak eşitlenmiştir. Süresinde satış istenmezse haciz kalkar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hacizden itibaren bir yıl içinde',
      wrongPhrase: 'taşınırlarda altı ay ve taşınmazlarda iki yıl içinde',
      correctPhrase: 'hacizden itibaren bir yıl içinde',
      explanation: '7343 sayılı Kanun ile eski altı ay / iki yıl ayrımı kaldırılmış, hem taşınır hem taşınmazlar için satış isteme süresi 1 yıl yapılmıştır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Alacaklı veya borçlu',
      wrongPhrase: 'Yalnızca alacaklı satış isteyebilir borçlunun hiçbir surette satış isteme yetkisi bulunmaksızın',
      correctPhrase: 'Alacaklı veya borçlu',
      explanation: 'İİK m. 106/1: Hacizli malın satışını yalnızca alacaklı değil, borçlu da isteyebilir.'
    }
  },
  {
    id: 'rule-iik-konkordato-muhletler-p8',
    branch: 'İcra',
    subTopic: 'Konkordato Geçici ve Kesin Mühlet Süreleri',
    articleRef: 'İİK M. 287 & 289',
    trueStatement:
      'Konkordato talebi üzerine mahkeme borçluya derhâl üç aylık geçici mühlet verir ve bu mühlet en fazla iki ay daha uzatılabilir; konkordatonun başarıya ulaşabileceği anlaşılırsa borçluya bir yıllık kesin mühlet verilir ve güçlük içeren hâllerde bu kesin mühlet en fazla altı ay uzatılabilir.',
    trueHighlight: ['üç aylık geçici mühlet verir ve bu mühlet en fazla iki ay daha uzatılabilir', 'bir yıllık kesin mühlet verilir ve güçlük içeren hâllerde bu kesin mühlet en fazla altı ay uzatılabilir'],
    trueCorrectPhrase: 'Geçici mühlet 3 ay (+ en çok 2 ay); kesin mühlet 1 yıl (+ en çok 6 ay) olarak verilebilir.',
    baseExplanation: 'İİK m. 287 ve m. 289: Geçici mühlet 3 aydır (en çok 2 ay uzatılabilir, toplam azami 5 ay). Kesin mühlet 1 yıldır (güçlük halinde en çok 6 ay uzatılabilir, toplam azami 1,5 yıl).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç aylık geçici mühlet verir ve bu mühlet en fazla iki ay daha uzatılabilir',
      wrongPhrase: 'altı aylık geçici mühlet verir ve bu mühlet en fazla bir yıl daha uzatılabilir',
      correctPhrase: 'üç aylık geçici mühlet verir ve bu mühlet en fazla iki ay daha uzatılabilir',
      explanation: 'İİK m. 287/1: Geçici mühlet süresi 3 aydır ve uzatma süresi en fazla 2 aydır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yıllık kesin mühlet verilir ve güçlük içeren hâllerde bu kesin mühlet en fazla altı ay uzatılabilir',
      wrongPhrase: 'iki yıllık kesin mühlet verilir ve hiçbir şekilde uzatma kararı verilemez',
      correctPhrase: 'bir yıllık kesin mühlet verilir ve güçlük içeren hâllerde bu kesin mühlet en fazla altı ay uzatılabilir',
      explanation: 'İİK m. 289: Kesin mühlet 1 yıl olup güçlük halinde en çok 6 ay uzatılabilir.'
    }
  },

  // =========================================================================
  // İYUK & İDARE HUKUKU (2577 SAYILI KANUN & 657 SAYILI DMK)
  // =========================================================================
  {
    id: 'rule-iyuk-ust-makama-basvuru-p8',
    branch: 'İYUK',
    subTopic: 'İdari İşleme Karşı Üst Makama Başvuru (İhtiyari İtiraz)',
    articleRef: 'İYUK M. 11',
    trueStatement:
      'İlgililer tarafından idari dava açılmadan önce idari işlemin kaldırılması, geri alınması veya değiştirilmesi üst makamdan dava açma süresi içinde istenebilir; bu başvuru işlemeye başlamış olan dava açma süresini durdurur ve otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır.',
    trueHighlight: ['dava açma süresini durdurur', 'otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır'],
    trueCorrectPhrase: 'Üst makama başvuru süreyi durdurur; 30 günde cevap verilmezse istek zımnen reddedilmiş sayılır.',
    baseExplanation: 'İYUK m. 11 (7331 s.K. değişikliği): İdari işlemin kaldırılması veya değiştirilmesi üst makamdan istenebilir. Başvuru süreyi durdurur. İdarenin cevap süresi 30 gündür (eski 60 gün 30 güne indirilmiştir).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır',
      wrongPhrase: 'altmış gün içinde bir cevap verilmezse istek reddedilmiş sayılır',
      correctPhrase: 'otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır',
      explanation: '7331 sayılı Kanun ile İYUK m. 10 ve m. 11’deki zımni ret süresi 60 günden 30 güne düşürülmüştür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'dava açma süresini durdurur',
      wrongPhrase: 'dava açma süresini keser ve süre sıfırdan baştan başlar',
      correctPhrase: 'dava açma süresini durdurur',
      explanation: 'İYUK m. 11/2: Üst makama başvuru süreyi KESMEZ, DURDURUR; cevap verildiğinde veya 30 gün dolduğunda süre kaldığı yerden işlemeye devam eder.'
    }
  },
  {
    id: 'rule-iyuk-yurutmenin-durdurulmasi-p8',
    branch: 'İYUK',
    subTopic: 'Yürütmenin Durdurulması Kararı Verme Koşulları',
    articleRef: 'İYUK M. 27/2',
    trueStatement:
      'Danıştay veya idari mahkemeler, idari işlemin uygulanması hâlinde telafisi güç veya imkânsız zararların doğması ve idari işlemin açıkça hukuka aykırı olması şartlarının birlikte gerçekleşmesi durumunda gerekçe göstererek yürütmenin durdurulmasına karar verebilirler.',
    trueHighlight: ['şartlarının birlikte gerçekleşmesi durumunda', 'gerekçe göstererek yürütmenin durdurulmasına karar verebilirler'],
    trueCorrectPhrase: 'Yürütmenin durdurulması için telafisi güç zarar ve açıkça hukuka aykırılık şartları birlikte aranır.',
    baseExplanation: 'İYUK m. 27/2: Yürütmenin durdurulması kararı verilebilmesi için telafisi güç veya imkansız zarar ile açıkça hukuka aykırılık koşullarının bir arada (kümülatif) bulunması zorunludur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'şartlarının birlikte gerçekleşmesi durumunda',
      wrongPhrase: 'şartlarından herhangi birinin gerçekleşmesi durumunda diğerine bakılmaksızın',
      correctPhrase: 'şartlarının birlikte gerçekleşmesi durumunda',
      explanation: 'İYUK m. 27/2: İki şart alternatif değil, kümülatiftir; tek bir şartın varlığı yürütmenin durdurulması için yeterli değildir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'gerekçe göstererek yürütmenin durdurulmasına karar verebilirler',
      wrongPhrase: 'hiçbir gerekçe belirtme zorunluluğu olmaksızın tensip zaptıyla doğrudan karar verebilirler',
      correctPhrase: 'gerekçe göstererek yürütmenin durdurulmasına karar verebilirler',
      explanation: 'İYUK m. 27/2: Yürütmenin durdurulması kararlarında hangi gerekçelerle açık hukuka aykırılık ve telafisi güç zarar doğduğunun belirtilmesi emredici kuraldır.'
    }
  },
  {
    id: 'rule-iyuk-kararlarin-uygulanmasi-30-gun-p8',
    branch: 'İYUK',
    subTopic: 'İdari Yargı Kararlarının Uygulanması Azami Süresi',
    articleRef: 'İYUK M. 28/1',
    trueStatement:
      'Danıştay, bölge idare mahkemeleri, idare ve vergi mahkemelerinin esasa ve yürütmenin durdurulmasına ilişkin kararlarının icaplarına göre idare, gecikmeksizin işlem tesis etmeye veya eylemde bulunmaya mecburdur; bu süre hiçbir şekilde kararın idareye tebliğinden itibaren otuz günü geçemez.',
    trueHighlight: ['bu süre hiçbir şekilde kararın idareye tebliğinden itibaren otuz günü geçemez', 'esasa ve yürütmenin durdurulmasına ilişkin kararlarının'],
    trueCorrectPhrase: 'İdare, esasa ve yürütmenin durdurulmasına ilişkin yargı kararlarını en geç 30 günde uygulamak zorundadır.',
    baseExplanation: 'İYUK m. 28/1: İdare mahkeme kararlarının gereğini gecikmeksizin yerine getirmek zorundadır. Bu süre tebliğden itibaren hiçbir koşulda 30 günü aşamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu süre hiçbir şekilde kararın idareye tebliğinden itibaren otuz günü geçemez',
      wrongPhrase: 'bu süre idarenin bütçe ve personel durumuna göre altmış günü geçemez',
      correctPhrase: 'bu süre hiçbir şekilde kararın idareye tebliğinden itibaren otuz günü geçemez',
      explanation: 'İYUK m. 28/1: İdari yargı kararlarını uygulama süresi kesin ve üst sınır olarak 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'esasa ve yürütmenin durdurulmasına ilişkin kararlarının',
      wrongPhrase: 'yalnızca kesinleşmiş ve temyiz incelemesinden geçmiş nihai kararlarının',
      correctPhrase: 'esasa ve yürütmenin durdurulmasına ilişkin kararlarının',
      explanation: 'İYUK m. 28/1: Kararların uygulanması için kesinleşmesi şart değildir; ilk derece mahkemesinin esasa ve yürütmenin durdurulmasına ilişkin kararları tebliğle derhal uygulanır.'
    }
  },
  {
    id: 'rule-dmk-hafif-ceza-p8',
    branch: 'İdare',
    subTopic: 'Devlet Memurlarında Bir Derece Hafif Disiplin Cezası',
    articleRef: '657 DMK M. 125/3',
    trueStatement:
      'Geçmiş hizmetleri sırasındaki çalışmaları olumlu olan ve ödül veya başarı belgesi alan memurlar için verilecek cezalarda bir derece hafif olanı uygulanabilir; ancak Devlet memurluğundan çıkarma cezasında bir derece hafif olan ceza kademe ilerlemesinin durdurulmasıdır.',
    trueHighlight: ['bir derece hafif olanı uygulanabilir', 'bir derece hafif olan ceza kademe ilerlemesinin durdurulmasıdır'],
    trueCorrectPhrase: 'Çalışmaları olumlu memura bir derece hafif ceza verilebilir; memurluktan çıkarmanın hafifi kademe durdurmadır.',
    baseExplanation: '657 DMK m. 125/3: Disiplin cezalarında takdir hakkı kapsamında bir derece hafif ceza uygulanabilir. Memurluktan çıkarmanın bir derece hafifi kademe ilerlemesinin durdurulması cezasıdır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'bir derece hafif olanı uygulanabilir',
      wrongPhrase: 'disiplin cezası zorunlu olarak tamamen ortadan kaldırılır ve disiplin amirince affedilir',
      correctPhrase: 'bir derece hafif olanı uygulanabilir',
      explanation: '657 DMK m. 125/3: Geçmiş hizmetin olumlu olması cezayı tamamen kaldırmaz, yalnızca bir derece hafif ceza uygulanmasına imkân verir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bir derece hafif olan ceza kademe ilerlemesinin durdurulmasıdır',
      wrongPhrase: 'bir derece hafif olan ceza doğrudan aylıktan kesme cezasıdır',
      correctPhrase: 'bir derece hafif olan ceza kademe ilerlemesinin durdurulmasıdır',
      explanation: '657 DMK m. 125/3 uyarınca ceza sırası: Uyarma -> Kınama -> Aylıktan Kesme -> Kademe İlerlemesinin Durdurulması -> Memurluktan Çıkarma şeklindedir; çıkarmanın bir derece hafifi kademe durdurmadır.'
    }
  },
  {
    id: 'rule-dmk-disiplin-zamanasimi-p8',
    branch: 'İdare',
    subTopic: 'Devlet Memurlarında Disiplin Soruşturması ve Ceza Zamanaşımı',
    articleRef: '657 DMK M. 127',
    trueStatement:
      'Devlet memurluğundan çıkarma cezasında altı ay, diğer disiplin cezalarında bir ay içinde disiplin soruşturmasına başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; disiplin cezasını gerektiren fiil ve hâllerin işlendiği tarihten itibaren iki yıl geçmişse ceza verilemez.',
    trueHighlight: ['altı ay, diğer disiplin cezalarında bir ay', 'iki yıl geçmişse ceza verilemez'],
    trueCorrectPhrase: 'Soruşturmaya başlama süresi 1 ay (çıkarmada 6 ay); mutlak ceza verme zamanaşımı fiilden itibaren 2 yıldır.',
    baseExplanation: '657 DMK m. 127: Öğrenilmesinden itibaren soruşturmaya başlama süresi memurluktan çıkarmada 6 ay, diğer cezalarda 1 aydır. Fiilin işlendiği tarihten itibaren 2 yıl içinde ceza verilmezse yetki zamanaşımına uğrar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıl geçmişse ceza verilemez',
      wrongPhrase: 'fiilin işlendiği tarihten itibaren beş yıl geçmişse ceza verilemez',
      correctPhrase: 'iki yıl geçmişse ceza verilemez',
      explanation: '657 DMK m. 127: Disiplin cezasında mutlak zamanaşımı süresi fiilin işlenmesinden itibaren 5 yıl değil, 2 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı ay, diğer disiplin cezalarında bir ay',
      wrongPhrase: 'bir yıl, diğer disiplin cezalarında altı ay',
      correctPhrase: 'altı ay, diğer disiplin cezalarında bir ay',
      explanation: '657 DMK m. 127: Soruşturmaya başlama zamanaşımı diğer cezalarda öğrenmeden itibaren 1 aydır, 6 ay değildir.'
    }
  },

  // =========================================================================
  // ANAYASA HUKUKU (1982 ANAYASASI)
  // =========================================================================
  {
    id: 'rule-anayasa-bireysel-basvuru-p8',
    branch: 'Anayasa',
    subTopic: 'Anayasa Mahkemesine Bireysel Başvuru Koşulları ve Süresi',
    articleRef: 'ANAYASA M. 148',
    trueStatement:
      'Herkes, Anayasada güvence altına alınmış temel hak ve özgürlüklerinden Avrupa İnsan Hakları Sözleşmesi kapsamındaki herhangi birinin kamu gücü tarafından ihlal edildiği iddiasıyla Anayasa Mahkemesine başvurabilir; bireysel başvuru için olağan kanun yollarının tüketilmiş olması ve kararın kesinleşmesinden itibaren otuz gün içinde yapılması şarttır.',
    trueHighlight: ['Avrupa İnsan Hakları Sözleşmesi kapsamındaki herhangi birinin', 'kararın kesinleşmesinden itibaren otuz gün içinde yapılması şarttır'],
    trueCorrectPhrase: 'Bireysel başvuru AİHS ve Anayasa ortak alanındaki haklar için 30 gün içinde yapılır.',
    baseExplanation: 'Anayasa m. 148/3 ve 6216 s.K. m. 45-47: Bireysel başvuru konusu hak hem Anayasada hem AİHS/ek protokollerde ortak olmalıdır. Başvuru süresi kanun yollarının tüketildiği tarihten itibaren 30 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kararın kesinleşmesinden itibaren otuz gün içinde yapılması şarttır',
      wrongPhrase: 'kararın tebliğinden itibaren altmış gün içinde yapılması şarttır',
      correctPhrase: 'kararın kesinleşmesinden itibaren otuz gün içinde yapılması şarttır',
      explanation: '6216 sayılı Kanun m. 47/5: AYM’ye bireysel başvuru süresi 60 gün değil, 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Avrupa İnsan Hakları Sözleşmesi kapsamındaki herhangi birinin',
      wrongPhrase: 'kanunlarda düzenlenen herhangi bir usul kuralının veya kanun maddesinin',
      correctPhrase: 'Avrupa İnsan Hakları Sözleşmesi kapsamındaki herhangi birinin',
      explanation: 'Anayasa m. 148/3: Her türlü yasa kuralı bireysel başvuruya konu olamaz; Anayasa ile AİHS’in ortak koruma alanındaki temel hak ihlalleri konu olabilir.'
    }
  },
  {
    id: 'rule-anayasa-iptal-davasi-60-gun-p8',
    branch: 'Anayasa',
    subTopic: 'Soyut Norm Denetimi (İptal Davası) Açma Süresi',
    articleRef: 'ANAYASA M. 151',
    trueStatement:
      'Anayasa Mahkemesinde doğrudan doğruya iptal davası açma hakkı, iptali istenen kanun, Cumhurbaşkanlığı kararnamesi veya TBMM İçtüzüğünün Resmî Gazetede yayımlanmasından başlayarak altmış gün sonra düşer.',
    trueHighlight: ['Resmî Gazetede yayımlanmasından başlayarak altmış gün sonra düşer'],
    trueCorrectPhrase: 'AYM iptal davası açma süresi Resmi Gazetede yayımdan itibaren 60 gündür.',
    baseExplanation: 'Anayasa m. 151: Kanunlar, Cumhurbaşkanlığı kararnameleri ve TBMM İçtüzüğünün şekil ve esas bakımından iptali davası Resmî Gazetede yayımlanmasından başlayarak 60 gün içinde açılmalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altmış gün sonra düşer',
      wrongPhrase: 'otuz gün sonra düşer',
      correctPhrase: 'altmış gün sonra düşer',
      explanation: 'Anayasa m. 151: İptal davası açma süresi 30 gün değil, 60 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Resmî Gazetede yayımlanmasından başlayarak',
      wrongPhrase: 'kanunun TBMM Genel Kurulunca kabul edildiği tarihten başlayarak',
      correctPhrase: 'Resmî Gazetede yayımlanmasından başlayarak',
      explanation: 'Anayasa m. 151: 60 günlük dava açma süresi Meclis kabulünden değil, Resmî Gazetede yayımlanma gününden başlar.'
    }
  },
  {
    id: 'rule-anayasa-somut-norm-denetimi-p8',
    branch: 'Anayasa',
    subTopic: 'Somut Norm Denetimi (İtiraz Yolu) Süreleri ve 10 Yıl Yasağı',
    articleRef: 'ANAYASA M. 152',
    trueStatement:
      'Bir davaya bakmakta olan mahkeme uygulanacak kanun hükmünü Anayasaya aykırı görürse Anayasa Mahkemesine başvurur; AYM beş ay içinde kararını vermezse mahkeme davayı yürürlükteki kanuna göre sonuçlandırır; AYM’nin işin esasına girerek verdiği ret kararının Resmî Gazetede yayımlanmasından başlayarak on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvurulamaz.',
    trueHighlight: ['beş ay içinde kararını vermezse', 'on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvurulamaz'],
    trueCorrectPhrase: 'İtiraz yolunda AYM bekleme süresi 5 aydır; esastan ret halinde 10 yıl tekrar başvurulamaz.',
    baseExplanation: 'Anayasa m. 152: Mahkeme AYM kararını 5 ay bekler; karar gelmezse davayı mevcut kanunla çözer. Esastan ret kararının yayımından itibaren 10 yıl geçmedikçe aynı kanun maddesi için itiraz yoluna başvurulamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvurulamaz',
      wrongPhrase: 'iki yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvurulamaz',
      correctPhrase: 'on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvurulamaz',
      explanation: 'Anayasa m. 152/son: AYM’nin esastan ret kararından sonra aynı kural için bekleme süresi 2 yıl değil, 10 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş ay içinde kararını vermezse',
      wrongPhrase: 'otuz gün içinde kararını vermezse',
      correctPhrase: 'beş ay içinde kararını vermezse',
      explanation: 'Anayasa m. 152/3: Mahkemenin AYM’yi bekleme süresi 30 gün değil, başvuru dosyasının AYM’ye ulaşmasından itibaren 5 aydır.'
    }
  },

  // =========================================================================
  // CEZA & CEZA MUHAKEMESİ HUKUKU (TCK & CMK)
  // =========================================================================
  {
    id: 'rule-tck-iradi-alkol-sorumluluk-p8',
    branch: 'TCK',
    subTopic: 'Geçici Nedenler, İrade Dışı ve İradi Alkol Etkisinde Ceza Sorumluluğu',
    articleRef: 'TCK M. 34',
    trueStatement:
      'Geçici bir nedenle ya da irade dışı alınan alkol veya uyuşturucu madde etkisiyle fiilin hukuki anlam ve sonuçlarını algılayamayan kişiye ceza verilmez; ancak iradi olarak alınan alkol veya uyuşturucu madde etkisinde suç işleyen kişi hakkında ceza sorumluluğu tamdır.',
    trueHighlight: ['irade dışı alınan alkol veya uyuşturucu madde etkisiyle', 'ceza sorumluluğu tamdır'],
    trueCorrectPhrase: 'İrade dışı alkol etkisinde ceza verilmez; iradi alkol alarak suç işleyenin ceza sorumluluğu tamdır.',
    baseExplanation: 'TCK m. 34: İrade dışı (zorla/farkında olmadan) alkol veya uyuşturucu alımında kusur bulunmadığından ceza verilmez. Ancak fail kendi iradesiyle alkol/uyuşturucu almışsa kusur yeteneği tam kabul edilir (actio libera in causa).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ceza sorumluluğu tamdır',
      wrongPhrase: 'iradi alkol alan failin cezası da ceza ehliyeti zayıfladığından zorunlu olarak yarı oranında indirilir',
      correctPhrase: 'ceza sorumluluğu tamdır',
      explanation: 'TCK m. 34/2: İradi olarak alınan alkol veya uyuşturucu madde etkisinde suç işleyen kişi hiçbir ceza indiriminden yararlanamaz; ceza sorumluluğu tamdır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'irade dışı alınan alkol veya uyuşturucu madde etkisiyle',
      wrongPhrase: 'kendi isteğiyle keyfi olarak alkol veya uyuşturucu madde tüketmesiyle',
      correctPhrase: 'irade dışı alınan alkol veya uyuşturucu madde etkisiyle',
      explanation: 'TCK m. 34/1: Cezasızlık yalnızca geçici nedenler veya irade dışı (kusursuz) alınan maddeler için geçerlidir.'
    }
  },
  {
    id: 'rule-tck-sikayet-suresi-p8',
    branch: 'TCK',
    subTopic: 'Soruşturulması Şikâyete Bağlı Suçlarda Şikâyet Süresi',
    articleRef: 'TCK M. 73',
    trueStatement:
      'Soruşturulması ve kovuşturulması şikâyete bağlı olan suçlarda yetkili kimse altı ay içinde şikâyette bulunmadığı takdirde soruşturma ve kovuşturma yapılamaz; bu süre, hak sahibinin fiili ve failin kim olduğunu bildiği veya öğrendiği günden başlar.',
    trueHighlight: ['altı ay içinde şikâyette bulunmadığı takdirde', 'fiili ve failin kim olduğunu bildiği veya öğrendiği günden başlar'],
    trueCorrectPhrase: 'Şikâyet süresi 6 aydır; fail ve fiilin ikisinin birden öğrenilmesinden itibaren işlemeye başlar.',
    baseExplanation: 'TCK m. 73: Şikâyet süresi hak düşürücü nitelikte olup 6 aydır. Süre hem fiilin hem de failin kim olduğunun öğrenildiği andan itibaren başlar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı ay içinde şikâyette bulunmadığı takdirde',
      wrongPhrase: 'bir ay içinde şikâyette bulunmadığı takdirde',
      correctPhrase: 'altı ay içinde şikâyette bulunmadığı takdirde',
      explanation: 'TCK m. 73/1: Şikâyet süresi 1 ay değil, 6 aydır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'fiili ve failin kim olduğunu bildiği veya öğrendiği günden başlar',
      wrongPhrase: 'failin kimliği bilinmese dahi münhasıran suçun işlendiği tarihten başlar',
      correctPhrase: 'fiili ve failin kim olduğunu bildiği veya öğrendiği günden başlar',
      explanation: 'TCK m. 73/2: Şikâyet süresinin başlayabilmesi için hem suç fiilinin hem de failin kim olduğunun bilinmesi/öğrenilmesi gerekir.'
    }
  },
  {
    id: 'rule-cmk-agir-ceza-tutukluluk-p8',
    branch: 'CMK',
    subTopic: 'Ağır Ceza Mahkemesinin Görevinde Tutukluluk Süreleri',
    articleRef: 'CMK M. 102',
    trueStatement:
      'Ağır ceza mahkemesinin görevine giren işlerde tutukluluk süresi en çok iki yıldır; bu süre zorunlu hâllerde gerekçesi gösterilerek uzatılabilir; uzatma süresi toplam üç yılı geçemez.',
    trueHighlight: ['en çok iki yıldır', 'uzatma süresi toplam üç yılı geçemez'],
    trueCorrectPhrase: 'Ağır ceza mahkemesinde tutukluluk süresi en çok 2 yıl olup uzatma süresi 3 yılı geçemez.',
    baseExplanation: 'CMK m. 102/2: Ağır ceza mahkemesinin görev alanında temel tutukluluk süresi en çok 2 yıldır. Zorunlu hallerde en çok 3 yıl uzatılabilir (örgüt/devlet güvenliği suçlarında 5 yıl).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en çok iki yıldır',
      wrongPhrase: 'en çok altı aydır',
      correctPhrase: 'en çok iki yıldır',
      explanation: 'CMK m. 102/2: Ağır ceza mahkemesinin görevine giren işlerde temel tutukluluk süresi 6 ay değil, en çok 2 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'uzatma süresi toplam üç yılı geçemez',
      wrongPhrase: 'uzatma süresi mahkemenin takdirine göre on yılı aşabilir',
      correctPhrase: 'uzatma süresi toplam üç yılı geçemez',
      explanation: 'CMK m. 102/2: Genel suçlarda uzatma süresi azami 3 yıl ile sınırlandırılmıştır.'
    }
  },
  {
    id: 'rule-cmk-istinaf-sure-p8',
    branch: 'CMK',
    subTopic: 'Ceza Muhakemesinde İstinaf Başvuru Süresi (7499 s.K. 2 Hafta)',
    articleRef: 'CMK M. 273',
    trueStatement:
      'İstinaf istemi, hükmün gerekçesiyle birlikte tebliğinden itibaren iki hafta içinde hükmü veren mahkemeye bir dilekçe verilmesi veya zabıt kâtibine beyanda bulunulması suretiyle yapılır.',
    trueHighlight: ['tebliğinden itibaren iki hafta içinde'],
    trueCorrectPhrase: '7499 s.K. ile ceza istinaf süresi gerekçeli kararın tebliğinden itibaren 2 haftadır.',
    baseExplanation: 'CMK m. 273 (7499 s.K. değişikliği): Eski 7 günlük süre kaldırılmış, gerekçeli kararın tebliğinden itibaren 2 haftalık yeknesak süre getirilmiştir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğinden itibaren iki hafta içinde',
      wrongPhrase: 'hükmün tefhiminden itibaren yedi gün içinde',
      correctPhrase: 'tebliğinden itibaren iki hafta içinde',
      explanation: '7499 sayılı Kanun ile CMK m. 273’teki süre tefhimden değil tebliğden işlemeye başlar ve 7 gün değil, 2 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki hafta içinde',
      wrongPhrase: 'otuz gün içinde',
      correctPhrase: 'iki hafta içinde',
      explanation: 'CMK m. 273: İstinaf başvuru süresi 30 gün değil, 2 haftadır.'
    }
  },

  // =========================================================================
  // TTK (TİCARET HUKUKU - 6102 SAYILI KANUN)
  // =========================================================================
  {
    id: 'rule-ttk-faturaya-itiraz-p8',
    branch: 'Ticaret',
    subTopic: 'Faturaya İtiraz Süresi ve Hukuki Sonucu',
    articleRef: 'TTK M. 18/3 & 21/2',
    trueStatement:
      'Faturayı alan kimse aldığı tarihten itibaren sekiz gün içinde, faturanın içeriği hakkında bir itirazda bulunmamışsa bu içeriği kabul etmiş sayılır.',
    trueHighlight: ['sekiz gün içinde', 'bu içeriği kabul etmiş sayılır'],
    trueCorrectPhrase: 'Faturaya itiraz süresi 8 gündür; süresinde itiraz edilmezse içerik kabul edilmiş sayılır.',
    baseExplanation: 'TTK m. 21/2: Faturayı alan tacir veya kişi, aldığı tarihten itibaren 8 gün içinde faturaya itiraz etmezse faturanın içeriğini kabul etmiş sayılır (adi karine).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sekiz gün içinde',
      wrongPhrase: 'otuz gün içinde',
      correctPhrase: 'sekiz gün içinde',
      explanation: 'TTK m. 21/2: Faturaya itiraz süresi 30 gün değil, 8 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu içeriği kabul etmiş sayılır',
      wrongPhrase: 'fatura içeriğini kesin olarak reddetmiş sayılır ve fatura geçersiz hale gelir',
      correctPhrase: 'bu içeriği kabul etmiş sayılır',
      explanation: 'TTK m. 21/2: Süresinde itiraz edilmemesi faturanın içeriğinin kabul edildiği karinesini doğurur.'
    }
  },
  {
    id: 'rule-ttk-sirket-turleri-p8',
    branch: 'Ticaret',
    subTopic: 'Ticaret Şirketleri Türleri: Şahıs ve Sermaye Şirketleri',
    articleRef: 'TTK M. 124',
    trueStatement:
      'Ticaret şirketleri; kollektif, komandit, anonim, limited ve kooperatif şirketlerden ibarettir; bu kanunda kollektif ile komandit şirket şahıs; anonim, limited ve sermayesi paylara bölünmüş komandit şirket sermaye şirketi sayılır.',
    trueHighlight: ['kollektif ile komandit şirket şahıs', 'anonim, limited ve sermayesi paylara bölünmüş komandit şirket sermaye şirketi sayılır'],
    trueCorrectPhrase: 'Kollektif ve komandit şahıs şirketidir; anonim, limited ve paylı komandit sermaye şirketidir.',
    baseExplanation: 'TTK m. 124: Kollektif ve adi komandit şirketler şahıs şirketidir. Anonim, limited ve sermayesi paylara bölünmüş komandit şirket ise sermaye şirketidir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kollektif ile komandit şirket şahıs',
      wrongPhrase: 'limited ile anonim şirket şahıs',
      correctPhrase: 'kollektif ile komandit şirket şahıs',
      explanation: 'TTK m. 124/2: Limited ve anonim şirketler şahıs şirketi değil, sermaye şirketidir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'anonim, limited ve sermayesi paylara bölünmüş komandit şirket sermaye şirketi sayılır',
      wrongPhrase: 'yalnızca anonim şirket sermaye şirketi sayılır ve limited şirket şahıs şirketi kabul edilir',
      correctPhrase: 'anonim, limited ve sermayesi paylara bölünmüş komandit şirket sermaye şirketi sayılır',
      explanation: 'TTK m. 124/2: Limited şirket de kanunen açıkça sermaye şirketleri arasında sayılmıştır.'
    }
  },
  {
    id: 'rule-ttk-genel-kurul-cagri-ilani-p8',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirketlerde Genel Kurul Çağrı İlanı Süresi',
    articleRef: 'TTK M. 414',
    trueStatement:
      'Anonim şirketlerde genel kurul toplantıya esas sözleşmede gösterilen şekilde ve şirketin internet sitesi ile Türkiye Ticaret Sicili Gazetesinde yayımlanan ilanla çağrılır; bu çağrı, ilan ve toplantı günleri hariç olmak üzere, toplantı tarihinden en az iki hafta önce yapılır.',
    trueHighlight: ['ilan ve toplantı günleri hariç olmak üzere, toplantı tarihinden en az iki hafta önce yapılır'],
    trueCorrectPhrase: 'A.Ş. genel kurul çağrı ilanı toplantı gününden en az 2 hafta önce yapılmalıdır.',
    baseExplanation: 'TTK m. 414/1: Anonim şirketlerde genel kurul çağrı ilanı, ilan ve toplantı günleri hesaba katılmaksızın toplantı tarihinden en az 2 hafta önce Türkiye Ticaret Sicili Gazetesinde yayımlanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en az iki hafta önce yapılır',
      wrongPhrase: 'en az kırk beş gün önce yapılır',
      correctPhrase: 'en az iki hafta önce yapılır',
      explanation: 'TTK m. 414/1: Genel kurul çağrı süresi 45 gün değil, en az 2 haftadır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ilan ve toplantı günleri hariç olmak üzere',
      wrongPhrase: 'ilan ve toplantı günleri de süre hesabına dahil edilerek',
      correctPhrase: 'ilan ve toplantı günleri hariç olmak üzere',
      explanation: 'TTK m. 414/1: Kanun açıkça ilan ve toplantı günlerinin bu iki haftalık asgari süreye dahil edilemeyeceğini emretmiştir.'
    }
  },
  {
    id: 'rule-ttk-cek-rucu-zamanasimi-p8',
    branch: 'Ticaret',
    subTopic: 'Çekte Hamilin Rücu Hakkı Zamanaşımı Süresi (3 Yıl)',
    articleRef: 'TTK M. 726',
    trueStatement:
      'Hamilin, cirantalar, düzenleyen ve diğer çek borçlularına karşı sahip olduğu rücu hakları, ibraz süresinin bitiminden itibaren üç yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['ibraz süresinin bitiminden itibaren üç yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'Çekte cirantalara ve düzenleyene karşı rücu zamanaşımı süresi ibraz süresinin bitiminden itibaren 3 yıldır.',
    baseExplanation: 'TTK m. 726/1 (6352 s.K. değişikliği): Çekte hamilin düzenleyene ve cirantalara karşı rücu hakları ibraz süresinin bitiminden itibaren 3 yılda zamanaşımına uğrar (eski 6 aylık süre 3 yıla çıkarılmıştır).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'altı ay geçmekle zamanaşımına uğrar',
      correctPhrase: 'üç yıl geçmekle zamanaşımına uğrar',
      explanation: '6352 sayılı Kanun değişikliği ile çekte hamilin rücu istemleri için zamanaşımı süresi 6 aydan 3 yıla çıkarılmıştır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ibraz süresinin bitiminden itibaren',
      wrongPhrase: 'çekin düzenlenme gününden itibaren',
      correctPhrase: 'ibraz süresinin bitiminden itibaren',
      explanation: 'TTK m. 726/1: 3 yıllık zamanaşımı çekin tanzim tarihinden değil, ibraz süresinin bitiminden itibaren işlemeye başlar.'
    }
  }
];
