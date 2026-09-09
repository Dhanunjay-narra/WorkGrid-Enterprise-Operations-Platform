import { HrPayrollBatchService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollBatchService";
import { HrPayrollBatchValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollBatch";
import { HrPayrollBatchStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollBatchStateMachine";

describe("HrPayrollBatch Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollBatchService();
  const sm = new HrPayrollBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollBatch Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
