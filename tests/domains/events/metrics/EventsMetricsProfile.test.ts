import { EventsMetricsProfileService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsProfileService";
import { EventsMetricsProfileValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsProfile";
import { EventsMetricsProfileStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsProfileStateMachine";

describe("EventsMetricsProfile Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsProfileService();
  const sm = new EventsMetricsProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsProfile Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
