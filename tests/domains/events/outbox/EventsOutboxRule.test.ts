import { EventsOutboxRuleService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxRuleService";
import { EventsOutboxRuleValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxRule";
import { EventsOutboxRuleStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxRuleStateMachine";

describe("EventsOutboxRule Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxRuleService();
  const sm = new EventsOutboxRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxRule Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
