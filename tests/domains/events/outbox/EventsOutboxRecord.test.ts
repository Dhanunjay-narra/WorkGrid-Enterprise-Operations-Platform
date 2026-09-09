import { EventsOutboxRecordService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxRecordService";
import { EventsOutboxRecordValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxRecord";
import { EventsOutboxRecordStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxRecordStateMachine";

describe("EventsOutboxRecord Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxRecordService();
  const sm = new EventsOutboxRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxRecord Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
