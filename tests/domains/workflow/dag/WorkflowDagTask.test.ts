import { WorkflowDagTaskService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagTaskService";
import { WorkflowDagTaskValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagTask";
import { WorkflowDagTaskStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagTaskStateMachine";

describe("WorkflowDagTask Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagTaskService();
  const sm = new WorkflowDagTaskStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagTask Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagTaskValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
