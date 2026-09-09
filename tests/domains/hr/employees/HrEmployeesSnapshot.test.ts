import { HrEmployeesSnapshotService } from "../../../services/core-engine/src/hr/employees/services/HrEmployeesSnapshotService";
import { HrEmployeesSnapshotValidator } from "../../../packages/types/src/domains/hr/employees/HrEmployeesSnapshot";
import { HrEmployeesSnapshotStateMachine } from "../../../services/core-engine/src/hr/employees/state-machines/HrEmployeesSnapshotStateMachine";

describe("HrEmployeesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new HrEmployeesSnapshotService();
  const sm = new HrEmployeesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrEmployeesSnapshot Instance",
      domain: "hr_employees",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrEmployeesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
