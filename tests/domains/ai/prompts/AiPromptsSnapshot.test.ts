import { AiPromptsSnapshotService } from "../../../services/core-engine/src/ai/prompts/services/AiPromptsSnapshotService";
import { AiPromptsSnapshotValidator } from "../../../packages/types/src/domains/ai/prompts/AiPromptsSnapshot";
import { AiPromptsSnapshotStateMachine } from "../../../services/core-engine/src/ai/prompts/state-machines/AiPromptsSnapshotStateMachine";

describe("AiPromptsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new AiPromptsSnapshotService();
  const sm = new AiPromptsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiPromptsSnapshot Instance",
      domain: "ai_prompts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiPromptsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
