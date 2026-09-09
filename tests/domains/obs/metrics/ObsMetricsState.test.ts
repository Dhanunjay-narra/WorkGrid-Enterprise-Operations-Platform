import { ObsMetricsStateService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsStateService";
import { ObsMetricsStateValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsState";
import { ObsMetricsStateStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsStateStateMachine";

describe("ObsMetricsState Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsStateService();
  const sm = new ObsMetricsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsState Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
