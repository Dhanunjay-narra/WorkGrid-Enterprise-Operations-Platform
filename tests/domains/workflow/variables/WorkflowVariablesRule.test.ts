import { WorkflowVariablesRuleService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesRuleService";
import { WorkflowVariablesRuleValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesRule";
import { WorkflowVariablesRuleStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesRuleStateMachine";

describe("WorkflowVariablesRule Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesRuleService();
  const sm = new WorkflowVariablesRuleStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesRule Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesRuleValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
