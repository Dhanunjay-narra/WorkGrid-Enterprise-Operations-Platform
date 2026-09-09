import { HrDepartmentsTransactionService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsTransactionService";
import { HrDepartmentsTransactionValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsTransaction";
import { HrDepartmentsTransactionStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsTransactionStateMachine";

describe("HrDepartmentsTransaction Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsTransactionService();
  const sm = new HrDepartmentsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsTransaction Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
