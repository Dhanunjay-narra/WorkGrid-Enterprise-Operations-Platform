import { InvItemCategoryService } from "../../../services/core-engine/src/inventory/services/InvItemCategoryService";
import { InvItemCategoryValidator } from "../../../packages/types/src/domains/inventory/InvItemCategory";

describe("InvItemCategory Service & Validation Suite", () => {
  const service = new InvItemCategoryService();

  test("creates a valid InvItemCategory record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvItemCategory",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvItemCategoryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
