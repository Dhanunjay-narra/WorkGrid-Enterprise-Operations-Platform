import { AiPromptsItemService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsItemService";
import { AiPromptsItemValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsItem";
import { AiPromptsItemStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsItemStateMachine";

describe("AiPromptsItem Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsItemService();
  const sm = new AiPromptsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsItem Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
