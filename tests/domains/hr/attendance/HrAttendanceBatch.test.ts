import { HrAttendanceBatchService } from "../../../services/core-engine/src/hr/attendance/services/HrAttendanceBatchService";
import { HrAttendanceBatchValidator } from "../../../packages/types/src/domains/hr/attendance/HrAttendanceBatch";
import { HrAttendanceBatchStateMachine } from "../../../services/core-engine/src/hr/attendance/state-machines/HrAttendanceBatchStateMachine";

describe("HrAttendanceBatch Comprehensive Domain Test Suite", () => {
  const service = new HrAttendanceBatchService();
  const sm = new HrAttendanceBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrAttendanceBatch Instance",
      domain: "hr_attendance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrAttendanceBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
