import { AiEmbeddingsProfileService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsProfileService";
import { AiEmbeddingsProfileValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsProfile";
import { AiEmbeddingsProfileStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsProfileStateMachine";

describe("AiEmbeddingsProfile Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsProfileService();
  const sm = new AiEmbeddingsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsProfile Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
