import { ObsMetricsBatchService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsBatchService";
import { ObsMetricsBatchValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsBatch";
import { ObsMetricsBatchStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsBatchStateMachine";

describe("ObsMetricsBatch Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsBatchService();
  const sm = new ObsMetricsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsBatch Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
