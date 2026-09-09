import { AiEvaluationsSummaryService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsSummaryService";
import { AiEvaluationsSummaryValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsSummary";
import { AiEvaluationsSummaryStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsSummaryStateMachine";

describe("AiEvaluationsSummary Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsSummaryService();
  const sm = new AiEvaluationsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsSummary Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
