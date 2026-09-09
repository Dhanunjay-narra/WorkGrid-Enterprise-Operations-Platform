import { EventsSchemaItemService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaItemService";
import { EventsSchemaItemValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaItem";
import { EventsSchemaItemStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaItemStateMachine";

describe("EventsSchemaItem Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaItemService();
  const sm = new EventsSchemaItemStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaItem Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaItemValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
