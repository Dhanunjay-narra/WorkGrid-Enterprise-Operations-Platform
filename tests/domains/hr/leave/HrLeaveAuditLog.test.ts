import { HrLeaveAuditLogService } from "../../../services/core-engine/src/hr/leave/services/HrLeaveAuditLogService";
import { HrLeaveAuditLogValidator } from "../../../packages/types/src/domains/hr/leave/HrLeaveAuditLog";
import { HrLeaveAuditLogStateMachine } from "../../../services/core-engine/src/hr/leave/state-machines/HrLeaveAuditLogStateMachine";

describe("HrLeaveAuditLog Comprehensive Domain Test Suite", () => {
  const service = new HrLeaveAuditLogService();
  const sm = new HrLeaveAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrLeaveAuditLog Instance",
      domain: "hr_leave",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrLeaveAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
