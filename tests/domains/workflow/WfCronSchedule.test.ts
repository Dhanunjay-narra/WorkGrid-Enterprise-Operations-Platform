import { WfCronScheduleService } from "../../../services/core-engine/src/workflow/services/WfCronScheduleService";
import { WfCronScheduleValidator } from "../../../packages/types/src/domains/workflow/WfCronSchedule";

describe("WfCronSchedule Service & Validation Suite", () => {
  const service = new WfCronScheduleService();

  test("creates a valid WfCronSchedule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample WfCronSchedule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = WfCronScheduleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
