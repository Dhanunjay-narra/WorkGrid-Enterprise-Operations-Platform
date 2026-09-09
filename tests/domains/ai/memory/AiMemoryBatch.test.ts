import { AiMemoryBatchService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryBatchService";
import { AiMemoryBatchValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryBatch";
import { AiMemoryBatchStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryBatchStateMachine";

describe("AiMemoryBatch Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryBatchService();
  const sm = new AiMemoryBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryBatch Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
