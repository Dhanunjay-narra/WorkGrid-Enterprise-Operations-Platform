import { EventsConsumersSnapshotService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersSnapshotService";
import { EventsConsumersSnapshotValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersSnapshot";
import { EventsConsumersSnapshotStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersSnapshotStateMachine";

describe("EventsConsumersSnapshot Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersSnapshotService();
  const sm = new EventsConsumersSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersSnapshot Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
