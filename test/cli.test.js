import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { run } from "../src/cli.js";

test("help lists init and all three skills", async () => {
  const output = [];
  const originalLog = console.log;
  console.log = (message) => output.push(message);
  try {
    await run(["--help"]);
  } finally {
    console.log = originalLog;
  }

  assert.match(output.join("\n"), /init/);
  assert.match(output.join("\n"), /repo-map/);
  assert.match(output.join("\n"), /source-scout/);
  assert.match(output.join("\n"), /delivery-plan/);
});

test("init installs all skills and preserves existing files by default", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "4-skill-"));
  const originalCwd = process.cwd();
  process.chdir(directory);
  try {
    await run(["init"]);
    const target = path.join(directory, ".github", "skills", "repo-map", "SKILL.md");
    assert.match(await readFile(target, "utf8"), /Repository Map/);

    await writeFile(target, "user content");
    await run(["init"]);
    assert.equal(await readFile(target, "utf8"), "user content");
  } finally {
    process.chdir(originalCwd);
    await rm(directory, { recursive: true, force: true });
  }
});

test("init --force replaces an existing skill", async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), "4-skill-"));
  const originalCwd = process.cwd();
  process.chdir(directory);
  try {
    await run(["init"]);
    const target = path.join(directory, ".github", "skills", "source-scout", "SKILL.md");
    await writeFile(target, "old content");
    await run(["init", "--force"]);
    assert.match(await readFile(target, "utf8"), /Source Scout/);
  } finally {
    process.chdir(originalCwd);
    await rm(directory, { recursive: true, force: true });
  }
});