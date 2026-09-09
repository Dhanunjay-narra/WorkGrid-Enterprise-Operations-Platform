import { AiEmbeddingsPayloadService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsPayloadService";
import { AiEmbeddingsPayloadValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsPayload";
import { AiEmbeddingsPayloadStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsPayloadStateMachine";

describe("AiEmbeddingsPayload Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsPayloadService();
  const sm = new AiEmbeddingsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsPayload Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
