import { FinanceLedgerBatchService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerBatchService";
import { FinanceLedgerBatchValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerBatch";
import { FinanceLedgerBatchStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerBatchStateMachine";

describe("FinanceLedgerBatch Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerBatchService();
  const sm = new FinanceLedgerBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerBatch Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
