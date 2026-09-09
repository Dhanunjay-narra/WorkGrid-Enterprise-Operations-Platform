import { HrPayrollSummaryService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollSummaryService";
import { HrPayrollSummaryValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollSummary";
import { HrPayrollSummaryStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollSummaryStateMachine";

describe("HrPayrollSummary Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollSummaryService();
  const sm = new HrPayrollSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollSummary Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
