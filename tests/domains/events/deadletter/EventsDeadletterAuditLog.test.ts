import { EventsDeadletterAuditLogService } from "../../../services/core-engine/src/events/deadletter/services/EventsDeadletterAuditLogService";
import { EventsDeadletterAuditLogValidator } from "../../../packages/types/src/domains/events/deadletter/EventsDeadletterAuditLog";
import { EventsDeadletterAuditLogStateMachine } from "../../../services/core-engine/src/events/deadletter/state-machines/EventsDeadletterAuditLogStateMachine";

describe("EventsDeadletterAuditLog Comprehensive Domain Test Suite", () => {
  const service = new EventsDeadletterAuditLogService();
  const sm = new EventsDeadletterAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsDeadletterAuditLog Instance",
      domain: "events_deadletter",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsDeadletterAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
