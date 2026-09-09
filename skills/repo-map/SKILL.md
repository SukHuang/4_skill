---
name: repo-map
description: Build an evidence-based map of a software repository for onboarding or focused investigation.
---

# Repository Map

Use this skill when someone needs to understand an unfamiliar repository, locate the right implementation surface, or prepare a focused onboarding guide.

## Workflow

1. Establish the repository root and inspect the top-level tree before opening broad file sets.
2. Read manifests, configuration, documentation, entry points, and tests that control the requested area.
3. Trace one representative execution path from its entry point through the modules that compute or mutate the behavior.
4. Identify the cheapest command that can validate the map's important claims, and run it when tools permit.
5. Verify every command, dependency, path, and behavior claim against the repository. Mark unavailable or unverified information explicitly.
6. Write `REPOSITORY_MAP.md` unless another output path is requested.

## Include

- Purpose and key user-facing flows
- Architecture and one concrete data or control-flow path
- Important directories and files
- Install, development, test, and build commands
- Configuration, external services, and environment variables
- Extension points and likely ownership boundaries
- Risks, unknowns, and useful next steps

## Evidence Rules

- Prefer source code, tests, package manifests, and configuration over assumptions or naming conventions.
- Link claims to paths and symbols where the output format supports links.
- Distinguish observed behavior, inferred behavior, and recommended changes.
- Do not describe generated, ignored, or unavailable files as committed source files.
- If the repository is too large for a full inspection, state the scope and explain how the sampled paths were selected.

## Completion Check

Before finishing, confirm that the map answers: where does execution start, where is the main behavior decided, how is it tested, how is it run or shipped, and what remains uncertain?

Keep the result concise and operational. Never invent behavior, dependencies, or files.