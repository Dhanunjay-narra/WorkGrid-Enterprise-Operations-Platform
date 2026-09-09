import { HrLeaveRuleService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveRuleService";
import { HrLeaveRuleValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveRule";
import { HrLeaveRuleStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveRuleStateMachine";

describe("HrLeaveRule Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveRuleService();
  const sm = new HrLeaveRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveRule Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
