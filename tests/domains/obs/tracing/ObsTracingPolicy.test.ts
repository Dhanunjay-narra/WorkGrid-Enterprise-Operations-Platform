import { ObsTracingPolicyService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingPolicyService";
import { ObsTracingPolicyValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingPolicy";
import { ObsTracingPolicyStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingPolicyStateMachine";

describe("ObsTracingPolicy Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingPolicyService();
  const sm = new ObsTracingPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingPolicy Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
