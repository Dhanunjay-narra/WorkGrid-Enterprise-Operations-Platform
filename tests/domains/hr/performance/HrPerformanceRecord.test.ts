import { HrPerformanceRecordService } from "../../../services/core-engine/src/hr/performance/services/HrPerformanceRecordService";
import { HrPerformanceRecordValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformanceRecord";
import { HrPerformanceRecordStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformanceRecordStateMachine";

describe("HrPerformanceRecord Comprehensive Domain Test Suite", () => {
  const service = new HrPerformanceRecordService();
  const sm = new HrPerformanceRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformanceRecord Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformanceRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
