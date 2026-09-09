import { FinanceLedgerProfileService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerProfileService";
import { FinanceLedgerProfileValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerProfile";
import { FinanceLedgerProfileStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerProfileStateMachine";

describe("FinanceLedgerProfile Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerProfileService();
  const sm = new FinanceLedgerProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerProfile Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
