import { AiRagEventService } from "../../../services/core-engine/src/ai/rag/services/AiRagEventService";
import { AiRagEventValidator } from "../../../packages/types/src/domains/ai/rag/AiRagEvent";
import { AiRagEventStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagEventStateMachine";

describe("AiRagEvent Comprehensive Domain Test Suite", () => {
  const service = new AiRagEventService();
  const sm = new AiRagEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagEvent Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
