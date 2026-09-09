import { FinTaxRateService } from "../../../services/core-engine/src/finance/services/FinTaxRateService";
import { FinTaxRateValidator } from "../../../packages/types/src/domains/finance/FinTaxRate";

describe("FinTaxRate Service & Validation Suite", () => {
  const service = new FinTaxRateService();

  test("creates a valid FinTaxRate record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinTaxRate",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinTaxRateValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
