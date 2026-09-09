import { AiEvaluationsMetricService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsMetricService";
import { AiEvaluationsMetricValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsMetric";
import { AiEvaluationsMetricStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsMetricStateMachine";

describe("AiEvaluationsMetric Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsMetricService();
  const sm = new AiEvaluationsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsMetric Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
