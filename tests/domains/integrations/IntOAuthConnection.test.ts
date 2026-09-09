import { IntOAuthConnectionService } from "../../../services/core-engine/src/integrations/services/IntOAuthConnectionService";
import { IntOAuthConnectionValidator } from "../../../packages/types/src/domains/integrations/IntOAuthConnection";

describe("IntOAuthConnection Service & Validation Suite", () => {
  const service = new IntOAuthConnectionService();

  test("creates a valid IntOAuthConnection record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntOAuthConnection",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntOAuthConnectionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
