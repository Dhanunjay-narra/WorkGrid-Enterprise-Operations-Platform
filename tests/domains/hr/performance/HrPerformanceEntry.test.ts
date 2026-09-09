import { HrPerformanceEntryService } from "../../../services/core-engine/src/hr/performance/services/HrPerformanceEntryService";
import { HrPerformanceEntryValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformanceEntry";
import { HrPerformanceEntryStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformanceEntryStateMachine";

describe("HrPerformanceEntry Comprehensive Domain Test Suite", () => {
  const service = new HrPerformanceEntryService();
  const sm = new HrPerformanceEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformanceEntry Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformanceEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
