import { CrmForecastingAssignmentService } from "../../../services/core-engine/src/crm/forecasting/services/CrmForecastingAssignmentService";
import { CrmForecastingAssignmentValidator } from "../../../packages/types/src/domains/crm/forecasting/CrmForecastingAssignment";
import { CrmForecastingAssignmentStateMachine } from "../../../services/core-engine/src/crm/forecasting/state-machines/CrmForecastingAssignmentStateMachine";

describe("CrmForecastingAssignment Comprehensive Domain Test Suite", () => {
  const service = new CrmForecastingAssignmentService();
  const sm = new CrmForecastingAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmForecastingAssignment Instance",
      domain: "crm_forecasting",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmForecastingAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
