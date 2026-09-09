import { EventsIdempotencyPayloadService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyPayloadService";
import { EventsIdempotencyPayloadValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyPayload";
import { EventsIdempotencyPayloadStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyPayloadStateMachine";

describe("EventsIdempotencyPayload Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyPayloadService();
  const sm = new EventsIdempotencyPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyPayload Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
