import { WorkflowVariablesMappingService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesMappingService";
import { WorkflowVariablesMappingValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesMapping";
import { WorkflowVariablesMappingStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesMappingStateMachine";

describe("WorkflowVariablesMapping Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesMappingService();
  const sm = new WorkflowVariablesMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesMapping Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
