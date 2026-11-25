// Worst Fix Ever: Funniest Commit Message.
// Writes one fixed commit message to entry.txt in the output directory.
// Deterministic: a constant string, no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const COMMIT_MESSAGE =
  "fix: race condition — added a lock, now nothing runs at all, but safely";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), COMMIT_MESSAGE, "utf8");
