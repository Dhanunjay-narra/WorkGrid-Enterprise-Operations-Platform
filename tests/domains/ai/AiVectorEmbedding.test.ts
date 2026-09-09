import { AiVectorEmbeddingService } from "../../../services/core-engine/src/ai/services/AiVectorEmbeddingService";
import { AiVectorEmbeddingValidator } from "../../../packages/types/src/domains/ai/AiVectorEmbedding";

describe("AiVectorEmbedding Service & Validation Suite", () => {
  const service = new AiVectorEmbeddingService();

  test("creates a valid AiVectorEmbedding record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiVectorEmbedding",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiVectorEmbeddingValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
