import { FinanceBillsTransactionService } from "../../../services/core-engine/src/finance/bills/services/FinanceBillsTransactionService";
import { FinanceBillsTransactionValidator } from "../../../packages/types/src/domains/finance/bills/FinanceBillsTransaction";
import { FinanceBillsTransactionStateMachine } from "../../../services/core-engine/src/finance/bills/state-machines/FinanceBillsTransactionStateMachine";

describe("FinanceBillsTransaction Comprehensive Domain Test Suite", () => {
  const service = new FinanceBillsTransactionService();
  const sm = new FinanceBillsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceBillsTransaction Instance",
      domain: "finance_bills",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceBillsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
