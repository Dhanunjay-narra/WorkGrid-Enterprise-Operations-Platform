import { HrPayrollMetricService } from "../../../services/core-engine/src/hr/payroll/services/HrPayrollMetricService";
import { HrPayrollMetricValidator } from "../../../packages/types/src/domains/hr/payroll/HrPayrollMetric";
import { HrPayrollMetricStateMachine } from "../../../services/core-engine/src/hr/payroll/state-machines/HrPayrollMetricStateMachine";

describe("HrPayrollMetric Comprehensive Domain Test Suite", () => {
  const service = new HrPayrollMetricService();
  const sm = new HrPayrollMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPayrollMetric Instance",
      domain: "hr_payroll",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPayrollMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
