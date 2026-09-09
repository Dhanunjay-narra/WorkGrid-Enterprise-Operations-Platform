import { AiEmbeddingsEntryService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsEntryService";
import { AiEmbeddingsEntryValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsEntry";
import { AiEmbeddingsEntryStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsEntryStateMachine";

describe("AiEmbeddingsEntry Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsEntryService();
  const sm = new AiEmbeddingsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsEntry Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
