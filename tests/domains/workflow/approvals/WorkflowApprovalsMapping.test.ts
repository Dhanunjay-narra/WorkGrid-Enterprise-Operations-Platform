import { WorkflowApprovalsMappingService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsMappingService";
import { WorkflowApprovalsMappingValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsMapping";
import { WorkflowApprovalsMappingStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsMappingStateMachine";

describe("WorkflowApprovalsMapping Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsMappingService();
  const sm = new WorkflowApprovalsMappingStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsMapping Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsMappingValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
