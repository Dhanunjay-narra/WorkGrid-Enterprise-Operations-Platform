import { IdApiKeyService } from "../../../services/core-engine/src/identity/services/IdApiKeyService";
import { IdApiKeyValidator } from "../../../packages/types/src/domains/identity/IdApiKey";

describe("IdApiKey Service & Validation Suite", () => {
  const service = new IdApiKeyService();

  test("creates a valid IdApiKey record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdApiKey",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdApiKeyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
