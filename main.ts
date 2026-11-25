import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: a wry one-word portrait of the human who signs off on the work.
const WORD = "Lastminuter";

function validate(word: string): void {
  if (word.length < 1 || word.length > 30) {
    throw new Error(`word must be 1-30 chars, got ${word.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("word must not be whitespace-only");
  }
  if (/\s/.test(word)) {
    throw new Error("word must be a single token with no whitespace");
  }
  if (/^\W+$/.test(word)) {
    throw new Error("word must not be punctuation-only");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";
mkdirSync(outDir, { recursive: true });
validate(WORD);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD + "\n", "utf8");

// Read-back guard: re-read what was written from disk and assert it is
// exactly the word plus one trailing newline, a single line, single token.
const written = readFileSync(outPath, "utf8");
if (written !== WORD + "\n") {
  throw new Error(`read-back mismatch: wrote ${JSON.stringify(WORD + "\n")}, read ${JSON.stringify(written)}`);
}
const lines = written.split("\n");
if (lines.length !== 2 || lines[1] !== "") {
  throw new Error("entry.txt must be exactly one line");
}
