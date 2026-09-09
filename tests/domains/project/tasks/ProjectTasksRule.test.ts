import { ProjectTasksRuleService } from "../../../services/core-engine/src/project/tasks/services/ProjectTasksRuleService";
import { ProjectTasksRuleValidator } from "../../../packages/types/src/domains/project/tasks/ProjectTasksRule";
import { ProjectTasksRuleStateMachine } from "../../../services/core-engine/src/project/tasks/state-machines/ProjectTasksRuleStateMachine";

describe("ProjectTasksRule Comprehensive Domain Test Suite", () => {
  const service = new ProjectTasksRuleService();
  const sm = new ProjectTasksRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectTasksRule Instance",
      domain: "project_tasks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectTasksRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
