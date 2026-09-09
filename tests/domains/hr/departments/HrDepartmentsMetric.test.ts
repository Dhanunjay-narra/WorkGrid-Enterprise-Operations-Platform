import { HrDepartmentsMetricService } from "../../../services/core-engine/src/hr/departments/services/HrDepartmentsMetricService";
import { HrDepartmentsMetricValidator } from "../../../packages/types/src/domains/hr/departments/HrDepartmentsMetric";
import { HrDepartmentsMetricStateMachine } from "../../../services/core-engine/src/hr/departments/state-machines/HrDepartmentsMetricStateMachine";

describe("HrDepartmentsMetric Comprehensive Domain Test Suite", () => {
  const service = new HrDepartmentsMetricService();
  const sm = new HrDepartmentsMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrDepartmentsMetric Instance",
      domain: "hr_departments",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrDepartmentsMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
