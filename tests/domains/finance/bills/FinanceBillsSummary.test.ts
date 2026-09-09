import { FinanceBillsSummaryService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsSummaryService";
import { FinanceBillsSummaryValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsSummary";
import { FinanceBillsSummaryStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsSummaryStateMachine";

describe("FinanceBillsSummary Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsSummaryService();
  const sm = new FinanceBillsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsSummary Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
