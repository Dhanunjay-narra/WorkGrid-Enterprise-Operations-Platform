import { EventsDeadletterStateService } from "../../../services/core-engine/src/events/deadletter/services/EventsDeadletterStateService";
import { EventsDeadletterStateValidator } from "../../../packages/types/src/domains/events/deadletter/EventsDeadletterState";
import { EventsDeadletterStateStateMachine } from "../../../services/core-engine/src/events/deadletter/state-machines/EventsDeadletterStateStateMachine";

describe("EventsDeadletterState Comprehensive Domain Test Suite", () => {
  const service = new EventsDeadletterStateService();
  const sm = new EventsDeadletterStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsDeadletterState Instance",
      domain: "events_deadletter",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsDeadletterStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
