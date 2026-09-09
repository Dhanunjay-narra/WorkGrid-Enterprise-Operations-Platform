import { InvStockReservationService } from "../../../services/core-engine/src/inventory/services/InvStockReservationService";
import { InvStockReservationValidator } from "../../../packages/types/src/domains/inventory/InvStockReservation";

describe("InvStockReservation Service & Validation Suite", () => {
  const service = new InvStockReservationService();

  test("creates a valid InvStockReservation record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvStockReservation",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvStockReservationValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
