import { IdentityAuditLogService } from "../../../services/core-engine/src/identity/services/IdentityAuditLogService";
import { IdentityAuditLogValidator } from "../../../packages/types/src/domains/identity/IdentityAuditLog";
import { IdentityAuditLogStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentityAuditLogStateMachine";

describe("IdentityAuditLog Comprehensive Domain Test Suite", () => {
  const service = new IdentityAuditLogService();
  const sm = new IdentityAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentityAuditLog Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentityAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
