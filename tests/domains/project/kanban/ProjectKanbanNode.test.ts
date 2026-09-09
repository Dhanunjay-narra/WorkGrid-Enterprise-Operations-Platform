import { ProjectKanbanNodeService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanNodeService";
import { ProjectKanbanNodeValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanNode";
import { ProjectKanbanNodeStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanNodeStateMachine";

describe("ProjectKanbanNode Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanNodeService();
  const sm = new ProjectKanbanNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanNode Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
