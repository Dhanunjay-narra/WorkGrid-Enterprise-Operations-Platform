import { AiEvaluationsNodeService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsNodeService";
import { AiEvaluationsNodeValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsNode";
import { AiEvaluationsNodeStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsNodeStateMachine";

describe("AiEvaluationsNode Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsNodeService();
  const sm = new AiEvaluationsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsNode Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
