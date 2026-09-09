import { SecAccessReviewScheduleService } from "../../../services/core-engine/src/security/services/SecAccessReviewScheduleService";
import { SecAccessReviewScheduleValidator } from "../../../packages/types/src/domains/security/SecAccessReviewSchedule";

describe("SecAccessReviewSchedule Service & Validation Suite", () => {
  const service = new SecAccessReviewScheduleService();

  test("creates a valid SecAccessReviewSchedule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecAccessReviewSchedule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecAccessReviewScheduleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
