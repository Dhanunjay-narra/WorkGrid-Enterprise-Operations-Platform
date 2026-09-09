import { ObsProbesConfigService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesConfigService";
import { ObsProbesConfigValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesConfig";
import { ObsProbesConfigStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesConfigStateMachine";

describe("ObsProbesConfig Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesConfigService();
  const sm = new ObsProbesConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesConfig Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
