import { HrEmployeesBatchService } from "../../../services/core-engine/src/hr/employees/services/HrEmployeesBatchService";
import { HrEmployeesBatchValidator } from "../../../packages/types/src/domains/hr/employees/HrEmployeesBatch";
import { HrEmployeesBatchStateMachine } from "../../../services/core-engine/src/hr/employees/state-machines/HrEmployeesBatchStateMachine";

describe("HrEmployeesBatch Comprehensive Domain Test Suite", () => {
  const service = new HrEmployeesBatchService();
  const sm = new HrEmployeesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrEmployeesBatch Instance",
      domain: "hr_employees",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrEmployeesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
