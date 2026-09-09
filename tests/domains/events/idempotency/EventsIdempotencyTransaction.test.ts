import { EventsIdempotencyTransactionService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyTransactionService";
import { EventsIdempotencyTransactionValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyTransaction";
import { EventsIdempotencyTransactionStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyTransactionStateMachine";

describe("EventsIdempotencyTransaction Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyTransactionService();
  const sm = new EventsIdempotencyTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyTransaction Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
