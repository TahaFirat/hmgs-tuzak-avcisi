import React from 'react';
import {
  Award,
  TrendingUp,
  Play,
  CheckCircle2,
  BookOpen,
  Flame,
  ShieldAlert,
  Sparkles,
  RotateCcw,
  PlusCircle,
  Target
} from 'lucide-react';
import {
  BRANCH_META,
  FilterPillCategory,
  TrapCard,
  UserStudyStats,
  matchesFilterCategory
} from '../types/hmgs';

interface AnalizScreenProps {
  cards: TrapCard[];
  solvedCardMap: Record<string, boolean>;
  stats: UserStudyStats;
  dueTodayCount: number;
  onSelectBranchForStudy: (branch: FilterPillCategory) => void;
  onStartSpacedRepetitionAll: () => void;
  onUpdateDailyGoal: (newGoal: number) => void;
  onResetStats: () => void;
  onGoToExam: () => void;
}

const BRANCH_KEYS: Array<Exclude<FilterPillCategory, 'Tümü'>> = [
  'Medeni & Borçlar',
  'CMK & TCK',
  'İdare & İYUK',
  'Ticaret & İcra',
  'İş & Vergi & Avukatlık',
  'HMK',
  'Anayasa'
];

const DAILY_GOAL_OPTIONS = [20, 40, 60, 100];
const MIN_RELIABLE_SAMPLE = 20;

