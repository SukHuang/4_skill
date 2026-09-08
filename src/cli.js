import { installSkills } from "./install-skills.js";

const HELP = `4-skill - install practical AI agent skills

Usage:
  4-skill init [--force]

Commands:
  init [--force]  Install the three skills in .github/skills

Installed skills:
  repo-map        Map a repository for onboarding or investigation
  source-scout    Research a technical decision with traceable sources
  delivery-plan   Turn a request into verifiable engineering work

Options:
  --help          Show this help
`;

export async function run(args) {
  const [command, ...options] = args;

  if (!command || command === "--help" || command === "-h") {
    console.log(HELP);
    return;
  }

  if (command === "init") {
    return installSkills({ force: options.includes("--force") });
  }

  throw new Error(`Unknown command "${command}". Run "4-skill --help" for usage.`);
}