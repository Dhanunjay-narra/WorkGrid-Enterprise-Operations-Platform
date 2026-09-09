import { AiRagTaskService } from "../../../services/core-engine/src/ai/rag/services/AiRagTaskService";
import { AiRagTaskValidator } from "../../../packages/types/src/domains/ai/rag/AiRagTask";
import { AiRagTaskStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagTaskStateMachine";

describe("AiRagTask Comprehensive Domain Test Suite", () => {
  const service = new AiRagTaskService();
  const sm = new AiRagTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagTask Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
