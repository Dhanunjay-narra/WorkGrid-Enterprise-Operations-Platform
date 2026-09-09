import { EventsConsumersThresholdService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersThresholdService";
import { EventsConsumersThresholdValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersThreshold";
import { EventsConsumersThresholdStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersThresholdStateMachine";

describe("EventsConsumersThreshold Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersThresholdService();
  const sm = new EventsConsumersThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersThreshold Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
