import { ObsAlertsAssignmentService } from "../../../services/core-engine/src/obs/alerts/services/ObsAlertsAssignmentService";
import { ObsAlertsAssignmentValidator } from "../../../packages/types/src/domains/obs/alerts/ObsAlertsAssignment";
import { ObsAlertsAssignmentStateMachine } from "../../../services/core-engine/src/obs/alerts/state-machines/ObsAlertsAssignmentStateMachine";

describe("ObsAlertsAssignment Comprehensive Domain Test Suite", () => {
  const service = new ObsAlertsAssignmentService();
  const sm = new ObsAlertsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsAlertsAssignment Instance",
      domain: "obs_alerts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsAlertsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
