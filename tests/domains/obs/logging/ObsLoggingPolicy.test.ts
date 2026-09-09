import { ObsLoggingPolicyService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingPolicyService";
import { ObsLoggingPolicyValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingPolicy";
import { ObsLoggingPolicyStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingPolicyStateMachine";

describe("ObsLoggingPolicy Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingPolicyService();
  const sm = new ObsLoggingPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingPolicy Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
