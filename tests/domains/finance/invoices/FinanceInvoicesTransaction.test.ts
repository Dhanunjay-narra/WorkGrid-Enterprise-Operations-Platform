import { FinanceInvoicesTransactionService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesTransactionService";
import { FinanceInvoicesTransactionValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesTransaction";
import { FinanceInvoicesTransactionStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesTransactionStateMachine";

describe("FinanceInvoicesTransaction Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesTransactionService();
  const sm = new FinanceInvoicesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesTransaction Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
