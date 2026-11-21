import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BarChart3,
  CheckSquare,
  Crown,
  Home,
  Moon,
  Scale,
  ShieldCheck,
  Sun,
  Timer,
  Zap
} from 'lucide-react';
import {
  LegalBranchId,
  LegalExamType,
  LegalSpotCard,
  LegalVakaQuestion,
  OptionLetter
} from './types/legalEngine';
import {
  LegalExamAttempt,
  LegalStudyState,
  createDefaultLegalStudyState,
  getDefaultUpcomingExamDate,
  getLocalDateKey,
  getTotalSolvedCount,
  loadLegalStudyState,
  saveLegalStudyState
} from './services/legalStudyStorage';
import {
  LiveProPrices,
  PRO_MONTHLY_PRICE_LABEL,
  PRO_SIXMONTH_PRICE_LABEL,
  PRO_WEEKLY_PRICE_LABEL,
  loadPersistedProStatus,
  requestNativeEntitlementCheck,
  savePersistedProStatus,
  syncNativeTheme,
  triggerHaptic
} from './services/nativeBridge';
import { AnaSayfaScreen, LegalTabId, QueueBasket } from './components/AnaSayfaScreen';
import { VakaTestScreen } from './components/VakaTestScreen';
import { DogruYanlisScreen } from './components/DogruYanlisScreen';
import { DenemeSinavScreen } from './components/DenemeSinavScreen';
import { AnalizScreen } from './components/AnalizScreen';
import { PaywallModal } from './components/PaywallModal';

const NAV_ITEMS: Array<{ id: LegalTabId; label: string; icon: React.ReactNode }> = [
  { id: 'home', label: 'Ana Sayfa', icon: <Home className="w-5 h-5" /> },
  { id: 'vaka', label: '5 Şıklı Test', icon: <CheckSquare className="w-5 h-5" /> },
  { id: 'spot', label: 'Doğru/Yanlış', icon: <Zap className="w-5 h-5" /> },
  { id: 'deneme', label: 'Deneme & Atlas', icon: <Timer className="w-5 h-5" /> },
  { id: 'analiz', label: 'Analiz & Ayar', icon: <BarChart3 className="w-5 h-5" /> }
];

