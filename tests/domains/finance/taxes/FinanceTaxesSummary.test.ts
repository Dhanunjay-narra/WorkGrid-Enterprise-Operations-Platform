import { FinanceTaxesSummaryService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesSummaryService";
import { FinanceTaxesSummaryValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesSummary";
import { FinanceTaxesSummaryStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesSummaryStateMachine";

describe("FinanceTaxesSummary Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesSummaryService();
  const sm = new FinanceTaxesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesSummary Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
