import { AbacRuleService } from "../../../services/core-engine/src/abac/services/AbacRuleService";
import { AbacRuleValidator } from "../../../packages/types/src/domains/abac/AbacRule";
import { AbacRuleStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacRuleStateMachine";

describe("AbacRule Comprehensive Domain Test Suite", () => {
  const service = new AbacRuleService();
  const sm = new AbacRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacRule Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
