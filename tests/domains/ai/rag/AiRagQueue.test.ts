import { AiRagQueueService } from "../../../services/core-engine/src/ai/rag/services/AiRagQueueService";
import { AiRagQueueValidator } from "../../../packages/types/src/domains/ai/rag/AiRagQueue";
import { AiRagQueueStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagQueueStateMachine";

describe("AiRagQueue Comprehensive Domain Test Suite", () => {
  const service = new AiRagQueueService();
  const sm = new AiRagQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagQueue Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
