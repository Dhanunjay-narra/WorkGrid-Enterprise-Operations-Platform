import { WorkflowVariablesBatchService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesBatchService";
import { WorkflowVariablesBatchValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesBatch";
import { WorkflowVariablesBatchStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesBatchStateMachine";

describe("WorkflowVariablesBatch Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesBatchService();
  const sm = new WorkflowVariablesBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesBatch Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
