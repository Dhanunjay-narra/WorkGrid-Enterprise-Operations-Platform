import { IdSsoConfigService } from "../../../services/core-engine/src/identity/services/IdSsoConfigService";
import { IdSsoConfigValidator } from "../../../packages/types/src/domains/identity/IdSsoConfig";

describe("IdSsoConfig Service & Validation Suite", () => {
  const service = new IdSsoConfigService();

  test("creates a valid IdSsoConfig record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdSsoConfig",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdSsoConfigValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
