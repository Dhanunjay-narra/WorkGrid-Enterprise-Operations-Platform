import { SecurityPolicyService } from "../../../services/core-engine/src/security/services/SecurityPolicyService";
import { SecurityPolicyValidator } from "../../../packages/types/src/domains/security/SecurityPolicy";
import { SecurityPolicyStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityPolicyStateMachine";

describe("SecurityPolicy Comprehensive Domain Test Suite", () => {
  const service = new SecurityPolicyService();
  const sm = new SecurityPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityPolicy Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
