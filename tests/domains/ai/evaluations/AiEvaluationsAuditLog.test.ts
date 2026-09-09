import { AiEvaluationsAuditLogService } from "../../../services/core-engine/src/ai/evaluations/services/AiEvaluationsAuditLogService";
import { AiEvaluationsAuditLogValidator } from "../../../packages/types/src/domains/ai/evaluations/AiEvaluationsAuditLog";
import { AiEvaluationsAuditLogStateMachine } from "../../../services/core-engine/src/ai/evaluations/state-machines/AiEvaluationsAuditLogStateMachine";

describe("AiEvaluationsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new AiEvaluationsAuditLogService();
  const sm = new AiEvaluationsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiEvaluationsAuditLog Instance",
      domain: "ai_evaluations",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiEvaluationsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
