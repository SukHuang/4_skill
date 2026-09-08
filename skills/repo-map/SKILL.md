---
name: repo-map
description: Build an evidence-based map of a software repository for onboarding or focused investigation.
---

# Repository Map

Use this skill when someone needs to understand an unfamiliar repository or locate the right implementation surface.

## Method

1. Inspect the top-level tree, manifests, configuration, documentation, entry points, and tests.
2. Follow one representative execution path from its entry point through the main modules.
3. Verify commands and claims against files; label anything that could not be confirmed.
4. Write `REPOSITORY_MAP.md` unless another output path is requested.

## Include

- Purpose and key user-facing flows
- Architecture and one concrete data or control-flow path
- Important directories and files
- Install, development, test, and build commands
- Configuration, external services, and environment variables
- Risks, unknowns, and useful next steps

Keep the result concise and operational. Never invent behavior, dependencies, or files.