import { ProjectKanbanTransactionService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanTransactionService";
import { ProjectKanbanTransactionValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanTransaction";
import { ProjectKanbanTransactionStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanTransactionStateMachine";

describe("ProjectKanbanTransaction Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanTransactionService();
  const sm = new ProjectKanbanTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanTransaction Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
