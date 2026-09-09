import { SupSlaPolicyService } from "../../../services/core-engine/src/support/services/SupSlaPolicyService";
import { SupSlaPolicyValidator } from "../../../packages/types/src/domains/support/SupSlaPolicy";

describe("SupSlaPolicy Service & Validation Suite", () => {
  const service = new SupSlaPolicyService();

  test("creates a valid SupSlaPolicy record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SupSlaPolicy",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SupSlaPolicyValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
