import { WorkflowExecutionsConfigService } from "../../../services/core-engine/src/workflow/executions/services/WorkflowExecutionsConfigService";
import { WorkflowExecutionsConfigValidator } from "../../../packages/types/src/domains/workflow/executions/WorkflowExecutionsConfig";
import { WorkflowExecutionsConfigStateMachine } from "../../../services/core-engine/src/workflow/executions/state-machines/WorkflowExecutionsConfigStateMachine";

describe("WorkflowExecutionsConfig Comprehensive Domain Test Suite", () => {
  const service = new WorkflowExecutionsConfigService();
  const sm = new WorkflowExecutionsConfigStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowExecutionsConfig Instance",
      domain: "workflow_executions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowExecutionsConfigValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
