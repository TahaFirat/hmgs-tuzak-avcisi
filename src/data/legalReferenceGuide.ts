import { LegalReferenceEntry } from '../types/legalEngine';

export const LEGAL_REFERENCE_GUIDE: LegalReferenceEntry[] = [
  // 2024–2026 Yargı Paketleri (Kritik Güncellemeler)
  {
    id: 'ref-yargi-1',
    branchId: 'cmk',
    category: '2024–2026 Yargı Paketi',
    title: 'CMK İtiraz, İstinaf ve Temyiz Süreleri (7499 s.K.)',
    articleRef: '5271 s. CMK m. 268, 273, 291',
    correctRule: '8. Yargı Paketi (7499 s.K.) ile CMK’daki itiraz, istinaf, temyiz ve eski hale getirme sürelerinin tamamı 2 HAFTA olarak yeknesaklaştırılmıştır.',
    commonTrap: 'Eski mevzuattaki "7 gün" veya "15 gün" ifadeleri sınavda en sık kullanılan tuzaktır.',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-yargi-2',
    branchId: 'cmk',
    category: '2024–2026 Yargı Paketi',
    title: 'HAGB Kararına Karşı Kanun Yolu (7499 s.K.)',
    articleRef: '5271 s. CMK m. 231/12',
    correctRule: 'Hükmün açıklanmasının geri bırakılması (HAGB) kararlarına karşı artık İSTİNAF kanun yoluna (2 hafta içinde) başvurulur.',
    commonTrap: 'Eski kanundaki "HAGB kararına itiraz edilebilir" bilgisi yürürlükten kalkmıştır.',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-yargi-3',
    branchId: 'idare',
    category: '2024–2026 Yargı Paketi',
    title: 'İdarenin Zımni Ret Süresi (7331 s.K.)',
    articleRef: '2577 s. İYUK m. 10 ve m. 11',
    correctRule: 'İdareye yapılan başvurulara 30 GÜN içinde cevap verilmezse istek reddedilmiş (zımni ret) sayılır.',
    commonTrap: 'Eski "60 günlük zımni ret süresi" 7331 sayılı Kanun ile 30 güne indirilmiştir.',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-yargi-4',
    branchId: 'icra',
    category: '2024–2026 Yargı Paketi',
    title: 'Hacizli Mallarda Satış İsteme Süresi (7343 s.K.)',
    articleRef: '2004 s. İİK m. 106',
    correctRule: 'Hem taşınır hem taşınmaz mallar için hacizden itibaren satış isteme süresi 1 YIL olarak birleştirilmiştir ve satışlar UYAP üzerinden elektronik ortamda yapılır.',
    commonTrap: 'Eski "taşınırlarda 6 ay, taşınmazlarda 1 yıl" ayrımı kaldırılmıştır.',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-yargi-5',
    branchId: 'vergi',
    category: '2024–2026 Yargı Paketi',
    title: '6183 AATUHK Ödeme Emrine İtiraz Süresi',
    articleRef: '6183 s. AATUHK m. 58',
    correctRule: 'Amme alacaklarında tebliğ edilen ödeme emrine karşı vergi mahkemesinde dava açma (itiraz) süresi 15 GÜNDÜR.',
    commonTrap: 'İİK’daki 7 günlük süre ile karıştırılıp "7 gün" olarak sorulması klasik ÖSYM tuzağıdır.',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-yargi-6',
    branchId: 'genel_kamu',
    category: '2024–2026 Yargı Paketi',
    title: 'AİHM Bireysel Başvuru Süresi (15 No’lu Protokol)',
    articleRef: 'AİHS m. 35/1',
    correctRule: 'İç hukuk yollarının tüketilmesinden (AYM kararından) itibaren AİHM’e bireysel başvuru süresi 4 AYDIR.',
    commonTrap: 'Eski 6 aylık süre 15 No’lu Protokol ile 4 aya indirilmiştir.',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK']
  },

  // Kritik Süreler Tablosu
  {
    id: 'ref-sure-1',
    branchId: 'idare',
    category: 'Süreler',
    title: 'İdari Yargıda Genel Dava Açma Süreleri',
    articleRef: '2577 s. İYUK m. 7',
    correctRule: 'Danıştay ve İdare Mahkemelerinde 60 gün; Vergi Mahkemelerinde 30 gündür.',
    commonTrap: 'İvedi yargılamada (m. 20/A) dava açma 30 gün, temyiz 15 gün (istinaf yok); merkezi sınavlarda (m. 20/B) dava 10 gün, temyiz 5 gündür.',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-sure-2',
    branchId: 'hmk',
    category: 'Süreler',
    title: 'HMK Cevap, İstinaf, Temyiz ve Görevsizlik Süreleri',
    articleRef: '6100 s. HMK m. 20, 127, 345, 361',
    correctRule: 'Cevap dilekçesi 2 hafta, görevsizlik/yetkisizlik sonrası başvuru 2 hafta, istinaf 2 hafta, temyiz 2 hafta, eski hale getirme 2 haftadır.',
    commonTrap: 'Dosyanın işlemden kaldırılması sonrası yenileme süresi 3 ay; hükmün tamamlanması 1 aydır.',
    exams: ['HMGS', 'HAKIMLIK']
  },
  {
    id: 'ref-sure-3',
    branchId: 'icra',
    category: 'Süreler',
    title: 'Genel Haciz vs Kambiyo Takibi Süreleri',
    articleRef: '2004 s. İİK m. 62, 67, 68, 168',
    correctRule: 'Genel hacizde itiraz 7 gün / ödeme 7 gün; kambiyoda itiraz 5 gün (icra mahkemesine) / ödeme 10 gün; itirazın kaldırılması 6 ay, itirazın iptali 1 yıldır.',
    commonTrap: 'Kambiyo takibinde itiraz icra dairesine değil, İcra Mahkemesine 5 gün içinde yapılır ve satışı durdurur ama takibi kendiliğinden durdurmaz.',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-sure-4',
    branchId: 'medeni',
    category: 'Süreler',
    title: 'TMK Gaiplik, Mirasın Reddi ve Tenkis Süreleri',
    articleRef: '4721 s. TMK m. 33, 571, 606',
    correctRule: 'Gaiplik: ölüm tehlikesi 1 yıl, uzun süre haber alamama 5 yıl. Mirasın reddi: 3 ay. Tenkis ve iptal: 1 yıl / 10 yıl. Yasal önalım (şufa): 3 ay / 2 yıl.',
    commonTrap: 'Gaiplikte teminat süresi ölüm tehlikesinde 5 yıl, haber alamamada 15 yıl (her halde 100 yaş) olarak uygulanır.',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-sure-5',
    branchId: 'borclar',
    category: 'Süreler',
    title: 'TBK Zamanaşımı ve Hak Düşürücü Süreler',
    articleRef: '6098 s. TBK m. 28, 39, 72, 82, 146',
    correctRule: 'Genel zamanaşımı 10 yıl; haksız fiil ve sebepsiz zenginleşme 2 yıl / 10 yıl; irade sakatlığı iptal 1 yıl; aşırı yararlanma (gabin) 1 yıl / 5 yıldır.',
    commonTrap: 'İrade sakatlığı ve gabin süreleri zamanaşımı değil, hak düşürücü süredir (hakim resen gözetir).',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-sure-6',
    branchId: 'is_sgk',
    category: 'Süreler',
    title: 'İş Kanunu İşe İade ve Haklı Fesih Süreleri',
    articleRef: '4857 s. İşK m. 20, 26; 7036 s.K. m. 3',
    correctRule: 'İşe iade için fesih bildiriminden itibaren 1 AY içinde zorunlu arabuluculuk, anlaşamama tutanağından itibaren 2 HAFTA içinde dava açılır. Ahlak/iyiniyet feshi 6 iş günü / 1 yıldır.',
    commonTrap: 'İşçilik tazminatları (kıdem, ihbar, kötüniyet, yıllık izin) ve ücret alacaklarının zamanaşımı 5 YILDIR (10 yıl değil!).',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-sure-7',
    branchId: 'ticaret',
    category: 'Süreler',
    title: 'Kıymetli Evrak (Poliçe, Bono, Çek) Süreleri',
    articleRef: '6102 s. TTK m. 749, 796, 814',
    correctRule: 'Çek ibraz: aynı yer 10 gün, farklı yer 1 ay, farklı kıta 3 ay; çek zamanaşımı 3 yıl. Poliçe/bono: düzenleyene/kabul edene 3 yıl, hamilden cirantalara 1 yıl, cirantalar arası 6 ay.',
    commonTrap: 'Akdeniz’e kıyısı olan ülkeler çek ibraz süresinde aynı kıtada sayılır (1 ay).',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-sure-8',
    branchId: 'anayasa',
    category: 'Süreler',
    title: 'Anayasa Mahkemesi İptal & Bireysel Başvuru Süreleri',
    articleRef: '2709 s. Anayasa m. 148, 151',
    correctRule: 'Soyut norm denetimi: Kanun/CBK/İçtüzük esas+şekil için 60 gün (kanun şekil bozukluğu sadece 10 gün!). Bireysel başvuru: 30 gün.',
    commonTrap: 'Kanunların şekil bakımından iptali sadece Cumhurbaşkanı veya TBMM üye tamsayısının 1/5’i (120 vekil) tarafından 10 gün içinde istenebilir; itiraz (def’i) yoluyla şekil bozukluğu ileri sürülemez!',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS']
  },

  // Görevli Mahkemeler
  {
    id: 'ref-mah-1',
    branchId: 'hmk',
    category: 'Görevli Mahkemeler',
    title: 'Asliye Hukuk vs Sulh Hukuk Mahkemesi',
    articleRef: '6100 s. HMK m. 2 ve m. 4',
    correctRule: 'Dava konusunun değerine bakılmaksızın genel görevli mahkeme Asliye Hukuk’tur. Kira uyuşmazlıkları, ortaklığın giderilmesi (izale-i şüyu), zilyetliğin korunması ve çekişmesiz yargı kural olarak Sulh Hukuk’un görevidir.',
    commonTrap: 'Kira bedeli 10 milyon TL dahi olsa kira ilişkisinden doğan davalar Sulh Hukuk Mahkemesinde görülür.',
    exams: ['HMGS', 'HAKIMLIK']
  },
  {
    id: 'ref-mah-2',
    branchId: 'cmk',
    category: 'Görevli Mahkemeler',
    title: 'Asliye Ceza vs Ağır Ceza Mahkemesi',
    articleRef: '5235 s. Kanun m. 11-12',
    correctRule: 'Ağırlaştırılmış müebbet, müebbet ve 10 yıldan fazla hapis cezasını gerektiren suçlar ile yağma, irtikap, resmi belgede sahtecilik, nitelikli dolandırıcılık, hileli iflas Ağır Ceza’nın; diğerleri Asliye Ceza’nın görevidir.',
    commonTrap: 'Taksirle ölüme neden olma (TCK 85/1 — 2-6 yıl) Asliye Ceza’da, birden fazla kişinin ölümüne neden olma (85/2 — 2-15 yıl) Ağır Ceza’da görülür.',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-mah-3',
    branchId: 'mohuk',
    category: 'Görevli Mahkemeler',
    title: 'Yabancı Mahkeme Kararlarının Tanıma ve Tenfizi',
    articleRef: '5718 s. MÖHUK m. 51',
    correctRule: 'Tanıma ve tenfiz kararlarında genel görevli mahkeme Asliye Hukuk Mahkemesidir (aile hukukuna ilişkin boşanma/velayet kararlarında Aile Mahkemesi görevlidir).',
    commonTrap: 'Tenfizde "karşılıklılık (mütekabiliyet)" şartı aranırken, sadece TANIMA kararında karşılıklılık şartı aranmaz!',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK']
  },

  // Nisap & Çoğunluklar
  {
    id: 'ref-nisap-1',
    branchId: 'anayasa',
    category: 'Nisap & Çoğunluklar',
    title: 'TBMM Nitelikli Çoğunlukları (600 Üye Üzerinden)',
    articleRef: '2709 s. Anayasa m. 87, 89, 96, 105, 175',
    correctRule: 'Toplantı: 1/3 (200). Karar alt sınırı: 1/4+1 (151). CB Veto aşma / Salt çoğunluk: 301. Genel-özel af & Anayasa değişikliği referandumlu: 3/5 (360). Anayasa değişikliği referandumsuz & Yüce Divana sevk: 2/3 (400).',
    commonTrap: 'Meclis soruşturması açılmasını isteme 301, soruşturma açma kararı 360, Yüce Divana sevk 400 milletvekili ile alınır.',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS']
  },
  {
    id: 'ref-nisap-2',
    branchId: 'medeni',
    category: 'Nisap & Çoğunluklar',
    title: 'TMK Saklı Pay Oranları (Güncel)',
    articleRef: '4721 s. TMK m. 506',
    correctRule: 'Altsoy: Yasal miras payının 1/2’si. Ana ve babadan her biri: 1/4’ü. Sağ kalan eş: Altsoy veya ana-baba zümresiyle birlikte yasal payının TAMAMI (4/4), diğer hallerde 3/4’ü. Kardeşlerin saklı payı YOKTUR.',
    commonTrap: 'Kardeşlerin 1/8 saklı payı 2007 yılında (5650 s.K.) tamamen kaldırılmıştır!',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS']
  },

  // Karşılaştırmalar
  {
    id: 'ref-kars-1',
    branchId: 'avukatlik',
    category: 'Karşılaştırma',
    title: 'Avukatlık Ücret Sözleşmesi Tavanı ve Baro Organları',
    articleRef: '1136 s. AvK m. 164, 82, 114',
    correctRule: 'Avukatlık ücreti dava veya hükmolunacak şeyin değerinin %25’ini aşamaz. Baro genel kurulu 2 yılda bir (Ekim’de), TBB genel kurulu 4 yılda bir toplanır. Staj 1 yıldır (6 ay mahkeme + 6 ay avukat).',
    commonTrap: 'Baro organlarının görev süresi 2 yıl, TBB organlarının görev süresi 4 yıldır.',
    exams: ['HMGS']
  },
  {
    id: 'ref-kars-2',
    branchId: 'idare',
    category: 'Karşılaştırma',
    title: 'Hiyerarşi vs İdari Vesayet Yetkisi',
    articleRef: '2709 s. Anayasa m. 127',
    correctRule: 'Hiyerarşi aynı tüzel kişilik içinde genel ve olağan yetkidir (yerine geçip işlem yapabilir, emir verebilir). İdari vesayet farklı tüzel kişilikler arasında istisnaidir, KANUNLA verilir ve kural olarak yerine geçip işlem yapma yetkisi içermez.',
    commonTrap: 'İdari vesayet yetkisi genişletici yoruma tabi tutulamaz; kanunda açıkça öngörülmedikçe kullanılamaz.',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS']
  }
];
