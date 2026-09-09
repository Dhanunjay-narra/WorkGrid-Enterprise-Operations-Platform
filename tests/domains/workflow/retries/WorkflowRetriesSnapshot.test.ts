import { WorkflowRetriesSnapshotService } from "../../../services/core-engine/src/workflow/retries/services/WorkflowRetriesSnapshotService";
import { WorkflowRetriesSnapshotValidator } from "../../../packages/types/src/domains/workflow/retries/WorkflowRetriesSnapshot";
import { WorkflowRetriesSnapshotStateMachine } from "../../../services/core-engine/src/workflow/retries/state-machines/WorkflowRetriesSnapshotStateMachine";

describe("WorkflowRetriesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new WorkflowRetriesSnapshotService();
  const sm = new WorkflowRetriesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowRetriesSnapshot Instance",
      domain: "workflow_retries",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowRetriesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
