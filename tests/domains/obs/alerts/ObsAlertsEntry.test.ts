import { ObsAlertsEntryService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsEntryService";
import { ObsAlertsEntryValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsEntry";
import { ObsAlertsEntryStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsEntryStateMachine";

describe("ObsAlertsEntry Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsEntryService();
  const sm = new ObsAlertsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsEntry Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
