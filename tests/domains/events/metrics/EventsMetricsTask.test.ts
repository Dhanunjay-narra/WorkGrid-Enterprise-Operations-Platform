import { EventsMetricsTaskService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsTaskService";
import { EventsMetricsTaskValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsTask";
import { EventsMetricsTaskStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsTaskStateMachine";

describe("EventsMetricsTask Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsTaskService();
  const sm = new EventsMetricsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsTask Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
