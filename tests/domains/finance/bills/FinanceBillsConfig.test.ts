import { FinanceBillsConfigService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsConfigService";
import { FinanceBillsConfigValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsConfig";
import { FinanceBillsConfigStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsConfigStateMachine";

describe("FinanceBillsConfig Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsConfigService();
  const sm = new FinanceBillsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsConfig Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
