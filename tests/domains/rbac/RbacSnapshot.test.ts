import { RbacSnapshotService } from "../../../services/core-engine/src/rbac/services/RbacSnapshotService";
import { RbacSnapshotValidator } from "../../../packages/types/src/domains/rbac/RbacSnapshot";
import { RbacSnapshotStateMachine } from "../../../services/core-engine/src/rbac/state-machines/RbacSnapshotStateMachine";

describe("RbacSnapshot Comprehensive Domain Test Suite", () => {
  const service = new RbacSnapshotService();
  const sm = new RbacSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "RbacSnapshot Instance",
      domain: "rbac",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = RbacSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
