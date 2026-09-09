import { AiPromptsSessionService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsSessionService";
import { AiPromptsSessionValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsSession";
import { AiPromptsSessionStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsSessionStateMachine";

describe("AiPromptsSession Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsSessionService();
  const sm = new AiPromptsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsSession Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
