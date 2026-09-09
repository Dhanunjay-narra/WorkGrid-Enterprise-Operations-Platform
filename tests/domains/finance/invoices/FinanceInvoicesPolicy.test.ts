import { FinanceInvoicesPolicyService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesPolicyService";
import { FinanceInvoicesPolicyValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesPolicy";
import { FinanceInvoicesPolicyStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesPolicyStateMachine";

describe("FinanceInvoicesPolicy Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesPolicyService();
  const sm = new FinanceInvoicesPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesPolicy Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
