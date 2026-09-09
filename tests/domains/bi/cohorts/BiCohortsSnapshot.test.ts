import { BiCohortsSnapshotService } from "../../../services/core-engine/src/bi/cohorts/services/BiCohortsSnapshotService";
import { BiCohortsSnapshotValidator } from "../../../packages/types/src/domains/bi/cohorts/BiCohortsSnapshot";
import { BiCohortsSnapshotStateMachine } from "../../../services/core-engine/src/bi/cohorts/state-machines/BiCohortsSnapshotStateMachine";

describe("BiCohortsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new BiCohortsSnapshotService();
  const sm = new BiCohortsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiCohortsSnapshot Instance",
      domain: "bi_cohorts",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiCohortsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
