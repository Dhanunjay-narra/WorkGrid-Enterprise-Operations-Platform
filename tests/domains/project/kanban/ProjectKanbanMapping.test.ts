import { ProjectKanbanMappingService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanMappingService";
import { ProjectKanbanMappingValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanMapping";
import { ProjectKanbanMappingStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanMappingStateMachine";

describe("ProjectKanbanMapping Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanMappingService();
  const sm = new ProjectKanbanMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanMapping Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
