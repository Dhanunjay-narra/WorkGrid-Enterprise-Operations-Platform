import { ObsSpansBatchService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansBatchService";
import { ObsSpansBatchValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansBatch";
import { ObsSpansBatchStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansBatchStateMachine";

describe("ObsSpansBatch Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansBatchService();
  const sm = new ObsSpansBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansBatch Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
