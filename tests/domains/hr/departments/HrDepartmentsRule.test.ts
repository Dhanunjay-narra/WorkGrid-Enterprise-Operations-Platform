import { HrDepartmentsRuleService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsRuleService";
import { HrDepartmentsRuleValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsRule";
import { HrDepartmentsRuleStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsRuleStateMachine";

describe("HrDepartmentsRule Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsRuleService();
  const sm = new HrDepartmentsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsRule Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
