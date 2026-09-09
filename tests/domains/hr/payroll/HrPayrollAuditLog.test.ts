import { HrPayrollAuditLogService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollAuditLogService";
import { HrPayrollAuditLogValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollAuditLog";
import { HrPayrollAuditLogStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollAuditLogStateMachine";

describe("HrPayrollAuditLog Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollAuditLogService();
  const sm = new HrPayrollAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollAuditLog Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
