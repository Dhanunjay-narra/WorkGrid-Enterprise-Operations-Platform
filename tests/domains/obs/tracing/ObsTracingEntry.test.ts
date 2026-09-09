import { ObsTracingEntryService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingEntryService";
import { ObsTracingEntryValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingEntry";
import { ObsTracingEntryStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingEntryStateMachine";

describe("ObsTracingEntry Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingEntryService();
  const sm = new ObsTracingEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingEntry Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
