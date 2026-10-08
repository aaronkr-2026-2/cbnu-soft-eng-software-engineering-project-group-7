# AI_LOG.md

Every time you update your project, please make a note of what you did in the `AI_LOG.md` file, according to the following template.

---

## [Milestone name] — [Date]
**Tool(s) used:**
**What I asked for:**
**What I kept as-is:**
**What I changed or rejected, and why:**
**Something the AI got wrong that I had to catch:**

---
# AI Usage Log

This document records how AI tools were used during the development of K-Learn Hub.

## 2026-09-17 — Project Idea and MVP Scope

### Tool
ChatGPT / Codex

### Purpose
Refine the initial project idea and define a realistic MVP for Week 3.

### Prompt Summary
Asked AI to analyze the K-Learn Hub idea and identify the smallest working product that could demonstrate the main concept.

### AI Contribution
AI suggested the following core workflow:

1. A teacher creates and publishes a class.
2. A student browses available classes.
3. A student registers for a class.
4. The teacher views the class roster.

### Human Review
The team reviewed the proposed scope and selected these functions as the Week 3 MVP. Optional features such as payments, attendance, lessons, and an AI tutor were postponed.

---

## 2026-09-18 — MVP Implementation

### Tool
ChatGPT / Codex

### Purpose
Generate an initial working prototype.

### Prompt Summary
Asked AI to create a web-based MVP based on the approved K-Learn Hub workflow.

### AI Contribution
AI assisted with:

- User interface implementation.
- Class creation and publishing.
- Student registration.
- Teacher roster display.
- Database schema and migration.
- API routes and validation.

### Human Review
The team downloaded the source code, installed the dependencies, initialized the database, ran the application locally, and manually tested the main workflow.

---

## 2026-09-19 — Debugging and Local Setup

### Tool
ChatGPT / Codex

### Purpose
Resolve local installation and runtime problems on Windows.

### Problems Encountered

- `pnpm` permission error caused by Corepack.
- Node.js version incompatibility.
- Missing `node:sqlite` module.
- Cloudflare/Vinext development server connection error.

### AI Contribution
AI recommended:

- Upgrading to Node.js 22.13 or later.
- Running pnpm through `npx`.
- Applying the local D1 database migration.
- Running the built application through Wrangler.

### Human Review
The commands were executed manually in VS Code, and the application was verified locally.

---

## 2026-09-19 — Documentation

### Tool
ChatGPT / Codex

### Purpose
Prepare the Week 3 project documentation.

### AI Contribution
AI assisted in drafting:

- Product Vision.
- MVP Status.
- Core Workflow.
- Current Limitations.
- Product Roadmap.
- Acceptance Criteria.
- Product Backlog suggestions.

### Human Review
The team reviewed the documentation and updated it to match the actual state of the project.

---

## Verification Statement

AI-generated suggestions and code were reviewed and tested by the project team. The team remains responsible for the final implementation, documentation, and submitted repository.


---

## 2026-10-08 — Week 4: Sprint 01 planning

**Tools used:** ChatGPT / Codex, read-only GitHub retrieval, local ZIP/PDF inspection.

**User request:** "mày hãy thực hiện bài tập này cho tao, và hay chi tiết cho tao biết tao cần update hay upload file nào lên github" (prepare the homework and explain exactly which files to update or upload).

**Prompt context:** Week 4 requires a one-week goal, at least five prioritized backlog items, two refined items, small assigned tasks, asynchronous check-ins, a Definition of Done and an AI-use record. Use the existing K-Learn Hub MVP and ask before writing to GitHub.

**Retained in the proposed deliverable:** The create/publish/register/roster workflow, current React/TypeScript and D1 implementation, existing AI-log history, and a small one-week scope.

**Changed or rejected:** Broad feature expansion was deferred. Input-validation reliability and repeatable regression checks were selected instead. Hours were used rather than unexplained story points. No retrospective sprint activity, test pass, human review or team agreement was invented.

**Error caught during source review:** The registration route uses body.name?.trim() and body.email?.trim() after a TypeScript cast. A cast does not validate incoming JSON: non-string fields can throw and reach the generic 500 handler. BL-01 addresses this source-level defect; it has not yet been reproduced against a running server in this session. The review was AI-assisted, not claimed as an independently discovered human finding.

**One decision and its explainable rationale:** Keep the existing stack and prioritize reliable registration over adding new features. The existing user workflow already addresses the product need; a small validation fix plus regression coverage is easier to finish and verify within a student-sized sprint. The project owner should review and be able to explain this reasoning before submission.

**Verification actually performed:** Read the Week 4 homework requirements and relevant code/schema/package metadata; checked current GitHub files against the uploaded source; checked the planning document for all six homework requirements and consistent hour totals. No application build, lint, runtime/API test, browser acceptance test or sprint implementation was performed for this documentation submission.

**Artifacts:** SPRINT_01.md; this appended AI_LOG.md entry; a navigation/status note added to the existing root README.md.

**Review and repository status:** Prepared for owner review. No GitHub files were changed by this planning task. Proposed initial task owner: Chessy10; one-week window: 8–15 October 2026; availability is a planning assumption. No new Issue/PR/commit is claimed. Baseline inspected: 64bb150d7ee53fce0cf366beeb19c5515557c59c.

**Historical-log note:** Earlier entries above are preserved from GitHub as historical statements; their past test claims were not re-verified in this session.
