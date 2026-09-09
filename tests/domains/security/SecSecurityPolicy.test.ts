import { SecSecurityPolicyService } from "../../../services/core-engine/src/security/services/SecSecurityPolicyService";
import { SecSecurityPolicyValidator } from "../../../packages/types/src/domains/security/SecSecurityPolicy";

describe("SecSecurityPolicy Service & Validation Suite", () => {
  const service = new SecSecurityPolicyService();

  test("creates a valid SecSecurityPolicy record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecSecurityPolicy",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecSecurityPolicyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
