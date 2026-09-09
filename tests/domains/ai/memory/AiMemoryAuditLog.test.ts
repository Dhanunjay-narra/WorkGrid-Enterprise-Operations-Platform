import { AiMemoryAuditLogService } from "../../../services/core-engine/src/ai/memory/services/AiMemoryAuditLogService";
import { AiMemoryAuditLogValidator } from "../../../packages/types/src/domains/ai/memory/AiMemoryAuditLog";
import { AiMemoryAuditLogStateMachine } from "../../../services/core-engine/src/ai/memory/state-machines/AiMemoryAuditLogStateMachine";

describe("AiMemoryAuditLog Comprehensive Domain Test Suite", () => {
  const service = new AiMemoryAuditLogService();
  const sm = new AiMemoryAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AiMemoryAuditLog Instance",
      domain: "ai_memory",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AiMemoryAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
