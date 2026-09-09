import { WorkflowCronsSnapshotService } from "../../../services/core-engine/src/workflow/crons/services/WorkflowCronsSnapshotService";
import { WorkflowCronsSnapshotValidator } from "../../../packages/types/src/domains/workflow/crons/WorkflowCronsSnapshot";
import { WorkflowCronsSnapshotStateMachine } from "../../../services/core-engine/src/workflow/crons/state-machines/WorkflowCronsSnapshotStateMachine";

describe("WorkflowCronsSnapshot Comprehensive Domain Test Suite", () => {
  const service = new WorkflowCronsSnapshotService();
  const sm = new WorkflowCronsSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowCronsSnapshot Instance",
      domain: "workflow_crons",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowCronsSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
