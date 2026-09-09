import { EventsMetricsPayloadService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsPayloadService";
import { EventsMetricsPayloadValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsPayload";
import { EventsMetricsPayloadStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsPayloadStateMachine";

describe("EventsMetricsPayload Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsPayloadService();
  const sm = new EventsMetricsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsPayload Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
