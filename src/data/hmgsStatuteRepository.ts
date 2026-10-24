import { LawBranch, TrapCard, TrapCategory } from '../types/hmgs';
import { EXCLUDED_RULE_IDS } from './hmgsExcludedRules';
import { HMGS_COMPREHENSIVE_EXPANSION_RULES } from './hmgsComprehensiveExpansion';
import { HMGS_COMPREHENSIVE_EXPANSION_PART2_RULES } from './hmgsComprehensiveExpansionPart2';
import { HMGS_COMPREHENSIVE_EXPANSION_PART3_RULES } from './hmgsComprehensiveExpansionPart3';
import { HMGS_COMPREHENSIVE_EXPANSION_PART4_RULES } from './hmgsComprehensiveExpansionPart4';
import { HMGS_COMPREHENSIVE_EXPANSION_PART5_RULES } from './hmgsComprehensiveExpansionPart5';
import { HMGS_COMPREHENSIVE_EXPANSION_PART6_RULES } from './hmgsComprehensiveExpansionPart6';
import { HMGS_COMPREHENSIVE_EXPANSION_PART7_RULES } from './hmgsComprehensiveExpansionPart7';
import { HMGS_COMPREHENSIVE_EXPANSION_PART8_RULES } from './hmgsComprehensiveExpansionPart8';
import { HMGS_COMPREHENSIVE_EXPANSION_PART9_RULES } from './hmgsComprehensiveExpansionPart9';
import { HMGS_COMPREHENSIVE_EXPANSION_PART10_RULES } from './hmgsComprehensiveExpansionPart10';
import { HMGS_COMPREHENSIVE_EXPANSION_PART11_RULES } from './hmgsComprehensiveExpansionPart11';
import { HMGS_COMPREHENSIVE_EXPANSION_PART12_RULES } from './hmgsComprehensiveExpansionPart12';

export interface StatutoryRuleSeed {
  id: string;
  branch: LawBranch;
  subTopic: string;
  articleRef: string;
  trueStatement: string;
  trueHighlight: string[];
  trueCorrectPhrase: string;
  trap1: {
    category: TrapCategory;
    wrongPhrase: string;
    correctPhrase: string;
    replaceTarget: string;
    explanation: string;
  };
  trap2: {
    category: TrapCategory;
    wrongPhrase: string;
    correctPhrase: string;
    replaceTarget: string;
    explanation: string;
  };
  baseExplanation: string;
}

export const HMGS_STATUTORY_RULES: StatutoryRuleSeed[] = [
  // =========================================================================
  // 1. HMK (MEDENİ USUL HUKUKU - 6100 SAYILI KANUN)
  // =========================================================================
  {
    id: 'rule-hmk-1',
    branch: 'HMK',
    subTopic: 'Asliye Hukuk Mahkemesinin Genel Görevi',
    articleRef: 'M. 2',
    trueStatement:
      'Dava konusunun değer ve miktarına bakılmaksızın malvarlığı haklarına ilişkin davalarla, şahıs varlığına ilişkin davalarda aksine bir düzenleme bulunmadıkça asliye hukuk mahkemesi görevlidir.',
    trueHighlight: ['değer ve miktarına bakılmaksızın', 'asliye hukuk mahkemesi görevlidir'],
    trueCorrectPhrase: 'asliye hukuk mahkemesi görevlidir',
    baseExplanation: 'HMK m. 2 uyarınca hukuk yargısında asıl görevli mahkeme Asliye Hukuk Mahkemesidir; Sulh Hukuk Mahkemesinin görevi istisnaidir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'asliye hukuk mahkemesi görevlidir',
      wrongPhrase: 'sulh hukuk mahkemesi görevlidir',
      correctPhrase: 'asliye hukuk mahkemesi görevlidir',
      explanation: 'HMK m. 2’ye göre malvarlığı ve şahıs varlığı davalarında genel görevli mahkeme Sulh Hukuk değil, Asliye Hukuk Mahkemesidir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Dava konusunun değer ve miktarına bakılmaksızın',
      wrongPhrase: 'Yalnızca yüz bin Türk lirasını aşan uyuşmazlıklarda',
      correctPhrase: 'Dava konusunun değer ve miktarına bakılmaksızın',
      explanation: '6100 sayılı HMK ile görev belirlemede parasal sınır (değer kriteri) tamamen kaldırılmıştır.'
    }
  },
  {
    id: 'rule-hmk-2',
    branch: 'HMK',
    subTopic: 'Sulh Hukuk Mahkemesinin Görevi • Zilyetlik',
    articleRef: 'M. 4',
    trueStatement:
      'Taşınır ve taşınmaz mal veya hakkın yalnızca zilyetliğine ilişkin koruma davalarında dava değerine bakılmaksızın sulh hukuk mahkemesi görevlidir.',
    trueHighlight: ['yalnızca zilyetliğine ilişkin koruma davalarında', 'sulh hukuk mahkemesi görevlidir'],
    trueCorrectPhrase: 'yalnızca zilyetliğe ilişkin davalarda sulh hukuk mahkemesi görevlidir',
    baseExplanation: 'HMK m. 4/1-c uyarınca zilyetliğin korunması davalarında görevli mahkeme Sulh Hukuk Mahkemesidir; üstün hak iddiası (mülkiyet) davalarında ise Asliye Hukuk görevlidir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'sulh hukuk mahkemesi görevlidir',
      wrongPhrase: 'asliye hukuk mahkemesi görevlidir',
      correctPhrase: 'sulh hukuk mahkemesi görevlidir',
      explanation: 'Zilyetliğin gasp ve saldırıya karşı korunması davalarında HMK m. 4/1-c uyarınca Sulh Hukuk Mahkemesi görevlidir.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnızca zilyetliğine ilişkin koruma davalarında',
      wrongPhrase: 'mülkiyet hakkına dayalı tapu iptal ve tescil davalarında',
      correctPhrase: 'yalnızca zilyetliğine ilişkin koruma davalarında',
      explanation: 'Tapu iptal ve tescil davaları mülkiyet hakkına dayandığından Sulh Hukukta değil, Asliye Hukuk Mahkemesinde görülür.'
    }
  },
  {
    id: 'rule-hmk-3',
    branch: 'HMK',
    subTopic: 'Genel Yetkili Mahkeme',
    articleRef: 'M. 6',
    trueStatement:
      'Hukuk Muhakemeleri Kanunu’na göre genel yetkili mahkeme, davalı gerçek veya tüzel kişinin davanın açıldığı tarihteki yerleşim yeri mahkemesidir.',
    trueHighlight: ['davalı gerçek veya tüzel kişinin', 'davanın açıldığı tarihteki yerleşim yeri'],
    trueCorrectPhrase: 'davalının davanın açıldığı tarihteki yerleşim yeri mahkemesidir',
    baseExplanation: 'HMK m. 6/1 uyarınca genel yetki kuralı davacının değil, davalının davanın açıldığı tarihteki yerleşim yeri mahkemesidir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'davalı gerçek veya tüzel kişinin',
      wrongPhrase: 'davacı gerçek veya tüzel kişinin',
      correctPhrase: 'davalı gerçek veya tüzel kişinin',
      explanation: 'Genel yetkili mahkeme davacının değil, davalının davanın açıldığı tarihteki yerleşim yeri mahkemesidir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'davanın açıldığı tarihteki yerleşim yeri',
      wrongPhrase: 'uyuşmazlığın doğduğu tarihteki yerleşim yeri',
      correctPhrase: 'davanın açıldığı tarihteki yerleşim yeri',
      explanation: 'Genel yetkide esas alınan an uyuşmazlığın doğduğu tarih değil, davanın açıldığı tarihteki yerleşim yeridir.'
    }
  },
  {
    id: 'rule-hmk-4',
    branch: 'HMK',
    subTopic: 'Taşınmazın Aynından Doğan Davalarda Kesin Yetki',
    articleRef: 'M. 12',
    trueStatement:
      'Taşınmaz üzerindeki ayni hakka ilişkin veya ayni hak sahipliğinde değişikliğe yol açabilecek davalar, taşınmazın bulunduğu yer mahkemesinde açılır ve bu yetki kuralı kesindir.',
    trueHighlight: ['taşınmazın bulunduğu yer mahkemesinde', 'bu yetki kuralı kesindir'],
    trueCorrectPhrase: 'taşınmazın bulunduğu yer mahkemesi kesin yetkilidir',
    baseExplanation: 'HMK m. 12/1 uyarınca taşınmazın aynına ilişkin davalarda taşınmazın bulunduğu yer mahkemesi kesin yetkilidir ve dava şartıdır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu yetki kuralı kesindir',
      wrongPhrase: 'bu yetki kesin olmayıp yetki sözleşmesiyle değiştirilebilir',
      correctPhrase: 'bu yetki kuralı kesindir',
      explanation: 'Taşınmazın aynından doğan davalarda yetki kamu düzenine ilişkin kesin yetkidir; yetki sözleşmesi yapılamaz.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'taşınmazın bulunduğu yer mahkemesinde',
      wrongPhrase: 'davalının yerleşim yeri mahkemesinde',
      correctPhrase: 'taşınmazın bulunduğu yer mahkemesinde',
      explanation: 'Taşınmazın aynına ilişkin davalarda davalının yerleşim yeri değil, taşınmazın bulunduğu yer mahkemesi kesin yetkilidir.'
    }
  },
  {
    id: 'rule-hmk-5',
    branch: 'HMK',
    subTopic: 'Hâkimin Reddi Süresi ve Kanun Yolu',
    articleRef: 'M. 38-43',
    trueStatement:
      'Hâkimin reddi sebebi biliniyorsa ret talebi en geç ilk duruşmada ileri sürülmelidir; esas hüküm bakımından istinaf yolu açık olan dava ve işlerde ret talebi hakkındaki merci kararlarına karşı tebliğden itibaren iki hafta içinde istinaf yoluna başvurulabilir.',
    trueHighlight: ['en geç ilk duruşmada', 'tebliğden itibaren iki hafta içinde istinaf yoluna'],
    trueCorrectPhrase: 'tebliğden itibaren iki hafta içinde istinaf yoluna başvurulabilir',
    baseExplanation: 'HMK m. 43/2 uyarınca esas hüküm bakımından istinaf yolu açık olan işlerde hâkimin reddi talebi hakkındaki kararlara karşı tebliğden itibaren 2 hafta içinde istinaf yoluna gidilebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğden itibaren iki hafta içinde',
      wrongPhrase: 'tefhimden itibaren bir hafta içinde',
      correctPhrase: 'tebliğden itibaren iki hafta içinde',
      explanation: '7251 sayılı Kanun değişikliğiyle HMK’daki 1 haftalık özel istinaf süreleri 2 haftaya eşitlenmiştir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç ilk duruşmada ileri sürülmelidir',
      wrongPhrase: 'hüküm verilinceye kadar her aşamada serbestçe ileri sürülmelidir',
      correctPhrase: 'en geç ilk duruşmada ileri sürülmelidir',
      explanation: 'HMK m. 38/1 uyarınca ret sebebi biliniyorsa en geç ilk duruşmada, sonradan öğrenilmişse öğrenmeden itibaren en geç bir sonraki duruşmada ileri sürülmelidir.'
    }
  },
  {
    id: 'rule-hmk-6',
    branch: 'HMK',
    subTopic: 'İddia ve Savunmanın Genişletilmesi Yasağı',
    articleRef: 'M. 141',
    trueStatement:
      'Taraflar, cevaba cevap ve ikinci cevap dilekçeleri ile serbestçe; ön inceleme aşamasında ise ancak karşı tarafın açık muvafakati ile iddia veya savunmalarını genişletebilir yahut değiştirebilirler.',
    trueHighlight: ['cevaba cevap ve ikinci cevap dilekçeleri ile serbestçe', 'ön inceleme aşamasında ise ancak karşı tarafın açık muvafakati ile'],
    trueCorrectPhrase: 'dilekçeler teatisi aşamasında serbestçe, ön incelemede karşı tarafın açık muvafakatiyle',
    baseExplanation: 'HMK m. 141 uyarınca yazılı yargılamada iddia ve savunmanın genişletilmesi/değiştirilmesi yasağı dilekçelerin karşılıklı verilmesinden (ikinci cevap dilekçesinden) sonra başlar.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cevaba cevap ve ikinci cevap dilekçeleri ile serbestçe',
      wrongPhrase: 'dava ve cevap dilekçelerinin verilmesinden itibaren yalnızca ıslah yoluyla',
      correctPhrase: 'cevaba cevap ve ikinci cevap dilekçeleri ile serbestçe',
      explanation: 'Yazılı yargılama usulünde yasak dava/cevap dilekçesiyle değil, cevaba cevap ve ikinci cevap dilekçelerinin verilmesiyle başlar (basit yargılamada ise dava ve cevap dilekçesiyle başlar!).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ön inceleme aşamasında ise ancak karşı tarafın açık muvafakati ile',
      wrongPhrase: 'ön inceleme aşamasında karşı tarafın muvafakati aranmaksızın her zaman serbestçe',
      correctPhrase: 'ön inceleme aşamasında ise ancak karşı tarafın açık muvafakati ile',
      explanation: 'Ön inceleme aşamasında iddia ve savunmanın genişletilmesi ancak karşı tarafın açık muvafakati ile (veya karşı taraf ön inceleme duruşmasına mazeretsiz gelmezse) mümkündür.'
    }
  },
  {
    id: 'rule-hmk-7',
    branch: 'HMK',
    subTopic: 'Islah Zamanı ve Sınırı',
    articleRef: 'M. 176-177',
    trueStatement:
      'Taraflardan her biri, yapmış olduğu usul işlemlerini kısmen veya tamamen ıslah edebilir; ancak aynı davada taraflar ancak bir kez ıslah yoluna başvurabilir ve ıslah tahkikatın sona ermesine kadar yapılabilir.',
    trueHighlight: ['ancak bir kez ıslah yoluna başvurabilir', 'tahkikatın sona ermesine kadar yapılabilir'],
    trueCorrectPhrase: 'aynı davada bir kez ve tahkikatın sona ermesine kadar yapılabilir',
    baseExplanation: 'HMK m. 176 ve m. 177 uyarınca ıslah her tarafça bir kez ve tahkikatın sona ermesine kadar yapılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tahkikatın sona ermesine kadar yapılabilir',
      wrongPhrase: 'yalnızca ön inceleme duruşması tamamlanıncaya kadar yapılabilir',
      correctPhrase: 'tahkikatın sona ermesine kadar yapılabilir',
      explanation: 'HMK m. 177/1 uyarınca ıslah ön inceleme sonuna kadar değil, tahkikatın sona ermesine kadar yapılabilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak bir kez ıslah yoluna başvurabilir',
      wrongPhrase: 'yargılama boyunca sayı sınırlaması olmaksızın birden fazla kez ıslah yoluna başvurabilir',
      correctPhrase: 'ancak bir kez ıslah yoluna başvurabilir',
      explanation: 'HMK m. 176/2 uyarınca aynı davada taraflar ancak bir kez ıslah yoluna başvurabilir.'
    }
  },
  {
    id: 'rule-hmk-8',
    branch: 'HMK',
    subTopic: 'Senetle İspat Zorunluluğunun İstisnaları',
    articleRef: 'M. 203',
    trueStatement:
      'Altsoy ve üstsoy, kardeşler, eşler, kayınbaba, kaynana ile gelin ve damat arasındaki hukuki işlemlerde miktar veya değere bakılmaksızın tanık dinlenebilir.',
    trueHighlight: ['Altsoy ve üstsoy, kardeşler, eşler', 'miktar veya değere bakılmaksızın tanık dinlenebilir'],
    trueCorrectPhrase: 'yakın akrabalar arasındaki işlemlerde senetle ispat zorunluluğu aranmaksızın tanık dinlenebilir',
    baseExplanation: 'HMK m. 203/1-a uyarınca sayılan yakın hısımlar arasındaki işlemlerde manevi imkânsızlık nedeniyle değere bakılmaksızın tanık dinlenebilir (ancak amca, dayı, hala, teyze ve kuzenler bu kapsamda değildir!).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Altsoy ve üstsoy, kardeşler, eşler',
      wrongPhrase: 'Amca, dayı, hala, teyze ve üçüncü dereceye kadar tüm yan soy hısımlar',
      correctPhrase: 'Altsoy ve üstsoy, kardeşler, eşler',
      explanation: 'HMK m. 203/1-a’da amca, dayı, hala, teyze ve yeğenler sayılmamıştır! ÖSYM bu akrabaları ekleyerek klasik tanıkla ispat tuzağı kurar.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'miktar veya değere bakılmaksızın tanık dinlenebilir',
      wrongPhrase: 'senetle ispat sınırını aşan işlemlerde kesinlikle tanık dinlenemez',
      correctPhrase: 'miktar veya değere bakılmaksızın tanık dinlenebilir',
      explanation: 'HMK m. 203 uyarınca sayılan yakın akrabalar arasındaki işlemlerde miktar veya değere bakılmaksızın tanık dinlenebilir.'
    }
  },
  {
    id: 'rule-hmk-9',
    branch: 'HMK',
    subTopic: 'Basit Yargılama Usulünde Dilekçeler ve Yenileme',
    articleRef: 'M. 317-320',
    trueStatement:
      'Basit yargılama usulünde dava ve cevap dilekçesi dışında cevaba cevap ve ikinci cevap dilekçesi verilmez; işlemden kaldırılmasına karar verilmiş olan dosya yenilenmesinden sonra takipsiz bırakılırsa dava açılmamış sayılır.',
    trueHighlight: ['cevaba cevap ve ikinci cevap dilekçesi verilmez', 'yenilenmesinden sonra takipsiz bırakılırsa dava açılmamış sayılır'],
    trueCorrectPhrase: 'replik ve düplik dilekçesi verilmez ve dosya en fazla bir kez yenilenebilir',
    baseExplanation: 'HMK m. 317 ve m. 320 uyarınca basit yargılama usulünde tek dilekçe aşaması vardır ve yazılı yargılamadaki iki kez yenileme hakkının aksine dosya yalnızca bir kez yenilenebilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cevaba cevap ve ikinci cevap dilekçesi verilmez',
      wrongPhrase: 'taraflar ikişer hafta süreyle cevaba cevap ve ikinci cevap dilekçesi verebilirler',
      correctPhrase: 'cevaba cevap ve ikinci cevap dilekçesi verilmez',
      explanation: 'Basit yargılama usulünde yalnızca dava ve cevap dilekçesi verilir; cevaba cevap ve ikinci cevap dilekçesi verilmez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yenilenmesinden sonra takipsiz bırakılırsa dava açılmamış sayılır',
      wrongPhrase: 'yazılı yargılamada olduğu gibi iki kez yenilenebilir ve ancak üçüncü kez takipsiz bırakılırsa dava açılmamış sayılır',
      correctPhrase: 'yenilenmesinden sonra takipsiz bırakılırsa dava açılmamış sayılır',
      explanation: 'HMK m. 320/4 uyarınca basit yargılama usulünde işlemden kaldırılan dosya yalnızca bir kez yenilenebilir; ikinci kez takipsiz bırakılırsa dava açılmamış sayılır.'
    }
  },
  {
    id: 'rule-hmk-10',
    branch: 'HMK',
    subTopic: 'Tahkimde Hakem Kararlarına Karşı Kanun Yolu',
    articleRef: 'M. 439',
    trueStatement:
      'İç tahkimde hakem kararlarına karşı yalnızca iptal davası açılabilir; iptal davası, tahkim yeri bölge adliye mahkemesinde bir ay içinde açılır.',
    trueHighlight: ['yalnızca iptal davası açılabilir', 'tahkim yeri bölge adliye mahkemesinde bir ay içinde açılır'],
    trueCorrectPhrase: 'tahkim yeri bölge adliye mahkemesinde bir ay içinde iptal davası açılır',
    baseExplanation: 'HMK m. 439 uyarınca hakem kararlarına karşı istinaf yoluna değil, 1 ay içinde tahkim yeri Bölge Adliye Mahkemesinde iptal davası yoluna başvurulur ve bu karara karşı temyiz yolu açıktır.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'tahkim yeri bölge adliye mahkemesinde bir ay içinde açılır',
      wrongPhrase: 'tahkim yeri asliye ticaret mahkemesinde iki hafta içinde açılır',
      correctPhrase: 'tahkim yeri bölge adliye mahkemesinde bir ay içinde açılır',
      explanation: 'HMK m. 439 uyarınca hakem kararının iptali davasında görevli merci Asliye Ticaret Mahkemesi değil, doğrudan Bölge Adliye Mahkemesidir ve süre 1 aydır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnızca iptal davası açılabilir',
      wrongPhrase: 'doğrudan Yargıtay’da temyiz yoluna başvurulabilir',
      correctPhrase: 'yalnızca iptal davası açılabilir',
      explanation: 'Hakem kararlarına karşı doğrudan temyiz veya istinaf yoluna gidilemez; yalnızca Bölge Adliye Mahkemesinde iptal davası açılabilir.'
    }
  },
  {
    id: 'rule-hmk-11',
    branch: 'HMK',
    subTopic: 'Yetki Sözleşmesinin Şartları ve Tarafları',
    articleRef: 'M. 17-18',
    trueStatement:
      'Tacirler veya kamu tüzel kişileri, aralarında doğmuş veya doğabilecek bir uyuşmazlık hakkında bir ya da birden fazla mahkemeyi yazılı sözleşmeyle yetkili kılabilirler; gerçek kişiler ise yetki sözleşmesi yapamaz.',
    trueHighlight: ['Tacirler veya kamu tüzel kişileri', 'yazılı sözleşmeyle yetkili kılabilirler', 'gerçek kişiler ise yetki sözleşmesi yapamaz'],
    trueCorrectPhrase: 'yalnızca tacirler ve kamu tüzel kişileri yazılı şekilde yetki sözleşmesi yapabilir',
    baseExplanation: 'HMK m. 17 uyarınca yetki sözleşmesi yalnızca tacirler veya kamu tüzel kişileri arasında yazılı şekilde yapılabilir; adi gerçek kişiler veya tüketiciler yetki sözleşmesi yapamaz.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Tacirler veya kamu tüzel kişileri',
      wrongPhrase: 'Ayırt etme gücüne sahip tüm gerçek ve tüzel kişiler',
      correctPhrase: 'Tacirler veya kamu tüzel kişileri',
      explanation: '6100 sayılı HMK m. 17 ile tacir olmayan gerçek kişilerin yetki sözleşmesi yapma imkânı tamamen kaldırılmıştır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yazılı sözleşmeyle yetkili kılabilirler',
      wrongPhrase: 'herhangi bir şekil şartına bağlı olmaksızın sözlü olarak da yetkili kılabilirler',
      correctPhrase: 'yazılı sözleşmeyle yetkili kılabilirler',
      explanation: 'HMK m. 18/2 uyarınca yetki sözleşmesinin geçerli olabilmesi için yazılı olarak yapılması geçerlilik şartıdır.'
    }
  },
  {
    id: 'rule-hmk-12',
    branch: 'HMK',
    subTopic: 'Görevsizlik ve Yetkisizlik Kararı Üzerine Yapılacak İşlem',
    articleRef: 'M. 20',
    trueStatement:
      'Görevsizlik veya yetkisizlik kararı verilmesi hâlinde, taraflardan birinin bu karar verildiği anda kesin ise tebliğ tarihinden, süresi içinde kanun yoluna başvurulmayarak kesinleşmiş ise kararın kesinleştiği tarihten itibaren iki hafta içinde kararı veren mahkemeye başvurarak dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir.',
    trueHighlight: ['kesinleştiği tarihten itibaren iki hafta içinde', 'kararı veren mahkemeye başvurarak'],
    trueCorrectPhrase: 'iki hafta içinde kararı veren mahkemeden dosyanın gönderilmesi talep edilmelidir',
    baseExplanation: 'HMK m. 20/1 uyarınca 2 haftalık süre içinde başvuru yapılmazsa dava açılmamış sayılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kesinleştiği tarihten itibaren iki hafta içinde',
      wrongPhrase: 'kesinleştiği tarihten itibaren otuz gün içinde',
      correctPhrase: 'kesinleştiği tarihten itibaren iki hafta içinde',
      explanation: 'HMK m. 20’de dosyanın görevli/yetkili mahkemeye gönderilmesini talep süresi 30 gün (İYUK m. 9) değil, 2 haftadır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kararı veren mahkemeye başvurarak dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir',
      wrongPhrase: 'herhangi bir talebe gerek olmaksızın mahkemece dava dosyası re’sen görevli veya yetkili mahkemeye gönderilir',
      correctPhrase: 'kararı veren mahkemeye başvurarak dava dosyasının görevli ya da yetkili mahkemeye gönderilmesini talep etmesi gerekir',
      explanation: 'Hukuk yargılamasında (ceza ve idari yargıdan farklı olarak!) görevsizlik veya yetkisizlik kararından sonra dosya re’sen gönderilmez; 2 hafta içinde talep şarttır.'
    }
  },
  {
    id: 'rule-hmk-13',
    branch: 'HMK',
    subTopic: 'Davanın Açılmamış Sayılması ve Dosyanın İşlemden Kaldırılması',
    articleRef: 'M. 150',
    trueStatement:
      'Usulüne uygun şekilde davet edilmiş olan taraflar duruşmaya gelmedikleri veya gelip de davayı takip etmeyeceklerini bildirdikleri takdirde dosyanın işlemden kaldırılmasına karar verilir; işlemden kaldırıldığı tarihten başlayarak üç ay içinde yenilenmeyen davalar, sürenin dolduğu gün itibarıyla açılmamış sayılır.',
    trueHighlight: ['dosyanın işlemden kaldırılmasına karar verilir', 'işlemden kaldırıldığı tarihten başlayarak üç ay içinde yenilenmeyen davalar'],
    trueCorrectPhrase: 'işlemden kaldırılan dosya 3 ay içinde yenilenmezse dava açılmamış sayılır',
    baseExplanation: 'HMK m. 150 uyarınca işlemden kaldırılan dosya 3 ay içinde yenilenebilir (ilk 1 ay içinde yenilenirse yeniden harç alınmaz); 3 ay dolunca dava açılmamış sayılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'işlemden kaldırıldığı tarihten başlayarak üç ay içinde yenilenmeyen davalar',
      wrongPhrase: 'işlemden kaldırıldığı tarihten başlayarak altı ay içinde yenilenmeyen davalar',
      correctPhrase: 'işlemden kaldırıldığı tarihten başlayarak üç ay içinde yenilenmeyen davalar',
      explanation: 'HMK m. 150/4 uyarınca işlemden kaldırılan dosyanın yenilenme süresi 6 ay değil, 3 aydır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'dosyanın işlemden kaldırılmasına karar verilir',
      wrongPhrase: 'davanın derhâl esastan reddine karar verilir',
      correctPhrase: 'dosyanın işlemden kaldırılmasına karar verilir',
      explanation: 'Tarafların duruşmaya gelmemesi halinde dava esastan reddedilmez; dosya işlemden kaldırılır.'
    }
  },
  {
    id: 'rule-hmk-14',
    branch: 'HMK',
    subTopic: 'Eski Hâle Getirme Süresi ve Şartları',
    articleRef: 'M. 95-96',
    trueStatement:
      'Elde olmayan sebeplerle kanunda belirtilen veya hâkimin kesin olarak belirlediği süre içinde bir işlemi yapamayan kimse, engelin ortadan kalkmasından itibaren iki hafta içinde eski hâle getirme talebinde bulunabilir; ancak aynı işlem için bir kez daha süre verilmesi mümkün ise eski hâle getirme talebinde bulunulamaz.',
    trueHighlight: ['engelin ortadan kalkmasından itibaren iki hafta içinde', 'bir kez daha süre verilmesi mümkün ise eski hâle getirme talebinde bulunulamaz'],
    trueCorrectPhrase: 'engelin ortadan kalkmasından itibaren iki hafta içinde eski hâle getirme istenebilir',
    baseExplanation: 'HMK m. 95 ve m. 96 uyarınca eski hâle getirme süresi engelin kalkmasından itibaren 2 haftadır ve telafisi başka bir usul işlemiyle mümkünse eski hâle getirme istenemez.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'engelin ortadan kalkmasından itibaren iki hafta içinde',
      wrongPhrase: 'engelin ortadan kalkmasından itibaren yedi gün içinde',
      correctPhrase: 'engelin ortadan kalkmasından itibaren iki hafta içinde',
      explanation: 'HMK m. 96/1 (ve 7499 s.K. sonrası CMK m. 41) uyarınca eski hâle getirme talebi süresi 7 gün değil, engelin kalkmasından itibaren 2 haftadır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'aynı işlem için bir kez daha süre verilmesi mümkün ise eski hâle getirme talebinde bulunulamaz',
      wrongPhrase: 'tarafın kendi ağır kusuruyla süreyi kaçırdığı hallerde dahi eski hâle getirme talebinde bulunulabilir',
      correctPhrase: 'aynı işlem için bir kez daha süre verilmesi mümkün ise eski hâle getirme talebinde bulunulamaz',
      explanation: 'Eski hâle getirme ancak elde olmayan (kusursuz) sebeplerle süre kaçırıldığında istenebilir.'
    }
  },
  {
    id: 'rule-hmk-15',
    branch: 'HMK',
    subTopic: 'İhtiyati Tedbir Kararının Uygulanması ve Dava Açma Süresi',
    articleRef: 'M. 393 & 397',
    trueStatement:
      'İhtiyati tedbir kararının uygulanması, bu kararın tedbir isteyen tarafa tefhim veya tebliğinden itibaren bir hafta içinde talep edilmek zorundadır; dava açılmadan önce verilen ihtiyati tedbir kararının uygulanmasını talep ettiği tarihten itibaren iki hafta içinde esas hakkındaki davasını açmak zorundadır.',
    trueHighlight: ['tefhim veya tebliğinden itibaren bir hafta içinde', 'talep ettiği tarihten itibaren iki hafta içinde esas hakkındaki davasını açmak zorundadır'],
    trueCorrectPhrase: 'tedbirin uygulanmasını talep süresi 1 hafta, esas davayı açma süresi ise 2 haftadır',
    baseExplanation: 'HMK m. 393 ve m. 397 uyarınca ihtiyati tedbirde "1 hafta + 2 hafta" kuralı geçerlidir: uygulanmasını talep 1 hafta, esas davayı açma 2 haftadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tefhim veya tebliğinden itibaren bir hafta içinde talep edilmek zorundadır',
      wrongPhrase: 'tefhim veya tebliğinden itibaren on gün içinde talep edilmek zorundadır',
      correctPhrase: 'tefhim veya tebliğinden itibaren bir hafta içinde talep edilmek zorundadır',
      explanation: '10 günlük uygulama süresi İİK’daki "ihtiyati haciz" içindir! HMK m. 393 uyarınca ihtiyati tedbirin uygulanmasını talep süresi 1 haftadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'talep ettiği tarihten itibaren iki hafta içinde esas hakkındaki davasını açmak zorundadır',
      wrongPhrase: 'talep ettiği tarihten itibaren yedi gün içinde esas hakkındaki davasını açmak zorundadır',
      correctPhrase: 'talep ettiği tarihten itibaren iki hafta içinde esas hakkındaki davasını açmak zorundadır',
      explanation: '7 günlük tamamlama süresi ihtiyati hacizdedir; ihtiyati tedbirde esas davayı açma süresi HMK m. 397 uyarınca 2 haftadır!'
    }
  },
  {
    id: 'rule-hmk-16',
    branch: 'HMK',
    subTopic: 'Islah Giderleri ve Tamamen Islahta Yeni Dilekçe Süresi',
    articleRef: 'M. 178-180',
    trueStatement:
      'Islah eden taraf, ıslah sebebiyle geçersiz hâle gelen işlemler için yapılan yargılama giderleri ile karşı tarafın zararını karşılamak üzere hâkimin takdir edeceği teminatı bir hafta içinde mahkeme veznesine yatırmak zorundadır; davasını tamamen ıslah eden davacı da bu bildirimden itibaren bir hafta içinde yeni bir dava dilekçesi vermek zorundadır.',
    trueHighlight: ['teminatı bir hafta içinde mahkeme veznesine yatırmak zorundadır', 'bildirimden itibaren bir hafta içinde yeni bir dava dilekçesi vermek zorundadır'],
    trueCorrectPhrase: 'ıslah teminatını yatırma ve tamamen ıslahta yeni dava dilekçesi verme süresi 1 haftadır',
    baseExplanation: 'HMK m. 178 ve m. 180 uyarınca ıslah teminatını yatırma ve tamamen ıslahta yeni dava dilekçesi verme süresi 1 haftadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bildirimden itibaren bir hafta içinde yeni bir dava dilekçesi vermek zorundadır',
      wrongPhrase: 'bildirimden itibaren iki hafta içinde yeni bir dava dilekçesi vermek zorundadır',
      correctPhrase: 'bildirimden itibaren bir hafta içinde yeni bir dava dilekçesi vermek zorundadır',
      explanation: 'HMK m. 180 uyarınca tamamen ıslahta yeni dava dilekçesi verme süresi 2 hafta değil, 1 haftadır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'teminatı bir hafta içinde mahkeme veznesine yatırmak zorundadır',
      wrongPhrase: 'teminatı hüküm kesinleşinceye kadar dilediği zaman mahkeme veznesine yatırabilir',
      correctPhrase: 'teminatı bir hafta içinde mahkeme veznesine yatırmak zorundadır',
      explanation: 'Islah teminatı 1 hafta içinde yatırılmazsa ıslah yapılmamış sayılır.'
    }
  },
  {
    id: 'rule-hmk-17',
    branch: 'HMK',
    subTopic: 'Bilirkişi Raporuna İtiraz Süresi',
    articleRef: 'M. 281',
    trueStatement:
      'Taraflar, bilirkişi raporunun kendilerine tebliği tarihinden itibaren iki hafta içinde, raporda eksik gördükleri hususların bilirkişiye tamamlattırılmasını veya yeni bilirkişi atanmasını mahkemeden talep edebilirler.',
    trueHighlight: ['tebliği tarihinden itibaren iki hafta içinde', 'mahkemeden talep edebilirler'],
    trueCorrectPhrase: 'bilirkişi raporuna itiraz süresi tebliğden itibaren 2 haftadır',
    baseExplanation: 'HMK m. 281/1 uyarınca bilirkişi raporuna itiraz süresi raporun tebliğinden itibaren 2 haftadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliği tarihinden itibaren iki hafta içinde',
      wrongPhrase: 'tefhim tarihinden itibaren bir hafta içinde',
      correctPhrase: 'tebliği tarihinden itibaren iki hafta içinde',
      explanation: 'Bilirkişi raporuna itiraz süresi tefhimden 1 hafta değil, raporun tebliğinden itibaren 2 haftadır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'mahkemeden talep edebilirler',
      wrongPhrase: 'doğrudan bilirkişi bölge kurulundan talep edebilirler',
      correctPhrase: 'mahkemeden talep edebilirler',
      explanation: 'Ek rapor veya yeni bilirkişi görevlendirilmesi bilirkişi bölge kurulundan değil, davaya bakan mahkemeden talep edilir.'
    }
  },
  {
    id: 'rule-hmk-18',
    branch: 'HMK',
    subTopic: 'Feragat ve Kabulün Zamanı ve Etkisi',
    articleRef: 'M. 307-311',
    trueStatement:
      'Davadan feragat ve davayı kabul, hüküm kesinleşinceye kadar her zaman yapılabilir; feragat ve kabul kayıtsız ve şartsız olmalı ve kesin hüküm gibi hukuki sonuç doğurmalıdır.',
    trueHighlight: ['hüküm kesinleşinceye kadar her zaman yapılabilir', 'kayıtsız ve şartsız olmalı ve kesin hüküm gibi hukuki sonuç doğurmalıdır'],
    trueCorrectPhrase: 'feragat ve kabul hüküm kesinleşinceye kadar şartsız olarak yapılabilir ve karşı tarafın muvafakatine bağlı değildir',
    baseExplanation: 'HMK m. 309-311 uyarınca feragat ve kabul tek taraflı usul işlemleridir, karşı tarafın veya mahkemenin kabulüne bağlı değildir ve hüküm kesinleşinceye kadar (kanun yolu aşamasında dahi) yapılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hüküm kesinleşinceye kadar her zaman yapılabilir',
      wrongPhrase: 'yalnızca ilk derece mahkemesinde tahkikat sona erinceye kadar yapılabilir',
      correctPhrase: 'hüküm kesinleşinceye kadar her zaman yapılabilir',
      explanation: 'Tahkikatın sona ermesi "ıslah" için üst sınırdır; feragat ve kabul ise hüküm kesinleşinceye kadar (istinaf ve temyiz aşamasında dahi) yapılabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kayıtsız ve şartsız olmalı ve kesin hüküm gibi hukuki sonuç doğurmalıdır',
      wrongPhrase: 'ancak karşı tarafın açık muvafakati ve mahkemenin onayı ile hukuki sonuç doğurabilir',
      correctPhrase: 'kayıtsız ve şartsız olmalı ve kesin hüküm gibi hukuki sonuç doğurmalıdır',
      explanation: 'Davadan feragat (ve kabul), davayı geri almadan farklı olarak karşı tarafın muvafakatine bağlı değildir!'
    }
  },
  {
    id: 'rule-hmk-19',
    branch: 'HMK',
    subTopic: 'Yargılamanın İadesi Süresi ve Mercii',
    articleRef: 'M. 377-378',
    trueStatement:
      'Yargılamanın iadesi talebi, kanunda yazılı sebeplerin öğrenildiği tarihten itibaren üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıl içinde, hükmü veren mahkemeye dilekçeyle yapılır.',
    trueHighlight: ['öğrenildiği tarihten itibaren üç ay', 'kesinleşmesinden itibaren on yıl içinde', 'hükmü veren mahkemeye dilekçeyle yapılır'],
    trueCorrectPhrase: 'öğrenmeden itibaren 3 ay ve her hâlde kesinleşmeden itibaren 10 yıl içinde hükmü veren mahkemeden istenir',
    baseExplanation: 'HMK m. 377 ve m. 378 uyarınca yargılamanın iadesi süresi genel olarak 3 ay ve her hâlde 10 yıldır; inceleme üst mahkemede değil, bizzat hükmü veren mahkemede yapılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrenildiği tarihten itibaren üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıl içinde',
      wrongPhrase: 'öğrenildiği tarihten itibaren bir ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren beş yıl içinde',
      correctPhrase: 'öğrenildiği tarihten itibaren üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıl içinde',
      explanation: 'HMK m. 377 uyarınca yargılamanın iadesi süresi 1 ay ve 5 yıl değil, öğrenmeden itibaren 3 ay ve her hâlde kesinleşmeden itibaren 10 yıldır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'hükmü veren mahkemeye dilekçeyle yapılır',
      wrongPhrase: 'doğrudan Yargıtay’ın ilgili hukuk dairesine dilekçeyle yapılır',
      correctPhrase: 'hükmü veren mahkemeye dilekçeyle yapılır',
      explanation: 'Yargılamanın iadesi olağanüstü bir kanun yolu olmasına rağmen Yargıtay’dan değil, kararı veren mahkemeden talep edilir.'
    }
  },
  {
    id: 'rule-hmk-20',
    branch: 'HMK',
    subTopic: 'İlk İtirazların Kapsamı ve İleri Sürülme Zamanı',
    articleRef: 'M. 116-117',
    trueStatement:
      'Hukuk Muhakemeleri Kanunu’na göre ilk itirazlar yalnızca kesin olmayan yetki itirazı ile uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından ibarettir; ilk itirazların hepsi cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez.',
    trueHighlight: ['yalnızca kesin olmayan yetki itirazı ile uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından ibarettir', 'cevap dilekçesinde ileri sürülmek zorundadır'],
    trueCorrectPhrase: 'ilk itirazlar yalnızca kesin olmayan yetki ve tahkim itirazıdır; mutlaka cevap dilekçesinde ileri sürülmelidir',
    baseExplanation: 'HMK m. 116 uyarınca sadece 2 adet ilk itiraz vardır: kesin olmayan yetki ve tahkim itirazı (işbölümü itirazı kaldırılmıştır!). Zamanaşımı ve hak düşürücü süre ilk itiraz değildir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yalnızca kesin olmayan yetki itirazı ile uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından ibarettir',
      wrongPhrase: 'kesin olmayan yetki, tahkim, zamanaşımı ve derdestlik itirazlarından ibarettir',
      correctPhrase: 'yalnızca kesin olmayan yetki itirazı ile uyuşmazlığın tahkim yoluyla çözümlenmesi gerektiği itirazından ibarettir',
      explanation: 'Derdestlik bir "dava şartı"dır (HMK m. 114), zamanaşımı ise maddi hukuka ilişkin bir "def’i"dir; HMK m. 116’da yalnızca kesin olmayan yetki ve tahkim ilk itiraz olarak sayılmıştır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez',
      wrongPhrase: 'tahkikat sona erinceye kadar her aşamada ileri sürülebilir ve hâkimce re’sen gözetilir',
      correctPhrase: 'cevap dilekçesinde ileri sürülmek zorundadır, aksi hâlde dinlenmez',
      explanation: 'İlk itirazlar hâkimce re’sen gözetilmez ve cevap dilekçesinde ileri sürülmezse (cevap dilekçesi süresi kaçırılırsa ıslahla dahi) ileri sürülemez!'
    }
  },

  // =========================================================================
  // 2. CMK & TCK (CEZA VE CEZA MUHAKEMESİ HUKUKU)
  // =========================================================================
  {
    id: 'rule-cmk-1',
    branch: 'CMK',
    subTopic: 'Tutuklulukta Azami Süreler (Soruşturma Evresi)',
    articleRef: 'M. 102/4',
    trueStatement:
      'Soruşturma evresinde tutukluluk süresi, ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez.',
    trueHighlight: ['Soruşturma evresinde tutukluluk süresi', 'altı ayı', 'bir yılı geçemez'],
    trueCorrectPhrase: 'soruşturma evresinde asliye cezada 6 ayı, ağır cezada 1 yılı geçemez',
    baseExplanation: 'CMK m. 102/4 uyarınca soruşturma evresinde tutukluluk süresi ağır cezalık olmayan işlerde en çok 6 ay, ağır cezalık işlerde en çok 1 yıldır (terör ve katalog suçlarda 1 yıl + 6 ay uzatma mümkündür).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez',
      wrongPhrase: 'ağır ceza mahkemesinin görevine girmeyen işler bakımından bir yılı, ağır ceza mahkemesinin görevine giren işler bakımından ise iki yılı geçemez',
      correctPhrase: 'ağır ceza mahkemesinin görevine girmeyen işler bakımından altı ayı, ağır ceza mahkemesinin görevine giren işler bakımından ise bir yılı geçemez',
      explanation: '1 yıl ve 2 yıllık süreler kovuşturma evresindeki temel tutukluluk süreleridir; soruşturma evresinde bu sınırlar 6 ay ve 1 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Soruşturma evresinde tutukluluk süresi',
      wrongPhrase: 'Kovuşturma evresinde toplam tutukluluk süresi',
      correctPhrase: 'Soruşturma evresinde tutukluluk süresi',
      explanation: '6 ay ve 1 yıllık azami tutukluluk sınırları kovuşturma evresine değil, soruşturma evresine (CMK m. 102/4) aittir.'
    }
  },
  {
    id: 'rule-cmk-2',
    branch: 'CMK',
    subTopic: 'Tutukluluğun İncelenmesi Süresi',
    articleRef: 'M. 108',
    trueStatement:
      'Soruşturma evresinde şüphelinin tutukevinde bulunduğu süre içinde ve en geç otuzar günlük süreler itibarıyla tutukluluk hâlinin devamının gerekip gerekmeyeceği hususunda sulh ceza hâkimi tarafından karar verilir.',
    trueHighlight: ['en geç otuzar günlük süreler itibarıyla', 'sulh ceza hâkimi tarafından karar verilir'],
    trueCorrectPhrase: 'en geç otuzar günlük sürelerle sulh ceza hâkimi tarafından incelenir',
    baseExplanation: 'CMK m. 108/1 uyarınca soruşturma ve kovuşturma evrelerinde tutukluluk incelemesi en geç 30’ar günlük sürelerle yapılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç otuzar günlük süreler itibarıyla',
      wrongPhrase: 'en geç altmışar günlük süreler itibarıyla',
      correctPhrase: 'en geç otuzar günlük süreler itibarıyla',
      explanation: 'CMK m. 108 uyarınca tutukluluğun gözden geçirilmesi süresi 60 gün değil, en geç 30 gündür.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'sulh ceza hâkimi tarafından karar verilir',
      wrongPhrase: 'Cumhuriyet başsavcısı tarafından re’sen karar verilir',
      correctPhrase: 'sulh ceza hâkimi tarafından karar verilir',
      explanation: 'Soruşturma evresinde tutukluluğun devamına Cumhuriyet savcısı değil, savcının istemi üzerine Sulh Ceza Hâkimi karar verir (ancak savcı re’sen tahliye edebilir).'
    }
  },
  {
    id: 'rule-cmk-3',
    branch: 'CMK',
    subTopic: 'Taşınmazlara, Hak ve Alacaklara Elkoyma',
    articleRef: 'M. 128',
    trueStatement:
      'Soruşturma veya kovuşturma konusu suçun işlendiğine ve bu suçlardan elde edildiğine dair kuvvetli şüphe sebebi bulunan hallerde şüpheli veya sanığa ait taşınmazlara, banka hesaplarına ve alacaklara elkoyma kararı yalnızca hâkim veya mahkeme tarafından verilebilir.',
    trueHighlight: ['taşınmazlara, banka hesaplarına ve alacaklara elkoyma kararı', 'yalnızca hâkim veya mahkeme tarafından verilebilir'],
    trueCorrectPhrase: 'taşınmaz, hak ve alacaklara elkoymaya yalnızca hâkim veya mahkeme karar verir',
    baseExplanation: 'CMK m. 128 uyarınca taşınmazlara, hak ve alacaklara elkoyma tedbirinde gecikmesinde sakınca bulunan hallerde dahi Cumhuriyet savcısı karar veremez; mutlaka hâkim veya mahkeme kararı gerekir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnızca hâkim veya mahkeme tarafından verilebilir',
      wrongPhrase: 'gecikmesinde sakınca bulunan hallerde Cumhuriyet savcısı veya kolluk amirinin yazılı emriyle verilebilir',
      correctPhrase: 'yalnızca hâkim veya mahkeme tarafından verilebilir',
      explanation: 'CMK m. 128 kapsamındaki taşınmazlara, hak ve alacaklara elkoymada gecikmesinde sakınca bulunan hallerde dahi Cumhuriyet savcısı veya kolluk amiri karar veremez; yalnızca hâkim kararı gerekir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kuvvetli şüphe sebebi bulunan hallerde',
      wrongPhrase: 'basit başlangıç şüphesi bulunan tüm kabahat ve suçlarda',
      correctPhrase: 'kuvvetli şüphe sebebi bulunan hallerde',
      explanation: 'CMK m. 128’deki elkoyma tedbiri için basit şüphe yetmez; katalog suçların işlendiğine dair somut delillere dayanan kuvvetli şüphe sebepleri şarttır.'
    }
  },
  {
    id: 'rule-cmk-4',
    branch: 'CMK',
    subTopic: 'İletişimin Tespiti, Dinlenmesi ve Kayda Alınması',
    articleRef: 'M. 135',
    trueStatement:
      'İletişimin dinlenmesi ve kayda alınması kararı, kuvvetli şüphe sebeplerinin varlığı ve başka suretle delil elde edilmesi imkânının bulunmaması durumunda hâkim veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilebilir; savcı kararını derhâl hâkimin onayına sunar ve hâkim kararını en geç yirmi dört saat içinde verir.',
    trueHighlight: ['gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilebilir', 'en geç yirmi dört saat içinde verir'],
    trueCorrectPhrase: 'hâkim veya gecikmesinde sakınca bulunan hallerde Cumhuriyet savcısı karar verir ve hâkim 24 saat içinde onaylar',
    baseExplanation: 'CMK m. 135/1 uyarınca iletişimin dinlenmesi kararını soruşturmada Sulh Ceza Hâkimi (gecikmesinde sakınca varsa C. Savcısı) verir ve 24 saat içinde hâkim onayına sunulur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en geç yirmi dört saat içinde verir',
      wrongPhrase: 'en geç kırk sekiz saat içinde verir',
      correctPhrase: 'en geç yirmi dört saat içinde verir',
      explanation: 'CMK m. 135/1 uyarınca Cumhuriyet savcısının verdiği dinleme kararını hâkim 48 saat değil, en geç 24 saat içinde karara bağlar.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilebilir',
      wrongPhrase: 'gecikmesinde sakınca bulunan hâllerde kolluk amiri tarafından verilebilir',
      correctPhrase: 'gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilebilir',
      explanation: 'İletişimin dinlenmesinde kolluk amirinin gecikmesinde sakınca bulunan hallerde dahi karar verme yetkisi yoktur.'
    }
  },
  {
    id: 'rule-cmk-5',
    branch: 'CMK',
    subTopic: 'Basit Yargılama Usulüne İtiraz ve İndirim Oranı',
    articleRef: 'M. 251-252',
    trueStatement:
      'Asliye ceza mahkemesince basit yargılama usulü uygulanarak sonuçlandırılan dosyalarda mahkûmiyet kararı verildiği takdirde sonuç ceza dörtte bir oranında indirilir; bu hükümlere karşı itiraz edilebilir ve süresinde itiraz edilmesi hâlinde hükmü veren mahkemece duruşma açılır.',
    trueHighlight: ['sonuç ceza dörtte bir oranında indirilir', 'bu hükümlere karşı itiraz edilebilir'],
    trueCorrectPhrase: 'basit yargılamada sonuç ceza 1/4 oranında indirilir ve hükme karşı itiraz yoluna gidilir',
    baseExplanation: 'CMK m. 251 ve m. 252 uyarınca basit yargılama usulünde sonuç ceza 1/4 oranında indirilir (seri muhakemedeki 1/2 indirimiyle karıştırılmamalıdır!) ve karara karşı itiraz edilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'bu hükümlere karşı itiraz edilebilir',
      wrongPhrase: 'bu hükümlere karşı doğrudan bölge adliye mahkemesine istinaf başvurusu yapılabilir',
      correctPhrase: 'bu hükümlere karşı itiraz edilebilir',
      explanation: 'Basit yargılama usulünde ilk aşamada verilen karara karşı doğrudan istinaf değil, itiraz yoluna başvurulur; itiraz üzerine açılan duruşmada verilen karara karşı genel hükümlere göre kanun yoluna gidilir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sonuç ceza dörtte bir oranında indirilir',
      wrongPhrase: 'sonuç ceza yarı oranında indirilir',
      correctPhrase: 'sonuç ceza dörtte bir oranında indirilir',
      explanation: 'Yarı oranında (1/2) ceza indirimi "seri muhakeme usulü" (CMK m. 250) içindir; "basit yargılama usulü"nde (CMK m. 251) indirim oranı 1/4’tür!'
    }
  },
  {
    id: 'rule-cmk-6',
    branch: 'CMK',
    subTopic: 'Kovuşturmaya Yer Olmadığına Dair Karara İtiraz',
    articleRef: 'M. 173',
    trueStatement:
      'Suçtan zarar gören, kovuşturmaya yer olmadığına dair kararın (KYOK) kendisine tebliğ edildiği tarihten itibaren iki hafta içinde, bu kararı veren Cumhuriyet savcısının yargı çevresinde görev yaptığı ağır ceza mahkemesinin bulunduğu yerdeki sulh ceza hâkimliğine itiraz edebilir.',
    trueHighlight: ['tebliğ edildiği tarihten itibaren iki hafta içinde', 'sulh ceza hâkimliğine itiraz edebilir'],
    trueCorrectPhrase: 'tebliğden itibaren iki hafta içinde sulh ceza hâkimliğine itiraz edebilir',
    baseExplanation: 'CMK m. 173/1 (7499 s.K. değişikliğiyle) uyarınca KYOK kararlarına karşı suçtan zarar gören tebliğden itibaren 2 hafta içinde Sulh Ceza Hâkimliğine itiraz edebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğ edildiği tarihten itibaren iki hafta içinde',
      wrongPhrase: 'tebliğ edildiği tarihten itibaren on beş gün içinde',
      correctPhrase: 'tebliğ edildiği tarihten itibaren iki hafta içinde',
      explanation: '7499 sayılı 8. Yargı Paketi ile CMK m. 173/1’deki KYOK kararlarına itiraz süresi "on beş gün"den "iki hafta"ya dönüştürülmüştür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'sulh ceza hâkimliğine itiraz edebilir',
      wrongPhrase: 'ağır ceza mahkemesi başkanlığına itiraz edebilir',
      correctPhrase: 'sulh ceza hâkimliğine itiraz edebilir',
      explanation: '6545 sayılı Kanun sonrasında KYOK kararlarına itiraz mercii Ağır Ceza Mahkemesi Başkanlığı değil, Sulh Ceza Hâkimliğidir.'
    }
  },
  {
    id: 'rule-cmk-7',
    branch: 'CMK',
    subTopic: 'İddianamenin İadesi Süresi ve Kanun Yolu',
    articleRef: 'M. 174',
    trueStatement:
      'Mahkeme tarafından, iddianamenin ve soruşturma evrakının verildiği tarihten itibaren on beş gün içinde soruşturma evresiyle ilgili tüm belgeler incelendikten sonra, eksik veya hatalı noktalar belirtilmek suretiyle iddianamenin Cumhuriyet Başsavcılığına iadesine karar verilebilir; on beş günlük süre sonunda iade edilmeyen iddianame kabul edilmiş sayılır ve iade kararına karşı yalnızca Cumhuriyet savcısı itiraz edebilir.',
    trueHighlight: ['on beş gün içinde', 'yalnızca Cumhuriyet savcısı itiraz edebilir'],
    trueCorrectPhrase: '15 gün içinde iade edilmeyen iddianame kabul edilmiş sayılır ve iade kararına yalnızca C. savcısı itiraz edebilir',
    baseExplanation: 'CMK m. 174 uyarınca iddianamenin değerlendirilmesi süresi 15 gündür ve iade kararına şüpheli veya müşteki değil, yalnızca Cumhuriyet savcısı itiraz edebilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yalnızca Cumhuriyet savcısı itiraz edebilir',
      wrongPhrase: 'Cumhuriyet savcısı ile birlikte şüpheli müdafii ve suçtan zarar gören vekili de itiraz edebilir',
      correctPhrase: 'yalnızca Cumhuriyet savcısı itiraz edebilir',
      explanation: 'CMK m. 174/5 uyarınca iddianamenin iadesi kararına karşı yalnızca Cumhuriyet savcısı itiraz edebilir; şüpheli veya katılanın itiraz hakkı yoktur.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on beş gün içinde soruşturma evresiyle ilgili tüm belgeler incelendikten sonra',
      wrongPhrase: 'otuz gün içinde soruşturma evresiyle ilgili tüm belgeler incelendikten sonra',
      correctPhrase: 'on beş gün içinde soruşturma evresiyle ilgili tüm belgeler incelendikten sonra',
      explanation: 'CMK m. 174/1 uyarınca mahkemenin iddianameyi inceleme ve iade etme süresi 30 gün değil, 15 gündür.'
    }
  },
  {
    id: 'rule-cmk-8',
    branch: 'CMK',
    subTopic: 'Seri Muhakeme Usulü Uygulama Şartları',
    articleRef: 'M. 250',
    trueStatement:
      'Soruşturma evresi sonunda katalogda yer alan suçlarla ilgili olarak kamu davasının açılmasının ertelenmesine karar verilmediği takdirde seri muhakeme usulü uygulanır; Cumhuriyet savcısı tarafından yarı oranında indirilerek belirlenen yaptırım şüphelinin müdafii huzurunda teklif edilir ve mahkemece kurulan hükme karşı itiraz edilebilir.',
    trueHighlight: ['yarı oranında indirilerek belirlenen yaptırım', 'şüphelinin müdafii huzurunda teklif edilir', 'mahkemece kurulan hükme karşı itiraz edilebilir'],
    trueCorrectPhrase: 'müdafi huzurunda kabul şarttır, ceza 1/2 indirilir ve seri muhakeme hükmüne karşı itiraz yoluna başvurulabilir',
    baseExplanation: 'CMK m. 250 uyarınca seri muhakeme usulünde zorunlu müdafilik vardır, ceza 1/2 oranında indirilir ve mahkemece verilen hükme karşı itiraz yoluna gidilebilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'şüphelinin müdafii huzurunda teklif edilir',
      wrongPhrase: 'müdafi bulunmaksızın doğrudan şüphelinin kendisine teklif edilir',
      correctPhrase: 'şüphelinin müdafii huzurunda teklif edilir',
      explanation: 'CMK m. 250/3 uyarınca seri muhakeme usulünün uygulanabilmesi için teklifin kabulünün mutlaka müdafi huzurunda yapılması zorunludur.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'mahkemece kurulan hükme karşı itiraz edilebilir',
      wrongPhrase: 'mahkemece kurulan hüküm kesin olup hiçbir kanun yoluna başvurulamaz',
      correctPhrase: 'mahkemece kurulan hükme karşı itiraz edilebilir',
      explanation: 'CMK m. 250/14 uyarınca seri muhakeme usulünde mahkemece kurulan hükme karşı itiraz yoluna başvurulabilir.'
    }
  },
  {
    id: 'rule-cmk-9',
    branch: 'CMK',
    subTopic: 'Eski Hâle Getirme ve Kanun Yolları Süre Eşitlemesi (8. Yargı Paketi)',
    articleRef: 'M. 41 & 268 & 273 & 291',
    trueStatement:
      '7499 sayılı Kanun değişiklikleri uyarınca Ceza Muhakemesi Kanunu’nda eski hâle getirme istemi, itiraz, istinaf ve temyiz başvurularının tamamında kanuni başvuru süresi iki haftadır ve istinaf ile temyiz süreleri hükmün gerekçesiyle birlikte tebliğ edildiği tarihten itibaren başlar.',
    trueHighlight: ['kanuni başvuru süresi iki haftadır', 'gerekçesiyle birlikte tebliğ edildiği tarihten itibaren başlar'],
    trueCorrectPhrase: 'CMK’da eski hâle getirme, itiraz, istinaf ve temyiz sürelerinin tamamı 2 haftadır ve tebliğden başlar',
    baseExplanation: '1 Haziran 2024’te yürürlüğe giren 7499 sayılı 8. Yargı Paketi ile CMK’daki eski 7 günlük ve 15 günlük kanun yolu sürelerinin tamamı 2 haftaya eşitlenmiş ve tefhimden başlama kuralı kaldırılarak gerekçeli kararın tebliği esas alınmıştır!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kanuni başvuru süresi iki haftadır',
      wrongPhrase: 'itiraz ve istinafta yedi gün, temyizde ise on beş gündür',
      correctPhrase: 'kanuni başvuru süresi iki haftadır',
      explanation: '7499 sayılı Kanun ile 7 gün (itiraz/istinaf) ve 15 gün (temyiz) ayrımı kaldırılmış; tamamı 2 hafta olarak birleştirilmiştir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'gerekçesiyle birlikte tebliğ edildiği tarihten itibaren başlar',
      wrongPhrase: 'sanığın yüzüne karşı tefhim edildiği (okunduğu) tarihten itibaren başlar',
      correctPhrase: 'gerekçesiyle birlikte tebliğ edildiği tarihten itibaren başlar',
      explanation: '7499 sayılı Kanun değişikliğiyle CMK m. 273 ve m. 291’de istinaf ve temyiz sürelerinin tefhimle başlaması kuralı kaldırılmış; süreler gerekçeli kararın tebliğinden itibaren işlemeye başlamaktadır!'
    }
  },
  {
    id: 'rule-cmk-10',
    branch: 'CMK',
    subTopic: 'Gizli Soruşturmacı ve Teknik Araçlarla İzleme Karar Mercii',
    articleRef: 'M. 139-140',
    trueStatement:
      'Soruşturma konusu suçun işlendiği hususunda somut delillere dayanan kuvvetli şüphe sebeplerinin bulunması ve başka suretle delil elde edilememesi hâlinde, gizli soruşturmacı görevlendirilmesine ve teknik araçlarla izlemeye ağır ceza mahkemesince oybirliğiyle karar verilir.',
    trueHighlight: ['somut delillere dayanan kuvvetli şüphe sebeplerinin bulunması', 'ağır ceza mahkemesince oybirliğiyle karar verilir'],
    trueCorrectPhrase: 'gizli soruşturmacı ve teknik araçlarla izlemeye ağır ceza mahkemesi oybirliğiyle karar verir',
    baseExplanation: 'CMK m. 139 ve m. 140 uyarınca gizli soruşturmacı görevlendirilmesi ve teknik araçlarla izleme kararları Ağır Ceza Mahkemesince oybirliğiyle verilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ağır ceza mahkemesince oybirliğiyle karar verilir',
      wrongPhrase: 'Cumhuriyet savcısı veya sulh ceza hâkimi tarafından tek başına karar verilir',
      correctPhrase: 'ağır ceza mahkemesince oybirliğiyle karar verilir',
      explanation: 'CMK m. 139 ve m. 140 uyarınca gizli soruşturmacı ve teknik takip kararlarını Sulh Ceza Hâkimi veya savcı veremez; Ağır Ceza Mahkemesinin oybirliği şarttır.'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'ağır ceza mahkemesince oybirliğiyle karar verilir',
      wrongPhrase: 'ağır ceza mahkemesince oyçokluğuyla karar verilir',
      correctPhrase: 'ağır ceza mahkemesince oybirliğiyle karar verilir',
      explanation: 'Ağır ceza mahkemesinin bu koruma tedbirlerine karar verebilmesi için oyçokluğu yetmez; oybirliği aranır.'
    }
  },
  {
    id: 'rule-cmk-11',
    branch: 'CMK',
    subTopic: 'Kamu Davasının Açılmasının Ertelenmesi (KDAE) Süresi',
    articleRef: 'M. 171',
    trueStatement:
      'Cumhuriyet savcısı, üst sınırı üç yıl veya daha az süreli hapis cezasını gerektiren suçlardan dolayı yeterli şüphe olmasına rağmen kanundaki şartların varlığı hâlinde kamu davasının açılmasının beş yıl süreyle ertelenmesine karar verebilir; suçtan zarar gören veya şüpheli bu karara karşı tebliğden itibaren iki hafta içinde sulh ceza hâkimliğine itiraz edebilir.',
    trueHighlight: ['üst sınırı üç yıl veya daha az süreli hapis cezasını gerektiren', 'beş yıl süreyle ertelenmesine', 'tebliğden itibaren iki hafta içinde sulh ceza hâkimliğine itiraz edebilir'],
    trueCorrectPhrase: 'üst sınırı 3 yıl veya daha az hapiste 5 yıl süreyle KDAE kararı verilebilir (çocuklarda 3 yıl) ve 2 hafta içinde sulh ceza hâkimliğine itiraz edilir',
    baseExplanation: 'CMK m. 171 uyarınca KDAE üst sınırı 3 yıl (uzlaştırma ve önödeme hariç), erteleme süresi 5 yıl (18 yaş altı çocuklarda 3 yıl) ve itiraz süresi (7499 s.K. ile) 2 haftadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıl süreyle ertelenmesine karar verebilir',
      wrongPhrase: 'iki yıl süreyle ertelenmesine karar verebilir',
      correctPhrase: 'beş yıl süreyle ertelenmesine karar verebilir',
      explanation: 'CMK m. 171 uyarınca yetişkinler bakımından kamu davasının açılmasının ertelenmesi süresi 2 yıl değil, 5 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğden itibaren iki hafta içinde sulh ceza hâkimliğine itiraz edebilir',
      wrongPhrase: 'tebliğden itibaren on beş gün içinde ağır ceza mahkemesine itiraz edebilir',
      correctPhrase: 'tebliğden itibaren iki hafta içinde sulh ceza hâkimliğine itiraz edebilir',
      explanation: '7499 sayılı Kanun ile CMK m. 171/2’deki 15 günlük itiraz süresi 2 haftaya dönüştürülmüştür ve merci Sulh Ceza Hâkimliğidir.'
    }
  },
  {
    id: 'rule-tck-1',
    branch: 'TCK',
    subTopic: 'Kısa Süreli Hapis Cezası Tanımı',
    articleRef: 'M. 49/2',
    trueStatement:
      'Türk Ceza Kanunu’na göre hükmedilen bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır ve suçlunun kişiliğine göre seçenek yaptırımlara çevrilebilir.',
    trueHighlight: ['hükmedilen bir yıl veya daha az süreli hapis cezası', 'kısa süreli hapis cezasıdır'],
    trueCorrectPhrase: 'bir yıl veya daha az süreli hapis cezası kısa süreli hapis cezasıdır',
    baseExplanation: 'TCK m. 49/2 uyarınca kısa süreli hapis cezası üst sınırı 1 yıldır (1 yıl dahil). TCK m. 51’deki erteleme üst sınırı olan 2 yıl ile karıştırılmamalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hükmedilen bir yıl veya daha az süreli hapis cezası',
      wrongPhrase: 'hükmedilen iki yıl veya daha az süreli hapis cezası',
      correctPhrase: 'hükmedilen bir yıl veya daha az süreli hapis cezası',
      explanation: '2 yıl veya daha az süreli hapis cezası "erteleme" (TCK m. 51) ve "HAGB" (CMK m. 231) sınırıdır; "kısa süreli hapis cezası" (TCK m. 49/2) sınırı ise 1 yıl veya daha azdır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'suçlunun kişiliğine göre seçenek yaptırımlara çevrilebilir',
      wrongPhrase: 'hiçbir surette adli para cezasına veya seçenek yaptırımlara çevrilemez',
      correctPhrase: 'suçlunun kişiliğine göre seçenek yaptırımlara çevrilebilir',
      explanation: 'TCK m. 50/1 uyarınca kısa süreli hapis cezası, suçlunun kişiliğine, sosyal ve ekonomik durumuna ve pişmanlığına göre adlî para cezasına veya diğer seçenek yaptırımlara çevrilebilir.'
    }
  },
  {
    id: 'rule-tck-2',
    branch: 'TCK',
    subTopic: 'Tekerrür Süreleri',
    articleRef: 'M. 58/2',
    trueStatement:
      'Beş yıldan fazla süreyle hapis cezasına mahkûmiyet hâlinde bu cezanın infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adlî para cezasına mahkûmiyet hâlinde ise cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra işlenen suçlar dolayısıyla tekerrür hükümleri uygulanmaz.',
    trueHighlight: ['infaz edildiği tarihten itibaren beş yıl', 'cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra'],
    trueCorrectPhrase: 'infaz tarihinden itibaren 5 yıldan fazla hapiste 5 yıl, 5 yıl veya daha az hapis/adli para cezasında 3 yıl',
    baseExplanation: 'TCK m. 58/2 uyarınca tekerrür süreleri hükmün kesinleşmesinden değil, cezanın infaz edildiği tarihten itibaren başlar ve 5 yıl / 3 yıl olarak uygulanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra',
      wrongPhrase: 'hükmün kesinleştiği tarihten itibaren üç yıl geçtikten sonra',
      correctPhrase: 'cezanın infaz edildiği tarihten itibaren üç yıl geçtikten sonra',
      explanation: 'Tekerrürde 3 ve 5 yıllık süreler önceki mahkûmiyetin kesinleştiği tarihten değil, cezanın infaz edildiği tarihten itibaren işlemeye başlar!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adlî para cezasına mahkûmiyet hâlinde ise cezanın infaz edildiği tarihten itibaren üç yıl',
      wrongPhrase: 'infaz edildiği tarihten itibaren on yıl, beş yıl veya daha az süreli hapis ya da adlî para cezasına mahkûmiyet hâlinde ise cezanın infaz edildiği tarihten itibaren beş yıl',
      correctPhrase: 'infaz edildiği tarihten itibaren beş yıl, beş yıl veya daha az süreli hapis ya da adlî para cezasına mahkûmiyet hâlinde ise cezanın infaz edildiği tarihten itibaren üç yıl',
      explanation: 'TCK m. 58/2’de tekerrür süreleri 10 ve 5 yıl değil, 5 yıl ve 3 yıldır.'
    }
  },
  {
    id: 'rule-tck-3',
    branch: 'TCK',
    subTopic: 'Sağır ve Dilsizlerde Ceza Sorumluluğu',
    articleRef: 'M. 33',
    trueStatement:
      'Türk Ceza Kanunu’na göre fiili işlediği sırada on beş yaşını doldurmamış olan sağır ve dilsizlerin ceza sorumluluğu yoktur; on beş yaşını doldurmuş olup da on sekiz yaşını doldurmamış olan sağır ve dilsizler hakkında ise algılama yeteneği araştırılır.',
    trueHighlight: ['on beş yaşını doldurmamış olan sağır ve dilsizlerin ceza sorumluluğu yoktur', 'on beş yaşını doldurmuş olup da on sekiz yaşını doldurmamış olan'],
    trueCorrectPhrase: 'on beş yaşını doldurmamış sağır ve dilsizlerin ceza sorumluluğu yoktur (yaş grupları +3 yıl eklenerek 15-18-21 olarak uygulanır)',
    baseExplanation: 'TCK m. 33 uyarınca yaş küçüklüğüne ilişkin 12-15-18 yaş sınırlarına sağır ve dilsizler bakımından +3 yıl eklenir (15-18-21 yaş olarak uygulanır).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on beş yaşını doldurmamış olan sağır ve dilsizlerin',
      wrongPhrase: 'on iki yaşını doldurmamış olan sağır ve dilsizlerin',
      correctPhrase: 'on beş yaşını doldurmamış olan sağır ve dilsizlerin',
      explanation: 'Sağır ve dilsizlerde mutlak ceza sorumsuzluğu yaş sınırı 12 değil, 15 yaşın doldurulmamış olmasıdır (TCK m. 33).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'on beş yaşını doldurmuş olup da on sekiz yaşını doldurmamış olan sağır ve dilsizler hakkında ise algılama yeteneği araştırılır',
      wrongPhrase: 'on sekiz yaşını doldurmuş olan sağır ve dilsizlere her durumda tam ceza verilir',
      correctPhrase: 'on beş yaşını doldurmuş olup da on sekiz yaşını doldurmamış olan sağır ve dilsizler hakkında ise algılama yeteneği araştırılır',
      explanation: 'Sağır ve dilsizlerde tam ceza sorumluluğu 18 yaşında değil, 21 yaşın doldurulmasıyla başlar (18-21 yaş grubuna 15-18 yaş küçüklüğü indirimi uygulanır).'
    }
  },
  {
    id: 'rule-tck-4',
    branch: 'TCK',
    subTopic: 'Hapis Cezasının Ertelenmesi Sınırları',
    articleRef: 'M. 51/1',
    trueStatement:
      'İşlediği suçtan dolayı iki yıl veya daha az süreyle hapis cezasına mahkûm edilen kişinin cezası ertelenebilir; bu sürenin üst sınırı, fiili işlediği sırada on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş olan kişiler bakımından üç yıldır.',
    trueHighlight: ['iki yıl veya daha az süreyle hapis cezasına', 'on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş olan kişiler bakımından üç yıldır'],
    trueCorrectPhrase: 'genel erteleme sınırı 2 yıl; 18 yaş altı ve 65 yaş üstü kişilerde ise 3 yıldır',
    baseExplanation: 'TCK m. 51/1 uyarınca hapis cezasının ertelenmesi sınırı kural olarak 2 yıl, 18 yaşını doldurmamış veya 65 yaşını bitirmiş olanlar için 3 yıldır; adli para cezaları ise ertelenemez!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıl veya daha az süreyle hapis cezasına mahkûm edilen kişinin cezası ertelenebilir',
      wrongPhrase: 'üç yıl veya daha az süreyle hapis ya da adli para cezasına mahkûm edilen her kişinin cezası ertelenebilir',
      correctPhrase: 'iki yıl veya daha az süreyle hapis cezasına mahkûm edilen kişinin cezası ertelenebilir',
      explanation: 'Genel erteleme sınırı 3 yıl değil 2 yıldır; ayrıca TCK m. 51 uyarınca yalnızca hapis cezaları ertelenebilir, adli para cezalarının ertelenmesi mümkün değildir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş olan kişiler bakımından üç yıldır',
      wrongPhrase: 'yirmi bir yaşını doldurmamış veya yetmiş yaşını bitirmiş olan kişiler bakımından beş yıldır',
      correctPhrase: 'on sekiz yaşını doldurmamış veya altmış beş yaşını bitirmiş olan kişiler bakımından üç yıldır',
      explanation: 'TCK m. 51/1’de istisnai erteleme yaş sınırları 18 yaş altı ve 65 yaş üstü olup ceza sınırı 3 yıldır.'
    }
  },
  {
    id: 'rule-tck-5',
    branch: 'TCK',
    subTopic: 'Dava Zamanaşımının Kesilmesi ve Uzamış Zamanaşımı',
    articleRef: 'M. 67/4',
    trueStatement:
      'Dava zamanaşımı süresinin kesilmesi halinde zamanaşımı süresi yeniden işlemeye başlar; ancak kesilme sebeplerinin varlığı halinde, zamanaşımı süresi ilgili suça ilişkin kanunda belirlenen sürenin en fazla yarısına kadar uzar.',
    trueHighlight: ['zamanaşımı süresi yeniden işlemeye başlar', 'ilgili suça ilişkin kanunda belirlenen sürenin en fazla yarısına kadar uzar'],
    trueCorrectPhrase: 'kesilme halinde zamanaşımı süresi en fazla yarısı kadar (+1/2 oranında) uzar',
    baseExplanation: 'TCK m. 67/4 uyarınca dava zamanaşımını kesen sebeplerin varlığı halinde süre en fazla yarısı kadar (örneğin 8 yıllık zamanaşımı +4 yıl eklenerek en çok 12 yıla) uzar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ilgili suça ilişkin kanunda belirlenen sürenin en fazla yarısına kadar uzar',
      wrongPhrase: 'ilgili suça ilişkin kanunda belirlenen sürenin iki katına kadar uzar',
      correctPhrase: 'ilgili suça ilişkin kanunda belirlenen sürenin en fazla yarısına kadar uzar',
      explanation: 'TCK m. 67/4 uyarınca kesilme halinde uzamış dava zamanaşımı asıl sürenin iki katı değil, en fazla yarısı kadar (1,5 katı) uzar.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'zamanaşımı süresi yeniden işlemeye başlar',
      wrongPhrase: 'zamanaşımı süresi yalnızca durur ve engelin kalkmasıyla kaldığı yerden devam eder',
      correctPhrase: 'zamanaşımı süresi yeniden işlemeye başlar',
      explanation: 'Kesilme (TCK m. 67/2) halinde geçen süre yanar ve zamanaşımı baştan (yeniden) işlemeye başlar; durmada (TCK m. 67/1) ise kaldığı yerden devam eder.'
    }
  },
  {
    id: 'rule-tck-6',
    branch: 'TCK',
    subTopic: 'Adli Para Cezasında Gün Sınırları ve Taksit Süresi',
    articleRef: 'M. 52',
    trueStatement:
      'Adlî para cezası, beş günden az ve kanunda aksine hüküm bulunmayan hallerde yedi yüz otuz günden fazla olmamak üzere belirlenen tam gün sayısının bir gün karşılığı takdir edilen miktar ile çarpılması suretiyle hesaplanır; hâkim cezanın iki yıla kadar taksitle ödenmesine karar verebilir ve taksit sayısı dörtten az olamaz.',
    trueHighlight: ['beş günden az ve kanunda aksine hüküm bulunmayan hallerde yedi yüz otuz günden fazla olmamak üzere', 'iki yıla kadar taksitle ödenmesine karar verebilir ve taksit sayısı dörtten az olamaz'],
    trueCorrectPhrase: 'adli para cezasında birim gün sayısı en az 5, en fazla 730 gündür ve en az 4 taksitle 2 yıla kadar taksitlendirilebilir',
    baseExplanation: 'TCK m. 52 uyarınca adli para cezasında alt sınır 5 tam gün, üst sınır ise (aksine hüküm yoksa) 730 tam gündür; taksitlendirme en az 4 taksit ve en çok 2 yıl olabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş günden az ve kanunda aksine hüküm bulunmayan hallerde yedi yüz otuz günden fazla olmamak üzere',
      wrongPhrase: 'on günden az ve üç yüz altmış beş günden fazla olmamak üzere',
      correctPhrase: 'beş günden az ve kanunda aksine hüküm bulunmayan hallerde yedi yüz otuz günden fazla olmamak üzere',
      explanation: 'TCK m. 52/1 uyarınca adli para cezasında birim gün sayısı 10-365 gün değil, en az 5 ve en fazla 730 tam gündür.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki yıla kadar taksitle ödenmesine karar verebilir ve taksit sayısı dörtten az olamaz',
      wrongPhrase: 'beş yıla kadar taksitle ödenmesine karar verebilir ve taksit sayısı on ikiden az olamaz',
      correctPhrase: 'iki yıla kadar taksitle ödenmesine karar verebilir ve taksit sayısı dörtten az olamaz',
      explanation: 'TCK m. 52/4 uyarınca adli para cezasında taksit süresi 2 yılı geçemez ve taksit miktarı 4’ten az olamaz.'
    }
  },

  // =========================================================================
  // 3. İYUK & İDARE HUKUKU
  // =========================================================================
  {
    id: 'rule-iyuk-1',
    branch: 'İYUK',
    subTopic: 'Üst Makamlara Başvuru ve Dava Açma Süresi',
    articleRef: 'M. 11',
    trueStatement:
      'İlgililer tarafından idari dava açılmadan önce, idari işlemin kaldırılması veya değiştirilmesi üst makamdan, üst makam yoksa işlemi yapmış olan makamdan dava açma süresi içinde istenebilir; bu başvurma işlemeye başlamış olan idari dava açma süresini durdurur ve otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır.',
    trueHighlight: ['işlemeye başlamış olan idari dava açma süresini durdurur', 'otuz gün içinde bir cevap verilmezse istek reddedilmiş sayılır'],
    trueCorrectPhrase: 'dava açma süresini durdurur ve otuz gün içinde cevap verilmezse reddedilmiş sayılır',
    baseExplanation: 'İYUK m. 11 uyarınca üst makama başvuru dava açma süresini kesmez, durdurur; 7331 s.K. ile zımni ret süresi 30 gündür.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işlemeye başlamış olan idari dava açma süresini durdurur',
      wrongPhrase: 'işlemeye başlamış olan idari dava açma süresini keser ve süreyi baştan başlatır',
      correctPhrase: 'işlemeye başlamış olan idari dava açma süresini durdurur',
      explanation: 'İYUK m. 11 başvurusu dava açma süresini kesmez (sıfırlamaz), yalnızca durdurur; ret cevabı veya 30 günlük zımni ret üzerine kalan süre kaldığı yerden işlemeye devam eder.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde bir cevap verilmezse',
      wrongPhrase: 'altmış gün içinde bir cevap verilmezse',
      correctPhrase: 'otuz gün içinde bir cevap verilmezse',
      explanation: '7331 sayılı Kanun ile İYUK m. 11’deki zımni ret süresi 60 günden 30 güne indirilmiştir.'
    }
  },
  {
    id: 'rule-iyuk-2',
    branch: 'İYUK',
    subTopic: 'Doğrudan Tam Yargı Davasında Ön Karar Süresi',
    articleRef: 'M. 13',
    trueStatement:
      'İdari eylemlerden hakları ihlal edilmiş olanların idari dava açmadan önce, bu eylemleri yazılı bildirim üzerine veya başka suretle öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir.',
    trueHighlight: ['öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde', 'ilgili idareye başvurarak'],
    trueCorrectPhrase: 'öğrenmeden itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde idareye başvuru zorunludur',
    baseExplanation: 'İYUK m. 13/1 uyarınca idari eylemlerden doğan tam yargı davalarında zorunlu idari başvuru (ön karar) süresi öğrenmeden itibaren 1 yıl ve her hâlde eylem tarihinden itibaren 5 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde',
      wrongPhrase: 'öğrendikleri tarihten itibaren altmış gün ve her hâlde eylem tarihinden itibaren bir yıl içinde',
      correctPhrase: 'öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde',
      explanation: 'İdari eylemlerden doğan tam yargı davalarında idareye ön başvuru süresi 60 gün değil, öğrenmeden itibaren 1 yıl ve her hâlde 5 yıldır (başvurunun reddi üzerine dava açma süresi 60 gündür).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir',
      wrongPhrase: 'idareye başvurma şartı aranmaksızın doğrudan idare mahkemesinde tam yargı davası açmaları mümkündür',
      correctPhrase: 'ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri gereklidir',
      explanation: 'İYUK m. 13 uyarınca idari eylemlerden doğan tam yargı davalarında idareye ön başvuru (ön karar) zorunlu bir dava şartıdır (idari mercieat tecavüzü).'
    }
  },
  {
    id: 'rule-iyuk-3',
    branch: 'İYUK',
    subTopic: 'Görevli Olmayan Yere Başvurma Halinde Ek Süre',
    articleRef: 'M. 9',
    trueStatement:
      'Çözümlenmesi Danıştayın, idare ve vergi mahkemelerinin görevlerine girdiği halde, adli yargı yerlerine açılmış bulunan davaların görev noktasından reddi halinde, bu husustaki kararların kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir.',
    trueHighlight: ['adli yargı yerlerine açılmış bulunan davaların görev noktasından reddi halinde', 'kesinleşmesini izleyen günden itibaren otuz gün içinde'],
    trueCorrectPhrase: 'görevsizlik kararının kesinleşmesini izleyen günden itibaren otuz gün içinde dava açılabilir',
    baseExplanation: 'İYUK m. 9/1 uyarınca adli yargıda açılıp görev yönünden reddedilen davalarda, ilk davanın idari dava açma süresi içinde açılmış olması şartıyla, kararın kesinleşmesini izleyen günden itibaren 30 gün içinde idari yargıda dava açılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kesinleşmesini izleyen günden itibaren otuz gün içinde',
      wrongPhrase: 'kesinleşmesini izleyen günden itibaren iki hafta içinde',
      correctPhrase: 'kesinleşmesini izleyen günden itibaren otuz gün içinde',
      explanation: 'Adli yargıdaki görevsizlik üzerine idari yargıda dava açma süresi HMK m. 20’deki 2 hafta değil, İYUK m. 9 uyarınca 30 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir',
      wrongPhrase: 'adli yargı mahkemesince dava dosyası re’sen görevli idare mahkemesine gönderilir',
      correctPhrase: 'kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir',
      explanation: 'Farklı yargı kolları (adli yargı - idari yargı) arasında dosya gönderme usulü yoktur; davacının 30 gün içinde idari yargıda yeni bir dava açması gerekir.'
    }
  },
  {
    id: 'rule-iyuk-4',
    branch: 'İYUK',
    subTopic: 'Merkezi ve Ortak Sınavlara İlişkin İvedi Yargılama',
    articleRef: 'M. 20/B',
    trueStatement:
      'Millî Eğitim Bakanlığı ile Ölçme, Seçme ve Yerleştirme Merkezi (ÖSYM) tarafından yapılan merkezi ve ortak sınavlara ilişkin iş ve işlemlere karşı açılacak davalarda dava açma süresi on gündür ve verilen nihai kararlara karşı tebliğden itibaren beş gün içinde Danıştay’a temyiz yoluna başvurulabilir.',
    trueHighlight: ['dava açma süresi on gündür', 'beş gün içinde Danıştay’a temyiz yoluna başvurulabilir'],
    trueCorrectPhrase: 'merkezi ve ortak sınav davalarında dava süresi 10 gün, temyiz süresi 5 gündür',
    baseExplanation: 'İYUK m. 20/B uyarınca merkezi ve ortak sınav davalarında dava açma süresi 10 gün, YD kararına itiraz kapalı, istinaf kapalı ve Danıştay’a temyiz süresi 5 gündür!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'dava açma süresi on gündür ve verilen nihai kararlara karşı tebliğden itibaren beş gün içinde Danıştay’a temyiz yoluna başvurulabilir',
      wrongPhrase: 'dava açma süresi otuz gündür ve verilen nihai kararlara karşı tebliğden itibaren on beş gün içinde bölge idare mahkemesine istinaf yoluna başvurulabilir',
      correctPhrase: 'dava açma süresi on gündür ve verilen nihai kararlara karşı tebliğden itibaren beş gün içinde Danıştay’a temyiz yoluna başvurulabilir',
      explanation: 'İYUK m. 20/B merkezi sınav usulü, m. 20/A genel ivedi yargılamadan (30 gün dava / 15 gün temyiz) farklıdır: merkezi sınavlarda dava süresi 10 gün, temyiz süresi 5 gündür ve istinaf kapalıdır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'beş gün içinde Danıştay’a temyiz yoluna başvurulabilir',
      wrongPhrase: 'yedi gün içinde bölge idare mahkemesine itiraz yoluna başvurulabilir',
      correctPhrase: 'beş gün içinde Danıştay’a temyiz yoluna başvurulabilir',
      explanation: 'Merkezi ve ortak sınav davalarında istinaf ve YD itirazı kapalı olup doğrudan 5 gün içinde Danıştay’a temyiz yoluna gidilir.'
    }
  },
  {
    id: 'rule-iyuk-5',
    branch: 'İYUK',
    subTopic: 'Dilekçeler Üzerine İlk İnceleme ve Dilekçe Ret Süresi',
    articleRef: 'M. 14-15',
    trueStatement:
      'Dilekçeler Danıştayda daire başkanının görevlendireceği bir tetkik hâkimi, idare ve vergi mahkemelerinde ise mahkeme başkanı veya görevlendireceği bir üye tarafından on beş gün içinde incelenir; dilekçenin görev ve yetki yönünden reddi halinde dosya görevli ve yetkili idare veya vergi mahkemesine re’sen gönderilir, biçimsel eksiklik nedeniyle reddi halinde ise otuz gün içinde eksiklikler tamamlanarak yeniden dava açılabilir.',
    trueHighlight: ['on beş gün içinde incelenir', 're’sen gönderilir', 'otuz gün içinde eksiklikler tamamlanarak yeniden dava açılabilir'],
    trueCorrectPhrase: 'ilk inceleme 15 gün içinde yapılır; dilekçe ret kararında yenileme süresi 30 gündür ve idari yargı içi görevsizlikte dosya re’sen gönderilir',
    baseExplanation: 'İYUK m. 14 ve m. 15 uyarınca ilk inceleme 15 gün içinde yapılır; İYUK m. 3 ve m. 5’e aykırılık nedeniyle dilekçe reddedilirse 30 gün içinde yenilenebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde eksiklikler tamamlanarak yeniden dava açılabilir',
      wrongPhrase: 'yedi gün içinde eksiklikler tamamlanarak yeniden dava açılabilir',
      correctPhrase: 'otuz gün içinde eksiklikler tamamlanarak yeniden dava açılabilir',
      explanation: 'İYUK m. 15/1-d uyarınca dilekçe ret kararı üzerine eksiklikleri tamamlayarak yeniden dava açma süresi 7 gün değil, 30 gündür (ivedi yargılama hariç).'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'dosya görevli ve yetkili idare veya vergi mahkemesine re’sen gönderilir',
      wrongPhrase: 'davacının iki hafta içinde başvurması şartıyla dosya görevli mahkemeye gönderilir',
      correctPhrase: 'dosya görevli ve yetkili idare veya vergi mahkemesine re’sen gönderilir',
      explanation: 'İdari yargının kendi içindeki görevsizlik veya yetkisizlik kararlarında (HMK’dan farklı olarak!) talep aranmaz; dosya mahkemece re’sen görevli/yetkili idare veya vergi mahkemesine gönderilir.'
    }
  },
  {
    id: 'rule-iyuk-6',
    branch: 'İYUK',
    subTopic: 'Mahkeme Kararlarının İcrası Süresi',
    articleRef: 'M. 28',
    trueStatement:
      'Danıştay, bölge idare mahkemeleri, idare ve vergi mahkemelerinin esasa ve yürütmenin durdurulmasına ilişkin kararlarının icaplarına göre idare, gecikmeksizin işlem tesis etmeye veya eylemde bulunmaya mecburdur; bu süre hiçbir şekilde kararın idareye tebliğinden başlayarak otuz günü geçemez.',
    trueHighlight: ['gecikmeksizin işlem tesis etmeye veya eylemde bulunmaya mecburdur', 'kararın idareye tebliğinden başlayarak otuz günü geçemez'],
    trueCorrectPhrase: 'idare yargı kararlarını tebliğden itibaren en geç 30 gün içinde uygulamak zorundadır',
    baseExplanation: 'İYUK m. 28/1 uyarınca idari yargı kararlarının (esasa ilişkin kararlar ve YD kararları) uygulanma süresi kararın idareye tebliğinden itibaren en geç 30 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kararın idareye tebliğinden başlayarak otuz günü geçemez',
      wrongPhrase: 'kararın idareye tebliğinden başlayarak altmış günü geçemez',
      correctPhrase: 'kararın idareye tebliğinden başlayarak otuz günü geçemez',
      explanation: 'İYUK m. 28/1 uyarınca idarenin yargı kararlarını uygulama üst sınırı 60 gün değil, tebliğden itibaren 30 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'esasa ve yürütmenin durdurulmasına ilişkin kararlarının icaplarına göre',
      wrongPhrase: 'yalnızca kesinleşmiş nihai kararların icaplarına göre (yürütmenin durdurulması kararları hariç)',
      correctPhrase: 'esasa ve yürütmenin durdurulmasına ilişkin kararlarının icaplarına göre',
      explanation: 'İdari yargıda kararların uygulanması için kesinleşmesi şart değildir; yürütmenin durdurulması kararları da 30 gün içinde uygulanmak zorundadır!'
    }
  },
  {
    id: 'rule-iyuk-7',
    branch: 'İYUK',
    subTopic: 'Yürütmenin Durdurulması Kararlarına İtiraz',
    articleRef: 'M. 27/7',
    trueStatement:
      'İdare ve vergi mahkemeleri tarafından verilen yürütmenin durdurulması istemleri hakkında verilen kararlara karşı, kararın tebliğini izleyen günden itibaren yedi gün içinde bir defaya mahsus olmak üzere bölge idare mahkemesine itiraz edilebilir; itiraz edilen merci yedi gün içinde karar vermek zorundadır ve itiraz üzerine verilen kararlar kesindir.',
    trueHighlight: ['tebliğini izleyen günden itibaren yedi gün içinde', 'bölge idare mahkemesine itiraz edilebilir', 'itiraz üzerine verilen kararlar kesindir'],
    trueCorrectPhrase: 'YD kararlarına karşı tebliği izleyen günden itibaren 7 gün içinde bir defaya mahsus bölge idare mahkemesine itiraz edilebilir',
    baseExplanation: 'İYUK m. 27/7 uyarınca YD kararlarına itiraz süresi tebliği izleyen günden itibaren 7 gündür ve merci kararları kesindir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğini izleyen günden itibaren yedi gün içinde bir defaya mahsus olmak üzere bölge idare mahkemesine itiraz edilebilir',
      wrongPhrase: 'tebliğini izleyen günden itibaren otuz gün içinde Danıştay’a istinaf başvurusunda bulunulabilir',
      correctPhrase: 'tebliğini izleyen günden itibaren yedi gün içinde bir defaya mahsus olmak üzere bölge idare mahkemesine itiraz edilebilir',
      explanation: 'İYUK m. 27/7 uyarınca yürütmenin durdurulması kararlarına itiraz süresi 30 gün değil, tebliği izleyen günden itibaren 7 gündür.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'itiraz üzerine verilen kararlar kesindir',
      wrongPhrase: 'itiraz üzerine verilen kararlara karşı on beş gün içinde Danıştay’a temyiz yoluna gidilebilir',
      correctPhrase: 'itiraz üzerine verilen kararlar kesindir',
      explanation: 'Yürütmenin durdurulması istemleri hakkında itiraz merciince verilen kararlar kesindir; bunlara karşı temyiz yoluna başvurulamaz.'
    }
  },
  {
    id: 'rule-idare-1',
    branch: 'İdare',
    subTopic: 'Memurların ve Diğer Kamu Görevlilerinin Yargılanması',
    articleRef: '4483 s.K. M. 7-9',
    trueStatement:
      '4483 sayılı Kanun uyarınca yetkili merci, soruşturma izni konusundaki kararını suçun öğrenilmesinden itibaren ön inceleme dahil en geç otuz gün içinde verir; bu süre zorunlu hallerde on beş günü geçmemek üzere bir defa uzatılabilir ve karara karşı tebliğden itibaren on gün içinde itiraz edilebilir.',
    trueHighlight: ['en geç otuz gün içinde verir', 'on beş günü geçmemek üzere bir defa uzatılabilir', 'tebliğden itibaren on gün içinde itiraz edilebilir'],
    trueCorrectPhrase: 'karar süresi 30 gün (+15 gün uzatma) ve itiraz süresi tebliğden itibaren 10 gündür',
    baseExplanation: '4483 sayılı Kanun m. 7 ve m. 9 uyarınca ön inceleme/soruşturma izni süresi 30 gün (+15 gün ek süre), bu karara karşı Danıştay veya Bölge İdare Mahkemesine itiraz süresi ise 10 gündür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğden itibaren on gün içinde itiraz edilebilir',
      wrongPhrase: 'tebliğden itibaren otuz gün içinde itiraz edilebilir',
      correctPhrase: 'tebliğden itibaren on gün içinde itiraz edilebilir',
      explanation: '4483 sayılı Kanun’a göre soruşturma izni verilmesine veya verilmemesine ilişkin kararlara itiraz süresi 30 gün değil, tebliğden itibaren 10 gündür.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ön inceleme dahil en geç otuz gün içinde verir; bu süre zorunlu hallerde on beş günü geçmemek üzere bir defa uzatılabilir',
      wrongPhrase: 'ön inceleme dahil en geç altmış gün içinde verir; bu süre zorunlu hallerde otuz günü geçmemek üzere iki defa uzatılabilir',
      correctPhrase: 'ön inceleme dahil en geç otuz gün içinde verir; bu süre zorunlu hallerde on beş günü geçmemek üzere bir defa uzatılabilir',
      explanation: '4483 s.K. m. 7 uyarınca soruşturma izni karar süresi 30 gün olup zorunlu hallerde en çok 15 gün ve bir defaya mahsus uzatılabilir (toplam en çok 45 gün).'
    }
  },
  {
    id: 'rule-idare-2',
    branch: 'İdare',
    subTopic: 'Devlet Memurlarında Disiplin Zamanaşımı',
    articleRef: '657 s.K. M. 127',
    trueStatement:
      '657 sayılı Devlet Memurları Kanunu’na göre disiplin cezasını gerektiren fiil ve halleri işleyenler hakkında, bu fiil ve hallerin işlendiğinin öğrenildiği tarihten itibaren; uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde, Devlet memurluğundan çıkarma cezasında ise altı ay içinde disiplin soruşturmasına başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar.',
    trueHighlight: ['bir ay içinde', 'Devlet memurluğundan çıkarma cezasında ise altı ay içinde', 'disiplin cezası verme yetkisi zamanaşımına uğrar'],
    trueCorrectPhrase: 'soruşturmaya başlama zamanaşımı diğer cezalarda 1 ay, memurluktan çıkarmada 6 aydır (ceza verme zamanaşımı ise fiil tarihinden itibaren 2 yıldır)',
    baseExplanation: '657 s.K. m. 127 uyarınca disiplin soruşturmasına başlama zamanaşımı öğrenmeden itibaren 1 ay (ihraçta 6 ay), disiplin cezası verme zamanaşımı ise fiilin işlendiği tarihten itibaren 2 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Devlet memurluğundan çıkarma cezasında ise altı ay içinde',
      wrongPhrase: 'Devlet memurluğundan çıkarma cezasında ise bir yıl içinde',
      correctPhrase: 'Devlet memurluğundan çıkarma cezasında ise altı ay içinde',
      explanation: 'Devlet memurluğundan çıkarma cezasında disiplin soruşturmasına başlama zamanaşımı 1 yıl değil, fiilin öğrenilmesinden itibaren 6 aydır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde',
      wrongPhrase: 'uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında on beş gün içinde',
      correctPhrase: 'uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde',
      explanation: '15 gün disiplin kararını verme süresidir (m. 128); soruşturmaya başlama zamanaşımı süresi ise öğrenmeden itibaren 1 aydır (m. 127)!'
    }
  },
  {
    id: 'rule-idare-3',
    branch: 'İdare',
    subTopic: 'Devlet Memurluğundan Çıkarma Cezasında Yetkili Kurul ve Savunma Süresi',
    articleRef: '657 s.K. M. 126 & 130',
    trueStatement:
      'Devlet memurluğundan çıkarma cezası amirlerin bu yoldaki isteği üzerine, memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir; memura savunmasını yapması için en az yedi günlük süre tanınması zorunludur ve süresi içinde savunmasını yapmayan memur savunma hakkından vazgeçmiş sayılır.',
    trueHighlight: ['yüksek disiplin kurulu kararı ile verilir', 'en az yedi günlük süre tanınması zorunludur'],
    trueCorrectPhrase: 'memurluktan çıkarma cezasını Yüksek Disiplin Kurulu verir ve savunma süresi en az 7 gündür',
    baseExplanation: '657 s.K. m. 126 ve m. 130 uyarınca Devlet memurluğundan çıkarma cezasını Yüksek Disiplin Kurulu verir ve savunma süresi 7 günden az olamaz.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir',
      wrongPhrase: 'doğrudan atamaya yetkili en üst disiplin amirinin onayı ile verilir',
      correctPhrase: 'memurun bağlı bulunduğu kurumun yüksek disiplin kurulu kararı ile verilir',
      explanation: '657 s.K. m. 126 uyarınca Devlet memurluğundan çıkarma cezasını disiplin amirleri veya normal disiplin kurulu veremez; yalnızca Yüksek Disiplin Kurulu verebilir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en az yedi günlük süre tanınması zorunludur',
      wrongPhrase: 'en az üç günlük süre tanınması zorunludur',
      correctPhrase: 'en az yedi günlük süre tanınması zorunludur',
      explanation: '657 s.K. m. 130 uyarınca disiplin soruşturmalarında memura verilecek savunma süresi 7 günden az olamaz.'
    }
  },
  {
    id: 'rule-idare-4',
    branch: 'İdare',
    subTopic: 'Kamulaştırmada Dava Açma Süresi ve Görevli Mahkeme',
    articleRef: '2942 s.K. M. 10 & 14',
    trueStatement:
      'Kamulaştırma işlemine karşı, kamulaştırma belgelerinin mahkemece tebliği tarihinden itibaren otuz gün içinde idari yargıda iptal davası, maddi hatalara karşı ise adli yargıda düzeltim davası açılabilir; kamulaştırma bedelinin tespiti ve tescil davasında ise taşınmazın bulunduğu yer asliye hukuk mahkemesi görevlidir.',
    trueHighlight: ['tebliği tarihinden itibaren otuz gün içinde idari yargıda iptal davası', 'taşınmazın bulunduğu yer asliye hukuk mahkemesi görevlidir'],
    trueCorrectPhrase: 'kamulaştırma işleminin iptali davası 30 gün içinde idari yargıda, bedel tespit ve tescil davası ise asliye hukuk mahkemesinde görülür',
    baseExplanation: '2942 sayılı Kamulaştırma Kanunu m. 10 ve m. 14 uyarınca kamulaştırma işleminin iptali davası idari yargıda 30 gün içinde açılır; bedel tespiti ve tescil davası ise adli yargıda (Asliye Hukuk Mahkemesi) görülür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliği tarihinden itibaren otuz gün içinde idari yargıda iptal davası',
      wrongPhrase: 'tebliği tarihinden itibaren altmış gün içinde idari yargıda iptal davası',
      correctPhrase: 'tebliği tarihinden itibaren otuz gün içinde idari yargıda iptal davası',
      explanation: 'Kamulaştırma Kanunu m. 14 özel kanun hükmü olduğundan idare mahkemesinde iptal davası açma süresi genel 60 gün değil, 30 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'taşınmazın bulunduğu yer asliye hukuk mahkemesi görevlidir',
      wrongPhrase: 'taşınmazın bulunduğu yer idare mahkemesi görevlidir',
      correctPhrase: 'taşınmazın bulunduğu yer asliye hukuk mahkemesi görevlidir',
      explanation: 'Kamulaştırma bedelinin tespiti ve idare adına tescili davasında idare mahkemesi değil, adli yargıdaki Asliye Hukuk Mahkemesi görevlidir.'
    }
  },
  {
    id: 'rule-idare-5',
    branch: 'İdare',
    subTopic: 'Belediye ve Büyükşehir Belediyesi Kurulması Nüfus Sınırları',
    articleRef: '5393 s.K. M. 4 & 5216 s.K. M. 4',
    trueStatement:
      'Nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararı ile belediye kurulabilir; toplam nüfusu yedi yüz elli binden fazla olan illerin il belediyeleri ise kanunla büyükşehir belediyesine dönüştürülebilir.',
    trueHighlight: ['Nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararı ile', 'yedi yüz elli binden fazla olan illerin il belediyeleri ise kanunla'],
    trueCorrectPhrase: 'belediye kurulması için en az 5.000 nüfus (Cumhurbaşkanı kararı), büyükşehir belediyesi için en az 750.000 nüfus (kanun) gerekir',
    baseExplanation: '5393 s.K. m. 4 ve 5216 s.K. m. 4 uyarınca belediye 5.000 nüfusla Cumhurbaşkanı kararıyla, büyükşehir belediyesi ise 750.000 nüfusla kanunla kurulur.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararı ile belediye kurulabilir',
      wrongPhrase: 'Nüfusu iki bin ve üzerinde olan yerleşim birimlerinde İçişleri Bakanlığı onayı ile belediye kurulabilir',
      correctPhrase: 'Nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararı ile belediye kurulabilir',
      explanation: '5393 sayılı Belediye Kanunu m. 4 uyarınca belediye kurulabilmesi için asgari nüfus 2.000 değil 5.000’dir ve İçişleri Bakanlığı onayıyla değil, Cumhurbaşkanı kararıyla kurulur.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yedi yüz elli binden fazla olan illerin il belediyeleri ise kanunla büyükşehir belediyesine dönüştürülebilir',
      wrongPhrase: 'beş yüz binden fazla olan illerin il belediyeleri ise Cumhurbaşkanı kararıyla büyükşehir belediyesine dönüştürülebilir',
      correctPhrase: 'yedi yüz elli binden fazla olan illerin il belediyeleri ise kanunla büyükşehir belediyesine dönüştürülebilir',
      explanation: 'Büyükşehir belediyesi kurulması için il nüfusunun en az 750.000 olması ve Cumhurbaşkanı kararıyla değil, kanunla kurulması gerekir.'
    }
  },

  // =========================================================================
  // 4. ANAYASA HUKUKU
  // =========================================================================
  {
    id: 'rule-anayasa-1',
    branch: 'Anayasa',
    subTopic: 'Kanunların Cumhurbaşkanınca Yayımlanması ve Geri Gönderilmesi',
    articleRef: 'M. 89',
    trueStatement:
      'Cumhurbaşkanı, Türkiye Büyük Millet Meclisince kabul edilen kanunları on beş gün içinde yayımlar veya bir daha görüşülmek üzere Meclise geri gönderir; TBMM geri gönderilen kanunu üye tamsayısının salt çoğunluğu ile aynen kabul ederse kanun Cumhurbaşkanınca yayımlanır.',
    trueHighlight: ['on beş gün içinde yayımlar', 'üye tamsayısının salt çoğunluğu ile aynen kabul ederse'],
    trueCorrectPhrase: '15 gün içinde yayımlar ve TBMM üye tamsayısının salt çoğunluğu (301) ile aynen kabul edebilir',
    baseExplanation: '2017 Anayasa değişikliğiyle TBMM’nin Cumhurbaşkanınca geri gönderilen kanunu aynen kabul edebilmesi için "üye tamsayısının salt çoğunluğu" (301 milletvekili) şartı getirilmiştir; bütçe kanunları ise geri gönderilemez.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üye tamsayısının salt çoğunluğu ile aynen kabul ederse',
      wrongPhrase: 'toplantıya katılanların salt çoğunluğu ile aynen kabul ederse',
      correctPhrase: 'üye tamsayısının salt çoğunluğu ile aynen kabul ederse',
      explanation: 'Anayasa m. 89/3 uyarınca geri gönderilen kanunun TBMM tarafından aynen kabul edilebilmesi için toplantıya katılanların değil, üye tamsayısının salt çoğunluğu (en az 301 kabul oyu) gerekir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Türkiye Büyük Millet Meclisince kabul edilen kanunları on beş gün içinde yayımlar veya bir daha görüşülmek üzere Meclise geri gönderir',
      wrongPhrase: 'bütçe kanunları da dahil olmak üzere tüm kanunları on beş gün içinde bir daha görüşülmek üzere Meclise geri gönderebilir',
      correctPhrase: 'Türkiye Büyük Millet Meclisince kabul edilen kanunları on beş gün içinde yayımlar veya bir daha görüşülmek üzere Meclise geri gönderir',
      explanation: 'Anayasa m. 89/2 uyarınca bütçe kanunları Cumhurbaşkanı tarafından bir daha görüşülmek üzere TBMM’ye geri gönderilemez.'
    }
  },
  {
    id: 'rule-anayasa-2',
    branch: 'Anayasa',
    subTopic: 'TBMM ve Cumhurbaşkanlığı Seçim Dönemi ve Yenileme',
    articleRef: 'M. 77 & 116',
    trueStatement:
      'Türkiye Büyük Millet Meclisi ve Cumhurbaşkanlığı seçimleri beş yılda bir aynı günde yapılır; Meclis üye tamsayısının beşte üç çoğunluğuyla seçimlerin yenilenmesine karar verebilir.',
    trueHighlight: ['beş yılda bir aynı günde yapılır', 'üye tamsayısının beşte üç çoğunluğuyla seçimlerin yenilenmesine karar verebilir'],
    trueCorrectPhrase: 'seçimler 5 yılda bir aynı günde yapılır ve TBMM üye tamsayısının 3/5 çoğunluğuyla (360) yenileme kararı alabilir',
    baseExplanation: 'Anayasa m. 77 ve m. 116 uyarınca seçim dönemi 5 yıldır ve TBMM’nin erken seçim (seçimlerin yenilenmesi) kararı alabilmesi için üye tamsayısının 3/5 çoğunluğu (360 milletvekili) gerekir.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üye tamsayısının beşte üç çoğunluğuyla seçimlerin yenilenmesine karar verebilir',
      wrongPhrase: 'üye tamsayısının salt çoğunluğuyla seçimlerin yenilenmesine karar verebilir',
      correctPhrase: 'üye tamsayısının beşte üç çoğunluğuyla seçimlerin yenilenmesine karar verebilir',
      explanation: 'Anayasa m. 116/1 uyarınca TBMM’nin seçimlerin yenilenmesine karar verebilmesi için salt çoğunluk (301) yetmez; üye tamsayısının beşte üç çoğunluğu (360 milletvekili) şarttır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yılda bir aynı günde yapılır',
      wrongPhrase: 'dört yılda bir farklı tarihlerde yapılır',
      correctPhrase: 'beş yılda bir aynı günde yapılır',
      explanation: '2017 Anayasa değişikliğiyle TBMM ve Cumhurbaşkanlığı seçim dönemi 5 yıl olarak belirlenmiş ve seçimlerin aynı günde yapılması kuralı getirilmiştir.'
    }
  },
  {
    id: 'rule-anayasa-3',
    branch: 'Anayasa',
    subTopic: 'Siyasi Partilerin Kapatılması ve Yargıtay Cumhuriyet Başsavcısı',
    articleRef: 'M. 69 & 149',
    trueStatement:
      'Siyasi partilerin kapatılması, Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine Anayasa Mahkemesi Genel Kurulunca toplantıya katılanların üçte iki oy çokluğuyla karara bağlanır.',
    trueHighlight: ['Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine', 'toplantıya katılanların üçte iki oy çokluğuyla karara bağlanır'],
    trueCorrectPhrase: 'Yargıtay Cumhuriyet Başsavcısının davası üzerine AYM Genel Kurulunca toplantıya katılanların 2/3 çoğunluğuyla',
    baseExplanation: 'Anayasa m. 69 ve m. 149 uyarınca siyasi parti kapatma davasını Yargıtay Cumhuriyet Başsavcısı açar ve Anayasa Mahkemesi Genel Kurulu toplantıya katılanların 2/3 çoğunluğuyla karar verir.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'toplantıya katılanların üçte iki oy çokluğuyla karara bağlanır',
      wrongPhrase: 'üye tamsayısının salt çoğunluğuyla karara bağlanır',
      correctPhrase: 'toplantıya katılanların üçte iki oy çokluğuyla karara bağlanır',
      explanation: 'Anayasa m. 149/1 uyarınca Anayasa değişikliklerinin iptali ile siyasi partilerin kapatılmasına veya Devlet yardımından yoksun bırakılmasına karar verilebilmesi için toplantıya katılan üyelerin 2/3 oy çokluğu şarttır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine',
      wrongPhrase: 'Adalet Bakanının veya İçişleri Bakanının açacağı dava üzerine',
      correctPhrase: 'Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine',
      explanation: 'Siyasi partilerin kapatılması davasını açma yetkisi münhasıran Yargıtay Cumhuriyet Başsavcısına aittir.'
    }
  },
  {
    id: 'rule-anayasa-4',
    branch: 'Anayasa',
    subTopic: 'Hakimler ve Savcılar Kurulu (HSK) Yapısı',
    articleRef: 'M. 159',
    trueStatement:
      'Hâkimler ve Savcılar Kurulu on üç üyeden oluşur ve iki daire halinde çalışır; Kurulun Başkanı Adalet Bakanıdır ve üyeler dört yıl için seçilirler.',
    trueHighlight: ['on üç üyeden oluşur ve iki daire halinde çalışır', 'Kurulun Başkanı Adalet Bakanıdır ve üyeler dört yıl için seçilirler'],
    trueCorrectPhrase: 'HSK 13 üyeden oluşur, 2 daire halinde çalışır ve üyeler 4 yıl için seçilir',
    baseExplanation: 'Anayasa m. 159 uyarınca HSK 13 üyeden oluşur (Adalet Bakanı, Adalet Bakanlığı ilgili Bakan Yardımcısı, Cumhurbaşkanınca seçilen 4 üye ve TBMM’ce seçilen 7 üye). Görev süresi 4 yıldır ve süresi biten üye bir kez daha seçilebilir.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'on üç üyeden oluşur ve iki daire halinde çalışır',
      wrongPhrase: 'yirmi iki üyeden oluşur ve üç daire halinde çalışır',
      correctPhrase: 'on üç üyeden oluşur ve iki daire halinde çalışır',
      explanation: '2017 Anayasa değişikliğiyle HSK’nın üye sayısı 22’den 13’e, daire sayısı ise 3’ten 2’ye indirilmiştir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üyeler dört yıl için seçilirler',
      wrongPhrase: 'üyeler yeniden seçilmemek kaydıyla on iki yıl için seçilirler',
      correctPhrase: 'üyeler dört yıl için seçilirler',
      explanation: '12 yıl ve yeniden seçilememe kuralı Anayasa Mahkemesi üyeleri içindir; HSK üyeleri 4 yıl için seçilir ve süresi biten üye bir kez daha seçilebilir.'
    }
  },
  {
    id: 'rule-anayasa-5',
    branch: 'Anayasa',
    subTopic: 'Meclis Soruşturması ve Yüce Divana Sevk Çoğunlukları',
    articleRef: 'M. 105 & 106',
    trueStatement:
      'Cumhurbaşkanı, Cumhurbaşkanı yardımcıları ve bakanlar hakkında Türkiye Büyük Millet Meclisi üye tamsayısının salt çoğunluğunun vereceği önergeyle soruşturma açılması istenebilir; Meclis önergeyi en geç bir ay içinde görüşür ve üye tamsayısının beşte üçünün gizli oyuyla soruşturma açılmasına, üye tamsayısının üçte ikisinin gizli oyuyla ise Yüce Divana sevk kararı verebilir.',
    trueHighlight: ['üye tamsayısının salt çoğunluğunun vereceği önergeyle', 'üye tamsayısının beşte üçünün gizli oyuyla soruşturma açılmasına', 'üye tamsayısının üçte ikisinin gizli oyuyla ise Yüce Divana sevk'],
    trueCorrectPhrase: 'önerge salt çoğunluk (301), soruşturma açılması 3/5 (360) gizli oy, Yüce Divana sevk 2/3 (400) gizli oy',
    baseExplanation: 'Anayasa m. 105 ve m. 106 uyarınca 3 aşamalı çoğunluk kuralı: 1) Önerge: 301 (salt çoğunluk), 2) Soruşturma açılması: 360 (3/5 gizli oy), 3) Yüce Divana sevk: 400 (2/3 gizli oy).',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üye tamsayısının üçte ikisinin gizli oyuyla ise Yüce Divana sevk kararı verebilir',
      wrongPhrase: 'üye tamsayısının salt çoğunluğunun açık oyuyla ise Yüce Divana sevk kararı verebilir',
      correctPhrase: 'üye tamsayısının üçte ikisinin gizli oyuyla ise Yüce Divana sevk kararı verebilir',
      explanation: 'Yüce Divana sevk kararı için üye tamsayısının en az üçte ikisinin (400 milletvekili) gizli oyu şarttır.'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üye tamsayısının beşte üçünün gizli oyuyla soruşturma açılmasına',
      wrongPhrase: 'toplantıya katılanların salt çoğunluğunun işaretle oyuyla soruşturma açılmasına',
      correctPhrase: 'üye tamsayısının beşte üçünün gizli oyuyla soruşturma açılmasına',
      explanation: 'Soruşturma açılması kararı için üye tamsayısının beşte üçünün (360 milletvekili) gizli oyu zorunludur.'
    }
  },
  {
    id: 'rule-anayasa-6',
    branch: 'Anayasa',
    subTopic: 'Anayasa Mahkemesi Üye Sayısı ve Görev Süresi',
    articleRef: 'M. 146-147',
    trueStatement:
      'Anayasa Mahkemesi on beş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi, Cumhurbaşkanı ise on iki üyeyi seçer ve Anayasa Mahkemesi üyeleri yeniden seçilmemek kaydıyla on iki yıl için seçilirler.',
    trueHighlight: ['Anayasa Mahkemesi on beş üyeden kurulur', 'Türkiye Büyük Millet Meclisi üç üyeyi, Cumhurbaşkanı ise on iki üyeyi seçer', 'yeniden seçilmemek kaydıyla on iki yıl için seçilirler'],
    trueCorrectPhrase: 'AYM 15 üyeden (3 TBMM + 12 Cumhurbaşkanı) oluşur ve üyeler yeniden seçilmemek üzere 12 yıl görev yapar',
    baseExplanation: 'Anayasa m. 146 ve m. 147 uyarınca AYM 15 üyeden oluşur (3 TBMM, 12 Cumhurbaşkanı); üyeler 12 yıl için seçilir, bir kimse iki defa seçilemez ve 65 yaşını dolduranlar emekliye ayrılır.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'Anayasa Mahkemesi on beş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi, Cumhurbaşkanı ise on iki üyeyi seçer',
      wrongPhrase: 'Anayasa Mahkemesi on yedi üyeden kurulur; Türkiye Büyük Millet Meclisi yedi üyeyi, Cumhurbaşkanı ise on üyeyi seçer',
      correctPhrase: 'Anayasa Mahkemesi on beş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi, Cumhurbaşkanı ise on iki üyeyi seçer',
      explanation: '2017 Anayasa değişikliğiyle askeri yargı kaldırıldığından AYM üye sayısı 17’den 15’e düşürülmüştür (3 TBMM + 12 Cumhurbaşkanı).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yeniden seçilmemek kaydıyla on iki yıl için seçilirler',
      wrongPhrase: 'süresi biten üye bir kez daha seçilebilmek kaydıyla dört yıl için seçilirler',
      correctPhrase: 'yeniden seçilmemek kaydıyla on iki yıl için seçilirler',
      explanation: '4 yıl ve bir kez yeniden seçilebilme kuralı HSK üyeleri (m. 159) içindir; AYM üyeleri 12 yıl için seçilir ve yeniden seçilemez!'
    }
  },
  {
    id: 'rule-anayasa-7',
    branch: 'Anayasa',
    subTopic: 'Somut Norm Denetimi (İtiraz Yolu) ve On Yıllık Yasak',
    articleRef: 'M. 152',
    trueStatement:
      'Bir davaya bakmakta olan mahkeme, uygulanacak bir kanun veya Cumhurbaşkanlığı kararnamesinin hükümlerini Anayasaya aykırı görürse Anayasa Mahkemesinin bu konuda vereceği karara kadar davayı geri bırakır; Anayasa Mahkemesi işin kendisine gelişinden başlamak üzere beş ay içinde kararını verir ve işin esasına girerek verdiği ret kararının Resmî Gazetede yayımlanmasından sonra on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvuruda bulunulamaz.',
    trueHighlight: ['beş ay içinde kararını verir', 'on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvuruda bulunulamaz'],
    trueCorrectPhrase: 'AYM 5 ay içinde karar verir ve esastan ret kararından itibaren 10 yıl boyunca itiraz yoluyla tekrar başvurulamaz',
    baseExplanation: 'Anayasa m. 152 uyarınca somut norm denetiminde AYM 5 ay içinde karar verir; esastan ret halinde 10 yıl boyunca aynı hüküm için itiraz yoluna başvurulamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvuruda bulunulamaz',
      wrongPhrase: 'beş yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvuruda bulunulamaz',
      correctPhrase: 'on yıl geçmedikçe aynı kanun hükmünün Anayasaya aykırılığı iddiasıyla tekrar başvuruda bulunulamaz',
      explanation: 'Anayasa m. 152/4 uyarınca somut norm denetiminde esastan ret kararından sonra yeniden başvuru yasağı süresi 5 yıl değil, 10 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş ay içinde kararını verir',
      wrongPhrase: 'bir yıl içinde kararını verir',
      correctPhrase: 'beş ay içinde kararını verir',
      explanation: 'Anayasa m. 152/3 uyarınca Anayasa Mahkemesi somut norm denetiminde işin kendisine gelişinden itibaren 5 ay içinde kararını verir; bu sürede karar verilmezse mahkeme davayı yürürlükteki hükümlere göre sonuçlandırır.'
    }
  },
  {
    id: 'rule-anayasa-8',
    branch: 'Anayasa',
    subTopic: 'Olağanüstü Hal (OHAL) İlanı ve Uzatma Süresi',
    articleRef: 'M. 119',
    trueStatement:
      'Cumhurbaşkanı, kanunda sayılan sebeplerin varlığı halinde yurdun tamamında veya bir bölgesinde, süresi altı ayı geçmemek üzere olağanüstü hal ilan edebilir; Türkiye Büyük Millet Meclisi, Cumhurbaşkanının talebi üzerine olağanüstü hal süresini her defasında dört ayı geçmemek üzere uzatabilir ve savaş hallerinde bu dört aylık sınır aranmaz.',
    trueHighlight: ['süresi altı ayı geçmemek üzere olağanüstü hal ilan edebilir', 'her defasında dört ayı geçmemek üzere uzatabilir'],
    trueCorrectPhrase: 'Cumhurbaşkanı en çok 6 ay süreyle OHAL ilan edebilir; TBMM her defasında en çok 4 ay uzatabilir',
    baseExplanation: 'Anayasa m. 119 uyarınca ilk OHAL ilanı Cumhurbaşkanı tarafından en çok 6 ay için yapılır ve Resmi Gazete’de yayımlandığı gün TBMM onayına sunulur; TBMM her defasında en çok 4 ay uzatabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Türkiye Büyük Millet Meclisi, Cumhurbaşkanının talebi üzerine olağanüstü hal süresini her defasında dört ayı geçmemek üzere uzatabilir',
      wrongPhrase: 'Cumhurbaşkanı, Meclis onayına gerek olmaksızın olağanüstü hal süresini her defasında altı ayı geçmemek üzere re’sen uzatabilir',
      correctPhrase: 'Türkiye Büyük Millet Meclisi, Cumhurbaşkanının talebi üzerine olağanüstü hal süresini her defasında dört ayı geçmemek üzere uzatabilir',
      explanation: 'OHAL süresini uzatma yetkisi Cumhurbaşkanına değil TBMM’ye aittir ve uzatma süresi her defasında 6 ay değil, en çok 4 aydır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'süresi altı ayı geçmemek üzere olağanüstü hal ilan edebilir',
      wrongPhrase: 'süresi bir yılı geçmemek üzere olağanüstü hal ilan edebilir',
      correctPhrase: 'süresi altı ayı geçmemek üzere olağanüstü hal ilan edebilir',
      explanation: 'Anayasa m. 119/1 uyarınca Cumhurbaşkanı tarafından ilan edilecek ilk olağanüstü hal süresi 6 ayı geçemez.'
    }
  },
  {
    id: 'rule-anayasa-9',
    branch: 'Anayasa',
    subTopic: 'TBMM Başkanlık Divanı Seçimi ve Görev Süresi',
    articleRef: 'M. 94',
    trueStatement:
      'Türkiye Büyük Millet Meclisi Başkanlık Divanı için bir yasama döneminde iki seçim yapılır; ilk seçilenlerin görev süresi iki yıl, ikinci devre için seçilenlerin görev süresi ise o yasama döneminin sonuna kadardır ve Başkan seçimi gizli oyla en çok dört turda tamamlanır.',
    trueHighlight: ['bir yasama döneminde iki seçim yapılır', 'ilk seçilenlerin görev süresi iki yıl, ikinci devre için seçilenlerin görev süresi ise o yasama döneminin sonuna kadardır'],
    trueCorrectPhrase: 'bir yasama döneminde 2 seçim yapılır (ilk devre 2 yıl, ikinci devre yasama dönemi sonuna kadar; gizli oyla)',
    baseExplanation: 'Anayasa m. 94 uyarınca TBMM Başkanlık Divanı için bir yasama döneminde iki seçim yapılır (2 yıl + kalan süre) ve seçim gizli oyla yapılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ilk seçilenlerin görev süresi iki yıl, ikinci devre için seçilenlerin görev süresi ise o yasama döneminin sonuna kadardır',
      wrongPhrase: 'başkanlık divanı üyeleri beş yıllık yasama döneminin tamamı için tek seferde açık oyla seçilir',
      correctPhrase: 'ilk seçilenlerin görev süresi iki yıl, ikinci devre için seçilenlerin görev süresi ise o yasama döneminin sonuna kadardır',
      explanation: 'TBMM Başkanlık Divanı 5 yıl için tek seferde değil, bir yasama döneminde iki kez (ilk devre 2 yıl, ikinci devre yasama dönemi sonuna kadar) seçilir.'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'gizli oyla en çok dört turda tamamlanır',
      wrongPhrase: 'işaretle oylama usulüyle tek turda salt çoğunlukla tamamlanır',
      correctPhrase: 'gizli oyla en çok dört turda tamamlanır',
      explanation: 'TBMM Başkanı seçimi gizli oyla yapılır; 1. ve 2. turda üye tamsayısının 2/3’ü (400), 3. turda üye tamsayısının salt çoğunluğu (301) aranır.'
    }
  },

  // =========================================================================
  // 5. MEDENİ HUKUK & BORÇLAR HUKUKU (TMK & TBK)
  // =========================================================================
  {
    id: 'rule-tmk-1',
    branch: 'Medeni',
    subTopic: 'Dernek Genel Kurul Kararlarının İptali Süresi',
    articleRef: 'TMK M. 83',
    trueStatement:
      'Toplantıda hazır bulunan ve kanuna veya tüzüğe aykırı olarak alınan genel kurul kararlarına katılmayan her dernek üyesi, karar tarihinden başlayarak bir ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde mahkemeye başvurmak suretiyle kararın iptalini isteyebilir.',
    trueHighlight: ['karar tarihinden başlayarak bir ay içinde', 'her hâlde karar tarihinden başlayarak üç ay içinde'],
    trueCorrectPhrase: 'hazır bulunan üye 1 ay, hazır bulunmayan üye öğrenmeden itibaren 1 ay ve her hâlde 3 ay içinde iptal davası açabilir',
    baseExplanation: 'TMK m. 83 uyarınca dernek genel kurul kararlarının iptali süresi hazır bulunanlar için 1 ay, hazır bulunmayanlar için 1 ay ve her hâlde 3 aydır; yönetim kurulunun kararlarına karşı ise iç denetim yolları tüketilmedikçe iptal davası açılamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'karar tarihinden başlayarak bir ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde',
      wrongPhrase: 'karar tarihinden başlayarak üç ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak altı ay içinde ve her hâlde karar tarihinden başlayarak bir yıl içinde',
      correctPhrase: 'karar tarihinden başlayarak bir ay içinde; toplantıda hazır bulunmayan her üye ise kararı öğrenmesinden başlayarak bir ay içinde ve her hâlde karar tarihinden başlayarak üç ay içinde',
      explanation: 'Dernek genel kurul kararlarının iptalinde hak düşürücü süreler 1 ay ve 3 aydır (TTK’daki 3 aylık anonim şirket iptal süresiyle karıştırılmamalıdır).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'genel kurul kararlarına katılmayan her dernek üyesi',
      wrongPhrase: 'karara olumlu oy vermiş olan üyeler de dahil olmak üzere her dernek üyesi',
      correctPhrase: 'genel kurul kararlarına katılmayan her dernek üyesi',
      explanation: 'Toplantıda hazır bulunup karara olumlu oy veren (katılan) üye, çelişkili davranış yasağı gereği genel kurul kararının iptali davası açamaz.'
    }
  },
  {
    id: 'rule-tmk-2',
    branch: 'Medeni',
    subTopic: 'Terk Sebebiyle Boşanma Süreleri',
    articleRef: 'TMK M. 164',
    trueStatement:
      'Terk sebebiyle boşanma davası açılabilmesi için ayrı yaşamanın en az altı ay sürmüş olması, hâkim veya noter tarafından yapılan ihtarın terk eden eşe en erken dördüncü ayın sonunda yapılması ve ihtardan sonra iki ay geçmedikçe dava açılmaması şarttır.',
    trueHighlight: ['ayrı yaşamanın en az altı ay sürmüş olması', 'en erken dördüncü ayın sonunda yapılması ve ihtardan sonra iki ay geçmedikçe'],
    trueCorrectPhrase: 'toplam en az 6 ay (en erken 4. ayın sonunda ihtar + ihtardan sonra 2 ay bekleme) ve ihtar hâkim veya noterce yapılır',
    baseExplanation: 'TMK m. 164 uyarınca terk nedeniyle boşanmada 4 + 2 = 6 ay kuralı uygulanır ve ihtar hâkim veya noter aracılığıyla yapılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en erken dördüncü ayın sonunda yapılması ve ihtardan sonra iki ay geçmedikçe dava açılmaması şarttır',
      wrongPhrase: 'en erken ikinci ayın sonunda yapılması ve ihtardan sonra bir ay geçmedikçe dava açılmaması şarttır',
      correctPhrase: 'en erken dördüncü ayın sonunda yapılması ve ihtardan sonra iki ay geçmedikçe dava açılmaması şarttır',
      explanation: 'TMK m. 164 uyarınca ihtar terkin üzerinden en az 4 ay geçmedikçe yapılamaz ve ihtardan sonra dava açmak için 2 ay beklenmelidir (4+2=6 ay).'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'hâkim veya noter tarafından yapılan ihtarın',
      wrongPhrase: 'yalnızca aile mahkemesi hâkimi tarafından yapılan ihtarın (noter ihtarı geçersizdir)',
      correctPhrase: 'hâkim veya noter tarafından yapılan ihtarın',
      explanation: '6217 sayılı Kanun değişikliği sonrasında terk ihtarı yalnızca hâkim tarafından değil, noter aracılığıyla da yapılabilir!'
    }
  },
  {
    id: 'rule-tmk-3',
    branch: 'Medeni',
    subTopic: 'Soybağının Reddi Davası Süresi',
    articleRef: 'TMK M. 289',
    trueStatement:
      'Koca, soybağının reddi davasını, doğumu ve baba olmadığını veya ananın gebe kaldığı sırada başka bir erkekle cinsel ilişkide bulunduğunu öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır.',
    trueHighlight: ['soybağının reddi davasını', 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır'],
    trueCorrectPhrase: 'öğrendiği tarihten başlayarak bir yıllık hak düşürücü süre içinde açmalıdır',
    baseExplanation: 'TMK m. 289/1 uyarınca soybağının reddi davasında 1 yıllık hak düşürücü süre uygulanır (Anayasa Mahkemesi kararıyla eski 5 yıllık üst sınır iptal edilmiştir).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır',
      wrongPhrase: 'öğrendiği tarihten başlayarak altı ay içinde açmak zorundadır',
      correctPhrase: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır',
      explanation: 'Soybağının reddi, tanımanın iptali ve babalık davalarında hak düşürücü süre 6 ay değil, öğrenmeden itibaren 1 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır',
      wrongPhrase: 'her hâlde doğumdan itibaren beş yıllık hak düşürücü süre içinde açmak zorundadır',
      correctPhrase: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır',
      explanation: 'TMK m. 289’daki "her hâlde doğumdan başlayarak beş yıl" ibaresi Anayasa Mahkemesi tarafından iptal edilmiştir!'
    }
  },
  {
    id: 'rule-tmk-4',
    branch: 'Medeni',
    subTopic: 'Tenkis ve Miras Sebebiyle İstihkak Davası Süreleri',
    articleRef: 'TMK M. 571 & 639',
    trueStatement:
      'Tenkis davası açma hakkı, mirasçıların saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden on yıl geçmekle düşer; tenkis iddiası def’i yoluyla her zaman ileri sürülebilir.',
    trueHighlight: ['öğrendikleri tarihten başlayarak bir yıl', 'üzerinden on yıl geçmekle düşer', 'def’i yoluyla her zaman ileri sürülebilir'],
    trueCorrectPhrase: 'tenkis davasında süre öğrenmeden itibaren 1 yıl ve her hâlde 10 yıldır; tenkis def’i ise her zaman ileri sürülebilir',
    baseExplanation: 'TMK m. 571 uyarınca tenkis davası öğrenmeden itibaren 1 yıl ve her hâlde 10 yıllık hak düşürücü süreye tabidir; ancak tenkis iddiası def’i yoluyla her zaman ileri sürülebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üzerinden on yıl geçmekle düşer',
      wrongPhrase: 'üzerinden beş yıl geçmekle düşer',
      correctPhrase: 'üzerinden on yıl geçmekle düşer',
      explanation: 'Tenkis ve ölüme bağlı tasarrufun iptali davalarında üst hak düşürücü süre 5 yıl değil, 10 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tenkis iddiası def’i yoluyla her zaman ileri sürülebilir',
      wrongPhrase: 'on yıllık hak düşürücü süre geçtikten sonra tenkis iddiası def’i yoluyla dahi ileri sürülemez',
      correctPhrase: 'tenkis iddiası def’i yoluyla her zaman ileri sürülebilir',
      explanation: 'TMK m. 571/son uyarınca tenkis (ve ölüme bağlı tasarrufun iptali) iddiası def’i yoluyla süreye bağlı olmaksızın her zaman ileri sürülebilir!'
    }
  },
  {
    id: 'rule-tmk-5',
    branch: 'Medeni',
    subTopic: 'Gaiplik Kararı İsteme Süreleri',
    articleRef: 'TMK M. 32-33',
    trueStatement:
      'Ölüm tehlikesi içinde kaybolan bir kimse hakkında gaiplik kararının istenebilmesi için tehlikenin üzerinden en az bir yıl, uzun zamandan beri haber alınamayan bir kimse hakkında gaiplik kararının istenebilmesi için ise son haber tarihinin üzerinden en az beş yıl geçmiş olması gerekir; mahkemece yapılacak ilk ilandan itibaren en az altı ay beklenir.',
    trueHighlight: ['tehlikenin üzerinden en az bir yıl', 'son haber tarihinin üzerinden en az beş yıl', 'ilk ilandan itibaren en az altı ay beklenir'],
    trueCorrectPhrase: 'ölüm tehlikesinde 1 yıl, uzun süreli habersizlikte 5 yıl; ilan süresi ise en az 6 aydır',
    baseExplanation: 'TMK m. 32 ve m. 33 uyarınca gaiplik başvuru süreleri 1 yıl ve 5 yıl, mahkeme ilan süresi ise en az 6 aydır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tehlikenin üzerinden en az bir yıl, uzun zamandan beri haber alınamayan bir kimse hakkında gaiplik kararının istenebilmesi için ise son haber tarihinin üzerinden en az beş yıl geçmiş olması gerekir',
      wrongPhrase: 'tehlikenin üzerinden en az beş yıl, uzun zamandan beri haber alınamayan bir kimse hakkında gaiplik kararının istenebilmesi için ise son haber tarihinin üzerinden en az on beş yıl geçmiş olması gerekir',
      correctPhrase: 'tehlikenin üzerinden en az bir yıl, uzun zamandan beri haber alınamayan bir kimse hakkında gaiplik kararının istenebilmesi için ise son haber tarihinin üzerinden en az beş yıl geçmiş olması gerekir',
      explanation: '5 yıl ve 15 yıl süreleri gaiplik isteme süresi değil, gaibin mirasçılarının terekeyi teslim alırken gösterecekleri güvence (teminat) süreleridir (TMK m. 584)! Gaiplik isteme süreleri 1 yıl ve 5 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ilk ilandan itibaren en az altı ay beklenir',
      wrongPhrase: 'ilk ilandan itibaren en az bir yıl beklenir',
      correctPhrase: 'ilk ilandan itibaren en az altı ay beklenir',
      explanation: 'TMK m. 33/2 uyarınca gaiplik kararının verilebilmesi için ilk ilanın yapıldığı günden başlayarak en az 6 ay geçmesi gerekir.'
    }
  },
  {
    id: 'rule-tmk-6',
    branch: 'Medeni',
    subTopic: 'Taşınır ve Taşınmazlarda Kazandırıcı Zamanaşımı Süreleri',
    articleRef: 'TMK M. 712-713 & 777',
    trueStatement:
      'Geçerli bir hukuki sebep olmaksızın tapu kütüğüne malik olarak yazılan kişi, taşınmaz üzerindeki zilyetliğini davasız ve aralıksız olarak on yıl süreyle ve iyiniyetle sürdürürse mülkiyet hakkını kazanır; tapuda kayıtlı olmayan taşınmazlarda olağanüstü kazandırıcı zamanaşımı süresi yirmi yıl, başkasının taşınır malını iyiniyetle ve malik sıfatıyla zilyetliğinde bulunduran kimsenin zamanaşımıyla kazanma süresi ise beş yıldır.',
    trueHighlight: ['on yıl süreyle ve iyiniyetle sürdürürse', 'olağanüstü kazandırıcı zamanaşımı süresi yirmi yıl', 'taşınır malını iyiniyetle ve malik sıfatıyla zilyetliğinde bulunduran kimsenin zamanaşımıyla kazanma süresi ise beş yıldır'],
    trueCorrectPhrase: 'taşınmaz olağan zamanaşımı 10 yıl, olağanüstü zamanaşımı 20 yıl; taşınır kazandırıcı zamanaşımı ise 5 yıldır',
    baseExplanation: 'TMK m. 712, m. 713 ve m. 777 uyarınca kazandırıcı zamanaşımı süreleri: taşınırlarda 5 yıl, taşınmaz olağan zamanaşımında 10 yıl, taşınmaz olağanüstü zamanaşımında 20 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'taşınır malını iyiniyetle ve malik sıfatıyla zilyetliğinde bulunduran kimsenin zamanaşımıyla kazanma süresi ise beş yıldır',
      wrongPhrase: 'taşınır malını iyiniyetle ve malik sıfatıyla zilyetliğinde bulunduran kimsenin zamanaşımıyla kazanma süresi ise üç yıldır',
      correctPhrase: 'taşınır malını iyiniyetle ve malik sıfatıyla zilyetliğinde bulunduran kimsenin zamanaşımıyla kazanma süresi ise beş yıldır',
      explanation: 'TMK m. 777 uyarınca taşınırlarda kazandırıcı zamanaşımı süresi 3 yıl değil, 5 yıldır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıl süreyle ve iyiniyetle sürdürürse mülkiyet hakkını kazanır; tapuda kayıtlı olmayan taşınmazlarda olağanüstü kazandırıcı zamanaşımı süresi yirmi yıl',
      wrongPhrase: 'beş yıl süreyle ve iyiniyetle sürdürürse mülkiyet hakkını kazanır; tapuda kayıtlı olmayan taşınmazlarda olağanüstü kazandırıcı zamanaşımı süresi on yıl',
      correctPhrase: 'on yıl süreyle ve iyiniyetle sürdürürse mülkiyet hakkını kazanır; tapuda kayıtlı olmayan taşınmazlarda olağanüstü kazandırıcı zamanaşımı süresi yirmi yıl',
      explanation: 'Taşınmazlarda olağan kazandırıcı zamanaşımı 10 yıl (TMK m. 712), olağanüstü kazandırıcı zamanaşımı ise 20 yıldır (TMK m. 713).'
    }
  },
  {
    id: 'rule-tmk-7',
    branch: 'Medeni',
    subTopic: 'Yasal Önalım (Şufa) Hakkı Kullanım Süreleri',
    articleRef: 'TMK M. 733',
    trueStatement:
      'Paylı mülkiyette bir payın üçüncü kişiye satılması hâlinde yasal önalım hakkı, satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer; cebrî artırmayla satışlarda ise önalım hakkı kullanılamaz.',
    trueHighlight: ['noter aracılığıyla bildirildiği tarihin üzerinden üç ay', 'her hâlde satışın üzerinden iki yıl geçmekle düşer', 'cebrî artırmayla satışlarda ise önalım hakkı kullanılamaz'],
    trueCorrectPhrase: 'noter bildiriminden itibaren 3 ay ve her hâlde satıştan itibaren 2 yıllık hak düşürücü süreye tabidir',
    baseExplanation: 'TMK m. 733 uyarınca yasal önalım hakkı alıcı veya satıcının noter bildirimi üzerine 3 ay ve her hâlde satıştan itibaren 2 yıl içinde dava yoluyla kullanılmalıdır; cebri artırmayla satışlarda önalım hakkı kullanılamaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer',
      wrongPhrase: 'satışın herhangi bir yolla öğrenildiği tarihin üzerinden bir ay ve her hâlde satışın üzerinden on yıl geçmekle düşer',
      correctPhrase: 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer',
      explanation: 'Yasal önalım hakkında 3 aylık kısa süre harici öğrenmeyle değil yalnızca noter bildirimiyle başlar; üst hak düşürücü süre ise 10 yıl değil, 2 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cebrî artırmayla satışlarda ise önalım hakkı kullanılamaz',
      wrongPhrase: 'icra dairesince yapılan cebrî artırmayla satışlarda da paydaşlar önalım hakkını kullanabilir',
      correctPhrase: 'cebrî artırmayla satışlarda ise önalım hakkı kullanılamaz',
      explanation: 'TMK m. 733/1 uyarınca cebrî artırmayla satışlarda önalım hakkı kullanılamaz.'
    }
  },
  {
    id: 'rule-tmk-8',
    branch: 'Medeni',
    subTopic: 'Vakıf Kurulması Şekli ve Tescil',
    articleRef: 'TMK M. 102',
    trueStatement:
      'Vakıf kurma iradesi, resmî senetle veya ölüme bağlı tasarrufla açıklanır; vakıf, yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır ve mahkeme tescil kararını re’sen Vakıflar Genel Müdürlüğüne bildirir.',
    trueHighlight: ['resmî senetle veya ölüme bağlı tasarrufla açıklanır', 'yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır'],
    trueCorrectPhrase: 'vakıf resmi senetle (noterde) veya ölüme bağlı tasarrufla kurulur ve mahkeme siciline tescille tüzel kişilik kazanır',
    baseExplanation: 'TMK m. 102 uyarınca vakıflar tek kişiyle dahi resmi senet veya ölüme bağlı tasarrufla kurulabilir ve mahkeme siciline tescille tüzel kişilik kazanır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'resmî senetle veya ölüme bağlı tasarrufla açıklanır',
      wrongPhrase: 'en az yedi gerçek veya tüzel kişinin adi yazılı sözleşmesiyle açıklanır',
      correctPhrase: 'resmî senetle veya ölüme bağlı tasarrufla açıklanır',
      explanation: 'En az 7 kişiyle ve bildirim sistemiyle kurulma "dernekler" (TMK m. 56) içindir! Vakıflar ise resmi senet veya ölüme bağlı tasarrufla kurulur.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır',
      wrongPhrase: 'kuruluş bildiriminin mülki idare amirliğine verildiği anda kendiliğinden tüzel kişilik kazanır',
      correctPhrase: 'yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır',
      explanation: 'Mülki idare amirliğine bildirimle tüzel kişilik kazanma derneklerde geçerlidir; vakıflarda ise mahkeme siciline tescil sistemi uygulanır.'
    }
  },
  {
    id: 'rule-tbk-1',
    branch: 'Borçlar',
    subTopic: 'Aşırı Yararlanma (Gabin) Süreleri',
    articleRef: 'TBK M. 28',
    trueStatement:
      'Aşırı yararlanma (gabin) durumunda zarar gören, düşüncesizlik veya deneyimsizliğini öğrendiği; zor durumda kalmada ise bu durumun ortadan kalktığı tarihten başlayarak bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde sözleşme ile bağlı olmadığını veya edimler arasındaki oransızlığın giderilmesini isteyebilir.',
    trueHighlight: ['başlayarak bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde', 'edimler arasındaki oransızlığın giderilmesini isteyebilir'],
    trueCorrectPhrase: 'öğrenmeden/zor durumun kalkmasından itibaren 1 yıl ve her hâlde sözleşmenin kurulmasından itibaren 5 yıl',
    baseExplanation: 'TBK m. 28/2 uyarınca aşırı yararlanmada (irade bozukluklarından farklı olarak) 1 yıllık kısa sürenin yanında sözleşmenin kurulmasından itibaren 5 yıllık mutlak üst hak düşürücü süre öngörülmüştür.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde',
      wrongPhrase: 'her hâlde sözleşmenin kurulduğu tarihten başlayarak on yıl içinde',
      correctPhrase: 'her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde',
      explanation: 'TBK m. 28/2 uyarınca aşırı yararlanmada üst hak düşürücü süre 10 yıl değil, sözleşmenin kurulduğu tarihten itibaren 5 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sözleşme ile bağlı olmadığını veya edimler arasındaki oransızlığın giderilmesini isteyebilir',
      wrongPhrase: 'yalnızca sözleşmenin tümden iptalini isteyebilir, edimler arasındaki oransızlığın giderilmesini talep edemez',
      correctPhrase: 'sözleşme ile bağlı olmadığını veya edimler arasındaki oransızlığın giderilmesini isteyebilir',
      explanation: '6098 sayılı TBK m. 28 ile zarar görene sözleşmeyi iptal etmeyip bağlı kalarak "edimler arasındaki oransızlığın giderilmesini" isteme hakkı da tanınmıştır.'
    }
  },
  {
    id: 'rule-tbk-2',
    branch: 'Borçlar',
    subTopic: 'Genel ve Beş Yıllık Zamanaşımı Süreleri',
    articleRef: 'TBK M. 146-147',
    trueStatement:
      'Kanunda aksine bir hüküm bulunmadıkça her alacak on yıllık zamanaşımına tabidir; ancak kira bedelleri, anapara faizleri, ücret alacakları ile vekâlet, komisyon, acentelik ve yüklenicinin ayıplı ifası dışındaki eser sözleşmesinden doğan alacaklar beş yıllık zamanaşımına tabidir.',
    trueHighlight: ['her alacak on yıllık zamanaşımına tabidir', 'beş yıllık zamanaşımına tabidir'],
    trueCorrectPhrase: 'genel zamanaşımı 10 yıl; kira, faiz, ücret, vekâlet, eser ve şirket sözleşmesi alacaklarında 5 yıldır',
    baseExplanation: 'TBK m. 146 ve m. 147 uyarınca genel zamanaşımı 10 yıl, dönemsel edimler ile vekâlet/eser/simsarlık/şirket sözleşmelerinden doğan alacaklarda ise 5 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıllık zamanaşımına tabidir',
      wrongPhrase: 'iki yıllık zamanaşımına tabidir',
      correctPhrase: 'beş yıllık zamanaşımına tabidir',
      explanation: 'Kira bedelleri, ücret alacakları, vekâlet ve eser sözleşmelerinden doğan alacaklarda zamanaşımı süresi 2 yıl değil, 5 yıldır (TBK m. 147).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'her alacak on yıllık zamanaşımına tabidir',
      wrongPhrase: 'her alacak yirmi yıllık zamanaşımına tabidir',
      correctPhrase: 'her alacak on yıllık zamanaşımına tabidir',
      explanation: 'TBK m. 146 uyarınca Borçlar Hukukunda genel zamanaşımı süresi 20 yıl değil, 10 yıldır.'
    }
  },
  {
    id: 'rule-tbk-3',
    branch: 'Borçlar',
    subTopic: 'Satış Sözleşmesinde Ayıptan Doğan Zamanaşımı',
    articleRef: 'TBK M. 231',
    trueStatement:
      'Taşınır satışında satıcının ayıptan doğan sorumluluğuna ilişkin davalar, satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar; satıcı satılanı ayıplı olarak devretmekte ağır kusurlu ise iki yıllık zamanaşımı süresinden yararlanamaz.',
    trueHighlight: ['satılanın alıcıya devrinden başlayarak iki yıl geçmekle', 'ağır kusurlu ise iki yıllık zamanaşımı süresinden yararlanamaz'],
    trueCorrectPhrase: 'taşınır satışında devirden itibaren 2 yıl (taşınmaz satışında 5 yıl) ve ağır kusurlu satıcı bu süreden yararlanamaz',
    baseExplanation: 'TBK m. 231 ve m. 244 uyarınca ayıptan doğan zamanaşımı taşınır satışında 2 yıl, taşınmaz satışında 5 yıldır; satıcının ağır kusuru varsa genel 10 yıllık zamanaşımı uygulanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'ayıbın alıcı tarafından fark edildiği tarihten başlayarak altı ay geçmekle zamanaşımına uğrar',
      correctPhrase: 'satılanın alıcıya devrinden başlayarak iki yıl geçmekle zamanaşımına uğrar',
      explanation: '6098 sayılı TBK m. 231 ile eski Borçlar Kanunu’ndaki 6 aylık süre kaldırılmış ve taşınır satışında devirden itibaren 2 yıllık zamanaşımı kabul edilmiştir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ağır kusurlu ise iki yıllık zamanaşımı süresinden yararlanamaz',
      wrongPhrase: 'ağır kusurlu olsa dahi iki yıllık zamanaşımı def’ini her zaman ileri sürebilir',
      correctPhrase: 'ağır kusurlu ise iki yıllık zamanaşımı süresinden yararlanamaz',
      explanation: 'TBK m. 231/2 uyarınca satıcı, satılanı ayıplı olarak devretmekte ağır kusurlu ise 2 yıllık kısa zamanaşımı süresinden yararlanamaz.'
    }
  },
  {
    id: 'rule-tbk-4',
    branch: 'Borçlar',
    subTopic: 'Konut ve Çatılı İşyeri Kiralarında On Yıllık Uzama Süresi',
    articleRef: 'TBK M. 347',
    trueStatement:
      'Konut ve çatılı işyeri kiralarında kiracı, belirli süreli sözleşmelerin süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça, sözleşme aynı koşullarla bir yıl için uzatılmış sayılır; kiraya veren ise sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez, ancak on yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce bildirimde bulunmak koşuluyla herhangi bir sebep göstermeksizin sözleşmeye son verebilir.',
    trueHighlight: ['bitiminden en az on beş gün önce', 'on yıllık uzama süresi sonunda', 'en az üç ay önce bildirimde bulunmak koşuluyla'],
    trueCorrectPhrase: 'kiracı bitimden en az 15 gün önce bildirimle, kiraya veren ise 10 yıllık uzama süresi + her uzama yılının bitiminden en az 3 ay önce bildirimle sona erdirebilir',
    baseExplanation: 'TBK m. 347 uyarınca konut/çatılı işyeri kirasında kiraya verenin sebepsiz fesih hakkı için "sözleşme süresi + 10 yıllık uzama süresi + yeni uzama yılından en az 3 ay önce yazılı bildirim" şarttır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'on yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce',
      wrongPhrase: 'kira sözleşmesinin kurulduğu tarihten itibaren beş yıl sonunda en az on beş gün önce',
      correctPhrase: 'on yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce',
      explanation: 'TBK m. 347’de kiraya verenin fesih hakkı 5 yıl değil, 10 yıllık uzama süresi sonunda doğar ve bildirim süresi 15 gün değil, en az 3 ay öncedir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça',
      wrongPhrase: 'süresinin bitiminden en az üç ay önce noterden bildirimde bulunmadıkça',
      correctPhrase: 'süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça',
      explanation: 'Belirli süreli konut/çatılı işyeri kirasında kiracının sözleşmeyi sona erdirmek için yapacağı bildirim süresi 3 ay değil, bitimden en az 15 gün öncedir.'
    }
  },
  {
    id: 'rule-tbk-5',
    branch: 'Borçlar',
    subTopic: 'Kefalet Sözleşmesinin Şekli ve Eşin Rızası',
    articleRef: 'TBK M. 583-584',
    trueStatement:
      'Kefalet sözleşmesi, yazılı şekilde yapılmadıkça ve kefilin sorumlu olacağı azamî miktar ile kefalet tarihi kendi el yazısıyla belirtilmedikçe geçerli olmaz; eşlerden biri mahkemece verilmiş bir ayrılık kararı olmadıkça veya yasal olarak ayrı yaşama hakkı doğmadıkça, ancak diğerinin yazılı rızasıyla kefil olabilir ve bu rızanın sözleşmenin kurulmasından önce ya da en geç kurulması anında verilmiş olması şarttır.',
    trueHighlight: ['azamî miktar ile kefalet tarihi kendi el yazısıyla belirtilmedikçe', 'sözleşmenin kurulmasından önce ya da en geç kurulması anında verilmiş olması şarttır'],
    trueCorrectPhrase: 'azami miktar ve tarih kefilin el yazısıyla yazılmalı; eşin yazılı rızası en geç sözleşme kurulurken alınmalıdır',
    baseExplanation: 'TBK m. 583 ve m. 584 uyarınca kefalette azami miktar ve tarih el yazısıyla yazılmalı; eşin yazılı rızası en geç kurulma anında verilmelidir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sözleşmenin kurulmasından önce ya da en geç kurulması anında verilmiş olması şarttır',
      wrongPhrase: 'sözleşme kurulduktan sonra herhangi bir zamanda sözlü veya yazılı icazet olarak verilmesi de yeterlidir',
      correctPhrase: 'sözleşmenin kurulmasından önce ya da en geç kurulması anında verilmiş olması şarttır',
      explanation: 'TBK m. 584/1 uyarınca kefalette eşin yazılı rızası sözleşmenin kurulmasından önce veya en geç kurulması anında verilmelidir; sonradan verilen icazet geçersiz kefaleti geçerli hale getirmez!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'azamî miktar ile kefalet tarihi kendi el yazısıyla belirtilmedikçe geçerli olmaz',
      wrongPhrase: 'matbu sözleşme metninin altının kefil tarafından imzalanması yeterli olup ayrıca el yazısı şartı aranmaz',
      correctPhrase: 'azamî miktar ile kefalet tarihi kendi el yazısıyla belirtilmedikçe geçerli olmaz',
      explanation: 'TBK m. 583/1 uyarınca kefilin sorumlu olacağı azami miktar, kefalet tarihi ve müteselsil kefil ise bu sıfatın bizzat kefilin kendi el yazısıyla yazılması geçerlilik şartıdır.'
    }
  },
  {
    id: 'rule-tbk-6',
    branch: 'Borçlar',
    subTopic: 'Önsözleşme ve Sözleşmeden Doğan Önalım-Alım-Geri Alım Süresi',
    articleRef: 'TBK M. 29 & 238',
    trueStatement:
      'Kanunlarda bir sözleşmenin geçerliliği, tarafların yararları gözetilerek şekle bağlanmışsa önsözleşmenin de aynı şekle uyularak yapılması gerekir; sözleşmeden doğan önalım, alım ve geri alım hakları ise en çok on yıllık süre için kararlaştırılabilir.',
    trueHighlight: ['önsözleşmenin de aynı şekle uyularak yapılması gerekir', 'en çok on yıllık süre için kararlaştırılabilir'],
    trueCorrectPhrase: 'önsözleşme asıl sözleşmenin şekline tabidir; sözleşmeden doğan önalım, alım ve geri alım hakları en çok 10 yıl için kararlaştırılabilir',
    baseExplanation: 'TBK m. 29 ve m. 238 uyarınca önsözleşme asıl sözleşmenin şekline tabidir ve sözleşmeden doğan önalım, alım ve geri alım hakları en çok 10 yıllık süre için kararlaştırılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en çok on yıllık süre için kararlaştırılabilir',
      wrongPhrase: 'en çok yirmi beş yıllık süre için kararlaştırılabilir',
      correctPhrase: 'en çok on yıllık süre için kararlaştırılabilir',
      explanation: 'TBK m. 238 uyarınca sözleşmeden doğan önalım (şufa), alım (iştira) ve geri alım (vefa) hakları en çok 10 yıllık süre için kararlaştırılabilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'önsözleşmenin de aynı şekle uyularak yapılması gerekir',
      wrongPhrase: 'önsözleşmeler şekil serbestisine tabi olup adi yazılı veya sözlü olarak yapılabilir',
      correctPhrase: 'önsözleşmenin de aynı şekle uyularak yapılması gerekir',
      explanation: 'TBK m. 29/2 uyarınca asıl sözleşme geçerlilik şekline bağlıysa (ör. taşınmaz satış vaadi) önsözleşmenin de resmi şekilde yapılması zorunludur.'
    }
  },

  // =========================================================================
  // 6. TİCARET HUKUKU & İCRA-İFLAS HUKUKU (TTK & İİK)
  // =========================================================================
  {
    id: 'rule-ttk-1',
    branch: 'Ticaret',
    subTopic: 'Haksız Rekabet Davalarında Zamanaşımı',
    articleRef: 'TTK M. 60',
    trueStatement:
      'Türk Ticaret Kanunu’na göre haksız rekabet sebebiyle açılacak hukuk davaları, davaya hakkı olan tarafın bu hakların doğumunu öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle'],
    trueCorrectPhrase: 'haksız rekabet davalarında zamanaşımı öğrenmeden itibaren 1 yıl ve her hâlde 3 yıldır',
    baseExplanation: 'TTK m. 60 uyarınca haksız rekabet davalarında zamanaşımı öğrenmeden itibaren 1 yıl ve her hâlde 3 yıldır (TBK m. 72’deki 2 ve 10 yıllık haksız fiil zamanaşımıyla karıştırılmamalıdır!).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'öğrendiği günden itibaren iki yıl ve her hâlde bunların doğumundan itibaren on yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar',
      explanation: '2 ve 10 yıl TBK’daki genel haksız fiil zamanaşımıdır; TTK m. 60 uyarınca ticari haksız rekabet davalarında zamanaşımı 1 yıl ve 3 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'zamanaşımına uğrar',
      wrongPhrase: 'hak düşürücü süreye uğrar ve hâkim tarafından re’sen dikkate alınır',
      correctPhrase: 'zamanaşımına uğrar',
      explanation: 'TTK m. 60’taki 1 ve 3 yıllık süreler hak düşürücü süre değil, zamanaşımı süresidir.'
    }
  },
  {
    id: 'rule-ttk-2',
    branch: 'Ticaret',
    subTopic: 'Anonim ve Limited Şirketlerde Asgari Sermaye',
    articleRef: 'TTK M. 332 & 580',
    trueStatement:
      'Cumhurbaşkanı kararıyla güncellenen tutarlara göre 2024 yılından itibaren yeni kurulan anonim şirketlerde en az esas sermaye tutarı iki yüz elli bin Türk lirası, kayıtlı sermaye sistemini kabul etmiş halka açık olmayan anonim şirketlerde başlangıç sermayesi beş yüz bin Türk lirası, limited şirketlerde ise en az esas sermaye tutarı elli bin Türk lirasıdır.',
    trueHighlight: ['anonim şirketlerde en az esas sermaye tutarı iki yüz elli bin Türk lirası', 'başlangıç sermayesi beş yüz bin Türk lirası', 'limited şirketlerde ise en az esas sermaye tutarı elli bin Türk lirasıdır'],
    trueCorrectPhrase: 'A.Ş. esas sermaye 250.000 TL, kayıtlı sermaye 500.000 TL, Ltd. Şti. 50.000 TL',
    baseExplanation: '7887 sayılı Cumhurbaşkanı Kararı (ve 7511 s.K.) uyarınca 1 Ocak 2024’ten itibaren asgari sermaye tutarları: A.Ş. 250.000 TL, Kayıtlı Sermayeli A.Ş. 500.000 TL, Ltd. Şti. 50.000 TL olmuştur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'anonim şirketlerde en az esas sermaye tutarı iki yüz elli bin Türk lirası, kayıtlı sermaye sistemini kabul etmiş halka açık olmayan anonim şirketlerde başlangıç sermayesi beş yüz bin Türk lirası, limited şirketlerde ise en az esas sermaye tutarı elli bin Türk lirasıdır',
      wrongPhrase: 'anonim şirketlerde en az esas sermaye tutarı elli bin Türk lirası, kayıtlı sermaye sistemini kabul etmiş halka açık olmayan anonim şirketlerde başlangıç sermayesi yüz bin Türk lirası, limited şirketlerde ise en az esas sermaye tutarı on bin Türk lirasıdır',
      correctPhrase: 'anonim şirketlerde en az esas sermaye tutarı iki yüz elli bin Türk lirası, kayıtlı sermaye sistemini kabul etmiş halka açık olmayan anonim şirketlerde başlangıç sermayesi beş yüz bin Türk lirası, limited şirketlerde ise en az esas sermaye tutarı elli bin Türk lirasıdır',
      explanation: 'Eski 50.000 TL / 100.000 TL / 10.000 TL tutarları 2024 itibarıyla 5 kat artırılarak 250.000 TL / 500.000 TL / 50.000 TL yapılmıştır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'limited şirketlerde ise en az esas sermaye tutarı elli bin Türk lirasıdır',
      wrongPhrase: 'limited şirketlerde asgari sermaye şartı tamamen kaldırılmış olup sermayesiz kurulabilir',
      correctPhrase: 'limited şirketlerde ise en az esas sermaye tutarı elli bin Türk lirasıdır',
      explanation: 'Limited şirketlerde asgari esas sermaye şartı kaldırılmamış, aksine 50.000 TL’ye yükseltilmiştir.'
    }
  },
  {
    id: 'rule-ttk-3',
    branch: 'Ticaret',
    subTopic: 'Poliçe ve Bonoda Zamanaşımı Süreleri',
    articleRef: 'TTK M. 749',
    trueStatement:
      'Poliçeyi kabul edene (ve bonoyu düzenleyene) karşı ileri sürülecek poliçeden doğan istemler vadenin geldiği tarihten itibaren üç yıl, hamilin cirantalara ve düzenleyene karşı açacağı başvurma davaları protesto tarihinden itibaren bir yıl, bir cirantanın başka cirantalara ve düzenleyene karşı açacağı davalar ise poliçeyi ödediği tarihten itibaren altı ay geçmekle zamanaşımına uğrar.',
    trueHighlight: ['vadenin geldiği tarihten itibaren üç yıl', 'protesto tarihinden itibaren bir yıl', 'altı ay geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'kabul edene/bono düzenleyene karşı 3 yıl, hamilin cirantalara karşı 1 yıl, cirantanın cirantaya karşı 6 ay (çekte ise tüm sorumlulara karşı 3 yıl!)',
    baseExplanation: 'TTK m. 749 uyarınca poliçe ve bonoda zamanaşımı 3 yıl - 1 yıl - 6 ay kademeli sistemine tabidir; çekte ise (TTK m. 814) tüm başvuru borçlularına karşı tek bir 3 yıllık zamanaşımı süresi uygulanır!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir cirantanın başka cirantalara ve düzenleyene karşı açacağı davalar ise poliçeyi ödediği tarihten itibaren altı ay geçmekle zamanaşımına uğrar',
      wrongPhrase: 'bir cirantanın başka cirantalara ve düzenleyene karşı açacağı davalar ise poliçeyi ödediği tarihten itibaren üç yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'bir cirantanın başka cirantalara ve düzenleyene karşı açacağı davalar ise poliçeyi ödediği tarihten itibaren altı ay geçmekle zamanaşımına uğrar',
      explanation: 'Poliçe ve bonoda cirantanın diğer cirantalara rücu zamanaşımı 3 yıl değil, 6 aydır (3 yıllık tek tip zamanaşımı yalnızca çekte geçerlidir).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'vadenin geldiği tarihten itibaren üç yıl',
      wrongPhrase: 'vadenin geldiği tarihten itibaren on yıl',
      correctPhrase: 'vadenin geldiği tarihten itibaren üç yıl',
      explanation: 'Kambiyo senetlerinde asıl borçluya karşı zamanaşımı süresi 10 yıl değil, vadeden itibaren 3 yıldır.'
    }
  },
  {
    id: 'rule-ttk-4',
    branch: 'Ticaret',
    subTopic: 'Ticari Defterlerin Saklama Süresi ve Ziyaı Belgesi',
    articleRef: 'TTK M. 82',
    trueStatement:
      'Her tacir, ticari defterlerini ve belgelerini son kayıt tarihinden itibaren on yıl süreyle saklamakla yükümlüdür; bir tacirin saklamakla yükümlü olduğu defter ve belgeler yangın, su baskını veya yer sarsıntısı gibi bir afet sebebiyle ziyaa uğrarsa tacir ziyaı öğrendiği tarihten itibaren otuz gün içinde ticari işletmesinin bulunduğu yer yetkili mahkemesinden kendisine bir zayi belgesi verilmesini isteyebilir.',
    trueHighlight: ['son kayıt tarihinden itibaren on yıl süreyle saklamakla yükümlüdür', 'ziyaı öğrendiği tarihten itibaren otuz gün içinde'],
    trueCorrectPhrase: 'ticari defter saklama süresi 10 yıl, zayi belgesi talep süresi ise öğrenmeden itibaren 30 gündür',
    baseExplanation: 'TTK m. 82/5 ve 7 uyarınca ticari defterleri saklama süresi 10 yıl, zayi belgesi talep süresi ise (7262 sayılı Kanun değişikliğiyle 15 günden artırılarak) öğrenmeden itibaren 30 günlük hak düşürücü süredir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ziyaı öğrendiği tarihten itibaren otuz gün içinde',
      wrongPhrase: 'ziyaı öğrendiği tarihten itibaren on beş gün içinde',
      correctPhrase: 'ziyaı öğrendiği tarihten itibaren otuz gün içinde',
      explanation: '7262 sayılı Kanun değişikliğiyle TTK m. 82/7’deki zayi belgesi isteme süresi 15 günden 30 güne çıkarılmıştır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'son kayıt tarihinden itibaren on yıl süreyle saklamakla yükümlüdür',
      wrongPhrase: 'son kayıt tarihinden itibaren beş yıl süreyle saklamakla yükümlüdür',
      correctPhrase: 'son kayıt tarihinden itibaren on yıl süreyle saklamakla yükümlüdür',
      explanation: '5 yıllık saklama süresi Vergi Usul Kanunu’ndadır; Türk Ticaret Kanunu m. 82 uyarınca ticari defterleri saklama süresi 10 yıldır!'
    }
  },
  {
    id: 'rule-ttk-5',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirket Yönetim Kurulu Üyelerinin Görev Süresi ve İptal Davası',
    articleRef: 'TTK M. 362 & 445',
    trueStatement:
      'Anonim şirket yönetim kurulu üyeleri en çok üç yıl süreyle görev yapmak üzere seçilirler ve esas sözleşmede aksine hüküm yoksa tekrar seçilebilirler; genel kurul kararlarına karşı ise karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir.',
    trueHighlight: ['en çok üç yıl süreyle görev yapmak üzere seçilirler', 'karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde'],
    trueCorrectPhrase: 'A.Ş. yönetim kurulu en çok 3 yıl için seçilir ve genel kurul kararlarına karşı 3 ay içinde asliye ticaret mahkemesinde iptal davası açılır',
    baseExplanation: 'TTK m. 362 ve m. 445 uyarınca A.Ş. yönetim kurulu görev süresi en çok 3 yıl, genel kurul kararlarının iptali davası süresi ise karar tarihinden itibaren 3 aydır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir',
      wrongPhrase: 'karar tarihinden itibaren bir ay içinde şirket merkezinin bulunduğu yerdeki sulh hukuk mahkemesinde iptal davası açılabilir',
      correctPhrase: 'karar tarihinden itibaren üç ay içinde şirket merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iptal davası açılabilir',
      explanation: 'Anonim ve limited şirket genel kurul kararlarının iptali davası 1 ay değil, karar tarihinden itibaren 3 ay içinde Asliye Ticaret Mahkemesinde açılır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en çok üç yıl süreyle görev yapmak üzere seçilirler ve esas sözleşmede aksine hüküm yoksa tekrar seçilebilirler',
      wrongPhrase: 'en çok bir yıl süreyle görev yapmak üzere seçilirler ve hiçbir koşulda tekrar seçilemezler',
      correctPhrase: 'en çok üç yıl süreyle görev yapmak üzere seçilirler ve esas sözleşmede aksine hüküm yoksa tekrar seçilebilirler',
      explanation: 'TTK m. 362 uyarınca anonim şirket yönetim kurulu üyeleri en çok 3 yıl süreyle seçilir ve esas sözleşmede aksine hüküm yoksa yeniden seçilebilirler.'
    }
  },
  {
    id: 'rule-ttk-6',
    branch: 'Ticaret',
    subTopic: 'Çekte İbraz Süreleri',
    articleRef: 'TTK M. 796',
    trueStatement:
      'Bir çek, düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay ve başka bir kıtada ödenecekse üç ay içinde muhataba ibraz edilmelidir; Avrupa ülkeleri ile Akdeniz’e sahili bulunan ülkeler aynı kıtada sayılır.',
    trueHighlight: ['düzenlendiği yerde ödenecekse on gün', 'başka bir yerde ödenecekse bir ay ve başka bir kıtada ödenecekse üç ay içinde'],
    trueCorrectPhrase: 'çekte ibraz süreleri: aynı yerde 10 gün, farklı yerde (veya aynı kıtada) 1 ay, farklı kıtada ise 3 aydır',
    baseExplanation: 'TTK m. 796 uyarınca çekte ibraz süreleri "10 gün - 1 ay - 3 ay" kuralına tabidir ve Avrupa ile Akdeniz ülkeleri aynı kıta sayılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay',
      wrongPhrase: 'düzenlendiği yerde ödenecekse otuz gün; düzenlendiği yerden başka bir yerde ödenecekse altı ay',
      correctPhrase: 'düzenlendiği yerde ödenecekse on gün; düzenlendiği yerden başka bir yerde ödenecekse bir ay',
      explanation: 'TTK m. 796 uyarınca çekte ibraz süresi aynı yerde 10 gün, farklı yerde ise 1 aydır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Avrupa ülkeleri ile Akdeniz’e sahili bulunan ülkeler aynı kıtada sayılır',
      wrongPhrase: 'bir Avrupa ülkesinde düzenlenip Türkiye’de ödenecek çeklerde farklı kıta süresi olan üç aylık ibraz süresi uygulanır',
      correctPhrase: 'Avrupa ülkeleri ile Akdeniz’e sahili bulunan ülkeler aynı kıtada sayılır',
      explanation: 'TTK m. 796/2 uyarınca Avrupa ülkeleri ile Akdeniz’e kıyısı olan ülkeler aynı kıta sayıldığından 3 ay değil, 1 aylık ibraz süresi uygulanır!'
    }
  },
  {
    id: 'rule-iik-1',
    branch: 'İcra',
    subTopic: 'Gecikmiş İtiraz Süresi ve Mercii',
    articleRef: 'İİK M. 65',
    trueStatement:
      'Borçlu kusuru olmaksızın bir mâni sebebiyle müddeti içinde ödeme emrine itiraz edememiş ise, mâninin kalktığı günden itibaren üç gün içinde mazeretini ve itiraz sebeplerini icra mahkemesine bildirebilir; gecikmiş itiraz başvurusu icra takibini kendiliğinden durdurmaz.',
    trueHighlight: ['mâninin kalktığı günden itibaren üç gün içinde', 'icra mahkemesine bildirebilir', 'gecikmiş itiraz başvurusu icra takibini kendiliğinden durdurmaz'],
    trueCorrectPhrase: 'engelin kalktığı günden itibaren üç gün içinde icra mahkemesine gecikmiş itirazda bulunulabilir ve takibi kendiliğinden durdurmaz',
    baseExplanation: 'İİK m. 65 uyarınca gecikmiş itirazda süre engelin kalkmasından itibaren 3 gündür ve normal itirazdan farklı olarak icra dairesine değil, İcra Mahkemesine yapılır; ayrıca takibi kendiliğinden durdurmaz!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'mâninin kalktığı günden itibaren üç gün içinde mazeretini ve itiraz sebeplerini icra mahkemesine bildirebilir',
      wrongPhrase: 'mâninin kalktığı günden itibaren yedi gün içinde mazeretini ve itiraz sebeplerini icra dairesine bildirebilir',
      correctPhrase: 'mâninin kalktığı günden itibaren üç gün içinde mazeretini ve itiraz sebeplerini icra mahkemesine bildirebilir',
      explanation: 'Gecikmiş itiraz hem süre (7 gün değil 3 gün) hem de mercii (icra dairesi değil icra mahkemesi) bakımından olağan ödeme emrine itirazdan ayrılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'gecikmiş itiraz başvurusu icra takibini kendiliğinden durdurmaz',
      wrongPhrase: 'gecikmiş itiraz başvurusu tıpkı olağan itiraz gibi icra takibini kendiliğinden durdurur',
      correctPhrase: 'gecikmiş itiraz başvurusu icra takibini kendiliğinden durdurmaz',
      explanation: 'İİK m. 65/3 uyarınca gecikmiş itiraz takibi kendiliğinden durdurmaz; icra mahkemesinin takibin geçici olarak durdurulmasına karar vermesi gerekir.'
    }
  },
  {
    id: 'rule-iik-2',
    branch: 'İcra',
    subTopic: 'Menfi Tespit ve İstirdat Davası',
    articleRef: 'İİK M. 72',
    trueStatement:
      'Takibi kesinleşen borçlu, cebri icra tehdidi altında ödemek zorunda kaldığı paranın geri alınması için ödeme tarihinden itibaren bir yıl içinde genel mahkemelerde istirdat davası açabilir; menfi tespit davası devam ederken borç ödenirse dava kendiliğinden istirdat davasına dönüşür.',
    trueHighlight: ['ödeme tarihinden itibaren bir yıl içinde genel mahkemelerde istirdat davası açabilir', 'dava kendiliğinden istirdat davasına dönüşür'],
    trueCorrectPhrase: 'ödeme tarihinden itibaren bir yıllık hak düşürücü süre içinde genel mahkemelerde istirdat davası açılabilir',
    baseExplanation: 'İİK m. 72/6 ve 7 uyarınca istirdat (geri alma) davası tamamen ödenen tarihten itibaren 1 yıllık hak düşürücü süreye tabidir ve genel mahkemelerde açılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ödeme tarihinden itibaren bir yıl içinde genel mahkemelerde istirdat davası açabilir',
      wrongPhrase: 'ödeme tarihinden itibaren altı ay içinde icra mahkemesinde istirdat davası açabilir',
      correctPhrase: 'ödeme tarihinden itibaren bir yıl içinde genel mahkemelerde istirdat davası açabilir',
      explanation: 'İstirdat davası İcra Mahkemesinde değil genel mahkemelerde açılır ve süresi 6 ay değil, ödemeden itibaren 1 yıllık hak düşürücü süredir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'menfi tespit davası devam ederken borç ödenirse dava kendiliğinden istirdat davasına dönüşür',
      wrongPhrase: 'menfi tespit davası devam ederken borç ödenirse dava konusuz kalır ve borçlunun harç yatırarak yeni bir istirdat davası açması gerekir',
      correctPhrase: 'menfi tespit davası devam ederken borç ödenirse dava kendiliğinden istirdat davasına dönüşür',
      explanation: 'İİK m. 72/6 uyarınca menfi tespit davası sırasında borç alacaklıya ödenirse davaya kendiliğinden istirdat davası olarak devam edilir.'
    }
  },
  {
    id: 'rule-iik-3',
    branch: 'İcra',
    subTopic: 'Haciz İsteme ve Satış İsteme Süreleri',
    articleRef: 'İİK M. 78 & 106',
    trueStatement:
      'Ödeme emrinin tebliği tarihinden itibaren bir yıl içinde alacaklı haciz istemezse takip dosyası işlemden kaldırılır; alacaklı veya borçlu hacizden itibaren bir yıl içinde taşınır veya taşınmaz malın satışını isteyebilir.',
    trueHighlight: ['Ödeme emrinin tebliği tarihinden itibaren bir yıl içinde', 'hacizden itibaren bir yıl içinde taşınır veya taşınmaz malın satışını isteyebilir'],
    trueCorrectPhrase: 'haciz isteme süresi ödeme emrinin tebliğinden itibaren 1 yıl, taşınır ve taşınmaz satış isteme süresi de hacizden itibaren 1 yıldır',
    baseExplanation: '7343 sayılı Kanun değişikliğiyle İİK m. 106’daki taşınır (eski 6 ay) ve taşınmaz (eski 1 yıl) satış isteme süreleri eşitlenmiş ve her ikisi için de hacizden itibaren 1 yıl olarak düzenlenmiştir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hacizden itibaren bir yıl içinde taşınır veya taşınmaz malın satışını isteyebilir',
      wrongPhrase: 'hacizden itibaren taşınır mallarda altı ay, taşınmaz mallarda ise iki yıl içinde satış isteyebilir',
      correctPhrase: 'hacizden itibaren bir yıl içinde taşınır veya taşınmaz malın satışını isteyebilir',
      explanation: '7343 sayılı Kanun değişikliğiyle taşınır (6 ay) ve taşınmaz (1 yıl) satış isteme süresi ayrımı kaldırılmış; hem taşınır hem taşınmazlarda satış isteme süresi hacizden itibaren 1 yıl olmuştur!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Ödeme emrinin tebliği tarihinden itibaren bir yıl içinde alacaklı haciz istemezse takip dosyası işlemden kaldırılır',
      wrongPhrase: 'Ödeme emrinin tebliği tarihinden itibaren altı ay içinde alacaklı haciz istemezse takip tamamen iptal edilir',
      correctPhrase: 'Ödeme emrinin tebliği tarihinden itibaren bir yıl içinde alacaklı haciz istemezse takip dosyası işlemden kaldırılır',
      explanation: 'İİK m. 78 uyarınca haciz isteme süresi ödeme emrinin tebliğinden itibaren 1 yıldır ve bu sürede haciz istenmezse takip iptal edilmez, dosya işlemden kaldırılır.'
    }
  },
  {
    id: 'rule-iik-4',
    branch: 'İcra',
    subTopic: 'İhalenin Feshi Süresi ve Mercii',
    articleRef: 'İİK M. 134',
    trueStatement:
      'İcra dairesince yapılan ihalenin feshi, ihale tarihinden itibaren yedi gün içinde icra mahkemesinden istenebilir; ihalenin feshini yalnızca satış isteyen alacaklı, borçlu, haczedilen malın resmî sicilindeki ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler isteyebilir.',
    trueHighlight: ['ihale tarihinden itibaren yedi gün içinde icra mahkemesinden istenebilir', 'yalnızca satış isteyen alacaklı, borçlu'],
    trueCorrectPhrase: 'ihale tarihinden itibaren yedi gün içinde icra mahkemesinden istenebilir',
    baseExplanation: 'İİK m. 134 uyarınca ihalenin feshi şikâyet yoluyla ihale tarihinden itibaren 7 gün içinde (tebligat usulsüzlüğü veya fesat hallerinde öğrenmeden itibaren 7 gün, her hâlde 1 yıl içinde) İcra Mahkemesinden istenir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ihale tarihinden itibaren yedi gün içinde icra mahkemesinden istenebilir',
      wrongPhrase: 'ihale tarihinden itibaren on beş gün içinde asliye hukuk mahkemesinde açılacak davayla istenebilir',
      correctPhrase: 'ihale tarihinden itibaren yedi gün içinde icra mahkemesinden istenebilir',
      explanation: 'İhalenin feshi genel mahkemelerde dava yoluyla değil, ihale tarihinden itibaren 7 gün içinde İcra Mahkemesinden şikâyet yoluyla talep edilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yalnızca satış isteyen alacaklı, borçlu, haczedilen malın resmî sicilindeki ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler isteyebilir',
      wrongPhrase: 'borçlunun tüm adi alacaklıları ve ihaleyi izlemeye gelen herkes herhangi bir sınırlama olmaksızın isteyebilir',
      correctPhrase: 'yalnızca satış isteyen alacaklı, borçlu, haczedilen malın resmî sicilindeki ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler isteyebilir',
      explanation: 'İİK m. 134’te ihalenin feshini isteyebilecek kişiler sınırlı sayıda (numerus clausus) sayılmıştır.'
    }
  },
  {
    id: 'rule-iik-5',
    branch: 'İcra',
    subTopic: 'İtirazın İptali ve İtirazın Kaldırılması Süreleri',
    articleRef: 'İİK M. 67-68',
    trueStatement:
      'Takip talebine itiraz edilen alacaklı, itirazın tebliği tarihinden itibaren bir yıl içinde genel mahkemelerde itirazın iptali davası açabilir veya elinde İİK m. 68’de sayılan belgelerden biri varsa altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir; her iki yolda da haksız çıkan taraf aleyhine talep şartıyla yüzde yirmiden aşağı olmamak üzere icra inkâr tazminatına hükmedilir.',
    trueHighlight: ['bir yıl içinde genel mahkemelerde itirazın iptali davası', 'altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir', 'yüzde yirmiden aşağı olmamak üzere'],
    trueCorrectPhrase: 'itirazın iptali davası 1 yıl içinde genel mahkemede, itirazın kaldırılması ise 6 ay içinde icra mahkemesinde istenir; tazminat oranı en az %20’dir',
    baseExplanation: 'İİK m. 67 ve m. 68 uyarınca itirazın iptali 1 yıl (genel mahkeme), itirazın kaldırılması 6 ay (icra mahkemesi) süresine tabidir ve icra inkâr tazminatı alt sınırı %20’dir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yıl içinde genel mahkemelerde itirazın iptali davası açabilir veya elinde İİK m. 68’de sayılan belgelerden biri varsa altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      wrongPhrase: 'altı ay içinde icra mahkemesinde itirazın iptali davası açabilir veya bir yıl içinde genel mahkemelerden itirazın kaldırılmasını isteyebilir',
      correctPhrase: 'bir yıl içinde genel mahkemelerde itirazın iptali davası açabilir veya elinde İİK m. 68’de sayılan belgelerden biri varsa altı ay içinde icra mahkemesinden itirazın kaldırılmasını isteyebilir',
      explanation: 'ÖSYM, İtirazın İptali (1 yıl - Genel Mahkeme) ile İtirazın Kaldırılması (6 ay - İcra Mahkemesi) süre ve mercilerini çaprazlayarak sorar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'talep şartıyla yüzde yirmiden aşağı olmamak üzere icra inkâr tazminatına hükmedilir',
      wrongPhrase: 'alacaklının talebi olmasa dahi mahkemece re’sen yüzde kırktan aşağı olmamak üzere icra inkâr tazminatına hükmedilir',
      correctPhrase: 'talep şartıyla yüzde yirmiden aşağı olmamak üzere icra inkâr tazminatına hükmedilir',
      explanation: 'İcra inkâr tazminatına hükmedilebilmesi için mutlaka talep şarttır (re’sen hükmedilemez) ve asgari oran %40 değil, %20’dir.'
    }
  },
  {
    id: 'rule-iik-6',
    branch: 'İcra',
    subTopic: 'İhtiyati Hacizde Uygulama, Tamamlama Merasimi ve İtiraz Süreleri',
    articleRef: 'İİK M. 261-265',
    trueStatement:
      'Alacaklı, ihtiyati haciz kararının verildiği tarihten itibaren on gün içinde kararı veren mahkemenin yargı çevresindeki icra dairesinden kararın infazını istemeye mecburdur; dava açılmadan veya takip yapılmadan önce uygulanan ihtiyati hacizde alacaklı yedi gün içinde takip talebinde bulunmak veya dava açmak zorundadır ve borçlu ihtiyati haciz kararına karşı yedi gün içinde itiraz edebilir.',
    trueHighlight: ['kararının verildiği tarihten itibaren on gün içinde', 'yedi gün içinde takip talebinde bulunmak veya dava açmak zorundadır'],
    trueCorrectPhrase: 'ihtiyati haczin infazını isteme 10 gün, tamamlama merasimi (esas takip/dava) 7 gün, karara itiraz süresi de 7 gündür',
    baseExplanation: 'İİK m. 261, m. 264 ve m. 265 uyarınca ihtiyati hacizde "10 gün infaz + 7 gün tamamlama + 7 gün itiraz" süreleri uygulanır (ihtiyati tedbirdeki 1 hafta + 2 hafta ile karıştırılmamalıdır!).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kararının verildiği tarihten itibaren on gün içinde kararı veren mahkemenin yargı çevresindeki icra dairesinden kararın infazını istemeye mecburdur',
      wrongPhrase: 'kararının verildiği tarihten itibaren bir hafta içinde kararı veren mahkemenin yazı işleri müdürlüğünden kararın infazını istemeye mecburdur',
      correctPhrase: 'kararının verildiği tarihten itibaren on gün içinde kararı veren mahkemenin yargı çevresindeki icra dairesinden kararın infazını istemeye mecburdur',
      explanation: 'İhtiyati haciz kararının uygulanmasını (infazını) isteme süresi 1 hafta (ihtiyati tedbir) değil, kararın verildiği tarihten itibaren 10 gündür!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yedi gün içinde takip talebinde bulunmak veya dava açmak zorundadır',
      wrongPhrase: 'iki hafta içinde takip talebinde bulunmak veya dava açmak zorundadır',
      correctPhrase: 'yedi gün içinde takip talebinde bulunmak veya dava açmak zorundadır',
      explanation: '2 hafta ihtiyati tedbirde esas dava açma süresidir; ihtiyati haczi tamamlama merasimi süresi ise İİK m. 264 uyarınca 7 gündür!'
    }
  },
  {
    id: 'rule-iik-7',
    branch: 'İcra',
    subTopic: 'Tasarrufun İptali Davasında Hak Düşürücü Süre ve İvazsız Tasarruflar',
    articleRef: 'İİK M. 278 & 284',
    trueStatement:
      'Tasarrufun iptali davası açma hakkı, batıl tasarrufun vukuu tarihinden itibaren beş yıl geçmekle düşer; borçlunun haciz veya aciz yahut iflasın açılmasından önceki son iki yıl içinde yaptığı ivazsız tasarruflar ve bağışlamalar batıldır.',
    trueHighlight: ['batıl tasarrufun vukuu tarihinden itibaren beş yıl geçmekle düşer', 'son iki yıl içinde yaptığı ivazsız tasarruflar ve bağışlamalar batıldır'],
    trueCorrectPhrase: 'tasarrufun iptali davası hak düşürücü süresi 5 yıl, ivazsız tasarruflarda geriye dönük şüpheli dönem ise 2 yıldır',
    baseExplanation: 'İİK m. 278, m. 279 ve m. 284 uyarınca tasarrufun iptali davası genel hak düşürücü süresi 5 yıl, ivazsız tasarruflarda (bağışlamalarda) geriye dönük süre 2 yıl, aciz halinde yapılan tasarruflarda ise 1 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'batıl tasarrufun vukuu tarihinden itibaren beş yıl geçmekle düşer',
      wrongPhrase: 'alacaklının tasarrufu öğrendiği tarihten itibaren on yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'batıl tasarrufun vukuu tarihinden itibaren beş yıl geçmekle düşer',
      explanation: 'İİK m. 284 uyarınca tasarrufun iptali davası süresi öğrenmeden değil, tasarrufun yapıldığı tarihten itibaren işleyen 5 yıllık hak düşürücü süredir.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'son iki yıl içinde yaptığı ivazsız tasarruflar ve bağışlamalar batıldır',
      wrongPhrase: 'son altı ay içinde yaptığı ivazsız tasarruflar ve bağışlamalar batıldır',
      correctPhrase: 'son iki yıl içinde yaptığı ivazsız tasarruflar ve bağışlamalar batıldır',
      explanation: 'İİK m. 278 uyarınca ivazsız tasarrufların (bağışlamaların) iptale tabi olduğu geriye dönük süre 6 ay değil, 2 yıldır.'
    }
  },
  {
    id: 'rule-iik-8',
    branch: 'İcra',
    subTopic: 'Konkordato Geçici ve Kesin Mühlet Süreleri',
    articleRef: 'İİK M. 287 & 289',
    trueStatement:
      'Asliye ticaret mahkemesi konkordato talebi üzerine belgelerin eksiksiz olduğunu tespit ederse derhâl üç aylık geçici mühlet kararı verir ve bu süreyi en fazla iki ay daha uzatabilir; konkordatonun başarıya ulaşmasının mümkün olduğu anlaşılırsa borçluya bir yıllık kesin mühlet verilir ve bu süre zorunlu hallerde altı aya kadar uzatılabilir.',
    trueHighlight: ['üç aylık geçici mühlet kararı verir ve bu süreyi en fazla iki ay daha uzatabilir', 'bir yıllık kesin mühlet verilir ve bu süre zorunlu hallerde altı aya kadar uzatılabilir'],
    trueCorrectPhrase: 'geçici mühlet 3 ay (+2 ay uzatma = 5 ay), kesin mühlet 1 yıl (+6 ay uzatma = 18 ay) ve görevli mahkeme asliye ticaret mahkemesidir',
    baseExplanation: 'İİK m. 287 ve m. 289 uyarınca konkordatoda geçici mühlet 3+2=5 ay, kesin mühlet 12+6=18 aydır ve görevli mahkeme İcra Mahkemesi değil, Asliye Ticaret Mahkemesidir!',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç aylık geçici mühlet kararı verir ve bu süreyi en fazla iki ay daha uzatabilir; konkordatonun başarıya ulaşmasının mümkün olduğu anlaşılırsa borçluya bir yıllık kesin mühlet verilir',
      wrongPhrase: 'altı aylık geçici mühlet kararı verir ve bu süreyi en fazla altı ay daha uzatabilir; konkordatonun başarıya ulaşmasının mümkün olduğu anlaşılırsa borçluya iki yıllık kesin mühlet verilir',
      correctPhrase: 'üç aylık geçici mühlet kararı verir ve bu süreyi en fazla iki ay daha uzatabilir; konkordatonun başarıya ulaşmasının mümkün olduğu anlaşılırsa borçluya bir yıllık kesin mühlet verilir',
      explanation: 'Konkordatoda geçici mühlet 3 ay (+ en çok 2 ay uzatma = toplam 5 ay), kesin mühlet ise 1 yıl (+ en çok 6 ay uzatma = toplam 18 ay) olarak uygulanır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Asliye ticaret mahkemesi konkordato talebi üzerine',
      wrongPhrase: 'İcra mahkemesi konkordato talebi üzerine',
      correctPhrase: 'Asliye ticaret mahkemesi konkordato talebi üzerine',
      explanation: '7101 sayılı Kanun değişikliği sonrasında konkordato taleplerinde görevli mahkeme İcra Mahkemesi değil, Asliye Ticaret Mahkemesidir!'
    }
  },
  {
    id: 'rule-iik-9',
    branch: 'İcra',
    subTopic: 'Kambiyo Senetlerine Özgü Haciz Yoluyla Takipte Süreler',
    articleRef: 'İİK M. 168-170',
    trueStatement:
      'Kambiyo senetlerine mahsus haciz yoluyla takipte ödeme süresi on gün, ödeme emrine itiraz ve şikâyet süresi ise ödeme emrinin tebliğinden itibaren beş gündür; borca veya imzaya itiraz icra dairesine değil, dilekçeyle icra mahkemesine yapılır ve satıştan başka icra takip muamelelerini kendiliğinden durdurmaz.',
    trueHighlight: ['ödeme süresi on gün', 'itiraz ve şikâyet süresi ise ödeme emrinin tebliğinden itibaren beş gündür', 'dilekçeyle icra mahkemesine yapılır ve satıştan başka icra takip muamelelerini kendiliğinden durdurmaz'],
    trueCorrectPhrase: 'kambiyo takibinde ödeme süresi 10 gün, itiraz süresi 5 gündür; itiraz İcra Mahkemesine yapılır ve satıştan başka takip işlemlerini kendiliğinden durdurmaz',
    baseExplanation: 'İİK m. 168-170 uyarınca kambiyo senetlerine özgü haciz yoluyla takipte ödeme süresi 10 gün, itiraz süresi 5 gündür, mercii İcra Mahkemesidir ve satış dışındaki işlemleri kendiliğinden durdurmaz.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ödeme emrine itiraz ve şikâyet süresi ise ödeme emrinin tebliğinden itibaren beş gündür; borca veya imzaya itiraz icra dairesine değil, dilekçeyle icra mahkemesine yapılır',
      wrongPhrase: 'ödeme emrine itiraz süresi yedi gündür ve sözlü veya yazılı olarak icra dairesine yapılır',
      correctPhrase: 'ödeme emrine itiraz ve şikâyet süresi ise ödeme emrinin tebliğinden itibaren beş gündür; borca veya imzaya itiraz icra dairesine değil, dilekçeyle icra mahkemesine yapılır',
      explanation: 'Kambiyo senetlerine özgü haciz yoluyla takipte itiraz süresi 7 gün değil 5 gündür ve icra dairesine değil, dilekçeyle İcra Mahkemesine yapılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'satıştan başka icra takip muamelelerini kendiliğinden durdurmaz',
      wrongPhrase: 'haciz de dahil olmak üzere tüm icra takip muamelelerini kendiliğinden durdurur',
      correctPhrase: 'satıştan başka icra takip muamelelerini kendiliğinden durdurmaz',
      explanation: 'Kambiyo takibinde ödeme emrine itiraz (genel haciz yolundan farklı olarak!) haczi durdurmaz; yalnızca satışı durdurur.'
    }
  },
  // =========================================================================
  // EK DERİNLİK PAKETİ (TÜM 10 BRANŞTA İLERİ DÜZEY HMGS TUZAKLARI)
  // =========================================================================
  {
    id: 'rule-hmk-10',
    branch: 'HMK',
    subTopic: 'Davaya Vekâlette Özel Yetki Gerektiren Haller',
    articleRef: 'M. 74',
    trueStatement:
      'Açıkça yetki verilmemiş ise vekil; sulh olamaz, hâkimi reddedemez, davanın tamamını ıslah edemez, yemin teklif edemez, yemini kabul, iade veya reddedemez, alternatif uyuşmazlık çözüm yollarına başvuramaz, feragat ve kabulde bulunamaz ve kanun yollarından feragat edemez.',
    trueHighlight: ['Açıkça yetki verilmemiş ise vekil', 'sulh olamaz, hâkimi reddedemez, davanın tamamını ıslah edemez', 'feragat ve kabulde bulunamaz'],
    trueCorrectPhrase: 'sulh, hâkimin reddi, davanın tamamının ıslahı, yemin teklifi, feragat ve kabul için vekâletnamede açık (özel) yetki bulunması şarttır',
    baseExplanation: 'HMK m. 74 uyarınca sulh, feragat, kabul, yemin teklifi, hâkimin reddi, davanın tamamının ıslahı ve alternatif uyuşmazlık çözüm yollarına başvuru için vekâletnamede özel yetki aranır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'sulh olamaz, hâkimi reddedemez, davanın tamamını ıslah edemez, yemin teklif edemez',
      wrongPhrase: 'delil bildiremez, tanık dinletemez, bilirkişi raporuna itiraz edemez ve istinaf kanun yoluna başvuramaz',
      correctPhrase: 'sulh olamaz, hâkimi reddedemez, davanın tamamını ıslah edemez, yemin teklif edemez',
      explanation: 'Delil bildirmek, tanık göstermek ve kanun yoluna başvurmak genel dava vekâletnamesi kapsamındadır; ancak kanun yollarından feragat, sulh, davadan feragat ve kabul özel yetki gerektirir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Açıkça yetki verilmemiş ise vekil; sulh olamaz',
      wrongPhrase: 'Genel dava vekâletnamesine sahip olan vekil ayrıca özel yetki aranmaksızın sulh olabilir, ancak',
      correctPhrase: 'Açıkça yetki verilmemiş ise vekil; sulh olamaz',
      explanation: 'HMK m. 74 uyarınca vekilin sulh olabilmesi için vekâletnamesinde açıkça özel yetki bulunması zorunludur.'
    }
  },
  {
    id: 'rule-hmk-11',
    branch: 'HMK',
    subTopic: 'Ön İnceleme Duruşması ve Yetki-Görev İncelemesi',
    articleRef: 'M. 137-140',
    trueStatement:
      'Dilekçelerin karşılıklı verilmesinden sonra ön inceleme yapılır; mahkeme ön incelemede dava şartlarını ve ilk itirazları inceler, uyuşmazlık konularını tam olarak belirler ve tarafları sulhe veya arabuluculuğa teşvik eder; ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata geçilemez.',
    trueHighlight: ['ön incelemede dava şartlarını ve ilk itirazları inceler', 'tarafları sulhe veya arabuluculuğa teşvik eder', 'ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata geçilemez'],
    trueCorrectPhrase: 'ön incelemede dava şartları ve ilk itirazlar incelenir; ön inceleme tamamlanmadan tahkikata geçilemez ve tahkikat için duruşma günü verilemez',
    baseExplanation: 'HMK m. 137-138 uyarınca ön inceleme aşaması tamamlanmadan tahkikata geçilemez ve tahkikat için duruşma günü belirlenemez.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata geçilemez',
      wrongPhrase: 'mahkeme iş yüküne göre ön inceleme yapmaksızın doğrudan tahkikat duruşması açabilir',
      correctPhrase: 'ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata geçilemez',
      explanation: 'HMK m. 137/2 emredici hükmü uyarınca ön inceleme tamamlanmadan ve gerekli kararlar alınmadan tahkikata kesinlikle geçilemez.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mahkeme ön incelemede dava şartlarını ve ilk itirazları inceler',
      wrongPhrase: 'mahkeme ön incelemede ilk itirazları inceleyemez, ilk itirazları ancak sözlü yargılama aşamasında karara bağlar',
      correctPhrase: 'mahkeme ön incelemede dava şartlarını ve ilk itirazları inceler',
      explanation: 'İlk itirazlar (kesin olmayan yetki ve tahkim itirazı) en geç ön inceleme aşamasında incelenip karara bağlanır; tahkikat başladıktan sonra incelenemez.'
    }
  },
  {
    id: 'rule-hmk-12',
    branch: 'HMK',
    subTopic: 'İhtiyati Tedbirde Görevli Mahkeme ve Dava Açma Süresi',
    articleRef: 'M. 390 & 397',
    trueStatement:
      'İhtiyati tedbir, dava açılmadan önce esas hakkında görevli ve yetkili olan mahkemeden, dava açıldıktan sonra ise ancak asıl davanın görüldüğü mahkemeden talep edilir; ihtiyati tedbir kararı dava açılmasından önce verilmişse, tedbir talep eden bu kararın uygulanmasını talep ettiği tarihten itibaren iki hafta içinde esas hakkındaki davasını açmak zorundadır.',
    trueHighlight: ['esas hakkında görevli ve yetkili olan mahkemeden', 'asıl davanın görüldüğü mahkemeden talep edilir', 'iki hafta içinde esas hakkındaki davasını açmak zorundadır'],
    trueCorrectPhrase: 'dava öncesi ihtiyati tedbirde tamamlayıcı merasim (esas davayı açma) süresi 2 haftadır ve tedbir esas hakkında görevli/yetkili mahkemeden istenir',
    baseExplanation: 'HMK m. 390 ve m. 397 uyarınca ihtiyati tedbir dava açılmadan önce esas hakkında görevli ve yetkili mahkemeden istenir; tedbirin uygulanmasını talep tarihinden itibaren 2 hafta içinde esas dava açılmazsa tedbir kendiliğinden kalkar.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'iki hafta içinde esas hakkındaki davasını açmak zorundadır',
      wrongPhrase: 'yedi gün içinde esas hakkındaki davasını açmak zorundadır',
      correctPhrase: 'iki hafta içinde esas hakkındaki davasını açmak zorundadır',
      explanation: 'İhtiyati hacizde (İİK m. 264) tamamlayıcı merasim süresi 7 gün iken, HMK m. 397 uyarınca ihtiyati tedbirde esas davayı açma süresi 2 haftadır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'dava açıldıktan sonra ise ancak asıl davanın görüldüğü mahkemeden talep edilir',
      wrongPhrase: 'dava açıldıktan sonra da Türkiye’deki herhangi bir nöbetçi sulh hukuk mahkemesinden talep edilebilir',
      correctPhrase: 'dava açıldıktan sonra ise ancak asıl davanın görüldüğü mahkemeden talep edilir',
      explanation: 'Dava açıldıktan sonra ihtiyati tedbir yalnızca asıl davanın görüldüğü mahkemeden talep edilebilir.'
    }
  },
  {
    id: 'rule-hmk-13',
    branch: 'HMK',
    subTopic: 'Yargılamanın İadesi Süresi ve İnceleme Mercii',
    articleRef: 'M. 377-378',
    trueStatement:
      'Yargılamanın iadesi süresi, sebebin öğrenildiği veya kesin hüküm onama kararının tebliğ edildiği tarihten itibaren üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır; yargılamanın iadesi talebini, hükmü veren mahkeme inceler.',
    trueHighlight: ['üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır', 'hükmü veren mahkeme inceler'],
    trueCorrectPhrase: 'yargılamanın iadesi süresi genel olarak 3 ay ve her hâlde 10 yıldır; talebi hükmü veren mahkeme inceler',
    baseExplanation: 'HMK m. 377-378 uyarınca yargılamanın iadesi süresi öğrenmeden itibaren 3 ay, kesinleşmeden itibaren 10 yıldır ve talebi bizzat hükmü veren mahkeme inceler.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır',
      wrongPhrase: 'bir ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren beş yıldır',
      correctPhrase: 'üç ay ve her hâlde iade talebine konu olan hükmün kesinleşmesinden itibaren on yıldır',
      explanation: 'HMK m. 377 uyarınca yargılamanın iadesinde süre 1 ay / 5 yıl değil, 3 ay ve her hâlde 10 yıldır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yargılamanın iadesi talebini, hükmü veren mahkeme inceler',
      wrongPhrase: 'yargılamanın iadesi talebini, her zaman Yargıtay ilgili hukuk dairesi ilk derece mahkemesi sıfatıyla inceler',
      correctPhrase: 'yargılamanın iadesi talebini, hükmü veren mahkeme inceler',
      explanation: 'Yargılamanın iadesi olağanüstü bir kanun yolu olmakla birlikte üst mahkemede değil, bizzat hükmü veren mahkemede incelenir.'
    }
  },
  {
    id: 'rule-hmk-14',
    branch: 'HMK',
    subTopic: 'Feragat ve Kabulün Zamanı ve Sonuçları',
    articleRef: 'M. 307-311',
    trueStatement:
      'Davadan feragat ve davayı kabul, hüküm kesinleşinceye kadar her zaman yapılabilir; feragat ve kabul kayıtsız ve şartsız olmalıdır ve kesin hüküm gibi hukuki sonuç doğurur.',
    trueHighlight: ['hüküm kesinleşinceye kadar her zaman yapılabilir', 'kayıtsız ve şartsız olmalıdır', 'kesin hüküm gibi hukuki sonuç doğurur'],
    trueCorrectPhrase: 'feragat ve kabul hüküm kesinleşinceye kadar (kanun yolu aşaması dahil) her zaman yapılabilir ve şarta bağlanamaz',
    baseExplanation: 'HMK m. 309-311 uyarınca feragat ve kabul hüküm kesinleşinceye kadar her aşamada yapılabilir, şarta bağlanamaz ve kesin hüküm gibi sonuç doğurur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'hüküm kesinleşinceye kadar her zaman yapılabilir',
      wrongPhrase: 'ancak tahkikatın sona erdiği tefhim edilinceye kadar yapılabilir; kanun yolu aşamasında yapılamaz',
      correctPhrase: 'hüküm kesinleşinceye kadar her zaman yapılabilir',
      explanation: 'Tahkikatın bitimine kadar yapılabilen işlem ıslahtır (HMK m. 177); feragat ve kabul ise hüküm kesinleşinceye kadar (istinaf ve temyiz aşamasında dahi) yapılabilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kayıtsız ve şartsız olmalıdır ve kesin hüküm gibi hukuki sonuç doğurur',
      wrongPhrase: 'geciktirici veya bozucu şarta bağlanabilir ve karşı tarafın açık muvafakatine tabidir',
      correctPhrase: 'kayıtsız ve şartsız olmalıdır ve kesin hüküm gibi hukuki sonuç doğurur',
      explanation: 'Feragat ve kabul tek taraflı usul işlemleridir; karşı tarafın veya mahkemenin kabulüne bağlı değildir ve şarta bağlanamaz (sulh şarta bağlanabilir).'
    }
  },
  {
    id: 'rule-cmk-10',
    branch: 'CMK',
    subTopic: 'Teknik Araçlarla İzleme Süresi ve Karar Mercii',
    articleRef: 'M. 140',
    trueStatement:
      'Teknik araçlarla izleme kararı, katalog suçlar bakımından kuvvetli şüphe sebeplerinin varlığı ve başka suretle delil elde edilememesi hâlinde hâkim veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilir; bu tedbir konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda uygulanamaz ve en çok üç haftalık süre için verilebilir.',
    trueHighlight: ['konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda uygulanamaz', 'en çok üç haftalık süre için verilebilir'],
    trueCorrectPhrase: 'teknik araçlarla izleme konutta uygulanamaz ve en çok 3 hafta (+1 hafta uzatma, örgütlü suçlarda toplam 4 haftayı geçmemek üzere ilave 1’er hafta) süreyle verilebilir',
    baseExplanation: 'CMK m. 140 uyarınca teknik araçlarla izleme konutta uygulanamaz; karar süresi en çok 3 haftadır, gerektiğinde 1 hafta daha uzatılabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bu tedbir konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda uygulanamaz',
      wrongPhrase: 'bu tedbir ağır ceza mahkemesinin oybirliğiyle vereceği kararla şüphelinin konutunda da uygulanabilir',
      correctPhrase: 'bu tedbir konutta, işyerinde ve kamuya açık olmayan kapalı alanlarda uygulanamaz',
      explanation: 'CMK m. 140/1-b uyarınca kişinin konutunda teknik araçlarla izleme (ses veya görüntü kaydı) yapılması mutlak olarak yasaktır; hiçbir merci buna izin veremez.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'en çok üç haftalık süre için verilebilir',
      wrongPhrase: 'en çok iki aylık süre için verilebilir',
      correctPhrase: 'en çok üç haftalık süre için verilebilir',
      explanation: '2 aylık süre iletişimin tespiti ve dinlenmesine (CMK m. 135) ilişkindir; teknik araçlarla izlemede (CMK m. 140) temel süre en çok 3 haftadır (+1 hafta uzatma).'
    }
  },
  {
    id: 'rule-cmk-11',
    branch: 'CMK',
    subTopic: 'Gizli Soruşturmacı Görevlendirilmesi ve Karar Çoğunluğu',
    articleRef: 'M. 139',
    trueStatement:
      'Soruşturma konusu suçun işlendiği hususunda somut delillere dayanan kuvvetli şüphe sebeplerinin bulunması ve başka suretle delil elde edilememesi hâlinde, katalog suçlarla sınırlı olarak kamu görevlileri gizli soruşturmacı olarak görevlendirilebilir; bu karar ancak ağır ceza mahkemesince oybirliğiyle verilebilir.',
    trueHighlight: ['kamu görevlileri gizli soruşturmacı olarak görevlendirilebilir', 'ancak ağır ceza mahkemesince oybirliğiyle verilebilir'],
    trueCorrectPhrase: 'gizli soruşturmacı yalnızca kamu görevlileri arasından seçilir ve karar ağır ceza mahkemesince oybirliğiyle verilir',
    baseExplanation: 'CMK m. 139 uyarınca gizli soruşturmacı yalnızca kamu görevlileri arasından görevlendirilir ve kararı ağır ceza mahkemesi oybirliğiyle verir (gecikmesinde sakınca olsa dahi savcı karar veremez!).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'bu karar ancak ağır ceza mahkemesince oybirliğiyle verilebilir',
      wrongPhrase: 'bu karar sulh ceza hâkimi veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilebilir',
      correctPhrase: 'bu karar ancak ağır ceza mahkemesince oybirliğiyle verilebilir',
      explanation: 'Gizli soruşturmacı görevlendirilmesinde (CMK m. 139) Cumhuriyet savcısının veya sulh ceza hâkiminin yetkisi yoktur; kararı yalnızca Ağır Ceza Mahkemesi oybirliğiyle verir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kamu görevlileri gizli soruşturmacı olarak görevlendirilebilir',
      wrongPhrase: 'kamu görevlisi olmayan sivil muhbirler de gizli soruşturmacı olarak görevlendirilebilir',
      correctPhrase: 'kamu görevlileri gizli soruşturmacı olarak görevlendirilebilir',
      explanation: 'CMK m. 139/1 uyarınca gizli soruşturmacı olarak yalnızca kamu görevlileri görevlendirilebilir; kamu görevlisi olmayan kişiler gizli soruşturmacı olamaz.'
    }
  },
  {
    id: 'rule-cmk-12',
    branch: 'CMK',
    subTopic: 'Taşınmazlara, Hak ve Alacaklara Elkoyma',
    articleRef: 'M. 128',
    trueStatement:
      'Soruşturma veya kovuşturma konusu suçun işlendiğine ve bu suçlardan elde edildiğine dair somut delillere dayanan kuvvetli şüphe sebebi bulunan hâllerde, şüpheli veya sanığa ait taşınmazlara, banka hesaplarına ve alacaklara elkoyma kararı ancak ağır ceza mahkemesince oybirliğiyle verilebilir.',
    trueHighlight: ['taşınmazlara, banka hesaplarına ve alacaklara elkoyma kararı', 'ancak ağır ceza mahkemesince oybirliğiyle verilebilir'],
    trueCorrectPhrase: 'taşınmaz, hak ve alacaklara elkoyma kararı yalnızca ağır ceza mahkemesince oybirliğiyle verilebilir (savcı veya sulh ceza hâkimi veremez)',
    baseExplanation: 'CMK m. 128 uyarınca taşınmazlara, hak ve alacaklara elkoyma kararını yalnızca ağır ceza mahkemesi oybirliğiyle verebilir; gecikmesinde sakınca bulunan hâl istisnası yoktur.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ancak ağır ceza mahkemesince oybirliğiyle verilebilir',
      wrongPhrase: 'sulh ceza hâkimliğince veya gecikmesinde sakınca bulunan hâllerde Cumhuriyet savcısı tarafından verilebilir',
      correctPhrase: 'ancak ağır ceza mahkemesince oybirliğiyle verilebilir',
      explanation: 'Adi elkoymadan (CMK m. 127) farklı olarak, CMK m. 128 kapsamındaki taşınmaz, hak ve alacaklara elkoyma kararını yalnızca Ağır Ceza Mahkemesi oybirliğiyle verebilir!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'ağır ceza mahkemesince oybirliğiyle verilebilir',
      wrongPhrase: 'ağır ceza mahkemesince oyçokluğuyla verilebilir',
      correctPhrase: 'ağır ceza mahkemesince oybirliğiyle verilebilir',
      explanation: 'CMK m. 128, m. 139 ve m. 140A (telekomünikasyon yoluyla iletişimin dinlenmesi/gizli soruşturmacı/elkoyma) kararlarında Ağır Ceza Mahkemesinin oybirliği şarttır.'
    }
  },
  {
    id: 'rule-cmk-13',
    branch: 'CMK',
    subTopic: 'Basit Yargılama Usulü ve İtiraz Süresi (7499 s.K.)',
    articleRef: 'M. 251-252',
    trueStatement:
      'Asliye ceza mahkemesince, iddianamenin kabulünden sonra adli para cezasını ve/veya üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda basit yargılama usulünün uygulanmasına karar verilebilir; mahkûmiyet kararı verildiği takdirde sonuç ceza dörtte bir oranında indirilir ve bu karara karşı tebliğden itibaren iki hafta içinde itiraz edilebilir.',
    trueHighlight: ['üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda', 'sonuç ceza dörtte bir oranında indirilir', 'iki hafta içinde itiraz edilebilir'],
    trueCorrectPhrase: 'basit yargılama üst sınırı 2 yıl veya daha az hapis gerektiren suçlarda uygulanır, sonuç ceza 1/4 indirilir ve itiraz süresi (7499 s.K. ile) 2 haftadır',
    baseExplanation: 'CMK m. 251-252 uyarınca basit yargılama usulünde üst sınır 2 yıl hapis ve/veya adli para cezasıdır, mahkûmiyette 1/4 indirim yapılır ve itiraz süresi 7499 s.K. ile 2 haftadır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sonuç ceza dörtte bir oranında indirilir ve bu karara karşı tebliğden itibaren iki hafta içinde itiraz edilebilir',
      wrongPhrase: 'sonuç ceza yarı oranında indirilir ve bu karara karşı tebliğden itibaren yedi gün içinde itiraz edilebilir',
      correctPhrase: 'sonuç ceza dörtte bir oranında indirilir ve bu karara karşı tebliğden itibaren iki hafta içinde itiraz edilebilir',
      explanation: 'Seri muhakeme usulünde indirim 1/2 iken basit yargılama usulünde 1/4’tür; ayrıca 7499 s.K. ile basit yargılamada itiraz süresi 7 günden 2 haftaya çıkarılmıştır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda',
      wrongPhrase: 'üst sınırı beş yıl veya daha az süreli hapis cezasını gerektiren suçlarda ve yaş küçüklüğü bulunan hâllerde',
      correctPhrase: 'üst sınırı iki yıl veya daha az süreli hapis cezasını gerektiren suçlarda',
      explanation: 'Basit yargılama usulü üst sınırı 2 yıl veya daha az hapis gerektiren suçlarda uygulanabilir; yaş küçüklüğü, akıl hastalığı veya sağır ve dilsizlik hâllerinde uygulanamaz (CMK m. 251/7).'
    }
  },
  {
    id: 'rule-cmk-14',
    branch: 'CMK',
    subTopic: 'Eski Hâle Getirme Süresi (7499 s.K.)',
    articleRef: 'M. 41',
    trueStatement:
      'Kusuru olmaksızın bir süreyi geçirmiş olan kişi eski hâle getirme isteminde bulunabilir; eski hâle getirme dilekçesi, engelin kalktığı tarihten itibaren iki hafta içinde, süreye uyulduğunda usul işlemi hangi mahkemede yapılacak idiyse o mahkemeye verilir.',
    trueHighlight: ['engelin kalktığı tarihten itibaren iki hafta içinde', 'usul işlemi hangi mahkemede yapılacak idiyse o mahkemeye verilir'],
    trueCorrectPhrase: 'CMK m. 41 uyarınca eski hâle getirme başvurusu engelin kalkmasından itibaren (7499 s.K. değişikliğiyle) 2 hafta içinde yapılır',
    baseExplanation: '7499 sayılı Kanun ile CMK m. 41’de yer alan eski hâle getirme süresi 7 günden 2 haftaya çıkarılmıştır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'engelin kalktığı tarihten itibaren iki hafta içinde',
      wrongPhrase: 'engelin kalktığı tarihten itibaren yedi gün içinde',
      correctPhrase: 'engelin kalktığı tarihten itibaren iki hafta içinde',
      explanation: '7499 sayılı Kanun (1 Haziran 2024) ile CMK m. 41’deki eski hâle getirme istemi süresi 7 günden 2 haftaya çıkarılmıştır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kusuru olmaksızın bir süreyi geçirmiş olan kişi eski hâle getirme isteminde bulunabilir',
      wrongPhrase: 'Eski hâle getirme istemi hükmün yerine getirilmesini her durumda kendiliğinden durdurur',
      correctPhrase: 'Kusuru olmaksızın bir süreyi geçirmiş olan kişi eski hâle getirme isteminde bulunabilir',
      explanation: 'CMK m. 42/2 uyarınca eski hâle getirme dilekçesinin verilmesi hükmün yerine getirilmesini kendiliğinden durdurmaz; ancak mahkeme yerine getirmeyi erteleyebilir.'
    }
  },
  {
    id: 'rule-cmk-15',
    branch: 'CMK',
    subTopic: 'Kanun Yararına Bozma Başvuru Yetkisi',
    articleRef: 'M. 309',
    trueStatement:
      'Hâkim veya mahkeme tarafından verilen ve istinaf veya temyiz incelemesinden geçmeksizin kesinleşen karar veya hükümlerde hukuka aykırılık bulunduğunu öğrenen Adalet Bakanlığı, o karar veya hükmün Yargıtayca bozulması istemini, yasal nedenlerini belirterek Yargıtay Cumhuriyet Başsavcılığına yazılı olarak bildirir.',
    trueHighlight: ['istinaf veya temyiz incelemesinden geçmeksizin kesinleşen', 'Adalet Bakanlığı', 'Yargıtay Cumhuriyet Başsavcılığına yazılı olarak bildirir'],
    trueCorrectPhrase: 'kanun yararına bozma yalnız istinaf/temyiz incelemesinden geçmeksizin kesinleşen kararlara karşı Adalet Bakanlığı istemiyle Yargıtay Cumhuriyet Başsavcılığınca yoluna götürülür',
    baseExplanation: 'CMK m. 309 uyarınca kanun yararına bozma olağanüstü kanun yoluna yalnız istinaf/temyizden geçmeden kesinleşen kararlar için Adalet Bakanlığının yazılı bildirimi üzerine Yargıtay Cumhuriyet Başsavcılığı başvurabilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'istinaf veya temyiz incelemesinden geçmeksizin kesinleşen karar veya hükümlerde',
      wrongPhrase: 'Yargıtay ceza dairelerinin temyiz incelemesi sonucunda onanarak kesinleşen hükümlerde de',
      correctPhrase: 'istinaf veya temyiz incelemesinden geçmeksizin kesinleşen karar veya hükümlerde',
      explanation: 'İstinaf veya temyiz incelemesinden geçerek kesinleşen kararlara karşı kanun yararına bozma yoluna gidilemez!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Adalet Bakanlığı, o karar veya hükmün Yargıtayca bozulması istemini, yasal nedenlerini belirterek Yargıtay Cumhuriyet Başsavcılığına yazılı olarak bildirir',
      wrongPhrase: 'Cumhuriyet başsavcılıkları veya sanık müdafii doğrudan doğruya Yargıtay Ceza Genel Kuruluna kanun yararına bozma dilekçesi verebilir',
      correctPhrase: 'Adalet Bakanlığı, o karar veya hükmün Yargıtayca bozulması istemini, yasal nedenlerini belirterek Yargıtay Cumhuriyet Başsavcılığına yazılı olarak bildirir',
      explanation: 'Kanun yararına bozma yoluna sanık veya yerel savcı doğrudan başvuramaz; Adalet Bakanlığının yazılı istemi üzerine Yargıtay Cumhuriyet Başsavcısı ilgili Yargıtay ceza dairesine başvurur.'
    }
  },
  {
    id: 'rule-tck-8',
    branch: 'TCK',
    subTopic: 'Ceza Zamanaşımı Süreleri',
    articleRef: 'M. 68',
    trueStatement:
      'Mahkûmiyet hükümleri; ağırlaştırılmış müebbet hapis cezalarında kırk yıl, müebbet hapis cezalarında otuz yıl, yirmi yıl ve daha fazla süreli hapis cezalarında yirmidört yıl, beş yıldan fazla hapis cezalarında yirmi yıl, beş yıla kadar hapis ve adli para cezalarında ise on yıl geçmesiyle infaz edilmez.',
    trueHighlight: ['ağırlaştırılmış müebbet hapis cezalarında kırk yıl', 'müebbet hapis cezalarında otuz yıl', 'beş yıla kadar hapis ve adli para cezalarında ise on yıl geçmesiyle infaz edilmez'],
    trueCorrectPhrase: 'ceza zamanaşımı ağırlaştırılmış müebbette 40, müebbette 30, 20+ yıl hapiste 24, 5+ yıl hapiste 20, 5 yıla kadar hapis ve adli para cezasında 10 yıldır',
    baseExplanation: 'TCK m. 68 uyarınca ceza zamanaşımı süreleri (40 - 30 - 24 - 20 - 10 yıl) dava zamanaşımı sürelerinden (30 - 25 - 20 - 15 - 8 yıl) farklıdır ve daha uzundur.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ağırlaştırılmış müebbet hapis cezalarında kırk yıl, müebbet hapis cezalarında otuz yıl, yirmi yıl ve daha fazla süreli hapis cezalarında yirmidört yıl, beş yıldan fazla hapis cezalarında yirmi yıl, beş yıla kadar hapis ve adli para cezalarında ise on yıl',
      wrongPhrase: 'ağırlaştırılmış müebbet hapis cezalarında otuz yıl, müebbet hapis cezalarında yirmibeş yıl, yirmi yıl ve daha fazla süreli hapis cezalarında yirmi yıl, beş yıldan fazla hapis cezalarında onbeş yıl, beş yıla kadar hapis ve adli para cezalarında ise sekiz yıl',
      correctPhrase: 'ağırlaştırılmış müebbet hapis cezalarında kırk yıl, müebbet hapis cezalarında otuz yıl, yirmi yıl ve daha fazla süreli hapis cezalarında yirmidört yıl, beş yıldan fazla hapis cezalarında yirmi yıl, beş yıla kadar hapis ve adli para cezalarında ise on yıl',
      explanation: '30 - 25 - 20 - 15 - 8 yıllık süreler dava zamanaşımıdır (TCK m. 66); kesinleşmiş mahkûmiyetlerin infazına ilişkin ceza zamanaşımı süreleri (TCK m. 68) 40 - 30 - 24 - 20 - 10 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'beş yıla kadar hapis ve adli para cezalarında ise on yıl geçmesiyle infaz edilmez',
      wrongPhrase: 'beş yıla kadar hapis ve adli para cezalarında ise beş yıl geçmesiyle infaz edilmez',
      correctPhrase: 'beş yıla kadar hapis ve adli para cezalarında ise on yıl geçmesiyle infaz edilmez',
      explanation: 'TCK m. 68/1-e uyarınca 5 yıla kadar hapis ve adli para cezalarında ceza zamanaşımı süresi 5 yıl değil, 10 yıldır.'
    }
  },
  {
    id: 'rule-tck-9',
    branch: 'TCK',
    subTopic: 'Yaş Küçüklüğü ve Ceza Sorumluluğu',
    articleRef: 'M. 31',
    trueStatement:
      'Fiili işlediği sırada oniki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur; oniki yaşını doldurmuş olup da onbeş yaşını doldurmamış olanların işlediği fiilin hukuki anlam ve sonuçlarını algılayamaması hâlinde ceza sorumluluğu yoktur, algılama yeteneğinin varlığı hâlinde ise cezalarında indirim yapılır.',
    trueHighlight: ['oniki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur', 'oniki yaşını doldurmuş olup da onbeş yaşını doldurmamış olanların', 'algılama yeteneğinin varlığı hâlinde ise cezalarında indirim yapılır'],
    trueCorrectPhrase: '0-12 yaş grubunda mutlak ceza sorumsuzluğu vardır; 12-15 yaş grubunda ise kusur yeteneği (algılama ve yönlendirme yeteneği) araştırılır',
    baseExplanation: 'TCK m. 31 uyarınca 12 yaşını doldurmamış çocukların ceza sorumluluğu yoktur (ancak çocuklara özgü güvenlik tedbiri uygulanabilir); 12-15 yaş grubunda algılama yeteneği incelenir; 15-18 yaş grubunda ise ceza indirimli verilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'oniki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur; oniki yaşını doldurmuş olup da onbeş yaşını doldurmamış olanların',
      wrongPhrase: 'onbeş yaşını doldurmamış olan çocukların hiçbir koşulda ceza sorumluluğu yoktur; onbeş yaşını doldurmuş olup da onsekiz yaşını doldurmamış olanların',
      correctPhrase: 'oniki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur; oniki yaşını doldurmuş olup da onbeş yaşını doldurmamış olanların',
      explanation: 'Tam ceza sorumsuzluğu yaş sınırı 15 değil, 12’dir (sağır ve dilsizlerde 15’tir, TCK m. 33).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Fiili işlediği sırada oniki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur',
      wrongPhrase: 'Fiili işlediği sırada oniki yaşını doldurmamış olan çocuklar hakkında ne ceza verilebilir ne de çocuklara özgü güvenlik tedbiri uygulanabilir',
      correctPhrase: 'Fiili işlediği sırada oniki yaşını doldurmamış olan çocukların ceza sorumluluğu yoktur',
      explanation: 'TCK m. 31/1 uyarınca 12 yaşını doldurmamış çocuklar hakkında ceza kovuşturması yapılamaz; ancak çocuklara özgü güvenlik tedbirleri uygulanabilir!'
    }
  },
  {
    id: 'rule-tck-10',
    branch: 'TCK',
    subTopic: 'Etkin Pişmanlık (Malvarlığına Karşı Suçlar)',
    articleRef: 'M. 168',
    trueStatement:
      'Hırsızlık, mala zarar verme, güveni kötüye kullanma ve dolandırıcılık suçları tamamlandıktan sonra ve fakat bu nedenle hakkında kovuşturma başlamadan önce, failin bizzat pişmanlık göstererek mağdurun uğradığı zararı aynen geri verme veya tazmin suretiyle tamamen gidermesi hâlinde verilecek cezanın üçte ikisine kadarı indirilir; etkin pişmanlığın kovuşturma başladıktan sonra ve fakat hüküm verilmezden önce gösterilmesi hâlinde ise yarıya kadarı indirilir.',
    trueHighlight: ['kovuşturma başlamadan önce', 'üçte ikisine kadarı indirilir', 'kovuşturma başladıktan sonra ve fakat hüküm verilmezden önce gösterilmesi hâlinde ise yarıya kadarı indirilir'],
    trueCorrectPhrase: 'TCK m. 168 etkin pişmanlıkta kovuşturma başlamadan önce zararın giderilmesinde 2/3’e kadar, kovuşturma başladıktan sonra hüküm öncesi giderilmesinde 1/2’ye kadar indirim yapılır',
    baseExplanation: 'TCK m. 168 uyarınca etkin pişmanlıkta kovuşturma öncesi indirim 2/3’e kadar, kovuşturma sonrası (hüküm öncesi) indirim 1/2’ye kadardır; kısmi iadede mağdurun rızası aranır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'verilecek cezanın üçte ikisine kadarı indirilir; etkin pişmanlığın kovuşturma başladıktan sonra ve fakat hüküm verilmezden önce gösterilmesi hâlinde ise yarıya kadarı indirilir',
      wrongPhrase: 'fail hakkında hiçbir cezaya hükmolunmaz ve kamu davası düşer',
      correctPhrase: 'verilecek cezanın üçte ikisine kadarı indirilir; etkin pişmanlığın kovuşturma başladıktan sonra ve fakat hüküm verilmezden önce gösterilmesi hâlinde ise yarıya kadarı indirilir',
      explanation: 'TCK m. 168 kapsamındaki malvarlığı suçlarında etkin pişmanlık cezasızlık nedeni değil, cezada indirim nedenidir (soruşturma evresinde 2/3’e, kovuşturma evresinde 1/2’ye kadar indirim).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kovuşturma başladıktan sonra ve fakat hüküm verilmezden önce gösterilmesi hâlinde ise yarıya kadarı indirilir',
      wrongPhrase: 'hüküm kesinleştikten sonra infaz aşamasında gösterilmesi hâlinde dahi yarı oranında indirilir',
      correctPhrase: 'kovuşturma başladıktan sonra ve fakat hüküm verilmezden önce gösterilmesi hâlinde ise yarıya kadarı indirilir',
      explanation: 'TCK m. 168 uyarınca etkin pişmanlık en geç hüküm verilmezden önce gösterilmelidir; hüküm verildikten sonra gösterilen pişmanlık m. 168 kapsamında indirim sağlamaz.'
    }
  },
  {
    id: 'rule-tck-11',
    branch: 'TCK',
    subTopic: 'Fikri İçtima (Farklı Neviden ve Aynı Neviden)',
    articleRef: 'M. 43/2 & 44',
    trueStatement:
      'İşlediği bir fiil ile birden fazla farklı suçun oluşmasına sebebiyet veren kişi, bunlardan en ağır cezayı gerektiren suçtan dolayı cezalandırılır; aynı suçun birden fazla kişiye karşı tek bir fiille işlenmesi durumunda ise tek cezaya hükmolunur ancak bu ceza dörtte birinden dörtte üçüne kadar artırılır.',
    trueHighlight: ['birden fazla farklı suçun oluşmasına sebebiyet veren kişi, bunlardan en ağır cezayı gerektiren suçtan dolayı cezalandırılır', 'aynı suçun birden fazla kişiye karşı tek bir fiille işlenmesi durumunda ise tek cezaya hükmolunur'],
    trueCorrectPhrase: 'farklı neviden fikri içtimada (m. 44) en ağır suçtan ceza verilir; aynı neviden fikri içtimada (m. 43/2) tek ceza 1/4’ten 3/4’e kadar artırılır',
    baseExplanation: 'TCK m. 44 farklı neviden fikri içtimayı (en ağır ceza), TCK m. 43/2 ise aynı neviden fikri içtimayı (tek ceza + 1/4 ile 3/4 arası artırım) düzenler.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'bunlardan en ağır cezayı gerektiren suçtan dolayı cezalandırılır',
      wrongPhrase: 'oluşan her bir suçtan dolayı ayrı ayrı cezalandırılarak gerçek içtima hükümleri uygulanır',
      correctPhrase: 'bunlardan en ağır cezayı gerektiren suçtan dolayı cezalandırılır',
      explanation: 'TCK m. 44 uyarınca tek bir fiil ile birden fazla farklı suçun oluşmasına sebebiyet verilmesi hâlinde gerçek içtima değil, farklı neviden fikri içtima uygulanır ve yalnızca en ağır suçtan ceza verilir.'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'dörtte birinden dörtte üçüne kadar artırılır',
      wrongPhrase: 'yarı oranından iki katına kadar artırılır',
      correctPhrase: 'dörtte birinden dörtte üçüne kadar artırılır',
      explanation: 'TCK m. 43 uyarınca zincirleme suçta ve aynı neviden fikri içtimada artırım oranı 1/4’ten 3/4’e kadardır.'
    }
  },
  {
    id: 'rule-tck-12',
    branch: 'TCK',
    subTopic: 'Suça Teşebbüs ve Gönüllü Vazgeçme',
    articleRef: 'M. 35-36',
    trueStatement:
      'Kişi, işlemeyi kastettiği bir suçu elverişli hareketlerle doğrudan doğruya icraya başlayıp da elinde olmayan nedenlerle tamamlayamaz ise teşebbüsten dolayı sorumlu tutulur; fail, suçun icra hareketlerinden gönüllü vazgeçer veya kendi çabalarıyla suçun tamamlanmasını veya neticenin gerçekleşmesini önlerse, teşebbüsten dolayı cezalandırılmaz, fakat tamam olan kısım esasen bir suç oluşturduğu takdirde sadece o suça ait ceza ile cezalandırılır.',
    trueHighlight: ['elverişli hareketlerle doğrudan doğruya icraya başlayıp da elinde olmayan nedenlerle tamamlayamaz ise', 'gönüllü vazgeçer veya kendi çabalarıyla suçun tamamlanmasını veya neticenin gerçekleşmesini önlerse, teşebbüsten dolayı cezalandırılmaz'],
    trueCorrectPhrase: 'gönüllü vazgeçmede fail teşebbüsten dolayı cezalandırılmaz; ancak o ana kadar tamam olan hareketler bağımsız bir suç oluşturuyorsa yalnız o suçtan cezalandırılır',
    baseExplanation: 'TCK m. 36 uyarınca gönüllü vazgeçme hâlinde teşebbüsten ceza verilmez; ancak tamamlanan kısım başlı başına bir suç oluşturuyorsa yalnız o suçtan ceza verilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'teşebbüsten dolayı cezalandırılmaz, fakat tamam olan kısım esasen bir suç oluşturduğu takdirde sadece o suça ait ceza ile cezalandırılır',
      wrongPhrase: 'teşebbüsten dolayı verilecek cezada yalnızca üçte bir oranında indirim yapılır',
      correctPhrase: 'teşebbüsten dolayı cezalandırılmaz, fakat tamam olan kısım esasen bir suç oluşturduğu takdirde sadece o suça ait ceza ile cezalandırılır',
      explanation: 'TCK m. 36 uyarınca gönüllü vazgeçme cezada indirim sebebi değil, teşebbüs bakımından şahsi cezasızlık sebebidir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işlemeyi kastettiği bir suçu elverişli hareketlerle doğrudan doğruya icraya başlayıp da',
      wrongPhrase: 'taksirle işlenen suçlarda dahi icra hareketlerine başlayıp da',
      correctPhrase: 'işlemeyi kastettiği bir suçu elverişli hareketlerle doğrudan doğruya icraya başlayıp da',
      explanation: 'Suça teşebbüs yalnızca kasten işlenen suçlarda mümkündür; taksirli suçlara teşebbüs mümkün değildir.'
    }
  },
  {
    id: 'rule-iyuk-8',
    branch: 'İYUK',
    subTopic: 'İlk İnceleme Konuları ve Dilekçe Ret Süresi',
    articleRef: 'M. 14-15',
    trueStatement:
      'İdari dava dilekçeleri; görev ve yetki, idari merci tecavüzü, ehliyet, idari davaya konu olacak kesin ve yürütülebilir bir işlem olup olmadığı, süre aşımı, husumet ve 3 ile 5. maddelere uygunluk yönlerinden sırasıyla incelenir; 3 ve 5. maddelere aykırılık nedeniyle dilekçenin reddedilmesi hâlinde yeni dilekçe verilmesi için otuz günlük süre tanınır.',
    trueHighlight: ['görev ve yetki, idari merci tecavüzü, ehliyet', 'otuz günlük süre tanınır'],
    trueCorrectPhrase: 'İYUK m. 15 uyarınca dilekçe ret kararları üzerine eksikliğin tamamlanarak davayı yenileme süresi 30 gündür',
    baseExplanation: 'İYUK m. 14-15 uyarınca dilekçe ret kararı üzerine davacıya yeni dilekçe düzenlemesi için 30 gün süre verilir; aynı yanlışlık tekrar yapılırsa dava reddedilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yeni dilekçe verilmesi için otuz günlük süre tanınır',
      wrongPhrase: 'yeni dilekçe verilmesi için iki haftalık kesin süre tanınır',
      correctPhrase: 'yeni dilekçe verilmesi için otuz günlük süre tanınır',
      explanation: 'HMK m. 119’da dava dilekçesindeki eksikliğin giderilmesi süresi 1 hafta iken, İYUK m. 15/1-d uyarınca idari yargıda dilekçe ret üzerine yenileme süresi 30 gündür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'idari merci tecavüzü, ehliyet, idari davaya konu olacak kesin ve yürütülebilir bir işlem olup olmadığı, süre aşımı, husumet',
      wrongPhrase: 'süre aşımı ve ehliyet incelenmeksizin yanlış hasım gösterilmesi sebebiyle davanın doğrudan reddine karar verilir',
      correctPhrase: 'idari merci tecavüzü, ehliyet, idari davaya konu olacak kesin ve yürütülebilir bir işlem olup olmadığı, süre aşımı, husumet',
      explanation: 'İYUK m. 15/1-c uyarınca davanın hasım gösterilmeden veya yanlış hasım gösterilerek açılması hâlinde dava reddedilmez; mahkemece gerçek hasma tebligat yapılarak davaya devam edilir!'
    }
  },
  {
    id: 'rule-iyuk-9',
    branch: 'İYUK',
    subTopic: 'Görevli Olmayan Yerde Dava Açılması ve Ek Süre',
    articleRef: 'M. 9',
    trueStatement:
      'Çözümlenmesi Danıştayın, idare ve vergi mahkemelerinin görevlerine girdiği hâlde, adli yargı yerlerine açılmış bulunan davaların görev noktasından reddi hâlinde, bu husustaki kararların kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir.',
    trueHighlight: ['adli yargı yerlerine açılmış bulunan davaların görev noktasından reddi hâlinde', 'kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir'],
    trueCorrectPhrase: 'adli yargıda açılıp görevsizlikle reddedilen davanın idari yargıda açılması için görevsizlik kararının kesinleşmesinden itibaren 30 gün ek süre vardır',
    baseExplanation: 'İYUK m. 9 uyarınca adli yargıda açılıp görev yönünden reddedilen davalarda, görevsizlik kararının kesinleşmesini izleyen günden itibaren 30 gün içinde görevli idari mahkemede dava açılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir',
      wrongPhrase: 'tefhiminden itibaren iki hafta içinde dosyanın görevli idare mahkemesine gönderilmesi talep edilir',
      correctPhrase: 'kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir',
      explanation: '2 haftalık gönderme talebi süresi adli yargı mahkemeleri arasındaki görevsizlik kararlarında (HMK m. 20) geçerlidir; adli yargıdan idari yargıya geçişte İYUK m. 9 uyarınca dosya gönderilmez, kararın kesinleşmesinden itibaren 30 gün içinde idari yargıda yeni dava açılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'adli yargı yerlerine açılmış bulunan davaların görev noktasından reddi hâlinde, bu husustaki kararların kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir',
      wrongPhrase: 'adli yargı mahkemesi görevsizlik kararıyla birlikte dosyayı re’sen görevli idare mahkemesine gönderir ve idare mahkemesi kendiliğinden yargılamaya başlar',
      correctPhrase: 'adli yargı yerlerine açılmış bulunan davaların görev noktasından reddi hâlinde, bu husustaki kararların kesinleşmesini izleyen günden itibaren otuz gün içinde görevli mahkemede dava açılabilir',
      explanation: 'Farklı yargı kolları (adli yargı - idari yargı) arasında dosya gönderme usulü yoktur; davacının İYUK m. 9 uyarınca 30 gün içinde idari yargıda dava açması gerekir (ancak idari yargı kendi içinde görevsiz/yetkisiz ise dosyayı görevli/yetkili idare/vergi mahkemesine gönderir, İYUK m. 15/1-a).'
    }
  },
  {
    id: 'rule-iyuk-10',
    branch: 'İYUK',
    subTopic: 'Tam Yargı Davalarında Doğrudan Dava ve İdari Eylemler',
    articleRef: 'M. 12-13',
    trueStatement:
      'İdari eylemlerden hakları ihlal edilmiş olanların idari dava açmadan önce, bu eylemleri yazılı bildirim üzerine veya başka suretle öğrendikleri tarihten itibaren bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri zorunludur; bu isteklerin kısmen veya tamamen reddi hâlinde tebliği izleyen günden itibaren dava süresi içinde dava açılabilir.',
    trueHighlight: ['idari dava açmadan önce', 'bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak', 'zorunludur'],
    trueCorrectPhrase: 'idari eylemlerden doğan tam yargı davalarında dava açmadan önce (1 yıl / 5 yıl içinde) ilgili idareye ön karar başvurusu yapılması zorunludur',
    baseExplanation: 'İYUK m. 13 uyarınca idari eylemlerden doğan tam yargı davalarında idareye ön başvuru (1 yıl ve her hâlde 5 yıl içinde) zorunlu idari başvuru yoludur; idari işlemlerden doğan tam yargı davalarında (İYUK m. 12) ise doğrudan dava açılabilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak',
      wrongPhrase: 'altmış gün ve her hâlde eylem tarihinden itibaren iki yıl içinde ilgili idareye başvurarak',
      correctPhrase: 'bir yıl ve her hâlde eylem tarihinden itibaren beş yıl içinde ilgili idareye başvurarak',
      explanation: 'İYUK m. 13 uyarınca idari eylemler nedeniyle idareye başvuru süresi öğrenmeden itibaren 1 yıl ve her hâlde eylem tarihinden itibaren 5 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri zorunludur',
      wrongPhrase: 'ilgili idareye başvurmaları ihtiyari olup dilerlerse doğrudan idare mahkemesinde tam yargı davası açabilirler',
      correctPhrase: 'ilgili idareye başvurarak haklarının yerine getirilmesini istemeleri zorunludur',
      explanation: 'İdari işlemlerden doğan tam yargı davalarında (İYUK m. 12) doğrudan dava açılabilirken, idari eylemlerden doğan tam yargı davalarında (İYUK m. 13) önce idareye başvurmak zorunludur (idari merci tecavüzü!).'
    }
  },
  {
    id: 'rule-iyuk-11',
    branch: 'İYUK',
    subTopic: 'Danıştayın İlk Derece Mahkemesi Olarak Görevleri',
    articleRef: '2575 s.K. M. 24',
    trueStatement:
      'Cumhurbaşkanı kararlarına, Cumhurbaşkanınca çıkarılan Cumhurbaşkanlığı kararnameleri dışındaki düzenleyici işlemlere, bakanlıklar ile kamu kuruluşları veya kamu kurumu niteliğindeki meslek kuruluşlarınca çıkarılan ve ülke çapında uygulanacak düzenleyici işlemlere karşı açılacak iptal ve tam yargı davalarında ilk derece mahkemesi olarak Danıştay görevlidir.',
    trueHighlight: ['Cumhurbaşkanı kararlarına', 'ülke çapında uygulanacak düzenleyici işlemlere karşı', 'ilk derece mahkemesi olarak Danıştay görevlidir'],
    trueCorrectPhrase: 'Cumhurbaşkanı kararları ile bakanlıkların ve kamu tüzel kişilerinin ülke çapında uygulanacak düzenleyici işlemlerine (yönetmelik vb.) karşı ilk derece mahkemesi olarak Danıştayda dava açılır',
    baseExplanation: '2575 sayılı Danıştay Kanunu m. 24 uyarınca Cumhurbaşkanı kararları ve ülke çapında uygulanacak düzenleyici işlemlere karşı ilk derece mahkemesi olarak Danıştayda dava açılır (Cumhurbaşkanlığı kararnameleri ise Anayasa Mahkemesinin görevindedir!).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'ilk derece mahkemesi olarak Danıştay görevlidir',
      wrongPhrase: 'ilk derece mahkemesi olarak Ankara İdare Mahkemesi görevlidir',
      correctPhrase: 'ilk derece mahkemesi olarak Danıştay görevlidir',
      explanation: 'Bakanlıkların veya kamu kuruluşlarının ülke çapında uygulanacak yönetmelik ve düzenleyici işlemlerine karşı Ankara İdare Mahkemesinde değil, ilk derece mahkemesi olarak Danıştayda dava açılır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Cumhurbaşkanınca çıkarılan Cumhurbaşkanlığı kararnameleri dışındaki düzenleyici işlemlere',
      wrongPhrase: 'Cumhurbaşkanlığı kararnamelerinin tamamına',
      correctPhrase: 'Cumhurbaşkanınca çıkarılan Cumhurbaşkanlığı kararnameleri dışındaki düzenleyici işlemlere',
      explanation: 'Cumhurbaşkanlığı kararnamelerinin yargısal denetimi Danıştayda değil, Anayasa Mahkemesinde yapılır (AY m. 148); bireysel/düzenleyici Cumhurbaşkanı kararları ise Danıştayın görevindedir.'
    }
  },
  {
    id: 'rule-iyuk-12',
    branch: 'İYUK',
    subTopic: 'Taşınmaz Mallara İlişkin İdari Davalarda Yetki',
    articleRef: 'M. 34',
    trueStatement:
      'İmar, kamulaştırma, yıkım, işgal, tahsis, ruhsat ve iskan gibi taşınmaz mallarla ilgili mevzuatın uygulanmasında veya bunlara bağlı her türlü haklara veya kamu mallarına ilişkin idari davalarda yetkili mahkeme, taşınmaz malların bulunduğu yer idare mahkemesidir.',
    trueHighlight: ['taşınmaz mallarla ilgili mevzuatın uygulanmasında', 'taşınmaz malların bulunduğu yer idare mahkemesidir'],
    trueCorrectPhrase: 'taşınmaz mallara ilişkin idari davalarda yetkili mahkeme, işlemi yapan idarenin bulunduğu yer değil, taşınmazın bulunduğu yer idare mahkemesidir',
    baseExplanation: 'İYUK m. 34 uyarınca taşınmaz mallara ilişkin idari davalarda (işlemi bakanlık veya Cumhurbaşkanlığı yapmış olsa dahi) yetkili idare mahkemesi taşınmazın bulunduğu yer idare mahkemesidir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'taşınmaz malların bulunduğu yer idare mahkemesidir',
      wrongPhrase: 'idari işlemi tesis eden bakanlığın bulunduğu Ankara İdare Mahkemesidir',
      correctPhrase: 'taşınmaz malların bulunduğu yer idare mahkemesidir',
      explanation: 'İYUK m. 34 özel yetki kuralı uyarınca taşınmaz mallara ilişkin davalarda yetkili mahkeme işlemi yapan idarenin yeri değil, taşınmazın bulunduğu yer idare mahkemesidir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yetkili mahkeme, taşınmaz malların bulunduğu yer idare mahkemesidir',
      wrongPhrase: 'taraflar yetki sözleşmesi yaparak diledikleri ildeki idare mahkemesini yetkili kılabilirler',
      correctPhrase: 'yetkili mahkeme, taşınmaz malların bulunduğu yer idare mahkemesidir',
      explanation: 'İdari yargıda yetki kamu düzenine ilişkindir, kesindir ve mahkemece re’sen gözetilir; idari yargıda yetki sözleşmesi yapılamaz!'
    }
  },
  {
    id: 'rule-idare-7',
    branch: 'İdare',
    subTopic: 'Köy Kurulması ve Büyükşehir Belediyesi Kurulması',
    articleRef: '442 s.K. & 5216 s.K.',
    trueStatement:
      'Köy, İçişleri Bakanlığının kararıyla kurulur; belediye ise nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur; büyükşehir belediyesi ise toplam nüfusu yedi yüz elli binden fazla olan illerde kanunla kurulur.',
    trueHighlight: ['Köy, İçişleri Bakanlığının kararıyla kurulur', 'belediye ise nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur', 'büyükşehir belediyesi ise toplam nüfusu yedi yüz elli binden fazla olan illerde kanunla kurulur'],
    trueCorrectPhrase: 'köy İçişleri Bakanlığı kararıyla, normal belediye (en az 5.000 nüfus) Cumhurbaşkanı kararıyla, il/ilçe ve büyükşehir belediyesi (en az 750.000 nüfus) ise kanunla kurulur',
    baseExplanation: 'İdare hukukunda klasik HMGS tablosu: Köy -> İçişleri Bakanlığı kararı; Belediye (5.000 nüfus) -> Cumhurbaşkanı kararı; İl, İlçe ve Büyükşehir Belediyesi (750.000 nüfus) -> Kanun.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Köy, İçişleri Bakanlığının kararıyla kurulur; belediye ise nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur; büyükşehir belediyesi ise toplam nüfusu yedi yüz elli binden fazla olan illerde kanunla kurulur',
      wrongPhrase: 'Köy Cumhurbaşkanı kararıyla kurulur; belediye İçişleri Bakanlığı kararıyla kurulur; büyükşehir belediyesi ise Cumhurbaşkanlığı kararnamesiyle kurulur',
      correctPhrase: 'Köy, İçişleri Bakanlığının kararıyla kurulur; belediye ise nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur; büyükşehir belediyesi ise toplam nüfusu yedi yüz elli binden fazla olan illerde kanunla kurulur',
      explanation: 'Köy İçişleri Bakanlığı kararıyla, belediye Cumhurbaşkanı kararıyla, büyükşehir belediyesi ise kanunla kurulur!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'belediye ise nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur; büyükşehir belediyesi ise toplam nüfusu yedi yüz elli binden fazla olan illerde',
      wrongPhrase: 'belediye ise nüfusu iki bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur; büyükşehir belediyesi ise toplam nüfusu beş yüz binden fazla olan illerde',
      correctPhrase: 'belediye ise nüfusu beş bin ve üzerinde olan yerleşim birimlerinde Cumhurbaşkanı kararıyla kurulur; büyükşehir belediyesi ise toplam nüfusu yedi yüz elli binden fazla olan illerde',
      explanation: '5393 sayılı Belediye Kanunu m. 4 uyarınca belediye kurulması için asgari nüfus 5.000, 5216 sayılı Kanun uyarınca büyükşehir belediyesi için asgari il nüfusu 750.000’dir.'
    }
  },
  {
    id: 'rule-idare-8',
    branch: 'İdare',
    subTopic: 'Devlet Memurluğunda Adaylık Süresi ve Disiplin Cezaları',
    articleRef: '657 s.K. M. 54 & 125',
    trueStatement:
      'Devlet memurluğunda adaylık süresi bir yıldan az iki yıldan çok olamaz ve bu süre içinde aday memurun başka kurumlara nakli yapılamaz; uyarma, kınama ve aylıktan kesme cezaları disiplin amirleri tarafından, kademe ilerlemesinin durdurulması cezası disiplin kurulunun kararı alındıktan sonra atamaya yetkili amirler tarafından, Devlet memurluğundan çıkarma cezası ise yüksek disiplin kurulunun kararıyla verilir.',
    trueHighlight: ['bir yıldan az iki yıldan çok olamaz', 'uyarma, kınama ve aylıktan kesme cezaları disiplin amirleri tarafından', 'Devlet memurluğundan çıkarma cezası ise yüksek disiplin kurulunun kararıyla verilir'],
    trueCorrectPhrase: 'memurlukta adaylık süresi 1 yıldan az 2 yıldan çok olamaz; Devlet memurluğundan çıkarma cezasını yalnız Yüksek Disiplin Kurulu verir',
    baseExplanation: '657 sayılı DMK m. 54 uyarınca adaylık süresi 1-2 yıldır; m. 126 uyarınca uyarma, kınama ve aylıktan kesme disiplin amirince, kademe ilerlemesinin durdurulması disiplin kurulu kararı sonrası atamaya yetkili amirce (illerde valilerce), memurluktan çıkarma ise yüksek disiplin kurulunca verilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'adaylık süresi bir yıldan az iki yıldan çok olamaz',
      wrongPhrase: 'adaylık süresi altı aydan az bir yıldan çok olamaz',
      correctPhrase: 'adaylık süresi bir yıldan az iki yıldan çok olamaz',
      explanation: '657 sayılı Kanun m. 54 uyarınca Devlet memurluğunda adaylık süresi 1 yıldan az, 2 yıldan çok olamaz.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Devlet memurluğundan çıkarma cezası ise yüksek disiplin kurulunun kararıyla verilir',
      wrongPhrase: 'Devlet memurluğundan çıkarma cezası ise doğrudan disiplin amiri veya atamaya yetkili amir tarafından verilir',
      correctPhrase: 'Devlet memurluğundan çıkarma cezası ise yüksek disiplin kurulunun kararıyla verilir',
      explanation: '657 sayılı Kanun m. 126 uyarınca Devlet memurluğundan çıkarma cezası atamaya yetkili amir tarafından değil, amirlerin bu yoldaki isteği üzerine Yüksek Disiplin Kurulu kararıyla verilir!'
    }
  },
  {
    id: 'rule-idare-9',
    branch: 'İdare',
    subTopic: 'Disiplin Soruşturması ve Ceza Verme Zamanaşımı (657 s.K.)',
    articleRef: '657 s.K. M. 127',
    trueStatement:
      'Disiplin cezalarını gerektiren fiil ve hâllerin işlendiğinin öğrenildiği tarihten itibaren; uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında bir ay içinde disiplin soruşturmasına, Devlet memurluğundan çıkarma cezasında ise altı ay içinde disiplin kovuşturmasına başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; her hâlde fiilin işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zamanaşımına uğrar.',
    trueHighlight: ['bir ay içinde disiplin soruşturmasına', 'Devlet memurluğundan çıkarma cezasında ise altı ay içinde disiplin kovuşturmasına', 'fiilin işlendiği tarihten itibaren nihayet iki yıl içinde'],
    trueCorrectPhrase: '657 s.K. m. 127 uyarınca soruşturmaya başlama zamanaşımı ilk dört cezada 1 ay, memurluktan çıkarmada 6 aydır; ceza verme zamanaşımı ise fiil tarihinden itibaren 2 yıldır',
    baseExplanation: '657 sayılı Kanun m. 127 uyarınca öğrenmeden itibaren soruşturmaya başlama süresi ilk 4 disiplin cezasında 1 ay, memurluktan çıkarmada 6 aydır; nihai ceza verme zamanaşımı ise fiilin işlendiği tarihten itibaren 2 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir ay içinde disiplin soruşturmasına, Devlet memurluğundan çıkarma cezasında ise altı ay içinde disiplin kovuşturmasına başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; her hâlde fiilin işlendiği tarihten itibaren nihayet iki yıl içinde',
      wrongPhrase: 'on beş gün içinde disiplin soruşturmasına, Devlet memurluğundan çıkarma cezasında ise üç ay içinde disiplin kovuşturmasına başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; her hâlde fiilin işlendiği tarihten itibaren nihayet beş yıl içinde',
      correctPhrase: 'bir ay içinde disiplin soruşturmasına, Devlet memurluğundan çıkarma cezasında ise altı ay içinde disiplin kovuşturmasına başlanmadığı takdirde disiplin cezası verme yetkisi zamanaşımına uğrar; her hâlde fiilin işlendiği tarihten itibaren nihayet iki yıl içinde',
      explanation: '657 s.K. m. 127 disiplin zamanaşımı süreleri: soruşturmaya başlama 1 ay (çıkarma cezasında 6 ay), nihai ceza verme zamanaşımı ise 2 yıldır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'fiilin işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde',
      wrongPhrase: 'fiilin öğrenildiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde',
      correctPhrase: 'fiilin işlendiği tarihten itibaren nihayet iki yıl içinde disiplin cezası verilmediği takdirde',
      explanation: '2 yıllık ceza verme zamanaşımı süresi fiilin öğrenildiği tarihten değil, fiilin işlendiği tarihten itibaren işlemeye başlar!'
    }
  },
  {
    id: 'rule-idare-10',
    branch: 'İdare',
    subTopic: 'Kamulaştırmasız El Atma ve Bedel Tespiti Davasında Görev',
    articleRef: '2942 s.K. M. 10 & 37',
    trueStatement:
      'Kamulaştırma işleminin iptali davalarında idari yargı (idare mahkemesi), kamulaştırma bedelinin tespiti ve taşınmazın idare adına tescili davalarında ise adli yargı (asliye hukuk mahkemesi) görevlidir.',
    trueHighlight: ['Kamulaştırma işleminin iptali davalarında idari yargı', 'kamulaştırma bedelinin tespiti ve taşınmazın idare adına tescili davalarında ise adli yargı (asliye hukuk mahkemesi) görevlidir'],
    trueCorrectPhrase: 'kamulaştırma işleminin iptali davası İdare Mahkemesinde (30 gün içinde), kamulaştırma bedelinin tespiti ve tescil davası ise Asliye Hukuk Mahkemesinde görülür',
    baseExplanation: '2942 sayılı Kamulaştırma Kanunu m. 10 ve m. 14 uyarınca kamulaştırma işleminin hukuka aykırılığı iddiasıyla açılan iptal davasında İdare Mahkemesi (30 gün), bedel tespiti ve tescil davasında ise Asliye Hukuk Mahkemesi görevlidir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'kamulaştırma bedelinin tespiti ve taşınmazın idare adına tescili davalarında ise adli yargı (asliye hukuk mahkemesi) görevlidir',
      wrongPhrase: 'kamulaştırma bedelinin tespiti ve taşınmazın idare adına tescili davalarında da idare mahkemesi görevlidir',
      correctPhrase: 'kamulaştırma bedelinin tespiti ve taşınmazın idare adına tescili davalarında ise adli yargı (asliye hukuk mahkemesi) görevlidir',
      explanation: 'Kamulaştırma bedelinin tespiti ve idare adına tescili davaları idari yargıda değil, adli yargıda (Asliye Hukuk Mahkemesinde) görülür!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Kamulaştırma işleminin iptali davalarında idari yargı (idare mahkemesi)',
      wrongPhrase: 'Kamulaştırma işleminin iptali davalarında taşınmazın bulunduğu yer sulh hukuk mahkemesi',
      correctPhrase: 'Kamulaştırma işleminin iptali davalarında idari yargı (idare mahkemesi)',
      explanation: 'Kamulaştırma kararı bir idari işlem olduğundan iptali davası idari yargıda (İdare Mahkemesinde, tebliğden itibaren 30 gün içinde) açılır.'
    }
  },
  {
    id: 'rule-anayasa-7',
    branch: 'Anayasa',
    subTopic: 'Yüce Divan Yargılaması ve Yeniden İnceleme Süresi',
    articleRef: 'AY M. 148',
    trueStatement:
      'Anayasa Mahkemesi; Cumhurbaşkanını, Türkiye Büyük Millet Meclisi Başkanını, Cumhurbaşkanı yardımcılarını, bakanları, yüksek mahkeme başkan ve üyelerini, Genelkurmay Başkanını, Kara, Deniz ve Hava Kuvvetleri Komutanlarını görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar; Yüce Divan kararlarına karşı tefhim veya tebliğden itibaren on beş gün içinde yeniden inceleme başvurusu yapılabilir.',
    trueHighlight: ['Genelkurmay Başkanını, Kara, Deniz ve Hava Kuvvetleri Komutanlarını', 'görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar', 'on beş gün içinde yeniden inceleme başvurusu yapılabilir'],
    trueCorrectPhrase: 'Genelkurmay Başkanı ve Kuvvet Komutanları Yüce Divanda yargılanır (Jandarma Genel Komutanı 2017 değişikliğiyle çıkarılmıştır); Yüce Divan kararlarına karşı 15 gün içinde yeniden inceleme istenebilir',
    baseExplanation: 'AY m. 148 ve 6216 s.K. uyarınca Yüce Divanda Jandarma Genel Komutanı ve milletvekilleri yargılanmaz (TBMM Başkanı yargılanır!); Yüce Divan kararlarına karşı 15 gün içinde yeniden inceleme başvurusu yapılabilir ve yeniden inceleme üzerine verilen kararlar kesindir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Genelkurmay Başkanını, Kara, Deniz ve Hava Kuvvetleri Komutanlarını görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar',
      wrongPhrase: 'Jandarma Genel Komutanını, Emniyet Genel Müdürünü ve tüm milletvekillerini görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar',
      correctPhrase: 'Genelkurmay Başkanını, Kara, Deniz ve Hava Kuvvetleri Komutanlarını görevleriyle ilgili suçlardan dolayı Yüce Divan sıfatıyla yargılar',
      explanation: '2017 Anayasa değişikliği ile Jandarma Genel Komutanı Yüce Divan kapsamından çıkarılmıştır; ayrıca milletvekilleri Yüce Divanda yargılanmaz (yalnızca TBMM Başkanı yargılanır!).'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Yüce Divan kararlarına karşı tefhim veya tebliğden itibaren on beş gün içinde yeniden inceleme başvurusu yapılabilir',
      wrongPhrase: 'Yüce Divan kararları verildiği anda kesin olup bunlara karşı yeniden inceleme başvurusu yapılamaz',
      correctPhrase: 'Yüce Divan kararlarına karşı tefhim veya tebliğden itibaren on beş gün içinde yeniden inceleme başvurusu yapılabilir',
      explanation: 'AY m. 148/7 ve 6216 s.K. m. 58 uyarınca Yüce Divan kararlarına karşı tefhim veya tebliğden itibaren 15 gün içinde bir defaya mahsus yeniden inceleme başvurusu yapılabilir!'
    }
  },
  {
    id: 'rule-anayasa-8',
    branch: 'Anayasa',
    subTopic: 'Siyasi Partilerin Kapatılması ve Malî Denetimi',
    articleRef: 'AY M. 69',
    trueStatement:
      'Siyasi partilerin kapatılması, Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine Anayasa Mahkemesince kesin olarak karara bağlanır; siyasi partilerin malî denetimi de Anayasa Mahkemesince yapılır ve Anayasa Mahkemesi bu denetim görevini yerine getirirken Sayıştaydan yardım sağlar.',
    trueHighlight: ['Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine Anayasa Mahkemesince', 'siyasi partilerin malî denetimi de Anayasa Mahkemesince yapılır', 'Sayıştaydan yardım sağlar'],
    trueCorrectPhrase: 'siyasi parti kapatma davasını Yargıtay Cumhuriyet Başsavcısı açar, AYM (2/3 çoğunlukla) karara bağlar; siyasi partilerin mali denetimini de Sayıştaydan yardım alarak AYM yapar',
    baseExplanation: 'AY m. 69 uyarınca siyasi partilerin mali denetimini Sayıştay değil, Sayıştaydan yardım alarak Anayasa Mahkemesi yapar; kapatma davasını ise Yargıtay Cumhuriyet Başsavcısı açar.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'siyasi partilerin malî denetimi de Anayasa Mahkemesince yapılır ve Anayasa Mahkemesi bu denetim görevini yerine getirirken Sayıştaydan yardım sağlar',
      wrongPhrase: 'siyasi partilerin malî denetimi doğrudan doğruya Sayıştay Genel Kurulunca yapılır ve Sayıştayın bu konudaki kararları kesindir',
      correctPhrase: 'siyasi partilerin malî denetimi de Anayasa Mahkemesince yapılır ve Anayasa Mahkemesi bu denetim görevini yerine getirirken Sayıştaydan yardım sağlar',
      explanation: 'ÖSYM’nin en klasik Anayasa tuzaklarından biridir: Siyasi partilerin mali denetimini Sayıştay değil, Sayıştaydan yardım sağlayarak Anayasa Mahkemesi yapar!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine Anayasa Mahkemesince',
      wrongPhrase: 'Adalet Bakanının veya TBMM üye tamsayısının beşte birinin açacağı dava üzerine Yargıtay Ceza Genel Kurulunca',
      correctPhrase: 'Yargıtay Cumhuriyet Başsavcısının açacağı dava üzerine Anayasa Mahkemesince',
      explanation: 'Siyasi partilerin kapatılması davasını Yargıtay Cumhuriyet Başsavcısı açar ve davaya Anayasa Mahkemesi Genel Kurulu bakar (toplantıya katılanların 2/3 oy çokluğuyla karar verir).'
    }
  },
  {
    id: 'rule-anayasa-9',
    branch: 'Anayasa',
    subTopic: 'TBMM Seçimlerinin Yenilenmesi ve Cumhurbaşkanının Görev Süresi',
    articleRef: 'AY M. 101 & 116',
    trueStatement:
      'Türkiye Büyük Millet Meclisi, üye tamsayısının beşte üç çoğunluğuyla (360 milletvekili) seçimlerin yenilenmesine karar verebilir; Cumhurbaşkanının ikinci döneminde Meclis tarafından seçimlerin yenilenmesine karar verilmesi hâlinde, Cumhurbaşkanı bir defa daha aday olabilir.',
    trueHighlight: ['üye tamsayısının beşte üç çoğunluğuyla (360 milletvekili) seçimlerin yenilenmesine karar verebilir', 'Cumhurbaşkanının ikinci döneminde Meclis tarafından seçimlerin yenilenmesine karar verilmesi hâlinde, Cumhurbaşkanı bir defa daha aday olabilir'],
    trueCorrectPhrase: 'TBMM seçimlerin yenilenmesine üye tamsayısının 3/5 çoğunluğuyla (360) karar verir; Cumhurbaşkanının 2. döneminde kararı TBMM alırsa Cumhurbaşkanı bir kez daha aday olabilir',
    baseExplanation: 'AY m. 116 uyarınca TBMM üye tamsayısının 3/5 çoğunluğuyla (360) seçimlerin yenilenmesine karar verebilir; Cumhurbaşkanı da tek başına yenileme kararı alabilir, ancak 2. döneminde üçüncü kez aday olabilmesi yalnız TBMM’nin yenileme kararı alması hâlinde mümkündür.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üye tamsayısının beşte üç çoğunluğuyla (360 milletvekili) seçimlerin yenilenmesine karar verebilir',
      wrongPhrase: 'toplantıya katılanların salt çoğunluğuyla seçimlerin yenilenmesine karar verebilir',
      correctPhrase: 'üye tamsayısının beşte üç çoğunluğuyla (360 milletvekili) seçimlerin yenilenmesine karar verebilir',
      explanation: 'AY m. 116/1 uyarınca TBMM’nin seçimlerin yenilenmesine karar verebilmesi için üye tamsayısının 3/5 çoğunluğu (360 milletvekili) şarttır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Cumhurbaşkanının ikinci döneminde Meclis tarafından seçimlerin yenilenmesine karar verilmesi hâlinde, Cumhurbaşkanı bir defa daha aday olabilir',
      wrongPhrase: 'Cumhurbaşkanının ikinci döneminde bizzat Cumhurbaşkanı tarafından seçimlerin yenilenmesine karar verilmesi hâlinde de Cumhurbaşkanı bir defa daha aday olabilir',
      correctPhrase: 'Cumhurbaşkanının ikinci döneminde Meclis tarafından seçimlerin yenilenmesine karar verilmesi hâlinde, Cumhurbaşkanı bir defa daha aday olabilir',
      explanation: 'AY m. 116/3 uyarınca Cumhurbaşkanının ikinci döneminde bir defa daha aday olabilmesi yalnız TBMM tarafından seçimlerin yenilenmesine karar verilmesi hâlinde mümkündür; kararı Cumhurbaşkanı kendisi alırsa tekrar aday olamaz!'
    }
  },
  {
    id: 'rule-anayasa-10',
    branch: 'Anayasa',
    subTopic: 'TBMM Soruşturması (Cumhurbaşkanı Yardımcıları ve Bakanlar)',
    articleRef: 'AY M. 106',
    trueStatement:
      'Cumhurbaşkanı yardımcıları ve bakanlar hakkında görevleriyle ilgili suç işledikleri iddiasıyla, Türkiye Büyük Millet Meclisi üye tamsayısının salt çoğunluğunun (301) vereceği önergeyle soruşturma açılması istenebilir; Meclis üye tamsayısının beşte üçünün (360) gizli oyuyla soruşturma açılmasına ve üye tamsayısının üçte ikisinin (400) gizli oyuyla Yüce Divana sevk kararı verilebilir.',
    trueHighlight: ['üye tamsayısının salt çoğunluğunun (301) vereceği önergeyle', 'beşte üçünün (360) gizli oyuyla soruşturma açılmasına', 'üçte ikisinin (400) gizli oyuyla Yüce Divana sevk kararı verilebilir'],
    trueCorrectPhrase: 'Meclis soruşturması (Cumhurbaşkanı dahil aynı nisaplar): Önerge 301 (salt çoğunluk), Soruşturma açılması 360 (3/5 gizli oy), Yüce Divana sevk 400 (2/3 gizli oy)',
    baseExplanation: 'AY m. 105 ve m. 106 uyarınca hem Cumhurbaşkanı hem de Cumhurbaşkanı yardımcıları ve bakanlar için Yüce Divan süreci nisapları aynıdır: 301 önerge -> 360 soruşturma açılması (gizli oy) -> 400 Yüce Divana sevk (gizli oy).',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'üye tamsayısının salt çoğunluğunun (301) vereceği önergeyle soruşturma açılması istenebilir; Meclis üye tamsayısının beşte üçünün (360) gizli oyuyla soruşturma açılmasına ve üye tamsayısının üçte ikisinin (400) gizli oyuyla Yüce Divana sevk kararı verilebilir',
      wrongPhrase: 'en az yirmi milletvekilinin vereceği önergeyle soruşturma açılması istenebilir; Meclis toplantıya katılanların salt çoğunluğuyla soruşturma açılmasına ve üye tamsayısının salt çoğunluğuyla (301) Yüce Divana sevk kararı verilebilir',
      correctPhrase: 'üye tamsayısının salt çoğunluğunun (301) vereceği önergeyle soruşturma açılması istenebilir; Meclis üye tamsayısının beşte üçünün (360) gizli oyuyla soruşturma açılmasına ve üye tamsayısının üçte ikisinin (400) gizli oyuyla Yüce Divana sevk kararı verilebilir',
      explanation: '2017 Anayasa değişikliği sonrasında Meclis soruşturması nisapları 301 (salt çoğunlukla önerge) - 360 (3/5 gizli oyla soruşturma açılması) - 400 (2/3 gizli oyla Yüce Divana sevk) olarak uygulanmaktadır.'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Meclis üye tamsayısının beşte üçünün (360) gizli oyuyla soruşturma açılmasına',
      wrongPhrase: 'Meclis önergeyi en geç üç ay içinde görüşerek açık oylamayla soruşturma açılmasına',
      correctPhrase: 'Meclis üye tamsayısının beşte üçünün (360) gizli oyuyla soruşturma açılmasına',
      explanation: 'AY m. 106/5 uyarınca Meclis önergeyi en geç 1 ay içinde görüşür ve hem soruşturma açılması hem de Yüce Divana sevk oylamaları gizli oyla yapılır!'
    }
  },
  {
    id: 'rule-medeni-7',
    branch: 'Medeni',
    subTopic: 'Dernek Genel Kurulunun Toplanması ve Fesih Nisabı',
    articleRef: 'TMK M. 74-89',
    trueStatement:
      'Dernekler, en az yedi gerçek veya tüzel kişinin kazanç paylaşma dışında belirli ve ortak bir amacı gerçekleştirmek üzere kuruluş bildirimini ve dernek tüzüğünü yerleşim yerinin en büyük mülki amirine vermeleriyle tüzel kişilik kazanırlar; genel kurul, yönetim kurulunca en az on beş gün önceden toplantıya çağrılır ve derneğin kendi kendini feshi için genel kurula katılma hakkı bulunan üyelerin en az üçte ikisinin toplantıda hazır bulunması ve toplantıya katılan üyelerin üçte iki çoğunluğuyla karar verilmesi gerekir.',
    trueHighlight: ['en az yedi gerçek veya tüzel kişinin', 'en büyük mülki amirine vermeleriyle tüzel kişilik kazanırlar', 'üçte iki çoğunluğuyla karar verilmesi gerekir'],
    trueCorrectPhrase: 'dernekler en az 7 gerçek veya tüzel kişiyle bildirim usulüyle kurulur; fesih ve tüzük değişikliği kararları toplantıya katılanların 2/3 çoğunluğuyla alınır',
    baseExplanation: 'TMK m. 56-81 uyarınca dernekler en az 7 kişiyle kurulur, mülki amire bildirimle tüzel kişilik kazanır (serbest kuruluş/bildirim sistemi); tüzük değişikliği ve fesih kararı için ilk toplantıda 2/3 toplantı yeter sayısı ve katılanların 2/3 karar yeter sayısı aranır.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'en az yedi gerçek veya tüzel kişinin kazanç paylaşma dışında belirli ve ortak bir amacı gerçekleştirmek üzere kuruluş bildirimini ve dernek tüzüğünü yerleşim yerinin en büyük mülki amirine vermeleriyle tüzel kişilik kazanırlar',
      wrongPhrase: 'en az beş gerçek kişinin asliye hukuk mahkemesinden izin alarak sicile tescil ettirmeleriyle tüzel kişilik kazanırlar',
      correctPhrase: 'en az yedi gerçek veya tüzel kişinin kazanç paylaşma dışında belirli ve ortak bir amacı gerçekleştirmek üzere kuruluş bildirimini ve dernek tüzüğünü yerleşim yerinin en büyük mülki amirine vermeleriyle tüzel kişilik kazanırlar',
      explanation: 'Dernekler mahkeme tesciliyle değil, en az 7 gerçek veya tüzel kişinin kuruluş bildirimini en büyük mülki amire vermesiyle anda tüzel kişilik kazanır (asliye hukuk mahkemesi siciline tescille kurulan vakıftır!).'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'toplantıya katılan üyelerin üçte iki çoğunluğuyla karar verilmesi gerekir',
      wrongPhrase: 'toplantıya katılan üyelerin salt çoğunluğuyla karar verilmesi yeterlidir',
      correctPhrase: 'toplantıya katılan üyelerin üçte iki çoğunluğuyla karar verilmesi gerekir',
      explanation: 'TMK m. 81 uyarınca dernek tüzük değişikliği ve derneğin feshi kararları yalnız toplantıya katılan üyelerin 2/3 çoğunluğuyla alınabilir.'
    }
  },
  {
    id: 'rule-medeni-8',
    branch: 'Medeni',
    subTopic: 'Vakıfların Kuruluş Şekli ve Mirasçılar Tarafından İptali',
    articleRef: 'TMK M. 102',
    trueStatement:
      'Vakıf kurma iradesi, resmî senetle veya ölüme bağlı tasarrufla açıklanır; vakıf, yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır; vakfedenin mirasçıları veya alacaklıları bağışlamada ve ölüme bağlı tasarruflarda olduğu gibi vakfın kurulmasına itiraz edebilirler.',
    trueHighlight: ['resmî senetle veya ölüme bağlı tasarrufla açıklanır', 'yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır'],
    trueCorrectPhrase: 'vakıf resmi senetle (noterde) veya ölüme bağlı tasarrufla kurulur ve asliye hukuk mahkemesi nezdinde tutulan sicile tescille tüzel kişilik kazanır',
    baseExplanation: 'TMK m. 102 uyarınca vakıf adi yazılı sözleşmeyle kurulamaz; resmi senet veya ölüme bağlı tasarruf şarttır ve tüzel kişilik yerleşim yeri asliye hukuk mahkemesi siciline tescille kazanılır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'resmî senetle veya ölüme bağlı tasarrufla açıklanır; vakıf, yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır',
      wrongPhrase: 'adi yazılı senetle açıklanır ve Vakıflar Genel Müdürlüğüne bildirim yapılmasıyla mahkeme kararı aranmaksızın tüzel kişilik kazanır',
      correctPhrase: 'resmî senetle veya ölüme bağlı tasarrufla açıklanır; vakıf, yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile tüzel kişilik kazanır',
      explanation: 'Derneklerden farklı olarak vakıflarda bildirim sistemi değil tescil sistemi geçerlidir; resmi senet/ölüme bağlı tasarruf ve mahkeme siciline tescil şarttır.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile',
      wrongPhrase: 'yerleşim yeri sulh hukuk mahkemesi veya ticaret sicili müdürlüğü nezdinde tutulan sicile tescil ile',
      correctPhrase: 'yerleşim yeri mahkemesi nezdinde tutulan sicile tescil ile',
      explanation: 'Vakıfların tescilinde görevli mahkeme Sulh Hukuk Mahkemesi değil, Asliye Hukuk Mahkemesidir.'
    }
  },
  {
    id: 'rule-medeni-9',
    branch: 'Medeni',
    subTopic: 'Anlaşmalı Boşanma Şartları (1 Yıl Süre ve Bizzat Dinlenme)',
    articleRef: 'TMK M. 166/3',
    trueStatement:
      'Evlilik en az bir yıl sürmüş ise, eşlerin birlikte başvurması ya da bir eşin diğerinin davasını kabul etmesi hâlinde, evlilik birliği temelinden sarsılmış sayılır; bu hâlde boşanma kararı verilebilmesi için, hâkimin tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesi ve boşanmanın malî sonuçları ile çocukların durumu hususunda taraflarca kabul edilecek düzenlemeyi uygun bulması şarttır.',
    trueHighlight: ['Evlilik en az bir yıl sürmüş ise', 'hâkimin tarafları bizzat dinleyerek', 'düzenlemeyi uygun bulması şarttır'],
    trueCorrectPhrase: 'anlaşmalı boşanma için evliliğin en az 1 yıl sürmüş olması ve hâkimin eşleri duruşmada bizzat dinlemesi (vekil yeterli değildir) zorunludur',
    baseExplanation: 'TMK m. 166/3 uyarınca anlaşmalı boşanmada evliliğin en az 1 yıl sürmüş olması ve hâkimin tarafları bizzat dinlemesi şarttır; hâkim protokolde gerekli gördüğü değişiklikleri yapabilir, ancak bu değişikliklerin taraflarca da kabulü gerekir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Evlilik en az bir yıl sürmüş ise',
      wrongPhrase: 'Evlilik en az altı ay sürmüş ise',
      correctPhrase: 'Evlilik en az bir yıl sürmüş ise',
      explanation: 'TMK m. 166/3 uyarınca anlaşmalı boşanma için evliliğin en az 1 yıl sürmüş olması şarttır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'hâkimin tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesi',
      wrongPhrase: 'tarafların duruşmaya gelmesine gerek olmaksızın özel yetkili vekillerinin imzalı protokolü mahkemeye sunması',
      correctPhrase: 'hâkimin tarafları bizzat dinleyerek iradelerinin serbestçe açıklandığına kanaat getirmesi',
      explanation: 'Anlaşmalı boşanmada vekillerin beyanı yeterli değildir; hâkimin eşleri bizzat dinlemesi emredici kanun hükmüdür.'
    }
  },
  {
    id: 'rule-medeni-10',
    branch: 'Medeni',
    subTopic: 'Soybağının Reddi Davası Süresi',
    articleRef: 'TMK M. 289',
    trueStatement:
      'Koca, soybağının reddi davasını, doğumu ve baba olmadığını veya ananın gebe kaldığı sırada başka bir erkek ile cinsel ilişkide bulunduğunu öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır; çocuk ise ergin olduğu tarihten başlayarak en geç bir yıl içinde dava açmak zorundadır.',
    trueHighlight: ['öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır', 'çocuk ise ergin olduğu tarihten başlayarak en geç bir yıl içinde dava açmak zorundadır'],
    trueCorrectPhrase: 'soybağının reddi davası koca için öğrenmeden itibaren 1 yıl, çocuk için ergin olmasından itibaren 1 yıl hak düşürücü süreye tabidir (5 yıllık üst süre AYM tarafından iptal edilmiştir)',
    baseExplanation: 'TMK m. 289 uyarınca soybağının reddi davası öğrenmeden (veya çocuğun ergin olmasından) itibaren 1 yıllık hak düşürücü süreye tabidir; eskiden yer alan 5 yıllık mutlak süre Anayasa Mahkemesince iptal edilmiştir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır; çocuk ise ergin olduğu tarihten başlayarak en geç bir yıl içinde dava açmak zorundadır',
      wrongPhrase: 'öğrendiği tarihten başlayarak altı ay ve her hâlde doğumdan itibaren beş yıl içinde açmak zorundadır',
      correctPhrase: 'öğrendiği tarihten başlayarak bir yıl içinde açmak zorundadır; çocuk ise ergin olduğu tarihten başlayarak en geç bir yıl içinde dava açmak zorundadır',
      explanation: 'Soybağının reddi davasında hak düşürücü süre 1 yıldır ve doğumdan itibaren 5 yıllık mutlak üst süre Anayasa Mahkemesi tarafından iptal edilmiştir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Koca, soybağının reddi davasını',
      wrongPhrase: 'Soybağının reddi davası sulh hukuk mahkemesinde görülür ve koca bu davayı',
      correctPhrase: 'Koca, soybağının reddi davasını',
      explanation: 'Soybağının reddi davası Aile Mahkemesinin (bulunmayan yerlerde Aile Mahkemesi sıfatıyla Asliye Hukuk Mahkemesinin) görevine girer.'
    }
  },
  {
    id: 'rule-medeni-11',
    branch: 'Medeni',
    subTopic: 'Vasiyetnamenin İptali ve Tenkis Davası Süreleri',
    articleRef: 'TMK M. 559 & 571',
    trueStatement:
      'Ölüme bağlı tasarrufun iptali ve tenkis davası açma hakkı, mirasçıların iptal sebebini veya saklı paylarının zedelendiğini öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden iyiniyetli davalılara karşı on yıl, iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer.',
    trueHighlight: ['öğrendikleri tarihten başlayarak bir yıl', 'iyiniyetli davalılara karşı on yıl, iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer'],
    trueCorrectPhrase: 'tenkis ve ölüme bağlı tasarrufun iptali davalarında hak düşürücü süre öğrenmeden itibaren 1 yıl ve her hâlde iyiniyetlilere karşı 10 yıl (tenkiste mutlak 10 yıl, iptalde kötüniyetlilere karşı 20 yıl) olarak uygulanır',
    baseExplanation: 'TMK m. 559 ve m. 571 uyarınca ölüme bağlı tasarrufun iptali davasında süre 1 yıl / 10 yıl (kötüniyetlilere 20 yıl), tenkis davasında ise 1 yıl / 10 yıldır; ancak her iki iddia da def’i yoluyla her zaman ileri sürülebilir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden iyiniyetli davalılara karşı on yıl',
      wrongPhrase: 'öğrendikleri tarihten başlayarak üç ay ve her hâlde mirasın açılması tarihinin üzerinden beş yıl',
      correctPhrase: 'öğrendikleri tarihten başlayarak bir yıl ve her hâlde vasiyetnamelerde açılma tarihinin, diğer tasarruflarda mirasın açılması tarihinin üzerinden iyiniyetli davalılara karşı on yıl',
      explanation: 'Tenkis ve ölüme bağlı tasarrufun iptali davalarında öğrenmeden itibaren hak düşürücü süre 3 ay değil 1 yıl, üst süre ise 10 yıldır (iptal davasında kötüniyetli davalılara karşı 20 yıl).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer',
      wrongPhrase: 'bu sürelerin geçmesinden sonra hükümsüzlük veya tenkis iddiası def’i yoluyla dahi ileri sürülemez',
      correctPhrase: 'iyiniyetli olmayan davalılara karşı yirmi yıl geçmekle düşer',
      explanation: 'TMK m. 559/2 ve m. 571/3 uyarınca ölüme bağlı tasarrufun hükümsüzlüğü ve tenkis iddiası, dava açma süreleri geçmiş olsa dahi def’i yoluyla her zaman ileri sürülebilir!'
    }
  },
  {
    id: 'rule-medeni-12',
    branch: 'Medeni',
    subTopic: 'Üst Hakkı ve İntifa Hakkının Azami Süresi',
    articleRef: 'TMK M. 797 & 836',
    trueStatement:
      'İntifa hakkı, gerçek kişilerde hak sahibinin ölümüyle, tüzel kişilerde ise kararlaştırılan sürenin dolmasıyla sona erer ve tüzel kişiler lehine en çok yüz yıl için kurulabilir; bağımsız ve sürekli nitelikteki üst hakkı ise en çok yüz yıl için kurulabilir ve en az otuz yıl için kurulmuşsa tapu kütüğüne taşınmaz olarak kaydedilebilir.',
    trueHighlight: ['tüzel kişiler lehine en çok yüz yıl için kurulabilir', 'bağımsız ve sürekli nitelikteki üst hakkı ise en çok yüz yıl için kurulabilir ve en az otuz yıl için kurulmuşsa tapu kütüğüne taşınmaz olarak kaydedilebilir'],
    trueCorrectPhrase: 'tüzel kişilerde intifa hakkı en çok 100 yıl sürer; üst hakkı en çok 100 yıl için kurulabilir ve en az 30 yıl süreli (bağımsız ve sürekli) ise tapuya taşınmaz olarak kaydedilebilir',
    baseExplanation: 'TMK m. 797 uyarınca tüzel kişilerde intifa hakkı en çok 100 yıl devam edebilir ve mirasçılara geçmez; TMK m. 826-836 uyarınca üst hakkı en az 30 yıl için kurulursa sürekli sayılır ve azami süresi 100 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tüzel kişiler lehine en çok yüz yıl için kurulabilir; bağımsız ve sürekli nitelikteki üst hakkı ise en çok yüz yıl için kurulabilir ve en az otuz yıl için kurulmuşsa tapu kütüğüne taşınmaz olarak kaydedilebilir',
      wrongPhrase: 'tüzel kişiler lehine en çok kırk dokuz yıl için kurulabilir; bağımsız ve sürekli nitelikteki üst hakkı ise en az on yıl için kurulmuşsa tapu kütüğüne taşınmaz olarak kaydedilebilir',
      correctPhrase: 'tüzel kişiler lehine en çok yüz yıl için kurulabilir; bağımsız ve sürekli nitelikteki üst hakkı ise en çok yüz yıl için kurulabilir ve en az otuz yıl için kurulmuşsa tapu kütüğüne taşınmaz olarak kaydedilebilir',
      explanation: 'TMK m. 797 ve m. 836 uyarınca hem tüzel kişi intifa hakkının hem de üst hakkının azami süresi 100 yıldır; üst hakkının tapuya bağımsız ve sürekli hak (taşınmaz) olarak kaydedilebilmesi için en az 30 yıl süreli olması gerekir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İntifa hakkı, gerçek kişilerde hak sahibinin ölümüyle, tüzel kişilerde ise kararlaştırılan sürenin dolmasıyla sona erer',
      wrongPhrase: 'İntifa hakkı, hak sahibinin ölümüyle sona ermez ve yasal mirasçılarına intikal eder',
      correctPhrase: 'İntifa hakkı, gerçek kişilerde hak sahibinin ölümüyle, tüzel kişilerde ise kararlaştırılan sürenin dolmasıyla sona erer',
      explanation: 'İntifa hakkı ve oturma (sükna) hakkı kişiye sıkı sıkıya bağlı irtifak haklarıdır; devredilemez ve mirasçılara geçmez!'
    }
  },
  {
    id: 'rule-borclar-7',
    branch: 'Borçlar',
    subTopic: 'On Yıllık ve Beş Yıllık Genel/Özel Zamanaşımı Süreleri',
    articleRef: 'TBK M. 146-147',
    trueStatement:
      'Kanunda aksine bir hüküm bulunmadıkça her alacak on yıllık zamanaşımına tabidir; kira bedelleri, anapara faizleri, ücret alacakları, otel ve lokanta giderleri, küçük sanat işlerinden ve perakende satışlardan doğan alacaklar ile vekâlet, komisyon, acentelik ve eser sözleşmelerinden (ağır kusur hariç) doğan alacaklar ise beş yıllık zamanaşımına tabidir.',
    trueHighlight: ['her alacak on yıllık zamanaşımına tabidir', 'kira bedelleri, anapara faizleri, ücret alacakları', 'vekâlet, komisyon, acentelik ve eser sözleşmelerinden (ağır kusur hariç) doğan alacaklar ise beş yıllık zamanaşımına tabidir'],
    trueCorrectPhrase: 'TBK m. 146 genel zamanaşımı süresi 10 yıldır; kira, faiz, ücret, vekâlet, komisyon, simsarlık ve eser sözleşmesi alacaklarında (m. 147) zamanaşımı 5 yıldır',
    baseExplanation: 'TBK m. 146 uyarınca genel zamanaşımı 10 yıl, TBK m. 147 uyarınca kira, faiz, ücret, vekâlet, eser (ağır kusur hariç), komisyon, simsarlık ve ortaklık sözleşmelerinden doğan alacaklarda zamanaşımı 5 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kira bedelleri, anapara faizleri, ücret alacakları, otel ve lokanta giderleri, küçük sanat işlerinden ve perakende satışlardan doğan alacaklar ile vekâlet, komisyon, acentelik ve eser sözleşmelerinden (ağır kusur hariç) doğan alacaklar ise beş yıllık zamanaşımına tabidir',
      wrongPhrase: 'kira bedelleri, ücret alacakları ve vekâlet sözleşmesinden doğan alacaklar iki yıllık zamanaşımına tabidir',
      correctPhrase: 'kira bedelleri, anapara faizleri, ücret alacakları, otel ve lokanta giderleri, küçük sanat işlerinden ve perakende satışlardan doğan alacaklar ile vekâlet, komisyon, acentelik ve eser sözleşmelerinden (ağır kusur hariç) doğan alacaklar ise beş yıllık zamanaşımına tabidir',
      explanation: 'TBK m. 147 uyarınca kira, faiz, ücret, vekâlet ve eser sözleşmesinden doğan alacaklar 2 yıllık değil, 5 yıllık zamanaşımına tabidir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kanunda aksine bir hüküm bulunmadıkça her alacak on yıllık zamanaşımına tabidir',
      wrongPhrase: 'Zamanaşımı süreleri tarafların açık yazılı anlaşmasıyla kısaltılabilir veya uzatılabilir',
      correctPhrase: 'Kanunda aksine bir hüküm bulunmadıkça her alacak on yıllık zamanaşımına tabidir',
      explanation: 'TBK m. 148 emredici hükmü uyarınca Kanunda belirlenen zamanaşımı süreleri sözleşmeyle kesinlikle değiştirilemez (uzatılamaz ve kısaltılamaz)!'
    }
  },
  {
    id: 'rule-borclar-8',
    branch: 'Borçlar',
    subTopic: 'Eser Sözleşmesinde Ayıp Zamanaşımı Süreleri',
    articleRef: 'TBK M. 478',
    trueStatement:
      'Yüklenici ayıplı bir eser meydana getirmişse, bu sebeple açılacak davalar, teslim tarihinden başlayarak taşınmaz yapılar dışındaki eserlerde iki yılın, taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar.',
    trueHighlight: ['taşınmaz yapılar dışındaki eserlerde iki yılın', 'taşınmaz yapılarda ise beş yılın', 'yüklenicinin ağır kusuru varsa ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar'],
    trueCorrectPhrase: 'eser sözleşmesinde ayıp zamanaşımı taşınırlarda 2 yıl, taşınmaz yapılarda 5 yıl, yüklenicinin ağır kusuru hâlinde ise taşınır/taşınmaz ayrımı olmaksızın 20 yıldır',
    baseExplanation: 'TBK m. 478 uyarınca eser sözleşmesinde ayıp zamanaşımı teslimden itibaren taşınırlarda 2 yıl, taşınmaz yapılarda 5 yıl, yüklenicinin ağır kusuru varsa her durumda 20 yıldır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'taşınmaz yapılar dışındaki eserlerde iki yılın, taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa ayıplı eserin niteliğine bakılmaksızın yirmi yılın',
      wrongPhrase: 'taşınmaz yapılar dışındaki eserlerde bir yılın, taşınmaz yapılarda ise on yılın ve yüklenicinin ağır kusuru varsa on beş yılın',
      correctPhrase: 'taşınmaz yapılar dışındaki eserlerde iki yılın, taşınmaz yapılarda ise beş yılın ve yüklenicinin ağır kusuru varsa ayıplı eserin niteliğine bakılmaksızın yirmi yılın',
      explanation: 'TBK m. 478 uyarınca eser sözleşmesinde ayıp zamanaşımı süreleri 2 yıl (taşınır) - 5 yıl (taşınmaz yapı) - 20 yıl (ağır kusur) olarak düzenlenmiştir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yüklenicinin ağır kusuru varsa ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar',
      wrongPhrase: 'yüklenicinin ağır kusuru olsa dahi taşınır eserlerde zamanaşımı süresi iki yılı aşamaz',
      correctPhrase: 'yüklenicinin ağır kusuru varsa ayıplı eserin niteliğine bakılmaksızın yirmi yılın geçmesiyle zamanaşımına uğrar',
      explanation: 'TBK m. 478 açık hükmü uyarınca yüklenicinin ağır kusuru varsa ayıplı eserin taşınır veya taşınmaz niteliğine bakılmaksızın zamanaşımı süresi 20 yıldır!'
    }
  },
  {
    id: 'rule-borclar-9',
    branch: 'Borçlar',
    subTopic: 'Konut ve Çatılı İşyeri Kiralarında Kiracının Bildirimle Feshi',
    articleRef: 'TBK M. 347',
    trueStatement:
      'Konut ve çatılı işyeri kiralarında kiracı, belirli süreli sözleşmelerin süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça, sözleşme aynı koşullarla bir yıl için uzatılmış sayılır; kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez, ancak on yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce bildirimde bulunmak koşuluyla herhangi bir sebep göstermeksizin sözleşmeye son verebilir.',
    trueHighlight: ['süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça', 'on yıllık uzama süresi sonunda', 'en az üç ay önce bildirimde bulunmak koşuluyla'],
    trueCorrectPhrase: 'belirli süreli konut/çatılı işyeri kirasında kiracı süre bitiminden en az 15 gün önce bildirimle sözleşmeyi sona erdirebilir; kiraya veren ise ancak 10 yıllık uzama süresi sonunda (en az 3 ay önce bildirimle) sebep göstermeksizin feshedebilir',
    baseExplanation: 'TBK m. 347 uyarınca konut ve çatılı işyeri kiralarında kiracı süre bitiminden en az 15 gün önce bildirimde bulunarak sözleşmeyi sona erdirebilir; kiraya veren ise 10 yıllık uzama süresi dolmadan sırf süre bitimine dayanarak tahliye isteyemez.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça, sözleşme aynı koşullarla bir yıl için uzatılmış sayılır; kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez, ancak on yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce',
      wrongPhrase: 'süresinin bitiminden en az bir ay önce bildirimde bulunmadıkça, sözleşme aynı koşullarla uzatılmış sayılır; kiraya veren ise beş yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az bir ay önce',
      correctPhrase: 'süresinin bitiminden en az on beş gün önce bildirimde bulunmadıkça, sözleşme aynı koşullarla bir yıl için uzatılmış sayılır; kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez, ancak on yıllık uzama süresi sonunda bu süreyi izleyen her uzama yılının bitiminden en az üç ay önce',
      explanation: 'TBK m. 347 uyarınca kiracının fesih bildirimi süresi en az 15 gün; kiraya verenin sebep göstermeksizin fesih hakkı ise 10 yıllık uzama süresi sonunda ve yeni uzama yılından en az 3 ay önce bildirimle doğar!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez',
      wrongPhrase: 'kiraya veren de tıpkı kiracı gibi kira süresinin bitiminden on beş gün önce bildirimde bulunarak sözleşmeyi sebep göstermeksizin sona erdirebilir',
      correctPhrase: 'kiraya veren, sözleşme süresinin bitimine dayanarak sözleşmeyi sona erdiremez',
      explanation: 'Konut ve çatılı işyeri kiralarında süre bitimi nedeniyle (15 gün önceden bildirimle) fesih hakkı yalnız kiracıya tanınmıştır; kiraya veren 10 yıllık uzama süresi dolmadan sırf süre bitti diye sözleşmeyi sona erdiremez!'
    }
  },
  {
    id: 'rule-borclar-10',
    branch: 'Borçlar',
    subTopic: 'Alacağın Devri (Temliki) ve Borçlunun Rızası',
    articleRef: 'TBK M. 183-184',
    trueStatement:
      'Kanun, sözleşme veya işin niteliği engel olmadıkça alacaklı, borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir; alacağın devrinin geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır; alacağın devri sözü verme ise şekle bağlı değildir.',
    trueHighlight: ['borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir', 'alacağın devrinin geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır', 'alacağın devri sözü verme ise şekle bağlı değildir'],
    trueCorrectPhrase: 'alacağın devrinde borçlunun rızası aranmaz ve devir işlemi adi yazılı şekle tabidir; alacağın devri sözü verme (taahhüdü) ise şekle bağlı değildir',
    baseExplanation: 'TBK m. 183-184 uyarınca alacağın devri (temliki) tasarruf işlemidir, borçlunun rızasını gerektirmez ve yazılı şekle tabidir; buna karşılık alacağın devri sözü verme (taahhüt işlemi) şekle bağlı değildir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir; alacağın devrinin geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır; alacağın devri sözü verme ise şekle bağlı değildir',
      wrongPhrase: 'ancak borçlunun yazılı onayıyla alacağını üçüncü bir kişiye devredebilir; hem alacağın devri hem de alacağın devri sözü verme noter huzurunda resmi şekle bağlıdır',
      correctPhrase: 'borçlunun rızasını aramaksızın alacağını üçüncü bir kişiye devredebilir; alacağın devrinin geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır; alacağın devri sözü verme ise şekle bağlı değildir',
      explanation: 'Borcun üstlenilmesinde (naklinde) alacaklının rızası şart iken, alacağın devrinde borçlunun rızası aranmaz; ayrıca alacağın devri adi yazılı şekle tabi olup devir sözü verme (vaadi) hiçbir şekle bağlı değildir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'alacağın devrinin geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır',
      wrongPhrase: 'alacağın devrinin geçerliliği, hem devredenin hem de devralanın sözleşmeyi birlikte imzalamasına bağlıdır',
      correctPhrase: 'alacağın devrinin geçerliliği, yazılı şekilde yapılmış olmasına bağlıdır',
      explanation: 'TBK m. 14 uyarınca alacağın devrinde yalnızca borç altına giren (alacağını devreden) kişinin imzası yeterlidir; devralanın kabul beyanı şekle tabi değildir.'
    }
  },
  {
    id: 'rule-borclar-11',
    branch: 'Borçlar',
    subTopic: 'Taşınmaz Satış Vaadi ve ÖnAlım (Şufa) Sözleşmesinin Şekli',
    articleRef: 'TBK M. 237',
    trueStatement:
      'Taşınmaz satışının geçerli olması için, sözleşmenin resmî şekilde düzenlenmesi şarttır; taşınmaz satışı vaadi, geri alım ve alım sözleşmeleri resmî şekilde düzenlenmedikçe geçerli olmaz; önalım sözleşmesinin geçerliliği ise yazılı şekilde yapılmış olmasına bağlıdır.',
    trueHighlight: ['taşınmaz satışı vaadi, geri alım ve alım sözleşmeleri resmî şekilde düzenlenmedikçe geçerli olmaz', 'önalım sözleşmesinin geçerliliği ise yazılı şekilde yapılmış olmasına bağlıdır'],
    trueCorrectPhrase: 'taşınmaz satış vaadi, alım (iştira) ve geri alım (vefa) sözleşmeleri resmi şekle tabidir; sözleşmeden doğan önalım (şufa) sözleşmesi ise adi yazılı şekle tabidir',
    baseExplanation: 'TBK m. 237’deki en kritik sınav ayrımı: Taşınmaz satışı, satış vaadi, alım ve geri alım sözleşmeleri resmi şekle tabidir; ancak sözleşmeden doğan önalım (şufa) sözleşmesi için adi yazılı şekil yeterlidir!',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'önalım sözleşmesinin geçerliliği ise yazılı şekilde yapılmış olmasına bağlıdır',
      wrongPhrase: 'önalım sözleşmesinin geçerliliği de tapu müdürlüğünde resmî şekilde yapılmış olmasına bağlıdır',
      correctPhrase: 'önalım sözleşmesinin geçerliliği ise yazılı şekilde yapılmış olmasına bağlıdır',
      explanation: 'TBK m. 237/3 uyarınca alım ve geri alım sözleşmeleri resmi şekle tabi iken, önalım (şufa) sözleşmesinin geçerliliği için adi yazılı şekil yeterlidir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'taşınmaz satışı vaadi, geri alım ve alım sözleşmeleri resmî şekilde düzenlenmedikçe geçerli olmaz',
      wrongPhrase: 'alım, geri alım ve önalım hakları tapu kütüğüne şerh verildiğinde her hâlde yirmi yıl süreyle herkese karşı ileri sürülebilir',
      correctPhrase: 'taşınmaz satışı vaadi, geri alım ve alım sözleşmeleri resmî şekilde düzenlenmedikçe geçerli olmaz',
      explanation: 'TMK m. 735-736 uyarınca alım, geri alım ve sözleşmeden doğan önalım haklarının tapu kütüğüne şerhinin etkisi en çok 10 yıldır (taşınmaz satış vaadi şerhinin etkisi ise 5 yıldır).'
    }
  },
  {
    id: 'rule-ticaret-7',
    branch: 'Ticaret',
    subTopic: 'Anonim Şirketlerde Esas Sözleşme Değişikliği Nisapları',
    articleRef: 'TTK M. 421',
    trueStatement:
      'Kanunda veya esas sözleşmede aksine hüküm bulunmadığı takdirde, anonim şirketin esas sözleşmesi, sermayenin en az yarısının temsil edildiği genel kurulda, mevcut oyların çoğunluğu ile değiştirilebilir; bilanço zararlarının kapatılması için yükümlülük ve ikincil yükümlülük koyan kararlar ile şirketin merkezinin yurt dışına taşınmasına ilişkin kararlar ise sermayenin tümünü oluşturan payların sahiplerinin oybirliğiyle alınır.',
    trueHighlight: ['sermayenin en az yarısının temsil edildiği genel kurulda, mevcut oyların çoğunluğu ile değiştirilebilir', 'şirketin merkezinin yurt dışına taşınmasına ilişkin kararlar ise sermayenin tümünü oluşturan payların sahiplerinin oybirliğiyle alınır'],
    trueCorrectPhrase: 'A.Ş. olağan esas sözleşme değişikliğinde toplantı nisabı sermayenin 1/2’si (ikinci toplantıda 1/3), karar nisabı mevcut oyların çoğunluğudur; şirket merkezinin yurt dışına taşınması ise tüm pay sahiplerinin oybirliğini (100%) gerektirir',
    baseExplanation: 'TTK m. 421 uyarınca anonim şirkette genel esas sözleşme değişikliği sermayenin en az yarısının temsil edildiği genel kurulda mevcut oyların çoğunluğuyla yapılır; şirket merkezinin yurt dışına taşınması ve ikincil yükümlülük konulması ise oybirliği (%100) gerektirir.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'şirketin merkezinin yurt dışına taşınmasına ilişkin kararlar ise sermayenin tümünü oluşturan payların sahiplerinin oybirliğiyle alınır',
      wrongPhrase: 'şirketin merkezinin yurt dışına taşınmasına ilişkin kararlar ise sermayenin en az yüzde yetmiş beşini oluşturan payların sahiplerinin olumlu oylarıyla alınır',
      correctPhrase: 'şirketin merkezinin yurt dışına taşınmasına ilişkin kararlar ise sermayenin tümünü oluşturan payların sahiplerinin oybirliğiyle alınır',
      explanation: 'TTK m. 421/2 uyarınca bilanço zararlarının kapatılması için yükümlülük konulması ve şirket merkezinin yurt dışına taşınması kararlarında %75 çoğunluk yetmez; sermayenin tümünü oluşturan pay sahiplerinin oybirliği şarttır!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'sermayenin en az yarısının temsil edildiği genel kurulda, mevcut oyların çoğunluğu ile değiştirilebilir',
      wrongPhrase: 'sermayenin en az dörtte birinin temsil edildiği genel kurulda, mevcut oyların çoğunluğu ile değiştirilebilir',
      correctPhrase: 'sermayenin en az yarısının temsil edildiği genel kurulda, mevcut oyların çoğunluğu ile değiştirilebilir',
      explanation: 'Sermayenin en az 1/4’ü olağan genel kurul toplantı nisabıdır (TTK m. 418); esas sözleşme değişikliklerinde (TTK m. 421/1) ise ilk toplantı nisabı sermayenin en az yarısıdır (ikinci toplantıda en az 1/3).'
    }
  },
  {
    id: 'rule-ticaret-8',
    branch: 'Ticaret',
    subTopic: 'Poliçede Zamanaşımı Süreleri (3 Yıl - 1 Yıl - 6 Ay)',
    articleRef: 'TTK M. 749',
    trueStatement:
      'Poliçeyi kabul edene karşı ileri sürülecek poliçeden doğan istemler, vadenin geldiği tarihten itibaren üç yıl geçmekle; hamilin cirantalara ve düzenleyene karşı ileri süreceği istemler, süresinde çekilen protesto tarihinden itibaren bir yıl geçmekle; bir cirantanın başka cirantalara ve düzenleyene karşı ileri süreceği istemler ise cirantanın poliçeyi ödediği veya poliçenin dava yoluyla kendisine karşı ileri sürüldüğü tarihten itibaren altı ay geçmekle zamanaşımına uğrar.',
    trueHighlight: ['kabul edene karşı ileri sürülecek poliçeden doğan istemler, vadenin geldiği tarihten itibaren üç yıl', 'hamilin cirantalara ve düzenleyene karşı ileri süreceği istemler, süresinde çekilen protesto tarihinden itibaren bir yıl', 'bir cirantanın başka cirantalara ve düzenleyene karşı ileri süreceği istemler ise', 'altı ay geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'poliçede (ve bonoda) zamanaşımı süresi asıl borçluya (kabul eden/düzenleyen) karşı 3 yıl, hamilin başvuru borçlularına karşı 1 yıl, cirantanın diğer başvuru borçlularına rücuunda ise 6 aydır',
    baseExplanation: 'TTK m. 749 uyarınca poliçe ve bonoda zamanaşımı 3 yıl (asıl borçlu) - 1 yıl (hamilin cirantalara/keşideciye başvurusu) - 6 ay (cirantanın rücuu) kuralına tabidir (çekte ise TTK m. 814 uyarınca tümü 3 yıldır!).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'vadenin geldiği tarihten itibaren üç yıl geçmekle; hamilin cirantalara ve düzenleyene karşı ileri süreceği istemler, süresinde çekilen protesto tarihinden itibaren bir yıl geçmekle; bir cirantanın başka cirantalara ve düzenleyene karşı ileri süreceği istemler ise cirantanın poliçeyi ödediği veya poliçenin dava yoluyla kendisine karşı ileri sürüldüğü tarihten itibaren altı ay geçmekle zamanaşımına uğrar',
      wrongPhrase: 'vadenin geldiği tarihten itibaren beş yıl geçmekle; hamilin cirantalara karşı istemleri iki yıl geçmekle; cirantanın diğer cirantalara karşı istemleri ise bir yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'vadenin geldiği tarihten itibaren üç yıl geçmekle; hamilin cirantalara ve düzenleyene karşı ileri süreceği istemler, süresinde çekilen protesto tarihinden itibaren bir yıl geçmekle; bir cirantanın başka cirantalara ve düzenleyene karşı ileri süreceği istemler ise cirantanın poliçeyi ödediği veya poliçenin dava yoluyla kendisine karşı ileri sürüldüğü tarihten itibaren altı ay geçmekle zamanaşımına uğrar',
      explanation: 'TTK m. 749 uyarınca poliçe ve bonoda zamanaşımı süreleri 5-2-1 yıl değil, 3 yıl - 1 yıl - 6 aydır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Poliçeyi kabul edene karşı ileri sürülecek poliçeden doğan istemler, vadenin geldiği tarihten itibaren üç yıl geçmekle',
      wrongPhrase: 'Çekte hamilin cirantalara ve düzenleyene karşı başvuru hakları ibraz süresinin bitiminden itibaren altı ay geçmekle',
      correctPhrase: 'Poliçeyi kabul edene karşı ileri sürülecek poliçeden doğan istemler, vadenin geldiği tarihten itibaren üç yıl geçmekle',
      explanation: '6273 sayılı Kanun değişikliğiyle çekte (TTK m. 814) zamanaşımı süresi hem hamilin başvuru hakları hem de cirantanın rücu hakları bakımından 6 aydan 3 yıla çıkarılmıştır!'
    }
  },
  {
    id: 'rule-ticaret-9',
    branch: 'Ticaret',
    subTopic: 'Acentenin Denkleştirme (Portföy) Tazminatı İstemi Süresi',
    articleRef: 'TTK M. 122',
    trueStatement:
      'Sözleşme ilişkisinin sona ermesinden sonra müvekkil, acentenin bulduğu yeni müşteriler sayesinde önemli menfaatler elde etmeye devam ediyorsa ve hakkaniyet gerektiriyorsa acente uygun bir tazminat isteyebilir; denkleştirme isteminden önceden vazgeçilemez ve denkleştirme istem hakkı sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmelidir.',
    trueHighlight: ['denkleştirme isteminden önceden vazgeçilemez', 'sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmelidir'],
    trueCorrectPhrase: 'acente denkleştirme (portföy) tazminatı hakkından önceden vazgeçemez ve bu istemi sözleşmenin sona ermesinden itibaren 1 yıl içinde ileri sürmek zorundadır',
    baseExplanation: 'TTK m. 122 uyarınca acentenin denkleştirme (portföy) tazminatı isteminden önceden feragat edilemez ve bu hak sözleşmenin sona ermesinden itibaren 1 yıl içinde ileri sürülmelidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmelidir',
      wrongPhrase: 'sözleşme ilişkisinin sona ermesinden itibaren beş yıl içinde ileri sürülmelidir',
      correctPhrase: 'sözleşme ilişkisinin sona ermesinden itibaren bir yıl içinde ileri sürülmelidir',
      explanation: 'TTK m. 122/4 uyarınca acentenin denkleştirme istem hakkının sözleşmenin sona ermesinden itibaren 1 yıl içinde ileri sürülmesi gerekir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'denkleştirme isteminden önceden vazgeçilemez',
      wrongPhrase: 'taraflar acentelik sözleşmesine koyacakları açık bir hükümle denkleştirme istemini başlangıçta bertaraf edebilirler',
      correctPhrase: 'denkleştirme isteminden önceden vazgeçilemez',
      explanation: 'TTK m. 122/4 emredici hükmü uyarınca denkleştirme isteminden sözleşme sona ermeden önce vazgeçilemez!'
    }
  },
  {
    id: 'rule-ticaret-10',
    branch: 'Ticaret',
    subTopic: 'Haksız Rekabet Davalarında Zamanaşımı',
    articleRef: 'TTK M. 60',
    trueStatement:
      'Haksız rekabet sebebiyle açılacak tespit, men, eski hâle iade ve tazminat davaları, davaya hakkı olan tarafın bu hakların doğumunu öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar.',
    trueHighlight: ['öğrendiği günden itibaren bir yıl', 'her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar'],
    trueCorrectPhrase: 'TTK m. 60 uyarınca haksız rekabet davalarında zamanaşımı süresi öğrenmeden itibaren 1 yıl ve her hâlde fiilin (hakkın) doğumundan itibaren 3 yıldır',
    baseExplanation: 'TTK m. 60 uyarınca ticari haksız rekabet davalarında zamanaşımı 1 yıl ve 3 yıldır (TBK m. 72 haksız fiil zamanaşımı olan 2 yıl ve 10 yıldan farklıdır!).',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar',
      wrongPhrase: 'öğrendiği günden itibaren iki yıl ve her hâlde bunların doğumundan itibaren on yıl geçmekle zamanaşımına uğrar',
      correctPhrase: 'öğrendiği günden itibaren bir yıl ve her hâlde bunların doğumundan itibaren üç yıl geçmekle zamanaşımına uğrar',
      explanation: '2 yıl ve 10 yıllık süre genel haksız fiil zamanaşımıdır (TBK m. 72); TTK m. 60 uyarınca ticari haksız rekabet davalarında zamanaşımı 1 yıl ve her hâlde 3 yıldır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Haksız rekabet sebebiyle açılacak tespit, men, eski hâle iade ve tazminat davaları',
      wrongPhrase: 'TTK kapsamında düzenlenen haksız rekabet davaları tarafların tacir olup olmadığına göre genel asliye hukuk mahkemesinde görülür ve bu davalar',
      correctPhrase: 'Haksız rekabet sebebiyle açılacak tespit, men, eski hâle iade ve tazminat davaları',
      explanation: 'TTK m. 4/1-a uyarınca TTK’da düzenlenen haksız rekabet davaları mutlak ticari davadır ve tarafların tacir olup olmadığına bakılmaksızın Asliye Ticaret Mahkemesinde görülür.'
    }
  },
  {
    id: 'rule-iik-10',
    branch: 'İcra',
    subTopic: 'İstihkak Davası Açma Süresi ve Görevli Mahkeme',
    articleRef: 'İİK M. 96-99',
    trueStatement:
      'Borçlu elinde bulunan bir mal haczedilirken üçüncü kişi lehine istihkak iddiasında bulunulursa ve alacaklı veya borçlu üç gün içinde buna itiraz ederse dosya icra mahkemesine gönderilir; icra mahkemesi takibin devamına veya ertelenmesine karar verir ve üçüncü kişi bu kararın tefhim veya tebliğinden itibaren yedi gün içinde icra mahkemesinde istihkak davası açabilir.',
    trueHighlight: ['üç gün içinde buna itiraz ederse', 'tefhim veya tebliğinden itibaren yedi gün içinde icra mahkemesinde istihkak davası açabilir'],
    trueCorrectPhrase: 'hacizli malda istihkak iddiasına itiraz süresi 3 gün, istihkak davası açma süresi ise 7 gündür ve görevli mahkeme İcra Mahkemesidir',
    baseExplanation: 'İİK m. 96-99 uyarınca hacizde istihkak iddiasını bildirme süresi 7 gün, istihkak iddiasına itiraz süresi 3 gün, istihkak davası açma süresi ise 7 gündür ve tüm istihkak davalarında görevli mahkeme İcra Mahkemesidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tefhim veya tebliğinden itibaren yedi gün içinde icra mahkemesinde istihkak davası açabilir',
      wrongPhrase: 'tebliğinden itibaren bir ay içinde genel mahkemede istihkak davası açabilir',
      correctPhrase: 'tefhim veya tebliğinden itibaren yedi gün içinde icra mahkemesinde istihkak davası açabilir',
      explanation: 'Hacizde istihkak davası açma süresi (mal gerek borçlu elinde gerekse üçüncü kişi elinde haczedilmiş olsun) 7 gündür ve görevli mahkeme İcra Mahkemesidir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'icra mahkemesinde istihkak davası açabilir',
      wrongPhrase: 'asliye hukuk mahkemesinde istihkak davası açabilir',
      correctPhrase: 'icra mahkemesinde istihkak davası açabilir',
      explanation: 'Medeni Kanun m. 683’teki mülkiyet hakkına dayalı istihkak davasından farklı olarak, İİK m. 97 ve m. 99 kapsamındaki hacizde istihkak davalarında görevli mahkeme İcra Mahkemesidir.'
    }
  },
  {
    id: 'rule-iik-11',
    branch: 'İcra',
    subTopic: 'İhalenin Feshi Talebi Süresi ve Görevli Mahkeme',
    articleRef: 'İİK M. 134',
    trueStatement:
      'İcra dairesince yapılan ihalenin feshi, yalnız satış isteyen alacaklı, borçlu, mahcuz malın resmi sicilinde kayıtlı olan ilgililer ve sınırlı ayni hak sahipleri ile pey sürmek suretiyle ihaleye iştirak edenler tarafından, ihale tarihinden itibaren yedi gün içinde icra mahkemesinden şikâyet yolu ile istenebilir; ilgililerin ihale yapıldığı ana kadar cereyan eden muamelelerdeki yolsuzluklara en geç ihale günü ıttıla peyda ettiği kabul edilir, ancak kendilerine satış ilanı tebliğ edilmemiş olması gibi bazı hallerde öğrenmeden itibaren yedi gün ve her hâlde ihale tarihinden itibaren bir yıl içinde ihalenin feshi istenebilir.',
    trueHighlight: ['ihale tarihinden itibaren yedi gün içinde icra mahkemesinden şikâyet yolu ile istenebilir', 'öğrenmeden itibaren yedi gün ve her hâlde ihale tarihinden itibaren bir yıl içinde'],
    trueCorrectPhrase: 'ihalenin feshi kural olarak ihale tarihinden itibaren 7 gün (istisnai hallerde öğrenmeden itibaren 7 gün ve her hâlde 1 yıl) içinde İcra Mahkemesinden şikâyet yoluyla istenir',
    baseExplanation: 'İİK m. 134 uyarınca ihalenin feshi dava değil şikâyettir; süresi ihale tarihinden itibaren 7 gün (satış ilanı tebliğ edilmemesi, satılan malın esaslı vasıflarında hataya düşülmesi, ihalede fesat öğrenilmesi hallerinde öğrenmeden itibaren 7 gün ve her hâlde 1 yıl) olup görevli merci İcra Mahkemesidir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'ihale tarihinden itibaren yedi gün içinde icra mahkemesinden şikâyet yolu ile istenebilir',
      wrongPhrase: 'ihale tarihinden itibaren on beş gün içinde asliye hukuk mahkemesinde dava açılmak suretiyle istenebilir',
      correctPhrase: 'ihale tarihinden itibaren yedi gün içinde icra mahkemesinden şikâyet yolu ile istenebilir',
      explanation: 'İhalenin feshi süresi 15 gün değil 7 gündür ve Asliye Hukuk Mahkemesinde değil, İcra Mahkemesinde şikâyet yoluyla incelenir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'her hâlde ihale tarihinden itibaren bir yıl içinde ihalenin feshi istenebilir',
      wrongPhrase: 'her hâlde ihale tarihinden itibaren beş yıl içinde ihalenin feshi istenebilir',
      correctPhrase: 'her hâlde ihale tarihinden itibaren bir yıl içinde ihalenin feshi istenebilir',
      explanation: 'İİK m. 134 uyarınca ihalenin feshinde mutlak üst süre 5 yıl değil, ihale tarihinden itibaren 1 yıldır!'
    }
  },
  {
    id: 'rule-iik-12',
    branch: 'İcra',
    subTopic: 'Sıra Cetveline İtiraz ve Şikâyet Mercii',
    articleRef: 'İİK M. 142',
    trueStatement:
      'Sıra cetvelinin tebliğinden itibaren yedi gün içinde, alacağın esasına ve miktarına veya yalnız sıraya ilişkin itirazlar genel mahkemede dava yoluyla ileri sürülür; buna karşılık icra müdürünün sıra cetvelini düzenlerken takip hukuku kurallarına aykırı hareket ettiği iddiasıyla yalnız sıraya karşı çıkılıyorsa yedi gün içinde icra mahkemesine şikâyet yoluna başvurulur.',
    trueHighlight: ['tebliğinden itibaren yedi gün içinde', 'alacağın esasına ve miktarına veya yalnız sıraya ilişkin itirazlar genel mahkemede dava yoluyla', 'takip hukuku kurallarına aykırı hareket ettiği iddiasıyla yalnız sıraya karşı çıkılıyorsa yedi gün içinde icra mahkemesine şikâyet yoluna başvurulur'],
    trueCorrectPhrase: 'sıra cetveline karşı hem itiraz davası (genel mahkemede) hem de şikâyet (İcra Mahkemesinde) süresi tebliğden itibaren 7 gündür; alacağın esasına ve miktarına itiraz yalnız genel mahkemede dava yoluyla yapılır',
    baseExplanation: 'İİK m. 142 uyarınca sıra cetveline itiraz davası da şikâyet de tebliğden itibaren 7 gün içinde açılır; alacağın esasına/miktarına itiraz genel mahkemede görülür, takip hukukuna aykırılık nedeniyle sıraya karşı çıkma ise İcra Mahkemesine şikâyet edilir.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'alacağın esasına ve miktarına veya yalnız sıraya ilişkin itirazlar genel mahkemede dava yoluyla ileri sürülür',
      wrongPhrase: 'alacağın esasına ve miktarına ilişkin tüm itirazlar yalnız icra mahkemesinde şikâyet yoluyla incelenir',
      correctPhrase: 'alacağın esasına ve miktarına veya yalnız sıraya ilişkin itirazlar genel mahkemede dava yoluyla ileri sürülür',
      explanation: 'Sıra cetvelinde başka bir alacaklının alacağının esasına veya miktarına itiraz ediliyorsa İcra Mahkemesine şikâyet edilemez; genel mahkemede sıra cetveline itiraz davası açılması gerekir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'Sıra cetvelinin tebliğinden itibaren yedi gün içinde',
      wrongPhrase: 'Sıra cetvelinin tebliğinden itibaren bir ay içinde',
      correctPhrase: 'Sıra cetvelinin tebliğinden itibaren yedi gün içinde',
      explanation: 'İİK m. 142 uyarınca sıra cetveline itiraz davası açma süresi de şikâyet süresi de 1 ay değil, tebliğden itibaren 7 gündür!'
    }
  },
  {
    id: 'rule-iik-13',
    branch: 'İcra',
    subTopic: 'Mal Beyanında Bulunma Süresi',
    articleRef: 'İİK M. 74-75',
    trueStatement:
      'Ödeme emrine itiraz etmeyen borçlu yedinci günün sonuna kadar, itiraz eden borçlu ise itirazın kaldırılması veya iptali kararının kendisine tefhim veya tebliğinden itibaren üç gün içinde mal beyanında bulunmak zorundadır.',
    trueHighlight: ['Ödeme emrine itiraz etmeyen borçlu yedinci günün sonuna kadar', 'itirazın kaldırılması veya iptali kararının kendisine tefhim veya tebliğinden itibaren üç gün içinde mal beyanında bulunmak zorundadır'],
    trueCorrectPhrase: 'genel haciz yolunda ödeme emrine itiraz etmeyen borçlu 7 gün içinde, itiraz edip de itirazı kaldırılan/iptal edilen borçlu ise kararın tefhim veya tebliğinden itibaren 3 gün içinde mal beyanında bulunmalıdır',
    baseExplanation: 'İİK m. 75 uyarınca ödeme emrine itiraz edildiğinde mal beyanında bulunma yükümlülüğü durur; itirazın kaldırılması veya iptali üzerine tefhim veya tebliğden itibaren 3 gün içinde mal beyanında bulunulmalıdır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'itirazın kaldırılması veya iptali kararının kendisine tefhim veya tebliğinden itibaren üç gün içinde mal beyanında bulunmak zorundadır',
      wrongPhrase: 'itiraz etmiş olsa dahi ödeme emrinin tebliğinden itibaren yedi gün içinde mal beyanında bulunmak zorundadır',
      correctPhrase: 'itirazın kaldırılması veya iptali kararının kendisine tefhim veya tebliğinden itibaren üç gün içinde mal beyanında bulunmak zorundadır',
      explanation: 'Borçlu ödeme emrine süresinde itiraz ederse mal beyanında bulunmak zorunda değildir; ancak itirazı kaldırılır veya iptal edilirse kararın tefhim veya tebliğinden itibaren 3 gün içinde mal beyanında bulunmalıdır!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kendisine tefhim veya tebliğinden itibaren üç gün içinde',
      wrongPhrase: 'kesinleşmesinden itibaren on gün içinde',
      correctPhrase: 'kendisine tefhim veya tebliğinden itibaren üç gün içinde',
      explanation: 'İİK m. 75 uyarınca itirazın kaldırılması veya iptali halinde mal beyanı süresi kararın tefhim veya tebliğinden itibaren 10 gün değil, 3 gündür!'
    }
  },
  {
    id: 'rule-hmk-15',
    branch: 'HMK',
    subTopic: 'Senetle İspat Zorunluluğu ve İstisnaları',
    articleRef: 'M. 200 & 203',
    trueStatement:
      'Bir hakkın doğumu, düşürülmesi, devri, değiştirilmesi, yenilenmesi, ertelenmesi, ikrarı ve itfası amacıyla yapılan hukuki işlemlerin, yapıldıkları zamanki miktar veya değerleri kanunda öngörülen parasal sınırı geçtiği takdirde senetle ispat olunması gerekir; ancak altsoy ve üstsoy, kardeşler, eşler, kayınbaba, kaynana ile gelin ve damat arasındaki işlemler ile yangın, deniz kazası, deprem gibi senet alınmasında imkânsızlık bulunan hâllerde tanık dinlenebilir.',
    trueHighlight: ['yapıldıkları zamanki miktar veya değerleri kanunda öngörülen parasal sınırı geçtiği takdirde senetle ispat olunması gerekir', 'altsoy ve üstsoy, kardeşler, eşler, kayınbaba, kaynana ile gelin ve damat arasındaki işlemler'],
    trueCorrectPhrase: 'senetle ispat sınırında işlemin dava tarihindeki değil yapıldığı zamanki değeri esas alınır; yakın akrabalar (altsoy-üstsoy, kardeşler, eşler, kayınbaba-kaynana ile gelin-damat) arasındaki işlemlerde miktar ne olursa olsun tanık dinlenebilir',
    baseExplanation: 'HMK m. 200 ve m. 203 uyarınca senetle ispat sınırında hukuki işlemin yapıldığı tarihteki değeri esas alınır; m. 203’te sayılan yakın hısımlar arasındaki işlemlerde, senedin kaybolmasında ve irade bozukluğu/aşırı yararlanma iddialarında miktar ne olursa olsun tanık dinlenebilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'yapıldıkları zamanki miktar veya değerleri kanunda öngörülen parasal sınırı geçtiği takdirde senetle ispat olunması gerekir',
      wrongPhrase: 'davanın açıldığı tarihteki güncel miktar veya değerleri kanunda öngörülen parasal sınırı geçtiği takdirde senetle ispat olunması gerekir ve kısmi dava açılarak bu sınır aşılabilir',
      correctPhrase: 'yapıldıkları zamanki miktar veya değerleri kanunda öngörülen parasal sınırı geçtiği takdirde senetle ispat olunması gerekir',
      explanation: 'HMK m. 200 uyarınca senetle ispat sınırında işlemin dava tarihindeki değil, yapıldığı zamanki değeri esas alınır ve alacağın bir kısmının dava edilmesi senetle ispat zorunluluğunu ortadan kaldırmaz!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'altsoy ve üstsoy, kardeşler, eşler, kayınbaba, kaynana ile gelin ve damat arasındaki işlemler',
      wrongPhrase: 'amca, dayı, hala, teyze ve kuzenler arasındaki tüm hukuki işlemler',
      correctPhrase: 'altsoy ve üstsoy, kardeşler, eşler, kayınbaba, kaynana ile gelin ve damat arasındaki işlemler',
      explanation: 'HMK m. 203/1-a’da sayılan manevi imkânsızlık (yakın hısımlık) halleri sınırlı sayıdadır; amca, dayı, hala, teyze ve yeğen/kuzenler arasındaki işlemlerde senetle ispat istisnası uygulanmaz!'
    }
  },
  {
    id: 'rule-hmk-16',
    branch: 'HMK',
    subTopic: 'Yemin Teklifi ve Yeminin Konusu',
    articleRef: 'M. 225-226',
    trueStatement:
      'Yeminin konusunu, davanın çözümü bakımından önem taşıyan, çekişmeli olan ve kişinin kendisinden kaynaklanan vakıalar oluşturur; tarafların üzerinde serbestçe tasarruf edemeyeceği vakıalar, bir işlemin geçerliliği için kanunen iki tarafın irade açıklamalarının yeterli görülmediği hâller ve yemin edecek kimsenin namus ve onurunu etkileyecek veya onu ceza soruşturması ya da kovuşturması ile karşı karşıya bırakacak vakıalar hakkında yemin teklif edilemez.',
    trueHighlight: ['kişinin kendisinden kaynaklanan vakıalar oluşturur', 'tarafların üzerinde serbestçe tasarruf edemeyeceği vakıalar', 'ceza soruşturması ya da kovuşturması ile karşı karşıya bırakacak vakıalar hakkında yemin teklif edilemez'],
    trueCorrectPhrase: 'yemin yalnızca kişinin kendisinden kaynaklanan çekişmeli vakıalar hakkında teklif edilebilir; re’sen araştırma ilkesine tabi davalarda, geçerlilik şekline tabi işlemlerde ve ceza soruşturmasına yol açacak vakıalarda yemin teklif edilemez',
    baseExplanation: 'HMK m. 225-226 uyarınca yemin kişinin kendisinden kaynaklanan vakıalar üzerinde teklif edilir; hâkim re’sen yemin teklif edemez (6100 s. HMK ile tamamlayıcı yemin kaldırılmıştır!).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Yeminin konusunu, davanın çözümü bakımından önem taşıyan, çekişmeli olan ve kişinin kendisinden kaynaklanan vakıalar oluşturur',
      wrongPhrase: 'İspat yükü kendisine düşen taraf delillerini tam olarak ispatlayamazsa hâkim kanaatini güçlendirmek amacıyla re’sen tamamlayıcı yemin teklif edebilir',
      correctPhrase: 'Yeminin konusunu, davanın çözümü bakımından önem taşıyan, çekişmeli olan ve kişinin kendisinden kaynaklanan vakıalar oluşturur',
      explanation: '6100 sayılı HMK ile hâkimin re’sen (kendiliğinden) yemin teklif etmesi (tamamlayıcı yemin) kurumu tamamen kaldırılmıştır; yemin yalnızca taraflarca teklif edilebilir!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'tarafların üzerinde serbestçe tasarruf edemeyeceği vakıalar, bir işlemin geçerliliği için kanunen iki tarafın irade açıklamalarının yeterli görülmediği hâller ve yemin edecek kimsenin namus ve onurunu etkileyecek veya onu ceza soruşturması ya da kovuşturması ile karşı karşıya bırakacak vakıalar hakkında yemin teklif edilemez',
      wrongPhrase: 'boşanma ve soybağı davalarında da taraflar birbirlerine yemin teklif edebilirler',
      correctPhrase: 'tarafların üzerinde serbestçe tasarruf edemeyeceği vakıalar, bir işlemin geçerliliği için kanunen iki tarafın irade açıklamalarının yeterli görülmediği hâller ve yemin edecek kimsenin namus ve onurunu etkileyecek veya onu ceza soruşturması ya da kovuşturması ile karşı karşıya bırakacak vakıalar hakkında yemin teklif edilemez',
      explanation: 'Boşanma (TMK m. 184) ve soybağı davaları gibi tarafların üzerinde serbestçe tasarruf edemeyeceği davalarda yemin teklif edilemez!'
    }
  },
  {
    id: 'rule-hmk-17',
    branch: 'HMK',
    subTopic: 'Hâkimin Reddi Talebi Süresi ve İnceleme',
    articleRef: 'M. 38-42',
    trueStatement:
      'Hâkimin reddi sebebi biliniyorsa en geç ilk duruşmada, sonradan öğrenilmiş ise en geç öğrenildikten sonraki ilk duruşmada yeni bir işlem yapılmadan önce ileri sürülmelidir; hâkimin reddi talebine ilişkin kararlara karşı, esas hüküm bakımından istinaf yolu kapalı olan davalarda karar kesin olup, istinaf yolu açık olan davalarda ise tebliğ tarihinden itibaren iki hafta içinde istinaf yoluna başvurulabilir.',
    trueHighlight: ['en geç ilk duruşmada', 'sonradan öğrenilmiş ise en geç öğrenildikten sonraki ilk duruşmada yeni bir işlem yapılmadan önce', 'tebliğ tarihinden itibaren iki hafta içinde istinaf yoluna başvurulabilir'],
    trueCorrectPhrase: 'hâkimin reddi talebi en geç ilk duruşmada (sonradan öğrenilmişse öğrenildikten sonraki ilk duruşmada) ileri sürülmelidir; esas hüküm bakımından istinaf yolu açıksa ret kararına karşı 2 hafta içinde istinaf yoluna gidilebilir',
    baseExplanation: 'HMK m. 38 ve m. 42 (7499 s.K. değişikliği) uyarınca hâkimin reddi talebine ilişkin mercice verilen kararlara karşı istinaf süresi 1 haftadan 2 haftaya çıkarılmıştır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'tebliğ tarihinden itibaren iki hafta içinde istinaf yoluna başvurulabilir',
      wrongPhrase: 'tefhim tarihinden itibaren bir hafta içinde istinaf yoluna başvurulabilir',
      correctPhrase: 'tebliğ tarihinden itibaren iki hafta içinde istinaf yoluna başvurulabilir',
      explanation: '7499 sayılı Kanun (2024) ile HMK m. 42 ve m. 43’te yer alan hâkimin reddi kararlarına karşı istinaf başvuru süresi 1 haftadan tebliğden itibaren 2 haftaya çıkarılmıştır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Hâkimin reddi sebebi biliniyorsa en geç ilk duruşmada, sonradan öğrenilmiş ise en geç öğrenildikten sonraki ilk duruşmada yeni bir işlem yapılmadan önce ileri sürülmelidir',
      wrongPhrase: 'Hâkimin çekinmesini gerektiren (mutlak ret) sebepler dışında kalan nispi ret sebepleri de hüküm kesinleşinceye kadar her aşamada ileri sürülebilir',
      correctPhrase: 'Hâkimin reddi sebebi biliniyorsa en geç ilk duruşmada, sonradan öğrenilmiş ise en geç öğrenildikten sonraki ilk duruşmada yeni bir işlem yapılmadan önce ileri sürülmelidir',
      explanation: 'HMK m. 36 kapsamındaki nispi ret sebepleri en geç ilk duruşmada (veya öğrenildikten sonraki ilk duruşmada) ileri sürülmelidir; yalnız HMK m. 34’teki yasaklılık (çekinme) sebepleri yargılamanın her aşamasında ileri sürülebilir.'
    }
  },
  {
    id: 'rule-cmk-16',
    branch: 'CMK',
    subTopic: 'Şüpheli veya Sanığın Zorla Getirilmesi ve Yakalama Emri',
    articleRef: 'M. 146',
    trueStatement:
      'Hakkında tutuklama kararı verilmesi veya yakalama emri düzenlenmesi için yeterli nedenler bulunan veya çağrıldığı hâlde gelmeyen şüpheli veya sanığın zorla getirilmesine karar verilebilir; zorla getirme kararı ile çağrılan şüpheli veya sanık derhâl, olanak bulunmadığında yol süresi hariç en geç yirmidört saat içinde çağıran hâkimin, mahkemenin veya Cumhuriyet savcısının önüne götürülür ve sorguya çekilir veya ifadesi alınır.',
    trueHighlight: ['tutuklama kararı verilmesi veya yakalama emri düzenlenmesi için yeterli nedenler bulunan veya çağrıldığı hâlde gelmeyen', 'yol süresi hariç en geç yirmidört saat içinde'],
    trueCorrectPhrase: 'CMK m. 146 uyarınca zorla getirme kararında şüpheli/sanık derhâl, olanak yoksa yol süresi hariç en geç 24 saat içinde ilgili merci önüne çıkarılır',
    baseExplanation: 'CMK m. 146 uyarınca zorla getirme kararını hâkim, mahkeme veya Cumhuriyet savcısı verebilir; yol süresi hariç en geç 24 saat içinde şüpheli/sanık ilgili merci önüne çıkarılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'yol süresi hariç en geç yirmidört saat içinde çağıran hâkimin, mahkemenin veya Cumhuriyet savcısının önüne götürülür',
      wrongPhrase: 'yol süresi dahil en geç kırk sekiz saat içinde çağıran merciin önüne götürülür',
      correctPhrase: 'yol süresi hariç en geç yirmidört saat içinde çağıran hâkimin, mahkemenin veya Cumhuriyet savcısının önüne götürülür',
      explanation: 'CMK m. 146/4 uyarınca zorla getirmede azami süre yol süresi hariç 24 saattir.'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'çağıran hâkimin, mahkemenin veya Cumhuriyet savcısının önüne götürülür',
      wrongPhrase: 'zorla getirme kararı yalnızca sulh ceza hâkimi tarafından verilebilir, Cumhuriyet savcısı zorla getirme kararı veremez; şüpheli yalnız hâkim önüne götürülür',
      correctPhrase: 'çağıran hâkimin, mahkemenin veya Cumhuriyet savcısının önüne götürülür',
      explanation: 'CMK m. 146 uyarınca soruşturma evresinde Cumhuriyet savcısı da doğrudan zorla getirme kararı verebilir!'
    }
  },
  {
    id: 'rule-cmk-17',
    branch: 'CMK',
    subTopic: 'Tanıklıktan Çekinme Hakkı ve Yemin Verilmeyen Tanıklar',
    articleRef: 'M. 45 & 50',
    trueStatement:
      'Şüpheli veya sanığın nişanlısı, evlilik bağı kalmasa bile eşi, kan hısımlığından veya kayın hısımlığından üstsoy veya altsoyu, üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları ile evlatlık bağı bulunanlar tanıklıktan çekinebilirler; dinlenme sırasında onbeş yaşını doldurmamış olanlar ile ayırt etme gücüne sahip olmamaları nedeniyle yeminin niteliğini ve önemini kavrayamayanlar yeminsiz dinlenir.',
    trueHighlight: ['üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları', 'dinlenme sırasında onbeş yaşını doldurmamış olanlar', 'yeminsiz dinlenir'],
    trueCorrectPhrase: '3. derece dahil kan ve 2. derece dahil kayın hısımları tanıklıktan çekinebilir; dinlenme sırasında 15 yaşını doldurmamış olan tanıklar yeminsiz dinlenir',
    baseExplanation: 'CMK m. 45 ve m. 50 uyarınca 3. derece dahil kan hısımları (amca, hala, dayı, teyze, yeğen) ve 2. derece dahil kayın hısımları (kayınbirader, baldız, görümce) tanıklıktan çekinebilir; 15 yaşını doldurmamış çocuklar yeminsiz dinlenir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'dinlenme sırasında onbeş yaşını doldurmamış olanlar',
      wrongPhrase: 'suçun işlendiği sırada onsekiz yaşını doldurmamış olanlar',
      correctPhrase: 'dinlenme sırasında onbeş yaşını doldurmamış olanlar',
      explanation: 'CMK m. 50/1-a uyarınca yeminsiz dinlenmede yaş sınırı 18 değil 15’tir ve suçun işlendiği sıradaki yaşa değil, tanığın dinlenme sırasındaki yaşına bakılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları',
      wrongPhrase: 'dördüncü derece dahil kan (kuzenler) veya üçüncü derece dahil kayın hısımları',
      correctPhrase: 'üçüncü derece dahil kan veya ikinci derece dahil kayın hısımları',
      explanation: 'CMK m. 45 uyarınca tanıklıktan çekinme hakkı kan hısımlığında 3. dereceye (amca, dayı, hala, teyze, yeğen), kayın hısımlığında ise 2. dereceye kadardır; 4. derece kan hısımlarının (kuzenlerin) tanıklıktan çekinme hakkı yoktur!'
    }
  },
  {
    id: 'rule-cmk-18',
    branch: 'CMK',
    subTopic: 'Uzlaştırma Kapsamı ve Uzlaştırma Süresi',
    articleRef: 'M. 253',
    trueStatement:
      'Soruşturulması ve kovuşturulması şikâyete bağlı suçlar ile kanunda sayılan katalog suçlarda uzlaştırma yoluna gidilir; ancak cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda şikâyete bağlı olsa bile uzlaştırma yoluna gidilemez; uzlaştırmacı, dosya içindeki belgelerin birer örneği kendisine verildikten itibaren otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve bu süre her defasında yirmi günü geçmemek üzere en çok iki kez daha uzatılabilir.',
    trueHighlight: ['cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda şikâyete bağlı olsa bile uzlaştırma yoluna gidilemez', 'otuz gün içinde uzlaştırma işlemlerini sonuçlandırır', 'her defasında yirmi günü geçmemek üzere en çok iki kez daha uzatılabilir'],
    trueCorrectPhrase: 'şikâyete bağlı olsa bile cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma uygulanamaz; uzlaştırma süresi 30 gün + en çok 2 kez 20’şer gün uzatmadır (toplam en çok 70 gün)',
    baseExplanation: 'CMK m. 253 uyarınca cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip (TCK m. 123/A) suçunda uzlaştırma yapılamaz; uzlaştırma süresi 30 gün + 20 gün + 20 gün (toplam azami 70 gün) olarak uygulanır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve bu süre her defasında yirmi günü geçmemek üzere en çok iki kez daha uzatılabilir',
      wrongPhrase: 'altmış gün içinde uzlaştırma işlemlerini sonuçlandırır ve bu süre bir defaya mahsus otuz gün daha uzatılabilir',
      correctPhrase: 'otuz gün içinde uzlaştırma işlemlerini sonuçlandırır ve bu süre her defasında yirmi günü geçmemek üzere en çok iki kez daha uzatılabilir',
      explanation: 'CMK m. 253/12 uyarınca uzlaştırma süresi 30 gündür; Cumhuriyet savcısı bu süreyi her defasında 20 günü geçmemek üzere en çok iki kez daha uzatabilir (30 + 20 + 20 = 70 gün).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ancak cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda şikâyete bağlı olsa bile uzlaştırma yoluna gidilemez',
      wrongPhrase: 'soruşturulması ve kovuşturulması şikâyete bağlı olan cinsel saldırı, cinsel taciz ve ısrarlı takip suçlarında da uzlaştırma yoluna gidilir',
      correctPhrase: 'ancak cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda şikâyete bağlı olsa bile uzlaştırma yoluna gidilemez',
      explanation: 'CMK m. 253/3 uyarınca soruşturulması ve kovuşturulması şikâyete bağlı olsa bile cinsel dokunulmazlığa karşı suçlarda ve ısrarlı takip suçunda (TCK m. 123/A) uzlaştırma yoluna kesinlikle gidilemez!'
    }
  },
  {
    id: 'rule-tck-13',
    branch: 'TCK',
    subTopic: 'Hata (Suçun Maddi Unsurlarında ve Haksızlık Yanılgısı)',
    articleRef: 'M. 30',
    trueStatement:
      'Fiilin icrası sırasında suçun kanuni tanımındaki maddi unsurları bilmeyen bir kimse, kasten hareket etmiş olmaz ve bu hatası nedeniyle taksirli sorumluluk hâli saklı kalmak üzere cezalandırılmaz; işlediği fiilin haksızlık oluşturduğu hususunda kaçınılmaz bir hataya düşen kişi ise cezalandırılmaz (kusurluluğu ortadan kalkar).',
    trueHighlight: ['suçun kanuni tanımındaki maddi unsurları bilmeyen bir kimse, kasten hareket etmiş olmaz', 'haksızlık oluşturduğu hususunda kaçınılmaz bir hataya düşen kişi ise cezalandırılmaz'],
    trueCorrectPhrase: 'suçun maddi unsurlarında hata kastı kaldırır (taksirli sorumluluk saklıdır); kaçınılmaz haksızlık yanılgısı ise kastı değil kusurluluğu kaldırır',
    baseExplanation: 'TCK m. 30/1 uyarınca maddi unsurlarda hata kastı ortadan kaldırır; TCK m. 30/4 uyarınca işlediği fiilin haksızlık oluşturduğu hususunda kaçınılmaz hataya düşme (haksızlık yanılgısı) ise kusurluluğu ortadan kaldırır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kasten hareket etmiş olmaz ve bu hatası nedeniyle taksirli sorumluluk hâli saklı kalmak üzere cezalandırılmaz',
      wrongPhrase: 'yine de kasten hareket etmiş sayılır ve yalnızca verilecek cezasında üçte bir oranında indirim yapılır',
      correctPhrase: 'kasten hareket etmiş olmaz ve bu hatası nedeniyle taksirli sorumluluk hâli saklı kalmak üzere cezalandırılmaz',
      explanation: 'TCK m. 30/1 uyarınca suçun maddi unsurlarında hata kastı tamamen ortadan kaldırır; fail ancak hatası taksirine dayanıyorsa ve suçun taksirli şekli kanunda cezalandırılıyorsa taksirden sorumlu tutulabilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'işlediği fiilin haksızlık oluşturduğu hususunda kaçınılmaz bir hataya düşen kişi ise cezalandırılmaz',
      wrongPhrase: 'kanunu bilmemek mazeret sayılmadığından kişi kaçınılmaz bir haksızlık yanılgısına düşmüş olsa dahi tam ceza ile cezalandırılır',
      correctPhrase: 'işlediği fiilin haksızlık oluşturduğu hususunda kaçınılmaz bir hataya düşen kişi ise cezalandırılmaz',
      explanation: '5237 sayılı TCK m. 30/4 ile mutlak "kanunu bilmemek mazeret sayılmaz" kuralı yumuşatılmış ve işlediği fiilin haksızlık oluşturduğu hususunda kaçınılmaz bir hataya düşen kişinin cezalandırılmayacağı (kusurluluğu kaldıran neden) kabul edilmiştir.'
    }
  },
  {
    id: 'rule-tck-14',
    branch: 'TCK',
    subTopic: 'Müsadere (Eşya ve Kazanç Müsaderesi Zamanaşımı)',
    articleRef: 'M. 54-55 & 70',
    trueStatement:
      'İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan veya suçun işlenmesine tahsis edilen eşyanın müsaderesine hükmolunur; müsadereye ilişkin hüküm, kesinleşmeden itibaren yirmi yıl geçtikten sonra infaz edilmez.',
    trueHighlight: ['İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan', 'kesinleşmeden itibaren yirmi yıl geçtikten sonra infaz edilmez'],
    trueCorrectPhrase: 'eşya müsaderesi yalnızca kasıtlı suçlarda uygulanır (üretim/bulundurulması suç olan eşya hariç) ve müsadere zamanaşımı hükmün kesinleşmesinden itibaren 20 yıldır',
    baseExplanation: 'TCK m. 54 ve m. 70 uyarınca eşya müsaderesi bir güvenlik tedbiridir (ceza değildir), kasıtlı suçlarda uygulanır ve müsadereye ilişkin hüküm kesinleşmeden itibaren 20 yıl geçtikten sonra infaz edilmez.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kesinleşmeden itibaren yirmi yıl geçtikten sonra infaz edilmez',
      wrongPhrase: 'kesinleşmeden itibaren on yıl geçtikten sonra infaz edilmez',
      correctPhrase: 'kesinleşmeden itibaren yirmi yıl geçtikten sonra infaz edilmez',
      explanation: 'TCK m. 70 uyarınca müsadereye ilişkin hükümlerin infaz zamanaşımı süresi 10 yıl değil, kesinleşmeden itibaren 20 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan',
      wrongPhrase: 'Taksirle işlenen suçlarda kullanılan veya iyiniyetli üçüncü kişilere ait olan her türlü',
      correctPhrase: 'İyiniyetli üçüncü kişilere ait olmamak koşuluyla, kasıtlı bir suçun işlenmesinde kullanılan',
      explanation: 'TCK m. 54/1 uyarınca eşya müsaderesi için suçun kasıtlı olması ve eşyanın iyiniyetli üçüncü kişiye ait olmaması şarttır (taksirli suçlarda kullanılan eşya müsadere edilemez!).'
    }
  },
  {
    id: 'rule-tck-15',
    branch: 'TCK',
    subTopic: 'Akıl Hastalığı ve Güvenlik Tedbiri',
    articleRef: 'M. 32 & 57',
    trueStatement:
      'Akıl hastalığı nedeniyle, işlediği fiilin hukuki anlam ve sonuçlarını algılayamayan veya bu fiille ilgili olarak davranışlarını yönlendirme yeteneği önemli derecede azalmış olan kişiye ceza verilmez; ancak bu kişiler hakkında koruma ve tedavi amaçlı olarak güvenlik tedbirine hükmedilir.',
    trueHighlight: ['algılayamayan veya bu fiille ilgili olarak davranışlarını yönlendirme yeteneği önemli derecede azalmış olan kişiye ceza verilmez', 'güvenlik tedbirine hükmedilir'],
    trueCorrectPhrase: 'tam akıl hastalarına ceza verilmez, haklarında yalnız akıl hastalarına özgü güvenlik tedbirine hükmolunur; kısmi akıl hastalarına ise indirimli ceza verilir ve bu ceza güvenlik tedbiri olarak da infaz edilebilir',
    baseExplanation: 'TCK m. 32 uyarınca tam akıl hastalığı kusurluluğu tamamen kaldırır (ceza verilmez, güvenlik tedbiri uygulanır); yönlendirme yeteneği önemli derecede değil de kısmen azalmışsa (m. 32/2) indirimli ceza verilir.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kişiye ceza verilmez; ancak bu kişiler hakkında koruma ve tedavi amaçlı olarak güvenlik tedbirine hükmedilir',
      wrongPhrase: 'kişi hakkında beraat kararı verilir ve hiçbir güvenlik tedbirine hükmedilemez',
      correctPhrase: 'kişiye ceza verilmez; ancak bu kişiler hakkında koruma ve tedavi amaçlı olarak güvenlik tedbirine hükmedilir',
      explanation: 'Tam akıl hastaları hakkında beraat kararı değil, "ceza verilmesine yer olmadığı" ve "akıl hastalarına özgü güvenlik tedbiri uygulanması" kararı verilir (CMK m. 223/3-a).'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'davranışlarını yönlendirme yeteneği önemli derecede azalmış olan kişiye ceza verilmez',
      wrongPhrase: 'davranışlarını yönlendirme yeteneği önemli derecede olmamakla birlikte azalmış olan kişiye de hiçbir ceza verilmez',
      correctPhrase: 'davranışlarını yönlendirme yeteneği önemli derecede azalmış olan kişiye ceza verilmez',
      explanation: 'TCK m. 32/2 uyarınca davranışlarını yönlendirme yeteneği önemli derecede olmamakla birlikte azalmış olan kişiye ceza verilir (ancak cezasında indirim yapılır).'
    }
  },
  {
    id: 'rule-iyuk-13',
    branch: 'İYUK',
    subTopic: 'Kamu Görevlilerine İlişkin İdari Davalarda Yetki',
    articleRef: 'M. 33',
    trueStatement:
      'Kamu görevlilerinin atanması ve nakilleri ile ilgili davalarda yetkili mahkeme, kamu görevlilerinin yeni veya eski görev yeri idare mahkemesidir; görevlerine son verilmesi, emekli edilmeleri veya görevden uzaklaştırılmaları ile ilgili davalarda yetkili mahkeme, kamu görevlisinin son görev yaptığı yer idare mahkemesidir; görevle ilişkisinin kesilmesi sonucunu doğurmayan disiplin cezaları ile ilerleme, yükselme ve özlük haklarına ilişkin davalarda ise ilgilinin görevli bulunduğu yer idare mahkemesi yetkilidir.',
    trueHighlight: ['atanması ve nakilleri ile ilgili davalarda yetkili mahkeme, kamu görevlilerinin yeni veya eski görev yeri idare mahkemesidir', 'görevlerine son verilmesi, emekli edilmeleri veya görevden uzaklaştırılmaları ile ilgili davalarda yetkili mahkeme, kamu görevlisinin son görev yaptığı yer idare mahkemesidir'],
    trueCorrectPhrase: 'İYUK m. 33 uyarınca atama ve nakil davalarında eski veya yeni görev yeri; göreve son verme, emeklilik ve görevden uzaklaştırma davalarında son görev yeri; diğer disiplin ve özlük davalarında ise mevcut görev yeri idare mahkemesi yetkilidir',
    baseExplanation: 'İYUK m. 33 kamu görevlilerine ilişkin özel yetki kurallarını 3 grupta düzenler: 1) Atama/nakil -> eski veya yeni görev yeri, 2) Göreve son/emeklilik/görevden uzaklaştırma -> son görev yeri, 3) Diğer disiplin/özlük -> görevli bulunduğu yer.',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Kamu görevlilerinin atanması ve nakilleri ile ilgili davalarda yetkili mahkeme, kamu görevlilerinin yeni veya eski görev yeri idare mahkemesidir',
      wrongPhrase: 'Kamu görevlilerinin naklen atanmaları ile ilgili davalarda yetkili mahkeme yalnızca atama işlemini yapan bakanlığın bulunduğu Ankara İdare Mahkemesidir',
      correctPhrase: 'Kamu görevlilerinin atanması ve nakilleri ile ilgili davalarda yetkili mahkeme, kamu görevlilerinin yeni veya eski görev yeri idare mahkemesidir',
      explanation: 'İYUK m. 33/1 uyarınca kamu görevlilerinin atanması ve nakilleri ile ilgili davalarda yetkili mahkeme Ankara İdare Mahkemesi değil, kamu görevlisinin eski veya yeni görev yeri idare mahkemesidir!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'görevlerine son verilmesi, emekli edilmeleri veya görevden uzaklaştırılmaları ile ilgili davalarda yetkili mahkeme, kamu görevlisinin son görev yaptığı yer idare mahkemesidir',
      wrongPhrase: 'kamu görevlilerinin emekli edilmeleri veya görevlerine son verilmesi ile ilgili davalarda yetkili mahkeme davacının yerleşim yeri (ikametgâhı) idare mahkemesidir',
      correctPhrase: 'görevlerine son verilmesi, emekli edilmeleri veya görevden uzaklaştırılmaları ile ilgili davalarda yetkili mahkeme, kamu görevlisinin son görev yaptığı yer idare mahkemesidir',
      explanation: 'İYUK m. 33/2 uyarınca göreve son verme, emeklilik ve görevden uzaklaştırma davalarında yetkili mahkeme davacının ikametgâhı değil, son görev yaptığı yer idare mahkemesidir!'
    }
  },
  {
    id: 'rule-iyuk-14',
    branch: 'İYUK',
    subTopic: 'Duruşma Yapılması ve Duruşma Sınırı',
    articleRef: 'M. 17',
    trueStatement:
      'İdari yargıda genel kural yazılı yargılama usulü olup inceleme evrak üzerinde yapılır; ancak Danıştay ile idare ve vergi mahkemelerinde açılan iptal ve kanunda öngörülen parasal sınırı aşan tam yargı davaları ile tarh edilen vergi, resim ve harçlarla benzeri mali yükümler ve bunların zam ve cezaları toplamı parasal sınırı aşan vergi davalarında, taraflardan birinin isteği üzerine duruşma yapılması zorunludur; temyiz ve istinaflarda ise duruşma yapılması dairesinin veya kurulun kararına bağlıdır.',
    trueHighlight: ['iptal ve kanunda öngörülen parasal sınırı aşan tam yargı davaları', 'taraflardan birinin isteği üzerine duruşma yapılması zorunludur', 'temyiz ve istinaflarda ise duruşma yapılması dairesinin veya kurulun kararına bağlıdır'],
    trueCorrectPhrase: 'idari yargıda ilk derecede iptal davalarında (parasal sınır aranmaksızın) ve sınırı aşan tam yargı/vergi davalarında taraflardan biri isterse duruşma yapılması zorunludur; istinaf ve temyizde ise taraf istese dahi mahkemenin takdirine bağlıdır',
    baseExplanation: 'İYUK m. 17 uyarınca ilk derece iptal davalarında miktar/değer sınırı olmaksızın taraflardan biri duruşma isterse mahkeme duruşma yapmak zorundadır; istinaf ve temyiz aşamasında ise duruşma yapılması mahkemenin takdirindedir (ayrıca mahkeme her zaman re’sen duruşma yapabilir).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'temyiz ve istinaflarda ise duruşma yapılması dairesinin veya kurulun kararına bağlıdır',
      wrongPhrase: 'istinaf ve temyiz incelemelerinde de taraflardan birinin duruşma talep etmesi hâlinde bölge idare mahkemesi veya Danıştay duruşma yapmak zorundadır',
      correctPhrase: 'temyiz ve istinaflarda ise duruşma yapılması dairesinin veya kurulun kararına bağlıdır',
      explanation: 'İYUK m. 17/2 uyarınca ilk derece yargılamasından farklı olarak, istinaf ve temyiz aşamalarında taraflardan biri duruşma istese bile duruşma yapılması zorunlu değildir; ilgili daire veya kurulun takdirine bağlıdır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'açılan iptal ve kanunda öngörülen parasal sınırı aşan tam yargı davaları',
      wrongPhrase: 'yalnızca kanunda öngörülen parasal sınırı aşan iptal davaları',
      correctPhrase: 'açılan iptal ve kanunda öngörülen parasal sınırı aşan tam yargı davaları',
      explanation: 'İYUK m. 17/1’deki parasal sınır yalnız tam yargı ve vergi davaları için geçerlidir; iptal davalarında herhangi bir parasal sınır aranmaksızın taraflardan birinin talebi üzerine ilk derecede duruşma yapılması zorunludur!'
    }
  },
  {
    id: 'rule-idare-11',
    branch: 'İdare',
    subTopic: 'Memurluktan Çekilmiş Sayılma (Müstafi) ve Yeniden Atanma Bekleme Süreleri',
    articleRef: '657 s.K. M. 94 & 97',
    trueStatement:
      'Mezuniyetsiz veya kurumlarınca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın memur çekilmiş (müstafi) sayılır; usulüne uygun olarak memurluktan çekilenler altı ay, yerine atanan kimsenin gelmesini beklemeden çekilenler ve kesintisiz on gün görevi terk ederek çekilmiş sayılanlar bir yıl, devir ve teslim yükümlülüğüne uymadan çekilenler üç yıl geçmeden, olağanüstü hâl döneminde usulüne uymadan çekilenler ise hiçbir surette yeniden Devlet memurluğuna alınamazlar.',
    trueHighlight: ['kesintisiz on gün devam etmesi hâlinde', 'usulüne uygun olarak memurluktan çekilenler altı ay', 'çekilmiş sayılanlar bir yıl', 'devir ve teslim yükümlülüğüne uymadan çekilenler üç yıl geçmeden'],
    trueCorrectPhrase: 'kesintisiz 10 gün göreve gelmeyen memur müstafi sayılır; yeniden memurluğa dönüş bekleme süreleri: usulüne uygun çekilenlerde 6 ay, usulsüz çekilen/müstafi sayılanlarda 1 yıl, devir-teslim yapmadan çekilenlerde 3 yıl, OHAL’de izinsiz çekilenlerde ise süresiz yasaktır',
    baseExplanation: '657 sayılı DMK m. 94 ve m. 97 uyarınca 10 gün kesintisiz göreve gelmeme müstafi sayılma sebebidir (1 yılda toplam 20 gün göreve gelmeme ise Devlet memurluğundan çıkarma cezası sebebidir!); bekleme süreleri 6 ay - 1 yıl - 3 yıl - süresizdir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'usulüne uygun olarak memurluktan çekilenler altı ay, yerine atanan kimsenin gelmesini beklemeden çekilenler ve kesintisiz on gün görevi terk ederek çekilmiş sayılanlar bir yıl, devir ve teslim yükümlülüğüne uymadan çekilenler üç yıl geçmeden',
      wrongPhrase: 'usulüne uygun olarak memurluktan çekilenler bir yıl, çekilmiş sayılanlar iki yıl, devir ve teslim yükümlülüğüne uymadan çekilenler beş yıl geçmeden',
      correctPhrase: 'usulüne uygun olarak memurluktan çekilenler altı ay, yerine atanan kimsenin gelmesini beklemeden çekilenler ve kesintisiz on gün görevi terk ederek çekilmiş sayılanlar bir yıl, devir ve teslim yükümlülüğüne uymadan çekilenler üç yıl geçmeden',
      explanation: '657 s.K. m. 97 bekleme süreleri 6 ay (usulüne uygun istifa) - 1 yıl (usulsüz istifa / 10 gün gelmeyerek müstafi sayılma) - 3 yıl (devir teslim yapmama) olarak düzenlenmiştir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın memur çekilmiş (müstafi) sayılır',
      wrongPhrase: 'bu terkin kesintisiz yirmi gün devam etmesi hâlinde memur çekilmiş (müstafi) sayılır',
      correctPhrase: 'bu terkin kesintisiz on gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın memur çekilmiş (müstafi) sayılır',
      explanation: 'Kesintisiz 10 gün göreve gelmeyen memur çekilmiş (müstafi) sayılır; bir yılda toplam 20 gün göreve gelmeyen memura ise Devlet memurluğundan çıkarma cezası verilir (657 s.K. m. 125/E-d)!'
    }
  },
  {
    id: 'rule-idare-12',
    branch: 'İdare',
    subTopic: 'Belediye Başkanının Görevden Uzaklaştırılması ve Başkanlığının Düşmesi',
    articleRef: '5393 s.K. M. 44-47',
    trueStatement:
      'Görevleriyle ilgili bir suç nedeniyle haklarında soruşturma veya kovuşturma açılan belediye organları veya bu organların üyeleri, kesin hükme kadar İçişleri Bakanı tarafından görevden uzaklaştırılabilir ve bu karar iki ayda bir gözden geçirilir; belediye başkanlığının boşalması hâlinde vali tarafından belediye meclisinin on gün içinde toplanması sağlanır, buna karşılık belediye başkanının mazeretsiz ve kesintisiz olarak yirmi günden fazla görevini terk etmesi gibi nedenlerle başkanlıktan düşmesine veya meclisin feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir.',
    trueHighlight: ['İçişleri Bakanı tarafından görevden uzaklaştırılabilir ve bu karar iki ayda bir gözden geçirilir', 'belediye başkanlığının boşalması hâlinde vali tarafından belediye meclisinin on gün içinde toplanması sağlanır', 'İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir'],
    trueCorrectPhrase: 'belediye başkanını geçici olarak görevden uzaklaştırma yetkisi İçişleri Bakanına (2 ayda bir gözden geçirilir), belediye başkanlığının düşmesine veya belediye meclisinin feshine karar verme yetkisi ise Danıştaya aittir',
    baseExplanation: '5393 sayılı Belediye Kanunu m. 30, 44 ve 47 uyarınca geçici görevden uzaklaştırmayı İçişleri Bakanı yapar; ancak seçilmiş bir organ olan belediye başkanının başkanlık sıfatının düşmesine veya belediye meclisinin feshine İçişleri Bakanlığının bildirimi üzerine yalnızca Danıştay karar verebilir!',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'başkanlıktan düşmesine veya meclisin feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir',
      wrongPhrase: 'başkanlıktan düşmesine veya belediye meclisinin feshine doğrudan doğruya İçişleri Bakanı veya Cumhurbaşkanı tarafından karar verilir',
      correctPhrase: 'başkanlıktan düşmesine veya meclisin feshine İçişleri Bakanlığının bildirimi üzerine Danıştay tarafından karar verilir',
      explanation: 'Anayasa m. 127/4 ve 5393 s.K. m. 30, 44 uyarınca yerel yönetimlerin seçilmiş organlarının organlık sıfatını kaybetmeleri konusundaki denetim yalnızca yargı yoluyla olur; belediye başkanının düşmesine ve belediye meclisinin feshine Danıştay karar verir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'belediye başkanının mazeretsiz ve kesintisiz olarak yirmi günden fazla görevini terk etmesi',
      wrongPhrase: 'belediye başkanının mazeretsiz ve kesintisiz olarak on günden fazla görevini terk etmesi',
      correctPhrase: 'belediye başkanının mazeretsiz ve kesintisiz olarak yirmi günden fazla görevini terk etmesi',
      explanation: 'Devlet memurlarında müstafi sayılma süresi kesintisiz 10 gün iken, 5393 s.K. m. 44 uyarınca belediye başkanlığından düşme sebebi olan görevi terk süresi kesintisiz 20 günden fazladır!'
    }
  },
  {
    id: 'rule-idare-13',
    branch: 'İdare',
    subTopic: 'Kamu İhale Kuruluna İtirazen Şikâyet ve İdareye Şikâyet Süreleri',
    articleRef: '4734 s.K. M. 55-56',
    trueStatement:
      'Kamu İhale Kanunu kapsamında yapılacak ihalelere ilişkin olarak önce ihaleyi yapan idareye şikâyet, ardından Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusu yapılması zorunlu idari başvuru yoludur; idareye şikâyet süresi genel ihalelerde farkına varıldığı tarihten itibaren on gün (pazarlık usulünün 21/b-c bentlerinde beş gün) ve her hâlde sözleşme imzalanmadan öncedir; idare on gün içinde karar verir ve bu kararın tebliğinden itibaren on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusu yapılabilir.',
    trueHighlight: ['önce ihaleyi yapan idareye şikâyet, ardından Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusu yapılması zorunlu idari başvuru yoludur', 'on gün', 'itirazen şikâyet başvurusu yapılabilir'],
    trueCorrectPhrase: '4734 sayılı Kamu İhale Kanunu’nda idareye şikâyet (10 gün, 21/b-c pazarlıkta 5 gün) ve KİK’e itirazen şikâyet (10 gün) başvuruları dava açmadan önce tüketilmesi zorunlu idari başvuru yollarıdır',
    baseExplanation: '4734 sayılı Kanun m. 54-56 uyarınca ihale sürecindeki işlemlere karşı idari yargıda dava açmadan önce sırasıyla idareye şikâyet (10 gün) ve Kamu İhale Kurumuna itirazen şikâyet (10 gün) yollarının tüketilmesi zorunludur.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'önce ihaleyi yapan idareye şikâyet, ardından Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusu yapılması zorunlu idari başvuru yoludur',
      wrongPhrase: 'ihaleye katılan istekliler idareye veya Kamu İhale Kurumuna başvurmaksızın doğrudan doğruya idare mahkemesinde iptal davası açabilirler',
      correctPhrase: 'önce ihaleyi yapan idareye şikâyet, ardından Kamu İhale Kurumuna (KİK) itirazen şikâyet başvurusu yapılması zorunlu idari başvuru yoludur',
      explanation: '4734 s.K. m. 54 uyarınca şikâyet ve itirazen şikâyet başvuruları dava açılmadan önce tüketilmesi zorunlu idari başvuru yollarıdır; doğrudan dava açılırsa idari merci tecavüzü kararı verilir!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bu kararın tebliğinden itibaren on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusu yapılabilir',
      wrongPhrase: 'bu kararın tebliğinden itibaren altmış gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusu yapılabilir',
      correctPhrase: 'bu kararın tebliğinden itibaren on gün içinde Kamu İhale Kurumuna itirazen şikâyet başvurusu yapılabilir',
      explanation: '4734 s.K. m. 55 uyarınca idarenin şikâyet üzerine verdiği karara karşı Kamu İhale Kurumuna itirazen şikâyet süresi 60 gün değil, 10 gündür!'
    }
  },
  {
    id: 'rule-anayasa-11',
    branch: 'Anayasa',
    subTopic: 'Anayasa Mahkemesi Üye Seçimi ve Görev Süresi',
    articleRef: 'AY M. 146-147',
    trueStatement:
      'Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (ikisini Sayıştay, birini baro başkanlarının göstereceği adaylar arasından), Cumhurbaşkanı ise oniki üyeyi seçer; Anayasa Mahkemesi üyeleri kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez ve üyeler altmışbeş yaşını doldurunca emekliye ayrılırlar.',
    trueHighlight: ['Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi', 'Cumhurbaşkanı ise oniki üyeyi seçer', 'kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler'],
    trueCorrectPhrase: 'AYM 15 üyeden oluşur (3 üye TBMM, 12 üye Cumhurbaşkanı tarafından seçilir); üyelik için 45 yaşını doldurmuş olma şartı aranır, görev süresi 12 yıldır (yeniden seçilemez) ve emeklilik yaşı 65’tir',
    baseExplanation: 'AY m. 146-147 uyarınca AYM 15 üyeden oluşur (3 TBMM + 12 Cumhurbaşkanı); TBMM ilk oylamada 2/3 (400), ikinci oylamada salt çoğunluk (301), üçüncü oylamada en çok oy alan 2 aday arasından en fazla oy alanı gizli oyla seçer.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (ikisini Sayıştay, birini baro başkanlarının göstereceği adaylar arasından), Cumhurbaşkanı ise oniki üyeyi seçer',
      wrongPhrase: 'Anayasa Mahkemesi onyedi üyeden kurulur; Türkiye Büyük Millet Meclisi yedi üyeyi, Cumhurbaşkanı ise on üyeyi seçer',
      correctPhrase: 'Anayasa Mahkemesi onbeş üyeden kurulur; Türkiye Büyük Millet Meclisi üç üyeyi (ikisini Sayıştay, birini baro başkanlarının göstereceği adaylar arasından), Cumhurbaşkanı ise oniki üyeyi seçer',
      explanation: '2017 Anayasa değişikliği ile Askeri Yargıtay ve AYİM kaldırıldığından Anayasa Mahkemesi üye sayısı 17’den 15’e indirilmiştir; bu 15 üyenin 3’ünü TBMM, 12’sini Cumhurbaşkanı seçer!'
    },
    trap2: {
      category: 'Süre Tuzağı',
      replaceTarget: 'kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez',
      wrongPhrase: 'kırk yaşını doldurmuş olanlar arasından dört yıl için seçilirler ve süresi biten üye bir kez daha seçilebilir',
      correctPhrase: 'kırkbeş yaşını doldurmuş olanlar arasından oniki yıl için seçilirler, bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez',
      explanation: '4 yıl görev süresi ve yeniden seçilebilme AYM Başkan ve Başkanvekilleri (AY m. 146/son) ile HSK üyeleri (AY m. 159) için geçerlidir; AYM üyelerinin yaş şartı 45, görev süresi ise 12 yıldır ve yeniden seçilemezler!'
    }
  },
  {
    id: 'rule-anayasa-12',
    branch: 'Anayasa',
    subTopic: 'Hâkimler ve Savcılar Kurulu (HSK) Yapısı ve Kararlarına İtiraz',
    articleRef: 'AY M. 159',
    trueStatement:
      'Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabii üyesidir; Kurulun dört üyesi Cumhurbaşkanınca, yedi üyesi ise Türkiye Büyük Millet Meclisince dört yıl için seçilir ve süresi biten üyeler bir kez daha seçilebilir; Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz.',
    trueHighlight: ['Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır', 'dört üyesi Cumhurbaşkanınca, yedi üyesi ise Türkiye Büyük Millet Meclisince dört yıl için seçilir', 'meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz'],
    trueCorrectPhrase: 'HSK 13 üye ve 2 daireden oluşur (Adalet Bakanı + Bakan Yardımcısı + 4 üye CB + 7 üye TBMM); görev süresi 4 yıldır (1 kez daha seçilebilir) ve yalnız meslekten çıkarma kararlarına karşı yargı yolu (Danıştay) açıktır',
    baseExplanation: 'AY m. 159 uyarınca HSK 13 üyeden oluşur (2 doğal + 4 CB + 7 TBMM); 2 daire halinde çalışır; yalnız meslekten çıkarma cezasına ilişkin kararlarına karşı yargı yolu (ilk derece olarak Danıştay) açıktır.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabii üyesidir; Kurulun dört üyesi Cumhurbaşkanınca, yedi üyesi ise Türkiye Büyük Millet Meclisince dört yıl için seçilir',
      wrongPhrase: 'Hâkimler ve Savcılar Kurulu yirmiiki üyeden oluşur ve üç daire hâlinde çalışır; Kurulun tüm üyeleri doğrudan Yargıtay ve Danıştay genel kurullarınca altı yıl için seçilir',
      correctPhrase: 'Hâkimler ve Savcılar Kurulu onüç üyeden oluşur ve iki daire hâlinde çalışır; Kurulun Başkanı Adalet Bakanıdır, Adalet Bakanlığı ilgili bakan yardımcısı Kurulun tabii üyesidir; Kurulun dört üyesi Cumhurbaşkanınca, yedi üyesi ise Türkiye Büyük Millet Meclisince dört yıl için seçilir',
      explanation: '2017 Anayasa değişikliği ile HSK üye sayısı 22’den 13’e, daire sayısı 3’ten 2’ye indirilmiştir; 4 üye Cumhurbaşkanınca, 7 üye TBMM tarafından (Yargıtay, Danıştay ve akademisyen/avukat adayları arasından) 4 yıl için seçilir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz',
      wrongPhrase: 'Kurulun meslekten çıkarma cezası da dahil olmak üzere hiçbir kararına karşı yargı mercilerine başvurulamaz',
      correctPhrase: 'Kurulun meslekten çıkarma cezasına ilişkin olanlar dışındaki kararlarına karşı yargı mercilerine başvurulamaz',
      explanation: '2010 Anayasa değişikliğiyle AY m. 159/10’a eklenen hüküm uyarınca HSK’nın meslekten çıkarma cezasına ilişkin kararlarına karşı yargı yolu açıktır!'
    }
  },
  {
    id: 'rule-anayasa-13',
    branch: 'Anayasa',
    subTopic: 'TBMM Bilgi Edinme ve Denetim Yolları (Gensoru Kaldırılması)',
    articleRef: 'AY M. 98',
    trueStatement:
      'Türkiye Büyük Millet Meclisi; meclis araştırması, genel görüşme, meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır; yazılı soru, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak en geç onbeş gün içinde cevaplandırılmak üzere milletvekillerinin bilgi istemesinden ibarettir.',
    trueHighlight: ['meclis araştırması, genel görüşme, meclis soruşturması ve yazılı soru yollarıyla', 'Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak en geç onbeş gün içinde cevaplandırılmak üzere'],
    trueCorrectPhrase: '2017 değişikliğiyle gensoru ve sözlü soru kaldırılmıştır; yazılı soru yalnız Cumhurbaşkanı yardımcıları ve bakanlara sorulabilir (Cumhurbaşkanına sorulamaz) ve en geç 15 gün içinde cevaplandırılır',
    baseExplanation: 'AY m. 98 uyarınca 2017 değişikliğiyle gensoru ve sözlü soru kaldırılmıştır; mevcut 4 denetim aracı: meclis araştırması, genel görüşme, meclis soruşturması ve yazılı sorudur (yazılı soru 15 gün içinde cevaplanır ve Cumhurbaşkanına yazılı soru sorulamaz!).',
    trap1: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'meclis araştırması, genel görüşme, meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır; yazılı soru, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak en geç onbeş gün içinde',
      wrongPhrase: 'gensoru, sözlü soru, meclis araştırması ve güvenoylaması yollarıyla denetleme yetkisini kullanır; yazılı ve sözlü soru doğrudan Cumhurbaşkanına en geç otuz gün içinde',
      correctPhrase: 'meclis araştırması, genel görüşme, meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır; yazılı soru, Cumhurbaşkanı yardımcıları ve bakanlara yazılı olarak en geç onbeş gün içinde',
      explanation: '2017 Anayasa değişikliğiyle gensoru, güvenoyu ve sözlü soru kaldırılmıştır; ayrıca yazılı soru Cumhurbaşkanına yöneltilemez, yalnızca Cumhurbaşkanı yardımcıları ve bakanlara yöneltilebilir ve cevap süresi 15 gündür!'
    },
    trap2: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'meclis araştırması, genel görüşme, meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır',
      wrongPhrase: 'meclis araştırması ve genel görüşme önergeleri tek bir milletvekili tarafından verilebilir',
      correctPhrase: 'meclis araştırması, genel görüşme, meclis soruşturması ve yazılı soru yollarıyla bilgi edinme ve denetleme yetkisini kullanır',
      explanation: 'Yazılı soru tek bir milletvekili tarafından verilebilirken, meclis araştırması ve genel görüşme açılması siyasi parti grupları veya en az 20 milletvekilinin önergesiyle istenebilir (AY m. 98/5).'
    }
  },
  {
    id: 'rule-medeni-13',
    branch: 'Medeni',
    subTopic: 'Gaiplik Kararı İçin Bekleme Süreleri ve Mirasın Güvence Karşılığı Teslimi',
    articleRef: 'TMK M. 32-33 & 584',
    trueStatement:
      'Ölüm tehlikesi içinde kaybolan bir kimse hakkında tehlikenin üzerinden en az bir yıl, kendisinden uzun zamandan beri haber alınamayan bir kimse hakkında ise son haber tarihinin üzerinden en az beş yıl geçmişse gaiplik kararı istenebilir; mahkeme en az altı aylık ilan süresinden sonra gaiplik kararı verir ve ölüm tehlikesi içinde kaybolmada mirasın teslimi tarihinden itibaren beş yıl, uzun zamandan beri haber alınamamada ise son haber tarihinden itibaren onbeş yıl ve her hâlde gaibin yüz yaşına varmasına kadar güvence gösterilir.',
    trueHighlight: ['ölüm tehlikesi içinde kaybolan bir kimse hakkında tehlikenin üzerinden en az bir yıl', 'uzun zamandan beri haber alınamayan bir kimse hakkında ise son haber tarihinin üzerinden en az beş yıl', 'en az altı aylık ilan süresinden sonra', 'teslimi tarihinden itibaren beş yıl, uzun zamandan beri haber alınamamada ise son haber tarihinden itibaren onbeş yıl'],
    trueCorrectPhrase: 'gaiplik başvuru süreleri: ölüm tehlikesinde 1 yıl, uzun süredir haber alınamamada 5 yıl (ilan süresi en az 6 ay); mirasçıların güvence (teminat) süresi ise ölüm tehlikesinde teslimden itibaren 5 yıl, haber alınamamada son haberden itibaren 15 yıl (ve her hâlde 100 yaş) olarak uygulanır',
    baseExplanation: 'TMK m. 32-33 ve m. 584 uyarınca gaiplikte başvuru süresi 1 yıl / 5 yıl, ilk ilandan itibaren bekleme süresi en az 6 ay; gaibin mirasçılarının göstereceği güvence süresi ise 5 yıl (teslimden itibaren) / 15 yıl (son haberden itibaren) ve her hâlde 100 yaştır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'teslimi tarihinden itibaren beş yıl, uzun zamandan beri haber alınamamada ise son haber tarihinden itibaren onbeş yıl',
      wrongPhrase: 'teslimi tarihinden itibaren bir yıl, uzun zamandan beri haber alınamamada ise teslim tarihinden itibaren beş yıl',
      correctPhrase: 'teslimi tarihinden itibaren beş yıl, uzun zamandan beri haber alınamamada ise son haber tarihinden itibaren onbeş yıl',
      explanation: '1 yıl ve 5 yıl gaiplik başvurusu için bekleme süreleridir (TMK m. 33); gaibin mirasçılarının terekeyi teslim alırken gösterecekleri güvence (teminat) süreleri ise TMK m. 584 uyarınca 5 yıl (ölüm tehlikesinde teslimden itibaren) ve 15 yıldır (uzun süredir haber alınamamada son haberden itibaren)!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'mahkeme en az altı aylık ilan süresinden sonra gaiplik kararı verir',
      wrongPhrase: 'gaiplik kararının verilmesiyle birlikte gaibin evliliği de mahkeme kararına gerek olmaksızın kendiliğinden sona erer',
      correctPhrase: 'mahkeme en az altı aylık ilan süresinden sonra gaiplik kararı verir',
      explanation: 'TMK m. 131 uyarınca ölüm karinesinde evlilik kendiliğinden sona ererken, gaiplik kararında evlilik kendiliğinden sona ermez; gaibin eşinin ayrıca evliliğin feshi (gaiplik başvurusuyla birlikte veya ayrı olarak) talebinde bulunması şarttır!'
    }
  },
  {
    id: 'rule-medeni-14',
    branch: 'Medeni',
    subTopic: 'Yasal Önalım (Şufa) Hakkı Süresi ve İstisnaları',
    articleRef: 'TMK M. 732-733',
    trueStatement:
      'Paylı mülkiyette bir paydaşın taşınmaz üzerindeki payını tamamen veya kısmen üçüncü kişiye satması hâlinde, diğer paydaşlar önalım hakkını kullanabilirler; önalım hakkı, satışın hak sahibine noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer; cebrî artırmayla satışlarda ve paydaşlar arasındaki satışlarda önalım hakkı kullanılamaz.',
    trueHighlight: ['noter aracılığıyla bildirildiği tarihin üzerinden üç ay', 'her hâlde satışın üzerinden iki yıl geçmekle düşer', 'cebrî artırmayla satışlarda ve paydaşlar arasındaki satışlarda önalım hakkı kullanılamaz'],
    trueCorrectPhrase: 'yasal önalım (şufa) hakkı noter bildiriminden itibaren 3 ay ve her hâlde satıştan itibaren 2 yıl içinde alıcıya karşı dava açılarak kullanılır; cebri artırmada ve paydaşlar arası satışta önalım hakkı kullanılamaz',
    baseExplanation: 'TMK m. 733 uyarınca önalım hakkı noter bildiriminden itibaren 3 ay ve her hâlde satıştan itibaren 2 yıllık hak düşürücü süreye tabidir; dava satıcıya değil alıcıya karşı açılır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer',
      wrongPhrase: 'herhangi bir yolla öğrenildiği tarihin üzerinden bir ay ve her hâlde satışın üzerinden on yıl geçmekle düşer',
      correctPhrase: 'noter aracılığıyla bildirildiği tarihin üzerinden üç ay ve her hâlde satışın üzerinden iki yıl geçmekle düşer',
      explanation: 'TMK m. 733/4 uyarınca 3 aylık hak düşürücü süre ancak satışın noter aracılığıyla bildirilmesiyle işlemeye başlar (haricen öğrenme 3 aylık süreyi başlatmaz!) ve üst süre 2 yıldır.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'cebrî artırmayla satışlarda ve paydaşlar arasındaki satışlarda önalım hakkı kullanılamaz',
      wrongPhrase: 'bir paydaşın payını diğer bir paydaşa satması veya bağışlaması hâlinde de diğer paydaşlar önalım hakkını kullanabilirler',
      correctPhrase: 'cebrî artırmayla satışlarda ve paydaşlar arasındaki satışlarda önalım hakkı kullanılamaz',
      explanation: 'Yasal önalım hakkı yalnızca payın üçüncü bir kişiye satışı (veya ekonomik olarak satışa eşdeğer işlemler) hâlinde kullanılabilir; paydaşlar arası satışlarda, bağışlamada, trampada ve cebri icra satışlarında önalım hakkı kullanılamaz!'
    }
  },
  {
    id: 'rule-borclar-12',
    branch: 'Borçlar',
    subTopic: 'Aşırı Yararlanma (Gabin) Hak Düşürücü Süreleri',
    articleRef: 'TBK M. 28',
    trueStatement:
      'Bir sözleşmede karşılıklı edimler arasında açık bir oransızlık varsa ve bu oransızlık, zarar görenin zor durumda kalmasından veya düşüncesizliğinden ya da deneyimsizliğinden yararlanılmak suretiyle gerçekleştirildiği takdirde, zarar gören, düşüncesizlik veya deneyimsizliğini öğrendiği; zor durumda kalmada ise bu durumun ortadan kalktığı tarihten başlayarak bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde sözleşme ile bağlı olmadığını bildirerek ediminin geri verilmesini ya da sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir.',
    trueHighlight: ['bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde', 'sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir'],
    trueCorrectPhrase: 'aşırı yararlanmada (gabin, TBK m. 28) hak düşürücü süre 1 yıl ve her hâlde sözleşmenin kurulmasından itibaren 5 yıldır; zarar gören sözleşmenin iptalini veya sözleşmeye bağlı kalarak oransızlığın giderilmesini isteyebilir',
    baseExplanation: 'TBK m. 28 uyarınca aşırı yararlanmada (gabin) yanılma/aldatma/korkutmadan (TBK m. 39, sadece 1 yıl) farklı olarak 1 yıl ve her hâlde 5 yıllık çift hak düşürücü süre öngörülmüştür ve oransızlığın giderilmesini talep etme imkânı da vardır.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde',
      wrongPhrase: 'altı ay ve her hâlde sözleşmenin kurulduğu tarihten başlayarak on yıl içinde',
      correctPhrase: 'bir yıl ve her hâlde sözleşmenin kurulduğu tarihten başlayarak beş yıl içinde',
      explanation: 'TBK m. 28 uyarınca aşırı yararlanmada (gabin) hak düşürücü süre öğrenmeden/zor durumun kalkmasından itibaren 1 yıl ve her hâlde sözleşmenin kurulmasından itibaren 5 yıldır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ya da sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir',
      wrongPhrase: 'ancak sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini (bedelin indirilmesini veya artırılmasını) isteyemez',
      correctPhrase: 'ya da sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini isteyebilir',
      explanation: '6098 sayılı TBK m. 28 ile getirilen en önemli yeniliklerden biri, aşırı yararlanmada zarar görene sözleşmeyi iptal etmek yerine sözleşmeye bağlı kalarak edimler arasındaki oransızlığın giderilmesini talep etme hakkı tanınmasıdır!'
    }
  },
  {
    id: 'rule-borclar-13',
    branch: 'Borçlar',
    subTopic: 'Ön Sözleşme (Sözleşme Yapma Vaadi) ve Şekli',
    articleRef: 'TBK M. 29',
    trueStatement:
      'Bir sözleşmenin ileride yapılmasına ilişkin sözleşmeler geçerlidir; kanunlarda öngörülen istisnalar dışında, ön sözleşmenin geçerliliği, ileride yapılacak sözleşmenin şekline bağlıdır.',
    trueHighlight: ['ön sözleşmenin geçerliliği, ileride yapılacak sözleşmenin şekline bağlıdır'],
    trueCorrectPhrase: 'TBK m. 29 uyarınca ön sözleşmenin (sözleşme yapma vaadinin) geçerliliği, kanundaki istisnalar dışında ileride yapılacak asıl sözleşmenin şekline bağlıdır',
    baseExplanation: 'TBK m. 29/2 uyarınca ön sözleşme asıl sözleşmenin geçerlilik şekline tabidir (örneğin taşınmaz satış vaadi resmi şekle, kefalet vaadi nitelikli yazılı şekle tabidir; istisnası ise TBK m. 184/2’deki alacağın devri sözü vermenin şekle bağlı olmamasıdır!).',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'ön sözleşmenin geçerliliği, ileride yapılacak sözleşmenin şekline bağlıdır',
      wrongPhrase: 'asıl sözleşme resmi şekle tabi olsa bile ön sözleşmeler her zaman şekil serbestisine tabidir ve sözlü olarak yapılabilir',
      correctPhrase: 'ön sözleşmenin geçerliliği, ileride yapılacak sözleşmenin şekline bağlıdır',
      explanation: 'TBK m. 29/2 uyarınca kanunda öngörülen istisnalar dışında ön sözleşmenin geçerliliği, ileride yapılacak asıl sözleşmenin şekline bağlıdır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kanunlarda öngörülen istisnalar dışında, ön sözleşmenin geçerliliği, ileride yapılacak sözleşmenin şekline bağlıdır',
      wrongPhrase: 'alacağın devri sözü verme (temlik vaadi) de tıpkı alacağın devri gibi yazılı şekle bağlıdır',
      correctPhrase: 'kanunlarda öngörülen istisnalar dışında, ön sözleşmenin geçerliliği, ileride yapılacak sözleşmenin şekline bağlıdır',
      explanation: 'TBK m. 29/2’deki "kanunlarda öngörülen istisnalar" ifadesinin en önemli örneği TBK m. 184/2’dir: Alacağın devri yazılı şekle tabi iken, alacağın devri sözü verme (ön sözleşmesi) şekle bağlı değildir!'
    }
  },
  {
    id: 'rule-ticaret-11',
    branch: 'Ticaret',
    subTopic: 'Anonim ve Limited Şirketlerde Asgari Sermaye ve Ortak Sayısı',
    articleRef: 'TTK M. 332 & 573',
    trueStatement:
      'Anonim şirket ve limited şirket tek ortaklı olarak kurulabilir; ancak limited şirkette ortakların sayısı elliyi aşamaz; anonim şirketlerde yönetim kurulu bir veya daha fazla kişiden, limited şirketlerde ise müdürler kurulu en az bir ortaktan (dışarıdan atanan müdürlerle birlikte en az bir ortağın şirketi yönetim ve temsil yetkisinin bulunması şartıyla) oluşur.',
    trueHighlight: ['Anonim şirket ve limited şirket tek ortaklı olarak kurulabilir', 'limited şirkette ortakların sayısı elliyi aşamaz', 'en az bir ortağın şirketi yönetim ve temsil yetkisinin bulunması şartıyla'],
    trueCorrectPhrase: 'hem A.Ş. hem Ltd. Şti. tek ortakla kurulabilir; Ltd. Şti.’de ortak sayısı 50’yi aşamaz ve Ltd. Şti.’de en az bir ortağın şirketi yönetim hakkının ve temsil yetkisinin bulunması zorunludur (A.Ş.’de ise yönetim kurulu üyelerinin pay sahibi olması zorunlu değildir)',
    baseExplanation: 'TTK m. 338, 359, 573 ve 623 uyarınca A.Ş.’de yönetim kurulu üyelerinin pay sahibi olması şart değilken, Ltd. Şti.’de en az bir ortağın şirketi yönetim hakkının ve temsil yetkisinin bulunması zorunludur; ayrıca Ltd. Şti. ortak sayısı 50’yi aşamaz.',
    trap1: {
      category: 'Çoğunluk Tuzağı',
      replaceTarget: 'Anonim şirket ve limited şirket tek ortaklı olarak kurulabilir; ancak limited şirkette ortakların sayısı elliyi aşamaz',
      wrongPhrase: 'Anonim şirket en az beş ortakla, limited şirket ise en az iki ve en çok yüz ortakla kurulabilir',
      correctPhrase: 'Anonim şirket ve limited şirket tek ortaklı olarak kurulabilir; ancak limited şirkette ortakların sayısı elliyi aşamaz',
      explanation: '6102 sayılı TTK ile hem anonim şirketlerin hem de limited şirketlerin tek ortaklı kurulabilmesi kabul edilmiştir; limited şirkette azami ortak sayısı ise 50’dir.'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'en az bir ortağın şirketi yönetim ve temsil yetkisinin bulunması şartıyla',
      wrongPhrase: 'limited şirkette ortaklardan hiçbirinin müdür olmasına gerek olmaksızın şirketin yönetimi tamamen ortak olmayan üçüncü kişilere bırakılabilir',
      correctPhrase: 'en az bir ortağın şirketi yönetim ve temsil yetkisinin bulunması şartıyla',
      explanation: 'Anonim şirkette yönetim kurulu üyelerinin tamamı pay sahibi olmayan kişilerden seçilebilirken (TTK m. 359), limited şirkette en az bir ortağın şirketi yönetim hakkının ve temsil yetkisinin bulunması zorunludur (TTK m. 623/1)!'
    }
  },
  {
    id: 'rule-ticaret-12',
    branch: 'Ticaret',
    subTopic: 'Emre Yazılı Senetlerde Aval ve Beyaz Ciro',
    articleRef: 'TTK M. 683 & 701',
    trueStatement:
      'Poliçe ve bonoda bedelin ödenmesi, aval suretiyle tamamen veya kısmen teminat altına alınabilir; aval şerhi poliçe veya alonj üzerine yazılır ve kimin için verildiği belirtilmemişse düzenleyen (bonoda ise senedin asıl borçlusu olan düzenleyen) için verilmiş sayılır; senedin ön yüzüne muhatabın veya düzenleyenin imzası dışında atılan her tek imza aval şerhi sayılır.',
    trueHighlight: ['aval suretiyle tamamen veya kısmen teminat altına alınabilir', 'kimin için verildiği belirtilmemişse düzenleyen (bonoda ise senedin asıl borçlusu olan düzenleyen) için verilmiş sayılır', 'senedin ön yüzüne muhatabın veya düzenleyenin imzası dışında atılan her tek imza aval şerhi sayılır'],
    trueCorrectPhrase: 'aval kısmi olabilir, poliçe veya alonj üzerine yazılır, senedin ön yüzüne (asıl borçlu/düzenleyen dışında) atılan salt imza aval sayılır ve kimin lehine verildiği yazılmamışsa düzenleyen lehine verilmiş sayılır (arka yüzdeki salt imza ise beyaz cirodur!)',
    baseExplanation: 'TTK m. 701 uyarınca senedin ön yüzüne atılan tek imza aval, arka yüzüne (veya alonja) atılan tek imza ise beyaz cirodur (TTK m. 683); avalde kimin için verildiği belirtilmemişse düzenleyen için verilmiş sayılır.',
    trap1: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'kimin için verildiği belirtilmemişse düzenleyen (bonoda ise senedin asıl borçlusu olan düzenleyen) için verilmiş sayılır',
      wrongPhrase: 'kimin için verildiği açıkça belirtilmemişse aval şerhi şekil eksikliği nedeniyle kesin olarak hükümsüz sayılır',
      correctPhrase: 'kimin için verildiği belirtilmemişse düzenleyen (bonoda ise senedin asıl borçlusu olan düzenleyen) için verilmiş sayılır',
      explanation: 'TTK m. 701/4 uyarınca avalin kimin için verildiği belirtilmemişse aval geçersiz olmaz; kanuni karine gereği düzenleyen için verilmiş sayılır!'
    },
    trap2: {
      category: 'İstisna/Kesinlik Tuzağı',
      replaceTarget: 'senedin ön yüzüne muhatabın veya düzenleyenin imzası dışında atılan her tek imza aval şerhi sayılır',
      wrongPhrase: 'senedin ön yüzüne atılan tek imza beyaz ciro, arka yüzüne atılan tek imza ise aval şerhi sayılır',
      correctPhrase: 'senedin ön yüzüne muhatabın veya düzenleyenin imzası dışında atılan her tek imza aval şerhi sayılır',
      explanation: 'Kıymetli evrak hukukunda senedin ÖN yüzüne atılan salt imza AVAL, ARKA yüzüne (veya alonja) atılan salt imza ise BEYAZ CİRO sayılır!'
    }
  },
  {
    id: 'rule-iik-14',
    branch: 'İcra',
    subTopic: 'Tasarrufun İptali Davası Süresi ve Bağışlama Tasarrufları',
    articleRef: 'İİK M. 278 & 284',
    trueStatement:
      'Tasarrufun iptali davası hakkı, batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer; borçlunun aciz belgesi alınmasından veya iflasın açılmasından önceki son iki yıl içinde yaptığı mutat hediyeler müstesna tüm bağışlamalar ve ivazsız tasarruflar batıldır (iptale tabidir).',
    trueHighlight: ['batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer', 'son iki yıl içinde yaptığı mutat hediyeler müstesna tüm bağışlamalar ve ivazsız tasarruflar batıldır'],
    trueCorrectPhrase: 'tasarrufun iptali davası tasarruf tarihinden itibaren 5 yıllık hak düşürücü süreye tabidir; ivazsız tasarruflar/bağışlamalar için geriye doğru şüpheli dönem 2 yıl, aciz halinde yapılan tasarruflar için 1 yıl, zarar kastıyla yapılan tasarruflar için 5 yıldır',
    baseExplanation: 'İİK m. 278-280 ve m. 284 uyarınca tasarrufun iptali davası tasarruf tarihinden itibaren 5 yıllık hak düşürücü süreye tabidir; ivazsız tasarruflarda (m. 278) geriye doğru 2 yıl, aciz halinde yapılan tasarruflarda (m. 279) 1 yıl, zarar verme kastında (m. 280) 5 yıl incelenir.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer; borçlunun aciz belgesi alınmasından veya iflasın açılmasından önceki son iki yıl içinde yaptığı mutat hediyeler müstesna tüm bağışlamalar ve ivazsız tasarruflar batıldır',
      wrongPhrase: 'tasarrufun alacaklı tarafından öğrenildiği tarihten itibaren on yıl geçmekle düşer; borçlunun son beş yıl içinde yaptığı tüm bağışlamalar batıldır',
      correctPhrase: 'batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer; borçlunun aciz belgesi alınmasından veya iflasın açılmasından önceki son iki yıl içinde yaptığı mutat hediyeler müstesna tüm bağışlamalar ve ivazsız tasarruflar batıldır',
      explanation: 'İİK m. 284 uyarınca tasarrufun iptali davası açma süresi öğrenmeden değil, tasarrufun yapıldığı tarihten itibaren 5 yıldır; İİK m. 278 uyarınca bağışlamaların iptalinde geriye doğru süre ise 2 yıldır!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'Tasarrufun iptali davası hakkı, batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer',
      wrongPhrase: 'Tasarrufun iptali davaları her durumda icra mahkemesinde görülür ve dava açma hakkı beş yıl geçmekle düşer',
      correctPhrase: 'Tasarrufun iptali davası hakkı, batıl tasarrufun vukuu (yapıldığı) tarihten itibaren beş yıl geçmekle düşer',
      explanation: 'Tasarrufun iptali davalarında (İİK m. 277 vd.) görevli mahkeme İcra Mahkemesi değil, genel mahkemelerdir (Asliye Hukuk Mahkemesi)!'
    }
  },
  {
    id: 'rule-iik-15',
    branch: 'İcra',
    subTopic: 'İflas Yoluyla Adi Takipte Süreler ve İflas Davası',
    articleRef: 'İİK M. 155-156',
    trueStatement:
      'İflas yoluyla adi takipte ödeme emrine itiraz ve ödeme süresi yedi gündür; borçlu yedi gün içinde borcu ödemez veya itiraz ederse, alacaklı borçlunun muamele merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iflas davası açabilir ve alacaklının iflas istemek hakkı ödeme emrinin tebliği tarihinden itibaren bir yıl geçmekle düşer.',
    trueHighlight: ['ödeme emrine itiraz ve ödeme süresi yedi gündür', 'muamele merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iflas davası açabilir', 'ödeme emrinin tebliği tarihinden itibaren bir yıl geçmekle düşer'],
    trueCorrectPhrase: 'iflas yoluyla adi takipte ödeme ve itiraz süresi 7 gündür (kambiyo iflas takibinde 5 gündür); iflas davası borçlunun muamele merkezindeki Asliye Ticaret Mahkemesinde ödeme emrinin tebliğinden itibaren 1 yıl içinde açılmalıdır',
    baseExplanation: 'İİK m. 154-156 uyarınca iflas davasında kesin yetkili ve görevli mahkeme borçlunun muamele merkezinin bulunduğu yer Asliye Ticaret Mahkemesidir ve iflas istemek hakkı ödeme emrinin tebliğinden itibaren 1 yıl geçmekle düşer.',
    trap1: {
      category: 'Süre Tuzağı',
      replaceTarget: 'alacaklının iflas istemek hakkı ödeme emrinin tebliği tarihinden itibaren bir yıl geçmekle düşer',
      wrongPhrase: 'alacaklının iflas istemek hakkı itirazın tebliği tarihinden itibaren altı ay geçmekle düşer',
      correctPhrase: 'alacaklının iflas istemek hakkı ödeme emrinin tebliği tarihinden itibaren bir yıl geçmekle düşer',
      explanation: '6 aylık süre genel haciz yolunda itirazın kaldırılması süresidir (İİK m. 68); iflas takibinde alacaklının Asliye Ticaret Mahkemesinden iflas istemek hakkı İİK m. 156/4 uyarınca ödeme emrinin tebliği tarihinden itibaren 1 yıl geçmekle düşer!'
    },
    trap2: {
      category: 'Görev/Yetki Tuzağı',
      replaceTarget: 'borçlunun muamele merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iflas davası açabilir',
      wrongPhrase: 'takibin yapıldığı icra dairesinin bağlı bulunduğu icra mahkemesinde iflas davası açabilir ve taraflar iflas davası için yetki sözleşmesi yapabilirler',
      correctPhrase: 'borçlunun muamele merkezinin bulunduğu yerdeki asliye ticaret mahkemesinde iflas davası açabilir',
      explanation: 'İflas davasında görevli mahkeme İcra Mahkemesi değil, borçlunun muamele merkezinin bulunduğu yer Asliye Ticaret Mahkemesidir ve bu yetki kamu düzenine ilişkin olup kesindir (yetki sözleşmesi yapılamaz, İİK m. 154)!'
    }
  }
];

const RAW_HMGS_STATUTORY_RULES: StatutoryRuleSeed[] = [
  ...HMGS_STATUTORY_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART2_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART3_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART4_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART5_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART6_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART7_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART8_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART9_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART10_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART11_RULES,
  ...HMGS_COMPREHENSIVE_EXPANSION_PART12_RULES
];

export const ALL_HMGS_STATUTORY_RULES: StatutoryRuleSeed[] = (() => {
  const seen = new Set<string>();
  return RAW_HMGS_STATUTORY_RULES.map((r, i) => {
    const uniqueId = seen.has(r.id) ? `${r.id}-ext-${i}` : r.id;
    seen.add(uniqueId);
    return uniqueId === r.id ? r : { ...r, id: uniqueId };
  }).filter((r) => !EXCLUDED_RULE_IDS.has(r.id));
})();

function createCardFromRule(rule: StatutoryRuleSeed, variant: 'true' | 'trap1' | 'trap2'): TrapCard {
  if (variant === 'true') {
    return {
      id: `${rule.id}-true`,
      branch: rule.branch,
      subTopic: rule.subTopic,
      articleRef: rule.articleRef,
      statement: rule.trueStatement,
      isCorrect: true,
      trapCategory: rule.trap1.category,
      wrongPhrase: null,
      correctPhrase: rule.trueCorrectPhrase,
      explanation: `${rule.baseExplanation} Önermede yer alan kanun hükmü birebir doğrudur.`,
      highlightedKeywords: rule.trueHighlight
    };
  }

  const trap = variant === 'trap1' ? rule.trap1 : rule.trap2;
  const statementWithTrap = rule.trueStatement.includes(trap.replaceTarget)
    ? rule.trueStatement.replace(trap.replaceTarget, trap.wrongPhrase)
    : `${rule.trueStatement}`;

  return {
    id: `${rule.id}-${variant}`,
    branch: rule.branch,
    subTopic: rule.subTopic,
    articleRef: rule.articleRef,
    statement: statementWithTrap,
    isCorrect: false,
    trapCategory: trap.category,
    wrongPhrase: trap.wrongPhrase,
    correctPhrase: trap.correctPhrase,
    explanation: trap.explanation,
    highlightedKeywords: [trap.wrongPhrase, ...rule.trueHighlight.filter((h) => h !== trap.replaceTarget)]
  };
}

/**
 * Tüm temel kartları ve çoklu varyantlı (Doğru Metin + Tuzak 1 + Tuzak 2) kanun maddesi
 * havuzunu birleştirerek 100% doğal Türkçe ile yazılmış 1.000+ kartlık dinamik HMGS soru bankasını üretir.
 * Şablon cümle, kopya başlık (spoiler) veya yapay ek kullanılmaz; her kart bağımsız bir kanun önermesidir.
 */
export function buildExpandedHmgsBank(baseCards: TrapCard[]): TrapCard[] {
  const generated: TrapCard[] = [];

  for (const rule of ALL_HMGS_STATUTORY_RULES) {
    generated.push(createCardFromRule(rule, 'true'));
    generated.push(createCardFromRule(rule, 'trap1'));
    generated.push(createCardFromRule(rule, 'trap2'));
  }

  // Aynı kanun maddesinin varyantlarının arka arkaya gelmemesi için başlangıçta dengeli dağıtım (interleaving)
  const trueCards = generated.filter((c) => c.id.endsWith('-true'));
  const trap1Cards = generated.filter((c) => c.id.endsWith('-trap1'));
  const trap2Cards = generated.filter((c) => c.id.endsWith('-trap2'));

  return [...baseCards, ...trap1Cards, ...trueCards, ...trap2Cards];
}





