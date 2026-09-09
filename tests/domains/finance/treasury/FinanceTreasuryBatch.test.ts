import { FinanceTreasuryBatchService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryBatchService";
import { FinanceTreasuryBatchValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryBatch";
import { FinanceTreasuryBatchStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryBatchStateMachine";

describe("FinanceTreasuryBatch Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryBatchService();
  const sm = new FinanceTreasuryBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryBatch Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
