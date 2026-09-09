import { EventsReplayEventService } from "../../../services/core-engine/src/events/replay/services/EventsReplayEventService";
import { EventsReplayEventValidator } from "../../../packages/types/src/domains/events/replay/EventsReplayEvent";
import { EventsReplayEventStateMachine } from "../../../services/core-engine/src/events/replay/state-machines/EventsReplayEventStateMachine";

describe("EventsReplayEvent Comprehensive Domain Test Suite", () => {
  const service = new EventsReplayEventService();
  const sm = new EventsReplayEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsReplayEvent Instance",
      domain: "events_replay",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsReplayEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
