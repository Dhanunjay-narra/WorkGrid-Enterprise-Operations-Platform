import { EventsOutboxSummaryService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxSummaryService";
import { EventsOutboxSummaryValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxSummary";
import { EventsOutboxSummaryStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxSummaryStateMachine";

describe("EventsOutboxSummary Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxSummaryService();
  const sm = new EventsOutboxSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxSummary Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
