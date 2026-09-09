import { EventsSchemaPayloadService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaPayloadService";
import { EventsSchemaPayloadValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaPayload";
import { EventsSchemaPayloadStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaPayloadStateMachine";

describe("EventsSchemaPayload Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaPayloadService();
  const sm = new EventsSchemaPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaPayload Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
