import { WorkflowVariablesNodeService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesNodeService";
import { WorkflowVariablesNodeValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesNode";
import { WorkflowVariablesNodeStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesNodeStateMachine";

describe("WorkflowVariablesNode Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesNodeService();
  const sm = new WorkflowVariablesNodeStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesNode Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesNodeValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
