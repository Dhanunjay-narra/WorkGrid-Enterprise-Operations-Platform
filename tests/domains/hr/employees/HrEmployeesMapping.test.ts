import { HrEmployeesMappingService } from "../../../services/core-engine/src/hr/employees/services/HrEmployeesMappingService";
import { HrEmployeesMappingValidator } from "../../../packages/types/src/domains/hr/employees/HrEmployeesMapping";
import { HrEmployeesMappingStateMachine } from "../../../services/core-engine/src/hr/employees/state-machines/HrEmployeesMappingStateMachine";

describe("HrEmployeesMapping Comprehensive Domain Test Suite", () => {
  const service = new HrEmployeesMappingService();
  const sm = new HrEmployeesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrEmployeesMapping Instance",
      domain: "hr_employees",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrEmployeesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
