import { AiRagAuditLogService } from "../../../services/core-engine/src/ai/rag/services/AiRagAuditLogService";
import { AiRagAuditLogValidator } from "../../../packages/types/src/domains/ai/rag/AiRagAuditLog";
import { AiRagAuditLogStateMachine } from "../../../services/core-engine/src/ai/rag/state-machines/AiRagAuditLogStateMachine";

describe("AiRagAuditLog Comprehensive Domain Test Suite", () => {
  const service = new AiRagAuditLogService();
  const sm = new AiRagAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiRagAuditLog Instance",
      domain: "ai_rag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiRagAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
