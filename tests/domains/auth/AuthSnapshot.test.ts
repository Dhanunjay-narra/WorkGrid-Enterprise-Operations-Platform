import { AuthSnapshotService } from "../../../services/core-engine/src/auth/services/AuthSnapshotService";
import { AuthSnapshotValidator } from "../../../packages/types/src/domains/auth/AuthSnapshot";
import { AuthSnapshotStateMachine } from "../../../services/core-engine/src/auth/state-machines/AuthSnapshotStateMachine";

describe("AuthSnapshot Comprehensive Domain Test Suite", () => {
  const service = new AuthSnapshotService();
  const sm = new AuthSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "AuthSnapshot Instance",
      domain: "auth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = AuthSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
