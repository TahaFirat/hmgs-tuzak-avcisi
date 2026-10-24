import React, { useMemo, useState, useEffect } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Filter,
  Flame,
  Layers,
  Play,
  RotateCcw,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  Timer,
  Trophy,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Scale,
  AlertTriangle
} from 'lucide-react';
import {
  BRANCH_META,
  FILTER_PILLS,
  FilterPillCategory,
  formatBranchHeader,
  formatFocusBadge,
  matchesFilterCategory,
  TrapCard,
  TrapCategory
} from '../types/hmgs';
import { ALL_HMGS_STATUTORY_RULES } from '../data/hmgsStatuteRepository';

interface DenemeSinavScreenProps {
  cards: TrapCard[];
  solvedCardMap: Record<string, boolean>;
  onRecordAnswer: (card: TrapCard, isUserCorrect: boolean) => void;
}

type SubView = 'deneme' | 'atlas';
type ExamPresetId = 'quick-15' | 'full-40' | 'traps-25' | 'custom';
type ExamFeedbackMode = 'instant' | 'end-of-exam';

interface ExamSession {
  title: string;
  questions: TrapCard[];
  answers: Record<string, boolean>; // cardId -> userChoseCorrect (true = DOĞRU, false = TUZAK VAR)
  startedAt: number;
  durationSeconds: number;
  feedbackMode: ExamFeedbackMode;
  isFinished: boolean;
}

function getBaseRuleId(cardId: string): string {
  return cardId.replace(/-(true|trap1|trap2|cross)$/, '');
}

function matchesTrapCategoryFilter(cardCategory: TrapCategory, filter: TrapCategory | 'Tümü'): boolean {
  if (filter === 'Tümü') return true;
  if (filter === 'Oran/Nisap Tuzağı' || filter === 'Çoğunluk Tuzağı') {
    return cardCategory === 'Oran/Nisap Tuzağı' || cardCategory === 'Çoğunluk Tuzağı';
  }
  return cardCategory === filter;
}

function buildSmartExamDeck(
  allCards: TrapCard[],
  solvedCardMap: Record<string, boolean>,
  count: number,
  branchFilter: FilterPillCategory,
  trapFilter: TrapCategory | 'Tümü',
  prioritizeUnsolved: boolean
): TrapCard[] {
  const pool = allCards.filter((card) => {
    const branchMatch = matchesFilterCategory(card.branch, branchFilter);
    const trapMatch = matchesTrapCategoryFilter(card.trapCategory, trapFilter);
    return branchMatch && trapMatch;
  });

  // Karıştır (Fisher-Yates)
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Çözülmemiş veya yanlış yapılmış kartları öne al
  if (prioritizeUnsolved) {
    shuffled.sort((a, b) => {
      const aState = solvedCardMap[a.id]; // undefined = çözülmedi, false = yanlış, true = doğru
      const bState = solvedCardMap[b.id];
      const aScore = aState === false ? 0 : aState === undefined ? 1 : 2;
      const bScore = bState === false ? 0 : bState === undefined ? 1 : 2;
      return aScore - bScore;
    });
  }

  // Aynı kanun kuralının (rule-hmk-1-true ve rule-hmk-1-trap1 gibi) aynı sınavda iki kez çıkmamasını sağla
  const selected: TrapCard[] = [];
  const usedBaseRules = new Set<string>();

  for (const card of shuffled) {
    if (selected.length >= count) break;
    const baseRule = getBaseRuleId(card.id);
    if (!usedBaseRules.has(baseRule)) {
      usedBaseRules.add(baseRule);
      selected.push(card);
    }
  }

  // Eğer benzersiz kural sayısı istenen soru sayısından azsa kalanları tamamla
  if (selected.length < count) {
    const selectedIds = new Set(selected.map((c) => c.id));
    for (const card of shuffled) {
      if (selected.length >= count) break;
      if (!selectedIds.has(card.id)) {
        selected.push(card);
        selectedIds.add(card.id);
      }
    }
  }

  // Seçilen soruları tekrar karıştır ki doğru/yanlış veya zorluk sırası belli olmasın
  for (let i = selected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selected[i], selected[j]] = [selected[j], selected[i]];
  }

  return selected;
}

