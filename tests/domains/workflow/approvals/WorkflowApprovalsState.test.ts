import { WorkflowApprovalsStateService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsStateService";
import { WorkflowApprovalsStateValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsState";
import { WorkflowApprovalsStateStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsStateStateMachine";

describe("WorkflowApprovalsState Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsStateService();
  const sm = new WorkflowApprovalsStateStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsState Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsStateValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
