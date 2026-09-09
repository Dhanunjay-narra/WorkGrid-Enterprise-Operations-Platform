import { EventsIdempotencyConfigService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyConfigService";
import { EventsIdempotencyConfigValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyConfig";
import { EventsIdempotencyConfigStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyConfigStateMachine";

describe("EventsIdempotencyConfig Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyConfigService();
  const sm = new EventsIdempotencyConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyConfig Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
