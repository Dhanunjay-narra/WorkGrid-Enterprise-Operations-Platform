import { FinanceLedgerEventService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerEventService";
import { FinanceLedgerEventValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerEvent";
import { FinanceLedgerEventStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerEventStateMachine";

describe("FinanceLedgerEvent Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerEventService();
  const sm = new FinanceLedgerEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerEvent Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
