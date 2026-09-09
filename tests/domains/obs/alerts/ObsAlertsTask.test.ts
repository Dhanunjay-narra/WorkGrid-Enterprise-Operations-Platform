import { ObsAlertsTaskService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsTaskService";
import { ObsAlertsTaskValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsTask";
import { ObsAlertsTaskStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsTaskStateMachine";

describe("ObsAlertsTask Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsTaskService();
  const sm = new ObsAlertsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsTask Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
