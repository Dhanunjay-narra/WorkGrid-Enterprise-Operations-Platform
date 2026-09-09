import { BiDrilldownFilterService } from "../../../services/core-engine/src/analytics/services/BiDrilldownFilterService";
import { BiDrilldownFilterValidator } from "../../../packages/types/src/domains/analytics/BiDrilldownFilter";

describe("BiDrilldownFilter Service & Validation Suite", () => {
  const service = new BiDrilldownFilterService();

  test("creates a valid BiDrilldownFilter record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiDrilldownFilter",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiDrilldownFilterValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
