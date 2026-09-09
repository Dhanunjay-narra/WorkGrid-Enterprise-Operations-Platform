import { InvGoodsReceiptService } from "../../../services/core-engine/src/inventory/services/InvGoodsReceiptService";
import { InvGoodsReceiptValidator } from "../../../packages/types/src/domains/inventory/InvGoodsReceipt";

describe("InvGoodsReceipt Service & Validation Suite", () => {
  const service = new InvGoodsReceiptService();

  test("creates a valid InvGoodsReceipt record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvGoodsReceipt",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvGoodsReceiptValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
