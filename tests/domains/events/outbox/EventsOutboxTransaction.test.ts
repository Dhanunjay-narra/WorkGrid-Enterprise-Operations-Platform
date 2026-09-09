import { EventsOutboxTransactionService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxTransactionService";
import { EventsOutboxTransactionValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxTransaction";
import { EventsOutboxTransactionStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxTransactionStateMachine";

describe("EventsOutboxTransaction Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxTransactionService();
  const sm = new EventsOutboxTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxTransaction Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
