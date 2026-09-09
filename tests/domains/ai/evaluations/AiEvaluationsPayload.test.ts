import { AiEvaluationsPayloadService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsPayloadService";
import { AiEvaluationsPayloadValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsPayload";
import { AiEvaluationsPayloadStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsPayloadStateMachine";

describe("AiEvaluationsPayload Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsPayloadService();
  const sm = new AiEvaluationsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsPayload Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
