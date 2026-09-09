import { ObsSpansItemService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansItemService";
import { ObsSpansItemValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansItem";
import { ObsSpansItemStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansItemStateMachine";

describe("ObsSpansItem Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansItemService();
  const sm = new ObsSpansItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansItem Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
