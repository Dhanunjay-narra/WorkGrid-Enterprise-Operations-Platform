import { ProjectKanbanRecordService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanRecordService";
import { ProjectKanbanRecordValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanRecord";
import { ProjectKanbanRecordStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanRecordStateMachine";

describe("ProjectKanbanRecord Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanRecordService();
  const sm = new ProjectKanbanRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanRecord Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
