import { AiModelRoutingRuleService } from "../../../services/core-engine/src/ai/services/AiModelRoutingRuleService";
import { AiModelRoutingRuleValidator } from "../../../packages/types/src/domains/ai/AiModelRoutingRule";

describe("AiModelRoutingRule Service & Validation Suite", () => {
  const service = new AiModelRoutingRuleService();

  test("creates a valid AiModelRoutingRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiModelRoutingRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiModelRoutingRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
