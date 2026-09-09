import { EventsDeadletterThresholdService } from "../../../services/core-engine/src/events/deadletter/services/EventsDeadletterThresholdService";
import { EventsDeadletterThresholdValidator } from "../../../packages/types/src/domains/events/deadletter/EventsDeadletterThreshold";
import { EventsDeadletterThresholdStateMachine } from "../../../services/core-engine/src/events/deadletter/state-machines/EventsDeadletterThresholdStateMachine";

describe("EventsDeadletterThreshold Comprehensive Domain Test Suite", () => {
  const service = new EventsDeadletterThresholdService();
  const sm = new EventsDeadletterThresholdStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsDeadletterThreshold Instance",
      domain: "events_deadletter",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsDeadletterThresholdValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
