# Sprint 01: Reliable student registration

## 1. Sprint goal and working agreement

**Goal:** Help students register for a published Korean class reliably by returning understandable validation errors and verifying that the existing registration rules still work.

- Prepared: 8 October 2026, for Week 4 (Agile Software Engineering).
- Planned one-week window: 8 October to before class on 15 October 2026 (KST).
- This is a prospective plan prepared on 8 October, not evidence that a sprint ran on 1–8 October. The original assignment requested preparation before the next class.
- Planning assumption: Chessy10 is the initial owner of all tasks; no teammate availability is assumed. If teammates participate, assign named reviewers before implementation.
- Capacity assumption: 12 person-hours; 10 planned hours plus 2 hours for setup or unexpected defects. Reassess this budget at the first check-in.
- Use this Markdown backlog and task table as the lightweight Kanban board. No separate GitHub Project is necessary for this submission.
- Task flow: To do → In progress → Review/check → Done; limit In progress to one task for the initial owner. Record blockers beside the task.
- Product ordering is based on the current fictional-data classroom demo. Authentication must be addressed before real student data is used.

## 2. Prioritized product backlog

Readiness describes planning maturity, not completed work. “Implementation” means selected and sufficiently specified to start; all selected tasks are initially To do.

| Rank / ID | Backlog item and user value | Type | Priority | Rationale | Readiness | Sprint 01 |
|---|---|---|---|---|---|---|
| 1 / BL-01 | Return clear errors for invalid registration requests so students can correct input | Bug / user-facing reliability | High | The route calls trim on unvalidated field types; malformed requests can reach its generic 500 handler | Implementation | Selected: 4 h |
| 2 / BL-02 | Add repeatable registration regression checks so students and teachers can trust the booking workflow | Test / engineering | High | No test script exists in package.json; existing behavior needs executable evidence before further changes | Implementation | Selected: 6 h |
| 3 / BL-03 | Prevent two students taking the final seat simultaneously | Bug / user-facing reliability | High | Count-check and insert are separate operations; concurrency safety needs investigation and reproduction | Refinement | Deferred |
| 4 / BL-04 | Require authorization for teacher actions and roster access | Security / user-facing access control | High | The inspected roster route has no authorization check; identity and deployment decisions need refinement | Refinement | Deferred; required before real-data use |
| 5 / BL-05 | Reject class edits that leave invalid class information or capacity below existing bookings | Bug / teacher-facing data integrity | High | PATCH validates numeric capacity but does not compare it to current registrations | Refinement | Deferred |
| 6 / BL-06 | Replace the placeholder project README with reproducible setup instructions and actual stack | Documentation / engineering | Medium | project/README.md contains only dots; root README describes an earlier proposed stack | Ready for consideration | Deferred |
| 7 / BL-07 | Let students filter published classes by date or level | Feature / student-facing usability | Low | Useful when the schedule grows, but registration correctness is more urgent | Ready for consideration | Deferred |

Evidence baseline: repository main at commit 64bb150d7ee53fce0cf366beeb19c5515557c59c, inspected on 8 October. Relevant source: project/app/api/classes/[id]/registrations/route.ts, project/app/api/classes/[id]/route.ts, project/db/schema.ts and project/package.json. Source findings are not runtime test results.

## 3. Two refined items

### BL-01: Validate registration requests consistently — 4 person-hours

As a student, I want an understandable response when a registration request contains invalid data so that I can correct it and try again.

Scope: validate JSON body shape and name/email types before trimming; reject invalid class IDs; preserve email normalization and successful registration behavior. Distinguish invalid client requests (400), missing valid IDs (404), booking conflicts (409), and unexpected server failures (500). Do not redesign authentication or the database in this item.

Acceptance checks:

1. Malformed JSON, null/array bodies, numeric name/email values, missing required fields, short names and invalid emails return 400 with a readable JSON error; no registration is inserted.
2. Non-integer, non-positive or non-numeric class IDs return 400; a valid positive integer ID that does not exist returns 404 without inserting a row.
3. A valid fictional student registration returns 201, stores the trimmed name and normalized email, appears in the teacher roster, and updates remaining seats after refresh; an ordinary invalid-email form submission shows useful feedback.

Dependencies: working local D1 database, migrated schema, published fictional class with spare capacity. UI feedback is checked in project/app/k-learn-dashboard.tsx. No new feature dependencies.

Estimate: 0.5 h reproduction + 2 h validation fix + 1 h negative/success checks + 0.5 h review. These are forecasts, not measured work.

### BL-02: Repeatable registration regression checks — 6 person-hours

As a maintainer, I want repeatable tests of the existing registration rules so that changes do not silently break students' bookings or teachers' rosters.

