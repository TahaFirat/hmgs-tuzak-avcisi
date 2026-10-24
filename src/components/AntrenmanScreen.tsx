import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { playSuccessSound, playTrapSound } from '../utils/audioFeedback';
import {
  Scale,
  CheckCircle2,
  XCircle,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  RotateCcw,
  ArrowRight,
  ChevronLeft,
  Info,
  AlertCircle,
  Shuffle,
  Search,
  SlidersHorizontal,
  X,
  Layers
} from 'lucide-react';
import {
  FILTER_PILLS,
  FilterPillCategory,
  TrapCard,
  TrapCategory,
  matchesFilterCategory
} from '../types/hmgs';

export type SolveStatusFilter = 'unsolved' | 'correct' | 'wrong' | 'bookmarked' | 'all';

interface AntrenmanScreenProps {
  cards: TrapCard[];
  solvedCardMap: Record<string, boolean>;
  selectedFilter: FilterPillCategory;
  onSelectFilter: (filter: FilterPillCategory) => void;
  bookmarkedCardIds: Set<string>;
  spacedRepetitionSessionIds: string[] | null;
  onExitSpacedRepetition: () => void;
  onAnswerCard: (card: TrapCard, userSaidCorrect: boolean, answeredRight: boolean) => void;
  onToggleBookmark: (cardId: string) => void;
  onGoToExam: () => void;
  defaultShowHighlights?: boolean;
  simpleMode?: boolean;
  soundEnabled?: boolean;
}

function getBaseRuleKey(id: string): string {
  return id.replace(/-(true|trap1|trap2|cross)$/, '');
}

