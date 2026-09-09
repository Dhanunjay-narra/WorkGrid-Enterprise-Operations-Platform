import { PrjBudgetLineService } from "../../../services/core-engine/src/projects/services/PrjBudgetLineService";
import { PrjBudgetLineValidator } from "../../../packages/types/src/domains/projects/PrjBudgetLine";

describe("PrjBudgetLine Service & Validation Suite", () => {
  const service = new PrjBudgetLineService();

  test("creates a valid PrjBudgetLine record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjBudgetLine",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjBudgetLineValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
