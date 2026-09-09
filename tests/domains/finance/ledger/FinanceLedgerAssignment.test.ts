import { FinanceLedgerAssignmentService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerAssignmentService";
import { FinanceLedgerAssignmentValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerAssignment";
import { FinanceLedgerAssignmentStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerAssignmentStateMachine";

describe("FinanceLedgerAssignment Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerAssignmentService();
  const sm = new FinanceLedgerAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerAssignment Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
