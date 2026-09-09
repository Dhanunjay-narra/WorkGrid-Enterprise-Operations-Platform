import { HrPayrollScheduleService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollScheduleService";
import { HrPayrollScheduleValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollSchedule";
import { HrPayrollScheduleStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollScheduleStateMachine";

describe("HrPayrollSchedule Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollScheduleService();
  const sm = new HrPayrollScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollSchedule Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
