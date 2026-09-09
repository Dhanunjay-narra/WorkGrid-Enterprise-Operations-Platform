import { InvStockMovementService } from "../../../services/core-engine/src/inventory/services/InvStockMovementService";
import { InvStockMovementValidator } from "../../../packages/types/src/domains/inventory/InvStockMovement";

describe("InvStockMovement Service & Validation Suite", () => {
  const service = new InvStockMovementService();

  test("creates a valid InvStockMovement record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvStockMovement",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvStockMovementValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
