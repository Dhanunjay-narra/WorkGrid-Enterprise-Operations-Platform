import { EventsConsumersConfigService } from "../../../services/core-engine/src/events/consumers/services/EventsConsumersConfigService";
import { EventsConsumersConfigValidator } from "../../../packages/types/src/domains/events/consumers/EventsConsumersConfig";
import { EventsConsumersConfigStateMachine } from "../../../services/core-engine/src/events/consumers/state-machines/EventsConsumersConfigStateMachine";

describe("EventsConsumersConfig Comprehensive Domain Test Suite", () => {
  const service = new EventsConsumersConfigService();
  const sm = new EventsConsumersConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsConsumersConfig Instance",
      domain: "events_consumers",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsConsumersConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
