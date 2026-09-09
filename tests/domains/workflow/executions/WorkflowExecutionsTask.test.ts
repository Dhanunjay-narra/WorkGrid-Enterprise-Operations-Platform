import { WorkflowExecutionsTaskService } from "../../../services/core-engine/src/workflow/executions/services/WorkflowExecutionsTaskService";
import { WorkflowExecutionsTaskValidator } from "../../../packages/types/src/domains/workflow/executions/WorkflowExecutionsTask";
import { WorkflowExecutionsTaskStateMachine } from "../../../services/core-engine/src/workflow/executions/state-machines/WorkflowExecutionsTaskStateMachine";

describe("WorkflowExecutionsTask Comprehensive Domain Test Suite", () => {
  const service = new WorkflowExecutionsTaskService();
  const sm = new WorkflowExecutionsTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowExecutionsTask Instance",
      domain: "workflow_executions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowExecutionsTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
