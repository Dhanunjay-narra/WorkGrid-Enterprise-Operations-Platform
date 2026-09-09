import { ObsProbesEntryService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesEntryService";
import { ObsProbesEntryValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesEntry";
import { ObsProbesEntryStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesEntryStateMachine";

describe("ObsProbesEntry Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesEntryService();
  const sm = new ObsProbesEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesEntry Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
