import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 10 (26 Kural = 78 Yeni Doğrulanmış Kart)
 * MÖHUK, İYUK, HMK, TCK, CMK, TMK, TBK ve İİK temel alanlarında
 * kanun koyucunun kurucu hükümlerini içeren yüksek öğretici değerli soru havuzu.
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART10_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // MÖHUK (5718 SAYILI MİLLETLERARASI ÖZEL HUKUK KANUNU)
  // =========================================================================
  {
    id: 'rule-mohuk-ehliyet-ve-islem-guvenligi-p10',
    branch: 'MÖHUK',
    subTopic: 'Hak ve Fiil Ehliyeti ve İşlem Güvenliği Kuralı',
    articleRef: '5718 s.K. M. 9',
    trueStatement:
      'Hak ve fiil ehliyeti ilgilinin millî hukukuna tabidir; millî hukukuna göre ehliyetsiz olan bir kişi, işlemin yapıldığı ülke hukukuna göre ehil ise yaptığı hukuki işlemle bağlıdır; ancak aile, miras hukuku ile başka bir ülkedeki taşınmazlar üzerindeki ayni haklara ilişkin işlemler bu kuralın dışındadır.',
    trueHighlight: ['Hak ve fiil ehliyeti ilgilinin millî hukukuna tabidir', 'aile, miras hukuku ile başka bir ülkedeki taşınmazlar üzerindeki ayni haklara ilişkin işlemler bu kuralın dışındadır'],
    trueCorrectPhrase: 'Ehliyet milli hukuka tabidir; işlem güvenliği aile, miras ve yabancı taşınmaz ayni haklarında uygulanmaz.',
    baseExplanation: '5718 s.K. m. 9: Ehliyet kural olarak milli hukuka tabidir. İşlem güvenliği gereği işlemin yapıldığı yer hukukuna göre ehil sayılan kişi bağlı tutulur; ancak aile, miras ve taşınmaz tasarrufları işlem güvenliği istisnası dışındadır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aile, miras hukuku ile başka bir ülkedeki taşınmazlar üzerindeki ayni haklara ilişkin işlemler bu kuralın dışındadır',
      wrongPhrase: 'aile ve miras hukuku da dahil olmak üzere tüm hukuki işlemler kayıtsız şartsız bu kurala tabidir',
      correctPhrase: 'aile, miras hukuku ile başka bir ülkedeki taşınmazlar üzerindeki ayni haklara ilişkin işlemler bu kuralın dışındadır',
      explanation: '5718 s.K. m. 9/2: Aile hukuku, miras hukuku ve diğer ülkedeki taşınmazlara ilişkin işlemler işlem güvenliği kuralının (lex loci actus) açık istisnasıdır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Hak ve fiil ehliyeti ilgilinin millî hukukuna tabidir',
      wrongPhrase: 'Hak ve fiil ehliyeti yalnızca ilgilinin yerleşim yeri hukukuna tabidir',
      correctPhrase: 'Hak ve fiil ehliyeti ilgilinin millî hukukuna tabidir',
      explanation: '5718 s.K. m. 9/1: Ehliyette temel bağlama noktası yerleşim yeri değil, ilgilinin millî hukukudur (vatandaşlık esası).'
    }
  },
  {
    id: 'rule-mohuk-ayni-haklar-p10',
    branch: 'MÖHUK',
    subTopic: 'Taşınır ve Taşınmaz Mallarda Ayni Hakların Tabi Olduğu Hukuk',
    articleRef: '5718 s.K. M. 21',
    trueStatement:
      'Taşınırlar ve taşınmazlar üzerindeki mülkiyet hakkı ve diğer ayni haklar, işlem anında malların bulunduğu yer hukukuna tabidir.',
    trueHighlight: ['malların bulunduğu yer hukukuna tabidir'],
    trueCorrectPhrase: 'Ayni haklar malların işlem anında bulunduğu yer hukukuna (lex rei sitae) tabidir.',
    baseExplanation: '5718 s.K. m. 21/1: Eşya hukuku ve ayni haklarda bağlama noktası lex rei sitae, yani eşyanın bulunduğu yer hukukudur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'malların bulunduğu yer hukukuna tabidir',
      wrongPhrase: 'malikin millî hukukuna veya yerleşim yeri hukukuna tabidir',
      correctPhrase: 'malların bulunduğu yer hukukuna tabidir',
      explanation: '5718 s.K. m. 21: Ayni haklarda malikin şahsi hukuku değil, eşyanın bulunduğu yer hukuku uygulanır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işlem anında malların bulunduğu yer hukukuna tabidir',
      wrongPhrase: 'tarafların sözleşmeyle serbestçe seçtikleri herhangi bir yabancı hukuka tabidir',
      correctPhrase: 'işlem anında malların bulunduğu yer hukukuna tabidir',
      explanation: '5718 s.K. m. 21: Ayni haklarda kural olarak irade serbestisi (hukuk seçimi) geçerli değildir; malın bulunduğu yer hukuku emredicidir.'
    }
  },
  {
    id: 'rule-mohuk-tenfiz-sartlari-p10',
    branch: 'MÖHUK',
    subTopic: 'Yabancı Mahkeme Kararlarının Tenfiz Şartları',
    articleRef: '5718 s.K. M. 50 & 54',
    trueStatement:
      'Yabancı mahkemelerden verilen hukuk davalarına ilişkin nihai kararların Türkiye’de icra olunabilmesi için yetkili Türk mahkemesince tenfiz kararı verilmesi gerekir; tenfiz için Türkiye ile o devlet arasında karşılıklılık bulunması ve kararın Türk mahkemelerinin münhasır yetkisine girmeyen bir konuda verilmiş olması şarttır.',
    trueHighlight: ['kararın Türk mahkemelerinin münhasır yetkisine girmeyen bir konuda verilmiş olması şarttır', 'Türkiye ile o devlet arasında karşılıklılık bulunması'],
    trueCorrectPhrase: 'Tenfiz için karşılıklılık, münhasır yetkiye tecavüz olmaması ve kamu düzenine aykırı olmama şarttır.',
    baseExplanation: '5718 s.K. m. 50 ve m. 54: Yabancı ilamın tenfizi için kesinleşmiş olması, karşılıklılık (mütekabiliyet), Türk mahkemelerinin münhasır yetkisine girmemesi ve kamu düzenine açıkça aykırı olmaması gerekir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kararın Türk mahkemelerinin münhasır yetkisine girmeyen bir konuda verilmiş olması şarttır',
      wrongPhrase: 'karar Türk mahkemelerinin münhasır yetkisine giren taşınmaz davalarına ilişkin olsa dahi tenfiz edilebilir',
      correctPhrase: 'kararın Türk mahkemelerinin münhasır yetkisine girmeyen bir konuda verilmiş olması şarttır',
      explanation: '5718 s.K. m. 54/1-b: Türkiye’deki taşınmazların ayni hakları gibi Türk mahkemelerinin münhasır yetkisine giren konulardaki yabancı kararlar hiçbir şekilde tenfiz edilemez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Türkiye ile o devlet arasında karşılıklılık bulunması',
      wrongPhrase: 'kararı veren devlet ile Türkiye arasında hiçbir karşılıklılık ilişkisi aranmaksızın',
      correctPhrase: 'Türkiye ile o devlet arasında karşılıklılık bulunması',
      explanation: '5718 s.K. m. 54/1-a: Tenfiz için kanuni, sözleşmesel veya fiili karşılıklılık (mütekabiliyet) bulunması zorunlu şarttır.'
    }
  },

  // =========================================================================
  // İDARİ YARGILAMA USULÜ (2577 SAYILI İYUK)
  // =========================================================================
  {
    id: 'rule-iyuk-ivedi-yargilama-sureler-p10',
    branch: 'İYUK',
    subTopic: 'İvedik Yargılama Usulü Kapsamı ve Özel Süreleri',
    articleRef: 'İYUK M. 20/A',
    trueStatement:
      'İvedik yargılama usulünde dava açma süresi otuz gündür; bu usulde ilk inceleme yedi gün içinde yapılır, savunma verme süresi dava dilekçesinin tebliğinden itibaren on beş gündür ve yürütmenin durdurulması kararlarına itiraz edilemez.',
    trueHighlight: ['dava açma süresi otuz gündür', 'savunma verme süresi dava dilekçesinin tebliğinden itibaren on beş gündür', 'yürütmenin durdurulması kararlarına itiraz edilemez'],
    trueCorrectPhrase: 'İvedi yargılamada dava açma 30 gün, savunma 15 gündür; yürütmenin durdurulmasına itiraz yasaktır.',
    baseExplanation: 'İYUK m. 20/A: İvedi yargılama usulünde dava açma süresi 30 gündür, savunma süresi 15 gündür ve yürütmenin durdurulması kararlarına karşı bölge idare mahkemesine itiraz yolu kapalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'savunma verme süresi dava dilekçesinin tebliğinden itibaren on beş gündür',
      wrongPhrase: 'savunma verme süresi dava dilekçesinin tebliğinden itibaren otuz gündür',
      correctPhrase: 'savunma verme süresi dava dilekçesinin tebliğinden itibaren on beş gündür',
      explanation: 'İYUK m. 20/A-2: İvedik yargılamada savunma süresi 30 gün değil, tebliğden itibaren 15 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yürütmenin durdurulması kararlarına itiraz edilemez',
      wrongPhrase: 'yürütmenin durdurulması kararlarına karşı yedi gün içinde itiraz yoluna başvurulabilir',
      correctPhrase: 'yürütmenin durdurulması kararlarına itiraz edilemez',
      explanation: 'İYUK m. 20/A-2-e: İvedik yargılama usulünde yürütmenin durdurulması talepleri hakkında verilen kararlara itiraz edilemez.'
    }
  },
  {
    id: 'rule-iyuk-istinaf-30-gun-p10',
    branch: 'İYUK',
    subTopic: 'İdari Yargıda İstinaf Başvuru Süresi (30 Gün)',
    articleRef: 'İYUK M. 45',
    trueStatement:
      'İdare ve vergi mahkemelerinin kararlarına karşı, başka kanunlarda farklı bir süre öngörülmüş olsa dahi, mahkeme kararının tebliğinden itibaren otuz gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir.',
    trueHighlight: ['kararının tebliğinden itibaren otuz gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir'],
    trueCorrectPhrase: 'İdari yargıda istinaf başvuru süresi tebliğden itibaren 30 gündür.',
    baseExplanation: 'İYUK m. 45/1: İdare ve vergi mahkemelerinin nihai kararlarına karşı istinaf süresi tebliğden itibaren 30 gündür. Görevli merci Bölge İdare Mahkemesidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir',
      wrongPhrase: 'iki hafta içinde bölge idare mahkemesine istinaf yoluna başvurulabilir',
      correctPhrase: 'otuz gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir',
      explanation: 'İYUK m. 45/1: İdari yargıda istinaf süresi HMK ve CMK’daki 2 hafta değil, 30 gündür.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'bölge idare mahkemesine istinaf yoluna başvurulabilir',
      wrongPhrase: 'doğrudan Danıştay Dava Daireleri Kuruluna başvurulabilir',
      correctPhrase: 'bölge idare mahkemesine istinaf yoluna başvurulabilir',
      explanation: 'İYUK m. 45: İlk derece idare mahkemesi kararlarına karşı istinaf mercii Bölge İdare Mahkemesidir, doğrudan Danıştay değildir.'
    }
  },
  {
    id: 'rule-iyuk-temyiz-30-gun-p10',
    branch: 'İYUK',
    subTopic: 'İdari Yargıda Temyiz Başvuru Süresi (30 Gün)',
    articleRef: 'İYUK M. 46',
    trueStatement:
      'Danıştay dava daireleri ile bölge idare mahkemelerinin kanunda tahdidi olarak sayılan kararlarına karşı tebliğ tarihinden itibaren otuz gün içinde Danıştayda temyiz yoluna başvurulabilir.',
    trueHighlight: ['tebliğ tarihinden itibaren otuz gün içinde Danıştayda temyiz yoluna başvurulabilir'],
    trueCorrectPhrase: 'İdari yargıda temyiz süresi tebliğden itibaren 30 gündür; merci Danıştaydır.',
    baseExplanation: 'İYUK m. 46: Bölge idare mahkemelerinin İYUK 46’da katalog olarak sayılan nihai kararları ile ilk derece Danıştay kararlarına karşı temyiz süresi tebliğden itibaren 30 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde Danıştayda temyiz yoluna başvurulabilir',
      wrongPhrase: 'altmış gün içinde Danıştayda temyiz yoluna başvurulabilir',
      correctPhrase: 'otuz gün içinde Danıştayda temyiz yoluna başvurulabilir',
      explanation: 'İYUK m. 46: Temyiz başvuru süresi 60 gün değil, tebliğden itibaren 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kanunda tahdidi olarak sayılan kararlarına karşı',
      wrongPhrase: 'verilen istisnasız tüm nihai kararlara karşı hiçbir sınırlama olmaksızın',
      correctPhrase: 'kanunda tahdidi olarak sayılan kararlarına karşı',
      explanation: 'İYUK m. 46: Bölge idare mahkemesinin her kararı temyiz edilemez; yalnızca İYUK m. 46’da tek tek sayılan katalog davalar temyize tabidir, diğerleri istinafta kesinleşir.'
    }
  },

  // =========================================================================
  // MEDENİ USUL HUKUKU (6100 SAYILI HMK)
  // =========================================================================
  {
    id: 'rule-hmk-on-inceleme-tahkikat-p10',
    branch: 'HMK',
    subTopic: 'Ön İnceleme Aşaması Tamamlanmadan Tahkikata Geçilememesi',
    articleRef: 'HMK M. 137 & 140',
    trueStatement:
      'Ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata geçilemez ve tahkikat için duruşma günü verilemez; mahkeme ön incelemede dava şartlarını ve ilk itirazları karara bağlar.',
    trueHighlight: ['Ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata geçilemez', 'tahkikat için duruşma günü verilemez'],
    trueCorrectPhrase: 'Ön inceleme bitmeden tahkikata geçilemez; dava şartları ve ilk itirazlar ön incelemede çözülür.',
    baseExplanation: 'HMK m. 137/2: Ön inceleme aşaması tamamlanmadan tahkikata geçilmesi ve tahkikat günü verilmesi kesin bir usuli bozma sebebidir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tahkikata geçilemez ve tahkikat için duruşma günü verilemez',
      wrongPhrase: 'mahkeme dilerse ön incelemeyi atlayarak doğrudan tahkikata geçebilir ve tanık dinleyebilir',
      correctPhrase: 'tahkikata geçilemez ve tahkikat için duruşma günü verilemez',
      explanation: 'HMK m. 137/2: Ön inceleme yapılmaksızın tahkikat duruşması icra edilemez; emredici kuraldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mahkeme ön incelemede dava şartlarını ve ilk itirazları karara bağlar',
      wrongPhrase: 'mahkeme ön incelemede tarafların delillerini toplayarak hükmü tefhim eder',
      correctPhrase: 'mahkeme ön incelemede dava şartlarını ve ilk itirazları karara bağlar',
      explanation: 'HMK m. 140: Ön incelemede hüküm kurulmaz; uyuşmazlık noktaları tespit edilir, sulhe teşvik edilir ve dava şartları ile ilk itirazlar incelenir.'
    }
  },
  {
    id: 'rule-hmk-iddia-savunma-genisletme-p10',
    branch: 'HMK',
    subTopic: 'İddia ve Savunmanın Genişletilmesi Yasağının Başlangıcı',
    articleRef: 'HMK M. 141',
    trueStatement:
      'Taraflar, cevaba cevap ve ikinci cevap dilekçeleri ile iddia veya savunmalarını serbestçe genişletebilir yahut değiştirebilirler; dilekçelerin karşılıklı verilmesinden sonra iddia veya savunma karşı tarafın açık muvafakati veya ıslah dışında genişletilemez.',
    trueHighlight: ['dilekçelerin karşılıklı verilmesinden sonra', 'karşı tarafın açık muvafakati veya ıslah dışında genişletilemez'],
    trueCorrectPhrase: 'Dilekçeler teatisinden sonra iddia/savunma yalnızca açık muvafakat veya ıslahla genişletilebilir.',
    baseExplanation: 'HMK m. 141: Dilekçeler aşamasında (cevaba cevap ve ikinci cevap) genişletme serbesttir. Dilekçelerin teatisi tamamlandıktan sonra iddia ve savunmanın genişletilmesi yasağı başlar (istisnaları: karşı tarafın açık rızası veya ıslah).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'karşı tarafın açık muvafakati veya ıslah dışında genişletilemez',
      wrongPhrase: 'taraflardan birinin tek taraflı sözlü beyanıyla her aşamada serbestçe genişletilebilir',
      correctPhrase: 'karşı tarafın açık muvafakati veya ıslah dışında genişletilemez',
      explanation: 'HMK m. 141/2: Genişletme yasağı başladıktan sonra tek taraflı beyanla yeni talep ileri sürülemez; açık muvafakat veya ıslah şarttır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'dilekçelerin karşılıklı verilmesinden sonra',
      wrongPhrase: 'dava dilekçesinin mahkemeye verildiği ilk andan itibaren derhâl',
      correctPhrase: 'dilekçelerin karşılıklı verilmesinden sonra',
      explanation: 'HMK m. 141/1: Yasak dava açıldığı anda başlamaz; davacı cevaba cevap dilekçesinde, davalı ise ikinci cevap dilekçesinde iddia/savunmasını serbestçe değiştirebilir.'
    }
  },
  {
    id: 'rule-hmk-islah-hakki-tek-sefer-p10',
    branch: 'HMK',
    subTopic: 'Islah Hakkının Kapsamı, Zamanı ve Bir Defa Yapılabilmesi',
    articleRef: 'HMK M. 176 & 177',
    trueStatement:
      'Taraflardan her biri yapmış olduğu usul işlemlerini kısmen veya tamamen ıslah edebilir; ıslah tahkikatın sona ermesine kadar yapılabilir ve aynı davada taraflardan her biri ancak bir defa ıslah yoluna başvurabilir.',
    trueHighlight: ['ıslah tahkikatın sona ermesine kadar yapılabilir', 'aynı davada taraflardan her biri ancak bir defa ıslah yoluna başvurabilir'],
    trueCorrectPhrase: 'Islah tahkikat bitene kadar yapılabilir; her taraf aynı davada yalnız 1 kez ıslah yapabilir.',
    baseExplanation: 'HMK m. 176 ve m. 177: Islah tahkikat sona erinceye kadar yapılabilir. Aynı davada taraflardan her biri yalnızca bir defa ıslah hakkını kullanabilir (ikinci kez ıslah yapılamaz).',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'aynı davada taraflardan her biri ancak bir defa ıslah yoluna başvurabilir',
      wrongPhrase: 'taraflar diledikleri kadar ve sınırsız sayıda ıslah yoluna başvurabilirler',
      correctPhrase: 'aynı davada taraflardan her biri ancak bir defa ıslah yoluna başvurabilir',
      explanation: 'HMK m. 176/2: Kanun açıkça "Aynı davada, taraflar ancak bir defa ıslah yoluna başvurabilir" hükmünü amirdir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ıslah tahkikatın sona ermesine kadar yapılabilir',
      wrongPhrase: 'ıslah yalnızca dava açıldıktan sonraki ilk on gün içinde yapılabilir',
      correctPhrase: 'ıslah tahkikatın sona ermesine kadar yapılabilir',
      explanation: 'HMK m. 177/1: Islah için 10 günlük bir süre yoktur; tahkikatın sona ermesine kadar her zaman yapılabilir.'
    }
  },
  {
    id: 'rule-hmk-senette-sahtelik-durdurma-p10',
    branch: 'HMK',
    subTopic: 'Senette Sahtelik İddiası ve Hükmün İcrasına Etkisi',
    articleRef: 'HMK M. 209',
    trueStatement:
      'Bir senetteki yazı veya imzanın inkâr edilmesi durumunda, bu konuda mahkemece bir karar verilinceye kadar o senet hiçbir işleme esas alınamaz; ancak senede dayanılarak daha önce konulmuş ihtiyati haciz tedbiri geçerliliğini korur.',
    trueHighlight: ['mahkemece bir karar verilinceye kadar o senet hiçbir işleme esas alınamaz', 'ihtiyati haciz tedbiri geçerliliğini korur'],
    trueCorrectPhrase: 'Yazı veya imza inkarında senet karar verilene kadar işleme esas alınamaz; ihtiyati haciz devam eder.',
    baseExplanation: 'HMK m. 209: Adi senette yazı veya imza inkar edilirse mahkeme sahtelik konusunda karar verinceye dek senet işleme esas alınamaz. Önceden konulmuş ihtiyati hacizler ise korunur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mahkemece bir karar verilinceye kadar o senet hiçbir işleme esas alınamaz',
      wrongPhrase: 'imza inkâr edilse dahi mahkeme o senede dayanarak derhâl nihai hüküm kurabilir',
      correctPhrase: 'mahkemece bir karar verilinceye kadar o senet hiçbir işleme esas alınamaz',
      explanation: 'HMK m. 209/1: Sahtelik iddiası çözülmeden senede dayanılarak esasa ilişkin hüküm verilemez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ihtiyati haciz tedbiri geçerliliğini korur',
      wrongPhrase: 'daha önce konulmuş tüm ihtiyati hacizler derhâl kendiliğinden hükümsüz kalır',
      correctPhrase: 'ihtiyati haciz tedbiri geçerliliğini korur',
      explanation: 'HMK m. 209/2: Senetteki sahtelik iddiası önceden konulmuş ihtiyati haczi kendiliğinden düşürmez.'
    }
  },

  // =========================================================================
  // CEZA VE CEZA MUHAKEMESİ (5237 TCK & 5271 CMK)
  // =========================================================================
  {
    id: 'rule-tck-ceza-sorumlulugunun-sahsiligi-p10',
    branch: 'TCK',
    subTopic: 'Ceza Sorumluluğunun Şahsiliği ve Tüzel Kişiler',
    articleRef: 'TCK M. 20',
    trueStatement:
      'Ceza sorumluluğu şahsidir; kimse başkasının fiilinden dolayı sorumlu tutulamaz ve tüzel kişiler hakkında ceza yaptırımı uygulanamaz; ancak suç dolayısıyla kanunda öngörülen güvenlik tedbiri niteliğindeki yaptırımlar saklıdır.',
    trueHighlight: ['Ceza sorumluluğu şahsidir', 'tüzel kişiler hakkında ceza yaptırımı uygulanamaz', 'güvenlik tedbiri niteliğindeki yaptırımlar saklıdır'],
    trueCorrectPhrase: 'Ceza sorumluluğu şahsidir; tüzel kişilere ceza verilemez, ancak güvenlik tedbiri uygulanabilir.',
    baseExplanation: 'TCK m. 20: Ceza sorumluluğu şahsidir (Anayasa m. 38). Tüzel kişiler suç faili olamaz ve haklarında hapis veya adli para cezası verilemez; sadece güvenlik tedbiri (müsadere, iznin iptali) uygulanabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tüzel kişiler hakkında ceza yaptırımı uygulanamaz',
      wrongPhrase: 'tüzel kişilerin yönetim kurulu üyelerine bakılmaksızın tüzel kişiliğe doğrudan hapis cezası verilebilir',
      correctPhrase: 'tüzel kişiler hakkında ceza yaptırımı uygulanamaz',
      explanation: 'TCK m. 20/2: Türk ceza hukukunda tüzel kişilerin cezai sorumluluğu yoktur; tüzel kişilere doğrudan hapis veya adli para cezası uygulanamaz.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'güvenlik tedbiri niteliğindeki yaptırımlar saklıdır',
      wrongPhrase: 'tüzel kişiler hakkında hiçbir güvenlik tedbiri veya idari yaptırım dahi uygulanamaz',
      correctPhrase: 'güvenlik tedbiri niteliğindeki yaptırımlar saklıdır',
      explanation: 'TCK m. 20/2 ve m. 60: Tüzel kişiler hakkında müsadere ve faaliyet izninin iptali gibi güvenlik tedbirlerine hükmolunabilir.'
    }
  },
  {
    id: 'rule-tck-maddi-unsurlarda-hata-p10',
    branch: 'TCK',
    subTopic: 'Suçun Maddi Unsurlarında Hata (Kastı Kaldıran Hata)',
    articleRef: 'TCK M. 30/1',
    trueStatement:
      'Fiilin icrası sırasında suçun kanuni tanımındaki maddi unsurlara ilişkin bilgisizlik kastı ortadan kaldırır; ancak bu hata dolayısıyla taksirli sorumluluk hali kanunda ayrıca suç olarak düzenlenmişse fail taksirinden dolayı sorumlu tutulur.',
    trueHighlight: ['maddi unsurlara ilişkin bilgisizlik kastı ortadan kaldırır', 'fail taksirinden dolayı sorumlu tutulur'],
    trueCorrectPhrase: 'Maddi unsurlarda hata kastı kaldırır; taksir hali kanunda yazılıysa taksirden sorumluluk doğar.',
    baseExplanation: 'TCK m. 30/1: Suçun maddi unsurlarındaki esaslı hata failin kastını kaldırır. Örneğin av hayvanı zannederek insana ateş eden failde kasten öldürme kastı yoktur; taksirli hali cezalandırılıyorsa taksirle öldürmeden sorumlu olur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'maddi unsurlara ilişkin bilgisizlik kastı ortadan kaldırır',
      wrongPhrase: 'maddi unsurlara ilişkin bilgisizlik failin kastını hiçbir surette etkilemez',
      correctPhrase: 'maddi unsurlara ilişkin bilgisizlik kastı ortadan kaldırır',
      explanation: 'TCK m. 30/1: Tipikliğin maddi unsurlarına ilişkin esaslı bilgisizlik failin kastını ortadan kaldırır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'fail taksirinden dolayı sorumlu tutulur',
      wrongPhrase: 'fail hiçbir şekilde taksirle dahi sorumlu tutulamaz ve mutlak olarak beraat eder',
      correctPhrase: 'fail taksirinden dolayı sorumlu tutulur',
      explanation: 'TCK m. 30/1: Hatanın taksirli olması ve o fiilin taksirli halinin kanunda cezalandırılması durumunda fail taksirden ceza alır.'
    }
  },
  {
    id: 'rule-tck-akil-hastaligi-guvenlik-tedbiri-p10',
    branch: 'TCK',
    subTopic: 'Akıl Hastalığı Sebebiyle Cezasızlık ve Güvenlik Tedbiri',
    articleRef: 'TCK M. 32/1',
    trueStatement:
      'Akıl hastalığı nedeniyle işlediği fiilin hukuki anlam ve sonuçlarını algılayamayan veya davranışlarını yönlendirme yeteneği önemli derecede azalmış olan kişiye ceza verilmez; ancak bu kişi hakkında akıl hastalarına özgü güvenlik tedbirine hükmolunur.',
    trueHighlight: ['kişiye ceza verilmez', 'akıl hastalarına özgü güvenlik tedbirine hükmolunur'],
    trueCorrectPhrase: 'Tam akıl hastasına ceza verilmez; akıl hastalarına özgü güvenlik tedbiri uygulanır.',
    baseExplanation: 'TCK m. 32/1: Algılama veya yönlendirme yeteneğini tamamen kaldıran akıl hastalığında faile kusuru bulunmadığından ceza verilmez (CMK 223/3-a). Ancak TCK m. 57 uyarınca yüksek güvenlikli sağlık kurumunda koruma ve tedavi tedbiri uygulanır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kişiye ceza verilmez',
      wrongPhrase: 'kişiye tam ceza verilir ancak infazı ertelenir',
      correctPhrase: 'kişiye ceza verilmez',
      explanation: 'TCK m. 32/1: Tam akıl hastası kişiye ceza verilmesi hukuken mümkün değildir; kusurluluk ehliyeti yoktur.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'akıl hastalarına özgü güvenlik tedbirine hükmolunur',
      wrongPhrase: 'bu kişi hakkında hiçbir güvenlik tedbiri dahi uygulanmaksızın derhâl salıverilir',
      correctPhrase: 'akıl hastalarına özgü güvenlik tedbirine hükmolunur',
      explanation: 'TCK m. 57: Ceza verilmemesi durumunda mahkemece akıl hastalarına özgü güvenlik tedbirine hükmolunması zorunludur.'
    }
  },
  {
    id: 'rule-cmk-herkes-tarafindan-yakalama-p10',
    branch: 'CMK',
    subTopic: 'Suçüstü Halinde Herkes Tarafından Geçici Yakalama Yetkisi',
    articleRef: 'CMK M. 90/1',
    trueStatement:
      'Kişiye suçu işlerken rastlanması veya suçüstü bir fiilden dolayı izlenen kişinin kaçması olasılığının bulunması hâlinde herkes tarafından geçici yakalama yapılabilir.',
    trueHighlight: ['Kişiye suçu işlerken rastlanması', 'herkes tarafından geçici yakalama yapılabilir'],
    trueCorrectPhrase: 'Suçüstü halinde veya kaçma olasılığı olan fail herkes tarafından geçici olarak yakalanabilir.',
    baseExplanation: 'CMK m. 90/1: Suçüstü halinde veya suçüstünden hemen sonra izlenen failin kaçma olasılığı varsa kolluk görevlisi olmasa dahi herhangi bir vatandaş tarafından geçici yakalama yapılabilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'herkes tarafından geçici yakalama yapılabilir',
      wrongPhrase: 'yalnızca üniformalı adli kolluk memurları tarafından yakalama yapılabilir',
      correctPhrase: 'herkes tarafından geçici yakalama yapılabilir',
      explanation: 'CMK m. 90/1: Suçüstü hallerinde yakalama yetkisi yalnızca kolluğa ait değildir; herkes (tüm vatandaşlar) tarafından yakalama yapılabilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kişiye suçu işlerken rastlanması',
      wrongPhrase: 'Kişinin geçmişte suç işlediğinden şüphelenilmesi',
      correctPhrase: 'Kişiye suçu işlerken rastlanması',
      explanation: 'CMK m. 90/1: Herkesin yakalama yetkisi geçmişteki soyut şüphelere değil, suçüstü haline veya hemen sonrasındaki takibe hasredilmiştir.'
    }
  },
  {
    id: 'rule-cmk-koruma-tedbiri-tazminat-sure-p10',
    branch: 'CMK',
    subTopic: 'Haksız Yakalama ve Tutuklama Nedeniyle Tazminat İsteme Süresi',
    articleRef: 'CMK M. 141 & 142',
    trueStatement:
      'Haksız yakalanan veya tutuklanan kişilerin Devletten maddi ve manevi tazminat istemi, kararın kesinleştiğinin ilgilisine tebliğinden itibaren üç ay ve her hâlde kararın kesinleşme tarihinden itibaren bir yıl içinde ağır ceza mahkemesinden istenir.',
    trueHighlight: ['üç ay ve her hâlde kararın kesinleşme tarihinden itibaren bir yıl içinde', 'ağır ceza mahkemesinden istenir'],
    trueCorrectPhrase: 'Haksız tutuklama tazminatı tebliğden itibaren 3 ay ve kesinleşmeden itibaren 1 yılda ağır cezada açılır.',
    baseExplanation: 'CMK m. 141 ve m. 142: Koruma tedbirleri tazminat davası, beraat/kovuşturmaya yer olmadığı kararının kesinleştiğinin tebliğinden itibaren 3 ay ve kesinleşmeden itibaren 1 yıl içinde oturduğu yer Ağır Ceza Mahkemesinde açılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç ay ve her hâlde kararın kesinleşme tarihinden itibaren bir yıl içinde',
      wrongPhrase: 'bir yıl ve her hâlde kararın kesinleşme tarihinden itibaren on yıl içinde',
      correctPhrase: 'üç ay ve her hâlde kararın kesinleşme tarihinden itibaren bir yıl içinde',
      explanation: 'CMK m. 142/1: Tazminat davasında süreler 1 yıl/10 yıl değil, 3 ay ve 1 yıldır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ağır ceza mahkemesinden istenir',
      wrongPhrase: 'idare mahkemesinde tam yargı davası açılarak istenir',
      correctPhrase: 'ağır ceza mahkemesinden istenir',
      explanation: 'CMK m. 142/2: Haksız tutuklama tazminatı idari yargıda değil, adli yargıda Ağır Ceza Mahkemesinde açılır.'
    }
  },
  {
    id: 'rule-cmk-temyiz-edilemeyen-kararlar-5-yil-p10',
    branch: 'CMK',
    subTopic: 'Ceza Muhakemesinde Temyiz Edilemeyen Kararlar (5 Yıl ve Daha Az)',
    articleRef: 'CMK M. 286/2',
    trueStatement:
      'İlk derece mahkemelerinden verilen beş yıl veya daha az hapis cezaları ile miktarı ne olursa olsun adli para cezalarına karşı istinaf başvurusunun esastan reddine dair bölge adliye mahkemesi kararları temyiz edilemez.',
    trueHighlight: ['beş yıl veya daha az hapis cezaları', 'istinaf başvurusunun esastan reddine dair bölge adliye mahkemesi kararları temyiz edilemez'],
    trueCorrectPhrase: '5 yıl veya daha az hapis cezalarının istinafta esastan reddi kararları temyiz edilemez, kesindir.',
    baseExplanation: 'CMK m. 286/2-a: İlk derece mahkemesinden verilen 5 yıl veya daha az süreli hapis cezalarının istinafça esastan reddedilmesi kararları temyize tabi değildir; istinafta kesinleşir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl veya daha az hapis cezaları',
      wrongPhrase: 'on beş yıl veya daha az hapis cezaları',
      correctPhrase: 'beş yıl veya daha az hapis cezaları',
      explanation: 'CMK m. 286/2-a: Temyiz yasağı sınırı 15 yıl değil, 5 yıl veya daha az hapis cezalarıdır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'istinaf başvurusunun esastan reddine dair bölge adliye mahkemesi kararları temyiz edilemez',
      wrongPhrase: 'istinaf başvurusunun esastan reddine dair kararlar da istisnasız her durumda Yargıtayda temyiz edilebilir',
      correctPhrase: 'istinaf başvurusunun esastan reddine dair bölge adliye mahkemesi kararları temyiz edilemez',
      explanation: 'CMK m. 286/2: Kanun koyucu istinafın esastan ret kararlarında 5 yıl altı cezalar için temyiz yolunu açıkça kapatmıştır.'
    }
  },

  // =========================================================================
  // MEDENİ HUKUK (4721 SAYILI TMK)
  // =========================================================================
  {
    id: 'rule-tmk-ayirt-etme-gucu-kesin-hukumsuzluk-p10',
    branch: 'Medeni',
    subTopic: 'Ayırt Etme Gücünden Yoksunluk ve Kesin Hükümsüzlük',
    articleRef: 'TMK M. 15',
    trueStatement:
      'Kanunda gösterilen ayrık durumlar saklı kalmak üzere, ayırt etme gücü bulunmayan kimsenin fiilleri hukuki sonuç doğurmaz ve yaptığı hukuki işlemler kesin hükümsüzdür.',
    trueHighlight: ['ayırt etme gücü bulunmayan kimsenin fiilleri hukuki sonuç doğurmaz', 'kesin hükümsüzdür'],
    trueCorrectPhrase: 'Ayırt etme gücü olmayanın işlemleri kural olarak kesin hükümsüzdür (butlandır).',
    baseExplanation: 'TMK m. 15: Ayırt etme gücü bulunmayan tam ehliyetsizlerin işlemleri kural olarak mutlak butlanla sakattır (hükümsüzdür). İstisnaları: TMK m. 2 (dürüstlük kuralı), TMK m. 99 (haksız fiil hakkaniyet sorumluluğu) gibi ayrık hallerdir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kesin hükümsüzdür',
      wrongPhrase: 'yalnızca askıda hükümsüz olup vasinin icazetiyle baştan itibaren geçerli hale gelir',
      correctPhrase: 'kesin hükümsüzdür',
      explanation: 'TMK m. 15: Ayırt etme gücü bulunmayanın işlemleri askıda hükümsüz değil, kesin hükümsüzdür (butlandır); vasi sonradan icazet veremez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ayırt etme gücü bulunmayan kimsenin fiilleri hukuki sonuç doğurmaz',
      wrongPhrase: 'ayırt etme gücü bulunmayan kimse de borçlandırıcı işlemleri tek başına geçerli şekilde yapabilir',
      correctPhrase: 'ayırt etme gücü bulunmayan kimsenin fiilleri hukuki sonuç doğurmaz',
      explanation: 'TMK m. 15: Fiil ehliyetinin ilk ve zorunlu koşulu ayırt etme gücüdür; bu güç yoksa hukuki işlem yapılamaz.'
    }
  },
  {
    id: 'rule-tmk-pek-kotu-davranis-bosanma-p10',
    branch: 'Medeni',
    subTopic: 'Hayata Kast, Pek Kötü veya Onur Kırıcı Davranış Sebebiyle Boşanma',
    articleRef: 'TMK M. 162',
    trueStatement:
      'Eşlerden her biri diğeri tarafından hayatına kastedilmesi veya kendisine pek kötü davranılması ya da ağır derecede onur kırıcı bir davranışta bulunulması sebebiyle boşanma davası açabilir; dava hakkı öğrenmeden başlayarak altı ay ve her hâlde sebebin doğumundan itibaren beş yıl geçmekle düşer.',
    trueHighlight: ['öğrenmeden başlayarak altı ay ve her hâlde sebebin doğumundan itibaren beş yıl geçmekle düşer'],
    trueCorrectPhrase: 'Hayata kast ve pek kötü muamelede dava süresi öğrenmeden itibaren 6 ay ve her halde 5 yıldır.',
    baseExplanation: 'TMK m. 162: Hayata kast, pek kötü veya onur kırıcı davranış sebebiyle boşanma davası açma süresi öğrenmeden itibaren 6 ay ve her halde eylemin üzerinden 5 yıl geçmekle düşer. Affeden eşin dava hakkı yoktur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrenmeden başlayarak altı ay ve her hâlde sebebin doğumundan itibaren beş yıl geçmekle düşer',
      wrongPhrase: 'öğrenmeden başlayarak iki yıl ve her hâlde sebebin doğumundan itibaren on yıl geçmekle düşer',
      correctPhrase: 'öğrenmeden başlayarak altı ay ve her hâlde sebebin doğumundan itibaren beş yıl geçmekle düşer',
      explanation: 'TMK m. 162/2: Hak düşürücü süreler 2 yıl/10 yıl değil, 6 ay ve 5 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sebebin doğumundan itibaren beş yıl geçmekle düşer',
      wrongPhrase: 'bu sebeple açılacak boşanma davaları hiçbir zamanaşımı veya hak düşürücü süreye tabi değildir',
      correctPhrase: 'sebebin doğumundan itibaren beş yıl geçmekle düşer',
      explanation: 'TMK m. 162/2: Mutlak üst sınır eylemin doğumundan itibaren 5 yıldır.'
    }
  },
  {
    id: 'rule-tmk-olaganustu-kazandirici-zamanasimi-p10',
    branch: 'Medeni',
    subTopic: 'Olağanüstü Kazandırıcı Zamanaşımı ile Taşınmaz İktisabı (20 Yıl)',
    articleRef: 'TMK M. 713/1',
    trueStatement:
      'Tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi, o taşınmazın kendi adına tesciline karar verilmesini isteyebilir.',
    trueHighlight: ['yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi', 'kendi adına tesciline karar verilmesini isteyebilir'],
    trueCorrectPhrase: 'Tapusuz taşınmazda davasız aralıksız 20 yıl malik sıfatıyla zilyetlik tescil hakkı kazandırır.',
    baseExplanation: 'TMK m. 713/1: Olağanüstü zamanaşımı süresi 20 yıldır. Zilyetliğin davasız, aralıksız ve malik sıfatıyla sürmesi zorunludur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi',
      wrongPhrase: 'beş yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi',
      correctPhrase: 'yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi',
      explanation: 'TMK m. 713/1: Olağanüstü kazandırıcı zamanaşımı süresi 5 veya 10 yıl değil, 20 yıldır (olağan zamanaşımı ise TMK 712’de tapulu taşınmazda 10 yıldır).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Tapu kütüğünde kayıtlı olmayan bir taşınmazı',
      wrongPhrase: 'Tapu kütüğünde başkası adına tescilli olup maliki sağ ve bilinen herhangi bir taşınmazı',
      correctPhrase: 'Tapu kütüğünde kayıtlı olmayan bir taşınmazı',
      explanation: 'TMK m. 713/1: Maliki tapudan bilinen ve ulaşılan taşınmazlar 20 yıllık zamanaşımı ile iktisap edilemez.'
    }
  },

  // =========================================================================
  // BORÇLAR HUKUKU (6098 SAYILI TBK)
  // =========================================================================
  {
    id: 'rule-tbk-muvazaa-gecersizlik-p10',
    branch: 'Borçlar',
    subTopic: 'Muvazaa (Danışıklı İşlem) ve Hukuki Niteliği',
    articleRef: 'TBK M. 19',
    trueStatement:
      'Bir sözleşmenin türünün ve içeriğinin belirlenmesinde tarafların gerçek ve ortak iradeleri esas alınır; tarafların gerçek amaçlarını gizlemek için yaptıkları muvazaalı işlemler taraflar arasında kesin hükümsüzdür ve muvazaa iddiası her zaman ileri sürülebilir.',
    trueHighlight: ['tarafların gerçek ve ortak iradeleri esas alınır', 'muvazaalı işlemler taraflar arasında kesin hükümsüzdür'],
    trueCorrectPhrase: 'Muvazaada tarafların gerçek iradesi aranır; görünürdeki işlem kesin hükümsüzdür (butlandır).',
    baseExplanation: 'TBK m. 19: Görünürdeki muvazaalı işlem tarafların gerçek iradesini yansıtmadığından kesin hükümsüzdür (butlandır). Muvazaa iddiası zamanaşımına tabi değildir, her zaman ileri sürülebilir ve hâkimce re’sen dikkate alınır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'muvazaalı işlemler taraflar arasında kesin hükümsüzdür',
      wrongPhrase: 'muvazaalı işlemler taraflar arasında bir yıl içinde iptal edilmedikçe tamamen geçerli sayılır',
      correctPhrase: 'muvazaalı işlemler taraflar arasında kesin hükümsüzdür',
      explanation: 'TBK m. 19: Muvazaa iptal edilebilirlik değil, mutlak butlan (kesin hükümsüzlük) yaptırımına tabidir; süreyle geçerlilik kazanmaz.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'muvazaa iddiası her zaman ileri sürülebilir',
      wrongPhrase: 'muvazaa iddiası işlemin yapıldığı tarihten itibaren bir ay geçmekle zamanaşımına uğrar',
      correctPhrase: 'muvazaa iddiası her zaman ileri sürülebilir',
      explanation: 'TBK m. 19 ve Yargıtay İçtihadı: Butlan iddiası hiçbir süreye tabi değildir, her zaman mahkemede iddia edilebilir.'
    }
  },
  {
    id: 'rule-tbk-muteselsil-borcluluk-p10',
    branch: 'Borçlar',
    subTopic: 'Müteselsil Borçlulukta Alacaklının Seçim Hakkı',
    articleRef: 'TBK M. 162 & 163',
    trueStatement:
      'Müteselsil borçlulukta alacaklı, borcun tamamının veya bir kısmının ifasını borçluların hepsinden veya yalnız birinden isteyebilir; borcun tamamı ödeninceye kadar bütün borçluların sorumluluğu devam eder.',
    trueHighlight: ['borçluların hepsinden veya yalnız birinden isteyebilir', 'borcun tamamı ödeninceye kadar bütün borçluların sorumluluğu devam eder'],
    trueCorrectPhrase: 'Alacaklı müteselsil borçluların dilediğinden borcun tamamını talep edebilir.',
    baseExplanation: 'TBK m. 163: Alacaklı borçlular arasında eşit paylaştırma yapmak zorunda değildir; dilerse sadece birine gidip tüm borcu tahsil edebilir. Borçlular arasındaki rücu iç ilişkiye aittir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borçluların hepsinden veya yalnız birinden isteyebilir',
      wrongPhrase: 'ancak tüm borçlulara payları oranında eşit olarak paylaştırarak dava açmak zorundadır',
      correctPhrase: 'borçluların hepsinden veya yalnız birinden isteyebilir',
      explanation: 'TBK m. 163: Müteselsil borçlulukta kısmi talep zorunluluğu yoktur; alacaklı serbestçe dilediği borçludan borcun tamamını isteyebilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borcun tamamı ödeninceye kadar bütün borçluların sorumluluğu devam eder',
      wrongPhrase: 'alacaklı borçlulardan birine başvurduğu anda diğer tüm borçluların borcu kendiliğinden sona erer',
      correctPhrase: 'borcun tamamı ödeninceye kadar bütün borçluların sorumluluğu devam eder',
      explanation: 'TBK m. 163/2: Bir borçluya takip veya dava açılması diğerlerini borçtan kurtarmaz; borç tamamen ifa edilinceye kadar hepsi sorumludur.'
    }
  },
  {
    id: 'rule-tmk-yerlesim-yeri-teklik-p10',
    branch: 'Medeni',
    subTopic: 'Yerleşim Yeri Tanımı ve Tek Yerleşim Yeri İlkesi',
    articleRef: 'TMK M. 19',
    trueStatement:
      'Yerleşim yeri bir kimsenin sürekli kalma niyetiyle oturduğu yerdir; bir kimsenin aynı zamanda birden çok yerleşim yeri olamaz.',
    trueHighlight: ['sürekli kalma niyetiyle oturduğu yerdir', 'bir kimsenin aynı zamanda birden çok yerleşim yeri olamaz'],
    trueCorrectPhrase: 'Yerleşim yeri sürekli kalma niyetli yerdir; aynı anda birden çok yerleşim yeri olamaz.',
    baseExplanation: 'TMK m. 19: Yerleşim yerinin iki unsuru vardır: Oturma (maddi) ve sürekli kalma niyeti (manevi). Türk Medeni Hukukunda "yerleşim yerinin tekliği" ilkesi geçerlidir; kimsenin birden fazla yerleşim yeri olamaz.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bir kimsenin aynı zamanda birden çok yerleşim yeri olamaz',
      wrongPhrase: 'bir kimsenin aynı zamanda dilediği kadar çok yerleşim yeri bulunabilir',
      correctPhrase: 'bir kimsenin aynı zamanda birden çok yerleşim yeri olamaz',
      explanation: 'TMK m. 19/2: Kanun tek yerleşim yeri ilkesini emretmiştir; birden çok yerleşim yeri kabul edilmez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sürekli kalma niyetiyle oturduğu yerdir',
      wrongPhrase: 'yalnızca nüfus kütüğünün kayıtlı bulunduğu ilçe merkezidir',
      correctPhrase: 'sürekli kalma niyetiyle oturduğu yerdir',
      explanation: 'TMK m. 19/1: Yerleşim yeri nüfus kaydı değil, kişinin fiilen ve sürekli kalma kastıyla yaşadığı yerdir.'
    }
  },
  {
    id: 'rule-tbk-oneriyle-baglilik-p10',
    branch: 'Borçlar',
    subTopic: 'Süreli Öneride Önerenin Bağlılığı',
    articleRef: 'TBK M. 47',
    trueStatement:
      'Kabul için süre belirlenerek yapılan bir öneri ile öneren, bu sürenin sona ermesine kadar bağlıdır; kabul bu süre içinde kendisine ulaşmazsa öneren önerisiyle bağlılıktan kurtulur.',
    trueHighlight: ['bu sürenin sona ermesine kadar bağlıdır', 'kabul bu süre içinde kendisine ulaşmazsa öneren önerisiyle bağlılıktan kurtulur'],
    trueCorrectPhrase: 'Öneren belirlediği sürenin sonuna kadar bağlıdır; süre içinde kabul ulaşmazsa bağlılık biter.',
    baseExplanation: 'TBK m. 47: Kabul için bir süre tayin eden öneren, bu süre doluncaya kadar önerisinden tek taraflı olarak dönemez. Kabul bu sürede kendisine ulaşmazsa öneri kendiliğinden hükümsüz kalır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu sürenin sona ermesine kadar bağlıdır',
      wrongPhrase: 'öneriyi yaptığı andan itibaren dilediği her an tek taraflı olarak önerisinden dönebilir',
      correctPhrase: 'bu sürenin sona ermesine kadar bağlıdır',
      explanation: 'TBK m. 47/1: Süreli öneride öneren belirlediği süre bitmeden tek taraflı iradeyle önerisini geri alamaz.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kabul bu süre içinde kendisine ulaşmazsa öneren önerisiyle bağlılıktan kurtulur',
      wrongPhrase: 'kabul bu süreden sonra ulaşsa dahi öneren ömür boyu o öneriyle bağlı kalır',
      correctPhrase: 'kabul bu süre içinde kendisine ulaşmazsa öneren önerisiyle bağlılıktan kurtulur',
      explanation: 'TBK m. 47/2: Süresinde ulaşmayan kabul gecikmiş kabuldür ve yeni bir öneri sayılır; önerenin bağlılığı kalkar.'
    }
  },
  {
    id: 'rule-hmk-tasarruf-ilkesi-p10',
    branch: 'HMK',
    subTopic: 'Medeni Usul Hukukunda Tasarruf İlkesi',
    articleRef: 'HMK M. 24',
    trueStatement:
      'Hâkim, iki taraftan birinin talebi olmaksızın kendiliğinden bir davayı inceleyemez ve karara bağlayamaz; kanunda açıkça yetki verilmedikçe hiç kimse kendi lehine olan bir davayı açmaya zorlanamaz.',
    trueHighlight: ['iki taraftan birinin talebi olmaksızın kendiliğinden bir davayı inceleyemez ve karara bağlayamaz', 'hiç kimse kendi lehine olan bir davayı açmaya zorlanamaz'],
    trueCorrectPhrase: 'Hâkim talep olmaksızın kendiliğinden davaya bakamaz; kimse dava açmaya zorlanamaz.',
    baseExplanation: 'HMK m. 24: Medeni usul hukukunda tasarruf ilkesi (nemo iudex sine actore) geçerlidir. Hâkim resen dava açamaz veya taraf talebi olmadan uyuşmazlığı inceleyemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'iki taraftan birinin talebi olmaksızın kendiliğinden bir davayı inceleyemez ve karara bağlayamaz',
      wrongPhrase: 'tarafların dava dilekçesi olmasa dahi resen dava açıp esastan karara bağlayabilir',
      correctPhrase: 'iki taraftan birinin talebi olmaksızın kendiliğinden bir davayı inceleyemez ve karara bağlayamaz',
      explanation: 'HMK m. 24/1: Tasarruf ilkesi uyarınca özel hukukta hâkim kendiliğinden dava açıp inceleyemez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'hiç kimse kendi lehine olan bir davayı açmaya zorlanamaz',
      wrongPhrase: 'tüm vatandaşlar lehlerine olan hakları mahkemece re’sen açılacak davalarla takip etmek zorundadır',
      correctPhrase: 'hiç kimse kendi lehine olan bir davayı açmaya zorlanamaz',
      explanation: 'HMK m. 24/2: Hak sahibi dilerse dava açar, dilerse açmaz; kimse hak aramaya veya dava açmaya zorlanamaz.'
    }
  },
  {
    id: 'rule-iik-ipotek-paraya-cevirme-icra-emri-p10',
    branch: 'İcra',
    subTopic: 'İpoteğin Paraya Çevrilmesinde İcra Emri ve 30 Günlük Süre',
    articleRef: 'İİK M. 149',
    trueStatement:
      'İcra memuru, ipotek akit tablosunun kayıtsız şartsız bir para borcu ikrarını içerdiğini görürse borçluya ve varsa taşınmaz malikine bir icra emri tebliğ eder; bu icra emrinde borcun otuz gün içinde ödenmesi ihtar edilir.',
    trueHighlight: ['bir icra emri tebliğ eder', 'borcun otuz gün içinde ödenmesi ihtar edilir'],
    trueCorrectPhrase: 'Para borcu ikrarı içeren ipotekte 30 günlük icra emri tebliğ edilir.',
    baseExplanation: 'İİK m. 149: İpotek akit tablosu kayıtsız şartsız para borcu ikrarı içeriyorsa ilamlı takip gibi icra emri gönderilir ve ödeme süresi 30 gündür (ilamsızdaki 7 gün değil).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'borcun otuz gün içinde ödenmesi ihtar edilir',
      wrongPhrase: 'borcun yedi gün içinde ödenmesi ihtar edilir',
      correctPhrase: 'borcun otuz gün içinde ödenmesi ihtar edilir',
      explanation: 'İİK m. 149/1: İpoteğin paraya çevrilmesi yoluyla ilamlı takipte icra emri ödeme süresi 7 gün değil, 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bir icra emri tebliğ eder',
      wrongPhrase: 'genel haciz yolundaki gibi bir ödeme emri tebliğ eder',
      correctPhrase: 'bir icra emri tebliğ eder',
      explanation: 'İİK m. 149: Belge resmi senet mahiyetinde olduğundan icra memuru ödeme emri değil, icra emri tebliğ eder.'
    }
  },
  {
    id: 'rule-cmk-ihbar-sikayet-mercileri-p10',
    branch: 'CMK',
    subTopic: 'Suç İhbarı ve Şikâyetin Yapılacağı Merciler',
    articleRef: 'CMK M. 158',
    trueStatement:
      'Suça ilişkin ihbar veya şikâyet, Cumhuriyet Başsavcılığına veya kolluk makamlarına yapılabilir; valilik veya kaymakamlığa ya da mahkemeye yapılan ihbar veya şikâyet, ilgili Cumhuriyet Başsavcılığına gönderilir.',
    trueHighlight: ['Cumhuriyet Başsavcılığına veya kolluk makamlarına yapılabilir', 'ilgili Cumhuriyet Başsavcılığına gönderilir'],
    trueCorrectPhrase: 'İhbar ve şikâyet savcılığa veya kolluğa yapılır; valilik/mahkemeye yapılanlar savcılığa iletilir.',
    baseExplanation: 'CMK m. 158: Suç ihbar veya şikâyeti doğrudan Cumhuriyet Savcılığına veya kolluğa (polis, jandarma) yapılır. Valilik, kaymakamlık veya mahkemeye yapılmışsa derhal savcılığa intikal ettirilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Cumhuriyet Başsavcılığına veya kolluk makamlarına yapılabilir',
      wrongPhrase: 'yalnızca Adalet Bakanlığına bizzat başvurularak yapılabilir',
      correctPhrase: 'Cumhuriyet Başsavcılığına veya kolluk makamlarına yapılabilir',
      explanation: 'CMK m. 158/1: Suç ihbar ve şikâyetleri yerel savcılık veya kolluk makamlarına yapılır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ilgili Cumhuriyet Başsavcılığına gönderilir',
      wrongPhrase: 'işleme konulmaksızın derhâl ilgilisine iade edilir',
      correctPhrase: 'ilgili Cumhuriyet Başsavcılığına gönderilir',
      explanation: 'CMK m. 158/3: İdari makamlara veya mahkemelere yapılan suç bildirimleri geri çevrilemez; yetkili savcılığa gönderilmek zorundadır.'
    }
  }
];
