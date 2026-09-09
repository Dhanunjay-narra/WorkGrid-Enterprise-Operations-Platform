import { EventsSchemaSessionService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaSessionService";
import { EventsSchemaSessionValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaSession";
import { EventsSchemaSessionStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaSessionStateMachine";

describe("EventsSchemaSession Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaSessionService();
  const sm = new EventsSchemaSessionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaSession Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaSessionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
