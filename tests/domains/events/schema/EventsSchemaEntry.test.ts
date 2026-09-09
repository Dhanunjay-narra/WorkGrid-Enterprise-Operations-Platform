import { EventsSchemaEntryService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaEntryService";
import { EventsSchemaEntryValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaEntry";
import { EventsSchemaEntryStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaEntryStateMachine";

describe("EventsSchemaEntry Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaEntryService();
  const sm = new EventsSchemaEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaEntry Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
