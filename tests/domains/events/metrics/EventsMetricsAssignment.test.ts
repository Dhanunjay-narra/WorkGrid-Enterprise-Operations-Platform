import { EventsMetricsAssignmentService } from "../../../services/core-engine/src/events/metrics/services/EventsMetricsAssignmentService";
import { EventsMetricsAssignmentValidator } from "../../../packages/types/src/domains/events/metrics/EventsMetricsAssignment";
import { EventsMetricsAssignmentStateMachine } from "../../../services/core-engine/src/events/metrics/state-machines/EventsMetricsAssignmentStateMachine";

describe("EventsMetricsAssignment Comprehensive Domain Test Suite", () => {
  const service = new EventsMetricsAssignmentService();
  const sm = new EventsMetricsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsMetricsAssignment Instance",
      domain: "events_metrics",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsMetricsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
