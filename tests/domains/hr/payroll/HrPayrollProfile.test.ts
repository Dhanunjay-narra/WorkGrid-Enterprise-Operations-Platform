import { HrPayrollProfileService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollProfileService";
import { HrPayrollProfileValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollProfile";
import { HrPayrollProfileStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollProfileStateMachine";

describe("HrPayrollProfile Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollProfileService();
  const sm = new HrPayrollProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollProfile Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
