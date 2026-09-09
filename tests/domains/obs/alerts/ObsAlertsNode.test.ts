import { ObsAlertsNodeService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsNodeService";
import { ObsAlertsNodeValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsNode";
import { ObsAlertsNodeStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsNodeStateMachine";

describe("ObsAlertsNode Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsNodeService();
  const sm = new ObsAlertsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsNode Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
