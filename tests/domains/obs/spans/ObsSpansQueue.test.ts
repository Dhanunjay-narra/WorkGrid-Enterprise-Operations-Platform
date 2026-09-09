import { ObsSpansQueueService } from "../../../services/core-engine/src/obs/spans/services/ObsSpansQueueService";
import { ObsSpansQueueValidator } from "../../../packages/types/src/domains/obs/spans/ObsSpansQueue";
import { ObsSpansQueueStateMachine } from "../../../services/core-engine/src/obs/spans/state-machines/ObsSpansQueueStateMachine";

describe("ObsSpansQueue Comprehensive Domain Test Suite", () => {
  const service = new ObsSpansQueueService();
  const sm = new ObsSpansQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsSpansQueue Instance",
      domain: "obs_spans",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsSpansQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
