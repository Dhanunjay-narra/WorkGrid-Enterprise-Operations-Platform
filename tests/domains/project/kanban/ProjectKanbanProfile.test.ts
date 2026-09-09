import { ProjectKanbanProfileService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanProfileService";
import { ProjectKanbanProfileValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanProfile";
import { ProjectKanbanProfileStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanProfileStateMachine";

describe("ProjectKanbanProfile Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanProfileService();
  const sm = new ProjectKanbanProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanProfile Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
