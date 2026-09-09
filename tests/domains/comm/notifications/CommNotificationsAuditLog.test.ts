import { CommNotificationsAuditLogService } from "../../../services/core-engine/src/comm/notifications/services/CommNotificationsAuditLogService";
import { CommNotificationsAuditLogValidator } from "../../../packages/types/src/domains/comm/notifications/CommNotificationsAuditLog";
import { CommNotificationsAuditLogStateMachine } from "../../../services/core-engine/src/comm/notifications/state-machines/CommNotificationsAuditLogStateMachine";

describe("CommNotificationsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CommNotificationsAuditLogService();
  const sm = new CommNotificationsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommNotificationsAuditLog Instance",
      domain: "comm_notifications",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommNotificationsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
