import { EventsConsumersPolicyService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersPolicyService";
import { EventsConsumersPolicyValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersPolicy";
import { EventsConsumersPolicyStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersPolicyStateMachine";

describe("EventsConsumersPolicy Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersPolicyService();
  const sm = new EventsConsumersPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersPolicy Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
