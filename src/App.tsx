import React, { useState, useEffect, useMemo } from 'react';
import {
  Home,
  Scale,
  Layers,
  Timer,
  BookMarked,
  BarChart3,
  Settings,
  Flame
} from 'lucide-react';
import {
  FilterPillCategory,
  MistakeVaultEntry,
  SM2_INTERVAL_DAYS,
  TrapCard,
  UserStudyStats,
  getCategoryForBranch
} from './types/hmgs';
import { INITIAL_HMGS_CARDS } from './data/seedCards';
import { ALL_HMGS_STATUTORY_RULES } from './data/hmgsStatuteRepository';
import { AntrenmanScreen } from './components/AntrenmanScreen';
import { AnalizScreen } from './components/AnalizScreen';
import { DenemeSinavScreen } from './components/DenemeSinavScreen';
import { TuzakDefterimScreen, DefterimSubFilter } from './components/TuzakDefterimScreen';
import { AyarlarScreen, AppSettings, FontScale } from './components/AyarlarScreen';
import { GirisScreen } from './components/GirisScreen';

type ActiveTab = 'home' | 'antrenman' | 'deneme' | 'analiz' | 'defterim' | 'ayarlar';

const STORAGE_KEYS = {
  VAULT: 'hmgs_vault_v6',
  STATS: 'hmgs_stats_v6',
  SOLVED: 'hmgs_solved_v6',
  THEME: 'hmgs_theme_v6',
  SETTINGS: 'hmgs_settings_v1',
  PROFILE: 'hmgs_profile_v1'
};

const FONT_PERCENT: Record<FontScale, string> = { sm: '93.75%', md: '100%', lg: '106.25%' };

function getTodayDateKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function createCleanStudyStats(): UserStudyStats {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    dailyGoalTarget: 20,
    todaySolvedCount: 0,
    lastStudyDate: getTodayDateKey(),
    streakDays: 1,
    targetExamDate: undefined,
    dailyHistory: {},
    byCategory: {
      'HMK': { answered: 0, correct: 0 },
      'CMK & TCK': { answered: 0, correct: 0 },
      'İdare & İYUK': { answered: 0, correct: 0 },
      'Anayasa': { answered: 0, correct: 0 },
      'Medeni & Borçlar': { answered: 0, correct: 0 },
      'Ticaret & İcra': { answered: 0, correct: 0 },
      'İş & Vergi & Avukatlık': { answered: 0, correct: 0 }
    }
  };
}

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Deneme sınavı soruları ile antrenman soruları tamamen ayrıdır.
 * Her branşın kuralları sabit bir sırayla dizilir; her 3 kuraldan biri (~%33) Denemeye ayrılır.
 * Bir kuralın tüm varyantları aynı havuzda kalır; ayrım kalıcıdır (ilerleme kaydı bozulmaz).
 */
function splitPools(all: TrapCard[]): { practiceCards: TrapCard[]; examCards: TrapCard[] } {
  const baseOf = (id: string) => id.replace(/-(true|trap1|trap2|cross)$/, '');
  const byBranch = new Map<string, Set<string>>();
  for (const c of all) {
    const key = getCategoryForBranch(c.branch);
    if (!byBranch.has(key)) byBranch.set(key, new Set());
    byBranch.get(key)!.add(baseOf(c.id));
  }
  const examRules = new Set<string>();
  byBranch.forEach((set) => {
    [...set]
      .sort((a, b) => hashStr(a) - hashStr(b) || a.localeCompare(b))
      .forEach((id, i) => {
        if (i % 3 === 2) examRules.add(id);
      });
  });
  const practiceCards: TrapCard[] = [];
  const examCards: TrapCard[] = [];
  for (const c of all) (examRules.has(baseOf(c.id)) ? examCards : practiceCards).push(c);
  return { practiceCards, examCards };
}

function loadJson<T>(key: string, fallback: T, valid: (v: unknown) => boolean): T {
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (valid(parsed)) return parsed as T;
    }
  } catch {
    // ignore
  }
  return fallback;
}

function loadSettings(): AppSettings {
  const legacy = localStorage.getItem(STORAGE_KEYS.THEME);
  const base: AppSettings = {
    theme: legacy === 'light' ? 'light' : legacy === 'dark' ? 'dark' : 'system',
    fontScale: 'md',
    showHighlights: true,
    simpleMode: false,
    soundEnabled: true
  };
  return { ...base, ...loadJson<Partial<AppSettings>>(STORAGE_KEYS.SETTINGS, {}, (v) => !!v && typeof v === 'object') };
}

