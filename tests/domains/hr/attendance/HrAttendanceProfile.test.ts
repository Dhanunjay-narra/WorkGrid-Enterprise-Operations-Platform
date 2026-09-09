import { HrAttendanceProfileService } from "../../../services/core-engine/src/hr/attendance/services/HrAttendanceProfileService";
import { HrAttendanceProfileValidator } from "../../../packages/types/src/domains/hr/attendance/HrAttendanceProfile";
import { HrAttendanceProfileStateMachine } from "../../../services/core-engine/src/hr/attendance/state-machines/HrAttendanceProfileStateMachine";

describe("HrAttendanceProfile Comprehensive Domain Test Suite", () => {
  const service = new HrAttendanceProfileService();
  const sm = new HrAttendanceProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrAttendanceProfile Instance",
      domain: "hr_attendance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrAttendanceProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
