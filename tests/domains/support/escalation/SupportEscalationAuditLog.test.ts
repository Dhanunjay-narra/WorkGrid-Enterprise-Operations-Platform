import { SupportEscalationAuditLogService } from "../../../services/core-engine/src/support/escalation/services/SupportEscalationAuditLogService";
import { SupportEscalationAuditLogValidator } from "../../../packages/types/src/domains/support/escalation/SupportEscalationAuditLog";
import { SupportEscalationAuditLogStateMachine } from "../../../services/core-engine/src/support/escalation/state-machines/SupportEscalationAuditLogStateMachine";

describe("SupportEscalationAuditLog Comprehensive Domain Test Suite", () => {
  const service = new SupportEscalationAuditLogService();
  const sm = new SupportEscalationAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportEscalationAuditLog Instance",
      domain: "support_escalation",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportEscalationAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
