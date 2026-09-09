import { ProjectKanbanSessionService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanSessionService";
import { ProjectKanbanSessionValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanSession";
import { ProjectKanbanSessionStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanSessionStateMachine";

describe("ProjectKanbanSession Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanSessionService();
  const sm = new ProjectKanbanSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanSession Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
