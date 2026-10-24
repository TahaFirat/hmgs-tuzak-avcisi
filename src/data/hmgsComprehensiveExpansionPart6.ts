import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 6
 * Yalnızca sağlam bilgiyle doğrulanabilen, daha önce kapsanmamış kurallar (9 kural = 27 kart).
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART6_RULES: StatutoryRuleSeed[] = [
  {
    id: 'rule-medeni-erginlik-p6',
    branch: 'Medeni',
    subTopic: 'Erginlik ve Küçüğün Ergin Kılınması',
    articleRef: 'TMK M. 11-12',
    trueStatement:
      'Erginlik, onsekiz yaşın doldurulmasıyla kazanılır; evlenme kişiyi ergin kılar; onbeş yaşını dolduran küçük, kendi isteği ve velisinin rızasıyla mahkeme kararıyla ergin kılınabilir.',
    trueHighlight: ['onsekiz yaşın doldurulmasıyla', 'evlenme kişiyi ergin kılar', 'onbeş yaşını dolduran'],
    trueCorrectPhrase: 'Erginlik 18 yaşla veya evlenmeyle kazanılır; mahkeme kararıyla ergin kılınma için asgari yaş 15’tir.',
    baseExplanation: 'TMK m. 11-12: Erginlik 18 yaş veya evlilikle; mahkeme kararıyla ergin kılınma 15 yaş + veli rızası + küçüğün isteği şartlarına bağlıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'onsekiz yaşın doldurulmasıyla',
      wrongPhrase: 'yirmi yaşın doldurulmasıyla',
      correctPhrase: 'onsekiz yaşın doldurulmasıyla',
      explanation: 'TMK m. 11 uyarınca erginlik yaşı 18’dir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'onbeş yaşını dolduran küçük, kendi isteği ve velisinin rızasıyla',
      wrongPhrase: 'onikiyi dolduran küçük, yalnızca velisinin isteğiyle',
      correctPhrase: 'onbeş yaşını dolduran küçük, kendi isteği ve velisinin rızasıyla',
      explanation: 'TMK m. 12: Mahkeme kararıyla ergin kılınma için küçüğün en az 15 yaşında olması, kendisinin istemesi ve velinin rızası gerekir.'
    }
  },
  {
    id: 'rule-medeni-evlenme-yasi-p6',
    branch: 'Medeni',
    subTopic: 'Evlenme Yaşı',
    articleRef: 'TMK M. 124',
    trueStatement:
      'Erkek veya kadın, onyedi yaşını doldurmadıkça evlenemez; olağanüstü durumlarda ve pek önemli bir sebeple hâkim, onaltı yaşını doldurmuş olan erkek veya kadının evlenmesine izin verebilir.',
    trueHighlight: ['onyedi yaşını doldurmadıkça evlenemez', 'onaltı yaşını doldurmuş'],
    trueCorrectPhrase: 'Evlenme yaşı 17’dir; hâkim kararıyla istisnai olarak 16 yaşında evlenme mümkündür.',
    baseExplanation: 'TMK m. 124: Genel evlenme yaşı 17 (tamamlanmış); olağanüstü durum ve pek önemli sebeple hâkim 16 yaşını dolduranlara izin verebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'onyedi yaşını doldurmadıkça evlenemez',
      wrongPhrase: 'onsekiz yaşını doldurmadıkça evlenemez',
      correctPhrase: 'onyedi yaşını doldurmadıkça evlenemez',
      explanation: 'TMK m. 124/1: Evlenme yaşı 18 değil 17’dir (erginlik yaşı ile karıştırılmamalıdır).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'olağanüstü durumlarda ve pek önemli bir sebeple hâkim, onaltı yaşını doldurmuş olan',
      wrongPhrase: 'velinin rızası bulunduğunda noter, onbeş yaşını doldurmuş olan',
      correctPhrase: 'olağanüstü durumlarda ve pek önemli bir sebeple hâkim, onaltı yaşını doldurmuş olan',
      explanation: 'TMK m. 124/2: İstisnai evlenme izni noter tarafından değil hâkim tarafından, en az 16 yaş ve pek önemli sebep varlığında verilir.'
    }
  },
  {
    id: 'rule-borclar-sebepsiz-zenginlesme-p6',
    branch: 'Borçlar',
    subTopic: 'Sebepsiz Zenginleşmede Zamanaşımı',
    articleRef: 'TBK M. 82',
    trueStatement:
      'Sebepsiz zenginleşme nedeniyle geri verme isteminde bulunma hakkı, zarar görenin geri verme isteminde bulunma hakkını öğrendiği tarihten başlayarak iki yıl ve her hâlde zenginleşmenin gerçekleştiği tarihten başlayarak on yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['öğrendiği tarihten başlayarak iki yıl', 'on yıl geçmekle'],
    trueCorrectPhrase: 'Sebepsiz zenginleşmede zamanaşımı: öğrenmeden itibaren 2 yıl, her hâlde 10 yıl.',
    baseExplanation: 'TBK m. 82: Sebepsiz zenginleşme zamanaşımı nispi 2 yıl, mutlak 10 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak iki yıl',
      wrongPhrase: 'öğrendiği tarihten başlayarak bir yıl',
      correctPhrase: 'öğrendiği tarihten başlayarak iki yıl',
      explanation: 'TBK m. 82: Nispi süre 1 yıl değil 2 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıl geçmekle',
      wrongPhrase: 'beş yıl geçmekle',
      correctPhrase: 'on yıl geçmekle',
      explanation: 'TBK m. 82: Mutlak zamanaşımı süresi 10 yıldır.'
    }
  },
  {
    id: 'rule-idare-yillik-izin-p6',
    branch: 'İdare',
    subTopic: 'Devlet Memurunun Yıllık İzni',
    articleRef: '657 S. DMK M. 102',
    trueStatement:
      'Devlet memurlarına, hizmet süresi on yıldan az olanlara yirmi gün, on yıl ve daha fazla olanlara otuz gün yıllık izin verilir; bu sürelere zorunlu yol izni dâhil değildir.',
    trueHighlight: ['on yıldan az olanlara yirmi gün', 'on yıl ve daha fazla olanlara otuz gün', 'zorunlu yol izni dâhil değildir'],
    trueCorrectPhrase: 'Memur yıllık izni: hizmet 10 yıldan azsa 20 gün, 10 yıl ve üzeriyse 30 gün; yol izni hariçtir.',
    baseExplanation: '657 s. DMK m. 102: Yıllık izin 20 gün (10 yıldan az hizmet) veya 30 gün (10 yıl ve fazlası); zorunlu yol izni ayrıca verilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıl ve daha fazla olanlara otuz gün',
      wrongPhrase: 'on yıl ve daha fazla olanlara kırkbeş gün',
      correctPhrase: 'on yıl ve daha fazla olanlara otuz gün',
      explanation: '657 s. DMK m. 102: 10 yıl ve üzeri hizmette yıllık izin 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'zorunlu yol izni dâhil değildir',
      wrongPhrase: 'zorunlu yol izni de bu sürelerin içindedir',
      correctPhrase: 'zorunlu yol izni dâhil değildir',
      explanation: '657 s. DMK m. 102: Zorunlu yol izni yıllık izin süresine dâhil değildir.'
    }
  },
  {
    id: 'rule-idare-dogum-izni-p6',
    branch: 'İdare',
    subTopic: 'Kadın Memura Doğum İzni',
    articleRef: '657 S. DMK M. 104/B',
    trueStatement:
      'Kadın memura doğumdan önce sekiz, doğumdan sonra sekiz hafta olmak üzere toplam onaltı hafta doğum izni verilir; çoğul gebelik hâlinde doğumdan önce çalıştırılmayacak sekiz haftalık süreye iki hafta eklenir.',
    trueHighlight: ['doğumdan önce sekiz, doğumdan sonra sekiz hafta', 'iki hafta eklenir'],
    trueCorrectPhrase: 'Memura doğum izni 8 + 8 = 16 hafta; çoğul gebelikte doğum öncesine 2 hafta eklenir.',
    baseExplanation: '657 s. DMK m. 104/B: Doğum izni toplam 16 haftadır (8 önce + 8 sonra); çoğul gebelikte öncesine 2 hafta eklenir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'doğumdan önce sekiz, doğumdan sonra sekiz hafta olmak üzere toplam onaltı hafta',
      wrongPhrase: 'doğumdan önce on, doğumdan sonra on hafta olmak üzere toplam yirmi hafta',
      correctPhrase: 'doğumdan önce sekiz, doğumdan sonra sekiz hafta olmak üzere toplam onaltı hafta',
      explanation: '657 s. DMK m. 104/B: Doğum izni 8 + 8 = 16 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sekiz haftalık süreye iki hafta eklenir',
      wrongPhrase: 'sekiz haftalık süreye dört hafta eklenir',
      correctPhrase: 'sekiz haftalık süreye iki hafta eklenir',
      explanation: '657 s. DMK m. 104/B: Çoğul gebelikte doğum öncesi süreye 2 hafta eklenir.'
    }
  },
  {
    id: 'rule-cmk-iddianame-iade-p6',
    branch: 'CMK',
    subTopic: 'İddianamenin Kabulü veya İadesi',
    articleRef: 'CMK M. 174',
    trueStatement:
      'İddianameyi alan mahkeme, on beş gün içinde iddianameyi inceleyerek kabul eder veya iade eder; bu süre içinde iade kararı verilmezse iddianame kabul edilmiş sayılır ve aynı suç ile ilgili olarak yeniden iddianame düzenlenemez, ancak iade sebepleri ortadan kalkmış ise yeniden iddianame düzenlenebilir.',
    trueHighlight: ['on beş gün içinde', 'iade kararı verilmezse iddianame kabul edilmiş sayılır'],
    trueCorrectPhrase: 'Mahkeme iddianameyi 15 gün içinde inceler; bu sürede iade edilmezse iddianame kabul edilmiş sayılır.',
    baseExplanation: 'CMK m. 174: İddianame 15 gün içinde kabul veya iade edilir; süre içinde iade edilmeyen iddianame kabul edilmiş sayılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on beş gün içinde',
      wrongPhrase: 'otuz gün içinde',
      correctPhrase: 'on beş gün içinde',
      explanation: 'CMK m. 174/1: Mahkemenin iddianameyi inceleme süresi 15 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'iade kararı verilmezse iddianame kabul edilmiş sayılır',
      wrongPhrase: 'iade kararı verilmezse dava kendiliğinden düşer',
      correctPhrase: 'iade kararı verilmezse iddianame kabul edilmiş sayılır',
      explanation: 'CMK m. 174/1: Süresinde iade edilmeyen iddianame kabul edilmiş sayılır; dava düşmez.'
    }
  },
  {
    id: 'rule-cmk-itiraz-p6',
    branch: 'CMK',
    subTopic: 'Hâkim ve Mahkeme Kararlarına İtiraz',
    articleRef: 'CMK M. 268',
    trueStatement:
      'Hâkim kararlarına karşı itiraz, kararın öğrenilmesinden itibaren yedi gün içinde kararı veren merciye verilecek bir dilekçeyle yapılır; itiraz üzerine verilen karar kesindir.',
    trueHighlight: ['yedi gün içinde', 'itiraz üzerine verilen karar kesindir'],
    trueCorrectPhrase: 'İtiraz süresi 7 gündür ve itiraz mercii kararı kesin olarak verir.',
    baseExplanation: 'CMK m. 268: İtiraz kararın öğrenilmesinden itibaren 7 gün içinde yapılır; itiraz merciinin kararı kesindir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi gün içinde',
      wrongPhrase: 'on beş gün içinde',
      correctPhrase: 'yedi gün içinde',
      explanation: 'CMK m. 268/1: İtiraz süresi 7 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'itiraz üzerine verilen karar kesindir',
      wrongPhrase: 'itiraz üzerine verilen karara karşı ayrıca temyiz yoluna gidilebilir',
      correctPhrase: 'itiraz üzerine verilen karar kesindir',
      explanation: 'CMK m. 268: İtiraz merciinin kararı kesindir; ayrıca kanun yoluna gidilemez.'
    }
  },
  {
    id: 'rule-tck-yas-kucuklugu-p6',
    branch: 'TCK',
    subTopic: 'Yaş Küçüklüğü ve Ceza Sorumluluğu',
    articleRef: 'TCK M. 31',
    trueStatement:
      'Fiili işlediği sırada oniki yaşını doldurmamış olan çocukların ceza sorumluluğu bulunmaz, bunlar hakkında çocuklara özgü güvenlik tedbirlerine hükmolunur; fiili işlediği sırada oniki yaşını doldurmuş ancak onbeş yaşını doldurmamış olanlardan, işlediği fiilin hukukî anlam ve sonuçlarını algılama yeteneği yeterince gelişmemiş olanlar ceza sorumluluğu taşımaz.',
    trueHighlight: ['oniki yaşını doldurmamış olan çocukların ceza sorumluluğu bulunmaz', 'algılama yeteneği yeterince gelişmemiş'],
    trueCorrectPhrase: '12 yaş altında ceza sorumluluğu yoktur; 12-15 yaş arasında algılama yeteneği gelişmemişse de yoktur.',
    baseExplanation: 'TCK m. 31: 12 yaş altı sorumsuz; 12-15 yaşta algılama yeteneğine göre sorumluluk belirlenir; 15-18 yaşta ceza indirimi uygulanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'oniki yaşını doldurmamış olan çocukların ceza sorumluluğu bulunmaz',
      wrongPhrase: 'onbeş yaşını doldurmamış olan çocukların ceza sorumluluğu bulunmaz',
      correctPhrase: 'oniki yaşını doldurmamış olan çocukların ceza sorumluluğu bulunmaz',
      explanation: 'TCK m. 31/1: Mutlak ceza sorumsuzluğu sınırı 12 yaştır; 15 yaş ikinci eşiktir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bunlar hakkında çocuklara özgü güvenlik tedbirlerine hükmolunur',
      wrongPhrase: 'bunlar hakkında yetişkinlerle aynı ceza uygulanır',
      correctPhrase: 'bunlar hakkında çocuklara özgü güvenlik tedbirlerine hükmolunur',
      explanation: 'TCK m. 31/1: 12 yaşını doldurmamış çocuklara ceza değil, çocuklara özgü güvenlik tedbirleri uygulanır.'
    }
  },
  {
    id: 'rule-is-hafta-tatili-p6',
    branch: 'İş Hukuku',
    subTopic: 'Hafta Tatili',
    articleRef: '4857 S. İŞK M. 46',
    trueStatement:
      'İşçilere, kanunen çalışma yapılmaması gereken ve aksi sözleşmede belirtilmemiş hâllerde, işyerinde yapılan işlere göre, haftada yedi günlük zaman diliminde en az yirmidört saat kesintisiz hafta tatili verilir.',
    trueHighlight: ['yedi günlük zaman diliminde', 'en az yirmidört saat kesintisiz'],
    trueCorrectPhrase: 'Hafta tatili: 7 günlük dilimde en az 24 saat kesintisiz dinlenmedir.',
    baseExplanation: '4857 s. İş Kanunu m. 46: Hafta tatili, yedi günlük zaman diliminde en az 24 saat kesintisiz dinlenmeyi ifade eder.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en az yirmidört saat kesintisiz',
      wrongPhrase: 'en az on iki saat kesintisiz',
      correctPhrase: 'en az yirmidört saat kesintisiz',
      explanation: '4857 s. İşK m. 46: Hafta tatili en az 24 saat kesintisizdir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi günlük zaman diliminde',
      wrongPhrase: 'otuz günlük zaman diliminde',
      correctPhrase: 'yedi günlük zaman diliminde',
      explanation: '4857 s. İşK m. 46: 24 saatlik dinlenme 7 günlük zaman diliminde verilir.'
    }
  }
];
