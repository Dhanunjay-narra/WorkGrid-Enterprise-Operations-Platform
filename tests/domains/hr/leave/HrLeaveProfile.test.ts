import { HrLeaveProfileService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveProfileService";
import { HrLeaveProfileValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveProfile";
import { HrLeaveProfileStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveProfileStateMachine";

describe("HrLeaveProfile Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveProfileService();
  const sm = new HrLeaveProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveProfile Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
