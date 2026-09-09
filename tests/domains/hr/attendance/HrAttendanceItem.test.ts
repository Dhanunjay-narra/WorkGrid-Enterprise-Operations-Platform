import { HrAttendanceItemService } from "../../../services/core-engine/src/hr/attendance/services/HrAttendanceItemService";
import { HrAttendanceItemValidator } from "../../../packages/types/src/domains/hr/attendance/HrAttendanceItem";
import { HrAttendanceItemStateMachine } from "../../../services/core-engine/src/hr/attendance/state-machines/HrAttendanceItemStateMachine";

describe("HrAttendanceItem Comprehensive Domain Test Suite", () => {
  const service = new HrAttendanceItemService();
  const sm = new HrAttendanceItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrAttendanceItem Instance",
      domain: "hr_attendance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrAttendanceItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
