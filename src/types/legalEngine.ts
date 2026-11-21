export type LegalBranchId =
  | 'anayasa'
  | 'idare'
  | 'medeni'
  | 'borclar'
  | 'hmk'
  | 'tck'
  | 'cmk'
  | 'ticaret'
  | 'icra'
  | 'is_sgk'
  | 'vergi'
  | 'avukatlik'
  | 'mohuk'
  | 'genel_kamu';

export type LegalExamType = 'HMGS' | 'IYOS' | 'HAKIMLIK' | 'KPSS';

export type OptionLetter = 'A' | 'B' | 'C' | 'D' | 'E';

export type LegalDifficulty = 'Temel Mevzuat' | 'Olay / Vaka' | 'İleri Ayırıcı';

export type LegalExamFrequency =
  | 'Her Sınavda Sorulur'
  | 'Yüksek Verimli Olay'
  | 'Kritik Kanun Maddesi';

export interface LegalBranchMeta {
  id: LegalBranchId;
  name: string;
  shortName: string;
  exams: LegalExamType[];
  hmgsWeight: number;
  lawCodes: string;
  description: string;
  accent: string;
}

export interface StructuredLegalEntity {
  /** Hukuki kurum, kavram, suç, dava veya kanun yolu adı */
  name: string;
  /** Doğrulanmış güncel kanun ve madde referansı (Örn: 6100 s. HMK m. 345) */
  article: string;
  /** Temel kanun kuralı, süre, merci veya şart (Antite adı geçmeden) */
  rule: string;
  /** Ayırt edici hukuki özellik, kapsam veya istisna (Antite adı geçmeden) */
  hallmark: string;
  /** Özgün hukuki olay / vaka senaryosu (Cevap sızıntısı olmadan) */
  vignette: string;
  /** Olaydaki 3 hukuki anahtar ipucu */
  clues: [string, string, string];
  /** Hukuki yaptırım, kanun yolu, görevli mahkeme veya çözüm yolu (Antite adı geçmeden) */
  remedy: string;
  /** Sınav altın kuralı (High-Yield) */
  pearl: string;
  /** Antite hakkında açıkça YANLIŞ çeldirici yargı (küçük harfle başlayan yüklem cümlesi) */
  trapFalse: string;
  /** trapFalse içindeki hatalı çekirdek ifade (kırmızı vurgu için) */
  trapHighlight: string;
}

export interface StructuredLegalClusterSeed {
  branchId: LegalBranchId;
  subTopic: string;
  exams: LegalExamType[];
  difficulty: LegalDifficulty;
  examFrequency: LegalExamFrequency;
  /** ÖSYM çıkmış soru mantığına birebir uygun özgün konsept yılı (Örn: '2024', '2025', '2026') */
  osymTwinYear?: string;
  entities: [
    StructuredLegalEntity,
    StructuredLegalEntity,
    StructuredLegalEntity,
    StructuredLegalEntity,
    StructuredLegalEntity
  ];
}

export interface LegalQuestionOption {
  letter: OptionLetter;
  text: string;
  differentialNote: string;
}

export interface LegalVakaQuestion {
  readonly id: string;
  readonly branchId: LegalBranchId;
  readonly branchName: string;
  readonly exams: LegalExamType[];
  readonly subTopic: string;
  readonly articleRef: string;
  readonly difficulty: LegalDifficulty;
  readonly examFrequency: LegalExamFrequency;
  readonly isOsymTwin?: boolean;
  readonly osymYearTag?: string;
  readonly stem: string;
  readonly legalClues: string[];
  readonly options: LegalQuestionOption[];
  readonly correctOption: OptionLetter;
  readonly legalReasoning: string;
  readonly differentialSummary: string;
  readonly highYieldPearl: string;
  readonly remedyNote: string;
}

export interface LegalSpotCard {
  readonly id: string;
  readonly branchId: LegalBranchId;
  readonly branchName: string;
  readonly exams: LegalExamType[];
  readonly subTopic: string;
  readonly articleRef: string;
  readonly isTrue: boolean;
  readonly statement: string;
  readonly criticalHighlight: string;
  readonly correctLegalFact: string;
  readonly remedyNote: string;
  readonly highYieldPearl: string;
}

export interface LegalReferenceEntry {
  id: string;
  branchId: LegalBranchId;
  category: 'Süreler' | 'Görevli Mahkemeler' | 'Nisap & Çoğunluklar' | '2024–2026 Yargı Paketi' | 'Karşılaştırma';
  title: string;
  articleRef: string;
  correctRule: string;
  commonTrap: string;
  exams: LegalExamType[];
}

export interface LegalBranchCount {
  vaka: number;
  twin: number;
  spot: number;
  total: number;
}
