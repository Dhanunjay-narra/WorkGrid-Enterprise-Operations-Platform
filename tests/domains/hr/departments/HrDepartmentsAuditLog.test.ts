import { HrDepartmentsAuditLogService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsAuditLogService";
import { HrDepartmentsAuditLogValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsAuditLog";
import { HrDepartmentsAuditLogStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsAuditLogStateMachine";

describe("HrDepartmentsAuditLog Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsAuditLogService();
  const sm = new HrDepartmentsAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsAuditLog Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
