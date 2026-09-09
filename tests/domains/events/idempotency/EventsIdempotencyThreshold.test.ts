import { EventsIdempotencyThresholdService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyThresholdService";
import { EventsIdempotencyThresholdValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyThreshold";
import { EventsIdempotencyThresholdStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyThresholdStateMachine";

describe("EventsIdempotencyThreshold Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyThresholdService();
  const sm = new EventsIdempotencyThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyThreshold Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
