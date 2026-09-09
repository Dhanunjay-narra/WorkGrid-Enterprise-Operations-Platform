import { FinanceInvoicesScheduleService } from "../../../services/core-engine/src/finance/invoices/services/FinanceInvoicesScheduleService";
import { FinanceInvoicesScheduleValidator } from "../../../packages/types/src/domains/finance/invoices/FinanceInvoicesSchedule";
import { FinanceInvoicesScheduleStateMachine } from "../../../services/core-engine/src/finance/invoices/state-machines/FinanceInvoicesScheduleStateMachine";

describe("FinanceInvoicesSchedule Comprehensive Domain Test Suite", () => {
  const service = new FinanceInvoicesScheduleService();
  const sm = new FinanceInvoicesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceInvoicesSchedule Instance",
      domain: "finance_invoices",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceInvoicesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
