import { EventsOutboxConfigService } from "../../../services/core-engine/src/events/outbox/services/EventsOutboxConfigService";
import { EventsOutboxConfigValidator } from "../../../packages/types/src/domains/events/outbox/EventsOutboxConfig";
import { EventsOutboxConfigStateMachine } from "../../../services/core-engine/src/events/outbox/state-machines/EventsOutboxConfigStateMachine";

describe("EventsOutboxConfig Comprehensive Domain Test Suite", () => {
  const service = new EventsOutboxConfigService();
  const sm = new EventsOutboxConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsOutboxConfig Instance",
      domain: "events_outbox",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsOutboxConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
