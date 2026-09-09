import { WorkflowExecutionsEntryService } from "../../../services/core-engine/src/workflow/executions/services/WorkflowExecutionsEntryService";
import { WorkflowExecutionsEntryValidator } from "../../../packages/types/src/domains/workflow/executions/WorkflowExecutionsEntry";
import { WorkflowExecutionsEntryStateMachine } from "../../../services/core-engine/src/workflow/executions/state-machines/WorkflowExecutionsEntryStateMachine";

describe("WorkflowExecutionsEntry Comprehensive Domain Test Suite", () => {
  const service = new WorkflowExecutionsEntryService();
  const sm = new WorkflowExecutionsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowExecutionsEntry Instance",
      domain: "workflow_executions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowExecutionsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
