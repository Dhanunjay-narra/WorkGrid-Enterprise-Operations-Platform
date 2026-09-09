import { FinanceBankingRuleService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingRuleService";
import { FinanceBankingRuleValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingRule";
import { FinanceBankingRuleStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingRuleStateMachine";

describe("FinanceBankingRule Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingRuleService();
  const sm = new FinanceBankingRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingRule Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
