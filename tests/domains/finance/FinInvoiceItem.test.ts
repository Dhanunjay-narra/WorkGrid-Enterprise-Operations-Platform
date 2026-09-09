import { FinInvoiceItemService } from "../../../services/core-engine/src/finance/services/FinInvoiceItemService";
import { FinInvoiceItemValidator } from "../../../packages/types/src/domains/finance/FinInvoiceItem";

describe("FinInvoiceItem Service & Validation Suite", () => {
  const service = new FinInvoiceItemService();

  test("creates a valid FinInvoiceItem record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinInvoiceItem",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinInvoiceItemValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
