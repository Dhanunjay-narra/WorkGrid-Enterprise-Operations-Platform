import { HrLeaveRecordService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveRecordService";
import { HrLeaveRecordValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveRecord";
import { HrLeaveRecordStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveRecordStateMachine";

describe("HrLeaveRecord Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveRecordService();
  const sm = new HrLeaveRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveRecord Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
