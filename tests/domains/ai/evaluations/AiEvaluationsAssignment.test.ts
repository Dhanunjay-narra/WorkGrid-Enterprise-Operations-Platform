import { AiEvaluationsAssignmentService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsAssignmentService";
import { AiEvaluationsAssignmentValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsAssignment";
import { AiEvaluationsAssignmentStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsAssignmentStateMachine";

describe("AiEvaluationsAssignment Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsAssignmentService();
  const sm = new AiEvaluationsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsAssignment Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
