import { WorkflowNodesMappingService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesMappingService";
import { WorkflowNodesMappingValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesMapping";
import { WorkflowNodesMappingStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesMappingStateMachine";

describe("WorkflowNodesMapping Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesMappingService();
  const sm = new WorkflowNodesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesMapping Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
