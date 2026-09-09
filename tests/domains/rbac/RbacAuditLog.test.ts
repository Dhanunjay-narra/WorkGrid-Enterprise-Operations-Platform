import { RbacAuditLogService } from "../../../services/core-engine/src/rbac/services/RbacAuditLogService";
import { RbacAuditLogValidator } from "../../../packages/types/src/domains/rbac/RbacAuditLog";
import { RbacAuditLogStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacAuditLogStateMachine";

describe("RbacAuditLog Comprehensive Domain Test Suite", () => {
  const service = new RbacAuditLogService();
  const sm = new RbacAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacAuditLog Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
