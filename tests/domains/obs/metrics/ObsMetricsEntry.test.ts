import { ObsMetricsEntryService } from "../../../services/core-engine/src/obs/metrics/services/ObsMetricsEntryService";
import { ObsMetricsEntryValidator } from "../../../packages/types/src/domains/obs/metrics/ObsMetricsEntry";
import { ObsMetricsEntryStateMachine } from "../../../services/core-engine/src/obs/metrics/state-machines/ObsMetricsEntryStateMachine";

describe("ObsMetricsEntry Comprehensive Domain Test Suite", () => {
  const service = new ObsMetricsEntryService();
  const sm = new ObsMetricsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsMetricsEntry Instance",
      domain: "obs_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsMetricsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
