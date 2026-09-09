import { AiMemoryConfigService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryConfigService";
import { AiMemoryConfigValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryConfig";
import { AiMemoryConfigStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryConfigStateMachine";

describe("AiMemoryConfig Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryConfigService();
  const sm = new AiMemoryConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryConfig Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
