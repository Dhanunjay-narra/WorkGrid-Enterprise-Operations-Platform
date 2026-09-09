import { EventsIdempotencyQueueService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyQueueService";
import { EventsIdempotencyQueueValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyQueue";
import { EventsIdempotencyQueueStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyQueueStateMachine";

describe("EventsIdempotencyQueue Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyQueueService();
  const sm = new EventsIdempotencyQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyQueue Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
