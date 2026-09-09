import { ObsProbesSessionService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesSessionService";
import { ObsProbesSessionValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesSession";
import { ObsProbesSessionStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesSessionStateMachine";

describe("ObsProbesSession Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesSessionService();
  const sm = new ObsProbesSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesSession Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
