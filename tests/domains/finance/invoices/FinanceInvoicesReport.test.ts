import { FinanceInvoicesReportService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesReportService";
import { FinanceInvoicesReportValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesReport";
import { FinanceInvoicesReportStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesReportStateMachine";

describe("FinanceInvoicesReport Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesReportService();
  const sm = new FinanceInvoicesReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesReport Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
