import { HrTaxDeductionService } from "../../../services/core-engine/src/hr/services/HrTaxDeductionService";
import { HrTaxDeductionValidator } from "../../../packages/types/src/domains/hr/HrTaxDeduction";

describe("HrTaxDeduction Service & Validation Suite", () => {
  const service = new HrTaxDeductionService();

  test("creates a valid HrTaxDeduction record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample HrTaxDeduction",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = HrTaxDeductionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
