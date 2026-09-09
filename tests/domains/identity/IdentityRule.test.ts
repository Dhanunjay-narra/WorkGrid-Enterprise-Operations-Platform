import { IdentityRuleService } from "../../../services/core-engine/src/identity/services/IdentityRuleService";
import { IdentityRuleValidator } from "../../../packages/types/src/domains/identity/IdentityRule";
import { IdentityRuleStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityRuleStateMachine";

describe("IdentityRule Comprehensive Domain Test Suite", () => {
  const service = new IdentityRuleService();
  const sm = new IdentityRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityRule Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
