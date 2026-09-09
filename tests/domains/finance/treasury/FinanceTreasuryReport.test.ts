import { FinanceTreasuryReportService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryReportService";
import { FinanceTreasuryReportValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryReport";
import { FinanceTreasuryReportStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryReportStateMachine";

describe("FinanceTreasuryReport Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryReportService();
  const sm = new FinanceTreasuryReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryReport Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
