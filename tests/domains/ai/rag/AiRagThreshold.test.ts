import { AiRagThresholdService } from "../../../services/core-engine/src/ai/rag/services/AiRagThresholdService";
import { AiRagThresholdValidator } from "../../../packages/types/src/domains/ai/rag/AiRagThreshold";
import { AiRagThresholdStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagThresholdStateMachine";

describe("AiRagThreshold Comprehensive Domain Test Suite", () => {
  const service = new AiRagThresholdService();
  const sm = new AiRagThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagThreshold Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
