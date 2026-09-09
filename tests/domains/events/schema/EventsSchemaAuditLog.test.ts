import { EventsSchemaAuditLogService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaAuditLogService";
import { EventsSchemaAuditLogValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaAuditLog";
import { EventsSchemaAuditLogStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaAuditLogStateMachine";

describe("EventsSchemaAuditLog Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaAuditLogService();
  const sm = new EventsSchemaAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaAuditLog Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
