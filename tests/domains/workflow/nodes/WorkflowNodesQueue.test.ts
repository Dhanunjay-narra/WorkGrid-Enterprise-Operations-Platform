import { WorkflowNodesQueueService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesQueueService";
import { WorkflowNodesQueueValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesQueue";
import { WorkflowNodesQueueStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesQueueStateMachine";

describe("WorkflowNodesQueue Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesQueueService();
  const sm = new WorkflowNodesQueueStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesQueue Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesQueueValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
