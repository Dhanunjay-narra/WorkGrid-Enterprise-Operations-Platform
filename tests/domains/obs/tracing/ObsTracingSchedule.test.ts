import { ObsTracingScheduleService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingScheduleService";
import { ObsTracingScheduleValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingSchedule";
import { ObsTracingScheduleStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingScheduleStateMachine";

describe("ObsTracingSchedule Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingScheduleService();
  const sm = new ObsTracingScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingSchedule Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
