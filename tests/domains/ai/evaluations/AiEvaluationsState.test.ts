import { AiEvaluationsStateService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsStateService";
import { AiEvaluationsStateValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsState";
import { AiEvaluationsStateStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsStateStateMachine";

describe("AiEvaluationsState Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsStateService();
  const sm = new AiEvaluationsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsState Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
