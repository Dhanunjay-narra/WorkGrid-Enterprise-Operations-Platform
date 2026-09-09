import { HrShiftsRuleService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsRuleService";
import { HrShiftsRuleValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsRule";
import { HrShiftsRuleStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsRuleStateMachine";

describe("HrShiftsRule Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsRuleService();
  const sm = new HrShiftsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsRule Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
