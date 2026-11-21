import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Bookmark,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Search,
  Share2,
  Volume2,
  VolumeX,
  XCircle,
  Zap
} from 'lucide-react';
import {
  LEGAL_BRANCHES,
  LEGAL_SPOT_CARDS,
  matchesLegalSearch
} from '../data/legalQuestionRepository';
import { LegalBranchId, LegalExamType, LegalSpotCard } from '../types/legalEngine';
import { LegalStudyState } from '../services/legalStudyStorage';
import { FREE_QUESTION_LIMIT, shareLegalCardNatively, triggerHaptic } from '../services/nativeBridge';
import { playSuccessSound, playTrapSound } from '../utils/audioFeedback';
import { QueueBasket } from './AnaSayfaScreen';

interface DogruYanlisScreenProps {
  studyState: LegalStudyState;
  isPro: boolean;
  totalSolvedCount: number;
  initialBasket?: QueueBasket;
  initialBranchId?: 'ALL' | LegalBranchId;
  initialExamFilter?: 'ALL' | LegalExamType;
  onRecordSpot: (card: LegalSpotCard, userChoseTrue: boolean, isCorrect: boolean) => void;
  onToggleBookmark: (id: string) => void;
  onOpenPaywall: (reason?: string) => void;
}

const SPOT_BASKETS: Array<{ id: QueueBasket; label: string }> = [
  { id: 'unsolved', label: 'Yeni Kartlar' },
  { id: 'wrong', label: 'Yanlışlarım' },
  { id: 'bookmarked', label: 'Kayıtlı' },
  { id: 'correct', label: 'Doğrularım' },
  { id: 'all', label: 'Tümü' }
];

function renderHighlightedStatement(statement: string, highlight: string, isTrue: boolean) {
  if (!highlight || highlight.length < 3) return statement;
  const idx = statement.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return statement;
  const before = statement.slice(0, idx);
  const match = statement.slice(idx, idx + highlight.length);
  const after = statement.slice(idx + highlight.length);
  return (
    <>
      {before}
      <mark
        className={`px-1.5 py-0.5 rounded-md font-extrabold ${
          isTrue
            ? 'bg-emerald-500/20 text-emerald-800 dark:text-emerald-200'
            : 'bg-rose-500/20 text-rose-800 dark:text-rose-200 underline decoration-rose-500 decoration-2'
        }`}
      >
        {match}
      </mark>
      {after}
    </>
  );
}

