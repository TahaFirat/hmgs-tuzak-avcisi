import React, { useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Lightbulb,
  Scale,
  Search,
  Share2,
  Slash,
  Sparkles,
  Volume2,
  VolumeX,
  XCircle
} from 'lucide-react';
import {
  LEGAL_BRANCHES,
  LEGAL_OSYM_TWIN_QUESTIONS,
  LEGAL_VAKA_QUESTIONS,
  matchesLegalSearch
} from '../data/legalQuestionRepository';
import { LegalBranchId, LegalExamType, LegalVakaQuestion, OptionLetter } from '../types/legalEngine';
import { LegalStudyState } from '../services/legalStudyStorage';
import { FREE_QUESTION_LIMIT, shareLegalCardNatively, triggerHaptic } from '../services/nativeBridge';
import { playSuccessSound, playTrapSound } from '../utils/audioFeedback';
import { QueueBasket } from './AnaSayfaScreen';

interface VakaTestScreenProps {
  studyState: LegalStudyState;
  isPro: boolean;
  totalSolvedCount: number;
  initialBasket?: QueueBasket;
  initialBranchId?: 'ALL' | LegalBranchId;
  initialExamFilter?: 'ALL' | LegalExamType;
  onRecordAnswer: (q: LegalVakaQuestion, selected: OptionLetter, isCorrect: boolean) => void;
  onToggleBookmark: (id: string) => void;
  onOpenPaywall: (reason?: string) => void;
}

const BASKETS: Array<{ id: QueueBasket; label: string }> = [
  { id: 'unsolved', label: 'Yeni' },
  { id: 'osym_twin', label: 'ÖSYM İkizi' },
  { id: 'wrong', label: 'Yanlışlarım' },
  { id: 'bookmarked', label: 'Kayıtlı' },
  { id: 'correct', label: 'Doğrularım' },
  { id: 'all', label: 'Tümü' }
];

const EXAM_FILTERS: Array<{ id: 'ALL' | LegalExamType; label: string }> = [
  { id: 'ALL', label: 'Tüm Sınavlar' },
  { id: 'HMGS', label: 'HMGS' },
  { id: 'IYOS', label: 'İYÖS' },
  { id: 'HAKIMLIK', label: 'Hakimlik' },
  { id: 'KPSS', label: 'KPSS Hukuk' }
];