export const AnalizScreen: React.FC<AnalizScreenProps> = ({
  cards,
  solvedCardMap,
  stats,
  dueTodayCount,
  onSelectBranchForStudy,
  onStartSpacedRepetitionAll,
  onUpdateDailyGoal,
  onResetStats,
  onGoToExam
}) => {
  const hasSolvedAny = stats.totalAnswered > 0;
  const hasReliableSample = stats.totalAnswered >= MIN_RELIABLE_SAMPLE;
  const accuracy = hasSolvedAny
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100)
    : 0;

  // Estimated HMGS score out of 100 (70 is the mandatory passing bar)
  const estimatedHmgsScore = hasSolvedAny ? Math.min(100, accuracy) : 0;
  const isPassingBar = hasReliableSample && estimatedHmgsScore >= 70;

  const dailyProgressPercent = Math.min(
    100,
    Math.round((stats.todaySolvedCount / Math.max(1, stats.dailyGoalTarget)) * 100)
  );

  const uniqueSolvedCount = Object.keys(solvedCardMap).length;

  // Circle SVG parameters
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (estimatedHmgsScore / 100) * circumference;

  return (
    <div className="space-y-6 pb-8">
      {/* Top Hero Dashboard Banner: HMGS 70-Point Baraj Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Readiness Gauge Card */}
        <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-7 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-indigo-200">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>HMGS 70 Puan Baraj Simülasyonu (120 Soru / %100 Müfredat)</span>
            </div>

            <h2 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
              {!hasSolvedAny
                ? 'Soru Çözmeye Başlayarak Baraj Puanınızı Ölçün'
                : !hasReliableSample
                ? `Baraj Tahmini İçin ${MIN_RELIABLE_SAMPLE - stats.totalAnswered} Soru Daha Çözün (${stats.totalAnswered}/${MIN_RELIABLE_SAMPLE})`
                : isPassingBar
                ? 'Tebrikler! 70 Puan Baraj Hedefinin Üzerindesiniz'
                : '70 Puan Barajı İçin Antrenmana Devam Edin'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              Toplam <strong>{cards.length}</strong> özgün kanun önermesi içinden{' '}
              <strong>{uniqueSolvedCount}</strong> tekil kart çözdünüz (toplam{' '}
              <strong>{stats.totalAnswered}</strong> yanıt, <strong>{stats.totalCorrect}</strong> doğru).{' '}
              {!hasReliableSample
                ? `Yanıltıcı sonuç oluşmaması için baraj onayı en az ${MIN_RELIABLE_SAMPLE} soru çözüldüğünde aktifleşir.`
                : 'ÖSYM’nin 120 soruluk sınavında baraj 70 puandır (en az 84 doğru).'}
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <button
                type="button"
                onClick={() => onSelectBranchForStudy('Tümü')}
                className="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-display font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Karma Antrenmana Başla</span>
              </button>

              <button
                type="button"
                onClick={onGoToExam}
                className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-300" />
                <span>Süreli Deneme Sınavı Başlat</span>
              </button>

              {dueTodayCount > 0 && (
                <button
                  type="button"
                  onClick={onStartSpacedRepetitionAll}
                  className="px-3.5 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/30 text-rose-200 font-display font-semibold text-xs sm:text-sm inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  <span>{dueTodayCount} Yanlışı Tekrar Et</span>
                </button>
              )}
            </div>
          </div>

          {/* Circular Readiness Ring */}
          <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 108 108">
              <circle
                cx="54"
                cy="54"
                r={radius}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="9"
                fill="transparent"
              />
              <circle
                cx="54"
                cy="54"
                r={radius}
                stroke={!hasReliableSample ? '#6366F1' : isPassingBar ? '#10B981' : '#F59E0B'}
                strokeWidth="9"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-display font-extrabold text-2xl text-white leading-none">
                %{estimatedHmgsScore}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-300 mt-1">
                {hasReliableSample ? 'Baraj Puanı' : `${stats.totalAnswered}/${MIN_RELIABLE_SAMPLE} Örneklem`}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Daily Goal & Streak Card */}
        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Günlük Hedef & Seri
              </span>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>{stats.streakDays} Gün Seri</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  {stats.todaySolvedCount} / {stats.dailyGoalTarget}
                </span>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  %{dailyProgressPercent} Tamamlandı
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-emerald-500 transition-all duration-500"
                  style={{ width: `${dailyProgressPercent}%` }}
                />
              </div>
            </div>

            {/* Dynamic Daily Goal Selector */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-indigo-500" />
                <span>Günlük Soru Hedefi Belirle:</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {DAILY_GOAL_OPTIONS.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => onUpdateDailyGoal(goal)}
                    className={`py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      stats.dailyGoalTarget === goal
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{cards.length} Aktif Soru</span>
            </span>

            {hasSolvedAny && (
              <button
                type="button"
                onClick={onResetStats}
                className="inline-flex items-center gap-1 text-slate-400 hover:text-rose-500 font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Verileri Sıfırla</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Branch-by-Branch Mastery Breakdown */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Hukuk Dallarına Göre Canlı Hakimiyet & ÖSYM Ağırlıkları</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Çözdüğünüz her soru anında ilgili hukuk dalının başarı yüzdesine ve ilerleme çubuğuna yansır.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BRANCH_KEYS.map((branchKey) => {
            const meta = BRANCH_META[branchKey];
            const branchStat = stats.byCategory[branchKey] || { answered: 0, correct: 0 };
            const branchPct =
              branchStat.answered > 0
                ? Math.round((branchStat.correct / branchStat.answered) * 100)
                : 0;
            const branchCards = cards.filter((c) => matchesFilterCategory(c.branch, branchKey));
            const totalCardsInBranch = branchCards.length;
            const solvedInBranch = branchCards.filter(
              (c) => solvedCardMap[c.id] !== undefined
            ).length;

            return (
              <div
                key={branchKey}
                className="group rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:border-indigo-500/50 transition-all shadow-2xs"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {meta.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {meta.shortDesc}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold shrink-0 whitespace-nowrap ${meta.badgeClass}`}
                    >
                      {meta.hmgsWeight}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-1 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        {branchStat.answered > 0
                          ? `Doğruluk: ${branchStat.correct}/${branchStat.answered} Yanıt`
                          : 'Henüz yanıtlanmadı'}
                      </span>
                      <span
                        className={`font-display font-bold ${
                          branchStat.answered === 0
                            ? 'text-slate-400'
                            : branchPct >= 70
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : branchPct >= 50
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        %{branchPct}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${branchPct}%`,
                          backgroundColor: meta.accentColor
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {solvedInBranch} / {totalCardsInBranch} Kart Çözüldü
                    </span>
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectBranchForStudy(branchKey)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 group-hover:bg-indigo-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Bu Branşı Çöz</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
