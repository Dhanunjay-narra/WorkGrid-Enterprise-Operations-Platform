import { AiMemoryItemService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryItemService";
import { AiMemoryItemValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryItem";
import { AiMemoryItemStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryItemStateMachine";

describe("AiMemoryItem Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryItemService();
  const sm = new AiMemoryItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryItem Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
