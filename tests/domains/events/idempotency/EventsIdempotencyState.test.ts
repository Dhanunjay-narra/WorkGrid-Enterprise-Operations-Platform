import { EventsIdempotencyStateService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyStateService";
import { EventsIdempotencyStateValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyState";
import { EventsIdempotencyStateStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyStateStateMachine";

describe("EventsIdempotencyState Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyStateService();
  const sm = new EventsIdempotencyStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyState Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
