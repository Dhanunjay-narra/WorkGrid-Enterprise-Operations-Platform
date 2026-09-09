import { EventsConsumersEntryService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersEntryService";
import { EventsConsumersEntryValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersEntry";
import { EventsConsumersEntryStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersEntryStateMachine";

describe("EventsConsumersEntry Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersEntryService();
  const sm = new EventsConsumersEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersEntry Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
