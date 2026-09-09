import { AiEvaluationsConfigService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsConfigService";
import { AiEvaluationsConfigValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsConfig";
import { AiEvaluationsConfigStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsConfigStateMachine";

describe("AiEvaluationsConfig Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsConfigService();
  const sm = new AiEvaluationsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsConfig Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
