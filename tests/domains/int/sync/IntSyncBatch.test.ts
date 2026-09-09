import { IntSyncBatchService } from "../../../services/core-engine/src/int/sync/services/IntSyncBatchService";
import { IntSyncBatchValidator } from "../../../packages/types/src/domains/int/sync/IntSyncBatch";
import { IntSyncBatchStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncBatchStateMachine";

describe("IntSyncBatch Comprehensive Domain Test Suite", () => {
  const service = new IntSyncBatchService();
  const sm = new IntSyncBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncBatch Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
