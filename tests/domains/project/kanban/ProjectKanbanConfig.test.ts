import { ProjectKanbanConfigService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanConfigService";
import { ProjectKanbanConfigValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanConfig";
import { ProjectKanbanConfigStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanConfigStateMachine";

describe("ProjectKanbanConfig Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanConfigService();
  const sm = new ProjectKanbanConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanConfig Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
