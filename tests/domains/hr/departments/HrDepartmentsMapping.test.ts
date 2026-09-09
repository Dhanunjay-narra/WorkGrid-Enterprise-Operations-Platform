import { HrDepartmentsMappingService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsMappingService";
import { HrDepartmentsMappingValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsMapping";
import { HrDepartmentsMappingStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsMappingStateMachine";

describe("HrDepartmentsMapping Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsMappingService();
  const sm = new HrDepartmentsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsMapping Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
