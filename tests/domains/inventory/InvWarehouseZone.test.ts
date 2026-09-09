import { InvWarehouseZoneService } from "../../../services/core-engine/src/inventory/services/InvWarehouseZoneService";
import { InvWarehouseZoneValidator } from "../../../packages/types/src/domains/inventory/InvWarehouseZone";

describe("InvWarehouseZone Service & Validation Suite", () => {
  const service = new InvWarehouseZoneService();

  test("creates a valid InvWarehouseZone record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvWarehouseZone",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvWarehouseZoneValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
