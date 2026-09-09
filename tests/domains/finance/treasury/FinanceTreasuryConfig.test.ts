import { FinanceTreasuryConfigService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryConfigService";
import { FinanceTreasuryConfigValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryConfig";
import { FinanceTreasuryConfigStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryConfigStateMachine";

describe("FinanceTreasuryConfig Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryConfigService();
  const sm = new FinanceTreasuryConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryConfig Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
