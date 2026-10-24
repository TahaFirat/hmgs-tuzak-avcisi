import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS TAM KAPSAMLI MÜFREDAT PAKETİ (165+ EK KANUN KURALI = ~500 EK ÖZGÜN KART)
 * Kapsam:
 * 1. İş ve Sosyal Güvenlik Hukuku (4857 s. İşK, 7036 s. İMK, 6356 s. STİSK, 5510 s. SSGSSK)
 * 2. Vergi Hukuku ve Vergi Usul Hukuku (213 s. VUK, 6183 s. AATUHK)
 * 3. Avukatlık Hukuku (1136 s. Avukatlık Kanunu)
 * 4. Milletlerarası Özel Hukuk (5718 s. MÖHUK), Milletlerarası Hukuk ve Hukuk Felsefesi/Tarihi
 * 5. Medeni, Borçlar, HMK, CMK, TCK, İYUK, İdare, Anayasa, Ticaret ve İcra İleri Düzey Kuralları
 */
export const HMGS_COMPREHENSIVE_EXPANSION_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // BÖLÜM A: İŞ VE SOSYAL GÜVENLİK HUKUKU (4857, 7036, 6356, 5510 S. KANUNLAR)
  // =========================================================================
  {
    id: 'rule-is-1',
    branch: 'İş Hukuku',
    subTopic: 'İş Kanunu Kapsamı Dışında Kalan İşler (İstisnalar)',
    articleRef: '4857 s.K. M. 4',
    trueStatement:
      'Deniz ve hava taşıma işlerinde, elliden az işçi çalıştırılan (50 dahil) tarım ve orman işlerinin yapıldığı işyerlerinde veya işletmelerinde, ev hizmetlerinde, sporcular hakkında, rehabilite edilenler hakkında ve 507 sayılı Esnaf ve Sanatkârlar Kanununun 2 nci maddesinin tarifine uygun üç kişinin çalıştığı işyerlerinde 4857 sayılı İş Kanunu hükümleri uygulanmaz.',
    trueHighlight: ['Deniz ve hava taşıma işlerinde', 'elliden az işçi çalıştırılan (50 dahil) tarım ve orman işlerinin yapıldığı işyerlerinde', 'üç kişinin çalıştığı işyerlerinde 4857 sayılı İş Kanunu hükümleri uygulanmaz'],
    trueCorrectPhrase: 'deniz ve hava taşıma işleri, 50 ve daha az işçili tarım ve orman işleri, ev hizmetleri, sporcular, rehabilite edilenler ve 3 kişinin çalıştığı esnaf işyerleri İş Kanunu kapsamı dışındadır',
    baseExplanation: '4857 sayılı İş Kanunu m. 4 uyarınca 50 dahil daha az işçi çalıştırılan tarım ve orman işyerleri ile 3 kişinin çalıştığı esnaf işyerleri İş Kanunu kapsamı dışındadır (ancak kıyılarda yükleme-boşaltma, havacılığın yer tesisleri ve tarım sanatları İş Kanunu kapsamındadır!).',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'elliden az işçi çalıştırılan (50 dahil) tarım ve orman işlerinin yapıldığı işyerlerinde veya işletmelerinde, ev hizmetlerinde, sporcular hakkında, rehabilite edilenler hakkında ve 507 sayılı Esnaf ve Sanatkârlar Kanununun 2 nci maddesinin tarifine uygun üç kişinin çalıştığı işyerlerinde',
      wrongPhrase: 'otuzdan az işçi çalıştırılan tarım ve orman işlerinin yapıldığı işyerlerinde ve on kişinin çalıştığı esnaf işyerlerinde',
      correctPhrase: 'elliden az işçi çalıştırılan (50 dahil) tarım ve orman işlerinin yapıldığı işyerlerinde veya işletmelerinde, ev hizmetlerinde, sporcular hakkında, rehabilite edilenler hakkında ve 507 sayılı Esnaf ve Sanatkârlar Kanununun 2 nci maddesinin tarifine uygun üç kişinin çalıştığı işyerlerinde',
      explanation: '4857 s.K. m. 4 uyarınca tarım ve orman işlerinde sınır 30 değil 50 işçidir (50 dahil kapsam dışı, 51 ve üzeri kapsam içi); esnaf işyerlerinde ise sınır 3 kişidir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Deniz ve hava taşıma işlerinde',
      wrongPhrase: 'Havacılığın bütün yer tesislerinde yürütülen işler ile kıyılarda ve limanlarda gemilerden karaya yapılan yükleme ve boşaltma işlerinde',
      correctPhrase: 'Deniz ve hava taşıma işlerinde',
      explanation: '4857 s.K. m. 4/2 uyarınca deniz ve hava taşıma işleri İş Kanunu kapsamı dışında olmakla birlikte, kıyılarda/limanlarda gemilerden karaya ve karadan gemilere yapılan yükleme-boşaltma işleri ile havacılığın bütün yer tesislerinde yürütülen işler İş Kanunu kapsamındadır!'
    }
  },
  {
    id: 'rule-is-2',
    branch: 'İş Hukuku',
    subTopic: 'Deneme Süreli İş Sözleşmesi Süresi',
    articleRef: '4857 s.K. M. 15',
    trueStatement:
      'Taraflarca iş sözleşmesine bir deneme kaydı konulduğunda, bunun süresi en çok iki ay olabilir; ancak deneme süresi toplu iş sözleşmeleriyle dört aya kadar uzatılabilir ve deneme süresi içinde taraflar iş sözleşmesini bildirim süresine gerek olmaksızın ve tazminatsız feshedebilir.',
    trueHighlight: ['bunun süresi en çok iki ay olabilir', 'toplu iş sözleşmeleriyle dört aya kadar uzatılabilir', 'bildirim süresine gerek olmaksızın ve tazminatsız feshedebilir'],
    trueCorrectPhrase: 'deneme süresi bireysel iş sözleşmesinde en çok 2 ay, toplu iş sözleşmesiyle en çok 4 ay olabilir ve bu sürede bildirim süresiz/tazminatsız fesih yapılabilir',
    baseExplanation: '4857 s.K. m. 15 uyarınca deneme süresi en çok 2 aydır, toplu iş sözleşmeleriyle 4 aya kadar uzatılabilir; işçinin çalıştığı günler için ücret ve diğer hakları saklıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bunun süresi en çok iki ay olabilir; ancak deneme süresi toplu iş sözleşmeleriyle dört aya kadar uzatılabilir',
      wrongPhrase: 'bunun süresi en çok üç ay olabilir; ancak deneme süresi bireysel anlaşmayla altı aya kadar uzatılabilir',
      correctPhrase: 'bunun süresi en çok iki ay olabilir; ancak deneme süresi toplu iş sözleşmeleriyle dört aya kadar uzatılabilir',
      explanation: '4857 s.K. m. 15 uyarınca deneme süresi bireysel sözleşmeyle en çok 2 ay, yalnız toplu iş sözleşmesiyle 4 aya kadar uzatılabilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'deneme süresi içinde taraflar iş sözleşmesini bildirim süresine gerek olmaksızın ve tazminatsız feshedebilir',
      wrongPhrase: 'deneme süresi içinde iş sözleşmesinin feshedilmesi hâlinde işçiye çalıştığı günler için de ücret ödenmez',
      correctPhrase: 'deneme süresi içinde taraflar iş sözleşmesini bildirim süresine gerek olmaksızın ve tazminatsız feshedebilir',
      explanation: '4857 s.K. m. 15/2 uyarınca deneme süresi içinde fesih bildirim süresiz ve tazminatsız yapılabilir; ancak işçinin çalıştığı günler için ücret ve diğer hakları saklıdır!'
    }
  },
  {
    id: 'rule-is-3',
    branch: 'İş Hukuku',
    subTopic: 'Süreli Fesihte İhbar Süreleri ve Yeni İş Arama İzni',
    articleRef: '4857 s.K. M. 17 & 27',
    trueStatement:
      'Belirsiz süreli iş sözleşmelerinin feshinde bildirim süreleri; işi altı aydan az sürmüş işçi için iki hafta, altı aydan birbuçuk yıla kadar sürmüş işçi için dört hafta, birbuçuk yıldan üç yıla kadar sürmüş işçi için altı hafta ve üç yıldan fazla sürmüş işçi için sekiz haftadır; bildirim süreleri içinde işveren işçiye günde iki saatten az olmamak üzere yeni iş arama izni vermek zorundadır.',
    trueHighlight: ['altı aydan az sürmüş işçi için iki hafta', 'birbuçuk yıla kadar sürmüş işçi için dört hafta', 'üç yıla kadar sürmüş işçi için altı hafta ve üç yıldan fazla sürmüş işçi için sekiz haftadır', 'günde iki saatten az olmamak üzere yeni iş arama izni'],
    trueCorrectPhrase: 'ihbar süreleri kıdeme göre 2 - 4 - 6 - 8 haftadır (bu süreler asgaridir, sözleşmeyle artırılabilir) ve yeni iş arama izni günde en az 2 saattir',
    baseExplanation: '4857 s.K. m. 17 ve m. 27 uyarınca ihbar süreleri 2, 4, 6 ve 8 haftadır; işveren bildirim süresinde günde en az 2 saat iş arama izni vermelidir, vermezse veya işçiyi çalıştırırsa bu sürenin ücretini %100 zamlı öder.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işi altı aydan az sürmüş işçi için iki hafta, altı aydan birbuçuk yıla kadar sürmüş işçi için dört hafta, birbuçuk yıldan üç yıla kadar sürmüş işçi için altı hafta ve üç yıldan fazla sürmüş işçi için sekiz haftadır',
      wrongPhrase: 'işi bir yıldan az sürmüş işçi için bir hafta, bir yıldan üç yıla kadar sürmüş işçi için üç hafta ve üç yıldan fazla sürmüş işçi için altı haftadır',
      correctPhrase: 'işi altı aydan az sürmüş işçi için iki hafta, altı aydan birbuçuk yıla kadar sürmüş işçi için dört hafta, birbuçuk yıldan üç yıla kadar sürmüş işçi için altı hafta ve üç yıldan fazla sürmüş işçi için sekiz haftadır',
      explanation: '4857 s.K. m. 17 uyarınca ihbar önelleri: 0-6 ay -> 2 hafta; 6 ay-1,5 yıl -> 4 hafta; 1,5 yıl-3 yıl -> 6 hafta; 3 yıldan fazla -> 8 haftadır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bildirim süreleri içinde işveren işçiye günde iki saatten az olmamak üzere yeni iş arama izni vermek zorundadır',
      wrongPhrase: 'kanunda yazılı bildirim süreleri mutlak emredici olup iş sözleşmesi veya toplu iş sözleşmesi ile işçi lehine dahi artırılamaz',
      correctPhrase: 'bildirim süreleri içinde işveren işçiye günde iki saatten az olmamak üzere yeni iş arama izni vermek zorundadır',
      explanation: '4857 s.K. m. 17/3 uyarınca kanundaki bildirim süreleri asgari olup sözleşmeler ile artırılabilir (nispi emredici hükümdür).'
    }
  },
  {
    id: 'rule-is-4',
    branch: 'İş Hukuku',
    subTopic: 'İş Güvencesinin Şartları (30 İşçi ve 6 Ay Kıdem)',
    articleRef: '4857 s.K. M. 18',
    trueStatement:
      'Otuz veya daha fazla işçi çalıştıran işyerlerinde en az altı aylık kıdemi olan belirsiz süreli iş sözleşmesiyle çalışan işçinin sözleşmesini fesheden işveren, işçinin yeterliliğinden veya davranışlarından ya da işletmenin, işyerinin veya işin gereklerinden kaynaklanan geçerli bir sebebe dayanmak zorundadır; yer altı işlerinde çalışan işçilerde altı aylık kıdem şartı aranmaz.',
    trueHighlight: ['Otuz veya daha fazla işçi çalıştıran işyerlerinde', 'en az altı aylık kıdemi olan belirsiz süreli iş sözleşmesiyle çalışan', 'yer altı işlerinde çalışan işçilerde altı aylık kıdem şartı aranmaz'],
    trueCorrectPhrase: 'iş güvencesi için işverenin aynı işkolundaki işyerlerinde toplam en az 30 işçi çalışması, işçinin belirsiz süreli sözleşmeyle çalışması ve en az 6 ay kıdemi olması (yer altı işçilerinde kıdem aranmaz!) gerekir',
    baseExplanation: '4857 s.K. m. 18 uyarınca iş güvencesi şartları: 1) Belirsiz süreli iş sözleşmesi, 2) Aynı işkolunda toplam en az 30 işçi, 3) En az 6 ay kıdem (yer altı işlerinde kıdem şartı aranmaz), 4) İşletmenin bütününü sevk ve idare eden işveren vekili olmamak.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'Otuz veya daha fazla işçi çalıştıran işyerlerinde en az altı aylık kıdemi olan belirsiz süreli iş sözleşmesiyle çalışan',
      wrongPhrase: 'Elli veya daha fazla işçi çalıştıran işyerlerinde en az bir yıllık kıdemi olan belirli veya belirsiz süreli iş sözleşmesiyle çalışan',
      correctPhrase: 'Otuz veya daha fazla işçi çalıştıran işyerlerinde en az altı aylık kıdemi olan belirsiz süreli iş sözleşmesiyle çalışan',
      explanation: '4857 s.K. m. 18 uyarınca iş güvencesi kapsamında işçi sayısı sınırı 50 değil 30, kıdem şartı ise 1 yıl değil 6 aydır ve yalnızca belirsiz süreli iş sözleşmelerinde uygulanır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yer altı işlerinde çalışan işçilerde altı aylık kıdem şartı aranmaz',
      wrongPhrase: 'yer altı işlerinde çalışan işçilerde de en az altı aylık kıdem şartı mutlak olarak aranır',
      correctPhrase: 'yer altı işlerinde çalışan işçilerde altı aylık kıdem şartı aranmaz',
      explanation: '6552 sayılı Kanunla 4857 s.K. m. 18/1’e eklenen cümle uyarınca yer altı işlerinde çalışan işçilerde iş güvencesi için 6 aylık kıdem şartı aranmaz!'
    }
  },
  {
    id: 'rule-is-5',
    branch: 'İş Hukuku',
    subTopic: 'İşe İade Süreci: 1 Ay Arabulucu, 2 Hafta Dava, 10 İş Günü Başvuru',
    articleRef: '4857 s.K. M. 20-21',
    trueStatement:
      'İş sözleşmesi feshedilen işçi, fesih bildiriminde sebep gösterilmediği veya gösterilen sebebin geçerli bir sebep olmadığı iddiası ile fesih bildiriminin tebliği tarihinden itibaren bir ay içinde işe iade talebiyle arabulucuya başvurmak zorundadır; arabuluculuk faaliyeti sonunda anlaşmaya varılamaması hâlinde, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir; kesinleşen mahkeme veya özel hakem kararının tebliğinden itibaren işçi on iş günü içinde işe başlamak için işverene başvuruda bulunmak zorundadır.',
    trueHighlight: ['fesih bildiriminin tebliği tarihinden itibaren bir ay içinde işe iade talebiyle arabulucuya başvurmak zorundadır', 'son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir', 'kesinleşen mahkeme veya özel hakem kararının tebliğinden itibaren işçi on iş günü içinde işe başlamak için işverene başvuruda bulunmak zorundadır'],
    trueCorrectPhrase: 'işe iadede arabulucuya başvuru süresi tebliğden itibaren 1 ay, dava açma süresi son tutanaktan itibaren 2 hafta, kesinleşen karar sonrası işçinin işverene başvurusu 10 iş günü, işverenin işe başlatma süresi 1 aydır',
    baseExplanation: '4857 s.K. m. 20-21 altın HMGS formülü: 1 Ay (Arabulucuya başvuru) -> 2 Hafta (İş mahkemesinde dava) -> 10 İş Günü (Kesinleşen kararın tebliğinden itibaren işçinin işverene başvurusu) -> 1 Ay (İşverenin işçiyi işe başlatması).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'fesih bildiriminin tebliği tarihinden itibaren bir ay içinde işe iade talebiyle arabulucuya başvurmak zorundadır; arabuluculuk faaliyeti sonunda anlaşmaya varılamaması hâlinde, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir; kesinleşen mahkeme veya özel hakem kararının tebliğinden itibaren işçi on iş günü içinde',
      wrongPhrase: 'fesih bildiriminin tebliği tarihinden itibaren iki hafta içinde arabulucuya başvurmak zorundadır; anlaşmaya varılamaması hâlinde bir ay içinde iş mahkemesinde dava açılabilir; kesinleşen kararın tebliğinden itibaren işçi otuz gün içinde',
      correctPhrase: 'fesih bildiriminin tebliği tarihinden itibaren bir ay içinde işe iade talebiyle arabulucuya başvurmak zorundadır; arabuluculuk faaliyeti sonunda anlaşmaya varılamaması hâlinde, son tutanağın düzenlendiği tarihten itibaren iki hafta içinde iş mahkemesinde dava açılabilir; kesinleşen mahkeme veya özel hakem kararının tebliğinden itibaren işçi on iş günü içinde',
      explanation: 'İşe iadede sürelerin sırası çok sık karıştırılır: Arabulucuya başvuru 1 ay, arabuluculuk son tutanağından itibaren dava açma 2 hafta, kesinleşen kararın tebliğinden itibaren işçinin işe başlama başvurusu ise 10 iş günüdür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kesinleşen mahkeme veya özel hakem kararının tebliğinden itibaren işçi on iş günü içinde işe başlamak için işverene başvuruda bulunmak zorundadır',
      wrongPhrase: 'işe iade davalarında bölge adliye mahkemesi kararlarına karşı Yargıtaya temyiz yoluna başvurulabilir ve işçi on iş günü içinde başvuruda bulunur',
      correctPhrase: 'kesinleşen mahkeme veya özel hakem kararının tebliğinden itibaren işçi on iş günü içinde işe başlamak için işverene başvuruda bulunmak zorundadır',
      explanation: '7036 sayılı İş Mahkemeleri Kanunu m. 8/1-a ve 4857 s.K. m. 20/3 uyarınca işe iade davalarında bölge adliye mahkemesi (istinaf) kararları kesindir, temyiz yolu kapalıdır!'
    }
  },
  {
    id: 'rule-is-6',
    branch: 'İş Hukuku',
    subTopic: 'İş Güvencesi Tazminatı ve Boşta Geçen Süre Ücreti',
    articleRef: '4857 s.K. M. 21',
    trueStatement:
      'Mahkeme veya özel hakem feshin geçersizliğine karar verdiğinde, işveren işçiyi bir ay içinde işe başlatmazsa, işçiye en az dört aylık ve en çok sekiz aylık ücreti tutarında tazminat ödemekle yükümlü olur; ayrıca kararın kesinleşmesine kadar çalıştırılmadığı süre için işçiye en çok dört aya kadar doğmuş bulunan ücret ve diğer hakları ödenir.',
    trueHighlight: ['bir ay içinde işe başlatmazsa', 'en az dört aylık ve en çok sekiz aylık ücreti tutarında tazminat', 'en çok dört aya kadar doğmuş bulunan ücret ve diğer hakları ödenir'],
    trueCorrectPhrase: 'işe başlatmama (iş güvencesi) tazminatı en az 4 en çok 8 aylık ücret (sendikal fesihte en az 1 yıllık ücret), boşta geçen süre ücreti ise en çok 4 aya kadar ücrettir',
    baseExplanation: '4857 s.K. m. 21 uyarınca iş güvencesi tazminatı 4-8 aylık çıplak ücret, boşta geçen süre ücreti ise en çok 4 aya kadar giydirilmiş ücrettir; 6356 s.K. m. 25 uyarınca sendikal nedenle fesihte ise tazminat işçinin 1 yıllık ücretinden az olamaz!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işçiye en az dört aylık ve en çok sekiz aylık ücreti tutarında tazminat ödemekle yükümlü olur; ayrıca kararın kesinleşmesine kadar çalıştırılmadığı süre için işçiye en çok dört aya kadar doğmuş bulunan ücret ve diğer hakları ödenir',
      wrongPhrase: 'işçiye en az altı aylık ve en çok on iki aylık ücreti tutarında tazminat ödemekle yükümlü olur; ayrıca çalıştırılmadığı süre için işçiye en çok altı aya kadar doğmuş bulunan ücreti ödenir',
      correctPhrase: 'işçiye en az dört aylık ve en çok sekiz aylık ücreti tutarında tazminat ödemekle yükümlü olur; ayrıca kararın kesinleşmesine kadar çalıştırılmadığı süre için işçiye en çok dört aya kadar doğmuş bulunan ücret ve diğer hakları ödenir',
      explanation: '4857 s.K. m. 21 uyarınca işe başlatmama tazminatı 4 ila 8 aylık ücret, boşta geçen süre ücreti ise en çok 4 aya kadar ücret ve diğer haklardır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kararın kesinleşmesine kadar çalıştırılmadığı süre için işçiye en çok dört aya kadar doğmuş bulunan ücret ve diğer hakları ödenir',
      wrongPhrase: 'işveren işçiyi süresi içinde işe başlatsa dahi işçiye dört aylık işe başlatmama tazminatını ödemek zorundadır',
      correctPhrase: 'kararın kesinleşmesine kadar çalıştırılmadığı süre için işçiye en çok dört aya kadar doğmuş bulunan ücret ve diğer hakları ödenir',
      explanation: 'İşveren işçiyi işe başlatırsa 4-8 aylık işe başlatmama tazminatını ödemez; yalnızca en çok 4 aya kadar boşta geçen süre ücretini öder (daha önce ödediği ihbar ve kıdem tazminatını da bundan mahsup eder).'
    }
  },
  {
    id: 'rule-is-7',
    branch: 'İş Hukuku',
    subTopic: 'Ahlak ve İyiniyet Kurallarına Uymayan Hallerde Haklı Fesih Süresi',
    articleRef: '4857 s.K. M. 26',
    trueStatement:
      'İş Kanunu’nun 24 ve 25 inci maddelerde gösterilen ahlak ve iyiniyet kurallarına uymayan hallere dayanarak işçi veya işveren için tanınmış olan sözleşmeyi fesih yetkisi, iki taraftan birinin bu çeşit davranışlarda bulunduğunu diğer tarafın öğrendiği günden başlayarak altı iş günü geçtikten ve her hâlde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz; ancak işçinin olayda maddi çıkar sağlaması hâlinde bir yıllık süre uygulanmaz.',
    trueHighlight: ['öğrendiği günden başlayarak altı iş günü geçtikten', 'her hâlde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz', 'işçinin olayda maddi çıkar sağlaması hâlinde bir yıllık süre uygulanmaz'],
    trueCorrectPhrase: 'ahlak ve iyiniyet kurallarına aykırılık nedeniyle haklı fesih süresi öğrenmeden itibaren 6 iş günü ve her hâlde fiilden itibaren 1 yıldır (hak düşürücü süre); işçinin maddi çıkar sağlamasında 1 yıllık üst süre uygulanmaz',
    baseExplanation: '4857 s.K. m. 26 uyarınca 6 iş günü ve 1 yıllık hak düşürücü süre yalnızca "ahlak ve iyiniyet kurallarına uymayan haller ve benzerleri" (m. 24/II ve m. 25/II) için geçerlidir; sağlık sebepleri ve zorlayıcı sebeplerde bu süre uygulanmaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği günden başlayarak altı iş günü geçtikten ve her hâlde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz',
      wrongPhrase: 'öğrendiği günden başlayarak on iş günü geçtikten ve her hâlde fiilin gerçekleşmesinden itibaren iki yıl sonra kullanılamaz',
      correctPhrase: 'öğrendiği günden başlayarak altı iş günü geçtikten ve her hâlde fiilin gerçekleşmesinden itibaren bir yıl sonra kullanılamaz',
      explanation: '4857 s.K. m. 26 uyarınca haklı fesih hakkını kullanma süresi 6 takvim günü veya 10 iş günü değil, 6 İŞ GÜNÜ ve her hâlde fiilden itibaren 1 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak işçinin olayda maddi çıkar sağlaması hâlinde bir yıllık süre uygulanmaz',
      wrongPhrase: 'işçinin olayda maddi çıkar sağlaması hâlinde de bir yıllık mutlak hak düşürücü süre her durumda uygulanır',
      correctPhrase: 'ancak işçinin olayda maddi çıkar sağlaması hâlinde bir yıllık süre uygulanmaz',
      explanation: '4857 s.K. m. 26/1 son cümle uyarınca işçinin olayda maddi çıkar sağlaması hâlinde 1 yıllık üst süre uygulanmaz (öğrenmeden itibaren 6 iş günü kuralı ise uygulanmaya devam eder).'
    }
  },
  {
    id: 'rule-is-8',
    branch: 'İş Hukuku',
    subTopic: 'Yıllık Ücretli İzin Süreleri ve Yaş Koruması',
    articleRef: '4857 s.K. M. 53',
    trueStatement:
      'İşyerinde işe başladığı günden itibaren, deneme süresi de içinde olmak üzere, en az bir yıl çalışmış olan işçilere yıllık ücretli izin verilir; izin süresi hizmet süresi bir yıldan beş yıla kadar (beş yıl dahil) olanlara ondört günden, beş yıldan fazla onbeş yıldan az olanlara yirmi günden, onbeş yıl (dahil) ve daha fazla olanlara yirmialtı günden az olamaz; ancak onsekiz ve daha küçük yaştaki işçilerle elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz.',
    trueHighlight: ['deneme süresi de içinde olmak üzere, en az bir yıl çalışmış olan işçilere', 'ondört günden, beş yıldan fazla onbeş yıldan az olanlara yirmi günden, onbeş yıl (dahil) ve daha fazla olanlara yirmialtı günden az olamaz', 'onsekiz ve daha küçük yaştaki işçilerle elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz'],
    trueCorrectPhrase: 'yıllık ücretli izin süreleri 14 - 20 - 26 gündür (yer altı işçilerinde dörder gün artırılarak 18 - 24 - 30 gün uygulanır); 18 ve daha küçük ile 50 ve daha yukarı yaştakilere en az 20 gün izin verilir',
    baseExplanation: '4857 s.K. m. 53 uyarınca yıllık izin süreleri 14-20-26 gündür (yer altı işlerinde +4 gün); 18 yaş ve altı ile 50 yaş ve üstü işçilere kıdemleri 1 yıl olsa dahi en az 20 gün yıllık izin verilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ondört günden, beş yıldan fazla onbeş yıldan az olanlara yirmi günden, onbeş yıl (dahil) ve daha fazla olanlara yirmialtı günden az olamaz; ancak onsekiz ve daha küçük yaştaki işçilerle elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz',
      wrongPhrase: 'oniki günden, beş yıldan fazla onbeş yıldan az olanlara onsekiz günden, onbeş yıl ve daha fazla olanlara yirmidört günden az olamaz; ellibeş yaş üstü işçilere ise en az onaltı gün izin verilir',
      correctPhrase: 'ondört günden, beş yıldan fazla onbeş yıldan az olanlara yirmi günden, onbeş yıl (dahil) ve daha fazla olanlara yirmialtı günden az olamaz; ancak onsekiz ve daha küçük yaştaki işçilerle elli ve daha yukarı yaştaki işçilere verilecek yıllık ücretli izin süresi yirmi günden az olamaz',
      explanation: '4857 s.K. m. 53 uyarınca asgari yıllık ücretli izin süreleri 14 - 20 - 26 gündür ve 18 ve daha küçük yaştaki işçilerle 50 ve daha yukarı yaştaki işçilere verilecek izin 20 günden az olamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İşyerinde işe başladığı günden itibaren, deneme süresi de içinde olmak üzere, en az bir yıl çalışmış olan işçilere yıllık ücretli izin verilir',
      wrongPhrase: 'Deneme süresi yıllık ücretli izin kıdeminin hesabına katılmaz ve işçi yıllık izin hakkından önceden feragat edebilir',
      correctPhrase: 'İşyerinde işe başladığı günden itibaren, deneme süresi de içinde olmak üzere, en az bir yıl çalışmış olan işçilere yıllık ücretli izin verilir',
      explanation: '4857 s.K. m. 53 uyarınca deneme süresi yıllık izin kıdemine dahildir ve yıllık ücretli izin hakkından vazgeçilemez!'
    }
  },
  {
    id: 'rule-is-9',
    branch: 'İş Hukuku',
    subTopic: 'Fazla Çalışma ve Fazla Sürelerle Çalışma (45 Saat & 270 Saat)',
    articleRef: '4857 s.K. M. 41 & 63',
    trueStatement:
      'Genel bakımdan çalışma süresi haftada en çok kırkbeş saattir; haftalık kırkbeş saati aşan çalışmalar fazla çalışma olup her bir saat fazla çalışma için verilecek ücret normal çalışma ücretinin saat başına düşen miktarının yüzde elli yükseltilmesi suretiyle ödenir (veya işçi isterse bir saat otuz dakika serbest zaman olarak kullanılır); fazla çalışma süresinin toplamı bir yılda ikiyüzyetmiş saatten fazla olamaz.',
    trueHighlight: ['haftada en çok kırkbeş saattir', 'yüzde elli yükseltilmesi suretiyle ödenir (veya işçi isterse bir saat otuz dakika serbest zaman olarak kullanılır)', 'bir yılda ikiyüzyetmiş saatten fazla olamaz'],
    trueCorrectPhrase: 'haftalık 45 saati aşan fazla çalışmada ücret %50 zamlı (serbest zaman olarak 1 saat 30 dk), 45 saatin altında kararlaştırılan süreyi aşan fazla sürelerle çalışmada ise %25 zamlı (serbest zaman olarak 1 saat 15 dk) ödenir; yıllık fazla çalışma sınırı 270 saattir',
    baseExplanation: '4857 s.K. m. 41 uyarınca fazla çalışmada %50 zamlı ücret (veya 1,5 saat serbest zaman), fazla sürelerle çalışmada %25 zamlı ücret (veya 1 saat 15 dk serbest zaman) uygulanır; serbest zaman 6 ay içinde kullandırılır ve yıllık fazla çalışma toplamı 270 saati aşamaz.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'yüzde elli yükseltilmesi suretiyle ödenir (veya işçi isterse bir saat otuz dakika serbest zaman olarak kullanılır); fazla çalışma süresinin toplamı bir yılda ikiyüzyetmiş saatten fazla olamaz',
      wrongPhrase: 'yüzde yirmibeş yükseltilmesi suretiyle ödenir; fazla çalışma süresinin toplamı bir yılda üçyüzaltmış saatten fazla olamaz',
      correctPhrase: 'yüzde elli yükseltilmesi suretiyle ödenir (veya işçi isterse bir saat otuz dakika serbest zaman olarak kullanılır); fazla çalışma süresinin toplamı bir yılda ikiyüzyetmiş saatten fazla olamaz',
      explanation: '%25 artırım "fazla sürelerle çalışma" içindir; haftalık 45 saati aşan "fazla çalışma" ücreti %50 zamlı ödenir ve yıllık azami sınır 270 saattir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'veya işçi isterse bir saat otuz dakika serbest zaman olarak kullanılır',
      wrongPhrase: 'veya işverenin tek taraflı kararıyla iki yıl içinde serbest zaman olarak kullandırılır',
      correctPhrase: 'veya işçi isterse bir saat otuz dakika serbest zaman olarak kullanılır',
      explanation: 'Ücret yerine serbest zaman kullanılması işverenin değil işçinin talebine bağlıdır ve işveren bu serbest zamanı 6 ay içinde çalışma süreleri içinde ve ücretinde kesinti yapmadan kullandırmak zorundadır!'
    }
  },
  {
    id: 'rule-is-10',
    branch: 'İş Hukuku',
    subTopic: 'İş Hukukunda Dava Şartı Arabuluculuk Kapsamı ve İstisnası',
    articleRef: '7036 s.K. M. 3',
    trueStatement:
      'Kanuna, bireysel veya toplu iş sözleşmesine dayanan işçi veya işveren alacağı ve tazminatı ile işe iade talebiyle açılan davalarda, arabulucuya başvurulmuş olması dava şartıdır; ancak iş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile bunlarla ilgili tespit, itiraz ve rücu davalarında arabulucuya başvurulması dava şartı değildir.',
    trueHighlight: ['işçi veya işveren alacağı ve tazminatı ile işe iade talebiyle açılan davalarda, arabulucuya başvurulmuş olması dava şartıdır', 'iş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile bunlarla ilgili tespit, itiraz ve rücu davalarında arabulucuya başvurulması dava şartı değildir'],
    trueCorrectPhrase: 'işçi/işveren alacak ve tazminatları ile işe iade davalarında arabuluculuk dava şartıdır (süre 3 hafta + 1 hafta); ancak iş kazası ve meslek hastalığından doğan tazminat, tespit ve rücu davalarında zorunlu arabuluculuk uygulanmaz',
    baseExplanation: '7036 sayılı İş Mahkemeleri Kanunu m. 3/3 uyarınca iş kazası veya meslek hastalığından kaynaklanan maddi/manevi tazminat, tespit, itiraz ve rücu davalarında dava şartı arabuluculuk uygulanmaz; doğrudan iş mahkemesinde dava açılır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak iş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile bunlarla ilgili tespit, itiraz ve rücu davalarında arabulucuya başvurulması dava şartı değildir',
      wrongPhrase: 'iş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile rücu davalarında da arabulucuya başvurulması zorunlu dava şartıdır',
      correctPhrase: 'ancak iş kazası veya meslek hastalığından kaynaklanan maddi ve manevi tazminat ile bunlarla ilgili tespit, itiraz ve rücu davalarında arabulucuya başvurulması dava şartı değildir',
      explanation: 'ÖSYM’nin en sevdiği İş Hukuku tuzağıdır: 7036 s.K. m. 3/3 uyarınca iş kazası veya meslek hastalığından kaynaklanan maddi/manevi tazminat ve rücu davaları zorunlu arabuluculuk kapsamı dışındadır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işçi veya işveren alacağı ve tazminatı ile işe iade talebiyle açılan davalarda, arabulucuya başvurulmuş olması dava şartıdır',
      wrongPhrase: 'iş uyuşmazlıklarında arabulucu başvuruyu altı hafta içinde sonuçlandırır ve bu süre en fazla iki hafta uzatılabilir',
      correctPhrase: 'işçi veya işveren alacağı ve tazminatı ile işe iade talebiyle açılan davalarda, arabulucuya başvurulmuş olması dava şartıdır',
      explanation: '6 hafta + 2 hafta ticari arabuluculuk süresidir (TTK m. 5/A); 7036 s.K. m. 3/10 uyarınca iş uyuşmazlıklarında arabuluculuk süresi 3 hafta + zorunlu hallerde en çok 1 hafta uzatmadır!'
    }
  },
  {
    id: 'rule-is-11',
    branch: 'İş Hukuku',
    subTopic: 'Kıdem, İhbar, Kötüniyet ve Yıllık İzin Alacaklarında Zamanaşımı',
    articleRef: '4857 s.K. M. 32 & Ek M. 3',
    trueStatement:
      'İş sözleşmesinden kaynaklanan ücret alacakları ile yıllık izin ücreti, kıdem tazminatı, iş sözleşmesinin bildirim şartına uyulmaksızın feshinden kaynaklanan (ihbar) tazminatı, kötüniyet tazminatı ve eşit davranma ilkesine uyulmaksızın fesihten kaynaklanan tazminatların zamanaşımı süresi beş yıldır.',
    trueHighlight: ['ücret alacakları ile yıllık izin ücreti, kıdem tazminatı', 'ihbar) tazminatı, kötüniyet tazminatı', 'zamanaşımı süresi beş yıldır'],
    trueCorrectPhrase: '7036 s.K. değişikliği sonrasında (4857 s.K. Ek m. 3) ücret alacakları yanında kıdem tazminatı, ihbar tazminatı, kötüniyet tazminatı ve yıllık izin ücreti alacaklarında da zamanaşımı süresi 5 yıldır',
    baseExplanation: '7036 sayılı Kanunla 4857 s.K.’ya eklenen Ek Madde 3 uyarınca kıdem, ihbar, kötüniyet, eşit davranmama tazminatları ve yıllık izin ücretinde zamanaşımı süresi 10 yıldan 5 yıla indirilmiştir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'zamanaşımı süresi beş yıldır',
      wrongPhrase: 'zamanaşımı süresi on yıldır',
      correctPhrase: 'zamanaşımı süresi beş yıldır',
      explanation: '7036 sayılı Kanun (2017) ile 4857 sayılı İş Kanunu Ek Madde 3 uyarınca kıdem tazminatı, ihbar tazminatı, kötüniyet tazminatı ve yıllık izin ücreti zamanaşımı 10 yıldan 5 yıla indirilmiştir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'İş sözleşmesinden kaynaklanan ücret alacakları',
      wrongPhrase: 'Ücret alacaklarının gününde ödenmemesi hâlinde uygulanacak faiz kanuni faiz oranı olup iş sözleşmesinden kaynaklanan ücret alacakları',
      correctPhrase: 'İş sözleşmesinden kaynaklanan ücret alacakları',
      explanation: '4857 s.K. m. 34 uyarınca gününde ödenmeyen ücret alacakları (ve kıdem tazminatı) için yasal faiz değil, mevduata uygulanan en yüksek faiz oranı uygulanır!'
    }
  },
  {
    id: 'rule-is-12',
    branch: 'İş Hukuku',
    subTopic: 'Toplu İş Sözleşmesi Yetki Barajları (%1 İşkolu, Yarıdan Fazla İşyeri, %40 İşletme)',
    articleRef: '6356 s.K. M. 41 & 35',
    trueStatement:
      'Kurulu bulunduğu işkolunda çalışan işçilerin en az yüzde birinin üyesi bulunması şartıyla işçi sendikası, toplu iş sözleşmesi kapsamına girecek işyerinde başvuru tarihinde çalışan işçilerin yarıdan fazlasının, işletmede ise yüzde kırkının kendi üyesi bulunması hâlinde bu işyeri veya işletme için toplu iş sözleşmesi yapmaya yetkilidir; toplu iş sözleşmesi en az bir ve en çok üç yıl süreli olarak yapılabilir.',
    trueHighlight: ['işkolunda çalışan işçilerin en az yüzde birinin', 'işyerinde başvuru tarihinde çalışan işçilerin yarıdan fazlasının, işletmede ise yüzde kırkının', 'en az bir ve en çok üç yıl süreli olarak yapılabilir'],
    trueCorrectPhrase: '6356 s.K. uyarınca toplu iş sözleşmesi yetki şartları: %1 işkolu barajı + işyerinde yarıdan fazla (%50+1), işletmede ise %40 üyelik çoğunluğudur; TİS süresi en az 1 en çok 3 yıldır',
    baseExplanation: '6356 sayılı Sendikalar ve Toplu İş Sözleşmesi Kanunu m. 35 ve m. 41 uyarınca yetki için %1 işkolu barajı, işyerinde yarıdan fazla (%50+1) ve işletme toplu iş sözleşmesinde %40 çoğunluk aranır; TİS süresi 1 ila 3 yıldır (faaliyeti 1 yıldan az süren işlerde 1 yıldan az olabilir).',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'işkolunda çalışan işçilerin en az yüzde birinin üyesi bulunması şartıyla işçi sendikası, toplu iş sözleşmesi kapsamına girecek işyerinde başvuru tarihinde çalışan işçilerin yarıdan fazlasının, işletmede ise yüzde kırkının',
      wrongPhrase: 'işkolunda çalışan işçilerin en az yüzde üçünün üyesi bulunması şartıyla işçi sendikası, işyerinde ve işletmede çalışan işçilerin en az üçte ikisinin',
      correctPhrase: 'işkolunda çalışan işçilerin en az yüzde birinin üyesi bulunması şartıyla işçi sendikası, toplu iş sözleşmesi kapsamına girecek işyerinde başvuru tarihinde çalışan işçilerin yarıdan fazlasının, işletmede ise yüzde kırkının',
      explanation: '6356 s.K. m. 41 (ve AYM iptal kararı sonrası düzenleme) uyarınca işkolu barajı %1, işyeri çoğunluğu yarıdan fazla (%50+1), işletme çoğunluğu ise %40’tır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'toplu iş sözleşmesi en az bir ve en çok üç yıl süreli olarak yapılabilir',
      wrongPhrase: 'toplu iş sözleşmesi belirsiz süreli olarak veya en çok beş yıl süreli olarak yapılabilir',
      correctPhrase: 'toplu iş sözleşmesi en az bir ve en çok üç yıl süreli olarak yapılabilir',
      explanation: '6356 s.K. m. 35 uyarınca toplu iş sözleşmesi belirsiz süreli yapılamaz; en az 1 ve en çok 3 yıl süreli olarak yapılabilir ve imzalanmasından sonra taraflarca uzatılamaz, kısaltılamaz.'
    }
  },
  {
    id: 'rule-is-13',
    branch: 'İş Hukuku',
    subTopic: 'Sendika Kuruluşu, Üyelik Yaşı ve Grev Oylaması',
    articleRef: '6356 s.K. M. 6, 17 & 61',
    trueStatement:
      'Sendikalar, fiil ehliyetine sahip ve fiilen çalışan en az yedi gerçek veya tüzel kişi tarafından önceden izin almaksızın kurulur; onbeş yaşını dolduran ve bu Kanun hükümlerine göre işçi sayılanlar işçi sendikalarına üye olabilirler; grev kararının işyerinde ilan edildiği tarihten itibaren altı iş günü içinde işçilerin en az dörtte birinin yazılı başvurusu üzerine grev oylaması yapılır.',
    trueHighlight: ['en az yedi gerçek veya tüzel kişi tarafından önceden izin almaksızın kurulur', 'onbeş yaşını dolduran ve bu Kanun hükümlerine göre işçi sayılanlar işçi sendikalarına üye olabilirler', 'altı iş günü içinde işçilerin en az dörtte birinin yazılı başvurusu üzerine grev oylaması yapılır'],
    trueCorrectPhrase: 'sendikalar en az 7 kurucuyla izin almaksızın kurulur; 15 yaşını dolduran işçiler sendikaya üye olabilir; grev kararının ilanından itibaren 6 iş günü içinde en az 1/4 işçinin yazılı talebiyle grev oylaması yapılır',
    baseExplanation: '6356 s.K. m. 6, 17 ve 61 uyarınca sendika kurucu sayısı en az 7, sendika üyelik yaşı 15 (yasal temsilci izni aranmaz!), grev oylaması talebi ise grev kararının ilanından itibaren 6 iş günü içinde işçilerin en az 1/4’ünün yazılı başvurusuyla yapılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'onbeş yaşını dolduran ve bu Kanun hükümlerine göre işçi sayılanlar işçi sendikalarına üye olabilirler; grev kararının işyerinde ilan edildiği tarihten itibaren altı iş günü içinde işçilerin en az dörtte birinin yazılı başvurusu üzerine grev oylaması yapılır',
      wrongPhrase: 'ancak onsekiz yaşını dolduran işçiler sendikalara üye olabilirler; grev kararının ilanından itibaren on beş gün içinde işçilerin en az üçte birinin başvurusu üzerine grev oylaması yapılır',
      correctPhrase: 'onbeş yaşını dolduran ve bu Kanun hükümlerine göre işçi sayılanlar işçi sendikalarına üye olabilirler; grev kararının işyerinde ilan edildiği tarihten itibaren altı iş günü içinde işçilerin en az dörtte birinin yazılı başvurusu üzerine grev oylaması yapılır',
      explanation: '6356 s.K. m. 17 uyarınca 15 yaşını dolduran işçiler yasal temsilci onayı aranmaksızın sendikaya üye olabilir; m. 61 uyarınca grev oylaması süresi 6 iş günü ve nisabı 1/4’tür!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'en az yedi gerçek veya tüzel kişi tarafından önceden izin almaksızın kurulur',
      wrongPhrase: 'en az yirmi gerçek kişi tarafından Çalışma ve Sosyal Güvenlik Bakanlığının ön izniyle kurulur',
      correctPhrase: 'en az yedi gerçek veya tüzel kişi tarafından önceden izin almaksızın kurulur',
      explanation: 'Anayasa m. 51 ve 6356 s.K. m. 6 uyarınca sendikalar önceden izin almaksızın en az 7 kurucu tarafından tüzüğün valiliğe verilmesiyle tüzel kişilik kazanır.'
    }
  },

  // =========================================================================
  // BÖLÜM B: VERGİ HUKUKU VE VERGİ USUL HUKUKU (213 S. VUK & 6183 S. AATUHK)
  // =========================================================================
  {
    id: 'rule-vergi-1',
    branch: 'Vergi',
    subTopic: 'Vergi Mahkemesinde Dava Açma Süresi ve Tahsilatın Durması',
    articleRef: 'İYUK M. 7 & 27/4',
    trueStatement:
      'Vergi mahkemelerinde genel dava açma süresi tebliğ tarihini izleyen günden itibaren otuz gündür; vergi mahkemelerinde vergi uyuşmazlıklarından doğan davaların açılması, tarh edilen vergi, resim ve harçlar ile benzeri malî yükümlerin ve bunların zam ve cezalarının dava konusu edilen bölümünün tahsil işlemlerini kendiliğinden durdurur; ancak ihtirazi kayıtla verilen beyannameler üzerine yapılan işlemlerle tahsilat işlemlerinden dolayı açılan davalar tahsil işlemini durdurmaz.',
    trueHighlight: ['tebliğ tarihini izleyen günden itibaren otuz gündür', 'tarh edilen vergi, resim ve harçlar ile benzeri malî yükümlerin ve bunların zam ve cezalarının dava konusu edilen bölümünün tahsil işlemlerini kendiliğinden durdurur', 'ihtirazi kayıtla verilen beyannameler üzerine yapılan işlemlerle tahsilat işlemlerinden dolayı açılan davalar tahsil işlemini durdurmaz'],
    trueCorrectPhrase: 'vergi mahkemesinde genel dava açma süresi 30 gündür (ödeme emrine karşı 15 gündür!); tarh işlemlerine karşı açılan dava tahsilatı kendiliğinden durdururken, ihtirazi kayıtla verilen beyannamelere ve ödeme emri/haciz gibi tahsil işlemlerine karşı açılan davalar tahsilatı kendiliğinden durdurmaz',
    baseExplanation: 'İYUK m. 7 ve m. 27/4 uyarınca vergi mahkemesinde tarh işlemine karşı dava açılması tahsilatı kendiliğinden durdurur; ancak ihtirazi kayıtla beyan ve tahsilat işlemlerine (ödeme emri vb.) karşı açılan davalarda tahsilatın durması için ayrıca yürütmenin durdurulması kararı gerekir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak ihtirazi kayıtla verilen beyannameler üzerine yapılan işlemlerle tahsilat işlemlerinden dolayı açılan davalar tahsil işlemini durdurmaz',
      wrongPhrase: 'ihtirazi kayıtla verilen beyannameler üzerine yapılan işlemler ile ödeme emrine karşı açılan davalar da tahsil işlemlerini her durumda kendiliğinden durdurur',
      correctPhrase: 'ancak ihtirazi kayıtla verilen beyannameler üzerine yapılan işlemlerle tahsilat işlemlerinden dolayı açılan davalar tahsil işlemini durdurmaz',
      explanation: 'İYUK m. 27/4 uyarınca yalnız tarh işlemlerine karşı açılan davalar tahsilatı kendiliğinden durdurur; ihtirazi kayıtla verilen beyannameler ve tahsilat işlemlerine karşı açılan davalar tahsilatı kendiliğinden durdurmaz!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğ tarihini izleyen günden itibaren otuz gündür',
      wrongPhrase: 'tebliğ tarihini izleyen günden itibaren altmış gündür',
      correctPhrase: 'tebliğ tarihini izleyen günden itibaren otuz gündür',
      explanation: 'İYUK m. 7/1 uyarınca Danıştay ve idare mahkemelerinde genel dava açma süresi 60 gün iken, vergi mahkemelerinde genel dava açma süresi 30 gündür!'
    }
  },
  {
    id: 'rule-vergi-2',
    branch: 'Vergi',
    subTopic: 'Amme Alacaklarında Ödeme Emrine Dava Açma Süresi (15 Gün)',
    articleRef: '6183 s.K. M. 55 & 58',
    trueStatement:
      'Amme alacağını vadesinde ödemeyenlere onbeş gün içinde borçlarını ödemeleri veya mal bildiriminde bulunmaları lüzumu bir ödeme emri ile tebliğ olunur; kendisine ödeme emri tebliğ olunan şahıs, böyle bir borcu olmadığı veya kısmen ödediği veya zamanaşımına uğradığı hakkında tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilir.',
    trueHighlight: ['onbeş gün içinde borçlarını ödemeleri veya mal bildiriminde bulunmaları', 'böyle bir borcu olmadığı veya kısmen ödediği veya zamanaşımına uğradığı hakkında tebliğ tarihinden itibaren onbeş gün içinde', 'vergi mahkemesi nezdinde dava açabilir'],
    trueCorrectPhrase: '6183 s.K. m. 55 ve m. 58 uyarınca kamu (amme) alacaklarında ödeme emrine karşı ödeme/mal bildirimi süresi de vergi mahkemesinde dava açma süresi de tebliğden itibaren 15 gündür ve yalnız 3 sebebe (borcum yok, kısmen ödedim, zamanaşımı) dayanılabilir',
    baseExplanation: '6183 sayılı Kanun m. 55 ve m. 58 (7103 s.K. değişikliğiyle 7 günden 15 güne çıkarılmıştır!) uyarınca ödeme emrine karşı vergi mahkemesinde dava açma süresi 30 gün değil 15 gündür; itirazında tamamen veya kısmen haksız çıkan borçludan %10 haksız çıkma zammı tahsil edilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilir',
      wrongPhrase: 'tebliğ tarihinden itibaren otuz gün içinde vergi mahkemesi nezdinde dava açabilir',
      correctPhrase: 'tebliğ tarihinden itibaren onbeş gün içinde alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilir',
      explanation: 'Vergi mahkemesinde genel dava açma süresi 30 gün olmakla birlikte, 6183 sayılı Kanun m. 58 özel hükmü uyarınca ödeme emrine karşı dava açma süresi tebliğden itibaren 15 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilir',
      wrongPhrase: 'borçlunun yerleşim yerindeki icra mahkemesine şikâyet veya itiraz başvurusunda bulunabilir',
      correctPhrase: 'alacaklı tahsil dairesine ait davalara bakan vergi mahkemesi nezdinde dava açabilir',
      explanation: '6183 sayılı Kanun kapsamındaki kamu alacakları için düzenlenen ödeme emrine karşı İcra Mahkemesine değil, Vergi Mahkemesinde (veya alacağın niteliğine göre İdare Mahkemesinde) dava açılır!'
    }
  },
  {
    id: 'rule-vergi-3',
    branch: 'Vergi',
    subTopic: 'Vergi Hukukunda Tarh Zamanaşımı ve Tahsil Zamanaşımı (5 Yıl)',
    articleRef: 'VUK M. 114 & 6183 s.K. M. 102',
    trueStatement:
      'Vergi alacağının doğduğu takvim yılını takip eden yılın başından başlayarak beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar (tarh zamanaşımı); amme alacağı ise vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren beş yıl içinde tahsil edilmezse zamanaşımına uğrar (tahsil zamanaşımı).',
    trueHighlight: ['doğduğu takvim yılını takip eden yılın başından başlayarak beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar', 'vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren beş yıl içinde tahsil edilmezse zamanaşımına uğrar'],
    trueCorrectPhrase: 'vergi hukukunda hem tarh zamanaşımı (VUK m. 114) hem de tahsil zamanaşımı (6183 s.K. m. 102) süresi 5 yıldır; tarh zamanaşımı vergiyi doğuran olayı izleyen yılbaşından, tahsil zamanaşımı ise vadeyi izleyen yılbaşından başlar',
    baseExplanation: 'Vergi hukukunda zamanaşımı vergi mahkemesince re’sen (kendiliğinden) dikkate alınır! Tarh zamanaşımı vergiyi doğuran olayı takip eden yılbaşından itibaren 5 yıl; tahsil zamanaşımı ise vadeyi takip eden yılbaşından itibaren 5 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'doğduğu takvim yılını takip eden yılın başından başlayarak beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar (tarh zamanaşımı); amme alacağı ise vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren beş yıl içinde',
      wrongPhrase: 'doğduğu günden başlayarak on yıl içinde tarh edilmeyen vergiler zamanaşımına uğrar; amme alacağı ise vadesinden itibaren on yıl içinde',
      correctPhrase: 'doğduğu takvim yılını takip eden yılın başından başlayarak beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar (tarh zamanaşımı); amme alacağı ise vadesinin rastladığı takvim yılını takip eden takvim yılı başından itibaren beş yıl içinde',
      explanation: 'Vergi hukukunda hem tarh zamanaşımı hem de tahsil zamanaşımı 10 yıl değil 5 yıldır ve olay/vade gününden değil, takip eden takvim yılının başından (1 Ocak) itibaren işlemeye başlar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar (tarh zamanaşımı)',
      wrongPhrase: 'vergi zamanaşımı bir def’i olup mükellef tarafından açıkça ileri sürülmedikçe vergi mahkemesince re’sen dikkate alınamaz',
      correctPhrase: 'beş yıl içinde tarh ve mükellefe tebliğ edilmeyen vergiler zamanaşımına uğrar (tarh zamanaşımı)',
      explanation: 'Özel hukuktan (TBK) farklı olarak, vergi hukukunda zamanaşımı kamu düzenine ilişkindir ve mükellef ileri sürmese dahi vergi idaresi ve vergi mahkemesince re’sen dikkate alınır!'
    }
  },
  {
    id: 'rule-vergi-4',
    branch: 'Vergi',
    subTopic: 'Uzlaşma Başvurusu (30 Gün) ve Uzlaşma Sağlanamaması Halinde Ek Dava Süresi (15 Gün)',
    articleRef: 'VUK Ek M. 1 & Ek M. 7',
    trueStatement:
      'İkmalen, re’sen veya idarece tarh edilen vergilerle bunlara ilişkin vergi ziyaı cezaları konusunda uzlaşma talebi, vergi veya ceza ihbarnamesinin tebliğ tarihini izleyen günden itibaren otuz gün içinde yapılır; uzlaşmanın vaki olmaması veya temin edilememesi hâlinde, tutanağın tebliğinden itibaren genel dava açma süresi (30 gün) bitmiş veya onbeş günden az kalmış ise bu süre tutanağın tebliği tarihten itibaren onbeş gün olarak uzar.',
    trueHighlight: ['ihbarnamesinin tebliğ tarihini izleyen günden itibaren otuz gün içinde yapılır', 'onbeş günden az kalmış ise bu süre tutanağın tebliği tarihten itibaren onbeş gün olarak uzar'],
    trueCorrectPhrase: 'uzlaşma başvuru süresi ihbarnamenin tebliğinden itibaren 30 gündür; uzlaşma sağlanamazsa ve dava süresi bitmiş veya 15 günden az kalmışsa mükellefe tutanağın tebliğinden itibaren 15 gün ek dava açma süresi verilir',
    baseExplanation: 'VUK Ek m. 1 ve Ek m. 7 uyarınca uzlaşma başvurusu 30 gün içinde yapılır; uzlaşma sağlanırsa tutanak kesindir ve dava açılamaz; uzlaşma sağlanamazsa ve dava açma süresi bitmiş veya 15 günden az kalmışsa süre 15 gün uzar (kaçakçılık suçlarıyla VUK m. 359/b kapsamında tarh edilen vergi ve cezalarda uzlaşma yapılamaz!).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'onbeş günden az kalmış ise bu süre tutanağın tebliği tarihten itibaren onbeş gün olarak uzar',
      wrongPhrase: 'otuz günlük dava açma süresi her durumda baştan itibaren yeniden otuz gün olarak işlemeye başlar',
      correctPhrase: 'onbeş günden az kalmış ise bu süre tutanağın tebliği tarihten itibaren onbeş gün olarak uzar',
      explanation: 'VUK Ek m. 7 uyarınca uzlaşma sağlanamaması halinde dava açma süresi yeniden 30 gün olarak başlamaz; süre bitmiş veya 15 günden az kalmışsa tutanağın tebliğinden itibaren 15 gün olarak uzar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İkmalen, re’sen veya idarece tarh edilen vergilerle bunlara ilişkin vergi ziyaı cezaları konusunda uzlaşma talebi',
      wrongPhrase: 'Kaçakçılık suçları (VUK m. 359) nedeniyle üç kat kesilen vergi ziyaı cezaları konusunda da uzlaşma talebi',
      correctPhrase: 'İkmalen, re’sen veya idarece tarh edilen vergilerle bunlara ilişkin vergi ziyaı cezaları konusunda uzlaşma talebi',
      explanation: 'VUK Ek m. 1 uyarınca VUK m. 359’da yazılı kaçakçılık fiilleri (sahte belge düzenleme, defter gizleme vb.) nedeniyle tarh edilen vergiler ve kesilen 3 kat vergi ziyaı cezaları uzlaşma kapsamı dışındadır!'
    }
  },
  {
    id: 'rule-vergi-5',
    branch: 'Vergi',
    subTopic: 'Pişmanlık ve Islah (15 Gün Ödeme Süresi ve Emlak Vergisi İstisnası)',
    articleRef: 'VUK M. 371',
    trueStatement:
      'Beyana dayanan vergilerde vergi ziyaı cezasını gerektiren fiilleri işleyen mükellefler, keyfiyeti ilgili makamlara kendiliğinden dilekçe ile haber verir ve haber verme tarihinden başlayarak onbeş gün içinde hiç verilmemiş olan beyannameleri verir ve ödeme süresi geçmiş olan vergileri gecikme zammı oranında pişmanlık zammıyla birlikte öderlerse haklarında vergi ziyaı cezası kesilmez; ancak bu hükümler emlak vergisi ile gümrük vergilerinde uygulanmaz.',
    trueHighlight: ['haber verme tarihinden başlayarak onbeş gün içinde', 'pişmanlık zammıyla birlikte öderlerse haklarında vergi ziyaı cezası kesilmez', 'emlak vergisi ile gümrük vergilerinde uygulanmaz'],
    trueCorrectPhrase: 'VUK m. 371 pişmanlık ve ıslahta beyanname verme ve pişmanlık zammıyla ödeme süresi haber verme tarihinden itibaren 15 gündür; emlak vergisi ve gümrük vergilerinde pişmanlık hükümleri uygulanmaz',
    baseExplanation: 'VUK m. 371 uyarınca pişmanlık yalnızca beyana dayanan vergilerde uygulanır; 15 gün içinde ödeme şarttır; vergi incelemesine başlandıktan veya takdir komisyonuna sevk edildikten sonra pişmanlık hükümlerinden yararlanılamaz; emlak vergisinde uygulanmaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'haber verme tarihinden başlayarak onbeş gün içinde',
      wrongPhrase: 'haber verme tarihinden başlayarak otuz gün içinde',
      correctPhrase: 'haber verme tarihinden başlayarak onbeş gün içinde',
      explanation: 'VUK m. 371 uyarınca pişmanlık ve ıslahta beyanname verme ve ödeme süresi 30 gün değil, haber verme tarihinden itibaren 15 gündür!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak bu hükümler emlak vergisi ile gümrük vergilerinde uygulanmaz',
      wrongPhrase: 'pişmanlık ve ıslah hükümleri emlak vergisi ve motorlu taşıtlar vergisi dahil tüm vergilerde istisnasız uygulanır',
      correctPhrase: 'ancak bu hükümler emlak vergisi ile gümrük vergilerinde uygulanmaz',
      explanation: 'VUK m. 371 son fıkra uyarınca pişmanlık ve ıslah hükümleri Emlak Vergisinde (ve VUK kapsamı dışındaki Gümrük Vergilerinde) uygulanmaz!'
    }
  },
  {
    id: 'rule-vergi-6',
    branch: 'Vergi',
    subTopic: 'Vergi Hatalarında Düzeltme ve Şikâyet Yolu',
    articleRef: 'VUK M. 116-126',
    trueStatement:
      'Vergi hatası, vergiye ilişkin hesaplarda veya vergilendirmede yapılan hatalar yüzünden haksız yere fazla veya eksik vergi istenmesi veya alınmasıdır; dava açma süresi geçtikten sonra yaptıkları düzeltme talepleri vergi dairesince reddedilen mükellefler, şikâyet yolu ile Hazine ve Maliye Bakanlığına (Gelir İdaresi Başkanlığına) müracaat edebilirler ve bu ret işlemine karşı da vergi mahkemesinde dava açabilirler.',
    trueHighlight: ['hesaplarda veya vergilendirmede yapılan hatalar', 'dava açma süresi geçtikten sonra yaptıkları düzeltme talepleri vergi dairesince reddedilen mükellefler, şikâyet yolu ile Hazine ve Maliye Bakanlığına'],
    trueCorrectPhrase: 'dava açma süresi (30 gün) geçtikten sonra vergi hatası nedeniyle vergi dairesine yapılan düzeltme başvurusu reddedilirse doğrudan dava açılamaz; önce şikâyet yoluyla Hazine ve Maliye Bakanlığına (belediye vergilerinde belediye başkanlığına, il özel idaresinde valiliğe) başvurulması zorunludur',
    baseExplanation: 'VUK m. 122-124 uyarınca 30 günlük dava açma süresi içinde düzeltme istenirse dava süresi durur; 30 günlük dava açma süresi geçtikten sonra (5 yıllık zamanaşımı içinde) düzeltme istenir ve reddedilirse, vergi mahkemesinde dava açmadan önce Hazine ve Maliye Bakanlığına şikâyet yoluna başvurulması zorunludur (idari merci tecavüzü!).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'dava açma süresi geçtikten sonra yaptıkları düzeltme talepleri vergi dairesince reddedilen mükellefler, şikâyet yolu ile Hazine ve Maliye Bakanlığına (Gelir İdaresi Başkanlığına) müracaat edebilirler',
      wrongPhrase: 'otuz günlük dava açma süresi geçtikten sonra vergi hatası için vergi dairesine yapılan düzeltme talebi reddedilirse mükellef üst makama şikâyet başvurusu yapmaksızın doğrudan vergi mahkemesinde dava açabilir',
      correctPhrase: 'dava açma süresi geçtikten sonra yaptıkları düzeltme talepleri vergi dairesince reddedilen mükellefler, şikâyet yolu ile Hazine ve Maliye Bakanlığına (Gelir İdaresi Başkanlığına) müracaat edebilirler',
      explanation: '30 günlük dava açma süresi geçtikten sonra yapılan düzeltme başvurusu vergi dairesince reddedildiğinde doğrudan vergi mahkemesinde dava açılamaz; önce şikâyet yoluyla Hazine ve Maliye Bakanlığına başvurulması zorunludur!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'dava açma süresi geçtikten sonra yaptıkları düzeltme talepleri',
      wrongPhrase: 'vergi hatalarında düzeltme zamanaşımı süresi on yıl olup dava açma süresi geçtikten sonra dahi yapılan düzeltme talepleri',
      correctPhrase: 'dava açma süresi geçtikten sonra yaptıkları düzeltme talepleri',
      explanation: 'VUK m. 126 uyarınca düzeltme zamanaşımı süresi 10 yıl değil, 5 yıllık tarh zamanaşımı süresidir (sürenin son yılı içinde tebliğ edilenlerde +1 yıldan az olamaz).'
    }
  },

  // =========================================================================
  // BÖLÜM C: AVUKATLIK HUKUKU (1136 SAYILI AVUKATLIK KANUNU)
  // =========================================================================
  {
    id: 'rule-avukatlik-1',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Stajı Süresi ve Avukatlığa Kabul Şartları',
    articleRef: '1136 s.K. M. 3, 15 & 16',
    trueStatement:
      'Avukatlık stajı bir yıldır; stajın ilk altı ayı mahkemelerde ve adalet dairelerinde, kalan altı ayı ise en az beş yıl kıdemi olan (bu beş yıllık kıdem hesabına Kanunun 4 üncü maddesinde yazılı hizmetler de dahildir) bir avukat yanında yapılır; ayrıca 2024 yılından itibaren hukuk fakültesinden mezun olanlar için Hukuk Mesleklerine Giriş Sınavında (HMGS) başarılı olmak şarttır.',
    trueHighlight: ['Avukatlık stajı bir yıldır', 'ilk altı ayı mahkemelerde ve adalet dairelerinde, kalan altı ayı ise en az beş yıl kıdemi olan', 'bir avukat yanında yapılır'],
    trueCorrectPhrase: 'avukatlık stajı toplam 1 yıldır (ilk 6 ay mahkemelerde, ikinci 6 ay en az 5 yıl kıdemli bir avukat yanında) ve HMGS’den en az 70 puan alınması şarttır',
    baseExplanation: '1136 sayılı Avukatlık Kanunu m. 3, 15 ve 16 uyarınca avukatlık stajı 1 yıldır (6 ay adliye + 6 ay en az 5 yıl kıdemli avukat yanı).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Avukatlık stajı bir yıldır; stajın ilk altı ayı mahkemelerde ve adalet dairelerinde, kalan altı ayı ise en az beş yıl kıdemi olan (bu beş yıllık kıdem hesabına Kanunun 4 üncü maddesinde yazılı hizmetler de dahildir) bir avukat yanında yapılır',
      wrongPhrase: 'Avukatlık stajı iki yıldır; stajın ilk bir yılı mahkemelerde, kalan bir yılı ise en az on yıl kıdemi olan bir avukat yanında yapılır',
      correctPhrase: 'Avukatlık stajı bir yıldır; stajın ilk altı ayı mahkemelerde ve adalet dairelerinde, kalan altı ayı ise en az beş yıl kıdemi olan (bu beş yıllık kıdem hesabına Kanunun 4 üncü maddesinde yazılı hizmetler de dahildir) bir avukat yanında yapılır',
      explanation: '2 yıllık süre hâkim ve savcı yardımcılığı (mülga adaylığı) süresidir; 1136 s.K. m. 15 uyarınca avukatlık stajı 1 yıldır (6 ay mahkeme + 6 ay en az 5 yıl kıdemli avukat yanı)!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Avukatlık stajı bir yıldır',
      wrongPhrase: 'Staj bitim belgesi doğrudan Adalet Bakanlığı tarafından verilir ve avukatlık stajı bir yıldır',
      correctPhrase: 'Avukatlık stajı bir yıldır',
      explanation: 'Staj bitim belgesi Adalet Bakanlığı tarafından değil, stajın yapıldığı Baro Yönetim Kurulu tarafından verilir!'
    }
  },
  {
    id: 'rule-avukatlik-2',
    branch: 'Avukatlık',
    subTopic: 'Avukatlıkla Birleşebilen ve Birleşemeyen İşler',
    articleRef: '1136 s.K. M. 11-12',
    trueStatement:
      'Aylık, ücret, gündelik veya kesenek gibi ödemeler karşılığında görülen hiçbir hizmet ve görev, sigorta prodüktörlüğü, tacirlik ve esnaflık avukatlıkla birleşemez; ancak milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında yükseköğretimde profesör ve doçentlik, özel hukuk tüzel kişilerinin hukuk müşavirliği ve sürekli avukatlığı, hakemlik, arabuluculuk, tasfiye memurluğu ve anonim şirketlerde yönetim kurulu başkanlığı, üyeliği ve denetçiliği avukatlıkla birleşebilir.',
    trueHighlight: ['milletvekilliği, il genel meclisi ve belediye meclisi üyeliği', 'hukuk alanında yükseköğretimde profesör ve doçentlik', 'anonim şirketlerde yönetim kurulu başkanlığı, üyeliği ve denetçiliği avukatlıkla birleşebilir'],
    trueCorrectPhrase: 'milletvekilliği, belediye/il genel meclisi üyeliği, hukuk profesör/doçentliği, hakemlik, arabuluculuk ve A.Ş. yönetim kurulu başkan/üyeliği avukatlıkla birleşebilir; ancak belediye başkanlığı, A.Ş. murahhas üyeliği ve Ltd. Şti. müdürlüğü avukatlıkla birleşemez',
    baseExplanation: '1136 s.K. m. 12 uyarınca çok sorulan sınav tuzağı: Belediye meclisi üyeliği birleşir ama belediye başkanlığı birleşemez; A.Ş. yönetim kurulu üyeliği birleşir ama A.Ş. murahhas üyeliği/müdürlüğü ve Limited Şirket müdürlüğü birleşemez!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında yükseköğretimde profesör ve doçentlik, özel hukuk tüzel kişilerinin hukuk müşavirliği ve sürekli avukatlığı, hakemlik, arabuluculuk, tasfiye memurluğu ve anonim şirketlerde yönetim kurulu başkanlığı, üyeliği ve denetçiliği avukatlıkla birleşebilir',
      wrongPhrase: 'belediye başkanlığı, limited şirket müdürlüğü, anonim şirket murahhas üyeliği ve sigorta acenteliği avukatlıkla birleşebilir',
      correctPhrase: 'milletvekilliği, il genel meclisi ve belediye meclisi üyeliği, hukuk alanında yükseköğretimde profesör ve doçentlik, özel hukuk tüzel kişilerinin hukuk müşavirliği ve sürekli avukatlığı, hakemlik, arabuluculuk, tasfiye memurluğu ve anonim şirketlerde yönetim kurulu başkanlığı, üyeliği ve denetçiliği avukatlıkla birleşebilir',
      explanation: 'Belediye meclisi üyeliği birleşebilirken belediye başkanlığı birleşemez; A.Ş. yönetim kurulu üyeliği birleşebilirken limited şirket müdürlüğü ve A.Ş. murahhas üyeliği tacir/temsil niteliği nedeniyle avukatlıkla birleşemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'milletvekilliği, il genel meclisi ve belediye meclisi üyeliği',
      wrongPhrase: 'milletvekilleri milletvekilliği süresince her türlü davada ve Hazineye karşı açılan davalarda vekillik yapabilirler; ayrıca il genel meclisi üyeliği',
      correctPhrase: 'milletvekilliği, il genel meclisi ve belediye meclisi üyeliği',
      explanation: 'Milletvekilliği avukatlıkla birleşebilir; ancak 1136 s.K. m. 12/son ve Anayasa m. 82 uyarınca milletvekilleri milletvekilliği süresince Devlet ve diğer kamu tüzel kişilerine karşı olan dava ve işlerde vekillik yapamazlar!'
    }
  },
  {
    id: 'rule-avukatlik-3',
    branch: 'Avukatlık',
    subTopic: 'Avukatın Vekâletten İstifası (15 Gün), Dosya Saklama (3 Yıl) ve Tazminat Zamanaşımı (1 / 5 Yıl)',
    articleRef: '1136 s.K. M. 39-41',
    trueStatement:
      'Belli bir işi takipten veya savunmadan isteğiyle çekilen avukatın o işe ait vekâlet görevi, durumu müvekkiline tebliğinden itibaren onbeş gün süreyle devam eder; avukat kendisine tevdi olunan evrakı vekâletin sona ermesinden itibaren üç yıl süre ile saklamakla yükümlüdür; iş sahibi tarafından sözleşmeye dayanılarak avukata karşı ileri sürülen tazminat istekleri, bu hakkın doğumunun öğrenildiği tarihten itibaren bir yıl ve her hâlde zararı doğuran olaydan itibaren beş yıl geçmekle düşer.',
    trueHighlight: ['durumu müvekkiline tebliğinden itibaren onbeş gün süreyle devam eder', 'vekâletin sona ermesinden itibaren üç yıl süre ile saklamakla yükümlüdür', 'öğrenildiği tarihten itibaren bir yıl ve her hâlde zararı doğuran olaydan itibaren beş yıl geçmekle düşer'],
    trueCorrectPhrase: '1136 s.K. m. 39-41 kritik süreleri: İstifa eden avukatın görevi müvekkile tebliğden itibaren 15 gün devam eder; evrak saklama süresi vekâletin bitiminden itibaren 3 yıldır; avukata karşı sözleşmeye dayalı tazminat istemi öğrenmeden itibaren 1 yıl ve her hâlde olaydan itibaren 5 yılda düşer',
    baseExplanation: 'Avukatlık Kanunu m. 39, 40 ve 41’de yer alan bu üç süre (15 gün vekâletin devamı - 3 yıl evrak saklama - 1 yıl / 5 yıl tazminat süresi) HMGS’nin en temel sayısal bilgilerindendir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'durumu müvekkiline tebliğinden itibaren onbeş gün süreyle devam eder; avukat kendisine tevdi olunan evrakı vekâletin sona ermesinden itibaren üç yıl süre ile saklamakla yükümlüdür; iş sahibi tarafından sözleşmeye dayanılarak avukata karşı ileri sürülen tazminat istekleri, bu hakkın doğumunun öğrenildiği tarihten itibaren bir yıl ve her hâlde zararı doğuran olaydan itibaren beş yıl',
      wrongPhrase: 'durumu müvekkiline tebliğinden itibaren otuz gün süreyle devam eder; avukat evrakı vekâletin sona ermesinden itibaren beş yıl süre ile saklamakla yükümlüdür; avukata karşı ileri sürülen tazminat istekleri öğrenmeden itibaren iki yıl ve her hâlde on yıl',
      correctPhrase: 'durumu müvekkiline tebliğinden itibaren onbeş gün süreyle devam eder; avukat kendisine tevdi olunan evrakı vekâletin sona ermesinden itibaren üç yıl süre ile saklamakla yükümlüdür; iş sahibi tarafından sözleşmeye dayanılarak avukata karşı ileri sürülen tazminat istekleri, bu hakkın doğumunun öğrenildiği tarihten itibaren bir yıl ve her hâlde zararı doğuran olaydan itibaren beş yıl',
      explanation: '1136 s.K. m. 39-41 uyarınca istifada vekâletin devamı 30 değil 15 gün, evrak saklama 5 değil 3 yıl, avukata karşı sözleşmeden doğan tazminat süresi ise 2/10 yıl değil 1 yıl ve her hâlde 5 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'avukat kendisine tevdi olunan evrakı vekâletin sona ermesinden itibaren üç yıl süre ile saklamakla yükümlüdür',
      wrongPhrase: 'avukat kendisine ödenmeyen ücret ve giderler için müvekkiline ait evrak üzerinde hiçbir koşulda hapis hakkı kullanamaz ve evrakı derhâl iade etmek zorundadır',
      correctPhrase: 'avukat kendisine tevdi olunan evrakı vekâletin sona ermesinden itibaren üç yıl süre ile saklamakla yükümlüdür',
      explanation: '1136 s.K. m. 39/2 uyarınca avukat, ücreti ve yapmış olduğu giderler kendisine ödenmedikçe elinde bulunan evrakı geri vermekle yükümlü değildir (avukatın hapis hakkı vardır!).'
    }
  },
  {
    id: 'rule-avukatlik-4',
    branch: 'Avukatlık',
    subTopic: 'Avukatın Görev Suçlarında Soruşturma ve Kovuşturma Usulü',
    articleRef: '1136 s.K. M. 58-59',
    trueStatement:
      'Avukatların avukatlık veya Türkiye Barolar Birliği ya da baroların organlarındaki görevlerinden doğan veya görev sırasında işledikleri suçlardan dolayı haklarında soruşturma, Adalet Bakanlığının vereceği izin üzerine, suçun işlendiği yer Cumhuriyet savcısı tarafından yapılır; son soruşturmanın (kovuşturmanın) açılmasına karar verme yetkisi avukatın bürosunun bulunduğu yer ağır ceza mahkemesine, duruşmanın (yargılamanın) yapılması yetkisi ise suçun işlendiği yer ağır ceza mahkemesine aittir.',
    trueHighlight: ['Adalet Bakanlığının vereceği izin üzerine, suçun işlendiği yer Cumhuriyet savcısı tarafından yapılır', 'son soruşturmanın (kovuşturmanın) açılmasına karar verme yetkisi avukatın bürosunun bulunduğu yer ağır ceza mahkemesine, duruşmanın (yargılamanın) yapılması yetkisi ise suçun işlendiği yer ağır ceza mahkemesine aittir'],
    trueCorrectPhrase: 'avukatın görev suçlarında: 1) Soruşturma izni: Adalet Bakanlığı, 2) Soruşturmayı yapan: Suç yeri C. Savcısı, 3) Son soruşturmanın açılması kararı: Büroya en yakın Ağır Ceza Mahkemesi, 4) Yargılama (duruşma): Suçun işlendiği yer Ağır Ceza Mahkemesi',
    baseExplanation: '1136 s.K. m. 58 ve m. 59’daki dörtlü yetki zinciri HMGS’nin en kritik Avukatlık Hukuku konusudur: İzin (Adalet Bakanlığı) -> Soruşturma (Suç yeri savcısı) -> Son soruşturmanın açılması kararı (Büro yeri Ağır Ceza) -> Yargılama (Suç yeri Ağır Ceza).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Adalet Bakanlığının vereceği izin üzerine, suçun işlendiği yer Cumhuriyet savcısı tarafından yapılır; son soruşturmanın (kovuşturmanın) açılmasına karar verme yetkisi avukatın bürosunun bulunduğu yer ağır ceza mahkemesine, duruşmanın (yargılamanın) yapılması yetkisi ise suçun işlendiği yer ağır ceza mahkemesine aittir',
      wrongPhrase: 'Türkiye Barolar Birliğinin vereceği izin üzerine baro yönetim kurulunca yapılır; son soruşturmanın açılmasına suçun işlendiği yer sulh ceza hâkimliği karar verir ve yargılama asliye ceza mahkemesinde yapılır',
      correctPhrase: 'Adalet Bakanlığının vereceği izin üzerine, suçun işlendiği yer Cumhuriyet savcısı tarafından yapılır; son soruşturmanın (kovuşturmanın) açılmasına karar verme yetkisi avukatın bürosunun bulunduğu yer ağır ceza mahkemesine, duruşmanın (yargılamanın) yapılması yetkisi ise suçun işlendiği yer ağır ceza mahkemesine aittir',
      explanation: 'Avukatın görev suçlarında soruşturma iznini TBB değil Adalet Bakanlığı verir; son soruşturmanın açılmasına bürosunun bulunduğu yer Ağır Ceza Mahkemesi karar verir, yargılama ise suçun işlendiği yer Ağır Ceza Mahkemesinde yapılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Avukatların avukatlık veya Türkiye Barolar Birliği ya da baroların organlarındaki görevlerinden doğan veya görev sırasında işledikleri suçlardan dolayı',
      wrongPhrase: 'Avukat yazıhaneleri ve konutları gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısının veya kolluk amirinin yazılı emri ile aranabilir; ayrıca avukatların görev suçlarından dolayı',
      correctPhrase: 'Avukatların avukatlık veya Türkiye Barolar Birliği ya da baroların organlarındaki görevlerinden doğan veya görev sırasında işledikleri suçlardan dolayı',
      explanation: '1136 s.K. m. 58/1 ve CMK m. 130 uyarınca avukat büroları ve konutları gecikmesinde sakınca bulunan hâllerde dahi savcı veya kolluk emriyle ARANAMAZ; ancak mahkeme kararı ile ve Cumhuriyet savcısı denetiminde, baro temsilcisinin katılımıyla aranabilir!'
    }
  },
  {
    id: 'rule-avukatlik-5',
    branch: 'Avukatlık',
    subTopic: 'Avukatlık Ücret Sözleşmesi Üst Sınırı (%25) ve Disiplin Zamanaşımı',
    articleRef: '1136 s.K. M. 164 & 159',
    trueStatement:
      'Avukatlık ücreti, dava veya hükmolunacak şeyin değerinin belli bir yüzdesi olarak kararlaştırılabilir; ancak bu şekilde kararlaştırılacak ücret, dava veya takip konusu para ve malın değerinin yüzde yirmibeşini aşamaz; avukatlık disiplin cezalarını gerektiren eylemlerin işlenmesinden itibaren üç yıl geçmiş ise kovuşturma yapılamaz (yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıldır).',
    trueHighlight: ['dava veya takip konusu para ve malın değerinin yüzde yirmibeşini aşamaz', 'eylemlerin işlenmesinden itibaren üç yıl geçmiş ise kovuşturma yapılamaz (yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıldır)'],
    trueCorrectPhrase: 'avukatlık ücret sözleşmesinde başarıya göre belirlenecek yüzdelik ücret dava/takip değerinin %25’ini aşamaz; disiplin kovuşturması zamanaşımı eylemden itibaren 3 yıl, el konulmuşsa 4,5 yıldır',
    baseExplanation: '1136 s.K. m. 164 uyarınca avukatlık ücreti dava değerinin %25’ini aşamaz ve dava konusu mal/alacağın aynen bir kısmının avukata ait olacağı (hasılı davaya iştirak) kararlaştırılamaz; ayrıca dava sonunda karşı taraftan alınacak vekâlet ücreti avukata aittir.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'dava veya takip konusu para ve malın değerinin yüzde yirmibeşini aşamaz; avukatlık disiplin cezalarını gerektiren eylemlerin işlenmesinden itibaren üç yıl geçmiş ise kovuşturma yapılamaz (yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıldır)',
      wrongPhrase: 'dava veya takip konusu para ve malın değerinin yüzde ellisini aşamaz; avukatlık disiplin zamanaşımı süresi ise eylemden itibaren iki yıldır',
      correctPhrase: 'dava veya takip konusu para ve malın değerinin yüzde yirmibeşini aşamaz; avukatlık disiplin cezalarını gerektiren eylemlerin işlenmesinden itibaren üç yıl geçmiş ise kovuşturma yapılamaz (yönetim kurulunca işe el konulmuş ise bu süre dört buçuk yıldır)',
      explanation: '1136 s.K. m. 164 uyarınca yüzdelik avukatlık ücreti üst sınırı %50 değil %25’tir; m. 159 uyarınca disiplin zamanaşımı ise 3 yıl (uzamış süresi 4,5 yıl) olarak uygulanır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'dava veya hükmolunacak şeyin değerinin belli bir yüzdesi olarak kararlaştırılabilir',
      wrongPhrase: 'dava konusu taşınmazın veya malın bir kısmının aynen avukata devredileceği (hasılı davaya iştirak) serbestçe kararlaştırılabilir',
      correctPhrase: 'dava veya hükmolunacak şeyin değerinin belli bir yüzdesi olarak kararlaştırılabilir',
      explanation: '1136 s.K. m. 164/3 uyarınca avukatın dava konusu para dışındaki mal ve haklardan bir kısmını aynen kendisine mal etmesi (hasılı davaya iştirak) yasaktır; yalnızca değerin %25’ini aşmamak üzere nakdi yüzde kararlaştırılabilir!'
    }
  },

  // =========================================================================
  // BÖLÜM D: MÖHUK, MİLLETLERARASI HUKUK & HUKUK FELSEFESİ/TARİHİ
  // =========================================================================
  {
    id: 'rule-mohuk-1',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Hak ve Fiil Ehliyeti, Evlenme ve Boşanmaya Uygulanacak Hukuk',
    articleRef: '5718 s.K. M. 9, 13 & 14',
    trueStatement:
      'Kişilerin hak ve fiil ehliyetleri kendi millî hukuklarına tabidir; evlenme ehliyeti ve şartları taraflardan her birinin evlenme anındaki millî hukukuna, evlenmenin şekli ise yapıldığı yer hukukuna tabidir; boşanma ve ayrılık sebepleri ve hükümleri, eşlerin müşterek millî hukukuna, taraflar ayrı vatandaşlıkta ise müşterek mutad mesken hukukuna, bulunmadığı takdirde Türk hukukuna tabidir.',
    trueHighlight: ['hak ve fiil ehliyetleri kendi millî hukuklarına tabidir', 'evlenmenin şekli ise yapıldığı yer hukukuna tabidir', 'müşterek millî hukukuna, taraflar ayrı vatandaşlıkta ise müşterek mutad mesken hukukuna, bulunmadığı takdirde Türk hukukuna tabidir'],
    trueCorrectPhrase: 'MÖHUK’ta ehliyet kişinin milli hukukuna, evlenmenin şekli yapıldığı yer hukukuna (locus regit actum), boşanma ise sırasıyla: 1) Müşterek milli hukuk, 2) Müşterek mutad mesken hukuku, 3) Türk hukukuna (lex fori) tabidir',
    baseExplanation: '5718 sayılı MÖHUK m. 9, 13 ve 14 uyarınca aile hukukundaki basamaklı bağlama kuralı (Kegel merdiveni): Müşterek milli hukuk -> Müşterek mutad mesken hukuku -> Türk hukuku.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'boşanma ve ayrılık sebepleri ve hükümleri, eşlerin müşterek millî hukukuna, taraflar ayrı vatandaşlıkta ise müşterek mutad mesken hukukuna, bulunmadığı takdirde Türk hukukuna tabidir',
      wrongPhrase: 'boşanma ve ayrılık sebepleri her durumda evlenmenin yapıldığı yer hukukuna, bu hukuk belirlenemezse kocanın millî hukukuna tabidir',
      correctPhrase: 'boşanma ve ayrılık sebepleri ve hükümleri, eşlerin müşterek millî hukukuna, taraflar ayrı vatandaşlıkta ise müşterek mutad mesken hukukuna, bulunmadığı takdirde Türk hukukuna tabidir',
      explanation: 'MÖHUK m. 14 uyarınca boşanmada evlenme yeri hukuku veya kocanın milli hukuku değil; sırasıyla eşlerin müşterek milli hukuku, müşterek mutad mesken hukuku ve Türk hukuku uygulanır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'evlenmenin şekli ise yapıldığı yer hukukuna tabidir',
      wrongPhrase: 'evlenmenin şekli de her durumda eşlerin müşterek mutad mesken hukukuna tabidir',
      correctPhrase: 'evlenmenin şekli ise yapıldığı yer hukukuna tabidir',
      explanation: 'MÖHUK m. 13/2 uyarınca evlenme ehliyeti ve şartları tarafların milli hukukuna tabi iken, evlenmenin şekli yapıldığı yer hukukuna (veya konsolosluk evlenmelerinde ilgili devlet hukukuna) tabidir.'
    }
  },
  {
    id: 'rule-mohuk-2',
    branch: 'MÖHUK',
    subTopic: 'MÖHUK: Ayni Haklar, Miras ve Sözleşmeden Doğan Borç İlişkileri',
    articleRef: '5718 s.K. M. 20, 21 & 24',
    trueStatement:
      'Taşınırlar ve taşınmazlar üzerindeki mülkiyet hakkı ve diğer ayni haklar, işlem anında malların bulunduğu yer hukukuna (lex rei sitae) tabidir; miras ölenin millî hukukuna tabidir, ancak Türkiye’de bulunan taşınmazlar hakkında Türk hukuku uygulanır; sözleşmeden doğan borç ilişkileri tarafların açık olarak seçtikleri hukuka, hukuk seçimi yapılmamışsa sözleşmeyle en sıkı ilişkili olan hukuka (karakteristik edim borçlusunun mutad meskeni/işyeri hukukuna) tabidir.',
    trueHighlight: ['malların bulunduğu yer hukukuna (lex rei sitae) tabidir', 'miras ölenin millî hukukuna tabidir, ancak Türkiye’de bulunan taşınmazlar hakkında Türk hukuku uygulanır', 'tarafların açık olarak seçtikleri hukuka, hukuk seçimi yapılmamışsa sözleşmeyle en sıkı ilişkili olan hukuka'],
    trueCorrectPhrase: 'taşınır/taşınmaz ayni haklarda malın bulunduğu yer hukuku (lex rei sitae); mirasta ölenin milli hukuku (ancak Türkiye’deki taşınmazlarda Türk hukuku!); sözleşmelerde ise irade muhtariyeti (seçilen hukuk), seçilmemişse karakteristik edim borçlusunun işyeri/mutad mesken hukuku uygulanır',
    baseExplanation: '5718 s.K. m. 20, 21 ve 24 MÖHUK sınav sorularının omurgasını oluşturur: Türkiye’de bulunan taşınmazların mirasında ölen yabancı olsa dahi Türk hukuku uygulanır (m. 20/1) ve Türk mahkemelerinin yetkisi kesindir (m. 43).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'miras ölenin millî hukukuna tabidir, ancak Türkiye’de bulunan taşınmazlar hakkında Türk hukuku uygulanır',
      wrongPhrase: 'miras Türkiye’de bulunan taşınmazlar da dahil olmak üzere istisnasız olarak ölenin son yerleşim yeri hukukuna tabidir',
      correctPhrase: 'miras ölenin millî hukukuna tabidir, ancak Türkiye’de bulunan taşınmazlar hakkında Türk hukuku uygulanır',
      explanation: 'MÖHUK m. 20/1 uyarınca miras genel olarak ölenin milli hukukuna tabidir; ancak Türkiye’de bulunan taşınmazlar hakkında murisin vatandaşlığı ne olursa olsun Türk hukuku uygulanır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Taşınırlar ve taşınmazlar üzerindeki mülkiyet hakkı ve diğer ayni haklar, işlem anında malların bulunduğu yer hukukuna (lex rei sitae) tabidir',
      wrongPhrase: 'Taşınmazlar üzerindeki ayni haklara ilişkin davalarda da taraflar yetki sözleşmesi yaparak yabancı bir devlet mahkemesini yetkili kılabilirler',
      correctPhrase: 'Taşınırlar ve taşınmazlar üzerindeki mülkiyet hakkı ve diğer ayni haklar, işlem anında malların bulunduğu yer hukukuna (lex rei sitae) tabidir',
      explanation: 'MÖHUK m. 47 uyarınca Türkiye’deki taşınmazların ayni haklarına ilişkin davalarda Türk mahkemelerinin yetkisi münhasır (kesin) yetkidir; yabancı mahkemeyi yetkili kılan yetki sözleşmesi yapılamaz!'
    }
  },
  {
    id: 'rule-mohuk-3',
    branch: 'MÖHUK',
    subTopic: 'Yabancı Mahkeme Kararlarının Tenfizi ve Tanınması',
    articleRef: '5718 s.K. M. 50-58',
    trueStatement:
      'Yabancı mahkemelerden hukuk davalarına ilişkin olarak verilmiş ve o devlet kanunlarına göre kesinleşmiş bulunan ilâmların Türkiye’de icra olunabilmesi yetkili Türk mahkemesi tarafından tenfiz kararı verilmesine bağlıdır; tenfizde karşılıklılık (mütekabiliyet) şartı aranırken tanımada karşılıklılık şartı aranmaz; tenfiz kararları hakkında görevli mahkeme asliye mahkemesi olup yetkili mahkeme kendisine karşı tenfiz istenen kişinin Türkiye’deki yerleşim yeri, yoksa sakin olduğu yer, o da yoksa Ankara, İstanbul veya İzmir mahkemelerinden biridir.',
    trueHighlight: ['tenfizde karşılıklılık (mütekabiliyet) şartı aranırken tanımada karşılıklılık şartı aranmaz', 'görevli mahkeme asliye mahkemesi olup', 'Ankara, İstanbul veya İzmir mahkemelerinden biridir'],
    trueCorrectPhrase: 'tenfizde karşılıklılık (mütekabiliyet) şartı aranır, ancak tanımada karşılıklılık şartı aranmaz! Görevli mahkeme Asliye (Hukuk/Ticaret/Aile) Mahkemesi, Türkiye’de yerleşim/sakin olma yeri yoksa yetkili mahkeme Ankara, İstanbul veya İzmir mahkemelerinden biridir',
    baseExplanation: 'MÖHUK m. 51, 54 ve 58 uyarınca en kritik HMGS ayrımı: Yabancı mahkeme kararının TENFİZİNDE karşılıklılık (akdi, kanuni veya fiili) şartı aranır; TANIMASINDA ise karşılıklılık şartı aranmaz! Ayrıca Türk mahkemesi esasa (revizyon yasağı) giremez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tenfizde karşılıklılık (mütekabiliyet) şartı aranırken tanımada karşılıklılık şartı aranmaz',
      wrongPhrase: 'hem yabancı mahkeme kararlarının tenfizinde hem de tanınmasında karşılıklılık (mütekabiliyet) şartı mutlak olarak aranır ve Türk hâkimi kararın maddi hukuk bakımından doğruluğunu esastan yeniden inceler',
      correctPhrase: 'tenfizde karşılıklılık (mütekabiliyet) şartı aranırken tanımada karşılıklılık şartı aranmaz',
      explanation: 'MÖHUK m. 58/1 uyarınca yabancı ilamın kesin delil veya kesin hüküm olarak TANINMASINDA karşılıklılık şartı (m. 54/1-a) aranmaz; ayrıca tenfiz hâkimi yabancı kararı esastan denetleyemez (revizyon yasağı)!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'görevli mahkeme asliye mahkemesi olup yetkili mahkeme kendisine karşı tenfiz istenen kişinin Türkiye’deki yerleşim yeri, yoksa sakin olduğu yer, o da yoksa Ankara, İstanbul veya İzmir mahkemelerinden biridir',
      wrongPhrase: 'görevli mahkeme Yargıtay ilgili hukuk dairesi olup yetkili mahkeme yalnızca Ankara mahkemeleridir',
      correctPhrase: 'görevli mahkeme asliye mahkemesi olup yetkili mahkeme kendisine karşı tenfiz istenen kişinin Türkiye’deki yerleşim yeri, yoksa sakin olduğu yer, o da yoksa Ankara, İstanbul veya İzmir mahkemelerinden biridir',
      explanation: 'MÖHUK m. 51 uyarınca tenfiz kararlarında görevli mahkeme ilk derece Asliye Mahkemesidir; karşı tarafın Türkiye’de yerleşim yeri veya sakin olduğu yer yoksa yalnız Ankara değil, Ankara, İstanbul veya İzmir mahkemelerinden birinde dava açılabilir!'
    }
  },
  {
    id: 'rule-mohuk-4',
    branch: 'MÖHUK',
    subTopic: 'Milletlerarası Antlaşmaların İç Hukuktaki Yeri (AY m. 90)',
    articleRef: 'AY M. 90',
    trueStatement:
      'Usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar kanun hükmündedir; bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz; usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası antlaşma hükümleri esas alınır.',
    trueHighlight: ['Usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar kanun hükmündedir; bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz', 'temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası antlaşma hükümleri esas alınır'],
    trueCorrectPhrase: 'milletlerarası antlaşmalar kanun hükmündedir ve AYM’de iptal davasına konu edilemez; temel hak ve özgürlüklere ilişkin antlaşmalar kanunlarla çatışırsa antlaşma hükümleri esas alınır',
    baseExplanation: 'Anayasa m. 90/5 uyarınca milletlerarası antlaşmalar kanun hükmündedir (ancak temel hak ve özgürlüklere ilişkin olanlar kanunlarla çatıştığında kanunun üstünde uygulanır); antlaşmanın kendisi için AYM’ye başvurulamaz (ancak uygun bulma kanunu için başvurulabilir!).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz',
      wrongPhrase: 'bu antlaşmaların Resmi Gazete’de yayımlanmasından itibaren altmış gün içinde Anayasa Mahkemesinde iptal davası açılabilir',
      correctPhrase: 'bunlar hakkında Anayasaya aykırılık iddiası ile Anayasa Mahkemesine başvurulamaz',
      explanation: 'AY m. 90/5 açık hükmü uyarınca usulüne göre yürürlüğe konulmuş milletlerarası antlaşmalar hakkında Anayasaya aykırılık iddiasıyla Anayasa Mahkemesine başvurulamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası antlaşma hükümleri esas alınır',
      wrongPhrase: 'temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla sonradan çıkarılan bir kanun çatışırsa "sonraki kanun önceki kanunu ilga eder" ilkesi gereği kanun hükmü esas alınır',
      correctPhrase: 'temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunların aynı konuda farklı hükümler içermesi nedeniyle çıkabilecek uyuşmazlıklarda milletlerarası antlaşma hükümleri esas alınır',
      explanation: '2004 Anayasa değişikliği ile AY m. 90/5’e eklenen cümle uyarınca temel hak ve özgürlüklere ilişkin milletlerarası antlaşmalarla kanunlar çatıştığında (kanun daha yeni tarihli olsa bile) milletlerarası antlaşma hükümleri esas alınır!'
    }
  },
  {
    id: 'rule-mohuk-5',
    branch: 'MÖHUK',
    subTopic: 'Hukuk Felsefesi: Kelsen, Hart, Radbruch ve Savigny',
    articleRef: 'Hukuk Felsefesi & Sosyolojisi',
    trueStatement:
      'Hukuki pozitivizmin önde gelen temsilcilerinden Hans Kelsen "Saf Hukuk Kuramı"nda hukuk düzenini en tepesinde varsayımsal "Temel Norm"un (Grundnorm) bulunduğu bir normlar hiyerarşisi olarak açıklarken; H.L.A. Hart hukuku ödev yükleyen "birincil kurallar" ve yetki veren "ikincil kurallar" (tanıma, değiştirme ve yargılama kuralları) birliği olarak tanımlamış; Gustav Radbruch ise pozitif hukukun adaletsizliği "tahammül edilemez boyuta" ulaştığında kanunun hukuk olma niteliğini kaybedeceğini (Radbruch Formülü) savunmuştur.',
    trueHighlight: ['Hans Kelsen "Saf Hukuk Kuramı"nda hukuk düzenini en tepesinde varsayımsal "Temel Norm"un (Grundnorm) bulunduğu bir normlar hiyerarşisi olarak açıklarken', 'H.L.A. Hart hukuku ödev yükleyen "birincil kurallar" ve yetki veren "ikincil kurallar"', 'Gustav Radbruch ise pozitif hukukun adaletsizliği "tahammül edilemez boyuta" ulaştığında kanunun hukuk olma niteliğini kaybedeceğini (Radbruch Formülü) savunmuştur'],
    trueCorrectPhrase: 'Kelsen -> Saf Hukuk Kuramı & Temel Norm (Grundnorm); Hart -> Birincil ve İkincil Kurallar (Tanıma Kuralı); Radbruch -> Tahammül Edilemez Adaletsizlik (Radbruch Formülü); Savigny -> Tarihçi Hukuk Okulu (Halk Ruhu / Volksgeist)',
    baseExplanation: 'HMGS Hukuk Felsefesi ve Sosyolojisi sorularında düşünür-kavram eşleştirmeleri doğrudan sorulur: Kelsen (Grundnorm), Hart (Tanıma Kuralı / Birincil-İkincil Kurallar), Radbruch (Radbruch Formülü), Savigny (Volksgeist / Tarihçi Okul), Ehrlich (Yaşayan Hukuk).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Hans Kelsen "Saf Hukuk Kuramı"nda hukuk düzenini en tepesinde varsayımsal "Temel Norm"un (Grundnorm) bulunduğu bir normlar hiyerarşisi olarak açıklarken',
      wrongPhrase: 'Hans Kelsen "Saf Hukuk Kuramı"nda bir hukuk normunun geçerliliğini yalnızca doğal hukuk ilkelerine ve ahlaki adalete uygunluğuna bağlarken',
      correctPhrase: 'Hans Kelsen "Saf Hukuk Kuramı"nda hukuk düzenini en tepesinde varsayımsal "Temel Norm"un (Grundnorm) bulunduğu bir normlar hiyerarşisi olarak açıklarken',
      explanation: 'Kelsen’in Saf Hukuk Kuramı katı bir normativist pozitivizmdir; hukuku ahlak, siyaset ve sosyolojiden arındırarak bir normun geçerliliğini içeriksel adalete değil, bir üst norma ve nihayetinde Temel Norma (Grundnorm) uygunluğuna bağlar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Gustav Radbruch ise pozitif hukukun adaletsizliği "tahammül edilemez boyuta" ulaştığında kanunun hukuk olma niteliğini kaybedeceğini (Radbruch Formülü) savunmuştur',
      wrongPhrase: 'Tarihçi Hukuk Okulunun kurucusu Savigny ise hukukun halkın ortak bilincinden (Volksgeist) bağımsız olarak kanun koyucu tarafından derhâl kodifiye edilmesi gerektiğini savunmuştur',
      correctPhrase: 'Gustav Radbruch ise pozitif hukukun adaletsizliği "tahammül edilemez boyuta" ulaştığında kanunun hukuk olma niteliğini kaybedeceğini (Radbruch Formülü) savunmuştur',
      explanation: 'Tarihçi Hukuk Okulunun kurucusu Savigny, Thibaut’nun kodifikasyon (kanunlaştırma) önerisine karşı çıkmış ve hukukun tıpkı dil gibi "Halk Ruhu"ndan (Volksgeist) doğup tarihsel süreçte kendiliğinden geliştiğini savunmuştur!'
    }
  },
  {
    id: 'rule-mohuk-6',
    branch: 'MÖHUK',
    subTopic: 'Türk Hukuk Tarihi: Mecelle, Kanun-i Esasi ve Cumhuriyet Anayasaları',
    articleRef: 'Türk Hukuk Tarihi',
    trueStatement:
      'Osmanlı Devleti’nde Ahmet Cevdet Paşa başkanlığındaki cemiyet tarafından hazırlanan Mecelle-i Ahkâm-ı Adliye (1869-1876) Hanefi fıkhına dayanan ve borçlar, eşya ile yargılama hukuku hükümlerini içeren ilk milli kanunlaştırma örneğidir (aile ve miras hukuku Mecelle’de yer almaz); 1876 Kanun-i Esasi Türk tarihinin ilk anayasasıdır; 1921 Teşkilat-ı Esasiye Kanunu ise güçler birliği ve meclis hükümeti sistemini benimseyen tek yumuşak ve çerçeve anayasamızdır.',
    trueHighlight: ['Mecelle-i Ahkâm-ı Adliye (1869-1876) Hanefi fıkhına dayanan ve borçlar, eşya ile yargılama hukuku hükümlerini içeren', 'aile ve miras hukuku Mecelle’de yer almaz', '1921 Teşkilat-ı Esasiye Kanunu ise güçler birliği ve meclis hükümeti sistemini benimseyen tek yumuşak ve çerçeve anayasamızdır'],
    trueCorrectPhrase: 'Mecelle’de borçlar, eşya ve usul hukuku vardır ancak aile, miras ve ticaret hukuku yoktur (aile hukuku 1917 Hukuk-ı Aile Kararnamesi ile düzenlenmiştir); 1921 Anayasası Türk tarihinin tek yumuşak anayasasıdır',
    baseExplanation: 'Türk Hukuk Tarihi sınav sorularında en sık kurulan tuzak: Mecelle bir medeni kanun çalışması olmakla birlikte içinde Aile Hukuku ve Miras Hukuku hükümleri yer almaz! Aile hukuku 1917 tarihli Hukuk-ı Aile Kararnamesi ile düzenlenmiştir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borçlar, eşya ile yargılama hukuku hükümlerini içeren ilk milli kanunlaştırma örneğidir (aile ve miras hukuku Mecelle’de yer almaz)',
      wrongPhrase: 'evlenme, boşanma, velayet ve miras hukuku hükümlerinin tamamını ayrıntılı biçimde düzenleyen ve Fransız Medeni Kanunu’ndan iktibas edilen bir kanundur',
      correctPhrase: 'borçlar, eşya ile yargılama hukuku hükümlerini içeren ilk milli kanunlaştırma örneğidir (aile ve miras hukuku Mecelle’de yer almaz)',
      explanation: 'Mecelle yabancı bir kanundan iktibas edilmemiştir (İslam/Hanefi hukukuna dayanır) ve içinde aile hukuku ile miras hukuku bölümleri yer almaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: '1921 Teşkilat-ı Esasiye Kanunu ise güçler birliği ve meclis hükümeti sistemini benimseyen tek yumuşak ve çerçeve anayasamızdır',
      wrongPhrase: '1921 Teşkilat-ı Esasiye Kanunu Anayasa Mahkemesini ilk kez kuran sert ve kazuistik bir anayasadır',
      correctPhrase: '1921 Teşkilat-ı Esasiye Kanunu ise güçler birliği ve meclis hükümeti sistemini benimseyen tek yumuşak ve çerçeve anayasamızdır',
      explanation: '1921 Anayasası Türk anayasa tarihinin tek yumuşak anayasasıdır; Anayasa Mahkemesi ise ilk kez 1961 Anayasası ile kurulmuştur!'
    }
  },

  // =========================================================================
  // BÖLÜM E: MEDENİ HUKUK & BORÇLAR HUKUKU EK DERİNLİK KURALLARI
  // =========================================================================
  {
    id: 'rule-medeni-15',
    branch: 'Medeni',
    subTopic: 'Mirasın Reddi Süresi (3 Ay) ve Hükmen Red',
    articleRef: 'TMK M. 605-606',
    trueStatement:
      'Yasal ve atanmış mirasçılar mirası üç ay içinde reddedebilirler; bu süre, yasal mirasçılar için mirasçı olduklarını daha sonra öğrendikleri ispat edilmedikçe mirasbırakanın ölümünü öğrendikleri; vasiyetname ile atanmış mirasçılar için mirasbırakanın tasarrufunun kendilerine resmen bildirildiği tarihten işlemeye başlar; ölümü tarihinde mirasbırakanın ödemeden aczi açıkça belli veya resmen tespit edilmiş ise miras reddedilmiş sayılır (hükmen red) ve bu durum süreye tabi değildir.',
    trueHighlight: ['mirası üç ay içinde reddedebilirler', 'ölümü tarihinde mirasbırakanın ödemeden aczi açıkça belli veya resmen tespit edilmiş ise miras reddedilmiş sayılır (hükmen red) ve bu durum süreye tabi değildir'],
    trueCorrectPhrase: 'mirasın gerçek reddi süresi 3 aydır (sulh hukuk mahkemesine sözlü/yazılı beyanla yapılır); murisin ölümü anında ödemeden aczi açıkça belli ise miras hükmen reddedilmiş sayılır ve hükmen red 3 aylık süreye tabi değildir',
    baseExplanation: 'TMK m. 605-609 uyarınca mirasın gerçek reddi 3 aylık hak düşürücü süre içinde Sulh Hukuk Mahkemesine kayıtsız/şartsız beyanla yapılır; mirasın hükmen reddi (TMK m. 605/2) ise süreye tabi olmayıp alacaklılara karşı Asliye Hukuk Mahkemesinde her zaman ileri sürülebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'mirası üç ay içinde reddedebilirler',
      wrongPhrase: 'mirası bir ay içinde reddedebilirler',
      correctPhrase: 'mirası üç ay içinde reddedebilirler',
      explanation: '1 aylık süre terekenin resmi defterinin tutulmasını isteme süresidir (TMK m. 619); mirasın gerçek reddi süresi (TMK m. 606) 3 aydır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ölümü tarihinde mirasbırakanın ödemeden aczi açıkça belli veya resmen tespit edilmiş ise miras reddedilmiş sayılır (hükmen red) ve bu durum süreye tabi değildir',
      wrongPhrase: 'mirasın hükmen reddi (murisin ödemeden aczi) iddiası da ölüm tarihinden itibaren üç aylık hak düşürücü süre içinde ileri sürülmelidir',
      correctPhrase: 'ölümü tarihinde mirasbırakanın ödemeden aczi açıkça belli veya resmen tespit edilmiş ise miras reddedilmiş sayılır (hükmen red) ve bu durum süreye tabi değildir',
      explanation: 'TMK m. 605/2 kapsamındaki mirasın hükmen reddinde 3 aylık hak düşürücü süre uygulanmaz; mirasçılar murisin ödemeden aczini her zaman ileri sürebilirler!'
    }
  },
  {
    id: 'rule-medeni-16',
    branch: 'Medeni',
    subTopic: 'Mirasçılıktan Çıkarma (İskat) Sebepleri ve Sonuçları',
    articleRef: 'TMK M. 510-513',
    trueStatement:
      'Mirasbırakan, ölüme bağlı bir tasarrufla saklı paylı mirasçısını; mirasbırakana veya yakınlarından birine karşı ağır bir suç işlemesi ya da mirasbırakana veya ailesi üyelerine karşı aile hukukundan doğan yükümlülüklerini önemli ölçüde yerine getirmemesi (cezai ıskat) hâllerinde mirasçılıktan çıkarabilir; mirasçılıktan çıkarılan kimse mirastan pay alamayacağı gibi tenkis davası da açamaz ve çıkarılanın saklı payını isteyebilecek altsoyu varsa o pay altsoyuna kalır.',
    trueHighlight: ['ölüme bağlı bir tasarrufla saklı paylı mirasçısını', 'ağır bir suç işlemesi ya da mirasbırakana veya ailesi üyelerine karşı aile hukukundan doğan yükümlülüklerini önemli ölçüde yerine getirmemesi', 'tenkis davası da açamaz ve çıkarılanın saklı payını isteyebilecek altsoyu varsa o pay altsoyuna kalır'],
    trueCorrectPhrase: 'mirasçılıktan çıkarma (ıskat) yalnızca saklı paylı mirasçılar için ölüme bağlı tasarrufla yapılabilir; çıkarılan kişi mirastan pay alamaz ve tenkis davası açamaz, ancak çıkarılanın altsoyu varsa kendi saklı payını isteyebilir',
    baseExplanation: 'TMK m. 510-513 uyarınca mirasçılıktan çıkarma şahsidir; çıkarılanın altsoyu varsa mirasçılıktan çıkarmadan etkilenmez ve kendi saklı payını alır; ayrıca borç ödemeden aciz sebebiyle koruyucu ıskat (TMK m. 513) yalnızca altsoy hakkında ve saklı payın yarısı için yapılabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'çıkarılanın saklı payını isteyebilecek altsoyu varsa o pay altsoyuna kalır',
      wrongPhrase: 'mirasçılıktan çıkarma kararı çıkarılan kişinin altsoyunu da (çocuklarını da) kendiliğinden mirastan mahrum bırakır',
      correctPhrase: 'çıkarılanın saklı payını isteyebilecek altsoyu varsa o pay altsoyuna kalır',
      explanation: 'Mirastan feragat sözleşmesinde (ivazlı feragatte) feragat edenin altsoyu da etkilenirken, mirasçılıktan çıkarmada (ıskatta) ve mirastan yoksunlukta sonuç şahsidir; çıkarılanın altsoyu varsa muristen önce ölmüş gibi onun yerini alır!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'ölüme bağlı bir tasarrufla saklı paylı mirasçısını',
      wrongPhrase: 'borç ödemeden aciz sebebiyle (koruyucu ıskat) altsoyu hakkında saklı payının tamamı için',
      correctPhrase: 'ölüme bağlı bir tasarrufla saklı paylı mirasçısını',
      explanation: 'TMK m. 513 uyarınca borç ödemeden aciz sebebiyle mirasçılıktan çıkarma (koruyucu ıskat) yalnızca altsoy hakkında ve doğmuş/doğacak çocuklarına özgülenmek şartıyla saklı payın YARISI için yapılabilir!'
    }
  },
  {
    id: 'rule-medeni-17',
    branch: 'Medeni',
    subTopic: 'Mirasbırakanın Sağlığında Mirasçıların Miras Sözleşmesi ve Resmi Vasiyetname',
    articleRef: 'TMK M. 532-536',
    trueStatement:
      'Resmî vasiyetname, iki tanığın katılmasıyla resmî memur (sulh hâkimi, noter veya kanunla kendisine bu yetki verilmiş diğer bir görevli) tarafından düzenlenir; fiil ehliyeti bulunmayanlar, bir ceza mahkemesi kararıyla kamu hizmetinden yasaklılar, okur yazar olmayanlar, mirasbırakanın eşi, üstsoy ve altsoy kan hısımları, kardeşleri ve bu kişilerin eşleri resmî vasiyetnamenin düzenlenmesine memur veya tanık olarak katılamazlar.',
    trueHighlight: ['iki tanığın katılmasıyla resmî memur (sulh hâkimi, noter veya kanunla kendisine bu yetki verilmiş diğer bir görevli) tarafından düzenlenir', 'okur yazar olmayanlar, mirasbırakanın eşi, üstsoy ve altsoy kan hısımları, kardeşleri ve bu kişilerin eşleri resmî vasiyetnamenin düzenlenmesine memur veya tanık olarak katılamazlar'],
    trueCorrectPhrase: 'resmi vasiyetname 2 tanıkla resmi memur (noter/sulh hâkimi) önünde düzenlenir; fiil ehliyetsizleri, kamu hizmetinden yasaklılar, okuryazar olmayanlar, murisin eşi, altsoy-üstsoyu, kardeşleri ve bunların eşleri tanık olamaz',
    baseExplanation: 'TMK m. 536 uyarınca resmi vasiyetnamede (ve miras sözleşmesinde) memur veya tanık olamayacak kişiler mutlak yasaklıdır; buna karşılık sözlü vasiyetnamede (TMK m. 540) tanıklar için okuryazar olma şartı aranmaz!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'okur yazar olmayanlar, mirasbırakanın eşi, üstsoy ve altsoy kan hısımları, kardeşleri ve bu kişilerin eşleri resmî vasiyetnamenin düzenlenmesine memur veya tanık olarak katılamazlar',
      wrongPhrase: 'mirasbırakanın kardeşleri ve okur yazar olmayan kişiler de resmî vasiyetnamenin düzenlenmesine tanık olarak katılabilirler',
      correctPhrase: 'okur yazar olmayanlar, mirasbırakanın eşi, üstsoy ve altsoy kan hısımları, kardeşleri ve bu kişilerin eşleri resmî vasiyetnamenin düzenlenmesine memur veya tanık olarak katılamazlar',
      explanation: 'TMK m. 536 uyarınca okuryazar olmayanlar ile mirasbırakanın eşi, üstsoy/altsoyu, kardeşleri ve bunların eşleri resmi vasiyetnameye tanık olamazlar (ancak amca, dayı, hala, teyze ve yeğenler kendilerine kazandırma yapılmamışsa tanık olabilirler!).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki tanığın katılmasıyla resmî memur (sulh hâkimi, noter veya kanunla kendisine bu yetki verilmiş diğer bir görevli) tarafından düzenlenir',
      wrongPhrase: 'el yazılı vasiyetnamede de iki tanığın imzasının bulunması zorunlu olup vasiyetname ancak noterde saklanırsa geçerli olur',
      correctPhrase: 'iki tanığın katılmasıyla resmî memur (sulh hâkimi, noter veya kanunla kendisine bu yetki verilmiş diğer bir görevli) tarafından düzenlenir',
      explanation: 'El yazılı vasiyetnamede (TMK m. 538) tanık aranmaz; baştan sona vasiyetçinin el yazısıyla yazılması, düzenleme yıl, ay ve gününün gösterilmesi ve imzalanması yeterlidir (notere tevdi geçerlilik şartı değildir!).'
    }
  },
  {
    id: 'rule-medeni-18',
    branch: 'Medeni',
    subTopic: 'Taşınmaz Mülkiyetinin Olağan ve Olağanüstü Kazandırıcı Zamanaşımıyla Kazanılması',
    articleRef: 'TMK M. 712-713',
    trueStatement:
      'Geçerli bir hukuki sebep olmaksızın tapu kütüğüne malik olarak yazılan kişi, taşınmaz üzerindeki zilyetliğini davasız ve aralıksız olarak on yıl süreyle ve iyiniyetle sürdürürse (olağan zamanaşımı) onun bu yolla kazanmış olduğu mülkiyet hakkına itiraz edilemez; tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi ise (olağanüstü zamanaşımı) o taşınmazın mülkiyet hakkının tapu kütüğüne tesciline karar verilmesini isteyebilir.',
    trueHighlight: ['on yıl süreyle ve iyiniyetle sürdürürse (olağan zamanaşımı)', 'tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi ise (olağanüstü zamanaşımı)'],
    trueCorrectPhrase: 'taşınmazlarda olağan kazandırıcı zamanaşımı (TMK m. 712) süresi 10 yıl (iyiniyet şarttır), olağanüstü kazandırıcı zamanaşımı (TMK m. 713) süresi ise 20 yıldır (iyiniyet şartı aranmaz!)',
    baseExplanation: 'TMK m. 712 ve m. 713 karşılaştırması: Olağan zamanaşımında (10 yıl) taşınmaz tapuya kayıtlıdır, yolsuz tescil vardır ve zilyedin iyiniyetli olması şarttır; olağanüstü zamanaşımında (20 yıl) ise iyiniyet şartı aranmaz ve mülkiyet 20 yılın dolmasıyla kazanılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıl süreyle ve iyiniyetle sürdürürse (olağan zamanaşımı) onun bu yolla kazanmış olduğu mülkiyet hakkına itiraz edilemez; tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle',
      wrongPhrase: 'beş yıl süreyle ve iyiniyetle sürdürürse mülkiyeti kazanır; tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak on yıl süreyle',
      correctPhrase: 'on yıl süreyle ve iyiniyetle sürdürürse (olağan zamanaşımı) onun bu yolla kazanmış olduğu mülkiyet hakkına itiraz edilemez; tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle',
      explanation: '5 yıllık süre taşınırların olağan kazandırıcı zamanaşımı süresidir (TMK m. 777); taşınmazlarda olağan zamanaşımı 10 yıl, olağanüstü zamanaşımı ise 20 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi ise (olağanüstü zamanaşımı) o taşınmazın mülkiyet hakkının tapu kütüğüne tesciline karar verilmesini isteyebilir',
      wrongPhrase: 'olağanüstü kazandırıcı zamanaşımıyla (yirmi yıl) taşınmaz mülkiyetinin kazanılabilmesi için de zilyedin yirmi yıl boyunca iyiniyetli olması mutlak şarttır',
      correctPhrase: 'tapu kütüğünde kayıtlı olmayan bir taşınmazı davasız ve aralıksız olarak yirmi yıl süreyle ve malik sıfatıyla zilyetliğinde bulunduran kişi ise (olağanüstü zamanaşımı) o taşınmazın mülkiyet hakkının tapu kütüğüne tesciline karar verilmesini isteyebilir',
      explanation: 'TMK m. 713 uyarınca olağanüstü kazandırıcı zamanaşımında (20 yıl) davasız, aralıksız ve malik sıfatıyla zilyetlik yeterli olup iyiniyet şartı ARANMAZ!'
    }
  },
  {
    id: 'rule-borclar-14',
    branch: 'Borçlar',
    subTopic: 'Konut ve Çatılı İşyeri Kiralarında Gereksinim, İki Haklı İhtar ve Tahliye Taahhüdü Süreleri',
    articleRef: 'TBK M. 350-352',
    trueStatement:
      'Kiraya veren, kiralananı kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut ya da işyeri gereksinimi sebebiyle kullanma zorunluluğu varsa, belirli süreli sözleşmelerde sürenin sonunda, belirsiz süreli sözleşmelerde fesih döneminin sonundan başlayarak bir ay içinde açacağı dava ile sona erdirebilir; yazılı tahliye taahhüdüne veya bir kira yılı içinde iki haklı ihtara dayalı tahliye davası veya icra takibi de sürenin bitiminden başlayarak bir ay içinde yapılmalıdır.',
    trueHighlight: ['kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için', 'bir ay içinde açacağı dava ile sona erdirebilir', 'yazılı tahliye taahhüdüne veya bir kira yılı içinde iki haklı ihtara dayalı tahliye davası veya icra takibi de sürenin bitiminden başlayarak bir ay içinde yapılmalıdır'],
    trueCorrectPhrase: 'gereksinim (ihtiyaç), yeniden inşa/imar, yeni malikin gereksinimi, yazılı tahliye taahhüdü ve iki haklı ihtar sebepleriyle tahliye davası açma süresi kira süresinin/taahhüt tarihinin bitiminden itibaren 1 aydır',
    baseExplanation: 'TBK m. 350-352 uyarınca tüm bu tahliye sebeplerinde dava açma süresi 1 aydır; yeni malik ayrıca edinme tarihinden itibaren 1 ay içinde kiracıya yazılı bildirimde bulunursa 6 ay sonra da dava açabilir (TBK m. 351); gereksinimle tahliye ettiren kiraya veren haklı sebep olmaksızın 3 yıl geçmedikçe taşınmazı eski kiracısından başkasına kiralayamaz (TBK m. 355).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir ay içinde açacağı dava ile sona erdirebilir; yazılı tahliye taahhüdüne veya bir kira yılı içinde iki haklı ihtara dayalı tahliye davası veya icra takibi de sürenin bitiminden başlayarak bir ay içinde yapılmalıdır',
      wrongPhrase: 'üç ay içinde açacağı dava ile sona erdirebilir; yazılı tahliye taahhüdüne dayalı tahliye davası ise taahhüt tarihinden itibaren altı ay içinde açılabilir',
      correctPhrase: 'bir ay içinde açacağı dava ile sona erdirebilir; yazılı tahliye taahhüdüne veya bir kira yılı içinde iki haklı ihtara dayalı tahliye davası veya icra takibi de sürenin bitiminden başlayarak bir ay içinde yapılmalıdır',
      explanation: 'TBK m. 350-352 uyarınca gereksinim, yazılı tahliye taahhüdü ve iki haklı ihtar sebeplerine dayalı tahliye davası (veya taahhütte icra takibi) süresi 1 aydır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut ya da işyeri gereksinimi sebebiyle',
      wrongPhrase: 'kira sözleşmesinin imzalanması sırasında kiracıdan alınan ve kiralananın tesliminden önce düzenlenen yazılı tahliye taahhüdüne dayanarak',
      correctPhrase: 'kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut ya da işyeri gereksinimi sebebiyle',
      explanation: 'TBK m. 352/1 uyarınca yazılı tahliye taahhüdünün geçerli olabilmesi için kiralananın TESLİMİNDEN SONRA verilmiş olması şarttır; kira sözleşmesiyle aynı tarihte veya teslimden önce alınan tahliye taahhütleri geçersizdir!'
    }
  },
  {
    id: 'rule-borclar-15',
    branch: 'Borçlar',
    subTopic: 'Bağışlama Sözleşmesinin Şekli ve Bağışlamadan Dönme Süresi (1 Yıl)',
    articleRef: 'TBK M. 288 & 297',
    trueStatement:
      'Bağışlama sözü verme (taahhütlü bağışlama) sözleşmesinin geçerliliği yazılı şekilde yapılmış olmasına, taşınmazların veya taşınmaz üzerindeki ayni hakların bağışlanması sözü vermenin geçerliliği ise resmî şekilde yapılmış olmasına bağlıdır; elden bağışlama ise bağışlayanın bir taşınırını bağışlanana teslim etmesiyle kurulur; bağışlayan, geri alma (dönme) sebebini öğrendiği günden başlayarak bir yıl içinde bağışlamayı geri alabilir.',
    trueHighlight: ['Bağışlama sözü verme (taahhütlü bağışlama) sözleşmesinin geçerliliği yazılı şekilde yapılmış olmasına', 'elden bağışlama ise bağışlayanın bir taşınırını bağışlanana teslim etmesiyle kurulur', 'geri alma (dönme) sebebini öğrendiği günden başlayarak bir yıl içinde bağışlamayı geri alabilir'],
    trueCorrectPhrase: 'taşınır bağışlama sözü verme adi yazılı şekle, taşınmaz bağışlama sözü verme resmi şekle tabidir (taşınır elden bağışlama ise teslimle kurulur); bağışlamayı geri alma süresi öğrenmeden itibaren 1 yıldır',
    baseExplanation: 'TBK m. 288 ve m. 297 uyarınca şekle uyulmaması nedeniyle geçersiz olan taşınır bağışlama sözü verme borçlu tarafından ifa edilirse elden bağışlama hükümleri uygulanır; geri alma hakkı öğrenmeden itibaren 1 yıllık hak düşürücü süreye tabidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'geri alma (dönme) sebebini öğrendiği günden başlayarak bir yıl içinde bağışlamayı geri alabilir',
      wrongPhrase: 'geri alma (dönme) sebebini öğrendiği günden başlayarak beş yıl içinde bağışlamayı geri alabilir',
      correctPhrase: 'geri alma (dönme) sebebini öğrendiği günden başlayarak bir yıl içinde bağışlamayı geri alabilir',
      explanation: 'TBK m. 297/1 uyarınca bağışlamayı geri alma (rücu) süresi, geri alma sebebinin öğrenildiği günden başlayarak 5 yıl değil, 1 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Bağışlama sözü verme (taahhütlü bağışlama) sözleşmesinin geçerliliği yazılı şekilde yapılmış olmasına, taşınmazların veya taşınmaz üzerindeki ayni hakların bağışlanması sözü vermenin geçerliliği ise resmî şekilde yapılmış olmasına bağlıdır',
      wrongPhrase: 'Taşınır bağışlama sözü verme sözlü olarak yapılabilir, elden bağışlama ise ancak noter huzurunda resmî senetle kurulur',
      correctPhrase: 'Bağışlama sözü verme (taahhütlü bağışlama) sözleşmesinin geçerliliği yazılı şekilde yapılmış olmasına, taşınmazların veya taşınmaz üzerindeki ayni hakların bağışlanması sözü vermenin geçerliliği ise resmî şekilde yapılmış olmasına bağlıdır',
      explanation: 'Tam tersine: Taşınır bağışlama sözü verme yazılı şekle tabidir; elden bağışlama ise taşınırın teslimiyle kurulur!'
    }
  },
  {
    id: 'rule-borclar-16',
    branch: 'Borçlar',
    subTopic: 'Motorlu Araç İşletenin Sorumluluğu ve Zamanaşımı (KTK m. 109)',
    articleRef: '2918 s.K. M. 85 & 109',
    trueStatement:
      'Bir motorlu aracın işletilmesi bir kimsenin ölümüne veya yaralanmasına yahut bir şeyin zarara uğramasına sebep olursa, motorlu aracın işleteni ve bağlı olduğu teşebbüsün sahibi doğan zarardan müştereken ve müteselsilen (tehlike sorumluluğu esasına göre) sorumludur; motorlu araç kazalarından doğan maddi zararların tazminine ilişkin talepler, zarar görenin zararı ve tazminat yükümlüsünü öğrendiği tarihten başlayarak iki yıl ve her hâlde kaza gününden başlayarak on yıl içinde zamanaşımına uğrar (eylem suç oluşturuyorsa uzamış ceza zamanaşımı uygulanır).',
    trueHighlight: ['motorlu aracın işleteni ve bağlı olduğu teşebbüsün sahibi doğan zarardan müştereken ve müteselsilen (tehlike sorumluluğu esasına göre) sorumludur', 'öğrendiği tarihten başlayarak iki yıl ve her hâlde kaza gününden başlayarak on yıl içinde zamanaşımına uğrar'],
    trueCorrectPhrase: '2918 s. KTK m. 85 uyarınca motorlu araç işletenin sorumluluğu kusursuz "tehlike sorumluluğu"dur; zamanaşımı süresi öğrenmeden itibaren 2 yıl ve her hâlde kaza gününden itibaren 10 yıldır (veya daha uzun ceza zamanaşımı); rücu taleplerinde ise ödeme tarihinden itibaren 2 yıldır',
    baseExplanation: '2918 sayılı Karayolları Trafik Kanunu m. 85-86 ve m. 109 uyarınca işleten tehlike sorumluluğuna tabidir (yalnız mücbir sebep veya zarar görenin/üçüncü kişinin ağır kusuru ve araçta bozukluk olmaması halinde sorumluluktan kurtulur).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak iki yıl ve her hâlde kaza gününden başlayarak on yıl içinde zamanaşımına uğrar',
      wrongPhrase: 'öğrendiği tarihten başlayarak bir yıl ve her hâlde kaza gününden başlayarak beş yıl içinde zamanaşımına uğrar',
      correctPhrase: 'öğrendiği tarihten başlayarak iki yıl ve her hâlde kaza gününden başlayarak on yıl içinde zamanaşımına uğrar',
      explanation: '2918 s. KTK m. 109 uyarınca motorlu araç kazalarından doğan tazminat taleplerinde zamanaşımı süresi öğrenmeden itibaren 2 yıl ve her hâlde kaza gününden itibaren 10 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'motorlu aracın işleteni ve bağlı olduğu teşebbüsün sahibi doğan zarardan müştereken ve müteselsilen (tehlike sorumluluğu esasına göre) sorumludur',
      wrongPhrase: 'motorlu aracın işleteni sürücünün seçiminde ve denetiminde gerekli özeni gösterdiğini (kurtuluş kanıtı) ispatlayarak sorumluluktan kolayca kurtulabilir',
      correctPhrase: 'motorlu aracın işleteni ve bağlı olduğu teşebbüsün sahibi doğan zarardan müştereken ve müteselsilen (tehlike sorumluluğu esasına göre) sorumludur',
      explanation: 'Motorlu araç işletenin sorumluluğu adam çalıştıranın olağan sebep sorumluluğu değil, ağırlaştırılmış kusursuz sorumluluk (tehlike sorumluluğu) olduğundan işleten sürücünün seçiminde özen gösterdiğini (kurtuluş kanıtı) ileri sürerek sorumluluktan kurtulamaz!'
    }
  },

  // =========================================================================
  // BÖLÜM F: HMK, CMK, TCK, İYUK, İDARE, ANAYASA, TİCARET VE İCRA EK KURALLARI
  // =========================================================================
  {
    id: 'rule-hmk-18',
    branch: 'HMK',
    subTopic: 'Basit Yargılama Usulü (Cevap Süresi, Replik/Düplik Yasağı ve Tanık/Bilirkişi)',
    articleRef: 'M. 316-322',
    trueStatement:
      'Basit yargılama usulüne tabi davalarda dava açılması ve davaya cevap verilmesi dilekçe ile olur; cevap süresi dava dilekçesinin davalıya tebliğinden itibaren iki haftadır ve mahkeme durum ve koşullara göre bu süreyi bir defaya mahsus olmak üzere en fazla iki hafta uzatabilir; taraflar cevaba cevap (replik) ve ikinci cevap (düplik) dilekçesi veremezler; iddianın genişletilmesi veya değiştirilmesi yasağı dava açılmasıyla, savunmanın genişletilmesi veya değiştirilmesi yasağı ise cevap dilekçesinin mahkemeye verilmesiyle başlar.',
    trueHighlight: ['cevap süresi dava dilekçesinin davalıya tebliğinden itibaren iki haftadır', 'taraflar cevaba cevap (replik) ve ikinci cevap (düplik) dilekçesi veremezler', 'iddianın genişletilmesi veya değiştirilmesi yasağı dava açılmasıyla, savunmanın genişletilmesi veya değiştirilmesi yasağı ise cevap dilekçesinin mahkemeye verilmesiyle başlar'],
    trueCorrectPhrase: 'basit yargılama usulünde (Sulh Hukuk, İş, İcra, Aile nafaka/velayet, ihtiyati tedbir/haciz) cevap süresi 2 haftadır (+2 hafta ek süre), replik ve düplik dilekçesi verilemez ve iddia/savunmanın genişletilmesi yasağı dava/cevap dilekçesinin verilmesiyle başlar!',
    baseExplanation: 'HMK m. 317-319’daki en kritik sınav tuzağı: Yazılı yargılama usulünde iddia ve savunmanın genişletilmesi yasağı 2. dilekçelerin (replik/düplik) verilmesiyle başlarken, basit yargılama usulünde replik/düplik olmadığından doğrudan dava ve cevap dilekçesinin verilmesiyle başlar!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'taraflar cevaba cevap (replik) ve ikinci cevap (düplik) dilekçesi veremezler; iddianın genişletilmesi veya değiştirilmesi yasağı dava açılmasıyla, savunmanın genişletilmesi veya değiştirilmesi yasağı ise cevap dilekçesinin mahkemeye verilmesiyle başlar',
      wrongPhrase: 'taraflar ikişer hafta içinde cevaba cevap ve ikinci cevap dilekçesi verebilirler; iddia ve savunmanın genişletilmesi yasağı ancak ön inceleme duruşmasının tamamlanmasıyla başlar',
      correctPhrase: 'taraflar cevaba cevap (replik) ve ikinci cevap (düplik) dilekçesi veremezler; iddianın genişletilmesi veya değiştirilmesi yasağı dava açılmasıyla, savunmanın genişletilmesi veya değiştirilmesi yasağı ise cevap dilekçesinin mahkemeye verilmesiyle başlar',
      explanation: 'HMK m. 317/3 ve m. 319 uyarınca basit yargılama usulünde cevaba cevap (replik) ve ikinci cevap (düplik) dilekçesi verilemez ve teksif (iddia/savunmanın genişletilmesi yasağı) dava/cevap dilekçesinin verilmesiyle başlar!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'cevap süresi dava dilekçesinin davalıya tebliğinden itibaren iki haftadır ve mahkeme durum ve koşullara göre bu süreyi bir defaya mahsus olmak üzere en fazla iki hafta uzatabilir',
      wrongPhrase: 'cevap süresi bir haftadır ve mahkeme bu süreyi en fazla bir ay uzatabilir',
      correctPhrase: 'cevap süresi dava dilekçesinin davalıya tebliğinden itibaren iki haftadır ve mahkeme durum ve koşullara göre bu süreyi bir defaya mahsus olmak üzere en fazla iki hafta uzatabilir',
      explanation: 'Basit yargılama usulünde de cevap süresi 2 haftadır; ancak yazılı yargılamadaki 1 aya kadar ek süreden farklı olarak basit yargılamada ek cevap süresi en fazla 2 haftadır (HMK m. 317/2)!'
    }
  },
  {
    id: 'rule-hmk-19',
    branch: 'HMK',
    subTopic: 'Zorunlu Arabuluculuk Kapsamına Alınan Kira, Kat Mülkiyeti ve Ortaklığın Giderilmesi Davaları (7445 s.K.)',
    articleRef: '6325 s.K. M. 18/B',
    trueStatement:
      'Kiralanan taşınmazların 2004 sayılı Kanuna göre ilamsız icra yoluyla tahliyesine ilişkin hükümler ayrık olmak üzere, kira ilişkisinden kaynaklanan uyuşmazlıklar, taşınır ve taşınmazların paylaştırılmasına ve ortaklığın giderilmesine (izale-i şüyu) ilişkin uyuşmazlıklar, Kat Mülkiyeti Kanunundan kaynaklanan uyuşmazlıklar ve komşu hakkından kaynaklanan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır.',
    trueHighlight: ['ilamsız icra yoluyla tahliyesine ilişkin hükümler ayrık olmak üzere, kira ilişkisinden kaynaklanan uyuşmazlıklar', 'ortaklığın giderilmesine (izale-i şüyu) ilişkin uyuşmazlıklar, Kat Mülkiyeti Kanunundan kaynaklanan uyuşmazlıklar ve komşu hakkından kaynaklanan uyuşmazlıklarda', 'arabulucuya başvurulmuş olması dava şartıdır'],
    trueCorrectPhrase: '7445 s.K. (1 Eylül 2023) ile kira (İİK ilamsız tahliye hariç), ortaklığın giderilmesi, kat mülkiyeti ve komşu hakkı uyuşmazlıklarında dava şartı arabuluculuk (3 hafta + 1 hafta) getirilmiştir',
    baseExplanation: '6325 sayılı Hukuk Uyuşmazlıklarında Arabuluculuk Kanunu m. 18/B (7445 s.K. ile eklendi) uyarınca kira, ortaklığın giderilmesi, kat mülkiyeti ve komşu hakkı davalarında zorunlu arabuluculuk süresi 3 hafta + en fazla 1 hafta uzatmadır; İİK ilamsız tahliye takibinde ise arabuluculuk zorunlu değildir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kiralanan taşınmazların 2004 sayılı Kanuna göre ilamsız icra yoluyla tahliyesine ilişkin hükümler ayrık olmak üzere, kira ilişkisinden kaynaklanan uyuşmazlıklar, taşınır ve taşınmazların paylaştırılmasına ve ortaklığın giderilmesine (izale-i şüyu) ilişkin uyuşmazlıklar',
      wrongPhrase: 'İcra ve İflas Kanununa göre kiralanan taşınmazların ilamsız icra yoluyla tahliyesi takibi başlatılmadan önce de arabulucuya başvurulması zorunlu olup ortaklığın giderilmesi davalarında ise arabuluculuk ihtiyari olduğundan',
      correctPhrase: 'Kiralanan taşınmazların 2004 sayılı Kanuna göre ilamsız icra yoluyla tahliyesine ilişkin hükümler ayrık olmak üzere, kira ilişkisinden kaynaklanan uyuşmazlıklar, taşınır ve taşınmazların paylaştırılmasına ve ortaklığın giderilmesine (izale-i şüyu) ilişkin uyuşmazlıklar',
      explanation: '6325 s.K. m. 18/B uyarınca ortaklığın giderilmesi (izale-i şüyu) davalarında arabuluculuk zorunlu dava şartıdır; buna karşılık İİK’ya göre kiralanan taşınmazların ilamsız icra yoluyla tahliyesinde arabuluculuk şartı aranmaz!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'komşu hakkından kaynaklanan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır',
      wrongPhrase: 'taşınmazlara ilişkin arabuluculuk anlaşma belgesinin icra edilebilirlik şerhi taşınmazın bulunduğu yer icra mahkemesinden alınır',
      correctPhrase: 'komşu hakkından kaynaklanan uyuşmazlıklarda dava açılmadan önce arabulucuya başvurulmuş olması dava şartıdır',
      explanation: '6325 s.K. m. 18/B-3 uyarınca taşınmazın devrine veya taşınmaz üzerinde sınırlı ayni hak kurulmasına ilişkin anlaşma belgelerinin icra edilebilirlik şerhi İcra Mahkemesinden değil, taşınmazın bulunduğu yer Sulh Hukuk Mahkemesinden alınır!'
    }
  },
  {
    id: 'rule-cmk-19',
    branch: 'CMK',
    subTopic: 'Soruşturma Evresinde Azami Tutukluluk Süreleri (CMK m. 102/4)',
    articleRef: 'M. 102',
    trueStatement:
      'Soruşturma evresinde tutukluluk süresi, ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez; ancak Türk Ceza Kanununun İkinci Kitap Dördüncü Kısmının Dört, Beş, Altı ve Yedinci Bölümlerinde tanımlanan suçlar ile Terörle Mücadele Kanunu kapsamına giren suçlar ve toplu olarak işlenen suçlar bakımından bu süre en çok bir yıl altı ay olup, gerekçesi gösterilerek altı ay daha uzatılabilir.',
    trueHighlight: ['Soruşturma evresinde tutukluluk süresi, ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez', 'bu süre en çok bir yıl altı ay olup, gerekçesi gösterilerek altı ay daha uzatılabilir'],
    trueCorrectPhrase: 'soruşturma evresinde azami tutukluluk süresi: Asliye Ceza işlerinde 6 ay, Ağır Ceza işlerinde 1 yıl, devlet güvenliği/terör/toplu suçlarda ise 1 yıl 6 ay (+ 6 ay uzatma = toplam 2 yıl); kovuşturma dahil genel tutukluluk üst sınırı ise Asliye Cezada 1 yıl (+6 ay), Ağır Cezada 2 yıl (+3 yıl, terör suçlarında +5 yıl) olarak uygulanır',
    baseExplanation: '7188 sayılı Kanunla CMK m. 102/4’e eklenen soruşturma evresi tutukluluk üst sınırları (6 ay - 1 yıl - 1,5+0,5 yıl) kovuşturma evresi üst sınırlarıyla (1+0,5 yıl ve 2+3/5 yıl) karıştırılmamalıdır!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Soruşturma evresinde tutukluluk süresi, ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez',
      wrongPhrase: 'Soruşturma evresinde tutukluluk süresi, ağır ceza mahkemesinin görevine girmeyen işler bakımından bir yılı, ağır ceza mahkemesinin görevine giren işler bakımından ise iki yılı geçemez',
      correctPhrase: 'Soruşturma evresinde tutukluluk süresi, ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez',
      explanation: '1 yıl ve 2 yıl genel (kovuşturma dahil) tutukluluk süreleridir (CMK m. 102/1-2); yalnızca SORUŞTURMA evresindeki azami tutukluluk süresi (CMK m. 102/4) ağır cezaya girmeyen işlerde 6 ay, ağır cezaya giren işlerde 1 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu süre en çok bir yıl altı ay olup, gerekçesi gösterilerek altı ay daha uzatılabilir',
      wrongPhrase: 'tutukluluk durumunun incelenmesi soruşturma evresinde en geç altmış günde bir yapılır',
      correctPhrase: 'bu süre en çok bir yıl altı ay olup, gerekçesi gösterilerek altı ay daha uzatılabilir',
      explanation: 'CMK m. 108 uyarınca tutukluluk durumunun incelenmesi 60 günde bir değil, en geç 30’ar günlük sürelerle yapılır!'
    }
  },
  {
    id: 'rule-tck-16',
    branch: 'TCK',
    subTopic: 'Zimmet, İrtikâp ve Rüşvet Suçlarının Ayrımı',
    articleRef: 'M. 247, 250 & 252',
    trueStatement:
      'Görevi nedeniyle zilyetliği kendisine devredilmiş olan veya koruma ve gözetimiyle yükümlü olduğu malı kendisinin veya başkasının zimmetine geçiren kamu görevlisi zimmet suçunu işler; görevinin sağladığı nüfuzu kötüye kullanmak suretiyle kendisine veya başkasına yarar sağlanmasına veya bu yolda vaatte bulunulmasına bir kimseyi icbar veya ikna eden kamu görevlisi irtikâp suçunu işler; görevinin ifasıyla ilgili bir işi yapması veya yapmaması için kişiyle vardığı anlaşma çerçevesinde yarar sağlayan kamu görevlisi ise rüşvet suçunu işler.',
    trueHighlight: ['zilyetliği kendisine devredilmiş olan veya koruma ve gözetimiyle yükümlü olduğu malı kendisinin veya başkasının zimmetine geçiren kamu görevlisi zimmet suçunu işler', 'görevinin sağladığı nüfuzu kötüye kullanmak suretiyle kendisine veya başkasına yarar sağlanmasına veya bu yolda vaatte bulunulmasına bir kimseyi icbar veya ikna eden kamu görevlisi irtikâp suçunu işler', 'anlaşma çerçevesinde yarar sağlayan kamu görevlisi ise rüşvet suçunu işler'],
    trueCorrectPhrase: 'zilyetliği görevi gereği kendisine devredilen malı mal edinme -> Zimmet (m. 247); kamu görevlisinin tek taraflı icbar/ikna/hatadan yararlanması -> İrtikâp (m. 250, karşı taraf mağdurdur, cezalandırılmaz); iki tarafın serbest anlaşması -> Rüşvet (m. 252, hem alan hem veren faildir)',
    baseExplanation: 'Ceza Özel Hukukunun en klasik HMGS sorusu: İcbar suretiyle irtikâpta (m. 250/1) menfaati veren kişi suçun faili değil mağdurudur; rüşvette (m. 252) ise iki taraflı anlaşma (çok failli suç) vardır, hem rüşvet alan hem rüşvet veren cezalandırılır!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'görevinin sağladığı nüfuzu kötüye kullanmak suretiyle kendisine veya başkasına yarar sağlanmasına veya bu yolda vaatte bulunulmasına bir kimseyi icbar veya ikna eden kamu görevlisi irtikâp suçunu işler',
      wrongPhrase: 'kamu görevlisinin haklı bir işin görülmemesi tehdidiyle (icbar suretiyle) karşı taraftan haksız menfaat temin etmesi hâlinde hem kamu görevlisi hem de menfaati veren vatandaş rüşvet suçundan cezalandırılır',
      correctPhrase: 'görevinin sağladığı nüfuzu kötüye kullanmak suretiyle kendisine veya başkasına yarar sağlanmasına veya bu yolda vaatte bulunulmasına bir kimseyi icbar veya ikna eden kamu görevlisi irtikâp suçunu işler',
      explanation: 'TCK m. 250/1 uyarınca kamu görevlisinin icbar (zorlama) suretiyle menfaat sağlaması rüşvet değil icbar suretiyle irtikâptır ve bu durumda menfaati veren kişi rüşvet veren sayılmaz, suçun mağdurudur!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'anlaşma çerçevesinde yarar sağlayan kamu görevlisi ise rüşvet suçunu işler',
      wrongPhrase: 'rüşvet suçunun tamamlanması için kararlaştırılan menfaatin kamu görevlisine fiilen teslim edilmiş olması şart olup rüşvet anlaşması yapılmasıyla suç tamamlanmaz',
      correctPhrase: 'anlaşma çerçevesinde yarar sağlayan kamu görevlisi ise rüşvet suçunu işler',
      explanation: 'TCK m. 252/3 açık hükmü uyarınca rüşvet konusunda anlaşmaya varılması hâlinde suç tamamlanmış gibi cezaya hükmolunur!'
    }
  },
  {
    id: 'rule-iyuk-15',
    branch: 'İYUK',
    subTopic: 'Bağlantılı Davalar ve Merci Tayini',
    articleRef: 'M. 38-44',
    trueStatement:
      'Aynı maddi veya hukuki sebepten doğan ya da biri hakkında verilecek hüküm diğerini etkileyecek nitelikte olan davalarda bağlantı var sayılır; bağlantılı davalar aynı bölge idare mahkemesinin yargı çevresindeki mahkemelerde bulunuyorsa bağlantı kararı bölge idare mahkemesince, Danıştay ile bir idare veya vergi mahkemesinde yahut farklı bölge idare mahkemelerinin yargı çevresindeki mahkemelerde bulunuyorsa Danıştayca incelenip karara bağlanır.',
    trueHighlight: ['aynı bölge idare mahkemesinin yargı çevresindeki mahkemelerde bulunuyorsa bağlantı kararı bölge idare mahkemesince', 'farklı bölge idare mahkemelerinin yargı çevresindeki mahkemelerde bulunuyorsa Danıştayca incelenip karara bağlanır'],
    trueCorrectPhrase: 'İYUK m. 39-43 uyarınca aynı BİM yargı çevresindeki mahkemeler arasındaki bağlantı ve görev/yetki uyuşmazlıklarını ilgili Bölge İdare Mahkemesi, farklı BİM yargı çevresindeki mahkemeler (veya Danıştay ile mahkeme) arasındaki bağlantı ve görev/yetki uyuşmazlıklarını ise Danıştay çözer',
    baseExplanation: 'İYUK m. 38-43 uyarınca bağlantının varlığına ilişkin kararlara itiraz edilemez; hem bağlantılı davalarda hem de görev/yetki uyuşmazlığında (merci tayini) aynı BİM çevresindeyse BİM, farklı BİM çevresindeyse Danıştay karar verir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'aynı bölge idare mahkemesinin yargı çevresindeki mahkemelerde bulunuyorsa bağlantı kararı bölge idare mahkemesince, Danıştay ile bir idare veya vergi mahkemesinde yahut farklı bölge idare mahkemelerinin yargı çevresindeki mahkemelerde bulunuyorsa Danıştayca incelenip karara bağlanır',
      wrongPhrase: 'idari yargı yerleri arasındaki tüm bağlantı kararları ve görev/yetki uyuşmazlıkları yalnızca Uyuşmazlık Mahkemesince incelenip karara bağlanır',
      correctPhrase: 'aynı bölge idare mahkemesinin yargı çevresindeki mahkemelerde bulunuyorsa bağlantı kararı bölge idare mahkemesince, Danıştay ile bir idare veya vergi mahkemesinde yahut farklı bölge idare mahkemelerinin yargı çevresindeki mahkemelerde bulunuyorsa Danıştayca incelenip karara bağlanır',
      explanation: 'Uyuşmazlık Mahkemesi FARKLI yargı kolları (adli yargı ile idari yargı) arasındaki görev ve hüküm uyuşmazlıklarını çözer; idari yargının kendi içindeki mahkemeler arasındaki bağlantı ve görev/yetki uyuşmazlıklarını ise BİM veya Danıştay çözer!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Aynı maddi veya hukuki sebepten doğan ya da biri hakkında verilecek hüküm diğerini etkileyecek nitelikte olan davalarda bağlantı var sayılır',
      wrongPhrase: 'Bağlantının varlığı yolunda idare ve vergi mahkemelerince veya Danıştayca verilen kararlara karşı on beş gün içinde itiraz edilebilir',
      correctPhrase: 'Aynı maddi veya hukuki sebepten doğan ya da biri hakkında verilecek hüküm diğerini etkileyecek nitelikte olan davalarda bağlantı var sayılır',
      explanation: 'İYUK m. 42/3 uyarınca bağlantının bulunup bulunmadığı yolundaki bölge idare mahkemesi ve Danıştay kararları kesindir (itiraz edilemez); yalnız bağlantısızlık kararlarına karşı 15 gün içinde BİM/Danıştaya itiraz edilebilir!'
    }
  },
  {
    id: 'rule-idare-14',
    branch: 'İdare',
    subTopic: 'Devlet Memurlarının Görevden Uzaklaştırılması Süresi (10 Gün & 3 Ay)',
    articleRef: '657 s.K. M. 137-145',
    trueStatement:
      'Görevden uzaklaştırma, Devlet kamu hizmetlerinin gerektirdiği hâllerde, görevi başında kalmasında sakınca görülecek Devlet memurları hakkında alınan ihtiyati bir tedbirdir; görevinden uzaklaştırılan Devlet memurları hakkında görevden uzaklaştırmayı izleyen on iş günü içinde soruşturmaya başlanması şarttır; görevden uzaklaştırma bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi ödenir.',
    trueHighlight: ['görevden uzaklaştırmayı izleyen on iş günü içinde soruşturmaya başlanması şarttır', 'bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir', 'aylıklarının üçte ikisi ödenir'],
    trueCorrectPhrase: '657 s.K. uyarınca görevden uzaklaştırılan memur hakkında 10 iş günü içinde soruşturmaya başlanmalıdır (başlanmazsa tedbir kalkar ve amir sorumlu olur); disiplin soruşturması nedeniyle görevden uzaklaştırma en çok 3 ay sürer (ceza kovuşturmasında ise 2 ayda bir incelenir) ve bu sürede memura aylığının 2/3’ü ödenir',
    baseExplanation: '657 s.K. m. 138-145 uyarınca görevden uzaklaştırmaya atamaya yetkili amirler, bakanlık/genel müdürlük müfettişleri, illerde valiler, ilçelerde kaymakamlar yetkilidir; 10 iş günü içinde soruşturmaya başlanmalıdır, disiplin yönünden azami süre 3 aydır ve aylığın 2/3’ü ödenir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'görevden uzaklaştırmayı izleyen on iş günü içinde soruşturmaya başlanması şarttır; görevden uzaklaştırma bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi ödenir',
      wrongPhrase: 'görevden uzaklaştırmayı izleyen otuz gün içinde soruşturmaya başlanması şarttır; disiplin kovuşturması nedeniyle görevden uzaklaştırma en çok bir yıl devam edebilir ve bu sürede memura aylığının yarısı ödenir',
      correctPhrase: 'görevden uzaklaştırmayı izleyen on iş günü içinde soruşturmaya başlanması şarttır; görevden uzaklaştırma bir disiplin kovuşturması icabından olduğu takdirde en çok üç ay devam edebilir ve görevden uzaklaştırılan memurlara bu süre içinde aylıklarının üçte ikisi ödenir',
      explanation: '657 s.K. m. 139, 141 ve 145 uyarınca görevden uzaklaştırmada soruşturmaya başlama süresi 10 iş günü, disiplin kovuşturmasında azami süre 3 ay ve ödenen maaş oranı 2/3’tür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Görevden uzaklaştırma, Devlet kamu hizmetlerinin gerektirdiği hâllerde, görevi başında kalmasında sakınca görülecek Devlet memurları hakkında alınan ihtiyati bir tedbirdir',
      wrongPhrase: 'Görevden uzaklaştırma bir disiplin cezası olup yalnızca Yüksek Disiplin Kurulu tarafından verilebilir',
      correctPhrase: 'Görevden uzaklaştırma, Devlet kamu hizmetlerinin gerektirdiği hâllerde, görevi başında kalmasında sakınca görülecek Devlet memurları hakkında alınan ihtiyati bir tedbirdir',
      explanation: 'Görevden uzaklaştırma bir disiplin cezası değil ihtiyati bir tedbirdir; atamaya yetkili amirler, müfettişler, valiler ve kaymakamlar tarafından alınabilir!'
    }
  },
  {
    id: 'rule-ticaret-13',
    branch: 'Ticaret',
    subTopic: 'Cari Hesap Sözleşmesi, İtiraz Süresi (1 Ay) ve Zamanaşımı (5 Yıl)',
    articleRef: 'TTK M. 89, 94 & 101',
    trueStatement:
      'Cari hesap sözleşmesi yazılı yapılmadıkça geçerli olmaz; sözleşme veya ticari teamül uyarınca hesap devreleri sonunda çıkarılan bakiyeyi gösteren cetvelin alındığı tarihten itibaren bir ay içinde, noter aracılığıyla, taahhütlü mektupla, telgrafla veya güvenli elektronik imza içeren bir belgeyle itirazda bulunulmazsa bakiye kabul edilmiş sayılır; cari hesabın tasfiyesine ve bakiyeye ilişkin davalar cari hesap sözleşmesinin sona ermesinden itibaren beş yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['Cari hesap sözleşmesi yazılı yapılmadıkça geçerli olmaz', 'cetvelin alındığı tarihten itibaren bir ay içinde', 'cari hesap sözleşmesinin sona ermesinden itibaren beş yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'cari hesap sözleşmesi adi yazılı şekle tabidir; bakiye cetveline itiraz süresi tebliğden itibaren 1 aydır (nitelikli bildirimle); cari hesap davalarında zamanaşımı süresi sözleşmenin sona ermesinden itibaren 5 yıldır',
    baseExplanation: 'TTK m. 89, 94 ve 101 uyarınca cari hesap sözleşmesi yazılı şekle tabidir, bakiyeye itiraz süresi 1 ay, zamanaşımı süresi ise sözleşmenin sona ermesinden itibaren 5 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'cetvelin alındığı tarihten itibaren bir ay içinde, noter aracılığıyla, taahhütlü mektupla, telgrafla veya güvenli elektronik imza içeren bir belgeyle itirazda bulunulmazsa bakiye kabul edilmiş sayılır; cari hesabın tasfiyesine ve bakiyeye ilişkin davalar cari hesap sözleşmesinin sona ermesinden itibaren beş yıl',
      wrongPhrase: 'cetvelin alındığı tarihten itibaren sekiz gün içinde itirazda bulunulmazsa bakiye kabul edilmiş sayılır; cari hesaptan doğan davalar ise on yıl',
      correctPhrase: 'cetvelin alındığı tarihten itibaren bir ay içinde, noter aracılığıyla, taahhütlü mektupla, telgrafla veya güvenli elektronik imza içeren bir belgeyle itirazda bulunulmazsa bakiye kabul edilmiş sayılır; cari hesabın tasfiyesine ve bakiyeye ilişkin davalar cari hesap sözleşmesinin sona ermesinden itibaren beş yıl',
      explanation: '8 günlük süre faturaya itiraz süresidir (TTK m. 21/2); cari hesapta bakiye cetveline itiraz süresi 1 ay (TTK m. 94/2), zamanaşımı süresi ise 5 yıldır (TTK m. 101)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Cari hesap sözleşmesi yazılı yapılmadıkça geçerli olmaz',
      wrongPhrase: 'Cari hesap sözleşmesi herhangi bir geçerlilik şekline tabi olmayıp taraflar arasında sözlü olarak kurulabilir ve cari hesaba geçirilen alacaklar derhâl münferiden dava ve takip konusu yapılabilir',
      correctPhrase: 'Cari hesap sözleşmesi yazılı yapılmadıkça geçerli olmaz',
      explanation: 'TTK m. 89/2 uyarınca cari hesap sözleşmesi yazılı şekle tabidir ve TTK m. 90/1-a uyarınca cari hesaba geçirilen kalemler tek başına (münferiden) talep, dava ve takip konusu yapılamaz!'
    }
  },
  {
    id: 'rule-iik-16',
    branch: 'İcra',
    subTopic: 'Kiralanan Taşınmazların İlamsız Tahliyesi (Örnek 13 ve Örnek 14 Süreleri)',
    articleRef: 'İİK M. 269-272',
    trueStatement:
      'Kira bedelinin ödenmemesi sebebiyle yapılan ilamsız tahliye takibinde (Örnek 13) ödeme emrine itiraz süresi yedi gün, konut ve çatılı işyeri kiralarında ödeme (ihtar) süresi ise en az otuz gündür; kira süresinin bitmesi (yazılı tahliye taahhüdü veya adi kira/hasılat kirasında süre bitimi) sebebiyle kira süresinin bitiminden itibaren bir ay içinde yapılan ilamsız tahliye takibinde (Örnek 14) ise tahliye emrine itiraz süresi yedi gün, taşınmazı tahliye ve teslim süresi onbeş gündür.',
    trueHighlight: ['Kira bedelinin ödenmemesi sebebiyle yapılan ilamsız tahliye takibinde (Örnek 13) ödeme emrine itiraz süresi yedi gün, konut ve çatılı işyeri kiralarında ödeme (ihtar) süresi ise en az otuz gündür', 'tahliye emrine itiraz süresi yedi gün, taşınmazı tahliye ve teslim süresi onbeş gündür'],
    trueCorrectPhrase: 'İİK ilamsız tahliyede: 1) Kira bedelinin ödenmemesinde (Örnek 13) itiraz süresi 7 gün, konut/çatılı işyerinde ödeme süresi en az 30 gündür (hasılat kirasında 60 gün); 2) Süre bitimi/tahliye taahhüdünde (Örnek 14) takip süresi 1 ay, itiraz süresi 7 gün, tahliye süresi 15 gündür',
    baseExplanation: 'İİK m. 269 ve m. 272 uyarınca kira bedelinin ödenmemesi nedeniyle ilamsız tahliyede yazılı kira sözleşmesi şart değildir; ancak süre bitimi/tahliye taahhüdü nedeniyle ilamsız tahliyede yazılı sözleşme/taahhüt şarttır ve tahliye süresi 15 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Kira bedelinin ödenmemesi sebebiyle yapılan ilamsız tahliye takibinde (Örnek 13) ödeme emrine itiraz süresi yedi gün, konut ve çatılı işyeri kiralarında ödeme (ihtar) süresi ise en az otuz gündür',
      wrongPhrase: 'Kira bedelinin ödenmemesi sebebiyle yapılan ilamsız tahliye takibinde hem itiraz süresi hem de konut ve çatılı işyeri kiralarında ödeme süresi yedi gündür',
      correctPhrase: 'Kira bedelinin ödenmemesi sebebiyle yapılan ilamsız tahliye takibinde (Örnek 13) ödeme emrine itiraz süresi yedi gün, konut ve çatılı işyeri kiralarında ödeme (ihtar) süresi ise en az otuz gündür',
      explanation: 'İİK m. 269 ve TBK m. 315 uyarınca kira bedelinin ödenmemesi nedeniyle ilamsız tahliyede ödeme emrine itiraz süresi 7 gün iken, borcu ödeme süresi 7 gün değil, konut ve çatılı işyeri kiralarında en az 30 gündür (hasılat kiralarında 60 gündür)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tahliye emrine itiraz süresi yedi gün, taşınmazı tahliye ve teslim süresi onbeş gündür',
      wrongPhrase: 'kira bedelinin ödenmemesi sebebiyle ilamsız tahliye takibi başlatılabilmesi için de elinde noterlikçe düzenlenmiş veya onaylanmış yazılı bir kira sözleşmesi bulunması zorunludur',
      correctPhrase: 'tahliye emrine itiraz süresi yedi gün, taşınmazı tahliye ve teslim süresi onbeş gündür',
      explanation: 'Süre bitimi nedeniyle ilamsız tahliyede (İİK m. 272) yazılı sözleşme/taahhüt şart iken, kira bedelinin ödenmemesi nedeniyle ilamsız tahliyede (İİK m. 269) yazılı kira sözleşmesi şart değildir; sözlü kira sözleşmesine dayanılarak da takip yapılabilir!'
    }
  }
];
