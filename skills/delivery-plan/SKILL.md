---
name: delivery-plan
description: Turn a product or engineering request into a small, verifiable implementation plan.
---

# Delivery Plan

Use this skill when an idea, bug report, or feature request needs to become executable engineering work.

## Method

1. Restate the desired outcome and identify the user or system affected.
2. Inspect the relevant repository surfaces before proposing files or APIs.
3. Separate explicit requirements, assumptions, non-goals, and unresolved choices.
4. Break the work into ordered slices that can each be implemented and checked.
5. Write `DELIVERY_PLAN.md` unless another output path is requested.

## Include

- Problem statement and goals
- Assumptions and non-goals
- Proposed behavior and technical approach
- Ordered tasks with likely files or modules
- Acceptance criteria
- Focused test strategy
- Risks, rollback considerations, and open questions

Do not silently decide between materially different product behaviors. Make the smallest useful plan that still gives an implementer a clear validation path.