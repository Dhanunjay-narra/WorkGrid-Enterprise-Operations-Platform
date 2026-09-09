import { FinanceTreasuryScheduleService } from "../../../services/core-engine/src/finance/treasury/services/FinanceTreasuryScheduleService";
import { FinanceTreasuryScheduleValidator } from "../../../packages/types/src/domains/finance/treasury/FinanceTreasurySchedule";
import { FinanceTreasuryScheduleStateMachine } from "../../../services/core-engine/src/finance/treasury/state-machines/FinanceTreasuryScheduleStateMachine";

describe("FinanceTreasurySchedule Comprehensive Domain Test Suite", () => {
  const service = new FinanceTreasuryScheduleService();
  const sm = new FinanceTreasuryScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTreasurySchedule Instance",
      domain: "finance_treasury",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTreasuryScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
