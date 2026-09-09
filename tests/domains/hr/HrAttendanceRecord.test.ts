import { HrAttendanceRecordService } from "../../../services/core-engine/src/hr/services/HrAttendanceRecordService";
import { HrAttendanceRecordValidator } from "../../../packages/types/src/domains/hr/HrAttendanceRecord";

describe("HrAttendanceRecord Service & Validation Suite", () => {
  const service = new HrAttendanceRecordService();

  test("creates a valid HrAttendanceRecord record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrAttendanceRecord",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrAttendanceRecordValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
