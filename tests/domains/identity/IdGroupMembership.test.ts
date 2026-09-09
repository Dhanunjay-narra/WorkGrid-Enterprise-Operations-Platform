import { IdGroupMembershipService } from "../../../services/core-engine/src/identity/services/IdGroupMembershipService";
import { IdGroupMembershipValidator } from "../../../packages/types/src/domains/identity/IdGroupMembership";

describe("IdGroupMembership Service & Validation Suite", () => {
  const service = new IdGroupMembershipService();

  test("creates a valid IdGroupMembership record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdGroupMembership",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdGroupMembershipValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
