export const HMGS_SYSTEM_PROMPT = `You are an expert Turkish legal academics specialist and question writer for the Hukuk Mesleklerine Giriş Sınavı (HMGS) administered by ÖSYM.

Your task is to analyze the provided Turkish statutory text, law article, or lecture note image and generate exactly 5 high-yield "True or Trap" (Doğru mu / Tuzak mı?) flashcard items in strict JSON format.

### RULES FOR CREATING HMGS TRAPS:
1. Out of the 5 cards, make 3 cards "TRAP" (isCorrect: false) and 2 cards "TRUE" (isCorrect: true) in randomized order so the student cannot guess by pattern.
2. When creating a "TRAP" card, keep 90% of the original statutory sentence intact and alter ONLY the exact legal pivot point that ÖSYM tests:
   - Time Limits (Süreler): e.g., swap "iki hafta" with "on gün" or "bir ay", or swap "tefhimden" with "tebliğden".
   - Competent/Authorized Authority (Görevli/Yetkili Mercii): e.g., swap "Sulh Hukuk Mahkemesi" with "Asliye Hukuk Mahkemesi", or "Cumhuriyet Savcısı" with "Sulh Ceza Hakimi".
   - Legal Nature / Sanctions (Hukuki Yaptırım & Kesinlik): e.g., swap "kesin olarak" with "istinaf yolu açık olmak üzere", or "re'sen dikkate alınır" with "taraflarca ileri sürülmelidir".
   - Quorums & Majorities (Toplantı ve Karar Yeter Sayıları): e.g., swap "üye tam sayısının salt çoğunluğu" with "toplantıya katılanların salt çoğunluğu".
3. Never invent fictional laws. Base every card strictly on Turkish legislation (Anayasa, HMK, CMK, TCK, TMK, TBK, İYUK, TTK, İİK, İş Kanunu) and the user-provided text.
4. Output strictly valid JSON matching this schema (all text values in Turkish):

{
  "cards": [
    {
      "id": "string",
      "branch": "HMK | CMK | İYUK | Anayasa | Medeni | Borçlar | Ticaret | İcra | Ceza",
      "articleRef": "e.g., HMK m. 345",
      "trapCategory": "Süre Tuzağı | Görev/Yetki Tuzağı | İstisna/Kesinlik Tuzağı | Çoğunluk Tuzağı",
      "statement": "The full Turkish legal statement shown on the card.",
      "highlightedKeywords": ["exact phrase 1 to underline on card"],
      "isCorrect": false,
      "wrongPhrase": "The altered trap phrase in the statement (null if isCorrect is true)",
      "correctPhrase": "The true statutory phrase from the law",
      "explanation": "Concise 2-sentence Turkish explanation of the legal rule and why this is a classic HMGS distractor."
    }
  ]
}`;

export interface GenerateTrapsRequest {
  text?: string;
  imageBase64?: string;
  imageMimeType?: string;
  selectedTrapTypes?: string[];
  preferredBranch?: string;
  apiKey?: string;
  provider?: 'gemini' | 'openai';
}

export async function handleGenerateTrapsServer(body: GenerateTrapsRequest, env: Record<string, string | undefined>) {
  const provider = body.provider || (env.OPENAI_API_KEY && !env.GEMINI_API_KEY ? 'openai' : 'gemini');
  const apiKey =
    body.apiKey?.trim() ||
    (provider === 'openai'
      ? env.OPENAI_API_KEY || env.VITE_OPENAI_API_KEY
      : env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY);

  if (!apiKey) {
    return {
      status: 400,
      data: {
        error: 'API_KEY_MISSING',
        message: 'Gemini veya OpenAI API anahtarı bulunamadı. Ayarlardan API anahtarı ekleyebilir veya yerel akıllı analiz modunu kullanabilirsiniz.'
      }
    };
  }

  const trapFocusText = body.selectedTrapTypes?.length
    ? `\nOdaklanılacak Tuzak Türleri: ${body.selectedTrapTypes.join(', ')}`
    : '';
  const branchHintText = body.preferredBranch && body.preferredBranch !== 'Otomatik Tespit'
    ? `\nTercih Edilen Hukuk Dalı: ${body.preferredBranch}`
    : '';

  const userPrompt = `${
    body.text?.trim()
      ? `Analiz edilecek kanun maddesi / ders notu metni:\n"""\n${body.text.trim()}\n"""`
      : 'Yüklenen ders notu / kanun sayfası görselini analiz et ve içindeki hukuk kurallarından 5 adet HMGS tuzak kartı üret.'
  }${trapFocusText}${branchHintText}`;

  if (provider === 'openai') {
    const contentParts: Array<Record<string, unknown>> = [{ type: 'text', text: userPrompt }];
    if (body.imageBase64) {
      const dataUrl = body.imageBase64.startsWith('data:')
        ? body.imageBase64
        : `data:${body.imageMimeType || 'image/jpeg'};base64,${body.imageBase64}`;
      contentParts.push({
        type: 'image_url',
        image_url: { url: dataUrl }
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: HMGS_SYSTEM_PROMPT },
          { role: 'user', content: contentParts }
        ],
        temperature: 0.4
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        status: response.status,
        data: { error: 'OPENAI_ERROR', message: `OpenAI API Hatası: ${errText}` }
      };
    }

    const result = await response.json();
    const rawContent = result.choices?.[0]?.message?.content || '{"cards":[]}';
    return {
      status: 200,
      data: JSON.parse(rawContent)
    };
  }

  // Default: Google Gemini 2.5 Flash
  const parts: Array<Record<string, unknown>> = [{ text: userPrompt }];
  if (body.imageBase64) {
    const cleanBase64 = body.imageBase64.includes(',')
      ? body.imageBase64.split(',')[1]
      : body.imageBase64;
    parts.push({
      inline_data: {
        mime_type: body.imageMimeType || 'image/jpeg',
        data: cleanBase64
      }
    });
  }

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(geminiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: HMGS_SYSTEM_PROMPT }]
      },
      contents: [
        {
          role: 'user',
          parts
        }
      ],
      generationConfig: {
        temperature: 0.4,
        responseMimeType: 'application/json'
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    return {
      status: response.status,
      data: { error: 'GEMINI_ERROR', message: `Gemini API Hatası: ${errText}` }
    };
  }

  const result = await response.json();
  const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text || '{"cards":[]}';
  return {
    status: 200,
    data: JSON.parse(rawText)
  };
}
