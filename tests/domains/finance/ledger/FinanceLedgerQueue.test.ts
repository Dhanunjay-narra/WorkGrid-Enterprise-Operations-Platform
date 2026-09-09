import { FinanceLedgerQueueService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerQueueService";
import { FinanceLedgerQueueValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerQueue";
import { FinanceLedgerQueueStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerQueueStateMachine";

describe("FinanceLedgerQueue Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerQueueService();
  const sm = new FinanceLedgerQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerQueue Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
