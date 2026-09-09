import { FinanceInvoicesNodeService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesNodeService";
import { FinanceInvoicesNodeValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesNode";
import { FinanceInvoicesNodeStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesNodeStateMachine";

describe("FinanceInvoicesNode Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesNodeService();
  const sm = new FinanceInvoicesNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesNode Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
