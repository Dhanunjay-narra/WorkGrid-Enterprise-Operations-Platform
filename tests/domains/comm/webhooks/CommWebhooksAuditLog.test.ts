import { CommWebhooksAuditLogService } from "../../../services/core-engine/src/comm/webhooks/services/CommWebhooksAuditLogService";
import { CommWebhooksAuditLogValidator } from "../../../packages/types/src/domains/comm/webhooks/CommWebhooksAuditLog";
import { CommWebhooksAuditLogStateMachine } from "../../../services/core-engine/src/comm/webhooks/state-machines/CommWebhooksAuditLogStateMachine";

describe("CommWebhooksAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CommWebhooksAuditLogService();
  const sm = new CommWebhooksAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CommWebhooksAuditLog Instance",
      domain: "comm_webhooks",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CommWebhooksAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
