import { EventsReplayMetricService } from "../../../services/core-engine/src/events/replay/services/EventsReplayMetricService";
import { EventsReplayMetricValidator } from "../../../packages/types/src/domains/events/replay/EventsReplayMetric";
import { EventsReplayMetricStateMachine } from "../../../services/core-engine/src/events/replay/state-machines/EventsReplayMetricStateMachine";

describe("EventsReplayMetric Comprehensive Domain Test Suite", () => {
  const service = new EventsReplayMetricService();
  const sm = new EventsReplayMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsReplayMetric Instance",
      domain: "events_replay",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsReplayMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
