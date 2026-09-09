import { SupEscalationRuleService } from "../../../services/core-engine/src/support/services/SupEscalationRuleService";
import { SupEscalationRuleValidator } from "../../../packages/types/src/domains/support/SupEscalationRule";

describe("SupEscalationRule Service & Validation Suite", () => {
  const service = new SupEscalationRuleService();

  test("creates a valid SupEscalationRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupEscalationRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupEscalationRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
