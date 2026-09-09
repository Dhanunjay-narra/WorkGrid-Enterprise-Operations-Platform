import { FinanceInvoicesPayloadService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesPayloadService";
import { FinanceInvoicesPayloadValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesPayload";
import { FinanceInvoicesPayloadStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesPayloadStateMachine";

describe("FinanceInvoicesPayload Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesPayloadService();
  const sm = new FinanceInvoicesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesPayload Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
