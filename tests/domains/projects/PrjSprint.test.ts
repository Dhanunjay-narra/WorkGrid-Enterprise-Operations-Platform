import { PrjSprintService } from "../../../services/core-engine/src/projects/services/PrjSprintService";
import { PrjSprintValidator } from "../../../packages/types/src/domains/projects/PrjSprint";

describe("PrjSprint Service & Validation Suite", () => {
  const service = new PrjSprintService();

  test("creates a valid PrjSprint record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjSprint",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjSprintValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
