export type LawBranch =
  | 'HMK'
  | 'CMK'
  | 'TCK'
  | 'Ceza'
  | 'İYUK'
  | 'İdare'
  | 'Anayasa'
  | 'Medeni'
  | 'Borçlar'
  | 'Ticaret'
  | 'İcra'
  | 'İş Hukuku'
  | 'Vergi'
  | 'Avukatlık'
  | 'MÖHUK';

export type FilterPillCategory =
  | 'Tümü'
  | 'Medeni & Borçlar'
  | 'CMK & TCK'
  | 'İdare & İYUK'
  | 'Ticaret & İcra'
  | 'HMK'
  | 'Anayasa'
  | 'İş & Vergi & Avukatlık';

export type TrapCategory =
  | 'Süre Tuzağı'
  | 'Görev/Yetki Tuzağı'
  | 'İstisna/Kesinlik Tuzağı'
  | 'Çoğunluk Tuzağı'
  | 'Oran/Nisap Tuzağı';

export interface TrapCard {
  id: string;
  branch: LawBranch;
  subTopic?: string;
  articleRef: string;
  trapCategory: TrapCategory;
  statement: string;
  highlightedKeywords: string[];
  isCorrect: boolean;
  wrongPhrase: string | null;
  correctPhrase: string;
  explanation: string;
  isCustomGenerated?: boolean;
  createdAt?: string;
}

export const SM2_INTERVAL_DAYS = [1, 3, 7, 21] as const;

export interface MistakeVaultEntry {
  cardId: string;
  addedAt: string;
  lastReviewedAt: string;
  nextReviewDate: string;
  intervalDays: 1 | 3 | 7 | 21;
  repetitionStep: number;
  missCount: number;
  isDueToday: boolean;
  manualBookmark?: boolean;
}

export interface BranchMasteryStat {
  answered: number;
  correct: number;
}

export interface UserStudyStats {
  totalAnswered: number;
  totalCorrect: number;
  dailyGoalTarget: number;
  todaySolvedCount: number;
  lastStudyDate: string;
  streakDays: number;
  dailyHistory?: Record<string, number>; // "YYYY-MM-DD" -> çözülen soru sayısı
  targetExamDate?: string; // "YYYY-MM-DD"
  byCategory: Record<Exclude<FilterPillCategory, 'Tümü'>, BranchMasteryStat>;
}

export interface AISettings {
  provider: 'gemini' | 'openai';
  apiKey: string;
}

export const FILTER_PILLS: FilterPillCategory[] = [
  'Tümü',
  'Medeni & Borçlar',
  'CMK & TCK',
  'İdare & İYUK',
  'Ticaret & İcra',
  'HMK',
  'Anayasa',
  'İş & Vergi & Avukatlık'
];

export const BRANCH_META: Record<
  Exclude<FilterPillCategory, 'Tümü'>,
  {
    title: string;
    shortDesc: string;
    hmgsWeight: string;
    accentColor: string;
    badgeClass: string;
  }
