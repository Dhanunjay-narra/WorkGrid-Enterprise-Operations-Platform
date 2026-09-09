import { ObsProfilingEventService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingEventService";
import { ObsProfilingEventValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingEvent";
import { ObsProfilingEventStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingEventStateMachine";

describe("ObsProfilingEvent Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingEventService();
  const sm = new ObsProfilingEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingEvent Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
