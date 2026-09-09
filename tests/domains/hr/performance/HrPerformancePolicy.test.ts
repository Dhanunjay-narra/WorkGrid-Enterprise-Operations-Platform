import { HrPerformancePolicyService } from "../../../services/core-engine/src/hr/performance/services/HrPerformancePolicyService";
import { HrPerformancePolicyValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformancePolicy";
import { HrPerformancePolicyStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformancePolicyStateMachine";

describe("HrPerformancePolicy Comprehensive Domain Test Suite", () => {
  const service = new HrPerformancePolicyService();
  const sm = new HrPerformancePolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformancePolicy Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformancePolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
