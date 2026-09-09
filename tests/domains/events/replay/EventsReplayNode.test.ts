import { EventsReplayNodeService } from "../../../services/core-engine/src/events/replay/services/EventsReplayNodeService";
import { EventsReplayNodeValidator } from "../../../packages/types/src/domains/events/replay/EventsReplayNode";
import { EventsReplayNodeStateMachine } from "../../../services/core-engine/src/events/replay/state-machines/EventsReplayNodeStateMachine";

describe("EventsReplayNode Comprehensive Domain Test Suite", () => {
  const service = new EventsReplayNodeService();
  const sm = new EventsReplayNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsReplayNode Instance",
      domain: "events_replay",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsReplayNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
