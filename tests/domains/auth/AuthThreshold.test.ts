import { AuthThresholdService } from "../../../services/core-engine/src/auth/services/AuthThresholdService";
import { AuthThresholdValidator } from "../../../packages/types/src/domains/auth/AuthThreshold";
import { AuthThresholdStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthThresholdStateMachine";

describe("AuthThreshold Comprehensive Domain Test Suite", () => {
  const service = new AuthThresholdService();
  const sm = new AuthThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthThreshold Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
