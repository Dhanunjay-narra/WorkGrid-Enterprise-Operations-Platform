import { AiEmbeddingsSessionService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsSessionService";
import { AiEmbeddingsSessionValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsSession";
import { AiEmbeddingsSessionStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsSessionStateMachine";

describe("AiEmbeddingsSession Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsSessionService();
  const sm = new AiEmbeddingsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsSession Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
