import { StatutoryRuleSeed } from './hmgsStatuteRepository';

/**
 * HMGS Mevzuat Genişletme Paketi — Bölüm 12 (30 Kural = 90 Yeni Doğrulanmış Kart)
 * HMK, CMK, TCK, TMK, TBK, TTK ve İİK alanlarında daha önce kapsanmamış
 * yüksek sınav frekanslı kanun hükümleri.
 */
export const HMGS_COMPREHENSIVE_EXPANSION_PART12_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. HMK (6100 SAYILI HUKUK MUHAKEMELERİ KANUNU)
  // =========================================================================
  {
    id: 'rule-hmk-mecburi-dava-arkadasligi-m59-60-p12',
    branch: 'HMK',
    subTopic: 'Mecburi Dava Arkadaşlığı ve Duruşmaya Gelmeyen Arkadaşların Durumu',
    articleRef: 'HMK M. 59 & 60',
    trueStatement:
      'Maddi hukuka göre bir hakkın birden fazla kimse tarafından birlikte kullanılması veya birden fazla kimseye karşı birlikte ileri sürülmesi ve tamamı hakkında tek hüküm verilmesi gereken hâllerde mecburi dava arkadaşlığı vardır; mecburi dava arkadaşları ancak birlikte dava açabilir veya aleyhlerine birlikte dava açılabilir, ancak duruşmaya gelmiş olan dava arkadaşlarının yapmış oldukları usul işlemleri usulüne uygun davet edildiği hâlde duruşmaya gelmemiş olan dava arkadaşları bakımından da hüküm ifade eder.',
    trueHighlight: ['mecburi dava arkadaşları ancak birlikte dava açabilir veya aleyhlerine birlikte dava açılabilir', 'duruşmaya gelmiş olan dava arkadaşlarının yapmış oldukları usul işlemleri usulüne uygun davet edildiği hâlde duruşmaya gelmemiş olan dava arkadaşları bakımından da hüküm ifade eder'],
    trueCorrectPhrase: 'Mecburi dava arkadaşları birlikte hareket etmek zorundadır; ancak duruşmaya gelenlerin usul işlemleri gelmeyenler için de hüküm doğurur.',
    baseExplanation: 'HMK m. 59 ve m. 60: Mecburi dava arkadaşlığında birlikte hareket ilkesi geçerlidir; ancak davayı sürüncemede bırakmamak adına duruşmaya gelen mecburi dava arkadaşlarının yaptığı usul işlemleri, usulüne uygun davet edilip gelmeyenler bakımından da geçerlidir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'duruşmaya gelmiş olan dava arkadaşlarının yapmış oldukları usul işlemleri usulüne uygun davet edildiği hâlde duruşmaya gelmemiş olan dava arkadaşları bakımından da hüküm ifade eder',
      wrongPhrase: 'mecburi dava arkadaşlarından birinin dahi duruşmaya gelmemesi hâlinde diğerlerinin yaptığı tüm usul işlemleri geçersiz sayılır ve dosya derhâl işlemden kaldırılır',
      correctPhrase: 'duruşmaya gelmiş olan dava arkadaşlarının yapmış oldukları usul işlemleri usulüne uygun davet edildiği hâlde duruşmaya gelmemiş olan dava arkadaşları bakımından da hüküm ifade eder',
      explanation: 'HMK m. 60 son cümle uyarınca mecburi dava arkadaşlarından bir kısmı duruşmaya gelmezse, gelenlerin yaptığı usul işlemleri gelmeyenler bakımından da hüküm ifade eder!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tamamı hakkında tek hüküm verilmesi gereken hâllerde mecburi dava arkadaşlığı vardır',
      wrongPhrase: 'mecburi dava arkadaşlarının her biri davadan tek başına bağımsız olarak feragat edebilir ve her biri hakkında farklı hüküm kurulabilir',
      correctPhrase: 'tamamı hakkında tek hüküm verilmesi gereken hâllerde mecburi dava arkadaşlığı vardır',
      explanation: 'İhtiyari dava arkadaşlığında davalar birbirinden bağımsız iken, maddi bakımdan mecburi dava arkadaşlığında tamamı hakkında tek hüküm verilmesi zorunludur.'
    }
  },
  {
    id: 'rule-hmk-ihbar-ve-feri-mudahale-zamani-p12',
    branch: 'HMK',
    subTopic: 'Davanın İhbarı ve Fer’i Müdahale Zaman Sınırı (Tahkikat Sona Erinceye Kadar)',
    articleRef: 'HMK M. 61 & 66',
    trueStatement:
      'Taraflardan biri davayı kaybettiği takdirde üçüncü kişiye veya üçüncü kişinin kendisine rücu edeceğini düşünüyorsa tahkikat sonuçlanıncaya kadar davayı üçüncü kişiye ihbar edebilir; üçüncü kişi de yanında katılmak istediği tarafın davayı kazanmasında hukuki yararı varsa tahkikat sona erinceye kadar fer’i müdahil olarak davada yer alabilir.',
    trueHighlight: ['tahkikat sonuçlanıncaya kadar davayı üçüncü kişiye ihbar edebilir', 'tahkikat sona erinceye kadar fer’i müdahil olarak davada yer alabilir'],
    trueCorrectPhrase: 'Davanın ihbarı ve fer’i müdahale talebi tahkikat sona erinceye kadar yapılabilir.',
    baseExplanation: 'HMK m. 61 ve m. 66: Hem davanın üçüncü kişiye ihbarı hem de üçüncü kişinin davaya fer’i müdahil olarak katılması tahkikat sona erinceye kadar mümkündür; yazılı şekle tabidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tahkikat sona erinceye kadar fer’i müdahil olarak davada yer alabilir',
      wrongPhrase: 'yalnızca ön inceleme duruşması tamamlanıncaya kadar fer’i müdahil olarak davada yer alabilir',
      correctPhrase: 'tahkikat sona erinceye kadar fer’i müdahil olarak davada yer alabilir',
      explanation: 'HMK m. 66 uyarınca fer’i müdahale ön inceleme sonuna kadar değil, tahkikat sona erinceye kadar talep edilebilir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tahkikat sonuçlanıncaya kadar davayı üçüncü kişiye ihbar edebilir',
      wrongPhrase: 'hüküm Yargıtayca onanıncaya kadar kanun yolu aşamasında dahi davayı ilk kez üçüncü kişiye ihbar edebilir',
      correctPhrase: 'tahkikat sonuçlanıncaya kadar davayı üçüncü kişiye ihbar edebilir',
      explanation: 'HMK m. 61 uyarınca davanın ihbarı tahkikat sonuçlanıncaya kadar yapılabilir.'
    }
  },
  {
    id: 'rule-hmk-teminat-gosterilmesi-m84-85-p12',
    branch: 'HMK',
    subTopic: 'HMK’da Teminat Gösterilmesi (Cautio Judicatum Solvi) ve Muafiyet Halleri',
    articleRef: 'HMK M. 84 & 85',
    trueStatement:
      'Türkiye’de mutad meskeni olmayan Türk vatandaşının dava açması, davaya müdahale etmesi veya icra takibi yapması hâlinde davalının muhtemel yargılama giderlerini karşılayacak uygun bir teminat gösterilir; ancak adli yardımdan yararlananlar ile yurt içinde yeterli taşınmaz malı veya ayni teminatla güvence altına alınmış alacağı bulunanlar teminat göstermekten muaftır.',
    trueHighlight: ['Türkiye’de mutad meskeni olmayan Türk vatandaşının dava açması', 'adli yardımdan yararlananlar ile yurt içinde yeterli taşınmaz malı veya ayni teminatla güvence altına alınmış alacağı bulunanlar teminat göstermekten muaftır'],
    trueCorrectPhrase: 'Türkiye’de mutad meskeni olmayan Türk vatandaşı davacı teminat gösterir; adli yardımdan yararlanan veya Türkiye’de yeterli taşınmazı olan muaftır.',
    baseExplanation: 'HMK m. 84 ve m. 85: Türkiye’de mutad meskeni olmayan Türk vatandaşları (MÖHUK m. 48’de ise yabancılar) dava veya takip açarken yargılama giderleri için teminat gösterir. Davacının adli yardımdan yararlanması veya Türkiye’de yeterli taşınmazı/ayni teminatlı alacağı bulunması muafiyet sebebidir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'adli yardımdan yararlananlar ile yurt içinde yeterli taşınmaz malı veya ayni teminatla güvence altına alınmış alacağı bulunanlar teminat göstermekten muaftır',
      wrongPhrase: 'adli yardımdan yararlananlar ve Türkiye’de taşınmaz malı bulunanlar dahi hiçbir istisna olmaksızın teminat göstermek zorundadır',
      correctPhrase: 'adli yardımdan yararlananlar ile yurt içinde yeterli taşınmaz malı veya ayni teminatla güvence altına alınmış alacağı bulunanlar teminat göstermekten muaftır',
      explanation: 'HMK m. 85/1 uyarınca adli yardımdan yararlananlar ve Türkiye’de yeterli taşınmaz malı veya ayni teminatlı alacağı bulunanlar teminattan muaftır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Türkiye’de mutad meskeni olmayan Türk vatandaşının dava açması',
      wrongPhrase: 'Türkiye’de yerleşim yeri ve mutad meskeni bulunan her Türk vatandaşının dava açması',
      correctPhrase: 'Türkiye’de mutad meskeni olmayan Türk vatandaşının dava açması',
      explanation: 'HMK m. 84/1-a uyarınca teminat yükümlülüğü Türkiye’de mutad meskeni OLMAYAN Türk vatandaşı içindir.'
    }
  },
  {
    id: 'rule-hmk-davanin-geri-alinmasi-m123-p12',
    branch: 'HMK',
    subTopic: 'Davanın Geri Alınması ve Davadan Feragat Farkı (Davalının Açık Rızası)',
    articleRef: 'HMK M. 123',
    trueStatement:
      'Davacı, hüküm kesinleşinceye kadar, ancak davalının açık rızası ile davasını geri alabilir ve bu takdirde davanın açılmamış sayılmasına karar verilir.',
    trueHighlight: ['hüküm kesinleşinceye kadar', 'ancak davalının açık rızası ile davasını geri alabilir', 'davanın açılmamış sayılmasına karar verilir'],
    trueCorrectPhrase: 'Davanın geri alınması hüküm kesinleşinceye kadar davalının açık rızasıyla yapılabilir ve dava açılmamış sayılır.',
    baseExplanation: 'HMK m. 123: Davanın geri alınması ile davadan feragat arasındaki en temel fark şudur: Feragatte davalının rızası aranmaz ve kesin hüküm doğurur (bir daha dava açılamaz); davanın geri alınmasında ise davalının açık rızası şarttır ve dava açılmamış sayılır (hak düşmez, ileride yeniden dava açılabilir)!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak davalının açık rızası ile davasını geri alabilir ve bu takdirde davanın açılmamış sayılmasına karar verilir',
      wrongPhrase: 'davalının rızası aranmaksızın tek taraflı beyanla davasını geri alabilir ve bu işlem kesin hüküm gibi sonuç doğurur',
      correctPhrase: 'ancak davalının açık rızası ile davasını geri alabilir ve bu takdirde davanın açılmamış sayılmasına karar verilir',
      explanation: 'Tek taraflı olup kesin hüküm doğuran işlem "davadan feragat"tir (HMK m. 307); "davanın geri alınması" (HMK m. 123) ise ancak davalının açık rızası ile yapılabilir ve dava açılmamış sayılır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hüküm kesinleşinceye kadar',
      wrongPhrase: 'yalnızca cevap dilekçesi verilinceye kadar',
      correctPhrase: 'hüküm kesinleşinceye kadar',
      explanation: 'HMK m. 123 uyarınca davanın geri alınması davalının açık rızasıyla hüküm kesinleşinceye kadar yapılabilir.'
    }
  },
  {
    id: 'rule-hmk-istinaf-ve-temyiz-2-hafta-cekismesiz-yargi-p12',
    branch: 'HMK',
    subTopic: 'HMK’da İstinaf ve Temyiz Başvuru Süresi (2 Hafta) ile Temyiz Edilemeyen Kararlar',
    articleRef: 'HMK M. 345, 361 & 362',
    trueStatement:
      'Hukuk yargılamasında istinaf ve temyiz yoluna başvuru süresi, kararın usulen taraflardan her birine tebliğinden itibaren iki haftadır; bölge adliye mahkemelerinin çekişmesiz yargı işlerinde verilen kararları ile geçici hukuki korumalar hakkında verdiği kararlara karşı temyiz yoluna başvurulamaz.',
    trueHighlight: ['tebliğinden itibaren iki haftadır', 'çekişmesiz yargı işlerinde verilen kararları ile geçici hukuki korumalar hakkında verdiği kararlara karşı temyiz yoluna başvurulamaz'],
    trueCorrectPhrase: 'HMK’da istinaf ve temyiz süresi tebliğden itibaren 2 haftadır; BAM’ın çekişmesiz yargı ve geçici hukuki koruma kararları temyiz edilemez.',
    baseExplanation: 'HMK m. 345, 361 ve 362: Hem istinaf hem de temyiz başvuru süresi tebliğden itibaren 2 haftadır. İhtiyati tedbir/haciz gibi geçici hukuki korumalar ile çekişmesiz yargı kararlarına karşı istinaf yolu açık olmakla birlikte, BAM’ın bu konulardaki kararları kesindir, temyiz edilemez!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğinden itibaren iki haftadır',
      wrongPhrase: 'tefhimden itibaren otuz gündür',
      correctPhrase: 'tebliğinden itibaren iki haftadır',
      explanation: '30 günlük kanun yolu süresi İYUK’ta (idari yargıda) geçerlidir; HMK’da istinaf ve temyiz süresi tebliğden itibaren 2 haftadır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'çekişmesiz yargı işlerinde verilen kararları ile geçici hukuki korumalar hakkında verdiği kararlara karşı temyiz yoluna başvurulamaz',
      wrongPhrase: 'çekişmesiz yargı işleri ile ihtiyati tedbir ve ihtiyati haciz kararlarına karşı da her zaman Yargıtay’da temyiz yoluna başvurulabilir',
      correctPhrase: 'çekişmesiz yargı işlerinde verilen kararları ile geçici hukuki korumalar hakkında verdiği kararlara karşı temyiz yoluna başvurulamaz',
      explanation: 'HMK m. 362/1-ç ve 1-f uyarınca çekişmesiz yargı işleri ile geçici hukuki korumalar (ihtiyati tedbir/ihtiyati haciz) hakkında verilen BAM kararlarına karşı temyiz yolu kapalıdır!'
    }
  },

  // =========================================================================
  // 2. CMK VE TCK (CEZA MUHAKEMESİ VE CEZA HUKUKU)
  // =========================================================================
  {
    id: 'rule-cmk-arama-konut-isyeri-ve-gece-aramasi-m118-119-p12',
    branch: 'CMK',
    subTopic: 'Konutta ve İşyerinde Arama Emri Yetkisi ile Gece Vakti Arama Yasağı',
    articleRef: 'CMK M. 118 & 119',
    trueStatement:
      'Konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda arama, hâkim kararı veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısının yazılı emri ile yapılabilir; kolluk amirinin yazılı emriyle konut ve işyerinde arama yapılamaz ve suçüstü veya gecikmesinde sakınca bulunan hâller ile firar eden kişinin yakalanması dışında konutta ve işyerinde gece vaktinde arama yapılamaz.',
    trueHighlight: ['hâkim kararı veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısının yazılı emri ile yapılabilir', 'kolluk amirinin yazılı emriyle konut ve işyerinde arama yapılamaz', 'gece vaktinde arama yapılamaz'],
    trueCorrectPhrase: 'Konut, işyeri ve kamuya açık olmayan kapalı alanlarda kolluk amiri emriyle arama yapılamaz; kural olarak gece vakti arama yasaktır.',
    baseExplanation: 'CMK m. 118 ve m. 119: Kolluk amirinin yazılı emriyle (savcıya ulaşılamayan hallerde) yalnızca üst, eşya, araç ve kamuya açık alanlarda arama yapılabilir; konut, işyeri ve kamuya açık olmayan kapalı alanlarda kolluk amiri emriyle kesinlikle arama yapılamaz (mutlaka hâkim kararı veya gecikmesinde sakınca varsa savcı yazılı emri gerekir).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kolluk amirinin yazılı emriyle konut ve işyerinde arama yapılamaz',
      wrongPhrase: 'Cumhuriyet savcısına ulaşılamadığı hâllerde kolluk amirinin yazılı emriyle de konut ve işyerinde arama yapılabilir',
      correctPhrase: 'kolluk amirinin yazılı emriyle konut ve işyerinde arama yapılamaz',
      explanation: 'CMK m. 119/1 son cümle ve AY m. 20-21 uyarınca konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda kolluk amirinin yazılı emriyle arama yapılamaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'suçüstü veya gecikmesinde sakınca bulunan hâller ile firar eden kişinin yakalanması dışında konutta ve işyerinde gece vaktinde arama yapılamaz',
      wrongPhrase: 'suçüstü hâlinde dahi konutta ve işyerinde gece vaktinde hiçbir şekilde arama yapılamaz',
      correctPhrase: 'suçüstü veya gecikmesinde sakınca bulunan hâller ile firar eden kişinin yakalanması dışında konutta ve işyerinde gece vaktinde arama yapılamaz',
      explanation: 'CMK m. 118/2 uyarınca suçüstü, gecikmesinde sakınca bulunan hâller ile yakalanmış veya tutuklanmış olup firar eden kişinin yeniden yakalanması amacıyla gece vaktinde de arama yapılabilir.'
    }
  },
  {
    id: 'rule-cmk-avukat-burosu-arama-mahkeme-karari-m130-p12',
    branch: 'CMK',
    subTopic: 'Avukat Bürolarında Arama ve Elkoyma Şartları (Mahkeme Kararı, Savcı ve Baro Temsilcisi)',
    articleRef: 'CMK M. 130',
    trueStatement:
      'Avukat büroları ancak mahkeme kararı ile ve kararda belirtilen olayla ilgili olarak Cumhuriyet savcısının denetiminde aranabilir; baro başkanı veya onu temsil eden bir avukat aramada hazır bulundurulur.',
    trueHighlight: ['ancak mahkeme kararı ile', 'Cumhuriyet savcısının denetiminde aranabilir', 'baro başkanı veya onu temsil eden bir avukat aramada hazır bulundurulur'],
    trueCorrectPhrase: 'Avukat büroları gecikmesinde sakınca bulunan hallerde dahi savcı emriyle aranamaz; mahkeme kararı, savcı denetimi ve baro temsilcisi şarttır.',
    baseExplanation: 'CMK m. 130: Avukat bürolarında gecikmesinde sakınca bulunan hal istisnası yoktur! Savcı emriyle avukat bürosu aranamaz; mutlaka mahkeme kararı gerekir ve aramada Cumhuriyet savcısı ile baro başkanı (veya temsilcisi avukat) hazır bulunmalıdır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ancak mahkeme kararı ile ve kararda belirtilen olayla ilgili olarak Cumhuriyet savcısının denetiminde aranabilir',
      wrongPhrase: 'gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısının yazılı emri ve kolluk amirinin denetiminde aranabilir',
      correctPhrase: 'ancak mahkeme kararı ile ve kararda belirtilen olayla ilgili olarak Cumhuriyet savcısının denetiminde aranabilir',
      explanation: 'CMK m. 130/1 uyarınca avukat büroları gecikmesinde sakınca bulunan hallerde dahi Cumhuriyet savcısının yazılı emriyle aranamaz; yalnızca mahkeme kararıyla aranabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'baro başkanı veya onu temsil eden bir avukat aramada hazır bulundurulur',
      wrongPhrase: 'baro temsilcisinin bulunmasına gerek olmaksızın iki ihtiyar heyeti üyesi veya iki komşu hazır bulundurulur',
      correctPhrase: 'baro başkanı veya onu temsil eden bir avukat aramada hazır bulundurulur',
      explanation: 'Avukat bürosunun aranmasında komşu veya ihtiyar heyeti üyesi değil, bizzat baro başkanı veya onu temsil eden bir avukat hazır bulundurulmak zorundadır.'
    }
  },
  {
    id: 'rule-cmk-zorunlu-mudafilik-alt-sinir-5-yil-m150-p12',
    branch: 'CMK',
    subTopic: 'Zorunlu Müdafilik Halleri (Alt Sınırı 5 Yıldan Fazla Hapis, Çocuk, Malul, Tutuklama)',
    articleRef: 'CMK M. 101 & 150',
    trueStatement:
      'Şüpheli veya sanık çocuk, kendisini savunamayacak derecede malul veya sağır ve dilsiz ise ya da soruşturma ve kovuşturma konusu suçun cezasının alt sınırı beş yıldan fazla hapis cezasını gerektiriyorsa istemi aranmaksızın bir müdafi görevlendirilir; ayrıca tutuklama istemiyle hâkim veya mahkeme önüne çıkarılan şüpheli veya sanığa da zorunlu müdafi atanır.',
    trueHighlight: ['çocuk, kendisini savunamayacak derecede malul veya sağır ve dilsiz ise', 'alt sınırı beş yıldan fazla hapis cezasını gerektiriyorsa', 'tutuklama istemiyle hâkim veya mahkeme önüne çıkarılan şüpheli veya sanığa da zorunlu müdafi atanır'],
    trueCorrectPhrase: 'Alt sınırı 5 yıldan fazla hapis gerektiren suçlarda, çocuk/malul/sağır-dilsizlerde ve tutuklama isteminde müdafi zorunludur.',
    baseExplanation: 'CMK m. 150/2-3, m. 101/3 ve m. 74: Zorunlu müdafilikte ceza kriteri "üst sınırı 5 yıl" değil, "alt sınırı 5 yıldan fazla hapis cezası"dır! Ayrıca çocuk, sağır-dilsiz, malul, tutuklama istemi, gözlem altına alma ve kaçak sanık duruşmasında müdafi zorunludur.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'alt sınırı beş yıldan fazla hapis cezasını gerektiriyorsa',
      wrongPhrase: 'üst sınırı iki yıldan fazla hapis cezasını gerektiriyorsa',
      correctPhrase: 'alt sınırı beş yıldan fazla hapis cezasını gerektiriyorsa',
      explanation: 'CMK m. 150/3’teki zorunlu müdafilik kriteri suçun cezasının üst sınırı değil, ALT SINIRININ 5 yıldan fazla hapis cezasını gerektirmesidir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'istemi aranmaksızın bir müdafi görevlendirilir',
      wrongPhrase: 'ancak şüpheli veya sanığın açıkça talep etmesi ve giderini peşin yatırması şartıyla müdafi görevlendirilir',
      correctPhrase: 'istemi aranmaksızın bir müdafi görevlendirilir',
      explanation: 'CMK m. 150/2-3 kapsamındaki zorunlu müdafilik hallerinde şüpheli veya sanığın istemi aranmaksızın re’sen müdafi görevlendirilir.'
    }
  },
  {
    id: 'rule-cmk-hagb-2-yil-5-yil-istinaf-7499-p12',
    branch: 'CMK',
    subTopic: 'Hükmün Açıklanmasının Geri Bırakılması (HAGB - 2 Yıl Sınır, 5 Yıl Denetim ve 7499 s.K. İstinaf Yolu)',
    articleRef: 'CMK M. 231 (7499 s.K.)',
    trueStatement:
      'Sanığa yüklenen suçtan dolayı yapılan yargılama sonunda hükmolunan ceza, iki yıl veya daha az süreli hapis veya adlî para cezası ise mahkemece hükmün açıklanmasının geri bırakılmasına karar verilebilir; bu durumda sanık beş yıl süreyle denetim süresine tâbi tutulur ve 7499 sayılı Kanun değişikliği uyarınca hükmün açıklanmasının geri bırakılması kararlarına karşı istinaf yoluna başvurulabilir.',
    trueHighlight: ['iki yıl veya daha az süreli hapis veya adlî para cezası ise', 'beş yıl süreyle denetim süresine tâbi tutulur', '7499 sayılı Kanun değişikliği uyarınca hükmün açıklanmasının geri bırakılması kararlarına karşı istinaf yoluna başvurulabilir'],
    trueCorrectPhrase: 'HAGB sınırı 2 yıl veya daha az hapistir; denetim süresi 5 yıldır (çocukta 3 yıl) ve 7499 s.K. ile HAGB kararına karşı istinaf yolu açılmıştır.',
    baseExplanation: 'CMK m. 231 (7499 s.K. değişikliği): HAGB sınırı 2 yıl veya daha az hapis ya da adli para cezasıdır; denetim süresi yetişkinlerde 5 yıl (çocuklarda 3 yıl) olup 7499 sayılı Kanun ile HAGB kararlarına karşı (eskiden itiraz yoluna gidilirken) artık istinaf kanun yolu açılmış ve sanığın HAGB’yi kabul etme şartı kaldırılmıştır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: '7499 sayılı Kanun değişikliği uyarınca hükmün açıklanmasının geri bırakılması kararlarına karşı istinaf yoluna başvurulabilir',
      wrongPhrase: 'hükmün açıklanmasının geri bırakılması kararlarına karşı istinaf yolu kapalı olup yalnızca sulh ceza hâkimliğine itiraz edilebilir',
      correctPhrase: '7499 sayılı Kanun değişikliği uyarınca hükmün açıklanmasının geri bırakılması kararlarına karşı istinaf yoluna başvurulabilir',
      explanation: '7499 sayılı Kanun (8. Yargı Paketi) ve AYM iptal kararı sonrasında CMK m. 231 değiştirilmiş ve HAGB kararlarına karşı itiraz yerine İSTİNAF kanun yolu getirilmiştir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıl veya daha az süreli hapis veya adlî para cezası ise mahkemece hükmün açıklanmasının geri bırakılmasına karar verilebilir; bu durumda sanık beş yıl süreyle denetim süresine tâbi tutulur',
      wrongPhrase: 'üç yıl veya daha az süreli hapis cezası ise mahkemece hükmün açıklanmasının geri bırakılmasına karar verilebilir; bu durumda sanık iki yıl süreyle denetim süresine tâbi tutulur',
      correctPhrase: 'iki yıl veya daha az süreli hapis veya adlî para cezası ise mahkemece hükmün açıklanmasının geri bırakılmasına karar verilebilir; bu durumda sanık beş yıl süreyle denetim süresine tâbi tutulur',
      explanation: 'CMK m. 231 uyarınca HAGB ceza üst sınırı 3 yıl değil 2 yıldır; denetim süresi ise yetişkinlerde 2 yıl değil 5 yıldır!'
    }
  },
  {
    id: 'rule-tck-ilgilinin-rizasi-ve-sinirin-asilmasi-m26-27-p12',
    branch: 'TCK',
    subTopic: 'Hakkın Kullanılması, İlgilinin Rızası ve Meşru Savunmada Sınırın Heyecan/Korkuyla Aşılması',
    articleRef: 'TCK M. 26 & 27',
    trueStatement:
      'Kişinin üzerinde mutlak surette tasarruf edebileceği bir hakkına ilişkin olmak üzere, açıkladığı rızası çerçevesinde işlenen fiilden dolayı kimseye ceza verilmez; meşru savunmada sınırın aşılması mazur görülebilecek bir heyecan, korku veya telaştan ileri gelmiş ise faile ceza verilmez.',
    trueHighlight: ['üzerinde mutlak surette tasarruf edebileceği bir hakkına ilişkin olmak üzere', 'mazur görülebilecek bir heyecan, korku veya telaştan ileri gelmiş ise faile ceza verilmez'],
    trueCorrectPhrase: 'İlgilinin rızası hukuka uygunluk nedenidir; meşru savunmada sınırın mazur görülebilecek heyecan/korku/telaşla aşılması kusuru kaldırır ve ceza verilmez.',
    baseExplanation: 'TCK m. 26/2 ve m. 27/2: İlgilinin rızası, kişinin üzerinde mutlak surette tasarruf edebileceği haklarda hukuka uygunluk nedenidir. Meşru savunmada sınırın mazur görülebilecek heyecan, korku veya telaşla aşılması ise kusurluluğu ortadan kaldıran bir neden olup faile ceza verilmez (CMK m. 223/3-c).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'üzerinde mutlak surette tasarruf edebileceği bir hakkına ilişkin olmak üzere, açıkladığı rızası çerçevesinde işlenen fiilden dolayı kimseye ceza verilmez',
      wrongPhrase: 'yaşam hakkı da dahil olmak üzere tüm haklarına ilişkin açıkladığı rızası çerçevesinde işlenen öldürme fiillerinden dolayı kimseye ceza verilmez',
      correctPhrase: 'üzerinde mutlak surette tasarruf edebileceği bir hakkına ilişkin olmak üzere, açıkladığı rızası çerçevesinde işlenen fiilden dolayı kimseye ceza verilmez',
      explanation: 'Yaşam hakkı kişinin üzerinde mutlak surette tasarruf edebileceği bir hak değildir; bu nedenle talep üzerine öldürmede (ötanazi) ilgilinin rızası hukuka uygunluk nedeni oluşturmaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mazur görülebilecek bir heyecan, korku veya telaştan ileri gelmiş ise faile ceza verilmez',
      wrongPhrase: 'kasten ve intikam alma saikiyle gerçekleşmiş olsa dahi faile hiçbir şekilde ceza verilmez',
      correctPhrase: 'mazur görülebilecek bir heyecan, korku veya telaştan ileri gelmiş ise faile ceza verilmez',
      explanation: 'TCK m. 27/2 yalnızca meşru savunmada sınırın "mazur görülebilecek bir heyecan, korku veya telaştan" ileri gelerek aşılması halinde uygulanır; sınır kasten aşılırsa fail kasten işlenen suçtan tam ceza alır.'
    }
  },
  {
    id: 'rule-tck-istirak-dolayli-faillik-baglilik-kurali-m37-40-p12',
    branch: 'TCK',
    subTopic: 'Suça İştirakte Bağlılık Kuralı ve Dolaylı Faillik',
    articleRef: 'TCK M. 37 & 40',
    trueStatement:
      'Suça iştirak için kasten ve hukuka aykırı işlenmiş bir fiilin varlığı yeterlidir; suçun işlenmesinde bir başkasını araç olarak kullanan kişi de fail olarak sorumlu tutulur ve kusur yeteneği olmayanları suçun işlenmesinde araç olarak kullanan kişinin cezası üçte birden yarısına kadar artırılır.',
    trueHighlight: ['kasten ve hukuka aykırı işlenmiş bir fiilin varlığı yeterlidir', 'kusur yeteneği olmayanları suçun işlenmesinde araç olarak kullanan kişinin cezası üçte birden yarısına kadar artırılır'],
    trueCorrectPhrase: 'Suça iştirak için asıl fiilin kasten ve hukuka aykırı olması yeterlidir (sınırlı bağlılık); kusur yeteneği olmayanı araç olarak kullanan dolaylı failin cezası 1/3’ten 1/2’ye kadar artırılır.',
    baseExplanation: 'TCK m. 37/2 ve m. 40/1: TCK’da "sınırlı bağlılık kuralı" benimsenmiştir; suça iştirak için asıl failin kusurlu olması şart olmayıp fiilin kasten ve hukuka aykırı olması yeterlidir. Kusur yeteneği olmayanları (örneğin akıl hastasını veya 12 yaşından küçüğü) araç olarak kullanan dolaylı failin cezası 1/3’ten 1/2’ye kadar artırılır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kasten ve hukuka aykırı işlenmiş bir fiilin varlığı yeterlidir',
      wrongPhrase: 'taksirle işlenen suçlarda da her zaman azmettirme ve yardım etme hükümleri uygulanır',
      correctPhrase: 'kasten ve hukuka aykırı işlenmiş bir fiilin varlığı yeterlidir',
      explanation: 'TCK m. 40/1 uyarınca suça iştirak ancak KASTEN ve hukuka aykırı işlenen fiillerde mümkündür; taksirli suçlara iştirak olmaz!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'kusur yeteneği olmayanları suçun işlenmesinde araç olarak kullanan kişinin cezası üçte birden yarısına kadar artırılır',
      wrongPhrase: 'kusur yeteneği olmayanları suçun işlenmesinde araç olarak kullanan kişiye yalnızca yardım eden sıfatıyla yarı oranında indirimli ceza verilir',
      correctPhrase: 'kusur yeteneği olmayanları suçun işlenmesinde araç olarak kullanan kişinin cezası üçte birden yarısına kadar artırılır',
      explanation: 'TCK m. 37/2 uyarınca kusur yeteneği olmayanı suçta araç olarak kullanan kişi yardım eden değil "dolaylı fail"dir ve cezası 1/3’ten 1/2’ye kadar artırılır!'
    }
  },
  {
    id: 'rule-tck-zincirleme-suc-ve-istisnalari-m43-p12',
    branch: 'TCK',
    subTopic: 'Zincirleme Suç (1/4’ten 3/4’e Artırım) ve Zincirleme Suçun Uygulanamayacağı Suçlar',
    articleRef: 'TCK M. 43/1 & 43/3',
    trueStatement:
      'Bir suç işleme kararının icrası kapsamında, değişik zamanlarda bir kişiye karşı aynı suçun birden fazla işlenmesi veya aynı suçun birden fazla kişiye karşı tek bir fiille işlenmesi durumunda bir cezaya hükmedilir ve bu ceza dörtte birinden dörtte üçüne kadar artırılır; ancak kasten öldürme, kasten yaralama, işkence ve yağma suçlarında zincirleme suç hükümleri uygulanmaz.',
    trueHighlight: ['dörtte birinden dörtte üçüne kadar artırılır', 'kasten öldürme, kasten yaralama, işkence ve yağma suçlarında zincirleme suç hükümleri uygulanmaz'],
    trueCorrectPhrase: 'Zincirleme suçta ceza 1/4’ten 3/4’e kadar artırılır; kasten öldürme, kasten yaralama, işkence ve yağmada zincirleme suç uygulanmaz.',
    baseExplanation: 'TCK m. 43/1 ve 43/3: Zincirleme suçta tek ceza verilip 1/4’ten 3/4’e kadar artırılır. Kasten öldürme, kasten yaralama, işkence ve yağma suçlarında ise zincirleme suç hükümleri uygulanmaz (mağdur sayısınca gerçek içtima uygulanır; dikkat: cinsel saldırı/istismar 2014’te bu istisnadan çıkarılmıştır!).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kasten öldürme, kasten yaralama, işkence ve yağma suçlarında zincirleme suç hükümleri uygulanmaz',
      wrongPhrase: 'dolandırıcılık, hırsızlık, hakaret ve resmi belgede sahtecilik suçlarında zincirleme suç hükümleri hiçbir şekilde uygulanmaz',
      correctPhrase: 'kasten öldürme, kasten yaralama, işkence ve yağma suçlarında zincirleme suç hükümleri uygulanmaz',
      explanation: 'TCK m. 43/3’te zincirleme suçun uygulanamayacağı suçlar sınırlı olarak "kasten öldürme, kasten yaralama, işkence ve yağma" şeklinde sayılmıştır; hırsızlık, dolandırıcılık ve hakarette zincirleme suç uygulanabilir!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'dörtte birinden dörtte üçüne kadar artırılır',
      wrongPhrase: 'iki katı oranında artırılarak ayrı ayrı içtima ettirilir',
      correctPhrase: 'dörtte birinden dörtte üçüne kadar artırılır',
      explanation: 'TCK m. 43/1 uyarınca zincirleme suçta ceza artırım oranı 1/4’ten (dörtte birden) 3/4’e (dörtte üçe) kadardır.'
    }
  },
  {
    id: 'rule-tck-belli-haklari-kullanmaktan-yoksun-birakilma-m53-p12',
    branch: 'TCK',
    subTopic: 'Belli Hakları Kullanmaktan Yoksun Bırakılma (Kasten İşlenen Suç ve Hapis Cezası Şartı)',
    articleRef: 'TCK M. 53',
    trueStatement:
      'Kişi, kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak kamu görevinin üstlenilmesinden, seçme ve seçilme ehliyetinden ve velayet-vesayet yetkilerinden yoksun bırakılır; ancak kısa süreli hapis cezası ertelenmiş veya fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında bu hak yoksunlukları uygulanmaz.',
    trueHighlight: ['kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak', 'kısa süreli hapis cezası ertelenmiş veya fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında bu hak yoksunlukları uygulanmaz'],
    trueCorrectPhrase: 'TCK m. 53/1 hak yoksunluğu yalnızca kasten işlenen suçtan hapis cezası mahkûmiyetinde doğar; kısa süreli hapsi ertelenenler ve 18 yaşından küçüklerde uygulanmaz.',
    baseExplanation: 'TCK m. 53/1 ve 53/4: Hak yoksunlukları yalnızca "kasten" işlenen suçtan dolayı "hapis cezasına" mahkûmiyetin kanuni sonucudur (taksirli suçlarda ve adli para cezalarında m. 53/1 uygulanmaz!). Ayrıca kısa süreli hapis cezası ertelenmiş olanlar ile fiili işlediği sırada 18 yaşını doldurmamış olanlar hakkında TCK m. 53/1 uygulanmaz.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak',
      wrongPhrase: 'taksirli suçlar ve adlî para cezasına mahkûmiyetler de dahil olmak üzere her türlü mahkûmiyetin kanuni sonucu olarak',
      correctPhrase: 'kasten işlemiş olduğu suçtan dolayı hapis cezasına mahkûmiyetin kanuni sonucu olarak',
      explanation: 'TCK m. 53/1’deki genel hak yoksunlukları taksirli suçlarda ve adli para cezalarında uygulanmaz; yalnızca kasten işlenen suçtan dolayı hapis cezasına mahkûmiyette doğar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kısa süreli hapis cezası ertelenmiş veya fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında bu hak yoksunlukları uygulanmaz',
      wrongPhrase: 'fiili işlediği sırada onsekiz yaşını doldurmamış çocuklar hakkında da seçme ve seçilme ile kamu görevinden yoksunluk hükümleri eksiksiz uygulanır',
      correctPhrase: 'kısa süreli hapis cezası ertelenmiş veya fiili işlediği sırada onsekiz yaşını doldurmamış olan kişiler hakkında bu hak yoksunlukları uygulanmaz',
      explanation: 'TCK m. 53/4 uyarınca kısa süreli hapis cezası ertelenmiş veya fiili işlediği sırada 18 yaşını doldurmamış olan kişiler hakkında TCK m. 53/1 hükmü uygulanmaz!'
    }
  },

  // =========================================================================
  // 3. MEDENİ HUKUK (4721 SAYILI TÜRK MEDENİ KANUNU)
  // =========================================================================
  {
    id: 'rule-tmk-kisilik-hakkinin-korunmasi-kusur-ve-yetki-m24-25-p12',
    branch: 'Medeni',
    subTopic: 'Kişilik Hakkının Korunması Davaları (Saldırının Önlenmesi/Durdurulması/Tespiti ve Yetkili Mahkeme)',
    articleRef: 'TMK M. 24 & 25',
    trueStatement:
      'Hukuka aykırı olarak kişilik hakkına saldırılan kimse, saldırıda bulunan kusurlu olmasa dahi saldırının önlenmesini, sürmekte olan saldırıya son verilmesini ve sona ermiş olsa bile etkileri devam eden saldırının hukuka aykırılığının tespitini davacının kendi yerleşim yeri veya davalının yerleşim yeri mahkemesinden isteyebilir.',
    trueHighlight: ['saldırıda bulunan kusurlu olmasa dahi saldırının önlenmesini, sürmekte olan saldırıya son verilmesini', 'davacının kendi yerleşim yeri veya davalının yerleşim yeri mahkemesinden isteyebilir'],
    trueCorrectPhrase: 'Koruyucu kişilik hakkı davalarında (önleme, durdurma, tespit) kusur şartı aranmaz ve davacının veya davalının yerleşim yeri mahkemesinde açılabilir.',
    baseExplanation: 'TMK m. 24 ve m. 25: Saldırının önlenmesi, durdurulması ve hukuka aykırılığın tespiti davalarında saldırganın kusuru aranmaz (maddi ve manevi tazminat davalarında ise kusur aranır). Bu davalar davacının kendi yerleşim yeri veya davalının yerleşim yeri mahkemesinde açılabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'saldırıda bulunan kusurlu olmasa dahi saldırının önlenmesini, sürmekte olan saldırıya son verilmesini',
      wrongPhrase: 'yalnızca saldırıda bulunanın ağır kusurunu ve kastını ispat etmek şartıyla saldırının önlenmesini ve durdurulmasını',
      correctPhrase: 'saldırıda bulunan kusurlu olmasa dahi saldırının önlenmesini, sürmekte olan saldırıya son verilmesini',
      explanation: 'TMK m. 25/1 uyarınca saldırının önlenmesi, durdurulması ve tespit davalarında kusur şartı aranmaz (kusur yalnızca tazminat davası için şarttır)!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'davacının kendi yerleşim yeri veya davalının yerleşim yeri mahkemesinden isteyebilir',
      wrongPhrase: 'yalnızca davalının yerleşim yeri sulh hukuk mahkemesinden isteyebilir',
      correctPhrase: 'davacının kendi yerleşim yeri veya davalının yerleşim yeri mahkemesinden isteyebilir',
      explanation: 'TMK m. 25/5 uyarınca kişilik hakkının korunmasına ilişkin davalar davacının kendi yerleşim yeri mahkemesinde de açılabilir (görevli mahkeme ise Asliye Hukuk Mahkemesidir).'
    }
  },
  {
    id: 'rule-tmk-nisanlanma-ceza-sarti-yasagi-1-yil-zamanasimi-p12',
    branch: 'Medeni',
    subTopic: 'Nişanlanma: Evlenmeye Zorlama Dava Yasağı, Ceza Şartı Yasağı ve 1 Yıllık Zamanaşımı',
    articleRef: 'TMK M. 118, 119 & 123',
    trueStatement:
      'Nişanlanma, evlenmeye zorlamak için dava hakkı vermez ve evlenmeden kaçınma hâli için öngörülen cayma tazminatı veya ceza şartı dava edilemez, ancak yapılan ödemeler de geri istenemez; nişanın sona ermesinden doğan dava hakları, sona ermenin üzerinden bir yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['evlenmeye zorlamak için dava hakkı vermez', 'cayma tazminatı veya ceza şartı dava edilemez, ancak yapılan ödemeler de geri istenemez', 'sona ermenin üzerinden bir yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'Nişanda evlenmeye zorlama ve ceza şartı dava edilemez (eksik borçtur, ödenirse geri istenemez); nişan davaları 1 yılda zamanaşımına uğrar.',
    baseExplanation: 'TMK m. 119 ve m. 123: Nişandan doğan evlenme borcu dava edilemez; cayma tazminatı veya ceza şartı da dava edilemez (ancak rızayla ödenmişse geri istenemez - eksik borç). Maddi/manevi tazminat ve hediyelerin iadesi davaları nişanın sona ermesinden itibaren 1 yıl geçmekle zamanaşımına uğrar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sona ermenin üzerinden bir yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'sona ermenin üzerinden beş yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'sona ermenin üzerinden bir yıl geçmekle zamanaşımına uğrar',
      explanation: 'TMK m. 123 uyarınca nişanın sona ermesinden doğan dava hakları 5 yıl değil, sona ermenin üzerinden 1 yıl geçmekle zamanaşımına uğrar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cayma tazminatı veya ceza şartı dava edilemez, ancak yapılan ödemeler de geri istenemez',
      wrongPhrase: 'yazılı nişan sözleşmesinde kararlaştırılan ceza şartı her zaman icra takibine ve davaya konu edilebilir',
      correctPhrase: 'cayma tazminatı veya ceza şartı dava edilemez, ancak yapılan ödemeler de geri istenemez',
      explanation: 'TMK m. 119/2 uyarınca evlenmeden kaçınma hali için öngörülen cayma tazminatı veya ceza şartı dava edilemez (eksik borçtur).'
    }
  },
  {
    id: 'rule-tmk-sag-kalan-esin-yasal-miras-payi-oranlari-p12',
    branch: 'Medeni',
    subTopic: 'Sağ Kalan Eşin Zümrelere Göre Yasal Miras Payı Oranları (1/4, 1/2, 3/4 ve Tamamı)',
    articleRef: 'TMK M. 499',
    trueStatement:
      'Sağ kalan eş, mirasbırakanın altsoyu ile birlikte mirasçı olursa mirasın dörtte biri, mirasbırakanın ana ve baba zümresi ile birlikte mirasçı olursa mirasın yarısı, mirasbırakanın büyük ana ve büyük babaları ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçü, bunlardan hiçbiri yoksa mirasın tamamı eşe kalır.',
    trueHighlight: ['altsoyu ile birlikte mirasçı olursa mirasın dörtte biri', 'ana ve baba zümresi ile birlikte mirasçı olursa mirasın yarısı', 'büyük ana ve büyük babaları ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçü'],
    trueCorrectPhrase: 'Sağ kalan eşin yasal miras payı: 1. zümreyle 1/4, 2. zümreyle 1/2, 3. zümre başları ve onların çocuklarıyla 3/4, hiçbiri yoksa tamamıdır.',
    baseExplanation: 'TMK m. 499: Sağ kalan eşin yasal miras payı 1. zümre (altsoy) ile 1/4; 2. zümre (ana-baba ve altsoyu) ile 1/2; 3. zümre başları (büyükanne-büyükbaba) ve onların çocukları (amca, dayı, hala, teyze) ile 3/4’tür. Dikkat: 3. zümrede amca/dayı/hala/teyzenin çocukları (kuzenler) sağ kalan eş varken mirasçı olamazlar, mirasın tamamı eşe kalır!',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'altsoyu ile birlikte mirasçı olursa mirasın dörtte biri, mirasbırakanın ana ve baba zümresi ile birlikte mirasçı olursa mirasın yarısı, mirasbırakanın büyük ana ve büyük babaları ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçü',
      wrongPhrase: 'altsoyu ile birlikte mirasçı olursa mirasın yarısı, mirasbırakanın ana ve baba zümresi ile birlikte mirasçı olursa mirasın dörtte üçü, üçüncü zümre ile birlikte mirasçı olursa mirasın tamamı',
      correctPhrase: 'altsoyu ile birlikte mirasçı olursa mirasın dörtte biri, mirasbırakanın ana ve baba zümresi ile birlikte mirasçı olursa mirasın yarısı, mirasbırakanın büyük ana ve büyük babaları ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçü',
      explanation: 'TMK m. 499 uyarınca sağ kalan eşin yasal miras payları sırasıyla 1/4 (1. zümre), 1/2 (2. zümre) ve 3/4 (3. zümre başları ve çocukları) oranındadır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'büyük ana ve büyük babaları ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçü, bunlardan hiçbiri yoksa mirasın tamamı eşe kalır',
      wrongPhrase: 'üçüncü zümrede amca, dayı, hala ve teyzenin çocukları (kuzenler) ve torunları da sağ kalan eşle birlikte dörtte bir oranında mirasçı olmaya devam eder',
      correctPhrase: 'büyük ana ve büyük babaları ve onların çocukları ile birlikte mirasçı olursa mirasın dörtte üçü, bunlardan hiçbiri yoksa mirasın tamamı eşe kalır',
      explanation: 'TMK m. 499/1-3 uyarınca sağ kalan eş varken 3. zümrede yalnızca büyükanne/büyükbaba ve onların çocukları (amca, dayı, hala, teyze) mirasçı olabilir; kuzenler sağ kalan eş varken mirasçı olamaz!'
    }
  },
  {
    id: 'rule-tmk-yasal-onalim-sufa-hakki-3-ay-2-yil-p12',
    branch: 'Medeni',
    subTopic: 'Paylı Mülkiyette Yasal Önalım (Şufa) Hakkı ve Hak Düşürücü Süreler (3 Ay & 2 Yıl)',
    articleRef: 'TMK M. 732-734',
    trueStatement:
      'Paylı mülkiyette bir paydaşın taşınmaz üzerindeki payını tamamen veya kısmen üçüncü kişiye satması hâlinde diğer paydaşlar önalım hakkını kullanabilirler; ancak cebrî artırmayla satışlarda ve paydaşlar kendi aralarında yapılan satışlarda önalım hakkı kullanılamaz ve önalım hakkı, satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer.',
    trueHighlight: ['cebrî artırmayla satışlarda ve paydaşlar kendi aralarında yapılan satışlarda önalım hakkı kullanılamaz', 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer'],
    trueCorrectPhrase: 'Yasal önalım hakkı noter bildiriminden itibaren 3 ay ve her halde satıştan itibaren 2 yıl içinde alıcıya karşı dava açılarak kullanılır; paydaşlar arası satışta ve cebri ihalede kullanılamaz.',
    baseExplanation: 'TMK m. 732-734: Yasal önalım (şufa) hakkı yalnızca payın üçüncü kişiye satışı halinde doğar (paydaşın diğer paydaşa satışında, bağışlamada, trampada ve cebri artırmada kullanılamaz). Noter bildiriminden itibaren 3 ay ve her halde satıştan itibaren 2 yıllık hak düşürücü süre içinde alıcıya karşı dava açılarak kullanılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer',
      wrongPhrase: 'adi yazılı bildirimden itibaren bir ay ve her hâlde satışın üzerinden on yıl geçmekle düşer',
      correctPhrase: 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer',
      explanation: '10 yıllık süre şerh edilmiş "sözleşmeden doğan önalım" üst süresidir (TBK m. 238); ancak dava açma hak düşürücü süresi TMK m. 733/4 uyarınca noter bildiriminden itibaren 3 ay ve her halde satıştan itibaren 2 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cebrî artırmayla satışlarda ve paydaşlar kendi aralarında yapılan satışlarda önalım hakkı kullanılamaz',
      wrongPhrase: 'cebrî artırmayla yapılan satışlarda ve bir paydaşın diğer paydaşa yaptığı satışlarda da önalım hakkı kullanılabilir',
      correctPhrase: 'cebrî artırmayla satışlarda ve paydaşlar kendi aralarında yapılan satışlarda önalım hakkı kullanılamaz',
      explanation: 'TMK m. 732 ve m. 733/1 uyarınca paydaşlar arasındaki satışlarda ve cebri artırmayla satışlarda önalım hakkı kesinlikle kullanılamaz!'
    }
  },
  {
    id: 'rule-tmk-ipotek-zamanasimi-islemez-m864-p12',
    branch: 'Medeni',
    subTopic: 'Taşınmaz Rehninde İpoteğin Tesciliyle Alacak İçin Zamanaşımının İşlememesi',
    articleRef: 'TMK M. 850, 864 & 883',
    trueStatement:
      'Taşınmaz rehni yalnızca ipotek, ipotekli borç senedi ve irat senedi şeklinde kurulabilir; rehnin tapu kütüğüne tescil edilmesinden sonra alacak için zamanaşımı işlemez ve alacağın sona ermesi hâlinde ipotek kendiliğinden terkin edilmeyip taşınmaz malikinin alacaklıdan ipoteğin terkinini istemesi gerekir.',
    trueHighlight: ['ipotek, ipotekli borç senedi ve irat senedi şeklinde kurulabilir', 'rehnin tapu kütüğüne tescil edilmesinden sonra alacak için zamanaşımı işlemez'],
    trueCorrectPhrase: 'Taşınmaz rehni tescil edildikten sonra güvence altına alınan alacak için zamanaşımı işlemez (TMK m. 864).',
    baseExplanation: 'TMK m. 850, 864 ve 883: Taşınmaz rehninde sınırlı sayı (numerus clausus) ilkesi geçerlidir (ipotek, ipotekli borç senedi, irat senedi). TMK m. 864 uyarınca taşınmaz rehninin tapuya tescil edilmesinden sonra alacak için zamanaşımı işlemez (taşınır rehninde ise TBK m. 140 gereği zamanaşımı işler ancak alacaklı rehni paraya çevirme yetkisini korur!).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'rehnin tapu kütüğüne tescil edilmesinden sonra alacak için zamanaşımı işlemez',
      wrongPhrase: 'rehnin tapu kütüğüne tescil edilmesinden sonra da alacak on yıl geçmekle zamanaşımına uğrar ve ipotek kendiliğinden hükümsüz kalır',
      correctPhrase: 'rehnin tapu kütüğüne tescil edilmesinden sonra alacak için zamanaşımı işlemez',
      explanation: 'TMK m. 864 uyarınca taşınmaz rehninin tapu kütüğüne tescil edilmesinden sonra alacak için zamanaşımı işlemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'alacağın sona ermesi hâlinde ipotek kendiliğinden terkin edilmeyip taşınmaz malikinin alacaklıdan ipoteğin terkinini istemesi gerekir',
      wrongPhrase: 'alacağın ödenmesiyle birlikte tapu sicilindeki ipotek kaydı hiçbir işleme gerek kalmaksızın kendiliğinden silinir',
      correctPhrase: 'alacağın sona ermesi hâlinde ipotek kendiliğinden terkin edilmeyip taşınmaz malikinin alacaklıdan ipoteğin terkinini istemesi gerekir',
      explanation: 'TMK m. 883 uyarınca alacak sona erince ipotekli taşınmazın maliki, alacaklıdan ipoteğin terkin ettirilmesini (fek edilmesini) isteyebilir.'
    }
  },

  // =========================================================================
  // 4. BORÇLAR HUKUKU (6098 SAYILI TÜRK BORÇLAR KANUNU)
  // =========================================================================
  {
    id: 'rule-tbk-irade-bozukluklari-1-yil-iptal-suresi-m39-p12',
    branch: 'Borçlar',
    subTopic: 'İrade Bozuklukları (Yanılma, Aldatma ve Korkutma) İptal Süresi (1 Yıl)',
    articleRef: 'TBK M. 30, 36, 37 & 39',
    trueStatement:
      'Yanılma veya aldatma sebebiyle ya da korkutulma sonucunda sözleşme yapan taraf, yanılma veya aldatmayı öğrendiği ya da korkutmanın etkisinin ortadan kalktığı andan başlayarak bir yıl içinde sözleşme ile bağlı olmadığını bildirmez veya verdiği şeyi geri istemezse sözleşmeyi onamış sayılır.',
    trueHighlight: ['yanılma veya aldatmayı öğrendiği ya da korkutmanın etkisinin ortadan kalktığı andan başlayarak bir yıl içinde', 'sözleşmeyi onamış sayılır'],
    trueCorrectPhrase: 'Yanılma ve aldatmada öğrenmeden, korkutmada ise etkinin kalkmasından itibaren 1 yıl içinde iptal bildirimi yapılmazsa sözleşme onanmış sayılır.',
    baseExplanation: 'TBK m. 39: Yanılma, aldatma ve korkutmada yaptırım "düzeltebilir hükümsüzlük (iptal edilebilirlik)"tir. 1 yıllık hak düşürücü süre yanılma ve aldatmada öğrenmeden, korkutmada ise korkutmanın etkisinin ortadan kalktığı andan itibaren işler.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yanılma veya aldatmayı öğrendiği ya da korkutmanın etkisinin ortadan kalktığı andan başlayarak bir yıl içinde',
      wrongPhrase: 'sözleşmenin kurulduğu tarihten başlayarak altı ay içinde',
      correctPhrase: 'yanılma veya aldatmayı öğrendiği ya da korkutmanın etkisinin ortadan kalktığı andan başlayarak bir yıl içinde',
      explanation: 'TBK m. 39 uyarınca irade bozukluklarında iptal süresi 6 ay değil, öğrenmeden/korkutmanın etkisinin kalkmasından itibaren 1 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sözleşmeyi onamış sayılır',
      wrongPhrase: 'sözleşme yine de kesin hükümsüz (batıl) sayılır ve hâkim tarafından her aşamada re’sen dikkate alınır',
      correctPhrase: 'sözleşmeyi onamış sayılır',
      explanation: 'İrade bozukluklarında sözleşme kesin hükümsüz (batıl) değildir; 1 yıl içinde iptal edilmezse sözleşme baştan itibaren geçerli olarak onanmış sayılır.'
    }
  },
  {
    id: 'rule-tbk-kusursuz-sorumluluk-yapi-maliki-kurtulus-kaniti-p12',
    branch: 'Borçlar',
    subTopic: 'Kusursuz Sorumluluk: Adam Çalıştıran / Hayvan Bulunduran ile Yapı Malikinin Kurtuluş Kanıtı Farkı',
    articleRef: 'TBK M. 66, 67, 69 & 72',
    trueStatement:
      'Adam çalıştıran ve hayvan bulunduran, gerekli özeni gösterdiğini ispat ederek sorumluluktan kurtulabilirken; bir binanın veya diğer yapı eserlerinin maliki, bunların yapımındaki bozukluklardan veya bakımındaki eksikliklerden doğan zararı gidermekle yükümlü olup özen gösterdiğini ileri sürerek kurtuluş kanıtı getiremez; haksız fiil tazminat istemi öğrenmeden itibaren iki yıl ve her hâlde fiilden itibaren on yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['Adam çalıştıran ve hayvan bulunduran, gerekli özeni gösterdiğini ispat ederek sorumluluktan kurtulabilirken', 'yapı eserlerinin maliki, bunların yapımındaki bozukluklardan veya bakımındaki eksikliklerden doğan zararı gidermekle yükümlü olup özen gösterdiğini ileri sürerek kurtuluş kanıtı getiremez', 'iki yıl ve her hâlde fiilden itibaren on yıl'],
    trueCorrectPhrase: 'Adam çalıştıran ve hayvan bulunduran kurtuluş kanıtı getirebilirken, yapı maliki kurtuluş kanıtı getiremez; haksız fiil zamanaşımı 2 ve 10 yıldır.',
    baseExplanation: 'TBK m. 66, 67 ve 69: Adam çalıştıran (m. 66) ve hayvan bulunduran (m. 67) özen borcunu yerine getirdiğini ispatlayarak (kurtuluş kanıtı) sorumluluktan kurtulabilir; ancak yapı malikinin sorumluluğu (m. 69) ağırlaştırılmış olağan sebep sorumluluğudur, yapı maliki kurtuluş kanıtı getiremez! Haksız fiil zamanaşımı (TBK m. 72) öğrenmeden 2 yıl, her halde 10 yıldır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yapı eserlerinin maliki, bunların yapımındaki bozukluklardan veya bakımındaki eksikliklerden doğan zararı gidermekle yükümlü olup özen gösterdiğini ileri sürerek kurtuluş kanıtı getiremez',
      wrongPhrase: 'yapı eserlerinin maliki de tıpkı adam çalıştıranda olduğu gibi inşaat ve bakımda gerekli özeni gösterdiğini ispatlayarak kurtuluş kanıtı getirebilir ve sorumluluktan kurtulur',
      correctPhrase: 'yapı eserlerinin maliki, bunların yapımındaki bozukluklardan veya bakımındaki eksikliklerden doğan zararı gidermekle yükümlü olup özen gösterdiğini ileri sürerek kurtuluş kanıtı getiremez',
      explanation: 'TBK m. 69 uyarınca bina ve diğer yapı eseri malikinin sorumluluğunda kurtuluş kanıtı (özen ispatı) kabul edilmemiştir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıl ve her hâlde fiilden itibaren on yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'bir yıl ve her hâlde fiilden itibaren beş yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'iki yıl ve her hâlde fiilden itibaren on yıl geçmekle zamanaşımına uğrar',
      explanation: '6098 sayılı TBK m. 72 ile haksız fiil zamanaşımı süresi (eski BK’daki 1 ve 10 yıldan farklı olarak) öğrenmeden itibaren 2 yıl ve her halde 10 yıl olarak düzenlenmiştir!'
    }
  },
  {
    id: 'rule-tbk-borclunun-temerrudu-ve-secimlik-haklar-m117-125-p12',
    branch: 'Borçlar',
    subTopic: 'Borçlunun Temerrüdünde İhtarsız Temerrüt Halleri ve Müspet/Menfi Zarar Eşleştirmesi',
    articleRef: 'TBK M. 117 & 125',
    trueStatement:
      'Muaccel bir borcun borçlusu alacaklının ihtarıyla temerrüde düşer, ancak ifa günü birlikte belirlenmişse veya haksız fiilde fiilin işlendiği, sebepsiz zenginleşmede ise zenginleşmenin gerçekleştiği tarihte ihtara gerek olmaksızın temerrüt gerçekleşir; karşılıklı borç yükleyen sözleşmelerde temerrüt hâlinde alacaklı ifadan vazgeçerek olumlu zararının tazminini veya sözleşmeden dönerek olumsuz zararının tazminini isteyebilir.',
    trueHighlight: ['haksız fiilde fiilin işlendiği, sebepsiz zenginleşmede ise zenginleşmenin gerçekleştiği tarihte ihtara gerek olmaksızın temerrüt gerçekleşir', 'ifadan vazgeçerek olumlu zararının tazminini veya sözleşmeden dönerek olumsuz zararının tazminini isteyebilir'],
    trueCorrectPhrase: 'İfadan vazgeçmede olumlu (müspet) zarar; sözleşmeden dönmede ise olumsuz (menfi) zarar istenir.',
    baseExplanation: 'TBK m. 117 ve m. 125: Haksız fiilde olay tarihinde, sebepsiz zenginleşmede zenginleşme tarihinde, kesin vadeli borçta vade gününde ihtarsız temerrüt doğar. Karşılıklı borç yükleyen sözleşmelerde alacaklı: 1) Aynen ifa + gecikme tazminatı, 2) İfadan vazgeçip OLUMLU (müspet) zarar, 3) Sözleşmeden dönüp OLUMSUZ (menfi) zarar isteyebilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ifadan vazgeçerek olumlu zararının tazminini veya sözleşmeden dönerek olumsuz zararının tazminini isteyebilir',
      wrongPhrase: 'ifadan vazgeçerek olumsuz (menfi) zararının tazminini veya sözleşmeden dönerek olumlu (müspet) zararının tazminini isteyebilir',
      correctPhrase: 'ifadan vazgeçerek olumlu zararının tazminini veya sözleşmeden dönerek olumsuz zararının tazminini isteyebilir',
      explanation: 'ÖSYM’nin en klasik Borçlar Hukuku tuzağıdır: Sözleşmeden DÖNMEDE olumsuz (menfi) zarar; aynen ifadan VAZGEÇMEDE ise olumlu (müspet) zarar istenir (kavramlar ters çevrilerek sorulur)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'haksız fiilde fiilin işlendiği, sebepsiz zenginleşmede ise zenginleşmenin gerçekleştiği tarihte ihtara gerek olmaksızın temerrüt gerçekleşir',
      wrongPhrase: 'haksız fiil ve sebepsiz zenginleşmede dahi borçlunun temerrüde düşmesi için mutlaka noterden ihtarname çekilmesi şarttır',
      correctPhrase: 'haksız fiilde fiilin işlendiği, sebepsiz zenginleşmede ise zenginleşmenin gerçekleştiği tarihte ihtara gerek olmaksızın temerrüt gerçekleşir',
      explanation: 'TBK m. 117/2 uyarınca haksız fiilde fiilin işlendiği, sebepsiz zenginleşmede ise zenginleşmenin gerçekleştiği tarihte ihtara gerek olmaksızın borçlu temerrüde düşer.'
    }
  },
  {
    id: 'rule-tbk-ceza-kosulu-ve-tacirin-indirim-isteyememesi-m179-182-p12',
    branch: 'Borçlar',
    subTopic: 'Ceza Koşulu (Cezai Şart), Asıl Borca Bağlılık ve Tacirin Tenkis İsteyememesi',
    articleRef: 'TBK M. 179-182 & TTK M. 22',
    trueStatement:
      'Asıl borç herhangi bir sebeple geçersiz ise veya aksi kararlaştırılmadıkça sonradan borçlunun sorumlu tutulamayacağı bir sebeple imkânsız hâle gelmişse cezanın ifası istenemez; hâkim aşırı gördüğü ceza koşulunu kendiliğinden indirir, ancak Türk Ticaret Kanunu uyarınca tacir sıfatını haiz borçlu aşırı olduğu iddiasıyla ceza koşulunun indirilmesini isteyemez.',
    trueHighlight: ['Asıl borç herhangi bir sebeple geçersiz ise veya aksi kararlaştırılmadıkça sonradan borçlunun sorumlu tutulamayacağı bir sebeple imkânsız hâle gelmişse cezanın ifası istenemez', 'hâkim aşırı gördüğü ceza koşulunu kendiliğinden indirir, ancak Türk Ticaret Kanunu uyarınca tacir sıfatını haiz borçlu aşırı olduğu iddiasıyla ceza koşulunun indirilmesini isteyemez'],
    trueCorrectPhrase: 'Ceza koşulu fer’i hak olup asıl borç geçersizse istenemez; hâkim aşırı cezayı re’sen indirir ancak tacir borçlu fahişlik nedeniyle indirim isteyemez.',
    baseExplanation: 'TBK m. 182 ve TTK m. 22: Ceza koşulu asıl borca bağlı fer’i bir borçtur. Hâkim aşırı gördüğü ceza koşulunu re’sen indirir; fakat TTK m. 22 uyarınca tacir sıfatını haiz borçlu, aşırı olduğu iddiasıyla cezanın indirilmesini isteyemez (ancak borçlu tacirin ekonomik mahvına sebep olacak derecede ahlaka aykırılık varsa Yargıtay TBK m. 27 kapsamında indirim kabul etmektedir).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak Türk Ticaret Kanunu uyarınca tacir sıfatını haiz borçlu aşırı olduğu iddiasıyla ceza koşulunun indirilmesini isteyemez',
      wrongPhrase: 'tacir sıfatını haiz borçlular da adi borçlular gibi her zaman aşırı olduğu iddiasıyla ceza koşulunun indirilmesini isteyebilirler',
      correctPhrase: 'ancak Türk Ticaret Kanunu uyarınca tacir sıfatını haiz borçlu aşırı olduğu iddiasıyla ceza koşulunun indirilmesini isteyemez',
      explanation: 'TTK m. 22 uyarınca tacir sıfatını haiz borçlu, TBK m. 182/3’te yazılı hallerde aşırı olduğu iddiasıyla bir ücret veya sözleşme cezasının indirilmesini mahkemeden isteyemez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Asıl borç herhangi bir sebeple geçersiz ise veya aksi kararlaştırılmadıkça sonradan borçlunun sorumlu tutulamayacağı bir sebeple imkânsız hâle gelmişse cezanın ifası istenemez',
      wrongPhrase: 'Asıl borç şekil eksikliği nedeniyle geçersiz olsa veya kusursuz imkânsızlıkla sona erse dahi ceza koşulu bağımsız bir borç olduğundan her zaman istenebilir',
      correctPhrase: 'Asıl borç herhangi bir sebeple geçersiz ise veya aksi kararlaştırılmadıkça sonradan borçlunun sorumlu tutulamayacağı bir sebeple imkânsız hâle gelmişse cezanın ifası istenemez',
      explanation: 'TBK m. 182/2 uyarınca ceza koşulu asıl borca bağlı fer’i bir borç olduğundan, asıl borç geçersizse veya kusursuz sonraki imkânsızlıkla sona ermişse cezanın ifası istenemez.'
    }
  },

  // =========================================================================
  // 5. TİCARET HUKUKU (6102 SAYILI TÜRK TİCARET KANUNU)
  // =========================================================================
  {
    id: 'rule-ttk-ticari-isletme-devri-ve-unvan-tescil-15-gun-p12',
    branch: 'Ticaret',
    subTopic: 'Ticari İşletme Devrinin Şekli (Yazılı + Tescil) ve Ticaret Unvanı Tescil Süresi (15 Gün)',
    articleRef: 'TTK M. 11/3 & 40',
    trueStatement:
      'Ticari işletme, içerdiği malvarlığı unsurlarının devri için zorunlu tasarruf işlemlerinin ayrı ayrı yapılmasına gerek olmaksızın bir bütün hâlinde yazılı sözleşmeyle devredilebilir ve devir sözleşmesi ticaret siciline tescil ve ilan ile hüküm ifade eder; her tacir, işletmesini açtığı günden itibaren onbeş gün içinde ticari işletmesini ve seçtiği ticaret unvanını ticaret siciline tescil ve ilan ettirmekle yükümlüdür.',
    trueHighlight: ['bir bütün hâlinde yazılı sözleşmeyle devredilebilir ve devir sözleşmesi ticaret siciline tescil ve ilan ile hüküm ifade eder', 'işletmesini açtığı günden itibaren onbeş gün içinde ticari işletmesini ve seçtiği ticaret unvanını ticaret siciline tescil ve ilan ettirmekle yükümlüdür'],
    trueCorrectPhrase: 'Ticari işletme devri yazılı yapılır ve ticaret siciline tescil/ilan ile kurucu hüküm ifade eder; tacir işletmesini açtığı günden itibaren 15 gün içinde tescil ettirmelidir.',
    baseExplanation: 'TTK m. 11/3 ve m. 40/1: Ticari işletmenin devrinde yazılı şekil ve ticaret siciline tescil kurucu unsurdur! Ayrıca her tacir işletmesini açtığı günden itibaren 15 gün içinde işletmesini ve ticaret unvanını tescil ve ilan ettirmek zorundadır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'devir sözleşmesi ticaret siciline tescil ve ilan ile hüküm ifade eder',
      wrongPhrase: 'ticaret unvanı ticari işletmeden bağımsız olarak tek başına başkasına devredilebilir ve işletme devrinde tescil yalnızca açıklayıcı niteliktedir',
      correctPhrase: 'devir sözleşmesi ticaret siciline tescil ve ilan ile hüküm ifade eder',
      explanation: 'TTK m. 11/3 uyarınca ticari işletme devrinde ticaret siciline tescil açıklayıcı değil KURUCU niteliktedir; ayrıca TTK m. 49 gereği ticaret unvanı işletmeden ayrı olarak başkasına devredilemez!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işletmesini açtığı günden itibaren onbeş gün içinde',
      wrongPhrase: 'işletmesini açtığı günden itibaren otuz gün içinde',
      correctPhrase: 'işletmesini açtığı günden itibaren onbeş gün içinde',
      explanation: 'TTK m. 40/1 uyarınca tacirin işletmesini ve ticaret unvanını tescil ettirme süresi 30 gün değil, 15 gündür.'
    }
  },
  {
    id: 'rule-ttk-tbk-ticari-temsilci-aciklayici-tescil-tasinmaz-siniri-p12',
    branch: 'Ticaret',
    subTopic: 'Ticari Temsilci (Ticari Mümessil): Tescilin Açıklayıcı Niteliği ve Taşınmaz Devir Sınırı',
    articleRef: 'TBK M. 547 & 548',
    trueStatement:
      'İşletme sahibi ticari temsilcilik yetkisini ticaret siciline tescil ettirmek zorundadır, ancak ticari işletme sahibinin ticari temsilcinin fiillerinden sorumluluğu tescilin yapılmış olmasına bağlı değildir; ticari temsilci, açıkça yetkili kılınmadıkça taşınmazları devredemez veya bir hak ile sınırlandıramaz.',
    trueHighlight: ['ticari işletme sahibinin ticari temsilcinin fiillerinden sorumluluğu tescilin yapılmış olmasına bağlı değildir', 'açıkça yetkili kılınmadıkça taşınmazları devredemez veya bir hak ile sınırlandıramaz'],
    trueCorrectPhrase: 'Ticari temsilci atamasında tescil açıklayıcıdır; ticari temsilci özel yetki olmadan taşınmazları devredemez ve üzerlerinde sınırlı ayni hak kuramaz (ancak taşınmaz satın alabilir!).',
    baseExplanation: 'TBK m. 547 ve m. 548: Ticari temsilci atamasında ticaret siciline tescil zorunlu olmakla birlikte kurucu değil AÇIKLAYICIDIR (ancak temsil yetkisinin şubeyle veya birlikte imzayla sınırlandırılmasının iyiniyetli üçüncü kişilere karşı ileri sürülebilmesi için tescil ve ilan şarttır). Ticari temsilci özel yetki olmadan taşınmaz devredemez veya ipotek kuramaz; fakat işletme adına taşınmaz satın alabilir ve kambiyo taahhüdünde bulunabilir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ticari işletme sahibinin ticari temsilcinin fiillerinden sorumluluğu tescilin yapılmış olmasına bağlı değildir',
      wrongPhrase: 'ticari temsilcilik yetkisi ticaret siciline tescil ve ilan edilmedikçe hiçbir şekilde doğmaz ve tescil kurucu niteliktedir',
      correctPhrase: 'ticari işletme sahibinin ticari temsilcinin fiillerinden sorumluluğu tescilin yapılmış olmasına bağlı değildir',
      explanation: 'TBK m. 547/2 uyarınca ticari temsilci atamasında ticaret siciline tescil kurucu değil açıklayıcıdır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'açıkça yetkili kılınmadıkça taşınmazları devredemez veya bir hak ile sınırlandıramaz',
      wrongPhrase: 'açıkça yetkili kılınmadıkça bono ve çek imzalayamaz, kredi çekemez ve işletme adına taşınır mal satın alamaz',
      correctPhrase: 'açıkça yetkili kılınmadıkça taşınmazları devredemez veya bir hak ile sınırlandıramaz',
      explanation: 'TBK m. 548 uyarınca ticari temsilci kambiyo taahhüdünde bulunabilir ve kredi çekebilir; özel yetki gerektiren işlem yalnızca taşınmazların devredilmesi veya bir hak ile sınırlandırılmasıdır!'
    }
  },
  {
    id: 'rule-ttk-anonim-sirket-yonetim-kurulu-nisaplari-ve-rekabet-yasagi-p12',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirket Yönetim Kurulu Toplantı/Karar Nisabı ve Rekabet Yasağı',
    articleRef: 'TTK M. 359, 390 & 396',
    trueStatement:
      'Anonim şirketin yönetim kurulu bir veya daha fazla kişiden oluşur ve üyelerin pay sahibi olması zorunlu değildir; esas sözleşmede ağırlaştırıcı bir hüküm bulunmadıkça yönetim kurulu üye tam sayısının çoğunluğu ile toplanır ve kararlarını toplantıda hazır bulunan üyelerin çoğunluğuyla alır; yönetim kurulu üyeleri genel kurulun iznini almaksızın şirketin işletme konusuna giren ticari iş türünden bir işlemi kendi veya başkası hesabına yapamaz.',
    trueHighlight: ['bir veya daha fazla kişiden oluşur ve üyelerin pay sahibi olması zorunlu değildir', 'üye tam sayısının çoğunluğu ile toplanır ve kararlarını toplantıda hazır bulunan üyelerin çoğunluğuyla alır', 'genel kurulun iznini almaksızın şirketin işletme konusuna giren ticari iş türünden bir işlemi kendi veya başkası hesabına yapamaz'],
    trueCorrectPhrase: 'A.Ş. yönetim kurulu en az 1 kişiden oluşur, pay sahibi olma şartı yoktur; üye tam sayısının çoğunluğuyla toplanıp hazır bulunanların çoğunluğuyla karar alır.',
    baseExplanation: 'TTK m. 359, 390 ve 396: 6102 sayılı TTK ile yönetim kurulu üyelerinin pay sahibi olma zorunluluğu ve en az 3 kişiden oluşma şartı kaldırılmıştır (1 kişi bile olabilir). Toplantı nisabı üye tam sayısının çoğunluğu, karar nisabı hazır bulunanların çoğunluğudur. Rekabet yasağına aykırılıkta zamanaşımı 3 ay ve 1 yıldır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'bir veya daha fazla kişiden oluşur ve üyelerin pay sahibi olması zorunlu değildir',
      wrongPhrase: 'en az üç kişiden oluşur ve yönetim kurulu üyelerinin tamamının pay sahibi olması kanunen zorunludur',
      correctPhrase: 'bir veya daha fazla kişiden oluşur ve üyelerin pay sahibi olması zorunlu değildir',
      explanation: '6102 sayılı TTK m. 359 uyarınca yönetim kurulu tek üyeden dahi oluşabilir ve üyelerin pay sahibi olması zorunlu değildir!'
    },
    trap2: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'üye tam sayısının çoğunluğu ile toplanır ve kararlarını toplantıda hazır bulunan üyelerin çoğunluğuyla alır',
      wrongPhrase: 'sermayenin en az dörtte birini temsil eden üyelerle toplanır ve üyeler birbirlerine vekâlet vererek oy kullanabilirler',
      correctPhrase: 'üye tam sayısının çoğunluğu ile toplanır ve kararlarını toplantıda hazır bulunan üyelerin çoğunluğuyla alır',
      explanation: 'TTK m. 390 uyarınca yönetim kurulunda toplantı nisabı üye tam sayısının çoğunluğudur ve yönetim kurulu üyeleri birbirlerini temsilen oy veremezler, toplantılara vekil aracılığıyla da katılamazlar!'
    }
  },
  {
    id: 'rule-ttk-anonim-sirket-genel-kurul-olagan-toplanti-3-ay-1-4-nisap-p12',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirket Genel Kurulu Olağan Toplantı Süresi (3 Ay) ve Genel Toplantı Nisabı (1/4)',
    articleRef: 'TTK M. 409 & 418',
    trueStatement:
      'Anonim şirket genel kurulu olağan toplantısını her faaliyet dönemi sonundan itibaren üç ay içinde yapar; kanunda veya esas sözleşmede daha ağır bir nisap öngörülmemişse genel kurul, sermayenin en az dörtte birini karşılayan payların sahiplerinin veya temsilcilerinin varlığıyla toplanır ve kararlar toplantıda hazır bulunan oyların çoğunluğu ile verilir.',
    trueHighlight: ['her faaliyet dönemi sonundan itibaren üç ay içinde yapar', 'sermayenin en az dörtte birini karşılayan payların sahiplerinin veya temsilcilerinin varlığıyla toplanır', 'toplantıda hazır bulunan oyların çoğunluğu ile verilir'],
    trueCorrectPhrase: 'A.Ş. olağan genel kurulu faaliyet dönemi sonundan itibaren 3 ay içinde yapılır; adi toplantı nisabı ilk toplantıda sermayenin 1/4’üdür (ikinci toplantıda nisap aranmaz).',
    baseExplanation: 'TTK m. 409 ve m. 418: Olağan genel kurul her faaliyet dönemi sonundan itibaren 3 ay içinde toplanır. Adi toplantı nisabı ilk toplantıda sermayenin en az 1/4’üdür; ilk toplantıda bu nisap sağlanamazsa ikinci toplantıda hazır bulunan payların tutarı ne olursa olsun müzakere yapılır ve hazır bulunan oyların çoğunluğuyla karar alınır.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'sermayenin en az dörtte birini karşılayan payların sahiplerinin veya temsilcilerinin varlığıyla toplanır ve kararlar toplantıda hazır bulunan oyların çoğunluğu ile verilir',
      wrongPhrase: 'sermayenin en az yarısını karşılayan payların sahiplerinin varlığıyla toplanır ve ikinci toplantıda da en az üçte bir nisap aranır',
      correctPhrase: 'sermayenin en az dörtte birini karşılayan payların sahiplerinin veya temsilcilerinin varlığıyla toplanır ve kararlar toplantıda hazır bulunan oyların çoğunluğu ile verilir',
      explanation: '1/2 ve 1/3 nisapları esas sözleşme değişikliği (TTK m. 421) içindir; olağan genel kurulda adi toplantı nisabı TTK m. 418 uyarınca ilk toplantıda 1/4 olup ikinci toplantıda asgari nisap aranmaz!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'her faaliyet dönemi sonundan itibaren üç ay içinde yapar',
      wrongPhrase: 'her faaliyet dönemi sonundan itibaren altı ay içinde yapar',
      correctPhrase: 'her faaliyet dönemi sonundan itibaren üç ay içinde yapar',
      explanation: 'TTK m. 409/1 uyarınca anonim şirket olağan genel kurul toplantısı faaliyet dönemi sonundan itibaren 6 ay değil, 3 ay içinde yapılır.'
    }
  },
  {
    id: 'rule-ttk-cekte-vade-yasagi-ve-karsiliksiz-cek-icra-mahkemesi-p12',
    branch: 'Ticaret',
    subTopic: 'Çekte Vade Yasağı, İleri Tarihli İbraz Yasağı ve Karşılıksız Çekte Görevli Mahkeme',
    articleRef: 'TTK M. 795 & 5941 s.K. M. 5',
    trueStatement:
      'Çekte vade olamaz; çek görüldüğünde ödenir ve buna aykırı herhangi bir kayıt yazılmamış hükmündedir; ancak üzerinde yazılı düzenleme tarihinden önce ödenmek için muhatap bankaya ibrazı geçersizdir ve çekin karşılıksız çıkması hâlinde hamilin şikâyeti üzerine icra mahkemesince çek düzenleme ve çek hesabı açma yasağı ile adlî para cezasına hükmolunur.',
    trueHighlight: ['çek görüldüğünde ödenir ve buna aykırı herhangi bir kayıt yazılmamış hükmündedir', 'üzerinde yazılı düzenleme tarihinden önce ödenmek için muhatap bankaya ibrazı geçersizdir', 'icra mahkemesince çek düzenleme ve çek hesabı açma yasağı ile adlî para cezasına hükmolunur'],
    trueCorrectPhrase: 'Çekte vade kaydı çeki geçersiz kılmaz, yazılmamış sayılır; ileri tarihli çek düzenleme tarihinden önce ibraz edilemez ve karşılıksız çek suçunda İcra Mahkemesi görevlidir.',
    baseExplanation: 'TTK m. 795 ve 5941 s.K. m. 5, Geçici m. 3: Çekte vade kaydı konursa çek batıl olmaz, sadece vade kaydı yazılmamış sayılır! 5941 s.K. Geçici m. 3 uyarınca ileri tarihli çekin üzerinde yazılı düzenleme tarihinden önce bankaya ibrazı geçersizdir. Karşılıksız çek şikâyetinde görevli mahkeme Asliye Ticaret veya Asliye Ceza değil, İcra (Ceza) Mahkemesidir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'çek görüldüğünde ödenir ve buna aykırı herhangi bir kayıt yazılmamış hükmündedir',
      wrongPhrase: 'çekin üzerine vade kaydı konulması hâlinde çek kambiyo senedi vasfını tamamen kaybeder ve kesin hükümsüz olur',
      correctPhrase: 'çek görüldüğünde ödenir ve buna aykırı herhangi bir kayıt yazılmamış hükmündedir',
      explanation: 'ÖSYM’nin en sık sorduğu Kıymetli Evrak tuzağıdır: Çeke vade kaydı konulması çeki geçersiz kılmaz; TTK m. 795/1 uyarınca vade kaydı "yazılmamış hükmündedir" ve çek geçerliliğini korur!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'icra mahkemesince çek düzenleme ve çek hesabı açma yasağı ile adlî para cezasına hükmolunur',
      wrongPhrase: 'asliye ticaret mahkemesince çek düzenleme yasağına ve doğrudan iki yıla kadar hapis cezasına hükmolunur',
      correctPhrase: 'icra mahkemesince çek düzenleme ve çek hesabı açma yasağı ile adlî para cezasına hükmolunur',
      explanation: '5941 sayılı Çek Kanunu m. 5 uyarınca karşılıksız çek şikâyetlerinde görevli mahkeme Asliye Ticaret Mahkemesi değil, İcra Mahkemesidir!'
    }
  },

  // =========================================================================
  // 6. İCRA VE İFLAS HUKUKU (2004 SAYILI İİK)
  // =========================================================================
  {
    id: 'rule-iik-sikayet-suresi-7-gun-ve-suresiz-sikayet-m16-p12',
    branch: 'İcra',
    subTopic: 'İcra Mahkemesine Şikâyet Süresi (7 Gün) ve Süresiz Şikâyet Halleri',
    articleRef: 'İİK M. 16 & 22',
    trueStatement:
      'İcra ve iflas dairelerinin yaptığı işlemlerin kanuna muhalif olmasından veya hadiseye uygun bulunmamasından dolayı bu işlemlerin öğrenildiği tarihten itibaren yedi gün içinde icra mahkemesine şikâyet olunabilir; ancak bir hakkın yerine getirilmemesi, bir hakkın sebepsiz sürüncemede bırakılması ve kamu düzenine aykırılık hâllerinde her zaman süresiz şikâyet olunabilir ve şikâyet kendiliğinden icrayı durdurmaz.',
    trueHighlight: ['öğrenildiği tarihten itibaren yedi gün içinde icra mahkemesine şikâyet olunabilir', 'bir hakkın yerine getirilmemesi, bir hakkın sebepsiz sürüncemede bırakılması ve kamu düzenine aykırılık hâllerinde her zaman süresiz şikâyet olunabilir', 'şikâyet kendiliğinden icrayı durdurmaz'],
    trueCorrectPhrase: 'İcra şikâyeti öğrenmeden itibaren 7 gündür; bir hakkın yerine getirilmemesi, sürüncemede bırakılması ve kamu düzenine aykırılıkta süresizdir.',
    baseExplanation: 'İİK m. 16 ve m. 22: Şikâyet bir dava değil, kendine özgü icra hukuku yoludur; icra dairesine değil doğrudan İcra Mahkemesine yapılır. Süresi öğrenmeden itibaren 7 gündür. Bir hakkın yerine getirilmemesi, sebepsiz sürüncemede bırakılması ve kamu düzenine aykırılıkta ise süresizdir. Şikâyet icrayı kendiliğinden durdurmaz.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'öğrenildiği tarihten itibaren yedi gün içinde icra mahkemesine şikâyet olunabilir',
      wrongPhrase: 'tebliğ tarihinden itibaren on gün içinde işlemi yapan icra dairesine şikâyet olunabilir',
      correctPhrase: 'öğrenildiği tarihten itibaren yedi gün içinde icra mahkemesine şikâyet olunabilir',
      explanation: 'Genel haciz yolunda ödeme emrine "itiraz" icra dairesine yapılırken, icra müdürünün işlemine karşı "şikâyet" İİK m. 16 uyarınca öğrenmeden itibaren 7 gün içinde İcra Mahkemesine yapılır (kambiyo takibinde bazı özel şikâyetler 5 gündür)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'şikâyet kendiliğinden icrayı durdurmaz',
      wrongPhrase: 'şikâyet başvurusu yapılmasıyla birlikte icra takibi kanunen kendiliğinden durur',
      correctPhrase: 'şikâyet kendiliğinden icrayı durdurmaz',
      explanation: 'İİK m. 22 uyarınca icra mahkemesince icranın geri bırakılmasına (durdurulmasına) karar verilmedikçe şikâyet kendiliğinden icrayı durdurmaz.'
    }
  },
  {
    id: 'rule-iik-ilamli-icra-icra-emri-7-gun-10-yil-zamanasimi-p12',
    branch: 'İcra',
    subTopic: 'İlamlı İcrada İcra Emri (7 Gün), İcranın Geri Bırakılması Sebepleri ve 10 Yıllık Zamanaşımı',
    articleRef: 'İİK M. 32, 33 & 39',
    trueStatement:
      'Para ve teminat verilmesi hakkındaki ilamların icrasında borçluya yedi gün içinde borcu ödemesi için icra emri gönderilir; borçlu bu yedi gün içinde dilekçeyle icra mahkemesine başvurarak borcun itfa edildiğini, imhâl edildiğini veya zamanaşımına uğradığını resmi veya imzası ikrar edilmiş belgelerle ispat ederse icranın geri bırakılmasına karar verilir ve ilama dayanan takip son işlem üzerinden on yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['yedi gün içinde borcu ödemesi için icra emri gönderilir', 'icra mahkemesine başvurarak borcun itfa edildiğini, imhâl edildiğini veya zamanaşımına uğradığını resmi veya imzası ikrar edilmiş belgelerle ispat ederse', 'son işlem üzerinden on yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'İlamlı icrada 7 gün içinde İcra Mahkemesinden itfa, imhâl ve zamanaşımı sebepleriyle icranın geri bırakılması istenebilir; ilamlı icra zamanaşımı 10 yıldır.',
    baseExplanation: 'İİK m. 32, 33 ve 39: İlamlı icrada borçluya ödeme emri değil "icra emri" gönderilir. Borçlu "borcum yoktur" diye icra dairesine itiraz edemez; ancak 7 gün içinde İcra Mahkemesine başvurarak itfa (ödeme), imhâl (süre verilmesi) veya zamanaşımı iddiasıyla icranın geri bırakılmasını isteyebilir. İlama dayanan takip son işlem üzerinden 10 yıl geçmekle zamanaşımına uğrar.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'icra mahkemesine başvurarak borcun itfa edildiğini, imhâl edildiğini veya zamanaşımına uğradığını resmi veya imzası ikrar edilmiş belgelerle ispat ederse icranın geri bırakılmasına karar verilir',
      wrongPhrase: 'icra dairesine sözlü olarak başvurarak böyle bir borcu bulunmadığını bildirmesi üzerine ilamlı takip kendiliğinden durur',
      correctPhrase: 'icra mahkemesine başvurarak borcun itfa edildiğini, imhâl edildiğini veya zamanaşımına uğradığını resmi veya imzası ikrar edilmiş belgelerle ispat ederse icranın geri bırakılmasına karar verilir',
      explanation: 'İlamlı icrada borçlunun icra dairesine "borcum yoktur" diye itiraz ederek takibi durdurma imkânı yoktur; yalnızca İİK m. 33 uyarınca İcra Mahkemesinden itfa, imhâl veya zamanaşımı sebebiyle icranın geri bırakılmasını isteyebilir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'son işlem üzerinden on yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'son işlem üzerinden beş yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'son işlem üzerinden on yıl geçmekle zamanaşımına uğrar',
      explanation: 'İİK m. 39/1 uyarınca ilama dayanan takip, son işlem üzerinden 5 yıl değil 10 yıl geçmekle zamanaşımına uğrar.'
    }
  },
  {
    id: 'rule-iik-icra-inkar-ve-kotuniyet-tazminati-yuzde-20-p12',
    branch: 'İcra',
    subTopic: 'İcra İnkâr Tazminatı ve Kötüniyet Tazminatı Asgari Oranı (En Az %20)',
    articleRef: 'İİK M. 67/2, 68/7 & 72/4',
    trueStatement:
      'İtirazın iptali davasında, itirazın kaldırılması talebinde veya menfi tespit davasında haksız çıkan taraf, diğer tarafın talebi üzerine hükmolunan veya reddedilen meblağın yüzde yirmisinden aşağı olmamak üzere uygun bir tazminatla mahkûm edilir.',
    trueHighlight: ['diğer tarafın talebi üzerine', 'yüzde yirmisinden aşağı olmamak üzere uygun bir tazminatla mahkûm edilir'],
    trueCorrectPhrase: 'İcra inkâr tazminatı ve kötüniyet tazminatı talep şartına bağlıdır ve asgari oranı %20’dir.',
    baseExplanation: 'İİK m. 67/2, m. 68/7 ve m. 72/4-5: İcra inkâr tazminatına veya kötüniyet tazminatına hükmedilebilmesi için talep şarttır (mahkemece re’sen hükmedilemez, ancak menfi tespit davasında ihtiyati tedbirle takip durmuş ve davacı borçlu haksız çıkmışsa İİK m. 72/4 gereği alacaklı lehine tazminata hükmedilir) ve yasal alt sınır %20’dir.',
    trap1: {
      category: 'Oran/Nisap Tuzağı',
      replaceTarget: 'yüzde yirmisinden aşağı olmamak üzere uygun bir tazminatla mahkûm edilir',
      wrongPhrase: 'yüzde kırkından aşağı olmamak üzere uygun bir tazminatla mahkûm edilir',
      correctPhrase: 'yüzde yirmisinden aşağı olmamak üzere uygun bir tazminatla mahkûm edilir',
      explanation: '6352 sayılı Kanun değişikliğiyle İİK’daki %40’lık icra inkâr tazminatı oranı %20’ye indirilmiştir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'diğer tarafın talebi üzerine',
      wrongPhrase: 'tarafların herhangi bir talebi bulunmasa dahi itirazın iptali davasında hâkim tarafından re’sen',
      correctPhrase: 'diğer tarafın talebi üzerine',
      explanation: 'İİK m. 67/2 ve m. 68/7 uyarınca itirazın iptali ve itirazın kaldırılmasında icra inkâr tazminatına hükmedilebilmesi için alacaklının talebi şarttır; re’sen hükmedilemez!'
    }
  }
];
