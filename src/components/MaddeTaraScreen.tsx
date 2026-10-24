import React, { useState, useRef } from 'react';
import {
  Camera,
  Sparkles,
  X,
  Loader2,
  Play,
  FileText,
  Check,
  ArrowRight,
  Cpu,
  Layers
} from 'lucide-react';
import { LawBranch, TrapCard } from '../types/hmgs';
import { SAMPLE_STATUTE_SNIPPETS } from '../data/seedCards';
import {
  extractStatuteFromImageMetadata,
  generateTrapsFromInput
} from '../services/generateTraps';

interface MaddeTaraScreenProps {
  onCardsGenerated: (newCards: TrapCard[]) => void;
  onStartPracticeWithCards: (cardIds: string[]) => void;
}

const TRAP_TYPE_OPTIONS = [
  'Süre Tuzakları (Gün/Hafta/Ay)',
  'Görevli/Yetkili Mahkeme',
  'İstisna & Kesinlik Tuzakları',
  'Çoğunluk & Nitelikli Nisap'
];

const BRANCH_OPTIONS: Array<LawBranch | 'Otomatik'> = [
  'Otomatik',
  'HMK',
  'CMK',
  'TCK',
  'İYUK',
  'İdare',
  'Anayasa',
  'Medeni',
  'Borçlar',
  'Ticaret',
  'İcra'
];

const CARD_COUNT_OPTIONS = [5, 10, 15];