export const DenemeSinavScreen: React.FC<DenemeSinavScreenProps> = ({
  cards,
  solvedCardMap,
  onRecordAnswer
}) => {
  const [subView, setSubView] = useState<'deneme' | 'atlas'>('deneme');

  // Deneme ayarları
  const [selectedPreset, setSelectedPreset] = useState<ExamPresetId>('quick-15');
  const [customBranch, setCustomBranch] = useState<FilterPillCategory>('Tümü');
  const [customTrapType, setCustomTrapType] = useState<TrapCategory | 'Tümü'>('Tümü');
  const [customCount, setCustomCount] = useState<number>(20);
  const [feedbackMode, setFeedbackMode] = useState<ExamFeedbackMode>('instant');
  const [prioritizeUnsolved, setPrioritizeUnsolved] = useState<boolean>(true);

  // Aktif sınav oturumu
  const [session, setSession] = useState<ExamSession | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Atlas filtreleri
  const [atlasSearch, setAtlasSearch] = useState<string>('');
  const [atlasBranch, setAtlasBranch] = useState<FilterPillCategory>('Tümü');
  const [atlasTrapFilter, setAtlasTrapFilter] = useState<TrapCategory | 'Tümü'>('Tümü');

  // Sınav sayacı
  useEffect(() => {
    if (!session || session.isFinished) return;
    const interval = window.setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        if (next >= session.durationSeconds) {
          setSession((curr) => (curr ? { ...curr, isFinished: true } : null));
        }
        return next;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [session]);

  const startExam = (
    title: string,
    count: number,
    durationMinutes: number,
    branch: FilterPillCategory,
    trap: TrapCategory | 'Tümü'
  ) => {
    const questions = buildSmartExamDeck(
      cards,
      solvedCardMap,
      count,
      branch,
      trap,
      prioritizeUnsolved
    );
    setSession({
      title,
      questions,
      answers: {},
      startedAt: Date.now(),
      durationSeconds: durationMinutes * 60,
      feedbackMode,
      isFinished: false
    });
    setCurrentIndex(0);
    setElapsedSeconds(0);
    setSubView('deneme');
  };

  const handleStartPreset = () => {
    if (selectedPreset === 'quick-15') {
      startExam('Hızlı HMGS Tuzak Taraması (15 Soru)', 15, 12, 'Tümü', 'Tümü');
    } else if (selectedPreset === 'full-40') {
      startExam('Kapsamlı HMGS Baraj Provası (40 Soru)', 40, 35, 'Tümü', 'Tümü');
    } else if (selectedPreset === 'traps-25') {
      startExam('Kritik Süre & Nitelikli Çoğunluk Denemesi (25 Soru)', 25, 20, 'Tümü', 'Süre Tuzağı');
    } else {
      startExam(
        `${customBranch} • Özel Dinamik Deneme (${customCount} Soru)`,
        customCount,
        Math.max(10, Math.round(customCount * 0.85)),
        customBranch,
        customTrapType
      );
    }
  };

  const handleAnswerQuestion = (userSaysCorrect: boolean) => {
    if (!session || session.isFinished) return;
    const currentCard = session.questions[currentIndex];
    if (!currentCard) return;

    // Anında çözümlü modda bir kez cevaplandıysa tekrar değiştirmesin
    if (session.feedbackMode === 'instant' && session.answers[currentCard.id] !== undefined) {
      return;
    }

    const isAlreadyRecorded = session.answers[currentCard.id] !== undefined;
    const isUserRight = userSaysCorrect === currentCard.isCorrect;

    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [currentCard.id]: userSaysCorrect
        }
      };
    });

    if (!isAlreadyRecorded) {
      onRecordAnswer(currentCard, isUserRight);
    }

    // Gerçek sınav modundaysa otomatik sonraki soruya geç
    if (session.feedbackMode === 'end-of-exam' && currentIndex < session.questions.length - 1) {
      window.setTimeout(() => {
        setCurrentIndex((idx) => Math.min(session.questions.length - 1, idx + 1));
      }, 180);
    }
  };

  const finishExam = () => {
    if (!session) return;
    setSession({ ...session, isFinished: true });
  };

  const formatTimer = (secondsLeft: number) => {
    const safe = Math.max(0, secondsLeft);
    const m = Math.floor(safe / 60);
    const s = safe % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Atlas verisi
  const filteredAtlasRules = useMemo(() => {
    const q = atlasSearch.trim().toLocaleLowerCase('tr-TR');
    return ALL_HMGS_STATUTORY_RULES.filter((rule) => {
      const branchMatch = matchesFilterCategory(rule.branch, atlasBranch);
      const trapMatch =
        atlasTrapFilter === 'Tümü' ||
        matchesTrapCategoryFilter(rule.trap1.category, atlasTrapFilter) ||
        matchesTrapCategoryFilter(rule.trap2.category, atlasTrapFilter);
      if (!branchMatch || !trapMatch) return false;
      if (!q) return true;
      return (
        rule.branch.toLocaleLowerCase('tr-TR').includes(q) ||
        rule.subTopic.toLocaleLowerCase('tr-TR').includes(q) ||
        rule.articleRef.toLocaleLowerCase('tr-TR').includes(q) ||
        rule.trueStatement.toLocaleLowerCase('tr-TR').includes(q) ||
        rule.trueCorrectPhrase.toLocaleLowerCase('tr-TR').includes(q)
      );
    });
  }, [atlasSearch, atlasBranch, atlasTrapFilter]);

  const unsolvedTotalCount = useMemo(() => {
    return cards.filter((c) => solvedCardMap[c.id] === undefined).length;
  }, [cards, solvedCardMap]);

  // ============================================================================
  // AKTİF SINAV EKRANI VEYA SONUÇ KARNESİ
  // ============================================================================
  if (session && subView === 'deneme') {
    const totalQuestions = session.questions.length;
    const answeredCount = Object.keys(session.answers).length;
    const remainingSeconds = session.durationSeconds - elapsedSeconds;

    if (session.isFinished) {
      let correctCount = 0;
      let wrongCount = 0;
      const wrongCards: TrapCard[] = [];

      session.questions.forEach((q) => {
        const userChoice = session.answers[q.id];
        if (userChoice === undefined) return;
        if (userChoice === q.isCorrect) {
          correctCount++;
        } else {
          wrongCount++;
          wrongCards.push(q);
        }
      });

      const score100 = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
      const passedBaraj = score100 >= 70;

      return (
        <div className="space-y-6 pb-8">
          {/* Sonuç Özeti */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <Trophy className="h-3.5 w-3.5" />
                  SINAV SONUÇ KARNESİ
                </span>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">
                  {session.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Tamamlanma Süresi: {formatTimer(elapsedSeconds)} • Yanlış yapılan tüm sorular otomatik olarak Yanlışlar Kasasına (SM-2) eklendi.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSession(null)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition"
                >
                  <RotateCcw className="h-4 w-4" />
                  Yeni Deneme Seç
                </button>
                <button
                  onClick={handleStartPreset}
                  className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition"
                >
                  <Play className="h-4 w-4" />
                  Farklı Sorularla Tekrar Başlat
                </button>
              </div>
            </div>

            {/* Puan & Baraj Kartları */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div
                className={`rounded-2xl p-4 border ${
                  passedBaraj
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300'
                }`}
              >
                <div className="text-[11px] font-bold uppercase tracking-wider opacity-80">
                  HMGS Simülasyon Puanı
                </div>
                <div className="mt-1 text-3xl font-black">{score100} / 100</div>
                <div className="mt-1 text-xs font-semibold">
                  {passedBaraj ? '✓ 70 Barajı Geçildi' : '✗ 70 Barajının Altında'}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Doğru Yakalanan
                </div>
                <div className="mt-1 text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  {correctCount}
                </div>
                <div className="mt-1 text-xs text-slate-500">Toplam {totalQuestions} soruda</div>
              </div>

              <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Tuzağa Düşülen
                </div>
                <div className="mt-1 text-3xl font-black text-rose-600 dark:text-rose-400">
                  {wrongCount}
                </div>
                <div className="mt-1 text-xs text-slate-500">Kasaya kaydedildi</div>
              </div>

              <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Boş Bırakılan
                </div>
                <div className="mt-1 text-3xl font-black text-amber-600 dark:text-amber-400">
                  {totalQuestions - answeredCount}
                </div>
                <div className="mt-1 text-xs text-slate-500">Cevaplanmayan önerme</div>
              </div>
            </div>

            {/* Tüm Soruların Detaylı Çözüm İncelemesi */}
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Sınav Soruları & Mevzuat Çözüm Analizi ({session.questions.length} Soru)
              </h3>
              <div className="space-y-3">
                {session.questions.map((q, idx) => {
                  const userAns = session.answers[q.id];
                  const isRight = userAns !== undefined && userAns === q.isCorrect;
                  return (
                    <div
                      key={q.id}
                      className={`rounded-2xl border p-4 transition ${
                        userAns === undefined
                          ? 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30'
                          : isRight
                          ? 'border-emerald-500/25 bg-emerald-500/5'
                          : 'border-rose-500/30 bg-rose-500/5'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-900 dark:bg-white text-xs font-black text-white dark:text-slate-900">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            {formatBranchHeader(q)} • {q.articleRef}
                          </span>
                          <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                            {q.trapCategory}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-extrabold ${
                            userAns === undefined
                              ? 'text-slate-400'
                              : isRight
                              ? 'text-emerald-600 dark:text-emerald-400'
                              : 'text-rose-600 dark:text-rose-400'
                          }`}
                        >
                          {userAns === undefined
                            ? 'BOŞ BIRAKILDI'
                            : isRight
                            ? '✓ DOĞRU YANIT'
                            : '✗ TUZAĞA DÜŞÜLDÜ'}
                        </span>
                      </div>

                      <p className="mt-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        {q.statement}
                      </p>

                      <div className="mt-3 rounded-xl bg-white/80 dark:bg-slate-900/80 p-3 text-xs border border-slate-200/60 dark:border-slate-800">
                        {!q.isCorrect && q.wrongPhrase && (
                          <div className="mb-1.5 flex flex-wrap items-center gap-2">
                            <span className="line-through text-rose-600 dark:text-rose-400 font-semibold">
                              {q.wrongPhrase}
                            </span>
                            <span className="text-slate-400">→</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">
                              {q.correctPhrase}
                            </span>
                          </div>
                        )}
                        {q.isCorrect && (
                          <div className="mb-1.5 font-bold text-emerald-600 dark:text-emerald-400">
                            ✓ Doğru Kanun Hükmü: {q.correctPhrase}
                          </div>
                        )}
                        <p className="text-slate-600 dark:text-slate-400">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Aktif Soru Görünümü
    const currentCard = session.questions[currentIndex];
    const userCurrentAnswer = session.answers[currentCard.id];
    const showInstantReveal =
      session.feedbackMode === 'instant' && userCurrentAnswer !== undefined;
    const isCurrentRight = userCurrentAnswer === currentCard.isCorrect;

    return (
      <div className="space-y-5 pb-8">
        {/* Üst Sınav Kontrol Barı */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3.5 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 font-black text-sm">
              {currentIndex + 1}/{totalQuestions}
            </span>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                {session.title}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Cevaplanan: {answeredCount} / {totalQuestions} •{' '}
                {session.feedbackMode === 'instant' ? 'Anında Çözümlü Mod' : 'Gerçek Sınav Modu'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-black border ${
                remainingSeconds < 120
                  ? 'bg-rose-500/10 text-rose-600 border-rose-500/30 animate-pulse'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Timer className="h-4 w-4 text-indigo-500" />
              {formatTimer(remainingSeconds)}
            </div>

            <button
              onClick={finishExam}
              className="rounded-xl bg-rose-600 hover:bg-rose-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition"
            >
              Sınavı Bitir & Karne
            </button>
          </div>
        </div>

        {/* Numaralı Soru Paleti */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {session.questions.map((q, idx) => {
            const ans = session.answers[q.id];
            const isAnswered = ans !== undefined;
            const isRight = isAnswered && ans === q.isCorrect;
            const isCurrent = idx === currentIndex;

            let btnStyle =
              'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800';
            if (isAnswered) {
              if (session.feedbackMode === 'instant') {
                btnStyle = isRight
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'bg-rose-500 text-white border-rose-500';
              } else {
                btnStyle = 'bg-indigo-600 text-white border-indigo-600';
              }
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-8 min-w-[2rem] px-2 rounded-lg border text-xs font-bold transition shrink-0 ${btnStyle} ${
                  isCurrent ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-950' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Aktif Soru Kartı */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-xl bg-indigo-500/10 px-3 py-1 text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                {formatBranchHeader(currentCard)}
              </span>
              <span className="rounded-xl bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-300">
                {currentCard.articleRef}
              </span>
            </div>
            <span
              className={`rounded-xl px-3 py-1 text-xs font-bold ${
                showInstantReveal
                  ? currentCard.isCorrect
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-500/15 text-rose-700 dark:text-rose-300'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {showInstantReveal
                ? currentCard.isCorrect
                  ? 'Doğru Kanun Metni'
                  : currentCard.trapCategory
                : formatFocusBadge(currentCard.trapCategory)}
            </span>
          </div>

          <p className="mt-6 text-base sm:text-lg font-medium leading-relaxed text-slate-900 dark:text-slate-100">
            {currentCard.statement}
          </p>

          {/* Cevap Butonları */}
          <div className="mt-8 grid grid-cols-2 gap-3.5">
            <button
              onClick={() => handleAnswerQuestion(false)}
              className={`flex items-center justify-center gap-2 rounded-2xl border-2 py-4 px-4 text-xs sm:text-sm font-extrabold transition ${
                userCurrentAnswer === false
                  ? 'border-rose-600 bg-rose-600 text-white shadow-lg shadow-rose-600/25'
                  : 'border-rose-500/30 bg-rose-500/5 text-rose-600 dark:text-rose-400 hover:bg-rose-500/10'
              }`}
            >
              <XCircle className="h-5 w-5 shrink-0" />
              <span>TUZAK VAR (YANLIŞ)</span>
            </button>

            <button
              onClick={() => handleAnswerQuestion(true)}
              className={`flex items-center justify-center gap-2 rounded-2xl border-2 py-4 px-4 text-xs sm:text-sm font-extrabold transition ${
                userCurrentAnswer === true
                  ? 'border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
              }`}
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>DOĞRU (KANUN METNİ)</span>
            </button>
          </div>

          {/* Anında Çözüm Kutusu */}
          {showInstantReveal && (
            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isCurrentRight
                  ? 'border-emerald-500/30 bg-emerald-500/10'
                  : 'border-rose-500/30 bg-rose-500/10'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-xs font-black uppercase tracking-wider ${
                    isCurrentRight
                      ? 'text-emerald-700 dark:text-emerald-300'
                      : 'text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {isCurrentRight
                    ? '✓ Harika! ÖSYM Tuzağını Doğru Analiz Ettin'
                    : '✗ Dikkat! Mevzuat Tuzağına Düştün (Yanlışlar Kasasına Eklendi)'}
                </span>
              </div>

              {!currentCard.isCorrect && currentCard.wrongPhrase && (
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-lg bg-rose-500/20 px-2.5 py-1 font-bold text-rose-700 dark:text-rose-300 line-through">
                    {currentCard.wrongPhrase}
                  </span>
                  <span className="font-bold text-slate-400">→</span>
                  <span className="rounded-lg bg-emerald-500/20 px-2.5 py-1 font-bold text-emerald-700 dark:text-emerald-300">
                    {currentCard.correctPhrase}
                  </span>
                </div>
              )}

              {currentCard.isCorrect && (
                <div className="mt-3 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs sm:text-sm font-bold text-emerald-800 dark:text-emerald-200">
                  ✓ Doğru Kanun İfadesi: {currentCard.correctPhrase}
                </div>
              )}

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {currentCard.explanation}
              </p>
            </div>
          )}

          {/* Alt Gezinme */}
          <div className="mt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition"
            >
              <ChevronLeft className="h-4 w-4" />
              Önceki Soru
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIndex((i) => Math.min(totalQuestions - 1, i + 1))}
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-500 transition"
              >
                Sonraki Soru
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition"
              >
                <Trophy className="h-4 w-4" />
                Sınavı Tamamla & Sonucu Gör
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // ANA GÖRÜNÜM: 1) DİNAMİK DENEME MERKEZİ | 2) SÜRE & ÇOĞUNLUK ATLASI
  // ============================================================================
  return (
    <div className="space-y-6 pb-8">
      {/* Üst Sekme Seçici */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" />
            EZBER BOZUCU DİNAMİK SİMÜLASYON & MEVZUAT ATLASI
          </div>
          <h1 className="mt-2 text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            HMGS Deneme Sınavı & Kritik Süre Atlası
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Her deneme sınavı {cards.length} özgün kanun önermesi arasından tekrar etmeyecek şekilde dinamik üretilir; aynı maddenin farklı varyantları ezberi bozmak için rastgele seçilir.
          </p>
        </div>

        <div className="flex w-full sm:w-auto rounded-2xl bg-slate-100 dark:bg-slate-800 p-1">
          <button
            onClick={() => setSubView('deneme')}
            className={`flex-1 sm:flex-none justify-center inline-flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 text-xs font-extrabold transition whitespace-nowrap ${
              subView === 'deneme'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Timer className="h-4 w-4" />
            Deneme Sınavı
          </button>
          <button
            onClick={() => setSubView('atlas')}
            className={`flex-1 sm:flex-none justify-center inline-flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2.5 text-xs font-extrabold transition whitespace-nowrap ${
              subView === 'atlas'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            Mevzuat Atlası ({ALL_HMGS_STATUTORY_RULES.length})
          </button>
        </div>
      </div>

      {subView === 'deneme' ? (
        <div className="space-y-6">
          {/* Hazır Sınav Paketleri */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: 'quick-15' as ExamPresetId,
                badge: 'HIZLI PRATİK • 12 DAKİKA',
                title: '15 Soruluk Hızlı Tuzak Taraması',
                desc: 'Henüz çözmediğin veya daha önce yanıldığın kanun maddelerine öncelik vererek 15 soruluk dinamik mini sınav oluşturur.',
                stats: `Havuzda ${unsolvedTotalCount} çözülmemiş önerme hazır`
              },
              {
                id: 'full-40' as ExamPresetId,
                badge: '70 PUAN BARAJ PROVASI • 35 DAKİKA',
                title: '40 Soruluk Kapsamlı HMGS Denemesi',
                desc: '14 HMGS hukuk dalının tamamından (Medeni, Borçlar, HMK, CMK, TCK, İYUK, İdare, Anayasa, Ticaret, İcra, İş, Vergi, Avukatlık, MÖHUK) dengeli prova.',
                stats: 'Aynı maddenin iki varyantı aynı sınavda asla çakışmaz'
              },
              {
                id: 'traps-25' as ExamPresetId,
                badge: '7499 S.K. & SÜRELER • 20 DAKİKA',
                title: '25 Soruluk Kritik Süre & Çoğunluk Denemesi',
                desc: 'İstinaf/temyiz iki hafta reformu, İYUK 30/60 gün, İİK 5/7/10 gün ve TBMM nitelikli çoğunluk tuzaklarına özel odaklanır.',
                stats: 'ÖSYM’nin en çok elediği sayısal tuzaklar'
              },
              {
                id: 'custom' as ExamPresetId,
                badge: 'KİŞİSELLEŞTİRİLMİŞ • ÖZEL FİLTRE',
                title: 'Branş & Tuzak Türüne Göre Özel Deneme',
                desc: 'İstediğin hukuk dalını, tuzak kategorisini ve soru sayısını (10 - 50 soru) seçerek kendi dinamik denemeni oluştur.',
                stats: 'Tamamen dinamik soru seçimi'
              }
            ].map((item) => {
              const active = selectedPreset === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedPreset(item.id)}
                  className={`text-left rounded-3xl border-2 p-5 sm:p-6 transition ${
                    active
                      ? 'border-indigo-600 bg-indigo-500/5 dark:bg-indigo-500/10 shadow-lg shadow-indigo-500/10'
                      : 'border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400">
                      {item.badge}
                    </span>
                    <span
                      className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                        active ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                      }`}
                    >
                      {active && <CheckCircle2 className="h-3.5 w-3.5" />}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    <Target className="h-3.5 w-3.5" />
                    {item.stats}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Özel Deneme Seçildiyse Parametreler */}
          {selectedPreset === 'custom' && (
            <div className="rounded-3xl border border-indigo-500/30 bg-indigo-500/5 dark:bg-slate-900 p-5 sm:p-6 space-y-4">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                Özel Deneme Parametreleri
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                    Hukuk Branşı
                  </label>
                  <select
                    value={customBranch}
                    onChange={(e) => setCustomBranch(e.target.value as FilterPillCategory)}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-100"
                  >
                    {FILTER_PILLS.map((pill) => (
                      <option key={pill} value={pill}>
                        {pill}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                    Tuzak Türü
                  </label>
                  <select
                    value={customTrapType}
                    onChange={(e) => setCustomTrapType(e.target.value as TrapCategory | 'Tümü')}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-100"
                  >
                    <option value="Tümü">Tüm Tuzak Türleri + Doğru Metinler</option>
                    <option value="Süre Tuzağı">Süre Tuzağı</option>
                    <option value="Görev/Yetki Tuzağı">Görev/Yetki Tuzağı</option>
                    <option value="Çoğunluk Tuzağı">Çoğunluk Tuzağı</option>
                    <option value="İstisna/Kesinlik Tuzağı">İstisna/Kesinlik Tuzağı</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                    Soru Sayısı: {customCount} Soru
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 20, 30, 50].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCustomCount(num)}
                        className={`rounded-xl py-2 text-xs font-extrabold border transition ${
                          customCount === num
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sınav Modu & Başlatma Çubuğu */}
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  Çözüm Gösterimi:
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFeedbackMode((m) => (m === 'instant' ? 'end-of-exam' : 'instant'))
                  }
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs font-extrabold text-indigo-600 dark:text-indigo-400"
                >
                  {feedbackMode === 'instant'
                    ? '⚡ Anında Açıklamalı Mod'
                    : '🎯 Gerçek Sınav Modu (Sonuçta Göster)'}
                </button>
              </div>

              <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={prioritizeUnsolved}
                  onChange={(e) => setPrioritizeUnsolved(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Çözülmemiş ve yanlış yapılan sorulara öncelik ver (Ezber Bozucu)
              </label>
            </div>

            <button
              type="button"
              onClick={handleStartPreset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-indigo-600/25 transition"
            >
              <Play className="h-4 w-4 fill-current" />
              Dinamik Deneme Sınavını Başlat
            </button>
          </div>
        </div>
      ) : (
        /* ============================================================================
           İNTERAKTİF HMGS SÜRE, GÖREV & NİTELİKLİ ÇOĞUNLUK ATLASI
           ============================================================================ */
        <div className="space-y-5">
          {/* Arama ve Branş Filtreleri */}
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={atlasSearch}
                  onChange={(e) => setAtlasSearch(e.target.value)}
                  placeholder="Madde numarası, süre veya kavram ara (örn: iki hafta, 7499, konkordato, Yüce Divan, önalım)..."
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <select
                value={atlasTrapFilter}
                onChange={(e) => setAtlasTrapFilter(e.target.value as TrapCategory | 'Tümü')}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                <option value="Tümü">Tüm Tuzak Kategorileri</option>
                <option value="Süre Tuzağı">Süre Tuzağı</option>
                <option value="Görev/Yetki Tuzağı">Görev/Yetki Tuzağı</option>
                <option value="Çoğunluk Tuzağı">Çoğunluk Tuzağı</option>
                <option value="İstisna/Kesinlik Tuzağı">İstisna/Kesinlik Tuzağı</option>
              </select>

              <button
                type="button"
                onClick={() =>
                  startExam(
                    `${atlasBranch} • Atlas Özel Testi (15 Soru)`,
                    15,
                    12,
                    atlasBranch,
                    atlasTrapFilter
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-xs font-extrabold text-white shrink-0 transition"
              >
                <Play className="h-3.5 w-3.5" />
                Bu Filtreden 15 Soru Çöz
              </button>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {FILTER_PILLS.map((pill) => (
                <button
                  key={pill}
                  onClick={() => setAtlasBranch(pill)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold shrink-0 transition ${
                    atlasBranch === pill
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Kural Kartları Listesi */}
          <div className="grid grid-cols-1 gap-4">
            {filteredAtlasRules.map((rule) => (
              <div
                key={rule.id}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-xl bg-indigo-500/10 px-3 py-1 text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                      {rule.branch} • {rule.articleRef}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      {rule.subTopic}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-lg bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                      {rule.trap1.category}
                    </span>
                    {rule.trap2.category !== rule.trap1.category && (
                      <span className="rounded-lg bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-600 dark:text-rose-400">
                        {rule.trap2.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Doğru Kanun Hükmü Özeti */}
                <div className="mt-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-3.5">
                  <div className="text-[11px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    ✓ DOĞRU KANUN KURALI (ANAHTAR HÜKÜM)
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-100">
                    {rule.trueCorrectPhrase}
                  </p>
                </div>

                {/* ÖSYM'nin Kurduğu 2 Farklı Tuzak Varyantı */}
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-3.5">
                    <div className="text-[11px] font-black uppercase text-rose-600 dark:text-rose-400">
                      ⚠️ ÖSYM TUZAĞI 1 ({rule.trap1.category})
                    </div>
                    <p className="mt-1 text-xs line-through text-rose-700/80 dark:text-rose-300/80">
                      “{rule.trap1.wrongPhrase}”
                    </p>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {rule.trap1.explanation}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3.5">
                    <div className="text-[11px] font-black uppercase text-amber-600 dark:text-amber-400">
                      ⚠️ ÖSYM TUZAĞI 2 ({rule.trap2.category})
                    </div>
                    <p className="mt-1 text-xs line-through text-amber-700/80 dark:text-amber-300/80">
                      “{rule.trap2.wrongPhrase}”
                    </p>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">
                      {rule.trap2.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
