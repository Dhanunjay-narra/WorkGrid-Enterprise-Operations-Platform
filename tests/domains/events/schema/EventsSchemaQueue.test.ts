import { EventsSchemaQueueService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaQueueService";
import { EventsSchemaQueueValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaQueue";
import { EventsSchemaQueueStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaQueueStateMachine";

describe("EventsSchemaQueue Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaQueueService();
  const sm = new EventsSchemaQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaQueue Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
