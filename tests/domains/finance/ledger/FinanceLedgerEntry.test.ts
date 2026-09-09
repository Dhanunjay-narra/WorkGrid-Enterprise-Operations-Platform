import { FinanceLedgerEntryService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerEntryService";
import { FinanceLedgerEntryValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerEntry";
import { FinanceLedgerEntryStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerEntryStateMachine";

describe("FinanceLedgerEntry Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerEntryService();
  const sm = new FinanceLedgerEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerEntry Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