export const VakaTestScreen: React.FC<VakaTestScreenProps> = ({
  studyState,
  isPro,
  totalSolvedCount,
  initialBasket = 'unsolved',
  initialBranchId = 'ALL',
  initialExamFilter = 'ALL',
  onRecordAnswer,
  onToggleBookmark,
  onOpenPaywall
}) => {
  const [basket, setBasket] = useState<QueueBasket>(initialBasket);
  const [branchId, setBranchId] = useState<'ALL' | LegalBranchId>(initialBranchId);
  const [examFilter, setExamFilter] = useState<'ALL' | LegalExamType>(initialExamFilter);
  const [searchText, setSearchText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [selectedOption, setSelectedOption] = useState<OptionLetter | null>(null);
  const [eliminated, setEliminated] = useState<Record<OptionLetter, boolean>>({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false
  });
  const [showClues, setShowClues] = useState<boolean>(false);
  const [showAllDiffs, setShowAllDiffs] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    setBasket(initialBasket);
    setBranchId(initialBranchId);
    setExamFilter(initialExamFilter);
    setCurrentIndex(0);
  }, [initialBasket, initialBranchId, initialExamFilter]);

  const filteredQuestions = useMemo(() => {
    const qLower = searchText.trim().toLowerCase();
    const base = basket === 'osym_twin' ? LEGAL_OSYM_TWIN_QUESTIONS : LEGAL_VAKA_QUESTIONS;

    const out: LegalVakaQuestion[] = [];
    for (let i = 0; i < base.length; i++) {
      const q = base[i];
      if (branchId !== 'ALL' && q.branchId !== branchId) continue;
      if (examFilter !== 'ALL' && !q.exams.includes(examFilter)) continue;

      const ans = studyState.vakaAnswers[q.id];
      if (basket === 'unsolved' && ans) continue;
      if (basket === 'wrong' && (!ans || ans.isCorrect)) continue;
      if (basket === 'correct' && (!ans || !ans.isCorrect)) continue;
      if (basket === 'bookmarked' && !studyState.bookmarkedVakaIds[q.id]) continue;

      if (qLower && !matchesLegalSearch(q, qLower)) continue;
      out.push(q);
    }
    return out;
  }, [basket, branchId, examFilter, searchText, studyState.vakaAnswers, studyState.bookmarkedVakaIds]);

  const safeIndex = filteredQuestions.length > 0 ? Math.min(currentIndex, filteredQuestions.length - 1) : 0;
  const currentQ = filteredQuestions[safeIndex] || null;
  const previousRecord = currentQ ? studyState.vakaAnswers[currentQ.id] : undefined;
  const activeSelection = selectedOption || (basket !== 'unsolved' && basket !== 'wrong' ? previousRecord?.selectedOption || null : null);
  const isRevealed = activeSelection !== null;
  const isBookmarked = currentQ ? !!studyState.bookmarkedVakaIds[currentQ.id] : false;

  useEffect(() => {
    setSelectedOption(null);
    setEliminated({ A: false, B: false, C: false, D: false, E: false });
    setShowClues(false);
    setShowAllDiffs(false);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentQ?.id]);

  // iPad keyboard shortcuts support
  useEffect(() => {
    const onShortcut = (e: Event) => {
      const cmd = (e as CustomEvent<Record<string, string>>).detail?.command;
      if (!currentQ) return;
      if (cmd === 'next_card') handleNext();
      if (cmd === 'toggle_bookmark') onToggleBookmark(currentQ.id);
    };
    window.addEventListener('hmgs:keyboardShortcut', onShortcut);
    return () => window.removeEventListener('hmgs:keyboardShortcut', onShortcut);
  });

  const handleSelectOption = (letter: OptionLetter) => {
    if (!currentQ || isRevealed) return;
    if (!isPro && !studyState.vakaAnswers[currentQ.id] && totalSolvedCount >= FREE_QUESTION_LIMIT) {
      triggerHaptic('warning');
      onOpenPaywall(
        `Ücretsiz ${FREE_QUESTION_LIMIT} soru kotanızı doldurdunuz. 33.000+ sorunun tamamını çözmek için PRO’ya geçin.`
      );
      return;
    }

    const ok = letter === currentQ.correctOption;
    setSelectedOption(letter);
    if (ok) playSuccessSound(studyState.soundEnabled);
    else playTrapSound(studyState.soundEnabled);
    onRecordAnswer(currentQ, letter, ok);
  };

  const handleNext = () => {
    if (filteredQuestions.length === 0) return;
    triggerHaptic('light');
    setCurrentIndex((prev) => (prev + 1 < filteredQuestions.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (filteredQuestions.length === 0) return;
    triggerHaptic('light');
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredQuestions.length - 1));
  };

  const toggleSpeak = () => {
    if (!currentQ || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = isRevealed
      ? `${currentQ.stem} Doğru cevap ${currentQ.correctOption} şıkkı. ${currentQ.legalReasoning}`
      : currentQ.stem;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'tr-TR';
    utter.rate = 1.02;
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    setIsSpeaking(true);
  };

  return (
    <div className="space-y-3">
      {/* Compact Filter Bar */}
      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 p-3 space-y-2.5 shadow-2xs">
        {/* Search & Exam Filter */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder="Kanun maddesi, kavram veya süre ara (Örn: HMK 345, zımni ret, saklı pay)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 border border-transparent focus:border-indigo-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
            {EXAM_FILTERS.map((ef) => (
              <button
                key={ef.id}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setExamFilter(ef.id);
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition cursor-pointer ${
                  examFilter === ef.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {ef.label}
              </button>
            ))}
          </div>
        </div>

        {/* Smart Baskets */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {BASKETS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                triggerHaptic('selection');
                setBasket(b.id);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap transition cursor-pointer ${
                basket === b.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* 14-Branch Horizontal Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          <button
            type="button"
            onClick={() => {
              setBranchId('ALL');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition cursor-pointer ${
              branchId === 'ALL'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400'
            }`}
          >
            Tümü (14 Branş)
          </button>
          {LEGAL_BRANCHES.map((br) => (
            <button
              key={br.id}
              type="button"
              onClick={() => {
                triggerHaptic('selection');
                setBranchId(br.id);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition cursor-pointer ${
                branchId === br.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400'
              }`}
            >
              {br.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Active Question Card */}
      {!currentQ ? (
        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-8 text-center space-y-2">
          <Scale className="w-8 h-8 text-indigo-500 mx-auto" />
          <div className="font-display font-bold text-base text-slate-900 dark:text-white">
            Bu filtrede bekleyen soru yok
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Farklı bir sepet veya branş seçerek 15.840+ 5 şıklı soruya devam edebilirsin.
          </p>
          <button
            type="button"
            onClick={() => {
              setBasket('all');
              setBranchId('ALL');
              setExamFilter('ALL');
              setSearchText('');
            }}
            className="mt-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer"
          >
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Card Header */}
          <div className="px-4 sm:px-5 py-3 bg-slate-50/90 dark:bg-slate-900/70 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5 min-w-0">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10.5px] font-extrabold">
                {currentQ.branchName}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 text-[10.5px] font-bold">
                {currentQ.articleRef}
              </span>
              {currentQ.isOsymTwin && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold">
                  <Sparkles className="w-2.5 h-2.5" /> {currentQ.osymYearTag} İkizi
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mr-1">
                {safeIndex + 1} / {filteredQuestions.length.toLocaleString('tr-TR')}
              </span>
              <button
                type="button"
                onClick={toggleSpeak}
                aria-label="Sesli Oku"
                className={`p-1.5 rounded-lg transition cursor-pointer ${
                  isSpeaking
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  onToggleBookmark(currentQ.id);
                }}
                aria-label="Kaydet"
                className={`p-1.5 rounded-lg transition cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  shareLegalCardNatively(
                    `${currentQ.branchName} (${currentQ.articleRef})\n\n${currentQ.stem}\n\nDoğru Cevap: ${currentQ.correctOption}\n${currentQ.legalReasoning}`
                  )
                }
                aria-label="Paylaş"
                className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Question Stem & Clues */}
          <div className="p-4 sm:p-5 space-y-4">
            <div className="space-y-2.5">
              <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {currentQ.subTopic}
              </div>
              <p className="text-sm sm:text-[15.5px] font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                {currentQ.stem}
              </p>

              {/* Legal Clues Toggle */}
              {!isRevealed && currentQ.legalClues.length > 0 && (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setShowClues((v) => !v);
                    }}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{showClues ? 'Olay İpuçlarını Gizle' : 'Hukuki Olay İpucunu Göster'}</span>
                  </button>
                  {showClues && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {currentQ.legalClues.map((clue, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 text-[11px] font-semibold text-amber-800 dark:text-amber-200"
                        >
                          • {clue}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 5 Options (A-E) with Strike-through Elimination */}
            <div className="space-y-2">
              {currentQ.options.map((opt) => {
                const isCorrectOpt = opt.letter === currentQ.correctOption;
                const isChosen = activeSelection === opt.letter;
                const isElim = eliminated[opt.letter] && !isRevealed;

                let styleCls =
                  'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 hover:border-indigo-400 text-slate-800 dark:text-slate-100';
                if (isRevealed) {
                  if (isCorrectOpt) {
                    styleCls =
                      'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-1 ring-emerald-500/30';
                  } else if (isChosen) {
                    styleCls =
                      'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-950 dark:text-rose-100';
                  } else {
                    styleCls =
                      'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200/70 dark:border-slate-800/70 text-slate-500 dark:text-slate-400';
                  }
                } else if (isElim) {
                  styleCls =
                    'bg-slate-100/70 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800/60 text-slate-400 line-through opacity-60';
                }

                return (
                  <div
                    key={opt.letter}
                    className={`rounded-2xl border p-3 transition flex items-start gap-2.5 ${styleCls}`}
                  >
                    <button
                      type="button"
                      disabled={isRevealed}
                      onClick={() => handleSelectOption(opt.letter)}
                      className="flex-1 flex items-start gap-2.5 text-left cursor-pointer disabled:cursor-default"
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                          isRevealed && isCorrectOpt
                            ? 'bg-emerald-600 text-white'
                            : isRevealed && isChosen
                            ? 'bg-rose-600 text-white'
                            : 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300'
                        }`}
                      >
                        {opt.letter}
                      </span>
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="text-xs sm:text-[13.5px] font-medium leading-snug">
                          {opt.text}
                        </div>
                        {isRevealed && (showAllDiffs || isCorrectOpt || isChosen) && (
                          <div className="text-[11px] opacity-90 pt-1 border-t border-current/10 leading-snug">
                            {opt.differentialNote}
                          </div>
                        )}
                      </div>
                    </button>

                    {!isRevealed ? (
                      <button
                        type="button"
                        onClick={() => {
                          triggerHaptic('light');
                          setEliminated((p) => ({ ...p, [opt.letter]: !p[opt.letter] }));
                        }}
                        title="Şıkkı Ele"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-200/60 dark:hover:bg-slate-800 shrink-0 cursor-pointer"
                      >
                        <Slash className="w-3.5 h-3.5" />
                      </button>
                    ) : isCorrectOpt ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : isChosen ? (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Detailed Legal Explanation after Reveal */}
            {isRevealed && (
              <div className="rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/35 border border-indigo-200 dark:border-indigo-500/30 p-3.5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-indigo-800 dark:text-indigo-200">
                    Kanun Gerekçesi &amp; Sınav Analizi ({currentQ.articleRef})
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowAllDiffs((v) => !v)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-300 hover:underline cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{showAllDiffs ? 'Diğer Şıkları Gizle' : '5 Şıklı Ayırıcı Analiz'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  {currentQ.legalReasoning}
                </p>
                <div className="rounded-xl bg-white/80 dark:bg-slate-900/70 p-2.5 border border-indigo-200/70 dark:border-indigo-500/20 text-[11.5px] text-slate-700 dark:text-slate-300 space-y-1">
                  <div>
                    <strong className="text-indigo-700 dark:text-indigo-300">Görevli Merci / Yaptırım:</strong>{' '}
                    {currentQ.remedyNote}
                  </div>
                  <div>
                    <strong className="text-amber-700 dark:text-amber-300">Sınav Altın Kuralı:</strong>{' '}
                    {currentQ.highYieldPearl}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/70 dark:border-slate-800">
              <button
                type="button"
                onClick={handlePrev}
                className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Önceki
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-extrabold inline-flex items-center justify-center gap-1 shadow-md shadow-indigo-600/20 cursor-pointer"
              >
                Sonraki Soru <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
