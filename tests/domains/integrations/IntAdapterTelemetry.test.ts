import { IntAdapterTelemetryService } from "../../../services/core-engine/src/integrations/services/IntAdapterTelemetryService";
import { IntAdapterTelemetryValidator } from "../../../packages/types/src/domains/integrations/IntAdapterTelemetry";

describe("IntAdapterTelemetry Service & Validation Suite", () => {
  const service = new IntAdapterTelemetryService();

  test("creates a valid IntAdapterTelemetry record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntAdapterTelemetry",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntAdapterTelemetryValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
