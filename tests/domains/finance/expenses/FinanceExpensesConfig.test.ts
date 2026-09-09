import { FinanceExpensesConfigService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesConfigService";
import { FinanceExpensesConfigValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesConfig";
import { FinanceExpensesConfigStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesConfigStateMachine";

describe("FinanceExpensesConfig Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesConfigService();
  const sm = new FinanceExpensesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesConfig Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
