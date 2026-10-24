import React, { useState, useEffect, useMemo } from 'react';
import {
  RotateCcw,
  Trash2,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Search
} from 'lucide-react';
import {
  FILTER_PILLS,
  FilterPillCategory,
  MistakeVaultEntry,
  TrapCard,
  matchesFilterCategory
} from '../types/hmgs';

export type DefterimSubFilter = 'all' | 'bookmarks' | 'mistakes' | 'correct' | 'due';

interface TuzakDefterimScreenProps {
  cards: TrapCard[];
  vaultEntries: MistakeVaultEntry[];
  solvedCardMap?: Record<string, boolean>;
  caughtPercentage: number;
  dueTodayCount: number;
  mostMissedAreaLabel: string;
  initialViewMode?: DefterimSubFilter;
  onStartSpacedRepetition: (cardIds: string[]) => void;
  onRemoveFromVault: (cardId: string) => void;
  onResetSolvedCard?: (cardId: string) => void;
}

interface BucketItem {
  card: TrapCard;
  entry?: MistakeVaultEntry;
  isBookmarked: boolean;
  isMistake: boolean;
  isCorrect: boolean;
}

export const TuzakDefterimScreen: React.FC<TuzakDefterimScreenProps> = ({
  cards,
  vaultEntries,
  solvedCardMap = {},
  initialViewMode = 'all',
  onStartSpacedRepetition,
  onRemoveFromVault,
  onResetSolvedCard
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterPillCategory>('Tümü');
  const [viewMode, setViewMode] = useState<DefterimSubFilter>(
    initialViewMode === 'due' ? 'mistakes' : initialViewMode
  );
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialViewMode) {
      setViewMode(initialViewMode === 'due' ? 'mistakes' : initialViewMode);
    }
  }, [initialViewMode]);

  const allPopulated = useMemo<BucketItem[]>(() => {
    const vaultMap = new Map<string, MistakeVaultEntry>();
    for (const v of vaultEntries) {
      vaultMap.set(v.cardId, v);
    }

    const items: BucketItem[] = [];
    for (const card of cards) {
      const entry = vaultMap.get(card.id);
      const solvedStatus = solvedCardMap[card.id];
      const isBookmarked = !!entry?.manualBookmark;
      const isMistake = solvedStatus === false;
      const isCorrect = solvedStatus === true;

      if (isBookmarked || isMistake || isCorrect) {
        items.push({
          card,
          entry,
          isBookmarked,
          isMistake,
          isCorrect
        });
      }
    }
    return items;
  }, [vaultEntries, cards, solvedCardMap]);

  const branchFiltered = useMemo(() => {
    return allPopulated.filter((item) =>
      matchesFilterCategory(item.card.branch, selectedFilter)
    );
  }, [allPopulated, selectedFilter]);

  const countBookmarks = useMemo(
    () => branchFiltered.filter((item) => item.isBookmarked).length,
    [branchFiltered]
  );
  const countMistakes = useMemo(
    () => branchFiltered.filter((item) => item.isMistake).length,
    [branchFiltered]
  );
  const countCorrect = useMemo(
    () => branchFiltered.filter((item) => item.isCorrect).length,
    [branchFiltered]
  );

  const populatedVault = useMemo(() => {
    const q = searchQuery.trim().toLocaleLowerCase('tr-TR');

    return branchFiltered.filter((item) => {
      if (viewMode === 'bookmarks' && !item.isBookmarked) return false;
      if (viewMode === 'mistakes' && !item.isMistake) return false;
      if (viewMode === 'correct' && !item.isCorrect) return false;

      if (q) {
        const haystack = `${item.card.branch} ${item.card.articleRef} ${item.card.statement} ${item.card.correctPhrase} ${item.card.wrongPhrase || ''} ${item.card.explanation}`.toLocaleLowerCase('tr-TR');
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [branchFiltered, viewMode, searchQuery]);

  const activeCardIds = populatedVault.map((item) => item.card.id);

  return (
    <div className="space-y-6 py-2 pb-12">
      {/* 1. Üst Başlık ve Hızlı Tekrar Butonu */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-1">
        <div>
          <h1 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
            Defterim & Soru Sepetleri
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Doğru, yanlış ve kaydettiğiniz sorular ayrı sepetlerde saklanır.
          </p>
        </div>

        {populatedVault.length > 0 && (
          <button
            type="button"
            onClick={() => onStartSpacedRepetition(activeCardIds)}
            className="px-4 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-display font-semibold text-xs sm:text-sm inline-flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Bu Sepeti Çöz ({populatedVault.length})</span>
          </button>
        )}
      </div>

      {/* 2. Dörtlü Sepet Seçici: Yanlışlar | Doğrular | Kaydedilenler | Tümü */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800">
        <button
          type="button"
          onClick={() => setViewMode('mistakes')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 truncate ${
            viewMode === 'mistakes'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Yanlış Sepeti ({countMistakes})</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('correct')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 truncate ${
            viewMode === 'correct'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Doğru Sepeti ({countCorrect})</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('bookmarks')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 truncate ${
            viewMode === 'bookmarks'
              ? 'bg-amber-500 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Kaydedilen ({countBookmarks})</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('all')}
          className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer truncate ${
            viewMode === 'all'
              ? 'bg-white dark:bg-[#111827] text-indigo-600 dark:text-indigo-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          Tümü ({branchFiltered.length})
        </button>
      </div>

      {/* 3. Tek Satır Arama & Branş Seçici */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="relative sm:col-span-2">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Madde numarası veya kavram ara..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value as FilterPillCategory)}
          className="w-full px-4 py-2.5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#111827] text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
        >
          {FILTER_PILLS.map((pill) => (
            <option key={pill} value={pill}>
              {pill === 'Tümü' ? 'Tüm Hukuk Branşları' : pill}
            </option>
          ))}
        </select>
      </div>

      {/* 4. Soru Kartları Listesi (Ferah Boşluklu) */}
      {populatedVault.length === 0 ? (
        <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-10 sm:p-12 text-center space-y-3 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 text-indigo-500 flex items-center justify-center mx-auto">
            {viewMode === 'bookmarks' ? (
              <Bookmark className="w-6 h-6 text-amber-500" />
            ) : viewMode === 'correct' ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            ) : (
              <Sparkles className="w-6 h-6" />
            )}
          </div>
          <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
            {viewMode === 'bookmarks'
              ? 'Henüz Kaydedilen Soru Yok'
              : viewMode === 'correct'
              ? 'Doğru Sepetinizde Henüz Soru Yok'
              : viewMode === 'mistakes'
              ? 'Yanlış Sepetinizde Soru Bulunmuyor'
              : 'Bu Bölümde Soru Bulunmuyor'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            {viewMode === 'bookmarks'
              ? 'Soru çözerken sağ üstteki kaydet ikonuna dokunarak önemli maddeleri buraya ekleyebilirsiniz.'
              : viewMode === 'correct'
              ? 'Antrenman sırasında doğru yanıtladığınız sorular otomatik olarak Doğru Sepetine eklenir.'
              : 'Antrenman sırasında yanlış yanıtladığınız sorular otomatik olarak Yanlış Sepetine eklenir.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {populatedVault.map(({ card, isBookmarked, isMistake, isCorrect }) => (
            <div
              key={card.id}
              className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between space-y-5 shadow-2xs hover:border-indigo-500/40 transition-all"
            >
              <div className="space-y-4">
                {/* Üst Satır: Branş & Madde + Sepet Etiketleri + Silme Butonu */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                      {card.branch} • {card.articleRef.replace(/^M\.\s*/i, 'M. ')}
                    </span>
                    {isCorrect && (
                      <span className="px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                        ✓ Doğru Sepeti
                      </span>
                    )}
                    {isMistake && (
                      <span className="px-2.5 py-1 rounded-xl bg-rose-500/15 text-rose-700 dark:text-rose-300 text-xs font-bold">
                        ✗ Yanlış Sepeti
                      </span>
                    )}
                    {isBookmarked && (
                      <span className="px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 text-xs font-bold inline-flex items-center gap-1">
                        <Bookmark className="w-3 h-3" />
                        Kaydedildi
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (viewMode === 'correct' && onResetSolvedCard) {
                        onResetSolvedCard(card.id);
                      } else {
                        onRemoveFromVault(card.id);
                      }
                    }}
                    title="Sepetten Çıkar (Yeni Sorulara Döndür)"
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Doğru / Yanlış İbare Özeti */}
                {!card.isCorrect && card.wrongPhrase ? (
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="px-3 py-1 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-300 line-through font-semibold">
                      {card.wrongPhrase}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 font-bold">
                      {card.correctPhrase}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 font-bold">
                      ✓ {card.correctPhrase}
                    </span>
                  </div>
                )}

                {/* Soru Önermesi */}
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {card.statement}
                </p>
              </div>

              {/* Alt Satır */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {card.isCorrect ? 'Doğru Kanun Hükmü' : card.trapCategory}
                </span>

                <button
                  type="button"
                  onClick={() => onStartSpacedRepetition([card.id])}
                  className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Soruyu Çöz</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
