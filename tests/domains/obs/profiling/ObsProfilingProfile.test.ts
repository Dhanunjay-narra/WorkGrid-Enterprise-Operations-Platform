import { ObsProfilingProfileService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingProfileService";
import { ObsProfilingProfileValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingProfile";
import { ObsProfilingProfileStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingProfileStateMachine";

describe("ObsProfilingProfile Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingProfileService();
  const sm = new ObsProfilingProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingProfile Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
