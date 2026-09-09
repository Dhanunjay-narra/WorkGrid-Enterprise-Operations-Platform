import { InvStockLevelService } from "../../../services/core-engine/src/inventory/services/InvStockLevelService";
import { InvStockLevelValidator } from "../../../packages/types/src/domains/inventory/InvStockLevel";

describe("InvStockLevel Service & Validation Suite", () => {
  const service = new InvStockLevelService();

  test("creates a valid InvStockLevel record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvStockLevel",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvStockLevelValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
