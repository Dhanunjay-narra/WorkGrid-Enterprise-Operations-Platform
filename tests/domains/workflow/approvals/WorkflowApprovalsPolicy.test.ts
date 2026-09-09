import { WorkflowApprovalsPolicyService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsPolicyService";
import { WorkflowApprovalsPolicyValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsPolicy";
import { WorkflowApprovalsPolicyStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsPolicyStateMachine";

describe("WorkflowApprovalsPolicy Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsPolicyService();
  const sm = new WorkflowApprovalsPolicyStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsPolicy Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsPolicyValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
