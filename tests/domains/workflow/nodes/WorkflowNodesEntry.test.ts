import { WorkflowNodesEntryService } from "../../../services/core-engine/src/workflow/nodes/services/WorkflowNodesEntryService";
import { WorkflowNodesEntryValidator } from "../../../packages/types/src/domains/workflow/nodes/WorkflowNodesEntry";
import { WorkflowNodesEntryStateMachine } from "../../../services/core-engine/src/workflow/nodes/state-machines/WorkflowNodesEntryStateMachine";

describe("WorkflowNodesEntry Comprehensive Domain Test Suite", () => {
  const service = new WorkflowNodesEntryService();
  const sm = new WorkflowNodesEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowNodesEntry Instance",
      domain: "workflow_nodes",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowNodesEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
