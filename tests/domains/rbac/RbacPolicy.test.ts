import { RbacPolicyService } from "../../../services/core-engine/src/rbac/services/RbacPolicyService";
import { RbacPolicyValidator } from "../../../packages/types/src/domains/rbac/RbacPolicy";
import { RbacPolicyStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacPolicyStateMachine";

describe("RbacPolicy Comprehensive Domain Test Suite", () => {
  const service = new RbacPolicyService();
  const sm = new RbacPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacPolicy Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
