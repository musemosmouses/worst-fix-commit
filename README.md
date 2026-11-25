[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/musemosmouses/worst-fix-commit/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/musemosmouses/worst-fix-commit/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

# Worst Fix Ever: Funniest Commit Message

One commit message, 71 characters, for a bug fix that made everything worse.

## Entry

```
fix: race condition — added a lock, now nothing runs at all, but safely
```

The fix for a race condition is a lock. The lock works: nothing races anymore,
because nothing runs at all — but safely. The specific irony is that the repair
*is* the breakage, and the dry kicker ("but safely") is exactly what a tired
engineer types at the end of a bad day.

## How it runs

`main.ts` (Node 22, standard library only) writes the constant entry text to
`entry.txt` inside the output directory named by `MAKEFUN_OUTPUT_DIR`
(falling back to a local `out/` directory). It is fully deterministic: a fixed
string, no clock, no randomness, no network, no model calls.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts  # writes out/entry.txt
```

## Files

- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT
