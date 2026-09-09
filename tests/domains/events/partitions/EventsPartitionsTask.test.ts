import { EventsPartitionsTaskService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsTaskService";
import { EventsPartitionsTaskValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsTask";
import { EventsPartitionsTaskStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsTaskStateMachine";

describe("EventsPartitionsTask Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsTaskService();
  const sm = new EventsPartitionsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsTask Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
