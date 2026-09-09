import { IdUserService } from "../../../services/core-engine/src/identity/services/IdUserService";
import { IdUserValidator } from "../../../packages/types/src/domains/identity/IdUser";

describe("IdUser Service & Validation Suite", () => {
  const service = new IdUserService();

  test("creates a valid IdUser record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdUser",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdUserValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
