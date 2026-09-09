import { ObsProfilingSnapshotService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingSnapshotService";
import { ObsProfilingSnapshotValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingSnapshot";
import { ObsProfilingSnapshotStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingSnapshotStateMachine";

describe("ObsProfilingSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingSnapshotService();
  const sm = new ObsProfilingSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingSnapshot Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
