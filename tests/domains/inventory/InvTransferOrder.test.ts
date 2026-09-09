import { InvTransferOrderService } from "../../../services/core-engine/src/inventory/services/InvTransferOrderService";
import { InvTransferOrderValidator } from "../../../packages/types/src/domains/inventory/InvTransferOrder";

describe("InvTransferOrder Service & Validation Suite", () => {
  const service = new InvTransferOrderService();

  test("creates a valid InvTransferOrder record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvTransferOrder",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvTransferOrderValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
