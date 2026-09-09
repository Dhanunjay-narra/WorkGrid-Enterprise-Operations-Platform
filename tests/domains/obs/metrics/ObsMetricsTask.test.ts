import { ObsMetricsTaskService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsTaskService";
import { ObsMetricsTaskValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsTask";
import { ObsMetricsTaskStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsTaskStateMachine";

describe("ObsMetricsTask Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsTaskService();
  const sm = new ObsMetricsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsTask Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
