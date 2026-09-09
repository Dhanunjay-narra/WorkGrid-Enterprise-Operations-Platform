import { EventsSchemaSnapshotService } from "../../../services/core-engine/src/events/schema/services/EventsSchemaSnapshotService";
import { EventsSchemaSnapshotValidator } from "../../../packages/types/src/domains/events/schema/EventsSchemaSnapshot";
import { EventsSchemaSnapshotStateMachine } from "../../../services/core-engine/src/events/schema/state-machines/EventsSchemaSnapshotStateMachine";

describe("EventsSchemaSnapshot Comprehensive Domain Test Suite", () => {
  const service = new EventsSchemaSnapshotService();
  const sm = new EventsSchemaSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "EventsSchemaSnapshot Instance",
      domain: "events_schema",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = EventsSchemaSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
