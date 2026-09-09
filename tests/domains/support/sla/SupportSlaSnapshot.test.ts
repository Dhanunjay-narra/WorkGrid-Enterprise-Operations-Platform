import { SupportSlaSnapshotService } from "../../../services/core-engine/src/support/sla/services/SupportSlaSnapshotService";
import { SupportSlaSnapshotValidator } from "../../../packages/types/src/domains/support/sla/SupportSlaSnapshot";
import { SupportSlaSnapshotStateMachine } from "../../../services/core-engine/src/support/sla/state-machines/SupportSlaSnapshotStateMachine";

describe("SupportSlaSnapshot Comprehensive Domain Test Suite", () => {
  const service = new SupportSlaSnapshotService();
  const sm = new SupportSlaSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportSlaSnapshot Instance",
      domain: "support_sla",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportSlaSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
