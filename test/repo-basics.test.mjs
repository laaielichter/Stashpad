import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("MIT license file is present", () => {
  const text = readFileSync(join(root, "LICENSE"), "utf8");
  assert.match(text, /MIT License/);
});

test("third-party notice file and license folder exist", () => {
  assert.ok(existsSync(join(root, "THIRD_PARTY_NOTICES.md")));
  assert.ok(existsSync(join(root, "third_party", "licenses")));
});

test("package declares Node 20+ and MIT", () => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  assert.equal(pkg.license, "MIT");
  assert.equal(pkg.engines.node, ">=20");
});

test("community files are present", () => {
  for (const file of [
    "CONTRIBUTING.md",
    "CODE_OF_CONDUCT.md",
    "SECURITY.md",
    "CHANGELOG.md",
    ".github/PULL_REQUEST_TEMPLATE.md",
    ".github/ISSUE_TEMPLATE/bug.yml",
    ".github/ISSUE_TEMPLATE/feature.yml",
    ".github/ISSUE_TEMPLATE/config.yml",
  ]) {
    assert.ok(existsSync(join(root, file)), `${file} is missing`);
  }
});

test("changelog lists the current version", async () => {
  const { VERSION } = await import("../src/version.mjs");
  const text = readFileSync(join(root, "CHANGELOG.md"), "utf8");
  assert.ok(text.includes(`## [${VERSION}]`), `CHANGELOG.md has no section for ${VERSION}`);
});

test("entry module loads", async () => {
  const mod = await import("../src/index.mjs");
  assert.equal(mod.name, "stashpad");
});
