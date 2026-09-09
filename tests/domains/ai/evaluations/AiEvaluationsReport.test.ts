import { AiEvaluationsReportService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsReportService";
import { AiEvaluationsReportValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsReport";
import { AiEvaluationsReportStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsReportStateMachine";

describe("AiEvaluationsReport Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsReportService();
  const sm = new AiEvaluationsReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsReport Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
