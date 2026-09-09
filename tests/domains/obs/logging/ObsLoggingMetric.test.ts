import { ObsLoggingMetricService } from "../../../services/core-engine/src/obs/logging/services/ObsLoggingMetricService";
import { ObsLoggingMetricValidator } from "../../../packages/types/src/domains/obs/logging/ObsLoggingMetric";
import { ObsLoggingMetricStateMachine } from "../../../services/core-engine/src/obs/logging/state-machines/ObsLoggingMetricStateMachine";

describe("ObsLoggingMetric Comprehensive Domain Test Suite", () => {
  const service = new ObsLoggingMetricService();
  const sm = new ObsLoggingMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsLoggingMetric Instance",
      domain: "obs_logging",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsLoggingMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
