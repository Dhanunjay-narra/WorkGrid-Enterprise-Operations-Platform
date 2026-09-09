import { FinVendorBillService } from "../../../services/core-engine/src/finance/services/FinVendorBillService";
import { FinVendorBillValidator } from "../../../packages/types/src/domains/finance/FinVendorBill";

describe("FinVendorBill Service & Validation Suite", () => {
  const service = new FinVendorBillService();

  test("creates a valid FinVendorBill record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinVendorBill",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinVendorBillValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
