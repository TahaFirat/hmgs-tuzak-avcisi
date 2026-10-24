import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 7
 * Doğrulama turunda hatalı bulunan kuralların düzeltilmiş ve yalnızca doğrulanmış bilgilerle
 * yeniden yazılmış sürümleri (her kural 3 soru üretir).
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART7_RULES: StatutoryRuleSeed[] = [
  {
    id: 'rule-iik-tasarruf-iptal-p7',
    branch: 'İcra',
    subTopic: 'Tasarrufun İptali Davası: Şüpheli Dönem ve Hak Düşürücü Süre',
    articleRef: 'İİK M. 277-284',
    trueStatement:
      'Borçlunun aciz belgesinin düzenlendiği veya iflasın açıldığı tarihten önceki bir yıl içinde yaptığı bağışlamalar ve ivazsız tasarruflar iptale tabidir; tasarrufun iptali davası ise tasarruf tarihinden itibaren beş yıl geçmekle düşer.',
    trueHighlight: ['önceki bir yıl içinde', 'iptale tabidir', 'beş yıl geçmekle düşer'],
    trueCorrectPhrase: 'İvazsız tasarruflarda geriye dönük şüpheli dönem 1 yıldır; iptal davası hakkı tasarruf tarihinden itibaren 5 yılda düşer.',
    baseExplanation: 'İİK m. 278 ve m. 284: İvazsız tasarruflar ve bağışlamalar aciz belgesi/iflas tarihinden önceki 1 yıl içinde iptale tabidir; iptal davası tasarruf tarihinden itibaren 5 yıl geçmekle düşer. Bu tasarruflar batıl değil, iptale tabidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'önceki bir yıl içinde',
      wrongPhrase: 'önceki on yıl içinde',
      correctPhrase: 'önceki bir yıl içinde',
      explanation: 'İİK m. 278/1: İvazsız tasarruflar için geriye dönük süre 1 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl geçmekle düşer',
      wrongPhrase: 'bir yıl geçmekle düşer',
      correctPhrase: 'beş yıl geçmekle düşer',
      explanation: 'İİK m. 284: Tasarrufun iptali davası hakkı tasarruf tarihinden itibaren 5 yıl geçmekle düşer.'
    }
  },
  {
    id: 'rule-iik-sira-cetveli-p7',
    branch: 'İcra',
    subTopic: 'Sıra Cetveline İtiraz',
    articleRef: 'İİK M. 142',
    trueStatement:
      'Sıra cetvelinin tebliğinden itibaren yedi gün içinde, cetvel mündericatına alacağın esasına veya miktarına ilişkin itirazlar dava yoluyla ileri sürülür; itiraz alacağın esas ve miktarına taalluk etmeyip yalnız sıraya ilişkinse icra mahkemesine şikâyet yoluyla yapılır.',
    trueHighlight: ['yedi gün içinde', 'dava yoluyla', 'yalnız sıraya ilişkinse icra mahkemesine şikâyet yoluyla'],
    trueCorrectPhrase: 'Sıra cetveline itiraz süresi 7 gündür; esas/miktar itirazı dava, yalnız sıra itirazı icra mahkemesine şikâyettir.',
    baseExplanation: 'İİK m. 142: Cetvelin tebliğinden itibaren 7 gün içinde alacağın esas ve miktarına itiraz dava yoluyla, yalnız sıraya itiraz ise icra mahkemesine şikâyet yoluyla yapılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi gün içinde',
      wrongPhrase: 'otuz gün içinde',
      correctPhrase: 'yedi gün içinde',
      explanation: 'İİK m. 142: Sıra cetveline itiraz süresi tebliğden itibaren 7 gündür.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnız sıraya ilişkinse icra mahkemesine şikâyet yoluyla',
      wrongPhrase: 'yalnız sıraya ilişkinse de asliye hukuk mahkemesinde dava yoluyla',
      correctPhrase: 'yalnız sıraya ilişkinse icra mahkemesine şikâyet yoluyla',
      explanation: 'İİK m. 142: Yalnız sıraya ilişkin itirazlar dava ile değil, icra mahkemesine şikâyet yoluyla ileri sürülür.'
    }
  },
  {
    id: 'rule-iik-talik-p7',
    branch: 'İcra',
    subTopic: 'Ölüm Hâlinde İcra Takibinin Ertelenmesi',
    articleRef: 'İİK M. 52',
    trueStatement:
      'Borçlunun karısı veya kocası ya da usul veya füruundan birinin ölümü hâlinde icra takibi, ölüm günüyle beraber üç gün ertelenir.',
    trueHighlight: ['usul veya füruundan', 'ölüm günüyle beraber üç gün'],
    trueCorrectPhrase: 'Eş veya üstsoy/altsoydan birinin ölümünde takip ölüm günüyle birlikte 3 gün ertelenir.',
    baseExplanation: 'İİK m. 52: Borçlunun eşi veya usul/füruundan birinin ölümünde takip ölüm günüyle beraber 3 gün talik edilir. Kardeş gibi yan hısımlar kapsam dışındadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ölüm günüyle beraber üç gün',
      wrongPhrase: 'ölüm gününden başlayarak on beş gün',
      correctPhrase: 'ölüm günüyle beraber üç gün',
      explanation: 'İİK m. 52: Ertelenme süresi ölüm günüyle beraber 3 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'usul veya füruundan birinin',
      wrongPhrase: 'kardeşi veya amcası gibi herhangi bir akrabasının',
      correctPhrase: 'usul veya füruundan birinin',
      explanation: 'İİK m. 52: Talik yalnızca eş ile usul (üstsoy) veya füruundan (altsoy) birinin ölümünde uygulanır; kardeş ve diğer yan hısımlar kapsam dışıdır.'
    }
  },
  {
    id: 'rule-anayasa-denetim-yollari-p7',
    branch: 'Anayasa',
    subTopic: 'TBMM’nin Denetim Yolları (2017 Değişikliği)',
    articleRef: 'ANAYASA M. 98',
    trueStatement:
      'Türkiye Büyük Millet Meclisi; Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetim yetkisini kullanır; gensoru ve sözlü soru yolları 2017 değişikliğiyle kaldırılmıştır.',
    trueHighlight: ['Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru', 'gensoru ve sözlü soru'],
    trueCorrectPhrase: 'Gensoru ve sözlü soru kaldırıldı; araştırma, genel görüşme, soruşturma ve yazılı soru devam ediyor.',
    baseExplanation: 'Anayasa m. 98 (2017): TBMM denetimi Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru ile yapılır; gensoru ve sözlü soru kaldırılmıştır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'gensoru ve sözlü soru yolları 2017 değişikliğiyle kaldırılmıştır',
      wrongPhrase: 'gensoru ve sözlü soru yolları da halen yürürlüktedir',
      correctPhrase: 'gensoru ve sözlü soru yolları 2017 değişikliğiyle kaldırılmıştır',
      explanation: 'Anayasa m. 98: 2017 değişikliğiyle gensoru ve sözlü soru kaldırılmıştır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru',
      wrongPhrase: 'yalnızca gensoru, sözlü soru ve yazılı soru',
      correctPhrase: 'Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı soru',
      explanation: 'Anayasa m. 98: Güncel denetim yolları Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı sorudur.'
    }
  },
  {
    id: 'rule-kamulastirma-geri-alma-p7',
    branch: 'İdare',
    subTopic: 'Kamulaştırılan Taşınmazın Geri Alınması',
    articleRef: '2942 S. KAMULAŞTIRMA K. M. 23',
    trueStatement:
      'Kamulaştırma bedelinin kesinleşmesinden itibaren beş yıl içinde kamulaştırma amacına uygun işlem veya tesis yapılmazsa geri alma hakkı doğar; bu hak doğduğu tarihten itibaren bir yıl içinde kullanılmazsa düşer.',
    trueHighlight: ['beş yıl içinde', 'bir yıl içinde kullanılmazsa düşer'],
    trueCorrectPhrase: 'Geri alma hakkı 5 yıllık hareketsizlikten sonra doğar ve 1 yıl içinde kullanılmazsa düşer.',
    baseExplanation: '2942 s.K. m. 23: Bedelin kesinleşmesinden itibaren 5 yıl içinde amaca uygun işlem yapılmazsa geri alma hakkı doğar ve bir yıl içinde kullanılmazsa düşer.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl içinde',
      wrongPhrase: 'iki yıl içinde',
      correctPhrase: 'beş yıl içinde',
      explanation: '2942 s.K. m. 23: Amaca uygun işlem için tanınan süre 5 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yıl içinde kullanılmazsa düşer',
      wrongPhrase: 'otuz gün içinde kullanılmazsa düşer',
      correctPhrase: 'bir yıl içinde kullanılmazsa düşer',
      explanation: '2942 s.K. m. 23: Geri alma hakkı doğduktan sonra 1 yıl içinde kullanılmalıdır.'
    }
  },
  {
    id: 'rule-cmk-gizli-sorusturmaci-p7',
    branch: 'CMK',
    subTopic: 'Gizli Soruşturmacı Görevlendirilmesi',
    articleRef: 'CMK M. 139',
    trueStatement:
      'Gizli soruşturmacı görevlendirmesine hâkim tarafından karar verilir; bu tedbir ancak kanunda gösterilen suçlar bakımından ve başka surette delil elde edilememesi hâlinde uygulanabilir ve kamu görevlisi olan kişiler arasından görevlendirme yapılır.',
    trueHighlight: ['hâkim tarafından karar verilir', 'başka surette delil elde edilememesi'],
    trueCorrectPhrase: 'Gizli soruşturmacıyı hâkim görevlendirir; tedbir ikincil niteliktedir (başka delil yoksa).',
    baseExplanation: 'CMK m. 139: Gizli soruşturmacı görevlendirmesine hâkim karar verir; tedbir yalnız kanunda sayılan suçlarda ve başka suretle delil elde edilemiyorsa uygulanır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'hâkim tarafından karar verilir',
      wrongPhrase: 'Cumhuriyet savcısı tarafından kendiliğinden karar verilir',
      correctPhrase: 'hâkim tarafından karar verilir',
      explanation: 'CMK m. 139/1: Gizli soruşturmacı görevlendirmesine Cumhuriyet savcısı değil hâkim karar verir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'başka surette delil elde edilememesi',
      wrongPhrase: 'başka delil bulunsa dahi',
      correctPhrase: 'başka surette delil elde edilememesi',
      explanation: 'CMK m. 139/1: Tedbirin uygulanabilmesi için başka suretle delil elde edilememesi gerekir.'
    }
  },
  {
    id: 'rule-cmk-teknik-izleme-p7',
    branch: 'CMK',
    subTopic: 'Teknik Araçlarla İzleme',
    articleRef: 'CMK M. 140',
    trueStatement:
      'Teknik araçlarla izleme kararı hâkim tarafından verilir; gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı da karar verebilir ve kararını yirmi dört saat içinde hâkim onayına sunar; bu tedbir kişinin konutunda uygulanamaz.',
    trueHighlight: ['hâkim tarafından verilir', 'yirmi dört saat içinde hâkim onayına', 'konutunda uygulanamaz'],
    trueCorrectPhrase: 'İzlemeye hâkim karar verir; gecikmede savcı karar verip 24 saatte onaya sunar; konutta uygulanmaz.',
    baseExplanation: 'CMK m. 140: Teknik araçlarla izleme hâkim kararıyla yapılır; gecikmede savcı karar verip 24 saat içinde hâkim onayına sunar; tedbir konutta uygulanmaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yirmi dört saat içinde',
      wrongPhrase: 'yedi gün içinde',
      correctPhrase: 'yirmi dört saat içinde',
      explanation: 'CMK m. 140: Savcı kararı 24 saat içinde hâkim onayına sunulur.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kişinin konutunda uygulanamaz',
      wrongPhrase: 'kişinin konutunda da serbestçe uygulanabilir',
      correctPhrase: 'kişinin konutunda uygulanamaz',
      explanation: 'CMK m. 140: Teknik araçlarla izleme kişinin konutunda uygulanamaz.'
    }
  },
  {
    id: 'rule-cmk-iddianame-iade-p7',
    branch: 'CMK',
    subTopic: 'İddianamenin İncelenmesi ve İadesi',
    articleRef: 'CMK M. 174',
    trueStatement:
      'İddianameyi alan mahkeme on beş gün içinde iddianameyi inceleyerek kabul veya iade kararı verir; iade kararına karşı Cumhuriyet savcısı yedi gün içinde itiraz edebilir ve iade sebepleri ortadan kalkmadıkça aynı fiil nedeniyle yeniden iddianame düzenlenemez.',
    trueHighlight: ['on beş gün içinde', 'yedi gün içinde itiraz', 'iade sebepleri ortadan kalkmadıkça'],
    trueCorrectPhrase: 'Mahkeme iddianameyi 15 günde inceler; iade kararına savcı 7 günde itiraz eder.',
    baseExplanation: 'CMK m. 174: İddianame 15 gün içinde incelenir; iade kararına karşı Cumhuriyet savcısı 7 gün içinde itiraz edebilir; iade sebepleri ortadan kalkmadıkça yeniden iddianame düzenlenemez.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on beş gün içinde',
      wrongPhrase: 'altı ay içinde',
      correctPhrase: 'on beş gün içinde',
      explanation: 'CMK m. 174/1: İddianamenin incelenme süresi 15 gündür.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi gün içinde itiraz',
      wrongPhrase: 'otuz gün içinde itiraz',
      correctPhrase: 'yedi gün içinde itiraz',
      explanation: 'CMK m. 174: İade kararına itiraz süresi 7 gündür.'
    }
  },
  {
    id: 'rule-tck-dava-zamanasimi-p7',
    branch: 'TCK',
    subTopic: 'Dava Zamanaşımı Süreleri',
    articleRef: 'TCK M. 66-67',
    trueStatement:
      'Dava zamanaşımı süresi ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda otuz yıl, müebbet hapis cezasını gerektiren suçlarda yirmibeş yıl, beş yıldan fazla ve yirmi yıldan az hapis cezasını gerektiren suçlarda on beş yıl, beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda sekiz yıldır; zamanaşımını kesen sebepler hâlinde süre en fazla yarısı kadar uzar.',
    trueHighlight: ['otuz yıl', 'yirmibeş yıl', 'on beş yıl', 'sekiz yıldır', 'en fazla yarısı kadar uzar'],
    trueCorrectPhrase: 'Dava zamanaşımı: 30 - 25 - (20) - 15 - 8 yıl; kesilirse en fazla yarısı kadar uzar (8 yıl en çok 12 yıl olur).',
    baseExplanation: 'TCK m. 66-67: Dava zamanaşımı süreleri 30, 25, 15 ve 8 yıldır (20 yıldan fazla hapis için 20 yıl); kesilme hâlinde süre en fazla yarısı kadar uzar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sekiz yıldır',
      wrongPhrase: 'beş yıldır',
      correctPhrase: 'sekiz yıldır',
      explanation: 'TCK m. 66: Beş yıldan fazla olmamak üzere hapis veya adli para cezası gerektiren suçlarda dava zamanaşımı 8 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en fazla yarısı kadar uzar',
      wrongPhrase: 'sınırsız olarak baştan işlemeye başlar',
      correctPhrase: 'en fazla yarısı kadar uzar',
      explanation: 'TCK m. 67/4: Kesilme hâlinde dava zamanaşımı süresi en fazla yarısı kadar uzar; sınırsız uzamaz.'
    }
  },
  {
    id: 'rule-iik-itiraz-p7',
    branch: 'İcra',
    subTopic: 'Genel Haciz Yolunda Ödeme Emrine İtiraz',
    articleRef: 'İİK M. 62',
    trueStatement:
      'Genel haciz yoluyla ilamsız takipte borçlu, itirazını ödeme emrinin tebliğinden itibaren yedi gün içinde icra dairesine bildirmek zorundadır; adi senetteki imzaya itiraz ayrıca ve açıkça yapılmalıdır, aksi hâlde imza kabul edilmiş sayılır; borcun bir kısmına itiraz eden borçlu o kısmın miktarını açıkça göstermelidir, aksi hâlde itiraz edilmemiş sayılır.',
    trueHighlight: ['yedi gün içinde', 'ayrıca ve açıkça', 'miktarını açıkça göstermelidir'],
    trueCorrectPhrase: 'İtiraz 7 günde icra dairesine yapılır; imzaya itiraz ayrıca belirtilir; kısmi itirazda miktar gösterilir.',
    baseExplanation: 'İİK m. 62: Ödeme emrine itiraz süresi 7 gündür ve icra dairesine yapılır; imzaya itiraz ayrıca ve açıkça belirtilmeli, kısmi itirazda itiraz edilen miktar gösterilmelidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi gün içinde',
      wrongPhrase: 'otuz gün içinde',
      correctPhrase: 'yedi gün içinde',
      explanation: 'İİK m. 62: Genel haciz yolunda itiraz süresi tebliğden itibaren 7 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aksi hâlde itiraz edilmemiş sayılır',
      wrongPhrase: 'aksi hâlde takip tamamen durur',
      correctPhrase: 'aksi hâlde itiraz edilmemiş sayılır',
      explanation: 'İİK m. 62: Kısmi itirazda itiraz edilen miktar gösterilmezse itiraz edilmemiş sayılır; takip durmaz.'
    }
  }
];
