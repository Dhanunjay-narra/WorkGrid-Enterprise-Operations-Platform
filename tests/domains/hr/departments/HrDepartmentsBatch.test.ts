import { HrDepartmentsBatchService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsBatchService";
import { HrDepartmentsBatchValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsBatch";
import { HrDepartmentsBatchStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsBatchStateMachine";

describe("HrDepartmentsBatch Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsBatchService();
  const sm = new HrDepartmentsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsBatch Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
