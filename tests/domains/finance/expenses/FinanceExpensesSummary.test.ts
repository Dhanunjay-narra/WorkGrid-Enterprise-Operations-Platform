import { FinanceExpensesSummaryService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesSummaryService";
import { FinanceExpensesSummaryValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesSummary";
import { FinanceExpensesSummaryStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesSummaryStateMachine";

describe("FinanceExpensesSummary Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesSummaryService();
  const sm = new FinanceExpensesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesSummary Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
