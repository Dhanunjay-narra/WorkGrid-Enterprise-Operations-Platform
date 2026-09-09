import { AiRagBatchService } from "../../../services/core-engine/src/ai/rag/services/AiRagBatchService";
import { AiRagBatchValidator } from "../../../packages/types/src/domains/ai/rag/AiRagBatch";
import { AiRagBatchStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagBatchStateMachine";

describe("AiRagBatch Comprehensive Domain Test Suite", () => {
  const service = new AiRagBatchService();
  const sm = new AiRagBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagBatch Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
