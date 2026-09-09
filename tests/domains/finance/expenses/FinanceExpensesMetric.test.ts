import { FinanceExpensesMetricService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesMetricService";
import { FinanceExpensesMetricValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesMetric";
import { FinanceExpensesMetricStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesMetricStateMachine";

describe("FinanceExpensesMetric Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesMetricService();
  const sm = new FinanceExpensesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesMetric Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
