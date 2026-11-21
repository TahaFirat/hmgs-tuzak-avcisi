import {
  LegalBranchCount,
  LegalBranchId,
  LegalBranchMeta,
  LegalExamType,
  LegalQuestionOption,
  LegalSpotCard,
  LegalVakaQuestion,
  OptionLetter,
  StructuredLegalClusterSeed
} from '../types/legalEngine';
import { LawBranch } from '../types/hmgs';
import { INITIAL_HMGS_CARDS } from './seedCards';
import { LAW_CLUSTERS_ANAYASA } from './lawClustersAnayasa';
import { LAW_CLUSTERS_IDARE_IYUK } from './lawClustersIdareIyuk';
import { LAW_CLUSTERS_MEDENI } from './lawClustersMedeni';
import { LAW_CLUSTERS_BORCLAR } from './lawClustersBorclar';
import { LAW_CLUSTERS_HMK } from './lawClustersHmk';
import { LAW_CLUSTERS_TCK } from './lawClustersTck';
import { LAW_CLUSTERS_CMK } from './lawClustersCmk';
import { LAW_CLUSTERS_TICARET_IIK } from './lawClustersTicaretIik';
import { LAW_CLUSTERS_IS_VERGI_AVK } from './lawClustersIsVergiAvk';
import { LAW_CLUSTERS_MOHUK_FELSEFE } from './lawClustersMohukFelsefe';

