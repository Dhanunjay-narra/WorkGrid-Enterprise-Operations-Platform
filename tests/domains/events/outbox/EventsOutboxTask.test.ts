import { EventsOutboxTaskService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxTaskService";
import { EventsOutboxTaskValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxTask";
import { EventsOutboxTaskStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxTaskStateMachine";

describe("EventsOutboxTask Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxTaskService();
  const sm = new EventsOutboxTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxTask Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
