import { AbacSnapshotService } from "../../../services/core-engine/src/abac/services/AbacSnapshotService";
import { AbacSnapshotValidator } from "../../../packages/types/src/domains/abac/AbacSnapshot";
import { AbacSnapshotStateMachine } from "../../../services/core-engine/src/abac/state-machines/AbacSnapshotStateMachine";

describe("AbacSnapshot Comprehensive Domain Test Suite", () => {
  const service = new AbacSnapshotService();
  const sm = new AbacSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AbacSnapshot Instance",
      domain: "abac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AbacSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
