import { HrLeavePolicyService } from "../../../services/core-engine/src/hr/leave/services/HrLeavePolicyService";
import { HrLeavePolicyValidator } from "../../../packages/types/src/domains/hr/leave/HrLeavePolicy";
import { HrLeavePolicyStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeavePolicyStateMachine";

describe("HrLeavePolicy Comprehensive Domain Test Suite", () => {
  const service = new HrLeavePolicyService();
  const sm = new HrLeavePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeavePolicy Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeavePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
