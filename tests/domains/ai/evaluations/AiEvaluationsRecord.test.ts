import { AiEvaluationsRecordService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsRecordService";
import { AiEvaluationsRecordValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsRecord";
import { AiEvaluationsRecordStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsRecordStateMachine";

describe("AiEvaluationsRecord Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsRecordService();
  const sm = new AiEvaluationsRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsRecord Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
