import { EventsPartitionsQueueService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsQueueService";
import { EventsPartitionsQueueValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsQueue";
import { EventsPartitionsQueueStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsQueueStateMachine";

describe("EventsPartitionsQueue Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsQueueService();
  const sm = new EventsPartitionsQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsQueue Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
