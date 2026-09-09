import { AiEmbeddingsAssignmentService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsAssignmentService";
import { AiEmbeddingsAssignmentValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsAssignment";
import { AiEmbeddingsAssignmentStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsAssignmentStateMachine";

describe("AiEmbeddingsAssignment Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsAssignmentService();
  const sm = new AiEmbeddingsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsAssignment Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
