import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Crown,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';
import {
  LEGAL_SPOT_CARDS,
  LEGAL_VAKA_QUESTIONS,
  TOTAL_INTERACTIVE_LEGAL_ITEMS
} from '../data/legalQuestionRepository';
import {
  FREE_QUESTION_LIMIT,
  LiveProPrices,
  PRO_MONTHLY_PRICE_LABEL,
  PRO_MONTHLY_PRODUCT_ID,
  PRO_SIXMONTH_PRICE_LABEL,
  PRO_SIXMONTH_PRODUCT_ID,
  PRO_WEEKLY_PRICE_LABEL,
  PRO_WEEKLY_PRODUCT_ID,
  SubscriptionPlanId,
  purchasePlanNatively,
  refreshNativeProPrices,
  restorePurchasesNativelyAsync,
  triggerHaptic
} from '../services/nativeBridge';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPro: boolean;
  onUnlockPro: () => void;
  solvedCount: number;
  freeLimit?: number;
  triggerReason?: string;
  prices?: LiveProPrices;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  isPro,
  onUnlockPro,
  solvedCount,
  freeLimit = FREE_QUESTION_LIMIT,
  triggerReason,
  prices = {
    weekly: PRO_WEEKLY_PRICE_LABEL,
    monthly: PRO_MONTHLY_PRICE_LABEL,
    sixmonths: PRO_SIXMONTH_PRICE_LABEL
  }
}) => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlanId>('sixmonths');
  const [loadingAction, setLoadingAction] = useState<'purchase' | 'restore' | null>(null);
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStatusMessage(null);
      setLegalDoc(null);
      refreshNativeProPrices();
    } else {
      setLoadingAction(null);
      setLegalDoc(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const activeProductId =
    selectedPlan === 'sixmonths'
      ? PRO_SIXMONTH_PRODUCT_ID
      : selectedPlan === 'monthly'
      ? PRO_MONTHLY_PRODUCT_ID
      : PRO_WEEKLY_PRODUCT_ID;

  const activeCtaPrice =
    selectedPlan === 'sixmonths'
      ? `${prices.sixmonths} / 6 Ay`
      : selectedPlan === 'monthly'
      ? `${prices.monthly} / Ay`
      : `${prices.weekly} / Hafta`;

  const handlePurchase = async () => {
    if (loadingAction) return;
    triggerHaptic('medium');
    setLoadingAction('purchase');
    setStatusMessage(null);
    const res = await purchasePlanNatively(activeProductId);
    setLoadingAction(null);
    if (res.success) {
      setStatusMessage({ type: 'success', text: res.message });
      onUnlockPro();
      window.setTimeout(() => onClose(), 500);
    } else if (res.cancelled) {
      setStatusMessage({ type: 'info', text: res.message });
    } else {
      setStatusMessage({ type: 'error', text: res.message });
    }
  };

  const handleRestore = async () => {
    if (loadingAction) return;
    triggerHaptic('selection');
    setLoadingAction('restore');
    setStatusMessage(null);
    const res = await restorePurchasesNativelyAsync();
    setLoadingAction(null);
    if (res.success) {
      setStatusMessage({ type: 'success', text: res.message });
      onUnlockPro();
      window.setTimeout(() => onClose(), 600);
    } else {
      setStatusMessage({ type: 'info', text: res.message });
    }
  };

  const totalFmt = TOTAL_INTERACTIVE_LEGAL_ITEMS.toLocaleString('tr-TR');
  const vakaFmt = LEGAL_VAKA_QUESTIONS.length.toLocaleString('tr-TR');
  const spotFmt = LEGAL_SPOT_CARDS.length.toLocaleString('tr-TR');

  const features = [
    `${totalFmt}+ Doğrulanmış Soru (${vakaFmt} 5 Şıklı Olay + ${spotFmt} D/Y Kartı)`,
    'HMGS • İYÖS • Adli/İdari Hakimlik • KPSS Hukuk (14 Branş)',
    '2021–2026 ÖSYM Konsept İkizleri & 8./9. Yargı Paketi Güncel Mevzuat',
    'Süreli Sınav Provaları, Hata Defteri ve Süreler/Mahkemeler Atlası'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
    >
      <div className="relative w-full max-w-md max-h-[94vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0D1322] border border-indigo-200 dark:border-indigo-500/35 shadow-2xl my-auto">
        {/* Top Vibrant Header — Badge & Close side-by-side (Zero Overlap!) */}
        <div className="px-4 sm:px-5 pt-4 pb-3.5 bg-gradient-to-br from-indigo-700 via-violet-700 to-indigo-900 text-white border-b border-white/10">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-200 text-[10.5px] font-extrabold tracking-wide uppercase min-w-0">
              <Crown className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="truncate">HMGS • İYÖS • Hakimlik • KPSS PRO</span>
            </div>

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                onClose();
              }}
              aria-label="Kapat"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-amber-300" />
            </div>
            <div className="min-w-0">
              <h2 id="paywall-title" className="font-display font-extrabold text-base sm:text-lg leading-snug">
                Hukuk Sınavları PRO Erişim
              </h2>
              <p className="text-[11.5px] text-indigo-100/90 leading-snug mt-0.5">
                {triggerReason ||
                  (solvedCount >= freeLimit
                    ? `Ücretsiz ${freeLimit} soru kotanız doldu (${solvedCount}/${freeLimit}). Sınırsız devam edin.`
                    : `30 soruluk demo sınırını kaldırın, ${totalFmt}+ sorunun tamamını açın.`)}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Features */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-3 space-y-1.5">
            {features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[11.5px] text-slate-700 dark:text-slate-200 leading-snug"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* 3-Tier Subscription Selector: 6 Months (Recommended) | Monthly | Weekly */}
          {!isPro && (
            <div className="space-y-2">
              {/* 6 Months */}
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setSelectedPlan('sixmonths');
                }}
                className={`w-full rounded-2xl border-2 p-3 text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                  selectedPlan === 'sixmonths'
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-600 dark:border-indigo-400 shadow-sm'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      6 Aylık Sınav Sezonu
                    </span>
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-amber-500 text-white text-[9.5px] font-extrabold uppercase">
                      <Sparkles className="w-2.5 h-2.5" /> EN POPÜLER
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    Aylık ~150 ₺ • Haftalığa göre %62 tasarruf
                  </div>
                </div>
                <div className="text-right shrink-0 pl-1">
                  <div className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white whitespace-nowrap">
                    {prices.sixmonths}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    6 Ayda Bir
                  </div>
                </div>
              </button>

              {/* Monthly */}
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setSelectedPlan('monthly');
                }}
                className={`w-full rounded-2xl border-2 p-3 text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                  selectedPlan === 'monthly'
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-600 dark:border-indigo-400 shadow-sm'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                      Aylık PRO Plan
                    </span>
                    <span className="px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[9.5px] font-bold">
                      %38 Tasarruf
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Esnek aylık abonelik • İstediğin an iptal
                  </div>
                </div>
                <div className="text-right shrink-0 pl-1">
                  <div className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white whitespace-nowrap">
                    {prices.monthly}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    Aylık
                  </div>
                </div>
              </button>

              {/* Weekly */}
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setSelectedPlan('weekly');
                }}
                className={`w-full rounded-2xl border-2 p-3 text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                  selectedPlan === 'weekly'
                    ? 'bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-600 dark:border-indigo-400 shadow-sm'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                }`}
              >
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                    Haftalık Hızlı Kamp
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Sınav haftası yoğun tekrar ve denemeler
                  </div>
                </div>
                <div className="text-right shrink-0 pl-1">
                  <div className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white whitespace-nowrap">
                    {prices.weekly}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    Haftalık
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`px-3.5 py-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 border ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                  : statusMessage.type === 'error'
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300'
                  : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Purchase & Restore CTAs */}
          {isPro ? (
            <div className="py-3 px-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Hukuk Sınavları PRO Tam Erişim Aktif</span>
            </div>
          ) : (
            <div className="space-y-2">
              <button
                type="button"
                disabled={loadingAction !== null}
                onClick={handlePurchase}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:brightness-110 text-white font-display font-extrabold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-60 whitespace-nowrap"
              >
                <Crown className="w-4 h-4 text-amber-300 shrink-0" />
                <span>
                  {loadingAction === 'purchase'
                    ? 'App Store Bağlanıyor...'
                    : `PRO Başlat • ${activeCtaPrice}`}
                </span>
              </button>

              <button
                type="button"
                disabled={loadingAction !== null}
                onClick={handleRestore}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-60"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                <span>
                  {loadingAction === 'restore'
                    ? 'Abonelikler Kontrol Ediliyor...'
                    : 'Satın Alımları Geri Yükle'}
                </span>
              </button>
            </div>
          )}

          {/* Apple Guideline 3.1.2 Auto-Renewal Disclosure + Legal Links */}
          <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 space-y-1.5 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
            <p>
              Ödeme, satın alma onayıyla Apple Kimliği hesabınızdan tahsil edilir. Mevcut dönemin bitiminden en az 24 saat önce iptal edilmedikçe abonelik otomatik olarak yenilenir. Aboneliğinizi iPhone/iPad Ayarlar &gt; Apple Kimliği &gt; Abonelikler bölümünden yönetebilir veya iptal edebilirsiniz.
            </p>
            <div className="flex items-center justify-between gap-2 pt-0.5">
              <span className="font-medium">Apple ile Güvenli Ödeme</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setLegalDoc('privacy')}
                  className="hover:text-indigo-500 underline cursor-pointer font-semibold"
                >
                  Gizlilik Politikası
                </button>
                <button
                  type="button"
                  onClick={() => setLegalDoc('terms')}
                  className="hover:text-indigo-500 underline cursor-pointer font-semibold"
                >
                  Kullanım Koşulları (EULA)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* In-App Legal Reader Overlay (iPad & iPhone Safe) */}
        {legalDoc && (
          <div className="absolute inset-0 z-20 bg-white dark:bg-[#0D1322] flex flex-col">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                {legalDoc === 'privacy' ? 'Gizlilik Politikası' : 'Kullanım Koşulları & Abonelik Şartları'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold cursor-pointer"
              >
                Kapat
              </button>
            </div>
            <div className="p-4 sm:p-5 overflow-y-auto text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
              {legalDoc === 'privacy' ? (
                <>
                  <p>
                    <strong>HMGS • İYÖS • Hakimlik Hukuk</strong> tamamen cihaz içi (offline-first) çalışır. Ad, telefon, T.C. kimlik numarası veya e-posta gibi kişisel verileriniz toplanmaz ve harici sunuculara gönderilmez.
                  </p>
                  <p>
                    Çözülen sorular, hata defteri, sınav denemeleri ve çalışma istatistikleriniz yalnızca kendi cihazınızda saklanır. Üçüncü taraf reklam veya takip SDK&apos;sı kullanılmaz.
                  </p>
                  <p>İletişim: tahafirat@gmail.com</p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Hukuk Sınavları PRO Abonelikleri:</strong> Haftalık ({prices.weekly}), Aylık ({prices.monthly}) ve 6 Aylık ({prices.sixmonths}) otomatik yenilenen abonelik seçenekleri sunulur. Abonelik, dönem bitiminden en az 24 saat önce Apple Hesap Ayarlarından iptal edilmedikçe seçilen dönem için otomatik yenilenir.
                  </p>
                  <p>
                    Önceki sürümlerde Ömür Boyu PRO satın alan kullanıcılar &quot;Satın Alımları Geri Yükle&quot; butonuyla sınırsız erişimlerini kullanmaya devam edebilir.
                  </p>
                  <p>
                    Uygulamadaki tüm 33.000+ soru, olay ve mevzuat açıklamaları 2026 güncel Türk hukuku çerçevesinde özgün eğitim materyali olarak hazırlanmıştır; resmi hukuki danışmanlık yerine geçmez.
                  </p>
                  <p>Standart Apple EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
