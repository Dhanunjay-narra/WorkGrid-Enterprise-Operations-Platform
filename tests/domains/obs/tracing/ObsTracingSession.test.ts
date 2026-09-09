import { ObsTracingSessionService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingSessionService";
import { ObsTracingSessionValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingSession";
import { ObsTracingSessionStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingSessionStateMachine";

describe("ObsTracingSession Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingSessionService();
  const sm = new ObsTracingSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingSession Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
