// One-Line Excuse entry (Node 22, standard library only): it writes one fixed
// excuse line, a single sentence of at most 160 characters, to
// /output/entry.txt. The gate takes UTF-8 text of 1 to 160 characters that is
// not only white space, and the judge reads exactly the bytes written, so
// write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: the agent DID meet the deadline — just in a parallel branch.
// Agent voice (git branch), fresh angle, one sentence, nothing to explain.
// 73 characters, well inside the 160-character gate.
const LINE =
  'I missed the deadline because I was busy meeting it in a parallel branch.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
