import { StructuredLegalClusterSeed } from '../types/legalEngine';

export const LAW_CLUSTERS_IS_VERGI_AVK: StructuredLegalClusterSeed[] = [
  // =========================================================================
  // İŞ VE SOSYAL GÜVENLİK HUKUKU (10 KÜME - 50 ANTİTE)
  // =========================================================================
  {
    branchId: 'is_sgk',
    subTopic: '4857 İş Kanunu Kapsamı, İstisnaları, İşyeri Devri ve Asıl-Alt İşveren İlişkisi',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Kapsam Dışı İstisnalar (m. 4/1)',
        article: '4857 s. İş K. m. 4/1',
        rule: 'Deniz ve hava taşımacılığı, elli ve daha az çalışanın bulunduğu tarım-orman işletmeleri, ev hizmetleri, çıraklar, sporcular, rehabilite edilenler ile üç kişinin çalıştığı esnaf atölyeleri bu mevzuata tabi değildir.',
        hallmark: 'Muaf tutulan bu hizmet ilişkilerinde uyuşmazlıklar kural olarak Türk Borçlar Kanunu hizmet sözleşmesi hükümlerine veya kendi özel yasalarına göre çözümlenir.',
        vignette: 'Bir aile konutunda yatılı temizlik ve çocuk bakımı işlerini yürüten Ayşe Hanım, çalışma koşulları ve tazminat hakları bakımından genel iş mevzuatından yararlanıp yararlanamayacağını araştırmaktadır.',
        clues: ['Ev hizmetlerinde istihdam', 'Özel koruyucu rejimin dışında kalma', 'Genel borçlar hukuku uygulanması'],
        remedy: 'Bu gruplara giren uyuşmazlıklarda genel hukuk mahkemeleri (Asliye Hukuk) görevli olup, talep edilen alacaklar TBK kurallarına göre değerlendirilir.',
        pearl: '50 dahil (50 ve daha az) tarım-orman işçisi, ev hizmetleri, sporcular, çıraklar ve 3 kişilik esnaf yerleri 4857 kapsamı dışındadır.',
        trapFalse: 'altmış kişinin çalıştığı bir tarım işletmesinde görev yapan tüm işçiler kapsam dışında bırakılmıştır',
        trapHighlight: 'altmış kişinin çalıştığı bir tarım işletmesinde'
      },
      {
        name: 'İstisna Dışı Özel Alanlar (m. 4/2)',
        article: '4857 s. İş K. m. 4/2',
        rule: 'Kıyılarda ve limanlarda gemilerden karaya yükleme-boşaltma, havacılık yer tesisleri, tarım sanatları ve alet yapımı, tarım işletmelerindeki yapı faaliyetleri ile halka açık park-bahçe hizmetleri genel iş mevzuatına tabidir.',
        hallmark: 'Ana sektör görünüşte muaf bölümlerden biri olsa dahi yasa koyucu sayılan bu somut çalışma kollarını koruyucu mevzuatın içine özellikle dahil etmiştir.',
        vignette: 'Bir hava yolu şirketinin havalimanındaki bagaj aktarma, uçak temizliği ve bilet yer hizmetleri biriminde çalışan teknisyen, havacılık sektöründe olduğu gerekçesiyle koruyucu hükümlerden dışlanmak istenmektedir.',
        clues: ['Havacılık yer tesislerinde görev', 'Uçuş mürettebatı niteliği taşımama', 'Koruyucu mevzuatın emredici alanı'],
        remedy: 'Uyuşmazlık iş mahkemesinde görülür ve çalışan 4857 sayılı yasadaki tüm ücret, izin, fazla mesai ve güvence haklarından eksiksiz yararlanır.',
        pearl: 'Havacılıkta uçuş personeli hariç yer tesisleri, denizcilikte liman yükleme-boşaltma ve halka açık park-bahçe işleri 4857 kapsamındadır.',
        trapFalse: 'limanlarda ve iskelelerde gemilerden karaya yapılan yükleme ve boşaltma işleri deniz taşımacılığı sayılarak kapsam dışı tutulur',
        trapHighlight: 'deniz taşımacılığı sayılarak kapsam dışı tutulur'
      },
      {
        name: 'İşyerinin Devri',
        article: '4857 s. İş K. m. 6',
        rule: 'Bir işletmenin tamamı veya bir bölümü hukuki işlemle başka bir şahsa geçtiğinde mevcut hizmet sözleşmeleri tüm hak ve borçlarıyla yeni sahibe geçer; önceki sahibin daha önce doğmuş ve ödenmesi gereken borçlardan sorumluluğu iki yıl sürer.',
        hallmark: 'Sahiplik değişikliği tek başına ne çalışan ne de yeni patron bakımından sözleşmeyi derhal sona erdirmek için haklı neden oluşturur.',
        vignette: 'Beş yıldır çalıştığı tekstil fabrikasının tüm makineleri ve personeliyle yeni bir şirkete satıldığını öğrenen Mehmet, eski patronun ödenmemiş fazla mesai borcunu kimden ve hangi sürede isteyebileceğini sormaktadır.',
        clues: ['Mevcut sözleşmelerin kendiliğinden geçişi', 'Önceki patron için iki yıllık süre sınırı', 'Salt el değiştirmenin haklı fesih sayılmaması'],
        remedy: 'Çalışan el değiştirme öncesi muaccel alacakları için iki yıl içinde her iki işverene müteselsilen başvurabilir; el değiştirme sonrası doğan borçlardan yalnız yeni sahip sorumludur.',
        pearl: 'İşyeri devrinde devredenin önceki muaccel borçlardan müteselsil sorumluluğu 2 yıl ile sınırlıdır; devir tek başına haklı fesih sebebi değildir.',
        trapFalse: 'önceki işverenin devir tarihinden önce doğmuş muaccel borçlara ilişkin müteselsil sorumluluğu beş yıl boyunca devam eder',
        trapHighlight: 'sorumluluğu beş yıl boyunca devam eder'
      },
      {
        name: 'Asıl ve Alt İşverenlik',
        article: '4857 s. İş K. m. 2/6-7',
        rule: 'Yardımcı faaliyetlerde veya işletmenin gereği ve teknolojik nedenlerle uzmanlık gerektiren ana üretim bölümlerinde taşeron çalıştırılabilir; üst işletme sahibi yüklenici personelinin haklarından müteselsilen sorumludur.',
        hallmark: 'Çalışanların haklarını kısıtlamak amacıyla veya daha önce aynı mekanda çalışan kişiyle muvazaalı kurulan taşeron bağlantısında personel başlangıçtan itibaren üst şirketin çalışanı sayılır.',
        vignette: 'Bir özel hastane, temizlik ve güvenlik hizmetlerini taşeron firmaya vermiş; taşeron şirket ücretleri ödemeden işten ayrılmıştır. Çalışanlar alacakları için hastaneye de başvurup başvuramayacaklarını sorgulamaktadır.',
        clues: ['Yardımcı faaliyetin yükleniciye verilmesi', 'Müteselsil mali sorumluluk doğması', 'Muvazaa halinde baştan itibaren tek patron sayılma'],
        remedy: 'Çalışanlar ödenmeyen ücret ve tazminatlarını taşeronla birlikte üst işletmeden müteselsilen talep edebilir; muvazaa tespit raporuna otuz iş günü içinde itiraz edilebilir.',
        pearl: 'Asıl işin bölünerek alt işverene verilmesi için işletme ve işin gereği + teknolojik uzmanlık şarttır; muvazaada işçiler baştan itibaren asıl işveren işçisi sayılır.',
        trapFalse: 'asıl işin bir bölümü teknolojik uzmanlık gerektirmese dahi sırf maliyet azaltmak amacıyla alt yükleniciye serbestçe verilebilir',
        trapHighlight: 'sırf maliyet azaltmak amacıyla alt yükleniciye serbestçe verilebilir'
      },
      {
        name: 'Geçici İş İlişkisi',
        article: '4857 s. İş K. m. 7',
        rule: 'Özel istihdam bürosu aracılığıyla en fazla dört ay ve en çok iki kez yenilenerek toplam sekiz ay süreyle; yahut aynı şirketler topluluğu içinde çalışanın yazılı onayıyla altı ay ve iki yenilemeyle en çok on sekiz ay süreyle ödünç personel görevlendirilebilir.',
        hallmark: 'Grev ve lokavt uygulanan işyerlerinde ödünç işgücü temini kesinlikle yasaktır; ayrıca toplu işçi çıkarılan yerlerde sekiz ay boyunca aynı işlerde büro aracılığıyla görevlendirme yapılamaz.',
        vignette: 'Bir holding bünyesindeki A şirketinde çalışan yazılım mühendisi, yazılı rızası alınarak altı aylık süreyle aynı gruba ait B şirketinde projeyi yürütmek üzere görevlendirilmiştir.',
        clues: ['Şirketler topluluğu içinde rızayla görevlendirme', 'Altı ay ve en çok iki yenileme sınırı', 'Grev ve lokavt döneminde yasak'],
        remedy: 'Süre dolmasına rağmen çalıştırma sürerse belirsiz süreli hizmet akdi ödünç alan işletme ile doğmuş sayılır; ödenmeyen ücretlerden iki şirket birlikte sorumludur.',
        pearl: 'ÖİB aracılığıyla geçici iş ilişkisi en çok 4+4=8 ay; holding içi yazılı rızayla 6+6+6=18 aydır; grev-lokavt süresince kurulamaz.',
        trapFalse: 'özel istihdam bürosu aracılığıyla kurulan ödünç çalıştırma düzeni tek seferde on iki ay süreyle ve sınırsız yenilemeyle uygulanabilir',
        trapHighlight: 'tek seferde on iki ay süreyle ve sınırsız yenilemeyle'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'İş Sözleşmesi Türleri, Deneme Süresi ve Uzaktan Çalışma',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Her Sınavda Sorulur',
    entities: [
      {
        name: 'Belirli Süreli Akit',
        article: '4857 s. İş K. m. 8, m. 11',
        rule: 'Vadesi bir yıl veya daha uzun olanlar yazılı yapılmalıdır; bu tür sözleşmenin kurulması belli bir işin tamamlanması veya somut bir olgunun doğması gibi objektif koşullara bağlıdır.',
        hallmark: 'Esaslı bir neden bulunmadıkça üst üste zincirleme yapılamaz; objektif gerekçe olmaksızın yenilenirse başlangıçtan itibaren açık uçlu ve vadesiz sözleşme kabul edilir.',
        vignette: 'Bir özel okul, sınıf öğretmenleriyle hiçbir yenilenme gerekçesi göstermeksizin art arda dört yıl boyunca birer yıllık sözleşmeler imzalamış ve dördüncü yıl sonunda kendiliğinden bittiğini bildirmiştir.',
        clues: ['Objektif koşulun varlığı zorunluluğu', 'Esaslı neden olmadan zincirleme yasağı', 'Vade bitiminde kendiliğinden sona erme iddiası'],
        remedy: 'Zincirleme uygulama nedeniyle sözleşme baştan itibaren vadesiz sayılır; işçi ihbar, kıdem ve şartları varsa işe iade koruması elde eder.',
        pearl: 'Belirli süreli iş sözleşmesi objektif neden olmadan yapılamaz; esaslı neden olmadan zincirleme yapılırsa başlangıçtan itibaren belirsiz süreli sayılır.',
        trapFalse: 'tarafların karşılıklı rızası mevcutsa hiçbir objektif neden aranmaksızın art arda beş kez yenilenerek geçerliliğini korur',
        trapHighlight: 'hiçbir objektif neden aranmaksızın art arda beş kez yenilenerek'
      },
      {
        name: 'Kısmi Süreli İstihdam',
        article: '4857 s. İş K. m. 13',
        rule: 'Normal haftalık mesainin emsal tam gün görev yapan personele göre önemli ölçüde, yönetmelik uyarınca üçte iki oranına kadar daha az belirlendiği çalışma biçimidir.',
        hallmark: 'Ayrımı haklı kılan esaslı bir sebep bulunmadıkça, salt daha az saat görev yapıyor diye tam gün mesai yapan emsal personele kıyasla farklı muameleye tabi tutulamaz.',
        vignette: 'Haftada yirmi saat görev yapan bir muhasebe uzmanı, aynı işyerinde kırk beş saat mesai yapan meslektaşlarına verilen yol ve yemek yardımından tamamen mahrum bırakıldığını ileri sürmektedir.',
        clues: ['Normal haftalık mesainin üçte ikisi ve altı', 'Ücret ve bölünebilir menfaatlerde orantılı ödeme', 'Emsal personelle ayrımcılık yasağı'],
        remedy: 'Personel, haklı sebep olmadan dışlandığı bölünebilir parasal menfaatleri görev yaptığı saatlerle orantılı olarak talep edebilir ve ayrımcılık tazminatı isteyebilir.',
        pearl: 'Kısmi süreli çalışma normal haftalık sürenin 2/3 oranına kadardır (45 saatlik yerde en çok 30 saat); bölünebilir menfaatler orantılı ödenir.',
        trapFalse: 'haftalık çalışma süresinin kırk saatin altında belirlendiği her istihdam ilişkisi otomatik olarak bu kapsamda değerlendirilir',
        trapHighlight: 'kırk saatin altında belirlendiği her istihdam ilişkisi'
      },
      {
        name: 'Çağrı Üzerine Görev',
        article: '4857 s. İş K. m. 14/1-3',
        rule: 'Yazılı yapılması şarttır; haftalık mesai taraflarca belirlenmemişse yirmi saat sayılır, işveren işe en az dört gün önce davet eder ve her davette günde en az dört saat kesintisiz çalıştırır.',
        hallmark: 'İşveren belirlenen zaman diliminde personeli işe davet etmese dahi, kararlaştırılan veya kanuni asgari saatlere karşılık gelen ücreti ödemekle yükümlüdür.',
        vignette: 'Bir organizasyon firması, ihtiyaç duydukça davet etmek üzere yazılı sözleşme yaptığı garson Ahmet’i sadece etkinliğin başlamasına yirmi dört saat kala iki saatlik servis için çağırmıştır.',
        clues: ['Yazılı şekil şartı', 'En az dört gün önceden bildirim zorunluluğu', 'Haftada yirmi, günde en az dört saat kuralı'],
        remedy: 'Dört gün önceden bildirim yapılmadığından işçi o davete icabet etmeme hakkına sahiptir; ayrıca davet edilmese de haftalık asgari yirmi saatlik ücrete hak kazanır.',
        pearl: 'Çağrı üzerine çalışmada altın sayılar: Yazılı şart + 20 saat/hafta + 4 gün önce bildirim + en az 4 saat/gün üst üste çalıştırma.',
        trapFalse: 'sözleşmede süre belirtilmemişse haftalık mesai on saat kabul edilir ve işveren en az iki gün önceden bildirim yapmak zorundadır',
        trapHighlight: 'haftalık mesai on saat kabul edilir ve işveren en az iki gün önceden'
      },
      {
        name: 'Deneme Süresi Kaydı',
        article: '4857 s. İş K. m. 15',
        rule: 'Taraflar sözleşmeye en çok iki aylık bir sınama şartı koyabilirler; bu azami zaman dilimi ancak toplu iş sözleşmeleriyle dört aya kadar uzatılabilir.',
        hallmark: 'Bu zaman aralığı içinde taraflardan her biri ihbar öneline uymaksızın ve herhangi bir tazminat ödemeksizin hukuki ilişkiyi derhal sonlandırabilir.',
        vignette: 'Bireysel hizmet sözleşmesine üç aylık sınama şartı konulan bir tekniker, yetmiş beşinci günde işveren tarafından hiçbir bildirim öneli tanınmadan ve ihbar ödemesi yapılmadan işten çıkarılmıştır.',
        clues: ['Bireysel akitte iki aylık yasal tavan', 'Toplu sözleşmeyle dört aya çıkabilme', 'Çalışılan günlerin ücret ve sigortasının saklılığı'],
        remedy: 'İki ayı aşan kısım geçersiz olduğundan yetmiş beşinci günde yapılan bildirim usulsüz fesih sayılır ve işçi iki haftalık ihbar tazminatını talep edebilir.',
        pearl: 'Deneme süresi bireysel sözleşmede en çok 2 ay, toplu iş sözleşmesiyle en çok 4 aydır; çalışan günlerin ücreti ve SGK primi eksiksiz ödenir.',
        trapFalse: 'bireysel iş sözleşmesinde tarafların yazılı mutabakatıyla altı aya kadar uzatılabilir ve bu dönemde çalışılan günlere ücret ödenmez',
        trapHighlight: 'altı aya kadar uzatılabilir ve bu dönemde çalışılan günlere ücret ödenmez'
      },
      {
        name: 'Uzaktan İfa Modeli',
        article: '4857 s. İş K. m. 14/4-6',
        rule: 'Personelin işveren tarafından kurulan iş organizasyonu çerçevesinde edimini evinde veya teknolojik iletişim araçlarıyla işyeri dışında yerine getirmesi esasına dayanan ve yazılı kurulması zorunlu ilişkidir.',
        hallmark: 'İşveren, işin niteliğini dikkate alarak iş sağlığı ve güvenliği konusunda personeli bilgilendirmek, gerekli eğitimi vermek ve ekipmanla ilgili önlemleri almak zorundadır.',
        vignette: 'Bir yazılım şirketi, yazılı protokol yaparak veri analisti Zeynep’in haftanın beş günü kendi konutundan çevrim içi sistem üzerinden görev yapmasını kararlaştırmış ancak mesai arkadaşlarına verilen maaş zammını Zeynep’e uygulamamıştır.',
        clues: ['Yazılı sözleşme zorunluluğu', 'Teknolojik araçlarla işyeri dışında çalışma', 'Emsal işçiye göre eşit muamele koruması'],
        remedy: 'Salt işyeri dışında görev yapıyor olmak farklı muamele sebebi olamayacağından Zeynep eşit davranma borcuna aykırılık tazminatı ve zam farkını isteyebilir.',
        pearl: 'Uzaktan çalışma mutlaka yazılı yapılmalıdır; işverenin İSG bilgilendirme, eğitim ve sağlık gözetimi yükümlülüğü bu modelde de devam eder.',
        trapFalse: 'sözlü anlaşmayla kurulabilir ve işverenin iş sağlığı ve güvenliği önlemlerini alma yükümlülüğü bu modelde tamamen ortadan kalkar',
        trapHighlight: 'iş sağlığı ve güvenliği önlemlerini alma yükümlülüğü bu modelde tamamen ortadan kalkar'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'İşçi-İşveren Borçları, Ücret Güvencesi ve Eşit Davranma İlkesi',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Kritik Kanun Maddesi',
    entities: [
      {
        name: 'Eşit Davranma İlkesi',
        article: '4857 s. İş K. m. 5',
        rule: 'İş ilişkisinde dil, ırk, renk, cinsiyet, engellilik, siyasal düşünce, felsefi inanç, din ve mezhep gibi sebeplere dayalı ayrım yapılamaz; ihlal halinde çalışan dört aya kadar maaşı tutarında uygun bir tazminat isteyebilir.',
        hallmark: 'Ayrımcılığa uğrayan personel, yaptırım niteliğindeki bu ödenceye ek olarak mahrum bırakıldığı tüm maddi haklarını da ayrıca talep edebilir.',
        vignette: 'Aynı kıdem ve performansa sahip erkek satış uzmanlarına yıllık ikramiye ödeyen bir şirket, yalnızca hamile olduğu gerekçesiyle kadın satış uzmanına bu ikramiyeyi vermemiştir.',
        clues: ['Cinsiyet ve gebelik temelli ayrımcılık', 'Dört aya kadar tazminat yaptırımı', 'Yoksun kalınan hakların ayrıca istenmesi'],
        remedy: 'Çalışan güçlü bir ihlal karinesi ortaya koyduğunda ispat yükü işverene geçer; iş mahkemesinde hem dört aya kadar tazminat hem de ödenmeyen ikramiye talep edilir.',
        pearl: 'Eşit davranma ilkesine aykırılıkta tazminat 4 aya kadar ücrettir + yoksun bırakılan haklar ayrıca istenir (zamanaşımı 5 yıl).',
        trapFalse: 'ayrımcılığa maruz kalan işçiye en fazla iki aylık ücreti tutarında tazminat ödenir ve yoksun kaldığı diğer haklar istenemez',
        trapHighlight: 'en fazla iki aylık ücreti tutarında tazminat ödenir ve yoksun kaldığı diğer haklar istenemez'
      },
      {
        name: 'Haciz ve Temlik Sınırı',
        article: '4857 s. İş K. m. 35',
        rule: 'Çalışanların aylık kazançlarının dörtte birinden fazlası cebri icraya konu edilemez veya başkasına devredilemez; ancak yargıç tarafından hükmedilen nafaka alacakları bu tavanın dışındadır.',
        hallmark: 'Bu emredici koruma, çalışanın ve bakmakla yükümlü olduğu aile bireylerinin asgari geçim düzeyini güvence altına almak amacıyla öngörülmüştür.',
        vignette: 'Banka kredi borçları nedeniyle icra takibine uğrayan fabrika işçisi Kemal’in maaşının yarısının kesilmesi için işyerine icra müzekkeresi gönderilmiş, ayrıca eski eşinin nafaka alacağı da sıraya girmiştir.',
        clues: ['Aylık kazancın dörtte biri tavanı', 'Nafaka alacaklarının ayrıcalıklı istisnası', 'Başkasına devir yasağı'],
        remedy: 'İşçi, nafaka dışındaki adi borçlar bakımından dörtte biri aşan kesinti işlemine karşı yedi gün içinde icra mahkemesinde şikayet yoluna başvurabilir.',
        pearl: 'İşçinin aylık ücretinin en fazla 1/4’ü haczedilebilir veya devredilebilir; nafaka borçları bu 1/4 sınırının istisnasıdır.',
        trapFalse: 'işçinin tüm borçları için aylık maaşının yarısına kadar haciz uygulanabilir ve nafaka alacakları da bu sınıra dahildir',
        trapHighlight: 'aylık maaşının yarısına kadar haciz uygulanabilir ve nafaka alacakları da bu sınıra dahildir'
      },
      {
        name: 'İfadan Kaçınma Yetkisi',
        article: '4857 s. İş K. m. 34',
        rule: 'Aylık istihkakı ödeme gününden itibaren yirmi gün içinde mücbir bir sebep olmaksızın ödenmeyen personel, kişisel kararına dayanarak iş görme borcunu yerine getirmekten geri durabilir.',
        hallmark: 'Bu olanağın toplu bir görünüm arz edecek biçimde kullanılması kanun dışı grev sayılmaz; ayrıca söz konusu dönemde sözleşmeler bu nedenle feshedilemez ve yerlerine yeni personel alınamaz.',
        vignette: 'Her ayın ilk günü maaş alan bir atölyedeki on iki işçi, mücbir sebep bulunmamasına karşın ayın yirmi beşine kadar ödeme yapılmayınca topluca makineleri durdurup işyerinde beklemeye başlamıştır.',
        clues: ['Ödeme gününden yirmi gün geçmesi', 'Mücbir sebep bulunmaması', 'Yasadışı grev sayılmama güvencesi'],
        remedy: 'Gününde ödenmeyen maaşlar için mevduata uygulanan en yüksek faiz işler; işveren bu gerekçeyle işten çıkarma yaparsa haksız fesih sonuçlarına katlanır.',
        pearl: 'Ücreti ödeme gününden 20 gün geçmesine rağmen mücbir sebep dışında ödenmeyen işçi iş görmekten kaçınabilir; bu durum yasadışı grev sayılmaz.',
        trapFalse: 'maaşı ödeme gününden itibaren on gün geciken işçilerin iş bırakması yasadışı grev niteliği taşır ve haklı fesih sebebi oluşturur',
        trapHighlight: 'on gün geciken işçilerin iş bırakması yasadışı grev niteliği taşır'
      },
      {
        name: 'Ücret Kesme Cezası',
        article: '4857 s. İş K. m. 38',
        rule: 'İşveren, toplu sözleşmede veya hizmet akdinde açıkça gösterilen sebepler dışında personelin maaşından disiplin amaçlı indirim yapamaz; yapılacak indirimler bir ayda iki gündelikten fazla olamaz.',
        hallmark: 'İndirim gerekçesi ilgiliye derhal bildirilir ve alıkonulan tutarlar işverenin kasasında kalmayıp bir ay içinde Çalışma ve Sosyal Güvenlik Bakanlığı hesabına yatırılır.',
        vignette: 'İşe geç kalan bir kuryenin maaşından, sözleşmede böyle bir hüküm olmamasına rağmen beş günlük yevmiyesi alıkonularak şirketin yemekhane fonuna aktarılmıştır.',
        clues: ['Sözleşmede yazılı sebep zorunluluğu', 'Bir ayda en çok iki gündelik tavanı', 'Bir ay içinde Bakanlık hesabına yatırma'],
        remedy: 'Usulsüz yapılan eksiltme işçiye faiziyle iade edilir ve mevzuata aykırı davranan işverene idari para yaptırımı uygulanır.',
        pearl: 'Ücret kesme cezası ayda en fazla 2 gündeliktir; işverende kalamaz, 1 ay içinde Bakanlığın belirlediği hesaba yatırılır.',
        trapFalse: 'işveren disiplin ihlali halinde ayda beş gündeliğe kadar kesinti yapabilir ve bu tutarı işyeri sosyal yardım sandığında tutabilir',
        trapHighlight: 'ayda beş gündeliğe kadar kesinti yapabilir ve bu tutarı işyeri sosyal yardım sandığında tutabilir'
      },
      {
        name: 'Rekabet Yasağı',
        article: '6098 s. TBK m. 444-447',
        rule: 'Fiil ehliyetine sahip personel, işten ayrıldıktan sonra müşteri çevresi veya üretim sırlarını kullanarak patronla yarışmama taahhüdünü ancak yazılı biçimde üstlenebilir; özel durumlar dışında bu kısıtlama iki yılı aşamaz.',
        hallmark: 'Kısıtlama yer, zaman ve konu bakımından çalışanın ekonomik geleceğini hakkaniyete aykırı biçimde tehlikeye düşürecek nitelikte olmamalıdır; aksi halde hakim kapsamı sınırlar.',
        vignette: 'Bir ilaç firmasının Ar-Ge müdürü, işten ayrılırken Türkiye’nin tüm illerinde beş yıl boyunca sağlık sektöründe çalışmayacağına dair yazılı bir taahhüt imzalamıştır.',
        clues: ['Fiil ehliyeti ve yazılı şekil şartı', 'Kural olarak iki yıllık üst sınır', 'Yer, zaman ve konu bakımından ölçülülük'],
        remedy: 'İşveren haklı sebep olmadan işten çıkarırsa veya çalışan işverene yüklenebilen sebeple ayrılırsa taahhüt kendiliğinden sona erer; aşırı süre ve alan hakimce daraltılır.',
        pearl: 'TBK m.444-445 uyarınca rekabet yasağı yazılı olmalıdır, kural olarak 2 yılı aşamaz ve işverenin haklı sebep olmadan feshinde sona erer.',
        trapFalse: 'sözlü olarak kararlaştırılabilir ve işten ayrılış tarihinden itibaren beş yıl süreyle ülke çapında geçerliliğini korur',
        trapHighlight: 'sözlü olarak kararlaştırılabilir ve işten ayrılış tarihinden itibaren beş yıl'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'Çalışma Süreleri, Fazla Çalışma, Gece Çalışması ve Ara Dinlenmesi',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Denkleştirme Esası',
        article: '4857 s. İş K. m. 63',
        rule: 'Genel bakımdan normal haftalık mesai en çok kırk beş saattir; tarafların anlaşmasıyla günlük on bir saati geçmemek şartıyla iki aylık dönem içinde ortalaması kırk beş saati aşmayacak biçimde yoğunlaştırılmış program uygulanabilir.',
        hallmark: 'İki aylık periyot toplu iş sözleşmesiyle dört aya kadar çıkarılabilir; turizm sektöründe ise dört ay olan bu periyot toplu sözleşmeyle altı aya uzatılabilir.',
        vignette: 'Sezonluk sipariş artışı yaşayan bir otomotiv yan sanayi fabrikası, işçilerin yazılı onayıyla ilk ay haftada elli beş saat, ikinci ay ise haftada otuz beş saat mesai planlamıştır; günlük süre on saati geçmemiştir.',
        clues: ['Günlük on bir saatlik kesin tavan', 'İki aylık ortalama kırk beş saat hesabı', 'Toplu sözleşmeyle dört aya uzama'],
        remedy: 'Koşullara uyulduğu için yoğun haftalarda kırk beş saati aşan saatler fazla mesai sayılmaz; ancak günlük on bir saati aşan her dakika zamlı ödenir.',
        pearl: 'Denkleştirme süresi kural olarak 2 ay (TİS ile 4 ay, turizmde 4/6 ay) olup günlük çalışma hiçbir halde 11 saati aşamaz.',
        trapFalse: 'işverenin tek taraflı kararıyla altı ay içinde ve günlük on üç saati aşmamak üzere uygulanabilir',
        trapHighlight: 'tek taraflı kararıyla altı ay içinde ve günlük on üç saati'
      },
      {
        name: 'Fazla Çalışma (270 Saat)',
        article: '4857 s. İş K. m. 41',
        rule: 'Haftalık kırk beş saati aşan görevlerde her bir saat için normal saatlik kazancın yüzde elli yükseltilmiş tutarı ödenir; bu ek mesainin toplamı bir takvim yılında iki yüz yetmiş saati geçemez.',
        hallmark: 'Zamlı ödeme yerine personel dilerse her bir ek saat karşılığında bir saat otuz dakikayı altı ay içinde serbest zaman olarak kullanabilir.',
        vignette: 'Haftalık normal mesaisi kırk beş saat olan bir lojistik deposunda görev yapan şoför, bir hafta boyunca toplam elli üç saat direksiyon sallamış ve ek saatleri için zamlı ödeme yerine izin talep etmiştir.',
        clues: ['Kırk beş saatin üzerindeki saatler', 'Yüzde elli zam veya bir buçuk saat serbest zaman', 'Yılda iki yüz yetmiş saatlik sınır'],
        remedy: 'Şoför sekiz saatlik ek mesaisi karşılığında on iki saat serbest zaman kullanabilir; yıllık sınır aşılsa bile fiilen yapılan tüm saatlerin zammı eksiksiz ödenir.',
        pearl: 'Fazla çalışmada zam %50 (serbest zaman 1 saat 30 dk), yıllık üst sınır 270 saattir; yer altı maden işlerinde zorunlu/olağanüstü haller dışında yasaktır.',
        trapFalse: 'her bir saat için normal ücretin yüzde yirmi beş artırılmasıyla ödenir ve bir yılda en fazla üç yüz altmış saat yaptırılabilir',
        trapHighlight: 'yüzde yirmi beş artırılmasıyla ödenir ve bir yılda en fazla üç yüz altmış saat'
      },
      {
        name: 'Fazla Sürelerle Mesai',
        article: '4857 s. İş K. m. 41/3-4',
        rule: 'Hizmet sözleşmesinde haftalık normal vaktin kırk beş saatin altında kararlaştırıldığı işyerlerinde, kararlaştırılan saati aşan ancak kırk beş saate kadar olan dilimler için saat başı yüzde yirmi beş zamlı ödeme yapılır.',
        hallmark: 'Personel zamlı ücret yerine her bir saat karşılığında bir saat on beş dakika serbest zaman kullanma seçeneğine sahiptir.',
        vignette: 'Haftalık normal görevin sözleşmeyle kırk saat olarak belirlendiği bir bankada görev yapan gişe memuru, ay sonu yoğunluğu nedeniyle bir hafta boyunca kırk dört saat görev yapmıştır.',
        clues: ['Sözleşmede kırk beş saatin altında normal vakit', 'Kırk ile kırk beş saat arası dilim', 'Yüzde yirmi beş zam veya yetmiş beş dakika izin'],
        remedy: 'Dört saatlik dilim için yüzde yirmi beş zamlı ücret ödenir; şayet kırk beş saatin üzerine çıkılsaydı aşan kısım yüzde elli oranından hesaplanacaktı.',
        pearl: 'Sözleşmedeki süre < 45 saat ise 45 saate kadar olan kısım %25 zamlı (1 saat 15 dk serbest zaman), 45 saati aşan kısım %50 zamlıdır.',
        trapFalse: 'sözleşmede haftalık mesai kırk saat belirlenmişse kırk beş saate kadar yapılan dört saatlik ek görev yüzde elli zamlı hesaplanır',
        trapHighlight: 'kırk beş saate kadar yapılan dört saatlik ek görev yüzde elli zamlı'
      },
      {
        name: 'Gece Mesaisi (7,5 Saat)',
        article: '4857 s. İş K. m. 69',
        rule: 'En geç saat yirmide başlayıp en erken saat altıya kadar süren ve her halde en çok on bir saatlik zaman aralığında personel yedi buçuk saatten fazla çalıştırılamaz.',
        hallmark: 'Turizm, özel güvenlik, sağlık hizmeti ve petrol arama-sondaj faaliyetlerinde personelin yazılı onayıyla yedi buçuk saatin üzerinde görev yaptırılabilir; ancak genel kuralda aşan kısım haftalık kırk beş saat dolmasa dahi zamlı ödenir.',
        vignette: 'Bir döküm fabrikasında akşam yirmi birde vardiyaya girip sabah altıda çıkan işçi, haftada yalnızca dört vardiya yaparak toplam otuz dört saat görev görmesine rağmen ek ücret talep etmektedir.',
        clues: ['Yirmi ile altı arası zaman dilimi', 'Yedi buçuk saatlik kesin üst sınır', 'Haftalık kırk beş saat dolmasa da zam hakkı'],
        remedy: 'Ara molası düşüldükten sonra sekiz saatlik vardiyada yedi buçuk saati aşan yarım saatlik kısım her vardiya için yüzde elli zamlı hesaplanır.',
        pearl: 'Gece çalışması (20.00–06.00) 7,5 saati geçemez; 7,5 saati aşan kısım haftalık 45 saat dolmasa dahi fazla çalışma sayılır (%50 zamlı).',
        trapFalse: 'akşam yirmi ile sabah altı arasında personelin dokuz saate kadar çalıştırılması olağan olup haftalık kırk beş saat aşılmadıkça zam doğmaz',
        trapHighlight: 'dokuz saate kadar çalıştırılması olağan olup haftalık kırk beş saat aşılmadıkça zam doğmaz'
      },
      {
        name: 'Ara Dinlenmesi ve Telafi',
        article: '4857 s. İş K. m. 64, m. 68',
        rule: 'Dört saate kadar işlerde on beş dakika, dört ile yedi buçuk saat arası işlerde otuz dakika, yedi buçuk saati aşan işlerde bir saat mola verilir ve bu molalar çalışma vaktine katılmaz; işin zorunlu durmasında ise dört ay içinde günde en çok üç saat ek görev yaptırılabilir.',
        hallmark: 'Zorunlu tatil veya personelin talebiyle verilen izinlerin kapatılması amacıyla yapılan ek görev tatil günlerinde icra edilemez ve zamlı saat kapsamına girmez.',
        vignette: 'Yoğun kar yağışı nedeniyle iki gün kapanan bir fabrikada işveren, üç ay sonra normal dokuz saatlik vardiyalara günde iki saat ekleyerek kayıp saatleri kapatmış ve bu süreler için zamlı ücret ödememiştir.',
        clues: ['Yedi buçuk saat üstünde bir saat mola', 'Dört ay içinde günde en fazla üç saat', 'Tatil günlerinde yaptırılamama kuralı'],
        remedy: 'Günlük toplam çalışma on bir saati geçmediği ve dört aylık yasal sürede tatil günü dışında yapıldığı için işverenin ek zam ödeme borcu doğmaz.',
        pearl: 'Ara dinlenmesi (15 dk / 30 dk / 1 saat) çalışma süresinden sayılmaz; telafi çalışması 4 ay içinde (günde max 3 saat, tatil günü hariç) yaptırılır.',
        trapFalse: 'mola süreleri günlük çalışma süresine dahil edilir ve telafi çalışması ancak iki ay içinde tatil günlerinde de yaptırılabilir',
        trapHighlight: 'çalışma süresine dahil edilir ve telafi çalışması ancak iki ay içinde tatil günlerinde'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'Yıllık Ücretli İzin, Hafta Tatili, Genel Tatiller ve Mazeret İzinleri',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Her Sınavda Sorulur',
    entities: [
      {
        name: 'Yıllık Ücretli İzin',
        article: '4857 s. İş K. m. 53, m. 56',
        rule: 'Deneme dönemi dahil en az bir yıl görev yapan personele kıdemine göre bir-beş yıl arası on dört, beş-on beş yıl arası yirmi, on beş yıl ve üstünde yirmi altı gün dinlenme hakkı tanınır; on sekiz ve altı ile elli ve üstü yaş grubuna yirmi günden az verilemez.',
        hallmark: 'Bu anayasal dinlenme hakkından feragat edilemez; bir bölümü on günden aşağı olmamak üzere parçalar halinde kullanılabilir ve şehir dışına çıkacaklara dört güne kadar maaşsız yol süresi verilir.',
        vignette: 'Elli iki yaşındaki bir makine operatörü, aynı fabrikada iki yıldır görev yapmaktadır; insan kaynakları müdürü kendisine beş yıldan az kıdemi olduğu gerekçesiyle yalnızca on dört gün tatil kullandıracağını bildirmiştir.',
        clues: ['En az bir yıl kıdem şartı', 'Elli yaş ve üstünde yirmi gün tabanı', 'Yer altı madenlerinde artı dört gün'],
        remedy: 'İşveren yaşı dikkate alarak en az yirmi gün dinlenme hakkı tanımak zorundadır; sözleşme bittiğinde kullanılmayan günler son maaş üzerinden beş yıl içinde istenebilir.',
        pearl: 'Yıllık izin 14 / 20 / 26 gündür; 18 yaş ve altı ile 50 yaş ve üstüne en az 20 gün verilir; yer altı işlerinde 4’er gün artırılır.',
        trapFalse: 'elli beş yaşındaki iki yıllık kıdeme sahip çalışan en fazla on dört gün dinlenme hakkı kazanır ve yazılı onay verirse bu haktan vazgeçebilir',
        trapHighlight: 'en fazla on dört gün dinlenme hakkı kazanır ve yazılı onay verirse bu haktan vazgeçebilir'
      },
      {
        name: 'Hafta Tatili',
        article: '4857 s. İş K. m. 46',
        rule: 'Kanun kapsamındaki işyerlerinde çalışanlara, önceki iş günlerinde görev yapmış olmaları koşuluyla yedi günlük zaman dilimi içinde kesintisiz en az yirmi dört saat dinlenme verilir.',
        hallmark: 'Çalışılmayan bu dinlenme günü için işveren, herhangi bir iş karşılığı olmaksızın o günün normal yevmiyesini tam olarak ödemek zorundadır.',
        vignette: 'Bir alışveriş merkezi mağazasında altı iş günü boyunca aralıksız çalışan satış danışmanına yedinci günde yalnızca on iki saatlik boşluk bırakılıp akşam vardiyasına çağrılmıştır.',
        clues: ['Yedi günde kesintisiz yirmi dört saat', 'Çalışılmadan tam günlük ücret', 'Evlenme ve ölüm izinlerinin çalışılmış sayılması'],
        remedy: 'Kesintisiz yirmi dört saatlik dinlenme kullandırılmadığından işçi o gün çalıştırılmış sayılır ve normal yevmiyesine ek olarak bir buçuk günlük zamlı ücret daha talep eder.',
        pearl: 'Hafta tatili 7 günde kesintisiz en az 24 saattir; hafta tatilinde çalışan işçiye o günün karşılığı 1 yevmiye + çalışması nedeniyle %50 zamlı 1,5 yevmiye (toplam 2,5 yevmiye) ödenir.',
        trapFalse: 'yedi günlük zaman diliminde on iki saatlik aralıksız dinlenme yeterlidir ve bu gün için işçiye yalnızca yarım günlük ücret ödenir',
        trapHighlight: 'on iki saatlik aralıksız dinlenme yeterlidir ve bu gün için işçiye yalnızca yarım günlük ücret'
      },
      {
        name: 'Ulusal Bayram ve Genel Tatil',
        article: '4857 s. İş K. m. 47, 2429 s. K.',
        rule: 'Kanunlarda resmi kutlama veya kamusal dinlenme günü sayılan tarihlerde çalışmazlarsa bir iş karşılığı olmaksızın o günün yevmiyesi tam ödenir; görev görürlerse ayrıca çalışılan her gün için bir günlük yevmiye daha verilir.',
        hallmark: 'Personelin bu resmi günlerde görevlendirilmesi kural olarak kendi rızasına veya sözleşmedeki açık hükme bağlıdır.',
        vignette: 'Bir otel resepsiyonisti, kendi yazılı onayıyla 29 Ekim Cumhuriyet Günü ve 1 Mayıs Emek ve Dayanışma Günü’nde tam gün görev yapmış ancak bordrosunda normal aylık maaşı dışında ek yevmiye görmemiştir.',
        clues: ['Çalışılmadığında tek günlük tam yevmiye', 'Çalışıldığında ilave bir yevmiye', '28 Ekim öğleden sonra başlayan bir buçuk günlük süre'],
        remedy: 'İşçi, çalıştığı her resmi gün için normal maaşına ilaveten birer tam günlük ek yevmiye alacağını beş yıllık zamanaşımı içinde talep edebilir.',
        pearl: 'UBGT günlerinde çalışmayan işçi 1 yevmiye, çalışan işçi ise ayrıca 1 yevmiye daha (toplam 2 yevmiye) alır; 29 Ekim tek Ulusal Bayramdır.',
        trapFalse: 'resmi bayram gününde fiilen görev yapan işçiye aylık maktu maaşı dışında ilave herhangi bir günlük ödeme yapılması gerekmez',
        trapHighlight: 'aylık maktu maaşı dışında ilave herhangi bir günlük ödeme yapılması gerekmez'
      },
      {
        name: 'Analık ve Süt İzni',
        article: '4857 s. İş K. m. 74',
        rule: 'Kadın çalışanların doğumdan önce sekiz ve doğumdan sonra sekiz hafta olmak üzere toplam on altı hafta çalıştırılmaması esastır; bir yaşından küçük bebekleri için ise günde toplam bir buçuk saat emzirme molası verilir.',
        hallmark: 'Çoğul gebelikte doğum öncesi süreye iki hafta eklenir; bir buçuk saatlik günlük bebek besleme süresi günlük çalışma süresinden sayılır ve hangi saatlerde kullanılacağını anne belirler.',
        vignette: 'Sekiz aylık bebeği bulunan bir banka çalışanı, günde bir buçuk saatlik bebek besleme hakkını kullanmak istediğinde müdürü bu saatleri akşam mesaiye ekleyerek telafi etmesini talep etmiştir.',
        clues: ['Sekiz artı sekiz toplam on altı hafta', 'Bir yaş altı bebek için günde bir buçuk saat', 'Mesai süresinden sayılma güvencesi'],
        remedy: 'Anne bu saatleri telafi etmek zorunda değildir; kullandırılmadığı takdirde ilgili saatlerin karşılığı zamlı mesai ücreti olarak işverenden tahsil edilir.',
        pearl: 'Analık izni 8+8=16 hafta (çoğul gebelikte +2 hafta); süt izni 1 yaşından küçük çocuk için günde 1,5 saattir ve çalışma süresinden sayılır.',
        trapFalse: 'bebek besleme için ayrılan günde bir saatlik süre çalışma süresinden sayılmaz ve hangi saatlerde kullanılacağına işveren tek başına karar verir',
        trapHighlight: 'çalışma süresinden sayılmaz ve hangi saatlerde kullanılacağına işveren tek başına karar verir'
      },
      {
        name: 'Mazeret İzinleri (Ek m. 2)',
        article: '4857 s. İş K. Ek m. 2',
        rule: 'Çalışana evlenmesi, evlat edinmesi ya da anne-baba, eş, kardeş veya çocuğunun vefatı halinde üç gün; eşinin doğum yapması halinde ise beş gün ücretli hak tanınır.',
        hallmark: 'En az yüzde yetmiş oranında engelli veya süreğen hastalığı bulunan çocuğun tedavisinde, ebeveynlerden sadece biri tarafından kullanılmak üzere bir yıl içinde toptan veya kısım kısım on güne kadar ücretli tatil tanınır.',
        vignette: 'Eşi hastanede bebek dünyaya getiren bir mühendis, işverenden beş gün ücretli babalık tatili talep etmiş ancak işveren bu günlerin yıllık tatilinden düşüleceğini söylemiştir.',
        clues: ['Evlenme ve birinci derece yakının vefatında üç gün', 'Eşin doğumunda beş gün', 'Yıllık tatilden mahsup edilememe'],
        remedy: 'Yasal hak günleri ücretli olup yıllık tatilden düşülemez ve hafta tatili hesabında çalışılmış günler arasında değerlendirilir.',
        pearl: '4857 Ek m.2: Evlenme, evlat edinme ve yakın ölümünde 3 gün; babalık (eşin doğumu) 5 gün; %70+ engelli/süreğen hasta çocuk tedavisinde yılda 10 gün ücretli izin.',
        trapFalse: 'çalışanın nikah kıyması halinde beş gün, eşinin bebek dünyaya getirmesi halinde ise üç gün ücretsiz mazeret tatili verilir',
        trapHighlight: 'nikah kıyması halinde beş gün, eşinin bebek dünyaya getirmesi halinde ise üç gün ücretsiz'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'Süreli Fesih, İhbar Süreleri, Kötüniyet Tazminatı ve Toplu Çıkarma',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Bildirim Önelleri',
        article: '4857 s. İş K. m. 17/2-3',
        rule: 'Belirsiz süreli hizmet akdini sonlandırmak isteyen taraf; kıdem altı aydan azsa iki hafta, altı aydan bir buçuk yıla kadarsa dört hafta, bir buçuk yıldan üç yıla kadarsa altı hafta, üç yıldan fazlaysa sekiz hafta önceden haber vermelidir.',
        hallmark: 'Kanundaki bu haftalık aralıklar asgari nitelikte olup sözleşmelerle kısaltılamaz ancak tarafların mutabakatıyla artırılabilir.',
        vignette: 'Aynı şirkette iki yıl sekiz aydır belirsiz süreli sözleşmeyle çalışan bir grafik tasarımcı, işverenin kendisine yalnızca dört hafta önceden haber vererek sözleşmesini bitirmek istediğini belirtmektedir.',
        clues: ['Belirsiz süreli akitte kademeli süreler', 'Bir buçuk ile üç yıl arasında altı hafta', 'Asgari sürelerin sözleşmeyle kısaltılamaması'],
        remedy: 'İki yıl sekiz aylık kıdem altı haftalık dilime girdiğinden işveren eksik tanıdığı süre nedeniyle tam altı haftalık ücret tutarında tazminat ödemek zorunda kalır.',
        pearl: 'İhbar önelleri: <6 ay = 2 hafta | 6 ay–1,5 yıl = 4 hafta | 1,5–3 yıl = 6 hafta | >3 yıl = 8 hafta (asgaridir, artırılabilir).',
        trapFalse: 'üç yıldan fazla kıdeme sahip bir çalışanın sözleşmesi feshedilirken on haftalık yasal süreye uyulması zorunludur',
        trapHighlight: 'on haftalık yasal süreye uyulması zorunludur'
      },
      {
        name: 'İhbar Tazminatı',
        article: '4857 s. İş K. m. 17/4-5',
        rule: 'Önceden haber verme yükümlülüğüne uymadan belirsiz süreli sözleşmeyi derhal bitiren taraf, ilgili kıdem dilimine ait sürenin giydirilmiş brüt ücreti tutarında parasal karşılık ödemek zorundadır.',
        hallmark: 'Bu parasal yaptırım yalnızca işverene değil, haklı nedeni olmadan haber vermeksizin işi aniden terk eden çalışana karşı da talep edilebilir; işveren ise sürenin ücretini peşin ödeyerek ilişkiyi hemen sonlandırabilir.',
        vignette: 'Dört yıldır çalıştığı firmada hiçbir haklı sebep göstermeden ve önceden haber vermeden ertesi gün rakip şirkette işe başlayan satış müdürüne karşı eski patronu alacak davası açmıştır.',
        clues: ['Her iki taraf için de geçerli yaptırım', 'Giydirilmiş brüt ücret üzerinden hesap', 'Peşin ödemeyle derhal bitirme olanağı'],
        remedy: 'İşveren, dört yıllık kıdeme karşılık gelen sekiz haftalık giydirilmiş ücret tutarındaki alacağı beş yıllık zamanaşımı içinde arabuluculuk sonrası iş mahkemesinde isteyebilir.',
        pearl: 'İhbar tazminatı iki yönlüdür: Bildirim süresine uymayan işveren kadar istifa edip haber vermeyen işçi de ihbar tazminatı öder; zamanaşımı 5 yıldır.',
        trapFalse: 'sadece işveren tarafından ödenen bir yaptırım olup haber vermeden işi bırakan çalışandan hiçbir halde talep edilemez',
        trapHighlight: 'haber vermeden işi bırakan çalışandan hiçbir halde talep edilemez'
      },
      {
        name: 'Kötüniyet Tazminatı',
        article: '4857 s. İş K. m. 17/6',
        rule: 'İş güvencesi şemsiyesi dışında kalan personelin hizmet akdinin sona erdirme yetkisi dürüstlük kuralına aykırı biçimde kullanıldığında, çalışana hak ettiği bildirim süresinin üç katı tutarında ek parasal ödence verilir.',
        hallmark: 'İşvereni SGK veya çalışma müfettişine şikayet ettiği ya da tanıklık yaptığı için işten çıkarılan güvencesiz çalışan bu ek korumadan yararlanır; ihbar alacağıyla birlikte istenebilir.',
        vignette: 'Toplam on iki kişinin çalıştığı bir atölyede iki yıldır görev yapan işçi, sigorta primlerinin düşük yatırıldığını SGK’ya ihbar ettiği ertesi hafta işten çıkarılmıştır.',
        clues: ['İş güvencesi kapsamı dışında kalma', 'Şikayet veya hak arama nedeniyle çıkarma', 'Bildirim süresinin üç katı tutarında ödence'],
        remedy: 'İki yıllık kıdemin altı haftalık önelinin üç katı olan on sekiz haftalık ücret tutarında ek ödence, ihbar alacağından ayrı olarak talep edilir.',
        pearl: 'Kötüniyet tazminatı YALNIZCA iş güvencesi dışındaki işçilere ödenir ve tutarı bildirim süresinin 3 katıdır (ihbar tazminatından ayrıdır).',
        trapFalse: 'iş güvencesi kapsamındaki işçilere de uygulanır ve tutarı bildirim süresinin iki katı olarak hesaplanır',
        trapHighlight: 'iş güvencesi kapsamındaki işçilere de uygulanır ve tutarı bildirim süresinin iki katı'
      },
      {
        name: 'Yeni İş Arama İzni',
        article: '4857 s. İş K. m. 27',
        rule: 'Önel süresi boyunca işveren, çalışana mesai saatleri içinde ve ücret kesintisi yapmaksızın günde en az iki saat başka işverenlerle görüşme olanağı sağlamak zorundadır.',
        hallmark: 'Çalışan dilerse bu saatleri birleştirerek işten ayrılacağı günden önceki günlere denk gelecek biçimde toplu kullanabilir; işveren bu saatlerde çalıştırırsa ücretini yüzde yüz zamlı öder.',
        vignette: 'Sekiz haftalık bildirim öneli tanınarak sözleşmesinin biteceği bildirilen bir muhasebeci, bu saatleri son günlerde topluca kullanmak istemiş ancak işveren yoğunluk gerekçesiyle hiç kullandırmayıp çalıştırmıştır.',
        clues: ['Günde en az iki saat ücretli olanak', 'Toplu kullanım için işverene bildirim', 'Kullandırılmayıp çalıştırıldığında yüzde yüz zam'],
        remedy: 'İşveren, kullandırmadığı saatlerin normal ücretine ek olarak o saatlerde çalıştırdığı için yüzde yüz zamlı ücret ödemekle yükümlüdür.',
        pearl: 'Yeni iş arama izni günde en az 2 saat ve ücretlidir; işçi isterse son günlere toplu ekleyebilir; çalıştırılırsa %100 zamlı ödenir.',
        trapFalse: 'günde en çok bir saat ücretsiz olarak verilir ve çalışanın bu saatleri birleştirerek toplu kullanma hakkı bulunmamaktadır',
        trapHighlight: 'günde en çok bir saat ücretsiz olarak verilir ve çalışanın bu saatleri birleştirerek toplu kullanma hakkı bulunmamaktadır'
      },
      {
        name: 'Toplu İşçi Çıkarma',
        article: '4857 s. İş K. m. 29',
        rule: 'Ekonomik, teknolojik veya yapısal nedenlerle bir ay içinde yirmi-yüz çalışanlı yerde en az on, yüz bir-üç yüz çalışanlı yerde en az yüzde on, üç yüz bir ve üstü yerde en az otuz personelin işine son verilmesi halinde en az otuz gün önceden yazılı bildirim şarttır.',
        hallmark: 'Yazılı bildirim işyeri sendika temsilcilerine, ilgili bölge müdürlüğüne ve İŞKUR’a yapılır; fesih bildirimleri resmi makama yapılan ihbardan otuz gün sonra hüküm doğurur.',
        vignette: 'İki yüz elli kişinin çalıştığı bir fabrika, üretim hattını kapatacağı için bir ay içinde otuz personelin akdini sonlandırmaya karar vermiş ancak İŞKUR’a ve sendika temsilcilerine haber vermeden fesihleri ertesi gün tebliğ etmiştir.',
        clues: ['İşyeri büyüklüğüne göre sayısal eşikler', 'Otuz gün önceden resmi makamlara yazılı bildirim', 'Altı ay içinde aynı nitelikli alımda eski personele öncelik'],
        remedy: 'Bildirim usulüne uyulmaması işverene akdi bitirilen her çalışan için idari para cezası doğurur; ayrıca altı ay içinde aynı işe alım yapılırsa eski personel öncelikle çağrılmalıdır.',
        pearl: 'Toplu işçi çıkarma eşikleri: 20–100 işçi -> en az 10 | 101–300 -> en az %10 | 301+ -> en az 30 işçi (1 ay içinde); en az 30 gün önce yazılı bildirim zorunludur.',
        trapFalse: 'ellinin üzerinde çalışanı olan işyerlerinde en az beş personelin çıkarılması halinde on beş gün önce İŞKUR’a sözlü bilgi verilmesi yeterlidir',
        trapHighlight: 'en az beş personelin çıkarılması halinde on beş gün önce İŞKUR’a sözlü bilgi'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'İş Güvencesi Kapsamı ve İşe İade Davasının Hukuki Sonuçları',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2026',
    entities: [
      {
        name: 'İş Güvencesi Şartları',
        article: '4857 s. İş K. m. 18',
        rule: 'Belirsiz süreli akitle çalışan personelin geçerli sebep korumasından yararlanabilmesi için aynı işkolunda en az otuz personel çalıştırılması, en az altı aylık kıdem bulunması ve belirli üst düzey yönetici statüsünde olunmaması gerekir.',
        hallmark: 'Yer altı maden işlerinde çalışanlarda altı aylık kıdem koşulu aranmaz; işletmenin bütününü yöneten üst yönetici ile işyerinin tamamını yönetip işe alma-çıkarma yetkisi olan temsilci bu korumanın dışındadır.',
        vignette: 'Aynı işverene ait aynı işkolundaki üç şubede toplam kırk beş kişi çalışmakta olup, sekiz aydır belirsiz süreli sözleşmeyle şube satış sorumlusu olarak çalışan kişinin işe alma-çıkarma yetkisi bulunmamaktadır.',
        clues: ['Aynı işkolundaki tüm şubelerde otuz kişi hesabı', 'Altı aylık asgari kıdem koşulu', 'İşe alma-çıkarma yetkisiz temsilcinin korunması'],
        remedy: 'Tüm yasal koşullar gerçekleştiğinden işveren bu çalışanı ancak yeterliliği, davranışları ya da işletme gereklerine dayanan geçerli bir sebeple işten çıkarabilir.',
        pearl: 'İş güvencesi şartları: >=30 işçi (aynı işkolundaki tüm işyerleri toplamı) + >=6 ay kıdem (yer altı madeninde aranmaz) + belirsiz süreli sözleşme.',
        trapFalse: 'otuz çalışan sayısı her şube için ayrı ayrı hesaplanır ve yer altı maden işçileri için de altı aylık kıdem zorunludur',
        trapHighlight: 'her şube için ayrı ayrı hesaplanır ve yer altı maden işçileri için de altı aylık kıdem'
      },
      {
        name: 'Geçerli Fesih Usulü',
        article: '4857 s. İş K. m. 19',
        rule: 'İşveren, sonlandırma bildirimini yazılı yapmak ve dayandığı sebebi açık ve kesin biçimde göstermek zorundadır; çalışanın davranışı veya verimiyle ilgili nedenlere dayanılıyorsa önceden mutlaka savunması alınmalıdır.',
        hallmark: 'Yazılı bildirim ve davranış-verim kaynaklı hallerde dinlenilme hakkı zorunlu şekil şartıdır; ancak ahlak ve iyi niyet kurallarına aykırılık nedeniyle derhal çıkışta önceden açıklama alma zorunluluğu aranmaz.',
        vignette: 'Performansının düştüğü gerekçesiyle işten çıkarılan koruma kapsamındaki bir satış temsilcisine yazılı bildirim yapılmış, ancak öncesinde performans düşüklüğüne ilişkin beyanı ve gerekçesi hiç sorulmamıştır.',
        clues: ['Açık ve kesin yazılı bildirim zorunluluğu', 'Verim ve davranışta önceden açıklama alınması', 'Şekil şartına aykırılık'],
        remedy: 'Yasal şekle uyulmadığından işlemin hükümsüzlüğüne karar verilir; haklı ya da makul sebebin varlığını ispatlama yükümlülüğü daima işverene aittir.',
        pearl: 'm.19 gereği yazılı bildirim + açık/kesin sebep + davranış/verimde savunma alınması geçerlilik şartıdır; ispat yükü işverendedir.',
        trapFalse: 'işçinin verim düşüklüğü nedeniyle işten çıkarılmasında sözlü bildirim geçerli olup önceden beyanının alınmasına gerek yoktur',
        trapHighlight: 'sözlü bildirim geçerli olup önceden beyanının alınmasına gerek yoktur'
      },
      {
        name: 'İşe İade Süreleri',
        article: '4857 s. İş K. m. 20, 7036 s. K. m. 3',
        rule: 'Sonlandırma bildiriminin tebliğinden itibaren bir ay içinde zorunlu arabulucuya gidilmelidir; görüşmede anlaşma sağlanamazsa son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde yargılama başlatılır.',
        hallmark: 'Hem bir aylık arabuluculuk hem de iki haftalık yargı başvuru dilimleri hak düşürücü nitelikte olup hakim tarafından kendiliğinden gözetilir.',
        vignette: 'Çıkış yazısını 1 Mart tarihinde tebliğ alan işçi, 20 Mart’ta arabuluculuğa başvurmuş; 10 Nisan’da anlaşamama son tutanağı imzalanmış ve çalışan 22 Nisan’da iş mahkemesine dilekçesini sunmuştur.',
        clues: ['Tebliğden itibaren bir ay içinde arabuluculuk', 'Son tutanaktan itibaren iki hafta içinde mahkeme', 'Hak düşürücü dilimlerin resen gözetilmesi'],
        remedy: 'Her iki hak düşürücü dilime de uyulduğu için yargılama esastan incelenir; arabulucuya gidilmeden doğrudan mahkemeye başvurulursa usulden ret kararı verilir.',
        pearl: 'İşe iade kronolojisi: Fesih tebliğinden 1 AY içinde arabuluculuk -> anlaşamama son tutanağından 2 HAFTA içinde iş mahkemesi!',
        trapFalse: 'fesih bildiriminin tebliğinden itibaren iki hafta içinde doğrudan iş mahkemesine gidilir ve arabuluculuk ihtiyaridir',
        trapHighlight: 'iki hafta içinde doğrudan iş mahkemesine gidilir ve arabuluculuk ihtiyaridir'
      },
      {
        name: 'İşe Başlatmama Ödencesi',
        article: '4857 s. İş K. m. 21',
        rule: 'Feshin geçersizliği kesinleşince çalışan tebliğden itibaren on iş günü içinde işverene başvurur; işveren bir ay içinde göreve döndürmezse en az dört en çok sekiz aylık ücret tutarında tazminat ve ayrıca en çok dört aya kadar çalışılmayan dönem haklarını öder.',
        hallmark: 'Çalışan on iş günü içinde başvurmazsa yapılan fesih geçerli hale gelir; işveren göreve çağırırsa çalışan samimi biçimde dönmek zorundadır, dönmezse bu hakları yitirir.',
        vignette: 'Geçersiz fesih kararının kesinleştiğini tebliğ alan çalışan beşinci iş gününde noter kanalıyla geri dönüş talebini iletmiş, ancak işveren bir aylık sürede kendisini işbaşı yaptırmamıştır.',
        clues: ['Kesinleşme tebliğinden on iş gününde başvuru', 'İşverenin bir aylık geri alma süresi', 'Dört-sekiz ay tazminat artı dört ay boşta ücret'],
        remedy: 'Dava tarihindeki değil karar anındaki güncel emsal ücret üzerinden hesaplanan tazminat ve dört aylık ücret ile sigorta primleri işverenden tahsil edilir.',
        pearl: 'm.21 altın sayıları: Kesinleşmeden 10 iş günü başvuru -> işverene 1 ay süre -> başlatmazsa 4–8 ay tazminat + en çok 4 ay boşta geçen süre ücreti.',
        trapFalse: 'kesinleşen karar üzerine işçi otuz gün içinde işverene başvurur ve başlatılmaması halinde en fazla iki aylık tazminat ile iki aylık boşta ücret alır',
        trapHighlight: 'otuz gün içinde işverene başvurur ve başlatılmaması halinde en fazla iki aylık tazminat'
      },
      {
        name: 'İstinaf Kesinliği (m. 8)',
        article: '7036 s. İş Mah. K. m. 8/1-a',
        rule: 'Geçersiz fesih tespitine yönelik yargılamalarda ilk derece iş mahkemesi kararına karşı iki hafta içinde Bölge Adliye Mahkemesine başvurulabilir; ancak bu üst dairenin verdiği kararlar nihai olup artık üst incelemeye götürülemez.',
        hallmark: 'Yargılamaların hızla sonuçlanması amacıyla bu uyuşmazlıklarda Yargıtay nezdinde temyiz incelemesi kanunen tamamen kapatılmıştır.',
        vignette: 'İlk derece iş mahkemesinde feshin geçersizliğine karar verilen dosyada işveren vekili Bölge Adliye Mahkemesine başvurmuş, ret kararı alınca dosyayı Yargıtay’a taşımak için dilekçe vermiştir.',
        clues: ['İki haftalık bölge adliye başvuru süresi', 'Bölge Adliye Mahkemesi kararının nihailiği', 'Yargıtay incelemesinin kapalı olması'],
        remedy: 'Temyiz yolu kapalı olduğundan Bölge Adliye dairesinin kararıyla hüküm son bulur ve çalışanın on iş günlük başvuru süresi bu kararın tebliğiyle işlemeye başlar.',
        pearl: '7036 s.K. m.8 uyarınca işe iade davalarında istinaf (BAM) kararları KESİNDİR; temyiz (Yargıtay) yolu kapalıdır!',
        trapFalse: 'istinaf dairesinin verdiği onama kararına karşı iki hafta içinde Yargıtay ilgili hukuk dairesine temyiz başvurusu yapılabilir',
        trapHighlight: 'Yargıtay ilgili hukuk dairesine temyiz başvurusu yapılabilir'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'Haklı Nedenle Derhal Fesih Halleri ve Hak Düşürücü Süreler',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Yüksek Verimli Olay',
    entities: [
      {
        name: 'İşçinin Derhal Feshi (m. 24)',
        article: '4857 s. İş K. m. 24',
        rule: 'Yapılan işin sağlığı tehlikeye sokması, aylık kazancın veya fazla mesainin eksik hesaplanıp ödenmemesi, cinsel tacize karşı önlem alınmaması yahut işyerinde bir haftadan fazla işin durması hallerinde çalışan sözleşmeyi beklemeden bitirebilir.',
        hallmark: 'Haklı sebeple ayrılan personel bir yıl kıdemi varsa kıdem ödencesine hak kazanır; ancak sözleşmeyi kendisi sonlandırdığı için ihbar tazminatı talep edemez.',
        vignette: 'Üç yıldır çalıştığı fabrikada sigorta primlerinin gerçek maaşı yerine asgari ücret üzerinden yatırıldığını ve fazla mesailerinin ödenmediğini belirleyen teknisyen, noter ihtarnamesiyle akdi hemen sonlandırmıştır.',
        clues: ['Maaş veya primin eksik bildirilmesi', 'Önel beklemeden sona erdirme yetkisi', 'Kıdem ödencesi doğup ihbar doğmaması'],
        remedy: 'Çalışan kıdem tazminatı ile ödenmeyen fazla mesai alacaklarını alabilir; fakat ihbar öneline uymadan kendisi ayrıldığı için ihbar alacağı kazanamaz.',
        pearl: 'm.24 ile haklı fesih yapan işçi (1 yılı varsa) KIDEM tazminatı alır ancak İHBAR tazminatı alamaz (çünkü sözleşmeyi kendisi feshetmiştir).',
        trapFalse: 'maaşı ödenmediği için sözleşmesini derhal sonlandıran çalışan hem kıdem tazminatını hem de ihbar tazminatını birlikte kazanır',
        trapHighlight: 'hem kıdem tazminatını hem de ihbar tazminatını birlikte kazanır'
      },
      {
        name: 'Sağlık Bekleme Süresi (m. 25/I)',
        article: '4857 s. İş K. m. 25/I',
        rule: 'Çalışanın kendi kusuruna dayanmayan rahatsızlık, kaza veya gebelik kaynaklı işe gelememe hallerinde işverenin derhal çıkarma yetkisi ancak kıdeme göre belirlenen ihbar önelini altı hafta aşan kesintisiz rapor diliminin dolmasıyla doğar.',
        hallmark: 'Kendi kastından veya düzensiz yaşamından doğan rahatsızlıkta ise ardı ardına üç iş günü yahut bir ayda beş iş gününden fazla işe gelmeme derhal sonlandırma gerekçesidir.',
        vignette: 'İki yıldır aynı işletmede çalışan ve altı haftalık bildirim öneline tabi olan personel, geçirdiği trafik kazası nedeniyle aralıksız on üç hafta istirahat raporu almış ve patron on üçüncü hafta sonunda sözleşmeyi bitirmiştir.',
        clues: ['Kusursuz rahatsızlıkta uzun rapor dilimi', 'İhbar öneli artı altı hafta kuralı', 'Kıdem tazminatı ödeme zorunluluğu'],
        remedy: 'Altı artı altı toplam on iki haftalık yasal eşik aşıldığından fesih haklıdır; patron ihbar tazminatı ödemez ancak bir yıllık kıdem mevcutsa kıdem ödencesini öder.',
        pearl: 'm.25/I-b kusursuz hastalık feshinde bekleme süresi = işçinin kıdemine göre ihbar süresi + 6 haftadır; bu fesihte kıdem tazminatı ödenir.',
        trapFalse: 'çalışanın kusursuz sağlık raporu toplam otuz günü aştığı anda işveren hiçbir bekleme süresi olmaksızın ve kıdem ödemeden sözleşmeyi bitirebilir',
        trapHighlight: 'toplam otuz günü aştığı anda işveren hiçbir bekleme süresi olmaksızın ve kıdem ödemeden'
      },
      {
        name: 'Ahlak ve İyiniyet Feshi (m. 25/II)',
        article: '4857 s. İş K. m. 25/II',
        rule: 'İzin almadan veya haklı mazeretsiz ardı ardına iki iş günü, bir ayda iki kez tatil sonrası iş günü yahut bir ayda üç iş günü işe gelmeme; ayrıca patrona otuz günlük kazancıyla ödeyemeyeceği zarar verme halleri derhal çıkarma sebebidir.',
        hallmark: 'İşyerinde yedi günden fazla hapisle cezalandırılan ve cezası ertelenmeyen suç işlenmesi de bu kapsamdadır; bu bentten yapılan haklı çıkarmada çalışana kıdem ve ihbar ödencesi verilmez.',
        vignette: 'Mazeret bildirmeden ve izin almadan Pazartesi ve Salı günleri üst üste göreve gelmeyen bir depo elemanı hakkında tutanak tutulmuş ve iş sözleşmesi derhal sona erdirilmiştir.',
        clues: ['Ardı ardına iki iş günü mazeretsiz gelmeme', 'Bir ayda toplam üç iş günü sınırı', 'Kıdem ve ihbar ödencesinin tamamen yanması'],
        remedy: 'Haklı sebep ispatlandığında işveren hem ihbar hem de kıdem tazminatından kurtulur; ancak çalışanın önceden hak ettiği yıllık izin ve maaş alacakları yine ödenir.',
        pearl: 'm.25/II (ahlak ve iyiniyet) kıdem tazminatını ortadan kaldıran TEK işveren fesih bendidir! Devamsızlık: ardı ardına 2 iş günü veya ayda 3 iş günü.',
        trapFalse: 'mazeretsiz bir iş günü işe gelmeyen personelin sözleşmesi kıdem tazminatı ödenmeksizin derhal sona erdirilebilir',
        trapHighlight: 'mazeretsiz bir iş günü işe gelmeyen personelin sözleşmesi'
      },
      {
        name: 'Zorlayıcı Sebep ve Tutukluluk',
        article: '4857 s. İş K. m. 25/III-IV',
        rule: 'Çalışanı işyerinde bir haftadan fazla süreyle çalışmaktan alıkoyan dışsal bir engel doğması yahut özgürlüğün adli kararla kısıtlanması halinde işe gelememenin ihbar önelini aşması durumunda işveren sözleşmeyi derhal bitirebilir.',
        hallmark: 'Bu iki bentte kusurlu ahlak ihlali bulunmadığından işveren ihbar tazminatı ödemez, ancak çalışanın en az bir yıllık hizmeti varsa kıdem tazminatını ödemekle yükümlüdür.',
        vignette: 'Dört yıldır aynı şirkette çalışan ve sekiz haftalık ihbar diliminde bulunan personel, işyeri dışındaki bir adli olay yüzünden dokuz hafta cezaevinde kalmış ve işveren sözleşmeyi sona erdirmiştir.',
        clues: ['Özgürlük kısıtlamasının ihbar önelini aşması', 'Bir haftadan uzun dışsal engel', 'İhbar ödenmeden kıdem ödenmesi'],
        remedy: 'Sekiz haftalık eşik aşıldığı için işverenin derhal çıkarma yetkisi doğmuştur; fakat çalışan dört yıllık kıdem tazminatını talep etme hakkını korur.',
        pearl: 'm.25/III (zorlayıcı sebep >1 hafta) ve m.25/IV (gözaltı/tutukluluk > ihbar süresi) hallerinde işveren İHBAR ödemez ama KIDEM tazminatı öder!',
        trapFalse: 'işyeri dışındaki bir adli olay nedeniyle ihbar süresini aşan tutukluluk halinde yapılan fesihte çalışana kıdem tazminatı ödenmez',
        trapHighlight: 'yapılan fesihte çalışana kıdem tazminatı ödenmez'
      },
      {
        name: 'Altı İş Günü Kuralı (m. 26)',
        article: '4857 s. İş K. m. 26',
        rule: 'Ahlak ve iyi niyet hükümlerine aykırı davranışlara dayanarak sözleşmeyi beklemeden sonlandırma yetkisi, olayın öğrenilmesinden itibaren altı iş günü ve her halde fiilin işlenmesinden itibaren bir yıl içinde kullanılmalıdır.',
        hallmark: 'Çalışanın olayda maddi çıkar sağlaması durumunda bir yıllık üst sınır uygulanmaz; bu hak düşürücü dilimler geçtikten sonra yapılan sonlandırma haksız hale gelir.',
        vignette: 'Bir muhasebe görevlisinin şirket kasasından zimmetine para geçirdiği on sekiz ay sonra yapılan denetimde ortaya çıkmış ve yönetim organı durumu öğrendiği dördüncü iş gününde sözleşmeyi bitirmiştir.',
        clues: ['Öğrenmeden itibaren altı iş günü', 'Fiilden itibaren bir yıllık genel tavan', 'Maddi çıkar sağlanmasında bir yılın uygulanmaması'],
        remedy: 'Olayda maddi çıkar bulunduğundan bir yıllık tavan işlemez; öğrenmeden itibaren altı iş günü içinde hareket edildiği için işlem hukuken geçerlidir.',
        pearl: 'm.26 süresi YALNIZCA m.24/II ve m.25/II (ahlak-iyiniyet) halleri içindir: Öğrenmeden 6 iş günü, her halde 1 yıl (maddi çıkarda 1 yıl uygulanmaz!).',
        trapFalse: 'ahlak kurallarına aykırı davranışı öğrenen işveren otuz gün içinde fesih yapabilir ve işçinin maddi çıkar sağlaması halinde dahi bir yıllık sınır kesindir',
        trapHighlight: 'otuz gün içinde fesih yapabilir ve işçinin maddi çıkar sağlaması halinde dahi bir yıllık sınır kesindir'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: 'Kıdem Tazminatı, İşçilik Alacakları Zamanaşımı ve Zorunlu Arabuluculuk',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Kıdem Tazminatı Şartları',
        article: '1475 s. İş K. m. 14',
        rule: 'Aynı işverene bağlı en az bir tam yıl çalışmış olmak koşuluyla; işverenin ahlak dışı sebeplerle çıkarması, çalışanın haklı nedenle ayrılması, muvazzaf askerlik, emeklilik, vefat veya kadın personelin nikah tarihinden itibaren bir yıl içinde ayrılması halinde doğar.',
        hallmark: 'Haklı bir gerekçe olmaksızın genel istifa eden personel bu parasal haktan yararlanamaz; aynı işverenin farklı şubelerinde geçen süreler birleştirilir.',
        vignette: 'Aynı bankada üç yıldır çalışan kadın uzman, 15 Haziran tarihinde resmi nikah kıymış ve ertesi yılın 10 Mayıs tarihinde evlilik belgesini ekleyerek işten ayrılacağını yazılı olarak bildirmiştir.',
        clues: ['En az bir tam yıl hizmet koşulu', 'Kadın çalışanın nikahtan itibaren bir yıllık hakkı', 'Genel istifada doğmama ilkesi'],
        remedy: 'Bir yıllık yasal süre dolmadan başvurduğu için kadın çalışan üç yıllık hizmetine karşılık gelen toplu ayrılış ödemesini işverenden tam olarak alır.',
        pearl: 'Kıdem tazminatı için en az 1 yıl çalışma gerekir; kadın işçi evlendiği tarihten itibaren 1 yıl içinde kendi isteğiyle ayrılırsa kıdem tazminatı alır (ihbar almaz).',
        trapFalse: 'kadın çalışan resmi nikah tarihinden itibaren iki yıl içinde ayrılırsa hem kıdem hem de ihbar ödemesine hak kazanır',
        trapHighlight: 'iki yıl içinde ayrılırsa hem kıdem hem de ihbar ödemesine'
      },
      {
        name: 'Kıdem Tavanı ve Faizi',
        article: '1475 s. İş K. m. 14/1-11',
        rule: 'Her geçen tam çalışma yılı için otuz günlük giydirilmiş brüt kazanç üzerinden hesaplanır; bir yıllık tutar en yüksek Devlet memuruna ödenen azami emeklilik ikramiyesi sınırını geçemez ve geç ödemede mevduata uygulanan en yüksek getiri işletilir.',
        hallmark: 'Hesaplamada çıplak maaşın yanı sıra düzenli verilen yemek, yol, yakacak ve ikramiye gibi süreklilik taşıyan parasal menfaatler de dikkate alınır; artan aylar oranlanarak eklenir.',
        vignette: 'Yüksek maaşlı bir genel müdürün beş yıllık hizmet sonunda sözleşmesi geçerli sebeple bitirilmiş; brüt aylık geliri yasal üst sınırın iki katı olmasına karşın ödeme altı ay geciktirilmiştir.',
        clues: ['Otuz günlük giydirilmiş brüt ücret', 'En yüksek Devlet memuru ikramiye sınırı', 'Mevduata uygulanan en yüksek getiri oranı'],
        remedy: 'Yıllık hesap yasal azami sınır üzerinden yapılır ve fesih tarihinden fiili ödeme gününe kadar geçen altı aylık gecikme için en yüksek mevduat getirisi eklenir.',
        pearl: 'Kıdem tazminatı giydirilmiş brüt ücretle (30 gün/yıl) hesaplanır, memur emeklilik ikramiyesi tavanına tabidir ve fesih tarihinden itibaren en yüksek mevduat faizi işler.',
        trapFalse: 'çıplak net ücret üzerinden yıllık on beş günlük tutarda hesaplanır ve gecikme halinde yasal faiz işletilir',
        trapHighlight: 'çıplak net ücret üzerinden yıllık on beş günlük tutarda hesaplanır ve gecikme halinde yasal faiz'
      },
      {
        name: 'Beş Yıllık Zamanaşımı',
        article: '4857 s. İş K. Ek m. 3, m. 32/8',
        rule: 'Hizmet sözleşmesinden kaynaklanmak kaydıyla senelik izin parası, kıdem ödencesi, ihbar ödencesi, kötüniyet ödencesi, ayrımcılık ödencesi ve tüm maaş-mesai alacakları beş senelik sürenin geçmesiyle talep edilebilirliğini yitirir.',
        hallmark: '2017 yılında yapılan yasa değişikliğiyle tazminat niteliğindeki bu talepler on seneden beş seneye indirilerek maaş alacaklarıyla aynı dilime eşitlenmiştir.',
        vignette: 'Sözleşmesi 2020 yılında haksız biçimde bitirilen bir işçi, kıdem ve kullanılmayan izin paralarını talep etmek amacıyla altı buçuk sene sonra iş mahkemesine başvurmuştur.',
        clues: ['Fesih tarihinden itibaren işlemeye başlama', 'Tazminat ve maaş alacaklarında yeknesak süre', 'Davalının süresinde def’i ileri sürmesi'],
        remedy: 'İşveren cevap dilekçesinde bu def’iyi usulünce ileri sürerse talep reddedilir; hakim def’i ileri sürülmedikçe sürenin dolduğunu kendiliğinden dikkate alamaz.',
        pearl: '4857 Ek m.3 ile kıdem, ihbar, yıllık izin, kötüniyet ve eşit davranma tazminatlarının tamamında zamanaşımı 5 YILDIR (10 yıl değildir!).',
        trapFalse: 'kıdem ve ihbar tazminatlarında on yıllık genel süre uygulanırken yalnızca aylık maaş alacakları beş yıla tabidir',
        trapHighlight: 'kıdem ve ihbar tazminatlarında on yıllık genel süre uygulanırken'
      },
      {
        name: 'Dava Şartı Arabuluculuk',
        article: '7036 s. İş Mah. K. m. 3',
        rule: 'Kanuna veya sözleşmeye dayanan işçi ve işveren alacakları, tazminatları ile işe dönüş taleplerinde mahkemeye gitmeden önce uzlaştırma uzmanına başvurulması zorunludur; ancak iş kazası ve meslek hastalığı kaynaklı maddi-manevi tazminat, tespit ve rücu talepleri bu zorunluluğun dışındadır.',
        hallmark: 'Görevlendirilen uzlaştırmacı süreci üç hafta içinde sonuçlandırır ve zorunlu hallerde en fazla bir hafta uzatabilir; zorunlu başvuruyu yapmadan açılan dosya usulden reddedilir.',
        vignette: 'Fabrikadaki pres makinesinde elini kaybeden operatör, uğradığı maddi ve manevi zararların giderilmesi için uzlaştırma yoluna başvurmadan doğrudan iş mahkemesinde dilekçe vermiştir.',
        clues: ['Alacak ve tazminatta zorunlu ön aşama', 'İş kazası ve meslek hastalığında muafiyet', 'Üç artı bir haftalık görüşme süresi'],
        remedy: 'İş kazasından doğan tazminat talebi zorunlu ön koşulun istisnası olduğu için mahkeme usulden ret kararı vermez ve yargılamaya doğrudan başlar.',
        pearl: '7036 m.3: İşçi-işveren alacak/tazminat ve işe iadede arabuluculuk DAVA ŞARTIDIR; İSTİSNA: İş kazası ve meslek hastalığı tazminat/tespit/rücu davaları!',
        trapFalse: 'iş kazasından doğan maddi ve manevi tazminat taleplerinde de mahkemeye gitmeden önce uzlaştırmacıya başvurmak zorunlu ön şarttır',
        trapHighlight: 'iş kazasından doğan maddi ve manevi tazminat taleplerinde de'
      },
      {
        name: 'İş Mahkemesi Yetkisi',
        article: '7036 s. İş Mah. K. m. 5-7',
        rule: 'İşçi ile işveren arasındaki sözleşme ve kanundan doğan hukuk uyuşmazlıkları ile SGK davalarına bakmakla görevli özel yargı merciidir; basit yargılama uygulanır ve davalının yerleşim yeri veya işin yapıldığı yerdeki yargı mercii bakar.',
        hallmark: 'Kanundaki yer kurallarına aykırı olarak taraflarca yapılan yer anlaşmaları kesinlikle geçersizdir; kanun yolu başvuru süresi tebliğden itibaren iki haftadır.',
        vignette: 'İzmir’de faaliyet gösteren bir şubede çalışan personel, sözleşmede yalnızca İstanbul yargı çevresinin görevli kılındığı yazılı olmasına rağmen alacak talebini İzmir’deki uzman merciide açmıştır.',
        clues: ['Basit yargılama usulü uygulaması', 'İşin yapıldığı yer ve davalı yerleşim yeri', 'Aksine yapılan yer anlaşmasının geçersizliği'],
        remedy: 'Sözleşmedeki İstanbul yer şartı geçersiz sayılır ve işin fiilen yapıldığı İzmir’deki uzman yargı mercii dosyayı incelemeye devam eder.',
        pearl: '7036 m.6 gereği iş davalarında yetkili mahkeme davalının yerleşim yeri veya işin yapıldığı yerdir; aksine yapılan yetki sözleşmeleri GEÇERSİZDİR.',
        trapFalse: 'yazılı yargılama usulü uygulanır ve taraflar sözleşmeyle diledikleri ilin mahkemesini münhasıran yetkili kılabilirler',
        trapHighlight: 'yazılı yargılama usulü uygulanır ve taraflar sözleşmeyle diledikleri ilin mahkemesini'
      }
    ]
  },
  {
    branchId: 'is_sgk',
    subTopic: '6356 Sendikalar, Toplu İş Sözleşmesi, Grev ve 5510 Sosyal Güvenlik',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Yüksek Verimli Olay',
    entities: [
      {
        name: 'Sendika Kuruluşu',
        article: '6356 s. STİSK m. 3, m. 7, m. 17',
        rule: 'Önceden resmi izin almaksızın en az yedi kişi tarafından tüzüğün ilgili valiliğe teslim edilmesiyle tüzel kişilik kazanılır; on beş yaşını dolduran ve çalışan sayılan herkes e-Devlet üzerinden katılabilir.',
        hallmark: 'Aynı anda aynı işkolunda birden fazla örgüte katılınamaz; ancak farklı işkollarında aynı anda çalışan kişi her bir işkolunda ayrı bir örgüte katılabilir.',
        vignette: 'Gıda sektöründe çalışan yedi işçi, Çalışma Bakanlığından ön izin almadan hazırladıkları tüzüğü valiliğe vererek mesleki örgüt oluşturmuş ve on altı yaşındaki genç bir işçinin e-Devlet kaydını yapmıştır.',
        clues: ['Ön izin olmadan yedi kişiyle tüzük teslimi', 'Valiliğe bildirimle tüzel kişilik', 'On beş yaşını dolduranların e-Devlet kaydı'],
        remedy: 'Tüzük teslimi hukuka uygundur; işverenin çalışanları örgütlü olup olmamalarına göre ayırması halinde en az bir yıllık ücret tutarında özel tazminat doğar.',
        pearl: 'Sendika en az 7 kurucuyla önceden izin alınmaksızın valiliğe tüzük verilmesiyle kurulur; üyelik yaşı 15’tir (e-Devlet üzerinden).',
        trapFalse: 'en az on beş kurucuyla ve Bakanlık ön izniyle kurulur; katılım için on sekiz yaşını doldurmuş olmak şarttır',
        trapHighlight: 'en az on beş kurucuyla ve Bakanlık ön izniyle kurulur; katılım için on sekiz yaşını'
      },
      {
        name: 'Toplu Sözleşme Yetkisi',
        article: '6356 s. STİSK m. 35, m. 41',
        rule: 'Faaliyet gösterdiği işkolunda çalışanların en az yüzde birini çatısında toplayan örgüt; tek bir işyerinde çalışanların yarıdan fazlasını, birden fazla işyerinden oluşan işletmede ise en az yüzde kırkını temsil ediyorsa masaya oturabilir.',
        hallmark: 'İmzalanan metin en az bir yıl ve en çok üç yıl süreli yapılabilir; yürürlüğe girdikten sonra taraflarca süresi kısaltılamaz, uzatılamaz ve vadesinden önce bitirilemez.',
        vignette: 'Ülke genelinde işkolu oranının yüzde ikisine sahip bir işçi örgütü, aynı şirketin üç farklı fabrikasından oluşan işletmesinde çalışanların yüzde kırk ikisini üye yaparak Bakanlıktan tespit istemiştir.',
        clues: ['Yüzde bir işkolu barajı', 'İşyerinde yarıdan fazla, işletmede yüzde kırk', 'En az bir en çok üç yıllık kesin süre'],
        remedy: 'Hem işkolu hem de işletme çoğunluğu sağlandığından olumlu tespit yazısı verilir; itirazlar altı iş günü içinde mahkemeye taşınabilir.',
        pearl: 'TİS yetki barajı: İşkolu %1 + İşyeri >%50 (%50+1) / İşletme >=%40; TİS süresi en az 1 yıl, en çok 3 yıldır (sonradan değiştirilemez).',
        trapFalse: 'işkolu barajı yüzde üç olup imzalanan anlaşmanın süresi en fazla beş yıl belirlenebilir ve tarafların rızasıyla kısaltılabilir',
        trapHighlight: 'işkolu barajı yüzde üç olup imzalanan anlaşmanın süresi en fazla beş yıl'
      },
      {
        name: 'Kanuni Grev ve Yasaklar',
        article: '6356 s. STİSK m. 60, m. 62',
        rule: 'Toplu görüşmede uyuşmazlık tutanağının tebliğinden itibaren altmış gün içinde iş bırakma kararı alınabilir ve karşı tarafa en az altı iş günü önceden bildirilen tarihte uygulamaya konulur.',
        hallmark: 'Can ve mal kurtarma, cenaze-tekfin, su-elektrik-doğalgaz-petrol üretimi, Milli Savunma işyerleri, kamu itfaiyesi ve hastanelerde engellenmiştir; ancak bankacılık ve şehir içi toplu taşımada engel kaldırılmıştır.',
        vignette: 'Arabulucu uyuşmazlık tutanağını tebliğ alan işçi örgütü, kırkıncı günde iş bırakma kararı almış ve belediye otobüslerinde uygulanmak üzere yedi iş günü önceden işverene noterle bildirmiştir.',
        clues: ['Tutanaktan itibaren altmış gün içinde karar', 'En az altı iş günü önceden bildirim', 'Şehir içi toplu taşıma ve bankacılıkta serbestlik'],
        remedy: 'AYM iptal kararı sonrası şehir içi toplu taşıma engel kapsamı dışında olduğundan ve sürelere uyulduğundan iş bırakma eylemi hukuka uygundur.',
        pearl: 'Grev kararı uyuşmazlık tutanağından itibaren 60 gün içinde alınır, en az 6 iş günü önce bildirilir; bankacılık ve şehir içi toplu taşıma artık grev yasağı kapsamında DEĞİLDİR!',
        trapFalse: 'uyuşmazlık tutanağından itibaren otuz gün içinde karar alınması gerekir ve bankacılık ile şehir içi toplu taşıma hizmetlerinde iş bırakmak halen yasaktır',
        trapHighlight: 'otuz gün içinde karar alınması gerekir ve bankacılık ile şehir içi toplu taşıma hizmetlerinde iş bırakmak halen yasaktır'
      },
      {
        name: '5510 Sigortalılık Türleri',
        article: '5510 s. SSGSSK m. 4',
        rule: 'Hizmet akdiyle bir veya birden fazla işveren yanında çalışanlar 4/1-(a), kendi adına bağımsız çalışanlar ile köy-mahalle muhtarları ve şirket ortakları 4/1-(b), kamu idarelerindeki kadrolu görevliler ise 4/1-(c) kapsamında sayılır.',
        hallmark: 'Aynı anda hem 4/1-(a) hem de 4/1-(b) kapsamına giren kişinin prim bildiriminde kural olarak hizmet akdine dayalı 4/1-(a) statüsü üstün tutulur.',
        vignette: 'Hem bir limited şirketin ortağı olan hem de başka bir anonim şirkette hizmet sözleşmesiyle mali müşavir olarak çalışan kişi, sosyal güvenlik primlerinin hangi statüden öncelikli yatacağını sormaktadır.',
        clues: ['Hizmet akdi çalışanları 4/a grubu', 'Bağımsız çalışan ve muhtarlar 4/b grubu', 'Çakışmada 4/a statüsünün üstünlüğü'],
        remedy: '2011 sonrası düzenleme gereği 4/a ve 4/b çakıştığında 4/a geçerli sayılır; kamu görevliliği (4/c) ile çakışma halinde ise 4/c üstün tutulur.',
        pearl: '5510 m.4 statüleri: 4/a = işçi (SSK), 4/b = esnaf/şirket ortağı/muhtar (Bağ-Kur), 4/c = memur (Emekli Sandığı). Çakışmada öncelik sırası: 4/c > 4/a > 4/b.',
        trapFalse: 'köy ve mahalle muhtarları kamu görevlisi sayılarak 4/c kapsamında tescil edilir ve 4/a ile 4/b çakışmasında 4/b üstün tutulur',
        trapHighlight: 'köy ve mahalle muhtarları kamu görevlisi sayılarak 4/c kapsamında tescil edilir'
      },
      {
        name: 'İş Kazası ve Bildirimi',
        article: '5510 s. SSGSSK m. 13',
        rule: 'Sigortalının işyerinde bulunduğu sırada, işverence görevle gönderildiği yerde, emziren kadının bebek besleme saatinde veya işverenin sağladığı taşıtla gidiş-gelişinde bedenen ya da ruhen zarara uğramasıdır; kolluğa derhal, Kuruma en geç üç iş günü içinde ihbar edilir.',
        hallmark: 'Çalışanın kendi özel otomobiliyle evinden işe giderken geçirdiği trafik olayı kural olarak bu kapsama girmez; ancak işverenin tahsis ettiği servis aracında yaşanan olay kapsamdadır.',
        vignette: 'Fabrikanın tahsis ettiği personel servis aracıyla sabah işe giderken trafik çarpışmasında ayağı kırılan işçi için işveren durumu polise hemen aktarmış, Kuruma ise beşinci iş gününde yazmıştır.',
        clues: ['İşverence sağlanan servis aracında olay', 'Kolluk kuvvetlerine derhal ihbar', 'Kuruma en geç üç iş günü içinde aktarım'],
        remedy: 'Olay yasal kapsamda sayılır; Kuruma üç iş günlük süre aşılarak aktarım yapıldığı için işverene idari para cezası kesilir ve ödenen geçici iş göremezlik ödenekleri rücu edilir.',
        pearl: 'İş kazası: işyerinde + görevle gönderilmede + süt izninde + işveren servisinde yaşanan olaydır. Bildirim: Kolluğa DERHAL, SGK’ya en geç 3 İŞ GÜNÜ!',
        trapFalse: 'işverenin sağladığı servis aracında meydana gelen olay kapsama girmez ve Kuruma bildirim süresi olaydan itibaren on iş günüdür',
        trapHighlight: 'servis aracında meydana gelen olay kapsama girmez ve Kuruma bildirim süresi olaydan itibaren on iş günüdür'
      }
    ]
  },
  // =========================================================================
  // VERGİ HUKUKU (9 KÜME - 45 ANTİTE)
  // =========================================================================
  {
    branchId: 'vergi',
    subTopic: 'Vergi Hukuku İlkeleri, Kıyas Yasağı, Mükellefiyet ve Temsil',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Verginin Kanuniliği',
        article: '1982 Anayasası m. 73/3-4',
        rule: 'Resim, harç ve benzeri mali yükümlülükler yalnızca yasama organının çıkardığı yasa ile konulur, değiştirilir veya kaldırılır; Cumhurbaşkanına sadece belirtilen yukarı ve aşağı sınırlar içinde muaflık, istisna, indirim ve oran değiştirme yetkisi tanınabilir.',
        hallmark: 'Olağan dönem Cumhurbaşkanlığı kararnamesiyle sıfırdan mali yükümlülük ihdas edilemez; idarenin tebliğ veya genelgeyle yeni bir mali yük getirmesi de açıkça hükümsüzdür.',
        vignette: 'Bir bakanlık genelgesiyle, yasada hiç yer almayan yeni bir çevre katkı payının tüm esnaftan yüzde iki oranında tahsil edilmesi öngörülmüş ve esnaf odası bu düzenlemenin iptalini istemiştir.',
        clues: ['Yasama organı tekeli', 'Alt ve üst sınır içinde oran değişikliği', 'İdari düzenlemeyle yeni mali yük getirilememesi'],
        remedy: 'Düzenleyici idari işleme karşı Danıştay’da iptal davası açılır; yasama normuna aykırı alt düzenlemeler yargıca iptal edilir.',
        pearl: 'Anayasa m.73: Mali yükümlülükler yalnız kanunla konulur; CB sadece kanunun belirlediği alt-üst sınırlar içinde oran, indirim, istisna ve muaflıkta değişiklik yapabilir.',
        trapFalse: 'olağan dönem Cumhurbaşkanlığı kararnamesiyle sıfırdan yeni bir mali yükümlülük ihdas edilebilir ve alt-üst sınır olmaksızın oran belirlenebilir',
        trapHighlight: 'olağan dönem Cumhurbaşkanlığı kararnamesiyle sıfırdan yeni bir mali yükümlülük ihdas edilebilir'
      },
      {
        name: 'Ekonomik Yaklaşım ve Kıyas',
        article: '213 s. VUK m. 3/B',
        rule: 'Mali kurallar lafzı ve ruhu ile hüküm ifade eder; mali yük doğuran olayların ve ilişkilerin görünüşteki biçimi değil gerçek mahiyeti esastır ve yemin dışındaki her türlü delille ispatlanabilir; ancak boşluk doldurarak yeni yük yaratılamaz.',
        hallmark: 'Özel hukukta yaygın olan boşluk doldurma yöntemi kamu maliyesi alanında mükellef aleyhine uygulanamaz; tanık beyanının geçerliliği ise olayla doğal ve açık ilgisi bulunmasına bağlıdır.',
        vignette: 'Bir tüccar, yüksek bedelli arsa satışını tapuda bağış gibi göstererek kazanç beyanından kaçınmış; inceleme elemanı banka dekontları ve alıcı beyanlarıyla işlemin gerçekte satış olduğunu ortaya koymuştur.',
        clues: ['Biçim yerine gerçek mahiyetin esas alınması', 'Yemin hariç tüm ispat araçlarının serbestliği', 'Mükellef aleyhine boşluk doldurulamaması'],
        remedy: 'İdare, işlemin gerçek iktisadi niteliğine dayanarak tarhiyat yapabilir; buna karşılık yasada açıkça öngörülmeyen bir faaliyet benzerlik yoluyla mali yüke tabi tutulamaz.',
        pearl: 'VUK m.3/B: Vergilendirmede gerçek mahiyet esastır, YEMİN HARİÇ her türlü delille ispatlanabilir; vergi hukukunda kıyas YASAKTIR.',
        trapFalse: 'mali uyuşmazlıklarda yemin deliline başvurulması serbesttir ve yasada boşluk varsa benzerlik yoluyla yeni mali yük konulabilir',
        trapHighlight: 'yemin deliline başvurulması serbesttir ve yasada boşluk varsa benzerlik yoluyla'
      },
      {
        name: 'Vergiyi Doğuran Olay',
        article: '213 s. VUK m. 9/2, m. 19',
        rule: 'Devletin mali alacağı, ilgili mevzuatın yükümlülüğü bağladığı maddi vakıanın gerçekleşmesi veya hukuki durumun tamamlanmasıyla ortaya çıkar; bu vakıanın kanunla yasaklanmış bulunması borcun oluşmasını engellemez.',
        hallmark: 'Kaçakçılık, ruhsatsız ticaret veya yasadışı kumar gibi hukuka aykırı faaliyetlerden elde edilen gelirler dahi kamu alacağı bakımından borç oluşturur.',
        vignette: 'Belediyeden hiçbir işyeri açma ruhsatı almadan izinsiz otopark işleten ve yüksek kazanç sağlayan şahıs, faaliyetinin yasadışı olduğunu ileri sürerek mali yükümlülük oluşmayacağını savunmuştur.',
        clues: ['Kanunun bağladığı vakıanın tekemmülü', 'Hukuka aykırılığın borcu ortadan kaldırmaması', 'Devlet alacağının kendiliğinden oluşumu'],
        remedy: 'İdare, ruhsatsız veya hukuka aykırı faaliyetten kaynaklanan kazanç üzerinden geriye dönük tarhiyat ve ceza işlemi tesis edebilir.',
        pearl: 'VUK m.9/2 ve m.19: Vergiyi doğuran olayın kanunlarla yasak edilmiş bulunması mükellefiyeti ve vergi sorumluluğunu kaldırmaz!',
        trapFalse: 'ruhsatsız veya hukuka aykırı biçimde yürütülen bir ticari faaliyetten elde edilen kazanç bakımından mali yükümlülük doğmaz',
        trapHighlight: 'yürütülen bir ticari faaliyetten elde edilen kazanç bakımından mali yükümlülük doğmaz'
      },
      {
        name: 'Mükellef ve Sorumlu',
        article: '213 s. VUK m. 8',
        rule: 'Asıl borçlu mevzuata göre kendisine kamu borcu düşen gerçek veya tüzel kişidir; aracı muhatap ise başkasının borcunu kaynağından kesip alacaklı daireye yatırmakla ödevli şahıstır ve bu statüler özel sözleşmeyle idareye karşı değiştirilemez.',
        hallmark: 'İşçinin maaşından gelir kesintisi yapıp maliyeye aktaran işveren yahut kira stopajını yatıran kiracı aracı muhatap konumundadır; taraflar aksini anlaşsa dahi idare kanuni muhatabı takip eder.',
        vignette: 'Bir işyeri kira sözleşmesine, kira gelirine ait kesintinin kiracı yerine mal sahibi tarafından beyan edilip ödeneceği maddesi konulmuş ve kiracı kesinti yapmadığı için dairece takibe alınmıştır.',
        clues: ['Asıl borçlu ile kesinti yapan aracı farkı', 'Özel sözleşmelerin idareyi bağlamaması', 'Alacaklı daireye karşı doğrudan muhataplık'],
        remedy: 'Özel sözleşme hükmü mali idareye karşı ileri sürülemez; kiracı kesintiyi yatırmak zorunda kalır ancak sözleşmeye dayanarak genel mahkemede mal sahibine rücu edebilir.',
        pearl: 'VUK m.8/3: Mükellefiyet ve vergi sorumluluğuna ilişkin özel sözleşmeler vergi dairelerini BAĞLAMAZ (sadece taraflar arasında rücu doğurur).',
        trapFalse: 'taraflar aralarında noter onaylı yazılı sözleşme yaparak kamu alacağının idareye karşı muhatabını serbestçe değiştirebilirler',
        trapHighlight: 'kamu alacağının idareye karşı muhatabını serbestçe değiştirebilirler'
      },
      {
        name: 'Vergi Ehliyeti ve Temsil',
        article: '213 s. VUK m. 9/1, m. 10',
        rule: 'Kamu borçlusu olabilmek için medeni fiil yeteneği aranmaz; küçüklerin, kısıtlıların ve tüzel kişilerin mali ödevleri veli, vasi veya yöneticilerince yerine getirilir ve ödev ihlali yüzünden varlıktan alınamayan borçlar yöneticinin kendi malvarlığından tahsil edilir.',
        hallmark: 'Ayırt etme gücü olmayan altı yaşındaki bir çocuk dahi kendisine miras kalan kira gelirli binadan dolayı asıl borçlu sıfatını taşır; ancak adına ceza kesilemez, ceza velisine kesilir.',
        vignette: 'Bir anonim şirketin yönetim kurulu başkanı, şirket beyannamelerini vermediği için tahakkuk eden kamu borçları şirket varlığından tahsil edilememiş ve mali idare başkanın kişisel taşınmazına haciz koymuştur.',
        clues: ['Medeni fiil yeteneği aranmaması', 'Tüzel kişide ödenmeyen borçtan kişisel mesuliyet', 'Yöneticinin asıl borçluya rücu olanağı'],
        remedy: 'Ödevini ihmal eden yönetici kişisel malvarlığıyla ödediği tutar için asıl borçlu şirkete rücu edebilir; kusursuzluğunu ispatlarsa kişisel takipten kurtulur.',
        pearl: 'VUK m.9-10: Vergi mükellefiyeti için fiil ehliyeti ŞART DEĞİLDİR (hak ehliyeti yeterlidir); tüzel kişiden alınamayan borç kanuni temsilciden alınır.',
        trapFalse: 'ayırt etme gücü bulunmayan küçükler hiçbir halde mali borçlu olamaz ve anonim şirket yöneticilerinin kişisel malvarlığına başvurulamaz',
        trapHighlight: 'ayırt etme gücü bulunmayan küçükler hiçbir halde mali borçlu olamaz'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: 'Vergilendirme Süreci: Tarh Türleri, Tebliğ, Tahakkuk ve Tahsil',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'İkmalen Tarh (m. 29)',
        article: '213 s. VUK m. 29',
        rule: 'Her ne suretle olursa olsun ilk aşamada bir kamu borcu saptandıktan sonra, buna ilişkin olarak sonradan ortaya çıkan ve defter, kayıt, belge veya kanuni ölçülere dayanılarak tutarı belirlenen matrah farkı üzerinden yapılan ek işlemdir.',
        hallmark: 'Önceden yapılmış bir ilk saptamanın bulunması ve farkın tamamen maddi belgelere, faturalara veya yasal ölçülere dayanılarak net biçimde çıkarılabilmesi temel ayırt edici unsurudur.',
        vignette: 'Yıllık kazancını süresinde beyan eden bir mobilya şirketinin satış faturaları sonradan incelenmiş; yasal defterlerde kayıtlı iki faturanın toplam tutarının beyannameye eksik aktarıldığı kesin belgelerle saptanmıştır.',
        clues: ['Önceden yapılmış ilk saptama varlığı', 'Defter ve belgelere dayalı net matrah farkı', 'Takdir komisyonuna gerek kalmadan ek işlem'],
        remedy: 'İdare, saptanan net fark için ihbarname düzenleyip tebliğ eder; ilgilinin otuz gün içinde vergi mahkemesinde dava açma veya idari yollara gitme hakkı vardır.',
        pearl: 'İkmalen tarhın anahtarı: Önceki tarhiyat + sonradan çıkan farkın DEFTER, KAYIT, BELGE veya KANUNİ ÖLÇÜLERLE somut olarak belirlenebilmesi!',
        trapFalse: 'hiç beyanname verilmediği ve defter tutulmadığı hallerde takdir komisyonu kararıyla yapılan ilk saptama türüdür',
        trapHighlight: 'hiç beyanname verilmediği ve defter tutulmadığı hallerde takdir komisyonu kararıyla'
      },
      {
        name: 'Re’sen Tarh (m. 30)',
        article: '213 s. VUK m. 30',
        rule: 'Kamu borcunun esasının defter, kayıt ve belgelerle veya yasal ölçülerle belirlenmesine olanak bulunmayan hallerde takdir komisyonlarınca yahut inceleme elemanlarının raporlarıyla belirlenen tutar üzerinden yapılan idari işlemdir.',
        hallmark: 'Beyannamenin süresinde verilmemesi, zorunlu defterlerin hiç tutulmaması, tasdik ettirilmemesi, ibraz edilmemesi veya kayıtların güvenilirliğini yitirmesi bu yolun başlıca sebepleridir.',
        vignette: 'Yasal zorunluluğu olmasına rağmen ticari defterlerini hiç tasdik ettirmeyen ve yıllık beyannamesini kanuni sürede vermeyen bir işletmenin kazancı, inceleme elemanınca emsal verilerle saptanmıştır.',
        clues: ['Defter ve belgeyle tespit imkansızlığı', 'Takdir komisyonu veya inceleme raporu dayanağı', 'Süresinde beyanname vermeme veya defter ibraz etmeme'],
        remedy: 'İhbarname tebliğinden itibaren otuz gün içinde vergi mahkemesinde iptal davası açılabilir; bu yöntemi gerektiren hallerde birinci derece usulsüzlük iki kat kesilir.',
        pearl: 'Re’sen tarh = defter/belgeyle maddi tespit İMKANSIZLIĞI (beyanname yok, defter yok/tasdiksiz/ibraz edilmiyor) -> Takdir Komisyonu veya Vergi İnceleme Raporu!',
        trapFalse: 'defter ve faturalardan net biçimde çıkarılabilen basit toplama hataları için yalnızca takdir komisyonu tarafından uygulanır',
        trapHighlight: 'net biçimde çıkarılabilen basit toplama hataları için yalnızca takdir komisyonu'
      },
      {
        name: 'İdarece Tarh (Mük. m. 30)',
        article: '213 s. VUK Mük. m. 30',
        rule: 'Ek ve takdir yolları dışında kalan durumlarda, yükümlülerin kanunen belli zamanlarda kuruma başvurmaması veya yasal mecburiyetlerini yerine getirmemesi nedeniyle zamanında hesaplanamayan alacağın kanunen belli esaslardan çıkarılmasıdır.',
        hallmark: 'Özellikle vergi karnesi alma yükümlülüğü bulunanların süresinde karne almaması ya da beyan dışındaki kanuni bildirim ödevlerinin ihmal edilmesi hallerinde ikincil yol olarak devreye girer.',
        vignette: 'Diğer ücret kapsamında çalışıp kanuni süresi içinde vergi karnesini alıp daireye işletmeyen bir hizmetlinin borcu, daire tarafından mevzuatta sabit tutulan matrah üzerinden kendiliğinden hesaplanmıştır.',
        clues: ['İkmalen ve takdir yollarının dışında kalma', 'Süresinde müracaat veya karne ödevi ihlali', 'Kanunen sabit matrah üzerinden işlem'],
        remedy: 'İhbarname tebliğ edilerek muhataba bildirilir; tebliğ tarihinden itibaren otuz gün içinde yargı yoluna veya uzlaşma-indirim seçeneklerine başvurulabilir.',
        pearl: 'İdarece tarh (VUK Mük. m.30), ikmalen ve re’sen tarh dışındaki hallerde (özellikle süresinde karne alınmaması gibi) kanunen belli matrah üzerinden yapılır.',
        trapFalse: 'mükellefin süresinde verdiği yıllık beyannamedeki kendi beyanı esas alınarak anında tahakkuk fişi kesilmesi işlemidir',
        trapHighlight: 'kendi beyanı esas alınarak anında tahakkuk fişi kesilmesi işlemidir'
      },
      {
        name: 'Elektronik Tebligat',
        article: '213 s. VUK m. 93, m. 103, m. 107/A',
        rule: 'Mali belgeler posta, memur, dairede elden, ilan veya dijital sistem aracılığıyla ulaştırılır; dijital ortamda yapılan bildirim, muhatabın sistemdeki kutusuna ulaştığı tarihi izleyen beşinci günün sonunda yapılmış sayılır.',
        hallmark: 'Muhatabın adresi hiç bilinmiyorsa veya bilinen adresine ulaşılamayıp yeni adresi saptanamıyorsa, ilan yoluyla duyuru yapılır ve ilandan itibaren bir ay içinde başvurulmazsa sürenin sonunda işlem tamamlanmış sayılır.',
        vignette: 'Bir limited şirketin dijital bildirim kutusuna 10 Mayıs tarihinde vergi ve ceza ihbarnamesi düşmüş; şirket yetkilisi iletiyi ancak 20 Mayıs tarihinde açıp okumuştur.',
        clues: ['Dijital kutuya ulaştığı günden beş gün sonra', 'İletinin fiilen açıldığı tarihin önemsizliği', 'Adresi bilinmeyenlerde ilan prosedürü'],
        remedy: 'Otuz günlük dava açma süresi iletinin okunduğu 20 Mayıs’tan değil, ulaştığı 10 Mayıs’ı izleyen beşinci günün sonu olan 15 Mayıs’tan itibaren işlemeye başlar.',
        pearl: 'VUK m.107/A: Elektronik tebligat, muhatabın elektronik adresine ulaştığı tarihi izleyen 5. GÜNÜN SONUNDA yapılmış sayılır (okunmasa bile!).',
        trapFalse: 'dijital adrese gönderilen ihbarname muhatap tarafından sisteme girilip fiilen açıldığı gün yapılmış sayılır',
        trapHighlight: 'muhatap tarafından sisteme girilip fiilen açıldığı gün yapılmış sayılır'
      },
      {
        name: 'Tahakkuk ve Tahsil',
        article: '213 s. VUK m. 22, m. 23',
        rule: 'Hesaplanıp muhataba bildirilen kamu alacağının hukuken kesinleşerek ödenmesi gereken evreye gelmesidir; beyana dayalı işlemlerde fiş kesilmesiyle anında, ihbarnameli işlemlerde ise otuz günlük dava süresi dolduğunda veya dava reddedildiğinde gerçekleşir.',
        hallmark: 'Bu aşamadan sonraki son adım, kesinleşmiş kamu alacağının mevzuatta belirlenen vade içinde Hazineye ödenerek borcun sona erdirilmesidir.',
        vignette: 'Kendisine 1 Nisan’da ihbarname ulaştırılan yükümlü otuz gün içinde vergi mahkemesine başvurmamış; ardından mali idare alacağın kesinleştiğini bildirerek vade tarihinde ödenmesini istemiştir.',
        clues: ['Ödenmesi gereken evreye gelme', 'Beyannamede fişle anında kesinleşme', 'Dava açılmadığında otuzuncu günün sonunda doğma'],
        remedy: 'Dava açılırsa ilk derece mahkemesi kararı verilinceye kadar bu evre ertelenir; mahkeme davayı reddederse dairenin düzenleyeceği yeni ihbarnameyle borç kesinleşir.',
        pearl: 'Vergilendirme 4 T kuralı: Tarh -> Tebliğ -> Tahakkuk (ödenebilir safha) -> Tahsil. Beyanda tahakkuk anında; ikmalen/re’sen tarhta 30 gün sonunda veya mahkeme reddiyle!',
        trapFalse: 'ikmalen yapılan işlemde ihbarnameye karşı vergi mahkemesinde dava açılması kesinleşme ve ödeme evresini hiçbir biçimde durdurmaz',
        trapHighlight: 'vergi mahkemesinde dava açılması kesinleşme ve ödeme evresini hiçbir biçimde durdurmaz'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: 'Vergi Hukukunda Süreler, Mücbir Sebep, Zor Durum ve Tarh Zamanaşımı',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Kritik Kanun Maddesi',
    entities: [
      {
        name: 'Süre Hesabı ve Ölüm',
        article: '213 s. VUK m. 16, m. 18',
        rule: 'Gün cinsinden belirlenen dilimlerde başlangıç günü dikkate alınmaz ve son günün mesai bitiminde dolar; resmi tatiller dilime dahildir ancak son gün tatile denk gelirse ilk iş gününün akşamına sarkar ve yükümlünün vefatında mirasçıların ödev dilimlerine üç ay eklenir.',
        hallmark: 'Hafta veya ay olarak belirlenen dilimler, başladığı güne son hafta veya son ayda karşılık gelen günde biter; o ayda karşılık gelen gün yoksa ayın son günü dolar.',
        vignette: 'Yıllık gelir beyannamesini verme zamanı yaklaşırken vefat eden serbest meslek erbabının mirasçıları, beyannameyi normal tarihte yetiştiremeyecekleri endişesiyle ne kadar ek zamanları olduğunu sormaktadır.',
        clues: ['Başlangıç gününün dikkate alınmaması', 'Son gün tatile rastlarsa ilk iş gününe uzama', 'Vefat halinde mirasçılara üç ay eklenmesi'],
        remedy: 'Mirasçılar, normal beyanname verme ve bildirim dilimlerine kanunen eklenen üç aylık dönem içinde ödevlerini cezasız biçimde yerine getirebilirler.',
        pearl: 'VUK m.16 & m.18: Ölüm halinde mirasçıların beyanname ve bildirim sürelerine 3 AY eklenir; resmi tatiller süreye dahildir, sadece son gün tatile gelirse ilk iş gününe uzar.',
        trapFalse: 'resmi tatil günleri işlemekte olan yasal dilimlere hiçbir zaman dahil edilmez ve vefat halinde mirasçılara bir ay ek zaman tanınır',
        trapHighlight: 'resmi tatil günleri işlemekte olan yasal dilimlere hiçbir zaman dahil edilmez'
      },
      {
        name: 'Mücbir Sebep (m. 13)',
        article: '213 s. VUK m. 13, m. 15, m. 373',
        rule: 'Ödevlerin ifasını engelleyecek derecede ağır kaza, ağır hastalık, tutukluluk, yangın, deprem, sel gibi afetler ile irade dışı defter-belge kaybı hallerinde işlemekte olan süreler durur, tarh zaman sınırı işlemeyen dönem kadar uzar ve ceza kesilmez.',
        hallmark: 'Bu olağanüstü engel kalktığında durmuş olan süreler kaldığı yerden işlemeye devam eder; ayrıca söz konusu olayın kanıtlanması veya genel olarak Bakanlıkça ilan edilmesi yeterlidir.',
        vignette: 'Deprem yüzünden işyeri yıkılan ve tüm ticari defterleri enkaz altında kalarak elinden çıkan tüccar, süresinde beyanname veremediği için kendisine usulsüzlük ve ziya yaptırımı uygulanıp uygulanmayacağını sormaktadır.',
        clues: ['Ağır hastalık, tutukluluk veya doğal afet', 'Sürelerin durması ve zaman sınırının uzaması', 'İdari para cezası kesilememesi güvencesi'],
        remedy: 'Yasal engel bulunduğu sürece işlemeyen günler kadar ödev süresi uzar ve bu döneme ilişkin hiçbir vergi cezası tesis edilemez.',
        pearl: 'VUK m.13-15-373: Mücbir sebepte süreler DURUR (kesilmez!), tarh zamanaşımı duran süre kadar UZAR ve vergi CEZASI KESİLMEZ.',
        trapFalse: 'olağanüstü afet veya ağır hastalık halinde yalnızca ödeme ertelenir, beyanname süreleri işlemeye devam eder ve gecikme nedeniyle ceza kesilir',
        trapHighlight: 'beyanname süreleri işlemeye devam eder ve gecikme nedeniyle ceza kesilir'
      },
      {
        name: 'Zor Durum Mühleti',
        article: '213 s. VUK m. 17',
        rule: 'Kişisel veya işletmesel güçlükler sebebiyle ödevlerini vaktinde yerine getiremeyecek olanlara, yasal dilimin bir katını (yasal dilim bir aydan kısaysa bir ayı) aşmamak üzere Hazine ve Maliye Bakanlığınca ek zaman tanınabilir.',
        hallmark: 'Ek zaman talebi mutlaka yasal dilim dolmadan önce yazılı olarak yapılmalı, mazeret geçerli bulunmalı ve bu kolaylık tanındığında kamu alacağının tehlikeye düşmeyeceği anlaşılmalıdır; zamanaşımını durdurmaz.',
        vignette: 'Yurt dışındaki ticari ortaklığına ait belgeler zamanında ulaşmadığı için beyannamesini yetiştiremeyecek olan şirket, son günden üç gün önce yazılı dilekçeyle Bakanlıktan ek zaman talep etmiştir.',
        clues: ['Süre bitmeden önce yazılı başvuru şartı', 'Kanuni sürenin en çok bir katı ek zaman', 'Zamanaşımını durdurmama özelliği'],
        remedy: 'Bakanlıkça mazeret kabul edilip ek zaman verilirse yeni tarihe kadar yapılan beyan süresinde sayılır; ancak tarh zamanaşımı bu dönem boyunca durmadan işlemeye devam eder.',
        pearl: 'VUK m.17 zor durum mühleti: Süre bitmeden yazılı istenir, kanuni sürenin 1 katını (1 aydan kısaysa 1 ayı) geçemez; mücbir sebepten farkı: ZAMANAŞIMINI DURDURMAZ!',
        trapFalse: 'süre geçtikten sonra da istenebilir, kanuni sürenin üç katına kadar uzatılabilir ve tarh zamanaşımını durdurur',
        trapHighlight: 'üç katına kadar uzatılabilir ve tarh zamanaşımını durdurur'
      },
      {
        name: 'Tarh Zamanaşımı (5 Yıl)',
        article: '213 s. VUK m. 114/1',
        rule: 'Devlet alacağının doğduğu takvim yılını izleyen yılın ilk gününden başlayarak beş yıl içinde hesaplanıp yükümlüye bildirilmeyen kamu alacakları hukuken talep edilemez hale gelir.',
        hallmark: 'Bu hak düşürücü nitelikteki sınır mükellefin itirazına gerek kalmaksızın idare ve mahkemece kendiliğinden dikkate alınır; emlak ve veraset-intikal türlerinde ise beş yıllık dilim olayın idarece öğrenildiği yılı izleyen yılbaşında başlar.',
        vignette: '2019 yılının Nisan ayında elde edilip beyan dışı bırakılan bir ticari kazanç için mali idare, 15 Ocak 2025 tarihinde ilk kez ihbarname düzenleyerek yükümlüye tebliğ etmiştir.',
        clues: ['Doğduğu yılı izleyen yılbaşından başlama', 'Beş yıl içinde hem hesaplama hem tebliğ şartı', 'İdare ve yargıca resen gözetilme'],
        remedy: '2019 kazancı için beş yıllık dilim 1 Ocak 2020’de başlayıp 31 Aralık 2024’te dolduğundan 2025’te yapılan tebliğ hukuka aykırıdır ve vergi mahkemesince iptal edilir.',
        pearl: 'VUK m.114: Tarh zamanaşımı vergiyi doğuran olayın yılı + 1 Ocak’tan itibaren 5 YILDIR; bu 5 yıl içinde hem TARH hem TEBLİĞ tamamlanmalıdır!',
        trapFalse: 'alacağın doğduğu günden başlayarak on yıl içinde sadece dairece hesaplanması yeterli olup tebligatın daha sonra yapılması süreyi etkilemez',
        trapHighlight: 'on yıl içinde sadece dairece hesaplanması yeterli olup tebligatın daha sonra yapılması'
      },
      {
        name: 'Takdir Komisyonu Durması',
        article: '213 s. VUK m. 114/2',
        rule: 'Dairece matrah belirlenmesi amacıyla ilgili kurula dosya gönderilmesi işlemekte olan beş yıllık tarh süresini bekletir; kararın daireye teslimini izleyen günden itibaren süre kaldığı yerden işler, ancak bekleme hiçbir halde bir yılı aşamaz.',
        hallmark: 'Anayasa Mahkemesinin sınırsız bekletmeyi iptal etmesi üzerine getirilen bir yıllık kesin üst sınır, mükellefin belirsiz sürelerce inceleme tehdidi altında kalmasını önler.',
        vignette: 'Beş yıllık sürenin dolmasına on gün kala 21 Aralık 2024’te dosya matrah belirleme kuruluna gönderilmiş, kurul kararını ancak on sekiz ay sonra 2026 yılının Haziran ayında daireye teslim etmiştir.',
        clues: ['Kurula sevk ile sürenin bekletilmesi', 'Her halükarda en çok bir yıllık tavan', 'Kararın teslimiyle kalan günlerin işlemesi'],
        remedy: 'Bekleme en fazla bir yıl süreceğinden işlem 2025 yılının sonunda kalan on günle birlikte dolmuştur; 2026 Haziran’ında yapılan tebligat süresiz ve geçersizdir.',
        pearl: 'VUK m.114/2: Takdir komisyonuna başvuru tarh zamanaşımını DURDURUR (kesmez!), ancak durma süresi her halükarda 1 YILI GEÇEMEZ!',
        trapFalse: 'dosyanın matrah belirleme kuruluna gönderilmesi zamanaşımını keser ve karar gelinceye kadar süre sınırsız biçimde durur',
        trapHighlight: 'zamanaşımını keser ve karar gelinceye kadar süre sınırsız biçimde durur'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: 'Vergi Denetim Yolları: Yoklama, İnceleme, Arama ve Bilgi Toplama',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Yüksek Verimli Olay',
    entities: [
      {
        name: 'Yoklama (m. 127)',
        article: '213 s. VUK m. 127-133',
        rule: 'Yükümlüleri ve yükümlülükle ilgili maddi vakıaları, günlük hasılatı, çalışan sayısını, yazar kasa ve belge düzenini yerinde araştırıp fişle kayıt altına alma yöntemidir; her zaman yapılabilir ve ne zaman yapılacağı ilgiliye önceden bildirilmez.',
        hallmark: 'Yalnızca maddi durumu tespit etmeye yöneliktir; derinlemesine hesap ve defter çözümlemesi yapılmaz, sonuçlar yetkilinin ve muhatabın imzaladığı tutanakla belgelenir.',
        vignette: 'Maliye memurları önceden haber vermeksizin bir restorana giderek masalardaki müşterilere fiş kesilip kesilmediğini, çalışan sayısını ve ödeme kaydedici cihazın çalışıp çalışmadığını tutanağa geçirmiştir.',
        clues: ['Önceden haber vermeden ani denetim', 'Maddi olgu ve belge düzeninin tespiti', 'Tutanakla kayıt altına alma'],
        remedy: 'Muhatap tutanağı imzalamaktan kaçınırsa durum tutanağa şerh edilir ve bir nüshası polis, jandarma veya muhtar aracılığıyla ya da postayla tebliğ edilir.',
        pearl: 'Yoklama (VUK m.127) her zaman yapılabilir ve ilgiliye önceden HABER VERİLMEZ; amacı maddi olayları ve belge düzenini tespit etmektir.',
        trapFalse: 'yapılmadan en az yedi gün önce muhataba yazılı bildirimde bulunulması zorunludur ve yalnızca mahkeme kararıyla icra edilir',
        trapHighlight: 'en az yedi gün önce muhataba yazılı bildirimde bulunulması zorunludur'
      },
      {
        name: 'Vergi İncelemesi',
        article: '213 s. VUK m. 134-141',
        rule: 'Ödenmesi gereken tutarların doğruluğunu araştırmak amacıyla yetkili müfettişler, en büyük mal memuru veya daire müdürlerince esasen dairede yapılır; tam denetim en çok bir yıl, sınırlı denetim altı ay, KDV iadesi denetimi ise üç ayda bitirilir.',
        hallmark: 'Süresinde bitirilemezse gerekçeli olarak idarece tam ve sınırlı denetimde en fazla altı ay, KDV iadesinde en fazla iki ay ek zaman verilebilir; ayrıca ihbar veya denetim başlasa da tarh zamanaşımı kesilmez.',
        vignette: 'Bir tekstil şirketinin tüm hesap dönemini kapsayan kapsamlı denetimine başlayan müfettiş, defterleri elektronik ortamda kendi makamına istemiş ve ek süre alınmadan on beşinci ayda raporunu sunmuştur.',
        clues: ['Esasen dairede yürütülme ilkesi', 'Tam bir yıl, sınırlı altı ay, KDV iadesi üç ay', 'En fazla altı ay ve iki ay ek süre sınırı'],
        remedy: 'Yetkili merciin onayıyla en fazla altı ay ek süre alınmışsa rapor geçerlidir; denetim esasen dairede yapıldığından şirketin işyerinde yapılmasını zorlama hakkı yoktur.',
        pearl: 'VUK m.139-140: Vergi incelemesi esas olarak DAİREDE yapılır; süreler: Tam inceleme 1 yıl (+6 ay), Sınırlı 6 ay (+6 ay), KDV iadesi 3 ay (+2 ay).',
        trapFalse: 'kapsamlı denetimler mutlaka mükellefin işyerinde yapılmak zorundadır ve tam denetim için yasal süre sınırı üç yıldır',
        trapHighlight: 'mutlaka mükellefin işyerinde yapılmak zorundadır ve tam denetim için yasal süre sınırı üç yıldır'
      },
      {
        name: 'Vergi Araması (m. 142)',
        article: '213 s. VUK m. 142-147',
        rule: 'İhbar veya denetimler sonucunda bir şahsın kaçakçılık yaptığına işaret eden somut emareler varsa, denetim yetkilisinin gerekçeli istemi üzerine sulh yargıcının vereceği kararla işyerinde, konutunda ve üzerinde baskın yapılabilir.',
        hallmark: 'El konulan defter ve vesikalar üzerindeki hesap denetimi öncelikle yürütülür ve en geç üç ay içinde bitirilerek sahibine iade edilir; haklı sebeplerle bu üç aylık süre yine yargıç kararıyla uzatılabilir.',
        vignette: 'Çift defter tuttuğu ve sahte fatura düzenlediği yönünde kuvvetli ihbar bulunan bir şirketin gizli depolarındaki belgelere ulaşmak isteyen müfettiş, doğrudan daire müdüründen izin alarak baskın düzenlemiştir.',
        clues: ['Kaçakçılık emaresi bulunması', 'Sulh yargıcından yazılı karar zorunluluğu', 'El konulan defterlerde üç aylık bitirme sınırı'],
        remedy: 'Yargıç kararı olmaksızın daire müdürünün izniyle yapılan işlem hukuka aykırıdır; hukuka aykırı elde edilen deliller tarhiyata ve ceza yargılamasına dayanak yapılamaz.',
        pearl: 'VUK m.142-145: Vergi araması için kaçakçılık emaresi + inceleme elemanının gerekçeli yazısı + SULH YARGICI kararı şarttır; el konulan defter incelemesi 3 ayda biter!',
        trapFalse: 'vergi dairesi müdürünün yazılı emriyle ve yargıç kararına gerek kalmaksızın mükellefin konutunda icra edilebilir',
        trapHighlight: 'vergi dairesi müdürünün yazılı emriyle ve yargıç kararına gerek kalmaksızın'
      },
      {
        name: 'Bilgi Toplama ve Sır',
        article: '213 s. VUK m. 148-151',
        rule: 'Kamu kurumları, yükümlüler ve onlarla işlem yapan üçüncü kişiler Bakanlığın veya denetim elemanlarının istediği verileri vermekle yükümlüdür; ancak avukatların müvekkil mahremiyeti, hekimlerin tıbbi gizliliği ve posta gizliliği saklıdır.',
        hallmark: 'Müvekkilinin hukuki gizliliğini korumak zorunda olan avukattan yalnızca müvekkil adları ve aldığı vekalet ücretleri istenebilir; davanın içeriğine dair mahrem veriler talep edilemez.',
        vignette: 'Bir müfettiş, incelediği iş insanının avukatına yazı göndererek müvekkilinin kendisine tevdi ettiği ticari gizlilikleri, savunma stratejisini ve ödediği vekalet ücretini on beş gün içinde yazmasını istemiştir.',
        clues: ['Üçüncü kişilerin veri verme mecburiyeti', 'Avukat, hekim ve posta gizliliği muafiyeti', 'Müvekkil adı ve ücretin muafiyet dışında kalması'],
        remedy: 'Avukat, müvekkilinin adını ve tahsil ettiği vekalet ücretini bildirmek zorundadır; ancak müvekkilinin paylaştığı mesleki gizlilikleri ve savunma belgelerini açıklamaktan haklı olarak kaçınır.',
        pearl: 'VUK m.151: Bilgi vermekten imtina hakkı yalnız PTT haberleşme gizliliği, hekim/diş hekimi/ebe tıbbi sırrı ve avukat sırrında vardır (avukat ad ve ücreti vermek zorundadır!).',
        trapFalse: 'avukatlar mesleki gizlilik gerekçesiyle müvekkillerinden aldıkları vekalet ücretlerini dahi mali idareye bildirmekten kaçınabilirler',
        trapHighlight: 'müvekkillerinden aldıkları vekalet ücretlerini dahi mali idareye bildirmekten kaçınabilirler'
      },
      {
        name: 'Saklama ve İbraz Ödevi',
        article: '213 s. VUK m. 253-256',
        rule: 'Tutulması zorunlu kayıtlar, faturalar ve diğer dayanak belgeler ilgili bulundukları takvim yılını izleyen yılın başından başlayarak beş yıl süreyle muhafaza edilmeli ve yetkili makamların istemi halinde sunulmalıdır.',
        hallmark: 'Türk Ticaret Kanunundaki on yıllık muhafaza zorunluluğundan farklı olarak mali mevzuattaki koruma ve sunma mecburiyeti beş yıllık tarh zamanaşımıyla paralel biçimde beş yıl belirlenmiştir.',
        vignette: '2021 yılına ait tüm faturalarını ve yevmiye kayıtlarını 2024 yılında yer darlığı gerekçesiyle imha eden bir şirket, 2025 yılında yapılan resmi talep üzerine belgeleri sunamamıştır.',
        clues: ['İzleyen takvim yılbaşından itibaren beş yıl', 'Yetkili makam isteğinde sunma mecburiyeti', 'Ticaret kanunundaki on yıllık süreden farkı'],
        remedy: 'Beş yıllık yasal koruma dilimi 31 Aralık 2026’ya dek sürdüğünden belgelerin sunulmaması hem re’sen tarhiyat hem de kaçakçılık kapsamında gizleme suçu doğurur.',
        pearl: 'Defter ve belgeleri saklama süresi VUK’ta 5 YIL, Türk Ticaret Kanununda (TTK m.82) 10 YILDIR! Bu ikili karşılaştırma ÖSYM’nin klasik sorusudur.',
        trapFalse: 'mali mevzuat uyarınca fatura ve kayıtların yalnızca ilgili yılın bitiminden itibaren üç yıl muhafaza edilmesi yeterlidir',
        trapHighlight: 'yalnızca ilgili yılın bitiminden itibaren üç yıl muhafaza edilmesi yeterlidir'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: 'Vergi Kabahatleri, Kaçakçılık Suçları ve Ceza Zamanaşımı',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Vergi Ziyaı Kabahati',
        article: '213 s. VUK m. 341, m. 344',
        rule: 'Ödevlerin süresinde veya eksiksiz yerine getirilmemesi yüzünden kamu alacağının zamanında veya tam tahakkuk etmemesidir; kayba uğratılan tutarın bir katı, kaçakçılık fiilleriyle sebebiyet verilmişse üç katı, bu fiillere katılanlara ise bir katı yaptırım kesilir.',
        hallmark: 'Kayıt dışı faaliyette bulunarak mükellefiyet tesis ettirmeden gelir kaybına yol açanlara kesilecek idari yaptırım 2024 değişikliği uyarınca yüzde elli artırımlı uygulanır.',
        vignette: 'Sahte fatura kullanarak elli bin lira tutarında haksız KDV indirimi yapan ve kamu alacağının eksik tahakkukuna yol açan tüccar ile bu fiile menfaat karşılığı yardım eden aracıya idari yaptırım uygulanacaktır.',
        clues: ['Normal halde kaybın bir katı yaptırım', 'Kaçakçılık fiillerinde üç kat yaptırım', 'İştirak edenlere bir kat yaptırım'],
        remedy: 'Asıl fail tüccara yüz elli bin lira (üç kat), fiile katılan aracıya elli bin lira (bir kat) yaptırım kesilir; ayrıca adli yargıda hapis yargılaması yapılır.',
        pearl: 'VUK m.344: Vergi ziyaı cezası kural olarak 1 kat, m.359 kaçakçılık fiilleriyle işlenirse 3 kat (iştirak edene 1 kat), kayıt dışı faaliyette %50 artırımlıdır!',
        trapFalse: 'sahte belge kullanarak kamu kaybına yol açan mükellefe ziyaa uğratılan tutarın iki katı ve iştirak edene yarım kat yaptırım kesilir',
        trapHighlight: 'ziyaa uğratılan tutarın iki katı ve iştirak edene yarım kat yaptırım'
      },
      {
        name: 'Genel Usulsüzlük',
        article: '213 s. VUK m. 351, m. 352',
        rule: 'Kamu gelir kaybı doğmasa dahi şekle ve merasime ilişkin kurallara aykırılık halinde uygulanan maktu para yaptırımıdır; beyannamenin verilmemesi, defter tutulmaması veya tasdik edilmemesi birinci derece, işe başlamanın geç bildirilmesi gibi daha hafif ihmaller ikinci derecedir.',
        hallmark: 'Bu ihlal aynı zamanda takdir yoluyla matrah belirlenmesini gerektiriyorsa birinci derece tutar iki kat olarak uygulanır; ayrıca bu yaptırımlara gecikme zammı işletilmez.',
        vignette: 'Hiç kazancı bulunmadığı halde yıllık beyannamesini kanuni süresinde vermeyen ve yasal defterlerini notere tasdik ettirmeyen bir işletme hakkında tutanak düzenlenmiştir.',
        clues: ['Gelir kaybı şartı aranmayan şekli ihlal', 'Maktu tutarlı iki kademeli yaptırım', 'Re’sen takdiri gerektirende iki kat artış'],
        remedy: 'Re’sen tarh sebebi doğduğu için birinci derece maktu tutar iki kat olarak tebliğ edilir; mükellef otuz gün içinde indirim veya dava yoluna gidebilir.',
        pearl: 'Genel usulsüzlükte vergi kaybı şart değildir; re’sen takdiri gerektiren hallerde I. derece usulsüzlük 2 KAT uygulanır ve zamanaşımı 2 YILDIR.',
        trapFalse: 'yalnızca hazinenin nakdi kayba uğradığı hallerde nispi oranda uygulanır ve re’sen takdir hallerinde yarıya indirilir',
        trapHighlight: 'yalnızca hazinenin nakdi kayba uğradığı hallerde nispi oranda uygulanır'
      },
      {
        name: 'Özel Usulsüzlük',
        article: '213 s. VUK m. 353, Mük. m. 355',
        rule: 'Fatura, gider pusulası, müstahsil makbuzu, serbest meslek makbuzu, perakende satış fişi veya sevk irsaliyesi düzenlememek ve almamak ile dijital beyanname, e-defter veya bilgi verme ödevlerini ihlal etmek hallerinde kesilir.',
        hallmark: 'Genel şekli yaptırımlardan farklı olarak ceza kesme zaman sınırı iki yıl değil beş yıldır; ayrıca her bir tespit sayısına göre kademeli biçimde artan tutarlarda uygulanır.',
        vignette: 'Müşteriye sattığı elektronik ürün karşılığında fatura düzenlemeyen ve malı sevk irsaliyesi olmadan kamyonetle taşıyan mağaza, yol denetiminde tespit edilmiştir.',
        clues: ['Fatura, fiş ve irsaliye düzenlememe', 'Elektronik beyan ve bilgi vermeme ihlali', 'Beş yıllık ceza kesme zaman sınırı'],
        remedy: 'Her iki belge eksikliği için ayrı ayrı yaptırım tebliğ edilir; şartları varsa yüzde elli indirimden veya eşiği aşan tutarlar için uzlaşmadan yararlanılabilir.',
        pearl: 'Özel usulsüzlük (fatura/fiş/irsaliye/e-beyan) zamanaşımı 5 YILDIR (genel usulsüzlük 2 yıldır!); 7338 s.K. sonrası eşiği aşan tutarlar uzlaşmaya dahildir.',
        trapFalse: 'genel şekli ihlallerle aynı biçimde iki yıllık ceza kesme zamanaşımına tabidir ve hiçbir tutarda uzlaşma kapsamına alınamaz',
        trapHighlight: 'iki yıllık ceza kesme zamanaşımına tabidir ve hiçbir tutarda uzlaşma kapsamına alınamaz'
      },
      {
        name: 'Kaçakçılık Suçları (m. 359)',
        article: '213 s. VUK m. 359',
        rule: 'Defter ve kayıtlarda hesap hilesi yapmak, çift defter tutmak, belgeleri gizlemek veya muhteviyatı itibarıyla yanıltıcı belge düzenleyip kullanmak on sekiz aydan beş yıla; defter-belge yok etmek veya sahte belge düzenleyip kullanmak ise üç yıldan sekiz yıla kadar hapis gerektirir.',
        hallmark: 'Bu ağır fiiller idari yaptırım dışında adli yargıda Asliye Ceza Mahkemesinde yargılanır; 2022 değişikliğiyle etkin pişmanlık indirimi getirilmiş ve üst sınırlar yükseltilmiştir.',
        vignette: 'Gerçekte hiç mal alım satımı bulunmadığı halde komisyon karşılığında başka firmalara hayali içerikli faturalar basıp satan şirket yetkilisi hakkında müfettiş mütalaasıyla kamu davası açılmıştır.',
        clues: ['Sahte belgede üç yıldan sekiz yıla hapis', 'Yanıltıcı belge ve çift defterde on sekiz ay-beş yıl', 'Asliye Ceza Mahkemesinde adli yargılama'],
        remedy: 'Cumhuriyet savcılığının iddianamesiyle Asliye Ceza Mahkemesinde yargılama yapılır; ayrıca idarece üç kat ziya cezası kesilir ve bu fiillerde uzlaşmaya gidilemez.',
        pearl: 'VUK m.359 güncel (7394 s.K.) cezalar: Hesap hilesi/çift defter/gizleme/yanıltıcı belge = 18 ay–5 yıl; yok etme/sahte belge (naylon fatura) = 3–8 yıl (Asliye Ceza).',
        trapFalse: 'sahte belge düzenleme fiilinin yargılaması vergi mahkemesinde yapılır ve en fazla üç yıl adli para cezasıyla sonuçlanır',
        trapHighlight: 'yargılaması vergi mahkemesinde yapılır ve en fazla üç yıl adli para cezasıyla'
      },
      {
        name: 'Ceza Zamanaşımı ve Tekerrür',
        article: '213 s. VUK m. 339, m. 374',
        rule: 'Gelir kaybı ve özel şekli yaptırımlarda alacağın doğduğu yılı izleyen yılbaşından beş yıl, genel şekli yaptırımlarda ise iki yıl geçtikten sonra yaptırım uygulanamaz; kesinleşen gelir kaybı yaptırımı beş yıl içinde yinelenirse yüzde elli, şekli yaptırım iki yıl içinde yinelenirse yüzde yirmi beş artırılır.',
        hallmark: 'Artırımın uygulanabilmesi için önceki ihlale dair yaptırımın mutlaka kesinleşmiş olması gerekir; ayrıca artış tutarı hiçbir halde kesinleşen önceki yaptırım tutarını aşamaz.',
        vignette: '2023 yılında kesinleşmiş kırk bin liralık gelir kaybı yaptırımı bulunan bir işletme, 2025 yılında yeniden yüz bin liralık gelir kaybına sebep olmuş ve idare artırım hesabı yapmıştır.',
        clues: ['Gelir kaybı ve özel şeklide beş yıl, genelde iki yıl', 'Kesinleşmeden beş yıl içinde yüzde elli artış', 'Artışın kesinleşen önceki tutarı geçememesi'],
        remedy: 'Yüz bin liranın yüzde ellisi elli bin lira olsa da artış, önceki kesinleşen kırk bin liralık tutarı aşamayacağından toplam yüz kırk bin lira yaptırım kesilir.',
        pearl: 'VUK m.339 & m.374: Ceza zamanaşımı vergi ziyaı/özel usulsüzlükte 5 yıl, genel usulsüzlükte 2 yıl; tekerrür artışı vergi ziyaında %50 (5 yıl), usulsüzlükte %25 (2 yıl) — önceki kesinleşen cezayı geçemez!',
        trapFalse: 'tüm idari yaptırımlarda kesme süresi üç yıldır ve yinelenme halinde önceki cezanın kesinleşmiş olması şartı aranmadan iki kat artış yapılır',
        trapHighlight: 'önceki cezanın kesinleşmiş olması şartı aranmadan iki kat artış yapılır'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: 'Vergi Uyuşmazlıklarının İdari Çözüm Yolları (2024–2026 Güncel)',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2026',
    entities: [
      {
        name: 'Tarhiyat Sonrası Uzlaşma',
        article: '213 s. VUK Ek m. 1-9 (7524 s. K. değ.)',
        rule: 'İkmalen, re’sen veya idarece yapılan işlemlerle kesilen ziya yaptırımları ve yasal eşiği aşan şekli yaptırımlar için ihbarname tebliğinden itibaren otuz gün içinde başvurulur; 2024 değişikliği uyarınca vergi aslı bu masanın kapsamından çıkarılmıştır.',
        hallmark: 'Kaçakçılık fiilleriyle kesilen üç katlı yaptırımlar ile bunlara iştirak cezaları kesinlikle görüşme kapsamı dışındadır; anlaşma sağlanamazsa kalan sürede veya on beş günden az kalmışsa on beş gün içinde yargıya gidilebilir.',
        vignette: '2025 yılında kendisine re’sen hesaplanan iki yüz bin lira asıl borç ile iki yüz bin lira gelir kaybı yaptırımı tebliğ edilen şirket, on beşinci günde komisyona başvurarak her iki kalemde indirim istemiştir.',
        clues: ['2024 değişikliğiyle vergi aslının kapsam dışı kalması', 'İhbarname tebliğinden otuz gün içinde başvuru', 'Kaçakçılık kaynaklı üç kat yaptırımın hariç olması'],
        remedy: 'Komisyon yalnızca iki yüz bin liralık gelir kaybı yaptırımı üzerinde görüşme yapabilir; asıl borç masaya konu edilemez ve anlaşma tutanağı kesindir.',
        pearl: '7524 s.K. (2024) GÜNCEL DEĞİŞİKLİK: Vergi aslı artık uzlaşma kapsamından ÇIKARILDI! Sadece vergi ziyaı cezası (m.359 hariç) ve eşiği aşan usulsüzlük/özel usulsüzlük cezaları 30 gün içinde uzlaşmaya gider.',
        trapFalse: 'güncel yasa değişikliğinden sonra dahi hem vergi aslı hem de kaçakçılık kaynaklı üç katlı yaptırımlar bu komisyonda pazarlık konusu yapılabilir',
        trapHighlight: 'hem vergi aslı hem de kaçakçılık kaynaklı üç katlı yaptırımlar bu komisyonda'
      },
      {
        name: 'Tarhiyat Öncesi Uzlaşma',
        article: '213 s. VUK Ek m. 11 (7524 s. K. değ.)',
        rule: 'Denetim elemanının yürüttüğü inceleme sırasında henüz ihbarname düzenlenmeden ve en geç inceleme tutanağının imzalanmasına kadar, kaçakçılık dışındaki kesilecek yaptırımlar için talep edilebilen erken anlaşma yöntemidir.',
        hallmark: 'Bu yola başvurulup anlaşma sağlanamazsa veya tutanak imzalanmazsa yükümlü sonradan ikinci kez aynı konuda tebliğ ardı anlaşma masasına başvuramaz.',
        vignette: 'Hesapları incelenen bir işletme, inceleme tutanağı henüz imzalanmadan denetim elemanına dilekçe vererek kesilecek gelir kaybı yaptırımı hakkında erken komisyon görüşmesi istemiştir.',
        clues: ['İnceleme tutanağı imzalanmadan başvuru', 'Yalnızca kaçakçılık dışı yaptırımları kapsaması', 'Sağlanamazsa tebliğ ardı yola kapatılması'],
        remedy: 'Komisyonda anlaşma sağlanırsa tutanak kesinleşir ve yargı yolu kapanır; anlaşılan ceza yasal vadesinde ödenirse ayrıca yüzde yirmi beş ek indirim uygulanır.',
        pearl: 'Tarhiyat öncesi uzlaşma en geç inceleme tutanağı imzalanıncaya kadar istenir (7524 sonrası yalnızca cezalar, m.359 hariç); bunda uzlaşılamazsa tarhiyat sonrası uzlaşmaya GİDİLEMEZ.',
        trapFalse: 'inceleme raporu vergi dairesine teslim edilip ihbarname tebliğ edildikten sonra istenir ve anlaşılamazsa tebliğ sonrası masaya tekrar gidilebilir',
        trapHighlight: 'ihbarname tebliğ edildikten sonra istenir ve anlaşılamazsa tebliğ sonrası masaya tekrar gidilebilir'
      },
      {
        name: 'Cezalarda İndirim (m. 376)',
        article: '213 s. VUK m. 376',
        rule: 'İkmalen, re’sen veya idarece saptanan borç aslı ile eksiltme sonrası kalan ziya, genel veya özel şekli yaptırımları ihbarname tebliğinden itibaren otuz gün içinde yargıya gitmeden ödeyeceğini yahut teminat gösterip üç ayda ödeyeceğini bildiren yükümlünün yaptırımlarının yarısı silinir.',
        hallmark: 'Uzlaşma tutanağıyla üzerinde anlaşılan yaptırımların da süresinde ödenmesi koşuluyla anlaşılan tutar üzerinden ayrıca yüzde yirmi beş oranında ek eksiltme yapılır.',
        vignette: 'Hakkında yüz bin lira özel şekli yaptırım kesilen yükümlü, dava açmayacağını bildirerek yirminci günde başvuru yapmış ve teminat göstermeden bir aylık ödeme süresinde elli bin lirayı yatırmıştır.',
        clues: ['Tebliğden itibaren otuz günde başvuru', 'Dava açmadan ödeme taahhüdüyle yarısının silinmesi', 'Teminat gösterildiğinde üç ay vade'],
        remedy: 'Yasal şartlara uyulduğu için elli bin liralık kısım tamamen terkin edilir; ancak yükümlü sonradan dava açar veya vadesinde ödemezse bu hak yanar.',
        pearl: 'VUK m.376: Tebliğden itibaren 30 gün içinde dava açmadan ödeme (veya teminatla 3 ayda) taahhüdünde vergi ziyaı, usulsüzlük ve özel usulsüzlük cezalarının TAM YARISI (%50) indirilir!',
        trapFalse: 'yalnızca ilk kez işlenen genel usulsüzlüklerde üçte bir oranında uygulanır ve özel usulsüzlük yaptırımları bu kolaylıktan yararlanamaz',
        trapHighlight: 'üçte bir oranında uygulanır ve özel usulsüzlük yaptırımları bu kolaylıktan yararlanamaz'
      },
      {
        name: 'Pişmanlık ve Islah',
        article: '213 s. VUK m. 371',
        rule: 'Beyana dayanan türlerde gelir kaybına yol açan kanuna aykırı hareketini herhangi bir ihbar veya inceleme başlamadan kendiliğinden dilekçeyle haber veren yükümlü, on beş gün içinde eksik beyanı verip borcu özel zammıyla öderse gelir kaybı yaptırımı kesilmez.',
        hallmark: 'Yalnızca beyana dayalı kamu alacaklarında geçerlidir; belediyelerce alınan emlak türünde ve hakkında önceden ihbar yapılmış ya da incelemeye başlanmış dosyalarda uygulanmaz.',
        vignette: 'Kira gelirini süresinde beyan etmeyi unutan ev sahibi, hakkında hiçbir denetim veya ihbar yokken kendiliğinden daireye dilekçe vermiş ve onuncu günde beyannameyi sunup zammıyla birlikte tamamını ödemiştir.',
        clues: ['İhbar ve inceleme başlamadan kendiliğinden bildirim', 'On beş gün içinde beyan ve tam ödeme şartı', 'Emlak türünde uygulanamaması'],
        remedy: 'Gelir kaybı cezası hiç kesilmez ve varsa kaçakçılık suçundan dolayı adli kovuşturma yapılmaz; ancak on beş günde ödeme yapılmazsa bu koruma düşer.',
        pearl: 'VUK m.371 Pişmanlık: Sadece beyana dayalı vergilerde (emlak vergisinde YOK!), ihbar/inceleme öncesi kendiliğinden haber + 15 gün içinde beyan ve ödeme -> vergi ziyaı cezası SIFIR!',
        trapFalse: 'hakkında vergi incelemesi başladıktan sonra dahi başvurulabilir ve ödeme için yükümlüye altmış gün süre tanınır',
        trapHighlight: 'vergi incelemesi başladıktan sonra dahi başvurulabilir ve ödeme için yükümlüye altmış gün'
      },
      {
        name: 'Düzeltme ve Şikayet',
        article: '213 s. VUK m. 116-126',
        rule: 'Matrah, tutar veya çifte yükümlülük gibi hesap yanlışları ile şahısta, konuda, muafiyette veya dönemde yapılan açık yanlışlar, beş yıllık zaman sınırı içinde daire müdürünün kararıyla giderilir; dava süresi geçtikten sonra yapılan başvuru reddedilirse Bakanlığa başvurulabilir.',
        hallmark: 'Hukuki yorum gerektiren ihtilaflar bu kapsama girmez; yalnızca belge ve kayıtlardan ilk bakışta açıkça görülebilen maddi ve açık mevzuat yanlışları bu idari yolla çözülebilir.',
        vignette: 'Aynı araca ait motorlu taşıtlar borcu sistem yanlışlığı nedeniyle iki kez tahakkuk ettirilip ödenmiş; otuz günlük dava süresini kaçıran vatandaş iki yıl sonra daireye başvurmuş ancak talebi reddedilmiştir.',
        clues: ['Hesap ve vergilendirme yanlışları ayrımı', 'Beş yıllık tarh zaman sınırı içinde başvuru', 'Daire reddine karşı Bakanlığa üst başvuru'],
        remedy: 'Dava süresi geçtikten sonra dairece reddedilen istem için doğrudan mahkemeye değil, önce Hazine ve Maliye Bakanlığına gidilir; Bakanlığın reddi üzerine otuz günde dava açılır.',
        pearl: 'VUK m.124: Dava açma süresi (30 gün) geçtikten sonra yapılan düzeltme talebi reddedilirse doğrudan mahkemeye GİDİLMEZ, önce Maliye Bakanlığına ŞİKAYET yoluna başvurulur!',
        trapFalse: 'otuz günlük dava süresi dolduktan sonra dairece reddedilen isteme karşı Bakanlığa gidilmeksizin doğrudan Danıştay’da iptal davası açılır',
        trapHighlight: 'Bakanlığa gidilmeksizin doğrudan Danıştay’da iptal davası açılır'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: '6183 Sayılı Kanun: Kamu Alacağının Korunması ve Ödeme Emrine İtiraz',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Teminat İsteme (m. 9)',
        article: '6183 s. AATUHK m. 9-12',
        rule: 'Kaçakçılık veya gelir kaybı incelemesine başlanmışsa yahut Türkiye’de yerleşim yeri olmayan borçlunun durumu tahsili tehlikeye düşürüyorsa, tahsil dairesi borçludan en az on beş gün süre vererek güvence göstermesini talep eder.',
        hallmark: 'Para, bankaların süresiz mektupları, devlet iç borçlanma senetleri, hazine bonoları, haczedilebilir menkul-gayrimenkul mallar ile tahsil dairesince kabul edilen muteber şahsi kefil güvence olarak sunulabilir.',
        vignette: 'Sahte belge kullandığı yönünde ilk hesaplamalara başlanan ve şirket mallarını hızla elden çıkarmaya başlayan borçludan tahsil dairesi on beş gün içinde banka mektubu veya taşınmaz rehni talep etmiştir.',
        clues: ['İnceleme aşamasında erken güvence talebi', 'En az on beş gün süre verilmesi', 'Süresiz banka mektubu ve taşınmaz kabulü'],
        remedy: 'Borçlu verilen sürede güvence göstermezse tahsil dairesi derhal ihtiyati haciz uygulanmasını talep edebilir; işleme karşı on beş gün içinde dava açılabilir.',
        pearl: '6183 m.9: Teminat istemede borçluya en az 15 GÜN süre verilir; banka teminat mektubunun SÜRESİZ olması zorunludur.',
        trapFalse: 'borçluya güvence göstermesi için en fazla üç gün süre tanınır ve yalnızca nakit para ile altın kabul edilir',
        trapHighlight: 'en fazla üç gün süre tanınır ve yalnızca nakit para ile altın kabul edilir'
      },
      {
        name: 'İhtiyati Haciz (m. 13)',
        article: '6183 s. AATUHK m. 13-16',
        rule: 'Güvence istemeyi gerektiren hallerde, borçlunun belli yerleşim yeri yoksa, kaçmışsa veya mal kaçırma olasılığı doğmuşsa alacaklı idarenin mahalli en büyük memurunun kararıyla hiçbir süreye bağlı olmaksızın derhal el koyma uygulanır; buna karşı on beş gün içinde dava açılabilir.',
        hallmark: 'Yargı kararı aranmaksızın vali, kaymakam veya yetkili defterdar-vergi dairesi başkanı kararıyla uygulanır; borçlu yeterli güvence gösterirse tedbir kaldırılır.',
        vignette: 'Yüksek tutarlı kamu borcunu ödememek için fabrikadaki makineleri gece vakti tırlara yükleyip kaçırmaya çalışan şirketin mallarına vergi dairesi başkanının yazılı kararıyla anında el konulmuştur.',
        clues: ['Mahalli en büyük memur kararı', 'Mal kaçırma tehlikesinde acil tedbir', 'Tatbik veya tebliğden on beş gün içinde dava'],
        remedy: 'Borçlu, işlemin uygulandığı veya gıyabında yapılmışsa tebliğ edildiği tarihten itibaren on beş gün içinde yetkili vergi mahkemesinde iptal davası açabilir.',
        pearl: '6183 m.13-15 (7061 s.K. güncel): İhtiyati haczi alacaklı idarenin mahalli en büyük memuru karar verir; dava açma süresi 7 gün DEĞİL, 15 GÜNDÜR!',
        trapFalse: 'yalnızca sulh hukuk hakiminin kararıyla uygulanabilir ve borçlu yedi gün içinde itiraz etmezse kesinleşir',
        trapHighlight: 'yalnızca sulh hukuk hakiminin kararıyla uygulanabilir ve borçlu yedi gün içinde'
      },
      {
        name: 'İhtiyati Tahakkuk (m. 17)',
        article: '6183 s. AATUHK m. 17-20',
        rule: 'Henüz kesinleşmemiş gelir, kurumlar, katma değer ve özel tüketim gibi belirli kamu alacaklarının, daire müdürünün yazılı isteği üzerine defterdar veya vergi dairesi başkanının yazılı emriyle derhal kesinleştirilmesi işlemidir.',
        hallmark: 'Bu olağanüstü mekanizmanın tek amacı henüz vadesi gelmemiş ve kesinleşmemiş alacak için hemen geçici el koyma tedbirini uygulayabilmektir; karara karşı on beş gün içinde yargıya başvurulabilir.',
        vignette: 'Hakkında kaçakçılık incelemesi süren ve yurt dışına yerleşmek üzere tüm varlığını satmaya çalışan mükellefin henüz ihbarnamesi çıkmamış tahmini KDV borcu, daire müdürünün talebiyle başkanın emriyle işleme alınmıştır.',
        clues: ['Henüz kesinleşmemiş belirli vergi türleri', 'Daire müdürü istemi ve başkan/defterdar yazılı emri', 'Tebliğden itibaren on beş gün içinde dava'],
        remedy: 'Borçlu on beş gün içinde vergi mahkemesinde dava açabilir; daha sonra kesin hesaplama yapıldığında aradaki fark düzeltilir.',
        pearl: '6183 m.17-20: İhtiyati tahakkuk emrini vergi dairesi müdürünün yazılı isteğiyle DEFTERDAR (veya Vergi Dairesi Başkanı) verir; dava süresi 15 GÜNDÜR!',
        trapFalse: 'vergi dairesi müdürü tarafından tek başına karara bağlanır ve tüm belediye harçları ile idari para cezalarına da uygulanır',
        trapHighlight: 'vergi dairesi müdürü tarafından tek başına karara bağlanır ve tüm belediye harçları'
      },
      {
        name: 'Ödeme Emrine İtiraz',
        article: '6183 s. AATUHK m. 55, m. 58',
        rule: 'Vadesinde yatırılmayan kamu alacağı için gönderilen uyarı belgesinde borçluya on beş gün içinde borcu kapatması veya mal bildiriminde bulunması bildirilir; borçlu on beş gün içinde yalnızca böyle bir borcu olmadığı, kısmen kapattığı veya zamanaşımına uğradığı gerekçeleriyle dava açabilir.',
        hallmark: 'İleri sürülen gerekçelerde tamamen veya kısmen haksız çıkan borçludan, haksız çıktığı tutar üzerinden yüzde on oranında ek haksız çıkma zammı tahsil edilir.',
        vignette: 'Kesinleşen vergi borcunu vadesinde yatırmadığı için kendisine resmi uyarı belgesi tebliğ edilen borçlu, on ikinci günde mahkemeye giderek geçmişte yapılan matrah hesabının fahiş olduğunu ileri sürmüştür.',
        clues: ['On beş gün içinde kapama veya mal bildirimi', 'Sadece üç sınırlı gerekçeyle yargı yolu', 'Haksız çıkma halinde yüzde on ek yaptırım'],
        remedy: 'Matrahın yüksekliği bu aşamada ileri sürülemez; yalnızca borcun yokluğu, kısmi kapama veya zamanaşımı inceleneceğinden dava reddedilir ve yüzde on zam uygulanır.',
        pearl: '6183 m.55 & m.58 (KRİTİK!): Ödeme emrine itiraz/ödeme/mal bildirimi süresi 15 GÜNDÜR (7 gün değildir!); sadece 3 sebep: Borç yok, Kısmi ödeme, Zamanaşımı (+%10 haksız çıkma zammı).',
        trapFalse: 'tebliğden itibaren yedi gün içinde her türlü matrah ve tarhiyat hatası ileri sürülerek vergi mahkemesinde dava açılabilir',
        trapHighlight: 'tebliğden itibaren yedi gün içinde her türlü matrah ve tarhiyat hatası ileri sürülerek'
      },
      {
        name: 'Kamu Rüçhanı ve İptal',
        article: '6183 s. AATUHK m. 21, m. 24-26',
        rule: 'Üçüncü şahıslarca haczedilen mallar paraya çevrilmeden önce devlet alacağı için de haciz konulursa devlet ilk hacze iştirak ederek satış bedelini orantılı paylaşır; malın aynından doğan borçlar ise rehinli alacaklılardan bile önce gelir ve mal kaçırma tasarrufları beş yıl içinde genel mahkemede bozdurulabilir.',
        hallmark: 'Rehinli alacaklıların önceliği genel kural olarak saklıdır; ancak emlak ve motorlu taşıtlar gibi doğrudan o malın varlığından doğan devlet alacakları rehin hakkının dahi önüne geçer.',
        vignette: 'Üzerinde banka ipoteği bulunan bir taşınmazın icra satışında, belediyenin ödenmemiş emlak borcu ile tahsil dairesinin gelir vergisi alacağı aynı satış bedelinden pay talep etmektedir.',
        clues: ['Satış öncesi hacze garameten iştirak', 'Eşyanın aynından doğan alacağın rehin üstünlüğü', 'Beş yıllık hak düşürücü sürede Asliye Hukuk davası'],
        remedy: 'Taşınmazın aynından doğan emlak borcu banka ipoteğinden bile önce ödenir; gelir vergisi alacağı ise banka ipoteğinden sonra sıraya girer.',
        pearl: '6183 m.21 & m.26: Eşyanın aynından doğan kamu alacakları (MTV, Emlak, Gümrük) REHİNDEN BİLE ÖNCE gelir! Tasarrufun iptali davası Asliye Hukukta 5 YIL içinde açılır.',
        trapFalse: 'devletin tüm gelir ve kurumlar alacakları istisnasız biçimde önceki tarihli banka ipoteklerinden önce ödenir ve iptal davası vergi mahkemesinde açılır',
        trapHighlight: 'önceki tarihli banka ipoteklerinden önce ödenir ve iptal davası vergi mahkemesinde'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: '6183 Tahsil Zamanaşımı, Gecikme Zammı-Faizi ve Tecil',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Kritik Kanun Maddesi',
    entities: [
      {
        name: 'Tahsil Zamanaşımı (5 Yıl)',
        article: '6183 s. AATUHK m. 102',
        rule: 'Kesinleşmiş kamu alacağı, normal ödeme vadesinin rastladığı takvim yılını izleyen yılın ilk gününden itibaren beş yıl içinde cebren alınmazsa idarenin takip yetkisi sona erer; ancak borçlunun sonradan kendi isteğiyle yaptığı ödemeler kabul edilir.',
        hallmark: 'Borçlunun yabancı memlekette bulunması, hileli iflas etmesi veya terekesinin tasfiyesi nedeniyle takip yapılamadığı sürece bu beş yıllık dilim işlemez.',
        vignette: 'Vadesi 2018 yılının Temmuz ayında dolan bir gelir vergisi borcu için hiçbir takip işlemi yapılmamış, 2024 yılının Mart ayında gönderilen takip yazısına karşı borçlu sürenin dolduğunu ileri sürmüştür.',
        clues: ['Vadenin rastladığı yılı izleyen yılbaşından başlama', 'Beş yıllık cebri takip sınırı', 'Rızaen yapılan ödemenin iade edilmemesi'],
        remedy: '2019 başında başlayıp 31 Aralık 2023’te dolan süre nedeniyle 2024’teki takip iptal edilir; şayet borçlu itiraz etmeyip kendiliğinden ödeseydi geçerli olurdu.',
        pearl: '6183 m.102: Tahsil zamanaşımı VADE YILI + 1 Ocak’tan itibaren 5 YILDIR; zamanaşımı sonrası mükellefin rızaen ödediği para iade edilmez.',
        trapFalse: 'vade gününden itibaren on yıl içinde takip yapılmazsa düşer ve borçlu sonradan rızaen ödese dahi parasını geri alabilir',
        trapHighlight: 'on yıl içinde takip yapılmazsa düşer ve borçlu sonradan rızaen ödese dahi parasını geri alabilir'
      },
      {
        name: 'Zamanaşımının Kesilmesi',
        article: '6183 s. AATUHK m. 103',
        rule: 'Ödeme yapılması, haciz uygulanması, ödeme emri tebliği, mal bildirimi veya mal artışı beyanı, teminat ya da kefalet gösterilmesi, yargıca yürütmenin durdurulması veya bozma kararı verilmesi ile erteleme işlemlerinde beş yıllık takip süresi sıfırlanır.',
        hallmark: 'Sürenin sıfırlanması halinde daha önce işlemiş yıllar tamamen yanar ve olayın rastladığı takvim yılını takip eden yılın ilk gününden başlayarak yepyeni bir beş yıllık dilim işlemeye başlar.',
        vignette: '2020 vadeli kamu borcunun dört yılı geçtikten sonra 2024 yılının Kasım ayında borçlunun banka hesabına on liralık haciz uygulanarak tahsilat yapılmış ve idare yeni takip takvimini hesaplamıştır.',
        clues: ['Ödeme emri tebliği ve haciz işlemi', 'İşlemiş sürenin tamamen sıfırlanması', 'İzleyen takvim yılbaşından yeniden beş yıl'],
        remedy: '2024 Kasım’daki haciz ve kısmi tahsilat süreyi sıfırladığından, 1 Ocak 2025’ten itibaren 31 Aralık 2029’a kadar yeni bir beş yıllık dönem başlar.',
        pearl: '6183 m.103: Ödeme emri tebliği, kısmi ödeme, haciz, mal bildirimi ve tecil tahsil zamanaşımını KESER; kesilme yılını izleyen yılbaşından yeniden 5 yıl başlar!',
        trapFalse: 'ödeme emri tebliği ve kısmi haciz işlemi süreyi yalnızca durdurur ve kaldığı günden itibaren devam ettirir',
        trapHighlight: 'süreyi yalnızca durdurur ve kaldığı günden itibaren devam ettirir'
      },
      {
        name: 'Gecikme Zammı (m. 51)',
        article: '6183 s. AATUHK m. 51',
        rule: 'Kamu alacağının yasal ödeme süresi içinde yatırılmayan kısmına vadenin bittiği günden itibaren her ay için ayrı ayrı ve ay kesirleri günlük hesaplanarak uygulanan mali yaptırımdır.',
        hallmark: 'Gelir kaybı yaptırımlarına da uygulanmasına karşılık genel ve özel şekli yaptırımlar (usulsüzlük ve özel usulsüzlük) bu vade sonrası artışın kesinlikle dışındadır.',
        vignette: 'Vadesi 31 Mart olan elli bin liralık kurumlar borcunu ve yirmi bin liralık özel usulsüzlük cezasını 15 Nisan’da yatırmaya gelen muhasebeci, her iki kalem için de on beş günlük ek tutar hesaplandığını görmüştür.',
        clues: ['Vade bitiminden fiili ödeme gününe kadar', 'Ay kesirlerinin günlük hesaplanması', 'Usulsüzlük ve özel usulsüzlükte uygulanmama'],
        remedy: 'Kurumlar borcu için on beş günlük ek hesaplama hukuka uygundur; ancak özel usulsüzlük cezası için ek tutar alınamaz ve bu kısmın terkin edilmesi gerekir.',
        pearl: '6183 m.51 Gecikme Zammı: Vadeden sonra başlar, ay kesirleri GÜNLÜK hesaplanır, vergi ziyaı cezasına uygulanır ama USULSÜZLÜK ve ÖZEL USULSÜZLÜK cezalarına UYGULANMAZ!',
        trapFalse: 'ay kesirleri dikkate alınmaksızın yalnız tam aylar için hesaplanır ve tüm usulsüzlük cezalarına da zorunlu olarak uygulanır',
        trapHighlight: 'ay kesirleri dikkate alınmaksızın yalnız tam aylar için hesaplanır ve tüm usulsüzlük cezalarına'
      },
      {
        name: 'Gecikme Faizi (m. 112)',
        article: '213 s. VUK m. 112',
        rule: 'İkmalen, re’sen veya idarece yapılan işlemlerde, alacağın normal vade tarihinden kesinleşme tarihine (dava açılmışsa mahkeme kararının idareye tebliğine) kadar geçen süre için yalnızca asıl borca ve ay kesirleri sayılmaksızın tam aylar üzerinden uygulanır.',
        hallmark: 'Vade sonrası işleyen yaptırımdan iki kritik noktada ayrılır: Sadece asıl borç üzerinden hesaplanır (hiçbir cezaya uygulanmaz) ve ay kesirleri tamamen dikkate alınmaz.',
        vignette: '2023 yılına ait eksik beyan edilen gelir borcu 2025 yılında ikmalen saptanıp kesinleşmiş; daire hem asıl borca hem de kesilen gelir kaybı yaptırımına on beş günlük ay kesrini de ekleyerek ek hesap yapmıştır.',
        clues: ['Normal vadeden tahakkuka kadar geçen dönem', 'Ay kesirlerinin tamamen dikkate alınmaması', 'Hiçbir vergi cezasına uygulanamaması'],
        remedy: 'Yalnızca asıl borca ve sadece tam aylar üzerinden hesaplama yapılabilir; cezaya ve on beş günlük ay kesrine yürütülen ek tutarlar hukuka aykırıdır.',
        pearl: 'VUK m.112 Gecikme Faizi: Normal vadeden tahakkuka kadar, YALNIZCA VERGİ ASLINA (cezalara YOK!) ve AY KESİRLERİ DİKKATE ALINMAKSIZIN (tam aylar) uygulanır!',
        trapFalse: 'hem asıl borca hem de gelir kaybı cezasına günlük esasta hesaplanarak vade tarihinden ödeme gününe kadar işletilir',
        trapHighlight: 'hem asıl borca hem de gelir kaybı cezasına günlük esasta hesaplanarak'
      },
      {
        name: 'Tecil ve Taksitlendirme',
        article: '6183 s. AATUHK m. 48',
        rule: 'Amme borcunun ödenmesi veya malların paraya çevrilmesi borçluyu çok zor duruma düşürecekse, yazılı istem ve yeterli güvence karşılığında alacak en çok otuz altı ayı geçmemek üzere ve belirli faiz alınarak ertelenebilir veya bölünebilir.',
        hallmark: 'Borçlunun dilekçe vermiş olması devam eden icra ve haciz işlemlerini kendiliğinden durdurmaz; takibin durması için yetkili makamın istemi kabul edip şartları onaylaması gerekir.',
        vignette: 'Nakit akışı bozulan bir imalat şirketi, biriken borçlarının ödenmesinin fabrikayı kapatma noktasına getireceğini mali tablolarıyla kanıtlayarak yazılı dilekçe ve taşınmaz teminatıyla yirmi dört ay vade istemiştir.',
        clues: ['Çok zor durum halinin belgelenmesi', 'Yazılı talep ve güvence şartı', 'En çok otuz altı ay vade ve faiz'],
        remedy: 'Yetkili makam istemi uygun bulursa borç yirmi dört aya bölünür; bu işlem tahsil zamanaşımını keser ve bölünen ödemeler düzenli yapıldığı sürece cebri icra durur.',
        pearl: '6183 m.48 Tecil: Çok zor durum + yazılı talep + teminat + en fazla 36 AY + tecil faizi. Salt başvuru haczi kendiliğinden DURDURMAZ!',
        trapFalse: 'borçlunun dilekçe verdiği anda devam eden tüm hacizler kendiliğinden kalkar ve borç teminatsız olarak altmış aya kadar bölünebilir',
        trapHighlight: 'devam eden tüm hacizler kendiliğinden kalkar ve borç teminatsız olarak altmış aya kadar'
      }
    ]
  },
  {
    branchId: 'vergi',
    subTopic: 'Türk Vergi Sistemindeki Temel Vergi Türleri',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Yüksek Verimli Olay',
    entities: [
      {
        name: 'Gelir Vergisi (GVK)',
        article: '193 s. GVK m. 1-6',
        rule: 'Gerçek kişilerin bir takvim yılında elde ettiği ticari, zirai, ücret, serbest meslek, gayrimenkul sermaye, menkul sermaye ve diğer kazanç-iratların safi toplamı üzerinden artan oranlı tarifeyle alınır; Türkiye’de yerleşmiş olanlar dünya çapındaki tüm kazançlarından sorumludur.',
        hallmark: 'İkametgahı Türkiye’de bulunanlar ile bir takvim yılında geçici ayrılmalar hariç altı aydan fazla kesintisiz oturanlar tam mükellef, diğer yabancılar ise yalnız yurt içi kazançlarından dar mükellef sayılır.',
        vignette: 'İkametgahı Ankara’da bulunan bir doktor, hem özel muayenehanesinden serbest meslek kazancı hem de Londra’daki dairesinden kira kazancı elde etmiş ve yurt dışı kiranın beyan edilip edilmeyeceğini sormuştur.',
        clues: ['Gerçek kişilerin yedi kazanç kategorisi', 'Artan oranlı tarife yapısı', 'Tam mükelleflerde dünya genelinde kazanç ilkesi'],
        remedy: 'Türkiye’de yerleşmiş olduğu için tam mükellef sayılan doktor, Londra’daki kira kazancını da yıllık beyannamesine dahil etmek ve çifte mali yük anlaşmasına göre mahsup istemek zorundadır.',
        pearl: 'GVK m.1-4: 7 gelir unsuru (Ticari, Zirai, Ücret, Serbest Meslek, GMSİ, MSİ, Diğer) gerçek kişilere artan oranlı uygulanır; 6 aydan fazla oturanlar tam mükelleftir.',
        trapFalse: 'yalnızca anonim şirketlerin yıllık bilançolarına sabit düz oranda uygulanır ve tam mükellefler yurt dışı kazançlarını beyan etmezler',
        trapHighlight: 'yalnızca anonim şirketlerin yıllık bilançolarına sabit düz oranda uygulanır'
      },
      {
        name: 'Kurumlar Vergisi (KVK)',
        article: '5520 s. KVK m. 1-3, m. 32',
        rule: 'Sermaye şirketleri, kooperatifler, iktisadi kamu teşekkülleri, dernek veya vakıflara ait iktisadi işletmeler ile iş ortaklıklarının safi kazançları üzerinden düz oranda alınır; kanuni veya iş merkezlerinden herhangi biri Türkiye’de bulunanlar tam mükelleftir.',
        hallmark: 'Dernek ve vakıfların kendileri değil, yalnızca bunlara bağlı ticari faaliyet yürüten işletmeleri kapsamdadır; adi şirketler ise tüzel kişiliği olmadığı için bu kapsamda sayılmaz, ortakları bireysel beyan verir.',
        vignette: 'Merkezi yurt dışında kayıtlı olmasına rağmen tüm yönetim kurulu toplantılarını ve ticari kararlarını İstanbul’daki ofisinden yöneten bir anonim şirketin Türkiye’deki statüsü tartışılmaktadır.',
        clues: ['Kanuni veya iş merkezinden birinin yurt içinde olması', 'Düz oranlı (sabit) tarife yapısı', 'Derneğin kendisinin değil iktisadi işletmesinin kapsamı'],
        remedy: 'İş merkezi Türkiye’de bulunduğu için şirket tam mükellef sayılır ve hem yurt içi hem yurt dışı tüm kazançları üzerinden yıllık beyanname verir.',
        pearl: 'KVK m.1-3: 5 mükellef grubu (Sermaye şirketi, Kooperatif, İktisadi kamu, Dernek/vakıf iktisadi işletmesi, İş ortaklığı). Kanuni VEYA iş merkezi Türkiye’deyse TAM MÜKELLEF!',
        trapFalse: 'adi ortaklıklar ile vakıfların bizzat tüzel kişilikleri kapsam içindedir ve tam mükellefiyet için hem kanuni hem iş merkezinin Türkiye’de olması şarttır',
        trapHighlight: 'hem kanuni hem iş merkezinin Türkiye’de olması şarttır'
      },
      {
        name: 'Katma Değer Vergisi',
        article: '3065 s. KDVK m. 1, m. 29, m. 41',
        rule: 'Ticari, sınai, zirai ve serbest meslek kapsamındaki mal teslimi, hizmet ifası ve ithalat üzerinden alınan genel, dolaylı ve çok aşamalı harcama yükümlülüğüdür; her aşamada ödenen tutar tahsil edilenden düşülerek net yük nihai tüketiciye aktarılır.',
        hallmark: 'İndirim sistemi sayesinde malın üretimden perakendeye kadar her el değiştirmesinde yalnızca eklenen pay Hazineye intikal eder ve piramitleşme önlenir; beyanname izleyen ayın yirmi sekizine kadar verilir.',
        vignette: 'Toptancıdan yüz bin lira artı yirmi bin lira ek tutarla mal alan perakendeci, bu malı tüketiciye yüz elli bin lira artı otuz bin lira ek tutarla satmış ve maliyeye ne kadar yatıracağını hesaplamıştır.',
        clues: ['Çok aşamalı yayılı harcama yapısı', 'Alışta ödenenin satışta tahsil edilenden indirimi', 'Nihai ekonomik yükün tüketicide kalması'],
        remedy: 'Perakendeci tahsil ettiği otuz bin liradan alışta ödediği yirmi bin lirayı indirerek aradaki on bin liralık farkı izleyen ayın yirmi sekizine kadar beyan edip yatırır.',
        pearl: 'KDV genel, dolaylı ve çok aşamalıdır; indirim mekanizması sayesinde piramitleşmeyi önler ve ekonomik yük nihai tüketici üzerinde kalır.',
        trapFalse: 'sadece malın imalatçıdan ilk çıkışında tek aşamalı olarak alınır ve işletmelerin alışlarında ödediği tutarları indirmesine izin verilmez',
        trapHighlight: 'tek aşamalı olarak alınır ve işletmelerin alışlarında ödediği tutarları indirmesine izin verilmez'
      },
      {
        name: 'Özel Tüketim Vergisi',
        article: '4760 s. ÖTVK m. 1-4',
        rule: 'Kanuna ekli dört listede tek tek sayılan akaryakıt, motorlu taşıtlar, alkollü içecek-tütün-kolalı gazozlar ile belirli lüks ve beyaz eşyaların ithalatında veya imalatçılarınca ilk iktisabında yahut tesliminde yalnızca bir kez alınır.',
        hallmark: 'Genel harcama yükünden farklı olarak dar kapsamlıdır ve malın ikinci el veya sonraki ticari el değiştirmelerinde yeniden doğmaz; ayrıca bu tutar genel harcama yükünün matrahına da dahil edilir.',
        vignette: 'Sıfır kilometre bir otomobili bayiden ilk kez satın alan vatandaş ağır bir ek harcama yükü ödemiş, ancak iki yıl sonra aynı aracı ikinci el olarak başkasına sattığında bu yükün tekrar çıkıp çıkmayacağını sormuştur.',
        clues: ['Dört ekli listede sınırlı mal grubu', 'İthalat veya ilk iktisapta tek seferde alınma', 'İkinci el satışlarda tekrar doğmaması'],
        remedy: 'Tek aşamalı yapı gereği ikinci el otomobil devrinde bu yükümlülük yeniden doğmaz; sadece ilk tescil ve iktisapta bir defaya mahsus tahsil edilir.',
        pearl: 'ÖTV 4 listeden (I: akaryakıt, II: taşıt, III: tütün/alkol/kola, IV: lüks/beyaz eşya) TEK AŞAMALI alınır; ikinci el satışta yeniden ÖTV doğmaz!',
        trapFalse: 'tüm gıda ve temel tüketim ürünlerinin her alım satım aşamasında ikinci el devirler dahil tekrar tekrar tahsil edilir',
        trapHighlight: 'ikinci el devirler dahil tekrar tekrar tahsil edilir'
      },
      {
        name: 'Emlak ve Damga Vergisi',
        article: '1319 s. EVK m. 1, 30 & 488 s. DVK m. 1',
        rule: 'İlki Türkiye sınırları içindeki bina ve araziler üzerinden belediyelerce yılda iki eşit taksitte alınan servet yükümlülüğüdür; ikincisi ise yazılı hukuki muameleleri ispat eden sözleşme ve makbuz gibi kağıtlar üzerinden nispi veya maktu alınan muamele yükümlülüğüdür.',
        hallmark: 'Bina ve arazi türünde birinci taksit Mart-Nisan-Mayıs aylarında, ikinci taksit Kasım ayında ödenir; kağıt türünde ise tek başına imza atılan veya dijital imza taşıyan belli belgelerin düzenlenmesi borcu doğurur.',
        vignette: 'Yeni bir daire satın alan ve yüksek tutarlı bir kira sözleşmesi imzalayan mal sahibi, belediyeye ödeyeceği yıllık servet borcunun taksit aylarını ve sözleşme kağıdından doğan yükümlülüğü araştırmaktadır.',
        clues: ['Bina ve arazide belediyeye iki taksit', 'Mart-Mayıs ve Kasım ödeme dönemleri', 'Hukuki kağıtlarda nispi veya maktu muamele yükü'],
        remedy: 'Daire sahibi satın alma yılını izleyen yıldan itibaren belediyeye iki taksitte servet borcunu yatırır; yazılı kira sözleşmesi için ise kağıt düzenlendiği anda muamele yükü doğar.',
        pearl: 'Emlak Vergisi servet vergisidir (belediyeye Mart-Nisan-Mayıs ve Kasım’da 2 taksit); Damga Vergisi kanuna ekli (1) sayılı tablodaki hukuki kağıtlardan alınır.',
        trapFalse: 'bina ve arazi üzerindeki servet yükümlülüğü tek taksitte Aralık ayında Maliye Bakanlığına ödenir ve sözlü anlaşmalardan da kağıt yükümlülüğü alınır',
        trapHighlight: 'tek taksitte Aralık ayında Maliye Bakanlığına ödenir ve sözlü anlaşmalardan da'
      }
    ]
  },
  // =========================================================================
  // AVUKATLIK VE NOTERLİK HUKUKU (7 KÜME - 35 ANTİTE)
  // =========================================================================
  {
    branchId: 'avukatlik',
    subTopic: 'Avukatlığa Kabul Şartları, Engeller ve Birleşebilen-Birleşemeyen İşler',
    exams: ['HMGS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Her Sınavda Sorulur',
    entities: [
      {
        name: 'Kabul Şartları ve HMGS',
        article: '1136 s. AvK m. 3',
        rule: 'Türkiye Cumhuriyeti vatandaşı olmak, Türk hukuk fakültelerinden mezun bulunmak veya yabancı fakülte fark derslerini vermek, bir yıllık staj bitim belgesi almak, Hukuk Mesleklerine Giriş Sınavında başarılı olmak ve kayıt olunacak baro bölgesinde yerleşim yeri bulunmak zorunludur.',
        hallmark: '2024 yılından itibaren fiilen uygulanan merkezi mesleğe giriş sınavından en az yetmiş puan almak staja başlayabilmek ve mesleğe girebilmek için zorunlu ön koşuldur.',
        vignette: 'Almanya’daki bir hukuk fakültesinden mezun olan Türk vatandaşı aday, Türkiye’deki hukuk fakültelerinde fark derslerini vermiş ancak merkezi giriş sınavına girmeden doğrudan staj başvurusu yapmıştır.',
        clues: ['Vatandaşlık ve hukuk fakültesi mezuniyeti', 'Merkezi mesleğe giriş sınavı başarısı', 'İlgili baro çevresinde ikametgah koşulu'],
        remedy: 'Merkezi sınavda başarı sağlanmadan staj listesine ve baro levhasına kayıt yapılamaz; aday sınavda yetmiş ve üzeri puan aldıktan sonra başvurusunu yenilemelidir.',
        pearl: '1136 m.3 (2026 Güncel): TC vatandaşlığı + hukuk fakültesi + HMGS başarısı + staj bitim belgesi + baro bölgesinde ikametgah + engel hali olmamak!',
        trapFalse: 'yabancı uyruklu hukuk mezunları da fark derslerini vermeleri halinde merkezi sınava girmeden baro levhasına yazılabilirler',
        trapHighlight: 'yabancı uyruklu hukuk mezunları da fark derslerini vermeleri halinde merkezi sınava girmeden'
      },
      {
        name: 'Avukatlığa Engeller (m. 5)',
        article: '1136 s. AvK m. 5',
        rule: 'Taksirli suçlar hariç kasten işlenen bir suçtan iki yıldan fazla hapis yahut süresi ne olursa olsun zimmet, rüşvet, hırsızlık, dolandırıcılık, sahtecilik gibi yüz kızartıcı suçlardan kesinleşmiş mahkumiyet, kısıtlılık, itibarı iade edilmemiş iflas ve meslekten kesin çıkarma hallerinde başvuru reddedilir.',
        hallmark: 'Taksirli bir trafik kazasından dolayı iki yıldan fazla hapis cezası alınmış olması tek başına kesin yasak oluşturmaz; buna karşılık yüz kızartıcı suçlarda ceza süresi bir gün dahi olsa mani doğar.',
        vignette: 'Taksirle ölüme sebebiyet verme suçundan üç yıl hapis cezası alıp infazını tamamlayan hukuk fakültesi mezunu ile dolandırıcılık suçundan on ay hapis cezası kesinleşmiş başka bir mezun levhaya kayıt istemiştir.',
        clues: ['Taksirli suçların kesin yasak dışı olması', 'Kasten suçta iki yılın üzerinde hapis eşiği', 'Yüz kızartıcı suçlarda süreye bakılmaksızın ret'],
        remedy: 'Taksirli suçtan hüküm giyen aday hakkında bu bentten mani doğmaz; ancak dolandırıcılık yüz kızartıcı suç olduğundan on aylık hüküm dahi kesin ret sebebidir.',
        pearl: '1136 m.5: Taksirli suçlar hariç >2 yıl hapis VEYA süresi ne olursa olsun yüz kızartıcı suç (zimmet, rüşvet, dolandırıcılık, sahtecilik vb.) avukatlığa kesin engeldir!',
        trapFalse: 'taksirli bir trafik suçundan iki yıldan fazla ceza alınması kesin engel oluştururken yüz kızartıcı suçlarda bir yıl altı cezalar engel sayılmaz',
        trapHighlight: 'taksirli bir trafik suçundan iki yıldan fazla ceza alınması kesin engel oluştururken'
      },
      {
        name: 'Birleşemeyen İşler (m. 11)',
        article: '1136 s. AvK m. 11',
        rule: 'Aylık, ücret, gündelik veya kesenek karşılığında görülen hiçbir hizmet ve görev, devlet memurluğu, noterlik, sigortalı özel sektör çalışanlığı, ticari mümessillik, tacirlik, esnaflık ve meslek onuruyla bağdaşmayan hiçbir uğraş savunma göreviyle aynı anda yürütülemez.',
        hallmark: 'Bağımsızlık ilkesi gereği ticari kazanç amaçlı şahıs işletmesi açmak, kollektif şirket ortaklığı veya limited şirket müdürlüğü yapmak da bu kesin yasak kapsamında değerlendirilir.',
        vignette: 'Baro levhasına kayıtlı bir hukukçu, ek gelir elde etmek amacıyla kendi adına kafe işletmesi açıp esnaf odasına kaydolmuş ve ayrıca bir limited şirketin yetkili müdürlüğünü üstlenmiştir.',
        clues: ['Tacirlik, esnaflık ve ticari mümessillik yasağı', 'Devlet memurluğu ve noterlikle bağdaşmazlık', 'Limited şirket müdürlüğünün yasak kapsamında kalması'],
        remedy: 'Bağdaşmayan faaliyetin tespiti halinde baro yönetim kurulu ilgiliye bu uğraşı bırakması için süre verir, bırakmazsa baro levhasından silinmesine karar verir.',
        pearl: '1136 m.11: Devlet memurluğu, noterlik, tacirlik, esnaflık, ticari mümessillik, kollektif ortaklık ve limited şirket MÜDÜRLÜĞÜ avukatlıkla birleşemez!',
        trapFalse: 'baro levhasına kayıtlı bir hukukçu serbestçe esnaflık yapabilir, ticari mümessil olabilir ve limited şirket müdürlüğü üstlenebilir',
        trapHighlight: 'serbestçe esnaflık yapabilir, ticari mümessil olabilir ve limited şirket müdürlüğü üstlenebilir'
      },
      {
        name: 'Birleşebilen İşler (m. 12)',
        article: '1136 s. AvK m. 12',
        rule: 'Milletvekilliği, il genel ve belediye meclisi üyeliği, hukuk alanında profesörlük ve doçentlik, özel hukuk tüzel kişilerinin sürekli hukuk müşavirliği, bir büroda ücretli bağlı çalışma, hakemlik, arabuluculuk, tasfiye memurluğu ile anonim şirket yönetim kurulu üyeliği ve denetçiliği aynı anda yürütülebilir.',
        hallmark: 'Gazete ve dergi sahipliği ile sorumlu müdürlüğü ve bilimsel yayın faaliyetleri de serbesttir; ancak milletvekilleri ile meclis üyeleri devlet, belediye ve kamu kurumları aleyhine dava takip edemez.',
        vignette: 'Bir hukuk fakültesinde medeni hukuk doçenti olarak ders veren ve aynı zamanda bir anonim şirketin yönetim kurulu üyesi ile arabulucu sıfatını taşıyan kişi serbest büro açmak istemektedir.',
        clues: ['Hukuk profesörlüğü ve doçentliğinin serbestliği', 'Arabuluculuk, hakemlik ve bağlı ücretli çalışma', 'Anonim şirket yönetim kurulu üyeliği istisnası'],
        remedy: 'Sayılan üç görev de kanunda açıkça izin verilen istisnalar arasında yer aldığından adayın levhaya yazılmasına ve serbest büro açmasına hiçbir engel bulunmaz.',
        pearl: '1136 m.12: Milletvekilliği, belediye meclis üyeliği, hukuk prof/doç, arabuluculuk, hakemlik, AŞ YK üyeliği/denetçiliği ve bağlı çalışan avukatlık BİRLEŞEBİLİR!',
        trapFalse: 'hukuk fakültesi profesörleri, arabulucular ve anonim şirket yönetim kurulu üyeleri hiçbir biçimde baro levhasına kayıtlı kalamazlar',
        trapHighlight: 'arabulucular ve anonim şirket yönetim kurulu üyeleri hiçbir biçimde baro levhasına kayıtlı kalamazlar'
      },
      {
        name: 'Kayıt Reddine İtiraz',
        article: '1136 s. AvK m. 8',
        rule: 'Baro yönetim kurulu levhaya yazılma başvurusunu bir ay içinde karara bağlamak zorundadır ve bu sürede karar verilmezse istem olumsuz sonuçlanmış sayılır; olumsuz işleme karşı tebliğden itibaren on beş gün içinde Türkiye Barolar Birliğine başvurulabilir.',
        hallmark: 'Birliğin vereceği karar Adalet Bakanlığına gönderilir; Bakanlık iki ay içinde bir kez daha görüşülmek üzere geri gönderirse Birlik üçte iki çoğunlukla önceki kararında ısrar ederse işlem kesinleşir ve idari yargı yolu açılır.',
        vignette: 'Levhaya yazılma başvurusuna kırk beş gün boyunca hiçbir yanıt alamayan hukuk mezunu, isteminin zımnen olumsuz sayıldığını öğrenerek kırk beşinci günden sonra üst meslek örgütüne başvurmak istemektedir.',
        clues: ['Baro yönetim kurulunun bir aylık karar süresi', 'Tebliğ veya sürenin bitiminden on beş günde TBB', 'Bakanlığın iki aylık iade yetkisi ve üçte iki ısrar'],
        remedy: 'Bir aylık sürenin dolduğu otuzuncu günden itibaren on beş gün içinde TBB’ye başvurulmalıdır; kesinleşen olumsuz işleme karşı idare mahkemesinde iptal davası açılabilir.',
        pearl: '1136 m.8: Baro 1 ayda karar verir (vermezse ret) -> 15 gün içinde TBB’ye itiraz -> Adalet Bakanlığı 2 ayda geri gönderebilir -> TBB 2/3 çoğunlukla ısrar ederse kesinleşir (İdare Mahkemesi yolu açık).',
        trapFalse: 'baro yönetim kurulunun ret kararına karşı otuz gün içinde doğrudan Asliye Hukuk Mahkemesine başvurulur ve Bakanlık onayı aranmaz',
        trapHighlight: 'otuz gün içinde doğrudan Asliye Hukuk Mahkemesine başvurulur ve Bakanlık onayı aranmaz'
      }
    ]
  },
  {
    branchId: 'avukatlik',
    subTopic: 'Avukatlık Stajı, Stajyerin Yetki Sınırları ve Levhadan Silinme',
    exams: ['HMGS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Bir Yıllık Staj Dağılımı',
        article: '1136 s. AvK m. 15, m. 23',
        rule: 'Mesleki eğitim dönemi toplam on iki aydır; ilk altı ayı mahkemelerde ve adalet dairelerinde, kalan altı ayı ise baro levhasına kayıtlı ve meslekte en az beş yıl kıdemi bulunan bağımsız bir hukukçunun yanında kesintisiz olarak yapılır.',
        hallmark: 'Haklı bir mazeretle devam edilemeyen günler adalet komisyonu veya baro yönetim kurulu kararıyla tamamlatılır; adayın yanında çalışacağı hukukçu hakkında meslekten çıkarma veya işten yasaklama cezası bulunmamalıdır.',
        vignette: 'Adliye aşamasını tamamlayan aday, kalan altı aylık bölümü meslekte henüz üç senelik kıdemi bulunan sınıf arkadaşının bürosunda tamamlamak için baroya muvafakatname sunmuştur.',
        clues: ['İlk altı ay adliye ve mahkemeler', 'İkinci altı ay en az beş yıl kıdemli büro', 'Eğitim sürecinin kesintisiz yürütülmesi'],
        remedy: 'Üç senelik kıdem yasal beş yıl koşulunu sağlamadığından baro başvuruyu reddeder ve adayın en az beş yıl kıdemli bir meslek mensubu bulmasını ister.',
        pearl: '1136 m.15: Avukatlık stajı 1 YILDIR = 6 ay mahkemeler + 6 ay en az 5 YIL KIDEMLİ avukat yanı (kesintisiz yapılır).',
        trapFalse: 'toplam on sekiz ay sürer ve ikinci aşama meslekte en az bir yıl kıdemi bulunan herhangi bir büroda tamamlanabilir',
        trapHighlight: 'toplam on sekiz ay sürer ve ikinci aşama meslekte en az bir yıl kıdemi bulunan'
      },
      {
        name: 'Staj İlanı ve İtiraz',
        article: '1136 s. AvK m. 18-20',
        rule: 'Eğitim başvurusu yapan adayın istemi, baronun ve adalet dairesinin herkesin görebileceği uygun bir yerinde on beş gün süreyle askıda duyurulur; bu süre içinde her meslek mensubu veya ilgili kişi adayın listeye yazılmasına karşı çıkabilir.',
        hallmark: 'Askı süresi bitiminde baro yönetim kurulu on gün içinde olumlu veya olumsuz kararını verir; bu karara karşı aday, karşı çıkan kişi veya Cumhuriyet savcısı on beş gün içinde Birliğe başvurabilir.',
        vignette: 'Başvurusunu eksiksiz teslim eden hukuk mezununa, baronun duyuru panosunda on beş gün asılı kalmadan ertesi gün listeye kayıt belgesi verilemeyeceği bildirilmiştir.',
        clues: ['Baro ve adalet dairesinde on beş gün askı', 'Her meslek mensubu ve ilgilinin karşı çıkma hakkı', 'Baro kararına karşı on beş günde TBB yolu'],
        remedy: 'On beş günlük askı süresi emredici bir şeffaflık şartı olduğundan süre dolmadan listeye kayıt yapılamaz; sürenin bitiminde inceleme raporuyla karar verilir.',
        pearl: '1136 m.18-20: Staj başvurusu baro ve adalet dairesinde 15 GÜN ilan edilir; baro YK kararına karşı 15 gün içinde TBB’ye itiraz edilebilir.',
        trapFalse: 'adayın başvurusu ilan edilmeksizin aynı gün kesinleşir ve üçüncü kişilerin listeye kayda karşı çıkma hakkı bulunmamaktadır',
        trapHighlight: 'ilan edilmeksizin aynı gün kesinleşir ve üçüncü kişilerin listeye kayda karşı çıkma hakkı bulunmamaktadır'
      },
      {
        name: 'Stajyerin Yetki Sınırı',
        article: '1136 s. AvK m. 26',
        rule: 'Büro eğitim aşamasına yani ikinci altı aya başladıktan sonra, yanında eğitim gördüğü hukukçunun yazılı onayı ve sorumluluğu altında yalnızca Sulh Hukuk Mahkemeleri, Sulh Ceza Hakimlikleri ve İcra Mahkemelerindeki duruşmalara girebilir ve icra müdürlüklerindeki işleri yürütebilir.',
        hallmark: 'Asliye Hukuk, Asliye Ceza, Ağır Ceza, Aile, İş, Ticaret, İdare ve Vergi mahkemelerindeki oturumlara hiçbir biçimde katılamaz; ayrıca bu dar kapsamlı olanak adliye aşaması olan ilk altı ayda kullanılamaz.',
        vignette: 'Eğitiminin sekizinci ayında bulunan aday, üstadının yazılı muvafakatiyle sabah Sulh Hukuk Mahkemesindeki kira oturumuna, öğleden sonra ise Asliye Hukuk Mahkemesindeki tapu iptali oturumuna katılmak istemiştir.',
        clues: ['İkinci altı ayda ve yazılı muvafakatle izin', 'Sulh Hukuk, Sulh Ceza, İcra Mahkemesi ve icra dairesi', 'Asliye ve üst derece mahkemelerinde yasak'],
        remedy: 'Sulh Hukuk oturumuna katılması hukuka uygundur; ancak Asliye Hukuk yargıcı adayı duruşmaya kabul etmez ve tutanağa görev dışı şerhi düşer.',
        pearl: '1136 m.26 (ÖSYM FAVORİSİ!): Stajyer 2. 6 ayda yazılı muvafakatle SADECE: Sulh Hukuk + Sulh Ceza Hakimliği + İcra Mahkemesi duruşmalarına girer ve İcra Müdürlüklerindeki işleri yürütür (Asliye/Ağır/İdare YASAK!).',
        trapFalse: 'yazılı onay almak kaydıyla eğitimin ilk gününden itibaren Asliye Hukuk, Asliye Ceza ve İdare Mahkemesi duruşmalarına da serbestçe katılabilir',
        trapHighlight: 'eğitimin ilk gününden itibaren Asliye Hukuk, Asliye Ceza ve İdare Mahkemesi duruşmalarına'
      },
      {
        name: 'Ruhsatname ve Ant',
        article: '1136 s. AvK m. 9, m. 25',
        rule: 'Eğitimini başarıyla bitirip baro yönetim kurulundan bitim belgesi alan ve kabul kararı kesinleşen aday, baro yönetim kurulu huzurunda kanunda yazılı yemin metnini okuyarak mesleğe adım atar ve resmi yetki belgesi Birlik tarafından düzenlenir.',
        hallmark: 'Meslek kimliğini simgeleyen resmi yetki belgesi ile kimlik kartı yerel baro tarafından değil, doğrudan Türkiye Barolar Birliği tarafından tek tip olarak bastırılıp onaylanır.',
        vignette: 'Tüm aşamaları tamamlayıp kabul kararı kesinleşen genç hukukçu, mesleki yetki belgesini doğrudan yerel baro başkanının tek imzasıyla alıp yemin etmeden duruşmaya çıkıp çıkamayacağını sormaktadır.',
        clues: ['Baro yönetim kurulu önünde kanuni yemin', 'Yetki belgesinin TBB tarafından düzenlenmesi', 'Yemin tutanağının özlük dosyasında saklanması'],
        remedy: 'Aday önce baro yönetim kurulu önünde yemin etmeli ve TBB tarafından düzenlenen resmi belgesini teslim aldıktan sonra baro levhasına kaydıyla fiilen görev yapmalıdır.',
        pearl: '1136 m.9: Avukatlık ruhsatnamesi ve kimliği TBB tarafından düzenlenir; aday baro yönetim kurulu önünde ant (yemin) içer.',
        trapFalse: 'resmi yetki belgesi Adalet Bakanlığı tarafından düzenlenir ve adayın duruşmalara çıkabilmesi için mahkeme önünde ant içmesi gerekir',
        trapHighlight: 'Adalet Bakanlığı tarafından düzenlenir ve adayın duruşmalara çıkabilmesi için mahkeme önünde'
      },
      {
        name: 'Levhadan Silinme',
        article: '1136 s. AvK m. 71, m. 72',
        rule: 'Kabul koşullarının sonradan yitirilmesi, meslekle bağdaşmayan bir işe girilmesi, yasal sürede büro açılmaması veya adres bildirilmemesi, kesenek borçlarının ihtara rağmen ödenmemesi ya da meslekten çıkarma yaptırımı halinde yönetim kurulu kararıyla kayıt terkin edilir.',
        hallmark: 'Kayıt terkine karar verilmeden önce ilgilinin mutlaka yazılı savunması alınmalı veya dinlenmelidir; karara karşı tebliğden itibaren on beş gün içinde Birliğe başvurulabilir.',
        vignette: 'Üst üste iki yıl boyunca yıllık baro aidatını yazılı uyarılara rağmen ödemeyen ve bildirilen büro adresini kapatıp yeni adresini bildirmeyen hukukçunun sicil kaydı incelenmektedir.',
        clues: ['Kabul şartı kaybı ve kesenek borcu ihlali', 'Karardan önce savunma alma zorunluluğu', 'On beş gün içinde TBB’ye itiraz yolu'],
        remedy: 'Baro yönetim kurulu savunmasını aldıktan sonra kaydın terkinine karar verir; aidat borcunu ödeyip büro adresini bildirdiğinde yeniden yazılma talep edilebilir.',
        pearl: '1136 m.71-72: Levhadan silinme kararı baro yönetim kurulunca (ilgilinin savunması alınarak) verilir; tebliğden 15 gün içinde TBB’ye itiraz edilebilir.',
        trapFalse: 'baro disiplin kurulunun tek taraflı kararıyla savunma alınmaksızın uygulanır ve bu işleme karşı üst makama itiraz yolu kapalıdır',
        trapHighlight: 'savunma alınmaksızın uygulanır ve bu işleme karşı üst makama itiraz yolu kapalıdır'
      }
    ]
  },
  {
    branchId: 'avukatlik',
    subTopic: 'Avukatın Tekel Hakkı, Uzlaşma Yetkisi, Dosya İnceleme ve Koruması',
    exams: ['HMGS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Her Sınavda Sorulur',
    entities: [
      {
        name: 'Avukatlık Tekeli (m. 35)',
        article: '1136 s. AvK m. 35',
        rule: 'Yasa işlerinde ve hukuki meselelerde görüş bildirmek, mahkeme ve hakem huzurunda başkalarının haklarını savunmak, adli işlemleri takip etmek ve bu işlere ait tüm evrakı düzenlemek yalnızca baroda yazılı meslek mensuplarına aittir.',
        hallmark: 'Dava ehliyeti bulunan herkes kendi şahsi davasını kendisi açıp takip edebilir; ancak esas sermayesi asgari tutarın beş katı ve üstü anonim şirketler ile yüz ve üzeri üyeli yapı kooperatifleri sözleşmeli hukukçu bulundurmak zorundadır.',
        vignette: 'Üç yüz üyeli bir konut yapı kooperatifi ile sermayesi yasal asgari sermayenin altı katına ulaşan bir anonim şirket, hukuk işlerini mali müşavire takip ettirip sözleşmeli hukukçu tutmamıştır.',
        clues: ['Başkası adına yargısal temsilin yalnız baro üyelerinde olması', 'Beş kat sermayeli AŞ ve yüz üyeli kooperatif zorunluluğu', 'Kişinin kendi davasını bizzat takip serbestisi'],
        remedy: 'Zorunluluğa uymayan şirket ve kooperatiflere Cumhuriyet savcısı tarafından her ay için brüt asgari ücretin iki katı tutarında idari para cezası kesilir.',
        pearl: '1136 m.35/3: Esas sermayesi asgari sermayenin 5 katı+ olan AŞ’ler ile üye sayısı 100+ olan yapı kooperatifleri SÖZLEŞMELİ AVUKAT bulundurmak zorundadır!',
        trapFalse: 'gerçek kişilerin dahi kendi davalarını şahsen açması yasaktır ve tüm limited şirketler sermayesine bakılmaksızın sözleşmeli hukukçu tutmak zorundadır',
        trapHighlight: 'gerçek kişilerin dahi kendi davalarını şahsen açması yasaktır ve tüm limited şirketler'
      },
      {
        name: 'Uzlaşma Tutanağı (m. 35/A)',
        article: '1136 s. AvK m. 35/A',
        rule: 'Yargılama açılmadan veya açılmış olup da henüz duruşma başlamadan önce, tarafların kendi iradeleriyle sonuç alabilecekleri konularda müvekkilleriyle birlikte karşı tarafı anlaşmaya davet ederek imzaladıkları belge İİK m. 38 uyarınca mahkeme hükmü gücündedir.',
        hallmark: 'Belgenin icra dairesinde doğrudan ilamlı takibe konulabilmesi için her iki tarafın ve her iki tarafın hukukçularının ıslak imzasını birlikte taşıması şarttır; tek tarafın vekiliyle imzalanan belge bu gücü kazanmaz.',
        vignette: 'Kira alacağı uyuşmazlığında dava açılmadan bir araya gelen kiracı, mal sahibi ve her ikisinin baroya kayıtlı temsilcileri borcun taksitlerle ödenmesini öngören bir belgeyi dörtlü olarak imzalamıştır.',
        clues: ['Dava öncesi veya duruşma başlamadan önce', 'Tarafların serbestçe tasarruf edebileceği konular', 'Dörtlü imzayla İİK m. 38 ilam gücü'],
        remedy: 'Kiracı taksiti ödemezse mal sahibi yeni bir dava açmaya veya itiraz riskine girmeye gerek kalmaksızın doğrudan ilamlı icra takibi başlatabilir.',
        pearl: '1136 m.35/A: Dava açılmadan veya duruşma başlamadan taraflar + avukatlarınca birlikte imzalanan uzlaşma tutanağı İİK m.38 anlamında İLAM NİTELİĞİNDEDİR!',
        trapFalse: 'yargılamanın karar aşamasında dahi düzenlenebilir ve yalnızca tarafların imzasıyla icra dairesinde ilamlı takibe konulabilir',
        trapHighlight: 'karar aşamasında dahi düzenlenebilir ve yalnızca tarafların imzasıyla'
      },
      {
        name: 'Dosya İnceleme ve Örnek',
        article: '1136 s. AvK m. 46',
        rule: 'Meslek mensubu veya stajyeri, henüz yetki belgesi sunulmamış olsa dahi yargı ve icra evrakını kalemde serbestçe görebilir; ancak evraktan fotokopi veya suret alınabilmesi için mutlaka vekaletname ibraz edilmesi şarttır.',
        hallmark: 'Kısıtlama veya gizlilik kararı bulunmayan tüm dava ve takip klasörleri meslek kimliği gösterilerek okunabilir; kalem personeli yetki belgesi yok diye bakma talebini reddedemez.',
        vignette: 'Kendisine yeni başvuran bir şüphelinin icra klasöründeki borç miktarını öğrenmek isteyen hukukçu, henüz noter belgesi almadan kaleme gidip evraka bakmak ve ödeme emrinin fotokopisini almak istemiştir.',
        clues: ['Yetki belgesi olmadan evrak görme serbestisi', 'Fotokopi ve suret için vekaletname şartı', 'Stajyerin de evrak görebilmesi'],
        remedy: 'Kalem memuru hukukçunun klasörü okuyup not almasına izin vermek zorundadır; fakat vekaletname sunulmadığı sürece evraktan suret veremez.',
        pearl: '1136 m.46: Avukat ve stajyer vekaletname OLMADAN dosya inceleyebilir; ancak dosyadan ÖRNEK (fotokopi) alabilmesi için VEKALETNAME ŞARTTIR!',
        trapFalse: 'noter yetki belgesi ibraz edilmedikçe hiçbir yargı veya icra dosyasına bakılamaz ve yetki belgesi olmadan da suret alınabilir',
        trapHighlight: 'noter yetki belgesi ibraz edilmedikçe hiçbir yargı veya icra dosyasına bakılamaz'
      },
      {
        name: 'Vekaletname Onayı (m. 56)',
        article: '1136 s. AvK m. 56',
        rule: 'Usulünce düzenlenmiş ve aslı kendi elinde bulunan yetki belgesinin suretini çıkarıp aslına uygunluğunu imzasıyla tasdik eden meslek mensubunun bu işlemi tüm yargı mercileri ve resmi daireler için geçerlidir; ayrıca karşı tarafın temsilcisine makbuz karşılığı doğrudan tebligat yapabilir.',
        hallmark: 'Aslı elinde olmayan bir belgenin suretini tasdik eden veya aslına aykırı suret düzenleyen hukukçu hakkında bir yıldan üç yıla kadar hapis cezası öngörülmüştür.',
        vignette: 'Müvekkilinden aldığı noter yetki belgesinin aslı bürosunda bulunan hukukçu, yeni açtığı beş ayrı icra takibi için notere yeniden masraf yapmadan suretleri kendisi "aslı gibidir" diyerek imzalayıp sunmuştur.',
        clues: ['Aslı yanında bulunan belgeden suret çıkarma', 'İmza ile tüm resmi dairelerde geçerli tasdik', 'Karşı taraf temsilcisine makbuzla tebligat'],
        remedy: 'İcra müdürlükleri ve mahkemeler bu tasdikli suretleri noter mührü aramaksızın kabul etmek zorundadır; yalnızca harç ve baro pulu tamamlanmalıdır.',
        pearl: '1136 m.56: Aslı yanında olan vekaletnamenin örneğini avukat bizzat "aslı gibidir" diye onaylayabilir; aslı olmayanı onaylamak 1–3 yıl hapis suçudur!',
        trapFalse: 'her yeni dava ve icra takibi için mutlaka noterden yeni tasdikli suret alınması şarttır ve meslek mensubu aslı gibidir onayı yapamaz',
        trapHighlight: 'mutlaka noterden yeni tasdikli suret alınması şarttır ve meslek mensubu aslı gibidir onayı yapamaz'
      },
      {
        name: 'Büro Araması ve Koruma',
        article: '1136 s. AvK m. 57, m. 58 & 5271 s. CMK m. 130',
        rule: 'Görev sırasında veya görevinden dolayı meslek mensubuna karşı işlenen suçlarda yargıçlara karşı işlenen suç hükümleri uygulanır; yazıhanesi ve konutu ancak mahkeme kararıyla, kararda belirtilen olayla sınırlı olarak Cumhuriyet savcısı denetiminde ve baro temsilcisinin katılımıyla denetlenebilir.',
        hallmark: 'Ağır ceza mahkemesinin görev alanına giren suçüstü hali bulunmadıkça meslek mensubunun üzeri dahi yoklanamaz; işlem sırasında mesleki sır itirazı yapılırsa belgeler mühürlenip hakim veya mahkeme kararına sunulur.',
        vignette: 'Bir icra dairesinde haciz işlemi yürüten hukukçuya borçlu tarafından hakaret edilip saldırılmış; ayrıca başka bir dosyada polis memurları savcı ve baro temsilcisi olmaksızın hukukçunun yazıhanesine baskın yapmıştır.',
        clues: ['Görev suçlarında yargıca karşı işlenmiş sayılma', 'Mahkeme kararı, savcı denetimi ve baro temsilcisi', 'Ağır ceza suçüstü hali dışında üst yoklama yasağı'],
        remedy: 'Saldırgan borçlu yargıca karşı suç işlemiş gibi ağır yaptırımla yargılanır; savcı ve baro temsilcisi olmadan yapılan yazıhane baskını ise kesin hukuka aykırıdır.',
        pearl: '1136 m.57-58 & CMK m.130: Avukata görev nedeniyle işlenen suç HAKİME işlenmiş sayılır; büro/konut araması = Mahkeme kararı + Savcı + Baro temsilcisi; ağır ceza suçüstü hariç üstü ARANAMAZ!',
        trapFalse: 'gecikmesinde sakınca bulunan hallerde kolluk amirinin yazılı emriyle ve baro temsilcisi çağrılmadan yazıhanede arama yapılabilir',
        trapHighlight: 'kolluk amirinin yazılı emriyle ve baro temsilcisi çağrılmadan yazıhanede arama yapılabilir'
      }
    ]
  },
  {
    branchId: 'avukatlik',
    subTopic: 'Avukatın Özen, Sır Saklama, Çıkar Çatışması, Reklam ve Çekilme Ödevleri',
    exams: ['HMGS'],
    difficulty: 'Olay / Vaka',
    examFrequency: 'Kritik Kanun Maddesi',
    entities: [
      {
        name: 'Özen Borcu ve Tazminat',
        article: '1136 s. AvK m. 34, m. 40',
        rule: 'Yüklenilen görevler kutsallığına yaraşır biçimde doğruluk, onur ve dikkatle ifa edilmelidir; iş sahibinin mesleki ihmal nedeniyle açacağı zarar giderim davası hakkı, zararı ve sorumluyu öğrenmeden itibaren bir yıl ve her halde olaydan itibaren beş yıl geçmekle düşer.',
        hallmark: 'Genel borçlar hukukundaki iki ve on yıllık haksız fiil veya beş-on yıllık vekalet sürelerinden farklı olarak burada özel bir bir yıllık ve beş yıllık hak düşürücü düzenleme vardır.',
        vignette: 'İstinaf süresini ihmal ederek kaçıran ve müvekkilinin büyük mali zarara uğramasına yol açan vekile karşı, durumu öğrendiği tarihten on beş ay sonra zarar giderim davası açılmıştır.',
        clues: ['Mesleki ihmalden doğan sorumluluk', 'Öğrenmeden itibaren bir yıllık özel süre', 'Her halde olaydan itibaren beş yıllık tavan'],
        remedy: 'Zararı ve sorumluyu öğrendiği günden itibaren bir yıllık özel süre geçirildiği için iş sahibinin zarar giderim talebi süre aşımı nedeniyle reddedilir.',
        pearl: '1136 m.40 (ALTIN TUZAK!): Müvekkilin avukata karşı açacağı tazminat davası öğrenmeden 1 YIL, her halde 5 YIL geçmekle düşer (TBK 2/10 yıl değildir!).',
        trapFalse: 'iş sahibinin mesleki ihmal nedeniyle açacağı zarar giderim davası genel vekalet kuralları uyarınca öğrenmeden iki yıl ve her halde on yılda zamanaşımına uğrar',
        trapHighlight: 'öğrenmeden iki yıl ve her halde on yılda zamanaşımına uğrar'
      },
      {
        name: 'Sır Saklama ve Tanıklık',
        article: '1136 s. AvK m. 36',
        rule: 'Görevleri dolayısıyla öğrendikleri mahrem hususları kesinlikle açıklayamazlar; bu konularda beyan verebilmeleri iş sahibinin açık onayını almış olmalarına bağlıdır ancak iş sahibi onay verse dahi meslek mensubu beyanda bulunmaktan geri durabilir.',
        hallmark: 'Müvekkil rızası bulunduğu halde mahkemede beyan vermekten geri duran meslek mensubu hakkında bu tercihinden dolayı hiçbir hukuki veya cezai sorumluluk doğmaz.',
        vignette: 'Ceza yargılamasında sanık, eski temsilcisinin kendisinin anlattığı gizli hususlarda mahkemede şahitlik yapmasına yazılı rıza göstermiş; ancak eski temsilci mesleki prensipleri gereği konuşmak istemediğini bildirmiştir.',
        clues: ['Mesleki gizliliğin süresiz korunması', 'Müvekkil onayına rağmen susma yetkisi', 'Çekinme nedeniyle hukuki-cezai sorumsuzluk'],
        remedy: 'Mahkeme, sanığın rızası bulunsa dahi eski temsilciyi konuşmaya zorlayamaz ve disiplin hapsi ya da tazminat yaptırımı uygulayamaz.',
        pearl: '1136 m.36: Müvekkil muvafakat verse DAHİ avukat tanıklıktan çekinebilir ve bu çekinme hukuki/cezai hiçbir sorumluluk doğurmaz!',
        trapFalse: 'iş sahibi yazılı onay verdiği takdirde meslek mensubu mahkemede tanıklık yapmak zorundadır ve susması halinde tazminat sorumluluğu doğar',
        trapHighlight: 'meslek mensubu mahkemede tanıklık yapmak zorundadır ve susması halinde tazminat'
      },
      {
        name: 'İşin Reddi Zorunluluğu',
        article: '1136 s. AvK m. 38',
        rule: 'Aynı uyuşmazlıkta zıt taraftaki kişiye daha önce temsilcilik veya hukuki görüş vermişse, o dosyada evvelce yargıç, savcı, hakem, bilirkişi ya da memur olarak görev yapmışsa yahut bizzat düzenlediği bir sözleşmenin geçersizliğini savunması gerekiyorsa teklifi kabul etmemesi mecburidir.',
        hallmark: 'Bu kesin yasak yalnızca şahsı değil, aynı mesleki ortaklık çatısı altında birlikte çalışan diğer ortakları ve yanında çalışan bağlı meslek mensuplarını da kapsar.',
        vignette: 'İki yıl önce bir boşanma davasında kocaya hukuki görüş verip danışmanlık ücreti alan bir hukukçunun aynı ortaklıktaki diğer ortağı, şimdi aynı davada kadının vekilliğini üstlenmek istemektedir.',
        clues: ['Aynı uyuşmazlıkta karşı tarafa danışmanlık verilmiş olması', 'Eski yargıç-savcı-bilirkişi sıfatı yasağı', 'Ortaklıktaki tüm diğer ortakları da bağlaması'],
        remedy: 'Teklifin kabulü kesin biçimde yasak olduğundan ortaklıktaki diğer hukukçu da vekaleti geri çevirmek mecburiyetindedir; aksi halde ağır disiplin cezası ve görevi kötüye kullanma suçu doğar.',
        pearl: '1136 m.38: Karşı tarafa mütalaa verme, eski hakim/savcı/bilirkişi olma ve kendi düzenlediği senedin hükümsüzlüğünü savunma hallerinde İŞİN REDDİ ZORUNLUDUR (ortakları da bağlar!).',
        trapFalse: 'yalnızca aynı kişinin bizzat karşı tarafı temsil etmesini yasaklar, aynı ortaklıktaki diğer ortakların karşı tarafı almasına engel oluşturmaz',
        trapHighlight: 'aynı ortaklıktaki diğer ortakların karşı tarafı almasına engel oluşturmaz'
      },
      {
        name: 'Reklam Yasağı (m. 55)',
        article: '1136 s. AvK m. 55',
        rule: 'İş elde etmek amacıyla ticari tanıtım sayılabilecek her türlü girişim ve davranış kesinlikle engellenmiştir; tabelalarda, kartvizitlerde ve basılı kağıtlarda meslek unvanı ile akademik unvanlar dışında hiçbir sıfat kullanılamaz.',
        hallmark: 'İnternet sitelerinde, sosyal medyada veya tabelalarda "emekli yargıç", "vergi uzmanı", "boşanma uzmanı" yahut "yüzde yüz kazanma garantisi" gibi ifadeler kullanmak açık disiplin ihlalidir.',
        vignette: 'Yargıçlıktan emekli olup serbest büro açan bir hukukçu, büro tabelasına adının altına büyük harflerle "Emekli Ağır Ceza Hakimi - Ceza Hukuku Uzmanı" ibaresini yazdırmıştır.',
        clues: ['Ticari tanıtım ve müşteri çekme engeli', 'Yalnız meslek ve akademik unvanların kullanımı', 'Eski kamu görevi ve uzmanlık ibaresi engeli'],
        remedy: 'Baro yönetim kurulu tabeladaki eski görev ve uzmanlık ibarelerinin kaldırılmasını ister ve ihlal nedeniyle disiplin soruşturması başlatır.',
        pearl: '1136 m.55: Tabela ve basılı evrakta YALNIZCA "Avukat" unvanı ile akademik unvanlar (Dr., Doç. Dr., Prof. Dr.) kullanılabilir; "Emekli Hakim", "Uzman" YASAKTIR!',
        trapFalse: 'emekli yargıç ve savcılar önceki kamu görevlerini ve uzmanlaştıkları hukuk dallarını büro tabelalarında serbestçe belirtebilirler',
        trapHighlight: 'önceki kamu görevlerini ve uzmanlaştıkları hukuk dallarını büro tabelalarında serbestçe'
      },
      {
        name: 'Çekilmede On Beş Gün',
        article: '1136 s. AvK m. 41',
        rule: 'Üstlendiği bir yargılamayı veya savunmayı kendi isteğiyle bırakan meslek mensubunun o dosyadaki temsil görevi, istifa bildiriminin müvekkiline tebliğ edildiği tarihten itibaren on beş gün süreyle devam eder.',
        hallmark: 'Bu zorunlu geçiş dönemi müvekkilin yeni bir temsilci buluncaya kadar hak kaybına uğramasını önlemek içindir; ancak ceza muhakemesinde baroca görevlendirilen zorunlu müdafiler bu kurala değil özel usule tabidir.',
        vignette: 'Aradaki güven ilişkisinin sarsılması nedeniyle 1 Haziran’da dosyadan istifa dilekçesi sunan temsilcinin bildirimi müvekkiline 5 Haziran’da ulaşmış ve 12 Haziran’daki duruşma günü gelmiştir.',
        clues: ['İsteğe bağlı istifanın müvekkile tebliğ tarihi', 'Tebliğden itibaren on beş gün görevin sürmesi', 'Müvekkilin hak kaybını önleme amacı'],
        remedy: 'Tebliğ 5 Haziran’da yapıldığı için görev 20 Haziran’a kadar sürer; dolayısıyla 12 Haziran’daki oturuma katılmak veya müvekkilin haklarını korumak zorundadır.',
        pearl: '1136 m.41: İstifa (çekilme) halinde avukatın vekalet görevi, çekilmenin müvekkile TEBLİĞİNDEN itibaren 15 GÜN süreyle devam eder!',
        trapFalse: 'istifa dilekçesinin mahkeme kalemine sunulduğu an temsil görevi derhal sona erer ve müvekkile tebliğ tarihinden itibaren hiçbir sorumluluk kalmaz',
        trapHighlight: 'mahkeme kalemine sunulduğu an temsil görevi derhal sona erer'
      }
    ]
  },
  {
    branchId: 'avukatlik',
    subTopic: 'Avukatlık Ücreti, Yüzde Yirmi Beş Tavanı, Hapis ve Rüçhan Hakkı',
    exams: ['HMGS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Her Sınavda Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Ücrette Yüzde Yirmi Beş',
        article: '1136 s. AvK m. 164/2-4',
        rule: 'Dava veya hükmolunacak değerin yahut paranın dörtte birini aşmamak kaydıyla belli bir oranı bedel olarak kararlaştırılabilir; Asgari Tarifenin altında anlaşma yapılamaz ve bedelsiz dosya alınması halinde durum baro yönetim kuruluna bildirilir.',
        hallmark: 'Yasal oransal tavanı aşan anlaşma tamamen hükümsüz olmaz, aşan kısım yasal tavana çekilir; buna karşılık tarife altında belirlenen bedellerde tarife hükümleri uygulanır.',
        vignette: 'İki milyon liralık alacak davasında müvekkiliyle yazılı anlaşma yapan hukukçu, tahsil edilecek tutarın %35’inin kendisine ödenmesini kararlaştırmış ve ayrıca akrabasının davasını bedelsiz almayı planlamaktadır.',
        clues: ['Dava değerinin en fazla dörtte biri', 'Asgari tarifenin altında anlaşma yasağı', 'Bedelsiz işin baro yönetim kuruluna bildirilmesi'],
        remedy: 'Kararlaştırılan %35’lik oran yasal tavanı aştığından %25 sınırına indirilir; akrabasının davasını bedelsiz alabilmesi için de baro yönetim kuruluna bildirim yapması gerekir.',
        pearl: '1136 m.164: Nispi ücret tavanı %25’tir; tarife altı yasaktır; ücretsiz dava alınırsa BARO YÖNETİM KURULUNA bildirilmesi zorunludur!',
        trapFalse: 'tarafların özgür iradesiyle dava değerinin yüzde ellisine kadar oransal bedel kararlaştırılabilir ve ücretsiz işler için baroya bilgi verilmez',
        trapHighlight: 'dava değerinin yüzde ellisine kadar oransal bedel kararlaştırılabilir'
      },
      {
        name: 'Hasılı Davaya İştirak',
        article: '1136 s. AvK m. 164/3',
        rule: 'Yapılan bedel anlaşmaları, yargılamaya konu para dışındaki taşınır, taşınmaz veya diğer haklardan bir bölümünün doğrudan mülkiyetinin meslek mensubuna geçirileceği hükmünü taşıyamaz.',
        hallmark: 'Bu kesin yasak uyarınca taşınmazın yarısının mülkiyeti bedel olarak yazılamaz; ancak taşınmazın para değerinin yüzde yirmi beşini aşmayan nakdi karşılığı kararlaştırılabilir.',
        vignette: 'Bir miras paylaşımı dosyasında temsilci ile mirasçı, dosya kazanıldığı takdirde uyuşmazlık konusu iki daireden birinin tapusunun doğrudan temsilcinin adına tescil edileceğine dair yazılı sözleşme imzalamıştır.',
        clues: ['Para dışındaki mal ve hakların kapsamı', 'Doğrudan mülkiyet devri şartının geçersizliği', 'Değer üzerinden nakdi yüzde yirmi beş serbestisi'],
        remedy: 'Tapunun aynen devrine ilişkin şart kesin hükümsüzdür; sözleşme bedel bakımından geçersiz sayılır ve mahkemece kanuni yüzde on ile yüzde yirmi aralığında nakdi bedel takdir edilir.',
        pearl: '1136 m.164/3: Dava konusu para dışındaki mal ve hakların AYNEN avukata ait olacağı kararlaştırılamaz (hasılı davaya iştirak yasağı); sadece değerinin en çok %25’i para olarak istenebilir!',
        trapFalse: 'müvekkilin noter onayı varsa uyuşmazlık konusu taşınmazın tapusunun doğrudan vekile devredileceğine dair şart geçerlidir',
        trapHighlight: 'uyuşmazlık konusu taşınmazın tapusunun doğrudan vekile devredileceğine dair şart geçerlidir'
      },
      {
        name: 'Karşı Yan Vekalet Ücreti',
        article: '1136 s. AvK m. 164/son',
        rule: 'Yargılama sonucunda mahkeme hükmüyle tarifeye dayanılarak kaybeden tarafa yükletilen bedel doğrudan kazanan tarafın hukukçusuna aittir; bu tutar iş sahibinin kendi borçlarından dolayı takas, mahsup veya haciz edilemez.',
        hallmark: 'Kural olarak meslek mensubu ile iş sahibi arasındaki akdi bedelden tamamen ayrı bir haktır; aksi sözleşmede açıkça kararlaştırılmadıkça hükmedilen bu tutar doğrudan meslek mensubunun şahsi malvarlığına girer.',
        vignette: 'Kazandığı tazminat davasında mahkemece davalıya yükletilen seksen bin liralık tarife bedeli icra dosyasına yatırılmış; ancak müvekkilin başka bir alacaklısı bu paraya haciz koydurmak istemiştir.',
        clues: ['Tarife gereği kaybedene yükletilen tutar', 'Doğrudan meslek mensubuna aidiyet ilkesi', 'Müvekkil borcu için takas ve haciz yasağı'],
        remedy: 'Bu tutar iş sahibinin değil meslek mensubunun hakkı olduğundan iş sahibinin borçları için haczedilemez ve takas edilemez; haciz şikayet yoluyla kaldırılır.',
        pearl: '1136 m.164/son: Mahkemece karşı tarafa yüklenen yasal vekalet ücreti AVUKATA AİTTİR; iş sahibinin borcu nedeniyle takas, mahsup ve HACZEDİLEMEZ!',
        trapFalse: 'yargılama sonunda karşı tarafa yükletilen bu tutar müvekkile aittir ve müvekkilin üçüncü kişilere olan borçları için serbestçe haczedilebilir',
        trapHighlight: 'müvekkile aittir ve müvekkilin üçüncü kişilere olan borçları için serbestçe haczedilebilir'
      },
      {
        name: 'Hapis ve Rüçhan Hakkı',
        article: '1136 s. AvK m. 166',
        rule: 'İş sahibi tarafından verilen veya onun adına tahsil edilen para, mal ve kıymetleri kendi alacağı ve masrafları ödeninceye kadar yalnız alacağı nispetinde alıkoyabilir; ayrıca emeğiyle kazandırdığı para ve mallar üzerinde diğer alacaklılara karşı öncelik sırasına sahiptir.',
        hallmark: 'Alıkoyma yetkisi mutlaka tahsil edilen paranın tamamı için değil, yalnızca ödenmemiş bedel ve gider tutarıyla sınırlı biçimde kullanılabilir ve durum derhal iş sahibine yazılı bildirilmelidir.',
        vignette: 'Müvekkili adına icradan beş yüz bin lira tahsil eden hukukçunun elli bin lira ödenmemiş sözleşme alacağı vardır; ayrıca müvekkilin başka bir icra alacaklısı tahsil edilen bu paraya öncelikle el koymak istemektedir.',
        clues: ['Yalnızca kendi alacağı oranında alıkoyma', 'Emeğiyle kazanılan varlıkta diğer alacaklılara öncelik', 'İş sahibine derhal yazılı bildirim ödevi'],
        remedy: 'Hukukçu beş yüz bin liranın tamamını değil yalnızca elli bin liralık kısmını alıkoyup kalanını hemen iade eder; bu elli bin lirada diğer alacaklılara karşı önceliği vardır.',
        pearl: '1136 m.166: Hapis hakkı sadece KENDİ ALACAĞI NİSPETİNDE kullanılır (tüm parayı tutmak suçtur!); kendi emeğiyle kazandırdığı para/mal üzerinde diğer alacaklılara karşı RÜÇHAN hakkı vardır.',
        trapFalse: 'alacağı ne kadar küçük olursa olsun müvekkil adına tahsil ettiği paranın tamamını borç kapanıncaya kadar süresiz olarak elinde tutabilir',
        trapHighlight: 'tahsil ettiği paranın tamamını borç kapanıncaya kadar süresiz olarak elinde tutabilir'
      },
      {
        name: 'Sulhte Müteselsil Borç',
        article: '1136 s. AvK m. 164/4, m. 165',
        rule: 'Taraflar yargılama sürerken aralarında anlaşıp dosyayı takipsiz bırakırlarsa her iki taraf da meslek mensubunun alacağından zincirleme sorumludur; yazılı bir anlaşma yapılmamış veya anlaşma geçersizse değeri parayla ölçülen işlerde dava değerinin yüzde onu ile yüzde yirmisi arası bir tutar takdir edilir.',
        hallmark: 'Müvekkil ile karşı tarafın temsilciyi devre dışı bırakarak arkadan gizlice anlaşması halinde meslek mensubu hem kendi müvekkilinden hem de karşı taraftan alacağının tamamını isteyebilir.',
        vignette: 'Yazılı bedel anlaşması olmadan yürüttüğü bir milyon liralık ticari davada, müvekkili ve davalı şirket vekile haber vermeden aralarında anlaşıp davadan feragat etmiştir.',
        clues: ['Gizli anlaşmada her iki tarafın zincirleme mesuliyeti', 'Yazılı anlaşma yoksa yüzde on ile yirmi aralığı', 'Asgari tarifenin altına inilememesi'],
        remedy: 'Hukukçu, asgari tarifeden az olmamak üzere dava değerinin yüzde onu ile yüzde yirmisi arasındaki tutarı hem müvekkilinden hem de davalı şirketten birlikte ve ayrı ayrı tahsil edebilir.',
        pearl: '1136 m.164/4 & m.165: Sulh/anlaşma halinde HER İKİ TARAF avukat ücretinden MÜTESELSİL borçludur! Yazılı sözleşme yoksa değerin %10–%20’si arası (tarifeden az olmamak üzere) hükmedilir.',
        trapFalse: 'taraflar aralarında anlaşıp davadan vazgeçerse yalnızca kendi müvekkili sorumludur ve yazılı sözleşme yoksa hiçbir bedel talep edilemez',
        trapHighlight: 'yalnızca kendi müvekkili sorumludur ve yazılı sözleşme yoksa hiçbir bedel talep edilemez'
      }
    ]
  },
  {
    branchId: 'avukatlik',
    subTopic: 'Baro ve TBB Organları, Seçim Süreleri ve Avukatlık Ortaklığı',
    exams: ['HMGS'],
    difficulty: 'Temel Mevzuat',
    examFrequency: 'Kritik Kanun Maddesi',
    entities: [
      {
        name: 'Çoklu Baro Eşiği (m. 77)',
        article: '1136 s. AvK m. 77 (7249 s. K. değ.)',
        rule: 'Bölgesi içinde en az otuz meslek mensubu bulunan her il merkezinde bir meslek örgütü açılır; beş binden fazla meslek mensubunun bulunduğu büyük illerde ise asgari iki bin meslek mensubunun imzasıyla aynı ilde yeni bir meslek örgütü daha açılabilir.',
        hallmark: 'Otuzdan az meslek mensubu bulunan iller en yakın ildeki kuruluşa bağlanır; birden fazla örgüt açılan illerde her örgüt il adının yanına açılış sırasına göre numara eklenerek adlandırılır.',
        vignette: 'Altı bin beş yüz kayıtlı hukukçunun bulunduğu bir büyükşehirde, iki bin yüz hukukçu bir araya gelerek aynı il sınırları içinde ikinci bir meslek örgütü açmak için Birliğe başvurmuştur.',
        clues: ['İl merkezinde açılış için otuz üye tabanı', 'Beş binden fazla üyeli ilde birden fazla örgüt olanağı', 'Yeni örgüt için en az iki bin üye şartı'],
        remedy: 'Hem beş bin üstü il koşulu hem de asgari iki bin kurucu koşulu sağlandığından yeni meslek örgütünün tüzel kişilik kazanması hukuka uygundur.',
        pearl: '1136 m.77 (7249 s.K.): Normal ilde en az 30 avukatla baro kurulur; >5.000 avukatlı illerde en az 2.000 avukatla YENİ BARO kurulabilir!',
        trapFalse: 'her ilde kuruluş için en az yüz üye aranır ve beş binin üzerinde üyesi olan illerde beş yüz üye ile yeni kuruluş açılabilir',
        trapHighlight: 'en az yüz üye aranır ve beş binin üzerinde üyesi olan illerde beş yüz üye ile'
      },
      {
        name: 'Baro Genel Kurulu (2 Yıl)',
        article: '1136 s. AvK m. 82, m. 90, m. 96',
        rule: 'İl meslek örgütünün en yüksek karar organı, son rakamı çift olan yıllarda yani iki yılda bir Ekim ayının ilk haftası içinde toplanır; başkan, yönetim, disiplin ve denetleme organları iki senelik dönem için seçilir.',
        hallmark: 'Üye sayısı yüzden fazla olan illerde başkan seçilebilmek için meslekte en az on sene, yönetim organı üyeliği için ise en az beş sene kıdem şartı aranır; yüzden az üyeli yerlerde kıdem koşulu aranmaz.',
        vignette: 'Beş yüz üyeli bir il meslek örgütünde Ekim ayının ilk haftasında yapılan olağan seçimde, meslekte yedi senelik kıdemi bulunan bir hukukçu başkanlığa, altı senelik kıdemli arkadaşı ise yönetim organına aday olmuştur.',
        clues: ['İki yılda bir Ekim ayının ilk haftası toplantı', 'Organların iki senelik görev süresi', 'Başkanlıkta on sene, yönetim organında beş sene kıdem'],
        remedy: 'Yedi senelik kıdemli aday başkanlık için aranan on senelik kıdemi taşımadığından seçilemez; altı senelik kıdemli arkadaşı ise beş sene koşulunu sağladığı için yönetim organına seçilebilir.',
        pearl: 'Baro Genel Kurulu: 2 yılda bir EKİM ayının ilk haftası; görev süresi 2 YIL! Kıdem şartı (>100 üyeli baroda): Başkan = 10 yıl, Yönetim Kurulu = 5 yıl.',
        trapFalse: 'dört yılda bir Mayıs ayında toplanır ve başkan seçilebilmek için meslekte en az üç yıl kıdem bulunması yeterlidir',
        trapHighlight: 'dört yılda bir Mayıs ayında toplanır ve başkan seçilebilmek için meslekte en az üç yıl'
      },
      {
        name: 'TBB Genel Kurulu (4 Yıl)',
        article: '1136 s. AvK m. 114-121 (7249 s. K. değ.)',
        rule: 'Tüm il meslek örgütlerinin çatı örgütünün en yüksek karar organı dört yılda bir Mayıs ayında olağan olarak toplanır; çatı örgütün başkanı, yönetim, disiplin ve denetleme organları dört senelik dönem için seçilir.',
        hallmark: 'İl barolarının başkanları bu üst meclisin doğal üyesidir; ayrıca 2020 değişikliği uyarınca her il örgütü üç delege ve her beş bin üye için bir ek delege seçerek gönderir.',
        vignette: 'Üst meslek örgütünün Ankara’da yapılacak olağan toplantısının hangi ayda ve kaç yılda bir düzenleneceği ile il baro başkanlarının ayrıca delege seçilmesine gerek olup olmadığı sorulmaktadır.',
        clues: ['Dört yılda bir Mayıs ayında olağan toplantı', 'Tüm üst organlar için dört senelik seçim dönemi', 'İl baro başkanlarının doğal üye sıfatı'],
        remedy: 'Toplantı dört yılda bir Mayıs ayında yapılır; il baro başkanları ayrıca delege seçilmeye gerek kalmaksızın kanunen doğal üye olarak katılıp oy kullanırlar.',
        pearl: 'TBB Genel Kurulu: 4 yılda bir MAYIS ayında! Organların görev süresi 4 YIL; baro başkanları doğal üyedir (+ her baro 3 delege + her 5.000 avukat için 1 ek delege).',
        trapFalse: 'iki yılda bir Ekim ayında toplanır, organlar iki yıllığına seçilir ve il baro başkanları delege seçilmedikçe toplantıya katılamaz',
        trapHighlight: 'iki yılda bir Ekim ayında toplanır, organlar iki yıllığına seçilir'
      },
      {
        name: 'Avukatlık Ortaklığı',
        article: '1136 s. AvK m. 44/B',
        rule: 'Aynı il örgütüne kayıtlı birden çok meslek mensubunun mesleklerini yürütmek için tip ana sözleşmeyle kurdukları ve ilgili baro siciline tescille ayrı tüzel kişilik kazanan yapıdır; ticari şirket sayılmaz ve kurucu üyeler mesleki borçlardan müteselsilen sorumludur.',
        hallmark: 'Ticaret siciline değil, baro yönetim kurulunca tutulan özel sicile tescil edilir; kurucu üyelerden biri bile başka bir ilin barosuna kayıtlı olamaz ve bu yapı meslek dışında hiçbir ticari faaliyette bulunamaz.',
        vignette: 'Aynı baroya kayıtlı dört hukukçu, tip ana sözleşmeyi hazırlayıp baro siciline tescil ettirerek yeni bir mesleki yapı kurmuş; kurucu üyelerden birinin mesleki hatasından doğan zararda diğer üç üye sorumlu olmadıklarını ileri sürmüştür.',
        clues: ['Baro siciline tescille ayrı tüzel kişilik', 'Ticari şirket niteliği taşımaması', 'Kurucu üyelerin mesleki borçlardan müteselsil mesuliyeti'],
        remedy: 'Mesleki çalışma ve görevlerden doğan zararlarda tüm kurucu üyeler ve tüzel yapı birlikte müteselsilen sorumlu olduğundan diğer üç hukukçu sorumluluktan kurtulamaz.',
        pearl: '1136 m.44/B Avukatlık Ortaklığı: Aynı baroya kayıtlı avukatlar kurar, BARO SİCİLİNE tescille TÜZEL KİŞİLİK kazanır, ticari sayılmaz, ortaklar MÜTESELSİL sorumludur!',
        trapFalse: 'ticaret siciline tescil edilerek anonim şirket hükümlerine tabi olur ve ortakların mesleki zararlardan şahsi sorumluluğu bulunmaz',
        trapHighlight: 'ticaret siciline tescil edilerek anonim şirket hükümlerine tabi olur'
      },
      {
        name: 'Büro Açma ve Birlikte İfa',
        article: '1136 s. AvK m. 43, m. 44/A',
        rule: 'Levhaya yazılan her serbest meslek mensubu, kayıt tarihinden itibaren üç ay içinde kayıtlı olduğu il çevresinde tek bir çalışma mekanı kurmak zorundadır; birden çok hukukçunun giderleri paylaşarak aynı mekanda faaliyet göstermesi ayrı bir tüzel kişilik doğurmaz.',
        hallmark: 'Bir hukukçunun aynı anda birden fazla şube veya ikinci bir çalışma mekanı edinmesi yasaktır; aynı mekanda faaliyet gösterenlerin her biri kendi müvekkiline karşı bireysel olarak sorumludur.',
        vignette: 'Levhaya kaydolduktan iki ay sonra iki meslektaşıyla aynı dairede kirayı paylaşarak mesleğini yürütmeye başlayan hukukçu, ayrıca başka bir ilçede ikinci bir şube mekanı daha edinmek istemektedir.',
        clues: ['Levhaya kayıttan itibaren üç ayda mekan edinme', 'Aynı anda birden fazla mekan açma yasağı', 'Ortak mekanda tüzel kişilik oluşmaması'],
        remedy: 'Üç ay içinde ortak mekan edinmesi hukuka uygundur ve ayrı tüzel kişilik doğmaz; ancak ikinci bir şube mekanı edinmesi açık yasal yasak nedeniyle mümkün değildir.',
        pearl: '1136 m.43 & m.44/A: Levhaya yazımdan itibaren 3 AY içinde tek büro açma zorunluluğu vardır (şube YASAK!); Avukatlık Bürosunun (44/A) TÜZEL KİŞİLİĞİ YOKTUR (Ortaklıktan farkı!).',
        trapFalse: 'levhaya yazıldıktan itibaren bir yıl içinde dilediği kadar ilde şube açabilir ve ortak mekan kullanımı kendiliğinden tüzel kişilik kazandırır',
        trapHighlight: 'dilediği kadar ilde şube açabilir ve ortak mekan kullanımı kendiliğinden tüzel kişilik kazandırır'
      }
    ]
  },
  {
    branchId: 'avukatlik',
    subTopic: 'Disiplin Cezaları, Görev Suçu Usulü ve 1512 Sayılı Noterlik Hukuku',
    exams: ['HMGS'],
    difficulty: 'İleri Ayırıcı',
    examFrequency: 'Yüksek Verimli Olay',
    entities: [
      {
        name: 'Mesleki Disiplin Cezaları',
        article: '1136 s. AvK m. 135, m. 157',
        rule: 'Kuralları ihlal eden baro üyelerine ağırlık sırasına göre uyarma, kınama, para yaptırımı, üç aydan az ve üç yıldan çok olmamak üzere geçici işten yasaklama ile ruhsatın geri alınıp kaydın kalıcı silinmesi yaptırımları verilir; bu kararlara karşı otuz gün içinde Birlik üst organına gidilebilir.',
        hallmark: 'En ağır iki yaptırım olan geçici yasaklama ile kalıcı silme kararları ayrıca Adalet Bakanlığının onayına sunulur; bakanlık geri gönderirse Birlik üçte iki çoğunlukla ısrar edebilir.',
        vignette: 'Baro organınca reklam ihlali nedeniyle kınama yaptırımı verilen ve tebliği alan hukukçu, yirmi beşinci günde Türkiye Barolar Birliğinin yetkili üst organına itiraz dilekçesi vermiştir.',
        clues: ['Uyarma, kınama, para, üç ay-üç yıl geçici ve kalıcı silme', 'Tebliğden itibaren otuz günde TBB üst organı', 'Ağır iki yaptırımda Adalet Bakanlığı denetimi'],
        remedy: 'Otuz günlük yasal süre içinde yapılan başvuru süresindedir; Birlik üst organı inceleme yaparak kararı onayabilir, kaldırabilir veya değiştirebilir.',
        pearl: '1136 m.135: 5 disiplin cezası = Uyarma, Kınama, Para, İşten çıkarma (3 ay–3 yıl), Meslekten çıkarma. İtiraz süresi: 30 gün (TBB Disiplin Kuruluna)!',
        trapFalse: 'geçici yasaklama yaptırımı en fazla altı ay süreyle uygulanır ve tüm kararlara karşı yedi gün içinde sulh ceza hakimliğine itiraz edilir',
        trapHighlight: 'en fazla altı ay süreyle uygulanır ve tüm kararlara karşı yedi gün içinde sulh ceza hakimliğine'
      },
      {
        name: 'Disiplin Zamanaşımı',
        article: '1136 s. AvK m. 159',
        rule: 'Yaptırım gerektiren eylemin işlenmesinden itibaren üç yıl geçmişse işlem başlatılamaz ancak yönetim kurulu işe el koymuşsa bu süre işlemez; her halükarda eylemin işlenmesinden itibaren dört buçuk yıl geçmişse artık hiçbir yaptırım verilemez.',
        hallmark: 'Söz konusu eylem aynı anda ceza kanununa göre suç oluşturuyor ve o suç için daha uzun bir ceza süresi öngörülmüşse, mesleki yaptırımda da o daha uzun süre uygulanır.',
        vignette: 'Suç niteliği taşımayan bir meslek kuralı ihlali 2020 yılının Ocak ayında işlenmiş, baro yönetim kurulu 2022’de soruşturma başlatmış ancak yetkili kurul kararını ancak 2024 yılının Kasım ayında verebilmiştir.',
        clues: ['Eylemden itibaren üç yılda işlem başlatma', 'Her halde dört buçuk yıllık kesin ceza tavanı', 'Suç teşkil eden fiilde ceza süresinin uygulanması'],
        remedy: 'Eylemden karar tarihine kadar dört yıl on ay geçtiği için dört buçuk yıllık kesin tavan aşılmıştır ve bu nedenle mesleki yaptırım verilmesi hukuken imkansızdır.',
        pearl: '1136 m.159: Disiplin kovuşturması zamanaşımı 3 YIL, ceza verme zamanaşımı her halde 4,5 YILDIR! (Eylem suçsa daha uzun ceza zamanaşımı uygulanır.)',
        trapFalse: 'eylemin işlenmesinden itibaren bir yıl içinde işlem yapılmazsa düşer ve her halde iki yılın sonunda yaptırım verme yetkisi biter',
        trapHighlight: 'bir yıl içinde işlem yapılmazsa düşer ve her halde iki yılın sonunda yaptırım verme yetkisi biter'
      },
      {
        name: 'Görev Suçunda İzin',
        article: '1136 s. AvK m. 58, m. 59',
        rule: 'Mesleki faaliyetten doğan veya ifa sırasında işlenen ceza ihlallerinde soruşturma Adalet Bakanlığının vereceği onayla olay yeri Cumhuriyet savcısınca yapılır; son soruşturmanın açılmasına en yakın Ağır Ceza Mahkemesi karar verir ve yargılama olay yeri Ağır Ceza Mahkemesinde görülür.',
        hallmark: 'Ağır ceza mahkemesinin yetki alanına giren suçüstü hallerinde bu özel koruma kalkanı uygulanmaz ve doğrudan genel ceza muhakemesi kuralları işletilir.',
        vignette: 'Müvekkilinin icra parasını mal edinerek vekaletini kötüye kullandığı iddia edilen hukukçu hakkında savcı, Adalet Bakanlığından onay istemeden doğrudan Asliye Ceza Mahkemesine iddianame düzenlemiştir.',
        clues: ['Adalet Bakanlığının soruşturma onayı şartı', 'En yakın Ağır Ceza Mahkemesinin son soruşturma kararı', 'Yargılamanın olay yeri Ağır Ceza Mahkemesinde yapılması'],
        remedy: 'Bakanlık onayı alınmadan ve iki aşamalı özel kovuşturma usulü işletilmeden Asliye Ceza Mahkemesine açılan kamu davasında durma kararı verilerek usul eksikliği giderilir.',
        pearl: '1136 m.58-59 (KRİTİK USUL!): Görev suçunda: 1) Adalet Bakanlığı izni + Olay yeri Savcısı -> 2) En yakın Ağır Ceza Mahkemesi (son soruşturma kararı) -> 3) Olay yeri Ağır Ceza Mahkemesi (yargılama)!',
        trapFalse: 'soruşturma için baro başkanının izni yeterlidir ve yargılama daima olay yerindeki Asliye Ceza Mahkemesinde yapılır',
        trapHighlight: 'baro başkanının izni yeterlidir ve yargılama daima olay yerindeki Asliye Ceza Mahkemesinde'
      },
      {
        name: 'Noterin Kusursuz Mesuliyeti',
        article: '1512 s. Noterlik K. m. 1, m. 7, m. 162',
        rule: 'Hukuki güvenliği sağlamak ve anlaşmazlıkları önlemek için işlemleri belgelendiren bir kamu hizmetidir; atamalar Adalet Bakanlığınca yapılır, yaş sınırı altmış beştir ve daire sahibi, stajyer ile katiplerin hatalarından dahi ihmal veya kastı bulunmasa bile tazminatla yükümlüdür.',
        hallmark: 'Staj süresi bir yıldır ancak hukuk fakültesi mezunu yargıç, savcı ve avukatlar bu stajdan muaf tutulur; daire sahibi ödediği zarar için hatalı katibine sonradan rücu edebilir.',
        vignette: 'Bir başkatibin sahte kimliği fark etmeden düzenlediği araç satış işlemi nedeniyle alıcı büyük mali zarara uğramış; daire sahibi kendisinin o gün izinde olduğunu ve hiçbir ihmalinin bulunmadığını savunmuştur.',
        clues: ['Adalet Bakanlığı ataması ve altmış beş yaş haddi', 'Bir yıllık staj ve hakim-avukat muafiyeti', 'Personelin eylemlerinden dahi objektif tazminat yükü'],
        remedy: 'Daire sahibi o gün izinde olsa ve şahsi ihmali bulunmasa bile kanunun öngördüğü objektif yükümlülük nedeniyle alıcının zararını tamamen öder, ardından hatalı başkatibe rücu eder.',
        pearl: '1512 m.162: Noterler bir işin yapılmamasından veya hatalı/eksik yapılmasından doğan zararlardan (stajyer ve katiplerin fiilleri dahil!) KUSURSUZ SORUMLUDUR! Yaş haddi 65’tir.',
        trapFalse: 'daire sahibi yalnızca kendi ağır kastı ispatlandığında sorumlu tutulur ve katiplerin hatalarından dolayı hiçbir tazminat ödemez',
        trapHighlight: 'yalnızca kendi ağır kastı ispatlandığında sorumlu tutulur ve katiplerin hatalarından dolayı'
      },
      {
        name: 'Düzenleme ve Onaylama',
        article: '1512 s. Noterlik K. m. 82, m. 84, m. 90',
        rule: 'İlk türde hukuki metin baştan sona tutanak biçiminde bizzat görevlice kaleme alınıp okutulur ve sahteliği ispatlanıncaya dek kesin delil gücü taşır; ikinci türde ise dışarıda hazırlanmış kağıdın altındaki imzanın o kişiye ait olduğu ve tarih teyit edilir.',
        hallmark: 'Taşınmaz satış vaadi, resmi vasiyetname ve ölünceye kadar bakma sözleşmesi mutlaka bizzat tutanak biçiminde yapılmalıdır; dışarıdan getirilen kağıdın tasdikinde ise içerik değil yalnızca imza ve tarih kanıtlanır.',
        vignette: 'Taraflar kendi aralarında bilgisayarda yazıp getirdikleri taşınmaz satış vaadi sözleşmesinin altındaki imzaları tasdik ettirmiş ve satıcı sonradan sözleşmenin şekle aykırı olduğu için geçersiz olduğunu ileri sürmüştür.',
        clues: ['Bizzat tutanak yazımı ile sahteliğe dek kesin delil', 'İmza ve tarih tasdikinin içeriği kapsamaması', 'Taşınmaz satış vaadinde tutanak zorunluluğu'],
        remedy: 'Taşınmaz satış vaadi kanunen mutlaka tutanak biçiminde yapılmak zorunda olduğundan sadece imza tasdikiyle yapılan metin kesin hükümsüzdür.',
        pearl: '1512 m.82-90: Taşınmaz satış vaadi, resmi vasiyetname ve ölünceye kadar bakma DÜZENLEME şeklinde (kesin delil) yapılır; ONAYLAMA sadece imza ve tarihi teyit eder!',
        trapFalse: 'taşınmaz satış vaadi sözleşmesi taraflarca dışarıda yazılıp yalnızca imza tasdiki yaptırıldığında geçerli ve kesin delil niteliği kazanır',
        trapHighlight: 'dışarıda yazılıp yalnızca imza tasdiki yaptırıldığında geçerli ve kesin delil niteliği kazanır'
      }
    ]
  }
];
