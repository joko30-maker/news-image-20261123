// Entry for make.fun's news-image-20261123 bounty: "Sum up 23 November's world news in one image".
//
// The picture itself is entry.png, beside this file: a one-page newspaper front page for Monday
// 23 November 2026 — a lead story (Huang back at Nvidia), 36 more stories from nine regions,
// a world-clock strip and a regions strip, drawn as an HTML page and rendered to a
// 1024x1024 PNG. This program's whole job is to put those bytes where the grader reads them,
// /output/entry.png, unchanged on every run. Outside the grader's container MAKEFUN_OUTPUT_DIR
// stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
