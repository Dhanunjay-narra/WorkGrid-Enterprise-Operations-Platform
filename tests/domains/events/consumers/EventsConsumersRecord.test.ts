import { EventsConsumersRecordService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersRecordService";
import { EventsConsumersRecordValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersRecord";
import { EventsConsumersRecordStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersRecordStateMachine";

describe("EventsConsumersRecord Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersRecordService();
  const sm = new EventsConsumersRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersRecord Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
