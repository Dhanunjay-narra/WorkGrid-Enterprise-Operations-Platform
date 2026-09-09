import { AiEmbeddingsAuditLogService } from "../../../services/core-engine/src/ai/embeddings/services/AiEmbeddingsAuditLogService";
import { AiEmbeddingsAuditLogValidator } from "../../../packages/types/src/domains/ai/embeddings/AiEmbeddingsAuditLog";
import { AiEmbeddingsAuditLogStateMachine } from "../../../services/core-engine/src/ai/embeddings/state-machines/AiEmbeddingsAuditLogStateMachine";

describe("AiEmbeddingsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new AiEmbeddingsAuditLogService();
  const sm = new AiEmbeddingsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEmbeddingsAuditLog Instance",
      domain: "ai_embeddings",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEmbeddingsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
