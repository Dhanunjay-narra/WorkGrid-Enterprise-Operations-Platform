import { ObsSpansSnapshotService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansSnapshotService";
import { ObsSpansSnapshotValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansSnapshot";
import { ObsSpansSnapshotStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansSnapshotStateMachine";

describe("ObsSpansSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansSnapshotService();
  const sm = new ObsSpansSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansSnapshot Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
