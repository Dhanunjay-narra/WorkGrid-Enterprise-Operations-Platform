import { FinanceLedgerPolicyService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerPolicyService";
import { FinanceLedgerPolicyValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerPolicy";
import { FinanceLedgerPolicyStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerPolicyStateMachine";

describe("FinanceLedgerPolicy Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerPolicyService();
  const sm = new FinanceLedgerPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerPolicy Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
