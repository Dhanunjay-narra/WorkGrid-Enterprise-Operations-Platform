import { PrjEpicService } from "../../../services/core-engine/src/projects/services/PrjEpicService";
import { PrjEpicValidator } from "../../../packages/types/src/domains/projects/PrjEpic";

describe("PrjEpic Service & Validation Suite", () => {
  const service = new PrjEpicService();

  test("creates a valid PrjEpic record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjEpic",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjEpicValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
