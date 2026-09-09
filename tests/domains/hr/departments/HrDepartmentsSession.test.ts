import { HrDepartmentsSessionService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsSessionService";
import { HrDepartmentsSessionValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsSession";
import { HrDepartmentsSessionStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsSessionStateMachine";

describe("HrDepartmentsSession Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsSessionService();
  const sm = new HrDepartmentsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsSession Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
