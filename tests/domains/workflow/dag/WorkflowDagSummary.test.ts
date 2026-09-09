import { WorkflowDagSummaryService } from "../../../services/core-engine/src/workflow/dag/services/WorkflowDagSummaryService";
import { WorkflowDagSummaryValidator } from "../../../packages/types/src/domains/workflow/dag/WorkflowDagSummary";
import { WorkflowDagSummaryStateMachine } from "../../../services/core-engine/src/workflow/dag/state-machines/WorkflowDagSummaryStateMachine";

describe("WorkflowDagSummary Comprehensive Domain Test Suite", () => {
  const service = new WorkflowDagSummaryService();
  const sm = new WorkflowDagSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowDagSummary Instance",
      domain: "workflow_dag",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowDagSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
