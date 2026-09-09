import { AiMemoryEventService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryEventService";
import { AiMemoryEventValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryEvent";
import { AiMemoryEventStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryEventStateMachine";

describe("AiMemoryEvent Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryEventService();
  const sm = new AiMemoryEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryEvent Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
