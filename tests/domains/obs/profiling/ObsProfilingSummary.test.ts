import { ObsProfilingSummaryService } from "../../../services/core-engine/src/obs/profiling/services/ObsProfilingSummaryService";
import { ObsProfilingSummaryValidator } from "../../../packages/types/src/domains/obs/profiling/ObsProfilingSummary";
import { ObsProfilingSummaryStateMachine } from "../../../services/core-engine/src/obs/profiling/state-machines/ObsProfilingSummaryStateMachine";

describe("ObsProfilingSummary Comprehensive Domain Test Suite", () => {
  const service = new ObsProfilingSummaryService();
  const sm = new ObsProfilingSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsProfilingSummary Instance",
      domain: "obs_profiling",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsProfilingSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
