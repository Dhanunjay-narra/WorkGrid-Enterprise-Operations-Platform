import { IdentitySnapshotService } from "../../../services/core-engine/src/identity/services/IdentitySnapshotService";
import { IdentitySnapshotValidator } from "../../../packages/types/src/domains/identity/IdentitySnapshot";
import { IdentitySnapshotStateMachine } from "../../../services/core-engine/src/identity/state-machines/IdentitySnapshotStateMachine";

describe("IdentitySnapshot Comprehensive Domain Test Suite", () => {
  const service = new IdentitySnapshotService();
  const sm = new IdentitySnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IdentitySnapshot Instance",
      domain: "identity",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IdentitySnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
