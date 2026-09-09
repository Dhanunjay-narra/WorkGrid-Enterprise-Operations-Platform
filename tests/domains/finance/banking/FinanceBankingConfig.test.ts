import { FinanceBankingConfigService } from "../../../services/core-engine/src/finance/banking/services/FinanceBankingConfigService";
import { FinanceBankingConfigValidator } from "../../../packages/types/src/domains/finance/banking/FinanceBankingConfig";
import { FinanceBankingConfigStateMachine } from "../../../services/core-engine/src/finance/banking/state-machines/FinanceBankingConfigStateMachine";

describe("FinanceBankingConfig Comprehensive Domain Test Suite", () => {
  const service = new FinanceBankingConfigService();
  const sm = new FinanceBankingConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBankingConfig Instance",
      domain: "finance_banking",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBankingConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
