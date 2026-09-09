import { EventsPartitionsTransactionService } from "../../../services/core-engine/src/events/partitions/services/EventsPartitionsTransactionService";
import { EventsPartitionsTransactionValidator } from "../../../packages/types/src/domains/events/partitions/EventsPartitionsTransaction";
import { EventsPartitionsTransactionStateMachine } from "../../../services/core-engine/src/events/partitions/state-machines/EventsPartitionsTransactionStateMachine";

describe("EventsPartitionsTransaction Comprehensive Domain Test Suite", () => {
  const service = new EventsPartitionsTransactionService();
  const sm = new EventsPartitionsTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsPartitionsTransaction Instance",
      domain: "events_partitions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsPartitionsTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
