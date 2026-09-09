import { FinCostCenterService } from "../../../services/core-engine/src/finance/services/FinCostCenterService";
import { FinCostCenterValidator } from "../../../packages/types/src/domains/finance/FinCostCenter";

describe("FinCostCenter Service & Validation Suite", () => {
  const service = new FinCostCenterService();

  test("creates a valid FinCostCenter record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample FinCostCenter",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = FinCostCenterValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
