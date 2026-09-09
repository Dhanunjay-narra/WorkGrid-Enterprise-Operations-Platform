import { EventsOutboxMetricService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxMetricService";
import { EventsOutboxMetricValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxMetric";
import { EventsOutboxMetricStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxMetricStateMachine";

describe("EventsOutboxMetric Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxMetricService();
  const sm = new EventsOutboxMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxMetric Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
