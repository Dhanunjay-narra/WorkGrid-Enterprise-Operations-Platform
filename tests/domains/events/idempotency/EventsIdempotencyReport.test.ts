import { EventsIdempotencyReportService } from "../../../services/core-engine/src/events/idempotency/services/EventsIdempotencyReportService";
import { EventsIdempotencyReportValidator } from "../../../packages/types/src/domains/events/idempotency/EventsIdempotencyReport";
import { EventsIdempotencyReportStateMachine } from "../../../services/core-engine/src/events/idempotency/state-machines/EventsIdempotencyReportStateMachine";

describe("EventsIdempotencyReport Comprehensive Domain Test Suite", () => {
  const service = new EventsIdempotencyReportService();
  const sm = new EventsIdempotencyReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsIdempotencyReport Instance",
      domain: "events_idempotency",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsIdempotencyReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
