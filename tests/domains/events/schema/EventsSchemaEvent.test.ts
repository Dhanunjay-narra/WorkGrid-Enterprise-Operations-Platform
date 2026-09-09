import { EventsSchemaEventService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaEventService";
import { EventsSchemaEventValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaEvent";
import { EventsSchemaEventStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaEventStateMachine";

describe("EventsSchemaEvent Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaEventService();
  const sm = new EventsSchemaEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaEvent Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
