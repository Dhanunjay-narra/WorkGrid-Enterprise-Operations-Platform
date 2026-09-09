import { IntSyncSummaryService } from "../../../services/core-engine/src/int/sync/services/IntSyncSummaryService";
import { IntSyncSummaryValidator } from "../../../packages/types/src/domains/int/sync/IntSyncSummary";
import { IntSyncSummaryStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncSummaryStateMachine";

describe("IntSyncSummary Comprehensive Domain Test Suite", () => {
  const service = new IntSyncSummaryService();
  const sm = new IntSyncSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncSummary Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
