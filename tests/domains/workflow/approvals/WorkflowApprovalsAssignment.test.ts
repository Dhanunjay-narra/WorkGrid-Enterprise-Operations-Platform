import { WorkflowApprovalsAssignmentService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsAssignmentService";
import { WorkflowApprovalsAssignmentValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsAssignment";
import { WorkflowApprovalsAssignmentStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsAssignmentStateMachine";

describe("WorkflowApprovalsAssignment Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsAssignmentService();
  const sm = new WorkflowApprovalsAssignmentStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsAssignment Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsAssignmentValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
