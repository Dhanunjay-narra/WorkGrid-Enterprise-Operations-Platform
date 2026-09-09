import { AiEvaluationsItemService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsItemService";
import { AiEvaluationsItemValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsItem";
import { AiEvaluationsItemStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsItemStateMachine";

describe("AiEvaluationsItem Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsItemService();
  const sm = new AiEvaluationsItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsItem Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
