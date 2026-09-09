import { WorkflowExecutionsBatchService } from "../../../services/core-engine/src/workflow/executions/services/WorkflowExecutionsBatchService";
import { WorkflowExecutionsBatchValidator } from "../../../packages/types/src/domains/workflow/executions/WorkflowExecutionsBatch";
import { WorkflowExecutionsBatchStateMachine } from "../../../services/core-engine/src/workflow/executions/state-machines/WorkflowExecutionsBatchStateMachine";

describe("WorkflowExecutionsBatch Comprehensive Domain Test Suite", () => {
  const service = new WorkflowExecutionsBatchService();
  const sm = new WorkflowExecutionsBatchStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowExecutionsBatch Instance",
      domain: "workflow_executions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowExecutionsBatchValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
