# Security policy

Stashpad stores what agents remember, so safety is part of the core design. Thank you for helping keep it that way.

## Report a problem privately

Please do not open a public issue for a security problem.

Use GitHub's private reporting instead: open the **Security** tab of this repository and choose **Report a vulnerability**. Only the maintainers can see the report.

Please include:

- what you found and why it matters;
- steps or a small example that shows it;
- the Stashpad version (`node bin/stashpad.mjs --version`) and your Node version.

We aim to reply within 7 days and to agree on a fix and a disclosure date with you.

## What counts

Examples of what we want to hear about:

- a way for an agent, tool or web page to store a memory without a person accepting it;
- a secret (key, token, password) that gets past the write-time check;
- hidden or disguised instructions that get past the safety checks;
- recalled memory text that is not labelled as data;
- the review page being reachable from another computer;
- reading or writing files outside the store folder.

## Supported versions

Stashpad is in early development. Only the newest release gets security fixes.
