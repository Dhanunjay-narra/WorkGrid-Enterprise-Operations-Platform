import { WorkflowDagQueueService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagQueueService";
import { WorkflowDagQueueValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagQueue";
import { WorkflowDagQueueStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagQueueStateMachine";

describe("WorkflowDagQueue Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagQueueService();
  const sm = new WorkflowDagQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagQueue Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
