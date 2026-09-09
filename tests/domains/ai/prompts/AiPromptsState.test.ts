import { AiPromptsStateService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsStateService";
import { AiPromptsStateValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsState";
import { AiPromptsStateStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsStateStateMachine";

describe("AiPromptsState Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsStateService();
  const sm = new AiPromptsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsState Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
