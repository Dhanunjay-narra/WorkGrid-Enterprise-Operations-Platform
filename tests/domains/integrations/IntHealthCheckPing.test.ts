import { IntHealthCheckPingService } from "../../../services/core-engine/src/integrations/services/IntHealthCheckPingService";
import { IntHealthCheckPingValidator } from "../../../packages/types/src/domains/integrations/IntHealthCheckPing";

describe("IntHealthCheckPing Service & Validation Suite", () => {
  const service = new IntHealthCheckPingService();

  test("creates a valid IntHealthCheckPing record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntHealthCheckPing",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntHealthCheckPingValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
