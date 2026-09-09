import { AiPromptsRuleService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsRuleService";
import { AiPromptsRuleValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsRule";
import { AiPromptsRuleStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsRuleStateMachine";

describe("AiPromptsRule Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsRuleService();
  const sm = new AiPromptsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsRule Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
