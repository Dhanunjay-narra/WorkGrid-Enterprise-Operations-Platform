import { IdTenantService } from "../../../services/core-engine/src/identity/services/IdTenantService";
import { IdTenantValidator } from "../../../packages/types/src/domains/identity/IdTenant";

describe("IdTenant Service & Validation Suite", () => {
  const service = new IdTenantService();

  test("creates a valid IdTenant record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdTenant",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdTenantValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
