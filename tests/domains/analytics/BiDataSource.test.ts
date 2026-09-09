import { BiDataSourceService } from "../../../services/core-engine/src/analytics/services/BiDataSourceService";
import { BiDataSourceValidator } from "../../../packages/types/src/domains/analytics/BiDataSource";

describe("BiDataSource Service & Validation Suite", () => {
  const service = new BiDataSourceService();

  test("creates a valid BiDataSource record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiDataSource",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiDataSourceValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