export function App() {
  const [studyState, setStudyState] = useState<LegalStudyState>(() => loadLegalStudyState());
  const [activeTab, setActiveTab] = useState<LegalTabId>('home');
  const [isPro, setIsPro] = useState<boolean>(() => loadPersistedProStatus());
  const [prices, setPrices] = useState<LiveProPrices>({
    weekly: PRO_WEEKLY_PRICE_LABEL,
    monthly: PRO_MONTHLY_PRICE_LABEL,
    sixmonths: PRO_SIXMONTH_PRICE_LABEL
  });

  const [paywallOpen, setPaywallOpen] = useState<boolean>(false);
  const [paywallReason, setPaywallReason] = useState<string | undefined>(undefined);

  // Jump state when tapping cards on Home
  const [jumpBasket, setJumpBasket] = useState<QueueBasket>('unsolved');
  const [jumpBranch, setJumpBranch] = useState<'ALL' | LegalBranchId>('ALL');
  const [jumpExam, setJumpExam] = useState<'ALL' | LegalExamType>('ALL');

  const latestRef = useRef(studyState);
  latestRef.current = studyState;

  // Debounced persistence + background flush
  useEffect(() => {
    const t = window.setTimeout(() => saveLegalStudyState(latestRef.current), 350);
    return () => window.clearTimeout(t);
  }, [studyState]);

  useEffect(() => {
    const flush = () => saveLegalStudyState(latestRef.current);
    const onVis = () => {
      if (document.hidden) flush();
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('pagehide', flush);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pagehide', flush);
    };
  }, []);

  // Theme sync (HTML class + native iOS chrome)
  useEffect(() => {
    const isDark = studyState.theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    syncNativeTheme(studyState.theme);
  }, [studyState.theme]);

  // Native iOS StoreKit entitlement + live subscription price sync
  useEffect(() => {
    requestNativeEntitlementCheck();

    const onProStatus = (e: Event) => {
      const detail = (e as CustomEvent<Record<string, string>>).detail;
      if (detail?.unlocked === 'true') {
        setIsPro(true);
        savePersistedProStatus(true);
      }
    };

    const onProPrice = (e: Event) => {
      const detail = (e as CustomEvent<Record<string, string>>).detail;
      if (!detail) return;
      setPrices((prev) => ({
        weekly: detail.weeklyDisplayPrice || prev.weekly,
        monthly: detail.monthlyDisplayPrice || prev.monthly,
        sixmonths: detail.sixMonthDisplayPrice || prev.sixmonths
      }));
    };

    const onNativeNav = (e: Event) => {
      const detail = (e as CustomEvent<Record<string, string>>).detail;
      if (!detail) return;
      if (detail.tab === 'vaka' || detail.tab === 'antrenman') setActiveTab('vaka');
      else if (detail.tab === 'spot') setActiveTab('spot');
      else if (detail.tab === 'deneme') setActiveTab('deneme');
      else if (detail.tab === 'analiz') setActiveTab('analiz');
    };

    window.addEventListener('hmgs:proStatus', onProStatus);
    window.addEventListener('hmgs:proPrice', onProPrice);
    window.addEventListener('hmgs:nativeNavigation', onNativeNav);
    return () => {
      window.removeEventListener('hmgs:proStatus', onProStatus);
      window.removeEventListener('hmgs:proPrice', onProPrice);
      window.removeEventListener('hmgs:nativeNavigation', onNativeNav);
    };
  }, []);

  const totalSolvedCount = useMemo(() => getTotalSolvedCount(studyState), [studyState]);

  const handleOpenPaywall = useCallback((reason?: string) => {
    setPaywallReason(reason);
    setPaywallOpen(true);
  }, []);

  const handleUnlockPro = useCallback(() => {
    setIsPro(true);
    savePersistedProStatus(true);
  }, []);

  const handleSelectExam = useCallback((exam: LegalExamType) => {
    const nextDate = getDefaultUpcomingExamDate(exam).dateStr;
    setStudyState((prev) => ({
      ...prev,
      targetExam: exam,
      targetExamDate: nextDate
    }));
  }, []);

  const handleNavigateTab = useCallback(
    (
      tab: LegalTabId,
      options?: {
        basket?: QueueBasket;
        branchId?: 'ALL' | LegalBranchId;
        examFilter?: 'ALL' | LegalExamType;
      }
    ) => {
      if (options?.basket) setJumpBasket(options.basket);
      if (options?.branchId !== undefined) setJumpBranch(options.branchId);
      if (options?.examFilter !== undefined) setJumpExam(options.examFilter);
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleRecordVaka = useCallback(
    (q: LegalVakaQuestion, selectedOption: OptionLetter, isCorrect: boolean) => {
      const today = getLocalDateKey();
      setStudyState((prev) => {
        const isNew = !prev.vakaAnswers[q.id];
        return {
          ...prev,
          todayDateKey: today,
          todaySolvedCount: prev.todayDateKey === today ? prev.todaySolvedCount + (isNew ? 1 : 0) : 1,
          vakaAnswers: {
            ...prev.vakaAnswers,
            [q.id]: {
              selectedOption,
              isCorrect,
              answeredAt: Date.now(),
              branchId: q.branchId
            }
          }
        };
      });
    },
    []
  );

  const handleRecordSpot = useCallback(
    (card: LegalSpotCard, userChoseTrue: boolean, isCorrect: boolean) => {
      const today = getLocalDateKey();
      setStudyState((prev) => {
        const isNew = !prev.spotAnswers[card.id];
        return {
          ...prev,
          todayDateKey: today,
          todaySolvedCount: prev.todayDateKey === today ? prev.todaySolvedCount + (isNew ? 1 : 0) : 1,
          spotAnswers: {
            ...prev.spotAnswers,
            [card.id]: {
              userChoseTrue,
              isCorrect,
              answeredAt: Date.now(),
              branchId: card.branchId
            }
          }
        };
      });
    },
    []
  );

  const handleToggleVakaBookmark = useCallback((id: string) => {
    setStudyState((prev) => {
      const next = { ...prev.bookmarkedVakaIds };
      if (next[id]) delete next[id];
      else next[id] = true;
      return { ...prev, bookmarkedVakaIds: next };
    });
  }, []);

  const handleToggleSpotBookmark = useCallback((id: string) => {
    setStudyState((prev) => {
      const next = { ...prev.bookmarkedSpotIds };
      if (next[id]) delete next[id];
      else next[id] = true;
      return { ...prev, bookmarkedSpotIds: next };
    });
  }, []);

  const handleSaveExamAttempt = useCallback((attempt: LegalExamAttempt) => {
    setStudyState((prev) => ({
      ...prev,
      examHistory: [attempt, ...prev.examHistory].slice(0, 50)
    }));
  }, []);

  const handleResetAll = useCallback(() => {
    const clean = createDefaultLegalStudyState();
    clean.theme = studyState.theme;
    setStudyState(clean);
    saveLegalStudyState(clean);
  }, [studyState.theme]);

  return (
    <div className="min-h-screen bg-[#F6F7FB] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 flex flex-col lg:flex-row">
      {/* Desktop / iPad Landscape Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-[#0D1322] border-r border-slate-200/80 dark:border-slate-800 p-4 justify-between z-30">
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 px-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
              <Scale className="w-5 h-5 text-amber-300" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-black text-sm leading-tight truncate">
                HMGS • İYÖS • Hakimlik
              </div>
              <div className="text-[10.5px] font-bold text-indigo-600 dark:text-indigo-400">
                33.000+ Hukuk Soru Bankası
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setActiveTab(item.id);
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-2xl text-xs font-extrabold flex items-center gap-3 transition cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="space-y-2.5">
          {!isPro ? (
            <button
              type="button"
              onClick={() => handleOpenPaywall()}
              className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <Crown className="w-4 h-4" /> PRO’ya Geç ({prices.monthly}/Ay)
            </button>
          ) : (
            <div className="w-full p-2.5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-extrabold flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> PRO Erişim Aktif
            </div>
          )}

          <button
            type="button"
            onClick={() =>
              setStudyState((p) => ({ ...p, theme: p.theme === 'dark' ? 'light' : 'dark' }))
            }
            className="w-full py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {studyState.theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            <span>{studyState.theme === 'dark' ? 'Gündüz Modu' : 'Gece Modu'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Compact Sticky Top Header (Mobile & iPad) */}
        <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#0D1322]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-3.5 sm:px-6 py-2.5 pt-[max(0.65rem,env(safe-area-inset-top))] flex items-center justify-between gap-2 lg:hidden">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4 text-amber-300" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-black text-xs sm:text-sm leading-tight truncate">
                HMGS • İYÖS • Hakimlik
              </div>
              <div className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 truncate">
                KPSS Hukuk • 33.000+ Soru
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() =>
                setStudyState((p) => ({ ...p, theme: p.theme === 'dark' ? 'light' : 'dark' }))
              }
              aria-label="Tema Değiştir"
              className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer"
            >
              {studyState.theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {isPro ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[10.5px] font-extrabold">
                <ShieldCheck className="w-3.5 h-3.5" /> PRO
              </span>
            ) : (
              <button
                type="button"
                onClick={() => handleOpenPaywall()}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10.5px] font-extrabold shadow-xs cursor-pointer"
              >
                <Crown className="w-3.5 h-3.5" /> PRO
              </button>
            )}
          </div>
        </header>

        {/* Main Scrollable Viewport */}
        <main className="flex-1 w-full max-w-4xl mx-auto px-3.5 sm:px-6 py-4 pb-24 lg:pb-10">
          {activeTab === 'home' && (
            <AnaSayfaScreen
              studyState={studyState}
              isPro={isPro}
              totalSolvedCount={totalSolvedCount}
              prices={prices}
              onSelectExam={handleSelectExam}
              onNavigateTab={handleNavigateTab}
              onOpenPaywall={handleOpenPaywall}
            />
          )}

          {activeTab === 'vaka' && (
            <VakaTestScreen
              studyState={studyState}
              isPro={isPro}
              totalSolvedCount={totalSolvedCount}
              initialBasket={jumpBasket}
              initialBranchId={jumpBranch}
              initialExamFilter={jumpExam}
              onRecordAnswer={handleRecordVaka}
              onToggleBookmark={handleToggleVakaBookmark}
              onOpenPaywall={handleOpenPaywall}
            />
          )}

          {activeTab === 'spot' && (
            <DogruYanlisScreen
              studyState={studyState}
              isPro={isPro}
              totalSolvedCount={totalSolvedCount}
              initialBasket={jumpBasket}
              initialBranchId={jumpBranch}
              initialExamFilter={jumpExam}
              onRecordSpot={handleRecordSpot}
              onToggleBookmark={handleToggleSpotBookmark}
              onOpenPaywall={handleOpenPaywall}
            />
          )}

          {activeTab === 'deneme' && (
            <DenemeSinavScreen
              studyState={studyState}
              isPro={isPro}
              onSaveAttempt={handleSaveExamAttempt}
              onRecordVaka={handleRecordVaka}
              onOpenPaywall={handleOpenPaywall}
            />
          )}

          {activeTab === 'analiz' && (
            <AnalizScreen
              studyState={studyState}
              isPro={isPro}
              onUpdateState={setStudyState}
              onUnlockPro={handleUnlockPro}
              onOpenPaywall={() => handleOpenPaywall()}
              onResetAll={handleResetAll}
            />
          )}
        </main>
      </div>

      {/* Mobile / iPad Portrait Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 dark:bg-[#0D1322]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 px-1.5 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] grid grid-cols-5 gap-1">
        {NAV_ITEMS.map((item) => {
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                triggerHaptic('selection');
                setActiveTab(item.id);
              }}
              className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold transition cursor-pointer ${
                active
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {item.icon}
              <span className="mt-0.5 truncate max-w-full">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Multi-Plan Subscription Paywall Modal */}
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        isPro={isPro}
        onUnlockPro={handleUnlockPro}
        solvedCount={totalSolvedCount}
        triggerReason={paywallReason}
        prices={prices}
      />
    </div>
  );
}

export default App;
