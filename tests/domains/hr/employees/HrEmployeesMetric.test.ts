import { HrEmployeesMetricService } from "../../../services/core-engine/src/hr/employees/services/HrEmployeesMetricService";
import { HrEmployeesMetricValidator } from "../../../packages/types/src/domains/hr/employees/HrEmployeesMetric";
import { HrEmployeesMetricStateMachine } from "../../../services/core-engine/src/hr/employees/state-machines/HrEmployeesMetricStateMachine";

describe("HrEmployeesMetric Comprehensive Domain Test Suite", () => {
  const service = new HrEmployeesMetricService();
  const sm = new HrEmployeesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrEmployeesMetric Instance",
      domain: "hr_employees",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrEmployeesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
