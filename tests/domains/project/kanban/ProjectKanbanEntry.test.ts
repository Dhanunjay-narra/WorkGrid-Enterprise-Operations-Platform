import { ProjectKanbanEntryService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanEntryService";
import { ProjectKanbanEntryValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanEntry";
import { ProjectKanbanEntryStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanEntryStateMachine";

describe("ProjectKanbanEntry Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanEntryService();
  const sm = new ProjectKanbanEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanEntry Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
