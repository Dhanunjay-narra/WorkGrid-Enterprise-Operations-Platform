import { BiCohortMetricService } from "../../../services/core-engine/src/analytics/services/BiCohortMetricService";
import { BiCohortMetricValidator } from "../../../packages/types/src/domains/analytics/BiCohortMetric";

describe("BiCohortMetric Service & Validation Suite", () => {
  const service = new BiCohortMetricService();

  test("creates a valid BiCohortMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiCohortMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiCohortMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
