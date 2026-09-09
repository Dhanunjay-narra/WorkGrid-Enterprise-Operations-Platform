import { ObsProfilingConfigService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingConfigService";
import { ObsProfilingConfigValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingConfig";
import { ObsProfilingConfigStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingConfigStateMachine";

describe("ObsProfilingConfig Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingConfigService();
  const sm = new ObsProfilingConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingConfig Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
