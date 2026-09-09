import { HrPayrollStateService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollStateService";
import { HrPayrollStateValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollState";
import { HrPayrollStateStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollStateStateMachine";

describe("HrPayrollState Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollStateService();
  const sm = new HrPayrollStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollState Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
