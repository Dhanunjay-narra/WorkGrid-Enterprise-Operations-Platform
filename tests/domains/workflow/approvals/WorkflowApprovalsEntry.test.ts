import { WorkflowApprovalsEntryService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsEntryService";
import { WorkflowApprovalsEntryValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsEntry";
import { WorkflowApprovalsEntryStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsEntryStateMachine";

describe("WorkflowApprovalsEntry Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsEntryService();
  const sm = new WorkflowApprovalsEntryStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsEntry Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsEntryValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
