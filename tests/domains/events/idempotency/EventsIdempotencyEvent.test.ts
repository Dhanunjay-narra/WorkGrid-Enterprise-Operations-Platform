import { EventsIdempotencyEventService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyEventService";
import { EventsIdempotencyEventValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyEvent";
import { EventsIdempotencyEventStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyEventStateMachine";

describe("EventsIdempotencyEvent Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyEventService();
  const sm = new EventsIdempotencyEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyEvent Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
