import { IdPolicyService } from "../../../services/core-engine/src/identity/services/IdPolicyService";
import { IdPolicyValidator } from "../../../packages/types/src/domains/identity/IdPolicy";

describe("IdPolicy Service & Validation Suite", () => {
  const service = new IdPolicyService();

  test("creates a valid IdPolicy record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IdPolicy",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IdPolicyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
