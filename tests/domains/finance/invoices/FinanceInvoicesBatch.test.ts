import { FinanceInvoicesBatchService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesBatchService";
import { FinanceInvoicesBatchValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesBatch";
import { FinanceInvoicesBatchStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesBatchStateMachine";

describe("FinanceInvoicesBatch Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesBatchService();
  const sm = new FinanceInvoicesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesBatch Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
