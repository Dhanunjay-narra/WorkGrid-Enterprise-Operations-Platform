import { ObsMetricsSnapshotService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsSnapshotService";
import { ObsMetricsSnapshotValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsSnapshot";
import { ObsMetricsSnapshotStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsSnapshotStateMachine";

describe("ObsMetricsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsSnapshotService();
  const sm = new ObsMetricsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsSnapshot Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
