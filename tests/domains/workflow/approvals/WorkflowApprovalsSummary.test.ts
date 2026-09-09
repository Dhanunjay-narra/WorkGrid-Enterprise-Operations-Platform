import { WorkflowApprovalsSummaryService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsSummaryService";
import { WorkflowApprovalsSummaryValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsSummary";
import { WorkflowApprovalsSummaryStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsSummaryStateMachine";

describe("WorkflowApprovalsSummary Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsSummaryService();
  const sm = new WorkflowApprovalsSummaryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsSummary Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsSummaryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
