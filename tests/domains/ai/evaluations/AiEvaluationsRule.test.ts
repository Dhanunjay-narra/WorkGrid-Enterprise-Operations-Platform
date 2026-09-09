import { AiEvaluationsRuleService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsRuleService";
import { AiEvaluationsRuleValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsRule";
import { AiEvaluationsRuleStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsRuleStateMachine";

describe("AiEvaluationsRule Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsRuleService();
  const sm = new AiEvaluationsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsRule Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
