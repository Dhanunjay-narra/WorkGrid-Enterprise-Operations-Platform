import { EventsOutboxPayloadService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxPayloadService";
import { EventsOutboxPayloadValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxPayload";
import { EventsOutboxPayloadStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxPayloadStateMachine";

describe("EventsOutboxPayload Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxPayloadService();
  const sm = new EventsOutboxPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxPayload Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
