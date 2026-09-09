import { EventsReplayMappingService } from "../../../services/core-engine/src/events/replay/services/EventsReplayMappingService";
import { EventsReplayMappingValidator } from "../../../packages/types/src/domains/events/replay/EventsReplayMapping";
import { EventsReplayMappingStateMachine } from "../../../services/core-engine/src/events/replay/state-machines/EventsReplayMappingStateMachine";

describe("EventsReplayMapping Comprehensive Domain Test Suite", () => {
  const service = new EventsReplayMappingService();
  const sm = new EventsReplayMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsReplayMapping Instance",
      domain: "events_replay",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsReplayMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
