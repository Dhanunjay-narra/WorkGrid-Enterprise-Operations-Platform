import { ObsProbesProfileService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesProfileService";
import { ObsProbesProfileValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesProfile";
import { ObsProbesProfileStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesProfileStateMachine";

describe("ObsProbesProfile Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesProfileService();
  const sm = new ObsProbesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesProfile Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
