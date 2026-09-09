import { AiEmbeddingsRecordService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsRecordService";
import { AiEmbeddingsRecordValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsRecord";
import { AiEmbeddingsRecordStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsRecordStateMachine";

describe("AiEmbeddingsRecord Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsRecordService();
  const sm = new AiEmbeddingsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsRecord Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
