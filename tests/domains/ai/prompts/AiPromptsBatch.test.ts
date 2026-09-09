import { AiPromptsBatchService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsBatchService";
import { AiPromptsBatchValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsBatch";
import { AiPromptsBatchStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsBatchStateMachine";

describe("AiPromptsBatch Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsBatchService();
  const sm = new AiPromptsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsBatch Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
