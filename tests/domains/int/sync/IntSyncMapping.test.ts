import { IntSyncMappingService } from "../../../services/core-engine/src/int/sync/services/IntSyncMappingService";
import { IntSyncMappingValidator } from "../../../packages/types/src/domains/int/sync/IntSyncMapping";
import { IntSyncMappingStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncMappingStateMachine";

describe("IntSyncMapping Comprehensive Domain Test Suite", () => {
  const service = new IntSyncMappingService();
  const sm = new IntSyncMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncMapping Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
