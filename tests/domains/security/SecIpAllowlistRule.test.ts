import { SecIpAllowlistRuleService } from "../../../services/core-engine/src/security/services/SecIpAllowlistRuleService";
import { SecIpAllowlistRuleValidator } from "../../../packages/types/src/domains/security/SecIpAllowlistRule";

describe("SecIpAllowlistRule Service & Validation Suite", () => {
  const service = new SecIpAllowlistRuleService();

  test("creates a valid SecIpAllowlistRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecIpAllowlistRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecIpAllowlistRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
