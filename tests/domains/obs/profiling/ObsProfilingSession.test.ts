import { ObsProfilingSessionService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingSessionService";
import { ObsProfilingSessionValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingSession";
import { ObsProfilingSessionStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingSessionStateMachine";

describe("ObsProfilingSession Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingSessionService();
  const sm = new ObsProfilingSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingSession Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
