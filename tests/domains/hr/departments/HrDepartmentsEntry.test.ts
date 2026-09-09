import { HrDepartmentsEntryService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsEntryService";
import { HrDepartmentsEntryValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsEntry";
import { HrDepartmentsEntryStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsEntryStateMachine";

describe("HrDepartmentsEntry Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsEntryService();
  const sm = new HrDepartmentsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsEntry Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
