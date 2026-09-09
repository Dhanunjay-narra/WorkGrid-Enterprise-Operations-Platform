import { WorkflowApprovalsEventService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsEventService";
import { WorkflowApprovalsEventValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsEvent";
import { WorkflowApprovalsEventStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsEventStateMachine";

describe("WorkflowApprovalsEvent Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsEventService();
  const sm = new WorkflowApprovalsEventStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsEvent Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsEventValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
