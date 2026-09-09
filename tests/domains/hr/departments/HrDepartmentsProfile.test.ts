import { HrDepartmentsProfileService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsProfileService";
import { HrDepartmentsProfileValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsProfile";
import { HrDepartmentsProfileStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsProfileStateMachine";

describe("HrDepartmentsProfile Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsProfileService();
  const sm = new HrDepartmentsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsProfile Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
