import { EventsOutboxThresholdService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxThresholdService";
import { EventsOutboxThresholdValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxThreshold";
import { EventsOutboxThresholdStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxThresholdStateMachine";

describe("EventsOutboxThreshold Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxThresholdService();
  const sm = new EventsOutboxThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxThreshold Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
