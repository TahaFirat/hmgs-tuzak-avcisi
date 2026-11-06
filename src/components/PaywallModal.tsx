import React, { useState, useEffect } from 'react';
import {
  Crown,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  RotateCcw,
  X,
  Lock,
  BookOpen,
  Timer,
  Layers
} from 'lucide-react';
import {
  purchaseLifetimeProNatively,
  restorePurchasesNatively,
  triggerNativeHaptic
} from '../utils/audioFeedback';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isPro: boolean;
  onUnlockPro: () => void;
  solvedCount: number;
  freeLimit: number;
  triggerReason?: string;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  isPro,
  onUnlockPro,
  solvedCount,
  freeLimit,
  triggerReason
}) => {
  const [loadingAction, setLoadingAction] = useState<'purchase' | 'restore' | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(
    null
  );

  useEffect(() => {
    if (!isOpen) {
      setLoadingAction(null);
      setStatusMessage(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const onProStatus = (e: Event) => {
      const detail = (e as CustomEvent<Record<string, string>>).detail;
      if (!detail) return;
      setLoadingAction(null);
      if (detail.unlocked === 'true') {
        onUnlockPro();
        setStatusMessage({
          type: 'success',
          text: detail.message || 'Ömür Boyu Tam Erişim (Pro) başarıyla aktif edildi!'
        });
      } else if (detail.status === 'cancelled') {
        setStatusMessage({
          type: 'info',
          text: 'Satın alma işlemi iptal edildi.'
        });
      } else if (detail.message) {
        setStatusMessage({
          type: detail.status === 'error' ? 'error' : 'info',
          text: detail.message
        });
      }
    };

    window.addEventListener('hmgs:proStatus', onProStatus);
    return () => window.removeEventListener('hmgs:proStatus', onProStatus);
  }, [onUnlockPro]);

  if (!isOpen) return null;

  const handlePurchase = () => {
    triggerNativeHaptic('medium');
    setStatusMessage(null);
    setLoadingAction('purchase');
    const sentToStoreKit = purchaseLifetimeProNatively();
    if (!sentToStoreKit) {
      // Web / Masaüstü önizleme ortamında StoreKit yoksa bilgilendir
      setTimeout(() => {
        setLoadingAction(null);
        setStatusMessage({
          type: 'info',
          text: 'App Store (StoreKit) satın alma penceresi yalnızca iPhone ve iPad uygulamasında açılır.'
        });
      }, 500);
    }
  };

  const handleRestore = () => {
    triggerNativeHaptic('selection');
    setStatusMessage(null);
    setLoadingAction('restore');
    const sentToStoreKit = restorePurchasesNatively();
    if (!sentToStoreKit) {
      setTimeout(() => {
        setLoadingAction(null);
        setStatusMessage({
          type: 'info',
          text: 'Apple kimliği satın alım sorgulaması yalnızca iOS cihazlarda StoreKit üzerinden yapılır.'
        });
      }, 500);
    }
  };

  const remainingFree = Math.max(0, freeLimit - solvedCount);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0F1626] border border-slate-200/90 dark:border-indigo-500/30 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Üst Dekoratif Başlık */}
        <div className="relative px-6 pt-6 pb-5 bg-gradient-to-br from-indigo-950 via-[#151C36] to-slate-950 text-white border-b border-indigo-500/20">
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-bold tracking-wide uppercase mb-3">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>Tek Seferlik Ödeme • Ömür Boyu Erişim</span>
          </div>

          <h2 id="paywall-title" className="font-display font-extrabold text-xl sm:text-2xl text-white">
            HMGS Tuzak Avcısı — Tam Erişim (Pro)
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200/90 mt-1.5 leading-relaxed">
            {triggerReason ||
              'Tüm 1.380+ özgün kanun maddesi tuzağına, tam kapsamlı HMGS deneme sınavlarına ve akıllı tekrar sepetlerine sınırsız erişin.'}
          </p>
        </div>

        {/* İçerik Gövdesi */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Ücretsiz Kota Durumu */}
          {!isPro && (
            <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Ücretsiz Soru Kotası: {Math.min(solvedCount, freeLimit)} / {freeLimit} Soru Çözüldü
                </span>
              </div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                {remainingFree > 0 ? `${remainingFree} Hak Kaldı` : 'Kota Doldu'}
              </span>
            </div>
          )}

          {/* Özellik Listesi */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  1.380+ Mevzuat ve Tuzak Soru Kartı (7 Ana Branş)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  HMK, CMK & TCK, İdare & İYUK, Anayasa, TMK & TBK, TTK & İİK ve Avukatlık/İş/Vergi hukukundaki tüm kanun maddesi tuzaklarını sınırsız çözün.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Timer className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  25, 50 ve 100 Soruluk Tam HMGS Deneme Simülasyonları
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  ÖSYM’nin 70 puan barajına göre süreli sınav provası yapın ve sınav sonrası branş bazlı karnenizi inceleyin.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Layers className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Sınırsız Soru Sepetleri & Mevzuat Tuzak Tarayıcı
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  Yeni Sorular, Doğrular, Yanlışlar ve Kaydedilenler sepetlerine ve tüm gelecek mevzuat güncellemelerine ömür boyu erişin.
                </p>
              </div>
            </div>
          </div>

          {/* Fiyat Kartı */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-amber-500/10 border-2 border-indigo-500/40 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <Sparkles className="w-3.5 h-3.5" /> Ömür Boyu Lisans (Abonelik Yok)
              </span>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Tek seferlik ödeme • Ek ücret veya aylık yenileme yoktur
              </div>
            </div>
            <div className="text-right shrink-0 pl-3">
              <div className="font-display font-black text-2xl text-slate-900 dark:text-white">
                99,99 ₺
              </div>
              <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                Ömür Boyu
              </div>
            </div>
          </div>

          {/* Durum Mesajı */}
          {statusMessage && (
            <div
              className={`px-4 py-3 rounded-2xl text-xs font-semibold flex items-center gap-2 border ${
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

          {/* Satın Alma & Geri Yükleme Butonları */}
          {isPro ? (
            <div className="py-3.5 px-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-bold text-sm text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Ömür Boyu Tam Erişim (Pro) Hesabınızda Aktif</span>
            </div>
          ) : (
            <div className="space-y-2.5">
              <button
                type="button"
                disabled={loadingAction !== null}
                onClick={handlePurchase}
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
              >
                <Crown className="w-5 h-5 text-amber-300" />
                <span>
                  {loadingAction === 'purchase'
                    ? 'App Store Bağlanıyor...'
                    : 'Ömür Boyu Tam Erişimi Aç — 99,99 ₺'}
                </span>
              </button>

              <button
                type="button"
                disabled={loadingAction !== null}
                onClick={handleRestore}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>
                  {loadingAction === 'restore'
                    ? 'Satın Alımlar Kontrol Ediliyor...'
                    : 'Satın Alımları Geri Yükle (Restore Purchases)'}
                </span>
              </button>
            </div>
          )}

          {/* Alt Yasal Linkler (Apple Guideline 3.1.1 Uyumluluğu) */}
          <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <span>Apple Kimliğiniz ile tek seferlik güvenli ödeme</span>
            <div className="flex items-center gap-3">
              <a
                href="/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 underline"
              >
                Gizlilik Politikası
              </a>
              <a
                href="/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 underline"
              >
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
