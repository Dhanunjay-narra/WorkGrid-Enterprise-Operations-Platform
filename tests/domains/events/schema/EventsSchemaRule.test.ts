import { EventsSchemaRuleService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaRuleService";
import { EventsSchemaRuleValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaRule";
import { EventsSchemaRuleStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaRuleStateMachine";

describe("EventsSchemaRule Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaRuleService();
  const sm = new EventsSchemaRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaRule Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
