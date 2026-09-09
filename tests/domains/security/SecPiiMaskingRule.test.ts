import { SecPiiMaskingRuleService } from "../../../services/core-engine/src/security/services/SecPiiMaskingRuleService";
import { SecPiiMaskingRuleValidator } from "../../../packages/types/src/domains/security/SecPiiMaskingRule";

describe("SecPiiMaskingRule Service & Validation Suite", () => {
  const service = new SecPiiMaskingRuleService();

  test("creates a valid SecPiiMaskingRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecPiiMaskingRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecPiiMaskingRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
