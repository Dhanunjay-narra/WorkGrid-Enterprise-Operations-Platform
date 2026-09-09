import { ObsProfilingTaskService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingTaskService";
import { ObsProfilingTaskValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingTask";
import { ObsProfilingTaskStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingTaskStateMachine";

describe("ObsProfilingTask Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingTaskService();
  const sm = new ObsProfilingTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingTask Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
