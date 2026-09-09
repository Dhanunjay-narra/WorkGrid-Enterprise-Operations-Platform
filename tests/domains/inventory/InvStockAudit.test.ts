import { InvStockAuditService } from "../../../services/core-engine/src/inventory/services/InvStockAuditService";
import { InvStockAuditValidator } from "../../../packages/types/src/domains/inventory/InvStockAudit";

describe("InvStockAudit Service & Validation Suite", () => {
  const service = new InvStockAuditService();

  test("creates a valid InvStockAudit record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvStockAudit",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvStockAuditValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
