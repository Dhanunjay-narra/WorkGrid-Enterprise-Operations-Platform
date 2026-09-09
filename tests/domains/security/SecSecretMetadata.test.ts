import { SecSecretMetadataService } from "../../../services/core-engine/src/security/services/SecSecretMetadataService";
import { SecSecretMetadataValidator } from "../../../packages/types/src/domains/security/SecSecretMetadata";

describe("SecSecretMetadata Service & Validation Suite", () => {
  const service = new SecSecretMetadataService();

  test("creates a valid SecSecretMetadata record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecSecretMetadata",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecSecretMetadataValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
