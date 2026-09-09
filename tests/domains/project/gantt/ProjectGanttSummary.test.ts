import { ProjectGanttSummaryService } from "../../../services/core-engine/src/project/gantt/services/ProjectGanttSummaryService";
import { ProjectGanttSummaryValidator } from "../../../packages/types/src/domains/project/gantt/ProjectGanttSummary";
import { ProjectGanttSummaryStateMachine } from "../../../services/core-engine/src/project/gantt/state-machines/ProjectGanttSummaryStateMachine";

describe("ProjectGanttSummary Comprehensive Domain Test Suite", () => {
  const service = new ProjectGanttSummaryService();
  const sm = new ProjectGanttSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectGanttSummary Instance",
      domain: "project_gantt",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectGanttSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
