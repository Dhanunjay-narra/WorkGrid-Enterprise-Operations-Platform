import { EventsOutboxPolicyService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxPolicyService";
import { EventsOutboxPolicyValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxPolicy";
import { EventsOutboxPolicyStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxPolicyStateMachine";

describe("EventsOutboxPolicy Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxPolicyService();
  const sm = new EventsOutboxPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxPolicy Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
