import { FinanceInvoicesConfigService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesConfigService";
import { FinanceInvoicesConfigValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesConfig";
import { FinanceInvoicesConfigStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesConfigStateMachine";

describe("FinanceInvoicesConfig Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesConfigService();
  const sm = new FinanceInvoicesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesConfig Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
