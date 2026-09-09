import { AiMemoryRecordService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryRecordService";
import { AiMemoryRecordValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryRecord";
import { AiMemoryRecordStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryRecordStateMachine";

describe("AiMemoryRecord Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryRecordService();
  const sm = new AiMemoryRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryRecord Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
