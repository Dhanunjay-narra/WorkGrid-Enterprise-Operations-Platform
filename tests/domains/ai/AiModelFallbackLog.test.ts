import { AiModelFallbackLogService } from "../../../services/core-engine/src/ai/services/AiModelFallbackLogService";
import { AiModelFallbackLogValidator } from "../../../packages/types/src/domains/ai/AiModelFallbackLog";

describe("AiModelFallbackLog Service & Validation Suite", () => {
  const service = new AiModelFallbackLogService();

  test("creates a valid AiModelFallbackLog record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiModelFallbackLog",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiModelFallbackLogValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
