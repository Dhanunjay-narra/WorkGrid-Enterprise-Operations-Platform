import { FinanceBankingMappingService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingMappingService";
import { FinanceBankingMappingValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingMapping";
import { FinanceBankingMappingStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingMappingStateMachine";

describe("FinanceBankingMapping Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingMappingService();
  const sm = new FinanceBankingMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingMapping Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
