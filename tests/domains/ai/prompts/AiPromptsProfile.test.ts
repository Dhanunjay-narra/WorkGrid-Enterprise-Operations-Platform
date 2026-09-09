import { AiPromptsProfileService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsProfileService";
import { AiPromptsProfileValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsProfile";
import { AiPromptsProfileStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsProfileStateMachine";

describe("AiPromptsProfile Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsProfileService();
  const sm = new AiPromptsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsProfile Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
