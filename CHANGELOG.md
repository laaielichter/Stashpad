# Changelog

All notable changes to Stashpad are listed here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Community files: contributing guide, code of conduct, security policy, issue forms and a pull request template.

## [0.1.0]

First version.

### Added

- Memories stored as plain Markdown files, each with a source, dates and a trust level.
- Commands to save, search, read the history of and confirm memories; ended facts are kept, never overwritten.
- Review queue: writes from agents, tools and the web wait until a person accepts or rejects them, with an audit log.
- Safety checks at write time: secrets, invisible characters, look-alike words and instruction-like text (English and Dutch).
- A gatekeeper that refuses agent notes that are too short or near-copies of existing ones.
- Session commands for agents: `doctor`, `brief`, `handover` and `sync-agents`.
- MCP server with five tools: `stashpad_search`, `stashpad_get`, `stashpad_recent`, `stashpad_save`, `stashpad_forget`.
- A local review page (`stashpad ui`) that only this computer can reach.
- Import from JSON Lines or plain text, export to JSON Lines.
- Snapshots, restore and migrate, so updates never lose a store.
- `stashpad setup` prints the settings that connect an agent (generic, Claude Code, VS Code, Codex, AGENTS.md).
- `stashpad eval`: a built-in check of search quality and safety, without calling a language model.
- Claude Code plugin files, plus an `AGENTS.md` block for other agents.

[Unreleased]: https://github.com/laaielichter/stashpad/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/laaielichter/stashpad/releases/tag/v0.1.0
