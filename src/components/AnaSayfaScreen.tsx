import React, { useMemo } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckSquare,
  ChevronRight,
  Crown,
  Flame,
  RotateCcw,
  Scale,
  Sparkles,
  Target,
  Timer,
  Zap
} from 'lucide-react';
import {
  LEGAL_BRANCHES,
  LEGAL_OSYM_TWIN_QUESTIONS,
  LEGAL_SPOT_CARDS,
  LEGAL_VAKA_QUESTIONS,
  STATIC_LEGAL_BRANCH_COUNTS,
  TOTAL_INTERACTIVE_LEGAL_ITEMS
} from '../data/legalQuestionRepository';
import { LegalBranchId, LegalExamType } from '../types/legalEngine';
import {
  LegalStudyState,
  getCountdownDays,
  getDefaultUpcomingExamDate
} from '../services/legalStudyStorage';
import { FREE_QUESTION_LIMIT, LiveProPrices, triggerHaptic } from '../services/nativeBridge';

export type LegalTabId = 'home' | 'vaka' | 'spot' | 'deneme' | 'analiz';
export type QueueBasket = 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';

interface AnaSayfaScreenProps {
  studyState: LegalStudyState;
  isPro: boolean;
  totalSolvedCount: number;
  prices: LiveProPrices;
  onSelectExam: (exam: LegalExamType) => void;
  onNavigateTab: (
    tab: LegalTabId,
    options?: {
      basket?: QueueBasket;
      branchId?: 'ALL' | LegalBranchId;
      examFilter?: 'ALL' | LegalExamType;
    }
  ) => void;
  onOpenPaywall: (reason?: string) => void;
}

const EXAM_TABS: Array<{ id: LegalExamType; label: string; desc: string }> = [
  { id: 'HMGS', label: 'HMGS', desc: 'Avukatlık, Noterlik & Hakimlik Ön Sınavı' },
  { id: 'IYOS', label: 'İYÖS', desc: 'İdari Yargı Ön Sınavı' },
  { id: 'HAKIMLIK', label: 'Hakimlik', desc: 'Adli & İdari Hakim/Savcı Yardımcılığı' },
  { id: 'KPSS', label: 'KPSS Hukuk', desc: 'KPSS A Grubu & Kurum Hukuk Sınavları' }
];

