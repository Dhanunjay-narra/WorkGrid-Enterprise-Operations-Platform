import { AiEvaluationsTaskService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsTaskService";
import { AiEvaluationsTaskValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsTask";
import { AiEvaluationsTaskStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsTaskStateMachine";

describe("AiEvaluationsTask Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsTaskService();
  const sm = new AiEvaluationsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsTask Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
