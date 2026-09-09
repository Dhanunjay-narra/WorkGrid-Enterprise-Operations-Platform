import { EventsPartitionsPolicyService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsPolicyService";
import { EventsPartitionsPolicyValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsPolicy";
import { EventsPartitionsPolicyStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsPolicyStateMachine";

describe("EventsPartitionsPolicy Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsPolicyService();
  const sm = new EventsPartitionsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsPolicy Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
