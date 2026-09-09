import { ObsDashboardsAssignmentService } from "../../../services/core-engine/src/obs/dashboards/services/ObsDashboardsAssignmentService";
import { ObsDashboardsAssignmentValidator } from "../../../packages/types/src/domains/obs/dashboards/ObsDashboardsAssignment";
import { ObsDashboardsAssignmentStateMachine } from "../../../services/core-engine/src/obs/dashboards/state-machines/ObsDashboardsAssignmentStateMachine";

describe("ObsDashboardsAssignment Comprehensive Domain Test Suite", () => {
  const service = new ObsDashboardsAssignmentService();
  const sm = new ObsDashboardsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsDashboardsAssignment Instance",
      domain: "obs_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsDashboardsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
