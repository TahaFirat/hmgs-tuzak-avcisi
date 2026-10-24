import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Kapsamlı Mevzuat Genişletme Paketi — Bölüm 5
 * Kapsam:
 * 1. Ticaret Hukuku - Ticari İşletme, Şirketler, Kıymetli Evrak (rule-ticaret-14 .. rule-ticaret-25) -> 12 Kural (36 Kart)
 * 2. İcra ve İflas Hukuku - İİK (rule-icra-17 .. rule-icra-27) -> 11 Kural (33 Kart)
 * 3. Sosyal Güvenlik, Vergi Ceza ve Baro Organları (rule-is-21, rule-vergi-13, rule-avukatlik-11) -> 3 Kural (9 Kart)
 * Toplam: 26 Kural x 3 Varyant = 78 Yeni Tam Özgün Kanun Kartı
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART5_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. TİCARET HUKUKU DERİNLİK KURALLARI (rule-ticaret-14 .. rule-ticaret-25)
  // =========================================================================
  {
    id: 'rule-ticaret-14',
    branch: 'Ticaret',
    subTopic: 'Ticari İşletmenin Devri: Yazılı Şekil, Ticaret Siciline Tescil ve İlan Kurucu Şartı',
    articleRef: 'TTK M. 11/3',
    trueStatement:
      'Ticari işletme, içerdiği malvarlığı unsurlarının devri için zorunlu tasarruf işlemlerinin ayrı ayrı yapılmasına gerek olmaksızın bir bütün hâlinde devredilebilir ve diğer hukuki işlemlere konu olabilir; aksi öngörülmemişse, devir sözleşmesinin duran malvarlığını, işletme değerini, kiracılık hakkını, ticaret unvanı ile diğer fikrî mülkiyet haklarını ve sürekli olarak işletmeye özgülenen malvarlığı unsurlarını içerdiği kabul olunur; bu devir sözleşmesiyle ticari işletmeyi bir bütün hâlinde konu alan diğer sözleşmeler yazılı olarak yapılır, ticaret siciline tescil ve ilan edilir.',
    trueHighlight: ['zorunlu tasarruf işlemlerinin ayrı ayrı yapılmasına gerek olmaksızın bir bütün hâlinde devredilebilir', 'kiracılık hakkını, ticaret unvanı ile diğer fikrî mülkiyet haklarını ve sürekli olarak işletmeye özgülenen malvarlığı unsurlarını içerdiği kabul olunur', 'yazılı olarak yapılır, ticaret siciline tescil ve ilan edilir'],
    trueCorrectPhrase: 'TTK m. 11/3 uyarınca ticari işletmenin bir bütün halinde devri: 1) Yazılı devir sözleşmesi + Ticaret siciline TESCİL VE İLAN (kurucu!), 2) Tek tek tasarruf işlemlerine (taşınmaz için tapuda ayrı tescile vb.) gerek olmaksızın KÜLLİ HALEFİYET prensibiyle bütün halinde geçer, 3) Aksi kararlaştırılmamışsa kiracılık hakkı (kiralayanın rızası aranmaksızın!) ve ticaret unvanı da devrin kapsamındadır!',
    baseExplanation: 'TTK m. 11/3 ticari işletmenin devrinde tescilin "kurucu" nitelikte olması, tek tek tasarruf işlemine gerek olmaması ve kiracılık hakkı ile ticaret unvanının aksi öngörülmedikçe devir kapsamına girmesi HMGS Ticaret Hukuku sorularının klasiğidir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu devir sözleşmesiyle ticari işletmeyi bir bütün hâlinde konu alan diğer sözleşmeler yazılı olarak yapılır, ticaret siciline tescil ve ilan edilir',
      wrongPhrase: 'ticari işletmenin devri sözleşmesi herhangi bir şekil şartına tabi olmayıp sözlü olarak dahi yapılabilir ve ticaret siciline tescil yalnızca bildirici niteliktedir',
      correctPhrase: 'bu devir sözleşmesiyle ticari işletmeyi bir bütün hâlinde konu alan diğer sözleşmeler yazılı olarak yapılır, ticaret siciline tescil ve ilan edilir',
      explanation: 'TTK m. 11/3 son cümle uyarınca ticari işletme devir sözleşmesi yazılı olarak yapılır ve ticaret siciline tescil ve ilan edilir (buradaki tescil kurucu niteliktedir)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aksi öngörülmemişse, devir sözleşmesinin duran malvarlığını, işletme değerini, kiracılık hakkını, ticaret unvanı ile diğer fikrî mülkiyet haklarını ve sürekli olarak işletmeye özgülenen malvarlığı unsurlarını içerdiği kabul olunur',
      wrongPhrase: 'ticaret unvanı ticari işletmeden ayrı olarak tek başına devredilebilir; buna karşılık ticari işletmenin devrinde ticaret unvanı hiçbir zaman işletmeyle birlikte devralana geçmez',
      correctPhrase: 'aksi öngörülmemişse, devir sözleşmesinin duran malvarlığını, işletme değerini, kiracılık hakkını, ticaret unvanı ile diğer fikrî mülkiyet haklarını ve sürekli olarak işletmeye özgülenen malvarlığı unsurlarını içerdiği kabul olunur',
      explanation: 'TTK m. 11/3 ve m. 49 uyarınca ticaret unvanı işletmeden ayrı olarak başkasına devredilemez; bir işletmenin devri ise aksi açıkça kabul edilmiş olmadıkça unvanın da devrini içerir!'
    }
  },
  {
    id: 'rule-ticaret-15',
    branch: 'Ticaret',
    subTopic: 'Ticari İş Karinesi, Ticari İşlerde Teselsül Karinesi ve Tacirin Ücret/Faiz İsteme Hakkı',
    articleRef: 'TTK M. 7, 19 & 20',
    trueStatement:
      'Bir tacirin borçlarının ticari olması asıldır; ancak gerçek kişi olan bir tacir, işlemi yaptığı anda bunun ticari işletmesiyle ilgili olmadığını diğer tarafa açıkça bildirdiği veya işin ticari sayılmasına durum elverişli olmadığı takdirde borç adi sayılır (tüzel kişi tacirlerin ise adi alanı olmayıp tüm işlemleri ticaridir); taraflardan yalnız biri için ticari iş niteliğinde olan sözleşmeler, Kanunda aksine hüküm bulunmadıkça diğer taraf için de ticari iş sayılır; iki veya daha fazla kişi, içlerinden yalnız biri veya hepsi için ticari niteliği haiz bir iş dolayısıyla diğer bir kimseye karşı birlikte borç altına girerse, kanunda veya sözleşmede aksi öngörülmemişse müteselsilen sorumlu olurlar; tacir olan veya olmayan bir kişiye, ticari işletmesiyle ilgili bir iş veya hizmet görmüş olan tacir, uygun bir ücret isteyebilir ve verdiği avanslar ile yaptığı giderler için ödeme tarihinden itibaren faize hak kazanır.',
    trueHighlight: ['ancak gerçek kişi olan bir tacir, işlemi yaptığı anda bunun ticari işletmesiyle ilgili olmadığını diğer tarafa açıkça bildirdiği veya işin ticari sayılmasına durum elverişli olmadığı takdirde borç adi sayılır', 'taraflardan yalnız biri için ticari iş niteliğinde olan sözleşmeler, Kanunda aksine hüküm bulunmadıkça diğer taraf için de ticari iş sayılır', 'kanunda veya sözleşmede aksi öngörülmemişse müteselsilen sorumlu olurlar'],
    trueCorrectPhrase: 'TTK m. 7, 19 ve 20 altın kuralları: 1) Gerçek kişi tacirin borcu istisnaen (açık bildirim veya durumun elverişsizliği ile) adi sayılabilir; TÜZEL KİŞİ TACİRİN ise adi sahası yoktur, her işi ticaridir! 2) Taraflardan biri için ticari olan SÖZLEŞME kanunda aksi yoksa diğer taraf için de ticaridir (haksız fiil/sebepsiz zenginleşmede bu yayılma kuralı uygulanmaz!), 3) Ticari borçlarda (ve ticari borca kefalette) asıl olan TESELSÜL KARİNESİDİR!',
    baseExplanation: 'TTK m. 19/1’deki istisnanın yalnız "gerçek kişi tacirler" için geçerli olması ve m. 19/2’deki yayılmanın yalnız "sözleşmeler" için geçerli olması (örneğin tüketici işlemleri TKHK gereği tüketici açısından ticari iş sayılmaz!) HMGS’nin en ince Ticaret Hukuku tuzaklarındandır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak gerçek kişi olan bir tacir, işlemi yaptığı anda bunun ticari işletmesiyle ilgili olmadığını diğer tarafa açıkça bildirdiği veya işin ticari sayılmasına durum elverişli olmadığı takdirde borç adi sayılır (tüzel kişi tacirlerin ise adi alanı olmayıp tüm işlemleri ticaridir)',
      wrongPhrase: 'hem gerçek kişi tacirler hem de anonim ve limited şirket gibi tüzel kişi tacirler işlemi yaptıkları sırada bunun ticari işletmeleriyle ilgili olmadığını karşı tarafa bildirerek borcun adi borç sayılmasını sağlayabilirler',
      correctPhrase: 'ancak gerçek kişi olan bir tacir, işlemi yaptığı anda bunun ticari işletmesiyle ilgili olmadığını diğer tarafa açıkça bildirdiği veya işin ticari sayılmasına durum elverişli olmadığı takdirde borç adi sayılır (tüzel kişi tacirlerin ise adi alanı olmayıp tüm işlemleri ticaridir)',
      explanation: 'TTK m. 19/1 ikinci cümle açıkça "Ancak, gerçek kişi olan bir tacir..." diyerek adi iş istisnasını yalnız gerçek kişi tacirlere tanımıştır; ticaret şirketleri gibi tüzel kişi tacirlerin adi alanı yoktur, tüm işlemleri mutlak olarak ticaridir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'iki veya daha fazla kişi, içlerinden yalnız biri veya hepsi için ticari niteliği haiz bir iş dolayısıyla diğer bir kimseye karşı birlikte borç altına girerse, kanunda veya sözleşmede aksi öngörülmemişse müteselsilen sorumlu olurlar',
      wrongPhrase: 'ticari bir iş dolayısıyla birlikte borç altına giren kişilerin müteselsilen sorumlu tutulabilmeleri için sözleşmede açıkça müteselsil borçluluk kaydının yer alması şarttır; aksi halde kısmi borçluluk geçerlidir',
      correctPhrase: 'iki veya daha fazla kişi, içlerinden yalnız biri veya hepsi için ticari niteliği haiz bir iş dolayısıyla diğer bir kimseye karşı birlikte borç altına girerse, kanunda veya sözleşmede aksi öngörülmemişse müteselsilen sorumlu olurlar',
      explanation: 'Adi işlerde (TBK m. 162) müteselsil borçluluk için açık irade beyanı veya kanun hükmü gerekirken, TTK m. 7 uyarınca ticari işlerde sözleşmede aksi öngörülmemişse kanuni TESELSÜL KARİNESİ geçerlidir!'
    }
  },
  {
    id: 'rule-ticaret-16',
    branch: 'Ticaret',
    subTopic: 'Ticari Satış ve Mal Değişimlerinde Ayıp İhbar Süreleri (Açık Ayıp: 2 Gün, İnceleme İle Anlaşılan Ayıp: 8 Gün)',
    articleRef: 'TTK M. 23/1-c',
    trueStatement:
      'Tacirler arasındaki ticari satış ve mal değişimlerinde; malın ayıplı olduğu teslim sırasında açıkça belli ise alıcı iki gün içinde durumu satıcıya ihbar etmelidir; açıkça belli değilse alıcı malı teslim aldıktan sonra sekiz gün içinde incelemek veya inceletmekle ve bu inceleme sonucunda malın ayıplı olduğu ortaya çıkarsa, haklarını korumak için durumu bu süre (sekiz gün) içinde satıcıya ihbarla yükümlüdür; diğer durumlarda (gizli ayıplarda) Türk Borçlar Kanununun 223 üncü maddesinin ikinci fıkrası uygulanır (ayıp sonradan anlaşılırsa hemen bildirilmelidir).',
    trueHighlight: ['malın ayıplı olduğu teslim sırasında açıkça belli ise alıcı iki gün içinde durumu satıcıya ihbar etmelidir', 'açıkça belli değilse alıcı malı teslim aldıktan sonra sekiz gün içinde incelemek veya inceletmekle ve bu inceleme sonucunda malın ayıplı olduğu ortaya çıkarsa, haklarını korumak için durumu bu süre (sekiz gün) içinde satıcıya ihbarla yükümlüdür'],
    trueCorrectPhrase: 'TTK m. 23/1-c ticari satışlarda ayıp ihbar süreleri: 1) Her iki taraf da TACİR olmalı, 2) Teslimde açıkça belli olan (AÇIK) ayıpta: 2 GÜN içinde ihbar, 3) Açıkça belli olmayan (muayene ile anlaşılabilecek) ayıpta: Teslimden itibaren 8 GÜN içinde inceleme ve ihbar, 4) Muayeneyle dahi anlaşılamayan GİZLİ ayıpta: Ortaya çıkınca DERHAL (hemen) ihbar (TBK m. 223/2)!',
    baseExplanation: 'TTK m. 23/1-c’deki "Açık ayıpta 2 gün - Adi muayene ayıbında 8 gün" kuralı yalnız her iki tarafın da tacir olduğu ticari satış/mal değişimlerinde uygulanır; adi satışlarda ise TBK m. 223 ("uygun süre içinde") geçerlidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'malın ayıplı olduğu teslim sırasında açıkça belli ise alıcı iki gün içinde durumu satıcıya ihbar etmelidir; açıkça belli değilse alıcı malı teslim aldıktan sonra sekiz gün içinde incelemek veya inceletmekle ve bu inceleme sonucunda malın ayıplı olduğu ortaya çıkarsa, haklarını korumak için durumu bu süre (sekiz gün) içinde satıcıya ihbarla yükümlüdür',
      wrongPhrase: 'malın ayıplı olduğu teslim sırasında açıkça belli ise alıcı sekiz gün içinde, açıkça belli değilse otuz gün içinde inceleyerek satıcıya ihbar etmelidir',
      correctPhrase: 'malın ayıplı olduğu teslim sırasında açıkça belli ise alıcı iki gün içinde durumu satıcıya ihbar etmelidir; açıkça belli değilse alıcı malı teslim aldıktan sonra sekiz gün içinde incelemek veya inceletmekle ve bu inceleme sonucunda malın ayıplı olduğu ortaya çıkarsa, haklarını korumak için durumu bu süre (sekiz gün) içinde satıcıya ihbarla yükümlüdür',
      explanation: 'TTK m. 23/1-c uyarınca ticari satışlarda teslimde açıkça belli olan ayıplarda ihbar süresi 2 gün, açıkça belli olmayıp incelemeyle anlaşılabilecek ayıplarda inceleme ve ihbar süresi 8 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Tacirler arasındaki ticari satış ve mal değişimlerinde',
      wrongPhrase: 'Yalnızca bir tarafın tacir, diğer tarafın ise tüketici olduğu tüm perakende satış sözleşmelerinde de',
      correctPhrase: 'Tacirler arasındaki ticari satış ve mal değişimlerinde',
      explanation: 'TTK m. 23/1 açık hükmü uyarınca 2 ve 8 günlük sıkı ayıp ihbar süreleri (ve 8 günlük fatura itiraz karinesi) yalnız "tacirler arasındaki" ticari satış ve mal değişimlerinde uygulanır; tüketicilere karşı uygulanamaz!'
    }
  },
  {
    id: 'rule-ticaret-17',
    branch: 'Ticaret',
    subTopic: 'Haksız Rekabet Davaları ve Zamanaşımı Süresi (1 Yıl ve 3 Yıl)',
    articleRef: 'TTK M. 56 & M. 60',
    trueStatement:
      'Haksız rekabet sebebiyle müşterileri, kredisi, mesleki itibarı, ticari faaliyetleri veya diğer ekonomik menfaatleri zarar gören veya böyle bir tehlikeyle karşılaşabilecek olan kimse; fiilin haksız olup olmadığının tespitini, haksız rekabetin men’ini, haksız rekabetin sonucu olan maddi durumun ortadan kaldırılmasını, kusur varsa zararın ve manevi zararın tazminini isteyebilir (ancak mesleki ve ekonomik birlikler ile tüketici örgütleri tazminat davası açamazlar); bu davalar, davaya hakkı olan tarafın bu hakların doğumunu öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar (ancak haksız rekabet fiili aynı zamanda Türk Ceza Kanunu gereğince daha uzun dava zamanaşımı süresine tabi bir cezayı gerektiren bir fiil niteliğinde ise bu süre hukuk davaları için de geçerlidir).',
    trueHighlight: ['kusur varsa zararın ve manevi zararın tazminini isteyebilir (ancak mesleki ve ekonomik birlikler ile tüketici örgütleri tazminat davası açamazlar)', 'hakların doğumunu öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'TTK m. 56 ve m. 60 Haksız Rekabet Şifresi: 1) Tespit, men ve eski hale iade davaları için KUSUR ŞART DEĞİLDİR; maddi ve manevi tazminat davası için ise KUSUR ŞARTTIR, 2) Ticaret/sanayi odaları, meslek birlikleri ve tüketici örgütleri tespit, men ve eski hale iade davası açabilir ama MADDİ/MANEVİ TAZMİNAT DAVASI AÇAMAZ (TTK m. 56/3!), 3) Zamanaşımı: Öğrenmeden itibaren 1 YIL, her halde 3 YIL (genel haksız fiildeki 2-10 yıldan farklıdır!)',
    baseExplanation: 'Haksız rekabette zamanaşımının TBK m. 72’deki 2-10 yıl değil, TTK m. 60 uyarınca "1 yıl ve 3 yıl" olması ve meslek odaları/tüketici örgütlerinin tazminat davası açamaması HMGS’de en çok sorulan Ticaret Hukuku kurallarındandır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu davalar, davaya hakkı olan tarafın bu hakların doğumunu öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'haksız rekabetten doğan hukuk davaları öğrenmeden itibaren iki yıl ve her hâlde fiilin işlendiği tarihten itibaren on yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'bu davalar, davaya hakkı olan tarafın bu hakların doğumunu öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar',
      explanation: '2 yıl ve 10 yıl genel haksız fiil zamanaşımıdır (TBK m. 72); TTK m. 60 uyarınca haksız rekabet davalarında özel zamanaşımı süresi öğrenmeden itibaren 1 YIL ve her halde doğumundan itibaren 3 YILDIR!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kusur varsa zararın ve manevi zararın tazminini isteyebilir (ancak mesleki ve ekonomik birlikler ile tüketici örgütleri tazminat davası açamazlar)',
      wrongPhrase: 'tespit ve men davası açılabilmesi için de failin ağır kusurlu olması şarttır; ayrıca tüketici örgütleri ile ticaret odaları kendi adlarına maddi ve manevi tazminat davası da açabilirler',
      correctPhrase: 'kusur varsa zararın ve manevi zararın tazminini isteyebilir (ancak mesleki ve ekonomik birlikler ile tüketici örgütleri tazminat davası açamazlar)',
      explanation: 'TTK m. 56/1 ve m. 56/3 uyarınca tespit, men ve eski hale iade davalarında kusur aranmaz (kusur yalnız tazminat davalarında aranır) ve ekonomik/mesleki birlikler ile tüketici örgütleri tazminat davası (m. 56/1-d ve e) açamazlar!'
    }
  },
  {
    id: 'rule-ticaret-18',
    branch: 'Ticaret',
    subTopic: 'Acentelikte Tekel (İnhisar) Hakkı Karinesi ve Denkleştirme (Portföy) Tazminatı Süresi (1 Yıl Hak Düşürücü Süre)',
    articleRef: 'TTK M. 104 & M. 122',
    trueStatement:
      'Yazılı olarak aksi kararlaştırılmadıkça, müvekkil aynı zamanda ve aynı yer veya bölge içinde aynı ticaret dalı ile ilgili olarak birden fazla acente atayamayacağı gibi, acente de aynı yer veya bölgede, birbirleriyle rekabette bulunan birden çok ticari işletme hesabına aracılık yapamaz (inhisar/tekel hakkı karinesi); sözleşme ilişkisinin sona ermesinden sonra acente, müvekkile kazandırdığı yeni müşteriler sayesinde müvekkilin önemli menfaatler elde etmeye devam etmesi ve hakkaniyetin gerektirmesi hâlinde uygun bir denkleştirme (portföy) tazminatı isteyebilir; bu tazminat acentenin son beş yıllık faaliyet süresindeki yıllık ortalama ücret tutarını aşamaz; denkleştirme isteminden önceden vazgeçilemez ve sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmesi gerekir.',
    trueHighlight: ['Yazılı olarak aksi kararlaştırılmadıkça, müvekkil aynı zamanda ve aynı yer veya bölge içinde aynı ticaret dalı ile ilgili olarak birden fazla acente atayamayacağı gibi', 'bu tazminat acentenin son beş yıllık faaliyet süresindeki yıllık ortalama ücret tutarını aşamaz; denkleştirme isteminden önceden vazgeçilemez ve sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmesi gerekir'],
    trueCorrectPhrase: 'TTK m. 104 ve m. 122 Acentelik Şifresi: 1) Tekel (inhisar) hakkının kaldırılması YAZILI ŞEKLE tabidir (yazılı anlaşma yoksa tekel hakkı asıldır!), 2) Rekabet yasağı anlaşması (TTK m. 123) yazılı şekle tabidir ve sözleşme bitiminden itibaren en çok 2 YIL için yapılabilir, 3) Denkleştirme (portföy) tazminatı üst sınırı son 5 yılın yıllık ortalamasıdır, önceden feragat edilemez ve sözleşmenin bitiminden itibaren 1 YIL içinde talep edilmelidir!',
    baseExplanation: 'Acentelikte "tekel hakkının yazılı şekille kaldırılabilmesi" (m. 104), "denkleştirme isteminin 1 yıl içinde ileri sürülmesi ve son 5 yıllık ortalama sınırı" (m. 122) ve "rekabet yasağının en çok 2 yıl olabilmesi" (m. 123) Ticari İşletme Hukukunun en sık sorulan kurallarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu tazminat acentenin son beş yıllık faaliyet süresindeki yıllık ortalama ücret tutarını aşamaz; denkleştirme isteminden önceden vazgeçilemez ve sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmesi gerekir',
      wrongPhrase: 'denkleştirme tazminatı isteminden acentelik sözleşmesi yapılırken önceden feragat edilebilir ve bu istemin sözleşmenin sona ermesinden itibaren beş yıl içinde ileri sürülmesi yeterlidir',
      correctPhrase: 'bu tazminat acentenin son beş yıllık faaliyet süresindeki yıllık ortalama ücret tutarını aşamaz; denkleştirme isteminden önceden vazgeçilemez ve sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmesi gerekir',
      explanation: 'TTK m. 122/4 uyarınca denkleştirme (portföy) tazminatı isteminden önceden vazgeçilemez ve bu hakkın sözleşme ilişkisinin sona ermesinden itibaren 1 YIL içinde ileri sürülmesi gerekir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Yazılı olarak aksi kararlaştırılmadıkça, müvekkil aynı zamanda ve aynı yer veya bölge içinde aynı ticaret dalı ile ilgili olarak birden fazla acente atayamayacağı gibi, acente de aynı yer veya bölgede, birbirleriyle rekabette bulunan birden çok ticari işletme hesabına aracılık yapamaz (inhisar/tekel hakkı karinesi)',
      wrongPhrase: 'Acentenin aynı yer veya bölgede tekel (inhisar) hakkına sahip olabilmesi için bunun sözleşmede açıkça ve noter huzurunda kararlaştırılmış olması şarttır; aksi halde müvekkil aynı bölgeye istediği kadar acente atayabilir',
      correctPhrase: 'Yazılı olarak aksi kararlaştırılmadıkça, müvekkil aynı zamanda ve aynı yer veya bölge içinde aynı ticaret dalı ile ilgili olarak birden fazla acente atayamayacağı gibi, acente de aynı yer veya bölgede, birbirleriyle rekabette bulunan birden çok ticari işletme hesabına aracılık yapamaz (inhisar/tekel hakkı karinesi)',
      explanation: 'TTK m. 104 uyarınca acentelikte tekel (inhisar) hakkı kanuni karinedir; tekel hakkının varlığı için değil, tam tersine KALDIRILMASI için yazılı sözleşme şarttır!'
    }
  },
  {
    id: 'rule-ticaret-19',
    branch: 'Ticaret',
    subTopic: 'Anonim ve Limited Şirketlerde Güncel Asgari Sermaye Tutarları (A.Ş.: 250.000 TL / 500.000 TL; Ltd.: 50.000 TL) ve Nakdi Payların Ödenmesi',
    articleRef: 'TTK M. 332, 344, 580 & 585',
    trueStatement:
      'Güncel mevzuat (7887 s. Cumhurbaşkanı Kararı ve 7511 s.K.) uyarınca anonim şirketlerde tamamı esas sözleşmede taahhüt edilmiş bulunan sermayeyi ifade eden esas sermaye ikiyüzelli bin Türk Lirasından ve kayıtlı sermaye sistemini kabul etmiş bulunan halka açık olmayan anonim şirketlerde başlangıç sermayesi beşyüz bin Türk Lirasından aşağı olamaz; limited şirketin esas sermayesi ise en az elli bin Türk Lirasıdır; anonim şirketlerde nakden taahhüt edilen payların itibarî değerlerinin en az yüzde yirmibeşi (%25’i) tescilden önce, gerisi de şirketin tescilini izleyen yirmidört ay içinde ödenir; limited şirketlerde ise nakden taahhüt edilen paylar için tescilden önce yüzde yirmibeş ön ödeme şartı aranmaksızın tamamı şirketin tescilini izleyen yirmidört ay içinde ödenebilir.',
    trueHighlight: ['esas sermaye ikiyüzelli bin Türk Lirasından ve kayıtlı sermaye sistemini kabul etmiş bulunan halka açık olmayan anonim şirketlerde başlangıç sermayesi beşyüz bin Türk Lirasından aşağı olamaz; limited şirketin esas sermayesi ise en az elli bin Türk Lirasıdır', 'anonim şirketlerde nakden taahhüt edilen payların itibarî değerlerinin en az yüzde yirmibeşi (%25’i) tescilden önce, gerisi de şirketin tescilini izleyen yirmidört ay içinde ödenir; limited şirketlerde ise nakden taahhüt edilen paylar için tescilden önce yüzde yirmibeş ön ödeme şartı aranmaksızın'],
    trueCorrectPhrase: 'Güncel TTK m. 332 ve m. 580 Asgari Sermaye Tablosu (2024’ten itibaren 5 kat artırıldı!): 1) Anonim Şirket Esas Sermaye: En az 250.000 TL (eski 50.000 TL!), 2) Halka Açık Olmayan A.Ş. Kayıtlı Sermaye Başlangıç Sermayesi: En az 500.000 TL (eski 100.000 TL!), 3) Limited Şirket Esas Sermaye: En az 50.000 TL (eski 10.000 TL!; ayrıca limited şirket kayıtlı sermaye sistemini kabul EDEMEZ!), 4) A.Ş.’de nakdi sermayenin en az %25’i tescilden önce ödenmek zorundadır; Limited şirkette ise (7099 s.K. ile) tescilden önce %25 ödeme zorunluluğu KALDIRILMIŞTIR!',
    baseExplanation: '2024 yılında yürürlüğe giren yeni asgari sermaye tutarları (A.Ş. 250.000 / 500.000 TL; Ltd. 50.000 TL) ve limited şirketlerde tescil öncesi %25 nakdi sermaye blokajı şartının bulunmaması HMGS Şirketler Hukukunun en sıcak güncel bilgisidir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'anonim şirketlerde tamamı esas sözleşmede taahhüt edilmiş bulunan sermayeyi ifade eden esas sermaye ikiyüzelli bin Türk Lirasından ve kayıtlı sermaye sistemini kabul etmiş bulunan halka açık olmayan anonim şirketlerde başlangıç sermayesi beşyüz bin Türk Lirasından aşağı olamaz; limited şirketin esas sermayesi ise en az elli bin Türk Lirasıdır',
      wrongPhrase: 'anonim şirketlerde esas sermaye elli bin Türk Lirasından, kayıtlı sermaye sisteminde başlangıç sermayesi yüz bin Türk Lirasından, limited şirketin esas sermayesi ise on bin Türk Lirasından aşağı olamaz ve limited şirketler de kayıtlı sermaye sistemini kabul edebilir',
      correctPhrase: 'anonim şirketlerde tamamı esas sözleşmede taahhüt edilmiş bulunan sermayeyi ifade eden esas sermaye ikiyüzelli bin Türk Lirasından ve kayıtlı sermaye sistemini kabul etmiş bulunan halka açık olmayan anonim şirketlerde başlangıç sermayesi beşyüz bin Türk Lirasından aşağı olamaz; limited şirketin esas sermayesi ise en az elli bin Türk Lirasıdır',
      explanation: '7887 s. CB Kararı ve 7511 s.K. ile asgari sermaye tutarları A.Ş. esas sermayede 250.000 TL’ye, kayıtlı sermayede 500.000 TL’ye, limited şirkette ise 50.000 TL’ye yükseltilmiştir; ayrıca limited şirketler kayıtlı sermaye sistemini kabul edemezler!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'limited şirketlerde ise nakden taahhüt edilen paylar için tescilden önce yüzde yirmibeş ön ödeme şartı aranmaksızın tamamı şirketin tescilini izleyen yirmidört ay içinde ödenebilir',
      wrongPhrase: 'limited şirketlerde nakden taahhüt edilen sermayenin tamamının şirketin ticaret siciline tescilinden önce banka hesabına peşin olarak yatırılması zorunludur',
      correctPhrase: 'limited şirketlerde ise nakden taahhüt edilen paylar için tescilden önce yüzde yirmibeş ön ödeme şartı aranmaksızın tamamı şirketin tescilini izleyen yirmidört ay içinde ödenebilir',
      explanation: 'TTK m. 585 (7099 s.K. değişikliği) uyarınca limited şirketlerde nakden taahhüt edilen payların tescilden önce %25’inin ödenmesi zorunluluğu kaldırılmış olup şirketin tescilini izleyen 24 ay içinde ödenebilir!'
    }
  },
  {
    id: 'rule-ticaret-20',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirket Yönetim Kurulu Üyelerinin Görev Süresi (En Çok 3 Yıl) ve Üyeliğin Boşalmasında Kooptasyon (Geçici Seçim)',
    articleRef: 'TTK M. 359, 362 & 363',
    trueStatement:
      'Anonim şirketin, esas sözleşmeyle atanmış veya genel kurul tarafından seçilmiş, bir veya daha fazla kişiden oluşan bir yönetim kurulu bulunur; yönetim kurulu üyelerinin pay sahibi olması zorunlu değildir ve tüzel kişiler de yönetim kurulu üyesi seçilebilir; yönetim kurulu üyeleri en çok üç yıl süreyle görev yapmak üzere seçilirler ve esas sözleşmede aksine hüküm yoksa aynı kişi yeniden seçilebilir; herhangi bir sebeple bir üyelik boşalırsa, yönetim kurulu, kanuni şartları haiz birini, geçici olarak yönetim kurulu üyeliğine seçip ilk genel kurulun onayına sunar (kooptasyon).',
    trueHighlight: ['yönetim kurulu üyelerinin pay sahibi olması zorunlu değildir ve tüzel kişiler de yönetim kurulu üyesi seçilebilir; yönetim kurulu üyeleri en çok üç yıl süreyle görev yapmak üzere seçilirler', 'herhangi bir sebeple bir üyelik boşalırsa, yönetim kurulu, kanuni şartları haiz birini, geçici olarak yönetim kurulu üyeliğine seçip ilk genel kurulun onayına sunar (kooptasyon)'],
    trueCorrectPhrase: 'TTK m. 359-363 A.Ş. Yönetim Kurulu altın kuralları: 1) En az 1 kişiden oluşur, pay sahibi olma şartı YOKTUR, tüzel kişiler de üye seçilebilir, 2) Görev süresi EN ÇOK 3 YILDIR (esas sözleşmede aksi yoksa tekrar seçilebilir; 7511 s.K. ile YK başkan ve başkanvekilinin her yıl seçilmesi şartı kaldırılıp görev süresince seçilebilmesi sağlanmıştır!), 3) Üyelik boşalırsa YK geçici üye seçip ilk genel kurulun onayına sunar (kooptasyon)!',
    baseExplanation: 'TTK m. 359-363’te yönetim kurulu üyelerinin pay sahibi olma şartının bulunmaması, görev süresinin en çok 3 yıl olması ve 7511 s.K. (2024) değişikliği ile YK başkan/başkanvekilinin de YK görev süresine paralel olarak (her yıl şartı olmaksızın) seçilebilmesi önemli sınav detaylarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yönetim kurulu üyelerinin pay sahibi olması zorunlu değildir ve tüzel kişiler de yönetim kurulu üyesi seçilebilir; yönetim kurulu üyeleri en çok üç yıl süreyle görev yapmak üzere seçilirler ve esas sözleşmede aksine hüküm yoksa aynı kişi yeniden seçilebilir',
      wrongPhrase: 'yönetim kurulu üyelerinin şirket pay sahibi gerçek kişiler arasından seçilmesi zorunlu olup tüzel kişiler üye seçilemez; yönetim kurulu üyeleri en çok beş yıl süreyle seçilir ve süresi biten üye yeniden seçilemez',
      correctPhrase: 'yönetim kurulu üyelerinin pay sahibi olması zorunlu değildir ve tüzel kişiler de yönetim kurulu üyesi seçilebilir; yönetim kurulu üyeleri en çok üç yıl süreyle görev yapmak üzere seçilirler ve esas sözleşmede aksine hüküm yoksa aynı kişi yeniden seçilebilir',
      explanation: 'TTK m. 359 ve m. 362 uyarınca 6102 sayılı TTK’da yönetim kurulu üyelerinin pay sahibi olması şartı kaldırılmıştır, tüzel kişiler üye seçilebilir ve görev süresi 5 yıl değil en çok 3 yıldır (aksi esas sözleşmede yazılı değilse tekrar seçilebilir)!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'herhangi bir sebeple bir üyelik boşalırsa, yönetim kurulu, kanuni şartları haiz birini, geçici olarak yönetim kurulu üyeliğine seçip ilk genel kurulun onayına sunar (kooptasyon)',
      wrongPhrase: 'herhangi bir sebeple bir yönetim kurulu üyeliği boşaldığında yönetim kurulu geçici üye seçemez, boşalan üyeliğe yalnızca şirket denetçisi veya asliye ticaret mahkemesi atama yapabilir',
      correctPhrase: 'herhangi bir sebeple bir üyelik boşalırsa, yönetim kurulu, kanuni şartları haiz birini, geçici olarak yönetim kurulu üyeliğine seçip ilk genel kurulun onayına sunar (kooptasyon)',
      explanation: 'TTK m. 363/1 uyarınca iflas dışında herhangi bir sebeple bir üyelik boşalırsa (ve YK toplantı nisabını kaybetmemişse), yönetim kurulu kanuni şartları haiz birini geçici olarak YK üyeliğine seçip ilk genel kurulun onayına sunar (kooptasyon)!'
    }
  },
  {
    id: 'rule-ticaret-21',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirket Genel Kurul Kararlarının İptali Davası (3 Ay Hak Düşürücü Süre) ve Butlan Halleri',
    articleRef: 'TTK M. 445-447',
    trueStatement:
      'Kanun veya esas sözleşme hükümlerine ve özellikle dürüstlük kuralına aykırı olan anonim şirket genel kurul kararları aleyhine, karar tarihinden itibaren üç ay içinde, şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir; toplantıda hazır bulunup da karara olumsuz oy veren ve bu muhalefetini tutanağa geçirten pay sahipleri (çağrının usulüne göre yapılmadığını, gündemin gereği gibi ilan edilmediğini, katılmaya yetkili olmayanların katıldığını iddia eden pay sahipleri için toplantıda hazır bulunma/muhalefet şartı aranmaz) ile yönetim kurulu ve kararların icrası kişisel sorumluluğuna sebep olacaksa yönetim kurulu üyelerinden her biri iptal davası açabilir; pay sahibinin genel kurula katılma, asgari oy, dava ve kanundan kaynaklanan vazgeçilemez nitelikteki haklarını sınırlandıran veya anonim şirketin temel yapısını bozan ya da sermayenin korunması hükümlerine aykırı olan genel kurul kararları ise batıldır (kesin hükümsüzdür ve süreye bağlı olmaksızın tespit ettirilebilir).',
    trueHighlight: ['karar tarihinden itibaren üç ay içinde, şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir', 'toplantıda hazır bulunup da karara olumsuz oy veren ve bu muhalefetini tutanağa geçirten pay sahipleri', 'anonim şirketin temel yapısını bozan ya da sermayenin korunması hükümlerine aykırı olan genel kurul kararları ise batıldır'],
    trueCorrectPhrase: 'TTK m. 445-447 Genel Kurul Kararlarının Sakatlığı Şifresi: 1) İptal davası süresi: Karar tarihinden itibaren 3 AY (hak düşürücü süre; derneklerdeki 1 ay-3 ay ve kooperatiflerdeki 1 ay ile karıştırmayın!), 2) Toplantıya katılan pay sahibinin iptal davası açabilmesi için OLUMSUZ OY + MUHALEFET ŞERHİ şarttır (ancak yönetim kurulu tüzel kişiliği ve kişisel sorumluluğu doğacak YK üyesi için muhalefet şerhi aranmaz!), 3) Vazgeçilemez hakları kısıtlayan, şirketin temel yapısını bozan veya sermayenin korunması ilkesini ihlal eden kararlar ise iptale tabi değil, BATILDIR (3 aylık süreye tabi değildir)!',
    baseExplanation: 'TTK m. 445 (3 aylık iptal süresi), m. 446 (davacılar) ve m. 447 (butlan sebepleri: vazgeçilemez hakların kısıtlanması, temel yapının bozulması, sermayenin korunmasına aykırılık) HMGS Şirketler Hukuku sorularının kalbidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'karar tarihinden itibaren üç ay içinde, şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir',
      wrongPhrase: 'kararın Türkiye Ticaret Sicili Gazetesinde ilanından itibaren bir ay içinde sulh hukuk mahkemesinde iptal davası açılabilir',
      correctPhrase: 'karar tarihinden itibaren üç ay içinde, şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir',
      explanation: 'TTK m. 445 uyarınca anonim (ve limited) şirket genel kurul kararlarına karşı iptal davası açma süresi ilandan değil KARAR TARİHİNDEN itibaren 3 aydır ve görevli mahkeme asliye ticaret mahkemesidir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'pay sahibinin genel kurula katılma, asgari oy, dava ve kanundan kaynaklanan vazgeçilemez nitelikteki haklarını sınırlandıran veya anonim şirketin temel yapısını bozan ya da sermayenin korunması hükümlerine aykırı olan genel kurul kararları ise batıldır (kesin hükümsüzdür ve süreye bağlı olmaksızın tespit ettirilebilir)',
      wrongPhrase: 'anonim şirketin temel yapısını bozan ve sermayenin korunması hükümlerine aykırı olan genel kurul kararları da batıl olmayıp yalnızca üç ay içinde iptal davasına konu edilebilir; üç ay geçince geçerli hale gelir',
      correctPhrase: 'pay sahibinin genel kurula katılma, asgari oy, dava ve kanundan kaynaklanan vazgeçilemez nitelikteki haklarını sınırlandıran veya anonim şirketin temel yapısını bozan ya da sermayenin korunması hükümlerine aykırı olan genel kurul kararları ise batıldır (kesin hükümsüzdür ve süreye bağlı olmaksızın tespit ettirilebilir)',
      explanation: 'TTK m. 447 uyarınca şirketin temel yapısını bozan, sermayenin korunması hükümlerine aykırı olan veya pay sahibinin vazgeçilemez haklarını sınırlandıran genel kurul kararları iptale tabi değil, BATILDIR (kesin hükümsüzdür) ve 3 aylık sürenin geçmesiyle geçerli hale gelmez!'
    }
  },
  {
    id: 'rule-ticaret-22',
    branch: 'Ticaret',
    subTopic: 'Poliçe ve Bonoda Zorunlu Şekil Şartları ile Alternatif Zorunlu Unsurlar (Düzenleme Yeri, Ödeme Yeri, Vade)',
    articleRef: 'TTK M. 671, 672, 776 & 777',
    trueStatement:
      'Poliçede ve bonoda; senet metninde "poliçe" (veya "bono" / "emre yazılı senet") kelimesi, kayıtsız ve şartsız belirli bir bedeli ödeme vaadi/havalesi, lehtarın (kime veya kimin emrine ödenecekse onun) adı, düzenlenme tarihi ve düzenleyenin imzası zorunlu unsurlardır; senedin alternatif zorunlu unsurlarında ise: vade gösterilmemişse senet görüldüğünde ödenmesi şart olan bir senet sayılır; ayrıca gösterilmemişse poliçede muhatabın, bonoda ise düzenlenme yeri senedin ödeme yeri (ve aynı zamanda düzenleyenin yerleşim yeri) sayılır; düzenlenme yeri gösterilmemiş olan poliçe veya bono ise düzenleyenin adının yanında yazılı olan yerde düzenlenmiş sayılır (düzenleyenin adının yanında da yer yazılı değilse senet kambiyo senedi niteliğini kazanmaz!).',
    trueHighlight: ['vade gösterilmemişse senet görüldüğünde ödenmesi şart olan bir senet sayılır', 'düzenlenme yeri gösterilmemiş olan poliçe veya bono ise düzenleyenin adının yanında yazılı olan yerde düzenlenmiş sayılır (düzenleyenin adının yanında da yer yazılı değilse senet kambiyo senedi niteliğini kazanmaz!)'],
    trueCorrectPhrase: 'TTK m. 671-672 ve m. 776-777 Kambiyo Şekil Şartları Şifresi: 1) VADE aslında zorunlu unsur DEĞİLDİR (ihtiyari unsurdur; yazılmazsa senet geçersiz olmaz, "görüldüğünde ödenecek" sayılır!), 2) DÜZENLENME TARİHİ ve LEHTARIN ADI (poliçe ve bonoda; çekte ise lehtar şart değildir, çek hamiline düzenlenebilir!) mutlak zorunlu unsurdur, alternatifi yoktur, 3) Düzenlenme yeri yazılmamışsa düzenleyenin adının yanındaki yer esas alınır; ödeme yeri yazılmamışsa poliçede muhatabın adının yanındaki yer, bonoda ise düzenlenme yeri ödeme yeri sayılır!',
    baseExplanation: 'Kıymetli Evrak Hukukunda "Bono ve poliçenin hamiline düzenlenememesi (lehtarın zorunlu olması), çekin ise hamiline düzenlenebilmesi" ile "Vadenin yokluğunun senedi geçersiz kılmaması, düzenlenme tarihinin yokluğunun ise senedi kesin geçersiz kılması" HMGS’nin banko sorusudur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'vade gösterilmemişse senet görüldüğünde ödenmesi şart olan bir senet sayılır; ayrıca gösterilmemişse poliçede muhatabın, bonoda ise düzenlenme yeri senedin ödeme yeri (ve aynı zamanda düzenleyenin yerleşim yeri) sayılır',
      wrongPhrase: 'poliçe veya bonoda vade gösterilmemişse senet mutlak olarak geçersiz sayılır; buna karşılık düzenlenme tarihi gösterilmemişse senedin vade tarihinde düzenlendiği kabul edilir ve bono hamiline yazılı olarak da düzenlenebilir',
      correctPhrase: 'vade gösterilmemişse senet görüldüğünde ödenmesi şart olan bir senet sayılır; ayrıca gösterilmemişse poliçede muhatabın, bonoda ise düzenlenme yeri senedin ödeme yeri (ve aynı zamanda düzenleyenin yerleşim yeri) sayılır',
      explanation: 'TTK m. 672 ve m. 777 uyarınca poliçe ve bonoda vade gösterilmemişse senet geçersiz olmaz, görüldüğünde ödenecek sayılır; buna karşılık düzenlenme tarihinin alternatifi yoktur (yazılmazsa senet kambiyo senedi sayılmaz) ve poliçe ile bono hamiline düzenlenemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'düzenlenme yeri gösterilmemiş olan poliçe veya bono ise düzenleyenin adının yanında yazılı olan yerde düzenlenmiş sayılır (düzenleyenin adının yanında da yer yazılı değilse senet kambiyo senedi niteliğini kazanmaz!)',
      wrongPhrase: 'bonoda hem ödeme yeri hem de düzenlenme yeri hiç gösterilmemiş ve düzenleyenin adının yanında da herhangi bir yer yazılmamış olsa bile senet lehtarın yerleşim yerinde düzenlenmiş sayılarak geçerliliğini korur',
      correctPhrase: 'düzenlenme yeri gösterilmemiş olan poliçe veya bono ise düzenleyenin adının yanında yazılı olan yerde düzenlenmiş sayılır (düzenleyenin adının yanında da yer yazılı değilse senet kambiyo senedi niteliğini kazanmaz!)',
      explanation: 'TTK m. 777/4 uyarınca düzenlenme yeri gösterilmemiş olan bono, düzenleyenin adının yanında yazılı olan yerde düzenlenmiş sayılır; eğer hem düzenlenme yeri yoksa hem de düzenleyenin adının yanında bir yer (idari birim) yazmıyorsa senet bono niteliği kazanamaz!'
    }
  },
  {
    id: 'rule-ticaret-23',
    branch: 'Ticaret',
    subTopic: 'Poliçe ve Bonoda Ödememe Protestosu Süresi (2 İş Günü) ve Kambiyo Zamanaşımı Süreleri (3 Yıl - 1 Yıl - 6 Ay)',
    articleRef: 'TTK M. 714, 749 & 778',
    trueStatement:
      'Poliçe veya bonoda belirli bir günde veya düzenlenme gününden ya da görüldükten belirli bir süre sonra ödenmesi şartını içeren senetlerde ödememe protestosu, ödeme gününü izleyen iki iş günü içinde çekilmelidir (görüldüğünde vadeli senetlerde ise ibraz süresi olan bir yıl içinde çekilir); poliçeyi kabul eden muhataba (ve bonoyu düzenleyene ile bunların avalistlerine) karşı ileri sürülecek poliçe/bonodan doğan istemler vadenin geldiği tarihten itibaren üç yıl geçmekle; hamilin cirantalara ve (poliçede) düzenleyene karşı ileri süreceği başvuru istemleri süresinde çekilen protesto tarihinden (veya "gidersiz iade/protestosuz" kaydı varsa vadenin dolduğu tarihten) itibaren bir yıl geçmekle; bir cirantanın başka cirantalara ve (poliçede) düzenleyene karşı ileri süreceği rücu istemleri ise cirantanın senedi ödediği veya senedin dava yoluyla kendisine karşı ileri sürüldüğü tarihten itibaren altı ay geçmekle zamanaşımına uğrar.',
    trueHighlight: ['ödememe protestosu, ödeme gününü izleyen iki iş günü içinde çekilmelidir', 'vadenin geldiği tarihten itibaren üç yıl geçmekle', 'protesto tarihinden (veya "gidersiz iade/protestosuz" kaydı varsa vadenin dolduğu tarihten) itibaren bir yıl geçmekle', 'altı ay geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'TTK m. 714 ve m. 749 Kambiyo Süreleri Altın Şifresi: 1) Ödememe protestosu: Ödeme gününü izleyen 2 İŞ GÜNÜ içinde çekilir (ödeme günü çekilen protesto geçersizdir!), 2) Zamanaşımı "3 YIL - 1 YIL - 6 AY" kuralı: Asıl borçluya (poliçede kabul eden muhatap, bonoda düzenleyen ve bunların avalistleri) karşı -> 3 YIL; Hamilin başvuru borçlularına (cirantalar ve poliçede düzenleyen) karşı -> 1 YIL; Ödeyen cirantanın diğer başvuru borçlularına rücu istemi -> 6 AY! (Çekte ise tüm zamanaşımı süreleri 6728 s.K. ile 3 YILDIR - TTK m. 814!)',
    baseExplanation: 'Poliçe ve bonoda "Asıl borçluya 3 yıl - Hamilin cirantaya başvurusu 1 yıl - Cirantanın cirantaya rücuu 6 ay" zamanaşımı tablosu ile bonoyu düzenleyenin asıl borçlu (protesto çekilmese de borçtan kurtulmaz ve zamanaşımı 3 yıldır!), poliçeyi düzenleyenin ise başvuru borçlusu olması Kıymetli Evrakın en kritik ayrımıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'poliçeyi kabul eden muhataba (ve bonoyu düzenleyene ile bunların avalistlerine) karşı ileri sürülecek poliçe/bonodan doğan istemler vadenin geldiği tarihten itibaren üç yıl geçmekle; hamilin cirantalara ve (poliçede) düzenleyene karşı ileri süreceği başvuru istemleri süresinde çekilen protesto tarihinden (veya "gidersiz iade/protestosuz" kaydı varsa vadenin dolduğu tarihten) itibaren bir yıl geçmekle; bir cirantanın başka cirantalara ve (poliçede) düzenleyene karşı ileri süreceği rücu istemleri ise cirantanın senedi ödediği veya senedin dava yoluyla kendisine karşı ileri sürüldüğü tarihten itibaren altı ay geçmekle zamanaşımına uğrar',
      wrongPhrase: 'poliçe ve bonodan doğan tüm istemler hem asıl borçlulara hem de cirantalara karşı ayrım yapılmaksızın vadenin geldiği tarihten itibaren beş yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'poliçeyi kabul eden muhataba (ve bonoyu düzenleyene ile bunların avalistlerine) karşı ileri sürülecek poliçe/bonodan doğan istemler vadenin geldiği tarihten itibaren üç yıl geçmekle; hamilin cirantalara ve (poliçede) düzenleyene karşı ileri süreceği başvuru istemleri süresinde çekilen protesto tarihinden (veya "gidersiz iade/protestosuz" kaydı varsa vadenin dolduğu tarihten) itibaren bir yıl geçmekle; bir cirantanın başka cirantalara ve (poliçede) düzenleyene karşı ileri süreceği rücu istemleri ise cirantanın senedi ödediği veya senedin dava yoluyla kendisine karşı ileri sürüldüğü tarihten itibaren altı ay geçmekle zamanaşımına uğrar',
      explanation: 'TTK m. 749 uyarınca poliçe ve bonoda zamanaşımı süreleri kademelidir: Asıl borçluya karşı vadeden itibaren 3 yıl, hamilin başvuru borçlularına karşı 1 yıl, ödeyen cirantanın diğer cirantalara rücuunda ise 6 aydır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ödememe protestosu, ödeme gününü izleyen iki iş günü içinde çekilmelidir',
      wrongPhrase: 'bonoyu düzenleyen asıl borçluya karşı kambiyo takibi yapılabilmesi için de ödeme gününü izleyen iki iş günü içinde mutlaka ödememe protestosu çekilmesi şarttır; aksi halde bonoyu düzenleyen borçtan tamamen kurtulur',
      correctPhrase: 'ödememe protestosu, ödeme gününü izleyen iki iş günü içinde çekilmelidir',
      explanation: 'TTK m. 730 ve m. 778/2 uyarınca bonoyu düzenleyen (ve poliçeyi kabul eden muhatap) ASIL BORÇLUDUR; asıl borçluya ve onun avalistine başvurmak için ödememe protestosu çekilmesine gerek yoktur (protesto çekilmezse yalnız cirantalar gibi başvuru borçlularına başvuru hakkı düşer)!'
    }
  },
  {
    id: 'rule-ticaret-24',
    branch: 'Ticaret',
    subTopic: 'Çekte İbraz Süreleri (10 Gün - 1 Ay - 3 Ay), Kabul Yasağı ve Çek Zamanaşımı Süresi (3 Yıl)',
    articleRef: 'TTK M. 784, 796 & 814',
    trueStatement:
      'Çek, kabul edilemez; çek üzerine yazılmış bir kabul şerhi yazılmamış sayılır; bir çek, düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay içinde muhataba ibraz edilmelidir; ödeneceği ülkeden başka bir ülkede düzenlenen çek, düzenlenme yeri ile ödeme yeri aynı kıtada ise bir ay ve ayrı kıtalarda ise üç ay içinde ibraz edilmelidir (ancak bir Avrupa ülkesinde düzenlenip Akdeniz’de sahili bulunan bir ülkede ödenecek olan ve aynı şekilde Akdeniz’de sahili olan bir ülkede düzenlenip bir Avrupa ülkesinde ödenecek olan çekler aynı kıtada düzenlenmiş ve ödenmesi şart kılınmış sayılır ve ibraz süresi bir aydır); hamilin cirantalarla düzenleyene ve diğer çek borçlularına karşı sahip olduğu başvurma hakları, ibraz süresinin bitiminden itibaren üç yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['Çek, kabul edilemez; çek üzerine yazılmış bir kabul şerhi yazılmamış sayılır', 'düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay içinde muhataba ibraz edilmelidir', 'düzenlenme yeri ile ödeme yeri aynı kıtada ise bir ay ve ayrı kıtalarda ise üç ay içinde ibraz edilmelidir', 'ibraz süresinin bitiminden itibaren üç yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'TTK m. 784, 796 ve 814 Çek Altın Kuralları: 1) Çekte vade ve KABUL YOKTUR (çek üzerine yazılan kabul şerhi çeki geçersiz kılmaz, YAZILMAMIŞ SAYILIR; muhatap banka çeke aval de veremez - m. 794!), 2) İbraz süreleri: Aynı yer -> 10 GÜN; Farklı yer veya aynı kıta (Avrupa + Akdeniz kıyısı ülkeler dahil!) -> 1 AY; Farklı kıta -> 3 AY, 3) Çekte zamanaşımı süresi: İbraz süresinin bitiminden (cirantanın rücuunda ise ödeme/dava tarihinden) itibaren 3 YILDIR!',
    baseExplanation: 'Çekte "10 gün - 1 ay - 3 ay" ibraz süreleri (özellikle Avrupa ile Akdeniz’e kıyısı olan ülkeler arasında düzenlenen çeklerin aynı kıta sayılarak 1 aya tabi olması - TTK m. 796/2) ve tüm çek zamanaşımı sürelerinin 3 yıl olması HMGS Kıymetli Evrak sorularında çok sık test edilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir çek, düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay içinde muhataba ibraz edilmelidir; ödeneceği ülkeden başka bir ülkede düzenlenen çek, düzenlenme yeri ile ödeme yeri aynı kıtada ise bir ay ve ayrı kıtalarda ise üç ay içinde ibraz edilmelidir (ancak bir Avrupa ülkesinde düzenlenip Akdeniz’de sahili bulunan bir ülkede ödenecek olan ve aynı şekilde Akdeniz’de sahili olan bir ülkede düzenlenip bir Avrupa ülkesinde ödenecek olan çekler aynı kıtada düzenlenmiş ve ödenmesi şart kılınmış sayılır ve ibraz süresi bir aydır); hamilin cirantalarla düzenleyene ve diğer çek borçlularına karşı sahip olduğu başvurma hakları, ibraz süresinin bitiminden itibaren üç yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'düzenlendiği yerde ödenecek çekler otuz gün, başka yerde ödenecek çekler üç ay içinde ibraz edilmelidir; Fransa’da düzenlenip Mısır’da ödenecek bir çek ayrı kıtalarda olduğundan ibraz süresi üç aydır ve çekten doğan başvuru hakları ibraz süresinin bitiminden itibaren altı ay geçmekle zamanaşımına uğrar',
      correctPhrase: 'bir çek, düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay içinde muhataba ibraz edilmelidir; ödeneceği ülkeden başka bir ülkede düzenlenen çek, düzenlenme yeri ile ödeme yeri aynı kıtada ise bir ay ve ayrı kıtalarda ise üç ay içinde ibraz edilmelidir (ancak bir Avrupa ülkesinde düzenlenip Akdeniz’de sahili bulunan bir ülkede ödenecek olan ve aynı şekilde Akdeniz’de sahili olan bir ülkede düzenlenip bir Avrupa ülkesinde ödenecek olan çekler aynı kıtada düzenlenmiş ve ödenmesi şart kılınmış sayılır ve ibraz süresi bir aydır); hamilin cirantalarla düzenleyene ve diğer çek borçlularına karşı sahip olduğu başvurma hakları, ibraz süresinin bitiminden itibaren üç yıl geçmekle zamanaşımına uğrar',
      explanation: 'TTK m. 796 ve m. 814 uyarınca çekte ibraz süreleri aynı yerde 10 gün, farklı yerde/aynı kıtada 1 ay, farklı kıtada 3 aydır (Avrupa ülkesi ile Akdeniz’de sahili olan Mısır/Tunus gibi ülkeler arası çekler kanunen aynı kıta sayılır ve süresi 1 aydır!); çekte zamanaşımı süresi ise 6 ay değil 3 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Çek, kabul edilemez; çek üzerine yazılmış bir kabul şerhi yazılmamış sayılır',
      wrongPhrase: 'Muhatap banka çek üzerine kabul şerhi koyarsa çek tamamen geçersiz hale gelir; ancak muhatap banka çekte düzenleyen lehine aval verebilir',
      correctPhrase: 'Çek, kabul edilemez; çek üzerine yazılmış bir kabul şerhi yazılmamış sayılır',
      explanation: 'TTK m. 784 ve m. 794/1 uyarınca çek üzerine yazılmış bir kabul şerhi çeki geçersiz kılmaz, sadece YAZILMAMIŞ SAYILIR; ayrıca muhatap banka çekte aval VEREMEZ!'
    }
  },
  {
    id: 'rule-ticaret-25',
    branch: 'Ticaret',
    subTopic: 'Limited Şirkette Ortaklıktan Çıkma ve Çıkarılma ile Ek Ödeme ve Yan Edim Yükümlülükleri',
    articleRef: 'TTK M. 603, 638 & 640',
    trueStatement:
      'Limited şirkette şirket sözleşmesi, ortaklara şirketten çıkma hakkını tanıyabileceği gibi bu hakkın kullanılmasını belirli şartlara da bağlayabilir; her ortak, haklı sebeplerin varlığında şirketten çıkmasına karar verilmesi için mahkemeye başvurabilir; ortakların şirket sözleşmesiyle esas sermaye payı bedeli dışında ek ödeme ile yükümlü tutulabilmeleri ancak şirket sözleşmesinde öngörülmüş olmasına ve esas sermaye payını devralan yeni ortağın da bunu bilmesine bağlı olup ek ödeme yükümlülüğü esas sermaye payının itibarî değerinin iki katını aşamaz; genel kurulun ortağın şirketten çıkarılmasına ilişkin kararına karşı ortak, kararın noter aracılığıyla kendisine bildirilmesinden itibaren üç ay içinde iptal davası açabilir.',
    trueHighlight: ['her ortak, haklı sebeplerin varlığında şirketten çıkmasına karar verilmesi için mahkemeye başvurabilir', 'ek ödeme yükümlülüğü esas sermaye payının itibarî değerinin iki katını aşamaz', 'kararın noter aracılığıyla kendisine bildirilmesinden itibaren üç ay içinde iptal davası açabilir'],
    trueCorrectPhrase: 'TTK m. 603 ve m. 638-640 Limited Şirket Özel Kuralları (Anonim şirkette yoktur!): 1) Limited şirkette sözleşmeyle veya HAKLI SEBEPLE mahkeme kararıyla ortaklıktan ÇIKMA ve ÇIKARILMA mümkündür (A.Ş.’de ise kural olarak haklı sebeple çıkma yoktur, yalnız ıskat [m. 482] ve azınlığın haklı sebeple fesih davası [m. 531] vardır!), 2) Limited şirkette sözleşmeyle EK ÖDEME (itibari değerin en çok 2 KATI!) ve YAN EDİM yükümlülüğü öngörülebilir (A.Ş.’de ise tek borç ilkesi m. 480 gereği ek ödeme yükümlülüğü konulamaaz!), 3) Çıkarma kararına karşı noter tebliğinden itibaren 3 AY içinde iptal davası açılabilir!',
    baseExplanation: 'Anonim şirket ile limited şirket arasındaki en temel yapısal farklardan biri: Anonim şirkette "tek borç ilkesi" (TTK m. 480) gereği ortağa ek ödeme yükümlülüğü yüklenemezken, limited şirkette (TTK m. 603) esas sermaye payının itibari değerinin 2 katına kadar ek ödeme yükümlülüğü öngörülebilir!',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'ek ödeme yükümlülüğü esas sermaye payının itibarî değerinin iki katını aşamaz; genel kurulun ortağın şirketten çıkarılmasına ilişkin kararına karşı ortak, kararın noter aracılığıyla kendisine bildirilmesinden itibaren üç ay içinde iptal davası açabilir',
      wrongPhrase: 'ek ödeme yükümlülüğü sınırsız olarak kararlaştırılabilir ve genel kurulun çıkarma kararına karşı ortak bildirimden itibaren onbeş gün içinde sulh hukuk mahkemesinde itiraz edebilir',
      correctPhrase: 'ek ödeme yükümlülüğü esas sermaye payının itibarî değerinin iki katını aşamaz; genel kurulun ortağın şirketten çıkarılmasına ilişkin kararına karşı ortak, kararın noter aracılığıyla kendisine bildirilmesinden itibaren üç ay içinde iptal davası açabilir',
      explanation: 'TTK m. 603/3 ve m. 640/2 uyarınca limited şirkette ek ödeme yükümlülüğü esas sermaye payının itibari değerinin 2 katını aşamaz ve genel kurulun çıkarma kararına karşı noter aracılığıyla bildirimden itibaren 3 ay içinde asliye ticaret mahkemesinde iptal davası açılabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Limited şirkette şirket sözleşmesi, ortaklara şirketten çıkma hakkını tanıyabileceği gibi bu hakkın kullanılmasını belirli şartlara da bağlayabilir; her ortak, haklı sebeplerin varlığında şirketten çıkmasına karar verilmesi için mahkemeye başvurabilir',
      wrongPhrase: 'Limited şirkette şirket sözleşmesinde çıkma hakkı açıkça düzenlenmemişse ortak haklı sebep bulunsa dahi hiçbir durumda mahkemeden ortaklıktan çıkmasına karar verilmesini isteyemez',
      correctPhrase: 'Limited şirkette şirket sözleşmesi, ortaklara şirketten çıkma hakkını tanıyabileceği gibi bu hakkın kullanılmasını belirli şartlara da bağlayabilir; her ortak, haklı sebeplerin varlığında şirketten çıkmasına karar verilmesi için mahkemeye başvurabilir',
      explanation: 'TTK m. 638/2 açık hükmü uyarınca şirket sözleşmesinde hüküm bulunmasa dahi her ortak, HAKLI SEBEPLERİN VARLIĞINDA şirketten çıkmasına karar verilmesi için mahkemeye başvurabilir!'
    }
  },

  // =========================================================================
  // 2. İCRA VE İFLAS HUKUKU (İİK) DERİNLİK KURALLARI (rule-icra-17 .. rule-icra-27)
  // =========================================================================
  {
    id: 'rule-icra-17',
    branch: 'İcra',
    subTopic: 'İcra Hukukunda Sürelerin Hesaplanması, Tatil Saatleri ve Talik Halleri (Ölümde 3 Gün, Ağır Hastalık, Askerlik)',
    articleRef: 'İİK M. 19 & M. 51-56',
    trueStatement:
      'İcra ve İflas Kanununda yazılı süreler taraflara tefhim veya tebliğ tarihinden itibaren işlemeye başlar, son günü resmî bir tatile rastlarsa süre tatili takip eden günde biter ve ilgililer bu kanunda tayin olunan süreleri değiştiremezler (ancak bir sürenin geçmesinden istifade hakkı olan borçlu bu hakkından vazgeçebilir); güneşin batmasından bir saat sonra ile güneşin doğmasından bir saat önceye kadarki devrede (gece vakti) ve tatil günlerinde haciz yapılamaz (ancak gece iş görülen yerlerde hasılat haczi ile borçlunun mal kaçırdığı anlaşılırsa gece ve tatilde de haciz yapılabilir); borçlunun, eşinin ya da kan ve kayın hısımlarından birinin ölümü hâlinde icra takibi ölüm günü ile beraber üç gün ertelenir (talik edilir); mirasçı mirası derhâl kabul etmemişse terekeye karşı takip de bu üç günün bitiminden itibaren üç ay ertelenir.',
    trueHighlight: ['ilgililer bu kanunda tayin olunan süreleri değiştiremezler (ancak bir sürenin geçmesinden istifade hakkı olan borçlu bu hakkından vazgeçebilir)', 'güneşin batmasından bir saat sonra ile güneşin doğmasından bir saat önceye kadarki devrede (gece vakti) ve tatil günlerinde haciz yapılamaz', 'ölüm günü ile beraber üç gün ertelenir (talik edilir); mirasçı mirası derhâl kabul etmemişse terekeye karşı takip de bu üç günün bitiminden itibaren üç ay ertelenir'],
    trueCorrectPhrase: 'İİK m. 19-20 ve m. 51-56 Süre ve Talik Şifresi: 1) İcra hukukunda adli tatil hükümleri UYGULANMAZ (süreler adli tatilde de işler!), 2) Taraflar kanuni süreleri sözleşmeyle değiştiremez; ancak yalnız BORÇLU kendi lehine olan bir sürenin geçmesinden istifade hakkından (süre doğduktan sonra) vazgeçebilir, 3) Gece vakti: Güneş batımından 1 saat sonra - doğmasından 1 saat önce, 4) Borçlunun veya eşinin/alt-üstsoyunun ölümü halinde takip ölüm günüyle birlikte 3 GÜN (mirasın reddi süresi boyunca terekeye karşı ise + 3 AY) talik edilir!',
    baseExplanation: 'İcra hukukunda adli tatilin işlememesi, gece vakti tanımı (güneş batımından 1 saat sonra - doğmasından 1 saat önce) ve ölüm halinde "3 gün + (tereke için) 3 ay" talik süresi İİK Genel Hükümlerin en sık sorulan kurallarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'borçlunun, eşinin ya da kan ve kayın hısımlarından birinin ölümü hâlinde icra takibi ölüm günü ile beraber üç gün ertelenir (talik edilir); mirasçı mirası derhâl kabul etmemişse terekeye karşı takip de bu üç günün bitiminden itibaren üç ay ertelenir',
      wrongPhrase: 'borçlunun yakınlarından birinin ölümü hâlinde icra takibi onbeş gün ertelenir; ayrıca icra dairelerindeki tüm süreler 20 Temmuz - 31 Ağustos arasındaki adli tatilde kendiliğinden durur',
      correctPhrase: 'borçlunun, eşinin ya da kan ve kayın hısımlarından birinin ölümü hâlinde icra takibi ölüm günü ile beraber üç gün ertelenir (talik edilir); mirasçı mirası derhâl kabul etmemişse terekeye karşı takip de bu üç günün bitiminden itibaren üç ay ertelenir',
      explanation: 'İİK m. 52-53 uyarınca ölüm halinde icra takibi ölüm günü ile beraber 3 gün (ve terekeye karşı +3 ay) ertelenir; ayrıca icra daireleri ve icra mahkemelerindeki iş ve takiplerde adli tatil hükümleri uygulanmaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'güneşin batmasından bir saat sonra ile güneşin doğmasından bir saat önceye kadarki devrede (gece vakti) ve tatil günlerinde haciz yapılamaz (ancak gece iş görülen yerlerde hasılat haczi ile borçlunun mal kaçırdığı anlaşılırsa gece ve tatilde de haciz yapılabilir)',
      wrongPhrase: 'borçlunun mal kaçırdığı kesin olarak bilinse veya gece iş görülen bir eğlence yeri olsa dahi gece vakti ve resmî tatil günlerinde hiçbir surette haciz ve muhafaza işlemi yapılamaz',
      correctPhrase: 'güneşin batmasından bir saat sonra ile güneşin doğmasından bir saat önceye kadarki devrede (gece vakti) ve tatil günlerinde haciz yapılamaz (ancak gece iş görülen yerlerde hasılat haczi ile borçlunun mal kaçırdığı anlaşılırsa gece ve tatilde de haciz yapılabilir)',
      explanation: 'İİK m. 51/1 uyarınca gece iş görülen yerlerde (restoran, konser alanı vb.) gece vakti hasılat haczi yapılabileceği gibi, borçlunun mal kaçırdığı anlaşılırsa gece vakti ve tatil günlerinde de haciz yapılabilir!'
    }
  },
  {
    id: 'rule-icra-18',
    branch: 'İcra',
    subTopic: 'İlamsız İcrada Ödeme Emrine İtirazın Şekli: İmzaya İtirazda Açıklık ve Kısmi İtirazda Miktar Belirtme Zorunluluğu',
    articleRef: 'İİK M. 62',
    trueStatement:
      'Genel haciz yoluyla ilamsız takipte itiraz etmek isteyen borçlu, itirazını ödeme emrinin tebliği tarihinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine bildirmeye mecburdur; borçlu, takibe dayanak yapılan adi senetteki imzaya itiraz ediyorsa bunu ayrıca ve açıkça bildirmek zorundadır, aksi takdirde icra takibi yönünden senetteki imzayı kabul etmiş sayılır; borcun bir kısmına itiraz eden borçlunun ise o kısmın cihet ve miktarını açıkça göstermesi lazımdır, aksi takdirde itiraz edilmemiş sayılır; borçlu itirazında sebep bildirmişse, itirazın kaldırılması duruşmasında yalnız senet metninden anlaşılabilen sebepler dışında değiştiremez ve genişletemez.',
    trueHighlight: ['ödeme emrinin tebliği tarihinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine bildirmeye mecburdur', 'imzaya itiraz ediyorsa bunu ayrıca ve açıkça bildirmek zorundadır, aksi takdirde icra takibi yönünden senetteki imzayı kabul etmiş sayılır', 'borcun bir kısmına itiraz eden borçlunun ise o kısmın cihet ve miktarını açıkça göstermesi lazımdır, aksi takdirde itiraz edilmemiş sayılır'],
    trueCorrectPhrase: 'İİK m. 62 Ödeme Emrine İtirazın 3 Altın Kuralı: 1) Genel haciz yolunda itiraz süresi 7 GÜNDÜR ve İCRA DAİRESİNE yapılır (kambiyo takibinde ise 5 gündür ve İCRA MAHKEMESİNE yapılır!), 2) Adi senetteki İMZAYA itiraz "ayrıca ve açıkça" yapılmazsa (sadece "borcum yoktur" denirse) imza İKRAR EDİLMİŞ sayılır, 3) KISMİ İTİRAZDA itiraz edilen miktar açıkça gösterilmezse ("borcum bu kadar değildir" denirse) İTİRAZ EDİLMEMİŞ sayılır ve takip kesinleşir!',
    baseExplanation: 'İİK m. 62’deki "İmzaya itirazın ayrıca ve açıkça yapılması" ile "Kısmi itirazda itiraz edilen miktarın açıkça gösterilmesi (aksi halde hiç itiraz edilmemiş sayılması)" HMGS İcra Hukukunun en sık sorulan tuzak sorusudur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borçlu, takibe dayanak yapılan adi senetteki imzaya itiraz ediyorsa bunu ayrıca ve açıkça bildirmek zorundadır, aksi takdirde icra takibi yönünden senetteki imzayı kabul etmiş sayılır; borcun bir kısmına itiraz eden borçlunun ise o kısmın cihet ve miktarını açıkça göstermesi lazımdır, aksi takdirde itiraz edilmemiş sayılır',
      wrongPhrase: 'borçlunun sadece "itiraz ediyorum" demesi adi senetteki imzaya da itiraz ettiği anlamına gelir; borçlu kısmi itirazında miktar belirtmeden "borcum bu kadar değildir" derse takip tamamen durur',
      correctPhrase: 'borçlu, takibe dayanak yapılan adi senetteki imzaya itiraz ediyorsa bunu ayrıca ve açıkça bildirmek zorundadır, aksi takdirde icra takibi yönünden senetteki imzayı kabul etmiş sayılır; borcun bir kısmına itiraz eden borçlunun ise o kısmın cihet ve miktarını açıkça göstermesi lazımdır, aksi takdirde itiraz edilmemiş sayılır',
      explanation: 'İİK m. 62/3 ve m. 62/4 uyarınca sadece "itiraz ediyorum" demek borca itirazdır, imzaya itiraz ayrıca ve açıkça bildirilmezse imza kabul edilmiş sayılır; kısmi itirazda ise itiraz edilen miktar açıkça gösterilmezse İTİRAZ EDİLMEMİŞ SAYILIR!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ödeme emrinin tebliği tarihinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine bildirmeye mecburdur',
      wrongPhrase: 'ödeme emrinin tebliğinden itibaren beş gün içinde doğrudan icra mahkemesine başvurarak itiraz etmeye mecburdur',
      correctPhrase: 'ödeme emrinin tebliği tarihinden itibaren yedi gün içinde dilekçeyle veya sözlü olarak icra dairesine bildirmeye mecburdur',
      explanation: 'Beş gün içinde icra mahkemesine itiraz kambiyo senetlerine özgü haciz yolundadır (İİK m. 168-169); genel haciz yoluyla ilamsız takipte ise itiraz 7 gün içinde doğrudan İCRA DAİRESİNE yapılır!'
    }
  },
  {
    id: 'rule-icra-19',
    branch: 'İcra',
    subTopic: 'İtirazın Kesin ve Geçici Kaldırılması (6 Ay Hak Düşürücü Süre) ile Borçtan Kurtulma Davası (7 Gün)',
    articleRef: 'İİK M. 68, 68/a & 69',
    trueStatement:
      'Talebine itiraz edilen alacaklının takibi, imzası ikrar veya noterlikçe tasdik edilen borç ikrarını içeren bir senede yahut resmî dairelerin veya yetkili makamların yetkileri dâhilinde ve usulüne göre verdikleri bir makbuz veya belgeye müstenitse, alacaklı itirazın kendisine tebliği tarihinden itibaren altı ay içinde icra mahkemesinden itirazın kesin kaldırılmasını isteyebilir; takibin dayandığı senet hususi olup imzası borçlu tarafından reddedilmişse alacaklı aynı altı aylık sürede itirazın geçici kaldırılmasını isteyebilir; itirazın geçici kaldırılmasına karar verilirse borçlu, tefhim veya tebliğden itibaren yedi gün içinde genel mahkemede borçtan kurtulma davası açabilir (dava değerinin %15’i oranında ilk duruşma gününe kadar teminat yatırma şartıyla!).',
    trueHighlight: ['alacaklı itirazın kendisine tebliği tarihinden itibaren altı ay içinde icra mahkemesinden itirazın kesin kaldırılmasını isteyebilir', 'alacaklı aynı altı aylık sürede itirazın geçici kaldırılmasını isteyebilir', 'itirazın geçici kaldırılmasına karar verilirse borçlu, tefhim veya tebliğden itibaren yedi gün içinde genel mahkemede borçtan kurtulma davası açabilir'],
    trueCorrectPhrase: 'İİK m. 68-69 İtirazın Kaldırılması Şifresi: 1) İtirazın kesin (m. 68 - borca itirazda) veya geçici (m. 68/a - adi senetteki imzaya itirazda) kaldırılması süresi: İtirazın alacaklıya tebliğinden itibaren 6 AY (İtirazın iptali davası ise 1 yıldır - m. 67!), 2) İtirazın geçici kaldırılması kararı üzerine borçlu 7 GÜN içinde genel mahkemede (%15 teminatla) BORÇTAN KURTULMA DAVASI açabilir (açmazsa geçici kaldırma kesin kaldırmaya dönüşür!), 3) İtirazın kaldırılmasında haksız çıkan taraf, karşı tarafın TALEBİ üzerine %20’den aşağı olmamak üzere tazminata (imza inkarında ayrıca alacağın %10’u para cezasına) mahkûm edilir!',
    baseExplanation: 'İtirazın iptali (genel mahkeme, 1 yıl, her türlü delil, maddi anlamda kesin hüküm) ile İtirazın kaldırılması (icra mahkemesi, 6 ay, yalnız İİK m. 68 belgeleri, şekli anlamda kesin hüküm) karşılaştırması ve Borçtan Kurtulma Davası (7 gün, %15 teminat) İcra Hukukunun en klasik konusudur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'alacaklı itirazın kendisine tebliği tarihinden itibaren altı ay içinde icra mahkemesinden itirazın kesin kaldırılmasını isteyebilir; takibin dayandığı senet hususi olup imzası borçlu tarafından reddedilmişse alacaklı aynı altı aylık sürede itirazın geçici kaldırılmasını isteyebilir; itirazın geçici kaldırılmasına karar verilirse borçlu, tefhim veya tebliğden itibaren yedi gün içinde genel mahkemede borçtan kurtulma davası açabilir',
      wrongPhrase: 'alacaklı itirazın tebliğinden itibaren bir yıl içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir ve itirazın geçici kaldırılması kararı üzerine borçlu otuz gün içinde icra mahkemesinde borçtan kurtulma davası açabilir',
      correctPhrase: 'alacaklı itirazın kendisine tebliği tarihinden itibaren altı ay içinde icra mahkemesinden itirazın kesin kaldırılmasını isteyebilir; takibin dayandığı senet hususi olup imzası borçlu tarafından reddedilmişse alacaklı aynı altı aylık sürede itirazın geçici kaldırılmasını isteyebilir; itirazın geçici kaldırılmasına karar verilirse borçlu, tefhim veya tebliğden itibaren yedi gün içinde genel mahkemede borçtan kurtulma davası açabilir',
      explanation: 'İİK m. 68 ve m. 69 uyarınca itirazın kaldırılması süresi 1 yıl değil 6 aydır (1 yıl itirazın iptali davası süresidir); borçtan kurtulma davası ise 30 gün içinde icra mahkemesinde değil, 7 GÜN içinde GENEL MAHKEMEDE açılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'imzası ikrar veya noterlikçe tasdik edilen borç ikrarını içeren bir senede yahut resmî dairelerin veya yetkili makamların yetkileri dâhilinde ve usulüne göre verdikleri bir makbuz veya belgeye müstenitse',
      wrongPhrase: 'elinde hiçbir yazılı belge bulunmasa dahi tanık veya yemin deliline dayanıyorsa',
      correctPhrase: 'imzası ikrar veya noterlikçe tasdik edilen borç ikrarını içeren bir senede yahut resmî dairelerin veya yetkili makamların yetkileri dâhilinde ve usulüne göre verdikleri bir makbuz veya belgeye müstenitse',
      explanation: 'İİK m. 68 uyarınca icra mahkemesinde itirazın kesin kaldırılması yoluna başvurabilmek için alacaklının elinde mutlaka İİK m. 68/1’de sayılan nitelikli belgelerden (imzası ikrar/noter onaylı borç ikrarı içeren senet, resmi makbuz vb.) biri bulunmalıdır; elinde bu belgelerden olmayan alacaklı yalnız genel mahkemede itirazın iptali davası (İİK m. 67) açabilir!'
    }
  },
  {
    id: 'rule-icra-20',
    branch: 'İcra',
    subTopic: 'Takibin Kesinleşmesinden Sonra İcra Mahkemesince Takibin İptali veya Taliki (İtfa - İmhâl - Zamanaşımı)',
    articleRef: 'İİK M. 71 & M. 33/a',
    trueStatement:
      'Borçlu, takibin kesinleşmesinden sonraki devrede borcun ve ferilerinin itfa edildiğini (ödendiğini) yahut alacaklının kendisine bir mühlet verdiğini (imhâl) noterden tasdikli veya imzası ikrar edilmiş bir belge ile ispat ederse, yahut takibin kesinleşmesinden sonraki devrede alacağın zamanaşımına uğradığını ileri sürerse, her zaman (en geç takibin sona ermesine / paraların paylaştırılmasına kadar) icra mahkemesinden takibin iptalini veya talikini (ertelenmesini) isteyebilir.',
    trueHighlight: ['takibin kesinleşmesinden sonraki devrede borcun ve ferilerinin itfa edildiğini (ödendiğini) yahut alacaklının kendisine bir mühlet verdiğini (imhâl) noterden tasdikli veya imzası ikrar edilmiş bir belge ile ispat ederse, yahut takibin kesinleşmesinden sonraki devrede alacağın zamanaşımına uğradığını ileri sürerse', 'icra mahkemesinden takibin iptalini veya talikini (ertelenmesini) isteyebilir'],
    trueCorrectPhrase: 'İİK m. 71 (İlamsız takipte) ve m. 33 (İlamlı takipte) Takibin İptali/Taliki 3 Sebebi: Takibin kesinleşmesinden (ilamlıda ilamın verilmesinden) SONRAKİ devrede gerçekleşen: 1) İTFA (Borcun ödenmesi/sona ermesi -> Takibin iptali), 2) İMHÂL (Süre verilmesi -> Takibin taliki/ertelenmesi), 3) ZAMANAŞIMI (Son işlem üzerinden zamanaşımı süresinin dolması -> İcranın geri bırakılması)! İtfa ve imhâlin mutlaka NOTER ONAYLI veya İMZASI İKRAR EDİLMİŞ BELGE ile ispatı şarttır!',
    baseExplanation: 'İİK m. 71 çok önemli bir ayrımdır: Ödeme (itfa) veya süre verme (imhâl) takibin kesinleşmesinden ÖNCE olmuşsa borçlu bunu ödeme emrine itiraz olarak (7 günde) ileri sürmeliydi (kaçırırsa ancak menfi tespit/istirdat davası açabilir); takibin kesinleşmesinden SONRA olmuşsa İİK m. 71 uyarınca icra mahkemesinden takibin iptalini/talikini isteyebilir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borcun ve ferilerinin itfa edildiğini (ödendiğini) yahut alacaklının kendisine bir mühlet verdiğini (imhâl) noterden tasdikli veya imzası ikrar edilmiş bir belge ile ispat ederse',
      wrongPhrase: 'borcun ödendiğini veya alacaklının kendisine süre verdiğini iki tanık beyanıyla ya da alacaklıya yemin teklif ederek ispat ederse',
      correctPhrase: 'borcun ve ferilerinin itfa edildiğini (ödendiğini) yahut alacaklının kendisine bir mühlet verdiğini (imhâl) noterden tasdikli veya imzası ikrar edilmiş bir belge ile ispat ederse',
      explanation: 'İİK m. 71/1 açık hükmü uyarınca icra mahkemesinde itfa (ödeme) ve imhâl (süre verme) iddiası tanık veya yeminle ispatlanamaz; mutlaka noterden tasdikli veya alacaklı tarafından imzası ikrar edilmiş bir belge ile ispat edilmelidir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Borçlu, takibin kesinleşmesinden sonraki devrede',
      wrongPhrase: 'Borçlu, icra takibi başlamadan ve ödeme emri tebliğ edilmeden önceki dönemde gerçekleşmiş olan ödeme ve zamanaşımı iddialarını da ödeme emrine itiraz etmemiş olsa bile takibin kesinleşmesinden sonra İİK m. 71 uyarınca',
      correctPhrase: 'Borçlu, takibin kesinleşmesinden sonraki devrede',
      explanation: 'İİK m. 71 yalnız "takibin kesinleşmesinden SONRAKİ devrede" gerçekleşen itfa, imhâl ve zamanaşımı hallerinde uygulanır; takip kesinleşmeden önceki ödeme/zamanaşımı ödeme emrine 7 günlük itiraz süresi içinde ileri sürülmelidir!'
    }
  },
  {
    id: 'rule-icra-21',
    branch: 'İcra',
    subTopic: 'Haczedilemeyen Mallar ve Haklar (İİK m. 82-83): Maaş Haczinde 1/4 Sınırı ve Önceden Feragatin Geçersizliği',
    articleRef: 'İİK M. 82 & M. 83/a',
    trueStatement:
      'Devlet malları, borçlunun zatı ve mesleki için lüzumlu elbise ve eşyası, aynı çatı altında yaşayan aile bireyleri için lüzumlu ev eşyası (para, kıymetli evrak, altın, gümüş, antika veya süs eşyası hariç), borçlunun haline münasip evi, öğrenci bursları ve 5510 sayılı Kanun uyarınca bağlanan gelir ve aylıklar (nafaka ve SGK prim borçları hariç) haczedilemez; maaşlar, tahsisat ve her nevi ücretler ise borçlu ve ailesinin geçinmeleri için icra memurunca lüzumlu olarak takdir edilen miktar tenzil edildikten sonra haczolunabilir ve haczedilecek miktar bunların dörtte birinden (1/4’ünden) az olamaz (İş Kanunu m. 35 uyarınca işçi ücretlerinin ise nafaka borçları hariç 1/4’ünden fazlası haczedilemez!); İİK m. 82 ve 83’te yazılı mal ve hakların haczolunabileceğine dair önceden yapılan anlaşmalar muteber değildir (geçersizdir).',
    trueHighlight: ['borçlunun haline münasip evi, öğrenci bursları ve 5510 sayılı Kanun uyarınca bağlanan gelir ve aylıklar (nafaka ve SGK prim borçları hariç) haczedilemez', 'haczedilecek miktar bunların dörtte birinden (1/4’ünden) az olamaz', 'önceden yapılan anlaşmalar muteber değildir (geçersizdir)'],
    trueCorrectPhrase: 'İİK m. 82, 83 ve 83/a Haczedilmezlik Altın Kuralları: 1) Haczedilmezlikten ÖNCEDEN yapılan feragat anlaşmaları KESİN HÜKÜMSÜZDÜR (ancak haciz sırasında veya hacizden sonra borçlu feragat edebilir!), 2) Borçlunun haline münasip evinin değeri fazla ise satılır, haline münasip ev alacak miktar borçluya bırakılır, artanı alacaklıya ödenir (ve bu kural ipotek alacaklısına karşı ileri sürülemez!), 3) İİK m. 83’te genel ücretlerde haciz "1/4’ten AZ olamaz" iken, İşK m. 35’te işçi ücretlerinde (nafaka hariç) "1/4’ten FAZLA olamaz"; emekli maaşı ise (nafaka ve SGK alacağı hariç) borçlunun hacizden sonraki muvafakati olmadıkça hiç haczedilemez!',
    baseExplanation: 'İİK m. 83/a ("Haczedilmezlikten ÖNCEDEN yapılan anlaşmalar/feragatler geçersizdir; haciz sırasında veya sonrasında yapılan muvafakat ise geçerlidir") HMGS İcra Hukukunun en klasik tuzak noktalarından biridir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İİK m. 82 ve 83’te yazılı mal ve hakların haczolunabileceğine dair önceden yapılan anlaşmalar muteber değildir (geçersizdir)',
      wrongPhrase: 'kredi sözleşmesi imzalanırken borçlunun haline münasip evinin ve emekli maaşının tamamının haczedilebileceğine dair önceden verdiği yazılı muvafakat ve feragat anlaşmaları tamamen geçerlidir',
      correctPhrase: 'İİK m. 82 ve 83’te yazılı mal ve hakların haczolunabileceğine dair önceden yapılan anlaşmalar muteber değildir (geçersizdir)',
      explanation: 'İİK m. 83/a (ve 5510 s.K. m. 93) açık hükmü uyarınca haczedilemeyen mal ve hakların haczedilebileceğine dair ÖNCEDEN (hacizden önce, sözleşme kurulurken) yapılan anlaşmalar geçersizdir!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'borçlunun haline münasip evi, öğrenci bursları ve 5510 sayılı Kanun uyarınca bağlanan gelir ve aylıklar (nafaka ve SGK prim borçları hariç) haczedilemez',
      wrongPhrase: 'borçlu kendi rızasıyla evinin üzerine ipotek kurmuş olsa bile sonradan "haline münasip ev" iddiasında bulunarak ipoteğin paraya çevrilmesine engel olabilir ve öğrenci burslarının yarısı haczedilebilir',
      correctPhrase: 'borçlunun haline münasip evi, öğrenci bursları ve 5510 sayılı Kanun uyarınca bağlanan gelir ve aylıklar (nafaka ve SGK prim borçları hariç) haczedilemez',
      explanation: 'İİK m. 82/1-11 uyarınca öğrenci bursları tamamen haczedilemez; ayrıca borçlu kendi rızasıyla haline münasip evi üzerinde ipotek tesis etmişse (zorunlu kurulan ipotekler hariç), o ipotek alacaklısına karşı meskeniyet (haline münasip ev) iddiasında bulunamaz!'
    }
  },
  {
    id: 'rule-icra-22',
    branch: 'İcra',
    subTopic: 'Üçüncü Kişilerdeki Alacakların Haczi (İİK m. 89): 1., 2. ve 3. Haciz İhbarnameleri (7 Gün İtiraz - 15 Gün Menfi Tespit)',
    articleRef: 'İİK M. 89',
    trueStatement:
      'Hamiline ait olmayan veya cirosu kabil bir senede müstenit bulunmayan alacak veya sair bir talep hakkı (örneğin borçlunun bankadaki mevduatı veya üçüncü kişideki kira/ticari alacağı), borçlunun üçüncü şahıstaki alacağının haczedildiği ve bundan böyle borcunu ancak icra dairesine ödeyebileceği yönünde üçüncü şahsa tebliğ edilecek birinci haciz ihbarnamesi ile haczedilir; üçüncü şahıs tebliğden itibaren yedi gün içinde itiraz etmezse mal yedinde ve borç zimmetinde sayılır ve kendisine ikinci haciz ihbarnamesi gönderilir; ikinci ihbarnameye de yedi gün içinde itiraz etmezse malın yedinde veya borcun zimmetinde olduğu kesinleşir ve kendisine üçüncü haciz ihbarnamesi (bildirimi) gönderilerek onbeş gün içinde parayı icra dairesine ödemesi yahut bu onbeş gün içinde menfi tespit davası açması, aksi takdirde zorla tahsil olunacağı bildirilir.',
    trueHighlight: ['üçüncü şahsa tebliğ edilecek birinci haciz ihbarnamesi ile haczedilir; üçüncü şahıs tebliğden itibaren yedi gün içinde itiraz etmezse mal yedinde ve borç zimmetinde sayılır', 'ikinci ihbarnameye de yedi gün içinde itiraz etmezse malın yedinde veya borcun zimmetinde olduğu kesinleşir', 'üçüncü haciz ihbarnamesi (bildirimi) gönderilerek onbeş gün içinde parayı icra dairesine ödemesi yahut bu onbeş gün içinde menfi tespit davası açması, aksi takdirde zorla tahsil olunacağı bildirilir'],
    trueCorrectPhrase: 'İİK m. 89 Üçlü Haciz İhbarnamesi Süre Zinciri: 1) Birinci Haciz İhbarnamesine itiraz: Tebliğden itibaren 7 GÜN, 2) İkinci Haciz İhbarnamesine itiraz: Tebliğden itibaren 7 GÜN, 3) Üçüncü Haciz İhbarnamesi (Bildirimi) üzerine ödeme veya MENFİ TESPİT DAVASI açma süresi: Tebliğden itibaren 15 GÜN (ve davayı açtığına dair belgeyi bildirimden itibaren 20 GÜN içinde icra dairesine teslim etmek zorundadır)!',
    baseExplanation: 'İİK m. 89’daki "7 gün (1. ihbarname) -> 7 gün (2. ihbarname) -> 15 gün (3. bildirim üzerine ödeme veya menfi tespit davası açma + 20 gün içinde belge ibrazı)" süre dizisi İcra Hukukunun en popüler sayısal sorularındandır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üçüncü şahıs tebliğden itibaren yedi gün içinde itiraz etmezse mal yedinde ve borç zimmetinde sayılır ve kendisine ikinci haciz ihbarnamesi gönderilir; ikinci ihbarnameye de yedi gün içinde itiraz etmezse malın yedinde veya borcun zimmetinde olduğu kesinleşir ve kendisine üçüncü haciz ihbarnamesi (bildirimi) gönderilerek onbeş gün içinde parayı icra dairesine ödemesi yahut bu onbeş gün içinde menfi tespit davası açması, aksi takdirde zorla tahsil olunacağı bildirilir',
      wrongPhrase: 'üçüncü şahıs birinci haciz ihbarnamesine onbeş gün içinde itiraz etmezse başka hiçbir ihbarname gönderilmeksizin derhal üçüncü şahsın kendi malları haczedilir; üçüncü şahsın menfi tespit davası açma süresi ise bir yıldır',
      correctPhrase: 'üçüncü şahıs tebliğden itibaren yedi gün içinde itiraz etmezse mal yedinde ve borç zimmetinde sayılır ve kendisine ikinci haciz ihbarnamesi gönderilir; ikinci ihbarnameye de yedi gün içinde itiraz etmezse malın yedinde veya borcun zimmetinde olduğu kesinleşir ve kendisine üçüncü haciz ihbarnamesi (bildirimi) gönderilerek onbeş gün içinde parayı icra dairesine ödemesi yahut bu onbeş gün içinde menfi tespit davası açması, aksi takdirde zorla tahsil olunacağı bildirilir',
      explanation: 'İİK m. 89/2-3 uyarınca 1. ve 2. haciz ihbarnamelerine itiraz süresi 15 gün değil 7 gündür; 1. ihbarnameye itiraz edilmemesi üzerine doğrudan hacze gidilemez, sırasıyla 2. ve 3. haciz ihbarnameleri gönderilmeli ve 3. ihbarname tebliğinden itibaren 15 gün içinde ödeme veya menfi tespit davası açma imkanı tanınmalıdır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'onbeş gün içinde menfi tespit davası açması',
      wrongPhrase: 'onbeş gün içinde icra mahkemesinde menfi tespit davası açması ve davada alacağın mevcut olduğunu alacaklının ispat etmesi',
      correctPhrase: 'onbeş gün içinde menfi tespit davası açması',
      explanation: 'İİK m. 89/3 uyarınca 3. haciz ihbarnamesi üzerine açılacak menfi tespit davası icra mahkemesinde değil, GENEL MAHKEMEDE (icra takibinin yapıldığı veya 3. şahsın yerleşim yeri mahkemesinde) açılır ve bu davada takip borçlusuna borçlu olmadığını (veya malın borçluya ait olmadığını) İSPAT YÜKÜ ÜÇÜNCÜ ŞAHSA aittir!'
    }
  },
  {
    id: 'rule-icra-23',
    branch: 'İcra',
    subTopic: 'Hacze Adi İştirak (İİK m. 100) ve Hacze Takipsiz/İmtiyazlı İştirak (İİK m. 101: Eş, Çocuklar, Nafaka)',
    articleRef: 'İİK M. 100 & M. 101',
    trueStatement:
      'İlk haciz üzerine satılan malın tutarı vezneye girinceye kadar aynı derecede hacze iştirak edebilecek alacaklılar için öncelik (tekaddüm) şartı ve bunun aciz vesikası, ilam, noter senedi veya resmî daire makbuzu ile ispatı aranırken (hacze adi iştirak - İİK m. 100); borçlunun eşi, çocukları ve vasi veya kayyımı olduğu şahıslar evlenme, velayet veya vesayet ilişkisinden doğan alacakları için, ergin çocuklar ve diğer yakınlar TBK m. 364/370 kapsamındaki alacakları için ve ilama dayanan nafaka alacaklıları, satılan malın tutarı vezneye girinceye kadar daha önce icra takibi yapmaya dahi hacet kalmaksızın ilk hacze kendiliğinden (takipsiz/imtiyazlı olarak) iştirak edebilirler (ancak bu hak evlilik, velayet veya vesayetin devamı esnasında yahut bunların bitmesini takip eden bir sene içinde kullanılabilir).',
    trueHighlight: ['İlk haciz üzerine satılan malın tutarı vezneye girinceye kadar', 'borçlunun eşi, çocukları ve vasi veya kayyımı olduğu şahıslar evlenme, velayet veya vesayet ilişkisinden doğan alacakları için', 'ilama dayanan nafaka alacaklıları, satılan malın tutarı vezneye girinceye kadar daha önce icra takibi yapmaya dahi hacet kalmaksızın ilk hacze kendiliğinden (takipsiz/imtiyazlı olarak) iştirak edebilirler', 'bitmesini takip eden bir sene içinde kullanılabilir'],
    trueCorrectPhrase: 'İİK m. 100 ve m. 101 Hacze İştirak Şifresi: 1) Hem adi hem imtiyazlı iştirakte son sınır: "Satılan malın bedeli icra veznesine GİRİNCEYE KADAR", 2) Adi iştirakte (m. 100): Takip yapıp haciz isteme yetkisi + Öncelik şartı + Nitelikli belge (aciz vesikası/ilam/noter senedi/resmi belge) şarttır, 3) İmtiyazlı iştirakte (m. 101): Borçlunun EŞİ, ÇOCUKLARI, KISITLISI (evlilik/velayet/vesayet devam ederken veya bitiminden itibaren 1 YIL içinde!) ve İLAMA DAYANAN NAFAKA ALACAKLISI önceden takip yapmadan dahi ilk hacze iştirak edebilir!',
    baseExplanation: 'İİK m. 100 (adi/takipli iştirak) ile İİK m. 101 (imtiyazlı/takipsiz iştirak) arasındaki farklar ve iştirakin üst zaman sınırının "satılan malın bedeli vezneye girinceye kadar" olması İcra Hukukunun en seçici konularındandır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'İlk haciz üzerine satılan malın tutarı vezneye girinceye kadar aynı derecede hacze iştirak edebilecek alacaklılar için öncelik (tekaddüm) şartı ve bunun aciz vesikası, ilam, noter senedi veya resmî daire makbuzu ile ispatı aranırken (hacze adi iştirak - İİK m. 100); borçlunun eşi, çocukları ve vasi veya kayyımı olduğu şahıslar evlenme, velayet veya vesayet ilişkisinden doğan alacakları için, ergin çocuklar ve diğer yakınlar TBK m. 364/370 kapsamındaki alacakları için ve ilama dayanan nafaka alacaklıları, satılan malın tutarı vezneye girinceye kadar daha önce icra takibi yapmaya dahi hacet kalmaksızın ilk hacze kendiliğinden (takipsiz/imtiyazlı olarak) iştirak edebilirler (ancak bu hak evlilik, velayet veya vesayetin devamı esnasında yahut bunların bitmesini takip eden bir sene içinde kullanılabilir)',
      wrongPhrase: 'Hacze iştirak talebi yalnızca ilk haciz tarihinden itibaren yedi gün içinde yapılabilir ve boşanan eş boşanmanın kesinleşmesinden itibaren beş yıl içinde takipsiz olarak hacze iştirak edebilir',
      correctPhrase: 'İlk haciz üzerine satılan malın tutarı vezneye girinceye kadar aynı derecede hacze iştirak edebilecek alacaklılar için öncelik (tekaddüm) şartı ve bunun aciz vesikası, ilam, noter senedi veya resmî daire makbuzu ile ispatı aranırken (hacze adi iştirak - İİK m. 100); borçlunun eşi, çocukları ve vasi veya kayyımı olduğu şahıslar evlenme, velayet veya vesayet ilişkisinden doğan alacakları için, ergin çocuklar ve diğer yakınlar TBK m. 364/370 kapsamındaki alacakları için ve ilama dayanan nafaka alacaklıları, satılan malın tutarı vezneye girinceye kadar daha önce icra takibi yapmaya dahi hacet kalmaksızın ilk hacze kendiliğinden (takipsiz/imtiyazlı olarak) iştirak edebilirler (ancak bu hak evlilik, velayet veya vesayetin devamı esnasında yahut bunların bitmesini takip eden bir sene içinde kullanılabilir)',
      explanation: 'İİK m. 100 ve m. 101 uyarınca hacze iştirak ilk haciz üzerine satılan malın bedeli icra veznesine girinceye kadar yapılabilir; eş, çocuk ve kısıtlının takipsiz iştirak hakkı ise evlilik, velayet veya vesayetin devamı esnasında yahut bunların bitmesini takip eden 1 YIL içinde kullanılabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bunun aciz vesikası, ilam, noter senedi veya resmî daire makbuzu ile ispatı aranırken',
      wrongPhrase: 'bunun adi yazılı bir bono, çek veya tanık beyanıyla ispat edilmesi yeterli görülürken',
      correctPhrase: 'bunun aciz vesikası, ilam, noter senedi veya resmî daire makbuzu ile ispatı aranırken',
      explanation: 'İİK m. 100/1 uyarınca hacze adi iştirakte muvazaalı alacak yaratılmasını önlemek amacıyla alacağın adi senetle (bono veya çekle bile!) ispatı kabul edilmez; yalnızca aciz vesikası, ilam, onama/düzenleme biçiminde noter senedi veya resmi daire makbuzu/belgesi gerekir!'
    }
  },
  {
    id: 'rule-icra-24',
    branch: 'İcra',
    subTopic: 'Haciz İsteme Süresi (1 Yıl) ve Satış İsteme Süresi (7343 s.K. ile Taşınır ve Taşınmazların Tümü İçin 1 Yıl!)',
    articleRef: 'İİK M. 78, 106 & 110',
    trueStatement:
      'Ödeme emrindeki müddet geçtikten ve borçlu itiraz etmiş ise itirazı kaldırıldıktan sonra mal beyanını beklemeksizin alacaklı haciz konulmasını isteyebilir; haciz istemek hakkı, ödeme emrinin tebliği tarihinden itibaren bir sene geçmekle düşer; alacaklı veya borçlu (7343 s.K. değişikliğiyle borçluya da satış isteme ve rızaen satış yetkisi tanınmıştır!), hacizden itibaren bir yıl içinde haczolunan malın (taşınır veya taşınmaz ayrımı olmaksızın!) satılmasını isteyebilir; borçlunun üçüncü şahıslardaki alacağı da bu hükme tabidir; bir malın satılması kanuni müddet (bir yıl) içinde istenmez veya icra müdürü tarafından verilecek karar gereği gerekli gider onbeş gün içinde depo edilmezse yahut talep geri alınıp da kanuni müddet içinde yenilenmezse o mal üzerindeki haciz kalkar.',
    trueHighlight: ['haciz istemek hakkı, ödeme emrinin tebliği tarihinden itibaren bir sene geçmekle düşer', 'hacizden itibaren bir yıl içinde haczolunan malın (taşınır veya taşınmaz ayrımı olmaksızın!) satılmasını isteyebilir', 'gerekli gider onbeş gün içinde depo edilmezse yahut talep geri alınıp da kanuni müddet içinde yenilenmezse o mal üzerindeki haciz kalkar'],
    trueCorrectPhrase: 'İİK m. 78, 106 ve 110 (7343 s.K. Değişikliği!) Süre Şifresi: 1) Haciz isteme süresi: Ödeme emrinin tebliğinden itibaren 1 YIL, 2) Satış isteme süresi: 7343 s.K. ile eski "taşınırda 6 ay - taşınmazda 1 yıl" ayrımı KALDIRILMIŞTIR; artık hem taşınır hem taşınmaz hem de 3. kişideki alacaklar için satış isteme süresi hacizden itibaren 1 YILDIR! 3) Satış giderleri 15 GÜN içinde peşin yatırılmazsa satış talep edilmemiş sayılır ve süresi içinde yenilenmezse o mal üzerindeki HACİZ KALKAR (takip düşmez, sadece o mal üzerindeki haciz kalkar)!',
    baseExplanation: 'Çok önemli güncel değişiklik (7343 s.K.): Eskiden taşınırlarda satış isteme süresi 6 ay, taşınmazlarda 1 yıldı; artık taşınır ve taşınmaz ayrımı kaldırılmış olup her ikisinde de satış isteme süresi HACİZDEN İTİBAREN 1 YILDIR!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'alacaklı veya borçlu (7343 s.K. değişikliğiyle borçluya da satış isteme ve rızaen satış yetkisi tanınmıştır!), hacizden itibaren bir yıl içinde haczolunan malın (taşınır veya taşınmaz ayrımı olmaksızın!) satılmasını isteyebilir',
      wrongPhrase: 'yalnızca alacaklı, hacizden itibaren taşınır mallarda altı ay, taşınmaz mallarda ise iki yıl içinde satılmasını isteyebilir; borçlunun satış isteme yetkisi yoktur',
      correctPhrase: 'alacaklı veya borçlu (7343 s.K. değişikliğiyle borçluya da satış isteme ve rızaen satış yetkisi tanınmıştır!), hacizden itibaren bir yıl içinde haczolunan malın (taşınır veya taşınmaz ayrımı olmaksızın!) satılmasını isteyebilir',
      explanation: '7343 sayılı Kanun ile İİK m. 106 değiştirilmiş olup taşınır/taşınmaz ayrımı kaldırılarak satış isteme süresi tüm mallar için hacizden itibaren 1 YIL olarak eşitlenmiş ve alacaklının yanı sıra BORÇLUYA da satış isteme (ve İİK m. 111/a uyarınca rızaen satış talep etme) hakkı tanınmıştır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'o mal üzerindeki haciz kalkar',
      wrongPhrase: 'icra takibi bütünüyle düşer ve alacaklının alacağı zamanaşımına uğrar',
      correctPhrase: 'o mal üzerindeki haciz kalkar',
      explanation: 'İİK m. 110 uyarınca bir yıllık sürede satış istenmemesi (veya 15 günde satış giderinin yatırılmaması) halinde icra takibi düşmez; yalnızca o mal üzerindeki HACİZ KALKAR!'
    }
  },
  {
    id: 'rule-icra-25',
    branch: 'İcra',
    subTopic: 'İhalenin Feshi Talebi (İİK m. 134): Görevli Merci (İcra Mahkemesi), İlgililer ve Süreler (7 Gün / 1 Yıl)',
    articleRef: 'İİK M. 134',
    trueStatement:
      'İcra dairesince yapılan açık artırma (ihale) sonucunda satılan malın ihalesinin feshi; yalnız satış isteyen alacaklı, borçlu, mahcuz malın resmî sicilinde (tapu, gemi, trafik sicili vb.) kayıtlı olan ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler tarafından yurt içinde bir adres göstermek koşuluyla icra mahkemesinden şikâyet yolu ile ihale tarihinden itibaren yedi gün içinde istenebilir; ilgililerin ihale yapıldığı ana kadar cereyan eden muamelelerdeki yolsuzluklara en geç ihale günü ıttıla peyda ettiği kabul edilir; ancak ihaleye fesat karıştırılmış olması veya kendisine satış ilanı tebliğ edilmemiş olması gibi durumlarda fesih talebi yolsuzluğu öğrendiği tarihten itibaren yedi gün ve her hâlde ihale tarihinden itibaren bir yıl içinde yapılabilir.',
    trueHighlight: ['yalnız satış isteyen alacaklı, borçlu, mahcuz malın resmî sicilinde (tapu, gemi, trafik sicili vb.) kayıtlı olan ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler tarafından yurt içinde bir adres göstermek koşuluyla icra mahkemesinden şikâyet yolu ile ihale tarihinden itibaren yedi gün içinde istenebilir', 'yolsuzluğu öğrendiği tarihten itibaren yedi gün ve her hâlde ihale tarihinden itibaren bir yıl içinde yapılabilir'],
    trueCorrectPhrase: 'İİK m. 134 İhalenin Feshi Şifresi: 1) Görevli merci: İCRA MAHKEMESİ (ortaklık giderilmesi satışlarında ise Sulh Hukuk Mahkemesi!), 2) Süre: İhale tarihinden itibaren 7 GÜN (fesat veya satış ilanı tebliğ edilmemesi halinde öğrenmeden itibaren 7 gün ve her halde ihaleden itibaren 1 YIL!), 3) İhalenin feshini isteyebilecek kişiler tahdidi (sınırlı) sayılmıştır ve YURT İÇİNDE ADRES GÖSTERME zorunluluğu vardır, 4) Satış isteyen alacaklı, borçlu ve resmi sicilde kayıtlı ilgililer dışındaki kişiler (örneğin pey süren üçüncü kişiler!) ihale bedelinin %5’i oranında NİSPİ HARÇ ödemekle yükümlüdür ve fesih talebi esastan reddedilirse %10 para cezasına (ağır kusurda %20’ye kadar) hükmedilir!',
    baseExplanation: 'İİK m. 134’te ihalenin feshini isteyebilecek kişiler (tahdidi sayım), "7 gün ve her halde 1 yıl" süresi ve 7343 s.K. ile pey sürenlerin %5 nispi harç yatırma zorunluluğu İcra Hukukunun en sık sorulan kurallarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'icra mahkemesinden şikâyet yolu ile ihale tarihinden itibaren yedi gün içinde istenebilir; ilgililerin ihale yapıldığı ana kadar cereyan eden muamelelerdeki yolsuzluklara en geç ihale günü ıttıla peyda ettiği kabul edilir; ancak ihaleye fesat karıştırılmış olması veya kendisine satış ilanı tebliğ edilmemiş olması gibi durumlarda fesih talebi yolsuzluğu öğrendiği tarihten itibaren yedi gün ve her hâlde ihale tarihinden itibaren bir yıl içinde yapılabilir',
      wrongPhrase: 'asliye hukuk mahkemesinde dava yolu ile ihale tarihinden itibaren otuz gün içinde istenebilir; ihaleye fesat karıştırılmış olması durumunda ise süre ihale tarihinden itibaren on yıldır',
      correctPhrase: 'icra mahkemesinden şikâyet yolu ile ihale tarihinden itibaren yedi gün içinde istenebilir; ilgililerin ihale yapıldığı ana kadar cereyan eden muamelelerdeki yolsuzluklara en geç ihale günü ıttıla peyda ettiği kabul edilir; ancak ihaleye fesat karıştırılmış olması veya kendisine satış ilanı tebliğ edilmemiş olması gibi durumlarda fesih talebi yolsuzluğu öğrendiği tarihten itibaren yedi gün ve her hâlde ihale tarihinden itibaren bir yıl içinde yapılabilir',
      explanation: 'İİK m. 134 uyarınca ihalenin feshi asliye hukuk mahkemesinde dava yoluyla değil, İCRA MAHKEMESİNDEN şikâyet yoluyla ihaleden itibaren 7 GÜN içinde (fesat/tebligatsızlık hallerinde öğrenmeden itibaren 7 gün ve her halde ihale tarihinden itibaren 1 YIL içinde) istenebilir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnız satış isteyen alacaklı, borçlu, mahcuz malın resmî sicilinde (tapu, gemi, trafik sicili vb.) kayıtlı olan ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler tarafından',
      wrongPhrase: 'borçlunun diğer tüm adi alacaklıları, komşuları ve ihaleyi izlemeye gelen ancak pey sürmeyen herhangi bir vatandaş tarafından',
      correctPhrase: 'yalnız satış isteyen alacaklı, borçlu, mahcuz malın resmî sicilinde (tapu, gemi, trafik sicili vb.) kayıtlı olan ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler tarafından',
      explanation: 'İİK m. 134/2 uyarınca ihalenin feshini yalnız kanunda sınırlı olarak sayılan kişiler (satış isteyen alacaklı, borçlu, resmi sicildeki ilgililer/sınırlı ayni hak sahipleri ve pey sürerek ihaleye katılanlar) isteyebilir; başkaları tarafından yapılan fesih talebi dosya üzerinden ve kesin olarak reddedilir!'
    }
  },
  {
    id: 'rule-icra-26',
    branch: 'İcra',
    subTopic: 'Kambiyo Senetlerine Mahsus Haciz Yoluyla Takip (İİK m. 168-170): 5 Gün İtiraz, 10 Gün Ödeme ve Takibin Durmaması',
    articleRef: 'İİK M. 168-170',
    trueStatement:
      'Kambiyo senetlerine (poliçe, bono, çek) mahsus haciz yoluyla takipte ödeme emrinde; borcun ve takip masraflarının on gün içinde ödenmesi, takibin dayanağı olan senet kambiyo senedi vasfını haiz değilse beş gün içinde icra mahkemesine şikâyet edilmesi, borçlunun borca veya imzaya itirazı varsa yine beş gün içinde bir dilekçe ile icra mahkemesine bildirmesi ihtar olunur; borca veya imzaya itiraz satıştan başka icra takip muamelelerini durdurmaz (ancak icra mahkemesi incelemesini yaparken takibin geçici olarak durdurulmasına karar verebilir).',
    trueHighlight: ['borcun ve takip masraflarının on gün içinde ödenmesi', 'kambiyo senedi vasfını haiz değilse beş gün içinde icra mahkemesine şikâyet edilmesi', 'borca veya imzaya itirazı varsa yine beş gün içinde bir dilekçe ile icra mahkemesine bildirmesi ihtar olunur; borca veya imzaya itiraz satıştan başka icra takip muamelelerini durdurmaz'],
    trueCorrectPhrase: 'İİK m. 168-170 Kambiyo Takibi Altın Kuralları (Genel Haciz Yoluyla Farkları!): 1) Ödeme süresi 7 gün değil, 10 GÜNDÜR, 2) Borca/imzaya itiraz (ve kambiyo vasfına şikâyet) süresi 7 gün değil, 5 GÜNDÜR, 3) İtiraz icra dairesine değil, DİLEKÇEYLE İCRA MAHKEMESİNE yapılır, 4) Genel haciz yolunda itiraz takibi kendiliğinden durdururken, kambiyo takibinde itiraz SATIŞTAN BAŞKA İCRA TAKİP İŞLEMLERİNİ DURDURMAZ (alacaklı haciz isteyebilir, sadece satış yapamaz)!',
    baseExplanation: 'Genel haciz yolu (7 gün ödeme, 7 gün icra dairesine sözlü/yazılı itiraz, takip durur) ile Kambiyo senetlerine mahsus haciz yolu (10 gün ödeme, 5 gün icra mahkemesine yazılı itiraz/şikâyet, satıştan başka işlem durmaz) karşılaştırması HMGS İcra Hukukunun 1 numaralı sorusudur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'borcun ve takip masraflarının on gün içinde ödenmesi, takibin dayanağı olan senet kambiyo senedi vasfını haiz değilse beş gün içinde icra mahkemesine şikâyet edilmesi, borçlunun borca veya imzaya itirazı varsa yine beş gün içinde bir dilekçe ile icra mahkemesine bildirmesi ihtar olunur; borca veya imzaya itiraz satıştan başka icra takip muamelelerini durdurmaz',
      wrongPhrase: 'borcun yedi gün içinde ödenmesi ve borca veya imzaya itirazın yedi gün içinde sözlü veya yazılı olarak icra dairesine bildirmesi ihtar olunur; yapılan itirazla birlikte haciz dahil tüm icra takip işlemleri kendiliğinden durur',
      correctPhrase: 'borcun ve takip masraflarının on gün içinde ödenmesi, takibin dayanağı olan senet kambiyo senedi vasfını haiz değilse beş gün içinde icra mahkemesine şikâyet edilmesi, borçlunun borca veya imzaya itirazı varsa yine beş gün içinde bir dilekçe ile icra mahkemesine bildirmesi ihtar olunur; borca veya imzaya itiraz satıştan başka icra takip muamelelerini durdurmaz',
      explanation: 'İİK m. 168-170 uyarınca kambiyo senetlerine mahsus haciz yolunda ödeme süresi 10 gün, itiraz/şikâyet süresi 5 gündür; itiraz icra dairesine değil dilekçeyle İCRA MAHKEMESİNE yapılır ve satıştan başka icra takip işlemlerini (haczi) durdurmaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'takibin dayanağı olan senet kambiyo senedi vasfını haiz değilse beş gün içinde icra mahkemesine şikâyet edilmesi',
      wrongPhrase: 'takip konusu senedin kambiyo senedi vasfını haiz olup olmadığı ve alacaklının kambiyo takibi yapma hakkı icra mahkemesince re’sen incelenemeyeceğinden beş gün içinde şikâyet edilmezse bir daha hiçbir aşamada dikkate alınamaz',
      correctPhrase: 'takibin dayanağı olan senet kambiyo senedi vasfını haiz değilse beş gün içinde icra mahkemesine şikâyet edilmesi',
      explanation: 'Dikkat (İİK m. 170/a-2): Borçlu 5 gün içinde şikâyet etmemiş olsa dahi, eğer borca/imzaya itiraz nedeniyle dosya icra mahkemesinin önüne gelmişse, icra mahkemesi senedin kambiyo senedi niteliğini ve alacaklının takip hakkını RE’SEN (kendiliğinden) inceleyerek takibi iptal edebilir!'
    }
  },
  {
    id: 'rule-icra-27',
    branch: 'İcra',
    subTopic: 'Konkordato Mühlet Süreleri: Geçici Mühlet (3 Ay + 2 Ay = 5 Ay) ve Kesin Mühlet (1 Yıl + 6 Ay = 18 Ay)',
    articleRef: 'İİK M. 287 & M. 289',
    trueStatement:
      'Konkordato talebi üzerine asliye ticaret mahkemesi, İİK m. 286’da belirtilen belgelerin eksiksiz olarak mevcut olduğunu tespit ederse derhâl geçici mühlet kararı verir ve geçici konkordato komiseri görevlendirir; geçici mühlet üç aydır, mahkeme bu üç aylık süre dolmadan borçlunun veya geçici komiserin yapacağı talep üzerine geçici mühleti en fazla iki ay daha uzatabilir, geçici mühletin toplam süresi beş ayı geçemez; konkordatonun başarıya ulaşmasının mümkün olduğunun anlaşılması hâlinde ise borçluya bir yıllık kesin mühlet verilir; güçlük arz eden özel durumlarda kesin mühlet komiserin veya borçlunun talebiyle altı aya kadar uzatılabilir (toplam kesin mühlet 18 ay).',
    trueHighlight: ['geçici mühlet üç aydır, mahkeme bu üç aylık süre dolmadan borçlunun veya geçici komiserin yapacağı talep üzerine geçici mühleti en fazla iki ay daha uzatabilir, geçici mühletin toplam süresi beş ayı geçemez', 'borçluya bir yıllık kesin mühlet verilir; güçlük arz eden özel durumlarda kesin mühlet komiserin veya borçlunun talebiyle altı aya kadar uzatılabilir'],
    trueCorrectPhrase: 'İİK m. 287 ve m. 289 Konkordato Mühlet Şifresi: 1) Görevli mahkeme: ASLİYE TİCARET MAHKEMESİ (tacir olmayan borçlu için de asliye ticaret görevlidir!), 2) Geçici mühlet: 3 AY + en çok 2 AY uzatma = Toplam en çok 5 AY (Geçici mühlet kesin mühletin sonuçlarını doğurur ve geçici mühlet kararına karşı kanun yoluna başvurulamaz!), 3) Kesin mühlet: 1 YIL + en çok 6 AY uzatma = Toplam en çok 18 AY!',
    baseExplanation: '7101 s.K. ile düzenlenen konkordato kurumunda "Geçici mühlet: 3 + 2 = 5 ay" ve "Kesin mühlet: 1 yıl + 6 ay = 18 ay" süreleri ile mühlet içinde rehinli alacaklıların takip yapabilip muhafaza ve satış yapamaması (ve İşK’dan doğan işçi/nafaka alacaklarının mühletten etkilenmemesi - m. 294) çok önemli sınav bilgileridir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'geçici mühlet üç aydır, mahkeme bu üç aylık süre dolmadan borçlunun veya geçici komiserin yapacağı talep üzerine geçici mühleti en fazla iki ay daha uzatabilir, geçici mühletin toplam süresi beş ayı geçemez; konkordatonun başarıya ulaşmasının mümkün olduğunun anlaşılması hâlinde ise borçluya bir yıllık kesin mühlet verilir; güçlük arz eden özel durumlarda kesin mühlet komiserin veya borçlunun talebiyle altı aya kadar uzatılabilir',
      wrongPhrase: 'geçici mühlet altı aydır ve altı ay daha uzatılarak bir yıla çıkarılabilir; kesin mühlet ise iki yıl olup bir yıl daha uzatılabilir',
      correctPhrase: 'geçici mühlet üç aydır, mahkeme bu üç aylık süre dolmadan borçlunun veya geçici komiserin yapacağı talep üzerine geçici mühleti en fazla iki ay daha uzatabilir, geçici mühletin toplam süresi beş ayı geçemez; konkordatonun başarıya ulaşmasının mümkün olduğunun anlaşılması hâlinde ise borçluya bir yıllık kesin mühlet verilir; güçlük arz eden özel durumlarda kesin mühlet komiserin veya borçlunun talebiyle altı aya kadar uzatılabilir',
      explanation: 'İİK m. 287/4 ve m. 289/3-5 uyarınca geçici mühlet 3 aydır (en fazla 2 ay uzatılabilir, toplam 5 ayı geçemez); kesin mühlet ise 1 yıldır (güçlük arz eden özel durumlarda en fazla 6 ay uzatılabilir)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Konkordato talebi üzerine asliye ticaret mahkemesi, İİK m. 286’da belirtilen belgelerin eksiksiz olarak mevcut olduğunu tespit ederse derhâl geçici mühlet kararı verir',
      wrongPhrase: 'Konkordato yoluna yalnızca iflasa tabi tacirler başvurabilir; tacir olmayan gerçek kişilerin konkordato talep etmesi yasaktır ve geçici mühlet talebinin kabulü kararına karşı alacaklılar istinaf yoluna başvurabilir',
      correctPhrase: 'Konkordato talebi üzerine asliye ticaret mahkemesi, İİK m. 286’da belirtilen belgelerin eksiksiz olarak mevcut olduğunu tespit ederse derhâl geçici mühlet kararı verir',
      explanation: 'İİK m. 285/1 ve m. 287/son uyarınca iflasa tabi olsun veya olmasın (tacir olmayanlar dahil!) her borçlu konkordato talep edebilir; ayrıca geçici mühlet talebinin kabulü kararına karşı kanun yoluna başvurulamaz!'
    }
  },

  // =========================================================================
  // 3. SOSYAL GÜVENLİK, VERGİ CEZA VE BARO ORGANLARI EK KURALLARI
  // =========================================================================
  {
    id: 'rule-is-21',
    branch: 'İş Hukuku',
    subTopic: 'İş Kazası Kavramı ve İşverenin SGK’ya İş Kazasını Bildirim Süresi (3 İş Günü)',
    articleRef: '5510 S. SSGSSK M. 13 & 6331 S. İSGK M. 14',
    trueStatement:
      'Sigortalının işyerinde bulunduğu sırada, işveren tarafından yürütülmekte olan iş nedeniyle, görevli olarak işyeri dışında başka bir yere gönderilmesi nedeniyle asıl işini yapmaksızın geçen zamanlarda, emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanlarda veya işverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında meydana gelen ve sigortalıyı hemen veya sonradan bedenen ya da ruhen engelli hâle getiren olay iş kazasıdır; işveren, iş kazasını kazadan sonraki üç iş günü içinde Sosyal Güvenlik Kurumuna bildirmekle yükümlüdür.',
    trueHighlight: ['işyerinde bulunduğu sırada, işveren tarafından yürütülmekte olan iş nedeniyle, görevli olarak işyeri dışında başka bir yere gönderilmesi nedeniyle asıl işini yapmaksızın geçen zamanlarda, emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanlarda veya işverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında', 'iş kazasını kazadan sonraki üç iş günü içinde Sosyal Güvenlik Kurumuna bildirmekle yükümlüdür'],
    trueCorrectPhrase: '5510 s. SSGSSK m. 13 ve 6331 s. İSGK m. 14 İş Kazası Şifresi: 1) İşyerinde bulunduğu sırada (ara dinlenmesinde veya kendi kusuruyla olsa bile!), görevli olarak dışarı gönderildiğinde, süt izninde veya İŞVERENCE SAĞLANAN SERVİSLE işe gidiş-gelişte meydana gelen olay İŞ KAZASIDIR (kendi özel aracıyla veya toplu taşımayla işe gelirken geçirdiği kaza ise iş kazası sayılmaz!), 2) İşverenin SGK’ya bildirim süresi: Kazadan sonraki 3 İŞ GÜNÜ (kendi adına bağımsız çalışanlarda ise 1 ayı geçmemek şartıyla rahatsızlığının bildirim yapmaya engel olmadığı günden sonraki 3 iş günü)!',
    baseExplanation: '5510 s.K. m. 13’teki 5 iş kazası hali (özellikle süt izninde ve işveren servisinde geçen kazaların iş kazası sayılması) ve işverenin 3 iş günü içinde SGK’ya bildirim yükümlülüğü İş ve Sosyal Güvenlik Hukuku sorularının vazgeçilmezidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işveren, iş kazasını kazadan sonraki üç iş günü içinde Sosyal Güvenlik Kurumuna bildirmekle yükümlüdür',
      wrongPhrase: 'işveren, iş kazasını kazadan sonraki otuz gün içinde Çalışma ve İş Kurumu İl Müdürlüğüne bildirmekle yükümlüdür',
      correctPhrase: 'işveren, iş kazasını kazadan sonraki üç iş günü içinde Sosyal Güvenlik Kurumuna bildirmekle yükümlüdür',
      explanation: '5510 s. SSGSSK m. 13/2-a ve 6331 s. İSGK m. 14/2 uyarınca işveren iş kazalarını kazadan sonraki 3 İŞ GÜNÜ içinde Sosyal Güvenlik Kurumuna bildirmekle yükümlüdür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanlarda veya işverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında meydana gelen ve sigortalıyı hemen veya sonradan bedenen ya da ruhen engelli hâle getiren olay iş kazasıdır',
      wrongPhrase: 'emziren kadın sigortalının süt izni sırasında işyeri dışında geçirdiği kazalar ile işverenin sağladığı servis aracında işe giderken meydana gelen trafik kazaları işin yürütümüyle ilgili olmadığından hiçbir zaman iş kazası sayılmaz',
      correctPhrase: 'emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanlarda veya işverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında meydana gelen ve sigortalıyı hemen veya sonradan bedenen ya da ruhen engelli hâle getiren olay iş kazasıdır',
      explanation: '5510 s. SSGSSK m. 13/1-(d) ve (e) bentleri uyarınca emziren kadın sigortalının çocuğuna süt vermek için ayrılan zamanlarda ve sigortalının işverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında meydana gelen kazalar kanunen açıkça İŞ KAZASI sayılmıştır!'
    }
  },
  {
    id: 'rule-vergi-13',
    branch: 'Vergi',
    subTopic: 'Vergi Ziyaı Cezası (1 Kat / Kaçakçılıkta 3 Kat) ve Pişmanlık ve Islah Kurumu (15 Gün Ödeme Süresi)',
    articleRef: '213 S. VUK M. 341, 344, 359 & 371',
    trueStatement:
      'Vergi ziyaı, mükellefin veya sorumlunun vergilendirme ile ilgili ödevlerini zamanında yerine getirmemesi veya eksik yerine getirmesi yüzünden verginin zamanında tahakkuk ettirilmemesini veya eksik tahakkuk ettirilmesini ifade eder; vergi ziyaı suçu işleyenlere ziyaa uğratılan verginin bir katı (VUK m. 359’da yazılı kaçakçılık fiilleriyle vergi ziyaına sebebiyet verilmesi hâlinde üç katı; kendiliğinden verilen beyannamelerde ise yüzde ellisi) tutarında vergi ziyaı cezası kesilir; beyana dayanan vergilerde vergi ziyaı cezasını gerektiren fiilleri işleyen mükellefler, keyfiyeti ilgili makamlara kendiliğinden dilekçe ile haber verir ve haber verme tarihinden başlayarak onbeş gün içinde beyanname verip vergiyi ve pişmanlık zammını öderlerse (pişmanlık ve ıslah - VUK m. 371) kendilerine vergi ziyaı cezası kesilmez (ancak Emlak Vergisinde pişmanlık hükümleri uygulanmaz!).',
    trueHighlight: ['vergi ziyaı suçu işleyenlere ziyaa uğratılan verginin bir katı (VUK m. 359’da yazılı kaçakçılık fiilleriyle vergi ziyaına sebebiyet verilmesi hâlinde üç katı; kendiliğinden verilen beyannamelerde ise yüzde ellisi) tutarında vergi ziyaı cezası kesilir', 'haber verme tarihinden başlayarak onbeş gün içinde beyanname verip vergiyi ve pişmanlık zammını öderlerse (pişmanlık ve ıslah - VUK m. 371) kendilerine vergi ziyaı cezası kesilmez (ancak Emlak Vergisinde pişmanlık hükümleri uygulanmaz!)'],
    trueCorrectPhrase: 'VUK m. 344 ve m. 371 Vergi Ceza ve Pişmanlık Şifresi: 1) Vergi ziyaı cezası: Normalde 1 KAT; Kaçakçılık (m. 359: çift defter, sahte/SMİYB belge vb.) fiilleriyle işlenirse 3 KAT; İnceleme başlamadan kendiliğinden verilen beyannamede %50! 2) Pişmanlık ve Islah (VUK m. 371): Henüz ihbar/inceleme/takdire sevk olmadan kendiliğinden bildirilip 15 GÜN içinde beyanname verilir ve vergi + pişmanlık zammı ödenirse VERGİ ZİYAI CEZASI KESİLMEZ (ve m. 359 kaçakçılık suçundan ceza kovuşturması da yapılmaz), 3) EMLAK VERGİSİNDE pişmanlık hükümleri uygulanmaz (VUK m. 371/son)!',
    baseExplanation: 'Vergi Hukukunda "Vergi ziyaı cezasının 1 kat / kaçakçılıkta 3 kat olması", "Pişmanlıkta 15 günlük beyan ve ödeme süresi" ve "Emlak vergisinde pişmanlık hükümlerinin uygulanmaması" HMGS Vergi Hukuku sorularının en seçici noktalarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'haber verme tarihinden başlayarak onbeş gün içinde beyanname verip vergiyi ve pişmanlık zammını öderlerse (pişmanlık ve ıslah - VUK m. 371) kendilerine vergi ziyaı cezası kesilmez (ancak Emlak Vergisinde pişmanlık hükümleri uygulanmaz!)',
      wrongPhrase: 'haber verme tarihinden başlayarak altmış gün içinde vergiyi öderlerse pişmanlık hükümlerinden yararlanırlar ve pişmanlık hükümleri Emlak Vergisi dahil tüm vergi, resim ve harçlarda istisnasız uygulanır',
      correctPhrase: 'haber verme tarihinden başlayarak onbeş gün içinde beyanname verip vergiyi ve pişmanlık zammını öderlerse (pişmanlık ve ıslah - VUK m. 371) kendilerine vergi ziyaı cezası kesilmez (ancak Emlak Vergisinde pişmanlık hükümleri uygulanmaz!)',
      explanation: 'VUK m. 371 uyarınca pişmanlık ve ıslahta beyanname verme ve ödeme süresi 60 gün değil 15 GÜNDÜR ve VUK m. 371 son fıkra uyarınca Emlak Vergisinde pişmanlık hükümleri uygulanmaz!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'vergi ziyaı suçu işleyenlere ziyaa uğratılan verginin bir katı (VUK m. 359’da yazılı kaçakçılık fiilleriyle vergi ziyaına sebebiyet verilmesi hâlinde üç katı; kendiliğinden verilen beyannamelerde ise yüzde ellisi) tutarında vergi ziyaı cezası kesilir',
      wrongPhrase: 'vergi ziyaı kabahati yalnızca maktu usulsüzlük cezası gerektirmekte olup kaçakçılık fiilleriyle vergi ziyaına sebebiyet verilmesi hâlinde dahi ziyaa uğratılan verginin yalnızca yüzde onu (%10’u) oranında ceza kesilir',
      correctPhrase: 'vergi ziyaı suçu işleyenlere ziyaa uğratılan verginin bir katı (VUK m. 359’da yazılı kaçakçılık fiilleriyle vergi ziyaına sebebiyet verilmesi hâlinde üç katı; kendiliğinden verilen beyannamelerde ise yüzde ellisi) tutarında vergi ziyaı cezası kesilir',
      explanation: 'VUK m. 344 uyarınca vergi ziyaı cezası ziyaa uğratılan verginin 1 katıdır; VUK m. 359’daki kaçakçılık fiilleriyle vergi ziyaına sebebiyet verilmesi halinde ise bu ceza 3 kat (iştirak edenlere 1 kat) olarak uygulanır!'
    }
  },
  {
    id: 'rule-avukatlik-11',
    branch: 'Avukatlık',
    subTopic: 'Baroların Kuruluşu (En Az 30 Avukat), Baro Organlarının Seçim Süresi (2 Yıl) ve TBB Başkanlık/Yönetim Süresi (4 Yıl)',
    articleRef: '1136 S. AV.K. M. 77, 79, 90, 96 & 114',
    trueStatement:
      'Bölgesi içinde en az otuz avukat bulunan her il merkezinde bir baro kurulur (beşbinden fazla avukat bulunan illerde ise asgari ikibin avukatla yeni bir baro kurulabilir); baroların organları baro genel kurulu, baro yönetim kurulu, baro başkanlığı, baro başkanlık divanı, baro disiplin kurulu ve baro denetleme kuruludur; baro başkanı iki yıllık bir görev süresi için seçilir (en az beş yıl avukatlık yapmış olması şarttır) ve yeniden seçilmesi caizdir; baro yönetim kurulu üyeleri (2 yıl için) ve baro disiplin kurulu üyeleri (2 yıl için) seçilirken, Türkiye Barolar Birliği (TBB) Başkanı ve TBB Yönetim/Disiplin/Denetleme Kurulu üyeleri dört yıllık bir görev süresi için seçilirler.',
    trueHighlight: ['Bölgesi içinde en az otuz avukat bulunan her il merkezinde bir baro kurulur (beşbinden fazla avukat bulunan illerde ise asgari ikibin avukatla yeni bir baro kurulabilir)', 'baro başkanı iki yıllık bir görev süresi için seçilir (en az beş yıl avukatlık yapmış olması şarttır)', 'Türkiye Barolar Birliği (TBB) Başkanı ve TBB Yönetim/Disiplin/Denetleme Kurulu üyeleri dört yıllık bir görev süresi için seçilirler'],
    trueCorrectPhrase: '1136 s. Avukatlık Kanunu Baro ve TBB Organları Şifresi: 1) İl merkezinde baro kurulması için en az 30 AVUKAT gerekir; 7249 s.K. (Çoklu Baro) uyarınca avukat sayısı 5.000’den fazla olan illerde asgari 2.000 avukatla yeni bir baro kurulabilir, 2) Baro Başkanı, Yönetim, Disiplin ve Denetleme Kurullarının görev süresi 2 YILDIR (Baro başkanı için en az 5 yıl kıdem şarttır), 3) Türkiye Barolar Birliği (TBB) Başkanı (en az 10 yıl kıdem şarttır!) ve TBB Yönetim/Disiplin/Denetleme Kurullarının görev süresi ise 4 YILDIR!',
    baseExplanation: 'Baro organlarının görev süresinin 2 yıl (Baro başkanı için 5 yıl kıdem), TBB organlarının görev süresinin ise 4 yıl (TBB başkanı için 10 yıl kıdem) olması ve baro kuruluşundaki 30 avukat (çoklu baroda >5.000 avukatlı ilde en az 2.000 imza) şartı Avukatlık Hukukunun en sık sorulan kurallarıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'baro başkanı iki yıllık bir görev süresi için seçilir (en az beş yıl avukatlık yapmış olması şarttır) ve yeniden seçilmesi caizdir; baro yönetim kurulu üyeleri (2 yıl için) ve baro disiplin kurulu üyeleri (2 yıl için) seçilirken, Türkiye Barolar Birliği (TBB) Başkanı ve TBB Yönetim/Disiplin/Denetleme Kurulu üyeleri dört yıllık bir görev süresi için seçilirler',
      wrongPhrase: 'baro başkanı ve baro yönetim kurulu üyeleri beş yıllık bir görev süresi için seçilir ve süresi biten baro başkanı yeniden seçilemez; Türkiye Barolar Birliği Başkanı ise bir yıllık görev süresi için seçilir',
      correctPhrase: 'baro başkanı iki yıllık bir görev süresi için seçilir (en az beş yıl avukatlık yapmış olması şarttır) ve yeniden seçilmesi caizdir; baro yönetim kurulu üyeleri (2 yıl için) ve baro disiplin kurulu üyeleri (2 yıl için) seçilirken, Türkiye Barolar Birliği (TBB) Başkanı ve TBB Yönetim/Disiplin/Denetleme Kurulu üyeleri dört yıllık bir görev süresi için seçilirler',
      explanation: '1136 s. Av.K. m. 90, 96 ve 114-124 uyarınca baro başkanı ve baro kurulları 2 yıl için seçilir (ve yeniden seçilebilir); Türkiye Barolar Birliği (TBB) Başkanı ve kurulları ise 4 yıl için seçilir!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'Bölgesi içinde en az otuz avukat bulunan her il merkezinde bir baro kurulur (beşbinden fazla avukat bulunan illerde ise asgari ikibin avukatla yeni bir baro kurulabilir)',
      wrongPhrase: 'Bölgesi içinde en az beşyüz avukat bulunmayan illerde baro kurulamaz ve hiçbir ilde birden fazla baro kurulmasına kanunen izin verilmez',
      correctPhrase: 'Bölgesi içinde en az otuz avukat bulunan her il merkezinde bir baro kurulur (beşbinden fazla avukat bulunan illerde ise asgari ikibin avukatla yeni bir baro kurulabilir)',
      explanation: '1136 s. Av.K. m. 77/1 uyarınca bölgesi içinde en az 30 avukat bulunan her il merkezinde bir baro kurulur; ayrıca 7249 s.K. ile yapılan değişiklikle beşbinden fazla avukat bulunan illerde asgari ikibin avukatla yeni bir baro kurulabilmesine imkan tanınmıştır!'
    }
  }
];
