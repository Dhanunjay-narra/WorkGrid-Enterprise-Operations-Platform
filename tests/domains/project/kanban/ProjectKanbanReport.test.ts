import { ProjectKanbanReportService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanReportService";
import { ProjectKanbanReportValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanReport";
import { ProjectKanbanReportStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanReportStateMachine";

describe("ProjectKanbanReport Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanReportService();
  const sm = new ProjectKanbanReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanReport Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
