import { ObsProbesStateService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesStateService";
import { ObsProbesStateValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesState";
import { ObsProbesStateStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesStateStateMachine";

describe("ObsProbesState Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesStateService();
  const sm = new ObsProbesStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesState Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
