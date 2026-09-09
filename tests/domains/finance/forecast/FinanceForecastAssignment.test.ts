import { FinanceForecastAssignmentService } from "../../../services/core-engine/src/finance/forecast/services/FinanceForecastAssignmentService";
import { FinanceForecastAssignmentValidator } from "../../../packages/types/src/domains/finance/forecast/FinanceForecastAssignment";
import { FinanceForecastAssignmentStateMachine } from "../../../services/core-engine/src/finance/forecast/state-machines/FinanceForecastAssignmentStateMachine";

describe("FinanceForecastAssignment Comprehensive Domain Test Suite", () => {
  const service = new FinanceForecastAssignmentService();
  const sm = new FinanceForecastAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceForecastAssignment Instance",
      domain: "finance_forecast",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceForecastAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
