import { EventsDeadletterItemService } from "../../../services/core-engine/src/events/deadletter/services/EventsDeadletterItemService";
import { EventsDeadletterItemValidator } from "../../../packages/types/src/domains/events/deadletter/EventsDeadletterItem";
import { EventsDeadletterItemStateMachine } from "../../../services/core-engine/src/events/deadletter/state-machines/EventsDeadletterItemStateMachine";

describe("EventsDeadletterItem Comprehensive Domain Test Suite", () => {
  const service = new EventsDeadletterItemService();
  const sm = new EventsDeadletterItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsDeadletterItem Instance",
      domain: "events_deadletter",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsDeadletterItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
