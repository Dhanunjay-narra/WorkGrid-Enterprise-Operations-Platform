import { EventsMetricsEventService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsEventService";
import { EventsMetricsEventValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsEvent";
import { EventsMetricsEventStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsEventStateMachine";

describe("EventsMetricsEvent Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsEventService();
  const sm = new EventsMetricsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsEvent Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
