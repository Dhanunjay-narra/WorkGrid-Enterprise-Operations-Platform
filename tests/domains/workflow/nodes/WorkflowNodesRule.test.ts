import { WorkflowNodesRuleService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesRuleService";
import { WorkflowNodesRuleValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesRule";
import { WorkflowNodesRuleStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesRuleStateMachine";

describe("WorkflowNodesRule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesRuleService();
  const sm = new WorkflowNodesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesRule Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
