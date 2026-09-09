import { AiMemorySummaryService } from "../../../services/core-engine/src/ai/memory/services/AiMemorySummaryService";
import { AiMemorySummaryValidator } from "../../../packages/types/src/domains/ai/memory/AiMemorySummary";
import { AiMemorySummaryStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemorySummaryStateMachine";

describe("AiMemorySummary Comprehensive Domain Test Suite", () => {
  const service = new AiMemorySummaryService();
  const sm = new AiMemorySummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemorySummary Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemorySummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