export const DogruYanlisScreen: React.FC<DogruYanlisScreenProps> = ({
  studyState,
  isPro,
  totalSolvedCount,
  initialBasket = 'unsolved',
  initialBranchId = 'ALL',
  initialExamFilter = 'ALL',
  onRecordSpot,
  onToggleBookmark,
  onOpenPaywall
}) => {
  const [basket, setBasket] = useState<QueueBasket>(initialBasket);
  const [branchId, setBranchId] = useState<'ALL' | LegalBranchId>(initialBranchId);
  const [examFilter, setExamFilter] = useState<'ALL' | LegalExamType>(initialExamFilter);
  const [searchText, setSearchText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  useEffect(() => {
    setBasket(initialBasket === 'osym_twin' ? 'unsolved' : initialBasket);
    setBranchId(initialBranchId);
    setExamFilter(initialExamFilter);
    setCurrentIndex(0);
  }, [initialBasket, initialBranchId, initialExamFilter]);

  const filteredCards = useMemo(() => {
    const qLower = searchText.trim().toLowerCase();
    const out: LegalSpotCard[] = [];
    for (let i = 0; i < LEGAL_SPOT_CARDS.length; i++) {
      const c = LEGAL_SPOT_CARDS[i];
      if (branchId !== 'ALL' && c.branchId !== branchId) continue;
      if (examFilter !== 'ALL' && !c.exams.includes(examFilter)) continue;

      const ans = studyState.spotAnswers[c.id];
      if (basket === 'unsolved' && ans) continue;
      if (basket === 'wrong' && (!ans || ans.isCorrect)) continue;
      if (basket === 'correct' && (!ans || !ans.isCorrect)) continue;
      if (basket === 'bookmarked' && !studyState.bookmarkedSpotIds[c.id]) continue;

      if (qLower && !matchesLegalSearch(c, qLower)) continue;
      out.push(c);
    }
    return out;
  }, [basket, branchId, examFilter, searchText, studyState.spotAnswers, studyState.bookmarkedSpotIds]);

  const safeIndex = filteredCards.length > 0 ? Math.min(currentIndex, filteredCards.length - 1) : 0;
  const card = filteredCards[safeIndex] || null;
  const isRevealed = userChoice !== null;
  const isBookmarked = card ? !!studyState.bookmarkedSpotIds[card.id] : false;

  useEffect(() => {
    setUserChoice(null);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [card?.id]);

  useEffect(() => {
    const onShortcut = (e: Event) => {
      const cmd = (e as CustomEvent<Record<string, string>>).detail?.command;
      if (!card) return;
      if (cmd === 'answer_true') handleDecision(true);
      if (cmd === 'answer_trap') handleDecision(false);
      if (cmd === 'next_card') handleNext();
      if (cmd === 'toggle_bookmark') onToggleBookmark(card.id);
    };
    window.addEventListener('hmgs:keyboardShortcut', onShortcut);
    return () => window.removeEventListener('hmgs:keyboardShortcut', onShortcut);
  });

  const handleDecision = (choseTrue: boolean) => {
    if (!card || isRevealed) return;
    if (!isPro && !studyState.spotAnswers[card.id] && totalSolvedCount >= FREE_QUESTION_LIMIT) {
      triggerHaptic('warning');
      onOpenPaywall(
        `Ücretsiz ${FREE_QUESTION_LIMIT} soru kotanız doldu. 17.200+ Doğru/Yanlış kartına sınırsız erişmek için PRO’ya geçin.`
      );
      return;
    }

    const ok = choseTrue === card.isTrue;
    setUserChoice(choseTrue);
    if (ok) playSuccessSound(studyState.soundEnabled);
    else playTrapSound(studyState.soundEnabled);
    onRecordSpot(card, choseTrue, ok);
  };

  const handleNext = () => {
    if (filteredCards.length === 0) return;
    triggerHaptic('light');
    setCurrentIndex((prev) => (prev + 1 < filteredCards.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (filteredCards.length === 0) return;
    triggerHaptic('light');
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCards.length - 1));
  };

  const toggleSpeak = () => {
    if (!card || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = isRevealed
      ? `${card.statement} ${card.isTrue ? 'Doğru hüküm.' : 'Tuzak veya yanlış hüküm.'} ${card.correctLegalFact}`
      : card.statement;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'tr-TR';
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    setIsSpeaking(true);
  };

  return (
    <div className="space-y-3">
      {/* Filter Bar */}
      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 p-3 space-y-2.5 shadow-2xs">
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
              placeholder="Spot kartlarda ara (Örn: 2 hafta, HAGB, zımni ret, kıdem)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-amber-500/40"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
            {(['ALL', 'HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'] as const).map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => {
                  setExamFilter(ex);
                  setCurrentIndex(0);
                }}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap cursor-pointer ${
                  examFilter === ex
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {ex === 'ALL' ? 'Tüm Sınavlar' : ex}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {SPOT_BASKETS.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                setBasket(b.id);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap cursor-pointer ${
                basket === b.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          <button
            type="button"
            onClick={() => {
              setBranchId('ALL');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap cursor-pointer ${
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
                setBranchId(br.id);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap cursor-pointer ${
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

      {/* Card */}
      {!card ? (
        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-8 text-center space-y-2">
          <Zap className="w-8 h-8 text-amber-500 mx-auto" />
          <div className="font-display font-bold text-base text-slate-900 dark:text-white">
            Bu filtrede kart kalmadı
          </div>
          <button
            type="button"
            onClick={() => {
              setBasket('all');
              setBranchId('ALL');
              setExamFilter('ALL');
              setSearchText('');
            }}
            className="mt-2 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold cursor-pointer"
          >
            Tüm Kartları Göster
          </button>
        </div>
      ) : (
        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-4 sm:px-5 py-3 bg-slate-50/90 dark:bg-slate-900/70 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10.5px] font-extrabold">
                {card.branchName}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 text-[10.5px] font-bold">
                {card.articleRef}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mr-1">
                {safeIndex + 1} / {filteredCards.length.toLocaleString('tr-TR')}
              </span>
              <button
                type="button"
                onClick={toggleSpeak}
                className={`p-1.5 rounded-lg cursor-pointer ${
                  isSpeaking
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  onToggleBookmark(card.id);
                }}
                className={`p-1.5 rounded-lg cursor-pointer ${
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
                    `${card.branchName} (${card.articleRef})\n\n"${card.statement}"\n\nSonuç: ${
                      card.isTrue ? 'DOĞRU HÜKÜM' : 'YANLIŞ / TUZAK'
                    }\n${card.correctLegalFact}`
                  )
                }
                className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-5">
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {card.subTopic}
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                {isRevealed
                  ? renderHighlightedStatement(card.statement, card.criticalHighlight, card.isTrue)
                  : card.statement}
              </p>
            </div>

            {!isRevealed ? (
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleDecision(true)}
                  className="py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-extrabold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>DOĞRU</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDecision(false)}
                  className="py-4 px-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-display font-extrabold text-sm shadow-md shadow-rose-600/20 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <AlertTriangle className="w-5 h-5" />
                  <span>YANLIŞ / TUZAK</span>
                </button>
              </div>
            ) : (
              <div
                className={`rounded-2xl border p-4 space-y-2.5 ${
                  userChoice === card.isTrue
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/35'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-500/35'
                }`}
              >
                <div className="flex items-center gap-2 font-display font-extrabold text-sm">
                  {userChoice === card.isTrue ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800 dark:text-emerald-200">
                        Doğru Tespit! ({card.isTrue ? 'Kanunla Uyumlu' : 'Tuzak Yakalandı'})
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span className="text-rose-800 dark:text-rose-200">
                        Dikkat! Doğrusu: {card.isTrue ? 'DOĞRU HÜKÜM' : 'YANLIŞ / TUZAK'}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 leading-relaxed">
                  <strong>Doğru Mevzuat:</strong> {card.correctLegalFact}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong>Altın Kural:</strong> {card.highYieldPearl}
                </p>
              </div>
            )}

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
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-extrabold inline-flex items-center justify-center gap-1 shadow-md shadow-amber-500/20 cursor-pointer"
              >
                Sonraki Kart <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
