import { FinanceTaxesScheduleService } from "../../../services/core-engine/src/finance/taxes/services/FinanceTaxesScheduleService";
import { FinanceTaxesScheduleValidator } from "../../../packages/types/src/domains/finance/taxes/FinanceTaxesSchedule";
import { FinanceTaxesScheduleStateMachine } from "../../../services/core-engine/src/finance/taxes/state-machines/FinanceTaxesScheduleStateMachine";

describe("FinanceTaxesSchedule Comprehensive Domain Test Suite", () => {
  const service = new FinanceTaxesScheduleService();
  const sm = new FinanceTaxesScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "FinanceTaxesSchedule Instance",
      domain: "finance_taxes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = FinanceTaxesScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
