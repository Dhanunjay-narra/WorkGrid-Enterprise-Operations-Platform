import { HrEmployeesThresholdService } from "../../../services/core-engine/src/hr/employees/services/HrEmployeesThresholdService";
import { HrEmployeesThresholdValidator } from "../../../packages/types/src/domains/hr/employees/HrEmployeesThreshold";
import { HrEmployeesThresholdStateMachine } from "../../../services/core-engine/src/hr/employees/state-machines/HrEmployeesThresholdStateMachine";

describe("HrEmployeesThreshold Comprehensive Domain Test Suite", () => {
  const service = new HrEmployeesThresholdService();
  const sm = new HrEmployeesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrEmployeesThreshold Instance",
      domain: "hr_employees",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrEmployeesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
