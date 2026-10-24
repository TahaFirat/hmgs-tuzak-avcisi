import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 9 (21 Kural = 63 Yeni Doğrulanmış Kart)
 * İş Hukuku, Vergi Hukuku, Avukatlık Hukuku, Ceza/CMK, Medeni/HMK ve Ticaret Hukukunda
 * en sık sorulan kanun maddelerini içeren yüksek güvenlikli soru havuzu.
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART9_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // İŞ HUKUKU (4857 SAYILI İŞ KANUNU)
  // =========================================================================
  {
    id: 'rule-is-ihbar-sureleri-p9',
    branch: 'İş Hukuku',
    subTopic: 'Süreli Fesihte Bildirim (İhbar) Süreleri',
    articleRef: '4857 s.K. M. 17',
    trueStatement:
      'Belirsiz süreli iş sözleşmelerinin feshinden önce durumun diğer tarafa bildirilmesi gerekir; iş sözleşmeleri işi altı aydan az sürmüş işçi için iki hafta, altı aydan bir buçuk yıla kadar sürmüş işçi için dört hafta, bir buçuk yıldan üç yıla kadar sürmüş işçi için altı hafta, üç yıldan fazla sürmüş işçi için sekiz hafta sonra feshedilmiş sayılır.',
    trueHighlight: ['altı aydan az sürmüş işçi için iki hafta', 'üç yıldan fazla sürmüş işçi için sekiz hafta sonra'],
    trueCorrectPhrase: 'İhbar süreleri kıdeme göre 2, 4, 6 ve 8 haftadır; 3 yıldan fazla kıdemde 8 haftadır.',
    baseExplanation: '4857 s.K. m. 17: İhbar süreleri: 0-6 ay için 2 hafta, 6 ay-1.5 yıl için 4 hafta, 1.5-3 yıl için 6 hafta, 3 yıldan fazla kıdem için 8 haftadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç yıldan fazla sürmüş işçi için sekiz hafta sonra feshedilmiş sayılır',
      wrongPhrase: 'üç yıldan fazla sürmüş işçi için altı ay sonra feshedilmiş sayılır',
      correctPhrase: 'üç yıldan fazla sürmüş işçi için sekiz hafta sonra feshedilmiş sayılır',
      explanation: '4857 s.K. m. 17: 3 yıldan fazla sürmüş işçi için azami yasal ihbar süresi 6 ay değil, 8 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı aydan az sürmüş işçi için iki hafta',
      wrongPhrase: 'altı aydan az sürmüş işçi için dört hafta',
      correctPhrase: 'altı aydan az sürmüş işçi için iki hafta',
      explanation: '4857 s.K. m. 17: Altı aydan az kıdemi olan işçi için yasal bildirim süresi 2 haftadır.'
    }
  },
  {
    id: 'rule-is-ise-iade-sureleri-p9',
    branch: 'İş Hukuku',
    subTopic: 'İşe İade Davasında Arabuluculuk ve Dava Açma Süresi',
    articleRef: '4857 s.K. M. 20',
    trueStatement:
      'İş sözleşmesi feshedilen işçi, fesih bildiriminde sebep gösterilmediği veya gösterilen sebebin geçerli bir sebep olmadığı iddiası ile fesih bildiriminin tebliği tarihinden itibaren bir ay içinde işe iade talebiyle arabulucuya başvurmak zorundadır; arabuluculuk faaliyeti sonunda anlaşmaya varılamaması hâlinde, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir.',
    trueHighlight: ['fesih bildiriminin tebliği tarihinden itibaren bir ay içinde', 'son tutanağın düzenlendiği tarihten itibaren iki hafta içinde'],
    trueCorrectPhrase: 'İşe iade için tebliğden itibaren 1 ayda arabulucuya gidilmeli; tutanaktan itibaren 2 haftada dava açılmalıdır.',
    baseExplanation: '4857 s.K. m. 20 (7036 s.K. değişikliği): İşe iade için fesih bildiriminden itibaren 1 ay içinde arabulucuya başvurulmalıdır. Anlaşamama tutanağından itibaren 2 hafta içinde iş mahkemesinde dava açılmalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'fesih bildiriminin tebliği tarihinden itibaren bir ay içinde',
      wrongPhrase: 'fesih bildiriminin tebliği tarihinden itibaren bir yıl içinde',
      correctPhrase: 'fesih bildiriminin tebliği tarihinden itibaren bir ay içinde',
      explanation: '4857 s.K. m. 20/1: İşe iade arabuluculuk başvuru süresi 1 yıl değil, tebliğden itibaren 1 aydır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'son tutanağın düzenlendiği tarihten itibaren iki hafta içinde',
      wrongPhrase: 'son tutanağın düzenlendiği tarihten itibaren üç ay içinde',
      correctPhrase: 'son tutanağın düzenlendiği tarihten itibaren iki hafta içinde',
      explanation: '4857 s.K. m. 20/1: Arabulucu son tutanağının düzenlenmesinden itibaren dava açma süresi 3 ay değil, 2 haftadır.'
    }
  },
  {
    id: 'rule-is-hakli-fesih-6-gun-p9',
    branch: 'İş Hukuku',
    subTopic: 'Ahlak ve İyiniyete Aykırılık Sebebiyle Haklı Fesihte Hak Düşürücü Süre',
    articleRef: '4857 s.K. M. 26',
    trueStatement:
      'Ahlak ve iyi niyet kurallarına uymayan hallere dayanarak işçi veya işveren için tanınmış olan sözleşmeyi fesih yetkisi, iki taraftan birinin bu çeşit davranışlarda bulunduğunu diğer tarafın öğrendiği günden başlayarak altı iş günü geçtikten ve her halde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz.',
    trueHighlight: ['öğrendiği günden başlayarak altı iş günü geçtikten', 'fiilin gerçekleşmesinden itibaren bir yıl sonra'],
    trueCorrectPhrase: 'Ahlak ve iyiniyete aykırılıkta haklı fesih süresi öğrenmeden itibaren 6 iş günü ve fiilden itibaren 1 yıldır.',
    baseExplanation: '4857 s.K. m. 26: Ahlak ve iyi niyet kurallarına aykırılıkta haklı fesih hakkı öğrenmeden itibaren 6 iş günü ve her halde fiilden itibaren 1 yılda düşer (maddi çıkar sağlama durumunda 1 yıllık sınır uygulanmaz).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği günden başlayarak altı iş günü geçtikten',
      wrongPhrase: 'öğrendiği günden başlayarak otuz gün geçtikten',
      correctPhrase: 'öğrendiği günden başlayarak altı iş günü geçtikten',
      explanation: '4857 s.K. m. 26/1: Süre 30 takvim günü değil, 6 iş günüdür.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'fiilin gerçekleşmesinden itibaren bir yıl sonra',
      wrongPhrase: 'fiilin gerçekleşmesinden itibaren beş yıl sonra',
      correctPhrase: 'fiilin gerçekleşmesinden itibaren bir yıl sonra',
      explanation: '4857 s.K. m. 26/1: Mutlak hak düşürücü süre 5 yıl değil, fiilin gerçekleşmesinden itibaren 1 yıldır.'
    }
  },
  {
    id: 'rule-is-yillik-ucretli-izin-p9',
    branch: 'İş Hukuku',
    subTopic: 'Yıllık Ücretli İzin Süreleri ve Genç/Yaşlı İşçi İstisnası',
    articleRef: '4857 s.K. M. 53',
    trueStatement:
      'İşçilere verilecek yıllık ücretli izin süresi, hizmet süresi bir yıldan beş yıla kadar olanlara ondört günden, beş yıldan fazla onbeş yıldan az olanlara yirmi günden, onbeş yıl ve daha fazla olanlara yirmialtı günden az olamaz; ancak onsekiz ve daha küçük yaştaki işçiler ile elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz.',
    trueHighlight: ['bir yıldan beş yıla kadar olanlara ondört günden', 'onsekiz ve daha küçük yaştaki işçiler ile elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz'],
    trueCorrectPhrase: 'Yıllık izin 14, 20 ve 26 gündür; 18 yaş altı ve 50 yaş üstü için en az 20 gündür.',
    baseExplanation: '4857 s.K. m. 53: Kıdeme göre izin: 1-5 yıl: en az 14 gün, 5-15 yıl: en az 20 gün, 15 yıl ve üzeri: en az 26 gün. 18 yaşından küçük veya 50 yaşından büyük işçilere en az 20 gün izin verilmesi emredicidir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'bir yıldan beş yıla kadar olanlara ondört günden',
      wrongPhrase: 'bir yıldan beş yıla kadar olanlara yedi günden',
      correctPhrase: 'bir yıldan beş yıla kadar olanlara ondört günden',
      explanation: '4857 s.K. m. 53/4: 1-5 yıl arası kıdem için asgari yıllık izin süresi 7 gün değil, 14 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'onsekiz ve daha küçük yaştaki işçiler ile elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz',
      wrongPhrase: 'işçinin yaşına bakılmaksızın tüm işçilere ilk beş yıl boyunca sadece ondört gün izin verilir',
      correctPhrase: 'onsekiz ve daha küçük yaştaki işçiler ile elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz',
      explanation: '4857 s.K. m. 53/5: 18 ve daha küçük yaştaki veya 50 ve daha yukarı yaştaki işçilerde kıdem ne olursa olsun izin 20 günden az olamaz.'
    }
  },
  {
    id: 'rule-is-fazla-calisma-ucreti-p9',
    branch: 'İş Hukuku',
    subTopic: 'Fazla Çalışma Tanımı, Ücret Zammı ve Yıllık Üst Sınır',
    articleRef: '4857 s.K. M. 41',
    trueStatement:
      'Haftalık kırk beş saati aşan çalışmalar fazla çalışmadır; her bir saat fazla çalışma için verilecek ücret normal çalışma ücretinin saat başına düşen miktarının yüzde elli yükseltilmesi suretiyle ödenir ve fazla çalışma süresinin toplamı bir yılda iki yüz yetmiş saatten fazla olamaz.',
    trueHighlight: ['Haftalık kırk beş saati aşan çalışmalar fazla çalışmadır', 'yüzde elli yükseltilmesi suretiyle ödenir', 'bir yılda iki yüz yetmiş saatten fazla olamaz'],
    trueCorrectPhrase: 'Fazla çalışma 45 saati aşan çalışmadır; zam oranı %50, yıllık azami sınır 270 saattir.',
    baseExplanation: '4857 s.K. m. 41: Haftalık 45 saati aşan süreler fazla çalışmadır. Ücret %50 zamlı ödenir (fazla sürelerle çalışmada %25). Yıllık fazla çalışma üst sınırı 270 saattir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'yüzde elli yükseltilmesi suretiyle ödenir',
      wrongPhrase: 'yüzde yüz yükseltilmesi suretiyle ödenir',
      correctPhrase: 'yüzde elli yükseltilmesi suretiyle ödenir',
      explanation: '4857 s.K. m. 41/2: Fazla çalışmada saat ücreti %100 değil, %50 zamlı ödenir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yılda iki yüz yetmiş saatten fazla olamaz',
      wrongPhrase: 'bir yılda beş yüz saatten fazla olamaz',
      correctPhrase: 'bir yılda iki yüz yetmiş saatten fazla olamaz',
      explanation: '4857 s.K. m. 41/8: Yıllık azami fazla çalışma süresi 270 saattir.'
    }
  },

  // =========================================================================
  // VERGİ HUKUKU (213 SAYILI VUK & 6183 SAYILI KANUN)
  // =========================================================================
  {
    id: 'rule-vergi-tarh-zamanasimi-p9',
    branch: 'Vergi',
    subTopic: 'Tarh Zamanaşımı Süresi ve Başlangıcı (5 Yıl)',
    articleRef: 'VUK M. 114',
    trueStatement:
      'Vergi alacağının doğduğu takvim yılını takip eden yılın başından başlayarak beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar.',
    trueHighlight: ['takip eden yılın başından başlayarak beş yıl içinde tarh ve mükellefe tebliğ edilmeyen'],
    trueCorrectPhrase: 'Tarh zamanaşımı, vergiyi doğuran olayı takip eden takvim yılı başından itibaren 5 yıldır.',
    baseExplanation: 'VUK m. 114/1: Tarh zamanaşımı süresi 5 yıldır. Süre vergiyi doğuran olayın meydana geldiği takvim yılını takip eden takvim yılının ilk gününden başlar. Bu sürede hem tarh hem tebliğ yapılmalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl içinde tarh ve mükellefe tebliğ edilmeyen',
      wrongPhrase: 'on yıl içinde tarh ve mükellefe tebliğ edilmeyen',
      correctPhrase: 'beş yıl içinde tarh ve mükellefe tebliğ edilmeyen',
      explanation: 'VUK m. 114: Vergi hukukunda genel tarh zamanaşımı süresi 10 yıl değil, 5 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'takvim yılını takip eden yılın başından başlayarak',
      wrongPhrase: 'takvim ayını takip eden ayın sonundan başlayarak',
      correctPhrase: 'takvim yılını takip eden yılın başından başlayarak',
      explanation: 'VUK m. 114: Süre ay hesabıyla değil, vergiyi doğuran olayın gerçekleştiği yılı izleyen takvim yılının başından itibaren işlemeye başlar.'
    }
  },
  {
    id: 'rule-vergi-tahsil-zamanasimi-p9',
    branch: 'Vergi',
    subTopic: 'Kamu Alacaklarında Tahsil Zamanaşımı Süresi (5 Yıl)',
    articleRef: '6183 s.K. M. 102',
    trueStatement:
      'Amme alacağı, vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren beş yıl geçmekle tahsil zamanaşımına uğrar.',
    trueHighlight: ['vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren beş yıl'],
    trueCorrectPhrase: 'Tahsil zamanaşımı vadenin rastladığı yılı takip eden takvim yılı başından itibaren 5 yıldır.',
    baseExplanation: '6183 s.K. m. 102: Amme alacaklarında tahsil zamanaşımı süresi 5 yıldır. Süre alacağın vadesinin rastladığı takvim yılını takip eden yılın başından başlar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl geçmekle tahsil zamanaşımına uğrar',
      wrongPhrase: 'iki yıl geçmekle tahsil zamanaşımına uğrar',
      correctPhrase: 'beş yıl geçmekle tahsil zamanaşımına uğrar',
      explanation: '6183 s.K. m. 102: Tahsil zamanaşımı süresi 2 yıl değil, 5 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren',
      wrongPhrase: 'verginin tarh edildiği günden itibaren',
      correctPhrase: 'vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren',
      explanation: '6183 s.K. m. 102: Tahsil zamanaşımı tarh tarihinden değil, vadenin rastladığı takvim yılını takip eden takvim yılı başından itibaren hesaplanır.'
    }
  },
  {
    id: 'rule-vergi-ziyai-cezasi-orani-p9',
    branch: 'Vergi',
    subTopic: 'Vergi Ziyaı Cezası Oranları (1 Kat ve Kaçakçılıkta 3 Kat)',
    articleRef: 'VUK M. 344',
    trueStatement:
      'Vergi ziyaına sebebiyet verildiği hallerde mükellef veya sorumlu hakkında ziyaa uğratılan verginin bir katı tutarında vergi ziyaı cezası kesilir; vergi ziyaına kaçakçılık fiilleriyle sebebiyet verilmesi hâlinde bu ceza üç kat olarak uygulanır.',
    trueHighlight: ['ziyaa uğratılan verginin bir katı tutarında', 'bu ceza üç kat olarak uygulanır'],
    trueCorrectPhrase: 'Vergi ziyaı cezası kural olarak 1 kat, kaçakçılık hallerinde ise 3 kat uygulanır.',
    baseExplanation: 'VUK m. 344: Vergi ziyaı cezası normal hallerde ziyaa uğratılan verginin 1 katıdır. VUK m. 359’da yazılı kaçakçılık fiilleriyle ziyaa sebebiyet verilirse ceza 3 kat kesilir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'ziyaa uğratılan verginin bir katı tutarında',
      wrongPhrase: 'ziyaa uğratılan verginin yüzde on fazlası tutarında',
      correctPhrase: 'ziyaa uğratılan verginin bir katı tutarında',
      explanation: 'VUK m. 344/2: Normal vergi ziyaı cezası %10 değil, ziyaa uğratılan verginin tam 1 katıdır (%100).'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'bu ceza üç kat olarak uygulanır',
      wrongPhrase: 'bu ceza on kat olarak uygulanır',
      correctPhrase: 'bu ceza üç kat olarak uygulanır',
      explanation: 'VUK m. 344/3: Kaçakçılık fiillerinde ceza 10 kat değil, 3 kat olarak kesilir.'
    }
  },
  {
    id: 'rule-vergi-cezalarda-indirim-p9',
    branch: 'Vergi',
    subTopic: 'Vergi Cezalarında İndirim Oranı (%50 İndirim)',
    articleRef: 'VUK M. 376',
    trueStatement:
      'İkmalen, re’sen veya idarece tarh edilen vergi veya vergi farkını ve vergi ziyaı cezasını vadesinde veya teminat göstererek vadesinin bitmesinden başlayarak bir ay içinde ödeyeceğini bildiren mükellefe vergi ziyaı cezasının yarısı indirilir.',
    trueHighlight: ['vadesinin bitmesinden başlayarak bir ay içinde ödeyeceğini bildiren', 'vergi ziyaı cezasının yarısı indirilir'],
    trueCorrectPhrase: 'Süresinde ödemeyi taahhüt eden mükellefe vergi ziyaı cezasının %50’si (yarısı) indirilir.',
    baseExplanation: 'VUK m. 376 (7194 s.K. değişikliği): İkmalen, re’sen veya idarece tarh edilen vergi ve cezalar için dava açılmaksızın ödeme taahhüdünde bulunulursa vergi ziyaı cezasının %50’si (yarısı) indirilir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'vergi ziyaı cezasının yarısı indirilir',
      wrongPhrase: 'vergi ziyaı cezasının tamamı terkin edilerek silinir',
      correctPhrase: 'vergi ziyaı cezasının yarısı indirilir',
      explanation: 'VUK m. 376: Ceza tamamen silinmez; yasal indirim oranı cezanın yarısıdır (%50).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'vadesinin bitmesinden başlayarak bir ay içinde ödeyeceğini bildiren',
      wrongPhrase: 'vadesinin bitmesinden başlayarak bir yıl içinde ödeyeceğini bildiren',
      correctPhrase: 'vadesinin bitmesinden başlayarak bir ay içinde ödeyeceğini bildiren',
      explanation: 'VUK m. 376/1: İndirim talebinde bulunma süresi vadenin bitiminden itibaren 1 yıldır değil, 1 aydır.'
    }
  },

  // =========================================================================
  // AVUKATLIK HUKUKU (1136 SAYILI AVUKATLIK KANUNU)
  // =========================================================================
  {
    id: 'rule-avk-staj-sureleri-p9',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Staj Süresi ve Mahkeme/Büro Dağılımı',
    articleRef: '1136 AvK M. 15',
    trueStatement:
      'Avukatlık stajı bir yıldır; stajın ilk altı ayı mahkemelerde ve kalan altı ayı da en az beş yıl kıdemli bir avukatın yanında yapılır.',
    trueHighlight: ['Avukatlık stajı bir yıldır', 'ilk altı ayı mahkemelerde ve kalan altı ayı da en az beş yıl kıdemli bir avukatın yanında yapılır'],
    trueCorrectPhrase: 'Avukatlık stajı 1 yıldır: İlk 6 ayı adliyede, ikinci 6 ayı en az 5 yıl kıdemli avukat yanında yapılır.',
    baseExplanation: '1136 s.K. m. 15: Avukatlık stajı toplam 1 yıldır. İlk 6 ayı adliyede mahkemelerde, ikinci 6 ayı ise en az 5 yıllık mesleki kıdeme sahip bir avukat yanında stajyer olarak tamamlanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Avukatlık stajı bir yıldır',
      wrongPhrase: 'Avukatlık stajı iki yıldır',
      correctPhrase: 'Avukatlık stajı bir yıldır',
      explanation: '1136 s.K. m. 15: Yasal avukatlık stajı süresi 2 yıl değil, 1 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'en az beş yıl kıdemli bir avukatın yanında yapılır',
      wrongPhrase: 'mesleğe yeni başlamış herhangi bir avukatın yanında yapılır',
      correctPhrase: 'en az beş yıl kıdemli bir avukatın yanında yapılır',
      explanation: '1136 s.K. m. 15: Yanında staj yapılacak avukatın baro levhasına kayıtlı ve en az 5 yıllık mesleki kıdeme sahip olması kanuni zorunluluktur.'
    }
  },
  {
    id: 'rule-avk-ucret-tavan-ve-asgari-p9',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Ücret Tavanı (%25) ve Asgari Ücret Sınırı',
    articleRef: '1136 AvK M. 164',
    trueStatement:
      'Avukatlık asgari ücret tarifesi altında avukatlık ücreti kararlaştırılamaz; dava değerinin yüzde olarak kararlaştırıldığı hallerde avukatlık ücreti yüzde yirmi beşi aşamaz.',
    trueHighlight: ['asgari ücret tarifesi altında avukatlık ücreti kararlaştırılamaz', 'yüzde yirmi beşi aşamaz'],
    trueCorrectPhrase: 'Asgari ücret tarifesi altına inilemez; nispi avukatlık ücreti tavanı %25’tir.',
    baseExplanation: '1136 s.K. m. 164: Avukatlık ücreti Türkiye Barolar Birliği asgari ücret tarifesinin altında kararlaştırılamaz. Dava sonucuna veya paraya bağlı ücret sözleşmelerinde ücret azami %25 olabilir (hasılı davaya iştirak yasağı).',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'yüzde yirmi beşi aşamaz',
      wrongPhrase: 'yüzde elliyi aşamaz',
      correctPhrase: 'yüzde yirmi beşi aşamaz',
      explanation: '1136 s.K. m. 164/2: Dava sonucuna katılma yasağı kapsamında azami ücret tavanı %50 değil, %25’tir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'asgari ücret tarifesi altında avukatlık ücreti kararlaştırılamaz',
      wrongPhrase: 'taraflar anlaşırlarsa asgari ücret tarifesinin altında dahi ücretsiz dava takip edebilirler',
      correctPhrase: 'asgari ücret tarifesi altında avukatlık ücreti kararlaştırılamaz',
      explanation: '1136 s.K. m. 164/4: Asgari ücret tarifesi kamu düzenine ilişkindir; baronun izni olmaksızın ücretsiz dava almak ve tarife altına inmek yasaktır.'
    }
  },

  // =========================================================================
  // CEZA VE CEZA MUHAKEMESİ (TCK & CMK)
  // =========================================================================
  {
    id: 'rule-tck-mesru-savunma-p9',
    branch: 'TCK',
    subTopic: 'Meşru Savunma (Meşru Müdafaa) Koşulları ve Hukuka Uygunluk',
    articleRef: 'TCK M. 25/1',
    trueStatement:
      'Gerek kendisine ve gerek başkasına ait bir hakka yönelmiş, gerçekleşen, gerçekleşmesi veya tekrarı muhakkak olan haksız bir saldırıyı o anda hâl ve koşullara göre saldırı ile orantılı biçimde defetmek zorunluluğu ile işlenen fiillerden dolayı faile ceza verilmez.',
    trueHighlight: ['Gerek kendisine ve gerek başkasına ait bir hakka yönelmiş', 'saldırı ile orantılı biçimde defetmek zorunluluğu ile işlenen fiillerden dolayı faile ceza verilmez'],
    trueCorrectPhrase: 'Meşru savunmada kişinin kendisine veya başkasına ait hakka yönelik haksız saldırıya orantılı savunma cezasızdır.',
    baseExplanation: 'TCK m. 25/1: Meşru savunma bir hukuka uygunluk nedenidir. Failin hem kendi hem de üçüncü bir kişinin hakkına yönelik haksız saldırıyı orantılı şekilde defetmesi halinde fiil hukuka uygun hale gelir ve ceza verilmez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'saldırı ile orantılı biçimde defetmek zorunluluğu ile işlenen fiillerden dolayı faile ceza verilmez',
      wrongPhrase: 'saldırının ağırlığına bakılmaksızın fail her ne şekilde olursa olsun karşı tarafı öldürse dahi ceza verilmez',
      correctPhrase: 'saldırı ile orantılı biçimde defetmek zorunluluğu ile işlenen fiillerden dolayı faile ceza verilmez',
      explanation: 'TCK m. 25/1 ve m. 27: Meşru savunmada savunma ile saldırı arasında mutlaka orantı bulunmalıdır; orantısız güç kullanımında sınır kasten veya taksirle aşılmış sayılır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Gerek kendisine ve gerek başkasına ait bir hakka yönelmiş',
      wrongPhrase: 'Yalnızca failin kendi vücut bütünlüğüne yönelmiş ve başkasına ait hakları hiçbir şekilde kapsamayan',
      correctPhrase: 'Gerek kendisine ve gerek başkasına ait bir hakka yönelmiş',
      explanation: 'TCK m. 25/1: Meşru müdafaa yalnızca failin kendi şahsına yönelik saldırılarda değil, üçüncü kişilerin haklarına yönelik saldırılarda da (üçüncü kişi lehine meşru müdafaa) geçerlidir.'
    }
  },
  {
    id: 'rule-cmk-basit-yargilama-p9',
    branch: 'CMK',
    subTopic: 'Basit Yargılama Usulü Kapsamı ve 1/4 İndirim',
    articleRef: 'CMK M. 251',
    trueStatement:
      'Asliye ceza mahkemesince, iddianamenin kabulünden sonra adli para cezasını veya üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda basit yargılama usulü uygulanabilir; mahkûmiyet kararı verildiği takdirde sonuç ceza dörtte bir oranında indirilir.',
    trueHighlight: ['üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda', 'sonuç ceza dörtte bir oranında indirilir'],
    trueCorrectPhrase: 'Üst sınırı 2 yıl veya daha az hapis suçlarında basit yargılama uygulanabilir; mahkûmiyette ceza 1/4 indirilir.',
    baseExplanation: 'CMK m. 251 (7188 s.K. değişikliği): Basit yargılama usulü üst sınırı 2 yıl veya daha az süreli hapis veya adli para cezasını gerektiren suçlarda duruşma açılmaksızın dosya üzerinden uygulanır. Mahkûmiyette ceza 1/4 indirilir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'sonuç ceza dörtte bir oranında indirilir',
      wrongPhrase: 'sonuç ceza üçte iki oranında indirilir',
      correctPhrase: 'sonuç ceza dörtte bir oranında indirilir',
      explanation: 'CMK m. 251/3: Basit yargılama usulünde ceza indirim oranı 2/3 değil, dörtte birdir (1/4).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda',
      wrongPhrase: 'üst sınırı beş yıl veya daha az süreli hapis cezasını gerektiren suçlarda',
      correctPhrase: 'üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda',
      explanation: 'CMK m. 251/1: Basit yargılama sınırı üst sınırı 5 yıl değil, en çok 2 yıl olan suçlardır.'
    }
  },
  {
    id: 'rule-cmk-iletisimin-dinlenmesi-24-saat-p9',
    branch: 'CMK',
    subTopic: 'İletişimin Tespiti ve Dinlenmesinde Savcı Kararı ve Hâkim Onayı',
    articleRef: 'CMK M. 135',
    trueStatement:
      'Gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı iletişimin dinlenmesine karar verebilir; savcı bu kararını yirmi dört saat içinde hâkimin onayına sunar ve hâkim kararını en geç yirmi dört saat içinde açıklar; onaylanmaması hâlinde tedbir derhâl kaldırılır.',
    trueHighlight: ['yirmi dört saat içinde hâkimin onayına sunar', 'en geç yirmi dört saat içinde açıklar'],
    trueCorrectPhrase: 'Savcının dinleme kararı 24 saatte hâkime sunulur; hâkim 24 saat içinde karar vermezse tedbir kalkar.',
    baseExplanation: 'CMK m. 135: İletişimin dinlenmesinde gecikmesinde sakınca bulunan hallerde savcı karar verebilir. Karar 24 saatte hâkime sunulur, hâkim 24 saatte onaylamazsa tedbir derhal kalkar ve kayıtlar imha edilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yirmi dört saat içinde hâkimin onayına sunar',
      wrongPhrase: 'bir hafta içinde hâkimin onayına sunar',
      correctPhrase: 'yirmi dört saat içinde hâkimin onayına sunar',
      explanation: 'CMK m. 135/2: Savcı kararının hâkime sunulma süresi 1 hafta değil, 24 saattir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç yirmi dört saat içinde açıklar',
      wrongPhrase: 'en geç kırk sekiz saat içinde açıklar',
      correctPhrase: 'en geç yirmi dört saat içinde açıklar',
      explanation: 'CMK m. 135/2: Hâkimin savcı kararını onaylama süresi azami 24 saattir.'
    }
  },

  // =========================================================================
  // MEDENİ HUKUK & HMK
  // =========================================================================
  {
    id: 'rule-tmk-iddet-muddeti-p9',
    branch: 'Medeni',
    subTopic: 'Kadın İçin Bekleme Süresi (İddet Müddeti - 300 Gün)',
    articleRef: 'TMK M. 132',
    trueStatement:
      'Evlilik sona ermişse, kadın evliliğin sona ermesinden başlayarak üç yüz gün geçmedikçe evlenemez; ancak kadın doğurmakla veya önceki evliliğinden gebe olmadığını mahkeme kararıyla ispat ederse bu bekleme süresi sona erer.',
    trueHighlight: ['üç yüz gün geçmedikçe evlenemez', 'önceki evliliğinden gebe olmadığını mahkeme kararıyla ispat ederse'],
    trueCorrectPhrase: 'Kadın için evlenme bekleme süresi 300 gündür; doğumla veya gebe olunmadığının ispatıyla kalkar.',
    baseExplanation: 'TMK m. 132: Kadın için bekleme süresi 300 gündür (soybağının karışmasını önleme amacı). Doğumla kendiliğinden biter veya mahkemeden gebe olunmadığına dair raporla kaldırılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç yüz gün geçmedikçe evlenemez',
      wrongPhrase: 'bir yıl geçmedikçe evlenemez',
      correctPhrase: 'üç yüz gün geçmedikçe evlenemez',
      explanation: 'TMK m. 132/1: İddet süresi 1 yıl değil, 300 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'önceki evliliğinden gebe olmadığını mahkeme kararıyla ispat ederse bu bekleme süresi sona erer',
      wrongPhrase: 'kadın hiçbir koşulda bu süre dolmadan yeniden evlenemez',
      correctPhrase: 'önceki evliliğinden gebe olmadığını mahkeme kararıyla ispat ederse bu bekleme süresi sona erer',
      explanation: 'TMK m. 132/2-3: Kadının gebe olmadığının anlaşılması veya eski eşiyle yeniden evlenmek istemesi halinde mahkeme süreyi kaldırır.'
    }
  },
  {
    id: 'rule-tmk-zina-bosanma-sure-p9',
    branch: 'Medeni',
    subTopic: 'Zina Sebebiyle Boşanma Davasında Hak Düşürücü Süreler',
    articleRef: 'TMK M. 161',
    trueStatement:
      'Davaya hakkı olan eşin boşanma sebebini öğrenmesinden başlayarak altı ay ve her hâlde zina eyleminin üzerinden beş yıl geçmekle dava hakkı düşer; affeden tarafın dava hakkı yoktur.',
    trueHighlight: ['öğrenmesinden başlayarak altı ay ve her hâlde zina eyleminin üzerinden beş yıl geçmekle', 'affeden tarafın dava hakkı yoktur'],
    trueCorrectPhrase: 'Zina sebebiyle boşanma süresi öğrenmeden itibaren 6 ay ve her halde 5 yıldır; af davayı düşürür.',
    baseExplanation: 'TMK m. 161: Zina sebebiyle boşanmada hak düşürücü süreler öğrenmeden itibaren 6 ay ve her halde 5 yıldır. Eş zayıf da olsa af iradesi gösterirse boşanma davası açamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrenmesinden başlayarak altı ay ve her hâlde zina eyleminin üzerinden beş yıl geçmekle',
      wrongPhrase: 'öğrenmesinden başlayarak bir yıl ve her hâlde zina eyleminin üzerinden on yıl geçmekle',
      correctPhrase: 'öğrenmesinden başlayarak altı ay ve her hâlde zina eyleminin üzerinden beş yıl geçmekle',
      explanation: 'TMK m. 161/2: Zina boşanma süreleri 1 yıl/10 yıl değil, 6 ay ve 5 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'affeden tarafın dava hakkı yoktur',
      wrongPhrase: 'affeden taraf da zina fiilini gerekçe göstererek dilediği zaman boşanma davası açabilir',
      correctPhrase: 'affeden tarafın dava hakkı yoktur',
      explanation: 'TMK m. 161/3: Zina eylemini affeden eşin dava hakkı kanunen düşer.'
    }
  },
  {
    id: 'rule-hmk-cevap-dilekcesi-sure-p9',
    branch: 'HMK',
    subTopic: 'Cevap Dilekçesi Verme Süresi ve Ek Süre (2 Hafta & 1 Ay)',
    articleRef: 'HMK M. 127',
    trueStatement:
      'Cevap dilekçesini verme süresi, dava dilekçesinin davalıya tebliğinden itibaren iki haftadır; mahkeme zorunlu hâllerde bu süreyi bir defaya mahsus olmak ve bir ayı geçmemek üzere uzatabilir.',
    trueHighlight: ['dava dilekçesinin davalıya tebliğinden itibaren iki haftadır', 'bir defaya mahsus olmak ve bir ayı geçmemek üzere uzatabilir'],
    trueCorrectPhrase: 'Cevap süresi 2 haftadır; mahkeme bir defaya mahsus en çok 1 ay ek süre verebilir.',
    baseExplanation: 'HMK m. 127: Davalının cevap dilekçesi verme süresi tebliğden itibaren 2 haftadır. Hazırlanması çok zor veya imkansız ise 2 haftalık süre içinde talep edilmesi koşuluyla mahkeme 1 ayı geçmemek üzere ek süre verebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'dava dilekçesinin davalıya tebliğinden itibaren iki haftadır',
      wrongPhrase: 'dava dilekçesinin davalıya tebliğinden itibaren otuz gündür',
      correctPhrase: 'dava dilekçesinin davalıya tebliğinden itibaren iki haftadır',
      explanation: 'HMK m. 127: Cevap dilekçesi verme süresi 30 gün değil, 2 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir defaya mahsus olmak ve bir ayı geçmemek üzere uzatabilir',
      wrongPhrase: 'üç defaya mahsus ve toplam altı ayı geçmemek üzere uzatabilir',
      correctPhrase: 'bir defaya mahsus olmak ve bir ayı geçmemek üzere uzatabilir',
      explanation: 'HMK m. 127: Ek süre bir defaya mahsustur ve en çok 1 aydır.'
    }
  },

  // =========================================================================
  // İCRA VE İFLAS HUKUKU (2004 SAYILI KANUN)
  // =========================================================================
  {
    id: 'rule-iik-ihalenin-feshi-sure-p9',
    branch: 'İcra',
    subTopic: 'İhalenin Feshi Talebi Süreleri (7 Gün ve 1 Yıl)',
    articleRef: 'İİK M. 134',
    trueStatement:
      'İhalenin feshini talep süresi kural olarak ihale tarihinden itibaren yedi gündür; ilgililerin ihalenin yapıldığını sonradan öğrenmesi hâlinde süre öğrenmeden başlar ancak her hâlde ihale tarihinden itibaren bir yılı geçemez.',
    trueHighlight: ['ihale tarihinden itibaren yedi gündür', 'her hâlde ihale tarihinden itibaren bir yılı geçemez'],
    trueCorrectPhrase: 'İhalenin feshi süresi ihaleden itibaren 7 gündür; öğrenme hallerinde üst sınır ihaleden itibaren 1 yıldır.',
    baseExplanation: 'İİK m. 134/2: İhalenin feshini şikâyet süresi ihale tarihinden itibaren 7 gündür. İhaleden haberdar edilmemiş olanlar için öğrenmeden itibaren 7 gün işler; mutlak sınır ihaleden itibaren 1 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ihale tarihinden itibaren yedi gündür',
      wrongPhrase: 'ihale tarihinden itibaren otuz gündür',
      correctPhrase: 'ihale tarihinden itibaren yedi gündür',
      explanation: 'İİK m. 134: İhalenin feshi başvuru süresi 30 gün değil, 7 gündür.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'her hâlde ihale tarihinden itibaren bir yılı geçemez',
      wrongPhrase: 'her hâlde ihale tarihinden itibaren beş yılı geçemez',
      correctPhrase: 'her hâlde ihale tarihinden itibaren bir yılı geçemez',
      explanation: 'İİK m. 134/2: İhalenin feshinde nihai üst sınır 5 yıl değil, 1 yıldır.'
    }
  },
  {
    id: 'rule-iik-itirazin-kesin-kaldirilmasi-6-ay-p9',
    branch: 'İcra',
    subTopic: 'İtirazın İcra Mahkemesinden Kaldırılması Süresi (6 Ay)',
    articleRef: 'İİK M. 68',
    trueStatement:
      'Takibine itiraz edilen alacaklı, itirazın tebliği tarihinden itibaren altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir; bu süre içinde itirazın kaldırılması istenmezse yeniden ilamsız takip yapılamaz.',
    trueHighlight: ['altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir', 'yeniden ilamsız takip yapılamaz'],
    trueCorrectPhrase: 'İtirazın icra mahkemesinden kaldırılmasını talep süresi tebliğden itibaren 6 aydır.',
    baseExplanation: 'İİK m. 68/1: Alacaklının elinde İİK 68/68a maddelerindeki belgeler varsa, itirazın kaldırılmasını 6 ay içinde icra mahkemesinden isteyebilir. Bu süre hak düşürücüdür; kaçırılırsa ancak genel mahkemede itirazın iptali davası açılabilir (1 yıl içinde).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      wrongPhrase: 'iki yıl içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      correctPhrase: 'altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      explanation: 'İİK m. 68/1: İtirazın kaldırılması süresi 2 yıl değil, itirazın tebliğinden itibaren 6 aydır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      wrongPhrase: 'asliye ticaret mahkemesinden itirazın kaldırılmasını isteyebilir',
      correctPhrase: 'icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      explanation: 'İİK m. 68: İtirazın kaldırılması davasında görevli merci ticaret mahkemesi değil, icra mahkemesidir.'
    }
  },

  // =========================================================================
  // TİCARET HUKUKU (6102 SAYILI TTK)
  // =========================================================================
  {
    id: 'rule-ttk-limited-ortak-sayisi-p9',
    branch: 'Ticaret',
    subTopic: 'Limited Şirket Kurucu ve Ortak Sayısı Sınırı (Azami 50 Ortak)',
    articleRef: 'TTK M. 573 & 574',
    trueStatement:
      'Limited şirket, bir veya daha çok gerçek veya tüzel kişi tarafından kurulur; ortakların sayısı elliyi aşamaz ve ortak sayısı bire düşerse bu durum yedi gün içinde müdürlere yazıyla bildirilir.',
    trueHighlight: ['ortakların sayısı elliyi aşamaz', 'bir veya daha çok gerçek veya tüzel kişi tarafından kurulur'],
    trueCorrectPhrase: 'Limited şirket 1 kişiyle kurulabilir; ortak sayısı en çok 50 olabilir.',
    baseExplanation: 'TTK m. 573 ve m. 574: Limited şirket tek ortakla kurulabilir. Kanuni üst sınır 50 ortaktır; 50’den fazla ortaklı limited şirket kurulamaz.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'ortakların sayısı elliyi aşamaz',
      wrongPhrase: 'ortakların sayısı iki yüz elliyi aşamaz',
      correctPhrase: 'ortakların sayısı elliyi aşamaz',
      explanation: 'TTK m. 574/1: Limited şirkette ortak sayısı tavanı 250 değil, 50’dir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bir veya daha çok gerçek veya tüzel kişi tarafından kurulur',
      wrongPhrase: 'en az beş kurucu gerçek kişinin bir araya gelmesiyle kurulur',
      correctPhrase: 'bir veya daha çok gerçek veya tüzel kişi tarafından kurulur',
      explanation: 'TTK m. 573/1: 6102 sayılı TTK ile tek kişilik limited şirket kurulması mümkündür; 5 ortak şartı yoktur.'
    }
  },
  {
    id: 'rule-ttk-tedarik-odeme-suresi-p9',
    branch: 'Ticaret',
    subTopic: 'Ticari İşlerde Mal ve Hizmet Tedarikinde Ödeme Süresi (30 Gün)',
    articleRef: 'TTK M. 1530',
    trueStatement:
      'Ticari işletmeler arasında mal ve hizmet tedariki amacıyla yapılan işlemlerde sözleşmede ödeme günü kararlaştırılmamışsa, borçlu faturanın veya eş değer ödeme talebinin tebellüğ edildiği tarihten itibaren otuz gün içinde ödemekle yükümlüdür.',
    trueHighlight: ['otuz gün içinde ödemekle yükümlüdür'],
    trueCorrectPhrase: 'Sözleşmede gün yoksa ticari tedarikte ödeme süresi faturanın tebellüğünden itibaren 30 gündür.',
    baseExplanation: 'TTK m. 1530/2: Ticari işletmeler arası mal ve hizmet tedarikinde sözleşmede vade kararlaştırılmamışsa borçlu faturanın alınmasından itibaren 30 gün içinde ödemek zorundadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde ödemekle yükümlüdür',
      wrongPhrase: 'doksan gün içinde ödemekle yükümlüdür',
      correctPhrase: 'otuz gün içinde ödemekle yükümlüdür',
      explanation: 'TTK m. 1530: Kanuni varsayılan ödeme süresi 90 gün değil, 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'faturanın veya eş değer ödeme talebinin tebellüğ edildiği tarihten itibaren',
      wrongPhrase: 'sözleşmenin imzalandığı takvim yılı sonundan itibaren',
      correctPhrase: 'faturanın veya eş değer ödeme talebinin tebellüğ edildiği tarihten itibaren',
      explanation: 'TTK m. 1530/2: Süre imza yılı sonundan değil, faturanın veya eşdeğer talebin borçluya ulaştığı andan başlar.'
    }
  }
];
