import React, { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  Crown,
  Download,
  Moon,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  Sun,
  Target,
  Timer,
  Trash2,
  Volume2,
  VolumeX
} from 'lucide-react';
import { LEGAL_BRANCHES, STATIC_LEGAL_BRANCH_COUNTS } from '../data/legalQuestionRepository';
import { LegalBranchId } from '../types/legalEngine';
import { LegalStudyState, getLocalDateKey } from '../services/legalStudyStorage';
import { restorePurchasesNativelyAsync, triggerHaptic } from '../services/nativeBridge';

interface AnalizScreenProps {
  studyState: LegalStudyState;
  isPro: boolean;
  onUpdateState: (updater: (prev: LegalStudyState) => LegalStudyState) => void;
  onUnlockPro: () => void;
  onOpenPaywall: () => void;
  onResetAll: () => void;
}

export const AnalizScreen: React.FC<AnalizScreenProps> = ({
  studyState,
  isPro,
  onUpdateState,
  onUnlockPro,
  onOpenPaywall,
  onResetAll
}) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [sessionSec, setSessionSec] = useState(0);
  const [restoreMsg, setRestoreMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!timerRunning) return;
    const t = window.setInterval(() => {
      setSessionSec((s) => s + 1);
      const key = getLocalDateKey();
      onUpdateState((prev) => ({
        ...prev,
        studySecondsByDate: {
          ...prev.studySecondsByDate,
          [key]: (prev.studySecondsByDate[key] || 0) + 1
        }
      }));
    }, 1000);
    return () => window.clearInterval(t);
  }, [timerRunning, onUpdateState]);

  const branchStats = useMemo(() => {
    const map: Record<LegalBranchId, { answered: number; correct: number }> = {} as Record<
      LegalBranchId,
      { answered: number; correct: number }
    >;
    for (const b of LEGAL_BRANCHES) map[b.id] = { answered: 0, correct: 0 };

    for (const rec of Object.values(studyState.vakaAnswers)) {
      if (map[rec.branchId]) {
        map[rec.branchId].answered += 1;
        if (rec.isCorrect) map[rec.branchId].correct += 1;
      }
    }
    for (const rec of Object.values(studyState.spotAnswers)) {
      if (map[rec.branchId]) {
        map[rec.branchId].answered += 1;
        if (rec.isCorrect) map[rec.branchId].correct += 1;
      }
    }
    return map;
  }, [studyState.vakaAnswers, studyState.spotAnswers]);

  const todayMin = Math.round((studyState.studySecondsByDate[getLocalDateKey()] || 0) / 60);

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(studyState, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hukuk-akademi-yedek-${getLocalDateKey()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleRestore = async () => {
    triggerHaptic('selection');
    setRestoreMsg('App Store kontrol ediliyor...');
    const res = await restorePurchasesNativelyAsync();
    setRestoreMsg(res.message);
    if (res.success) onUnlockPro();
  };

  return (
    <div className="space-y-4">
      {/* Focus Study Timer Card */}
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-4 sm:p-5 text-white shadow-lg flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-200 uppercase">
            <Timer className="w-3.5 h-3.5" /> Odak Çalışma Kronometresi
          </div>
          <div className="font-mono font-black text-2xl sm:text-3xl mt-1">
            {String(Math.floor(sessionSec / 60)).padStart(2, '0')}:
            {String(sessionSec % 60).padStart(2, '0')}
          </div>
          <div className="text-[11px] text-indigo-100 mt-0.5">
            Bugün toplam çalışma: {todayMin} dk
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              setTimerRunning((v) => !v);
            }}
            className="px-4 py-2.5 rounded-2xl bg-white text-indigo-700 font-extrabold text-xs inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            {timerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{timerRunning ? 'Duraklat' : 'Odak Başlat'}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setTimerRunning(false);
              setSessionSec(0);
            }}
            className="p-2.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white cursor-pointer"
            aria-label="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Membership Status Card */}
      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-4 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            {isPro ? (
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            ) : (
              <Crown className="w-5 h-5 text-amber-500" />
            )}
            <div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                {isPro ? 'PRO Abonelik / Tam Erişim Aktif' : 'Ücretsiz Demo Modu (30 Soru)'}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {isPro
                  ? '33.000+ sorunun ve tüm denemelerin tamamı açık.'
                  : 'Haftalık, Aylık veya 6 Aylık planla sınırsız erişim açın.'}
              </div>
            </div>
          </div>

          {!isPro && (
            <button
              type="button"
              onClick={onOpenPaywall}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer shrink-0"
            >
              PRO’ya Geç
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={handleRestore}
          className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
        >
          Satın Alımları Geri Yükle (Restore Purchases)
        </button>
        {restoreMsg && (
          <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            {restoreMsg}
          </div>
        )}
      </div>

      {/* Quick Settings */}
      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-4 space-y-3">
        <div className="font-display font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
          <Target className="w-4 h-4 text-indigo-500" /> Tercihler &amp; Günlük Hedef
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() =>
              onUpdateState((p) => ({ ...p, theme: p.theme === 'dark' ? 'light' : 'dark' }))
            }
            className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {studyState.theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            <span>{studyState.theme === 'dark' ? 'Gündüz Modu' : 'Gece Modu'}</span>
          </button>

          <button
            type="button"
            onClick={() => onUpdateState((p) => ({ ...p, soundEnabled: !p.soundEnabled }))}
            className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {studyState.soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-500" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            <span>Sesler: {studyState.soundEnabled ? 'Açık' : 'Kapalı'}</span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            Günlük Soru Hedefi:
          </span>
          <div className="flex items-center gap-1.5">
            {[20, 30, 50, 100].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => onUpdateState((p) => ({ ...p, dailyTarget: n }))}
                className={`px-2.5 py-1 rounded-lg text-xs font-extrabold cursor-pointer ${
                  studyState.dailyTarget === n
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 14-Branch Mastery Breakdown */}
      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-4 space-y-3">
        <div className="font-display font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
          <BarChart3 className="w-4 h-4 text-indigo-500" /> 14 Branş Başarı Karnesi
        </div>

        <div className="space-y-2.5">
          {LEGAL_BRANCHES.map((b) => {
            const st = branchStats[b.id];
            const pct = st.answered > 0 ? Math.round((st.correct / st.answered) * 100) : 0;
            const poolTotal = STATIC_LEGAL_BRANCH_COUNTS[b.id].total;
            return (
              <div key={b.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">{b.name}</span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {st.answered}/{poolTotal.toLocaleString('tr-TR')} • %{pct}
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Backup & Reset */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={handleExport}
          className="py-2.5 px-3 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Download className="w-4 h-4 text-indigo-500" /> İlerlemeyi Yedekle
        </button>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Tüm çözülmüş soru geçmişin sıfırlansın mı?')) {
              onResetAll();
            }
          }}
          className="py-2.5 px-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 text-xs font-bold text-rose-700 dark:text-rose-300 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Trash2 className="w-4 h-4" /> Verileri Sıfırla
        </button>
      </div>
    </div>
  );
};
