import { PrjRiskItemService } from "../../../services/core-engine/src/projects/services/PrjRiskItemService";
import { PrjRiskItemValidator } from "../../../packages/types/src/domains/projects/PrjRiskItem";

describe("PrjRiskItem Service & Validation Suite", () => {
  const service = new PrjRiskItemService();

  test("creates a valid PrjRiskItem record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjRiskItem",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjRiskItemValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
