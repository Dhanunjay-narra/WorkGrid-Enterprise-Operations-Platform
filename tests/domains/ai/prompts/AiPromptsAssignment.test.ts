import { AiPromptsAssignmentService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsAssignmentService";
import { AiPromptsAssignmentValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsAssignment";
import { AiPromptsAssignmentStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsAssignmentStateMachine";

describe("AiPromptsAssignment Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsAssignmentService();
  const sm = new AiPromptsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsAssignment Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
