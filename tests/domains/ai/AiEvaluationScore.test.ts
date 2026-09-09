import { AiEvaluationScoreService } from "../../../services/core-engine/src/ai/services/AiEvaluationScoreService";
import { AiEvaluationScoreValidator } from "../../../packages/types/src/domains/ai/AiEvaluationScore";

describe("AiEvaluationScore Service & Validation Suite", () => {
  const service = new AiEvaluationScoreService();

  test("creates a valid AiEvaluationScore record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiEvaluationScore",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiEvaluationScoreValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
