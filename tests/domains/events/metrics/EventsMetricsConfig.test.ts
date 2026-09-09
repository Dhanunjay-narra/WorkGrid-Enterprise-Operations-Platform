import { EventsMetricsConfigService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsConfigService";
import { EventsMetricsConfigValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsConfig";
import { EventsMetricsConfigStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsConfigStateMachine";

describe("EventsMetricsConfig Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsConfigService();
  const sm = new EventsMetricsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsConfig Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
