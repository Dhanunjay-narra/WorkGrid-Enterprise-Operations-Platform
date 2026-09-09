import { InvWarehouseService } from "../../../services/core-engine/src/inventory/services/InvWarehouseService";
import { InvWarehouseValidator } from "../../../packages/types/src/domains/inventory/InvWarehouse";

describe("InvWarehouse Service & Validation Suite", () => {
  const service = new InvWarehouseService();

  test("creates a valid InvWarehouse record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvWarehouse",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvWarehouseValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
