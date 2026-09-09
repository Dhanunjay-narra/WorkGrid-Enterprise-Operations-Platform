import { IntOauthSnapshotService } from "../../../services/core-engine/src/int/oauth/services/IntOauthSnapshotService";
import { IntOauthSnapshotValidator } from "../../../packages/types/src/domains/int/oauth/IntOauthSnapshot";
import { IntOauthSnapshotStateMachine } from "../../../services/core-engine/src/int/oauth/state-machines/IntOauthSnapshotStateMachine";

describe("IntOauthSnapshot Comprehensive Domain Test Suite", () => {
  const service = new IntOauthSnapshotService();
  const sm = new IntOauthSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "IntOauthSnapshot Instance",
      domain: "int_oauth",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = IntOauthSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
