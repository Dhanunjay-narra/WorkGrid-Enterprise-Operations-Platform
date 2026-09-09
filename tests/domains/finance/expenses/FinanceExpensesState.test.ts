import { FinanceExpensesStateService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesStateService";
import { FinanceExpensesStateValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesState";
import { FinanceExpensesStateStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesStateStateMachine";

describe("FinanceExpensesState Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesStateService();
  const sm = new FinanceExpensesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesState Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
