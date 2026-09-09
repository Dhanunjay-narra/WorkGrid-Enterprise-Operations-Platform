import { ProjectKanbanRuleService } from "../../../services/core-engine/src/project/kanban/services/ProjectKanbanRuleService";
import { ProjectKanbanRuleValidator } from "../../../packages/types/src/domains/project/kanban/ProjectKanbanRule";
import { ProjectKanbanRuleStateMachine } from "../../../services/core-engine/src/project/kanban/state-machines/ProjectKanbanRuleStateMachine";

describe("ProjectKanbanRule Comprehensive Domain Test Suite", () => {
  const service = new ProjectKanbanRuleService();
  const sm = new ProjectKanbanRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectKanbanRule Instance",
      domain: "project_kanban",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectKanbanRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