export const LEGAL_BRANCHES: LegalBranchMeta[] = [
  {
    id: 'anayasa',
    name: 'Anayasa Hukuku',
    shortName: 'Anayasa',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 9,
    lawCodes: '2709 s. Anayasa • 6216 s. AYM',
    description: 'Temel haklar, yasama, yürütme, CBK, AYM bireysel başvuru ve nitelikli çoğunluklar',
    accent: 'amber'
  },
  {
    id: 'idare',
    name: 'İdare Hukuku & İYUK',
    shortName: 'İdare & İYUK',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 18,
    lawCodes: '2577 s. İYUK • 657 DMK • 4483',
    description: 'İdari işlemler, 30 gün zımni ret, dava süreleri, yürütmenin durdurulması ve memur hukuku',
    accent: 'sky'
  },
  {
    id: 'medeni',
    name: 'Medeni Hukuk (TMK)',
    shortName: 'Medeni',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 15,
    lawCodes: '4721 s. TMK',
    description: 'Kişiler, aile, miras saklı paylar, tenkis, zilyetlik, tapu sicili ve ayni haklar',
    accent: 'emerald'
  },
  {
    id: 'borclar',
    name: 'Borçlar Hukuku (TBK)',
    shortName: 'Borçlar',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 12,
    lawCodes: '6098 s. TBK',
    description: 'Sözleşmeler, irade sakatlıkları, haksız fiil, temerrüt, kefalet, kira ve zamanaşımı',
    accent: 'teal'
  },
  {
    id: 'hmk',
    name: 'Medeni Usul Hukuku (HMK)',
    shortName: 'HMK',
    exams: ['HMGS', 'HAKIMLIK'],
    hmgsWeight: 12,
    lawCodes: '6100 s. HMK',
    description: 'Görev, kesin yetki, dava şartları, ıslah, ispat, geçici korumalar, istinaf ve temyiz',
    accent: 'indigo'
  },
  {
    id: 'tck',
    name: 'Ceza Hukuku (TCK)',
    shortName: 'Ceza (TCK)',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 10,
    lawCodes: '5237 s. TCK',
    description: 'Suç genel teorisi, kast/taksir, teşebbüs, iştirak, içtima ve özel suç tipleri',
    accent: 'rose'
  },
  {
    id: 'cmk',
    name: 'Ceza Muhakemesi (CMK)',
    shortName: 'CMK',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 9,
    lawCodes: '5271 s. CMK • 7499 s.K.',
    description: 'Koruma tedbirleri, KYOK, HAGB istinaf yolu, 2 haftalık kanun yolları ve delil yasakları',
    accent: 'pink'
  },
  {
    id: 'ticaret',
    name: 'Ticaret Hukuku (TTK)',
    shortName: 'Ticaret',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 12,
    lawCodes: '6102 s. TTK',
    description: 'Ticari işletme, tacir, anonim/limited şirketler, poliçe, bono, çek ve sigorta',
    accent: 'violet'
  },
  {
    id: 'icra',
    name: 'İcra ve İflas Hukuku (İİK)',
    shortName: 'İcra & İflas',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 9,
    lawCodes: '2004 s. İİK • 7343 s.K.',
    description: 'İlamsız/kambiyo takibi, itirazın iptali/kaldırılması, haciz, iflas ve konkordato',
    accent: 'purple'
  },
  {
    id: 'is_sgk',
    name: 'İş & Sosyal Güvenlik',
    shortName: 'İş & SGK',
    exams: ['HMGS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 6,
    lawCodes: '4857 İşK • 7036 • 5510',
    description: 'İş güvencesi, işe iade, zorunlu arabuluculuk, kıdem/ihbar, sendika ve SGK',
    accent: 'orange'
  },
  {
    id: 'vergi',
    name: 'Vergi Hukuku & VUK',
    shortName: 'Vergi',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK', 'KPSS'],
    hmgsWeight: 6,
    lawCodes: '213 s. VUK • 6183 AATUHK',
    description: 'Tarhiyat, 5 yıl zamanaşımı, uzlaşma, pişmanlık, 15 gün ödeme emri itirazı ve vergi suçları',
    accent: 'cyan'
  },
  {
    id: 'avukatlik',
    name: 'Avukatlık & Noterlik',
    shortName: 'Avukatlık',
    exams: ['HMGS'],
    hmgsWeight: 6,
    lawCodes: '1136 s. AvK • 1512 Noterlik',
    description: 'Staj, tekel hakkı, %25 ücret tavanı, disiplin cezaları, Baro ve TBB organları',
    accent: 'blue'
  },
  {
    id: 'mohuk',
    name: 'Milletlerarası & MÖHUK',
    shortName: 'MÖHUK',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK'],
    hmgsWeight: 6,
    lawCodes: '5718 s. MÖHUK • 5901 • 6458',
    description: 'Bağlama kuralları, tanıma/tenfiz, vatandaşlık, yabancılar ve uluslararası kamu hukuku',
    accent: 'fuchsia'
  },
  {
    id: 'genel_kamu',
    name: 'Genel Kamu, Felsefe & Tarih',
    shortName: 'Felsefe & Tarih',
    exams: ['HMGS', 'IYOS', 'HAKIMLIK'],
    hmgsWeight: 6,
    lawCodes: 'AİHS • Hukuk Felsefesi • Tarih',
    description: 'Hukuk felsefesi akımları, adalet kuramları, AİHM 4 ay kuralı ve Türk hukuk tarihi',
    accent: 'slate'
  }
];

const BRANCH_MAP = new Map<LegalBranchId, LegalBranchMeta>(
  LEGAL_BRANCHES.map((b) => [b.id, b])
);

export function getLegalBranchMeta(branchId: LegalBranchId): LegalBranchMeta {
  return BRANCH_MAP.get(branchId) || LEGAL_BRANCHES[0];
}

const OPTION_LETTERS: OptionLetter[] = ['A', 'B', 'C', 'D', 'E'];

export const ALL_STRUCTURED_LEGAL_CLUSTERS: StructuredLegalClusterSeed[] = [
  ...LAW_CLUSTERS_ANAYASA,
  ...LAW_CLUSTERS_IDARE_IYUK,
  ...LAW_CLUSTERS_MEDENI,
  ...LAW_CLUSTERS_BORCLAR,
  ...LAW_CLUSTERS_HMK,
  ...LAW_CLUSTERS_TCK,
  ...LAW_CLUSTERS_CMK,
  ...LAW_CLUSTERS_TICARET_IIK,
  ...LAW_CLUSTERS_IS_VERGI_AVK,
  ...LAW_CLUSTERS_MOHUK_FELSEFE
];

// Precomputed lowercase search haystacks per cluster for <1.5ms search over 33,000+ items
const CLUSTER_HAYSTACK: string[] = ALL_STRUCTURED_LEGAL_CLUSTERS.map((c) => {
  const b = getLegalBranchMeta(c.branchId);
  const entText = c.entities
    .map(
      (e) =>
        `${e.name} ${e.article} ${e.rule} ${e.hallmark} ${e.vignette} ${e.remedy} ${e.pearl} ${e.trapFalse}`
    )
    .join(' ');
  return `${b.name} ${b.shortName} ${b.lawCodes} ${c.subTopic} ${c.exams.join(' ')} ${c.osymTwinYear || ''} ${entText}`.toLowerCase();
});

function cleanDot(s: string): string {
  return (s || '').replace(/[.!]+$/, '').replace(/\s{2,}/g, ' ').trim();
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function maskLeakTokens(rawText: string, forbiddenLabel: string, replacement = 'bu hukuki kurum'): string {
  const base = forbiddenLabel.split('(')[0].split('—')[0].trim();
  const candidates = new Set<string>();
  if (base.length >= 5) candidates.add(base);
  const stripped = base
    .replace(/\s+(?:davası|hakkı|süresi|suçu|kanunu|mahkemesi|kararı|usülü|usulü|kurulu|yolu|ilkesi)$/i, '')
    .trim();
  if (stripped.length >= 5) candidates.add(stripped);

  const sorted = [...candidates].sort((a, b) => b.length - a.length);
  let out = rawText;
  for (const tok of sorted) {
    const re = new RegExp(
      `${escapeRegExp(tok)}(?:[’']?(?:da|de|ta|te|dan|den|tan|ten|ın|in|un|ün|nın|nin|nun|nün|yla|yle|la|le|ya|ye|a|e|ı|i|u|ü))?`,
      'gi'
    );
    out = out.replace(re, replacement);
  }
  return out
    .replace(/\(\s*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

interface HydratedVakaPayload {
  branchName: string;
  subTopic: string;
  articleRef: string;
  difficulty: LegalVakaQuestion['difficulty'];
  examFrequency: LegalVakaQuestion['examFrequency'];
  stem: string;
  legalClues: string[];
  options: LegalQuestionOption[];
  correctOption: OptionLetter;
  legalReasoning: string;
  differentialSummary: string;
  highYieldPearl: string;
  remedyNote: string;
}

interface HydratedSpotPayload {
  branchName: string;
  subTopic: string;
  articleRef: string;
  statement: string;
  criticalHighlight: string;
  correctLegalFact: string;
  remedyNote: string;
  highYieldPearl: string;
}

const VAKA_LRU = new Map<string, HydratedVakaPayload>();
const SPOT_LRU = new Map<string, HydratedSpotPayload>();
const MAX_LRU = 180;

function hydrateLegalVaka(
  id: string,
  cIdx: number,
  eIdx: number,
  aIdx: number
): HydratedVakaPayload {
  const cached = VAKA_LRU.get(id);
  if (cached) return cached;

  const cluster = ALL_STRUCTURED_LEGAL_CLUSTERS[cIdx];
  const branchMeta = getLegalBranchMeta(cluster.branchId);
  const entities = cluster.entities;
  const e = entities[eIdx];
  const prefix = cluster.osymTwinYear
    ? `[${cluster.osymTwinYear} ÖSYM Konsept İkizi] `
    : '';
  const vText = `${cleanDot(e.vignette)}.`;
  const nonTargets = [0, 1, 2, 3, 4].filter((idx) => idx !== eIdx);

  let difficulty = cluster.difficulty;
  let freq = cluster.examFrequency;
  let stemCore = '';
  let buildOpt: (cand: (typeof entities)[number], sourceIdx: number) => string;

  switch (aIdx) {
    case 0:
      difficulty = 'Olay / Vaka';
      freq = 'Her Sınavda Sorulur';
      stemCore = `${maskLeakTokens(vText, e.name)} Bu olayda söz konusu olan hukuki kurum, kural veya nitelendirme aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cand.name;
      break;
    case 1:
      difficulty = 'İleri Ayırıcı';
      freq = 'Her Sınavda Sorulur';
      stemCore = `${maskLeakTokens(vText, e.rule, 'ilgili düzenleme')} Güncel mevzuata göre bu olayda uygulanacak temel kanun kuralı, süre veya şart aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cleanDot(cand.rule);
      break;
    case 2:
      difficulty = 'Olay / Vaka';
      freq = 'Yüksek Verimli Olay';
      stemCore = `${maskLeakTokens(vText, e.remedy, 'ilgili hukuki yol')} Bu uyuşmazlıkta izlenecek hukuki yol, görevli merci veya yaptırım aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cleanDot(cand.remedy);
      break;
    case 3:
      difficulty = 'Temel Mevzuat';
      freq = 'Her Sınavda Sorulur';
      stemCore = `${branchMeta.name} mevzuatı kapsamında "${cleanDot(maskLeakTokens(e.hallmark, e.name))}" özelliği ile tanımlanan hukuki kavram veya kurum hangisidir?`;
      buildOpt = (cand) => cand.name;
      break;
    case 4:
      difficulty = 'Temel Mevzuat';
      freq = 'Kritik Kanun Maddesi';
      stemCore = `${branchMeta.name} kapsamında incelenen "${e.name}" (${e.article}) açısından geçerli temel kanun kuralı aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cleanDot(maskLeakTokens(cand.rule, e.name));
      break;
    case 5:
      difficulty = 'Olay / Vaka';
      freq = 'Yüksek Verimli Olay';
      stemCore = `${cluster.subTopic} başlığında yer alan "${e.name}" açısından aşağıdaki ayırt edici hukuki özelliklerden hangisi doğrudur?`;
      buildOpt = (cand) => cleanDot(maskLeakTokens(cand.hallmark, e.name));
      break;
    case 6:
      difficulty = 'İleri Ayırıcı';
      freq = 'Yüksek Verimli Olay';
      stemCore = `${branchMeta.name} (${e.article}) uyarınca "${cleanDot(maskLeakTokens(e.rule, e.hallmark, 'ilgili kapsam'))}" kuralı uygulandığında aşağıdaki ayırt edici sonuç veya özelliklerden hangisi ortaya çıkar?`;
      buildOpt = (cand) => cleanDot(cand.hallmark);
      break;
    case 7:
      difficulty = 'Temel Mevzuat';
      freq = 'Kritik Kanun Maddesi';
      stemCore = `${cluster.subTopic} kapsamında "${e.name}" için öngörülen görevli merci, kanun yolu veya hukuki yaptırım aşağıdakilerden hangisidir?`;
      buildOpt = (cand) => cleanDot(maskLeakTokens(cand.remedy, e.name));
      break;
    case 8:
      difficulty = 'Olay / Vaka';
      freq = 'Her Sınavda Sorulur';
      stemCore = `${branchMeta.name} olay çözümünde "${e.clues.map((cl) => maskLeakTokens(cl, e.name)).join(' + ')}" unsurları bir arada bulunduğunda hangi hukuki kurum söz konusu olur?`;
      buildOpt = (cand) => cand.name;
      break;
    case 9:
      difficulty = 'İleri Ayırıcı';
      freq = 'Kritik Kanun Maddesi';
      stemCore = `${branchMeta.name} kapsamında "${e.clues.join(' + ')}" olgularının bulunduğu bir durumda uygulanacak temel mevzuat hükmü hangisidir?`;
      buildOpt = (cand) => cleanDot(cand.rule);
      break;
    case 10:
      difficulty = 'İleri Ayırıcı';
      freq = 'Her Sınavda Sorulur';
      stemCore = `${branchMeta.name} (${cluster.subTopic} — Grup ${eIdx + 1}) kapsamındaki aşağıdaki mevzuat yargılarından hangisi YANLIŞTIR?`;
      buildOpt = (cand, sourceIdx) =>
        sourceIdx === eIdx
          ? `${e.name}: ${cleanDot(e.trapFalse)}.`
          : `${cand.name}: ${cleanDot(cand.rule)}.`;
      break;
    default:
      difficulty = 'Olay / Vaka';
      freq = 'Yüksek Verimli Olay';
      stemCore = `${cluster.subTopic} (Seri ${eIdx + 1}) kapsamındaki aşağıdaki "hukuki kurum — yaptırım / merci" eşleştirmelerinden hangisi DOĞRUDUR?`;
      buildOpt = (cand, sourceIdx) => {
        if (sourceIdx === eIdx) {
          return `${e.name} — ${cleanDot(e.remedy)}`;
        }
        const pos = nonTargets.indexOf(sourceIdx);
        const derangedIdx = nonTargets[(pos + 1) % 4];
        return `${cand.name} — ${cleanDot(entities[derangedIdx].remedy)}`;
      };
      break;
  }

  const shift = (cIdx * 3 + eIdx * 2 + aIdx) % 5;

  const options: LegalQuestionOption[] = OPTION_LETTERS.map((letter, optPos) => {
    const sourceIdx = (optPos + shift) % 5;
    const cand = entities[sourceIdx];
    const isTarget = sourceIdx === eIdx;
    const text = buildOpt(cand, sourceIdx).replace(/\s{2,}/g, ' ').trim();

    let differentialNote: string;
    if (aIdx === 10) {
      differentialNote = isTarget
        ? `✓ Doğru Yanıt (Yanlış Yargı): ${e.name} (${e.article}) için doğrusu "${cleanDot(e.rule)}" şeklindedir.`
        : `Doğru Mevzuat (${cand.name} • ${cand.article}): ${cleanDot(cand.rule)}`;
    } else if (aIdx === 11) {
      differentialNote = isTarget
        ? `✓ Doğru Eşleştirme (${e.name} • ${e.article}): ${cleanDot(e.remedy)}`
        : `Yanlış Eşleştirme — ${cand.name} (${cand.article}) için doğru merci/sonuç: ${cleanDot(cand.remedy)}`;
    } else {
      differentialNote = isTarget
        ? `✓ Doğru (${cand.name} • ${cand.article}): ${cleanDot(cand.rule)}`
        : `${cand.name} (${cand.article}): ${cleanDot(cand.rule)}`;
    }

    return { letter, text, differentialNote };
  });

  const correctOptObj = options.find((_, optPos) => (optPos + shift) % 5 === eIdx)!;

  const differentialSummary = entities
    .map((cand, idx) =>
      idx === eIdx
        ? `✓ ${cand.name} (${cand.article}): ${cleanDot(cand.rule)}`
        : `• ${cand.name} (${cand.article}): ${cleanDot(cand.rule)}`
    )
    .join('\n');

  const payload: HydratedVakaPayload = {
    branchName: branchMeta.name,
    subTopic: cluster.subTopic,
    articleRef: e.article,
    difficulty,
    examFrequency: freq,
    stem: `${prefix}${stemCore}`.replace(/\s{2,}/g, ' ').trim(),
    legalClues: e.clues,
    options,
    correctOption: correctOptObj.letter,
    legalReasoning: `${e.name} (${e.article}): ${cleanDot(e.rule)}. Ayırt edici unsur: ${cleanDot(e.hallmark)}.`,
    differentialSummary,
    highYieldPearl: cleanDot(e.pearl),
    remedyNote: cleanDot(e.remedy)
  };

  if (VAKA_LRU.size >= MAX_LRU) {
    const firstKey = VAKA_LRU.keys().next().value;
    if (firstKey) VAKA_LRU.delete(firstKey);
  }
  VAKA_LRU.set(id, payload);
  return payload;
}

function hydrateLegalSpot(
  id: string,
  cIdx: number,
  eIdx: number,
  sIdx: number
): HydratedSpotPayload {
  const cached = SPOT_LRU.get(id);
  if (cached) return cached;

  const cluster = ALL_STRUCTURED_LEGAL_CLUSTERS[cIdx];
  const branchMeta = getLegalBranchMeta(cluster.branchId);
  const entities = cluster.entities;
  const e = entities[eIdx];
  const sib1 = entities[(eIdx + 1) % 5];
  const sib2 = entities[(eIdx + 2) % 5];
  const sib3 = entities[(eIdx + 3) % 5];
  const sib4 = entities[(eIdx + 4) % 5];
  const ctxTag = cluster.subTopic.split(':')[0].trim();

  let statement = '';
  let criticalHighlight = '';

  switch (sIdx) {
    case 0:
      statement = `${e.name} (${ctxTag} • ${e.article}) kapsamında geçerli temel kural: ${cleanDot(e.rule)}.`;
      criticalHighlight = cleanDot(e.rule);
      break;
    case 1:
      statement = `${e.name} (${ctxTag}) açısından ${cleanDot(e.trapFalse)}.`;
      criticalHighlight = e.trapHighlight;
      break;
    case 2:
      statement = `${e.name} (${ctxTag}) için ayırt edici hukuki özellik olarak "${cleanDot(e.hallmark)}" geçerlidir.`;
      criticalHighlight = e.clues[0] || e.name;
      break;
    case 3:
      statement = `${e.name} (${ctxTag}) için öngörülen temel kanun kuralı "${cleanDot(sib1.rule)}" şeklinde uygulanır.`;
      criticalHighlight = cleanDot(sib1.rule);
      break;
    case 4:
      statement = `${e.name} (${ctxTag}) bakımından görevli merci / hukuki yaptırım: ${cleanDot(e.remedy)}.`;
      criticalHighlight = e.name;
      break;
    case 5:
      statement = `${ctxTag} kapsamında "${cleanDot(e.hallmark)}" şartı gerçekleştiğinde ${sib2.name} uygulanır, ${e.name} hükümleri uygulanmaz.`;
      criticalHighlight = sib2.name;
      break;
    case 6:
      statement = `${e.name} (${ctxTag}) için sınav altın kuralı: ${cleanDot(e.pearl)}.`;
      criticalHighlight = e.name;
      break;
    case 7:
      statement = `${e.name} (${ctxTag}) için en ayırt edici hukuki sonuç "${cleanDot(sib3.hallmark)}" olarak belirlenmiştir.`;
      criticalHighlight = cleanDot(sib3.hallmark);
      break;
    case 8:
      statement = `${ctxTag} olayında "${e.clues.join(' + ')}" unsurları birlikte gerçekleştiğinde ${e.name} (${e.article}) uygulanır.`;
      criticalHighlight = e.name;
      break;
    case 9:
      statement = `${e.name} (${ctxTag}) uyuşmazlığında başvurulacak merci veya yaptırım "${cleanDot(sib4.remedy)}" olarak düzenlenmiştir.`;
      criticalHighlight = cleanDot(sib4.remedy);
      break;
    case 10:
      statement = `${ctxTag} kapsamında "${cleanDot(e.rule)}" kuralı, "${cleanDot(e.hallmark)}" sonucuyla doğrudan bağlantılıdır (${e.article}).`;
      criticalHighlight = cleanDot(e.rule);
      break;
    default:
      statement = `${ctxTag} kapsamında "${e.clues.join(' + ')}" unsurlarına uygulanacak temel hüküm "${cleanDot(sib2.rule)}" şeklindedir.`;
      criticalHighlight = cleanDot(sib2.rule);
      break;
  }

  const payload: HydratedSpotPayload = {
    branchName: branchMeta.name,
    subTopic: cluster.subTopic,
    articleRef: e.article,
    statement: statement.replace(/\s{2,}/g, ' ').trim(),
    criticalHighlight,
    correctLegalFact: `${e.name} (${e.article}): ${cleanDot(e.rule)} • ${cleanDot(e.hallmark)}.`,
    remedyNote: cleanDot(e.remedy),
    highYieldPearl: cleanDot(e.pearl)
  };

  if (SPOT_LRU.size >= MAX_LRU) {
    const firstKey = SPOT_LRU.keys().next().value;
    if (firstKey) SPOT_LRU.delete(firstKey);
  }
  SPOT_LRU.set(id, payload);
  return payload;
}

class VirtualLegalVakaQuestion implements LegalVakaQuestion {
  readonly id: string;
  readonly branchId: LegalBranchId;
  readonly exams: LegalExamType[];
  readonly isOsymTwin?: boolean;
  readonly osymYearTag?: string;
  readonly _cIdx: number;
  private readonly _eIdx: number;
  private readonly _aIdx: number;

  constructor(
    id: string,
    branchId: LegalBranchId,
    exams: LegalExamType[],
    cIdx: number,
    eIdx: number,
    aIdx: number,
    osymYearTag?: string
  ) {
    this.id = id;
    this.branchId = branchId;
    this.exams = exams;
    this._cIdx = cIdx;
    this._eIdx = eIdx;
    this._aIdx = aIdx;
    if (osymYearTag) {
      this.isOsymTwin = true;
      this.osymYearTag = osymYearTag;
    }
  }

  private _h(): HydratedVakaPayload {
    return hydrateLegalVaka(this.id, this._cIdx, this._eIdx, this._aIdx);
  }

  get branchName(): string { return this._h().branchName; }
  get subTopic(): string { return this._h().subTopic; }
  get articleRef(): string { return this._h().articleRef; }
  get difficulty(): LegalVakaQuestion['difficulty'] { return this._h().difficulty; }
  get examFrequency(): LegalVakaQuestion['examFrequency'] { return this._h().examFrequency; }
  get stem(): string { return this._h().stem; }
  get legalClues(): string[] { return this._h().legalClues; }
  get options(): LegalQuestionOption[] { return this._h().options; }
  get correctOption(): OptionLetter { return this._h().correctOption; }
  get legalReasoning(): string { return this._h().legalReasoning; }
  get differentialSummary(): string { return this._h().differentialSummary; }
  get highYieldPearl(): string { return this._h().highYieldPearl; }
  get remedyNote(): string { return this._h().remedyNote; }
}

class VirtualLegalSpotCard implements LegalSpotCard {
  readonly id: string;
  readonly branchId: LegalBranchId;
  readonly exams: LegalExamType[];
  readonly isTrue: boolean;
  readonly _cIdx: number;
  private readonly _eIdx: number;
  private readonly _sIdx: number;

  constructor(
    id: string,
    branchId: LegalBranchId,
    exams: LegalExamType[],
    isTrue: boolean,
    cIdx: number,
    eIdx: number,
    sIdx: number
  ) {
    this.id = id;
    this.branchId = branchId;
    this.exams = exams;
    this.isTrue = isTrue;
    this._cIdx = cIdx;
    this._eIdx = eIdx;
    this._sIdx = sIdx;
  }

  private _h(): HydratedSpotPayload {
    return hydrateLegalSpot(this.id, this._cIdx, this._eIdx, this._sIdx);
  }

  get branchName(): string { return this._h().branchName; }
  get subTopic(): string { return this._h().subTopic; }
  get articleRef(): string { return this._h().articleRef; }
  get statement(): string { return this._h().statement; }
  get criticalHighlight(): string { return this._h().criticalHighlight; }
  get correctLegalFact(): string { return this._h().correctLegalFact; }
  get remedyNote(): string { return this._h().remedyNote; }
  get highYieldPearl(): string { return this._h().highYieldPearl; }
}

function mapLegacyBranchToId(b: LawBranch): LegalBranchId {
  switch (b) {
    case 'Anayasa': return 'anayasa';
    case 'İYUK':
    case 'İdare': return 'idare';
    case 'Medeni': return 'medeni';
    case 'Borçlar': return 'borclar';
    case 'HMK': return 'hmk';
    case 'TCK':
    case 'Ceza': return 'tck';
    case 'CMK': return 'cmk';
    case 'Ticaret': return 'ticaret';
    case 'İcra': return 'icra';
    case 'İş Hukuku': return 'is_sgk';
    case 'Vergi': return 'vergi';
    case 'Avukatlık': return 'avukatlik';
    case 'MÖHUK': return 'mohuk';
    default: return 'hmk';
  }
}

// Build virtual arrays (interleaved across clusters so default browse covers all 14 branches smoothly!)
function buildRepositories(): {
  vakaQuestions: LegalVakaQuestion[];
  osymTwins: LegalVakaQuestion[];
  spotCards: LegalSpotCard[];
} {
  const vakaQuestions: LegalVakaQuestion[] = [];
  const osymTwins: LegalVakaQuestion[] = [];
  const spotCards: LegalSpotCard[] = [];

  // Interleave by angle (aIdx 0..11) and entity (eIdx 0..4) across all clusters for rich variety right from question #1!
  for (let aIdx = 0; aIdx < 12; aIdx++) {
    for (let eIdx = 0; eIdx < 5; eIdx++) {
      for (let cIdx = 0; cIdx < ALL_STRUCTURED_LEGAL_CLUSTERS.length; cIdx++) {
        const c = ALL_STRUCTURED_LEGAL_CLUSTERS[cIdx];
        const id = `lv-${c.branchId}-c${cIdx}-e${eIdx}-a${aIdx}`;
        const q = new VirtualLegalVakaQuestion(
          id,
          c.branchId,
          c.exams,
          cIdx,
          eIdx,
          aIdx,
          c.osymTwinYear
        );
        vakaQuestions.push(q);
        if (c.osymTwinYear) {
          osymTwins.push(q);
        }
      }
    }
  }

  for (let sIdx = 0; sIdx < 12; sIdx++) {
    const isTrue = sIdx % 2 === 0;
    for (let eIdx = 0; eIdx < 5; eIdx++) {
      for (let cIdx = 0; cIdx < ALL_STRUCTURED_LEGAL_CLUSTERS.length; cIdx++) {
        const c = ALL_STRUCTURED_LEGAL_CLUSTERS[cIdx];
        const id = `ls-${c.branchId}-c${cIdx}-e${eIdx}-s${sIdx}`;
        spotCards.push(
          new VirtualLegalSpotCard(id, c.branchId, c.exams, isTrue, cIdx, eIdx, sIdx)
        );
      }
    }
  }

  // Append all legacy hand-curated HMGS statutory trap cards (1,383+ cards)
  const seenLegacyStatements = new Set<string>();
  for (const legacy of INITIAL_HMGS_CARDS) {
    const stClean = (legacy.statement || '').replace(/\s{2,}/g, ' ').trim();
    if (stClean.length < 20 || seenLegacyStatements.has(stClean)) continue;
    seenLegacyStatements.add(stClean);
    const branchId = mapLegacyBranchToId(legacy.branch);
    const meta = getLegalBranchMeta(branchId);
    spotCards.push({
      id: `legacy-${legacy.id}`,
      branchId,
      branchName: meta.name,
      exams: meta.exams,
      subTopic: legacy.subTopic || legacy.trapCategory,
      articleRef: legacy.articleRef,
      isTrue: legacy.isCorrect,
      statement: stClean,
      criticalHighlight: legacy.wrongPhrase || legacy.correctPhrase || legacy.articleRef,
      correctLegalFact: `${legacy.articleRef}: ${legacy.correctPhrase} — ${legacy.explanation}`,
      remedyNote: legacy.trapCategory,
      highYieldPearl: legacy.explanation
    });
  }

  return { vakaQuestions, osymTwins, spotCards };
}

const BUILT = buildRepositories();

export const LEGAL_VAKA_QUESTIONS: LegalVakaQuestion[] = BUILT.vakaQuestions;
export const LEGAL_OSYM_TWIN_QUESTIONS: LegalVakaQuestion[] = BUILT.osymTwins;
export const LEGAL_SPOT_CARDS: LegalSpotCard[] = BUILT.spotCards;

export const TOTAL_INTERACTIVE_LEGAL_ITEMS: number =
  LEGAL_VAKA_QUESTIONS.length + LEGAL_SPOT_CARDS.length;

export function matchesLegalSearch(
  item: LegalVakaQuestion | LegalSpotCard,
  queryLower: string
): boolean {
  if (!queryLower) return true;
  if ('_cIdx' in item && typeof (item as VirtualLegalVakaQuestion)._cIdx === 'number') {
    return CLUSTER_HAYSTACK[(item as VirtualLegalVakaQuestion)._cIdx].includes(queryLower);
  }
  const s = item as LegalSpotCard;
  return `${s.branchName} ${s.subTopic} ${s.articleRef} ${s.statement} ${s.correctLegalFact}`
    .toLowerCase()
    .includes(queryLower);
}

// Precompute branch counts in O(N) once at module load (<2ms)
export const STATIC_LEGAL_BRANCH_COUNTS: Record<'ALL' | LegalBranchId, LegalBranchCount> = (() => {
  const counts: Record<string, LegalBranchCount> = {
    ALL: { vaka: 0, twin: 0, spot: 0, total: 0 }
  };
  for (const b of LEGAL_BRANCHES) {
    counts[b.id] = { vaka: 0, twin: 0, spot: 0, total: 0 };
  }
  for (const q of LEGAL_VAKA_QUESTIONS) {
    counts.ALL.vaka += 1;
    counts.ALL.total += 1;
    counts[q.branchId].vaka += 1;
    counts[q.branchId].total += 1;
    if (q.isOsymTwin) {
      counts.ALL.twin += 1;
      counts[q.branchId].twin += 1;
    }
  }
  for (const s of LEGAL_SPOT_CARDS) {
    counts.ALL.spot += 1;
    counts.ALL.total += 1;
    counts[s.branchId].spot += 1;
    counts[s.branchId].total += 1;
  }
  return counts as Record<'ALL' | LegalBranchId, LegalBranchCount>;
})();
