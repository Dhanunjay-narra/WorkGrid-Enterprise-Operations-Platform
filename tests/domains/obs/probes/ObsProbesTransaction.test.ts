import { ObsProbesTransactionService } from "../../../services/core-engine/src/obs/probes/services/ObsProbesTransactionService";
import { ObsProbesTransactionValidator } from "../../../packages/types/src/domains/obs/probes/ObsProbesTransaction";
import { ObsProbesTransactionStateMachine } from "../../../services/core-engine/src/obs/probes/state-machines/ObsProbesTransactionStateMachine";

describe("ObsProbesTransaction Comprehensive Domain Test Suite", () => {
  const service = new ObsProbesTransactionService();
  const sm = new ObsProbesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProbesTransaction Instance",
      domain: "obs_probes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProbesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
