import { FinInvoiceService } from "../../../services/core-engine/src/finance/services/FinInvoiceService";
import { FinInvoiceValidator } from "../../../packages/types/src/domains/finance/FinInvoice";

describe("FinInvoice Service & Validation Suite", () => {
  const service = new FinInvoiceService();

  test("creates a valid FinInvoice record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinInvoice",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinInvoiceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
