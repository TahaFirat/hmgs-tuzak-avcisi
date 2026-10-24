import React, { useEffect, useState, useRef } from 'react';
import {
  Moon,
  Sun,
  Monitor,
  Type,
  Eye,
  Target,
  Trash2,
  Info,
  ShieldCheck,
  Download,
  Upload,
  Volume2,
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { playSuccessSound } from '../utils/audioFeedback';
import { getUpcomingHMGSExam } from '../utils/examCalendar';

export type ThemeMode = 'light' | 'dark' | 'system';
export type FontScale = 'sm' | 'md' | 'lg';

export interface AppSettings {
  theme: ThemeMode;
  fontScale: FontScale;
  showHighlights: boolean;
  simpleMode: boolean;
  soundEnabled: boolean;
}

interface AyarlarScreenProps {
  settings: AppSettings;
  onChange: (next: AppSettings) => void;
  dailyGoal: number;
  onUpdateDailyGoal: (n: number) => void;
  onResetAll: () => void;
  onExportData: () => void;
  onImportData?: (data: unknown) => boolean;
  totalCards: number;
  totalRules: number;
  profileName?: string;
  targetExamDate?: string;
  onUpdateTargetExamDate?: (date: string) => void;
  onSwitchProfile?: () => void;
}

const GOALS = [10, 20, 30, 40, 50];

function Section({
  title,
  icon,
  children
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111827] p-4 sm:p-5 space-y-3 shadow-2xs">
      <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
        <span className="text-indigo-600 dark:text-indigo-400">{icon}</span>
        {title}
      </h3>
      {children}
    </section>
  );
}