export const AnaSayfaScreen: React.FC<AnaSayfaScreenProps> = React.memo(
  ({
    studyState,
    isPro,
    totalSolvedCount,
    prices,
    onSelectExam,
    onNavigateTab,
    onOpenPaywall
  }) => {
    const summary = useMemo(() => {
      const vakaEntries = Object.values(studyState.vakaAnswers);
      const spotEntries = Object.values(studyState.spotAnswers);
      const vakaCorrect = vakaEntries.filter((x) => x.isCorrect).length;
      const spotCorrect = spotEntries.filter((x) => x.isCorrect).length;
      const vakaWrong = vakaEntries.length - vakaCorrect;
      const spotWrong = spotEntries.length - spotCorrect;
      const totalCorrect = vakaCorrect + spotCorrect;
      const accuracy =
        totalSolvedCount > 0 ? Math.round((totalCorrect / totalSolvedCount) * 100) : 0;

      return {
        vakaWrong,
        spotWrong,
        totalWrong: vakaWrong + spotWrong,
        totalCorrect,
        accuracy
      };
    }, [studyState.vakaAnswers, studyState.spotAnswers, totalSolvedCount]);

    const daysLeft = getCountdownDays(studyState.targetExamDate);
    const examLabel = getDefaultUpcomingExamDate(studyState.targetExam).label;
    const dailyPct = Math.min(
      100,
      Math.round((studyState.todaySolvedCount / Math.max(1, studyState.dailyTarget)) * 100)
    );

    const totalFmt = TOTAL_INTERACTIVE_LEGAL_ITEMS.toLocaleString('tr-TR');
    const vakaFmt = LEGAL_VAKA_QUESTIONS.length.toLocaleString('tr-TR');
    const spotFmt = LEGAL_SPOT_CARDS.length.toLocaleString('tr-TR');
    const twinFmt = LEGAL_OSYM_TWIN_QUESTIONS.length.toLocaleString('tr-TR');

    const examBranches = useMemo(
      () => LEGAL_BRANCHES.filter((b) => b.exams.includes(studyState.targetExam)),
      [studyState.targetExam]
    );

    return (
      <div className="space-y-4">
        {/* Live Hero Card with Multi-Exam Switcher & Countdown */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-900 p-4 sm:p-6 text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-12 w-40 h-40 rounded-full bg-amber-400/15 blur-2xl pointer-events-none" />

          {/* Exam Target Selector Pills */}
          <div className="relative flex flex-wrap items-center gap-1.5 mb-3.5">
            {EXAM_TABS.map((ex) => {
              const active = studyState.targetExam === ex.id;
              return (
                <button
                  key={ex.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    onSelectExam(ex.id);
                  }}
                  className={`px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide transition cursor-pointer ${
                    active
                      ? 'bg-white text-indigo-700 shadow-sm'
                      : 'bg-white/15 text-indigo-100 hover:bg-white/25'
                  }`}
                >
                  {ex.label}
                </button>
              );
            })}
          </div>

          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-200">
                <Scale className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {EXAM_TABS.find((e) => e.id === studyState.targetExam)?.desc}
                </span>
              </div>
              <h1 className="font-display font-black text-xl sm:text-2xl tracking-tight leading-tight">
                {totalFmt}+ Doğrulanmış Hukuk Sorusu
              </h1>
              <p className="text-xs text-indigo-100/90">
                14 branş • 2026 güncel mevzuat (8. & 9. Yargı Paketi) • %100 çevrimdışı
              </p>
            </div>

            {/* Exam Countdown Chip */}
            <div className="shrink-0 rounded-2xl bg-black/25 backdrop-blur-sm border border-white/15 px-3 py-2 text-center min-w-[78px]">
              <div className="text-[10px] font-bold text-indigo-200 uppercase flex items-center justify-center gap-1">
                <Calendar className="w-3 h-3" /> Kalan
              </div>
              <div className="font-display font-black text-xl leading-none mt-1 text-amber-300">
                {daysLeft}
              </div>
              <div className="text-[9.5px] font-semibold text-indigo-100 mt-0.5">Gün</div>
            </div>
          </div>

          {/* Daily Goal & Streak */}
          <div className="relative mt-4 pt-3 border-t border-white/15 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 text-indigo-100">
                <Target className="w-3.5 h-3.5 text-amber-300" />
                <span>
                  Bugün: {studyState.todaySolvedCount}/{studyState.dailyTarget} Soru ({examLabel})
                </span>
              </span>
              <span className="inline-flex items-center gap-1 text-amber-300 shrink-0">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>{studyState.streakDays} Gün</span>
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-300 via-yellow-300 to-emerald-300 transition-all duration-300"
                style={{ width: `${dailyPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 p-3 text-center shadow-2xs">
            <div className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400">
              Çözülen
            </div>
            <div className="font-display font-black text-lg text-indigo-600 dark:text-indigo-400 mt-0.5">
              {totalSolvedCount}
            </div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 p-3 text-center shadow-2xs">
            <div className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400">
              Başarı Oranı
            </div>
            <div className="font-display font-black text-lg text-emerald-600 dark:text-emerald-400 mt-0.5">
              %{summary.accuracy}
            </div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 p-3 text-center shadow-2xs">
            <div className="text-[10.5px] font-bold text-slate-500 dark:text-slate-400">
              Hata Sepeti
            </div>
            <div className="font-display font-black text-lg text-rose-600 dark:text-rose-400 mt-0.5">
              {summary.totalWrong}
            </div>
          </div>
        </div>

        {/* 2x2 Vibrant Study Mode Launchers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Card 1: 5-Option Case & Statute Tests */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onNavigateTab('vaka', { basket: 'unsolved', examFilter: studyState.targetExam });
            }}
            className="group rounded-3xl bg-white dark:bg-[#111827] border border-indigo-200/80 dark:border-indigo-500/25 p-4 text-left shadow-sm hover:shadow-md hover:border-indigo-400 transition cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/25">
                <CheckSquare className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 text-[10.5px] font-extrabold">
                {vakaFmt} Soru
              </span>
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between">
                <span>5 Şıklı Olay & Mevzuat Testi</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                ÖSYM formatında A–E şıklı sorular, şık eleme, olay ipucu ve 5 şıklı ayırıcı kanun analizi.
              </p>
            </div>
          </button>

          {/* Card 2: True / False Active Recall & Trap Hunter */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onNavigateTab('spot', { basket: 'unsolved', examFilter: studyState.targetExam });
            }}
            className="group rounded-3xl bg-white dark:bg-[#111827] border border-amber-200/80 dark:border-amber-500/25 p-4 text-left shadow-sm hover:shadow-md hover:border-amber-400 transition cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-md shadow-amber-500/25">
                <Zap className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 text-[10.5px] font-extrabold">
                {spotFmt} Kart
              </span>
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between">
                <span>Hızlı Doğru / Yanlış Spot & Tuzak</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Tek kelimelik süre, merci ve istisna tuzaklarını anlık vurgu ve sesli okuma ile pekiştir.
              </p>
            </div>
          </button>

          {/* Card 3: OSYM Concept Twins */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onNavigateTab('vaka', { basket: 'osym_twin', examFilter: studyState.targetExam });
            }}
            className="group rounded-3xl bg-white dark:bg-[#111827] border border-emerald-200/80 dark:border-emerald-500/25 p-4 text-left shadow-sm hover:shadow-md hover:border-emerald-400 transition cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10.5px] font-extrabold">
                {twinFmt} İkiz
              </span>
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between">
                <span>ÖSYM Konsept İkizleri (2021–2026)</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Çıkmış HMGS, İYÖS ve Hakimlik soru mantığına birebir uygun, %100 özgün ve güncel sorular.
              </p>
            </div>
          </button>

          {/* Card 4: Timed Mock Exams & Statute Atlas */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onNavigateTab('deneme');
            }}
            className="group rounded-3xl bg-white dark:bg-[#111827] border border-rose-200/80 dark:border-rose-500/25 p-4 text-left shadow-sm hover:shadow-md hover:border-rose-400 transition cursor-pointer flex flex-col justify-between gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-md shadow-rose-500/25">
                <Timer className="w-5 h-5" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 text-[10.5px] font-extrabold">
                4 Sınav Modu
              </span>
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between">
                <span>Süreli Denemeler & Mevzuat Atlası</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                HMGS 70 puan baraj provası, İYÖS, Hakimlik & KPSS denemeleri ve güncel süreler rehberi.
              </p>
            </div>
          </button>
        </div>

        {/* Mistakes Cleanup Banner */}
        {summary.totalWrong > 0 && (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('selection');
              onNavigateTab(summary.vakaWrong > 0 ? 'vaka' : 'spot', { basket: 'wrong' });
            }}
            className="w-full rounded-2xl bg-rose-50 dark:bg-rose-950/35 border border-rose-200 dark:border-rose-500/30 p-3.5 flex items-center justify-between gap-3 text-left hover:brightness-98 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
                <RotateCcw className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-extrabold text-rose-800 dark:text-rose-200">
                  Hata Sepetinde {summary.totalWrong} Soru Bekliyor
                </div>
                <div className="text-[11px] text-rose-600 dark:text-rose-300/80 truncate">
                  Yanlış yaptığın soruları tekrar çözerek eksiklerini kapat
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-rose-500 shrink-0" />
          </button>
        )}

        {/* PRO Upgrade Banner for Free Users */}
        {!isPro && (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onOpenPaywall();
            }}
            className="w-full rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-4 text-white shadow-lg shadow-orange-500/20 flex items-center justify-between gap-3 text-left hover:brightness-105 transition cursor-pointer"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-black tracking-tight">
                  PRO’ya Geç • {totalFmt}+ Soruyu Sınırsız Aç
                </div>
                <div className="text-[11px] text-amber-50 mt-0.5">
                  Haftalık {prices.weekly} • Aylık {prices.monthly} • 6 Aylık {prices.sixmonths} (Demo: {Math.min(totalSolvedCount, FREE_QUESTION_LIMIT)}/{FREE_QUESTION_LIMIT})
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white shrink-0" />
          </button>
        )}

        {/* 14-Branch Quick Grid for Selected Exam */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{studyState.targetExam} Kapsamındaki Hukuk Branşları ({examBranches.length})</span>
            </h3>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
              Dokun &amp; Başla
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {examBranches.map((b) => {
              const cnt = STATIC_LEGAL_BRANCH_COUNTS[b.id];
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    onNavigateTab('vaka', { branchId: b.id, basket: 'unsolved' });
                  }}
                  className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 p-3 text-left hover:border-indigo-400 transition cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-bold text-xs text-slate-900 dark:text-white truncate">
                      {b.shortName}
                    </span>
                    <Award className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                    {b.lawCodes}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 text-[10px] font-extrabold">
                    {cnt.total.toLocaleString('tr-TR')} Soru
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);
