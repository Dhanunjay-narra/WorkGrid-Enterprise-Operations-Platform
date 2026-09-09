import { AiPromptsPayloadService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsPayloadService";
import { AiPromptsPayloadValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsPayload";
import { AiPromptsPayloadStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsPayloadStateMachine";

describe("AiPromptsPayload Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsPayloadService();
  const sm = new AiPromptsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsPayload Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
