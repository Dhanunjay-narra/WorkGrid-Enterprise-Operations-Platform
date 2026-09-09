import { FinanceInvoicesStateService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesStateService";
import { FinanceInvoicesStateValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesState";
import { FinanceInvoicesStateStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesStateStateMachine";

describe("FinanceInvoicesState Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesStateService();
  const sm = new FinanceInvoicesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesState Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
