import { HrLeaveEventService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveEventService";
import { HrLeaveEventValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveEvent";
import { HrLeaveEventStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveEventStateMachine";

describe("HrLeaveEvent Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveEventService();
  const sm = new HrLeaveEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveEvent Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
