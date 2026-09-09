import { EventsConsumersSessionService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersSessionService";
import { EventsConsumersSessionValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersSession";
import { EventsConsumersSessionStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersSessionStateMachine";

describe("EventsConsumersSession Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersSessionService();
  const sm = new EventsConsumersSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersSession Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
