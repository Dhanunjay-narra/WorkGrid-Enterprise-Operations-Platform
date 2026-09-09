import { EventsIdempotencyBatchService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyBatchService";
import { EventsIdempotencyBatchValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyBatch";
import { EventsIdempotencyBatchStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyBatchStateMachine";

describe("EventsIdempotencyBatch Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyBatchService();
  const sm = new EventsIdempotencyBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyBatch Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
