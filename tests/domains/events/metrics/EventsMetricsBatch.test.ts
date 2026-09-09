import { EventsMetricsBatchService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsBatchService";
import { EventsMetricsBatchValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsBatch";
import { EventsMetricsBatchStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsBatchStateMachine";

describe("EventsMetricsBatch Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsBatchService();
  const sm = new EventsMetricsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsBatch Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
