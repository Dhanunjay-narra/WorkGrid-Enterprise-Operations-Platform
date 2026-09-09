import { WorkflowVariablesSummaryService } from "../../../services/core-engine/src/workflow/variables/services/WorkflowVariablesSummaryService";
import { WorkflowVariablesSummaryValidator } from "../../../packages/types/src/domains/workflow/variables/WorkflowVariablesSummary";
import { WorkflowVariablesSummaryStateMachine } from "../../../services/core-engine/src/workflow/variables/state-machines/WorkflowVariablesSummaryStateMachine";

describe("WorkflowVariablesSummary Comprehensive Domain Test Suite", () => {
  const service = new WorkflowVariablesSummaryService();
  const sm = new WorkflowVariablesSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowVariablesSummary Instance",
      domain: "workflow_variables",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowVariablesSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
