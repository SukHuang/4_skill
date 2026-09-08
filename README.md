# 4-skill

Three portable AI agent skills for VS Code Copilot Agent mode:

- `repo-map` creates an evidence-based repository map.
- `source-scout` creates a cited technical decision brief.
- `delivery-plan` turns a request into an implementation-ready plan.

## Install

From a project folder:

```bash
npx 4-skill@latest init
```

This creates:

```text
.github/skills/
├── repo-map/SKILL.md
├── source-scout/SKILL.md
└── delivery-plan/SKILL.md
```

Existing skill files are preserved. Use `npx 4-skill@latest init --force` to replace them.

## Development

```bash
npm install
npm test
npm run pack:check
```

Publishing is configured in GitHub Actions on pushes to `main`. Configure npm Trusted Publishing for this repository before the first release.