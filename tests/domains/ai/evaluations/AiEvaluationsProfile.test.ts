import { AiEvaluationsProfileService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsProfileService";
import { AiEvaluationsProfileValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsProfile";
import { AiEvaluationsProfileStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsProfileStateMachine";

describe("AiEvaluationsProfile Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsProfileService();
  const sm = new AiEvaluationsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsProfile Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
