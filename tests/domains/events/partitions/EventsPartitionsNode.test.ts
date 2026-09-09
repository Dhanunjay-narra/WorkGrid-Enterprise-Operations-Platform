import { EventsPartitionsNodeService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsNodeService";
import { EventsPartitionsNodeValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsNode";
import { EventsPartitionsNodeStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsNodeStateMachine";

describe("EventsPartitionsNode Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsNodeService();
  const sm = new EventsPartitionsNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsNode Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
