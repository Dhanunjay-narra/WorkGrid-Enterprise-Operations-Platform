import { FinanceExpensesScheduleService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesScheduleService";
import { FinanceExpensesScheduleValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesSchedule";
import { FinanceExpensesScheduleStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesScheduleStateMachine";

describe("FinanceExpensesSchedule Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesScheduleService();
  const sm = new FinanceExpensesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesSchedule Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
