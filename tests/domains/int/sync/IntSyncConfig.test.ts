import { IntSyncConfigService } from "../../../services/core-engine/src/int/sync/services/IntSyncConfigService";
import { IntSyncConfigValidator } from "../../../packages/types/src/domains/int/sync/IntSyncConfig";
import { IntSyncConfigStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncConfigStateMachine";

describe("IntSyncConfig Comprehensive Domain Test Suite", () => {
  const service = new IntSyncConfigService();
  const sm = new IntSyncConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncConfig Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
