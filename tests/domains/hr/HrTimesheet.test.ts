import { HrTimesheetService } from "../../../services/core-engine/src/hr/services/HrTimesheetService";
import { HrTimesheetValidator } from "../../../packages/types/src/domains/hr/HrTimesheet";

describe("HrTimesheet Service & Validation Suite", () => {
  const service = new HrTimesheetService();

  test("creates a valid HrTimesheet record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrTimesheet",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrTimesheetValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
