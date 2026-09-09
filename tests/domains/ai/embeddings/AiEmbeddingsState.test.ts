import { AiEmbeddingsStateService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsStateService";
import { AiEmbeddingsStateValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsState";
import { AiEmbeddingsStateStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsStateStateMachine";

describe("AiEmbeddingsState Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsStateService();
  const sm = new AiEmbeddingsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsState Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
