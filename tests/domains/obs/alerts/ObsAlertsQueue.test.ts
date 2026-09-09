import { ObsAlertsQueueService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsQueueService";
import { ObsAlertsQueueValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsQueue";
import { ObsAlertsQueueStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsQueueStateMachine";

describe("ObsAlertsQueue Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsQueueService();
  const sm = new ObsAlertsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsQueue Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
