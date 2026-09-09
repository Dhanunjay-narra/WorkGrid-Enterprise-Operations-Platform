import { InvSupplierScorecardService } from "../../../services/core-engine/src/inventory/services/InvSupplierScorecardService";
import { InvSupplierScorecardValidator } from "../../../packages/types/src/domains/inventory/InvSupplierScorecard";

describe("InvSupplierScorecard Service & Validation Suite", () => {
  const service = new InvSupplierScorecardService();

  test("creates a valid InvSupplierScorecard record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvSupplierScorecard",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvSupplierScorecardValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
