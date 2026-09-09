import { FinanceExpensesSnapshotService } from "../../../services/core-engine/src/finance/expenses/services/FinanceExpensesSnapshotService";
import { FinanceExpensesSnapshotValidator } from "../../../packages/types/src/domains/finance/expenses/FinanceExpensesSnapshot";
import { FinanceExpensesSnapshotStateMachine } from "../../../services/core-engine/src/finance/expenses/state-machines/FinanceExpensesSnapshotStateMachine";

describe("FinanceExpensesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new FinanceExpensesSnapshotService();
  const sm = new FinanceExpensesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceExpensesSnapshot Instance",
      domain: "finance_expenses",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceExpensesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
