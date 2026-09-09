import { EventsIdempotencyItemService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyItemService";
import { EventsIdempotencyItemValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyItem";
import { EventsIdempotencyItemStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyItemStateMachine";

describe("EventsIdempotencyItem Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyItemService();
  const sm = new EventsIdempotencyItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyItem Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
