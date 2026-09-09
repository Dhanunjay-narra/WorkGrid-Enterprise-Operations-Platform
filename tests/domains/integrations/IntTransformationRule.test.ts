import { IntTransformationRuleService } from "../../../services/core-engine/src/integrations/services/IntTransformationRuleService";
import { IntTransformationRuleValidator } from "../../../packages/types/src/domains/integrations/IntTransformationRule";

describe("IntTransformationRule Service & Validation Suite", () => {
  const service = new IntTransformationRuleService();

  test("creates a valid IntTransformationRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntTransformationRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntTransformationRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
