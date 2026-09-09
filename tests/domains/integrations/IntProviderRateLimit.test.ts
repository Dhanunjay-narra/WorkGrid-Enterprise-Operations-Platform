import { IntProviderRateLimitService } from "../../../services/core-engine/src/integrations/services/IntProviderRateLimitService";
import { IntProviderRateLimitValidator } from "../../../packages/types/src/domains/integrations/IntProviderRateLimit";

describe("IntProviderRateLimit Service & Validation Suite", () => {
  const service = new IntProviderRateLimitService();

  test("creates a valid IntProviderRateLimit record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntProviderRateLimit",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntProviderRateLimitValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
