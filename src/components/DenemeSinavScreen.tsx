import React, { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lock,
  Play,
  RotateCcw,
  Scale,
  Search,
  Sparkles,
  Timer,
  Trophy,
  XCircle
} from 'lucide-react';
import {
  LEGAL_BRANCHES,
  LEGAL_VAKA_QUESTIONS
} from '../data/legalQuestionRepository';
import { LEGAL_REFERENCE_GUIDE } from '../data/legalReferenceGuide';
import { LegalBranchId, LegalExamType, LegalVakaQuestion, OptionLetter } from '../types/legalEngine';
import { LegalExamAttempt, LegalStudyState } from '../services/legalStudyStorage';
import { triggerHaptic } from '../services/nativeBridge';

interface DenemeSinavScreenProps {
  studyState: LegalStudyState;
  isPro: boolean;
  onSaveAttempt: (attempt: LegalExamAttempt) => void;
  onRecordVaka: (q: LegalVakaQuestion, selected: OptionLetter, isCorrect: boolean) => void;
  onOpenPaywall: (reason?: string) => void;
}

type SubView = 'deneme' | 'atlas';
type PresetId = 'quick-15' | 'hmgs-40' | 'iyos-30' | 'hakimlik-40' | 'kpss-30' | 'custom';

interface ActiveExam {
  title: string;
  examType: LegalExamType | 'KARMA';
  questions: LegalVakaQuestion[];
  answers: Record<string, OptionLetter>;
  startedAt: number;
  durationSeconds: number;
  isFinished: boolean;
}

