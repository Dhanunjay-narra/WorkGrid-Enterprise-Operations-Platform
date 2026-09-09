import { WorkflowExecutionsRuleService } from "../../../services/core-engine/src/workflow/executions/services/WorkflowExecutionsRuleService";
import { WorkflowExecutionsRuleValidator } from "../../../packages/types/src/domains/workflow/executions/WorkflowExecutionsRule";
import { WorkflowExecutionsRuleStateMachine } from "../../../services/core-engine/src/workflow/executions/state-machines/WorkflowExecutionsRuleStateMachine";

describe("WorkflowExecutionsRule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowExecutionsRuleService();
  const sm = new WorkflowExecutionsRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowExecutionsRule Instance",
      domain: "workflow_executions",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowExecutionsRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
