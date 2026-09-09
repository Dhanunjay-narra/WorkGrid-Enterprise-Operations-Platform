import { AiEmbeddingsConfigService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsConfigService";
import { AiEmbeddingsConfigValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsConfig";
import { AiEmbeddingsConfigStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsConfigStateMachine";

describe("AiEmbeddingsConfig Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsConfigService();
  const sm = new AiEmbeddingsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsConfig Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
