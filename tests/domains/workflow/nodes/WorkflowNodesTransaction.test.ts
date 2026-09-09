import { WorkflowNodesTransactionService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesTransactionService";
import { WorkflowNodesTransactionValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesTransaction";
import { WorkflowNodesTransactionStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesTransactionStateMachine";

describe("WorkflowNodesTransaction Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesTransactionService();
  const sm = new WorkflowNodesTransactionStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesTransaction Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesTransactionValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
