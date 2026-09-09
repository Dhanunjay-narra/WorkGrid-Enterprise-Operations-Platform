import { ObsAlertsThresholdService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsThresholdService";
import { ObsAlertsThresholdValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsThreshold";
import { ObsAlertsThresholdStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsThresholdStateMachine";

describe("ObsAlertsThreshold Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsThresholdService();
  const sm = new ObsAlertsThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsThreshold Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
