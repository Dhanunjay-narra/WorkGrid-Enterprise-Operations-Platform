import { HrDepartmentsPolicyService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsPolicyService";
import { HrDepartmentsPolicyValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsPolicy";
import { HrDepartmentsPolicyStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsPolicyStateMachine";

describe("HrDepartmentsPolicy Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsPolicyService();
  const sm = new HrDepartmentsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsPolicy Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
