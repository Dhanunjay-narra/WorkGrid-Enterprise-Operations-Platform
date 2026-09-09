import { HrLeaveMappingService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveMappingService";
import { HrLeaveMappingValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveMapping";
import { HrLeaveMappingStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveMappingStateMachine";

describe("HrLeaveMapping Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveMappingService();
  const sm = new HrLeaveMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveMapping Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
