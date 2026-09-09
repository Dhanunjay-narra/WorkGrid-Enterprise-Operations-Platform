import { EventsConsumersPayloadService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersPayloadService";
import { EventsConsumersPayloadValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersPayload";
import { EventsConsumersPayloadStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersPayloadStateMachine";

describe("EventsConsumersPayload Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersPayloadService();
  const sm = new EventsConsumersPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersPayload Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
