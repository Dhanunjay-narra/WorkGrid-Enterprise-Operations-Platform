import { ObsProbesThresholdService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesThresholdService";
import { ObsProbesThresholdValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesThreshold";
import { ObsProbesThresholdStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesThresholdStateMachine";

describe("ObsProbesThreshold Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesThresholdService();
  const sm = new ObsProbesThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesThreshold Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
