/**
 * ÖSYM HMGS Resmi Takvimi & Dinamik Tarih Hesaplayıcı
 * HMGS yılda iki kez düzenlenir (Bahar: Mayıs ayı sonu, Güz: Eylül ayı sonu).
 * Bu fonksiyon sistem saatini esas alarak DAİMA en yakın gelecekteki resmi oturumu belirler.
 */
export interface HMGSExamInfo {
  title: string;
  dateStr: string;
  daysLeft: number;
  recommendedDailyGoal: number;
}

export function getUpcomingHMGSExam(customTargetDate?: string, totalCards: number = 804): HMGSExamInfo {
  const now = new Date();

  // Helper: Verilen yıl ve ayın (0-indexed) son pazar gününü hesapla (ÖSYM sınav standardı)
  const getLastSunday = (year: number, monthIndex: number): Date => {
    const d = new Date(year, monthIndex + 1, 0); // Ayın son günü
    const day = d.getDay(); // 0 = Pazar
    d.setDate(d.getDate() - day);
    d.setHours(10, 15, 0, 0);
    return d;
  };

  const currentYear = now.getFullYear();

  // ÖSYM Resmi HMGS Oturum Adayları (Bu yıl ve gelecek yıl)
  const candidates: Array<{ title: string; date: Date }> = [
    { title: `${currentYear} HMGS 1. Dönem (Bahar)`, date: getLastSunday(currentYear, 4) }, // Mayıs sonu
    { title: `${currentYear} HMGS 2. Dönem (Güz)`, date: getLastSunday(currentYear, 8) }, // Eylül sonu
    { title: `${currentYear + 1} HMGS 1. Dönem (Bahar)`, date: getLastSunday(currentYear + 1, 4) },
    { title: `${currentYear + 1} HMGS 2. Dönem (Güz)`, date: getLastSunday(currentYear + 1, 8) },
  ];

  // Kullanıcı özel bir gelecek tarih seçmişse ve bu tarih gelecekteyse
  if (customTargetDate) {
    const customDate = new Date(customTargetDate);
    customDate.setHours(10, 15, 0, 0);
    if (!isNaN(customDate.getTime()) && customDate.getTime() > now.getTime()) {
      const days = Math.max(1, Math.ceil((customDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
      const rec = Math.min(50, Math.max(15, Math.ceil((totalCards * 1.5) / days)));
      return {
        title: 'Hedef Sınav Tarihi',
        dateStr: customTargetDate,
        daysLeft: days,
        recommendedDailyGoal: rec
      };
    }
  }

  // Daima şimdiki andan sonraki en yakın gelecekteki resmi oturumu seç
  const nextExam = candidates.find((c) => c.date.getTime() > now.getTime()) || candidates[candidates.length - 1];
  const daysLeft = Math.max(1, Math.ceil((nextExam.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
  const dateStr = nextExam.date.toISOString().slice(0, 10);

  // Günlük makul çalışma hedefi: 15 ile 50 soru arası dengeli ve pedagojik
  const recommendedDailyGoal = Math.min(50, Math.max(15, Math.ceil((totalCards * 1.5) / daysLeft)));

  return {
    title: nextExam.title,
    dateStr,
    daysLeft,
    recommendedDailyGoal
  };
}
