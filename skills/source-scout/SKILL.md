---
name: source-scout
description: Investigate a technical question using authoritative sources and produce a traceable decision brief.
---

# Source Scout

Use this skill to compare tools, investigate a technical claim, or prepare a recommendation that depends on external evidence.

## Workflow

1. Define the decision, constraints, audience, and questions that must be answered.
2. Turn each question into a claim or comparison criterion that can be checked independently.
3. Start with user-provided links, official documentation, specifications, release notes, and primary sources.
4. For each material claim, record the source, publication or update date when available, and the relevant evidence.
5. Separate verified facts, source-reported recommendations, assumptions, and your own interpretation.
6. Check important claims against more than one authoritative source when sources disagree or the decision is high risk.
7. State the research cutoff date and write `DECISION_BRIEF.md` unless another output path is requested.

## Include

- Decision summary
- Scope, constraints, and definitions
- Findings grouped by question or comparison criterion
- Comparison and trade-offs
- Recommendation tied to the stated constraints
- Sources with inline links
- Confidence or evidence-quality notes for consequential findings
- Unresolved questions and verification steps

## Evidence Rules

- Use primary sources for product behavior, compatibility, security, licensing, pricing, and limits whenever possible.
- Do not treat search snippets, marketing claims, or a single anecdote as proof of behavior.
- Quote or paraphrase only what the cited source supports; do not let a citation imply support for nearby uncited claims.
- Say when a source was unavailable, stale, contradictory, or not independently verified.
- Do not fabricate citations, access dates, benchmarks, or conclusions.

## Completion Check

Before finishing, confirm that every recommendation maps to a stated constraint, every important factual claim has a source, trade-offs are explicit, and the reader knows what to verify before committing.

Do not imply that a source was consulted when it was not. Do not turn a weak source into certainty through confident wording.