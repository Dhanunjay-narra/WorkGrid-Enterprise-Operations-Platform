import { FinanceExpensesAssignmentService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesAssignmentService";
import { FinanceExpensesAssignmentValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesAssignment";
import { FinanceExpensesAssignmentStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesAssignmentStateMachine";

describe("FinanceExpensesAssignment Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesAssignmentService();
  const sm = new FinanceExpensesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesAssignment Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