function buildNonRoteDynamicDeck(list: TrapCard[], seed: number): TrapCard[] {
  if (list.length <= 1) return list;
  const copy = [...list];
  let s = seed || 1;
  const nextRand = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(nextRand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  for (let i = 1; i < copy.length - 1; i++) {
    if (getBaseRuleKey(copy[i].id) === getBaseRuleKey(copy[i - 1].id)) {
      const swapIdx = copy.findIndex(
        (cand, idx) =>
          idx > i && getBaseRuleKey(cand.id) !== getBaseRuleKey(copy[i - 1].id)
      );
      if (swapIdx !== -1) {
        [copy[i], copy[swapIdx]] = [copy[swapIdx], copy[i]];
      }
    }
  }

  return copy;
}

function renderCleanHighlightedText(
  statement: string,
  keywords: string[],
  showHighlights: boolean
) {
  if (!showHighlights || !keywords || keywords.length === 0) {
    return <span>{statement}</span>;
  }

  const validKeywords = keywords
    .map((k) => k.trim())
    .filter((k) => k.length > 0)
    .sort((a, b) => b.length - a.length);

  if (validKeywords.length === 0) {
    return <span>{statement}</span>;
  }

  const escaped = validKeywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = statement.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = validKeywords.some(
          (kw) => kw.toLocaleLowerCase('tr-TR') === part.toLocaleLowerCase('tr-TR')
        );
        if (isMatch) {
          return (
            <span
              key={i}
              className="underline decoration-indigo-500/70 dark:decoration-indigo-400/70 decoration-2 underline-offset-4 font-semibold text-indigo-950 dark:text-indigo-200 bg-indigo-500/10 dark:bg-indigo-500/15 px-1 rounded"
            >
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export const AntrenmanScreen: React.FC<AntrenmanScreenProps> = ({
  cards,
  solvedCardMap,
  selectedFilter,
  onSelectFilter,
  bookmarkedCardIds,
  spacedRepetitionSessionIds,
  onExitSpacedRepetition,
  onAnswerCard,
  onToggleBookmark,
  onGoToExam,
  defaultShowHighlights = true,
  simpleMode = false,
  soundEnabled = true
}) => {
  // Varsayılan olarak yalnızca çözülmemiş sorular gösterilir (çözülen sorular tekrar çıkmaz)
  const [solveFilter, setSolveFilter] = useState<SolveStatusFilter>('unsolved');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [pinnedCardId, setPinnedCardId] = useState<string | null>(null);

  // Her sepet için kullanıcının kaldığı soru indeksini ayrı ayrı hafızada tut
  const bucketIndicesRef = useRef<Record<SolveStatusFilter, number>>({
    unsolved: 0,
    correct: 0,
    wrong: 0,
    bookmarked: 0,
    all: 0
  });

  const [trapFilter, setTrapFilter] = useState<TrapCategory | 'Tümü'>('Tümü');
  const [topicFilter, setTopicFilter] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dragX, setDragX] = useState<number>(0);
  const [shuffleSeed, setShuffleSeed] = useState<number>(() => Math.floor(Math.random() * 999999) + 1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [sessionScore, setSessionScore] = useState<{ correct: number; total: number }>({
    correct: 0,
    total: 0
  });
  const [revealState, setRevealState] = useState<{
    answered: boolean;
    userSaidCorrect: boolean;
    caughtOrRight: boolean;
  } | null>(null);

  useEffect(() => {
    setTopicFilter('Tümü');
  }, [selectedFilter]);

  const availableTopics = useMemo(() => {
    const branchCards = cards.filter((c) => matchesFilterCategory(c.branch, selectedFilter));
    const counts = new Map<string, number>();
    for (const c of branchCards) {
      if (c.subTopic) {
        counts.set(c.subTopic, (counts.get(c.subTopic) || 0) + 1);
      }
    }
    return Array.from(counts.entries())
      .map(([topic, count]) => ({ topic, count }))
      .sort((a, b) => a.topic.localeCompare(b.topic, 'tr-TR'));
  }, [cards, selectedFilter]);

  const branchFilteredCards = useMemo(() => {
    if (spacedRepetitionSessionIds && spacedRepetitionSessionIds.length > 0) {
      const sessionSet = new Set(spacedRepetitionSessionIds);
      return cards.filter((c) => sessionSet.has(c.id));
    }
    const q = searchQuery.trim().toLocaleLowerCase('tr-TR');
    return cards.filter((c) => {
      if (!matchesFilterCategory(c.branch, selectedFilter)) return false;
      if (topicFilter !== 'Tümü' && c.subTopic !== topicFilter) return false;
      if (trapFilter !== 'Tümü') {
        if (trapFilter === 'Oran/Nisap Tuzağı' || trapFilter === 'Çoğunluk Tuzağı') {
          if (c.trapCategory !== 'Oran/Nisap Tuzağı' && c.trapCategory !== 'Çoğunluk Tuzağı') {
            return false;
          }
        } else if (c.trapCategory !== trapFilter) {
          return false;
        }
      }
      if (q) {
        const hay = `${c.branch} ${c.articleRef} ${c.subTopic || ''} ${c.statement}`.toLocaleLowerCase('tr-TR');
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [cards, selectedFilter, spacedRepetitionSessionIds, topicFilter, trapFilter, searchQuery]);

  // Önce tüm branş kartlarını sabit tohumla karıştırıyoruz ki soru çözüldüğünde kalan destenin sırası bozulmasın
  const shuffledBranchCards = useMemo(
    () => buildNonRoteDynamicDeck(branchFilteredCards, shuffleSeed),
    [branchFilteredCards, shuffleSeed]
  );

  // Sepet Sayaçları
  const unsolvedCountInBranch = useMemo(
    () => branchFilteredCards.filter((c) => solvedCardMap[c.id] === undefined).length,
    [branchFilteredCards, solvedCardMap]
  );

  const correctCountInBranch = useMemo(
    () => branchFilteredCards.filter((c) => solvedCardMap[c.id] === true).length,
    [branchFilteredCards, solvedCardMap]
  );

  const wrongCountInBranch = useMemo(
    () => branchFilteredCards.filter((c) => solvedCardMap[c.id] === false).length,
    [branchFilteredCards, solvedCardMap]
  );

  const bookmarkedCountInBranch = useMemo(
    () => branchFilteredCards.filter((c) => bookmarkedCardIds.has(c.id)).length,
    [branchFilteredCards, bookmarkedCardIds]
  );

  const doesCardMatchBucket = useCallback(
    (cardId: string, bucket: SolveStatusFilter): boolean => {
      if (bucket === 'unsolved') return solvedCardMap[cardId] === undefined;
      if (bucket === 'correct') return solvedCardMap[cardId] === true;
      if (bucket === 'wrong') return solvedCardMap[cardId] === false;
      if (bucket === 'bookmarked') return bookmarkedCardIds.has(cardId);
      return true;
    },
    [solvedCardMap, bookmarkedCardIds]
  );

  const activeDeck = useMemo(() => {
    if (spacedRepetitionSessionIds && spacedRepetitionSessionIds.length > 0) {
      return shuffledBranchCards;
    }
    return shuffledBranchCards.filter(
      (c) => doesCardMatchBucket(c.id, solveFilter) || c.id === pinnedCardId
    );
  }, [
    shuffledBranchCards,
    spacedRepetitionSessionIds,
    solveFilter,
    doesCardMatchBucket,
    pinnedCardId
  ]);

  const safeIndex = activeDeck.length > 0 ? currentIndex % activeDeck.length : 0;
  const currentCard = activeDeck[safeIndex];

  // Çözülmeyenler sepetindeyken genel ilerleme numarasını göster (Soru 1 -> 2 -> 3 ... şeklinde ilerler, başa dönmez)
  const solvedOutsideActiveDeck = Math.max(0, branchFilteredCards.length - activeDeck.length);
  const displayQuestionNumber =
    solveFilter === 'unsolved' && !spacedRepetitionSessionIds
      ? solvedOutsideActiveDeck + safeIndex + 1
      : safeIndex + 1;
  const displayTotalCount =
    solveFilter === 'unsolved' && !spacedRepetitionSessionIds
      ? branchFilteredCards.length
      : activeDeck.length;

  const resetAllBucketIndices = () => {
    bucketIndicesRef.current = {
      unsolved: 0,
      correct: 0,
      wrong: 0,
      bookmarked: 0,
      all: 0
    };
  };

  const handleFilterClick = (pill: FilterPillCategory) => {
    onSelectFilter(pill);
    resetAllBucketIndices();
    setPinnedCardId(null);
    setCurrentIndex(0);
    setRevealState(null);
  };

  const handleSwitchBucket = (target: SolveStatusFilter) => {
    // Mevcut sepetteki konumu kaydet
    bucketIndicesRef.current[solveFilter] = safeIndex;
    setPinnedCardId(null);
    setRevealState(null);
    setDragX(0);

    // Aynı sepete (örn. Kaydedilenler, Doğrular veya Yanlışlar) tekrar basılırsa Yeni Sorulara (kaldığı soruya) dön
    const nextBucket: SolveStatusFilter =
      solveFilter === target && target !== 'unsolved' ? 'unsolved' : target;

    setSolveFilter(nextBucket);
    setCurrentIndex(bucketIndicesRef.current[nextBucket] ?? 0);
  };

  const handleReshuffleDeck = () => {
    setShuffleSeed(Math.floor(Math.random() * 999999) + 1);
    resetAllBucketIndices();
    setPinnedCardId(null);
    setCurrentIndex(0);
    setRevealState(null);
  };

  const handleDecision = useCallback(
    (userSaidCorrect: boolean) => {
      if (!currentCard || revealState?.answered) return;

      const answeredRight =
        (currentCard.isCorrect && userSaidCorrect) ||
        (!currentCard.isCorrect && !userSaidCorrect);

      // Kartın açıklama ekranı açıkken listeden aniden kaybolmaması için sabitle
      setPinnedCardId(currentCard.id);
      onAnswerCard(currentCard, userSaidCorrect, answeredRight);

      if (answeredRight) {
        playSuccessSound(soundEnabled);
      } else {
        playTrapSound(soundEnabled);
      }

      setSessionScore((prev) => ({
        correct: prev.correct + (answeredRight ? 1 : 0),
        total: prev.total + 1
      }));

      setRevealState({
        answered: true,
        userSaidCorrect,
        caughtOrRight: answeredRight
      });
    },
    [currentCard, revealState, onAnswerCard, soundEnabled]
  );

  const handleNextCard = useCallback(() => {
    const cardLeavingCurrentBucket =
      !spacedRepetitionSessionIds &&
      currentCard &&
      pinnedCardId === currentCard.id &&
      !doesCardMatchBucket(currentCard.id, solveFilter);

    setPinnedCardId(null);
    setRevealState(null);
    setDragX(0);

    if (activeDeck.length > 0) {
      if (cardLeavingCurrentBucket) {
        // Çözülen soru mevcut sepetten (örn. Çözülmeyenler) çıktığı için sıradaki soru doğrudan safeIndex konumuna kayar
        const newLength = activeDeck.length - 1;
        const nextIdx = newLength > 0 ? safeIndex % newLength : 0;
        bucketIndicesRef.current[solveFilter] = nextIdx;
        setCurrentIndex(nextIdx);
      } else {
        const nextIdx = (safeIndex + 1) % activeDeck.length;
        bucketIndicesRef.current[solveFilter] = nextIdx;
        setCurrentIndex(nextIdx);
      }
    }
  }, [
    spacedRepetitionSessionIds,
    currentCard,
    pinnedCardId,
    doesCardMatchBucket,
    solveFilter,
    activeDeck.length,
    safeIndex
  ]);

  const handlePrevCard = useCallback(() => {
    const cardLeavingCurrentBucket =
      !spacedRepetitionSessionIds &&
      currentCard &&
      pinnedCardId === currentCard.id &&
      !doesCardMatchBucket(currentCard.id, solveFilter);

    setPinnedCardId(null);
    setRevealState(null);
    setDragX(0);

    if (activeDeck.length > 0) {
      const effectiveLen = cardLeavingCurrentBucket
        ? Math.max(1, activeDeck.length - 1)
        : activeDeck.length;
      const prevIdx = (safeIndex - 1 + effectiveLen) % effectiveLen;
      bucketIndicesRef.current[solveFilter] = prevIdx;
      setCurrentIndex(prevIdx);
    }
  }, [
    spacedRepetitionSessionIds,
    currentCard,
    pinnedCardId,
    doesCardMatchBucket,
    solveFilter,
    activeDeck.length,
    safeIndex
  ]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (!revealState?.answered) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handleDecision(false);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleDecision(true);
        } else if ((e.key === 'b' || e.key === 'B') && currentCard) {
          e.preventDefault();
          onToggleBookmark(currentCard.id);
        }
      } else {
        if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowRight') {
          e.preventDefault();
          handleNextCard();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [revealState, handleDecision, handleNextCard, currentCard, onToggleBookmark]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setDragX(0);
    if (revealState?.answered) return;
    if (info.offset.x < -75) {
      handleDecision(false);
    } else if (info.offset.x > 75) {
      handleDecision(true);
    }
  };

  const isBookmarked = currentCard ? bookmarkedCardIds.has(currentCard.id) : false;
  const activeExtraFiltersCount =
    (solveFilter === 'all' ? 1 : 0) +
    (topicFilter !== 'Tümü' ? 1 : 0) +
    (trapFilter !== 'Tümü' ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0);

  return (
    <div className="space-y-4 pb-10">
      {/* 1. Üst Branş Seçimi (Yatay Kaydırılabilir, Ferah) */}
      {spacedRepetitionSessionIds ? (
        <div className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-900 dark:text-indigo-200">
          <div className="flex items-center gap-2.5 text-sm font-semibold">
            <RotateCcw className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Özel Tekrar Seansı ({activeDeck.length} Soru)</span>
          </div>
          <button
            type="button"
            onClick={onExitSpacedRepetition}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors cursor-pointer shrink-0"
          >
            Normal Antrenmana Dön
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {/* Branş Sekmeleri */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {FILTER_PILLS.map((pill) => {
              const active = selectedFilter === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => handleFilterClick(pill)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    active
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/50'
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* 2. Dörtlü Soru Sepetleri (Yeni Sorular | Doğru Sepeti | Yanlış Sepeti | Kaydedilenler) */}
          <div className={`${simpleMode ? '!hidden' : ''} flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5`}>
            {/* Yeni / Çözülmeyenler Sepeti */}
            <button
              type="button"
              onClick={() => handleSwitchBucket('unsolved')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 border transition-all cursor-pointer shrink-0 ${
                solveFilter === 'unsolved'
                  ? 'bg-slate-900 dark:bg-indigo-600 text-white border-slate-900 dark:border-indigo-600 shadow-2xs'
                  : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border-slate-200/90 dark:border-slate-800 hover:border-indigo-500/40'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>Yeni Sorular ({unsolvedCountInBranch})</span>
            </button>

            {/* Doğru Sepeti */}
            <button
              type="button"
              onClick={() => handleSwitchBucket('correct')}
              title="Doğru çözdüğünüz sorular sepeti (Tekrar basınca yeni sorulara döner)"
              className={`px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 border transition-all cursor-pointer shrink-0 ${
                solveFilter === 'correct'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                  : 'bg-white dark:bg-[#111827] text-emerald-700 dark:text-emerald-400 border-emerald-500/25 hover:border-emerald-500/50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Doğrular ({correctCountInBranch})</span>
            </button>

            {/* Yanlış Sepeti */}
            <button
              type="button"
              onClick={() => handleSwitchBucket('wrong')}
              title="Yanlış çözdüğünüz sorular sepeti (Tekrar basınca yeni sorulara döner)"
              className={`px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 border transition-all cursor-pointer shrink-0 ${
                solveFilter === 'wrong'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-2xs'
                  : 'bg-white dark:bg-[#111827] text-rose-700 dark:text-rose-400 border-rose-500/25 hover:border-rose-500/50'
              }`}
            >
              <XCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Yanlışlar ({wrongCountInBranch})</span>
            </button>

            {/* Kaydedilenler Sepeti */}
            <button
              type="button"
              onClick={() => handleSwitchBucket('bookmarked')}
              title="Kaydettiğiniz sorular (Tekrar basınca kaldığınız soruya döner)"
              className={`px-3.5 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 border transition-all cursor-pointer shrink-0 ${
                solveFilter === 'bookmarked'
                  ? 'bg-amber-500 text-white border-amber-500 shadow-2xs'
                  : 'bg-white dark:bg-[#111827] text-amber-700 dark:text-amber-400 border-amber-500/25 hover:border-amber-500/50'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 shrink-0" />
              <span>Kaydedilen ({bookmarkedCountInBranch})</span>
            </button>
          </div>

          {/* 3. Kompakt Üst Durum & Filtre Satırı */}
          <div className={`${simpleMode ? '!hidden' : ''} flex items-center justify-between gap-2 px-1`}>
            <div className="flex items-center gap-2 min-w-0 flex-wrap">
              <span className="font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-nowrap">
                {activeDeck.length > 0 ? (
                  solveFilter === 'unsolved' && !spacedRepetitionSessionIds ? (
                    `Soru ${displayQuestionNumber} / ${displayTotalCount}`
                  ) : solveFilter === 'correct' ? (
                    `Doğru Sepeti: ${safeIndex + 1} / ${activeDeck.length}`
                  ) : solveFilter === 'wrong' ? (
                    `Yanlış Sepeti: ${safeIndex + 1} / ${activeDeck.length}`
                  ) : solveFilter === 'bookmarked' ? (
                    `Kaydedilen: ${safeIndex + 1} / ${activeDeck.length}`
                  ) : (
                    `Soru ${safeIndex + 1} / ${activeDeck.length}`
                  )
                ) : (
                  '0 Soru'
                )}
              </span>

              {solveFilter === 'unsolved' && !spacedRepetitionSessionIds && activeDeck.length > 0 && (
                <span className="px-2 py-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-semibold whitespace-nowrap">
                  {unsolvedCountInBranch} Kalan
                </span>
              )}

              {solveFilter !== 'unsolved' && !spacedRepetitionSessionIds && (
                <button
                  type="button"
                  onClick={() => handleSwitchBucket('unsolved')}
                  className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold hover:bg-indigo-500/20 transition-colors cursor-pointer"
                >
                  ← Kaldığım Soruya Dön
                </button>
              )}

              {sessionScore.total > 0 && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold whitespace-nowrap">
                  Bu Oturum: {sessionScore.correct}/{sessionScore.total}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Detaylı Filtre Aç/Kapa */}
              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 border transition-colors cursor-pointer ${
                  showFilters || activeExtraFiltersCount > 0
                    ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-700'
                    : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-300 border-slate-200/90 dark:border-slate-800'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filtre</span>
                {activeExtraFiltersCount > 0 && (
                  <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">
                    {activeExtraFiltersCount}
                  </span>
                )}
              </button>

              {/* Desteyi Karıştır */}
              <button
                type="button"
                onClick={handleReshuffleDeck}
                title="Kalan Soruları Yeniden Karıştır"
                className="p-2 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-indigo-500 transition-colors cursor-pointer"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Açılır Detaylı Filtre Paneli */}
          {showFilters && !simpleMode && (
            <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Detaylı Soru Filtreleri
                </span>
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Alt Konu ve Odak Türü */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableTopics.length > 0 && (
                  <select
                    value={topicFilter}
                    onChange={(e) => {
                      setTopicFilter(e.target.value);
                      resetAllBucketIndices();
                      setPinnedCardId(null);
                      setCurrentIndex(0);
                      setRevealState(null);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Tümü">Tüm Alt Konular</option>
                    {availableTopics.map(({ topic, count }) => (
                      <option key={topic} value={topic}>
                        {topic} ({count})
                      </option>
                    ))}
                  </select>
                )}

                <select
                  value={trapFilter}
                  onChange={(e) => {
                    setTrapFilter(e.target.value as TrapCategory | 'Tümü');
                    resetAllBucketIndices();
                    setPinnedCardId(null);
                    setCurrentIndex(0);
                    setRevealState(null);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Tümü">Tüm Odak Konuları</option>
                  <option value="Süre Tuzağı">Odak: Süre & Usul</option>
                  <option value="Görev/Yetki Tuzağı">Odak: Görev & Yetki</option>
                  <option value="Oran/Nisap Tuzağı">Odak: Oran & Nisap</option>
                  <option value="İstisna/Kesinlik Tuzağı">Odak: İstisna & Kesinlik</option>
                </select>
              </div>

              {/* Arama */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    resetAllBucketIndices();
                    setPinnedCardId(null);
                    setCurrentIndex(0);
                    setRevealState(null);
                  }}
                  placeholder="Madde numarası veya kavram ara..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. Ana Soru Kartı (Geniş, Ferah, Rahat Okunabilir) */}
      {!currentCard ? (
        <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 text-center space-y-4 shadow-2xs">
          <Scale className="w-10 h-10 text-indigo-500 mx-auto" />
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
            {solveFilter === 'unsolved'
              ? 'Bu Bölümdeki Tüm Yeni Soruları Tamamladınız!'
              : solveFilter === 'correct'
              ? 'Doğru Sepetinizde Henüz Soru Yok'
              : solveFilter === 'wrong'
              ? 'Yanlış Sepetinizde Soru Bulunmuyor'
              : solveFilter === 'bookmarked'
              ? 'Henüz Kaydedilen Soru Yok'
              : 'Bu Filtrede Soru Bulunamadı'}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            {solveFilter === 'unsolved'
              ? 'Çözdüğünüz sorular Doğrular ve Yanlışlar sepetlerine ayrıldı. Dilerseniz sepetlerinizi inceleyebilir veya Deneme Sınavına geçebilirsiniz.'
              : solveFilter === 'bookmarked'
              ? 'Soruların sağ üstündeki kaydet ikonuna dokunarak önemli bulduğunuz mevzuat maddelerini buraya ekleyebilirsiniz.'
              : solveFilter === 'correct'
              ? 'Antrenman sırasında doğru yanıtladığınız sorular otomatik olarak bu sepete eklenir.'
              : solveFilter === 'wrong'
              ? 'Harika! Bu branşta yanlış yanıtlanmış sorunuz bulunmuyor.'
              : 'Filtreleri sıfırlayarak çalışmaya devam edebilirsiniz.'}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {solveFilter !== 'unsolved' && (
              <button
                type="button"
                onClick={() => handleSwitchBucket('unsolved')}
                className="px-5 py-3 rounded-2xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-indigo-500 transition-colors cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>Kaldığım Yeni Sorulara Dön ({unsolvedCountInBranch})</span>
              </button>
            )}
            {solveFilter === 'unsolved' && wrongCountInBranch > 0 && (
              <button
                type="button"
                onClick={() => handleSwitchBucket('wrong')}
                className="px-5 py-3 rounded-2xl bg-rose-600 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-rose-500 transition-colors cursor-pointer"
              >
                <XCircle className="w-4 h-4" />
                <span>Yanlış Sepetini Çöz ({wrongCountInBranch})</span>
              </button>
            )}
            <button
              type="button"
              onClick={onGoToExam}
              className="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:border-indigo-500 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>Deneme Sınavına Geç</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              drag={revealState?.answered ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.45}
              onDrag={(_, info) => setDragX(info.offset.x)}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: revealState?.answered ? 0 : dragX * 0.02
              }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.16 }}
              className={`bg-white dark:bg-[#111827] rounded-3xl border transition-colors p-6 sm:p-9 lg:p-10 shadow-2xs relative ${
                dragX < -40
                  ? 'border-rose-500 bg-rose-500/5'
                  : dragX > 40
                  ? 'border-emerald-500 bg-emerald-500/5'
                  : 'border-slate-200/90 dark:border-slate-800'
              }`}
            >
              {/* Sade Kart Üst Bilgisi: Branş & Madde + Sepet Rozeti + Kaydet Butonu */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap min-w-0">
                  <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-bold">
                    {currentCard.branch} • {currentCard.articleRef.replace(/^M\.\s*/i, 'Madde ')}
                  </span>
                  {currentCard.subTopic && (
                    <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 truncate">
                      {currentCard.subTopic}
                    </span>
                  )}
                  {solvedCardMap[currentCard.id] === true && !revealState?.answered && (
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                      ✓ Doğru Sepetinde
                    </span>
                  )}
                  {solvedCardMap[currentCard.id] === false && !revealState?.answered && (
                    <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs font-bold">
                      ✗ Yanlış Sepetinde
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onToggleBookmark(currentCard.id)}
                  title={isBookmarked ? 'Kaydedilenlerden Çıkar' : 'Soruyu Kaydet'}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    isBookmarked
                      ? 'bg-amber-500/15 border-amber-500/40 text-amber-600 dark:text-amber-400'
                      : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-white'
                  }`}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="w-5 h-5" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Soru Metni: Ferah Boşluk ve Yüksek Okunabilirlik */}
              <div className="my-7 sm:my-10">
                <p className="font-display text-[17px] sm:text-[21px] font-medium leading-[1.75] text-slate-900 dark:text-slate-100">
                  {renderCleanHighlightedText(
                    currentCard.statement,
                    currentCard.highlightedKeywords,
                    defaultShowHighlights && !simpleMode
                  )}
                </p>
              </div>

              {/* Cevap Sonrası Açıklama Alanı */}
              <AnimatePresence>
                {revealState?.answered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden border-t border-slate-200 dark:border-slate-800 pt-6 space-y-4"
                  >
                    {/* Sonuç Başlığı */}
                    <div
                      className={`p-4 rounded-2xl flex items-center justify-between gap-3 flex-wrap ${
                        revealState.caughtOrRight
                          ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-900 dark:text-emerald-200'
                          : 'bg-rose-500/10 border border-rose-500/25 text-rose-900 dark:text-rose-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {revealState.caughtOrRight ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
                        )}
                        <div className="min-w-0">
                          <div className="font-display font-bold text-sm sm:text-base">
                            {revealState.caughtOrRight
                              ? !currentCard.isCorrect
                                ? 'Doğru! Tuzağı Yakaladınız'
                                : 'Doğru! Kanun Hükmünü Onayladınız'
                              : currentCard.isCorrect
                              ? 'Yanılgı! Bu Hüküm Kanuna Uygundu'
                              : 'Tuzağa Düştünüz!'}
                          </div>
                          <div className="text-[11px] opacity-80 font-medium">
                            {revealState.caughtOrRight
                              ? '✓ Bu soru Doğrular sepetine eklendi, yeni sorularda tekrar çıkmayacak.'
                              : '✗ Bu soru Yanlışlar sepetine eklendi.'}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-xl shrink-0 ${
                          currentCard.isCorrect
                            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                            : 'bg-rose-500/20 text-rose-700 dark:text-rose-300'
                        }`}
                      >
                        {currentCard.isCorrect ? 'Kanuna Uygun' : currentCard.trapCategory}
                      </span>
                    </div>

                    {/* Yanlış → Doğru İbare Karşılaştırması */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                      {!currentCard.isCorrect && currentCard.wrongPhrase ? (
                        <div className="flex flex-wrap items-center gap-2.5 text-sm">
                          <span className="px-3 py-1 rounded-xl bg-rose-500/15 text-rose-700 dark:text-rose-300 line-through font-semibold">
                            {currentCard.wrongPhrase}
                          </span>
                          <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold">
                            {currentCard.correctPhrase}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="text-slate-500 dark:text-slate-400">Doğru Hüküm:</span>
                          <span className="px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold">
                            {currentCard.correctPhrase}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Mevzuat Açıklaması */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed flex items-start gap-3">
                      <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <div>{currentCard.explanation}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          {/* 5. Alt Karar Çubuğu */}
          <div className="fixed lg:static inset-x-0 bottom-[calc(56px+env(safe-area-inset-bottom))] lg:bottom-auto z-30 px-3.5 py-2.5 lg:p-0 bg-white/90 dark:bg-[#0D1320]/90 backdrop-blur-md lg:backdrop-blur-none lg:bg-transparent dark:lg:bg-transparent border-t border-slate-200/70 dark:border-slate-800/70 lg:border-0">
            <div className="max-w-4xl mx-auto">
              {!revealState?.answered ? (
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => handleDecision(false)}
                    className="min-h-14 px-4 rounded-2xl bg-rose-500/10 hover:bg-rose-600 active:bg-rose-600 text-rose-700 dark:text-rose-300 hover:text-white active:text-white border border-rose-500/35 flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <XCircle className="w-5 h-5 shrink-0" />
                    <span className="font-display font-bold text-sm sm:text-base">Tuzak Var</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecision(true)}
                    className="min-h-14 px-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-600 active:bg-emerald-600 text-emerald-700 dark:text-emerald-300 hover:text-white active:text-white border border-emerald-500/35 flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="font-display font-bold text-sm sm:text-base">Kanuna Uygun</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-stretch gap-3">
                  <button
                    type="button"
                    onClick={handlePrevCard}
                    title="Önceki Soru"
                    className="min-h-14 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextCard}
                    className="flex-1 min-h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-500 text-white font-display font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Sıradaki Soru</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="h-[76px] lg:hidden" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};
