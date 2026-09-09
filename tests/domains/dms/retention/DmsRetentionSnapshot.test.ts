import { DmsRetentionSnapshotService } from "../../../services/core-engine/src/dms/retention/services/DmsRetentionSnapshotService";
import { DmsRetentionSnapshotValidator } from "../../../packages/types/src/domains/dms/retention/DmsRetentionSnapshot";
import { DmsRetentionSnapshotStateMachine } from "../../../services/core-engine/src/dms/retention/state-machines/DmsRetentionSnapshotStateMachine";

describe("DmsRetentionSnapshot Comprehensive Domain Test Suite", () => {
  const service = new DmsRetentionSnapshotService();
  const sm = new DmsRetentionSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "DmsRetentionSnapshot Instance",
      domain: "dms_retention",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = DmsRetentionSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