> = {
  'Medeni & Borçlar': {
    title: 'Medeni Hukuk & Borçlar Hukuku',
    shortDesc: 'Kişiler, aile, miras, eşya hukuku, zamanaşımı, kira ve sözleşme hükümsüzlükleri',
    hmgsWeight: '~27 Soru (%22.5)',
    accentColor: '#059669',
    badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
  },
  'CMK & TCK': {
    title: 'Ceza & Ceza Muhakemesi (TCK/CMK)',
    shortDesc: 'Suç genel teorisi, koruma tedbirleri, 7499 s.K. kanun yolları ve dava/ceza zamanaşımı',
    hmgsWeight: '~18 Soru (%15)',
    accentColor: '#E11D48',
    badgeClass: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
  },
  'İdare & İYUK': {
    title: 'İdare Hukuku & İYUK',
    shortDesc: 'İdari teşkilat, 657 s. DMK, zımni ret (30 gün), dava açma süreleri ve yürütmenin durdurulması',
    hmgsWeight: '~18 Soru (%15)',
    accentColor: '#0284C7',
    badgeClass: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20'
  },
  'Ticaret & İcra': {
    title: 'Ticaret Hukuku & İcra-İflas (TTK/İİK)',
    shortDesc: 'Ticari işletme, şirketler, kıymetli evrak, takip yolları, haciz, iflas ve konkordato',
    hmgsWeight: '~21 Soru (%17.5)',
    accentColor: '#7C3AED',
    badgeClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20'
  },
  'HMK': {
    title: 'Medeni Usul Hukuku (6100 s. HMK)',
    shortDesc: 'Görev, kesin yetki, ilk itirazlar, ıslah, senetle ispat ve istinaf/temyiz süreleri',
    hmgsWeight: '~12 Soru (%10)',
    accentColor: '#4F46E5',
    badgeClass: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
  },
  'Anayasa': {
    title: 'Anayasa Hukuku & Anayasa Yargısı',
    shortDesc: 'TBMM nitelikli çoğunluklar, CBK, Yüce Divan, siyasi partiler ve norm denetimi',
    hmgsWeight: '~9 Soru (%7.5)',
    accentColor: '#D97706',
    badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
  },
  'İş & Vergi & Avukatlık': {
    title: 'İş Hukuku, Vergi, Avukatlık & MÖHUK',
    shortDesc: 'İş güvencesi, zorunlu arabuluculuk, VUK/6183 uzlaşma-dava süreleri, Avukatlık Kanunu ve MÖHUK',
    hmgsWeight: '~15 Soru (%12.5)',
    accentColor: '#0D9488',
    badgeClass: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20'
  }
};

export function getCategoryForBranch(branch: LawBranch): Exclude<FilterPillCategory, 'Tümü'> {
  if (branch === 'Anayasa') return 'Anayasa';
  if (branch === 'İYUK' || branch === 'İdare') return 'İdare & İYUK';
  if (branch === 'Medeni' || branch === 'Borçlar') return 'Medeni & Borçlar';
  if (branch === 'HMK') return 'HMK';
  if (branch === 'CMK' || branch === 'TCK' || branch === 'Ceza') return 'CMK & TCK';
  if (
    branch === 'İş Hukuku' ||
    branch === 'Vergi' ||
    branch === 'Avukatlık' ||
    branch === 'MÖHUK'
  ) {
    return 'İş & Vergi & Avukatlık';
  }
  return 'Ticaret & İcra';
}

export function matchesFilterCategory(branch: LawBranch, filter: FilterPillCategory): boolean {
  if (filter === 'Tümü') return true;
  return getCategoryForBranch(branch) === filter;
}

export function formatBranchHeader(card: TrapCard): string {
  const lawNames: Record<LawBranch, string> = {
    HMK: '6100 S. HMK',
    CMK: '5271 S. CMK',
    TCK: '5237 S. TCK',
    Ceza: 'Ceza Hukuku',
    İYUK: '2577 S. İYUK',
    İdare: 'İdare Hukuku',
    Anayasa: '1982 Anayasası',
    Medeni: '4721 S. TMK',
    Borçlar: '6098 S. TBK',
    Ticaret: '6102 S. TTK',
    İcra: '2004 S. İİK',
    'İş Hukuku': '4857 & 7036 S. İş Hukuku',
    Vergi: '213 S. VUK & 6183 S.K.',
    Avukatlık: '1136 S. Avukatlık K.',
    MÖHUK: '5718 S. MÖHUK & Genel'
  };
  return `${lawNames[card.branch] || card.branch} • ${card.subTopic || 'Mevzuat Hükmü'}`;
}

export function formatFocusBadge(trapCategory: TrapCategory): string {
  switch (trapCategory) {
    case 'Süre Tuzağı':
      return 'Odak: Süre & Usul';
    case 'Görev/Yetki Tuzağı':
      return 'Odak: Görev & Yetki';
    case 'Çoğunluk Tuzağı':
    case 'Oran/Nisap Tuzağı':
      return 'Odak: Oran & Nisap';
    case 'İstisna/Kesinlik Tuzağı':
      return 'Odak: İstisna & Kesinlik';
  }
}

