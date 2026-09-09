import { SupportQueuesAuditLogService } from "../../../services/core-engine/src/support/queues/services/SupportQueuesAuditLogService";
import { SupportQueuesAuditLogValidator } from "../../../packages/types/src/domains/support/queues/SupportQueuesAuditLog";
import { SupportQueuesAuditLogStateMachine } from "../../../services/core-engine/src/support/queues/state-machines/SupportQueuesAuditLogStateMachine";

describe("SupportQueuesAuditLog Comprehensive Domain Test Suite", () => {
  const service = new SupportQueuesAuditLogService();
  const sm = new SupportQueuesAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportQueuesAuditLog Instance",
      domain: "support_queues",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportQueuesAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
