import { ObsAlertsPayloadService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsPayloadService";
import { ObsAlertsPayloadValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsPayload";
import { ObsAlertsPayloadStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsPayloadStateMachine";

describe("ObsAlertsPayload Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsPayloadService();
  const sm = new ObsAlertsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsPayload Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
