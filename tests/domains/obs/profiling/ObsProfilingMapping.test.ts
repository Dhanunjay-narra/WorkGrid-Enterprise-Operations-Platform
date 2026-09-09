import { ObsProfilingMappingService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingMappingService";
import { ObsProfilingMappingValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingMapping";
import { ObsProfilingMappingStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingMappingStateMachine";

describe("ObsProfilingMapping Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingMappingService();
  const sm = new ObsProfilingMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingMapping Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
