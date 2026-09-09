import { ObsAlertsMetricService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsMetricService";
import { ObsAlertsMetricValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsMetric";
import { ObsAlertsMetricStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsMetricStateMachine";

describe("ObsAlertsMetric Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsMetricService();
  const sm = new ObsAlertsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsMetric Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
