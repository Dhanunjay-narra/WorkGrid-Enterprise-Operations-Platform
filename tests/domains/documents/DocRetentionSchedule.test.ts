import { DocRetentionScheduleService } from "../../../services/core-engine/src/documents/services/DocRetentionScheduleService";
import { DocRetentionScheduleValidator } from "../../../packages/types/src/domains/documents/DocRetentionSchedule";

describe("DocRetentionSchedule Service & Validation Suite", () => {
  const service = new DocRetentionScheduleService();

  test("creates a valid DocRetentionSchedule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample DocRetentionSchedule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = DocRetentionScheduleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
