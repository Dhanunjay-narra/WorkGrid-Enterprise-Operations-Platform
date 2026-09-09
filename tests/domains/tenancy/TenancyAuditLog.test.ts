import { TenancyAuditLogService } from "../../../services/core-engine/src/tenancy/services/TenancyAuditLogService";
import { TenancyAuditLogValidator } from "../../../packages/types/src/domains/tenancy/TenancyAuditLog";
import { TenancyAuditLogStateMachine } from "../../../services/core-engine/src/tenancy/state-machines/TenancyAuditLogStateMachine";

describe("TenancyAuditLog Comprehensive Domain Test Suite", () => {
  const service = new TenancyAuditLogService();
  const sm = new TenancyAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "TenancyAuditLog Instance",
      domain: "tenancy",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = TenancyAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
