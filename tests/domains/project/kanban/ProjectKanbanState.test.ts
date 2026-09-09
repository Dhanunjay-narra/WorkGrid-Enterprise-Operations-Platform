import { ProjectKanbanStateService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanStateService";
import { ProjectKanbanStateValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanState";
import { ProjectKanbanStateStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanStateStateMachine";

describe("ProjectKanbanState Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanStateService();
  const sm = new ProjectKanbanStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanState Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
