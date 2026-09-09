import { ObsProfilingNodeService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingNodeService";
import { ObsProfilingNodeValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingNode";
import { ObsProfilingNodeStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingNodeStateMachine";

describe("ObsProfilingNode Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingNodeService();
  const sm = new ObsProfilingNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingNode Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
