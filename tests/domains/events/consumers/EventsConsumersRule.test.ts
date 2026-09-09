import { EventsConsumersRuleService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersRuleService";
import { EventsConsumersRuleValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersRule";
import { EventsConsumersRuleStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersRuleStateMachine";

describe("EventsConsumersRule Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersRuleService();
  const sm = new EventsConsumersRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersRule Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
