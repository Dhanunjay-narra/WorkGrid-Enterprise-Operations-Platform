import { EventsIdempotencyProfileService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyProfileService";
import { EventsIdempotencyProfileValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyProfile";
import { EventsIdempotencyProfileStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyProfileStateMachine";

describe("EventsIdempotencyProfile Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyProfileService();
  const sm = new EventsIdempotencyProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyProfile Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
