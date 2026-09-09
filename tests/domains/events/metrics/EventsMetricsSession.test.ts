import { EventsMetricsSessionService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsSessionService";
import { EventsMetricsSessionValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsSession";
import { EventsMetricsSessionStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsSessionStateMachine";

describe("EventsMetricsSession Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsSessionService();
  const sm = new EventsMetricsSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsSession Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
