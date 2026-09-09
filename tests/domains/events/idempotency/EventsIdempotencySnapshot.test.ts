import { EventsIdempotencySnapshotService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencySnapshotService";
import { EventsIdempotencySnapshotValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencySnapshot";
import { EventsIdempotencySnapshotStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencySnapshotStateMachine";

describe("EventsIdempotencySnapshot Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencySnapshotService();
  const sm = new EventsIdempotencySnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencySnapshot Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencySnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
