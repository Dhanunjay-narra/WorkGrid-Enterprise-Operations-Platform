import { EventsOutboxQueueService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxQueueService";
import { EventsOutboxQueueValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxQueue";
import { EventsOutboxQueueStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxQueueStateMachine";

describe("EventsOutboxQueue Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxQueueService();
  const sm = new EventsOutboxQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxQueue Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
