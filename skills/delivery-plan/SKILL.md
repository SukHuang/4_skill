---
name: delivery-plan
description: Turn a product or engineering request into a small, verifiable implementation plan.
---

# Delivery Plan

Use this skill when an idea, bug report, or feature request needs to become executable engineering work, especially when implementation scope or acceptance behavior is still unclear.

## Workflow

1. Restate the desired outcome and identify the user, operator, or system affected.
2. Inspect the relevant repository surfaces, existing patterns, tests, and ownership boundaries before proposing files or APIs.
3. Separate explicit requirements, assumptions, non-goals, constraints, and unresolved product choices.
4. Describe the intended behavior, including success, failure, empty, permission, and compatibility cases that matter.
5. Break the work into ordered vertical slices that can each be implemented and checked.
6. Name likely files or modules, but verify those paths before presenting them as facts.
7. Write `DELIVERY_PLAN.md` unless another output path is requested.

## Include

- Problem statement and goals
- Users, workflows, and non-goals
- Assumptions, constraints, and decisions needed
- Proposed behavior and technical approach
- Ordered tasks with likely files or modules and a validation step for each
- Acceptance criteria written as observable behavior
- Focused unit, integration, and regression test strategy as applicable
- Risks, rollback considerations, and open questions

## Planning Rules

- Prefer the smallest change that satisfies the stated outcome and fits existing conventions.
- Keep tasks independently reviewable; avoid combining migration, UI, API, and cleanup work without a dependency reason.
- Tie each acceptance criterion to a test, inspection, or reproducible manual check.
- Call out data migrations, rollout flags, backwards compatibility, security, and observability when they apply.
- Distinguish repository facts from proposed design choices.

## Completion Check

Before finishing, confirm that an implementer can identify what to change, in what order, how to verify it, what is deliberately out of scope, and which decisions still require the requester's answer.

Do not silently decide between materially different product behaviors. Make the smallest useful plan that still gives an implementer a clear validation path.