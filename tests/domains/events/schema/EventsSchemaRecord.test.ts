import { EventsSchemaRecordService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaRecordService";
import { EventsSchemaRecordValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaRecord";
import { EventsSchemaRecordStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaRecordStateMachine";

describe("EventsSchemaRecord Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaRecordService();
  const sm = new EventsSchemaRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaRecord Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
