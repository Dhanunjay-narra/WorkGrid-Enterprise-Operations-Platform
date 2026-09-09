import { AiMemoryThresholdService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryThresholdService";
import { AiMemoryThresholdValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryThreshold";
import { AiMemoryThresholdStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryThresholdStateMachine";

describe("AiMemoryThreshold Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryThresholdService();
  const sm = new AiMemoryThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryThreshold Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
