import { IdentityThresholdService } from "../../../services/core-engine/src/identity/services/IdentityThresholdService";
import { IdentityThresholdValidator } from "../../../packages/types/src/domains/identity/IdentityThreshold";
import { IdentityThresholdStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityThresholdStateMachine";

describe("IdentityThreshold Comprehensive Domain Test Suite", () => {
  const service = new IdentityThresholdService();
  const sm = new IdentityThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityThreshold Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
