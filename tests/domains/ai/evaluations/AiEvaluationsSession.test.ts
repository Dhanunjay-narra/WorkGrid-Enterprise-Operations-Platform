import { AiEvaluationsSessionService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsSessionService";
import { AiEvaluationsSessionValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsSession";
import { AiEvaluationsSessionStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsSessionStateMachine";

describe("AiEvaluationsSession Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsSessionService();
  const sm = new AiEvaluationsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsSession Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
