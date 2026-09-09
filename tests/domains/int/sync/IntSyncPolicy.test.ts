import { IntSyncPolicyService } from "../../../services/core-engine/src/int/sync/services/IntSyncPolicyService";
import { IntSyncPolicyValidator } from "../../../packages/types/src/domains/int/sync/IntSyncPolicy";
import { IntSyncPolicyStateMachine } from "../../../services/core-engine/src/int/sync/state-machines/IntSyncPolicyStateMachine";

describe("IntSyncPolicy Comprehensive Domain Test Suite", () => {
  const service = new IntSyncPolicyService();
  const sm = new IntSyncPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntSyncPolicy Instance",
      domain: "int_sync",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntSyncPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
