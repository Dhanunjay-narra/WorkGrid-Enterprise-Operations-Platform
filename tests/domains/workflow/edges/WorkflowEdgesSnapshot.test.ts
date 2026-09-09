import { WorkflowEdgesSnapshotService } from "../../../services/core-engine/src/workflow/edges/services/WorkflowEdgesSnapshotService";
import { WorkflowEdgesSnapshotValidator } from "../../../packages/types/src/domains/workflow/edges/WorkflowEdgesSnapshot";
import { WorkflowEdgesSnapshotStateMachine } from "../../../services/core-engine/src/workflow/edges/state-machines/WorkflowEdgesSnapshotStateMachine";

describe("WorkflowEdgesSnapshot Comprehensive Domain Test Suite", () => {
  const service = new WorkflowEdgesSnapshotService();
  const sm = new WorkflowEdgesSnapshotStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowEdgesSnapshot Instance",
      domain: "workflow_edges",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowEdgesSnapshotValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
