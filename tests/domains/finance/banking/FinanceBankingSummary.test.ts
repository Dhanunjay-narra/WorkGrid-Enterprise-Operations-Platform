import { FinanceBankingSummaryService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingSummaryService";
import { FinanceBankingSummaryValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingSummary";
import { FinanceBankingSummaryStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingSummaryStateMachine";

describe("FinanceBankingSummary Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingSummaryService();
  const sm = new FinanceBankingSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingSummary Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
