import { HrAttendanceQueueService } from "../../../services/core-engine/src/hr/attendance/services/HrAttendanceQueueService";
import { HrAttendanceQueueValidator } from "../../../packages/types/src/domains/hr/attendance/HrAttendanceQueue";
import { HrAttendanceQueueStateMachine } from "../../../services/core-engine/src/hr/attendance/state-machines/HrAttendanceQueueStateMachine";

describe("HrAttendanceQueue Comprehensive Domain Test Suite", () => {
  const service = new HrAttendanceQueueService();
  const sm = new HrAttendanceQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrAttendanceQueue Instance",
      domain: "hr_attendance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrAttendanceQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
