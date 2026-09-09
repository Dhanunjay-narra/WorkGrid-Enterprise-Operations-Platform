import { RbacRuleService } from "../../../services/core-engine/src/rbac/services/RbacRuleService";
import { RbacRuleValidator } from "../../../packages/types/src/domains/rbac/RbacRule";
import { RbacRuleStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacRuleStateMachine";

describe("RbacRule Comprehensive Domain Test Suite", () => {
  const service = new RbacRuleService();
  const sm = new RbacRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacRule Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