export function App() {
  // Her girişte anasayfayı göstermek için varsayılan sekme 'home'
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [defterimSubFilter, setDefterimSubFilter] = useState<DefterimSubFilter>('all');
  const [selectedFilter, setSelectedFilter] = useState<FilterPillCategory>('Tümü');
  const [settings, setSettings] = useState<AppSettings>(loadSettings);
  const [profile, setProfile] = useState<{ name: string } | null>(() =>
    loadJson<{ name: string } | null>(STORAGE_KEYS.PROFILE, null, (v) => !!v && typeof v === 'object')
  );
  const [systemDark, setSystemDark] = useState<boolean>(
    () => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  );

  const [cards] = useState<TrapCard[]>(() => INITIAL_HMGS_CARDS);
  const { practiceCards, examCards } = useMemo(() => splitPools(cards), [cards]);

  const [solvedCardMap, setSolvedCardMap] = useState<Record<string, boolean>>(() =>
    loadJson(STORAGE_KEYS.SOLVED, {}, (v) => !!v && typeof v === 'object' && !Array.isArray(v))
  );
  const [vaultEntries, setVaultEntries] = useState<MistakeVaultEntry[]>(() =>
    loadJson(STORAGE_KEYS.VAULT, [], Array.isArray)
  );
  const [stats, setStats] = useState<UserStudyStats>(() => {
    const parsed = loadJson<UserStudyStats | null>(
      STORAGE_KEYS.STATS,
      null,
      (v) => !!v && typeof v === 'object' && !!(v as UserStudyStats).byCategory
    );
    if (parsed) {
      const today = getTodayDateKey();
      const safeGoal = parsed.dailyGoalTarget > 100 || parsed.dailyGoalTarget < 5 ? 20 : parsed.dailyGoalTarget;
      const sanitized = { ...parsed, dailyGoalTarget: safeGoal };
      return parsed.lastStudyDate !== today
        ? { ...sanitized, todaySolvedCount: 0, lastStudyDate: today }
        : sanitized;
    }
    return createCleanStudyStats();
  });

  const [spacedRepetitionSessionIds, setSpacedRepetitionSessionIds] = useState<string[] | null>(null);

  // Tema: açık / koyu / sistem
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mq) return;
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Native iOS Home Screen Quick Actions & CoreSpotlight yönlendiricisi
  useEffect(() => {
    const onNativeNav = (event: Event) => {
      const detail = (event as CustomEvent<Record<string, string>>).detail;
      if (!detail) return;
      if (detail.category) {
        setSelectedCategory(detail.category as 'ALL' | StatuteCategory);
      }
      if (detail.tab) {
        setSpacedRepetitionSessionIds(null);
        setActiveTab(detail.tab as NavigationTab);
      }
    };
    window.addEventListener('hmgs:nativeNavigation', onNativeNav);
    return () => window.removeEventListener('hmgs:nativeNavigation', onNativeNav);
  }, []);

  const isDark = settings.theme === 'dark' || (settings.theme === 'system' && systemDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    document.documentElement.style.fontSize = FONT_PERCENT[settings.fontScale];
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#090D16' : '#F8FAFC');
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [isDark, settings]);

  // Tutarlılık: yanlış cevaplanmış ama yanlış kutusunda olmayan ya da artık var olmayan kartlar çözülmüş sayılmaz.
  useEffect(() => {
    const inVault = new Set(vaultEntries.map((v) => v.cardId));
    const valid = new Set(cards.map((c) => c.id));
    let changed = false;
    const next: Record<string, boolean> = {};
    for (const [id, ok] of Object.entries(solvedCardMap)) {
      if (!valid.has(id) || (ok === false && !inVault.has(id))) {
        changed = true;
        continue;
      }
      next[id] = ok;
    }
    if (changed) setSolvedCardMap(next);
  }, [vaultEntries, solvedCardMap, cards]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SOLVED, JSON.stringify(solvedCardMap));
  }, [solvedCardMap]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.VAULT, JSON.stringify(vaultEntries));
  }, [vaultEntries]);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  }, [stats]);

  // Sadece kullanıcının manuel olarak kaydettiği kartlar
  const bookmarkedCardIds = useMemo(
    () => new Set(vaultEntries.filter((v) => !!v.manualBookmark).map((v) => v.cardId)),
    [vaultEntries]
  );
  const bookmarkedCount = bookmarkedCardIds.size;

  const dueTodayCount = useMemo(
    () =>
      vaultEntries.filter((v) => v.isDueToday || new Date(v.nextReviewDate).getTime() <= Date.now())
        .length,
    [vaultEntries]
  );

  const caughtPercentage = useMemo(() => {
    if (stats.totalAnswered === 0) return 0;
    return Math.round((stats.totalCorrect / stats.totalAnswered) * 100);
  }, [stats]);

  const mostMissedAreaLabel = useMemo(() => {
    if (vaultEntries.length === 0) return 'Kayıtlı Hata Yok';
    const counts: Record<string, number> = {};
    for (const entry of vaultEntries) {
      const card = cards.find((c) => c.id === entry.cardId);
      if (card) {
        const key = `${card.branch} ${card.trapCategory.replace(' Tuzağı', '')}`;
        counts[key] = (counts[key] || 0) + entry.missCount;
      }
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Kayıtlı Hata Yok';
  }, [vaultEntries, cards]);

  const handleAnswerCard = (card: TrapCard, _userSaidCorrect: boolean, answeredRight: boolean) => {
    const categoryKey = getCategoryForBranch(card.branch);
    setSolvedCardMap((prev) => ({ ...prev, [card.id]: answeredRight }));

    setStats((prev) => {
      const prevCat = prev.byCategory[categoryKey] || { answered: 0, correct: 0 };
      const today = getTodayDateKey();
      const isNewDay = prev.lastStudyDate !== today;
      const history = { ...(prev.dailyHistory || {}) };
      history[today] = (history[today] || 0) + 1;

      return {
        ...prev,
        totalAnswered: prev.totalAnswered + 1,
        totalCorrect: prev.totalCorrect + (answeredRight ? 1 : 0),
        todaySolvedCount: isNewDay ? 1 : prev.todaySolvedCount + 1,
        lastStudyDate: today,
        streakDays: isNewDay ? prev.streakDays + 1 : prev.streakDays,
        dailyHistory: history,
        byCategory: {
          ...prev.byCategory,
          [categoryKey]: {
            answered: prevCat.answered + 1,
            correct: prevCat.correct + (answeredRight ? 1 : 0)
          }
        }
      };
    });

    if (!answeredRight) {
      setVaultEntries((prev) => {
        const existingIndex = prev.findIndex((item) => item.cardId === card.id);
        const nowIso = new Date().toISOString();
        const nextDate = new Date(Date.now() + 86400000 * SM2_INTERVAL_DAYS[0]).toISOString();
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            lastReviewedAt: nowIso,
            nextReviewDate: nextDate,
            intervalDays: 1,
            repetitionStep: 0,
            missCount: updated[existingIndex].missCount + 1,
            isDueToday: true
          };
          return updated;
        }
        return [
          {
            cardId: card.id,
            addedAt: nowIso,
            lastReviewedAt: nowIso,
            nextReviewDate: nextDate,
            intervalDays: 1,
            repetitionStep: 0,
            missCount: 1,
            isDueToday: true
          },
          ...prev
        ];
      });
    } else {
      setVaultEntries((prev) => {
        const idx = prev.findIndex((item) => item.cardId === card.id);
        if (idx === -1) return prev;
        const current = prev[idx];
        const nextStep = Math.min(3, current.repetitionStep + 1);
        const nextInterval = SM2_INTERVAL_DAYS[nextStep];
        const updated = [...prev];
        updated[idx] = {
          ...current,
          lastReviewedAt: new Date().toISOString(),
          nextReviewDate: new Date(Date.now() + 86400000 * nextInterval).toISOString(),
          intervalDays: nextInterval,
          repetitionStep: nextStep,
          isDueToday: false
        };
        return updated;
      });
    }
  };

  // Yanlış kutusundan çıkarılan ve en son YANLIŞ cevaplanmış kart tekrar "çözülmemiş" sayılır.
  const releaseSolvedIfWrong = (cardId: string) =>
    setSolvedCardMap((prev) => {
      if (prev[cardId] !== false) return prev;
      const next = { ...prev };
      delete next[cardId];
      return next;
    });

  const handleRemoveFromVault = (cardId: string) => {
    releaseSolvedIfWrong(cardId);
    setVaultEntries((prev) => prev.filter((item) => item.cardId !== cardId));
  };

  const handleResetSolvedCard = (cardId: string) => {
    setSolvedCardMap((prev) => {
      if (prev[cardId] === undefined) return prev;
      const next = { ...prev };
      delete next[cardId];
      return next;
    });
  };

  // Soru kaydetme / favori toggle
  const handleToggleBookmark = (cardId: string) => {
    setVaultEntries((prev) => {
      const idx = prev.findIndex((v) => v.cardId === cardId);
      if (idx >= 0) {
        const item = prev[idx];
        if (item.manualBookmark) {
          // Eğer önceden hata yapılmışsa listede kalsın ama bookmark işareti kalksın
          if (item.missCount > 0) {
            const next = [...prev];
            next[idx] = { ...item, manualBookmark: false };
            return next;
          }
          // Sadece bookmark olarak eklenmişse tamamen kaldır
          releaseSolvedIfWrong(cardId);
          return prev.filter((v) => v.cardId !== cardId);
        } else {
          // Hatalı soruydu, şimdi aynı zamanda kaydedilenlere de eklendi
          const next = [...prev];
          next[idx] = { ...item, manualBookmark: true };
          return next;
        }
      }

      // Defterde yoktu: manuel bookmark olarak ekle
      const nowIso = new Date().toISOString();
      return [
        {
          cardId,
          addedAt: nowIso,
          lastReviewedAt: nowIso,
          nextReviewDate: nowIso,
          intervalDays: 1,
          repetitionStep: 0,
          missCount: 0,
          isDueToday: false,
          manualBookmark: true
        },
        ...prev
      ];
    });
  };

  const handleSaveProfile = ({ name, goal }: { name: string; goal: number }) => {
    const cleanName = name.trim();
    const p = cleanName ? { name: cleanName } : null;
    setProfile(p);
    if (p) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(p));
    } else {
      localStorage.removeItem(STORAGE_KEYS.PROFILE);
    }
    setStats((prev) => ({
      ...prev,
      dailyGoalTarget: Math.min(100, Math.max(5, goal))
    }));
  };

  const handleUpdateDailyGoal = (newGoal: number) =>
    setStats((prev) => ({ ...prev, dailyGoalTarget: newGoal }));

  const handleResetStats = () => {
    setStats(createCleanStudyStats());
    setSolvedCardMap({});
    setVaultEntries([]);
  };

  const handleExportData = () => {
    const blob = new Blob(
      [JSON.stringify({ exportedAt: new Date().toISOString(), stats, solvedCardMap, vaultEntries }, null, 2)],
      { type: 'application/json' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hmgs-ilerleme-${getTodayDateKey()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (data: unknown): boolean => {
    if (!data || typeof data !== 'object') return false;
    const typed = data as { stats?: UserStudyStats; solvedCardMap?: Record<string, boolean>; vaultEntries?: MistakeVaultEntry[] };
    if (!typed.stats || !typed.solvedCardMap || !Array.isArray(typed.vaultEntries)) return false;

    setStats(typed.stats);
    setSolvedCardMap(typed.solvedCardMap);
    setVaultEntries(typed.vaultEntries);

    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(typed.stats));
    localStorage.setItem(STORAGE_KEYS.SOLVED, JSON.stringify(typed.solvedCardMap));
    localStorage.setItem(STORAGE_KEYS.VAULT, JSON.stringify(typed.vaultEntries));
    return true;
  };

  const handleStartPracticeWithCards = (cardIds: string[]) => {
    setSpacedRepetitionSessionIds(cardIds);
    setActiveTab('antrenman');
  };

  const handleSelectBranchFromDashboard = (branch: FilterPillCategory) => {
    setSpacedRepetitionSessionIds(null);
    setSelectedFilter(branch);
    setActiveTab('antrenman');
  };

  const handleNavigateFromHome = (
    tab: 'antrenman' | 'deneme' | 'analiz' | 'defterim' | 'ayarlar',
    subFilter: DefterimSubFilter = 'all'
  ) => {
    if (tab === 'defterim') {
      setDefterimSubFilter(subFilter);
    }
    setActiveTab(tab);
  };

  const dailyGoalPct = Math.min(
    100,
    Math.round((stats.todaySolvedCount / Math.max(1, stats.dailyGoalTarget)) * 100)
  );

  const desktopNavItems: Array<{
    id: ActiveTab;
    label: string;
    icon: React.FC<{ className?: string }>;
    badge?: number;
  }> = [
    { id: 'home', label: 'Anasayfa', icon: Home },
    { id: 'antrenman', label: 'Antrenman', icon: Layers },
    { id: 'deneme', label: 'Deneme', icon: Timer },
    {
      id: 'defterim',
      label: 'Defterim & Kayıtlar',
      icon: BookMarked,
      badge: dueTodayCount > 0 ? dueTodayCount : bookmarkedCount > 0 ? bookmarkedCount : undefined
    },
    { id: 'analiz', label: 'Analiz', icon: BarChart3 },
    { id: 'ayarlar', label: 'Ayarlar', icon: Settings }
  ];

  const mobileNavItems: Array<{
    id: ActiveTab;
    label: string;
    icon: React.FC<{ className?: string }>;
    badge?: number;
  }> = [
    { id: 'home', label: 'Anasayfa', icon: Home },
    { id: 'antrenman', label: 'Antrenman', icon: Layers },
    { id: 'deneme', label: 'Deneme', icon: Timer },
    {
      id: 'defterim',
      label: 'Defterim',
      icon: BookMarked,
      badge: dueTodayCount > 0 ? dueTodayCount : undefined
    },
    { id: 'analiz', label: 'Analiz', icon: BarChart3 }
  ];

  return (
    <div className="min-h-dvh w-full bg-[#F8FAFC] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex">
      {/* Masaüstü ve Geniş Tablet Kenar Çubuğu */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col justify-between border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1320] p-4 sticky top-0 h-dvh">
        <div className="space-y-6">
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            className="w-full flex items-center gap-3 px-1 text-left cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 group-hover:bg-indigo-500 text-white flex items-center justify-center transition-colors shadow-sm">
              <Scale className="w-5 h-5" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="font-display font-extrabold text-sm truncate">HMGS Tuzak Avcısı</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                {profile?.name ? `Merhaba, ${profile.name}` : `${cards.length} soru`}
              </div>
            </div>
          </button>

          <nav className="space-y-1" aria-label="Ana menü">
            {desktopNavItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (item.id === 'defterim') setDefterimSubFilter('all');
                    setActiveTab(item.id);
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    active
                      ? 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </span>
                  {item.badge !== undefined && (
                    <span className="min-w-5 h-5 px-1.5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Masaüstü Günlük Hedef & Seri Rozeti */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-600 dark:text-slate-300">Günlük hedef</span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400">
              {stats.todaySolvedCount}/{stats.dailyGoalTarget}
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div className="h-full bg-indigo-600 rounded-full transition-all" style={{ width: `${dailyGoalPct}%` }} />
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1 font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {stats.streakDays} gün
            </span>
            <span>Doğruluk %{caughtPercentage}</span>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobil & Küçük Tablet Üst Çubuk */}
        <header className="lg:hidden sticky top-0 z-30 bg-white/95 dark:bg-[#0D1320]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 pt-[env(safe-area-inset-top)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-2.5 min-w-0 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-sm sm:text-base truncate">HMGS Tuzak Avcısı</span>
            </button>

            <div className="flex items-center gap-2 shrink-0 text-xs font-semibold">
              <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                {stats.streakDays}
              </span>
              <span className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                {stats.todaySolvedCount}/{stats.dailyGoalTarget}
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('ayarlar')}
                title="Ayarlar"
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  activeTab === 'ayarlar'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Ana İçerik Konteyneri */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pt-5 sm:pt-7 pb-[calc(84px+env(safe-area-inset-bottom))] lg:pb-14">
          {activeTab === 'home' && (
            <GirisScreen
              profile={profile}
              stats={stats}
              cards={cards}
              totalCardsCount={cards.length}
              practiceCardsCount={practiceCards.length}
              examCardsCount={examCards.length}
              bookmarkedCount={bookmarkedCount}
              vaultCount={vaultEntries.length}
              dueTodayCount={dueTodayCount}
              onNavigateTab={handleNavigateFromHome}
              onSaveProfile={handleSaveProfile}
              onUpdateDailyGoal={handleUpdateDailyGoal}
              onStartSpecificCard={(cardId) => handleStartPracticeWithCards([cardId])}
            />
          )}

          {activeTab === 'antrenman' && (
            <AntrenmanScreen
              cards={practiceCards}
              solvedCardMap={solvedCardMap}
              selectedFilter={selectedFilter}
              onSelectFilter={setSelectedFilter}
              bookmarkedCardIds={bookmarkedCardIds}
              spacedRepetitionSessionIds={spacedRepetitionSessionIds}
              onExitSpacedRepetition={() => setSpacedRepetitionSessionIds(null)}
              onAnswerCard={handleAnswerCard}
              onToggleBookmark={handleToggleBookmark}
              onGoToExam={() => setActiveTab('deneme')}
              defaultShowHighlights={settings.showHighlights}
              simpleMode={settings.simpleMode}
              soundEnabled={settings.soundEnabled}
            />
          )}

          {activeTab === 'deneme' && (
            <DenemeSinavScreen
              cards={examCards}
              solvedCardMap={solvedCardMap}
              onRecordAnswer={(card, isUserRight) =>
                handleAnswerCard(card, isUserRight ? card.isCorrect : !card.isCorrect, isUserRight)
              }
            />
          )}

          {activeTab === 'analiz' && (
            <AnalizScreen
              cards={cards}
              solvedCardMap={solvedCardMap}
              stats={stats}
              dueTodayCount={dueTodayCount}
              onSelectBranchForStudy={handleSelectBranchFromDashboard}
              onStartSpacedRepetitionAll={() =>
                handleStartPracticeWithCards(vaultEntries.map((v) => v.cardId))
              }
              onUpdateDailyGoal={handleUpdateDailyGoal}
              onResetStats={handleResetStats}
              onGoToExam={() => setActiveTab('deneme')}
            />
          )}

          {activeTab === 'defterim' && (
            <TuzakDefterimScreen
              cards={cards}
              vaultEntries={vaultEntries}
              solvedCardMap={solvedCardMap}
              caughtPercentage={caughtPercentage}
              dueTodayCount={dueTodayCount}
              mostMissedAreaLabel={mostMissedAreaLabel}
              initialViewMode={defterimSubFilter}
              onStartSpacedRepetition={handleStartPracticeWithCards}
              onRemoveFromVault={handleRemoveFromVault}
              onResetSolvedCard={handleResetSolvedCard}
            />
          )}

          {activeTab === 'ayarlar' && (
            <AyarlarScreen
              settings={settings}
              onChange={setSettings}
              dailyGoal={stats.dailyGoalTarget}
              onUpdateDailyGoal={handleUpdateDailyGoal}
              onResetAll={handleResetStats}
              onExportData={handleExportData}
              onImportData={handleImportData}
              totalCards={cards.length}
              totalRules={ALL_HMGS_STATUTORY_RULES.length}
              profileName={profile?.name ?? ''}
              targetExamDate={stats.targetExamDate}
              onUpdateTargetExamDate={(date) => setStats((prev) => ({ ...prev, targetExamDate: date }))}
              onSwitchProfile={() => setActiveTab('home')}
            />
          )}
        </main>

        {/* Mobil Alt Gezinme Barı (Tam Genişlik, Güvenli Alan Destekli, 5 Sütun) */}
        <nav
          aria-label="Mobil Ana Menü"
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#0D1320]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-[env(safe-area-inset-bottom)]"
        >
          <div className="max-w-md mx-auto grid grid-cols-5">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (item.id === 'defterim') setDefterimSubFilter('all');
                    setActiveTab(item.id);
                  }}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex flex-col items-center justify-center gap-1 h-[56px] min-w-0 cursor-pointer transition-colors ${
                    active
                      ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                      : 'text-slate-500 dark:text-slate-400 active:text-slate-900 dark:active:text-white'
                  }`}
                >
                  {active && (
                    <span className="absolute top-0 inset-x-3 h-0.5 rounded-b-full bg-indigo-600 dark:bg-indigo-400" />
                  )}
                  <span className="relative">
                    <Icon className="w-5 h-5" />
                    {item.badge !== undefined && (
                      <span className="absolute -top-1.5 -right-2.5 min-w-4 h-4 px-1 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                        {item.badge > 99 ? '99+' : item.badge}
                      </span>
                    )}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold leading-none truncate max-w-full px-0.5">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
