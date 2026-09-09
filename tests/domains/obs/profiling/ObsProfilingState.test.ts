import { ObsProfilingStateService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingStateService";
import { ObsProfilingStateValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingState";
import { ObsProfilingStateStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingStateStateMachine";

describe("ObsProfilingState Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingStateService();
  const sm = new ObsProfilingStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingState Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
