import { EventsIdempotencyAuditLogService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyAuditLogService";
import { EventsIdempotencyAuditLogValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyAuditLog";
import { EventsIdempotencyAuditLogStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyAuditLogStateMachine";

describe("EventsIdempotencyAuditLog Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyAuditLogService();
  const sm = new EventsIdempotencyAuditLogStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyAuditLog Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyAuditLogValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
