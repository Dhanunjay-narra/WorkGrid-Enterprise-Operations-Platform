import { IntSyncEntryService } from "../../../services/core-engine/src/int/sync/services/IntSyncEntryService";
import { IntSyncEntryValidator } from "../../../packages/types/src/domains/int/sync/IntSyncEntry";
import { IntSyncEntryStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncEntryStateMachine";

describe("IntSyncEntry Comprehensive Domain Test Suite", () => {
  const service = new IntSyncEntryService();
  const sm = new IntSyncEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncEntry Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
