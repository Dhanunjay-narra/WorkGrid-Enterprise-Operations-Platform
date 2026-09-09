import { ObsTracingConfigService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingConfigService";
import { ObsTracingConfigValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingConfig";
import { ObsTracingConfigStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingConfigStateMachine";

describe("ObsTracingConfig Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingConfigService();
  const sm = new ObsTracingConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingConfig Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
