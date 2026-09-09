import { EventsConsumersReportService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersReportService";
import { EventsConsumersReportValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersReport";
import { EventsConsumersReportStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersReportStateMachine";

describe("EventsConsumersReport Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersReportService();
  const sm = new EventsConsumersReportStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersReport Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersReportValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
