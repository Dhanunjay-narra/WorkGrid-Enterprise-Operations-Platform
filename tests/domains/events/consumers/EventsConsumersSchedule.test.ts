import { EventsConsumersScheduleService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersScheduleService";
import { EventsConsumersScheduleValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersSchedule";
import { EventsConsumersScheduleStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersScheduleStateMachine";

describe("EventsConsumersSchedule Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersScheduleService();
  const sm = new EventsConsumersScheduleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersSchedule Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersScheduleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
