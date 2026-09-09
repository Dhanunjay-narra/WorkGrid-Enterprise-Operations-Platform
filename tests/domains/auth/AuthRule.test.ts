import { AuthRuleService } from "../../../services/core-engine/src/auth/services/AuthRuleService";
import { AuthRuleValidator } from "../../../packages/types/src/domains/auth/AuthRule";
import { AuthRuleStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthRuleStateMachine";

describe("AuthRule Comprehensive Domain Test Suite", () => {
  const service = new AuthRuleService();
  const sm = new AuthRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthRule Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
