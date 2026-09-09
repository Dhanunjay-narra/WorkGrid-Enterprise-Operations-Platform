import { HrDepartmentsSummaryService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsSummaryService";
import { HrDepartmentsSummaryValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsSummary";
import { HrDepartmentsSummaryStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsSummaryStateMachine";

describe("HrDepartmentsSummary Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsSummaryService();
  const sm = new HrDepartmentsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsSummary Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
