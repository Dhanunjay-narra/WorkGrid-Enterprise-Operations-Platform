import { WorkflowNodesMetricService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesMetricService";
import { WorkflowNodesMetricValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesMetric";
import { WorkflowNodesMetricStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesMetricStateMachine";

describe("WorkflowNodesMetric Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesMetricService();
  const sm = new WorkflowNodesMetricStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesMetric Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesMetricValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
