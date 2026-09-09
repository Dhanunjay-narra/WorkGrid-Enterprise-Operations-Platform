import { EventsSchemaMappingService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaMappingService";
import { EventsSchemaMappingValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaMapping";
import { EventsSchemaMappingStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaMappingStateMachine";

describe("EventsSchemaMapping Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaMappingService();
  const sm = new EventsSchemaMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaMapping Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
