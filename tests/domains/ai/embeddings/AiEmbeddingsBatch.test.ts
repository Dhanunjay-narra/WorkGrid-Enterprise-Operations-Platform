import { AiEmbeddingsBatchService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsBatchService";
import { AiEmbeddingsBatchValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsBatch";
import { AiEmbeddingsBatchStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsBatchStateMachine";

describe("AiEmbeddingsBatch Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsBatchService();
  const sm = new AiEmbeddingsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsBatch Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
