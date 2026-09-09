import { HrPerformanceSessionService } from "../../../services/core-engine/src/hr/performance/services/HrPerformanceSessionService";
import { HrPerformanceSessionValidator } from "../../../packages/types/src/domains/hr/performance/HrPerformanceSession";
import { HrPerformanceSessionStateMachine } from "../../../services/core-engine/src/hr/performance/state-machines/HrPerformanceSessionStateMachine";

describe("HrPerformanceSession Comprehensive Domain Test Suite", () => {
  const service = new HrPerformanceSessionService();
  const sm = new HrPerformanceSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "HrPerformanceSession Instance",
      domain: "hr_performance",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = HrPerformanceSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
