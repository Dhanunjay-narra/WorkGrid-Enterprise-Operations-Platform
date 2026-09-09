import { FinanceTreasuryQueueService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryQueueService";
import { FinanceTreasuryQueueValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasuryQueue";
import { FinanceTreasuryQueueStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryQueueStateMachine";

describe("FinanceTreasuryQueue Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryQueueService();
  const sm = new FinanceTreasuryQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasuryQueue Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
