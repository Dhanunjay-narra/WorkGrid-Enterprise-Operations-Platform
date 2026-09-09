import { WorkflowVariablesAssignmentService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesAssignmentService";
import { WorkflowVariablesAssignmentValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesAssignment";
import { WorkflowVariablesAssignmentStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesAssignmentStateMachine";

describe("WorkflowVariablesAssignment Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesAssignmentService();
  const sm = new WorkflowVariablesAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesAssignment Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