export const MaddeTaraScreen: React.FC<MaddeTaraScreenProps> = ({
  onCardsGenerated,
  onStartPracticeWithCards
}) => {
  const [text, setText] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<LawBranch | 'Otomatik'>('Otomatik');
  const [cardCount, setCardCount] = useState<number>(5);
  const [selectedTrapTypes, setSelectedTrapTypes] = useState<string[]>([...TRAP_TYPE_OPTIONS]);
  const [imagePreview, setImagePreview] = useState<{
    name: string;
    base64: string;
    mimeType: string;
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedBatch, setGeneratedBatch] = useState<{
    cards: TrapCard[];
    providerUsed: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const toggleTrapType = (option: string) => {
    setSelectedTrapTypes((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      setImagePreview({
        name: file.name,
        base64: result,
        mimeType: file.type || 'image/jpeg'
      });

      if (!text.trim()) {
        const extracted = extractStatuteFromImageMetadata(file.name, selectedBranch);
        setText(extracted.extractedText);
      }
      setErrorMessage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    setErrorMessage(null);

    if (!text.trim() && !imagePreview) {
      setErrorMessage('Lütfen bir kanun maddesi yapıştırın veya ders notu fotoğrafı yükleyin.');
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateTrapsFromInput({
        text,
        imageBase64: imagePreview?.base64,
        imageMimeType: imagePreview?.mimeType,
        imageName: imagePreview?.name,
        selectedTrapTypes,
        preferredBranch: selectedBranch,
        cardCount
      });

      if (result.extractedTextFromImage && !text.trim()) {
        setText(result.extractedTextFromImage);
      }

      setGeneratedBatch({
        cards: result.cards,
        providerUsed: result.providerUsed
      });
      onCardsGenerated(result.cards);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Tuzak kartları üretilirken bir hata oluştu.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-5 pb-8">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
            AI Mevzuat & Ders Notu Tarayıcı
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Kanun maddesini yapıştırın veya ders notu fotoğrafı yükleyin; anında ÖSYM tuzak sorularına dönüşsün.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold self-start sm:self-auto shrink-0">
          <Cpu className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span>Yerleşik Hukuk AI Aktif (API Gerekmez)</span>
        </div>
      </div>

      {/* Quick Sample Statute Chips */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-indigo-500" />
          <span>Hızlı Örnek Mevzuat Metni Doldur:</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {SAMPLE_STATUTE_SNIPPETS.map((sample) => (
            <button
              key={sample.label}
              type="button"
              onClick={() => {
                setText(sample.text);
                setSelectedBranch(sample.branch as LawBranch);
                setErrorMessage(null);
              }}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-indigo-500 text-xs font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap transition-all cursor-pointer shrink-0"
            >
              {sample.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Input Card */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-6 space-y-5 shadow-2xs">
        <div className="relative">
          <textarea
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Herhangi bir kanun maddesini, Yargıtay karar özetini veya kendi ders notunuzu buraya yapıştırın..."
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900 p-4 text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all leading-relaxed resize-none"
          />
          {text && (
            <button
              type="button"
              onClick={() => setText('')}
              title="Metni Temizle"
              className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-500 hover:text-rose-500 text-[11px] font-semibold transition-colors cursor-pointer"
            >
              Temizle
            </button>
          )}
        </div>

        {/* Photo Upload, Branch Selector & Card Count Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              className="hidden"
            />
            {imagePreview ? (
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 h-full">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={imagePreview.base64}
                    alt={imagePreview.name}
                    className="w-8 h-8 rounded-lg object-cover border border-indigo-400 shrink-0"
                  />
                  <span className="text-xs font-semibold text-indigo-950 dark:text-indigo-200 truncate">
                    {imagePreview.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="p-1 text-slate-400 hover:text-rose-500 cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-full py-2.5 px-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 hover:border-indigo-500 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Camera className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Kitap / Not Fotoğrafı Yükle</span>
              </button>
            )}
          </div>

          <div className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Hukuk Dalı:
            </span>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value as LawBranch | 'Otomatik')}
              className="bg-transparent text-xs font-bold text-slate-900 dark:text-white focus:outline-none cursor-pointer"
            >
              {BRANCH_OPTIONS.map((b) => (
                <option key={b} value={b} className="bg-white dark:bg-slate-900">
                  {b === 'Otomatik' ? 'Otomatik Tespit' : b}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between px-3.5 py-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              <span>Üretim:</span>
            </span>
            <div className="flex items-center gap-1">
              {CARD_COUNT_OPTIONS.map((cnt) => (
                <button
                  key={cnt}
                  type="button"
                  onClick={() => setCardCount(cnt)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    cardCount === cnt
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {cnt} Soru
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Trap Type Pill Toggles */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
            Hedeflenen ÖSYM Tuzak Kurguları:
          </span>
          <div className="flex flex-wrap gap-2">
            {TRAP_TYPE_OPTIONS.map((option) => {
              const checked = selectedTrapTypes.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggleTrapType(option)}
                  className={`px-3 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                    checked
                      ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 ${
                      checked ? 'bg-indigo-600 text-white' : 'border border-slate-300 dark:border-slate-700'
                    }`}
                  >
                    {checked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {errorMessage && (
          <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-600 dark:text-rose-400 font-medium">
            {errorMessage}
          </div>
        )}

        {/* Primary Generate CTA */}
        <button
          type="button"
          disabled={isGenerating}
          onClick={handleGenerate}
          className="w-full py-4 px-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-display font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-60 cursor-pointer"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Mevzuat Cümleleri & Süreleri Analiz Ediliyor...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>{cardCount} Adet ÖSYM Tuzak Kartı Üret</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Cards Preview */}
      {generatedBatch && (
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Üretilen {generatedBatch.cards.length} Yeni Tuzak Kartı
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {generatedBatch.providerUsed} • Soru bankanıza otomatik eklendi
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartPracticeWithCards(generatedBatch.cards.map((c) => c.id))}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Üretilen {generatedBatch.cards.length} Kartı Şimdi Çöz</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {generatedBatch.cards.map((card, index) => (
              <div
                key={card.id}
                className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 space-y-2.5 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                      #{index + 1} • {card.branch}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                      {card.articleRef}
                    </span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      card.isCorrect
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {card.isCorrect ? 'Kanuna Uygun' : card.trapCategory}
                  </span>
                </div>

                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {card.statement}
                </p>

                {!card.isCorrect && card.wrongPhrase && (
                  <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
                    <span className="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-300 line-through font-semibold">
                      {card.wrongPhrase}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 font-bold">
                      {card.correctPhrase}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
