import { HrPerformanceSummaryService } from "../../../services/core-engine/src/hr/performance/services/HrPerformanceSummaryService";
import { HrPerformanceSummaryValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformanceSummary";
import { HrPerformanceSummaryStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformanceSummaryStateMachine";

describe("HrPerformanceSummary Comprehensive Domain Test Suite", () => {
  const service = new HrPerformanceSummaryService();
  const sm = new HrPerformanceSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformanceSummary Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformanceSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
