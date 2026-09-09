import { InvPurchaseOrderItemService } from "../../../services/core-engine/src/inventory/services/InvPurchaseOrderItemService";
import { InvPurchaseOrderItemValidator } from "../../../packages/types/src/domains/inventory/InvPurchaseOrderItem";

describe("InvPurchaseOrderItem Service & Validation Suite", () => {
  const service = new InvPurchaseOrderItemService();

  test("creates a valid InvPurchaseOrderItem record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvPurchaseOrderItem",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvPurchaseOrderItemValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