function Segment<T extends string | number>({
  value,
  options,
  onSelect
}: {
  value: T;
  options: Array<{ id: T; label: string; icon?: React.ReactNode }>;
  onSelect: (v: T) => void;
}) {
  return (
    <div
      className="grid gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/70"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={String(o.id)}
            type="button"
            onClick={() => onSelect(o.id)}
            aria-pressed={active}
            className={`min-h-10 px-2 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              active
                ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {o.icon}
            <span className="truncate">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

const MAX_GOAL = 100;

export const AyarlarScreen: React.FC<AyarlarScreenProps> = ({
  settings,
  onChange,
  dailyGoal,
  onUpdateDailyGoal,
  onResetAll,
  onExportData,
  onImportData,
  totalCards,
  totalRules,
  profileName,
  targetExamDate,
  onUpdateTargetExamDate,
  onSwitchProfile
}) => {
  const [goalText, setGoalText] = useState(String(dailyGoal));
  const [importStatus, setImportStatus] = useState<{ success: boolean; message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setGoalText(String(dailyGoal)), [dailyGoal]);

  const commitGoal = () => {
    const n = Math.round(Number(goalText));
    if (!Number.isFinite(n) || n < 1) {
      setGoalText(String(dailyGoal));
      return;
    }
    onUpdateDailyGoal(Math.min(MAX_GOAL, Math.max(5, n)));
  };

  const set = <K extends keyof AppSettings>(k: K, v: AppSettings[K]) =>
    onChange({ ...settings, [k]: v });

  // Sınava kalan süreyi dinamik ve daima gelecekteki resmi oturuma göre hesapla
  const examInfo = getUpcomingHMGSExam(targetExamDate, totalCards);

  const currentYear = new Date().getFullYear();
  const examPresets = [
    { label: `En Yakın Oturum (${examInfo.title})`, date: examInfo.dateStr },
    { label: `${currentYear + 1} HMGS 1. Dönem (Mayıs ${currentYear + 1})`, date: `${currentYear + 1}-05-30` },
    { label: `${currentYear + 1} HMGS 2. Dönem (Eylül ${currentYear + 1})`, date: `${currentYear + 1}-09-26` }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (onImportData) {
          const ok = onImportData(parsed);
          if (ok) {
            setImportStatus({
              success: true,
              message: 'Yedek başarıyla yüklendi! Verileriniz senkronize edildi.'
            });
            setTimeout(() => setImportStatus(null), 4000);
          } else {
            setImportStatus({
              success: false,
              message: 'Yüklenen dosya biçimi uyumsuz görünüyor.'
            });
          }
        }
      } catch {
        setImportStatus({
          success: false,
          message: 'Geçersiz JSON dosyası seçildi.'
        });
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-4 pb-12">
      <header>
        <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white">Ayarlar & Tercihler</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Uygulama tercihleri ve çalışma verileriniz bu cihazda saklanır.
        </p>
      </header>

      {/* Profil */}
      <Section title="Kullanıcı Profili" icon={<Info className="w-4 h-4" />}>
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="font-bold text-sm text-slate-900 dark:text-white block truncate">
              {profileName ? profileName : 'Kayıtlı İsim Yok'}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              İlerleme ve istatistik verileriniz cihazınızda korunur.
            </span>
          </div>

          <button
            type="button"
            onClick={onSwitchProfile}
            className="min-h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 cursor-pointer shrink-0"
          >
            İsmi Değiştir
          </button>
        </div>
      </Section>

      {/* Sınav Tarihi & Geri Sayım */}
      <Section title="Hedef Sınav & Kalan Süre" icon={<Calendar className="w-4 h-4" />}>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Hedeflenen HMGS Oturumu
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Sınava kalan gün ve günlük tavsiye bu takvime göre hesaplanır.
              </p>
            </div>

            {onUpdateTargetExamDate && (
              <select
                value={targetExamDate || examInfo.dateStr}
                onChange={(e) => onUpdateTargetExamDate(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {examPresets.map((p) => (
                  <option key={p.date} value={p.date}>
                    {p.label}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-indigo-950 dark:text-indigo-200">
              {examInfo.title}
            </span>
            <span className="font-display font-extrabold text-sm text-indigo-600 dark:text-indigo-400">
              {examInfo.daysLeft} Gün Kaldı
            </span>
          </div>
        </div>
      </Section>

      {/* Görünüm Teması */}
      <Section title="Görünüm Teması" icon={<Sun className="w-4 h-4" />}>
        <Segment<ThemeMode>
          value={settings.theme}
          onSelect={(v) => set('theme', v)}
          options={[
            { id: 'light', label: 'Açık', icon: <Sun className="w-3.5 h-3.5" /> },
            { id: 'dark', label: 'Koyu', icon: <Moon className="w-3.5 h-3.5" /> },
            { id: 'system', label: 'Sistem', icon: <Monitor className="w-3.5 h-3.5" /> }
          ]}
        />
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          “Sistem” seçeneği telefon veya tabletinizin açık/koyu modunu otomatik takip eder.
        </p>
      </Section>

      {/* Yazı Boyutu */}
      <Section title="Yazı Boyutu" icon={<Type className="w-4 h-4" />}>
        <Segment<FontScale>
          value={settings.fontScale}
          onSelect={(v) => set('fontScale', v)}
          options={[
            { id: 'sm', label: 'Küçük (%94)' },
            { id: 'md', label: 'Standart (%100)' },
            { id: 'lg', label: 'Büyük (%106)' }
          ]}
        />
      </Section>

      {/* Ses Efektleri */}
      <Section title="Ses Efektleri" icon={<Volume2 className="w-4 h-4" />}>
        <label className="flex items-center justify-between gap-3 cursor-pointer">
          <span className="text-sm text-slate-700 dark:text-slate-200">
            Cevap bildirim sesleri
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Soruları yanıtlarken doğru/yanlış durumunu hafif bir tını ile bildirir.
            </span>
          </span>
          <input
            type="checkbox"
            checked={settings.soundEnabled}
            onChange={(e) => {
              set('soundEnabled', e.target.checked);
              if (e.target.checked) playSuccessSound(true);
            }}
            className="h-5 w-5 accent-indigo-600 shrink-0 cursor-pointer"
          />
        </label>
      </Section>

      {/* Sade Mod */}
      <Section title="Sade Arayüz Modu" icon={<Eye className="w-4 h-4" />}>
        <label className="flex items-center justify-between gap-3 cursor-pointer">
          <span className="text-sm text-slate-700 dark:text-slate-200">
            Minimalist çalışma modu
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Sayaç, anahtar kelime vurguları ve yan panelleri gizler; doğrudan soru metnine odaklanmanızı sağlar.
            </span>
          </span>
          <input
            type="checkbox"
            checked={settings.simpleMode}
            onChange={(e) => set('simpleMode', e.target.checked)}
            className="h-5 w-5 accent-indigo-600 shrink-0 cursor-pointer"
          />
        </label>
      </Section>

      {/* Soru Görünümü Vurguları */}
      <Section title="Mevzuat Vurguları" icon={<Sparkles className="w-4 h-4" />}>
        <label className="flex items-center justify-between gap-3 cursor-pointer">
          <span className="text-sm text-slate-700 dark:text-slate-200">
            Kritik kanun ibarelerini renklendir
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Kapalıyken ÖSYM kitapçığındaki gibi tamamen sade metin görüntülenir.
            </span>
          </span>
          <input
            type="checkbox"
            checked={settings.showHighlights}
            onChange={(e) => set('showHighlights', e.target.checked)}
            className="h-5 w-5 accent-indigo-600 shrink-0 cursor-pointer"
          />
        </label>
      </Section>

      {/* Günlük Hedef */}
      <Section title="Günlük Soru Hedefi" icon={<Target className="w-4 h-4" />}>
        <Segment<number>
          value={dailyGoal}
          onSelect={onUpdateDailyGoal}
          options={GOALS.map((g) => ({ id: g, label: `${g} Soru` }))}
        />
        <label className="flex items-center justify-between gap-3 text-sm text-slate-700 dark:text-slate-200 pt-1">
          <span>
            Özel Hedef Sayısı
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Günde kaç soru çözmek istiyorsunuz? (5–100)
            </span>
          </span>
          <input
            type="number"
            inputMode="numeric"
            min={5}
            max={MAX_GOAL}
            value={goalText}
            onChange={(e) => setGoalText(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
            onBlur={commitGoal}
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
            className="w-24 min-h-11 px-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-center font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
      </Section>

      {/* Veri Yedekleme & Geri Yükleme */}
      <Section title="Veri Yedekleme & Aktarım" icon={<Download className="w-4 h-4" />}>
        <div className="space-y-3">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Çalışma verilerinizi başka bir cihaza aktarabilir veya yedekten tek tıkla geri yükleyebilirsiniz.
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={onExportData}
              className="min-h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-indigo-500" />
              <span>Yedeği İndir (JSON)</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="min-h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4 text-emerald-500" />
              <span>Yedekten Geri Yükle</span>
            </button>
          </div>

          {importStatus && (
            <div
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                importStatus.success
                  ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                  : 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20'
              }`}
            >
              {importStatus.success ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{importStatus.message}</span>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => {
                if (
                  window.confirm(
                    'Tüm çözülen sorular, istatistikler ve kayıtlı kartlar silinecek. Sıfırlamak istediğinize emin misiniz?'
                  )
                ) {
                  onResetAll();
                }
              }}
              className="w-full min-h-11 px-4 rounded-xl border border-rose-200 dark:border-rose-900/60 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 cursor-pointer inline-flex items-center justify-center gap-2 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Tüm İlerleme Verilerini Sıfırla</span>
            </button>
          </div>
        </div>
      </Section>

      {/* Hakkında & Resmî Mevzuat Uyarısı */}
      <Section title="Mevzuat Bilgilendirmesi" icon={<Info className="w-4 h-4" />}>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {totalCards} özgün soru • {totalRules} doğrulanmış mevzuat maddesi. Tüm sorular ÖSYM sınav kılavuzu ve güncel kanun metinlerine göre hazırlanmıştır. İnternet gerektirmez ve çevrimdışı çalışır.
        </p>
        <div className="flex gap-2 rounded-xl bg-amber-500/10 border border-amber-500/25 p-3 text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
          <span>
            Bu uygulama çalışma yardımcısıdır, resmî kaynak değildir. Mevzuat değişebileceğinden sınavdan önce
            kanun metinlerini resmî kaynaktan (mevzuat.gov.tr) teyit ediniz.
          </span>
        </div>
      </Section>
    </div>
  );
};
