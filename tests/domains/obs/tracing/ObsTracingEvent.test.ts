import { ObsTracingEventService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingEventService";
import { ObsTracingEventValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingEvent";
import { ObsTracingEventStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingEventStateMachine";

describe("ObsTracingEvent Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingEventService();
  const sm = new ObsTracingEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingEvent Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
