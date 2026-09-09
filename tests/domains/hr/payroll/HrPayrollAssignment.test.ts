import { HrPayrollAssignmentService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollAssignmentService";
import { HrPayrollAssignmentValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollAssignment";
import { HrPayrollAssignmentStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollAssignmentStateMachine";

describe("HrPayrollAssignment Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollAssignmentService();
  const sm = new HrPayrollAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollAssignment Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
