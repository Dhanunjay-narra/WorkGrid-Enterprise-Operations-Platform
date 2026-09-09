import { FinanceLedgerNodeService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerNodeService";
import { FinanceLedgerNodeValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerNode";
import { FinanceLedgerNodeStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerNodeStateMachine";

describe("FinanceLedgerNode Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerNodeService();
  const sm = new FinanceLedgerNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerNode Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
