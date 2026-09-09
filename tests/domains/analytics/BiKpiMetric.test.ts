import { BiKpiMetricService } from "../../../services/core-engine/src/analytics/services/BiKpiMetricService";
import { BiKpiMetricValidator } from "../../../packages/types/src/domains/analytics/BiKpiMetric";

describe("BiKpiMetric Service & Validation Suite", () => {
  const service = new BiKpiMetricService();

  test("creates a valid BiKpiMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiKpiMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiKpiMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
