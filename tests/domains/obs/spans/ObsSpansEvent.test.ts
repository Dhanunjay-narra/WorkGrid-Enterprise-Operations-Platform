import { ObsSpansEventService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansEventService";
import { ObsSpansEventValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansEvent";
import { ObsSpansEventStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansEventStateMachine";

describe("ObsSpansEvent Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansEventService();
  const sm = new ObsSpansEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansEvent Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
