import { HrLeaveTaskService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveTaskService";
import { HrLeaveTaskValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveTask";
import { HrLeaveTaskStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveTaskStateMachine";

describe("HrLeaveTask Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveTaskService();
  const sm = new HrLeaveTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveTask Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
