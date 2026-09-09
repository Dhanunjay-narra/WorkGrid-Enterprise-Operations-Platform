import { FinanceExpensesRuleService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesRuleService";
import { FinanceExpensesRuleValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesRule";
import { FinanceExpensesRuleStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesRuleStateMachine";

describe("FinanceExpensesRule Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesRuleService();
  const sm = new FinanceExpensesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesRule Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
