// Web Audio API + Native iOS WKScriptMessageHandler (hmgsNative) köprüsü

interface WebKitWindow extends Window {
  webkit?: {
    messageHandlers?: {
      hmgsNative?: {
        postMessage: (payload: Record<string, unknown>) => void;
      };
    };
  };
}

export function postNativeMessage(payload: Record<string, unknown>): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const handler = (window as unknown as WebKitWindow).webkit?.messageHandlers?.hmgsNative;
    if (handler && typeof handler.postMessage === 'function') {
      handler.postMessage(payload);
      return true;
    }
  } catch {
    // ignore outside native iOS container
  }
  return false;
}

export function triggerNativeHaptic(
  style: 'light' | 'medium' | 'rigid' | 'selection' | 'success' | 'warning' | 'error' = 'light'
) {
  postNativeMessage({ action: 'haptic', style });
}

export function shareStatuteCardNatively(text: string): boolean {
  triggerNativeHaptic('selection');
  if (postNativeMessage({ action: 'shareCard', text })) {
    return true;
  }
  if (typeof navigator !== 'undefined' && navigator.share) {
    navigator.share({ title: 'HMGS Tuzak Avcısı', text }).catch(() => {});
    return true;
  }
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {});
    return true;
  }
  return false;
}

export function scheduleNativeDailyReminder(hour: number = 20, minute: number = 0): boolean {
  return postNativeMessage({ action: 'scheduleReminder', hour, minute });
}

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function playSuccessSound(enabled: boolean = true) {
  triggerNativeHaptic('success');
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  } catch {
    // ignore
  }
}

export function playTrapSound(enabled: boolean = true) {
  triggerNativeHaptic('error');
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.18);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  } catch {
    // ignore
  }
}

export function playCelebrationSound(enabled: boolean = true) {
  triggerNativeHaptic('success');
  if (!enabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.5];
    const now = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const noteTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.12, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.35);
    });
  } catch {
    // ignore
  }
}
