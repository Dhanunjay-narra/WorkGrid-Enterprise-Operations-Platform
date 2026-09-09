import { EventsConsumersBatchService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersBatchService";
import { EventsConsumersBatchValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersBatch";
import { EventsConsumersBatchStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersBatchStateMachine";

describe("EventsConsumersBatch Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersBatchService();
  const sm = new EventsConsumersBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersBatch Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
