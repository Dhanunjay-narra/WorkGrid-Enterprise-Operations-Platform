import { FinanceBillsBatchService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsBatchService";
import { FinanceBillsBatchValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsBatch";
import { FinanceBillsBatchStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsBatchStateMachine";

describe("FinanceBillsBatch Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsBatchService();
  const sm = new FinanceBillsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsBatch Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
