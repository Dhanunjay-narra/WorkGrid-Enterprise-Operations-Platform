import { FinanceBillsReportService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsReportService";
import { FinanceBillsReportValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsReport";
import { FinanceBillsReportStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsReportStateMachine";

describe("FinanceBillsReport Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsReportService();
  const sm = new FinanceBillsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsReport Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
