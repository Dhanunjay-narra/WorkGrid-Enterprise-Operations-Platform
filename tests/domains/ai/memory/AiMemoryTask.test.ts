import { AiMemoryTaskService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryTaskService";
import { AiMemoryTaskValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryTask";
import { AiMemoryTaskStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryTaskStateMachine";

describe("AiMemoryTask Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryTaskService();
  const sm = new AiMemoryTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryTask Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
