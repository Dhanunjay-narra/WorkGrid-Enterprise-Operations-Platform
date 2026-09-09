import { IotTelemetryMetricService } from "../../../services/core-engine/src/iot/services/IotTelemetryMetricService";
import { IotTelemetryMetricValidator } from "../../../packages/types/src/domains/iot/IotTelemetryMetric";

describe("IotTelemetryMetric Service & Validation Suite", () => {
  const service = new IotTelemetryMetricService();

  test("creates a valid IotTelemetryMetric record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IotTelemetryMetric",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IotTelemetryMetricValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
