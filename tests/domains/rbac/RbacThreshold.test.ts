import { RbacThresholdService } from "../../../services/core-engine/src/rbac/services/RbacThresholdService";
import { RbacThresholdValidator } from "../../../packages/types/src/domains/rbac/RbacThreshold";
import { RbacThresholdStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacThresholdStateMachine";

describe("RbacThreshold Comprehensive Domain Test Suite", () => {
  const service = new RbacThresholdService();
  const sm = new RbacThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacThreshold Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
