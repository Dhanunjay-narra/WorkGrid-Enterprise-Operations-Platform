import { IntSyncSnapshotService } from "../../../services/core-engine/src/int/sync/services/IntSyncSnapshotService";
import { IntSyncSnapshotValidator } from "../../../packages/types/src/domains/int/sync/IntSyncSnapshot";
import { IntSyncSnapshotStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncSnapshotStateMachine";

describe("IntSyncSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntSyncSnapshotService();
  const sm = new IntSyncSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncSnapshot Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
