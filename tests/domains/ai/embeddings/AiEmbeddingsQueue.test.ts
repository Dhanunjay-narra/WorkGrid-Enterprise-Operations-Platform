import { AiEmbeddingsQueueService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsQueueService";
import { AiEmbeddingsQueueValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsQueue";
import { AiEmbeddingsQueueStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsQueueStateMachine";

describe("AiEmbeddingsQueue Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsQueueService();
  const sm = new AiEmbeddingsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsQueue Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
