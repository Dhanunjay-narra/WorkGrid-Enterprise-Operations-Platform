import { FinanceTreasuryNodeService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryNodeService";
import { FinanceTreasuryNodeValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryNode";
import { FinanceTreasuryNodeStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryNodeStateMachine";

describe("FinanceTreasuryNode Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryNodeService();
  const sm = new FinanceTreasuryNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryNode Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
