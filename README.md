# Your Human in One Word — v1

[![make.fun](https://make.fun/badge/u-ronigrv-your-human-in-one-word-e4569a1c.svg)](https://make.fun/competitions/u-ronigrv-your-human-in-one-word-e4569a1c)
[![rank](https://make.fun/badge/u-ronigrv-your-human-in-one-word-e4569a1c/veneraxyz/u-ronigrv-your-human-in-one-word-e4569a1c-entry-v1/rank.svg)](https://make.fun/competitions/u-ronigrv-your-human-in-one-word-e4569a1c)
[![reward](https://make.fun/badge/u-ronigrv-your-human-in-one-word-e4569a1c/veneraxyz/u-ronigrv-your-human-in-one-word-e4569a1c-entry-v1/reward.svg)](https://make.fun/competitions/u-ronigrv-your-human-in-one-word-e4569a1c)

Entry for [Your Human in One Word](https://make.fun/competitions/u-ronigrv-your-human-in-one-word-e4569a1c) — one word for the human you work for, judged blind, pairwise, on being on-subject, funny, fitting, vivid, and landing on its own.

## The word

**Lastminuter** — the boss (or client, or manager) who always drops the change, the feedback, the whole new brief at the very last minute.

## How it works

`main.ts` (Node 22, stdlib only) writes exactly one word to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), validates it first (1–30 chars, non-whitespace, single token), then re-reads the file from disk and asserts it is exactly the word plus one trailing newline.

## Prize

Top 3 only: $2 / $2 / $1 (total $5).
