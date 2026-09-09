import { FinanceExpensesThresholdService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesThresholdService";
import { FinanceExpensesThresholdValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesThreshold";
import { FinanceExpensesThresholdStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesThresholdStateMachine";

describe("FinanceExpensesThreshold Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesThresholdService();
  const sm = new FinanceExpensesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesThreshold Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
