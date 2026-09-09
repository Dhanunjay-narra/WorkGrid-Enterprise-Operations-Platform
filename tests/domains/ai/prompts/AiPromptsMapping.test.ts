import { AiPromptsMappingService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsMappingService";
import { AiPromptsMappingValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsMapping";
import { AiPromptsMappingStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsMappingStateMachine";

describe("AiPromptsMapping Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsMappingService();
  const sm = new AiPromptsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsMapping Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
