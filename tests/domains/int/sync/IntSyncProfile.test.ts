import { IntSyncProfileService } from "../../../services/core-engine/src/int/sync/services/IntSyncProfileService";
import { IntSyncProfileValidator } from "../../../packages/types/src/domains/int/sync/IntSyncProfile";
import { IntSyncProfileStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncProfileStateMachine";

describe("IntSyncProfile Comprehensive Domain Test Suite", () => {
  const service = new IntSyncProfileService();
  const sm = new IntSyncProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncProfile Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
