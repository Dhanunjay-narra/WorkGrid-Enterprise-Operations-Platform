import { BiTimeSeriesProjectionService } from "../../../services/core-engine/src/analytics/services/BiTimeSeriesProjectionService";
import { BiTimeSeriesProjectionValidator } from "../../../packages/types/src/domains/analytics/BiTimeSeriesProjection";

describe("BiTimeSeriesProjection Service & Validation Suite", () => {
  const service = new BiTimeSeriesProjectionService();

  test("creates a valid BiTimeSeriesProjection record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiTimeSeriesProjection",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiTimeSeriesProjectionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
