import { EventsReplaySnapshotService } from "../../../services/core-engine/src/events/replay/services/EventsReplaySnapshotService";
import { EventsReplaySnapshotValidator } from "../../../packages/types/src/domains/events/replay/EventsReplaySnapshot";
import { EventsReplaySnapshotStateMachine } from "../../../services/core-engine/src/events/replay/state-machines/EventsReplaySnapshotStateMachine";

describe("EventsReplaySnapshot Comprehensive Domain Test Suite", () => {
  const service = new EventsReplaySnapshotService();
  const sm = new EventsReplaySnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsReplaySnapshot Instance",
      domain: "events_replay",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsReplaySnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
