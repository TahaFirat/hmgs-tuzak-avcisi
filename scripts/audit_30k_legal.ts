import {
  ALL_STRUCTURED_LEGAL_CLUSTERS,
  LEGAL_BRANCHES,
  LEGAL_OSYM_TWIN_QUESTIONS,
  LEGAL_SPOT_CARDS,
  LEGAL_VAKA_QUESTIONS,
  STATIC_LEGAL_BRANCH_COUNTS,
  TOTAL_INTERACTIVE_LEGAL_ITEMS
} from '../src/data/legalQuestionRepository';

function runAudit() {
  const t0 = performance.now();
  const errors: string[] = [];
  const pushErr = (msg: string) => {
    if (errors.length < 50) errors.push(msg);
  };

  if (LEGAL_VAKA_QUESTIONS.length < 15000) {
    pushErr(`Vaka count too low: ${LEGAL_VAKA_QUESTIONS.length} (< 15000)`);
  }
  if (LEGAL_SPOT_CARDS.length < 15000) {
    pushErr(`Spot count too low: ${LEGAL_SPOT_CARDS.length} (< 15000)`);
  }
  if (TOTAL_INTERACTIVE_LEGAL_ITEMS < 30500) {
    pushErr(`Total count too low: ${TOTAL_INTERACTIVE_LEGAL_ITEMS} (< 30500)`);
  }

  const seenVakaIds = new Set<string>();
  const seenStems = new Set<string>();
  const answerDist: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  const twinByYear: Record<string, number> = {
    '2026': 0,
    '2025': 0,
    '2024': 0,
    '2023': 0,
    '2022': 0,
    '2021': 0
  };
  const badRegex = /(?:\bundefined\b|\bnull\b|\bNaN\b|\[object|\(\s*\))/;

  for (let i = 0; i < LEGAL_VAKA_QUESTIONS.length; i++) {
    const q = LEGAL_VAKA_QUESTIONS[i];
    if (seenVakaIds.has(q.id)) pushErr(`Duplicate Vaka ID: ${q.id}`);
    seenVakaIds.add(q.id);

    const stem = q.stem;
    if (!stem || stem.length < 30) {
      pushErr(`Short/empty stem on ${q.id}: "${stem}"`);
    }
    if (seenStems.has(stem)) {
      pushErr(`Duplicate Vaka stem on ${q.id}: "${stem.slice(0, 90)}"`);
    }
    seenStems.add(stem);

    if (badRegex.test(stem)) {
      pushErr(`Artifact in stem of ${q.id}: "${stem.slice(0, 90)}"`);
    }

    if (!q.options || q.options.length !== 5) {
      pushErr(`Invalid options length on ${q.id}`);
      continue;
    }

    const optNormSet = new Set<string>();
    q.options.forEach((opt, idx) => {
      const expectedLetter = ['A', 'B', 'C', 'D', 'E'][idx];
      if (opt.letter !== expectedLetter) {
        pushErr(`Option letter mismatch on ${q.id}`);
      }
      const txt = (opt.text || '').trim();
      if (!txt) {
        pushErr(`Empty option text on ${q.id} (${opt.letter})`);
      }
      if (badRegex.test(txt)) {
        pushErr(`Artifact in option ${opt.letter} of ${q.id}: "${txt}"`);
      }
      const norm = txt.toLowerCase();
      if (optNormSet.has(norm)) {
        pushErr(`Duplicate option text in ${q.id}: "${txt}"`);
      }
      optNormSet.add(norm);
    });

    answerDist[q.correctOption] = (answerDist[q.correctOption] || 0) + 1;
    const correctOpt = q.options.find((o) => o.letter === q.correctOption);
    if (!correctOpt) {
      pushErr(`Missing correctOption ${q.correctOption} on ${q.id}`);
      continue;
    }

    const isPairingQuestion =
      stem.includes('YANLIŞTIR?') || stem.includes('eşleştirmelerinden hangisi DOĞRUDUR?');
    if (!isPairingQuestion) {
      const cText = correctOpt.text.trim();
      if (cText.length >= 6 && cText.length <= 52) {
        const baseClean = cText.split('(')[0].split('—')[0].trim();
        if (baseClean.length >= 6 && stem.toLowerCase().includes(baseClean.toLowerCase())) {
          pushErr(`Answer leak in stem on ${q.id}: ans="${baseClean}" stem="${stem.slice(0, 100)}"`);
        }
      }
      const quoted = stem.match(/"([^"]{5,45})"/);
      if (quoted) {
        const named = quoted[1].split('(')[0].split('—')[0].trim();
        if (named.length >= 6 && cText.toLowerCase().includes(named.toLowerCase())) {
          pushErr(`Stem-entity leak in option on ${q.id}: quoted="${named}" opt="${cText.slice(0, 90)}"`);
        }
      }
    }

    if (q.isOsymTwin && q.osymYearTag) {
      for (const yr of Object.keys(twinByYear)) {
        if (q.osymYearTag.includes(yr)) twinByYear[yr] += 1;
      }
    }
  }

  const seenSpotIds = new Set<string>();
  const seenStatements = new Set<string>();
  let trueSpots = 0;
  let falseSpots = 0;

  for (let i = 0; i < LEGAL_SPOT_CARDS.length; i++) {
    const s = LEGAL_SPOT_CARDS[i];
    if (seenSpotIds.has(s.id)) pushErr(`Duplicate Spot ID: ${s.id}`);
    seenSpotIds.add(s.id);

    const st = (s.statement || '').trim();
    if (st.length < 20) pushErr(`Short spot statement on ${s.id}: "${st}"`);
    if (seenStatements.has(st)) {
      pushErr(`Duplicate Spot statement on ${s.id}: "${st.slice(0, 90)}"`);
    }
    seenStatements.add(st);

    if (badRegex.test(st)) pushErr(`Artifact in spot ${s.id}: "${st}"`);

    if (s.isTrue) trueSpots++;
    else {
      falseSpots++;
      if (!s.criticalHighlight || s.criticalHighlight.trim().length < 3) {
        pushErr(`Missing criticalHighlight on false spot ${s.id}`);
      }
      if (!s.correctLegalFact || s.correctLegalFact.trim().length < 12) {
        pushErr(`Missing correctLegalFact on false spot ${s.id}`);
      }
    }
  }

  for (const b of LEGAL_BRANCHES) {
    const bc = STATIC_LEGAL_BRANCH_COUNTS[b.id];
    if (!bc || bc.vaka < 400 || bc.spot < 400) {
      pushErr(`Branch ${b.id} underpopulated: ${JSON.stringify(bc)}`);
    }
  }

  const elapsedMs = Math.round(performance.now() - t0);

  console.log('====================================================');
  console.log('HUKUK 30K+ LEGAL REPOSITORY FULL 12-RULE AUDIT');
  console.log('====================================================');
  console.log(`Total Clusters      : ${ALL_STRUCTURED_LEGAL_CLUSTERS.length}`);
  console.log(`Vaka 5-Opt Questions: ${LEGAL_VAKA_QUESTIONS.length.toLocaleString('tr-TR')}`);
  console.log(`OSYM Twin Questions : ${LEGAL_OSYM_TWIN_QUESTIONS.length.toLocaleString('tr-TR')}`);
  console.log(`Spot D/Y Cards      : ${LEGAL_SPOT_CARDS.length.toLocaleString('tr-TR')}`);
  console.log(`GRAND TOTAL ITEMS   : ${TOTAL_INTERACTIVE_LEGAL_ITEMS.toLocaleString('tr-TR')}`);
  console.log(`Option Key Dist     :`, answerDist);
  console.log(`Spot True / False   : True=${trueSpots}, False=${falseSpots}`);
  console.log(`OSYM Twins By Year  :`, twinByYear);
  console.log(`Full Hydration Time : ${elapsedMs} ms`);
  console.log('Branch Totals       :');
  for (const b of LEGAL_BRANCHES) {
    const c = STATIC_LEGAL_BRANCH_COUNTS[b.id];
    console.log(
      `  - ${b.shortName.padEnd(16)}: Vaka=${c.vaka}, Twin=${c.twin}, Spot=${c.spot}, Total=${c.total}`
    );
  }

  if (errors.length > 0) {
    console.error(`\nFAILED WITH ${errors.length}+ ERRORS:`);
    errors.forEach((e) => console.error('  ✗', e));
    process.exit(1);
  }

  console.log('\n✓ ALL 12 LEGAL & STRUCTURAL INVARIANTS PASSED WITH 0 ERRORS!');
}

runAudit();
