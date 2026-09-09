import { WorkflowApprovalsPayloadService } from "../../../services/core-engine/src/workflow/approvals/services/WorkflowApprovalsPayloadService";
import { WorkflowApprovalsPayloadValidator } from "../../../packages/types/src/domains/workflow/approvals/WorkflowApprovalsPayload";
import { WorkflowApprovalsPayloadStateMachine } from "../../../services/core-engine/src/workflow/approvals/state-machines/WorkflowApprovalsPayloadStateMachine";

describe("WorkflowApprovalsPayload Comprehensive Domain Test Suite", () => {
  const service = new WorkflowApprovalsPayloadService();
  const sm = new WorkflowApprovalsPayloadStateMachine();

  test("creates entity with initial version 1", () => {
    const created = service.create({
      tenantId: "tenant-alpha",
      code: "ENT-001",
      name: "WorkflowApprovalsPayload Instance",
      domain: "workflow_approvals",
      status: "ACTIVE",
      metadata: { priority: "HIGH" }
    });
    expect(created.id).toBeDefined();
    expect(created.version).toBe(1);
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required schema constraints", () => {
    const res = WorkflowApprovalsPayloadValidator.validate({ version: 2 });
    expect(res.isValid).toBe(true);
  });

  test("enforces state machine transition rules", () => {
    expect(sm.canTransition("DRAFT", "PENDING_REVIEW")).toBe(true);
    expect(sm.canTransition("DRAFT", "SUSPENDED")).toBe(false);
  });
});
