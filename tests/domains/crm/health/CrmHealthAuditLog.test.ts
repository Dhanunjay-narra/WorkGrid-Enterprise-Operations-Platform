import { CrmHealthAuditLogService } from "../../../services/core-engine/src/crm/health/services/CrmHealthAuditLogService";
import { CrmHealthAuditLogValidator } from "../../../packages/types/src/domains/crm/health/CrmHealthAuditLog";
import { CrmHealthAuditLogStateMachine } from "../../../services/core-engine/src/crm/health/state-machines/CrmHealthAuditLogStateMachine";

describe("CrmHealthAuditLog Comprehensive Domain Test Suite", () => {
  const service = new CrmHealthAuditLogService();
  const sm = new CrmHealthAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "CrmHealthAuditLog Instance",
      domain: "crm_health",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = CrmHealthAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
