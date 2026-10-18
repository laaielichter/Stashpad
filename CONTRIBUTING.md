# Contributing to Stashpad

Thanks for helping. Small fixes and big ideas are both welcome.

## Ways to help

- Report a bug or suggest an idea with the issue forms.
- Pick an issue labeled `good first issue`.
- Improve the docs or add an example.
- Try Stashpad with an agent we have not tested yet and tell us what broke.

## Set up

Stashpad needs Node 20 or newer and has no dependencies.

```bash
git clone https://github.com/laaielichter/stashpad.git
cd stashpad
npm test
npm run build
node bin/stashpad.mjs --help
```

## Pull requests

1. Open an issue first for anything bigger than a small fix, so we can agree on the approach.
2. Keep each pull request to one change.
3. Add or update tests. `npm test` must pass on Node 20 and 22.
4. Update the docs when behaviour changes, and add a line to `CHANGELOG.md` under "Unreleased".
5. Describe what changed and why.

## Rules that keep Stashpad safe

These are core to the project. A pull request that weakens them will not be merged.

- No runtime dependencies.
- Writes from agents, tools and the web go to the review queue. They are never stored directly.
- Secrets are refused at write time.
- Memories stay plain Markdown files. The files are the source of truth.
- Stashpad works with any agent. Nothing may require one model or one company.
- Code taken from other projects goes through `npm run port`, which checks the license and records where it came from.

## Security issues

Do not open a public issue for a security problem. See [SECURITY.md](SECURITY.md).

## Be kind

We follow the [Code of Conduct](CODE_OF_CONDUCT.md). Be patient and specific; we will do the same.
