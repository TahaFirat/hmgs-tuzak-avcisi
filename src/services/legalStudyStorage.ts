import { LegalBranchId, LegalExamType, OptionLetter } from '../types/legalEngine';

export interface VakaAnswerRecord {
  selectedOption: OptionLetter;
  isCorrect: boolean;
  answeredAt: number;
  branchId: LegalBranchId;
}

export interface SpotAnswerRecord {
  userChoseTrue: boolean;
  isCorrect: boolean;
  answeredAt: number;
  branchId: LegalBranchId;
}

export interface LegalExamAttempt {
  id: string;
  examTitle: string;
  examType: LegalExamType | 'KARMA';
  dateIso: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  score100: number;
  passed70: boolean;
  durationSeconds: number;
}

export interface LegalStudyState {
  theme: 'light' | 'dark';
  soundEnabled: boolean;
  targetExam: LegalExamType;
  targetExamDate: string; // YYYY-MM-DD
  dailyTarget: number;
  todayDateKey: string;
  todaySolvedCount: number;
  streakDays: number;
  studySecondsByDate: Record<string, number>;
  vakaAnswers: Record<string, VakaAnswerRecord>;
  spotAnswers: Record<string, SpotAnswerRecord>;
  bookmarkedVakaIds: Record<string, true>;
  bookmarkedSpotIds: Record<string, true>;
  examHistory: LegalExamAttempt[];
}

const STORAGE_KEY = 'hukuk_akademi_state_v2';

export function getLocalDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function getDefaultUpcomingExamDate(exam: LegalExamType): {
  dateStr: string;
  label: string;
} {
  const now = new Date();
  const year = now.getFullYear();
  const candidates: Record<LegalExamType, Array<{ dateStr: string; label: string }>> = {
    HMGS: [
      { dateStr: `${year}-04-26`, label: `${year} HMGS-1 (Nisan)` },
      { dateStr: `${year}-09-27`, label: `${year} HMGS-2 (Eylül)` },
      { dateStr: `${year + 1}-04-25`, label: `${year + 1} HMGS-1 (Nisan)` },
      { dateStr: `${year + 1}-09-26`, label: `${year + 1} HMGS-2 (Eylül)` }
    ],
    IYOS: [
      { dateStr: `${year}-09-27`, label: `${year} İYÖS (Eylül)` },
      { dateStr: `${year + 1}-09-26`, label: `${year + 1} İYÖS (Eylül)` }
    ],
    HAKIMLIK: [
      { dateStr: `${year}-12-20`, label: `${year} Adli & İdari Hakimlik` },
      { dateStr: `${year + 1}-12-19`, label: `${year + 1} Adli & İdari Hakimlik` }
    ],
    KPSS: [
      { dateStr: `${year}-07-26`, label: `${year} KPSS A Grubu Hukuk` },
      { dateStr: `${year + 1}-07-25`, label: `${year + 1} KPSS A Grubu Hukuk` }
    ]
  };
  const todayKey = getLocalDateKey(now);
  const found = candidates[exam].find((c) => c.dateStr > todayKey);
  return found || candidates[exam][candidates[exam].length - 1];
}

export function getCountdownDays(targetDateStr: string): number {
  const now = new Date();
  const target = new Date(`${targetDateStr}T09:30:00`);
  const diffMs = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function createDefaultLegalStudyState(): LegalStudyState {
  const defaultExam = getDefaultUpcomingExamDate('HMGS');
  return {
    theme: 'light',
    soundEnabled: true,
    targetExam: 'HMGS',
    targetExamDate: defaultExam.dateStr,
    dailyTarget: 30,
    todayDateKey: getLocalDateKey(),
    todaySolvedCount: 0,
    streakDays: 1,
    studySecondsByDate: {},
    vakaAnswers: {},
    spotAnswers: {},
    bookmarkedVakaIds: {},
    bookmarkedSpotIds: {},
    examHistory: []
  };
}

export function loadLegalStudyState(): LegalStudyState {
  const def = createDefaultLegalStudyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return def;
    const parsed = JSON.parse(raw) as Partial<LegalStudyState>;
    const today = getLocalDateKey();
    let streak = typeof parsed.streakDays === 'number' ? parsed.streakDays : 1;
    let todayCount = typeof parsed.todaySolvedCount === 'number' ? parsed.todaySolvedCount : 0;

    if (parsed.todayDateKey && parsed.todayDateKey !== today) {
      const prev = new Date(`${parsed.todayDateKey}T00:00:00`);
      const curr = new Date(`${today}T00:00:00`);
      const dayDiff = Math.round((curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
      if (dayDiff === 1 && todayCount > 0) {
        streak += 1;
      } else if (dayDiff > 1) {
        streak = 1;
      }
      todayCount = 0;
    }

    const exam: LegalExamType = parsed.targetExam || 'HMGS';
    const targetDate =
      parsed.targetExamDate && parsed.targetExamDate > today
        ? parsed.targetExamDate
        : getDefaultUpcomingExamDate(exam).dateStr;

    return {
      ...def,
      ...parsed,
      targetExam: exam,
      targetExamDate: targetDate,
      todayDateKey: today,
      todaySolvedCount: todayCount,
      streakDays: Math.max(1, streak),
      vakaAnswers: parsed.vakaAnswers && typeof parsed.vakaAnswers === 'object' ? parsed.vakaAnswers : {},
      spotAnswers: parsed.spotAnswers && typeof parsed.spotAnswers === 'object' ? parsed.spotAnswers : {},
      bookmarkedVakaIds:
        parsed.bookmarkedVakaIds && typeof parsed.bookmarkedVakaIds === 'object' ? parsed.bookmarkedVakaIds : {},
      bookmarkedSpotIds:
        parsed.bookmarkedSpotIds && typeof parsed.bookmarkedSpotIds === 'object' ? parsed.bookmarkedSpotIds : {},
      studySecondsByDate:
        parsed.studySecondsByDate && typeof parsed.studySecondsByDate === 'object' ? parsed.studySecondsByDate : {},
      examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : []
    };
  } catch {
    return def;
  }
}

export function saveLegalStudyState(state: LegalStudyState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage quota errors
  }
}

export function getTotalSolvedCount(state: LegalStudyState): number {
  return Object.keys(state.vakaAnswers).length + Object.keys(state.spotAnswers).length;
}
