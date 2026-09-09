import { HrPerformanceBatchService } from "../../../services/core-engine/src/hr/performance/services/HrPerformanceBatchService";
import { HrPerformanceBatchValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformanceBatch";
import { HrPerformanceBatchStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformanceBatchStateMachine";

describe("HrPerformanceBatch Comprehensive Domain Test Suite", () => {
  const service = new HrPerformanceBatchService();
  const sm = new HrPerformanceBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformanceBatch Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformanceBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
