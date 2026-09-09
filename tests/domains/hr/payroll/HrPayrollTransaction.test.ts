import { HrPayrollTransactionService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollTransactionService";
import { HrPayrollTransactionValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollTransaction";
import { HrPayrollTransactionStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollTransactionStateMachine";

describe("HrPayrollTransaction Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollTransactionService();
  const sm = new HrPayrollTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollTransaction Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
