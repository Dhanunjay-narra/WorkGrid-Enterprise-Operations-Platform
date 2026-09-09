import { IntAuthTokenPairService } from "../../../services/core-engine/src/integrations/services/IntAuthTokenPairService";
import { IntAuthTokenPairValidator } from "../../../packages/types/src/domains/integrations/IntAuthTokenPair";

describe("IntAuthTokenPair Service & Validation Suite", () => {
  const service = new IntAuthTokenPairService();

  test("creates a valid IntAuthTokenPair record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample IntAuthTokenPair",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = IntAuthTokenPairValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
