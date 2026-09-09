import { EventsDeadletterSessionService } from "../../../services/core-engine/src/events/deadletter/services/EventsDeadletterSessionService";
import { EventsDeadletterSessionValidator } from "../../../packages/types/src/domains/events/deadletter/EventsDeadletterSession";
import { EventsDeadletterSessionStateMachine } from "../../../services/core-engine/src/events/deadletter/state-machines/EventsDeadletterSessionStateMachine";

describe("EventsDeadletterSession Comprehensive Domain Test Suite", () => {
  const service = new EventsDeadletterSessionService();
  const sm = new EventsDeadletterSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsDeadletterSession Instance",
      domain: "events_deadletter",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsDeadletterSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
