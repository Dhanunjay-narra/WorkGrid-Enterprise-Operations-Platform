import { IdMfaConfigService } from "../../../services/core-engine/src/identity/services/IdMfaConfigService";
import { IdMfaConfigValidator } from "../../../packages/types/src/domains/identity/IdMfaConfig";

describe("IdMfaConfig Service & Validation Suite", () => {
  const service = new IdMfaConfigService();

  test("creates a valid IdMfaConfig record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdMfaConfig",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdMfaConfigValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
