import { FinanceBankingItemService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingItemService";
import { FinanceBankingItemValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingItem";
import { FinanceBankingItemStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingItemStateMachine";

describe("FinanceBankingItem Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingItemService();
  const sm = new FinanceBankingItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingItem Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
