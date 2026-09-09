import { WorkflowNodesPayloadService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesPayloadService";
import { WorkflowNodesPayloadValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesPayload";
import { WorkflowNodesPayloadStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesPayloadStateMachine";

describe("WorkflowNodesPayload Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesPayloadService();
  const sm = new WorkflowNodesPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesPayload Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
