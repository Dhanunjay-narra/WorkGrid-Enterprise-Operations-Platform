import { SupRoutingConditionService } from "../../../services/core-engine/src/support/services/SupRoutingConditionService";
import { SupRoutingConditionValidator } from "../../../packages/types/src/domains/support/SupRoutingCondition";

describe("SupRoutingCondition Service & Validation Suite", () => {
  const service = new SupRoutingConditionService();

  test("creates a valid SupRoutingCondition record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupRoutingCondition",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupRoutingConditionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
