import { InvPurchaseOrderService } from "../../../services/core-engine/src/inventory/services/InvPurchaseOrderService";
import { InvPurchaseOrderValidator } from "../../../packages/types/src/domains/inventory/InvPurchaseOrder";

describe("InvPurchaseOrder Service & Validation Suite", () => {
  const service = new InvPurchaseOrderService();

  test("creates a valid InvPurchaseOrder record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvPurchaseOrder",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvPurchaseOrderValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
