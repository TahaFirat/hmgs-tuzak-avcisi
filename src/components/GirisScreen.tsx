import React, { useState } from 'react';
import {
  Scale,
  ArrowRight,
  ShieldCheck,
  Layers,
  Timer,
  BookMarked,
  Bookmark,
  Flame,
  Edit3,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { UserStudyStats, TrapCard } from '../types/hmgs';
import { getUpcomingHMGSExam } from '../utils/examCalendar';

export interface GirisScreenProps {
  profile: { name: string } | null;
  stats: UserStudyStats;
  cards: TrapCard[];
  totalCardsCount: number;
  practiceCardsCount: number;
  examCardsCount: number;
  bookmarkedCount: number;
  vaultCount: number;
  dueTodayCount: number;
  onNavigateTab: (
    tab: 'antrenman' | 'deneme' | 'analiz' | 'defterim' | 'ayarlar',
    subFilter?: 'all' | 'bookmarks' | 'mistakes' | 'due'
  ) => void;
  onSaveProfile: (profile: { name: string; goal: number }) => void;
  onUpdateDailyGoal: (goal: number) => void;
  onStartSpecificCard?: (cardId: string) => void;
}

const GOALS = [10, 20, 30, 40, 50];

export const GirisScreen: React.FC<GirisScreenProps> = ({
  profile,
  stats,
  practiceCardsCount,
  examCardsCount,
  bookmarkedCount,
  vaultCount,
  dueTodayCount,
  onNavigateTab,
  onSaveProfile
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(!profile);
  const [name, setName] = useState<string>(profile?.name ?? '');
  const [goal, setGoal] = useState<number>(stats.dailyGoalTarget || 20);

  const handleSubmitProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().slice(0, 30);
    onSaveProfile({ name: cleanName, goal });
    setIsEditing(false);
  };

  const dailyGoalPct = Math.min(
    100,
    Math.round((stats.todaySolvedCount / Math.max(1, stats.dailyGoalTarget)) * 100)
  );

  const accuracyPct =
    stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0;

  const examInfo = getUpcomingHMGSExam(stats.targetExamDate, practiceCardsCount);
  const cleanName = profile?.name?.trim();

  // İlk Giriş veya Profil Düzenleme Modu
  if (isEditing || !profile) {
    return (
      <div className="min-h-[80dvh] w-full flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-7">
          <div className="text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <Scale className="w-7 h-7" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                {profile ? 'Profili Düzenle' : 'HMGS Tuzak Avcısı'}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {profile
                  ? 'İsminizi ve günlük soru hedefinizi güncelleyin'
                  : 'Hukuk Mesleklerine Giriş Sınavı çalışma asistanı'}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmitProfile}
            className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 space-y-5 shadow-xs"
          >
            <label className="block space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Adınız (İsteğe bağlı)
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
                autoComplete="given-name"
                placeholder="Örn. Selim veya Burcu"
                className="w-full min-h-12 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Günlük Soru Hedefiniz
              </span>
              <div className="grid grid-cols-5 gap-2">
                {GOALS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGoal(g)}
                    aria-pressed={goal === g}
                    className={`min-h-11 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
                      goal === g
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {profile && (
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 min-h-12 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Vazgeç
                </button>
              )}
              <button
                type="submit"
                className="flex-1 min-h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-display font-bold text-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{name.trim() ? `Başla, ${name.trim()}` : 'Kaydet ve Başla'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <p className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 text-center">
            <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>İlerlemeniz yalnızca bu cihazda saklanır.</span>
          </p>
        </div>
      </div>
    );
  }

  // Ferah, Sade ve Odaklı Anasayfa
  return (
    <div className="space-y-6 sm:space-y-8 py-2 sm:py-4 pb-12">
      {/* 1. Üst Karşılama Satırı */}
      <div className="flex items-center justify-between gap-4 px-1">
        <div className="space-y-1 min-w-0">
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white truncate">
            {cleanName ? `Merhaba, ${cleanName} 👋` : 'Hoş Geldiniz 👋'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {examInfo.title} • <span className="font-semibold text-indigo-600 dark:text-indigo-400">{examInfo.daysLeft} gün kaldı</span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="px-3.5 py-2.5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-500 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-2xs"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Hedef & İsim</span>
        </button>
      </div>

      {/* 2. Tek ve Ferah Günlük İlerleme Kartı */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-2xs space-y-5">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1">
              Bugünkü Çalışma Hedefi
            </span>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              {stats.todaySolvedCount} <span className="text-slate-400 dark:text-slate-500 font-semibold text-lg sm:text-xl">/ {stats.dailyGoalTarget} soru</span>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-display font-bold text-xs sm:text-sm">
            %{dailyGoalPct} Tamamlandı
          </span>
        </div>

        <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${dailyGoalPct}%` }}
          />
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 mx-auto sm:mx-0 shrink-0" />
            <span className="text-xs text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">{stats.streakDays} gün</strong> seri
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto sm:mx-0 shrink-0" />
            <span className="text-xs text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">%{accuracyPct}</strong> başarı
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <BookOpen className="w-4 h-4 text-indigo-500 mx-auto sm:mx-0 shrink-0" />
            <span className="text-xs text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">{stats.totalAnswered}</strong> çözülen
            </span>
          </div>
        </div>
      </div>

      {/* 3. Dört Temel Çalışma Alanı (Ferah Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Antrenman */}
        <button
          type="button"
          onClick={() => onNavigateTab('antrenman')}
          className="group text-left bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
              {practiceCardsCount} Soru
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
              <span>Mevzuat Antrenmanı</span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Branş ve alt konu seçerek kanun maddelerini pratik edin.
            </p>
          </div>
        </button>

        {/* Deneme Sınavı */}
        <button
          type="button"
          onClick={() => onNavigateTab('deneme')}
          className="group text-left bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-violet-500 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
              <Timer className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
              {examCardsCount} Soru
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex items-center justify-between">
              <span>Deneme Sınavı</span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Süreli sınav simülasyonu ve kritik süre atlası.
            </p>
          </div>
        </button>

        {/* Kaydedilen Sorular */}
        <button
          type="button"
          onClick={() => onNavigateTab('defterim', 'bookmarks')}
          className="group text-left bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-amber-500 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Bookmark className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-semibold">
              {bookmarkedCount} Kayıtlı
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex items-center justify-between">
              <span>Kaydedilen Sorular</span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              İşaretlediğiniz önemli mevzuat hükümlerini inceleyin.
            </p>
          </div>
        </button>

        {/* Tuzak Defterim & Yanlışlar */}
        <button
          type="button"
          onClick={() => onNavigateTab('defterim', dueTodayCount > 0 ? 'due' : 'all')}
          className="group text-left bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 hover:border-rose-500 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between gap-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
              <BookMarked className="w-6 h-6" />
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                dueTodayCount > 0
                  ? 'bg-rose-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {dueTodayCount > 0 ? `${dueTodayCount} Tekrar` : `${vaultCount} Soru`}
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors flex items-center justify-between">
              <span>Yanlışlar & Tekrar</span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Hata yaptığınız soruları aralıklı tekrar ile pekiştirin.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
