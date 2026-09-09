import { PrjProjectHealthMetricService } from "../../../services/core-engine/src/projects/services/PrjProjectHealthMetricService";
import { PrjProjectHealthMetricValidator } from "../../../packages/types/src/domains/projects/PrjProjectHealthMetric";

describe("PrjProjectHealthMetric Service & Validation Suite", () => {
  const service = new PrjProjectHealthMetricService();

  test("creates a valid PrjProjectHealthMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample PrjProjectHealthMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = PrjProjectHealthMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
