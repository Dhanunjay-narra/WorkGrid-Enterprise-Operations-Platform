import { EventsSchemaTransactionService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaTransactionService";
import { EventsSchemaTransactionValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaTransaction";
import { EventsSchemaTransactionStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaTransactionStateMachine";

describe("EventsSchemaTransaction Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaTransactionService();
  const sm = new EventsSchemaTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaTransaction Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
