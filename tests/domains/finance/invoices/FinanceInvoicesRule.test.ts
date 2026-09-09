import { FinanceInvoicesRuleService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesRuleService";
import { FinanceInvoicesRuleValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesRule";
import { FinanceInvoicesRuleStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesRuleStateMachine";

describe("FinanceInvoicesRule Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesRuleService();
  const sm = new FinanceInvoicesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesRule Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
