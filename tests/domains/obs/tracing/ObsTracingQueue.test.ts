import { ObsTracingQueueService } from "../../../services/core-engine/src/obs/tracing/services/ObsTracingQueueService";
import { ObsTracingQueueValidator } from "../../../packages/types/src/domains/obs/tracing/ObsTracingQueue";
import { ObsTracingQueueStateMachine } from "../../../services/core-engine/src/obs/tracing/state-machines/ObsTracingQueueStateMachine";

describe("ObsTracingQueue Comprehensive Domain Test Suite", () => {
  const service = new ObsTracingQueueService();
  const sm = new ObsTracingQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "ObsTracingQueue Instance",
      domain: "obs_tracing",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = ObsTracingQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
