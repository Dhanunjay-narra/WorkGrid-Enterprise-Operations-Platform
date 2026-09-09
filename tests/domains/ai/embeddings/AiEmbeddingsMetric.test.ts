import { AiEmbeddingsMetricService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsMetricService";
import { AiEmbeddingsMetricValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsMetric";
import { AiEmbeddingsMetricStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsMetricStateMachine";

describe("AiEmbeddingsMetric Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsMetricService();
  const sm = new AiEmbeddingsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsMetric Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
