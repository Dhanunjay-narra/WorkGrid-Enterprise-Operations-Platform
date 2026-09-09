import { AiPromptsMetricService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsMetricService";
import { AiPromptsMetricValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsMetric";
import { AiPromptsMetricStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsMetricStateMachine";

describe("AiPromptsMetric Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsMetricService();
  const sm = new AiPromptsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsMetric Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
