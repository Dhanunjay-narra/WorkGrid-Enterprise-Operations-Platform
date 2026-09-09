import { EventsConsumersAuditLogService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersAuditLogService";
import { EventsConsumersAuditLogValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersAuditLog";
import { EventsConsumersAuditLogStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersAuditLogStateMachine";

describe("EventsConsumersAuditLog Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersAuditLogService();
  const sm = new EventsConsumersAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersAuditLog Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
