import { WorkflowNodesRecordService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesRecordService";
import { WorkflowNodesRecordValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesRecord";
import { WorkflowNodesRecordStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesRecordStateMachine";

describe("WorkflowNodesRecord Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesRecordService();
  const sm = new WorkflowNodesRecordStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesRecord Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesRecordValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
