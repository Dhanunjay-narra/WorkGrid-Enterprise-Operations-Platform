import { IdPermissionService } from "../../../services/core-engine/src/identity/services/IdPermissionService";
import { IdPermissionValidator } from "../../../packages/types/src/domains/identity/IdPermission";

describe("IdPermission Service & Validation Suite", () => {
  const service = new IdPermissionService();

  test("creates a valid IdPermission record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdPermission",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdPermissionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
