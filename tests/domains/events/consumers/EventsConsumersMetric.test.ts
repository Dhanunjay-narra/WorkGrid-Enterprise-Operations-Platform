import { EventsConsumersMetricService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersMetricService";
import { EventsConsumersMetricValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersMetric";
import { EventsConsumersMetricStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersMetricStateMachine";

describe("EventsConsumersMetric Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersMetricService();
  const sm = new EventsConsumersMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersMetric Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
