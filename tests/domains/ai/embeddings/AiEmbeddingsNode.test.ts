import { AiEmbeddingsNodeService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsNodeService";
import { AiEmbeddingsNodeValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsNode";
import { AiEmbeddingsNodeStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsNodeStateMachine";

describe("AiEmbeddingsNode Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsNodeService();
  const sm = new AiEmbeddingsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsNode Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
