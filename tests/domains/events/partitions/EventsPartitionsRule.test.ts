import { EventsPartitionsRuleService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsRuleService";
import { EventsPartitionsRuleValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsRule";
import { EventsPartitionsRuleStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsRuleStateMachine";

describe("EventsPartitionsRule Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsRuleService();
  const sm = new EventsPartitionsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsRule Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
