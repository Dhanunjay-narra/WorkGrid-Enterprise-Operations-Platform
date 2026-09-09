import { IntSyncEventService } from "../../../services/core-engine/src/int/sync/services/IntSyncEventService";
import { IntSyncEventValidator } from "../../../packages/types/src/domains/int/sync/IntSyncEvent";
import { IntSyncEventStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncEventStateMachine";

describe("IntSyncEvent Comprehensive Domain Test Suite", () => {
  const service = new IntSyncEventService();
  const sm = new IntSyncEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncEvent Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
