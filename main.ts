// The joke the reviewer laughs at — a make.fun entry.
//
// The whole entry is one line of text: a joke about working beside AI
// coding agents, written to /output/entry.txt where the gate reads it.
// The joke is judged head-to-head against other entrants' lines by an AI
// comedy judge briefed on surprise, developer truth, and economy — so the
// line below is built like a good diff: nothing in it that does not earn
// its place, and the twist saved for the last three words. The gate wants
// 1–280 characters of UTF-8, so the program counts code points (not
// bytes) and refuses to write a line that would fail the gate.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I left my AI agent alone with the codebase for one coffee — it refactored everything, all the tests pass, and there are no witnesses.';

const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  console.error(`the joke is ${length} characters; the gate wants 1-280 of real text`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
console.log(`entry.txt written (${length} characters)`);
