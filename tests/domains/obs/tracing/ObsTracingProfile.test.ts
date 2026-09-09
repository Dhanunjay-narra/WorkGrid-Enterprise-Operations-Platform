import { ObsTracingProfileService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingProfileService";
import { ObsTracingProfileValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingProfile";
import { ObsTracingProfileStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingProfileStateMachine";

describe("ObsTracingProfile Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingProfileService();
  const sm = new ObsTracingProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingProfile Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
