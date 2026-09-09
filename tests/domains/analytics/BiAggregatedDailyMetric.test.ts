import { BiAggregatedDailyMetricService } from "../../../services/core-engine/src/analytics/services/BiAggregatedDailyMetricService";
import { BiAggregatedDailyMetricValidator } from "../../../packages/types/src/domains/analytics/BiAggregatedDailyMetric";

describe("BiAggregatedDailyMetric Service & Validation Suite", () => {
  const service = new BiAggregatedDailyMetricService();

  test("creates a valid BiAggregatedDailyMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiAggregatedDailyMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiAggregatedDailyMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
