export const FREE_QUESTION_LIMIT = 30;

export const PRO_WEEKLY_PRODUCT_ID = 'com.hmgs.tuzakavcisi.sub.weekly';
export const PRO_MONTHLY_PRODUCT_ID = 'com.hmgs.tuzakavcisi.sub.monthly';
export const PRO_SIXMONTH_PRODUCT_ID = 'com.hmgs.tuzakavcisi.sub.sixmonths';
export const PRO_LIFETIME_LEGACY_ID = 'com.hmgs.tuzakavcisi.lifetime.pro';

export const PRO_WEEKLY_PRICE_LABEL = '99,99 ₺';
export const PRO_MONTHLY_PRICE_LABEL = '249,99 ₺';
export const PRO_SIXMONTH_PRICE_LABEL = '899,99 ₺';

export const PRO_STORAGE_KEY = 'hmgs_pro_v1';

export type SubscriptionPlanId = 'weekly' | 'monthly' | 'sixmonths';

export interface LiveProPrices {
  weekly: string;
  monthly: string;
  sixmonths: string;
}

interface WebKitMessageHandler {
  postMessage: (message: Record<string, unknown>) => void;
}

interface WindowWithWebKit extends Window {
  webkit?: {
    messageHandlers?: {
      hmgsNative?: WebKitMessageHandler;
    };
  };
}

function getNativeHandler(): WebKitMessageHandler | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as WindowWithWebKit;
  return w.webkit?.messageHandlers?.hmgsNative ?? null;
}

export function isRunningInsideNativeIOS(): boolean {
  return getNativeHandler() !== null;
}

export function triggerHaptic(
  style: 'light' | 'medium' | 'rigid' | 'selection' | 'success' | 'warning' | 'error' = 'light'
): void {
  try {
    const handler = getNativeHandler();
    if (handler) {
      handler.postMessage({ action: 'haptic', style });
      return;
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(style === 'medium' || style === 'rigid' ? 14 : 7);
    }
  } catch {
    // ignore outside supported environments
  }
}

export function loadPersistedProStatus(): boolean {
  try {
    if (typeof window !== 'undefined' && localStorage.getItem(PRO_STORAGE_KEY) === 'true') {
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

export function savePersistedProStatus(unlocked: boolean): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PRO_STORAGE_KEY, unlocked ? 'true' : 'false');
    }
  } catch {
    // ignore
  }
}

export function requestNativeEntitlementCheck(): void {
  const handler = getNativeHandler();
  if (handler) {
    handler.postMessage({ action: 'checkProStatus' });
  }
}

export function refreshNativeProPrices(): void {
  const handler = getNativeHandler();
  if (handler) {
    handler.postMessage({ action: 'fetchProPrices' });
  }
}

export function syncNativeTheme(theme: 'light' | 'dark'): void {
  try {
    const bgColor = theme === 'light' ? '#F6F7FB' : '#090D16';
    if (typeof document !== 'undefined') {
      document.documentElement.style.backgroundColor = bgColor;
      document.body.style.backgroundColor = bgColor;
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) metaTheme.setAttribute('content', bgColor);
    }
    const handler = getNativeHandler();
    if (handler) {
      handler.postMessage({ action: 'setTheme', theme });
    }
  } catch {
    // ignore
  }
}

export function shareLegalCardNatively(text: string): void {
  triggerHaptic('selection');
  const handler = getNativeHandler();
  if (handler) {
    handler.postMessage({ action: 'shareCard', text });
    return;
  }
  if (typeof navigator !== 'undefined' && navigator.share) {
    navigator.share({ title: 'HMGS • İYÖS • Hakimlik Hukuk', text }).catch(() => {});
  } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
}

export interface PurchaseActionResult {
  success: boolean;
  cancelled: boolean;
  message: string;
}

export function purchasePlanNatively(productId: string): Promise<PurchaseActionResult> {
  const handler = getNativeHandler();
  if (!handler) {
    // Web / Masaüstü önizleme modu
    return new Promise((resolve) => {
      window.setTimeout(() => {
        savePersistedProStatus(true);
        resolve({
          success: true,
          cancelled: false,
          message: 'Önizleme modunda PRO erişim aktif edildi.'
        });
      }, 400);
    });
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = (res: PurchaseActionResult) => {
      if (settled) return;
      settled = true;
      window.removeEventListener('hmgs:proStatus', onStatus);
      window.clearTimeout(timer);
      resolve(res);
    };

    const onStatus = (e: Event) => {
      const detail = (e as CustomEvent<Record<string, string>>).detail;
      if (!detail || detail.status === 'synced') return;
      const unlocked = detail.unlocked === 'true';
      const cancelled = detail.status === 'cancelled';
      if (unlocked) {
        savePersistedProStatus(true);
      }
      finish({
        success: unlocked,
        cancelled,
        message:
          detail.message ||
          (unlocked
            ? 'PRO aboneliğiniz başarıyla aktif edildi!'
            : cancelled
            ? 'Satın alma işlemi iptal edildi.'
            : 'İşlem tamamlanamadı. Lütfen tekrar deneyin.')
      });
    };

    const timer = window.setTimeout(() => {
      finish({
        success: false,
        cancelled: false,
        message: 'App Store yanıt süresi doldu. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.'
      });
    }, 45000);

    window.addEventListener('hmgs:proStatus', onStatus);
    handler.postMessage({ action: 'purchasePlan', productId });
  });
}

export function restorePurchasesNativelyAsync(): Promise<PurchaseActionResult> {
  const handler = getNativeHandler();
  if (!handler) {
    const already = loadPersistedProStatus();
    return Promise.resolve({
      success: already,
      cancelled: false,
      message: already
        ? 'PRO erişiminiz doğrulandı.'
        : 'Bu tarayıcıda önceki bir abonelik kaydı bulunamadı.'
    });
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = (res: PurchaseActionResult) => {
      if (settled) return;
      settled = true;
      window.removeEventListener('hmgs:proStatus', onStatus);
      window.clearTimeout(timer);
      resolve(res);
    };

    const onStatus = (e: Event) => {
      const detail = (e as CustomEvent<Record<string, string>>).detail;
      if (!detail || detail.status === 'synced') return;
      const unlocked = detail.unlocked === 'true';
      if (unlocked) savePersistedProStatus(true);
      finish({
        success: unlocked,
        cancelled: false,
        message:
          detail.message ||
          (unlocked
            ? 'Aboneliğiniz veya önceki PRO satın alımınız başarıyla geri yüklendi!'
            : 'Bu Apple Kimliğine ait aktif bir abonelik veya satın alım bulunamadı.')
      });
    };

    const timer = window.setTimeout(() => {
      finish({
        success: false,
        cancelled: false,
        message: 'Geri yükleme zaman aşımına uğradı. Lütfen tekrar deneyin.'
      });
    }, 30000);

    window.addEventListener('hmgs:proStatus', onStatus);
    handler.postMessage({ action: 'restorePurchases' });
  });
}
