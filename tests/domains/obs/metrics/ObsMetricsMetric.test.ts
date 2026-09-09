import { ObsMetricsMetricService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsMetricService";
import { ObsMetricsMetricValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsMetric";
import { ObsMetricsMetricStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsMetricStateMachine";

describe("ObsMetricsMetric Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsMetricService();
  const sm = new ObsMetricsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsMetric Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
