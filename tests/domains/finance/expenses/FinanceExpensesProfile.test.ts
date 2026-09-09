import { FinanceExpensesProfileService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesProfileService";
import { FinanceExpensesProfileValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesProfile";
import { FinanceExpensesProfileStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesProfileStateMachine";

describe("FinanceExpensesProfile Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesProfileService();
  const sm = new FinanceExpensesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesProfile Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
