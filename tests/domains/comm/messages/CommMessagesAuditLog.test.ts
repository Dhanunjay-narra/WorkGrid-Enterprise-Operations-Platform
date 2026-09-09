import { CommMessagesAuditLogService } from "../../../services/core-engine/src/comm/messages/services/CommMessagesAuditLogService";
import { CommMessagesAuditLogValidator } from "../../../packages/types/src/domains/comm/messages/CommMessagesAuditLog";
import { CommMessagesAuditLogStateMachine } from "../../../services/core-engine/src/comm/messages/state-machines/CommMessagesAuditLogStateMachine";

describe("CommMessagesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CommMessagesAuditLogService();
  const sm = new CommMessagesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommMessagesAuditLog Instance",
      domain: "comm_messages",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommMessagesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
