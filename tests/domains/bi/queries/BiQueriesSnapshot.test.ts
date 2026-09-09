import { BiQueriesSnapshotService } from "../../../services/core-engine/src/bi/queries/services/BiQueriesSnapshotService";
import { BiQueriesSnapshotValidator } from "../../../packages/types/src/domains/bi/queries/BiQueriesSnapshot";
import { BiQueriesSnapshotStateMachine } from "../../../services/core-engine/src/bi/queries/state-machines/BiQueriesSnapshotStateMachine";

describe("BiQueriesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new BiQueriesSnapshotService();
  const sm = new BiQueriesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "BiQueriesSnapshot Instance",
      domain: "bi_queries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = BiQueriesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
