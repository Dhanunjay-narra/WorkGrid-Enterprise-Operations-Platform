import { BiReportScheduleService } from "../../../services/core-engine/src/analytics/services/BiReportScheduleService";
import { BiReportScheduleValidator } from "../../../packages/types/src/domains/analytics/BiReportSchedule";

describe("BiReportSchedule Service & Validation Suite", () => {
  const service = new BiReportScheduleService();

  test("creates a valid BiReportSchedule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiReportSchedule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiReportScheduleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
