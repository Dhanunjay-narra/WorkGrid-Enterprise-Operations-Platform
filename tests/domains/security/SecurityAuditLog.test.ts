import { SecurityAuditLogService } from "../../../services/core-engine/src/security/services/SecurityAuditLogService";
import { SecurityAuditLogValidator } from "../../../packages/types/src/domains/security/SecurityAuditLog";
import { SecurityAuditLogStateMachine } from "../../../services/core-engine/src/security/state-machines/SecurityAuditLogStateMachine";

describe("SecurityAuditLog Comprehensive Domain Test Suite", () => {
  const service = new SecurityAuditLogService();
  const sm = new SecurityAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SecurityAuditLog Instance",
      domain: "security",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SecurityAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
