import { InvSkuItemService } from "../../../services/core-engine/src/inventory/services/InvSkuItemService";
import { InvSkuItemValidator } from "../../../packages/types/src/domains/inventory/InvSkuItem";

describe("InvSkuItem Service & Validation Suite", () => {
  const service = new InvSkuItemService();

  test("creates a valid InvSkuItem record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvSkuItem",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvSkuItemValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
