import { ProjectKanbanQueueService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanQueueService";
import { ProjectKanbanQueueValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanQueue";
import { ProjectKanbanQueueStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanQueueStateMachine";

describe("ProjectKanbanQueue Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanQueueService();
  const sm = new ProjectKanbanQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanQueue Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
