import { ObsAlertsSessionService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsSessionService";
import { ObsAlertsSessionValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsSession";
import { ObsAlertsSessionStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsSessionStateMachine";

describe("ObsAlertsSession Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsSessionService();
  const sm = new ObsAlertsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsSession Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
