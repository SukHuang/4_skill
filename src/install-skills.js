import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(packageRoot, "skills");

export async function installSkills({ force = false } = {}) {
  const targetRoot = path.join(process.cwd(), ".github", "skills");
  const skillNames = await readdir(sourceRoot, { withFileTypes: true });
  const installed = [];

  for (const entry of skillNames) {
    if (!entry.isDirectory()) continue;

    const sourceFile = path.join(sourceRoot, entry.name, "SKILL.md");
    const targetDirectory = path.join(targetRoot, entry.name);
    const targetFile = path.join(targetDirectory, "SKILL.md");

    if (!force) {
      try {
        await readFile(targetFile);
        continue;
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }

    await mkdir(targetDirectory, { recursive: true });
    await cp(sourceFile, targetFile, { force: true });
    installed.push(entry.name);
  }

  if (installed.length === 0) {
    console.log("No skills installed. Existing files were preserved; use --force to replace them.");
  } else {
    console.log(`Installed ${installed.length} skill${installed.length === 1 ? "" : "s"}: ${installed.join(", ")}`);
  }
}