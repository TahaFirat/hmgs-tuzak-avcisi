import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS KAPSAMLI MEVZUAT HAVUZU — PART 3
 * Türk Borçlar Kanunu (TBK), Hukuk Muhakemeleri Kanunu (HMK),
 * Ceza Muhakemesi Kanunu (CMK) ve Türk Ceza Kanunu (TCK) Derinlik Kuralları
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART3_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. TÜRK BORÇLAR KANUNU (TBK) DERİNLİK KURALLARI (rule-borclar-17 .. rule-borclar-30)
  // =========================================================================
  {
    id: 'rule-borclar-17',
    branch: 'Borçlar',
    subTopic: 'Aşırı Yararlanma (Gabin) Süreleri (1 Yıl ve 5 Yıl) ile İrade Bozuklukları Karşılaştırması',
    articleRef: 'TBK M. 28 & 39',
    trueStatement:
      'Bir sözleşmede karşılıklı edimler arasında açık bir oransızlık varsa ve bu oransızlık, zarar görenin zor durumda kalmasından veya düşüncesizliğinden ya da deneyimsizliğinden yararlanılmak suretiyle gerçekleştirildiği takdirde, zarar gören, durumun özelliğine göre ya sözleşme ile bağlı olmadığını diğer tarafa bildirerek ediminin geri verilmesini ya da sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir; zarar gören bu hakkını, düşüncesizlik veya deneyimsizliğini öğrendiği; zor durumda kalmada ise bu durumun ortadan kalktığı tarihten başlayarak bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde kullanabilir.',
    trueHighlight: ['sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir', 'bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde kullanabilir'],
    trueCorrectPhrase: 'aşırı yararlanmada (gabin, TBK m. 28) hak düşürücü süre öğrenmeden/zor durumun kalkmasından itibaren 1 yıl ve her hâlde sözleşmenin kurulmasından itibaren 5 yıldır (yanılma/aldatma/korkutmada ise TBK m. 39 uyarınca üst süre sınırı olmaksızın öğrenmeden/korkutmanın kalkmasından itibaren 1 yıldır!); ayrıca 6098 s. TBK ile gabinde sözleşmeye bağlı kalarak oransızlığın giderilmesini (kısmi iptal/uyarlama) isteme hakkı da tanınmıştır',
    baseExplanation: 'TBK m. 28 ve m. 39 arasındaki en kritik fark: Yanılma, aldatma ve korkutmada sadece 1 yıllık hak düşürücü süre vardır (5 veya 10 yıllık üst süre yoktur); aşırı yararlanmada (gabin) ise 1 yıl ve her hâlde sözleşmenin kurulmasından itibaren 5 yıllık hak düşürücü süre vardır!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'düşüncesizlik veya deneyimsizliğini öğrendiği; zor durumda kalmada ise bu durumun ortadan kalktığı tarihten başlayarak bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde kullanabilir',
      wrongPhrase: 'yalnızca sözleşmenin kurulduğu tarihten başlayarak altı ay ve her hâlde iki yıl içinde kullanabilir',
      correctPhrase: 'düşüncesizlik veya deneyimsizliğini öğrendiği; zor durumda kalmada ise bu durumun ortadan kalktığı tarihten başlayarak bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde kullanabilir',
      explanation: 'TBK m. 28/2 uyarınca aşırı yararlanmada (gabin) hak düşürücü süre 1 yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak 5 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'durumun özelliğine göre ya sözleşme ile bağlı olmadığını diğer tarafa bildirerek ediminin geri verilmesini ya da sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir',
      wrongPhrase: 'yalnızca sözleşmenin tümden iptalini isteyebilir, sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini talep edemez',
      correctPhrase: 'durumun özelliğine göre ya sözleşme ile bağlı olmadığını diğer tarafa bildirerek ediminin geri verilmesini ya da sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir',
      explanation: '6098 sayılı TBK m. 28/1 ile getirilen yenilik uyarınca zarar gören, sözleşmeyi iptal etmek yerine sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini de isteyebilir!'
    }
  },
  {
    id: 'rule-borclar-18',
    branch: 'Borçlar',
    subTopic: 'Ceza Koşulu (Cezai Şart): Seçimlik Ceza, İfaya Eklenen Ceza ve Tenkis',
    articleRef: 'TBK M. 179-182',
    trueStatement:
      'Bir sözleşmenin hiç veya gereği gibi ifa edilmemesi durumu için bir ceza kararlaştırılmışsa, aksi sözleşmeden anlaşılmadıkça alacaklı, ya borcun ya da cezanın ifasını isteyebilir (seçimlik ceza koşulu); ceza, borcun belirlenen zaman veya yerde ifa edilmemesi durumu için kararlaştırılmışsa alacaklı, hakkından açıkça feragat etmedikçe veya ifayı çekincesiz olarak kabul etmedikçe, asıl borçla birlikte cezanın ifasını da isteyebilir (ifaya eklenen ceza koşulu); hâkim aşırı gördüğü ceza koşulunu kendiliğinden (re’sen) indirir, ancak TTK m. 22 uyarınca tacir sıfatını haiz borçlu ceza koşulunun aşırı olduğu iddiasıyla indirilmesini isteyemez.',
    trueHighlight: ['aksi sözleşmeden anlaşılmadıkça alacaklı, ya borcun ya da cezanın ifasını isteyebilir (seçimlik ceza koşulu)', 'ifayı çekincesiz olarak kabul etmedikçe, asıl borçla birlikte cezanın ifasını da isteyebilir (ifaya eklenen ceza koşulu)', 'hâkim aşırı gördüğü ceza koşulunu kendiliğinden (re’sen) indirir, ancak TTK m. 22 uyarınca tacir sıfatını haiz borçlu ceza koşulunun aşırı olduğu iddiasıyla indirilmesini isteyemez'],
    trueCorrectPhrase: 'TBK m. 179-182 uyarınca ceza koşulu asıl borca bağlı fer’i bir borçtur, alacaklının zarara uğramış olması şart değildir (ancak aşkın zararın istenmesi için borçlunun kusuru ispatlanmalıdır); hâkim fahiş cezayı re’sen indirir fakat tacir borçlu (ekonomik yıkıma uğrayacak olmadıkça) tenkis isteyemez',
    baseExplanation: 'TBK m. 180 ve m. 182 uyarınca kararlaştırılan cezanın istenebilmesi için alacaklının zarara uğraması şart değildir; ancak cezanın tutarını aşan (aşkın) zararın istenebilmesi için alacaklı borçlunun kusurunu ispatlamak zorundadır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aksi sözleşmeden anlaşılmadıkça alacaklı, ya borcun ya da cezanın ifasını isteyebilir (seçimlik ceza koşulu)',
      wrongPhrase: 'ceza koşulunun talep edilebilmesi için alacaklının sözleşmenin ihlali yüzünden uğradığı somut maddi zararı kuruşu kuruşuna ispat etmesi zorunludur; ayrıca alacaklı',
      correctPhrase: 'aksi sözleşmeden anlaşılmadıkça alacaklı, ya borcun ya da cezanın ifasını isteyebilir (seçimlik ceza koşulu)',
      explanation: 'TBK m. 180/1 açık hükmü uyarınca alacaklı hiçbir zarara uğramamış olsa bile kararlaştırılan cezanın ifasını isteyebilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'hâkim aşırı gördüğü ceza koşulunu kendiliğinden (re’sen) indirir, ancak TTK m. 22 uyarınca tacir sıfatını haiz borçlu ceza koşulunun aşırı olduğu iddiasıyla indirilmesini isteyemez',
      wrongPhrase: 'borçlu ceza koşulunu fiilen ödedikten sonra dahi her zaman tenkis (indirim) davası açabilir ve tacir olan borçlular da adi borçlular gibi her zaman fahişlik indirimi isteyebilirler',
      correctPhrase: 'hâkim aşırı gördüğü ceza koşulunu kendiliğinden (re’sen) indirir, ancak TTK m. 22 uyarınca tacir sıfatını haiz borçlu ceza koşulunun aşırı olduğu iddiasıyla indirilmesini isteyemez',
      explanation: 'Cezai şart ödendikten sonra tenkisi (indirilmesi) istenemez ve TTK m. 22 uyarınca tacir sıfatını haiz borçlu (ceza ekonomik mahvına sebep olmadıkça) aşırı olduğu iddiasıyla cezanın indirilmesini isteyemez!'
    }
  },
  {
    id: 'rule-borclar-19',
    branch: 'Borçlar',
    subTopic: 'Alacağın Devri (Temliki) ve Borcun Üstlenilmesi (Nakli) Şekil Şartı Farkı',
    articleRef: 'TBK M. 184 & 196',
    trueStatement:
      'Alacağın devrinin (temlikinin) geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır ve kanun, sözleşme veya işin niteliği engel olmadıkça alacaklı, borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir; buna karşılık borcun dış üstlenilmesi (borcun nakli) sözleşmesi herhangi bir geçerlilik şekline tabi olmayıp üstlenen ile alacaklı arasında (alacaklının rızasıyla) kurulur.',
    trueHighlight: ['Alacağın devrinin (temlikinin) geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır', 'borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir', 'borcun dış üstlenilmesi (borcun nakli) sözleşmesi herhangi bir geçerlilik şekline tabi olmayıp üstlenen ile alacaklı arasında (alacaklının rızasıyla) kurulur'],
    trueCorrectPhrase: 'TBK m. 184 vs m. 196 altın karşılaştırması: Alacağın devri (temliki) YAZILI şekle tabidir ancak borçlunun rızası aranmaz (alacağın devri sözü verme ise şekle tabi değildir!); Borcun üstlenilmesi (nakli) ise ŞEKLE TABİ DEĞİLDİR ancak alacaklının rızası şarttır!',
    baseExplanation: 'Borçlar Genel Hukukunun en popüler sınav tuzağı: 1) Alacağın devri -> Yazılı şekil şart, borçlu rızası şart değil (ancak alacağın devri sözü verme şekle tabi değildir, TBK m. 184/2!), 2) Borcun üstlenilmesi -> Şekil şart değil, alacaklı rızası şart!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Alacağın devrinin (temlikinin) geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır ve kanun, sözleşme veya işin niteliği engel olmadıkça alacaklı, borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir; buna karşılık borcun dış üstlenilmesi (borcun nakli) sözleşmesi herhangi bir geçerlilik şekline tabi olmayıp üstlenen ile alacaklı arasında (alacaklının rızasıyla) kurulur',
      wrongPhrase: 'Alacağın devrinin geçerli olması için borçlunun yazılı muvafakati şarttır, borcun dış üstlenilmesi ise alacaklının rızası aranmaksızın yalnızca noter senediyle kurulabilir',
      correctPhrase: 'Alacağın devrinin (temlikinin) geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır ve kanun, sözleşme veya işin niteliği engel olmadıkça alacaklı, borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir; buna karşılık borcun dış üstlenilmesi (borcun nakli) sözleşmesi herhangi bir geçerlilik şekline tabi olmayıp üstlenen ile alacaklı arasında (alacaklının rızasıyla) kurulur',
      explanation: 'Tam tersine! Alacağın devrinde (TBK m. 183-184) borçlunun rızası aranmaz ama yazılı şekil şarttır; borcun dış üstlenilmesinde (TBK m. 196) ise alacaklının kabulü şarttır ama şekil şartı yoktur!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Alacağın devrinin (temlikinin) geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır',
      wrongPhrase: 'Hem alacağın devri işlemi hem de alacağın devri sözü verme (temlik vaadi) resmi şekle tabidir',
      correctPhrase: 'Alacağın devrinin (temlikinin) geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır',
      explanation: 'TBK m. 184/1-2 uyarınca alacağın devri (tasarruf işlemi) adi yazılı şekle tabidir; alacağın devri sözü verme (taahhüt işlemi) ise hiçbir şekle tabi değildir!'
    }
  },
  {
    id: 'rule-borclar-20',
    branch: 'Borçlar',
    subTopic: 'Satış Sözleşmesinde Ayıptan Sorumluluk Zamanaşımı Süreleri (2 Yıl ve 5 Yıl)',
    articleRef: 'TBK M. 231 & 244',
    trueStatement:
      'Satılan taşınırın ayıbından doğan sorumluluk, satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar; taşınmaz satışında ise ayıptan doğan sorumluluk zamanaşımı süresi mülkiyetin geçmesinden (tescilden) sonra beş yıldır; ancak satıcı satılanı ayıplı olarak devretmekte ağır kusurlu (hileli) ise iki ve beş yıllık zamanaşımı sürelerinden yararlanamaz.',
    trueHighlight: ['taşınırın ayıbından doğan sorumluluk, satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar', 'taşınmaz satışında ise ayıptan doğan sorumluluk zamanaşımı süresi mülkiyetin geçmesinden (tescilden) sonra beş yıldır', 'ağır kusurlu (hileli) ise iki ve beş yıllık zamanaşımı sürelerinden yararlanamaz'],
    trueCorrectPhrase: 'TBK satış sözleşmesinde ayıptan sorumluluk zamanaşımı: Taşınırlarda teslimden itibaren 2 yıl (TBK m. 231), taşınmazlarda tescilden itibaren 5 yıldır (TBK m. 244); satıcının ağır kusuru varsa bu kısa sürelerden yararlanamaz (10/20 yıllık genel süre uygulanır)',
    baseExplanation: 'TBK m. 231 ve m. 244 (6502 s. TKHK m. 12 ve m. 16 ile de paraleldir): Taşınır ayıbında 2 yıl, taşınmaz/konut ayıbında 5 yıl zamanaşımı uygulanır; satıcı ağır kusurluysa bu sürelerden yararlanamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar; taşınmaz satışında ise ayıptan doğan sorumluluk zamanaşımı süresi mülkiyetin geçmesinden (tescilden) sonra beş yıldır',
      wrongPhrase: 'satılan taşınırın devrinden başlayarak altı ay geçmekle zamanaşımına uğrar; taşınmaz satışında ise ayıptan sorumluluk süresi bir yıldır',
      correctPhrase: 'satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar; taşınmaz satışında ise ayıptan doğan sorumluluk zamanaşımı süresi mülkiyetin geçmesinden (tescilden) sonra beş yıldır',
      explanation: '6098 sayılı TBK m. 231 ve m. 244 ile eski BK’daki 6 aylık süre kaldırılmış; taşınır ayıbında zamanaşımı 2 yıla, taşınmaz ayıbında ise 5 yıla çıkarılmıştır (ticari satışta ise TTK m. 23/1-c uyarınca 2 gün / 8 gün ihbar ve 2 yıl zamanaşımı uygulanır)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak satıcı satılanı ayıplı olarak devretmekte ağır kusurlu (hileli) ise iki ve beş yıllık zamanaşımı sürelerinden yararlanamaz',
      wrongPhrase: 'satıcı ayıbı kasten ve hileyle gizlemiş olsa dahi iki ve beş yıllık sürelerin dolmasıyla her türlü sorumluluğu ortadan kalkar',
      correctPhrase: 'ancak satıcı satılanı ayıplı olarak devretmekte ağır kusurlu (hileli) ise iki ve beş yıllık zamanaşımı sürelerinden yararlanamaz',
      explanation: 'TBK m. 231/2 uyarınca satıcı, satılanı ayıplı olarak devretmekte ağır kusurlu ise iki (ve taşınmazda beş) yıllık zamanaşımı süresinden yararlanamaz!'
    }
  },
  {
    id: 'rule-borclar-21',
    branch: 'Borçlar',
    subTopic: 'Eser Sözleşmesinde Zamanaşımı Süreleri (2 Yıl, Taşınmaz Yapılarda 5 Yıl, Ağır Kusurda 20 Yıl)',
    articleRef: 'TBK M. 478',
    trueStatement:
      'Yüklenici ayıplı bir eser meydana getirmişse, bu sebeple açılacak davalar, teslim tarihinden başlayarak, taşınmaz yapılar dışındaki eserlerde iki yılın; taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa, ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar.',
    trueHighlight: ['teslim tarihinden başlayarak, taşınmaz yapılar dışındaki eserlerde iki yılın; taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa, ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar'],
    trueCorrectPhrase: 'eser (inşaat/istisna) sözleşmesinde ayıptan doğan zamanaşımı (TBK m. 478): Taşınır eserlerde 2 yıl, taşınmaz yapılarda 5 yıl, yüklenicinin AĞIR KUSURU varsa (taşınır veya taşınmaz ayrımı olmaksızın!) teslimden itibaren 20 yıldır!',
    baseExplanation: 'TBK m. 478 HMGS Borçlar Özel Hukukunun en önemli maddesidir: 6098 sayılı TBK ile yüklenicinin ağır kusuru halinde (örneğin eksik demir/beton kullanılan binalarda veya taşınır eserde) zamanaşımı süresi 10 yıldan 20 YILA çıkarılmıştır!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'taşınmaz yapılar dışındaki eserlerde iki yılın; taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa, ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar',
      wrongPhrase: 'taşınır eserlerde bir yılın; taşınmaz yapılarda üç yılın ve yüklenicinin ağır kusuru varsa on yılın geçmesiyle zamanaşımına uğrar',
      correctPhrase: 'taşınmaz yapılar dışındaki eserlerde iki yılın; taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa, ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar',
      explanation: 'TBK m. 478 uyarınca eser sözleşmesinde ayıptan doğan zamanaşımı süreleri: Taşınırlarda 2 yıl, taşınmaz yapılarda 5 yıl ve yüklenicinin ağır kusuru varsa (taşınır/taşınmaz fark etmeksizin) 20 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yüklenicinin ağır kusuru varsa, ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle',
      wrongPhrase: 'yirmi yıllık ağır kusur zamanaşımı yalnızca taşınmaz binalar için geçerli olup taşınır eserlerde ağır kusur bulunsa dahi beş yılın geçmesiyle',
      correctPhrase: 'yüklenicinin ağır kusuru varsa, ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle',
      explanation: 'TBK m. 478 metnindeki "ayıplı eserin niteliğine bakılmaksızın" ibaresi uyarınca 20 yıllık ağır kusur zamanaşımı hem taşınmaz yapılarda hem de taşınır eserlerde uygulanır!'
    }
  },
  {
    id: 'rule-borclar-22',
    branch: 'Borçlar',
    subTopic: 'Vekâlet Sözleşmesinde Tek Taraflı Sona Erdirme (Azil ve İstifa) ile Özel Yetki Gerektiren Haller',
    articleRef: 'TBK M. 504 & 512',
    trueStatement:
      'Vekâlet veren ve vekil, her zaman sözleşmeyi tek taraflı olarak sona erdirebilir (azil ve istifa); ancak uygun olmayan zamanda sözleşmeyi sona erdiren taraf, diğerinin bundan doğan zararını gidermekle yükümlüdür; vekilin özel olarak yetkili kılınmadıkça dava açması, sulh olması, hakeme başvurması, iflas, iflasın ertelenmesi ve konkordato talep etmesi, kambiyo taahhüdünde bulunması, bağışlama yapması, kefil olması, taşınmazı devretmesi veya bir hak ile sınırlandırması mümkün değildir.',
    trueHighlight: ['Vekâlet veren ve vekil, her zaman sözleşmeyi tek taraflı olarak sona erdirebilir', 'uygun olmayan zamanda sözleşmeyi sona erdiren taraf, diğerinin bundan doğan zararını gidermekle yükümlüdür', 'dava açması, sulh olması, hakeme başvurması, iflas, iflasın ertelenmesi ve konkordato talep etmesi, kambiyo taahhüdünde bulunması, bağışlama yapması, kefil olması, taşınmazı devretmesi veya bir hak ile sınırlandırması mümkün değildir'],
    trueCorrectPhrase: 'TBK m. 504/3 uyarınca vekilin ÖZEL YETKİ olmadan yapamayacağı işlemler (DK-S-H-İ-K-B-T): Dava açmak, Sulh olmak, Hakeme başvurmak, İflas/konkordato istemek, Kambiyo taahhüdünde bulunmak, Bağışlama yapmak, Kefil olmak, Taşınmazı devretmek/sınırlandırmak; TBK m. 512 uyarınca azil ve istifa hakkından önceden feragat edilemez!',
    baseExplanation: 'TBK m. 504/3 (ve HMK m. 74) özel yetki gerektiren işlemler listesi HMGS’nin klasik sorusudur; ayrıca TBK m. 512 uyarınca vekâletten azil ve istifa her zaman mümkündür (bu haktan önceden feragat edilemez), sadece uygun olmayan zamanda yapılırsa menfi zarar tazmin edilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'vekilin özel olarak yetkili kılınmadıkça dava açması, sulh olması, hakeme başvurması, iflas, iflasın ertelenmesi ve konkordato talep etmesi, kambiyo taahhüdünde bulunması, bağışlama yapması, kefil olması, taşınmazı devretmesi veya bir hak ile sınırlandırması mümkün değildir',
      wrongPhrase: 'genel vekâletnameye sahip olan vekil özel bir yetki aranmaksızın müvekkili adına kambiyo senedi (bono/çek) düzenleyebilir, kefil olabilir, bağışlama yapabilir ve taşınmaz satabilir',
      correctPhrase: 'vekilin özel olarak yetkili kılınmadıkça dava açması, sulh olması, hakeme başvurması, iflas, iflasın ertelenmesi ve konkordato talep etmesi, kambiyo taahhüdünde bulunması, bağışlama yapması, kefil olması, taşınmazı devretmesi veya bir hak ile sınırlandırması mümkün değildir',
      explanation: 'TBK m. 504/3 uyarınca kambiyo taahhüdünde bulunmak, kefil olmak, bağışlama yapmak, taşınmaz devretmek, dava açmak, sulh ve tahkim için genel vekâletname yetmez; açıkça ÖZEL YETKİ verilmesi şarttır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Vekâlet veren ve vekil, her zaman sözleşmeyi tek taraflı olarak sona erdirebilir (azil ve istifa)',
      wrongPhrase: 'Belirli süreli vekâlet sözleşmelerinde tarafların süre dolmadan azil veya istifa etmesi kesinlikle geçersizdir',
      correctPhrase: 'Vekâlet veren ve vekil, her zaman sözleşmeyi tek taraflı olarak sona erdirebilir (azil ve istifa)',
      explanation: 'TBK m. 512 emredici hükmü uyarınca vekâlet sözleşmesinde azil ve istifa hakkı her zaman kullanılabilir; bu haktan önceden vazgeçilemez!'
    }
  },
  {
    id: 'rule-borclar-23',
    branch: 'Borçlar',
    subTopic: 'Müteselsil Borçlulukta Zamanaşımının Kesilmesi ve Rücu',
    articleRef: 'TBK M. 162-167',
    trueStatement:
      'Birden çok borçludan her biri, alacaklıya karşı borcun tamamından sorumlu olmayı kabul ettiğini bildirirse müteselsil borçluluk doğar (ticari işlerde ise TTK m. 7 uyarınca aksi kararlaştırılmamışsa teselsül karinesi geçerlidir); alacaklının müteselsil borçlulardan birine karşı yaptığı bir işlemle zamanaşımının kesilmesi, diğer müteselsil borçlulara karşı da zamanaşımını keser; kendine düşen paydan fazla ifada bulunan müteselsil borçlu, ödediği fazla miktar ölçüsünde diğer borçlulara rücu hakkına sahiptir ve alacaklının haklarına halef olur.',
    trueHighlight: ['alacaklının müteselsil borçlulardan birine karşı yaptığı bir işlemle zamanaşımının kesilmesi, diğer müteselsil borçlulara karşı da zamanaşımını keser', 'diğer borçlulara rücu hakkına sahiptir ve alacaklının haklarına halef olur'],
    trueCorrectPhrase: 'TBK m. 155/1 uyarınca müteselsil borçlulardan birine karşı zamanaşımı kesilince diğer müteselsil borçlulara karşı da kesilir (ancak kefalette asıl borçluya karşı kesilen zamanaşımı kefile karşı kesilirken, kefile karşı kesilen zamanaşımı asıl borçluya karşı kesilmez, TBK m. 155/2-3!)',
    baseExplanation: 'TBK m. 155’teki müteselsil borçluluk - kefalet zamanaşımı kesilmesi farkı ÖSYM’nin klasik tuzak sorusudur: Müteselsil borçlulardan birine karşı kesilen zamanaşımı diğerlerine karşı da kesilir; asıl borçluya karşı kesilen zamanaşımı kefile karşı da kesilir; FAKAT kefile karşı kesilen zamanaşımı asıl borçluya karşı kesilmez!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'alacaklının müteselsil borçlulardan birine karşı yaptığı bir işlemle zamanaşımının kesilmesi, diğer müteselsil borçlulara karşı da zamanaşımını keser',
      wrongPhrase: 'müteselsil borçlulardan birine karşı zamanaşımının kesilmesi diğer müteselsil borçlulara karşı hiçbir etki doğurmaz; buna karşılık kefile karşı zamanaşımının kesilmesi asıl borçluya karşı da zamanaşımını keser',
      correctPhrase: 'alacaklının müteselsil borçlulardan birine karşı yaptığı bir işlemle zamanaşımının kesilmesi, diğer müteselsil borçlulara karşı da zamanaşımını keser',
      explanation: 'TBK m. 155/1-3 uyarınca tam tersidir: Müteselsil borçlulardan birine karşı kesilen zamanaşımı diğer müteselsil borçlulara karşı da kesilir; buna karşılık kefile karşı kesilen zamanaşımı asıl borçluya karşı kesilmez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Birden çok borçludan her biri, alacaklıya karşı borcun tamamından sorumlu olmayı kabul ettiğini bildirirse müteselsil borçluluk doğar (ticari işlerde ise TTK m. 7 uyarınca aksi kararlaştırılmamışsa teselsül karinesi geçerlidir)',
      wrongPhrase: 'Adi borç ilişkilerinde de birden çok borçlu varsa kanun gereği her zaman müteselsil borçluluk karinesi geçerlidir',
      correctPhrase: 'Birden çok borçludan her biri, alacaklıya karşı borcun tamamından sorumlu olmayı kabul ettiğini bildirirse müteselsil borçluluk doğar (ticari işlerde ise TTK m. 7 uyarınca aksi kararlaştırılmamışsa teselsül karinesi geçerlidir)',
      explanation: 'TBK m. 162 uyarınca adi borç ilişkilerinde asıl olan kısmi borçluluktur; müteselsil borçluluk ancak sözleşmeyle açıkça kabul edilirse veya kanunda öngörülmüşse doğar (teselsül karinesi yalnız TTK m. 7 uyarınca ticari işlerde geçerlidir)!'
    }
  },
  {
    id: 'rule-borclar-24',
    branch: 'Borçlar',
    subTopic: 'Sözleşmelerde Genel İşlem Koşulları (TBK m. 20-25): Yazılmamış Sayılma ve Geçersizlik',
    articleRef: 'TBK M. 20-25',
    trueStatement:
      'Genel işlem koşulları, bir sözleşme yapılırken düzenleyenin, ileride çok sayıdaki benzer sözleşmede kullanmak amacıyla, önceden, tek başına hazırlayarak karşı tarafa sunduğu sözleşme hükümleridir; karşı tarafın menfaatine aykırı genel işlem koşullarının sözleşmenin kapsamına girmesi, sözleşmenin yapılması sırasında düzenleyenin karşı tarafa bu koşulların varlığı hakkında açıkça bilgi verip bunların içeriğini öğrenme imkânı sağlamasına ve karşı tarafın da bu koşulları kabul etmesine bağlıdır; aksi takdirde genel işlem koşulları yazılmamış sayılır; düzenleyene tek yanlı olarak sözleşmeyi değiştirme yetkisi veren kayıtlar da yazılmamış sayılır.',
    trueHighlight: ['aksi takdirde genel işlem koşulları yazılmamış sayılır', 'düzenleyene tek yanlı olarak sözleşmeyi değiştirme yetkisi veren kayıtlar da yazılmamış sayılır'],
    trueCorrectPhrase: 'TBK m. 21-25 genel işlem koşulları (GİK) denetimi: 1) Yürürlük denetimi (bilgilendirme/kabul yoksa ve şaşırtıcı kurallar -> YAZILMAMIŞ SAYILIR), 2) Yorum denetimi (açık değilse -> DÜZENLEYENİN ALEYHİNE yorumlanır), 3) İçerik denetimi (dürüstlük kuralına aykırıysa -> KESİN HÜKÜMSÜZDÜR)',
    baseExplanation: 'TBK m. 20-25 genel işlem koşullarında üç aşamalı denetim ve yaptırım farkı: Bilgilendirme yoksa veya tek yanlı değiştirme yetkisi varsa "yazılmamış sayılır" (m. 21, 24); müphemse "düzenleyen aleyhine yorumlanır" (m. 23); dürüstlük kuralına aykırıysa "kesin hükümsüzdür" (m. 25).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aksi takdirde genel işlem koşulları yazılmamış sayılır; düzenleyene tek yanlı olarak sözleşmeyi değiştirme yetkisi veren kayıtlar da yazılmamış sayılır',
      wrongPhrase: 'yazılmamış sayılan bir genel işlem koşulu bulunması hâlinde sözleşmenin geri kalan tüm hükümleri de kendiliğinden geçersiz olur ve açık olmayan genel işlem koşulları her zaman düzenleyenin lehine yorumlanır',
      correctPhrase: 'aksi takdirde genel işlem koşulları yazılmamış sayılır; düzenleyene tek yanlı olarak sözleşmeyi değiştirme yetkisi veren kayıtlar da yazılmamış sayılır',
      explanation: 'TBK m. 22 ve m. 23 uyarınca sözleşmenin yazılmamış sayılan genel işlem koşulları dışındaki hükümleri geçerliliğini korur ve açık olmayan genel işlem koşulları düzenleyenin ALEYHİNE ve karşı tarafın lehine yorumlanır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Genel işlem koşulları, bir sözleşme yapılırken düzenleyenin, ileride çok sayıdaki benzer sözleşmede kullanmak amacıyla, önceden, tek başına hazırlayarak karşı tarafa sunduğu sözleşme hükümleridir',
      wrongPhrase: 'Genel işlem koşullarına ilişkin hükümler yalnızca tüketicilerle yapılan sözleşmelerde uygulanır, tacirler arasındaki sözleşmelerde uygulanamaz',
      correctPhrase: 'Genel işlem koşulları, bir sözleşme yapılırken düzenleyenin, ileride çok sayıdaki benzer sözleşmede kullanmak amacıyla, önceden, tek başına hazırlayarak karşı tarafa sunduğu sözleşme hükümleridir',
      explanation: 'TBK m. 20-25 genel hükümler arasında yer aldığından (basiretli tacir özeni saklı kalmakla birlikte) yalnız tüketici sözleşmelerinde değil, tüm özel hukuk sözleşmelerinde uygulanır!'
    }
  },
  {
    id: 'rule-borclar-25',
    branch: 'Borçlar',
    subTopic: 'TBK’da Zamanaşımı Süresi: 10 Yıllık Genel ve 5 Yıllık Özel Zamanaşımı (TBK m. 146-147)',
    articleRef: 'TBK M. 146-148',
    trueStatement:
      'Kanunda aksine bir hüküm bulunmadıkça her alacak on yıllık zamanaşımına tabidir (TBK m. 146); ancak kira bedelleri, anapara faizleri ve ücret gibi diğer dönemsel edimler, otel, pansiyon ve lokanta giderleri, küçük sanat işlerinden ve küçük çapta perakende satışlardan doğan alacaklar, ortaklık sözleşmesinden doğan alacaklar, vekâlet, komisyon, acentelik ve tellallıktan (simsarlıktan) doğan alacaklar ile yüklenicinin ağır kusuru dışındaki eser sözleşmesinden doğan alacaklar beş yıllık zamanaşımına tabidir (TBK m. 147); bu zamanaşımı süreleri sözleşmeyle değiştirilemez.',
    trueHighlight: ['her alacak on yıllık zamanaşımına tabidir (TBK m. 146)', 'kira bedelleri, anapara faizleri ve ücret gibi diğer dönemsel edimler', 'vekâlet, komisyon, acentelik ve tellallıktan (simsarlıktan) doğan alacaklar ile yüklenicinin ağır kusuru dışındaki eser sözleşmesinden doğan alacaklar beş yıllık zamanaşımına tabidir', 'bu zamanaşımı süreleri sözleşmeyle değiştirilemez'],
    trueCorrectPhrase: 'TBK m. 146 uyarınca genel zamanaşımı 10 yıl; TBK m. 147 uyarınca kira, faiz, ücret, otel/lokanta, küçük perakende satış, şirket, vekâlet, komisyon, acentelik, simsarlık ve eser sözleşmesi alacakları 5 yıllık zamanaşımına tabidir; TBK m. 148 uyarınca bu süreler sözleşmeyle kesinlikle değiştirilemez!',
    baseExplanation: 'TBK m. 146-148 her sınavda doğrudan veya dolaylı sorulur: Ödünç (karz) sözleşmesi ve taşınır/taşınmaz satışı (perakende hariç) 10 yıla tabi iken; kira, ücret, vekâlet, simsarlık, komisyon ve eser sözleşmeleri 5 yıla tabidir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kira bedelleri, anapara faizleri ve ücret gibi diğer dönemsel edimler, otel, pansiyon ve lokanta giderleri, küçük sanat işlerinden ve küçük çapta perakende satışlardan doğan alacaklar, ortaklık sözleşmesinden doğan alacaklar, vekâlet, komisyon, acentelik ve tellallıktan (simsarlıktan) doğan alacaklar ile yüklenicinin ağır kusuru dışındaki eser sözleşmesinden doğan alacaklar beş yıllık zamanaşımına tabidir (TBK m. 147); bu zamanaşımı süreleri sözleşmeyle değiştirilemez',
      wrongPhrase: 'vekâlet, simsarlık ve kira sözleşmesinden doğan alacaklar on yıllık zamanaşımına tabidir ve taraflar yapacakları yazılı sözleşmeyle kanuni zamanaşımı sürelerini kısaltabilir veya uzatabilirler',
      correctPhrase: 'kira bedelleri, anapara faizleri ve ücret gibi diğer dönemsel edimler, otel, pansiyon ve lokanta giderleri, küçük sanat işlerinden ve küçük çapta perakende satışlardan doğan alacaklar, ortaklık sözleşmesinden doğan alacaklar, vekâlet, komisyon, acentelik ve tellallıktan (simsarlıktan) doğan alacaklar ile yüklenicinin ağır kusuru dışındaki eser sözleşmesinden doğan alacaklar beş yıllık zamanaşımına tabidir (TBK m. 147); bu zamanaşımı süreleri sözleşmeyle değiştirilemez',
      explanation: 'TBK m. 147 ve m. 148 uyarınca kira, vekâlet ve simsarlık alacakları 10 yıl değil 5 yıllık zamanaşımına tabidir ve kanunda belirlenen zamanaşımı süreleri sözleşmeyle değiştirilemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu zamanaşımı süreleri sözleşmeyle değiştirilemez',
      wrongPhrase: 'borçlu sözleşme kurulurken zamanaşımı def’ini ileri sürmekten peşinen feragat edebilir',
      correctPhrase: 'bu zamanaşımı süreleri sözleşmeyle değiştirilemez',
      explanation: 'TBK m. 160/1 açık hükmü uyarınca zamanaşımından önceden (sözleşme kurulurken) feragat edilemez; ancak zamanaşımı süresi dolduktan sonra feragat edilebilir!'
    }
  },
  {
    id: 'rule-borclar-26',
    branch: 'Borçlar',
    subTopic: 'Sözleşmeden Dönme, İfa İmkânsızlığı ve Aşırı İfa Güçlüğü (Uyarlama - TBK m. 138)',
    articleRef: 'TBK M. 125, 136 & 138',
    trueStatement:
      'Karşılıklı borç yükleyen sözleşmelerde borçlu temerrüde düşerse alacaklı; borcun ifasını ve gecikme tazminatını isteyebileceği gibi, uygun süre (mehil) sonunda ifadan vazgeçip müspet zararın giderilmesini veya sözleşmeden dönerek menfi zararın giderilmesini isteyebilir; sözleşmenin yapıldığı sırada taraflarca öngörülmeyen ve öngörülmesi de beklenmeyen olağanüstü bir durum, borçludan kaynaklanmayan bir sebeple ortaya çıkar ve borçlu borcunu henüz ifa etmemiş veya ifanın aşırı ölçüde güçleşmesinden doğan haklarını saklı tutarak ifa etmiş olursa, borçlu hâkimden sözleşmenin yeni koşullara uyarlanmasını (TBK m. 138) isteyebilir.',
    trueHighlight: ['ifadan vazgeçip müspet zararın giderilmesini veya sözleşmeden dönerek menfi zararın giderilmesini isteyebilir', 'borçlu borcunu henüz ifa etmemiş veya ifanın aşırı ölçüde güçleşmesinden doğan haklarını saklı tutarak ifa etmiş olursa, borçlu hâkimden sözleşmenin yeni koşullara uyarlanmasını (TBK m. 138) isteyebilir'],
    trueCorrectPhrase: 'TBK m. 125 uyarınca temerrütte: 1) Aynen ifa + gecikme tazminatı, 2) Aynen ifadan vazgeçip MÜSPET zarar, 3) Sözleşmeden dönüp MENFİ zarar istenir! TBK m. 138 uyarlama için ise borcun henüz ifa edilmemiş olması veya ihtirazi kayıtla ifa edilmiş olması şarttır',
    baseExplanation: 'TBK m. 125’teki Müspet Zarar - Menfi Zarar eşleştirmesi her sınavda sorulur: İfadan vazgeçip tazminat istemede -> MÜSPET ZARAR; Sözleşmeden dönmede -> MENFİ ZARAR! TBK m. 138 aşırı ifa güçlüğünde ise çekincesiz tam ifadan sonra uyarlama istenemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'uygun süre (mehil) sonunda ifadan vazgeçip müspet zararın giderilmesini veya sözleşmeden dönerek menfi zararın giderilmesini isteyebilir',
      wrongPhrase: 'sözleşmeden dönerek müspet zararın (ifaya olan çıkarın) giderilmesini, aynen ifadan vazgeçerek ise yalnızca menfi zararın giderilmesini isteyebilir',
      correctPhrase: 'uygun süre (mehil) sonunda ifadan vazgeçip müspet zararın giderilmesini veya sözleşmeden dönerek menfi zararın giderilmesini isteyebilir',
      explanation: 'TBK m. 125/2-3 uyarınca tam tersidir: Alacaklı ifadan vazgeçip tazminat isterse MÜSPET zararını (borcun ifa edilmemesinden doğan zararı); sözleşmeden dönerse MENFİ zararını (sözleşmenin hükümsüz kalmasından doğan zararı) isteyebilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borçlu borcunu henüz ifa etmemiş veya ifanın aşırı ölçüde güçleşmesinden doğan haklarını saklı tutarak ifa etmiş olursa, borçlu hâkimden sözleşmenin yeni koşullara uyarlanmasını (TBK m. 138) isteyebilir',
      wrongPhrase: 'borçlu hiçbir ihtirazi kayıt koymaksızın borcunun tamamını ifa ettikten yıllar sonra dahi aşırı ifa güçlüğüne dayanarak sözleşmenin geriye dönük uyarlanmasını isteyebilir',
      correctPhrase: 'borçlu borcunu henüz ifa etmemiş veya ifanın aşırı ölçüde güçleşmesinden doğan haklarını saklı tutarak ifa etmiş olursa, borçlu hâkimden sözleşmenin yeni koşullara uyarlanmasını (TBK m. 138) isteyebilir',
      explanation: 'TBK m. 138/1 uyarınca aşırı ifa güçlüğü nedeniyle uyarlama istenebilmesi için borçlunun borcunu henüz ifa etmemiş olması veya haklarını saklı tutarak (ihtirazi kayıtla) ifa etmiş olması şarttır!'
    }
  },

  // =========================================================================
  // 2. HUKUK MUHAKEMELERİ KANUNU (HMK) DERİNLİK KURALLARI (rule-hmk-20 .. rule-hmk-30)
  // =========================================================================
  {
    id: 'rule-hmk-20',
    branch: 'HMK',
    subTopic: 'Kesin Yetki Kuralları (Taşınmazın Aynından Doğan Davalar ve Miras Davaları)',
    articleRef: 'HMK M. 11 & 12',
    trueStatement:
      'Taşınmaz üzerindeki ayni hakka ilişkin veya ayni hak sahipliğinde değişikliğe yol açabilecek davalar ile taşınmazın zilyetliğine yahut alıkoyma hakkına dayanan davalarda, taşınmazın bulunduğu yer mahkemesi kesin yetkilidir; ölen kimsenin son yerleşim yeri mahkemesi ise terekenin paylaşılmasına, yapılan paylaşma sözleşmesinin geçersizliğine, ölüme bağlı tasarrufların iptali ve tenkisine, miras sebebiyle istihkak davalarına ve mirasçılar arasında terekenin yönetiminden kaynaklanan davalara bakmaya kesin yetkilidir.',
    trueHighlight: ['taşınmazın bulunduğu yer mahkemesi kesin yetkilidir', 'ölen kimsenin son yerleşim yeri mahkemesi ise terekenin paylaşılmasına, yapılan paylaşma sözleşmesinin geçersizliğine, ölüme bağlı tasarrufların iptali ve tenkisine, miras sebebiyle istihkak davalarına', 'kesin yetkilidir'],
    trueCorrectPhrase: 'HMK m. 12 uyarınca taşınmazın aynından (ve zilyetliğinden) doğan davalarda taşınmazın bulunduğu yer mahkemesi KESİN yetkilidir; HMK m. 11/1 uyarınca ortaklığın giderilmesi, tenkis, ölüme bağlı tasarrufun iptali ve miras sebebiyle istihkak davalarında murisin son yerleşim yeri mahkemesi KESİN yetkilidir (ancak mirasçılık belgesi/veraset ilamı talebinde HMK m. 11/3 uyarınca mirasçılardan her birinin yerleşim yeri mahkemesi de yetkilidir, kesin yetki değildir!)',
    baseExplanation: 'HMK m. 11 ve m. 12 kesin yetki kurallarında dava şartı olduğundan mahkemece her aşamada re’sen gözetilir ve yetki sözleşmesi yapılamaz; ancak dikkat: Mirasçılık belgesi verilmesi/iptali (m. 11/3) ve taşınmaz kira sözleşmesinden doğan alacak davaları kesin yetkiye tabi değildir!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ölen kimsenin son yerleşim yeri mahkemesi ise terekenin paylaşılmasına, yapılan paylaşma sözleşmesinin geçersizliğine, ölüme bağlı tasarrufların iptali ve tenkisine, miras sebebiyle istihkak davalarına ve mirasçılar arasında terekenin yönetiminden kaynaklanan davalara bakmaya kesin yetkilidir',
      wrongPhrase: 'mirasçılık belgesinin (veraset ilamının) verilmesi ve yeni mirasçılık belgesi istenmesi davalarında da yalnızca ölenin son yerleşim yeri mahkemesi kesin yetkilidir ve mirasçıların kendi yerleşim yeri mahkemesinde bu talep ileri sürülemez',
      correctPhrase: 'ölen kimsenin son yerleşim yeri mahkemesi ise terekenin paylaşılmasına, yapılan paylaşma sözleşmesinin geçersizliğine, ölüme bağlı tasarrufların iptali ve tenkisine, miras sebebiyle istihkak davalarına ve mirasçılar arasında terekenin yönetiminden kaynaklanan davalara bakmaya kesin yetkilidir',
      explanation: 'HMK m. 11/3 açık hükmü uyarınca mirasçılık belgesinin iptali ve yeni mirasçılık belgesi verilmesine ilişkin davalarda kesin yetki yoktur; mirasçılardan her birinin oturduğu yer mahkemesi de yetkilidir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'taşınmazın bulunduğu yer mahkemesi kesin yetkilidir',
      wrongPhrase: 'ancak tacirler taşınmazın aynına ilişkin tapu iptali ve tescil davaları için kendi aralarında yetki sözleşmesi yaparak başka bir il mahkemesini yetkili kılabilirler',
      correctPhrase: 'taşınmazın bulunduğu yer mahkemesi kesin yetkilidir',
      explanation: 'HMK m. 12 ve m. 18/1 uyarınca kesin yetki bulunan hallerde (taşınmazın aynına ilişkin davalar gibi) tacirler veya kamu tüzel kişileri dahi yetki sözleşmesi yapamazlar; kesin yetki dava şartıdır!'
    }
  },
  {
    id: 'rule-hmk-21',
    branch: 'HMK',
    subTopic: 'Yetki Sözleşmesinin Şartları ve İlk İtiraz Olarak Kesin Olmayan Yetki İtirazı',
    articleRef: 'HMK M. 17-19',
    trueStatement:
      'Tacirler veya kamu tüzel kişileri, aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında, bir veya birden fazla mahkemeyi sözleşmeyle yetkili kılabilirler; tarafların aksini kararlaştırmadıkları sürece dava sadece sözleşmeyle belirlenen bu mahkemelerde açılır (münhasır yetki sözleşmesi karinesi); yetkinin kesin olmadığı davalarda yetki itirazının, cevap dilekçesinde ilk itiraz olarak ileri sürülmesi ve yetkili mahkemenin de doğru olarak gösterilmesi zorunludur.',
    trueHighlight: ['Tacirler veya kamu tüzel kişileri', 'tarafların aksini kararlaştırmadıkları sürece dava sadece sözleşmeyle belirlenen bu mahkemelerde açılır', 'cevap dilekçesinde ilk itiraz olarak ileri sürülmesi ve yetkili mahkemenin de doğru olarak gösterilmesi zorunludur'],
    trueCorrectPhrase: 'HMK m. 17-18 uyarınca SADECE tacirler veya kamu tüzel kişileri kendi aralarında yazılı yetki sözleşmesi yapabilir (tüketiciler, işçiler, adi kişiler yetki sözleşmesi yapamaz!); kesin olmayan yetki itirazı cevap dilekçesinde ilk itiraz olarak ileri sürülmeli ve yetkili mahkeme açıkça gösterilmelidir',
    baseExplanation: 'HMK m. 17-19’daki üç sınav tuzağı: 1) Adi kişiler (tacir veya kamu tüzel kişisi olmayanlar) yetki sözleşmesi yapamaz, 2) Yetki sözleşmesi aksi belirtilmedikçe münhasır yetki doğurur, 3) Kesin olmayan yetki itirazında yetkili mahkeme gösterilmezse itiraz kabul edilmez!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Tacirler veya kamu tüzel kişileri, aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında, bir veya birden fazla mahkemeyi sözleşmeyle yetkili kılabilirler',
      wrongPhrase: 'Gerçek kişiler, tüketiciler ve işçiler de dahil olmak üzere fiil ehliyetine sahip herkes aralarındaki her türlü sözleşmede yetki sözleşmesi yapabilir',
      correctPhrase: 'Tacirler veya kamu tüzel kişileri, aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında, bir veya birden fazla mahkemeyi sözleşmeyle yetkili kılabilirler',
      explanation: '6100 sayılı HMK m. 17 ile sadece TACİRLER veya KAMU TÜZEL KİŞİLERİ arasında yetki sözleşmesi yapılmasına izin verilmiştir; tacir/kamu tüzel kişisi olmayan gerçek kişiler (tüketiciler, işçiler, kiracılar vb.) yetki sözleşmesi yapamazlar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cevap dilekçesinde ilk itiraz olarak ileri sürülmesi ve yetkili mahkemenin de doğru olarak gösterilmesi zorunludur',
      wrongPhrase: 'tahkikat bitinceye kadar her aşamada ileri sürülebilir ve davalının sadece "mahkeme yetkisizdir" demesi yeterli olup yetkili mahkemeyi belirtmesi gerekmez',
      correctPhrase: 'cevap dilekçesinde ilk itiraz olarak ileri sürülmesi ve yetkili mahkemenin de doğru olarak gösterilmesi zorunludur',
      explanation: 'HMK m. 19/2 ve m. 116 uyarınca kesin olmayan yetki itirazı ilk itirazdır; en geç cevap dilekçesinde ileri sürülmeli ve davalı yetkili mahkemeyi de açıkça göstermelidir (aksi takdirde yetki itirazı dikkate alınmaz)!'
    }
  },
  {
    id: 'rule-hmk-22',
    branch: 'HMK',
    subTopic: 'Görevsizlik veya Yetkisizlik Kararı Üzerine Dosyanın Gönderilmesi Talebi Süresi (2 Hafta)',
    articleRef: 'HMK M. 20',
    trueStatement:
      'Görevsizlik veya yetkisizlik kararı verilmesi hâlinde, taraflardan birinin, bu karar verildiği anda kesin ise tebliğ tarihinden, süresi içinde kanun yoluna başvurulmayarak kesinleşmiş ise kararın kesinleştiği tarihten; kanun yoluna başvurulmuşsa bu başvurunun reddi kararının tebliğ tarihinden itibaren iki hafta içinde kararı veren mahkemeye başvurarak, dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir; aksi takdirde dava açılmamış sayılır.',
    trueHighlight: ['iki hafta içinde kararı veren mahkemeye başvurarak, dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir; aksi takdirde dava açılmamış sayılır'],
    trueCorrectPhrase: 'HMK m. 20 uyarınca görevsizlik veya yetkisizlik kararının kesinleşmesinden/tebliğinden itibaren 2 HAFTA içinde kararı veren mahkemeden dosyanın görevli/yetkili mahkemeye gönderilmesi talep edilmelidir; edilmezse dava açılmamış sayılır!',
    baseExplanation: 'HMK m. 20 HMGS’de en çok sorulan usul sürelerinden biridir: Görevsizlik veya yetkisizlik kararından sonra mahkeme dosyayı kendiliğinden (re’sen) göndermez (idari yargıdaki İYUK m. 15/1-a’dan farklı olarak!); taraflardan birinin 2 hafta içinde kararı veren mahkemeye başvurması şarttır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki hafta içinde kararı veren mahkemeye başvurarak, dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir; aksi takdirde dava açılmamış sayılır',
      wrongPhrase: 'on gün içinde doğrudan görevli veya yetkili mahkemeye başvurması gerekir; ayrıca mahkeme talep olmasa da dosyayı kendiliğinden görevli mahkemeye gönderir',
      correctPhrase: 'iki hafta içinde kararı veren mahkemeye başvurarak, dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir; aksi takdirde dava açılmamış sayılır',
      explanation: '6100 sayılı HMK m. 20 ile eski HUMK’taki 10 günlük süre 2 haftaya çıkarılmıştır ve başvuru doğrudan yeni mahkemeye değil, görevsizlik/yetkisizlik kararını veren mahkemeye yapılır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kararı veren mahkemeye başvurarak, dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir',
      wrongPhrase: 'adli yargı mahkemesi davada idari yargının (idare mahkemesinin) görevli olduğu gerekçesiyle yargı yolu bakımından görevsizlik kararı verdiğinde de dosyayı iki hafta içinde idare mahkemesine gönderir',
      correctPhrase: 'kararı veren mahkemeye başvurarak, dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir',
      explanation: 'HMK m. 20 yalnızca adli yargı içindeki mahkemeler arasındaki görevsizlik ve yetkisizlik kararlarında uygulanır; yargı yolu (idari yargı) caiz değilse HMK m. 114/1-b uyarınca dava şartı yokluğundan dava usulden reddedilir, dosya idare mahkemesine gönderilmez (davacı İYUK m. 9 uyarınca 30 gün içinde idare mahkemesinde yeni dava açar)!'
    }
  },
  {
    id: 'rule-hmk-23',
    branch: 'HMK',
    subTopic: 'Hâkimin Yasaklılığı (Çekinmesi - HMK m. 34) ve Hâkimin Reddi (HMK m. 36-38)',
    articleRef: 'HMK M. 34-43',
    trueStatement:
      'Hâkim; kendisine ait olan veya doğrudan doğruya ya da dolayısıyla ilgili olduğu davalarda, aralarında evlilik bağı kalksa bile eşinin davasında, kendisi veya eşinin altsoy veya üstsoyunun davasında, üçüncü derece dahil kan veya kayın hısımlarının davasında ve iki taraftan birinin vekili, vasisi, kayyımı veya yasal danışmanı sıfatıyla hareket ettiği davalarda talep olmasa bile çekinmek zorundadır (yasaklılık, HMK m. 34) ve çekinme kararına başladığı tarihten itibaren yaptığı işlemler üst mahkeme kararıyla iptal olunur; hâkimin reddi sebebini bilen tarafın ise ret talebini en geç ilk duruşmada (sonradan öğrenmişse öğrendikten sonraki ilk duruşmada) ileri sürmesi zorunludur.',
    trueHighlight: ['üçüncü derece dahil kan veya kayın hısımlarının davasında', 'talep olmasa bile çekinmek zorundadır (yasaklılık, HMK m. 34)', 'ret talebini en geç ilk duruşmada (sonradan öğrenmişse öğrendikten sonraki ilk duruşmada) ileri sürmesi zorunludur'],
    trueCorrectPhrase: 'HMK m. 34 yasaklılık (çekinme) sebeplerinde kan ve kayın hısımlığı sınırı 3. DERECE DAHİLDİR (amca/hala/dayı/teyze/yeğen dahil, kuzen olan 4. derece ise HMK m. 36’da ret sebebidir!); yasaklılık kamu düzenindendir, hâkim re’sen çekinmek zorundadır',
    baseExplanation: 'HMK m. 34 (yasaklılık) ile m. 36 (ret) arasındaki derece tuzağı: 3. derece dahil kan ve kayın hısımlığı "yasaklılık" (mutlak çekinme) sebebidir; 4. derece dahil yansoy hısımlığı (kuzenler) ise "ret" (tarafsızlıktan şüphe) sebebidir!',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üçüncü derece dahil kan veya kayın hısımlarının davasında ve iki taraftan birinin vekili, vasisi, kayyımı veya yasal danışmanı sıfatıyla hareket ettiği davalarda talep olmasa bile çekinmek zorundadır (yasaklılık, HMK m. 34)',
      wrongPhrase: 'dördüncü derece dahil kuzenlerinin davasında da mutlak yasaklılık (HMK m. 34) söz konusu olup taraflar muvafakat etse bile hâkim davaya bakamaz; buna karşılık üçüncü derece kayın hısımlığında yasaklılık yoktur',
      correctPhrase: 'üçüncü derece dahil kan veya kayın hısımlarının davasında ve iki taraftan birinin vekili, vasisi, kayyımı veya yasal danışmanı sıfatıyla hareket ettiği davalarda talep olmasa bile çekinmek zorundadır (yasaklılık, HMK m. 34)',
      explanation: 'HMK m. 34/1-ç uyarınca yasaklılık (mutlak çekinme) 3. derece dahil kan ve kayın hısımlığını kapsar; 4. derece yansoy hısımlığı ise yasaklılık değil, HMK m. 36/1-d uyarınca ret sebebidir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'çekinme kararına başladığı tarihten itibaren yaptığı işlemler üst mahkeme kararıyla iptal olunur',
      wrongPhrase: 'yasaklı olan hâkimin verdiği kararlar dahi taraflarca kanun yoluna başvurulmadıkça tamamen geçerli olup hâkim yasaklılıktan feragat edebilir',
      correctPhrase: 'çekinme kararına başladığı tarihten itibaren yaptığı işlemler üst mahkeme kararıyla iptal olunur',
      explanation: 'HMK m. 35 uyarınca çekinme (yasaklılık) sebepleri kamu düzenine ilişkindir, iki taraf muvafakat etse bile hâkim davaya bakamaz ve yaptığı işlemler üst mahkeme kararıyla iptal olunur!'
    }
  },
  {
    id: 'rule-hmk-24',
    branch: 'HMK',
    subTopic: 'Davaya Vekâlette Ehliyet ve Vekâletnamesiz Dava Açılması (HMK m. 77)',
    articleRef: 'HMK M. 74 & 77',
    trueStatement:
      'Vekâletnamesinin aslını veya onaylı örneğini vermeyen avukat, dava açamaz ve yargılamayla ilgili hiçbir işlem yapamaz; şu kadar ki gecikmesinde zarar umulan hâllerde mahkeme, vereceği kesin süre içinde vekâletnamesini getirmek koşuluyla avukatın dava açmasına veya usul işlemleri yapmasına izin verebilir; bu süre içinde vekâletname verilmez veya asıl taraf yapılan işlemleri kabul ettiğini dilekçeyle mahkemeye bildirmez ise dava açılmamış veya gerçekleştirilen işlemler yapılmamış sayılır.',
    trueHighlight: ['gecikmesinde zarar umulan hâllerde mahkeme, vereceği kesin süre içinde vekâletnamesini getirmek koşuluyla avukatın dava açmasına veya usul işlemleri yapmasına izin verebilir', 'dava açılmamış veya gerçekleştirilen işlemler yapılmamış sayılır'],
    trueCorrectPhrase: 'HMK m. 77 uyarınca gecikmesinde zarar umulan hallerde mahkemenin verdiği kesin süre içinde vekâletname sunulmaz veya asil işlemleri kabul ettiğini bildirmezse dava usulden reddedilmez, "DAVA AÇILMAMIŞ SAYILIR" ve avukat celse harcı ile yargılama giderleri ve karşı taraf zararlarına mahkûm edilir!',
    baseExplanation: 'HMK m. 77’de ÖSYM’nin kurduğu tuzak: Vekâletnamesiz açılan davada kesin sürede vekâletname tamamlanmazsa karar "davanın usulden reddi" değil, "davanın açılmamış sayılması"dır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu süre içinde vekâletname verilmez veya asıl taraf yapılan işlemleri kabul ettiğini dilekçeyle mahkemeye bildirmez ise dava açılmamış veya gerçekleştirilen işlemler yapılmamış sayılır',
      wrongPhrase: 'kesin süre içinde vekâletname sunulmasa bile mahkeme yargılamaya asıl tarafın yokluğunda devam eder ve esas hakkında karar verir',
      correctPhrase: 'bu süre içinde vekâletname verilmez veya asıl taraf yapılan işlemleri kabul ettiğini dilekçeyle mahkemeye bildirmez ise dava açılmamış veya gerçekleştirilen işlemler yapılmamış sayılır',
      explanation: 'HMK m. 77/1 uyarınca kesin süre içinde vekâletname verilmez veya asil yapılan işlemleri kabul ettiğini bildirmezse dava açılmamış (veya yapılan işlemler yapılmamış) sayılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'gecikmesinde zarar umulan hâllerde mahkeme, vereceği kesin süre içinde vekâletnamesini getirmek koşuluyla avukatın dava açmasına veya usul işlemleri yapmasına izin verebilir',
      wrongPhrase: 'vekâletnamesinde özel yetki bulunmayan avukat da müvekkili adına her zaman davadan feragat edebilir, davayı kabul edebilir ve sulh olabilir',
      correctPhrase: 'gecikmesinde zarar umulan hâllerde mahkeme, vereceği kesin süre içinde vekâletnamesini getirmek koşuluyla avukatın dava açmasına veya usul işlemleri yapmasına izin verebilir',
      explanation: 'HMK m. 74 uyarınca açıkça yetki verilmemiş ise vekil; sulh olamaz, hâkimi reddedemez, davanın tamamını ıslah edemez, yemin teklif edemez, yemini kabul/iade/reddedemez, davadan feragat edemez ve davayı kabul edemez!'
    }
  },
  {
    id: 'rule-hmk-25',
    branch: 'HMK',
    subTopic: 'Adli Tatil Süresi (20 Temmuz - 31 Ağustos) ve Sürelerin Uzaması (1 Hafta)',
    articleRef: 'HMK M. 102-104',
    trueStatement:
      'Adli tatil, her yıl yirmi temmuzda başlar, otuz bir ağustosta sona erer ve yeni adli yıl bir eylülde başlar; adli tatile tabi olan dava ve işlerde, bu Kanunun tayin ettiği sürelerin bitmesi tatil zamanına rastlarsa, bu süreler ayrıca bir karara gerek olmaksızın adli tatilin bittiği günden itibaren bir hafta uzatılmış sayılır.',
    trueHighlight: ['her yıl yirmi temmuzda başlar, otuz bir ağustosta sona erer', 'adli tatilin bittiği günden itibaren bir hafta uzatılmış sayılır'],
    trueCorrectPhrase: 'adli tatil 20 Temmuz - 31 Ağustos arasındadır; HMK’da (m. 104) ve CMK’da (m. 331/4 -> 3 gün!) ile İYUK’ta (m. 8/3 -> 7 gün!) adli tatil uzama süreleri farklıdır: HMK -> 1 hafta (7 Eylül mesai bitimi), İYUK -> 7 gün (7 Eylül mesai bitimi), CMK -> 3 gün (3 Eylül mesai bitimi)!',
    baseExplanation: 'Üç usul kanunundaki adli tatil uzama süresi karşılaştırması HMGS’nin banko sorusudur: 1) HMK m. 104: 1 hafta uzar, 2) İYUK m. 8/3: 7 gün uzar (bölge idare/idare/vergi mahkemesi tek hâkim/nöbetçi mahkeme işleri hariç), 3) CMK m. 331/4: 3 gün uzar!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'adli tatilin bittiği günden itibaren bir hafta uzatılmış sayılır',
      wrongPhrase: 'adli tatilin bittiği günden itibaren on beş gün uzatılmış sayılır',
      correctPhrase: 'adli tatilin bittiği günden itibaren bir hafta uzatılmış sayılır',
      explanation: 'HMK m. 104 uyarınca adli tatile tabi işlerde son günü adli tatile rastlayan süreler 15 gün değil, adli tatilin bittiği günden itibaren 1 hafta (7 Eylül mesai bitimine kadar) uzatılmış sayılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'adli tatile tabi olan dava ve işlerde, bu Kanunun tayin ettiği sürelerin bitmesi tatil zamanına rastlarsa',
      wrongPhrase: 'ihtiyati tedbir, ihtiyati haciz, nafaka, soybağı, velayet, vesayet ve iş davalarında da adli tatilde hiçbir işlem yapılamaz ve tüm süreler durur',
      correctPhrase: 'adli tatile tabi olan dava ve işlerde, bu Kanunun tayin ettiği sürelerin bitmesi tatil zamanına rastlarsa',
      explanation: 'HMK m. 103/1 uyarınca ihtiyati tedbir, ihtiyati haciz, delil tespiti, nafaka, soybağı, velayet, vesayet, iş davaları, çekişmesiz yargı işleri ve kanunlarda ivedi olduğu belirtilen işler adli tatilde de görülür ve bu işlerde süreler adli tatilde uzamaz!'
    }
  },
  {
    id: 'rule-hmk-26',
    branch: 'HMK',
    subTopic: 'Belirsiz Alacak Davası (HMK m. 107) ve Kısmi Dava (HMK m. 109) Farkı',
    articleRef: 'HMK M. 107 & 109',
    trueStatement:
      'Davanın açıldığı tarihte alacağın miktarını yahut değerini tam ve kesin olarak belirleyebilmesinin kendisinden beklenemeyeceği veya bunun imkânsız olduğu hâllerde, alacaklı, hukuki ilişkiyi ve asgari bir miktar ya da değeri belirtmek suretiyle belirsiz alacak davası açabilir; karşı tarafın verdiği bilgi veya tahkikat sonucu alacağın miktarı veya değerinin tam ve kesin olarak belirlenebilmesinin mümkün olduğu anda hâkim, tahkikat sona ermeden verilecek iki haftalık kesin süre içinde davacıya iddianın genişletilmesi yasağına tabi olmaksızın talebini tam ve kesin olarak belirlemesi için süre verir.',
    trueHighlight: ['hukuki ilişkiyi ve asgari bir miktar ya da değeri belirtmek suretiyle belirsiz alacak davası açabilir', 'tahkikat sona ermeden verilecek iki haftalık kesin süre içinde davacıya iddianın genişletilmesi yasağına tabi olmaksızın talebini tam ve kesin olarak belirlemesi için süre verir'],
    trueCorrectPhrase: 'HMK m. 107 (7251 s.K. değişikliği) uyarınca belirsiz alacak davasında: 1) Davanın açılmasıyla alacağın TAMAMI için zamanaşımı kesilir, 2) Hâkim tahkikat bitmeden 2 haftalık kesin süre verir, 3) Davacı ıslaha gerek kalmaksızın talebini artırabilir (2 haftalık kesin sürede artırmazsa dava asgari miktar üzerinden görülür)',
    baseExplanation: '7251 sayılı Kanunla HMK m. 107/2’ye eklenen 2 haftalık kesin süre kuralı çok kritiktir: Belirsiz alacak davasında hâkim tahkikat sona ermeden önce davacıya talebini belirlemesi için 2 haftalık kesin süre verir; bu sürede belirlenmezse dava başlangıçta gösterilen asgari miktar üzerinden karara bağlanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tahkikat sona ermeden verilecek iki haftalık kesin süre içinde davacıya iddianın genişletilmesi yasağına tabi olmaksızın talebini tam ve kesin olarak belirlemesi için süre verir',
      wrongPhrase: 'davacı ancak karşı tarafın açık muvafakatiyle veya ıslah hakkını kullanarak talebini artırabilir ve belirsiz alacak davasında zamanaşımı yalnızca dava dilekçesinde gösterilen asgari kısım için kesilir',
      correctPhrase: 'tahkikat sona ermeden verilecek iki haftalık kesin süre içinde davacıya iddianın genişletilmesi yasağına tabi olmaksızın talebini tam ve kesin olarak belirlemesi için süre verir',
      explanation: 'Belirsiz alacak davasında (kısmi davadan farklı olarak!) dava açıldığı anda alacağın tamamı için zamanaşımı kesilir ve davacı 2 haftalık kesin süre içinde ıslaha veya karşı taraf muvafakatine gerek olmaksızın talebini artırabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'hukuki ilişkiyi ve asgari bir miktar ya da değeri belirtmek suretiyle belirsiz alacak davası açabilir',
      wrongPhrase: 'talep konusu miktar taraflar arasında tartışmasız ve açıkça belirli olsa dahi alacaklının kısmi dava açması HMK m. 109 uyarınca kesinlikle yasaktır',
      correctPhrase: 'hukuki ilişkiyi ve asgari bir miktar ya da değeri belirtmek suretiyle belirsiz alacak davası açabilir',
      explanation: '6644 sayılı Kanunla HMK m. 109/2 yürürlükten kaldırıldığından, alacak miktarı tartışmasız veya belirli olsa dahi alacaklı dilerse kısmi dava açabilir!'
    }
  },
  {
    id: 'rule-hmk-27',
    branch: 'HMK',
    subTopic: 'İlk İtirazlar (HMK m. 116) ve Dava Şartları (HMK m. 114) Ayrımı',
    articleRef: 'HMK M. 114-117',
    trueStatement:
      'Hukuk Muhakemeleri Kanununa göre ilk itirazlar yalnızca kesin olmayan yetki itirazı ve uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından (tahkim itirazından) ibarettir; ilk itirazların hepsi cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez ve ilk itirazlar dava şartlarından sonra incelenir.',
    trueHighlight: ['yalnızca kesin olmayan yetki itirazı ve uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından (tahkim itirazından) ibarettir', 'hepsi cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez ve ilk itirazlar dava şartlarından sonra incelenir'],
    trueCorrectPhrase: '6100 sayılı HMK m. 116 uyarınca (eski 7351 s.K. ile işbölümü itirazı da kaldırıldığından!) sadece 2 tane İLK İTİRAZ vardır: 1) Kesin olmayan yetki itirazı, 2) Tahkim itirazı! Zamanaşımı ise ilk itiraz değil maddi hukuk def’idir; görev, kesin yetki, derdestlik, kesin hüküm ve hukuki yarar ise DAVA ŞARTIDIR!',
    baseExplanation: 'ÖSYM’nin HMK’da en sevdiği tuzak: "Aşağıdakilerden hangisi ilk itirazdır?" Cevap: Yalnızca 1) Kesin olmayan yetki itirazı, 2) Tahkim itirazı! Derdestlik, kesin hüküm, görev ve kesin yetki eski HUMK’ta ilk itiraz iken 6100 sayılı HMK’da DAVA ŞARTI (m. 114) yapılmıştır; zamanaşımı ise ilk itiraz değil maddi hukuk def’idir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yalnızca kesin olmayan yetki itirazı ve uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından (tahkim itirazından) ibarettir',
      wrongPhrase: 'kesin olmayan yetki itirazının yanı sıra zamanaşımı def’i, derdestlik itirazı ve kesin hüküm itirazından oluşur',
      correctPhrase: 'yalnızca kesin olmayan yetki itirazı ve uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından (tahkim itirazından) ibarettir',
      explanation: '6100 sayılı HMK m. 114 ve m. 116 uyarınca derdestlik ve kesin hüküm ilk itiraz değil DAVA ŞARTIDIR; zamanaşımı ise usul hukuku ilk itirazı değil, maddi hukuka ilişkin bir def’idir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hepsi cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez ve ilk itirazlar dava şartlarından sonra incelenir',
      wrongPhrase: 'tahkikat aşaması bitinceye kadar ıslah yoluyla da ileri sürülebilir ve mahkemece dava şartlarından önce incelenir',
      correctPhrase: 'hepsi cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez ve ilk itirazlar dava şartlarından sonra incelenir',
      explanation: 'HMK m. 117 uyarınca ilk itirazların tamamı cevap dilekçesinde ileri sürülmek zorundadır (cevap dilekçesi verilmemişse sonradan ıslahla dahi ileri sürülemez) ve mahkeme önce dava şartlarını, sonra ilk itirazları inceler!'
    }
  },
  {
    id: 'rule-hmk-28',
    branch: 'HMK',
    subTopic: 'Davadan Feragat, Davayı Kabul ve Sulh (Kesinleşinceye Kadar Yapılabilmesi)',
    articleRef: 'HMK M. 307-315',
    trueStatement:
      'Davadan feragat (davacının talep sonucundan kısmen veya tamamen vazgeçmesi) ve davayı kabul (davalının davacının talep sonucuna kısmen veya tamamen muvafakat etmesi) kayıtsız ve şartsız olmalıdır; feragat ve kabul, hüküm kesinleşinceye kadar (istinaf ve temyiz aşamaları dahil) her zaman yapılabilir ve kesin hüküm gibi hukuki sonuç doğurur; ancak tarafların üzerinde serbestçe tasarruf edemeyecekleri (boşanma, soybağı, nüfus kaydı gibi) davalarda davayı kabul sonuç doğurmaz.',
    trueHighlight: ['kayıtsız ve şartsız olmalıdır', 'hüküm kesinleşinceye kadar (istinaf ve temyiz aşamaları dahil) her zaman yapılabilir ve kesin hüküm gibi hukuki sonuç doğurur', 'tarafların üzerinde serbestçe tasarruf edemeyecekleri (boşanma, soybağı, nüfus kaydı gibi) davalarda davayı kabul sonuç doğurmaz'],
    trueCorrectPhrase: 'HMK m. 308-311 (7251 s.K. değişikliği) uyarınca feragat ve kabul HÜKÜM KESİNLEŞİNCEYE KADAR (kanun yolu aşamasında dahi!) her zaman yapılabilir, karşı tarafın ve mahkemenin muvafakatine bağlı değildir ve kesin hüküm gibi sonuç doğurur; ancak kamu düzenine ilişkin davalarda KABUL sonuç doğurmaz (feragat ise her davada sonuç doğurur!)',
    baseExplanation: 'HMK m. 308/2’deki altın ayrım: Boşanma, babalık, soybağının reddi gibi tarafların üzerinde serbestçe tasarruf edemeyeceği davalarda DAVAYI KABUL sonuç doğurmaz; ancak DAVADAN FERAGAT her türlü davada sonuç doğurur!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'feragat ve kabul, hüküm kesinleşinceye kadar (istinaf ve temyiz aşamaları dahil) her zaman yapılabilir ve kesin hüküm gibi hukuki sonuç doğurur; ancak tarafların üzerinde serbestçe tasarruf edemeyecekleri (boşanma, soybağı, nüfus kaydı gibi) davalarda davayı kabul sonuç doğurmaz',
      wrongPhrase: 'feragat ve kabul yalnızca ilk derece mahkemesinde tahkikat sona erinceye kadar karşı tarafın açık rızasıyla yapılabilir; ayrıca boşanma ve soybağı davalarında davalının davayı kabul etmesi hâkimi bağlar ve derhâl kabul kararı verilir',
      correctPhrase: 'feragat ve kabul, hüküm kesinleşinceye kadar (istinaf ve temyiz aşamaları dahil) her zaman yapılabilir ve kesin hüküm gibi hukuki sonuç doğurur; ancak tarafların üzerinde serbestçe tasarruf edemeyecekleri (boşanma, soybağı, nüfus kaydı gibi) davalarda davayı kabul sonuç doğurmaz',
      explanation: 'HMK m. 308-310 uyarınca feragat ve kabul karşı tarafın rızasına bağlı değildir, hüküm kesinleşinceye kadar her aşamada yapılabilir ve tarafların üzerinde serbestçe tasarruf edemeyecekleri davalarda davayı kabul sonuç doğurmaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kayıtsız ve şartsız olmalıdır',
      wrongPhrase: 'şarta bağlı olarak yapılabilir ve feragat edilen dava aynı konuda her zaman yeniden açılabilir',
      correctPhrase: 'kayıtsız ve şartsız olmalıdır',
      explanation: 'HMK m. 309/4 ve m. 311 uyarınca feragat ve kabul kayıtsız ve şartsız olmak zorundadır (şarta bağlı feragat/kabul geçersizdir) ve kesin hüküm gibi sonuç doğurduğundan aynı dava yeniden açılamaz!'
    }
  },
  {
    id: 'rule-hmk-29',
    branch: 'HMK',
    subTopic: 'Yargılamanın İadesi Süreleri (3 Ay ve 10 Yıl) ve İncelenecek Mahkeme',
    articleRef: 'HMK M. 374-378',
    trueStatement:
      'Yargılamanın iadesi, kesin olarak verilen veya kesinleşmiş olan hükümlere karşı istenebilen olağanüstü bir kanun yoludur; yargılamanın iadesi süresi, iade sebebinin öğrenildiği (veya ceza mahkûmiyetinin/AİHM kararının kesinleştiği) tarihten itibaren üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır; yargılamanın iadesi talebi, hükmü veren mahkemece incelenir.',
    trueHighlight: ['kesin olarak verilen veya kesinleşmiş olan hükümlere karşı istenebilen olağanüstü bir kanun yoludur', 'üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır', 'hükmü veren mahkemece incelenir'],
    trueCorrectPhrase: 'HMK m. 377 uyarınca yargılamanın iadesi süresi öğrenmeden itibaren 3 ay ve her hâlde hükmün kesinleşmesinden itibaren 10 yıldır (ancak vekil/temsilci olmayan kişi huzuruyla yargılanma ve 3. kişilerin hile iddiasında süre tebliğden başlar); görevli mahkeme üst mahkeme değil, BİZATİHİ HÜKMÜ VEREN MAHKEMEDİR!',
    baseExplanation: 'HMK m. 377-378 uyarınca yargılamanın iadesi olağanüstü bir kanun yoludur; sadece maddi anlamda kesin hükümlere karşı gidilebilir; süresi 3 ay ve her hâlde 10 yıldır; incelemeyi üst mahkeme değil hükmü veren mahkeme yapar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır; yargılamanın iadesi talebi, hükmü veren mahkemece incelenir',
      wrongPhrase: 'bir yıl ve her hâlde hükmün kesinleşmesinden itibaren yirmi yıldır; yargılamanın iadesi talebi her durumda Yargıtay Hukuk Genel Kurulunca incelenir',
      correctPhrase: 'üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır; yargılamanın iadesi talebi, hükmü veren mahkemece incelenir',
      explanation: 'HMK m. 377 ve m. 378 uyarınca yargılamanın iadesi süresi 3 ay ve her hâlde 10 yıldır; talebi Yargıtay değil, hükmü veren mahkeme inceler!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Yargılamanın iadesi, kesin olarak verilen veya kesinleşmiş olan hükümlere karşı istenebilen olağanüstü bir kanun yoludur',
      wrongPhrase: 'Yargılamanın iadesi yoluna başvurulması hükmün icrasını kendiliğinden durdurur',
      correctPhrase: 'Yargılamanın iadesi, kesin olarak verilen veya kesinleşmiş olan hükümlere karşı istenebilen olağanüstü bir kanun yoludur',
      explanation: 'HMK m. 381 uyarınca yargılamanın iadesi davası hükmün icrasını kendiliğinden durdurmaz; ancak talep üzerine teminat karşılığında icranın durdurulmasına karar verilebilir!'
    }
  },
  {
    id: 'rule-hmk-30',
    branch: 'HMK',
    subTopic: 'İç Tahkimde Hakem Kararlarına Karşı İptal Davası Süresi (1 Ay) ve Görevli Mahkeme (BAM)',
    articleRef: 'HMK M. 427 & 439',
    trueStatement:
      'Tahkim süresi içerisinde (taraflarca aksi kararlaştırılmamışsa ilk toplantı tutanağının düzenlendiği veya tek hakemin seçildiği tarihten itibaren bir yıl içinde) karar verilir; hakem kararına karşı yalnızca iptal davası açılabilir; iptal davası, bir ay içinde tahkim yeri bölge adliye mahkemesinde (BAM) açılır ve öncelikle ve ivedilikle görülür.',
    trueHighlight: ['taraflarca aksi kararlaştırılmamışsa ilk toplantı tutanağının düzenlendiği veya tek hakemin seçildiği tarihten itibaren bir yıl içinde', 'hakem kararına karşı yalnızca iptal davası açılabilir; iptal davası, bir ay içinde tahkim yeri bölge adliye mahkemesinde (BAM) açılır'],
    trueCorrectPhrase: 'HMK m. 427 ve m. 439 uyarınca iç tahkim süresi kural olarak 1 yıldır; hakem kararına karşı istinaf yoluna değil, YALNIZCA İPTAL DAVASI yoluna gidilebilir; iptal davası süresi 1 aydır ve ilk derece mahkemesinde değil, tahkim yeri BÖLGE ADLİYE MAHKEMESİNDE (BAM) açılır (iptal davası kararına karşı temyiz yolu açıktır)!',
    baseExplanation: 'HMK m. 439 (6545 s.K. değişikliği) çok sık sorulan bir sınav tuzağıdır: Hakem kararlarına karşı iptal davası Asliye Hukuk/Ticaret Mahkemesinde değil, doğrudan tahkim yeri BÖLGE ADLİYE MAHKEMESİNDE (BAM) 1 ay içinde açılır!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'iptal davası, bir ay içinde tahkim yeri bölge adliye mahkemesinde (BAM) açılır',
      wrongPhrase: 'iptal davası, iki hafta içinde tahkim yeri asliye hukuk mahkemesinde açılır',
      correctPhrase: 'iptal davası, bir ay içinde tahkim yeri bölge adliye mahkemesinde (BAM) açılır',
      explanation: 'HMK m. 439/1 ve m. 439/4 uyarınca hakem kararlarına karşı iptal davası açma süresi 2 hafta değil 1 aydır ve görevli mahkeme Asliye Hukuk Mahkemesi değil, tahkim yeri Bölge Adliye Mahkemesidir (BAM)!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'taraflarca aksi kararlaştırılmamışsa ilk toplantı tutanağının düzenlendiği veya tek hakemin seçildiği tarihten itibaren bir yıl içinde',
      wrongPhrase: 'taraflarca aksi kararlaştırılsa dahi en geç üç ay içinde',
      correctPhrase: 'taraflarca aksi kararlaştırılmamışsa ilk toplantı tutanağının düzenlendiği veya tek hakemin seçildiği tarihten itibaren bir yıl içinde',
      explanation: 'HMK m. 427/1 uyarınca tahkim süresi 3 ay değil, aksi kararlaştırılmamışsa 1 yıldır ve tarafların anlaşmasıyla (veya mahkemece) uzatılabilir!'
    }
  },

  // =========================================================================
  // 3. CEZA MUHAKEMESİ KANUNU (CMK) DERİNLİK KURALLARI (rule-cmk-20 .. rule-cmk-29)
  // =========================================================================
  {
    id: 'rule-cmk-20',
    branch: 'CMK',
    subTopic: 'Adli Kontrol Tedbiri Azami Süreleri (CMK m. 110/A - 2 Yıl ve 3 Yıl)',
    articleRef: 'CMK M. 109-110/A',
    trueStatement:
      'Ağır ceza mahkemesinin görevine girmeyen işlerde adli kontrol süresi en çok iki yıldır; ancak bu süre zorunlu hâllerde gerekçesi gösterilerek bir yıl daha uzatılabilir; ağır ceza mahkemesinin görevine giren işlerde ise adli kontrol süresi en çok üç yıldır; bu süre, zorunlu hâllerde gerekçesi gösterilerek uzatılabilir; uzatma süresi toplam üç yılı, Türk Ceza Kanununun İkinci Kitap Dördüncü Kısmının Dört, Beş, Altı ve Yedinci Bölümlerinde tanımlanan suçlar ile Terörle Mücadele Kanunu kapsamına giren suçlarda dört yılı geçemez; çocuklar bakımından bu süreler yarı oranında uygulanır.',
    trueHighlight: ['Ağır ceza mahkemesinin görevine girmeyen işlerde adli kontrol süresi en çok iki yıldır; ancak bu süre zorunlu hâllerde gerekçesi gösterilerek bir yıl daha uzatılabilir', 'ağır ceza mahkemesinin görevine giren işlerde ise adli kontrol süresi en çok üç yıldır', 'çocuklar bakımından bu süreler yarı oranında uygulanır'],
    trueCorrectPhrase: '7331 s.K. ile CMK m. 110/A’ya eklenen adli kontrol azami süreleri: 1) Asliye Ceza işlerinde en çok 2 yıl (+1 yıl uzatma = 3 yıl), 2) Ağır Ceza işlerinde en çok 3 yıl (+3 yıl uzatma, terör/devlet güvenliğinde +4 yıl uzatma), 3) Çocuklarda bu süreler YARI ORANINDA uygulanır; konutu terk etmemek (ev hapsi) tedbirinde geçen her 2 gün cezadan 1 gün olarak mahsup edilir (CMK m. 109/4)!',
    baseExplanation: 'CMK m. 109/4 ve m. 110/A (4. Yargı Paketi / 7331 s.K. yeniliği): Adli kontrol tedbirlerinden SADECE "konutu terk etmemek" (ev hapsi) yükümlülüğü altında geçen her 2 gün, cezanın hesaplanmasında 1 gün olarak mahsup edilir; diğer adli kontrol tedbirleri (imza atma, yurt dışı çıkış yasağı) cezadan mahsup edilmez!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Ağır ceza mahkemesinin görevine girmeyen işlerde adli kontrol süresi en çok iki yıldır; ancak bu süre zorunlu hâllerde gerekçesi gösterilerek bir yıl daha uzatılabilir; ağır ceza mahkemesinin görevine giren işlerde ise adli kontrol süresi en çok üç yıldır',
      wrongPhrase: 'Adli kontrol tedbirlerinde kanunda hiçbir azami süre sınırı öngörülmemiş olup tüm adli kontrol yükümlülüklerinde geçen her bir gün mahkûmiyet cezasından birebir bir gün olarak mahsup edilir',
      correctPhrase: 'Ağır ceza mahkemesinin görevine girmeyen işlerde adli kontrol süresi en çok iki yıldır; ancak bu süre zorunlu hâllerde gerekçesi gösterilerek bir yıl daha uzatılabilir; ağır ceza mahkemesinin görevine giren işlerde ise adli kontrol süresi en çok üç yıldır',
      explanation: 'CMK m. 110/A ile adli kontrole azami süre sınırları (2+1 yıl ve 3+3/4 yıl) getirilmiştir ve CMK m. 109/4 uyarınca sadece "konutu terk etmemek" tedbirinde geçen her 2 gün cezadan 1 gün olarak mahsup edilir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'çocuklar bakımından bu süreler yarı oranında uygulanır',
      wrongPhrase: 'soruşturma evresinde adli kontrol kararını Cumhuriyet savcısı hâkim onayına gerek olmaksızın doğrudan doğruya kendisi verir',
      correctPhrase: 'çocuklar bakımından bu süreler yarı oranında uygulanır',
      explanation: 'CMK m. 110/1 uyarınca soruşturma evresinde şüphelinin adli kontrol altına alınmasına Cumhuriyet savcısı değil, Cumhuriyet savcısının istemi üzerine SULH CEZA HÂKİMİ karar verir (savcı yalnız adli kontrolü kaldırabilir, m. 110/2)!'
    }
  },
  {
    id: 'rule-cmk-21',
    branch: 'CMK',
    subTopic: 'Telekomünikasyon Yoluyla İletişimin Denetlenmesi (CMK m. 135) Karar ve Süre Şartları',
    articleRef: 'CMK M. 135',
    trueStatement:
      'Bir suç dolayısıyla yapılan soruşturma ve kovuşturmada, suç işlendiğine ilişkin somut delillere dayanan kuvvetli şüphe sebeplerinin varlığı ve başka suretle delil elde edilmesi imkânının bulunmaması durumunda, yalnızca katalog suçlar bakımından hâkim veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısının kararıyla şüpheli veya sanığın telekomünikasyon yoluyla iletişimi dinlenebilir, kayda alınabilir ve sinyal bilgileri değerlendirilebilir; Cumhuriyet savcısı kararını derhâl hâkimin onayına sunar ve hâkim kararını en geç yirmi dört saat içinde verir; tedbir kararı en çok iki ay için verilebilir, bu süre bir ay daha (örgütlü suçlarda toplam üç ayı geçmemek üzere birer ay) uzatılabilir.',
    trueHighlight: ['somut delillere dayanan kuvvetli şüphe sebeplerinin varlığı ve başka suretle delil elde edilmesi imkânının bulunmaması durumunda, yalnızca katalog suçlar bakımından', 'hâkim kararını en geç yirmi dört saat içinde verir', 'tedbir kararı en çok iki ay için verilebilir, bu süre bir ay daha (örgütlü suçlarda toplam üç ayı geçmemek üzere birer ay) uzatılabilir'],
    trueCorrectPhrase: 'CMK m. 135 iletişimin dinlenmesi/kayda alınması: 1) Somut delillere dayanan kuvvetli şüphe + ikincillik + katalog suç şarttır, 2) Hâkim veya gecikmesinde sakınca varsa savcı karar verir (24 saat içinde hâkim onayı), 3) Süre en çok 2 ay + 1 ay uzatma (örgüt faaliyetinde +3 aya kadar birer ay uzatma = toplam 2+1+3 = 6 ay!), 4) Tanıklıktan çekinebilecek kişilerle ve müdafi ile olan iletişim kayda alınamaz!',
    baseExplanation: 'CMK m. 135 (iletişimin denetlenmesi), m. 139 (gizli soruşturmacı) ve m. 140 (teknik araçla izleme) arasındaki kritik fark: İletişimin denetlenmesinde (m. 135) ve teknik izlemede (m. 140) gecikmesinde sakınca bulunan hallerde C. savcısı karar verebilir (24 saatte hâkim onayı); GİZLİ SORUŞTURMACI görevlendirilmesinde (m. 139) ise gecikmesinde sakınca bulunsa dahi savcı karar veremez, yalnız HÂKİM karar verir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hâkim kararını en geç yirmi dört saat içinde verir; tedbir kararı en çok iki ay için verilebilir, bu süre bir ay daha (örgütlü suçlarda toplam üç ayı geçmemek üzere birer ay) uzatılabilir',
      wrongPhrase: 'hâkim kararını en geç kırk sekiz saat içinde verir; tedbir kararı ilk seferde altı ay için verilebilir ve süresiz olarak uzatılabilir',
      correctPhrase: 'hâkim kararını en geç yirmi dört saat içinde verir; tedbir kararı en çok iki ay için verilebilir, bu süre bir ay daha (örgütlü suçlarda toplam üç ayı geçmemek üzere birer ay) uzatılabilir',
      explanation: 'CMK m. 135/1 ve m. 135/4 uyarınca savcının kararını hâkimin onaylama süresi 48 saat değil en geç 24 saattir; dinleme kararı en çok 2 ay için verilebilir ve 1 ay (örgütlü suçlarda +3 aya kadar birer ay) uzatılabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'şüpheli veya sanığın telekomünikasyon yoluyla iletişimi dinlenebilir',
      wrongPhrase: 'şüpheli veya sanığın müdafii (avukatı) ile ve tanıklıktan çekinebilecek yakınlarıyla yaptığı telefon görüşmeleri de delil olarak kayda alınabilir; ayrıca şüphelinin iletişimi dinlenebilir',
      correctPhrase: 'şüpheli veya sanığın telekomünikasyon yoluyla iletişimi dinlenebilir',
      explanation: 'CMK m. 135/3 açık hükmü uyarınca şüpheli veya sanığın tanıklıktan çekinebilecek kişilerle arasındaki iletişimi ve müdafii (avukatı) ile olan iletişimi kayda alınamaz; tespit edilirse kayıtlar derhâl yok edilir!'
    }
  },
  {
    id: 'rule-cmk-22',
    branch: 'CMK',
    subTopic: 'Gizli Soruşturmacı Görevlendirilmesi (CMK m. 139) ve Teknik Araçlarla İzleme (CMK m. 140)',
    articleRef: 'CMK M. 139-140',
    trueStatement:
      'Gizli soruşturmacı görevlendirilmesine (CMK m. 139), somut delillere dayanan kuvvetli şüphe sebeplerinin varlığı ve başka suretle delil elde edilememesi hâlinde yalnızca katalog suçlarda HÂKİM tarafından karar verilebilir (Cumhuriyet savcısı gecikmesinde sakınca bulunan hâllerde dahi gizli soruşturmacı görevlendiremez ve soruşturmacı yalnız kamu görevlileri arasından seçilir); teknik araçlarla izleme (CMK m. 140) tedbiri ise kişinin konutunda uygulanamaz ve en çok üç haftalık süre için (örgütlü suçlarda birer haftadan dört haftayı geçmemek üzere uzatılarak) verilebilir.',
    trueHighlight: ['yalnızca katalog suçlarda HÂKİM tarafından karar verilebilir (Cumhuriyet savcısı gecikmesinde sakınca bulunan hâllerde dahi gizli soruşturmacı görevlendiremez', 'teknik araçlarla izleme (CMK m. 140) tedbiri ise kişinin konutunda uygulanamaz ve en çok üç haftalık süre için'],
    trueCorrectPhrase: 'CMK m. 139 gizli soruşturmacıda: 1) YALNIZ HÂKİM karar verir (savcı karar veremez!), 2) Yalnız kamu görevlileri arasından görevlendirilir ve suç işleyemez; CMK m. 140 teknik araçlarla izlemede: 1) Kişinin KONUTUNDA kesinlikle uygulanamaz, 2) Süresi en çok 3 hafta + 1 hafta uzatmadır (örgütlü suçlarda toplam +4 haftaya kadar birer hafta uzatma = toplam 8 hafta)!',
    baseExplanation: 'CMK koruma tedbirleri içinde ÖSYM’nin en çok sorduğu üç özel kural: 1) Gizli soruşturmacıya savcı karar veremez (yalnız hâkim karar verir), 2) Teknik araçlarla izleme konutta uygulanamaz, 3) Teknik araçlarla izleme süresi ay değil HAFTA (3 hafta + 1 hafta; örgütte +4 hafta) olarak düzenlenmiştir!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnızca katalog suçlarda HÂKİM tarafından karar verilebilir (Cumhuriyet savcısı gecikmesinde sakınca bulunan hâllerde dahi gizli soruşturmacı görevlendiremez ve soruşturmacı yalnız kamu görevlileri arasından seçilir)',
      wrongPhrase: 'gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı veya kolluk amiri tarafından da karar verilebilir ve kamu görevlisi olmayan sivil muhbirler gizli soruşturmacı olarak atanabilir',
      correctPhrase: 'yalnızca katalog suçlarda HÂKİM tarafından karar verilebilir (Cumhuriyet savcısı gecikmesinde sakınca bulunan hâllerde dahi gizli soruşturmacı görevlendiremez ve soruşturmacı yalnız kamu görevlileri arasından seçilir)',
      explanation: 'CMK m. 139/1 (7188 s.K. değişikliği sonrası) uyarınca gizli soruşturmacı görevlendirilmesine SADECE HÂKİM karar verebilir (savcı karar veremez) ve gizli soruşturmacı yalnızca kamu görevlileri arasından görevlendirilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'teknik araçlarla izleme (CMK m. 140) tedbiri ise kişinin konutunda uygulanamaz ve en çok üç haftalık süre için (örgütlü suçlarda birer haftadan dört haftayı geçmemek üzere uzatılarak) verilebilir',
      wrongPhrase: 'teknik araçlarla izleme tedbiri şüphelinin konutunun içinde de uygulanabilir ve ilk seferde üç aylık süre için verilebilir',
      correctPhrase: 'teknik araçlarla izleme (CMK m. 140) tedbiri ise kişinin konutunda uygulanamaz ve en çok üç haftalık süre için (örgütlü suçlarda birer haftadan dört haftayı geçmemek üzere uzatılarak) verilebilir',
      explanation: 'CMK m. 140/1 ve m. 140/3 uyarınca teknik araçlarla izleme yalnız kamuya açık yerlerde ve işyerinde yapılabilir, kişinin KONUTUNDA uygulanamaz ve süresi 3 ay değil en çok 3 haftadır (+1 hafta, örgütte +4 hafta)!'
    }
  },
  {
    id: 'rule-cmk-23',
    branch: 'CMK',
    subTopic: 'Taşınmazlara, Hak ve Alacaklara El Koyma ile Şirket Yönetimi İçin Kayyım Tayini (CMK m. 128 & 133)',
    articleRef: 'CMK M. 128 & 133',
    trueStatement:
      'Soruşturma veya kovuşturma konusu suçun işlendiğine ve bu suçlardan elde edildiğine dair somut delillere dayanan kuvvetli şüphe sebebi bulunan hâllerde, şüpheli veya sanığa ait taşınmazlara, kara, deniz veya hava ulaşım araçlarına, banka veya diğer mali kurumlardaki her türlü hesaba ve kıymetli evraka el konulabilir; bu taşınmaz, hak ve alacaklara el konulabilmesi için gecikmesinde sakınca bulunan hâllerde dahi Cumhuriyet savcısı karar veremez, mutlaka HÂKİM kararı alınması şarttır; şirket yönetimi için kayyım tayinine (CMK m. 133) de yalnızca hâkim veya mahkeme karar verebilir.',
    trueHighlight: ['gecikmesinde sakınca bulunan hâllerde dahi Cumhuriyet savcısı karar veremez, mutlaka HÂKİM kararı alınması şarttır', 'şirket yönetimi için kayyım tayinine (CMK m. 133) de yalnızca hâkim veya mahkeme karar verebilir'],
    trueCorrectPhrase: 'CMK’da savcının gecikmesinde sakınca bulunsa dahi ASLA karar veremediği (yalnız hâkim/mahkeme kararı gerektiren) başlıca tedbirler: 1) Tutuklama (m. 100), 2) Adli kontrol (m. 110), 3) Gözlem altına alma (m. 74), 4) Taşınmaz/hak/alacaklara el koyma (m. 128), 5) Avukat bürosunda arama/el koyma (m. 130), 6) Şirket yönetimi için kayyım tayini (m. 133), 7) Gizli soruşturmacı (m. 139)!',
    baseExplanation: 'CMK m. 127’deki adi eşyaya el koymada gecikmesinde sakınca varsa savcı karar verebilirken; CMK m. 128’deki taşınmazlara, banka hesaplarına, araçlara ve hak/alacaklara el koymada savcının yetkisi YOKTUR, mutlaka hâkim kararı gerekir!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'bu taşınmaz, hak ve alacaklara el konulabilmesi için gecikmesinde sakınca bulunan hâllerde dahi Cumhuriyet savcısı karar veremez, mutlaka HÂKİM kararı alınması şarttır; şirket yönetimi için kayyım tayinine (CMK m. 133) de yalnızca hâkim veya mahkeme karar verebilir',
      wrongPhrase: 'gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı da şüphelinin taşınmazlarına ve banka hesaplarına el koyma kararı ile şirkete kayyım tayini kararı verebilir',
      correctPhrase: 'bu taşınmaz, hak ve alacaklara el konulabilmesi için gecikmesinde sakınca bulunan hâllerde dahi Cumhuriyet savcısı karar veremez, mutlaka HÂKİM kararı alınması şarttır; şirket yönetimi için kayyım tayinine (CMK m. 133) de yalnızca hâkim veya mahkeme karar verebilir',
      explanation: 'CMK m. 128/2 ve m. 133/1 uyarınca taşınmazlara, hak ve alacaklara (banka hesaplarına) el koyma ile şirket yönetimi için kayyım tayinine gecikmesinde sakınca bulunan hâllerde dahi savcı karar veremez; yalnız hâkim veya mahkeme karar verebilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Soruşturma veya kovuşturma konusu suçun işlendiğine ve bu suçlardan elde edildiğine dair somut delillere dayanan kuvvetli şüphe sebebi bulunan hâllerde',
      wrongPhrase: 'Her türlü kabahat ve taksirli suçlarda basit şüphe bulunması hâlinde de CMK m. 128 kapsamında taşınmazlara el konulabilir',
      correctPhrase: 'Soruşturma veya kovuşturma konusu suçun işlendiğine ve bu suçlardan elde edildiğine dair somut delillere dayanan kuvvetli şüphe sebebi bulunan hâllerde',
      explanation: 'CMK m. 128 kapsamında taşınmaz, hak ve alacaklara el koyma yalnız maddede sayılan katalog suçlarda ve somut delillere dayanan kuvvetli şüphe varlığında (ilgili kurum mütalaası alınarak) uygulanabilir!'
    }
  },
  {
    id: 'rule-cmk-24',
    branch: 'CMK',
    subTopic: 'Koruma Tedbirleri Nedeniyle Tazminat İsteminin Süresi (3 Ay ve 1 Yıl) ve Görevli Merci',
    articleRef: 'CMK M. 141-142',
    trueStatement:
      'Suç soruşturması veya kovuşturması sırasında kanuna aykırı olarak yakalanan, tutuklanan veya gözaltı/tutukluluk sonrası hakkında kovuşturmaya yer olmadığına ya da beraatına karar verilen kişiler maddi ve manevi her türlü zararlarını Devletten isteyebilirler; tazminat istemi, karar veya hükümlerin kesinleştiğinin ilgilisine tebliğinden itibaren üç ay ve her hâlde karar veya hükümlerin kesinleşme tarihini izleyen bir yıl içinde yapılabilir; istem, zarara uğrayanın oturduğu yer ağır ceza mahkemesinde (7499 s.K. kapsamındaki bazı hallerde Tazminat Komisyonunda) karara bağlanır.',
    trueHighlight: ['kesinleştiğinin ilgilisine tebliğinden itibaren üç ay ve her hâlde karar veya hükümlerin kesinleşme tarihini izleyen bir yıl içinde yapılabilir', 'zarara uğrayanın oturduğu yer ağır ceza mahkemesinde'],
    trueCorrectPhrase: 'CMK m. 142/1 uyarınca koruma tedbirleri nedeniyle tazminat isteme süresi kesinleşmiş kararın tebliğinden itibaren 3 ay ve her hâlde kesinleşmeden itibaren 1 yıldır; davalı Hazine olup görevli mahkeme zarara uğrayanın oturduğu yer AĞIR CEZA MAHKEMESİDİR (7499 s.K. ile konutu terk etmemek ve tutuklama sonrası KYOK/beraat gibi basit tazminat taleplerinde Adalet Bakanlığı bünyesindeki Tazminat Komisyonuna başvuru yolu da getirilmiştir)!',
    baseExplanation: 'CMK m. 141-142’de çok sık sorulan üç nokta: 1) Süre tebliğden itibaren 3 ay ve her hâlde kesinleşmeden itibaren 1 yıldır, 2) Dava işlemi yapan hâkim veya savcıya karşı değil DEVLETE (Hazineye) karşı açılır, 3) Görevli ve yetkili mahkeme zarara uğrayanın oturduğu yer Ağır Ceza Mahkemesidir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kesinleştiğinin ilgilisine tebliğinden itibaren üç ay ve her hâlde karar veya hükümlerin kesinleşme tarihini izleyen bir yıl içinde yapılabilir; istem, zarara uğrayanın oturduğu yer ağır ceza mahkemesinde',
      wrongPhrase: 'kesinleştiğinin tebliğinden itibaren altmış gün ve her hâlde beş yıl içinde yapılabilir; istem, tutuklama kararını veren sulh ceza hâkimliğinde veya idare mahkemesinde',
      correctPhrase: 'kesinleştiğinin ilgilisine tebliğinden itibaren üç ay ve her hâlde karar veya hükümlerin kesinleşme tarihini izleyen bir yıl içinde yapılabilir; istem, zarara uğrayanın oturduğu yer ağır ceza mahkemesinde',
      explanation: 'CMK m. 142/1-2 uyarınca koruma tedbirleri nedeniyle tazminat istemi süresi tebliğden itibaren 3 ay ve her hâlde kesinleşmeden itibaren 1 yıldır; görevli mahkeme ise İdare Mahkemesi veya Sulh Ceza Hâkimliği değil, zarara uğrayanın oturduğu yer Ağır Ceza Mahkemesidir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'maddi ve manevi her türlü zararlarını Devletten isteyebilirler',
      wrongPhrase: 'tazminat davasını doğrudan doğruya tutuklama kararını veren hâkimin veya gözaltı emrini veren Cumhuriyet savcısının şahsına karşı açabilirler',
      correctPhrase: 'maddi ve manevi her türlü zararlarını Devletten isteyebilirler',
      explanation: 'CMK m. 141 ve HMK m. 46 uyarınca koruma tedbirleri nedeniyle tazminat davası hâkim veya savcının şahsına karşı değil, yalnızca DEVLETE (Hazineye) karşı açılır (Devlet ödediği tazminattan dolayı görevini kötüye kullananlara 1 yıl içinde rücu eder, CMK m. 143/2)!'
    }
  },
  {
    id: 'rule-cmk-25',
    branch: 'CMK',
    subTopic: 'Tanıklıktan Çekinme Hakkı (CMK m. 45-46) ve Yemin Verilmeyen Tanıklar (CMK m. 50)',
    articleRef: 'CMK M. 45-50',
    trueStatement:
      'Şüpheli veya sanığın nişanlısı, evlilik bağı kalmasa bile eşi, kan hısımlığından veya kayın hısımlığından üstsoy veya altsoyu, üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları ve aralarında evlâtlık bağı bulunanlar tanıklıktan çekinebilirler; soruşturma veya kovuşturma konusu olayla ilgili olarak tanık (dinlenmesi) sırasında onbeş yaşını doldurmamış olanlar ile ayırt etme gücüne sahip olmamaları nedeniyle yeminin niteliği ve önemini kavrayamayanlar ve soruşturma/kovuşturma konusu suçlara iştirakten veya suçluyu kayırmaktan ya da suç delillerini yok etmekten şüpheli, sanık veya hükümlü olanlar yeminsiz dinlenir.',
    trueHighlight: ['üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları', 'onbeş yaşını doldurmamış olanlar', 'yeminsiz dinlenir'],
    trueCorrectPhrase: 'CMK m. 45 uyarınca tanıklıktan çekinmede kan hısımlığı 3. derece dahil (amca/hala/dayı/teyze/yeğen), kayın hısımlığı ise 2. derece dahildir (kayınbirader/baldız/görümce/elti); CMK m. 50 uyarınca dinlenme sırasında 15 yaşını doldurmamış olanlar YEMİNSİZ dinlenir!',
    baseExplanation: 'CMK m. 45 ve m. 50’de ÖSYM’nin çok sık sorduğu iki sayı: 1) Tanıklıktan çekinmede yansoy KAN hısımlığı 3. dereceye kadar, yansoy KAYIN hısımlığı ise 2. dereceye kadardır, 2) Ceza muhakemesinde yemin yaşı 18 değil, 15 yaşın doldurulmasıdır (15 yaşını doldurmamış olanlar yeminsiz dinlenir)!',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları ve aralarında evlâtlık bağı bulunanlar tanıklıktan çekinebilirler; soruşturma veya kovuşturma konusu olayla ilgili olarak tanık (dinlenmesi) sırasında onbeş yaşını doldurmamış olanlar',
      wrongPhrase: 'dördüncü derece dahil kan veya üçüncü derece dahil kayın hısımları tanıklıktan çekinebilirler; tanık dinlenmesi sırasında onsekiz yaşını doldurmamış olanlar',
      correctPhrase: 'üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları ve aralarında evlâtlık bağı bulunanlar tanıklıktan çekinebilirler; soruşturma veya kovuşturma konusu olayla ilgili olarak tanık (dinlenmesi) sırasında onbeş yaşını doldurmamış olanlar',
      explanation: 'CMK m. 45/1-d ve m. 50/1-a uyarınca tanıklıktan çekinmede yansoy kan hısımlığı 3. derece, kayın hısımlığı 2. derecedir; yeminsiz dinlenme yaş sınırı ise 18 değil, 15 yaşını doldurmamış olmaktır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Şüpheli veya sanığın nişanlısı, evlilik bağı kalmasa bile eşi, kan hısımlığından veya kayın hısımlığından üstsoy veya altsoyu',
      wrongPhrase: 'Avukatlar, hekimler ve mali müşavirler müvekkilleri veya hastaları rıza gösterse dahi hiçbir durumda tanıklıktan çekinemezler; ayrıca şüpheli veya sanığın nişanlısı',
      correctPhrase: 'Şüpheli veya sanığın nişanlısı, evlilik bağı kalmasa bile eşi, kan hısımlığından veya kayın hısımlığından üstsoy veya altsoyu',
      explanation: 'CMK m. 46 uyarınca avukatlar, sağlık mesleği mensupları ve mali müşavirler meslekleri sebebiyle öğrendikleri bilgiler hakkında tanıklıktan çekinebilirler; hatta AVUKATLAR (müdafi/vekiller) ilgilinin rızası olsa dahi tanıklıktan çekinebilirler (hekim ve mali müşavirler ise ilgilinin rızası varsa çekinemezler)!'
    }
  },
  {
    id: 'rule-cmk-26',
    branch: 'CMK',
    subTopic: 'Seri Muhakeme Usulü (CMK m. 250) ve Basit Yargılama Usulü (CMK m. 251-252) Karşılaştırması',
    articleRef: 'CMK M. 250-252',
    trueStatement:
      'Soruşturma (evresinde) Cumhuriyet savcısı tarafından katalog suçlarda şüphelinin müdafii huzurunda serbest iradesiyle kabul etmesi üzerine uygulanan seri muhakeme usulünde (CMK m. 250) yaptırım yarı oranında (1/2) indirilir ve mahkemece kurulan hükme karşı iki hafta içinde itiraz edilebilir; kovuşturma evresinde asliye ceza mahkemesince üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda duruşma açılmaksızın uygulanan basit yargılama usulünde (CMK m. 251) ise sonuç ceza dörtte bir (1/4) oranında indirilir ve karara karşı iki hafta içinde itiraz edildiğinde mahkeme duruşma açarak genel hükümlere göre yargılamaya devam eder.',
    trueHighlight: ['seri muhakeme usulünde (CMK m. 250) yaptırım yarı oranında (1/2) indirilir', 'basit yargılama usulünde (CMK m. 251) ise sonuç ceza dörtte bir (1/4) oranında indirilir', 'iki hafta içinde itiraz edilebilir'],
    trueCorrectPhrase: '7188 s.K. (ve 7499 s.K. süre değişikliği) ile CMK m. 250-252 altın karşılaştırması: 1) Seri Muhakeme -> Soruşturma evresinde, katalog suçlarda, müdafi huzurunda şüphelinin kabulüyle, ceza 1/2 (%50) indirilir; 2) Basit Yargılama -> Kovuşturma evresinde (Asliye Ceza), üst sınırı 2 yıl veya daha az hapis/adli para cezası gerektiren suçlarda, duruşmasız, ceza 1/4 (%25) indirilir; her ikisi de yaş küçüklüğü, akıl hastalığı, sağır-dilsizlik ve iştirak halinde uygulanmaz ve her ikisinin kararına karşı 2 HAFTA içinde İTİRAZ edilir!',
    baseExplanation: 'CMK m. 250 (Seri Muhakeme) ve m. 251-252 (Basit Yargılama) HMGS’de her dönem sorulan konudur: Seri muhakemede indirim 1/2, basit yargılamada 1/4’tür; 7499 s.K. ile her ikisine itiraz süresi 2 hafta olmuştur; her ikisi de çocuklara/akıl hastalarına uygulanmaz.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'seri muhakeme usulünde (CMK m. 250) yaptırım yarı oranında (1/2) indirilir ve mahkemece kurulan hükme karşı iki hafta içinde itiraz edilebilir; kovuşturma evresinde asliye ceza mahkemesince üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda duruşma açılmaksızın uygulanan basit yargılama usulünde (CMK m. 251) ise sonuç ceza dörtte bir (1/4) oranında indirilir',
      wrongPhrase: 'seri muhakeme usulünde yaptırım dörtte bir (1/4) oranında indirilir ve hükme karşı doğrudan Yargıtayda temyiz yoluna gidilir; basit yargılama usulünde ise ağır ceza mahkemesince ceza yarı oranında (1/2) indirilir',
      correctPhrase: 'seri muhakeme usulünde (CMK m. 250) yaptırım yarı oranında (1/2) indirilir ve mahkemece kurulan hükme karşı iki hafta içinde itiraz edilebilir; kovuşturma evresinde asliye ceza mahkemesince üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda duruşma açılmaksızın uygulanan basit yargılama usulünde (CMK m. 251) ise sonuç ceza dörtte bir (1/4) oranında indirilir',
      explanation: 'CMK m. 250 ve m. 251 uyarınca seri muhakeme usulünde indirim oranı 1/2 (%50), basit yargılama usulünde ise 1/4 (%25) olup her ikisinde de kanun yolu 2 hafta içinde İTİRAZDIR!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Soruşturma (evresinde) Cumhuriyet savcısı tarafından katalog suçlarda şüphelinin müdafii huzurunda serbest iradesiyle kabul etmesi üzerine uygulanan seri muhakeme usulünde',
      wrongPhrase: 'Onsekiz yaşından küçük çocuklar ile akıl hastaları hakkında da müdafilerinin rızasıyla uygulanan seri muhakeme ve basit yargılama usullerinde',
      correctPhrase: 'Soruşturma (evresinde) Cumhuriyet savcısı tarafından katalog suçlarda şüphelinin müdafii huzurunda serbest iradesiyle kabul etmesi üzerine uygulanan seri muhakeme usulünde',
      explanation: 'CMK m. 250/12 ve m. 251/7 açık hükümleri uyarınca yaş küçüklüğü, akıl hastalığı veya sağır ve dilsizlik hâllerinde ne seri muhakeme usulü ne de basit yargılama usulü uygulanabilir!'
    }
  },
  {
    id: 'rule-cmk-27',
    branch: 'CMK',
    subTopic: 'Uzlaştırma Kapsamı, Mürafaa/Müzakere Süresi (30 + 20 + 20 Gün) ve Uzlaştırma Kapsamı Dışı Suçlar',
    articleRef: 'CMK M. 253-254',
    trueStatement:
      'Soruşturulması ve kovuşturulması şikâyete bağlı suçlar ile şikâyete bağlı olup olmadığına bakılmaksızın CMK m. 253/1-b’de sayılan katalog suçlarda (kasten yaralama, taksirle yaralama, tehdit, konut dokunulmazlığının ihlali, hırsızlık, dolandırıcılık, güveni kötüye kullanma vb.) şüpheli ile mağdur veya suçtan zarar gören gerçek veya özel hukuk tüzel kişisinin uzlaştırılması girişiminde bulunulur; ancak cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma yoluna gidilemez; uzlaştırmacı, dosya içindeki belgelerin birer örneği kendisine verildikten itibaren en geç otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve Cumhuriyet savcısı bu süreyi her defasında yirmi günü geçmemek üzere en çok iki kez uzatabilir.',
    trueHighlight: ['cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma yoluna gidilemez', 'en geç otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve Cumhuriyet savcısı bu süreyi her defasında yirmi günü geçmemek üzere en çok iki kez uzatabilir'],
    trueCorrectPhrase: 'CMK m. 253 uyarınca cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip (TCK m. 123/A) suçunda şikâyete bağlı olsa bile uzlaştırma YAPILAMAZ; ayrıca uzlaştırma kapsamındaki bir suç uzlaştırma kapsamında olmayan bir suçla birlikte (aynı mağdura karşı) işlenmişse uzlaştırma uygulanmaz; uzlaştırma süresi 30 gün + 2x20 gün = en çok 70 gündür!',
    baseExplanation: 'CMK m. 253/3 ve m. 253/12 uyarınca cinsel suçlarda ve ısrarlı takip suçunda uzlaştırma yasaktır; uzlaştırma süresi ise 30 gün + en çok iki kez 20’şer gün uzatma (toplam 70 gün) olarak uygulanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve Cumhuriyet savcısı bu süreyi her defasında yirmi günü geçmemek üzere en çok iki kez uzatabilir',
      wrongPhrase: 'en geç altmış gün içinde uzlaştırma işlemlerini sonuçlandırır ve bu süre hiçbir koşulda uzatılamaz',
      correctPhrase: 'en geç otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve Cumhuriyet savcısı bu süreyi her defasında yirmi günü geçmemek üzere en çok iki kez uzatabilir',
      explanation: 'CMK m. 253/12 uyarınca uzlaştırmacı işlemleri en geç 30 gün içinde sonuçlandırır; Cumhuriyet savcısı bu süreyi her defasında 20 günü geçmemek üzere en çok 2 kez (30 + 20 + 20 = 70 gün) uzatabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma yoluna gidilemez',
      wrongPhrase: 'şikâyete bağlı olan basit cinsel saldırı, cinsel taciz ve ısrarlı takip suçlarında da öncelikle uzlaştırma yoluna başvurulması dava şartıdır',
      correctPhrase: 'ancak cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma yoluna gidilemez',
      explanation: 'CMK m. 253/3 açık hükmü uyarınca soruşturulması ve kovuşturulması şikâyete bağlı olsa bile, cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma yoluna GİDİLEMEZ!'
    }
  },
  {
    id: 'rule-cmk-28',
    branch: 'CMK',
    subTopic: 'Cumhuriyet Savcısının Kamu Davasını Açmada Takdir Yetkisi ve Kamu Davasının Açılmasının Ertelenmesi (KDAE - 5 Yıl)',
    articleRef: 'CMK M. 171',
    trueStatement:
      'Cezayı kaldıran şahsi sebep olarak etkin pişmanlık hükümlerinin uygulanmasını gerektiren koşulların ya da şahsi cezasızlık sebebinin varlığı hâlinde Cumhuriyet savcısı kovuşturmaya yer olmadığı kararı (KYOK) verebilir; üst sınırı üç yıl veya daha az süreli hapis cezasını gerektiren suçlardan dolayı ise yeterli şüphe olmasına rağmen 171/3’teki koşulların (daha önce kasıtlı suçtan hapis mahkûmiyeti bulunmaması, zararın giderilmesi vb.) birlikte gerçekleşmesi hâlinde Cumhuriyet savcısı kamu davasının açılmasının beş yıl süreyle ertelenmesine karar verebilir (çocuklar bakımından bu erteleme süresi üç yıldır) ve bu karara karşı suçtan zarar gören iki hafta içinde sulh ceza hâkimliğine itiraz edebilir.',
    trueHighlight: ['üst sınırı üç yıl veya daha az süreli hapis cezasını gerektiren suçlardan dolayı', 'kamu davasının açılmasının beş yıl süreyle ertelenmesine karar verebilir (çocuklar bakımından bu erteleme süresi üç yıldır)', 'suçtan zarar gören iki hafta içinde sulh ceza hâkimliğine itiraz edebilir'],
    trueCorrectPhrase: 'CMK m. 171 (7188 ve 7499 s.K.) uyarınca Kamu Davasının Açılmasının Ertelenmesi (KDAE): 1) Üst sınırı 3 yıl veya daha az hapis gerektiren suçlarda (uzlaştırma ve önödeme kapsamındaki suçlar hariç; çocuklarda üst sınır 5 yıl!), 2) Erteleme süresi yetişkinlerde 5 yıl, çocuklarda 3 yıldır (ÇKK m. 19), 3) Suçtan zarar gören 2 hafta içinde sulh ceza hâkimliğine itiraz edebilir!',
    baseExplanation: 'CMK m. 171 KDAE ile CMK m. 231 HAGB farkı: KDAE soruşturma evresinde savcı tarafından (üst sınırı 3 yıl veya daha az hapis olan suçlarda) 5 yıl (çocukta 3 yıl) süreyle verilir; HAGB ise kovuşturma evresinde mahkeme tarafından (hükmolunan ceza 2 yıl veya daha az hapis/adli para ise) 5 yıl (çocukta 3 yıl) süreyle verilir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üst sınırı üç yıl veya daha az süreli hapis cezasını gerektiren suçlardan dolayı ise yeterli şüphe olmasına rağmen 171/3’teki koşulların (daha önce kasıtlı suçtan hapis mahkûmiyeti bulunmaması, zararın giderilmesi vb.) birlikte gerçekleşmesi hâlinde Cumhuriyet savcısı kamu davasının açılmasının beş yıl süreyle ertelenmesine karar verebilir (çocuklar bakımından bu erteleme süresi üç yıldır) ve bu karara karşı suçtan zarar gören iki hafta içinde sulh ceza hâkimliğine itiraz edebilir',
      wrongPhrase: 'üst sınırı beş yıl veya daha az süreli hapis cezasını gerektiren suçlarda Cumhuriyet savcısı kamu davasının açılmasının iki yıl süreyle ertelenmesine karar verebilir ve bu karara karşı hiçbir makam nezdinde itiraz edilemez',
      correctPhrase: 'üst sınırı üç yıl veya daha az süreli hapis cezasını gerektiren suçlardan dolayı ise yeterli şüphe olmasına rağmen 171/3’teki koşulların (daha önce kasıtlı suçtan hapis mahkûmiyeti bulunmaması, zararın giderilmesi vb.) birlikte gerçekleşmesi hâlinde Cumhuriyet savcısı kamu davasının açılmasının beş yıl süreyle ertelenmesine karar verebilir (çocuklar bakımından bu erteleme süresi üç yıldır) ve bu karara karşı suçtan zarar gören iki hafta içinde sulh ceza hâkimliğine itiraz edebilir',
      explanation: 'CMK m. 171/2 uyarınca yetişkinlerde kamu davasının açılmasının ertelenmesi sınırı üst sınırı 3 yıl veya daha az süreli hapis cezasıdır, erteleme süresi 5 yıldır ve suçtan zarar gören tebliğden itibaren 2 hafta içinde sulh ceza hâkimliğine itiraz edebilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Cezayı kaldıran şahsi sebep olarak etkin pişmanlık hükümlerinin uygulanmasını gerektiren koşulların ya da şahsi cezasızlık sebebinin varlığı hâlinde Cumhuriyet savcısı kovuşturmaya yer olmadığı kararı (KYOK) verebilir',
      wrongPhrase: 'Suç işlemek için örgüt kurmak ve kamu görevlisinin görevi sebebiyle işlediği suçlar ile askeri suçlarda da Cumhuriyet savcısı her zaman kamu davasının açılmasının ertelenmesine karar verebilir',
      correctPhrase: 'Cezayı kaldıran şahsi sebep olarak etkin pişmanlık hükümlerinin uygulanmasını gerektiren koşulların ya da şahsi cezasızlık sebebinin varlığı hâlinde Cumhuriyet savcısı kovuşturmaya yer olmadığı kararı (KYOK) verebilir',
      explanation: 'CMK m. 171/6 açık hükmü uyarınca suç işlemek için örgüt kurmak/yönetmek/üye olmak suçları, kamu görevlisinin görevi sebebiyle işlediği suçlar, askeri suçlar ve cinsel dokunulmazlığa karşı suçlarda kamu davasının açılmasının ertelenmesi (KDAE) kararları VERİLEMEZ!'
    }
  },
  {
    id: 'rule-cmk-29',
    branch: 'CMK',
    subTopic: 'Bölge Adliye Mahkemesi Cumhuriyet Başsavcılığının İtiraz Yetkisi Süresi (30 Gün ve 2 Hafta)',
    articleRef: 'CMK M. 308/A',
    trueStatement:
      'Bölge adliye mahkemesi ceza dairelerinin kesin nitelikteki kararlarına karşı bölge adliye mahkemesi Cumhuriyet başsavcılığı, re’sen veya istem üzerine, kararın kendisine verildiği tarihten itibaren otuz gün içinde kararı veren daireye itiraz edebilir; ancak sanığın lehine itirazda süre aranmaz; davalı sanık aleyhine itirazda ise karar sanık veya müdafiine tebliğ olunur ve tebliğden itibaren iki hafta içinde yazılı olarak cevap verilebilir.',
    trueHighlight: ['kararın kendisine verildiği tarihten itibaren otuz gün içinde kararı veren daireye itiraz edebilir; ancak sanığın lehine itirazda süre aranmaz', 'tebliğden itibaren iki hafta içinde yazılı olarak cevap verilebilir'],
    trueCorrectPhrase: 'CMK m. 308/A uyarınca BAM Ceza Dairelerinin kesin kararlarına karşı BAM Cumhuriyet Başsavcılığının itiraz süresi sanık aleyhine 30 gündür, sanık lehine ise SÜRESİZDİR (Yargıtay C. Başsavcısının CMK m. 308 itirazında da aynen aleyhe 30 gün, lehe süresizdir!); sanığın yazılı cevap süresi ise 7499 s.K. ile 2 haftadır!',
    baseExplanation: 'Hem Yargıtay Cumhuriyet Başsavcısının (CMK m. 308) hem de BAM Cumhuriyet Başsavcılığının (CMK m. 308/A) olağanüstü itiraz yetkisinde süre kuralı aynıdır: Sanık aleyhine 30 gün, sanık lehine SÜRE ARANMAZ!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kararın kendisine verildiği tarihten itibaren otuz gün içinde kararı veren daireye itiraz edebilir; ancak sanığın lehine itirazda süre aranmaz',
      wrongPhrase: 'hem sanık lehine hem de sanık aleyhine yalnızca yedi gün içinde Yargıtay Ceza Genel Kuruluna itiraz edebilir',
      correctPhrase: 'kararın kendisine verildiği tarihten itibaren otuz gün içinde kararı veren daireye itiraz edebilir; ancak sanığın lehine itirazda süre aranmaz',
      explanation: 'CMK m. 308/A (ve m. 308) uyarınca Cumhuriyet başsavcılığının olağanüstü itiraz süresi sanık aleyhine 30 gündür, sanık lehine ise süre aranmaz!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kararı veren daireye itiraz edebilir',
      wrongPhrase: 'doğrudan doğruya Anayasa Mahkemesine itiraz edebilir',
      correctPhrase: 'kararı veren daireye itiraz edebilir',
      explanation: 'CMK m. 308/A uyarınca BAM C. Başsavcılığının itirazı öncelikle kararı veren BAM ceza dairesine yapılır; daire itirazı yerinde görmezse BAM Ceza Daireleri Başkanlar Kuruluna gönderir!'
    }
  },

  // =========================================================================
  // 4. TÜRK CEZA KANUNU (TCK) DERİNLİK KURALLARI (rule-tck-17 .. rule-tck-26)
  // =========================================================================
  {
    id: 'rule-tck-17',
    branch: 'TCK',
    subTopic: 'Kısa Süreli Hapis Cezası (1 Yıl veya Daha Az) ve Seçenek Yaptırımlara Çevrilme Zorunluluğu',
    articleRef: 'TCK M. 49-50',
    trueStatement:
      'Hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır; kısa süreli hapis cezası suçlunun kişiliğine, sosyal ve ekonomik durumuna, yargılama sürecinde duyduğu pişmanlığa ve suçun işlenmesindeki özelliklere göre adli para cezasına veya diğer seçenek yaptırımlara çevrilebilir; ancak daha önce hapis cezasına mahkûm edilmemiş olmak koşuluyla, mahkûm olunan otuz gün ve daha az süreli hapis cezası ile fiili işlediği tarihte onsekiz yaşını doldurmamış veya altmışbeş yaşını bitirmiş bulunanların mahkûm edildiği bir yıl veya daha az süreli hapis cezası seçenek yaptırımlara çevrilmek ZORUNDADIR; taksirli suçlardan dolayı hükmolunan hapis cezası ise uzun süreli de olsa (bilinçli taksir hariç) adli para cezasına çevrilebilir.',
    trueHighlight: ['Hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır', 'otuz gün ve daha az süreli hapis cezası ile fiili işlediği tarihte onsekiz yaşını doldurmamış veya altmışbeş yaşını bitirmiş bulunanların mahkûm edildiği bir yıl veya daha az süreli hapis cezası seçenek yaptırımlara çevrilmek ZORUNDADIR', 'taksirli suçlardan dolayı hükmolunan hapis cezası ise uzun süreli de olsa (bilinçli taksir hariç) adli para cezasına çevrilebilir'],
    trueCorrectPhrase: 'TCK m. 49-50 altın kuralları: 1) Kısa süreli hapis = 1 yıl veya daha az, 2) Daha önce hapse mahkûm olmamışsa: 30 gün ve daha az hapis İLE 18 yaşını doldurmamış veya 65 yaşını bitirmiş olanların 1 yıl veya daha az hapis cezasının seçenek yaptırıma çevrilmesi ZORUNLUDUR, 3) Adi taksirli suçlarda hapis cezası uzun süreli (1 yıldan fazla) olsa bile adli para cezasına çevrilebilir (bilinçli taksir hariç!), 4) Uygulamada asıl mahkûmiyet çevrilen adli para cezası/tedbirdir!',
    baseExplanation: 'TCK m. 50/3 (zorunlu çevirme), m. 50/4 (taksirli suçlarda uzun süreli hapsin de çevrilebilmesi) ve m. 50/5 (asıl mahkûmiyetin çevrilen para cezası/tedbir olması) Ceza Genel Hukukunun en sık sorulan maddelerindendir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır; kısa süreli hapis cezası suçlunun kişiliğine, sosyal ve ekonomik durumuna, yargılama sürecinde duyduğu pişmanlığa ve suçun işlenmesindeki özelliklere göre adli para cezasına veya diğer seçenek yaptırımlara çevrilebilir; ancak daha önce hapis cezasına mahkûm edilmemiş olmak koşuluyla, mahkûm olunan otuz gün ve daha az süreli hapis cezası ile fiili işlediği tarihte onsekiz yaşını doldurmamış veya altmışbeş yaşını bitirmiş bulunanların mahkûm edildiği bir yıl veya daha az süreli hapis cezası seçenek yaptırımlara çevrilmek ZORUNDADIR',
      wrongPhrase: 'Hükmedilen iki yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır ve altmışbeş yaşını bitirmiş kişilerin mahkûm edildiği kısa süreli hapis cezasının seçenek yaptırıma çevrilmesi hiçbir zaman zorunlu olmayıp tamamen hâkimin takdirindedir',
      correctPhrase: 'Hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır; kısa süreli hapis cezası suçlunun kişiliğine, sosyal ve ekonomik durumuna, yargılama sürecinde duyduğu pişmanlığa ve suçun işlenmesindeki özelliklere göre adli para cezasına veya diğer seçenek yaptırımlara çevrilebilir; ancak daha önce hapis cezasına mahkûm edilmemiş olmak koşuluyla, mahkûm olunan otuz gün ve daha az süreli hapis cezası ile fiili işlediği tarihte onsekiz yaşını doldurmamış veya altmışbeş yaşını bitirmiş bulunanların mahkûm edildiği bir yıl veya daha az süreli hapis cezası seçenek yaptırımlara çevrilmek ZORUNDADIR',
      explanation: '2 yıl sınırı hapis cezasının ertelenmesi (TCK m. 51) ve HAGB (CMK m. 231) sınırıdır; TCK m. 49/2 uyarınca kısa süreli hapis cezası 1 yıl veya daha az süreli hapistir ve TCK m. 50/3 uyarınca daha önce hapse mahkûm olmamışsa 30 gün ve altı hapis ile <18 ve >65 yaşındakilerin kısa süreli hapis cezasının çevrilmesi ZORUNLUDUR!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'taksirli suçlardan dolayı hükmolunan hapis cezası ise uzun süreli de olsa (bilinçli taksir hariç) adli para cezasına çevrilebilir',
      wrongPhrase: 'bilinçli taksirle işlenen suçlarda da beş yıla kadar hükmolunan uzun süreli hapis cezası adli para cezasına çevrilebilir ve çevirme hâlinde uygulamada asıl mahkûmiyet yine hapis cezası olarak kalır',
      correctPhrase: 'taksirli suçlardan dolayı hükmolunan hapis cezası ise uzun süreli de olsa (bilinçli taksir hariç) adli para cezasına çevrilebilir',
      explanation: 'TCK m. 50/4 ve m. 50/5 uyarınca bilinçli taksir halinde uzun süreli hapis cezası adli para cezasına çevrilemez (yalnız kısa süreliyse çevrilebilir) ve çevirme halinde uygulamada asıl mahkûmiyet hapis cezası değil, çevrilen adli para cezası veya tedbirdir!'
    }
  },
  {
    id: 'rule-tck-18',
    branch: 'TCK',
    subTopic: 'Belli Hakları Kullanmaktan Yoksun Bırakılma (TCK m. 53) ve Kısa Süreli Hapis / Yaş Küçüklüğü İstisnaları',
    articleRef: 'TCK M. 53',
    trueStatement:
      'Kişi, kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak; sürekli, süreli veya geçici bir kamu görevinin üstlenilmesinden, seçme ve seçilme ehliyetinden, velayet, vesayet veya kayyımlık hizmetlerinden, vakıf/dernek/sendika/şirket/kooperatif yöneticisi veya denetçisi olmaktan yoksun bırakılır; ancak mahkûm olduğu hapis cezası ertelenen veya denetimli serbestlik tedbiri uygulanarak cezası infaz edilen ya da koşullu salıverilen hükümlünün kendi altsoyu üzerindeki velayet, vesayet ve kayyımlık yetkileri açısından bu yoksunluk uygulanmayabileceği gibi, fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında TCK m. 53/1’deki hak yoksunluklarına hükmedilemez.',
    trueHighlight: ['kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak', 'fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında TCK m. 53/1’deki hak yoksunluklarına hükmedilemez'],
    trueCorrectPhrase: 'TCK m. 53 hak yoksunlukları SADECE "kasten işlenen suçtan dolayı hapis cezasına mahkûmiyetin" kanuni sonucudur (taksirli suçlarda, adli para cezalarında ve fiili işlediği sırada 18 yaşını doldurmamış çocuklarda TCK m. 53/1 hak yoksunluğu UYGULANMAZ!)',
    baseExplanation: 'TCK m. 53’teki üç klasik HMGS tuzağı: 1) Taksirli suçtan hapse mahkûmiyette m. 53/1 uygulanmaz, 2) Doğrudan veya çevrilen adli para cezasında m. 53/1 uygulanmaz, 3) Fiili işlediği sırada 18 yaşını doldurmamış olanlar (çocuklar) hakkında m. 53/1 uygulanmaz (m. 53/4)!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kişi, kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak; sürekli, süreli veya geçici bir kamu görevinin üstlenilmesinden, seçme ve seçilme ehliyetinden, velayet, vesayet veya kayyımlık hizmetlerinden, vakıf/dernek/sendika/şirket/kooperatif yöneticisi veya denetçisi olmaktan yoksun bırakılır; ancak mahkûm olduğu hapis cezası ertelenen veya denetimli serbestlik tedbiri uygulanarak cezası infaz edilen ya da koşullu salıverilen hükümlünün kendi altsoyu üzerindeki velayet, vesayet ve kayyımlık yetkileri açısından bu yoksunluk uygulanmayabileceği gibi, fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında TCK m. 53/1’deki hak yoksunluklarına hükmedilemez',
      wrongPhrase: 'Taksirle işlenen suçlardan dolayı verilen hapis cezaları ile adli para cezalarında ve fiili işlediği sırada onsekiz yaşını doldurmamış çocuklar hakkında da TCK m. 53/1 kapsamındaki tüm hak yoksunlukları kanuni sonuç olarak kendiliğinden uygulanır',
      correctPhrase: 'Kişi, kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak; sürekli, süreli veya geçici bir kamu görevinin üstlenilmesinden, seçme ve seçilme ehliyetinden, velayet, vesayet veya kayyımlık hizmetlerinden, vakıf/dernek/sendika/şirket/kooperatif yöneticisi veya denetçisi olmaktan yoksun bırakılır; ancak mahkûm olduğu hapis cezası ertelenen veya denetimli serbestlik tedbiri uygulanarak cezası infaz edilen ya da koşullu salıverilen hükümlünün kendi altsoyu üzerindeki velayet, vesayet ve kayyımlık yetkileri açısından bu yoksunluk uygulanmayabileceği gibi, fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında TCK m. 53/1’deki hak yoksunluklarına hükmedilemez',
      explanation: 'TCK m. 53/1 ve m. 53/4 uyarınca hak yoksunlukları yalnız KASTEN işlenen suçtan dolayı HAPİS cezasına mahkûmiyette doğar; taksirli suçlarda, adli para cezalarında ve fiili işlediği sırada 18 yaşını doldurmamış çocuklar hakkında uygulanamaz!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak',
      wrongPhrase: 'hapis cezasının infazı tamamlandıktan sonra da ömür boyu sürecek biçimde mahkûmiyetin kanuni sonucu olarak',
      correctPhrase: 'kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak',
      explanation: 'TCK m. 53/2 uyarınca kişi, işlemiş bulunduğu suç dolayısıyla mahkûm olduğu hapis cezasının İNFAZI TAMAMLANINCAYA KADAR bu hakları kullanamaz; infaz tamamlanınca TCK m. 53/1 hak yoksunluğu sona erer!'
    }
  },
  {
    id: 'rule-tck-19',
    branch: 'TCK',
    subTopic: 'Eşya Müsaderesi (TCK m. 54) ve Kazanç Müsaderesi (TCK m. 55) Şartları',
    articleRef: 'TCK M. 54-55',
    trueStatement:
      'İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan veya suçun işlenmesine tahsis edilen ya da suçtan meydana gelen eşyanın müsaderesine hükmolunur; suçun işlenmesinde kullanılmak üzere hazırlanan eşya ise kamu güvenliği, kamu sağlığı veya genel ahlak açısından tehlikeli olması durumunda müsadere edilir; üretimi, bulundurulması, kullanılması, taşınması, alım ve satımı suç oluşturan eşya ise iyiniyetli üçüncü kişiye ait olsa dahi müsadere edilir.',
    trueHighlight: ['İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan', 'suçun işlenmesinde kullanılmak üzere hazırlanan eşya ise kamu güvenliği, kamu sağlığı veya genel ahlak açısından tehlikeli olması durumunda müsadere edilir', 'üretimi, bulundurulması, kullanılması, taşınması, alım ve satımı suç oluşturan eşya ise iyiniyetli üçüncü kişiye ait olsa dahi müsadere edilir'],
    trueCorrectPhrase: 'TCK m. 54 eşya müsaderesi şartları: 1) Kasıtlı bir suç olmalı (taksirli suçta kullanılan eşya müsadere edilmez!), 2) Eşya iyiniyetli üçüncü kişiye ait olmamalı (ancak bizatihi suç oluşturan eşya kime ait olursa olsun müsadere edilir), 3) Sadece suçta kullanılmak üzere hazırlanan (henüz kullanılmayan) eşya ise ancak kamu güvenliği/sağlığı/genel ahlak için tehlikeliyse müsadere edilir',
    baseExplanation: 'TCK m. 54’te ÖSYM’nin kurduğu iki ince tuzak: 1) Taksirli suçun işlenmesinde kullanılan eşya (örneğin taksirle ölüme neden olunan otomobil) müsadere edilemez; 2) Suçta kullanılmak üzere "hazırlanan" ama henüz kullanılmayan eşya, ancak kamu güvenliği, kamu sağlığı veya genel ahlak açısından tehlikeli ise müsadere edilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan veya suçun işlenmesine tahsis edilen ya da suçtan meydana gelen eşyanın müsaderesine hükmolunur',
      wrongPhrase: 'Taksirle işlenen suçlarda kullanılan eşya ile iyiniyetli üçüncü kişilere ait olan her türlü eşyanın da istisnasız olarak müsaderesine hükmolunur',
      correctPhrase: 'İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan veya suçun işlenmesine tahsis edilen ya da suçtan meydana gelen eşyanın müsaderesine hükmolunur',
      explanation: 'TCK m. 54/1 uyarınca eşya müsaderesi için suçun KASTEN işlenmiş olması ve eşyanın iyiniyetli üçüncü kişilere ait olmaması şarttır; taksirli suçta kullanılan eşya müsadere edilemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'suçun işlenmesinde kullanılmak üzere hazırlanan eşya ise kamu güvenliği, kamu sağlığı veya genel ahlak açısından tehlikeli olması durumunda müsadere edilir',
      wrongPhrase: 'suçta kullanılmak üzere hazırlanan eşya kamu güvenliği veya sağlığı açısından hiçbir tehlike taşımasa dahi her durumda müsadere edilir ve müsadere kararı genel müsadere şeklinde sanığın tüm malvarlığını kapsayabilir',
      correctPhrase: 'suçun işlenmesinde kullanılmak üzere hazırlanan eşya ise kamu güvenliği, kamu sağlığı veya genel ahlak açısından tehlikeli olması durumunda müsadere edilir',
      explanation: 'Anayasa m. 38/10 uyarınca genel müsadere cezası verilemez ve TCK m. 54/1 ikinci cümle uyarınca suçta kullanılmak üzere hazırlanan eşya ancak kamu güvenliği, kamu sağlığı veya genel ahlak açısından tehlikeli olması durumunda müsadere edilir!'
    }
  },
  {
    id: 'rule-tck-20',
    branch: 'TCK',
    subTopic: 'Tekerrür Hükümleri (TCK m. 58): 3 Yıl ve 5 Yıl Tekerrür Süreleri ile Tekerrürün Uygulanmadığı Haller',
    articleRef: 'TCK M. 58',
    trueStatement:
      'Önceden işlenen suçtan dolayı verilen hüküm kesinleştikten sonra yeni bir suçun işlenmesi hâlinde, tekerrür hükümleri uygulanır ve bunun için cezanın infaz edilmiş olması gerekmez; tekerrür hükümleri, önceki (kesinleşmiş) cezadan dolayı; beş yıldan fazla süreyle hapis cezasına mahkûmiyet hâlinde bu cezanın infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adli para cezasına mahkûmiyet hâlinde ise bu cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra işlenen suçlar dolayısıyla uygulanmaz; kasıtlı suçlarla taksirli suçlar ve sırf askeri suçlarla diğer suçlar arasında tekerrür hükümleri uygulanmaz; fiili işlediği sırada onsekiz yaşını doldurmamış olan kişilerin işlediği suçlar dolayısıyla da tekerrür hükümleri uygulanmaz.',
    trueHighlight: ['cezanın infaz edilmiş olması gerekmez', 'beş yıldan fazla süreyle hapis cezasına mahkûmiyet hâlinde bu cezanın infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adli para cezasına mahkûmiyet hâlinde ise bu cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra işlenen suçlar dolayısıyla uygulanmaz', 'fiili işlediği sırada onsekiz yaşını doldurmamış olan kişilerin işlediği suçlar dolayısıyla da tekerrür hükümleri uygulanmaz'],
    trueCorrectPhrase: 'TCK m. 58 tekerrür kuralları: 1) Önceki hükmün KESİNLEŞMİŞ olması yeterlidir (infaz edilmiş olması şart değildir; ancak 3 ve 5 yıllık tekerrür süreleri infaz tarihinden başlar!), 2) >5 yıl hapiste infazdan itibaren 5 yıl, ≤5 yıl hapis veya adli para cezasında infazdan itibaren 3 yıl geçince tekerrür uygulanmaz, 3) Kasıtlı-taksirli suçlar arasında, sırf askeri-diğer suçlar arasında ve 18 yaşını doldurmamış çocukların işlediği suçlarda tekerrür UYGULANMAZ!',
    baseExplanation: 'TCK m. 58 HMGS’de en çok sorulan Ceza Genel maddelerinden biridir: Tekerrür için önceki cezanın infazı şart değildir, kesinleşmesi yeterlidir; ancak 3 ve 5 yıllık sürelerin başlangıcı infaz tarihidir! Seçimlik cezalı suçlarda ise tekerrür nedeniyle hapis cezası seçilmek zorundadır (m. 58/3).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bunun için cezanın infaz edilmiş olması gerekmez; tekerrür hükümleri, önceki (kesinleşmiş) cezadan dolayı; beş yıldan fazla süreyle hapis cezasına mahkûmiyet hâlinde bu cezanın infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adli para cezasına mahkûmiyet hâlinde ise bu cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra işlenen suçlar dolayısıyla uygulanmaz',
      wrongPhrase: 'tekerrür uygulanabilmesi için önceki cezanın tamamen infaz edilmiş olması mutlak şarttır; ayrıca önceki ceza ne olursa olsun infazdan itibaren on yıl geçmedikçe işlenen tüm suçlarda tekerrür uygulanır',
      correctPhrase: 'bunun için cezanın infaz edilmiş olması gerekmez; tekerrür hükümleri, önceki (kesinleşmiş) cezadan dolayı; beş yıldan fazla süreyle hapis cezasına mahkûmiyet hâlinde bu cezanın infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adli para cezasına mahkûmiyet hâlinde ise bu cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra işlenen suçlar dolayısıyla uygulanmaz',
      explanation: 'TCK m. 58/1-2 uyarınca tekerrür için önceki cezanın infaz edilmiş olması gerekmez (kesinleşmiş olması yeterlidir) ve tekerrür süreleri 10 yıl değil, >5 yıl hapiste 5 yıl, ≤5 yıl hapis veya adli para cezasında 3 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kasıtlı suçlarla taksirli suçlar ve sırf askeri suçlarla diğer suçlar arasında tekerrür hükümleri uygulanmaz; fiili işlediği sırada onsekiz yaşını doldurmamış olan kişilerin işlediği suçlar dolayısıyla da tekerrür hükümleri uygulanmaz',
      wrongPhrase: 'kasıtlı suçlarla taksirli suçlar arasında ve onsekiz yaşını doldurmamış çocukların işlediği suçlar dolayısıyla da tekerrür hükümleri aynen uygulanır',
      correctPhrase: 'kasıtlı suçlarla taksirli suçlar ve sırf askeri suçlarla diğer suçlar arasında tekerrür hükümleri uygulanmaz; fiili işlediği sırada onsekiz yaşını doldurmamış olan kişilerin işlediği suçlar dolayısıyla da tekerrür hükümleri uygulanmaz',
      explanation: 'TCK m. 58/4 ve m. 58/5 uyarınca kasıtlı suçlarla taksirli suçlar arasında, sırf askeri suçlarla diğer suçlar arasında ve fiili işlediği sırada 18 yaşını doldurmamış olanların işlediği suçlarda tekerrür hükümleri uygulanmaz!'
    }
  },
  {
    id: 'rule-tck-21',
    branch: 'TCK',
    subTopic: 'Ceza Zamanaşımı (TCK m. 68) ve Dava Zamanaşımı (TCK m. 66) Süreleri ile Kesilme Etkisi',
    articleRef: 'TCK M. 66-71',
    trueStatement:
      'Kanunda başka türlü yazılmış olan hâller dışında kamu davası; ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda otuz yıl, müebbet hapis cezasını gerektiren suçlarda yirmibeş yıl, yirmi yıldan aşağı olmamak üzere hapis cezasını gerektiren suçlarda yirmi yıl, beş yıldan fazla ve yirmi yıldan az hapis cezasını gerektiren suçlarda onbeş yıl, beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda sekiz yıl geçmesiyle düşer (dava zamanaşımı); zamanaşımını kesen sebeplerin varlığı hâlinde zamanaşımı süresi ilgili suça ilişkin dava zamanaşımı süresinin en fazla yarısına kadar uzar (örneğin 8 yıl -> 12 yıl).',
    trueHighlight: ['ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda otuz yıl, müebbet hapis cezasını gerektiren suçlarda yirmibeş yıl, yirmi yıldan aşağı olmamak üzere hapis cezasını gerektiren suçlarda yirmi yıl, beş yıldan fazla ve yirmi yıldan az hapis cezasını gerektiren suçlarda onbeş yıl, beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda sekiz yıl geçmesiyle düşer', 'en fazla yarısına kadar uzar'],
    trueCorrectPhrase: 'TCK m. 66 olağan dava zamanaşımı süreleri: 30 yıl - 25 yıl - 20 yıl - 15 yıl - 8 yıl (uzamış/kesilmiş dava zamanaşımı ise +1/2 eklenerek: 45 - 37,5 - 30 - 22,5 - 12 yıl!); TCK m. 68 ceza zamanaşımı süreleri ise: 40 yıl - 30 yıl - 24 yıl - 20 yıl - 10 yıldır; dava zamanaşımı suçun nitelikli halleri de dikkate alınarak kanundaki cezanın ÜST SINIRINA göre, ceza zamanaşımı ise hükmolunan somut cezaya göre hesaplanır',
    baseExplanation: 'TCK m. 66-68 zamanaşımı sayıları: Dava zamanaşımı (30-25-20-15-8 yıl) kanundaki cezanın üst sınırına göre hesaplanır ve kesilince en fazla yarısı kadar (+1/2) uzar; Ceza zamanaşımı (40-30-24-20-10 yıl) ise hükmolunan cezaya göre hesaplanır ve tebligat/yakalama/yeni suçla kesilince baştan yeniden işler!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda sekiz yıl geçmesiyle düşer (dava zamanaşımı); zamanaşımını kesen sebeplerin varlığı hâlinde zamanaşımı süresi ilgili suça ilişkin dava zamanaşımı süresinin en fazla yarısına kadar uzar',
      wrongPhrase: 'beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda beş yıl geçmesiyle düşer; dava zamanaşımını kesen her işlemde süre üst sınır olmaksızın sınırsız olarak baştan yeniden işlemeye başlar',
      correctPhrase: 'beş yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda sekiz yıl geçmesiyle düşer (dava zamanaşımı); zamanaşımını kesen sebeplerin varlığı hâlinde zamanaşımı süresi ilgili suça ilişkin dava zamanaşımı süresinin en fazla yarısına kadar uzar',
      explanation: 'TCK m. 66/1-e ve m. 67/4 uyarınca 5 yıldan fazla olmamak üzere hapis veya adli para cezasını gerektiren suçlarda olağan dava zamanaşımı süresi 5 yıl değil 8 yıldır; kesilme halinde ise süre sınırsız uzamaz, en fazla yarısına kadar (8 + 4 = 12 yıl) uzar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kanunda başka türlü yazılmış olan hâller dışında kamu davası; ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda otuz yıl',
      wrongPhrase: 'Sanık dava zamanaşımından feragat ettiğini beyan ederse mahkeme zamanaşımı süresini dikkate almaksızın yargılamaya devam eder; ayrıca ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda kamu davası otuz yıl',
      correctPhrase: 'Kanunda başka türlü yazılmış olan hâller dışında kamu davası; ağırlaştırılmış müebbet hapis cezasını gerektiren suçlarda otuz yıl',
      explanation: 'TCK m. 66/8 ve m. 68/6 uyarınca ceza hukukunda dava ve ceza zamanaşımı kamu düzenine ilişkindir, re’sen uygulanır ve şüpheli, sanık veya hükümlü bundan VAZGEÇEMEZ (feragat edemez)!'
    }
  },
  {
    id: 'rule-tck-22',
    branch: 'TCK',
    subTopic: 'Önödeme (TCK m. 75): Kapsamı (Üst Sınırı 6 Ayı Aşmayan Hapis / Yalnız Adli Para) ve Ödeme Süresi (10 Gün)',
    articleRef: 'TCK M. 75',
    trueStatement:
      'Uzlaştırma kapsamındaki suçlar hariç olmak üzere, yalnız adli para cezasını gerektiren veya kanun maddesinde öngörülen hapis cezasının yukarı sınırı altı ayı aşmayan suçların faili; adli para cezası maktu ise bu miktarı, değilse aşağı sınırını, hapis cezasının aşağı sınırının karşılığı olarak her gün için yüz Türk Lirası üzerinden bulunacak miktarı ve soruşturma giderlerini Cumhuriyet savcılığınca yapılacak tebligat üzerine on gün içinde ödediği takdirde hakkında kamu davası açılmaz (veya üç eşit taksitle ödenebilir).',
    trueHighlight: ['Uzlaştırma kapsamındaki suçlar hariç olmak üzere, yalnız adli para cezasını gerektiren veya kanun maddesinde öngörülen hapis cezasının yukarı sınırı altı ayı aşmayan suçların faili', 'her gün için yüz Türk Lirası üzerinden bulunacak miktarı', 'Cumhuriyet savcılığınca yapılacak tebligat üzerine on gün içinde ödediği takdirde hakkında kamu davası açılmaz'],
    trueCorrectPhrase: 'TCK m. 75 (7499 s.K. ile günlük miktar 30 TL’den 100 TL’ye çıkarılmıştır!) uyarınca önödeme: 1) Uzlaştırma kapsamındaki suçlar HARİÇ, yalnız adli para cezası veya üst sınırı 6 ayı aşmayan hapis cezası gerektiren suçlarda (ve bazı özel katalog suçlarda) uygulanır, 2) Tebligattan itibaren 10 GÜN içinde (veya 1’er ay arayla 3 eşit taksitte) ödenirse kamu davası açılmaz!',
    baseExplanation: 'TCK m. 75 önödeme kurumunda 7499 s.K. (8. Yargı Paketi) değişikliği: Hapis cezasının alt sınırının karşılığı olarak hesaplanan günlük miktar 30 TL’den 100 TL’ye çıkarılmıştır; başvuru/ödeme süresi tebliğden itibaren 10 gündür; uzlaştırma kapsamındaki suçlarda önödeme uygulanmaz!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yalnız adli para cezasını gerektiren veya kanun maddesinde öngörülen hapis cezasının yukarı sınırı altı ayı aşmayan suçların faili; adli para cezası maktu ise bu miktarı, değilse aşağı sınırını, hapis cezasının aşağı sınırının karşılığı olarak her gün için yüz Türk Lirası üzerinden bulunacak miktarı ve soruşturma giderlerini Cumhuriyet savcılığınca yapılacak tebligat üzerine on gün içinde ödediği takdirde hakkında kamu davası açılmaz',
      wrongPhrase: 'hapis cezasının yukarı sınırı iki yılı aşmayan tüm suçların faili, tebligat üzerine otuz gün içinde ödediği takdirde hakkında kamu davası açılmaz',
      correctPhrase: 'yalnız adli para cezasını gerektiren veya kanun maddesinde öngörülen hapis cezasının yukarı sınırı altı ayı aşmayan suçların faili; adli para cezası maktu ise bu miktarı, değilse aşağı sınırını, hapis cezasının aşağı sınırının karşılığı olarak her gün için yüz Türk Lirası üzerinden bulunacak miktarı ve soruşturma giderlerini Cumhuriyet savcılığınca yapılacak tebligat üzerine on gün içinde ödediği takdirde hakkında kamu davası açılmaz',
      explanation: 'TCK m. 75/1 uyarınca genel önödeme sınırı 2 yıl değil, yalnız adli para cezası veya üst sınırı 6 ayı aşmayan hapis cezasıdır ve ödeme süresi 30 gün değil, tebliğden itibaren 10 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Uzlaştırma kapsamındaki suçlar hariç olmak üzere',
      wrongPhrase: 'Uzlaştırma kapsamındaki tüm suçlarda da uzlaştırmadan önce mutlaka önödeme hükümleri uygulanmak zorunda olup',
      correctPhrase: 'Uzlaştırma kapsamındaki suçlar hariç olmak üzere',
      explanation: 'TCK m. 75/1 ilk cümle açık hükmü uyarınca "Uzlaştırma kapsamındaki suçlar hariç olmak üzere" önödeme uygulanır; bir suç uzlaştırma kapsamındaysa önödeme değil uzlaştırma hükümleri uygulanır!'
    }
  },
  {
    id: 'rule-tck-23',
    branch: 'TCK',
    subTopic: 'Kasten Öldürmenin İhmali Davranışla İşlenmesi (TCK m. 83) ve İntihara Yönlendirme (TCK m. 84)',
    articleRef: 'TCK M. 83-84',
    trueStatement:
      'Kişinin yükümlü olduğu belli bir icrai davranışı gerçekleştirmemesi dolayısıyla meydana gelen ölüm neticesinden sorumlu tutulabilmesi için, bu neticenin oluşumuna sebebiyet veren yükümlülük ihmalinin icrai davranışa eşdeğer olması gerekir; bunun için kişinin belli bir icrai davranışta bulunmak hususunda kanuni düzenlemelerden veya sözleşmeden kaynaklanan bir yükümlülüğünün bulunması ya da önceden gerçekleştirdiği davranışın başkalarının hayatı ile ilgili olarak tehlikeli bir durum oluşturması (garantörlük) şarttır; başkasını intihara azmettiren, teşvik eden, intihar kararını kuvvetlendiren ya da intihara herhangi bir şekilde yardım eden kişi ise intihara yönlendirme suçundan (TCK m. 84) cezalandırılır (ancak algılama yeteneği gelişmemiş veya ortadan kalkmış kişileri intihara sevk edenler ile cebir/tehdit kullanarak intihara mecbur edenler doğrudan kasten öldürme suçundan sorumlu tutulur).',
    trueHighlight: ['kanuni düzenlemelerden veya sözleşmeden kaynaklanan bir yükümlülüğünün bulunması ya da önceden gerçekleştirdiği davranışın başkalarının hayatı ile ilgili olarak tehlikeli bir durum oluşturması (garantörlük) şarttır', 'algılama yeteneği gelişmemiş veya ortadan kalkmış kişileri intihara sevk edenler ile cebir/tehdit kullanarak intihara mecbur edenler doğrudan kasten öldürme suçundan sorumlu tutulur'],
    trueCorrectPhrase: 'TCK m. 83 uyarınca ihmali davranışla öldürmede 3 garantörlük kaynağından biri (1-Kanun, 2-Sözleşme, 3-Öngelen tehlikeli eylem) şarttır ve hâkime cezada indirim yapma konusunda takdir yetkisi tanınmıştır; TCK m. 84/4 uyarınca cebir/tehdit ile intihara mecbur eden veya algılama yeteneği gelişmemiş kişiyi intihara sevk eden "intihara yönlendirme"den değil, doğrudan "KASTEN ÖLDÜRME" (TCK m. 81-82) suçundan cezalandırılır!',
    baseExplanation: 'Ceza Özel Hukukunun iki klasik sorusu: 1) TCK m. 83’te garantörlük kaynakları (Kanun - Sözleşme - Öngelen tehlikeli fiil), 2) TCK m. 84/4’te dolaylı faillik (çocuğu/akıl hastasını intihara sevk eden veya cebir/tehditle intihara zorlayan kişi intihara yönlendirmeden değil, kasten öldürmeden cezalandırılır).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak algılama yeteneği gelişmemiş veya ortadan kalkmış kişileri intihara sevk edenler ile cebir/tehdit kullanarak intihara mecbur edenler doğrudan kasten öldürme suçundan sorumlu tutulur',
      wrongPhrase: 'cebir veya tehdit kullanarak bir kişiyi intihara mecbur edenler ile küçük bir çocuğu intihara sevk edenler de kasten öldürme suçundan değil, yalnızca intihara yönlendirme suçundan (TCK m. 84/1) cezalandırılır',
      correctPhrase: 'ancak algılama yeteneği gelişmemiş veya ortadan kalkmış kişileri intihara sevk edenler ile cebir/tehdit kullanarak intihara mecbur edenler doğrudan kasten öldürme suçundan sorumlu tutulur',
      explanation: 'TCK m. 84/4 açık hükmü uyarınca işlediği fiilin anlam ve sonuçlarını algılama yeteneği gelişmemiş veya ortadan kalkmış olan kişileri intihara sevk edenler ile cebir veya tehdit kullanmak suretiyle kişileri intihara mecbur edenler KASTEN ÖLDÜRME suçundan sorumlu tutulurlar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bunun için kişinin belli bir icrai davranışta bulunmak hususunda kanuni düzenlemelerden veya sözleşmeden kaynaklanan bir yükümlülüğünün bulunması ya da önceden gerçekleştirdiği davranışın başkalarının hayatı ile ilgili olarak tehlikeli bir durum oluşturması (garantörlük) şarttır',
      wrongPhrase: 'sokakta gördüğü ve hiçbir hukuki/sözleşmesel bağı bulunmayan yaralı bir yabancıya yardım etmeyen herkes TCK m. 83 kapsamında ihmali davranışla kasten öldürme suçundan müebbet hapse mahkûm edilir',
      correctPhrase: 'bunun için kişinin belli bir icrai davranışta bulunmak hususunda kanuni düzenlemelerden veya sözleşmeden kaynaklanan bir yükümlülüğünün bulunması ya da önceden gerçekleştirdiği davranışın başkalarının hayatı ile ilgili olarak tehlikeli bir durum oluşturması (garantörlük) şarttır',
      explanation: 'Garantörlük yükümlülüğü (kanun, sözleşme veya öngelen tehlikeli fiil) bulunmayan sıradan bir kişinin yardım etmemesi TCK m. 83 (ihmali davranışla kasten öldürme) suçunu değil, TCK m. 98 (yardım veya bildirim yükümlülüğünün yerine getirilmemesi - sırf ihmali suç) suçunu oluşturur!'
    }
  },
  {
    id: 'rule-tck-24',
    branch: 'TCK',
    subTopic: 'Neticesi Sebebiyle Ağırlaşmış Yaralama (TCK m. 87) ve Takibi Şikâyete Bağlı Basit Yaralama (TCK m. 86/2)',
    articleRef: 'TCK M. 86-87',
    trueStatement:
      'Kasten yaralama fiilinin kişi üzerindeki etkisinin basit bir tıbbi müdahaleyle giderilebilecek ölçüde hafif olması hâlinde, mağdurun şikâyeti üzerine cezaya hükmolunur; ancak suça konu fiilin kadına karşı işlenmesi veya TCK m. 86/3’teki nitelikli hâllerde (üstsoya, altsoya, eşe, boşandığı eşe veya kardeşe karşı, beden/ruh bakımından kendisini savunamayacak kişiye karşı, kamu görevi nedeniyle, silahla veya canavarca hisle işlenmesi hâlinde) şikâyet aranmaksızın ceza yarı oranında (canavarca hisle işlenmesinde bir kat) artırılır.',
    trueHighlight: ['basit bir tıbbi müdahaleyle giderilebilecek ölçüde hafif olması hâlinde, mağdurun şikâyeti üzerine cezaya hükmolunur', 'suça konu fiilin kadına karşı işlenmesi', 'üstsoya, altsoya, eşe, boşandığı eşe veya kardeşe karşı', 'şikâyet aranmaksın ceza yarı oranında (canavarca hisle işlenmesinde bir kat) artırılır'],
    trueCorrectPhrase: 'TCK m. 86/2-3 uyarınca basit tıbbi müdahaleyle (BTM) giderilebilecek kasten yaralama kural olarak şikâyete tabidir; ANCAK m. 86/3’teki nitelikli hallerde (üstsoy, altsoy, eş, boşandığı eş, kardeş, silahla, kamu görevi, savunamayacak kişi, canavarca his) re’sen soruşturulur ve 7406 s.K. değişikliğiyle "kadına karşı" işlenmesi de BTM yaralamada alt sınırı artıran nitelikli hal kapsamındadır!',
    baseExplanation: 'TCK m. 86/3 kapsamındaki nitelikli hallerde (örneğin eşe, boşandığı eşe, kardeşe veya silahla basit yaralamada) yaralama BTM ile giderilebilecek düzeyde olsa dahi ŞİKÂYET ARANMAZ (re’sen soruşturulur)!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak suça konu fiilin kadına karşı işlenmesi veya TCK m. 86/3’teki nitelikli hâllerde (üstsoya, altsoya, eşe, boşandığı eşe veya kardeşe karşı, beden/ruh bakımından kendisini savunamayacak kişiye karşı, kamu görevi nedeniyle, silahla veya canavarca hisle işlenmesi hâlinde) şikâyet aranmaksızın ceza yarı oranında (canavarca hisle işlenmesinde bir kat) artırılır',
      wrongPhrase: 'kasten yaralama fiili silahla veya eşe, üstsoya, altsoya ya da kardeşe karşı işlenmiş olsa dahi basit tıbbi müdahaleyle giderilebilecek ölçüde hafif ise soruşturulması yine mağdurun şikâyetine bağlıdır',
      correctPhrase: 'ancak suça konu fiilin kadına karşı işlenmesi veya TCK m. 86/3’teki nitelikli hâllerde (üstsoya, altsoya, eşe, boşandığı eşe veya kardeşe karşı, beden/ruh bakımından kendisini savunamayacak kişiye karşı, kamu görevi nedeniyle, silahla veya canavarca hisle işlenmesi hâlinde) şikâyet aranmaksızın ceza yarı oranında (canavarca hisle işlenmesinde bir kat) artırılır',
      explanation: 'TCK m. 86/3 açık hükmü uyarınca kasten yaralama basit tıbbi müdahaleyle (BTM) giderilebilecek ölçüde hafif olsa bile, m. 86/3’teki nitelikli hallerde (üstsoy/altsoy/eş/boşandığı eş/kardeşe karşı veya silahla vb.) ŞİKÂYET ARANMAKSIZIN re’sen soruşturulur!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üstsoya, altsoya, eşe, boşandığı eşe veya kardeşe karşı',
      wrongPhrase: 'yalnızca resmi nikahlı mevcut eşe karşı (boşandığı eş ve kardeş hariç olmak üzere)',
      correctPhrase: 'üstsoya, altsoya, eşe, boşandığı eşe veya kardeşe karşı',
      explanation: 'TCK m. 86/3-a (7331 s.K. değişikliğiyle "boşandığı eş" de eklenmiştir!) uyarınca nitelikli hal üstsoya, altsoya, eşe, BOŞANDIĞI EŞE veya KARDEŞE karşı işlenmesini kapsar!'
    }
  },
  {
    id: 'rule-tck-25',
    branch: 'TCK',
    subTopic: 'Hırsızlık, Yağma (Gasp), Dolandırıcılık ve Güveni Kötüye Kullanmada Etkin Pişmanlık (TCK m. 168) ve Şahsi Cezasızlık (TCK m. 167)',
    articleRef: 'TCK M. 167-168',
    trueStatement:
      'Yağma ve nitelikli yağma hariç malvarlığına karşı suçların; haklarında ayrılık kararı verilmemiş eşlerden birinin, üstsoy veya altsoyunun veya bu derecede kayın hısımlarından birinin ya da evlat edinen veya evlatlığın zararına olarak ya da aynı konutta beraber yaşayan kardeşlerden birinin zararına olarak işlenmesi hâlinde ilgili akraba hakkında cezaya hükmolunmaz (şahsi cezasızlık sebebi, TCK m. 167/1); hırsızlık, mala zarar verme, güveni kötüye kullanma, dolandırıcılık, hileli iflas, taksirli iflas ve yağma suçları tamamlandıktan sonra ve fakat bu nedenle hakkında kovuşturma başlamadan önce failin bizzat pişmanlık göstererek mağdurun uğradığı zararı aynen geri verme veya tazmin suretiyle tamamen gidermesi hâlinde verilecek cezanın üçte ikisine (yağmada yarısına) kadar, kovuşturma başladıktan sonra ve fakat hüküm verilmeden önce gidermesi hâlinde ise yarısına (yağmada üçte birine) kadar indirilir.',
    trueHighlight: ['Yağma ve nitelikli yağma hariç malvarlığına karşı suçların', 'aynı konutta beraber yaşayan kardeşlerden birinin zararına olarak işlenmesi hâlinde ilgili akraba hakkında cezaya hükmolunmaz', 'kovuşturma başlamadan önce failin bizzat pişmanlık göstererek mağdurun uğradığı zararı aynen geri verme veya tazmin suretiyle tamamen gidermesi hâlinde verilecek cezanın üçte ikisine (yağmada yarısına) kadar'],
    trueCorrectPhrase: 'TCK m. 167-168 altın kuralları: 1) YAĞMA (GASP) suçunda TCK m. 167 akrabalık şahsi cezasızlık/indirim sebebi UYGULANMAZ; ancak YAĞMA suçunda TCK m. 168 etkin pişmanlık indirimi (soruşturmada 1/2, kovuşturmada 1/3) UYGULANIR! 2) Kardeşler arasında TCK m. 167/1 şahsi cezasızlık için "aynı konutta beraber yaşama" şarttır (ayrı konutta yaşayan kardeşler, amca, dayı, hala, teyze, yeğen ve 2. derece kayın hısımlarında ise TCK m. 167/2 uyarınca şikâyet üzerine ceza 1/2 indirilir)!',
    baseExplanation: 'Ceza Özel Hukukunun en meşhur sınav tuzağı TCK m. 167 ve m. 168’in YAĞMA (GASP) suçu karşısındaki durumudur: Yağma suçunda TCK m. 167 (akrabalık şahsi cezasızlık sebebi) UYGULANMAZ; fakat TCK m. 168 (etkin pişmanlık) yağma suçunda UYGULANIR (1/2 ve 1/3 oranında)!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Yağma ve nitelikli yağma hariç malvarlığına karşı suçların; haklarında ayrılık kararı verilmemiş eşlerden birinin, üstsoy veya altsoyunun veya bu derecede kayın hısımlarından birinin ya da evlat edinen veya evlatlığın zararına olarak ya da aynı konutta beraber yaşayan kardeşlerden birinin zararına olarak işlenmesi hâlinde ilgili akraba hakkında cezaya hükmolunmaz (şahsi cezasızlık sebebi, TCK m. 167/1)',
      wrongPhrase: 'Yağma (gasp) suçu da dahil olmak üzere tüm malvarlığı suçlarında üstsoy, altsoy veya ayrı konutta yaşayan kardeşlerin zararına suç işlenmesi hâlinde şahsi cezasızlık sebebi uygulanır ve yağma suçunda ise etkin pişmanlık hükümleri hiçbir şekilde uygulanamaz',
      correctPhrase: 'Yağma ve nitelikli yağma hariç malvarlığına karşı suçların; haklarında ayrılık kararı verilmemiş eşlerden birinin, üstsoy veya altsoyunun veya bu derecede kayın hısımlarından birinin ya da evlat edinen veya evlatlığın zararına olarak ya da aynı konutta beraber yaşayan kardeşlerden birinin zararına olarak işlenmesi hâlinde ilgili akraba hakkında cezaya hükmolunmaz (şahsi cezasızlık sebebi, TCK m. 167/1)',
      explanation: 'TCK m. 167/1 uyarınca YAĞMA suçunda şahsi cezasızlık sebebi uygulanmaz (ve kardeşlerde şahsi cezasızlık için aynı konutta beraber yaşama şarttır); buna karşılık TCK m. 168/3 uyarınca yağma suçunda etkin pişmanlık (1/2 ve 1/3 indirim) uygulanır!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'kovuşturma başlamadan önce failin bizzat pişmanlık göstererek mağdurun uğradığı zararı aynen geri verme veya tazmin suretiyle tamamen gidermesi hâlinde verilecek cezanın üçte ikisine (yağmada yarısına) kadar, kovuşturma başladıktan sonra ve fakat hüküm verilmeden önce gidermesi hâlinde ise yarısına (yağmada üçte birine) kadar indirilir',
      wrongPhrase: 'hüküm Yargıtayca onanıp kesinleştikten sonra dahi zararın giderilmesi hâlinde ceza tamamen ortadan kalkar ve kısmi iade durumunda mağdurun rızası aranmaksızın indirim uygulanır',
      correctPhrase: 'kovuşturma başlamadan önce failin bizzat pişmanlık göstererek mağdurun uğradığı zararı aynen geri verme veya tazmin suretiyle tamamen gidermesi hâlinde verilecek cezanın üçte ikisine (yağmada yarısına) kadar, kovuşturma başladıktan sonra ve fakat hüküm verilmeden önce gidermesi hâlinde ise yarısına (yağmada üçte birine) kadar indirilir',
      explanation: 'TCK m. 168/1-2 ve m. 168/4 uyarınca etkin pişmanlık en geç hüküm verilmeden önce gösterilmelidir (cezayı ortadan kaldırmaz, 2/3 veya 1/2 oranına kadar indirir) ve kısmi geri verme veya tazminde etkin pişmanlık uygulanabilmesi için mağdurun RIZASI şarttır!'
    }
  },
  {
    id: 'rule-tck-26',
    branch: 'TCK',
    subTopic: 'Suç Üstlenme (TCK m. 270), İftira (TCK m. 267) ve Suçluyu Kayırma (TCK m. 283) Şahsi Cezasızlık Halleri',
    articleRef: 'TCK M. 267, 270 & 283',
    trueStatement:
      'Yetkili makamlara, gerçeğe aykırı olarak, suçu işlediğini veya suça katıldığını bildiren kimse suç üstlenme suçunu (TCK m. 270) işler, ancak bu suçun üstsoy, altsoy, eş veya kardeşi cezadan kurtarmak amacıyla işlenmesi hâlinde verilecek cezanın dörtte üçü indirilebileceği gibi tamamen de kaldırılabilir; buna karşılık bir kimseye işlemediğini bildiği hâlde soruşturma ve kovuşturma başlatılmasını ya da idari yaptırım uygulanmasını sağlamak için hukuka aykırı bir fiil isnat eden kişi iftira suçunu (TCK m. 267) işler; suç işleyen bir kişiye araştırma, yakalanma, tutuklanma veya hükmün infazından kurtulması için imkân sağlayan kimse ise suçluyu kayırma suçunu (TCK m. 283) işler ve bu suçun üstsoy, altsoy, eş, kardeş veya diğer suç ortağı tarafından işlenmesi hâlinde cezaya hükmolunmaz.',
    trueHighlight: ['suç üstlenme suçunu (TCK m. 270) işler, ancak bu suçun üstsoy, altsoy, eş veya kardeşi cezadan kurtarmak amacıyla işlenmesi hâlinde verilecek cezanın dörtte üçü indirilebileceği gibi tamamen de kaldırılabilir', 'suçluyu kayırma suçunu (TCK m. 283) işler ve bu suçun üstsoy, altsoy, eş, kardeş veya diğer suç ortağı tarafından işlenmesi hâlinde cezaya hükmolunmaz'],
    trueCorrectPhrase: 'Adliyeye karşı suçlarda akrabalık etkisi: 1) Suçluyu kayırma (TCK m. 283/3) ve suç delillerini yok etme/gizlemede (TCK m. 281/1 son cümle - kendi işlediği/iştirak ettiği suçta) üstsoy, altsoy, eş, kardeş (ve m. 283’te diğer suç ortağı) için mutlak ŞAHSİ CEZASIZLIK sebebi vardır; 2) Suç üstlenmede (TCK m. 270) ise üstsoy, altsoy, eş veya kardeşi kurtarma halinde cezada 3/4 indirim veya ceza vermeme takdiri vardır; 3) İftira suçunda (TCK m. 267) ise akrabayı kurtarmak için başkasına suç atılması cezasızlık sağlamaz!',
    baseExplanation: 'Adliyeye karşı suçlar (TCK m. 267, 270, 278, 281, 283) HMGS Ceza Özel sorularının favorisidir: Suçluyu kayırmada (m. 283/3) üstsoy, altsoy, eş, kardeş veya diğer suç ortağına ceza verilmez; suç üstlenmede (m. 270) ise 3/4 indirim veya ceza vermeme öngörülmüştür.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'suçluyu kayırma suçunu (TCK m. 283) işler ve bu suçun üstsoy, altsoy, eş, kardeş veya diğer suç ortağı tarafından işlenmesi hâlinde cezaya hükmolunmaz',
      wrongPhrase: 'suçluyu kayırma suçunun sanığın üstsoyu, altsoyu, eşi veya kardeşi tarafından işlenmesi hâlinde ceza yarı oranında artırılır; buna karşılık kardeşini kurtarmak için masum bir üçüncü kişiye iftira atan kişiye hiçbir ceza verilmez',
      correctPhrase: 'suçluyu kayırma suçunu (TCK m. 283) işler ve bu suçun üstsoy, altsoy, eş, kardeş veya diğer suç ortağı tarafından işlenmesi hâlinde cezaya hükmolunmaz',
      explanation: 'TCK m. 283/3 uyarınca suçluyu kayırma suçunun üstsoy, altsoy, eş, kardeş veya diğer suç ortağı tarafından işlenmesi hâlinde cezaya hükmolunmaz (şahsi cezasızlık sebebi); buna karşılık masum bir üçüncü kişiye iftira atılması halinde akrabalık cezasızlık sağlamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'buna karşılık bir kimseye işlemediğini bildiği hâlde soruşturma ve kovuşturma başlatılmasını ya da idari yaptırım uygulanmasını sağlamak için hukuka aykırı bir fiil isnat eden kişi iftira suçunu (TCK m. 267) işler',
      wrongPhrase: 'ancak disiplin soruşturması veya idari para cezası uygulanmasını sağlamak amacıyla gerçeğe aykırı fiil isnat edilmesi iftira suçunu oluşturmaz',
      correctPhrase: 'buna karşılık bir kimseye işlemediğini bildiği hâlde soruşturma ve kovuşturma başlatılmasını ya da idari yaptırım uygulanmasını sağlamak için hukuka aykırı bir fiil isnat eden kişi iftira suçunu (TCK m. 267) işler',
      explanation: 'TCK m. 267/1 açık hükmü uyarınca yalnızca adli soruşturma/kovuşturma değil, İDARİ YAPTIRIM uygulanmasını sağlamak amacıyla hukuka aykırı bir fiil isnat edilmesi de iftira suçunu oluşturur!'
    }
  }
];
