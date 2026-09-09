import { AiPromptsQueueService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsQueueService";
import { AiPromptsQueueValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsQueue";
import { AiPromptsQueueStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsQueueStateMachine";

describe("AiPromptsQueue Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsQueueService();
  const sm = new AiPromptsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsQueue Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
