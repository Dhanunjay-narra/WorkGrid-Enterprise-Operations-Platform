import { WorkflowNodesProfileService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesProfileService";
import { WorkflowNodesProfileValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesProfile";
import { WorkflowNodesProfileStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesProfileStateMachine";

describe("WorkflowNodesProfile Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesProfileService();
  const sm = new WorkflowNodesProfileStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesProfile Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesProfileValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
