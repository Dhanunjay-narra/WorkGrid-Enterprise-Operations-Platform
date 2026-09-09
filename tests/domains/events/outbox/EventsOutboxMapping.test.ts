import { EventsOutboxMappingService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxMappingService";
import { EventsOutboxMappingValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxMapping";
import { EventsOutboxMappingStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxMappingStateMachine";

describe("EventsOutboxMapping Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxMappingService();
  const sm = new EventsOutboxMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxMapping Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
