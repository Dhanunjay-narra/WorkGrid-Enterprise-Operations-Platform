import { IdRoleService } from "../../../services/core-engine/src/identity/services/IdRoleService";
import { IdRoleValidator } from "../../../packages/types/src/domains/identity/IdRole";

describe("IdRole Service & Validation Suite", () => {
  const service = new IdRoleService();

  test("creates a valid IdRole record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdRole",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdRoleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
