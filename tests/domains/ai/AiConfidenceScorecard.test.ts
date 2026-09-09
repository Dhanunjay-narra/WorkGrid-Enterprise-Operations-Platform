import { AiConfidenceScorecardService } from "../../../services/core-engine/src/ai/services/AiConfidenceScorecardService";
import { AiConfidenceScorecardValidator } from "../../../packages/types/src/domains/ai/AiConfidenceScorecard";

describe("AiConfidenceScorecard Service & Validation Suite", () => {
  const service = new AiConfidenceScorecardService();

  test("creates a valid AiConfidenceScorecard record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiConfidenceScorecard",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiConfidenceScorecardValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
