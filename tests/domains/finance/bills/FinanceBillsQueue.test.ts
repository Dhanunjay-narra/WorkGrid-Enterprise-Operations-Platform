import { FinanceBillsQueueService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsQueueService";
import { FinanceBillsQueueValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsQueue";
import { FinanceBillsQueueStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsQueueStateMachine";

describe("FinanceBillsQueue Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsQueueService();
  const sm = new FinanceBillsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsQueue Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
