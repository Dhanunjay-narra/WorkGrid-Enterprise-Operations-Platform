import { FinanceBankingReportService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingReportService";
import { FinanceBankingReportValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingReport";
import { FinanceBankingReportStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingReportStateMachine";

describe("FinanceBankingReport Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingReportService();
  const sm = new FinanceBankingReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingReport Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
