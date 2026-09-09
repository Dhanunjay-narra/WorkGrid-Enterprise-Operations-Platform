import { ProjectCapacityRuleService } from "../../../services/core-engine/src/project/capacity/services/ProjectCapacityRuleService";
import { ProjectCapacityRuleValidator } from "../../../packages/types/src/domains/project/capacity/ProjectCapacityRule";
import { ProjectCapacityRuleStateMachine } from "../../../services/core-engine/src/project/capacity/state-machines/ProjectCapacityRuleStateMachine";

describe("ProjectCapacityRule Comprehensive Domain Test Suite", () => {
  const service = new ProjectCapacityRuleService();
  const sm = new ProjectCapacityRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ProjectCapacityRule Instance",
      domain: "project_capacity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ProjectCapacityRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
