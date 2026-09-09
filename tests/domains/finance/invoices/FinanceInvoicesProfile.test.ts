import { FinanceInvoicesProfileService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesProfileService";
import { FinanceInvoicesProfileValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesProfile";
import { FinanceInvoicesProfileStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesProfileStateMachine";

describe("FinanceInvoicesProfile Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesProfileService();
  const sm = new FinanceInvoicesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesProfile Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
