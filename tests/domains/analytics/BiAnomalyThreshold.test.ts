import { BiAnomalyThresholdService } from "../../../services/core-engine/src/analytics/services/BiAnomalyThresholdService";
import { BiAnomalyThresholdValidator } from "../../../packages/types/src/domains/analytics/BiAnomalyThreshold";

describe("BiAnomalyThreshold Service & Validation Suite", () => {
  const service = new BiAnomalyThresholdService();

  test("creates a valid BiAnomalyThreshold record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample BiAnomalyThreshold",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = BiAnomalyThresholdValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
