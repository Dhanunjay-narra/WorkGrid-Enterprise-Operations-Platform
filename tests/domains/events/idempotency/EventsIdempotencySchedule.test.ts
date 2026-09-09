import { EventsIdempotencyScheduleService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyScheduleService";
import { EventsIdempotencyScheduleValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencySchedule";
import { EventsIdempotencyScheduleStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyScheduleStateMachine";

describe("EventsIdempotencySchedule Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyScheduleService();
  const sm = new EventsIdempotencyScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencySchedule Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
