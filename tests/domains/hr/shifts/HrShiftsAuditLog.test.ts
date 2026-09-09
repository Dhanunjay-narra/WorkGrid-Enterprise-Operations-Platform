import { HrShiftsAuditLogService } from "../../../services/core-engine/src/hr/shifts/services/HrShiftsAuditLogService";
import { HrShiftsAuditLogValidator } from "../../../packages/types/src/domains/hr/shifts/HrShiftsAuditLog";
import { HrShiftsAuditLogStateMachine } from "../../../services/core-engine/src/hr/shifts/state-machines/HrShiftsAuditLogStateMachine";

describe("HrShiftsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new HrShiftsAuditLogService();
  const sm = new HrShiftsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrShiftsAuditLog Instance",
      domain: "hr_shifts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrShiftsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
