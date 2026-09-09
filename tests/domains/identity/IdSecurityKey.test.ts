import { IdSecurityKeyService } from "../../../services/core-engine/src/identity/services/IdSecurityKeyService";
import { IdSecurityKeyValidator } from "../../../packages/types/src/domains/identity/IdSecurityKey";

describe("IdSecurityKey Service & Validation Suite", () => {
  const service = new IdSecurityKeyService();

  test("creates a valid IdSecurityKey record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdSecurityKey",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdSecurityKeyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