function sampleUniqueExamQuestions(
  count: number,
  examFilter: 'ALL' | LegalExamType,
  branchFilter: 'ALL' | LegalBranchId,
  vakaAnswers: LegalStudyState['vakaAnswers']
): LegalVakaQuestion[] {
  const pool = LEGAL_VAKA_QUESTIONS.filter((q) => {
    if (examFilter !== 'ALL' && !q.exams.includes(examFilter)) return false;
    if (branchFilter !== 'ALL' && q.branchId !== branchFilter) return false;
    return true;
  });

  // Fisher-Yates shuffle on a lightweight index array
  const indices = Array.from({ length: pool.length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Prefer unsolved & one question per cluster-entity so no duplicate legal concepts appear in one exam
  const selected: LegalVakaQuestion[] = [];
  const usedEntityKey = new Set<string>();

  for (const pass of [0, 1]) {
    for (const idx of indices) {
      if (selected.length >= count) break;
      const q = pool[idx];
      if (pass === 0 && vakaAnswers[q.id]) continue;
      // q.id format: lv-{branch}-c{cIdx}-e{eIdx}-a{aIdx}
      const entityKey = q.id.replace(/-a\d+$/, '');
      if (usedEntityKey.has(entityKey)) continue;
      usedEntityKey.add(entityKey);
      selected.push(q);
    }
  }

  return selected;
}

export const DenemeSinavScreen: React.FC<DenemeSinavScreenProps> = ({
  studyState,
  isPro,
  onSaveAttempt,
  onRecordVaka,
  onOpenPaywall
}) => {
  const [subView, setSubView] = useState<SubView>('deneme');
  const [customBranch, setCustomBranch] = useState<'ALL' | LegalBranchId>('ALL');
  const [customCount, setCustomCount] = useState<number>(20);
  const [session, setSession] = useState<ActiveExam | null>(null);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [elapsedSec, setElapsedSec] = useState<number>(0);

  // Atlas state
  const [atlasSearch, setAtlasSearch] = useState<string>('');
  const [atlasCategory, setAtlasCategory] = useState<string>('Tümü');

  useEffect(() => {
    if (!session || session.isFinished) return;
    const t = window.setInterval(() => {
      setElapsedSec((prev) => {
        const next = prev + 1;
        if (next >= session.durationSeconds) {
          finishExam(session, next);
        }
        return next;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [session]);

  const finishExam = (active: ActiveExam, durationUsed: number) => {
    if (active.isFinished) return;
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    for (const q of active.questions) {
      const sel = active.answers[q.id];
      if (!sel) {
        blank++;
      } else if (sel === q.correctOption) {
        correct++;
        onRecordVaka(q, sel, true);
      } else {
        wrong++;
        onRecordVaka(q, sel, false);
      }
    }
    const score100 = Math.round((correct / Math.max(1, active.questions.length)) * 100);
    const attempt: LegalExamAttempt = {
      id: `exam-${Date.now()}`,
      examTitle: active.title,
      examType: active.examType,
      dateIso: new Date().toISOString(),
      totalQuestions: active.questions.length,
      correctCount: correct,
      wrongCount: wrong,
      blankCount: blank,
      score100,
      passed70: score100 >= 70,
      durationSeconds: durationUsed
    };
    onSaveAttempt(attempt);
    setSession({ ...active, isFinished: true });
    triggerHaptic(score100 >= 70 ? 'success' : 'warning');
  };

  const startPreset = (preset: PresetId) => {
    if (!isPro && preset !== 'quick-15') {
      triggerHaptic('warning');
      onOpenPaywall(
        'HMGS 40 Soru, İYÖS, Hakimlik, KPSS Hukuk ve Özel Deneme sınavları PRO aboneliği ile sınırsız açılır.'
      );
      return;
    }

    let title = 'Hızlı Karma Deneme (15 Soru)';
    let examType: LegalExamType | 'KARMA' = 'KARMA';
    let count = 15;
    let examFilter: 'ALL' | LegalExamType = 'ALL';
    let branchFilter: 'ALL' | LegalBranchId = 'ALL';
    let duration = 20 * 60;

    if (preset === 'hmgs-40') {
      title = 'HMGS 2026 Tam Prova (40 Soru)';
      examType = 'HMGS';
      examFilter = 'HMGS';
      count = 40;
      duration = 55 * 60;
    } else if (preset === 'iyos-30') {
      title = 'İYÖS İdari Yargı Provası (30 Soru)';
      examType = 'IYOS';
      examFilter = 'IYOS';
      count = 30;
      duration = 40 * 60;
    } else if (preset === 'hakimlik-40') {
      title = 'Adli & İdari Hakimlik Denemesi (40 Soru)';
      examType = 'HAKIMLIK';
      examFilter = 'HAKIMLIK';
      count = 40;
      duration = 55 * 60;
    } else if (preset === 'kpss-30') {
      title = 'KPSS A Grubu Hukuk Denemesi (30 Soru)';
      examType = 'KPSS';
      examFilter = 'KPSS';
      count = 30;
      duration = 40 * 60;
    } else if (preset === 'custom') {
      title = `Özel Hukuk Denemesi (${customCount} Soru)`;
      branchFilter = customBranch;
      count = customCount;
      duration = Math.max(10, Math.round(customCount * 1.4)) * 60;
    }

    const qs = sampleUniqueExamQuestions(count, examFilter, branchFilter, studyState.vakaAnswers);
    triggerHaptic('medium');
    setElapsedSec(0);
    setCurrentIdx(0);
    setSession({
      title,
      examType,
      questions: qs,
      answers: {},
      startedAt: Date.now(),
      durationSeconds: duration,
      isFinished: false
    });
  };

  const filteredAtlas = useMemo(() => {
    const ql = atlasSearch.trim().toLowerCase();
    return LEGAL_REFERENCE_GUIDE.filter((item) => {
      if (atlasCategory !== 'Tümü' && item.category !== atlasCategory) return false;
      if (!ql) return true;
      return `${item.title} ${item.articleRef} ${item.correctRule} ${item.commonTrap}`
        .toLowerCase()
        .includes(ql);
    });
  }, [atlasSearch, atlasCategory]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Active Exam Runner
  if (session && !session.isFinished) {
    const q = session.questions[currentIdx];
    const remaining = Math.max(0, session.durationSeconds - elapsedSec);
    const answeredCount = Object.keys(session.answers).length;
    const chosen = session.answers[q.id];

    return (
      <div className="space-y-3">
        <div className="rounded-3xl bg-indigo-700 text-white p-4 flex flex-wrap items-center justify-between gap-2 shadow-md">
          <div>
            <div className="text-[11px] font-bold text-indigo-200">{session.title}</div>
            <div className="text-sm font-black">
              Soru {currentIdx + 1} / {session.questions.length} • İşaretlenen: {answeredCount}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-xl bg-black/25 font-mono text-sm font-extrabold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-300" />
              {formatTime(remaining)}
            </div>
            <button
              type="button"
              onClick={() => finishExam(session, elapsedSec)}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 text-xs font-extrabold cursor-pointer"
            >
              Sınavı Bitir
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[11px] font-extrabold">
              {q.branchName}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              {q.subTopic}
            </span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
            {q.stem}
          </p>

          <div className="space-y-2">
            {q.options.map((opt) => {
              const selected = chosen === opt.letter;
              return (
                <button
                  key={opt.letter}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setSession((prev) =>
                      prev ? { ...prev, answers: { ...prev.answers, [q.id]: opt.letter } } : prev
                    );
                  }}
                  className={`w-full rounded-2xl border p-3 text-left flex items-start gap-2.5 transition cursor-pointer ${
                    selected
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-600 text-indigo-950 dark:text-white ring-1 ring-indigo-500/30'
                      : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                      selected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {opt.letter}
                  </span>
                  <span className="text-xs sm:text-sm leading-snug">{opt.text}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold disabled:opacity-40 inline-flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Önceki
            </button>

            {currentIdx + 1 < session.questions.length ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => i + 1)}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-extrabold inline-flex items-center gap-1 cursor-pointer"
              >
                Sonraki <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => finishExam(session, elapsedSec)}
                className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-extrabold cursor-pointer"
              >
                Karnemi Gör
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Finished Exam Report
  if (session && session.isFinished) {
    let correct = 0;
    let wrong = 0;
    let blank = 0;
    session.questions.forEach((q) => {
      const a = session.answers[q.id];
      if (!a) blank++;
      else if (a === q.correctOption) correct++;
      else wrong++;
    });
    const score = Math.round((correct / Math.max(1, session.questions.length)) * 100);
    const passed = score >= 70;

    return (
      <div className="space-y-4">
        <div
          className={`rounded-3xl p-5 text-white shadow-lg ${
            passed
              ? 'bg-gradient-to-br from-emerald-600 to-teal-700'
              : 'bg-gradient-to-br from-rose-600 to-indigo-800'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold opacity-85">{session.title}</div>
              <h2 className="font-display font-black text-2xl mt-1">
                {score} Puan • {passed ? '70 Barajını Geçtin!' : '70 Barajı Altı — Tekrar Gerekli'}
              </h2>
              <p className="text-xs opacity-90 mt-1">
                Doğru: {correct} • Yanlış: {wrong} • Boş: {blank} • Süre: {formatTime(elapsedSec)}
              </p>
            </div>
            <Trophy className="w-10 h-10 text-amber-300 shrink-0" />
          </div>
          <button
            type="button"
            onClick={() => setSession(null)}
            className="mt-4 px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-extrabold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Yeni Deneme Seç
          </button>
        </div>

        <div className="space-y-2.5">
          <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
            Soru Soru Çözüm İncelemesi
          </h3>
          {session.questions.map((q, i) => {
            const ans = session.answers[q.id];
            const ok = ans === q.correctOption;
            return (
              <div
                key={q.id}
                className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-3.5 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400">
                    #{i + 1} • {q.branchName} ({q.articleRef})
                  </span>
                  {ok ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Doğru ({q.correctOption})
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600">
                      <XCircle className="w-3.5 h-3.5" /> Senin: {ans || 'Boş'} • Doğru: {q.correctOption}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">{q.stem}</p>
                <p className="text-[11.5px] text-slate-600 dark:text-slate-300">{q.legalReasoning}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* SubView Toggle */}
      <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-slate-200/80 dark:bg-slate-800/80">
        <button
          type="button"
          onClick={() => setSubView('deneme')}
          className={`py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer ${
            subView === 'deneme'
              ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <Timer className="w-4 h-4" /> Süreli Deneme Sınavları
        </button>
        <button
          type="button"
          onClick={() => setSubView('atlas')}
          className={`py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition cursor-pointer ${
            subView === 'atlas'
              ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-300 shadow-xs'
              : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          <BookOpen className="w-4 h-4" /> Süreler &amp; 2026 Mevzuat Atlası
        </button>
      </div>

      {subView === 'deneme' ? (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                id: 'quick-15' as PresetId,
                title: 'Hızlı Karma Deneme (15 Soru)',
                desc: '14 branştan karma 5 şıklı hızlı sınav provası (20 Dk)',
                free: true,
                badge: 'ÜCRETSİZ'
              },
              {
                id: 'hmgs-40' as PresetId,
                title: 'HMGS 2026 Tam Prova (40 Soru)',
                desc: 'ÖSYM 70 puan barajlı kapsamlı HMGS simülasyonu (55 Dk)',
                free: false,
                badge: 'HMGS PRO'
              },
              {
                id: 'iyos-30' as PresetId,
                title: 'İYÖS İdari Yargı Provası (30 Soru)',
                desc: 'Anayasa, İdare, İYUK, Vergi ve MÖHUK odaklı deneme (40 Dk)',
                free: false,
                badge: 'İYÖS PRO'
              },
              {
                id: 'hakimlik-40' as PresetId,
                title: 'Adli & İdari Hakimlik (40 Soru)',
                desc: 'Hakim ve Savcı Yardımcılığı zorluk düzeyinde vaka sınavı (55 Dk)',
                free: false,
                badge: 'HAKİMLİK PRO'
              },
              {
                id: 'kpss-30' as PresetId,
                title: 'KPSS A Grubu Hukuk (30 Soru)',
                desc: 'Anayasa, İdare, Medeni, Borçlar, Ceza, Ticaret ve İcra (40 Dk)',
                free: false,
                badge: 'KPSS PRO'
              }
            ].map((p) => {
              const locked = !isPro && !p.free;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => startPreset(p.id)}
                  className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 p-4 text-left hover:border-indigo-400 transition cursor-pointer flex flex-col justify-between gap-3 shadow-2xs"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                        p.free
                          ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                          : 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300'
                      }`}
                    >
                      {p.badge}
                    </span>
                    {locked ? (
                      <Lock className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Play className="w-4 h-4 text-indigo-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                      {p.title}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{p.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Custom Exam Builder */}
          <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="font-display font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-500" /> Özel Branş Denemesi Oluştur
              </div>
              {!isPro && <Lock className="w-4 h-4 text-amber-500" />}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <select
                value={customBranch}
                onChange={(e) => setCustomBranch(e.target.value as 'ALL' | LegalBranchId)}
                className="rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs font-bold text-slate-900 dark:text-white"
              >
                <option value="ALL">Tüm 14 Branş Karma</option>
                {LEGAL_BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>

              <select
                value={customCount}
                onChange={(e) => setCustomCount(Number(e.target.value))}
                className="rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-2 text-xs font-bold text-slate-900 dark:text-white"
              >
                {[10, 20, 30, 50].map((n) => (
                  <option key={n} value={n}>
                    {n} Soru
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => startPreset('custom')}
              className="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer"
            >
              Özel Denemeyi Başlat
            </button>
          </div>
        </div>
      ) : (
        /* Mevzuat Süreler & 2026 Yargı Paketi Atlası */
        <div className="space-y-3">
          <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-3 space-y-2.5">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={atlasSearch}
                onChange={(e) => setAtlasSearch(e.target.value)}
                placeholder="Süre, mahkeme, nisap veya Yargı Paketi ara..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white outline-none"
              />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
              {['Tümü', '2024–2026 Yargı Paketi', 'Süreler', 'Görevli Mahkemeler', 'Nisap & Çoğunluklar', 'Karşılaştırma'].map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setAtlasCategory(cat)}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap cursor-pointer ${
                      atlasCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            {filteredAtlas.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-4 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10.5px] font-extrabold">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                    {item.articleRef}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  <strong>Güncel Kural:</strong> {item.correctRule}
                </p>
                <p className="text-[11.5px] text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/30 rounded-xl px-3 py-2 border border-rose-200/70 dark:border-rose-500/20">
                  <strong>ÖSYM Tuzağı:</strong> {item.commonTrap}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
