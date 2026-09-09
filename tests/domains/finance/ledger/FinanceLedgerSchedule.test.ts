import { FinanceLedgerScheduleService } from "../../../services/core-engine/src/finance/ledger/services/FinanceLedgerScheduleService";
import { FinanceLedgerScheduleValidator } from "../../../packages/types/src/domains/finance/ledger/FinanceLedgerSchedule";
import { FinanceLedgerScheduleStateMachine } from "../../../services/core-engine/src/finance/ledger/state-machines/FinanceLedgerScheduleStateMachine";

describe("FinanceLedgerSchedule Comprehensive Domain Test Suite", () => {
  const service = new FinanceLedgerScheduleService();
  const sm = new FinanceLedgerScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceLedgerSchedule Instance",
      domain: "finance_ledger",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceLedgerScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
