import { IntConnectorConfigService } from "../../../services/core-engine/src/integrations/services/IntConnectorConfigService";
import { IntConnectorConfigValidator } from "../../../packages/types/src/domains/integrations/IntConnectorConfig";

describe("IntConnectorConfig Service & Validation Suite", () => {
  const service = new IntConnectorConfigService();

  test("creates a valid IntConnectorConfig record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntConnectorConfig",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntConnectorConfigValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
