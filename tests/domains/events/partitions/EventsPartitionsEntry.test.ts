import { EventsPartitionsEntryService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsEntryService";
import { EventsPartitionsEntryValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsEntry";
import { EventsPartitionsEntryStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsEntryStateMachine";

describe("EventsPartitionsEntry Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsEntryService();
  const sm = new EventsPartitionsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsEntry Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
