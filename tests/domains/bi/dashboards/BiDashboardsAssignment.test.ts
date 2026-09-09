import { BiDashboardsAssignmentService } from "../../../services/core-engine/src/bi/dashboards/services/BiDashboardsAssignmentService";
import { BiDashboardsAssignmentValidator } from "../../../packages/types/src/domains/bi/dashboards/BiDashboardsAssignment";
import { BiDashboardsAssignmentStateMachine } from "../../../services/core-engine/src/bi/dashboards/state-machines/BiDashboardsAssignmentStateMachine";

describe("BiDashboardsAssignment Comprehensive Domain Test Suite", () => {
  const service = new BiDashboardsAssignmentService();
  const sm = new BiDashboardsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiDashboardsAssignment Instance",
      domain: "bi_dashboards",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiDashboardsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
