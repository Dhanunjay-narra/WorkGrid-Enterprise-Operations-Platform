import { EventsReplayProfileService } from "../../../services/core-engine/src/events/replay/services/EventsReplayProfileService";
import { EventsReplayProfileValidator } from "../../../packages/types/src/domains/events/replay/EventsReplayProfile";
import { EventsReplayProfileStateMachine } from "../../../services/core-engine/src/events/replay/state-machines/EventsReplayProfileStateMachine";

describe("EventsReplayProfile Comprehensive Domain Test Suite", () => {
  const service = new EventsReplayProfileService();
  const sm = new EventsReplayProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsReplayProfile Instance",
      domain: "events_replay",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsReplayProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