Scope: add a small Node-based HTTP regression script targeting the local app and disposable fictional fixtures, with setup instructions and a non-zero exit on failure. Document any database fixture setup explicitly. Do not assume an npm test command exists; add and document a test:registration script during implementation.

Acceptance checks:

1. From a prepared local database, the documented command verifies: successful booking (201); duplicate normalized email (409, unchanged count); full class (409, unchanged count); draft/cancelled class (409); and invalid requests from BL-01 (400). Use spare-capacity classes for duplicate checks so capacity rejection does not mask duplicate behavior.
2. Two consecutive runs with fresh uniquely named fixtures produce the same expected assertions without manual source edits; report case names, totals and failures. Target only a local disposable database and document how to remove/reset those test fixtures safely.
3. A repeatable browser walkthrough confirms create → publish → register → updated seats → teacher roster, and a server restart confirms persistence; record expected/actual results and the tested commit.

Dependencies: BL-01 for validation assertions; local server and D1 schema; fixture creation endpoints. Tests may be drafted alongside BL-01, but final acceptance follows that fix.

Estimate: 1 h fixture/harness design + 2 h assertions + 1 h repeatability and usage notes + 1 h browser/persistence checks + 1 h final build, lint and review.

## 4. Small tasks, order and check-ins

| Order | Task | Owner starting task | Hours | Depends on | Likely blocker | Status |
|---|---|---|---:|---|---|---|
| 1 | Reproduce invalid registration requests and capture baseline responses | Chessy10 | 0.5 | Local app available | Node/D1 setup | To do |
| 2 | Implement input and class-ID validation | Chessy10 | 2 | 1 | Error handling consistency | To do |
| 3 | Check BL-01 negative cases and successful booking | Chessy10 | 1 | 2 | Fresh class fixtures | To do |
| 4 | Review BL-01 diff and acceptance evidence | Chessy10 | 0.5 | 3 | Unresolved regression | To do |
| 5 | Design local test fixtures and HTTP test harness | Chessy10 | 1 | 1 | Safe fixture isolation | To do |
| 6 | Add registration assertions and test command | Chessy10 | 2 | 2, 5 | Cancelled-class fixture setup | To do |
| 7 | Run twice and document setup and results | Chessy10 | 1 | 6 | Test data collisions | To do |
| 8 | Run browser acceptance and restart persistence check | Chessy10 | 1 | 3, 7 | Local server restart/setup | To do |
| 9 | Build, lint, review, integrate and update AI log | Chessy10 | 1 | 4, 8 | Existing build/lint failures | To do |
| | **Total planned** | | **10** | | **2 h contingency outside tasks** | |

- 8 October: start planning and baseline checks.
- 10 and 13 October, by 21:00 KST: asynchronous update in this file (or a linked Issue if created). Format: Date; completed task IDs and evidence; next task; blocker; help/decision needed. Solo work uses the same written format.
- If blocked for one planned work session, record the cause and next action; use contingency before adding scope. If BL-01 blocks BL-02, document partial coverage honestly and carry unfinished work forward.
- Before class on 15 October: demonstrate the goal, review actual results and record one process improvement.
- No check-in, teammate agreement, review or sprint completion is claimed to have occurred yet.

## 5. Definition of Done

A selected item moves to Done only when all applicable checks below have evidence:

- Its acceptance checks pass and expected/actual results are recorded with the tested commit.
- The repeatable API regression command passes against disposable local fixtures. BL-01 can remain in Review/check until the combined regression suite is ready.
- The student-visible booking/error experience and teacher roster are checked in the browser. This is manual in Sprint 01 because the repo has no browser-test harness and initial capacity is limited; follow the same documented steps each time.
- A teammate reviews the diff if a teammate participates. For solo work, Chessy10 performs a separate self-review and records findings; AI output is not recorded as human peer review.
- npm run build and npm run lint are run inside project/. Failures and pre-existing blockers are recorded; failing work is not silently marked Done.
- Changes are integrated into main through a reviewed change after repository-owner approval; relevant checks run on the integrated version.
- Setup/test instructions and AI_LOG.md reflect what actually happened. No real student data or credentials are included.

Planned verification record: case/task ID | tested commit | expected result | actual result | pass/fail | evidence. All execution results are currently pending.

## 6. AI use and current status

See [AI_LOG.md](AI_LOG.md), entry dated 8 October 2026.

Completed for the homework: source-based backlog, two refined items, estimates, task order, proposed check-ins and Definition of Done. Sprint coding, tests, integration and user review remain pending. This document is a plan, not a completed sprint report.

At sprint review, append the real completed/unfinished items, evidence, actual hours and one retrospective action. Do not fill these with invented results.
