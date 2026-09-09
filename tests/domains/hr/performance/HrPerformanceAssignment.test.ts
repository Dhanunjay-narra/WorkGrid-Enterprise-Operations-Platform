import { HrPerformanceAssignmentService } from "../../../services/core-engine/src/hr/performance/services/HrPerformanceAssignmentService";
import { HrPerformanceAssignmentValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformanceAssignment";
import { HrPerformanceAssignmentStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformanceAssignmentStateMachine";

describe("HrPerformanceAssignment Comprehensive Domain Test Suite", () => {
  const service = new HrPerformanceAssignmentService();
  const sm = new HrPerformanceAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformanceAssignment Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformanceAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
