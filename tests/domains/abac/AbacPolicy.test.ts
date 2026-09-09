import { AbacPolicyService } from "../../../services/core-engine/src/abac/services/AbacPolicyService";
import { AbacPolicyValidator } from "../../../packages/types/src/domains/abac/AbacPolicy";
import { AbacPolicyStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacPolicyStateMachine";

describe("AbacPolicy Comprehensive Domain Test Suite", () => {
  const service = new AbacPolicyService();
  const sm = new AbacPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacPolicy Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
