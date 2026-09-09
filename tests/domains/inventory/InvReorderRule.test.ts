import { InvReorderRuleService } from "../../../services/core-engine/src/inventory/services/InvReorderRuleService";
import { InvReorderRuleValidator } from "../../../packages/types/src/domains/inventory/InvReorderRule";

describe("InvReorderRule Service & Validation Suite", () => {
  const service = new InvReorderRuleService();

  test("creates a valid InvReorderRule record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample InvReorderRule",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = InvReorderRuleValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
