import { SecRateLimitCounterService } from "../../../services/core-engine/src/security/services/SecRateLimitCounterService";
import { SecRateLimitCounterValidator } from "../../../packages/types/src/domains/security/SecRateLimitCounter";

describe("SecRateLimitCounter Service & Validation Suite", () => {
  const service = new SecRateLimitCounterService();

  test("creates a valid SecRateLimitCounter record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample SecRateLimitCounter",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = SecRateLimitCounterValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
