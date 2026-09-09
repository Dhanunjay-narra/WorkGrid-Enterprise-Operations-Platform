import { EventsIdempotencyNodeService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyNodeService";
import { EventsIdempotencyNodeValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyNode";
import { EventsIdempotencyNodeStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyNodeStateMachine";

describe("EventsIdempotencyNode Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyNodeService();
  const sm = new EventsIdempotencyNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyNode Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
