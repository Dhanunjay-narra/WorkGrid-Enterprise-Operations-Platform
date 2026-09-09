import { IntSyncTransactionService } from "../../../services/core-engine/src/int/sync/services/IntSyncTransactionService";
import { IntSyncTransactionValidator } from "../../../packages/types/src/domains/int/sync/IntSyncTransaction";
import { IntSyncTransactionStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncTransactionStateMachine";

describe("IntSyncTransaction Comprehensive Domain Test Suite", () => {
  const service = new IntSyncTransactionService();
  const sm = new IntSyncTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncTransaction Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
