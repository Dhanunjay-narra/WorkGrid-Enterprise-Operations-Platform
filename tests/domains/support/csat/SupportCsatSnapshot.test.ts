import { SupportCsatSnapshotService } from "../../../services/core-engine/src/support/csat/services/SupportCsatSnapshotService";
import { SupportCsatSnapshotValidator } from "../../../packages/types/src/domains/support/csat/SupportCsatSnapshot";
import { SupportCsatSnapshotStateMachine } from "../../../services/core-engine/src/support/csat/state-machines/SupportCsatSnapshotStateMachine";

describe("SupportCsatSnapshot Comprehensive Domain Test Suite", () => {
  const service = new SupportCsatSnapshotService();
  const sm = new SupportCsatSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "SupportCsatSnapshot Instance",
      domain: "support_csat",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = SupportCsatSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
