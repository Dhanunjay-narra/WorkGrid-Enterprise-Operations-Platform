import { EventsMetricsEntryService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsEntryService";
import { EventsMetricsEntryValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsEntry";
import { EventsMetricsEntryStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsEntryStateMachine";

describe("EventsMetricsEntry Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsEntryService();
  const sm = new EventsMetricsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsEntry Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
