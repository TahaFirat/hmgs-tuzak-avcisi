import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 11 (30 Kural = 90 Yeni Doğrulanmış Kart)
 * Avukatlık Hukuku, Vergi Hukuku, Anayasa Hukuku, İdare Hukuku, İYUK, İş Hukuku,
 * MÖHUK ve Hukuk Felsefesi/Sosyolojisi alanlarında daha önce kapsanmamış kanun hükümleri.
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART11_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. AVUKATLIK HUKUKU (1136 SAYILI AVUKATLIK KANUNU)
  // =========================================================================
  {
    id: 'rule-avk-kabul-engelleri-hapis-siniri-p11',
    branch: 'Avukatlık',
    subTopic: 'Avukatlığa Kabul Engelleri ve Mahkûmiyet Sınırı',
    articleRef: '1136 s.K. M. 5/1-a',
    trueStatement:
      'Kasten işlenen bir suçtan dolayı iki yıldan fazla süreyle hapis cezasına ya da Devletin güvenliğine, anayasal düzene, zimmet, irtikâp, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, inancı kötüye kullanma ve hileli iflas suçlarından mahkûm olanlar avukatlık mesleğine kabul edilmezler.',
    trueHighlight: ['Kasten işlenen bir suçtan dolayı iki yıldan fazla süreyle hapis cezasına', 'avukatlık mesleğine kabul edilmezler'],
    trueCorrectPhrase: 'Kasten işlenen suçtan 2 yıldan fazla hapis veya katalog suç mahkûmiyeti avukatlığa engeldir.',
    baseExplanation: '1136 s.K. m. 5/1-a: Taksirli suçlar hariç, kasten işlenen bir suçtan dolayı 2 yıldan fazla süreyle hapis cezasına veya sayılan yüz kızartıcı/devlete karşı suçlardan (süresine bakılmaksızın) kesinleşmiş mahkûmiyeti bulunanlar avukatlığa kabul edilmez.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Kasten işlenen bir suçtan dolayı iki yıldan fazla süreyle hapis cezasına',
      wrongPhrase: 'Taksirli suçlar da dahil olmak üzere altı aydan fazla süreyle hapis cezasına',
      correctPhrase: 'Kasten işlenen bir suçtan dolayı iki yıldan fazla süreyle hapis cezasına',
      explanation: '1136 s.K. m. 5/1-a uyarınca taksirli suçlar avukatlığa engel değildir; kasten işlenen suçlarda ise genel hapis cezası sınırı 1 yıl (657 DMK) değil, 2 yıldan fazladır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'avukatlık mesleğine kabul edilmezler',
      wrongPhrase: 'baro yönetim kurulunun takdir kararıyla şartlı olarak avukatlık mesleğine kabul edilebilirler',
      correctPhrase: 'avukatlık mesleğine kabul edilmezler',
      explanation: '1136 s.K. m. 5/1-a’daki mahkûmiyet engelleri mutlak engeldir; baro yönetim kurulunun bu konuda takdir yetkisi yoktur.'
    }
  },
  {
    id: 'rule-avk-birlesebilen-isler-p11',
    branch: 'Avukatlık',
    subTopic: 'Avukatlıkla Birleşebilen ve Birleşemeyen İşler',
    articleRef: '1136 s.K. M. 11 & 12',
    trueStatement:
      'Aylık, ücret, gündelik veya kesenek gibi ödemeler karşılığında görülen hiçbir hizmet ve görev avukatlıkla birleşemez; ancak milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında profesör ve doçentlik, arabuluculuk ve hakemlik avukatlıkla birleşebilir.',
    trueHighlight: ['milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında profesör ve doçentlik', 'avukatlıkla birleşemez'],
    trueCorrectPhrase: 'Milletvekilliği, belediye/il genel meclisi üyeliği ile hukuk profesör ve doçentliği avukatlıkla birleşebilir.',
    baseExplanation: '1136 s.K. m. 11 ve m. 12: Ücretli görevler kural olarak avukatlıkla birleşemez; ancak milletvekilliği, il genel/belediye meclisi üyeliği ve hukuk alanında profesörlük/doçentlik istisnaen avukatlıkla birleşebilir (belediye başkanlığı ise birleşemez!).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında profesör ve doçentlik',
      wrongPhrase: 'belediye başkanlığı, devlet memurluğu, noterlik ve tüm fakültelerdeki araştırma görevliliği',
      correctPhrase: 'milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında profesör ve doçentlik',
      explanation: 'Belediye meclisi üyeliği avukatlıkla birleşebilirken belediye başkanlığı, noterlik, memurluk ve araştırma görevliliği avukatlıkla birleşemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Aylık, ücret, gündelik veya kesenek gibi ödemeler karşılığında görülen hiçbir hizmet ve görev avukatlıkla birleşemez',
      wrongPhrase: 'Tacir veya esnaf sıfatıyla yapılan her türlü ticari faaliyet avukatlıkla serbestçe birleşebilir',
      correctPhrase: 'Aylık, ücret, gündelik veya kesenek gibi ödemeler karşılığında görülen hiçbir hizmet ve görev avukatlıkla birleşemez',
      explanation: '1136 s.K. m. 11 uyarınca avukatlıkla ticaret ve esnaflık birleşemez; avukat bizzat ticari faaliyet yürütemez.'
    }
  },
  {
    id: 'rule-avk-isin-reddi-iki-avukat-baro-baskani-p11',
    branch: 'Avukatlık',
    subTopic: 'Avukatın İşi Reddetmesi ve Baro Başkanınca Avukat Tayini',
    articleRef: '1136 s.K. M. 37',
    trueStatement:
      'Avukat, kendisine teklif olunan işi sebep göstermeden reddedebilir ve ret kararını iş sahibine gecikmeksizin bildirmek zorundadır; işi iki avukat tarafından reddolunan kimse, kendisine bir avukat tayin edilmesini baro başkanından isteyebilir.',
    trueHighlight: ['sebep göstermeden reddedebilir', 'işi iki avukat tarafından reddolunan kimse, kendisine bir avukat tayin edilmesini baro başkanından isteyebilir'],
    trueCorrectPhrase: 'İşi iki avukat tarafından reddolunan kimse baro başkanından avukat tayinini isteyebilir.',
    baseExplanation: '1136 s.K. m. 37: Avukat teklif edilen işi sebep göstermeksizin reddedebilir (gecikmeden bildirmek şartıyla). İşi iki avukatça reddedilen kişi baro başkanından avukat atanmasını talep edebilir ve atanan avukat baro başkanınca belirlenen ücret karşılığında işi takip etmek zorundadır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'işi iki avukat tarafından reddolunan kimse, kendisine bir avukat tayin edilmesini baro başkanından isteyebilir',
      wrongPhrase: 'işi en az üç avukat tarafından reddolunan kimse, kendisine bir avukat tayin edilmesini Cumhuriyet başsavcısından isteyebilir',
      correctPhrase: 'işi iki avukat tarafından reddolunan kimse, kendisine bir avukat tayin edilmesini baro başkanından isteyebilir',
      explanation: '1136 s.K. m. 37/2 uyarınca aranan ret sayısı 3 değil 2 avukattır ve avukat tayin mercii Cumhuriyet başsavcısı değil Baro Başkanıdır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sebep göstermeden reddedebilir',
      wrongPhrase: 'ancak haklı bir sebep ispatlayarak ve baro yönetim kurulundan izin alarak reddedebilir',
      correctPhrase: 'sebep göstermeden reddedebilir',
      explanation: '1136 s.K. m. 37/1 uyarınca avukat, teklif olunan işi sebep göstermeden reddetme serbestisine sahiptir.'
    }
  },
  {
    id: 'rule-avk-baro-kurulusu-30-avukat-ekim-p11',
    branch: 'Avukatlık',
    subTopic: 'Baroların Kuruluşu (En Az 30 Avukat) ve Olağan Genel Kurul Zamanı',
    articleRef: '1136 s.K. M. 77 & 82',
    trueStatement:
      'Bölgesi içinde en az otuz avukat bulunan her il merkezinde bir baro kurulur; baro genel kurulu levhada yazılı bütün avukatlardan oluşur ve olağan toplantısını iki yılda bir Ekim ayının ilk haftası içinde yapar.',
    trueHighlight: ['en az otuz avukat bulunan her il merkezinde bir baro kurulur', 'iki yılda bir Ekim ayının ilk haftası içinde yapar'],
    trueCorrectPhrase: 'En az 30 avukat bulunan ilde baro kurulur; olağan genel kurul 2 yılda bir Ekim ayının ilk haftası yapılır.',
    baseExplanation: '1136 s.K. m. 77 ve m. 82: Bir ilde baro kurulabilmesi için baro levhasına kayıtlı en az 30 avukat bulunmalıdır (2020 değişikliğiyle 2.000’den fazla avukat bulunan illerde en az 2.000 avukatla yeni bir baro kurulabilir). Olağan genel kurul 2 yılda bir Ekim ayının ilk haftasında toplanır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'en az otuz avukat bulunan her il merkezinde bir baro kurulur',
      wrongPhrase: 'en az elli avukat bulunan her il ve ilçe merkezinde bir baro kurulur',
      correctPhrase: 'en az otuz avukat bulunan her il merkezinde bir baro kurulur',
      explanation: '1136 s.K. m. 77 uyarınca baro ilçe merkezinde değil il merkezinde kurulur ve asgari avukat sayısı 50 değil 30’dur!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yılda bir Ekim ayının ilk haftası içinde yapar',
      wrongPhrase: 'üç yılda bir Eylül ayının ilk haftası içinde yapar',
      correctPhrase: 'iki yılda bir Ekim ayının ilk haftası içinde yapar',
      explanation: '1136 s.K. m. 82 uyarınca baro olağan genel kurulu 3 yılda bir değil, 2 yılda bir Ekim ayının ilk haftası içinde toplanır.'
    }
  },
  {
    id: 'rule-avk-baro-baskani-tbb-baskani-kidem-ve-gorev-suresi-p11',
    branch: 'Avukatlık',
    subTopic: 'Baro Başkanı (5 Yıl Kıdem / 2 Yıl Görev) ve TBB Başkanı (10 Yıl Kıdem / 4 Yıl Görev)',
    articleRef: '1136 s.K. M. 96 & 121',
    trueStatement:
      'Baro başkanı iki yıllık bir görev süresi için levhada yazılı ve avukatlıkta en az beş yıl kıdemi olan avukatlar arasından seçilir; Türkiye Barolar Birliği Başkanı ise dört yıllık bir görev süresi için ve avukatlıkta en az on yıl kıdemi olanlar arasından seçilir.',
    trueHighlight: ['iki yıllık bir görev süresi için levhada yazılı ve avukatlıkta en az beş yıl kıdemi olan', 'dört yıllık bir görev süresi için ve avukatlıkta en az on yıl kıdemi olanlar'],
    trueCorrectPhrase: 'Baro başkanı en az 5 yıl kıdemle 2 yıllığına; TBB Başkanı en az 10 yıl kıdemle 4 yıllığına seçilir.',
    baseExplanation: '1136 s.K. m. 96 ve m. 121: Baro başkanı için en az 5 yıl avukatlık kıdemi ve 2 yıl görev süresi; TBB Başkanı için ise en az 10 yıl avukatlık kıdemi ve 4 yıl görev süresi öngörülmüştür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıllık bir görev süresi için levhada yazılı ve avukatlıkta en az beş yıl kıdemi olan avukatlar arasından seçilir',
      wrongPhrase: 'dört yıllık bir görev süresi için levhada yazılı ve avukatlıkta en az on yıl kıdemi olan avukatlar arasından seçilir',
      correctPhrase: 'iki yıllık bir görev süresi için levhada yazılı ve avukatlıkta en az beş yıl kıdemi olan avukatlar arasından seçilir',
      explanation: '4 yıl görev süresi ve 10 yıl kıdem şartı Türkiye Barolar Birliği Başkanına aittir; Baro Başkanında görev süresi 2 yıl, kıdem şartı ise en az 5 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'dört yıllık bir görev süresi için ve avukatlıkta en az on yıl kıdemi olanlar arasından seçilir',
      wrongPhrase: 'iki yıllık bir görev süresi için ve avukatlıkta en az beş yıl kıdemi olanlar arasından seçilir',
      correctPhrase: 'dört yıllık bir görev süresi için ve avukatlıkta en az on yıl kıdemi olanlar arasından seçilir',
      explanation: '1136 s.K. m. 121 uyarınca TBB Başkanı 2 yıl değil 4 yıl için ve en az 10 yıl avukatlık kıdemi bulunanlar arasından seçilir.'
    }
  },
  {
    id: 'rule-avk-disiplin-cezalari-ve-zamanasimi-p11',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Disiplin Cezaları ve Disiplin Kovuşturması Zamanaşımı (3 Yıl / 4,5 Yıl)',
    articleRef: '1136 s.K. M. 135 & 159',
    trueStatement:
      'Avukatlık disiplin cezaları uyarma, kınama, para cezası, üç aydan az ve üç yıldan fazla olmamak üzere işten çıkarma ve meslekten çıkarmadır; disiplin cezası kovuşturmasına konu eylemin işlenmesinden itibaren üç yıl geçmiş ise kovuşturma yapılamaz, yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıl olarak uygulanır.',
    trueHighlight: ['üç aydan az ve üç yıldan fazla olmamak üzere işten çıkarma', 'üç yıl geçmiş ise kovuşturma yapılamaz', 'dört buçuk yıl olarak uygulanır'],
    trueCorrectPhrase: 'İşten çıkarma 3 ay-3 yıl arasıdır; disiplin zamanaşımı 3 yıl (el konulmuşsa 4,5 yıl) olarak uygulanır.',
    baseExplanation: '1136 s.K. m. 135 ve m. 159: Avukatlıkta disiplin cezaları uyarma, kınama, para cezası, işten çıkarma (3 ay - 3 yıl) ve meslekten çıkarmadır. Disiplin zamanaşımı eylemden itibaren 3 yıl, el konulmuşsa 4,5 yıldır (eylem aynı zamanda suç teşkil ediyor ve kanunda daha uzun zamanaşımı varsa o süre uygulanır).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç yıl geçmiş ise kovuşturma yapılamaz, yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıl olarak uygulanır',
      wrongPhrase: 'bir yıl geçmiş ise kovuşturma yapılamaz, yönetim kurulunca işe el konulmuş ise bu süre iki yıl olarak uygulanır',
      correctPhrase: 'üç yıl geçmiş ise kovuşturma yapılamaz, yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıl olarak uygulanır',
      explanation: '1136 s.K. m. 159 uyarınca avukatlık disiplin zamanaşımı 1 ve 2 yıl değil, 3 yıl ve el konulmuşsa 4,5 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç aydan az ve üç yıldan fazla olmamak üzere işten çıkarma',
      wrongPhrase: 'bir aydan az ve bir yıldan fazla olmamak üzere aylıktan kesme ve kademe ilerlemesinin durdurulması',
      correctPhrase: 'üç aydan az ve üç yıldan fazla olmamak üzere işten çıkarma',
      explanation: 'Aylıktan kesme ve kademe ilerlemesinin durdurulması 657 sayılı DMK’daki memur disiplin cezalarıdır; Avukatlık Kanunu m. 135’te geçici uzaklaştırma cezası 3 ay ile 3 yıl arasında verilen "işten çıkarma" cezasıdır!'
    }
  },
  {
    id: 'rule-avk-hapis-hakki-ve-isi-sonuna-kadar-takip-p11',
    branch: 'Avukatlık',
    subTopic: 'Avukatın Hapis Hakkı ve İşi Sonuna Kadar Takip Yükümlülüğü',
    articleRef: '1136 s.K. M. 166 & 171',
    trueStatement:
      'Avukat, üzerine aldığı işi kanun hükümlerine göre ve yazılı sözleşme olmasa bile sonuna kadar takip eder; avukat, müvekkili tarafından verilen veya onun namına aldığı malları, paraları ve diğer her türlü kıymetleri, kendi alacağı nispetinde elinde tutabilir.',
    trueHighlight: ['yazılı sözleşme olmasa bile sonuna kadar takip eder', 'kendi alacağı nispetinde elinde tutabilir'],
    trueCorrectPhrase: 'Avukat işi sonuna kadar takip eder ve müvekkili adına aldığı kıymetler üzerinde alacağı oranında hapis hakkına sahiptir.',
    baseExplanation: '1136 s.K. m. 166 ve m. 171: Avukat işi sonuna (hükmün kesinleşmesine) kadar takip eder, vekâletnamesinde başkasını tevkile yetki varsa başka avukatı tevkil edebilir ve müvekkili adına tahsil ettiği para/mallar üzerinde kendi vekâlet ücreti ve gider alacağı oranında kanuni hapis hakkına sahiptir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kendi alacağı nispetinde elinde tutabilir',
      wrongPhrase: 'kendi alacağı bulunsa dahi hiçbir koşulda elinde tutamaz ve hapis hakkı kullanamaz',
      correctPhrase: 'kendi alacağı nispetinde elinde tutabilir',
      explanation: '1136 s.K. m. 166/1 uyarınca avukatın müvekkili adına aldığı para ve mallar üzerinde alacağı nispetinde kanuni hapis hakkı vardır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yazılı sözleşme olmasa bile sonuna kadar takip eder',
      wrongPhrase: 'yalnızca yazılı avukatlık ücret sözleşmesi bulunması şartıyla ilk derece kararının tefhimine kadar takip eder',
      correctPhrase: 'yazılı sözleşme olmasa bile sonuna kadar takip eder',
      explanation: '1136 s.K. m. 171/1 uyarınca yazılı sözleşme bulunmasa dahi avukat üzerine aldığı işi sonuna kadar takip etmekle yükümlüdür.'
    }
  },

  // =========================================================================
  // 2. VERGİ HUKUKU (213 SAYILI VUK VE 6183 SAYILI AATUHK)
  // =========================================================================
  {
    id: 'rule-vergi-inceleme-sureleri-1-yil-6-ay-p11',
    branch: 'Vergi',
    subTopic: 'Vergi İncelemesinde Tam ve Sınırlı İnceleme Azami Süreleri',
    articleRef: 'VUK M. 140/6',
    trueStatement:
      'Vergi incelemesine başlanıldığı tarihten itibaren, tam inceleme yapılması halinde en fazla bir yıl, sınırlı inceleme yapılması halinde ise en fazla altı ay içinde incelemenin bitirilmesi esastır; bu süreler içinde inceleme bitirilemezse altı ayı geçmemek üzere ek süre verilebilir.',
    trueHighlight: ['tam inceleme yapılması halinde en fazla bir yıl', 'sınırlı inceleme yapılması halinde ise en fazla altı ay', 'altı ayı geçmemek üzere ek süre verilebilir'],
    trueCorrectPhrase: 'Vergi incelemesi tam incelemede en çok 1 yıl, sınırlı incelemede 6 ayda bitirilir (+6 aya kadar ek süre).',
    baseExplanation: 'VUK m. 140/6: Mükellef haklarını korumak amacıyla vergi incelemelerine süre sınırı getirilmiştir: tam inceleme en fazla 1 yıl, sınırlı inceleme en fazla 6 ay (KDV iadesi incelemelerinde 3 ay) içinde bitirilmeli; bitirilemezse en çok 6 ay (KDV iadesinde 2 ay) ek süre verilebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tam inceleme yapılması halinde en fazla bir yıl, sınırlı inceleme yapılması halinde ise en fazla altı ay içinde',
      wrongPhrase: 'tam inceleme yapılması halinde en fazla iki yıl, sınırlı inceleme yapılması halinde ise en fazla bir yıl içinde',
      correctPhrase: 'tam inceleme yapılması halinde en fazla bir yıl, sınırlı inceleme yapılması halinde ise en fazla altı ay içinde',
      explanation: 'VUK m. 140/6 uyarınca vergi incelemesi süreleri 2 yıl ve 1 yıl değil, tam incelemede 1 yıl ve sınırlı incelemede 6 aydır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı ayı geçmemek üzere ek süre verilebilir',
      wrongPhrase: 'tarh zamanaşımı doluncaya kadar sınırsız sayıda ek süre verilebilir',
      correctPhrase: 'altı ayı geçmemek üzere ek süre verilebilir',
      explanation: 'VUK m. 140/6 uyarınca ek süre sınırsız olmayıp en fazla 6 ayı geçmemek üzere verilebilir.'
    }
  },
  {
    id: 'rule-vergi-pismanlik-ve-islah-15-gun-emlak-haric-p11',
    branch: 'Vergi',
    subTopic: 'Pişmanlık ve Islah Müessesesi (15 Gün Süre ve Emlak Vergisi İstisnası)',
    articleRef: 'VUK M. 371',
    trueStatement:
      'Beyana dayanan vergilerde vergi ziyaı cezasını gerektiren fiilleri işleyen mükellefler, keyfiyeti ilgili makamlara kendiliğinden dilekçe ile haber verir ve haber verme tarihinden başlayarak on beş gün içinde beyannamelerini verip gecikme zammı oranında pişmanlık zammıyla birlikte vergilerini öderlerse vergi ziyaı cezası kesilmez; ancak bu hükümler emlak vergisi için uygulanmaz.',
    trueHighlight: ['Beyana dayanan vergilerde', 'haber verme tarihinden başlayarak on beş gün içinde', 'emlak vergisi için uygulanmaz'],
    trueCorrectPhrase: 'Pişmanlık beyana dayanan vergilerde geçerlidir, ödeme süresi 15 gündür ve emlak vergisinde uygulanmaz.',
    baseExplanation: 'VUK m. 371: Pişmanlık ve ıslah yalnızca beyana dayanan vergilerde uygulanır; emlak vergisinde uygulanmaz. Haber verme tarihinden itibaren 15 gün içinde beyanname verilip vergi ve pişmanlık zammı ödenmelidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'haber verme tarihinden başlayarak on beş gün içinde',
      wrongPhrase: 'haber verme tarihinden başlayarak otuz gün içinde',
      correctPhrase: 'haber verme tarihinden başlayarak on beş gün içinde',
      explanation: 'VUK m. 371 uyarınca pişmanlıkla beyanname verme ve ödeme süresi 30 gün değil, haber verme tarihinden itibaren 15 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak bu hükümler emlak vergisi için uygulanmaz',
      wrongPhrase: 'bu hükümler başta emlak vergisi olmak üzere beyana dayanmayan tüm vergiler için de uygulanır',
      correctPhrase: 'ancak bu hükümler emlak vergisi için uygulanmaz',
      explanation: 'VUK m. 371 son fıkra uyarınca pişmanlık ve ıslah hükümleri emlak vergisi için kesinlikle uygulanmaz!'
    }
  },
  {
    id: 'rule-vergi-izaha-davet-30-gun-yuzde-20-p11',
    branch: 'Vergi',
    subTopic: 'İzaha Davet Müessesesi (30 Gün Süre ve %20 Vergi Ziyaı Cezası)',
    articleRef: 'VUK M. 370',
    trueStatement:
      'Vergi incelemesine başlanılmadan veya takdir komisyonuna sevk edilmeden önce verginin ziyaa uğradığına delalet eden emareler bulunduğuna dair yetkili mercilerce yapılmış ön tespitler hakkında kendisine izaha davet yazısı tebliğ edilen mükellefler, tebliğden itibaren otuz gün içinde izahta bulunur ve şartları yerine getirirse vergi ziyaı cezası ziyaa uğratılan vergi üzerinden yüzde yirmi oranında kesilir.',
    trueHighlight: ['tebliğden itibaren otuz gün içinde', 'yüzde yirmi oranında kesilir'],
    trueCorrectPhrase: 'İzaha davette süre 30 gündür ve şartlar sağlanırsa vergi ziyaı cezası %20 oranında kesilir.',
    baseExplanation: 'VUK m. 370: İzaha davet yazısının tebliğinden itibaren 30 gün içinde açıklama yapılır veya beyanname verilip ödeme gerçekleştirilirse vergi ziyaı cezası 1 kat yerine %20 oranında kesilir (kaçakçılık fiillerinde ise sahte belge tutarı sınırı hariç izaha davet uygulanmaz).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğden itibaren otuz gün içinde',
      wrongPhrase: 'tebliğden itibaren on beş gün içinde',
      correctPhrase: 'tebliğden itibaren otuz gün içinde',
      explanation: '7194 sayılı Kanun değişikliğiyle VUK m. 370’teki izaha davet süresi 15 günden 30 güne çıkarılmıştır!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'yüzde yirmi oranında kesilir',
      wrongPhrase: 'tamamen kaldırılarak sıfır oranında kesilir',
      correctPhrase: 'yüzde yirmi oranında kesilir',
      explanation: 'Pişmanlıkta (VUK m. 371) vergi ziyaı cezası hiç kesilmezken, izaha davette (VUK m. 370) vergi ziyaı cezası %20 oranında kesilir!'
    }
  },
  {
    id: 'rule-vergi-6183-iptal-davasi-genel-mahkeme-5-yil-p11',
    branch: 'Vergi',
    subTopic: 'Amme Alacağının Korunmasında Tasarrufun İptali Davası (Adli Yargı & 5 Yıl)',
    articleRef: '6183 s.K. M. 24-26',
    trueStatement:
      'Amme alacağını ödememiş borçluların ivazsız tasarrufları ile amme alacağının tahsiline imkân bırakmamak maksadıyla yapılan tasarrufların hükümsüz sayılması için alacaklı tahsil dairesince genel mahkemelerde iptal davası açılır ve bu dava hakkı tasarrufların vukuu tarihinden itibaren beş yıl geçtikten sonra düşer.',
    trueHighlight: ['alacaklı tahsil dairesince genel mahkemelerde iptal davası açılır', 'beş yıl geçtikten sonra düşer'],
    trueCorrectPhrase: '6183 s.K. kapsamındaki tasarrufun iptali davası vergi mahkemesinde değil genel mahkemelerde (adli yargıda) 5 yıl içinde açılır.',
    baseExplanation: '6183 s.K. m. 24 ve m. 26: Amme borçlusunun mal kaçırma amaçlı tasarruflarının iptali davası vergi mahkemesinde değil, adli yargıda (genel mahkemelerde) açılır ve hak düşürücü süre tasarruf tarihinden itibaren 5 yıldır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'alacaklı tahsil dairesince genel mahkemelerde iptal davası açılır',
      wrongPhrase: 'alacaklı tahsil dairesince vergi mahkemesinde iptal davası açılır',
      correctPhrase: 'alacaklı tahsil dairesince genel mahkemelerde iptal davası açılır',
      explanation: 'ÖSYM’nin en sevdiği görev tuzaklarından biridir: 6183 s.K. m. 24 uyarınca amme alacağı için açılan tasarrufun iptali davasında görevli yargı yeri Vergi Mahkemesi değil, Genel Mahkemelerdir (Adli Yargı)!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl geçtikten sonra düşer',
      wrongPhrase: 'iki yıl geçtikten sonra düşer',
      correctPhrase: 'beş yıl geçtikten sonra düşer',
      explanation: '6183 s.K. m. 26 uyarınca iptal davası açma süresi 2 yıl değil, tasarruf tarihinden itibaren 5 yıldır.'
    }
  },
  {
    id: 'rule-vergi-bildirim-sureleri-10-gun-1-ay-3-ay-p11',
    branch: 'Vergi',
    subTopic: 'Vergi Hukukunda Bildirim Süreleri (İşe Başlama: 10 Gün, Değişiklik/Bırakma: 1 Ay, Ölüm: +3 Ay)',
    articleRef: 'VUK M. 16 & 168',
    trueStatement:
      'Gerçek kişilerde işe başlama bildirimleri işe başlama tarihinden itibaren on gün içinde yapılır; adres ve iş değişiklikleri ile işi bırakma bildirimleri ise olayın vukuu tarihinden itibaren bir ay içinde vergi dairesine bildirilir ve ölüm halinde mirasçıların bildirim ve beyanname verme sürelerine üç ay eklenir.',
    trueHighlight: ['işe başlama tarihinden itibaren on gün içinde', 'olayın vukuu tarihinden itibaren bir ay içinde', 'ölüm halinde mirasçıların bildirim ve beyanname verme sürelerine üç ay eklenir'],
    trueCorrectPhrase: 'İşe başlama 10 gün, değişiklik ve işi bırakma 1 ay içinde bildirilir; ölümde sürelere 3 ay eklenir.',
    baseExplanation: 'VUK m. 16 ve m. 168: Gerçek kişilerde işe başlama bildirimi 10 gün içinde, adres/iş değişikliği ve işi bırakma bildirimi 1 ay içinde yapılır. Ölüm halinde ise mirası reddetmemiş mirasçıların vergi ödevlerini yerine getirme süreleri 3 ay uzar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işe başlama tarihinden itibaren on gün içinde yapılır; adres ve iş değişiklikleri ile işi bırakma bildirimleri ise olayın vukuu tarihinden itibaren bir ay içinde',
      wrongPhrase: 'işe başlama tarihinden itibaren bir ay içinde yapılır; adres ve iş değişiklikleri ile işi bırakma bildirimleri ise olayın vukuu tarihinden itibaren on gün içinde',
      correctPhrase: 'işe başlama tarihinden itibaren on gün içinde yapılır; adres ve iş değişiklikleri ile işi bırakma bildirimleri ise olayın vukuu tarihinden itibaren bir ay içinde',
      explanation: 'VUK m. 168 uyarınca işe başlama 10 gün, adres/iş değişikliği ve işi bırakma ise 1 aydır (süreler ters çevrilerek sorulur)!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ölüm halinde mirasçıların bildirim ve beyanname verme sürelerine üç ay eklenir',
      wrongPhrase: 'ölüm halinde mirasçıların bildirim ve beyanname verme sürelerine altı ay eklenir',
      correctPhrase: 'ölüm halinde mirasçıların bildirim ve beyanname verme sürelerine üç ay eklenir',
      explanation: 'VUK m. 16 uyarınca ölüm halinde mirasçılar için kanuni sürelere 6 ay değil, 3 ay (mirasın reddi süresine paralel olarak) eklenir.'
    }
  },

  // =========================================================================
  // 3. ANAYASA HUKUKU (2709 SAYILI 1982 ANAYASASI)
  // =========================================================================
  {
    id: 'rule-ay-yakalama-gozalti-48-saat-4-gun-p11',
    branch: 'Anayasa',
    subTopic: 'Kişi Hürriyeti ve Güvenliği: Anayasal Gözaltı Süreleri (48 Saat & 4 Gün)',
    articleRef: 'AY M. 19/5',
    trueStatement:
      'Yakalanan veya tutuklanan kişi, tutulma yerine en yakın mahkemeye gönderilmesi için gerekli süre hariç en geç kırksekiz saat ve toplu olarak işlenen suçlarda en çok dört gün içinde hâkim önüne çıkarılır; kimse, bu süreler geçtikten sonra hâkim kararı olmaksızın hürriyetinden yoksun bırakılamaz.',
    trueHighlight: ['en geç kırksekiz saat', 'toplu olarak işlenen suçlarda en çok dört gün içinde hâkim önüne çıkarılır'],
    trueCorrectPhrase: 'Anayasal gözaltı süresi bireysel suçlarda en geç 48 saat, toplu suçlarda en çok 4 gündür.',
    baseExplanation: 'AY m. 19/5: Anayasadaki üst gözaltı sınırı bireysel suçlarda 48 saat (CMK m. 91’de 24 saat), toplu suçlarda ise en çok 4 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç kırksekiz saat ve toplu olarak işlenen suçlarda en çok dört gün içinde',
      wrongPhrase: 'en geç yetmişiki saat ve toplu olarak işlenen suçlarda en çok yedi gün içinde',
      correctPhrase: 'en geç kırksekiz saat ve toplu olarak işlenen suçlarda en çok dört gün içinde',
      explanation: 'AY m. 19/5 uyarınca anayasal gözaltı üst sınırı bireysel suçlarda 48 saat, toplu suçlarda ise en çok 4 gündür.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'hâkim kararı olmaksızın hürriyetinden yoksun bırakılamaz',
      wrongPhrase: 'Cumhuriyet başsavcısının veya mülki idare amirinin yazılı uzatma emriyle on beş güne kadar gözaltında tutulabilir',
      correctPhrase: 'hâkim kararı olmaksızın hürriyetinden yoksun bırakılamaz',
      explanation: 'Anayasal gözaltı süreleri dolduktan sonra hâkim kararı olmaksızın kişi hürriyetinden yoksun bırakılamaz.'
    }
  },
  {
    id: 'rule-ay-milletvekilliginin-dusmesi-usulleri-p11',
    branch: 'Anayasa',
    subTopic: 'Milletvekilliğinin Düşmesi Halleri (İstifa, Kesin Hüküm ve Bağdaşmayan Görev)',
    articleRef: 'AY M. 84',
    trueStatement:
      'İstifa eden milletvekilinin milletvekilliğinin düşmesi, istifanın geçerli olduğu TBMM Başkanlık Divanınca tespit edildikten sonra Genel Kurulca kararlaştırılır; kesin hüküm giyme veya kısıtlanma hâlinde ise kesin mahkeme kararının Genel Kurula bildirilmesiyle milletvekilliği düşer.',
    trueHighlight: ['TBMM Başkanlık Divanınca tespit edildikten sonra Genel Kurulca kararlaştırılır', 'kesin mahkeme kararının Genel Kurula bildirilmesiyle milletvekilliği düşer'],
    trueCorrectPhrase: 'İstifada Genel Kurul kararı gerekirken, kesin hüküm ve kısıtlanmada kararın Genel Kurula bildirilmesiyle vekillik düşer.',
    baseExplanation: 'AY m. 84: Milletvekilliğinin düşmesinde 3 farklı usul vardır: 1) İstifada Genel Kurul basit çoğunlukla karar verir; 2) Kesin hüküm/kısıtlanmada oylama yapılmaz, kararın Genel Kurula bildirilmesiyle düşer; 3) Bağdaşmayan görevde ısrarda gizli oyla, devamsızlıkta (1 ayda 5 birleşim) üye tamsayısının salt çoğunluğuyla (301) karar verilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kesin mahkeme kararının Genel Kurula bildirilmesiyle milletvekilliği düşer',
      wrongPhrase: 'kesin mahkeme kararının TBMM Genel Kurulunda gizli oyla ve üye tamsayısının salt çoğunluğuyla kabul edilmesiyle milletvekilliği düşer',
      correctPhrase: 'kesin mahkeme kararının Genel Kurula bildirilmesiyle milletvekilliği düşer',
      explanation: 'AY m. 84/2 uyarınca kesin hüküm giyme veya kısıtlanma halinde Genel Kurulda oylama yapılmaz; kesin mahkeme kararının Genel Kurula bildirilmesiyle (okunmasıyla) milletvekilliği kendiliğinden düşer!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'TBMM Başkanlık Divanınca tespit edildikten sonra Genel Kurulca kararlaştırılır',
      wrongPhrase: 'TBMM Başkanlığına dilekçenin verildiği anda oylamaya gerek olmaksızın kendiliğinden gerçekleşir',
      correctPhrase: 'TBMM Başkanlık Divanınca tespit edildikten sonra Genel Kurulca kararlaştırılır',
      explanation: 'AY m. 84/1 uyarınca milletvekilinin istifası tek başına sonuç doğurmaz; Başkanlık Divanının tespiti ve Genel Kurulun kararı şarttır.'
    }
  },
  {
    id: 'rule-ay-olagan-cbk-kapsami-ve-yasak-alan-p11',
    branch: 'Anayasa',
    subTopic: 'Olağan Cumhurbaşkanlığı Kararnamesi (CBK) Kapsamı ve Düzenlenemeyecek Haklar',
    articleRef: 'AY M. 104/17',
    trueStatement:
      'Cumhurbaşkanı, yürütme yetkisine ilişkin konularda Cumhurbaşkanlığı kararnamesi çıkarabilir; Anayasanın ikinci kısmının birinci ve ikinci bölümlerinde yer alan temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesiyle düzenlenemez, ancak sosyal ve ekonomik haklar düzenlenebilir.',
    trueHighlight: ['temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesiyle düzenlenemez', 'ancak sosyal ve ekonomik haklar düzenlenebilir'],
    trueCorrectPhrase: 'Olağan CBK ile kişi hakları ve siyasi haklar düzenlenemez; sosyal ve ekonomik haklar ise düzenlenebilir.',
    baseExplanation: 'AY m. 104/17: Olağan dönemde CBK ile yalnızca "sosyal ve ekonomik haklar ve ödevler" (üçüncü bölüm) düzenlenebilir; kişi hakları ve siyasi haklar ile münhasıran kanunla düzenlenmesi öngörülen veya kanunda açıkça düzenlenen konular olağan CBK ile düzenlenemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak sosyal ve ekonomik haklar düzenlenebilir',
      wrongPhrase: 'sosyal ve ekonomik haklar da dahil olmak üzere hiçbir temel hak ve ödev olağan Cumhurbaşkanlığı kararnamesiyle düzenlenemez',
      correctPhrase: 'ancak sosyal ve ekonomik haklar düzenlenebilir',
      explanation: 'AY m. 104/17’de üçüncü bölümde yer alan "sosyal ve ekonomik haklar ve ödevler" yasak kapsamı dışında bırakılmıştır; dolayısıyla olağan CBK ile sosyal ve ekonomik haklar düzenlenebilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesiyle düzenlenemez',
      wrongPhrase: 'kanunlarla Cumhurbaşkanlığı kararnamelerinin farklı hükümler içermesi hâlinde Cumhurbaşkanlığı kararnamesi hükümleri uygulanır',
      correctPhrase: 'temel haklar, kişi hakları ve ödevleriyle dördüncü bölümde yer alan siyasi haklar ve ödevler Cumhurbaşkanlığı kararnamesiyle düzenlenemez',
      explanation: 'AY m. 104/17 uyarınca CBK ile kanunlarda farklı hükümler bulunması halinde CBK değil, kanun hükümleri uygulanır!'
    }
  },
  {
    id: 'rule-ay-butce-kanunu-75-gun-55-gun-20-gun-p11',
    branch: 'Anayasa',
    subTopic: 'Merkezî Yönetim Bütçe Kanunu Teklifi ve Görüşme Süreleri (75 = 55 + 20 Gün)',
    articleRef: 'AY M. 161',
    trueStatement:
      'Cumhurbaşkanı bütçe kanunu teklifini, malî yılbaşından en az yetmişbeş gün önce Türkiye Büyük Millet Meclisine sunar; bütçe teklifi Bütçe Komisyonunda ellibeş gün içinde kabul edilir ve Genel Kurulda yirmi gün içinde görüşülüp malî yılbaşına kadar karara bağlanır.',
    trueHighlight: ['malî yılbaşından en az yetmişbeş gün önce', 'Bütçe Komisyonunda ellibeş gün', 'Genel Kurulda yirmi gün içinde'],
    trueCorrectPhrase: 'Bütçe teklifi mali yılbaşından en az 75 gün önce sunulur; 55 gün Komisyonda, 20 gün Genel Kurulda görüşülür.',
    baseExplanation: 'AY m. 161: Bütçe kanunu teklifini hazırlama ve TBMM’ye sunma yetkisi Cumhurbaşkanına aittir. Mali yılbaşından en az 75 gün önce sunulur (55 gün Bütçe Komisyonu + 20 gün Genel Kurul).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'malî yılbaşından en az yetmişbeş gün önce Türkiye Büyük Millet Meclisine sunar; bütçe teklifi Bütçe Komisyonunda ellibeş gün içinde kabul edilir ve Genel Kurulda yirmi gün içinde',
      wrongPhrase: 'malî yılbaşından en az doksan gün önce Türkiye Büyük Millet Meclisine sunar; bütçe teklifi Bütçe Komisyonunda altmış gün içinde kabul edilir ve Genel Kurulda otuz gün içinde',
      correctPhrase: 'malî yılbaşından en az yetmişbeş gün önce Türkiye Büyük Millet Meclisine sunar; bütçe teklifi Bütçe Komisyonunda ellibeş gün içinde kabul edilir ve Genel Kurulda yirmi gün içinde',
      explanation: 'AY m. 161 uyarınca bütçe takvimi 90 (60+30) gün değil, 75 (55+20) gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Cumhurbaşkanı bütçe kanunu teklifini',
      wrongPhrase: 'Hazine ve Maliye Bakanı ile milletvekilleri bütçe kanunu teklifini',
      correctPhrase: 'Cumhurbaşkanı bütçe kanunu teklifini',
      explanation: 'Genel kanun tekliflerinin aksine (milletvekilleri), Bütçe ve Kesinhesap Kanunu tekliflerini sunma yetkisi münhasıran Cumhurbaşkanına aittir!'
    }
  },
  {
    id: 'rule-ay-anayasa-degisikligi-nisaplari-200-360-400-p11',
    branch: 'Anayasa',
    subTopic: 'Anayasanın Değiştirilmesi Teklif (1/3) ve Kabul (3/5 ve 2/3) Nisapları',
    articleRef: 'AY M. 175',
    trueStatement:
      'Anayasanın değiştirilmesi Türkiye Büyük Millet Meclisi üye tamsayısının en az üçte biri tarafından yazıyla teklif edilebilir; teklifler Genel Kurulda iki defa görüşülür ve değişikliğin kabulü Meclisin üye tamsayısının beşte üç çoğunluğunun gizli oyuyla mümkündür.',
    trueHighlight: ['üye tamsayısının en az üçte biri tarafından yazıyla teklif edilebilir', 'iki defa görüşülür', 'üye tamsayısının beşte üç çoğunluğunun gizli oyuyla mümkündür'],
    trueCorrectPhrase: 'Anayasa değişikliği en az 1/3 (200) vekille teklif edilir, iki kez görüşülür ve en az 3/5 (360) gizli oyla kabul edilir.',
    baseExplanation: 'AY m. 175: Teklif nisabı üye tamsayısının en az 1/3’ü (200 MV), kabul nisabı en az 3/5’i (360 MV) gizli oydur. 360-399 arası kabulde CB geri göndermezse halkoylaması zorunludur; 400 (2/3) ve üzeri kabulde halkoylaması ihtiyaridir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'üye tamsayısının en az üçte biri tarafından yazıyla teklif edilebilir; teklifler Genel Kurulda iki defa görüşülür ve değişikliğin kabulü Meclisin üye tamsayısının beşte üç çoğunluğunun gizli oyuyla mümkündür',
      wrongPhrase: 'bir milletvekili veya Cumhurbaşkanı tarafından teklif edilebilir; teklifler Genel Kurulda bir defa görüşülür ve değişikliğin kabulü üye tamsayısının salt çoğunluğunun açık oyuyla mümkündür',
      correctPhrase: 'üye tamsayısının en az üçte biri tarafından yazıyla teklif edilebilir; teklifler Genel Kurulda iki defa görüşülür ve değişikliğin kabulü Meclisin üye tamsayısının beşte üç çoğunluğunun gizli oyuyla mümkündür',
      explanation: 'Anayasa değişikliği 1 milletvekiliyle teklif edilemez (en az 200 MV gerekir) ve kabulü için salt çoğunluk (301) değil, en az 3/5 (360) gizli oy şarttır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'iki defa görüşülür',
      wrongPhrase: 'Cumhurbaşkanının talebi üzerine ivedi görüşme usulüyle tek birleşimde bir defa görüşülür',
      correctPhrase: 'iki defa görüşülür',
      explanation: 'AY m. 175/1 uyarınca Anayasanın değiştirilmesi hakkındaki teklifler ivedi görüşülemez ve Genel Kurulda mutlaka iki defa (arada en az 48 saat serinleme süresi bırakılarak) görüşülür.'
    }
  },

  // =========================================================================
  // 4. İDARE HUKUKU VE İYUK
  // =========================================================================
  {
    id: 'rule-idare-il-ozel-idaresi-organlari-ve-baskanlik-p11',
    branch: 'İdare',
    subTopic: 'İl Özel İdaresinin Organları: İl Genel Meclisi Başkanı ve İl Encümeni Başkanı Ayrımı',
    articleRef: '5302 s.K. M. 9, 11 & 25',
    trueStatement:
      'İl özel idaresinin organları il genel meclisi, il encümeni ve validir; vali il özel idaresinin başı, tüzel kişiliğinin temsilcisi ve il encümeninin başkanıdır, ancak il genel meclisinin başkanı vali olmayıp meclis üyelerinin kendi aralarından seçtikleri meclis başkanıdır.',
    trueHighlight: ['il genel meclisi, il encümeni ve validir', 'il encümeninin başkanıdır, ancak il genel meclisinin başkanı vali olmayıp meclis üyelerinin kendi aralarından seçtikleri meclis başkanıdır'],
    trueCorrectPhrase: 'Vali il özel idaresinin ve il encümeninin başkanıdır; ancak il genel meclisinin başkanı vali değildir.',
    baseExplanation: '5302 s.K. m. 9, 11 ve 25: Belediye başkanı aynı zamanda belediye meclisinin de başkanı iken, Vali il genel meclisinin başkanı değildir! İl genel meclisi kendi üyeleri arasından gizli oyla kendi başkanını seçer; Vali ise il encümeninin başkanıdır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ancak il genel meclisinin başkanı vali olmayıp meclis üyelerinin kendi aralarından seçtikleri meclis başkanıdır',
      wrongPhrase: 'aynı zamanda belediye başkanında olduğu gibi il genel meclisinin de doğal başkanı validir',
      correctPhrase: 'ancak il genel meclisinin başkanı vali olmayıp meclis üyelerinin kendi aralarından seçtikleri meclis başkanıdır',
      explanation: '5302 sayılı Kanun ile valinin il genel meclisi başkanlığı sona erdirilmiştir; il genel meclisi başkanını kendi üyeleri arasından seçer!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'il encümeninin başkanıdır',
      wrongPhrase: 'il encümeninin başkanı olmayıp encümen başkanını İçişleri Bakanı atar',
      correctPhrase: 'il encümeninin başkanıdır',
      explanation: '5302 s.K. m. 25 uyarınca il encümeninin başkanı validir.'
    }
  },
  {
    id: 'rule-idare-koy-organlari-dogal-uyeler-kaymakam-p11',
    branch: 'İdare',
    subTopic: 'Köy İdaresi Organları, Doğal Üyeler ve Muhtar Kararları Üzerinde Vesayet',
    articleRef: '442 s.K. M. 20 & 40',
    trueStatement:
      'Köy idaresinin organları köy derneği, köy ihtiyar meclisi ve muhtardır; köy öğretmeni ile köy imamı ihtiyar meclisinin doğal üyeleridir ve muhtarın köylünün faydasına olmayan kararlarını kaymakam bozabilir, ancak muhtarın yerine geçerek kendisi karar veremez.',
    trueHighlight: ['köy öğretmeni ile köy imamı ihtiyar meclisinin doğal üyeleridir', 'muhtarın köylünün faydasına olmayan kararlarını kaymakam bozabilir, ancak muhtarın yerine geçerek kendisi karar veremez'],
    trueCorrectPhrase: 'Köy öğretmeni ve imamı ihtiyar meclisinin doğal üyesidir; kaymakam muhtarın kararını bozabilir ama ikame karar alamaz.',
    baseExplanation: '442 s.K. m. 20 ve m. 40: Köy öğretmeni ve köy imamı ihtiyar meclisinin tabii (doğal) üyeleridir. İdari vesayet gereği kaymakam muhtarın köylünün yararına olmayan kararlarını bozabilir fakat onun yerine geçerek karar alamaz.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'muhtarın köylünün faydasına olmayan kararlarını kaymakam bozabilir, ancak muhtarın yerine geçerek kendisi karar veremez',
      wrongPhrase: 'muhtarın köylünün faydasına olmayan kararlarını kaymakam hem bozabilir hem de muhtarın yerine geçerek bizzat yeni karar alabilir',
      correctPhrase: 'muhtarın köylünün faydasına olmayan kararlarını kaymakam bozabilir, ancak muhtarın yerine geçerek kendisi karar veremez',
      explanation: '442 s.K. m. 40 ve idari vesayet ilkesi gereği kaymakam muhtarın kararını bozabilir ancak ikame yetkisi (yerine geçerek karar alma yetkisi) yoktur!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'köy öğretmeni ile köy imamı ihtiyar meclisinin doğal üyeleridir',
      wrongPhrase: 'jandarma karakol komutanı ile tarım kredi kooperatifi müdürü ihtiyar meclisinin doğal üyeleridir',
      correctPhrase: 'köy öğretmeni ile köy imamı ihtiyar meclisinin doğal üyeleridir',
      explanation: '442 s.K. m. 20 uyarınca köy ihtiyar meclisinin doğal üyeleri köy öğretmeni (başöğretmen) ve köy imamıdır.'
    }
  },
  {
    id: 'rule-idare-dilekce-30-gun-bilgi-edinme-15-is-gunu-p11',
    branch: 'İdare',
    subTopic: 'Dilekçe Hakkı (30 Gün) ve Bilgi Edinme Hakkı (15 İş Günü & BEDK İtirazı) Süreleri',
    articleRef: '3071 s.K. M. 7 & 4982 s.K. M. 11-13',
    trueStatement:
      'Dilekçe Hakkının Kullanılmasına Dair Kanun uyarınca dilekçelerin sonucu hakkında en geç otuz gün içinde gerekçeli cevap verilir; Bilgi Edinme Hakkı Kanunu uyarınca ise bilgi edinme başvuruları kural olarak on beş iş günü içinde sonuçlandırılır ve istemi reddedilen başvuru sahibi yargı yoluna başvurmadan önce tebliğden itibaren on beş gün içinde Bilgi Edinme Değerlendirme Kuruluna itiraz edebilir.',
    trueHighlight: ['en geç otuz gün içinde gerekçeli cevap verilir', 'kural olarak on beş iş günü içinde sonuçlandırılır', 'tebliğden itibaren on beş gün içinde Bilgi Edinme Değerlendirme Kuruluna itiraz edebilir'],
    trueCorrectPhrase: 'Dilekçeye cevap 30 gün, bilgi edinme başvurusu 15 iş günü (başka kurumdan görüşte 30 iş günü), BEDK itirazı 15 gündür.',
    baseExplanation: '3071 s.K. m. 7’de cevap süresi 30 gün iken, 4982 s.K. m. 11’de bilgi edinme süresi kural olarak 15 iş günüdür (başka kurumla yazışma gerekirse 30 iş günü). Redde karşı 15 gün içinde BEDK’ya itiraz dava açma süresini durdurur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç otuz gün içinde gerekçeli cevap verilir; Bilgi Edinme Hakkı Kanunu uyarınca ise bilgi edinme başvuruları kural olarak on beş iş günü içinde sonuçlandırılır',
      wrongPhrase: 'en geç altmış gün içinde gerekçeli cevap verilir; Bilgi Edinme Hakkı Kanunu uyarınca ise bilgi edinme başvuruları kural olarak otuz gün içinde sonuçlandırılır',
      correctPhrase: 'en geç otuz gün içinde gerekçeli cevap verilir; Bilgi Edinme Hakkı Kanunu uyarınca ise bilgi edinme başvuruları kural olarak on beş iş günü içinde sonuçlandırılır',
      explanation: '3071 sayılı Kanunda dilekçeye cevap süresi 60 gün değil 30 gündür; 4982 sayılı Kanunda ise temel bilgi edinme süresi 15 iş günüdür!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğden itibaren on beş gün içinde Bilgi Edinme Değerlendirme Kuruluna itiraz edebilir',
      wrongPhrase: 'tebliğden itibaren otuz gün içinde Kamu Denetçiliği Kurumuna zorunlu itirazda bulunmalıdır',
      correctPhrase: 'tebliğden itibaren on beş gün içinde Bilgi Edinme Değerlendirme Kuruluna itiraz edebilir',
      explanation: '4982 s.K. m. 13 uyarınca bilgi edinme talebinin reddine karşı itiraz süresi 15 gündür ve merci Bilgi Edinme Değerlendirme Kuruludur (BEDK).'
    }
  },
  {
    id: 'rule-iyuk-tebligat-ve-cevap-verme-suresi-30-gun-p11',
    branch: 'İYUK',
    subTopic: 'İdari Davalarda Cevap Verme Süresi (30 Gün) ve Bir Defalık Uzatma',
    articleRef: 'İYUK M. 16',
    trueStatement:
      'İdari davalarda dava dilekçeleri ve savunmalar karşı tarafa tebliğ olunur; taraflar yapılacak tebliğlere karşı tebliğ tarihinden itibaren otuz gün içinde cevap verebilirler ve haklı sebeplerin bulunması hâlinde bu süre mahkeme kararı ile otuz günü geçmemek ve bir defaya mahsus olmak üzere uzatılabilir.',
    trueHighlight: ['tebliğ tarihinden itibaren otuz gün içinde cevap verebilirler', 'otuz günü geçmemek ve bir defaya mahsus olmak üzere uzatılabilir'],
    trueCorrectPhrase: 'İdari yargıda dilekçelere cevap verme süresi 30 gündür ve haklı sebeple bir kez en çok 30 gün uzatılabilir.',
    baseExplanation: 'İYUK m. 16: Genel idari yargılama usulünde savunma ve ikinci dilekçelere cevap verme süresi tebliğden itibaren 30 gündür (HMK’daki 2 haftalık süreden farklıdır!). Mahkemece bir defaya mahsus en çok 30 gün ek süre verilebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğ tarihinden itibaren otuz gün içinde cevap verebilirler ve haklı sebeplerin bulunması hâlinde bu süre mahkeme kararı ile otuz günü geçmemek ve bir defaya mahsus olmak üzere uzatılabilir',
      wrongPhrase: 'tebliğ tarihinden itibaren iki hafta içinde cevap verebilirler ve haklı sebeplerin bulunması hâlinde bu süre mahkeme kararı ile bir ayı geçmemek üzere uzatılabilir',
      correctPhrase: 'tebliğ tarihinden itibaren otuz gün içinde cevap verebilirler ve haklı sebeplerin bulunması hâlinde bu süre mahkeme kararı ile otuz günü geçmemek ve bir defaya mahsus olmak üzere uzatılabilir',
      explanation: '2 hafta cevap + 1 ay ek süre HMK m. 127’deki hukuk yargılaması kuralıdır; İYUK m. 16 uyarınca idari yargıda cevap süresi 30 gün ve ek süre en çok 30 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'otuz günü geçmemek ve bir defaya mahsus olmak üzere uzatılabilir',
      wrongPhrase: 'hiçbir koşulda uzatılamaz ve süresinde cevap verilmezse dava kabul edilmiş sayılır',
      correctPhrase: 'otuz günü geçmemek ve bir defaya mahsus olmak üzere uzatılabilir',
      explanation: 'İYUK m. 16 uyarınca cevap süresi haklı sebeple bir kez 30 güne kadar uzatılabilir ve süresinde savunma verilmemesi davanın kabulü anlamına gelmez.'
    }
  },
  {
    id: 'rule-iyuk-hmk-atif-m31-ve-calismaya-ara-verme-p11',
    branch: 'İYUK',
    subTopic: 'İYUK m. 31 Uyarınca HMK’ya Atıf Yapılan Haller ve Çalışmaya Ara Verme (7 Gün Uzama)',
    articleRef: 'İYUK M. 8/3, 31 & 61',
    trueStatement:
      'İdari Yargılama Usulü Kanunu’nda hüküm bulunmayan hususlarda hâkimin yasaklılığı ve reddi, ehliyet, üçüncü şahısların davaya katılması, davanın ihbarı, dosyanın işlemden kaldırılması, feragat ve kabul ile bilirkişi ve keşif konularında Hukuk Muhakemeleri Kanunu hükümleri uygulanır; ancak ıslah ve yemin kurumları idari yargıda uygulanmaz ve çalışmaya ara verme süresi içinde biten süreler ara vermenin bittiği günden itibaren yedi gün uzamış sayılır.',
    trueHighlight: ['ancak ıslah ve yemin kurumları idari yargıda uygulanmaz', 'ara vermenin bittiği günden itibaren yedi gün uzamış sayılır'],
    trueCorrectPhrase: 'İYUK m. 31’de ıslah ve yemine atıf yoktur; çalışmaya ara vermede biten süreler 7 gün uzar.',
    baseExplanation: 'İYUK m. 31 sınırlı sayım yoluyla HMK’ya atıf yapmıştır: tanık, yemin, ıslah ve karşı dava HMK atfı kapsamında değildir (ancak tam yargı davalarında miktar bir kez artırılabilir). İYUK m. 8/3 uyarınca çalışmaya ara vermede biten süreler 7 gün uzar.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak ıslah ve yemin kurumları idari yargıda uygulanmaz',
      wrongPhrase: 'ayrıca HMK’daki tamamen ıslah, yemin teklifi ve karşı dava açma hükümleri de idari yargıda aynen uygulanır',
      correctPhrase: 'ancak ıslah ve yemin kurumları idari yargıda uygulanmaz',
      explanation: 'İYUK m. 31’de HMK’nın ıslah, yemin ve karşı dava hükümlerine atıf yapılmamıştır; idari yargıda yemin teklif edilemez ve dava konusu ıslahla değiştirilemez!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ara vermenin bittiği günden itibaren yedi gün uzamış sayılır',
      wrongPhrase: 'ara vermenin bittiği günden itibaren on beş gün uzamış sayılır',
      correctPhrase: 'ara vermenin bittiği günden itibaren yedi gün uzamış sayılır',
      explanation: 'İYUK m. 8/3 uyarınca çalışmaya ara verme (adli tatil) süresi içinde biten süreler 15 gün değil, ara vermenin sona erdiği günü izleyen tarihten itibaren 7 gün uzamış sayılır.'
    }
  },

  // =========================================================================
  // 5. İŞ HUKUKU (4857 SAYILI İŞ KANUNU)
  // =========================================================================
  {
    id: 'rule-isk-isyeri-devri-2-yil-muteselsil-sorumluluk-p11',
    branch: 'İş Hukuku',
    subTopic: 'İşyerinin Devri ve Devreden İşverenin 2 Yıllık Müteselsil Sorumluluk Sınırı',
    articleRef: '4857 s.K. M. 6',
    trueStatement:
      'İşyeri veya işyerinin bir bölümü hukuki bir işleme dayalı olarak başka birine devredildiğinde, mevcut iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer; devirden önce doğmuş olan ve devir tarihinde ödenmesi gereken borçlardan devreden ve devralan işveren birlikte sorumludurlar, ancak devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır.',
    trueHighlight: ['mevcut iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer', 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır'],
    trueCorrectPhrase: 'İşyeri devrinde devreden işverenin devir öncesi borçlardan müteselsil sorumluluğu devir tarihinden itibaren 2 yıl ile sınırlıdır.',
    baseExplanation: '4857 s.K. m. 6: İşyeri devrinde iş sözleşmeleri devralana geçer; devirden önce doğmuş ve devir tarihinde muaccel borçlardan devreden işverenin müteselsil sorumluluğu devir tarihinden itibaren 2 yıl sürer (kıdem tazminatında ise 1475 s.K. m. 14 gereği süre sınırı olmaksızın kendi dönemiyle sorumludur) ve devir tek başına haklı fesih sebebi oluşturmaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır',
      wrongPhrase: 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren beş yıl ile sınırlıdır',
      correctPhrase: 'devreden işverenin bu yükümlülüklerden sorumluluğu devir tarihinden itibaren iki yıl ile sınırlıdır',
      explanation: '4857 s.K. m. 6/3 uyarınca işyeri devrinde devreden işverenin birlikte sorumluluk süresi 5 yıl değil, devir tarihinden itibaren 2 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mevcut iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer',
      wrongPhrase: 'mevcut iş sözleşmeleri kendiliğinden sona erer ve işyerinin devri işçi için doğrudan haklı fesih sebebi oluşturur',
      correctPhrase: 'mevcut iş sözleşmeleri bütün hak ve borçları ile birlikte devralana geçer',
      explanation: '4857 s.K. m. 6/5 uyarınca devreden veya devralan işveren iş sözleşmesini sırf işyerinin devri nedeniyle feshedemez ve devir işçi yönünden de haklı fesih sebebi oluşturmaz.'
    }
  },
  {
    id: 'rule-isk-calisma-kosullarinda-esasli-degisiklik-6-is-gunu-p11',
    branch: 'İş Hukuku',
    subTopic: 'Çalışma Koşullarında Esaslı Değişiklik ve 6 İş Günü Yazılı Kabul Şartı',
    articleRef: '4857 s.K. M. 22',
    trueStatement:
      'İşveren, iş sözleşmesiyle veya işyeri uygulamasıyla oluşan çalışma koşullarında esaslı bir değişikliği ancak durumu işçiye yazılı olarak bildirmek suretiyle yapabilir; bu şekle uygun olarak yapılmayan ve işçi tarafından altı iş günü içinde yazılı olarak kabul edilmeyen değişiklikler işçiyi bağlamaz.',
    trueHighlight: ['işçiye yazılı olarak bildirmek suretiyle yapabilir', 'altı iş günü içinde yazılı olarak kabul edilmeyen değişiklikler işçiyi bağlamaz'],
    trueCorrectPhrase: 'Çalışma koşullarında esaslı değişiklik işçiye yazılı bildirilmeli ve 6 iş günü içinde yazılı kabul edilmelidir; susma kabul sayılmaz.',
    baseExplanation: '4857 s.K. m. 22: Esaslı değişiklik önerisi yazılı yapılmalı ve işçi tarafından 6 iş günü içinde yazılı olarak kabul edilmelidir; işçinin sessiz kalması (zımni kabul) değişikliği geçerli kılmaz!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'altı iş günü içinde yazılı olarak kabul edilmeyen değişiklikler işçiyi bağlamaz',
      wrongPhrase: 'altı iş günü içinde işçi tarafından yazılı olarak reddedilmeyen değişiklikler zımnen kabul edilmiş sayılır ve işçiyi bağlar',
      correctPhrase: 'altı iş günü içinde yazılı olarak kabul edilmeyen değişiklikler işçiyi bağlamaz',
      explanation: 'ÖSYM’nin klasik İş Hukuku tuzağıdır: 4857 s.K. m. 22’de işçinin 6 iş günü içinde itiraz etmemesi kabul sayılmaz; tam tersine 6 iş günü içinde YAZILI OLARAK KABUL EDİLMEYEN değişiklik işçiyi bağlamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işçiye yazılı olarak bildirmek suretiyle yapabilir',
      wrongPhrase: 'herhangi bir şekil şartına bağlı olmaksızın sözlü bildirimle derhâl yürürlüğe koyabilir',
      correctPhrase: 'işçiye yazılı olarak bildirmek suretiyle yapabilir',
      explanation: '4857 s.K. m. 22/1 uyarınca hem işverenin değişiklik bildirimi hem de işçinin kabul beyanı yazılı şekle tabidir.'
    }
  },
  {
    id: 'rule-isk-engelli-ve-eski-hukumlu-calistirma-oranlari-p11',
    branch: 'İş Hukuku',
    subTopic: 'Engelli ve Eski Hükümlü Çalıştırma Zorunluluğu Oranları (50 İşçi: Özel %3 Engelli; Kamu %4 Engelli + %2 Eski Hükümlü)',
    articleRef: '4857 s.K. M. 30',
    trueStatement:
      'İşverenler, elli veya daha fazla işçi çalıştırdıkları özel sektör işyerlerinde yüzde üç engelli, kamu işyerlerinde ise yüzde dört engelli ve yüzde iki eski hükümlü veya terörle mücadelede malul sayılmayacak şekilde yaralananları çalıştırmakla yükümlüdürler.',
    trueHighlight: ['elli veya daha fazla işçi çalıştırdıkları özel sektör işyerlerinde yüzde üç engelli', 'kamu işyerlerinde ise yüzde dört engelli ve yüzde iki eski hükümlü'],
    trueCorrectPhrase: '50+ işçili özel sektör işyerlerinde yalnızca %3 engelli; kamuda ise %4 engelli ve %2 eski hükümlü çalıştırma zorunluluğu vardır.',
    baseExplanation: '4857 s.K. m. 30: 50 veya daha fazla işçi çalıştıran özel sektör işyerlerinde yalnızca %3 engelli çalıştırma zorunluluğu vardır (özel sektörde eski hükümlü çalıştırma zorunluluğu kaldırılmıştır!); kamu işyerlerinde ise %4 engelli + %2 eski hükümlü zorunluluğu uygulanır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'elli veya daha fazla işçi çalıştırdıkları özel sektör işyerlerinde yüzde üç engelli, kamu işyerlerinde ise yüzde dört engelli ve yüzde iki eski hükümlü',
      wrongPhrase: 'otuz veya daha fazla işçi çalıştırdıkları özel sektör işyerlerinde yüzde dört engelli ve yüzde iki eski hükümlü, kamu işyerlerinde ise yüzde beş engelli',
      correctPhrase: 'elli veya daha fazla işçi çalıştırdıkları özel sektör işyerlerinde yüzde üç engelli, kamu işyerlerinde ise yüzde dört engelli ve yüzde iki eski hükümlü',
      explanation: '30 işçi sınırı "iş güvencesi" (m. 18) içindir! Engelli çalıştırma yükümlülüğü (m. 30) 50 işçiyle başlar ve özel sektörde eski hükümlü zorunluluğu yoktur (%3 engelli; kamuda %4 engelli + %2 eski hükümlü)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'özel sektör işyerlerinde yüzde üç engelli',
      wrongPhrase: 'özel sektör işyerlerinde yüzde üç engelli ve ayrıca yüzde üç eski hükümlü',
      correctPhrase: 'özel sektör işyerlerinde yüzde üç engelli',
      explanation: '4857 s.K. m. 30 uyarınca özel sektör işverenlerinin eski hükümlü çalıştırma zorunluluğu bulunmamaktadır.'
    }
  },
  {
    id: 'rule-isk-ara-dinlenmesi-ve-gece-calismasi-7-5-saat-p11',
    branch: 'İş Hukuku',
    subTopic: 'Ara Dinlenmesi Süreleri (15 dk / 30 dk / 1 Saat) ve Gece Çalışması Sınırı (7,5 Saat)',
    articleRef: '4857 s.K. M. 68 & 69',
    trueStatement:
      'Günlük çalışma süresinin ortalama bir zamanında işçilere; dört saat veya daha kısa süreli işlerde onbeş dakika, dört saatten fazla ve yedibuçuk saate kadar süreli işlerde yarım saat, yedibuçuk saatten fazla süreli işlerde bir saat ara dinlenmesi verilir; ara dinlenmeleri çalışma süresinden sayılmaz ve işçilerin gece çalışmaları kural olarak yedibuçuk saati geçemez.',
    trueHighlight: ['dört saat veya daha kısa süreli işlerde onbeş dakika', 'yedibuçuk saatten fazla süreli işlerde bir saat ara dinlenmesi verilir', 'ara dinlenmeleri çalışma süresinden sayılmaz', 'gece çalışmaları kural olarak yedibuçuk saati geçemez'],
    trueCorrectPhrase: 'Ara dinlenmesi 4 saate kadar 15 dk, 7,5 saate kadar 30 dk, 7,5 saatten fazlada 1 saattir ve çalışma süresinden sayılmaz; gece çalışması 7,5 saati aşamaz.',
    baseExplanation: '4857 s.K. m. 68 ve m. 69: Ara dinlenmeleri çalışma süresinden sayılmaz (15 dk / 30 dk / 1 saat). Çalışma hayatında "gece" en geç 20.00’de başlayarak en erken 06.00’ya kadar geçen ve her halde en fazla 11 saat süren dönemdir; gece çalışmaları kural olarak 7,5 saati geçemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ara dinlenmeleri çalışma süresinden sayılmaz',
      wrongPhrase: 'ara dinlenmeleri günlük çalışma süresinden sayılır ve fazla çalışma hesabına dahil edilir',
      correctPhrase: 'ara dinlenmeleri çalışma süresinden sayılmaz',
      explanation: '4857 s.K. m. 68 son fıkra uyarınca ara dinlenmeleri çalışma süresinden sayılmaz!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'gece çalışmaları kural olarak yedibuçuk saati geçemez',
      wrongPhrase: 'gece çalışmaları kural olarak onbir saati geçemez',
      correctPhrase: 'gece çalışmaları kural olarak yedibuçuk saati geçemez',
      explanation: '11 saat günlük toplam çalışmanın üst sınırıdır; gece çalışmalarının azami sınırı 4857 s.K. m. 69/3 uyarınca kural olarak 7,5 saattir!'
    }
  },

  // =========================================================================
  // 6. MÖHUK VE HUKUK FELSEFESİ / SOSYOLOJİSİ
  // =========================================================================
  {
    id: 'rule-mohuk-haksiz-fiillere-uygulanacak-hukuk-m34-p11',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Haksız Fiillere Uygulanacak Hukuk ve Sonradan Hukuk Seçimi',
    articleRef: '5718 s.K. M. 34',
    trueStatement:
      'Haksız fiillerden doğan borçlar haksız fiilin işlendiği ülke hukukuna tabidir; haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır ve taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler.',
    trueHighlight: ['haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır', 'taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler'],
    trueCorrectPhrase: 'Fiil yeri ile zarar yeri farklıysa zararın meydana geldiği ülke hukuku uygulanır; taraflar haksız fiilden sonra açıkça hukuk seçebilir.',
    baseExplanation: '5718 s.K. m. 34: Haksız fiillerde temel kural fiilin işlendiği yer hukukudur (lex loci delicti commissi). Ancak fiil yeri ile zarar yeri farklı ülkelerdeyse zararın meydana geldiği ülke hukuku uygulanır (daha sıkı ilişkili ülke istisnası saklıdır) ve taraflar haksız fiil gerçekleştikten sonra açıkça hukuk seçimi yapabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır',
      wrongPhrase: 'haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde her zaman zarar verenin millî hukuku uygulanır',
      correctPhrase: 'haksız fiilin işlendiği yer ile zararın meydana geldiği yerin farklı ülkelerde olması hâlinde zararın meydana geldiği ülke hukuku uygulanır',
      explanation: '5718 s.K. m. 34/2 uyarınca fiil yeri ile zarar yeri farklı ülkelerdeyse zarar verenin milli hukuku değil, zararın meydana geldiği ülke hukuku uygulanır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler',
      wrongPhrase: 'haksız fiillerde kamu düzeni gereği olaydan sonra dahi tarafların hukuk seçimi yapması kesinlikle yasaktır',
      correctPhrase: 'taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler',
      explanation: '5718 s.K. m. 34/4 uyarınca taraflar haksız fiilin meydana gelmesinden sonra uygulanacak hukuku açık olarak seçebilirler.'
    }
  },
  {
    id: 'rule-mohuk-milletlerarasi-yetki-anlasmasi-ve-zayif-taraf-p11',
    branch: 'MÖHUK',
    subTopic: 'Milletlerarası Yetki Anlaşması (MÖHUK m. 47) ve İş/Tüketici/Sigorta Sözleşmesi Sınırı',
    articleRef: '5718 s.K. M. 40 & 47',
    trueStatement:
      'Türk mahkemelerinin milletlerarası yetkisini iç hukukun yer itibarıyla yetki kuralları tayin eder; yer itibarıyla yetkinin münhasır yetki esasına göre tayin edilmediği hâllerde taraflar aralarındaki yabancılık unsuru taşıyan ve borç ilişkilerinden doğan uyuşmazlığın yabancı bir devletin mahkemesinde görülmesi konusunda anlaşabilirler, ancak iş, tüketici ve sigorta sözleşmelerinde işçinin, tüketicinin veya sigortalının mahkemeye başvuru hakkı yetki anlaşmasıyla sınırlandırılamaz.',
    trueHighlight: ['iç hukukun yer itibarıyla yetki kuralları tayin eder', 'yabancılık unsuru taşıyan ve borç ilişkilerinden doğan uyuşmazlığın', 'işçinin, tüketicinin veya sigortalının mahkemeye başvuru hakkı yetki anlaşmasıyla sınırlandırılamaz'],
    trueCorrectPhrase: 'Yabancı mahkemeyi yetkilendiren anlaşma münhasır olmayan borç ilişkilerinde geçerlidir; ancak işçi, tüketici ve sigortalının yetkili mahkemeleri bertaraf edilemez.',
    baseExplanation: '5718 s.K. m. 40 ve m. 47: Yabancı mahkemeyi yetkilendiren yetki anlaşması için yabancılık unsuru, borç ilişkisi, münhasır yetki olmaması ve yazılı ispat şarttır. Ancak MÖHUK m. 44, 45 ve 46’da düzenlenen iş, tüketici ve sigorta sözleşmelerinde zayıf tarafı koruyan yetki kuralları yetki anlaşmasıyla bertaraf edilemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işçinin, tüketicinin veya sigortalının mahkemeye başvuru hakkı yetki anlaşmasıyla sınırlandırılamaz',
      wrongPhrase: 'bireysel iş ve tüketici sözleşmelerinde de işveren ve satıcı lehine Türk mahkemelerinin yetkisini tamamen ortadan kaldıran yetki anlaşmaları serbestçe yapılabilir',
      correctPhrase: 'işçinin, tüketicinin veya sigortalının mahkemeye başvuru hakkı yetki anlaşmasıyla sınırlandırılamaz',
      explanation: '5718 s.K. m. 47/2 uyarınca MÖHUK m. 44 (iş), m. 45 (tüketici) ve m. 46 (sigorta) da belirlenen mahkemelerin yetkisi tarafların anlaşmasıyla bertaraf edilemez!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yabancılık unsuru taşıyan ve borç ilişkilerinden doğan uyuşmazlığın',
      wrongPhrase: 'aile hukuku, kişiler hukuku ve Türkiye’deki taşınmazların ayni haklarından doğan her türlü uyuşmazlığın',
      correctPhrase: 'yabancılık unsuru taşıyan ve borç ilişkilerinden doğan uyuşmazlığın',
      explanation: '5718 s.K. m. 47/1 uyarınca yabancı mahkemeyi yetkilendiren anlaşma yalnızca "borç ilişkilerinden" doğan ve münhasır yetkiye girmeyen uyuşmazlıklarda yapılabilir!'
    }
  },
  {
    id: 'rule-felsefe-weber-durkheim-grotius-p11',
    branch: 'MÖHUK',
    subTopic: 'Hukuk Felsefesi ve Sosyolojisi: Max Weber, Émile Durkheim ve Hugo Grotius',
    articleRef: 'Hukuk Felsefesi & Sosyolojisi',
    trueStatement:
      'Hukuk sosyolojisinde Max Weber meşru egemenlik tiplerini geleneksel, karizmatik ve yasal-ussal otorite olarak üçlü bir ayrımla incelerken; Émile Durkheim işbölümünün gelişmediği mekanik dayanışmalı toplumlarda bastırıcı-cezalandırıcı hukukun, işbölümüne dayalı organik dayanışmalı toplumlarda ise onarıcı-iade edici hukukun ağır bastığını savunmuş; Hugo Grotius ise doğal hukuku ilahi iradeden ayırarak insan aklına dayandırmıştır.',
    trueHighlight: ['geleneksel, karizmatik ve yasal-ussal otorite', 'mekanik dayanışmalı toplumlarda bastırıcı-cezalandırıcı hukukun, işbölümüne dayalı organik dayanışmalı toplumlarda ise onarıcı-iade edici hukukun', 'Hugo Grotius ise doğal hukuku ilahi iradeden ayırarak insan aklına dayandırmıştır'],
    trueCorrectPhrase: 'Weber 3 otorite tipini, Durkheim mekanik (bastırıcı) ve organik (onarıcı) dayanışmayı, Grotius ise laik-akılcı doğal hukuku temellendirmiştir.',
    baseExplanation: 'HMGS Hukuk Felsefesi ve Sosyolojisi müfredatının klasik düşünür eşleştirmesidir: Weber (geleneksel, karizmatik, yasal-ussal otorite), Durkheim (mekanik dayanışma -> bastırıcı/cezai hukuk; organik dayanışma -> onarıcı/medeni-ticari hukuk) ve Grotius (laik doğal hukuk).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mekanik dayanışmalı toplumlarda bastırıcı-cezalandırıcı hukukun, işbölümüne dayalı organik dayanışmalı toplumlarda ise onarıcı-iade edici hukukun',
      wrongPhrase: 'mekanik dayanışmalı toplumlarda yalnızca onarıcı ticaret hukukunun, organik dayanışmalı toplumlarda ise yalnızca bastırıcı ceza hukukunun',
      correctPhrase: 'mekanik dayanışmalı toplumlarda bastırıcı-cezalandırıcı hukukun, işbölümüne dayalı organik dayanışmalı toplumlarda ise onarıcı-iade edici hukukun',
      explanation: 'Durkheim’a göre benzerliğe dayanan mekanik dayanışmada bastırıcı (ceza) hukuk, uzmanlaşma ve işbölümüne dayanan organik dayanışmada ise onarıcı (iade edici) hukuk hâkimdir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Hugo Grotius ise doğal hukuku ilahi iradeden ayırarak insan aklına dayandırmıştır',
      wrongPhrase: 'Hugo Grotius ise doğal hukuku tamamen reddederek hukukun yalnızca egemenin buyruğundan ibaret olduğunu ileri sürmüştür',
      correctPhrase: 'Hugo Grotius ise doğal hukuku ilahi iradeden ayırarak insan aklına dayandırmıştır',
      explanation: 'Hukuku egemenin buyruğu olarak tanımlayan görüş Austin’in hukuki pozitivizmidir; Hugo Grotius ise modern laik doğal hukuk okulunun kurucusudur.'
    }
  },
  {
    id: 'rule-felsefe-bosluk-turleri-kural-ici-ortulu-bosluk-p11',
    branch: 'MÖHUK',
    subTopic: 'Hukuk Metodolojisi: Kural İçi Boşluk, Gerçek/Örtülü Boşluk ve Amaca Uygun Sınırlama',
    articleRef: 'TMK M. 1 & 4 (Hukuk Metodolojisi)',
    trueStatement:
      'Kanun koyucunun bilerek ve isteyerek bıraktığı kural içi boşluklarda hâkim örf ve âdet hukukuna başvurmayıp takdir yetkisini hakkaniyete göre kullanır; kanundaki bir kuralın lafzı itibarıyla olaya uygulanabilir görünmesine rağmen hükmün amacı gereği bir istisna içermemesinden kaynaklanan örtülü boşluk ise amaca uygun sınırlama yoluyla doldurulur.',
    trueHighlight: ['kural içi boşluklarda hâkim örf ve âdet hukukuna başvurmayıp takdir yetkisini hakkaniyete göre kullanır', 'örtülü boşluk ise amaca uygun sınırlama yoluyla doldurulur'],
    trueCorrectPhrase: 'Kural içi boşluk takdir yetkisiyle (TMK m. 4), örtülü (istisna) boşluk ise amaca uygun sınırlama (teleolojik redüksiyon) ile doldurulur.',
    baseExplanation: 'Hukuk metodolojisinde: 1) Kural içi boşlukta kanun hükmü mevcuttur ancak içi hâkimin takdir yetkisiyle (TMK m. 4, hakkaniyet) doldurulur; 2) Açık (gerçek) kanun boşluğunda TMK m. 1 uyarınca önce örf ve âdet hukukuna, yoksa hâkimin hukuk yaratmasına gidilir; 3) Örtülü boşlukta ise hüküm fazla geniştir, amaca uygun sınırlama (teleolojik redüksiyon) ile daraltılır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kural içi boşluklarda hâkim örf ve âdet hukukuna başvurmayıp takdir yetkisini hakkaniyete göre kullanır',
      wrongPhrase: 'kural içi boşluklarda hâkim takdir yetkisini kullanamaz ve doğrudan örf ve âdet hukukuna başvurmak zorundadır',
      correctPhrase: 'kural içi boşluklarda hâkim örf ve âdet hukukuna başvurmayıp takdir yetkisini hakkaniyete göre kullanır',
      explanation: 'Örf ve âdet hukukuna "kanun boşluğunda" (TMK m. 1/2) başvurulur; "kural içi boşlukta" ise kanunda hüküm vardır ve hâkim TMK m. 4 uyarınca takdir yetkisini hakkaniyete göre kullanır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'örtülü boşluk ise amaca uygun sınırlama yoluyla doldurulur',
      wrongPhrase: 'örtülü boşlukta hâkim hiçbir yorum yapamaz ve ceza hukukunda dahi aleyhe kıyas yoluyla yeni suç ihdas eder',
      correctPhrase: 'örtülü boşluk ise amaca uygun sınırlama yoluyla doldurulur',
      explanation: 'Örtülü (istisna) boşlukta kanun metni amacını aşacak kadar geniş kaleme alınmıştır ve "amaca uygun sınırlama" (teleolojik redüksiyon) ile daraltılarak doldurulur; ceza hukukunda kıyas ise mutlak surette yasaktır.'
    }
  }
];
