import { IdPasskeyCredentialService } from "../../../services/core-engine/src/identity/services/IdPasskeyCredentialService";
import { IdPasskeyCredentialValidator } from "../../../packages/types/src/domains/identity/IdPasskeyCredential";

describe("IdPasskeyCredential Service & Validation Suite", () => {
  const service = new IdPasskeyCredentialService();

  test("creates a valid IdPasskeyCredential record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdPasskeyCredential",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdPasskeyCredentialValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
