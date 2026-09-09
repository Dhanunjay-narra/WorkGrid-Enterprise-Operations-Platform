import { AiMemoryTransactionService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryTransactionService";
import { AiMemoryTransactionValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryTransaction";
import { AiMemoryTransactionStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryTransactionStateMachine";

describe("AiMemoryTransaction Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryTransactionService();
  const sm = new AiMemoryTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryTransaction Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
