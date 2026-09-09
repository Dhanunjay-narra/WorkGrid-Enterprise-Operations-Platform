import { PrjTaskService } from "../../../services/core-engine/src/projects/services/PrjTaskService";
import { PrjTaskValidator } from "../../../packages/types/src/domains/projects/PrjTask";

describe("PrjTask Service & Validation Suite", () => {
  const service = new PrjTaskService();

  test("creates a valid PrjTask record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjTask",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjTaskValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
