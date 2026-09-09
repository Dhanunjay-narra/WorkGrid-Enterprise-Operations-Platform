import { ObsAlertsSnapshotService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsSnapshotService";
import { ObsAlertsSnapshotValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsSnapshot";
import { ObsAlertsSnapshotStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsSnapshotStateMachine";

describe("ObsAlertsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsSnapshotService();
  const sm = new ObsAlertsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsSnapshot Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
