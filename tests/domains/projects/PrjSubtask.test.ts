import { PrjSubtaskService } from "../../../services/core-engine/src/projects/services/PrjSubtaskService";
import { PrjSubtaskValidator } from "../../../packages/types/src/domains/projects/PrjSubtask";

describe("PrjSubtask Service & Validation Suite", () => {
  const service = new PrjSubtaskService();

  test("creates a valid PrjSubtask record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjSubtask",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjSubtaskValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
