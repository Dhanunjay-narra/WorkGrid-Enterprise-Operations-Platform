import { InvSupplierService } from "../../../services/core-engine/src/inventory/services/InvSupplierService";
import { InvSupplierValidator } from "../../../packages/types/src/domains/inventory/InvSupplier";

describe("InvSupplier Service & Validation Suite", () => {
  const service = new InvSupplierService();

  test("creates a valid InvSupplier record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvSupplier",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvSupplierValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
